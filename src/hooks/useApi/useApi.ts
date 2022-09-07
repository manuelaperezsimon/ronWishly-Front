import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import {
  deleteWishActionCreator,
  loadAllWishesActionCreator,
} from "../../store/features/wishes/slices/wishesSlice";
import { useAppDispatch } from "../../store/hooks";

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

const apiURL = process.env.REACT_APP_API_URL;

const useApi = () => {
  const dispatch = useAppDispatch();

  const getAllWishes = useCallback(async (): Promise<void> => {
    const token = localStorage.getItem("token");
    const loadWishesUrl = `${apiURL}wishes`;

    try {
      const { data } = await axios.get(loadWishesUrl, {
        headers: { authorization: `Bearer ${token}` },
      });

      const wishesList = data.wishes;

      dispatch(loadAllWishesActionCreator(wishesList));

      return wishesList;
    } catch (error) {
      errorModal("Oops, something went wrong :(");
    }
  }, [dispatch]);

  const deleteWish = useCallback(
    async (wishId: string) => {
      const token = localStorage.getItem("token");
      const deleteWishesUrl = `${apiURL}wishes/`;

      try {
        await axios.delete(`${deleteWishesUrl}${wishId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(deleteWishActionCreator(wishId));
        successModal("Great! The wish has been deleted!");
      } catch (error) {
        errorModal("Oops, something went wrong :(");
      }
    },
    [dispatch]
  );

  return {
    getAllWishes,
    deleteWish,
  };
};

export default useApi;
