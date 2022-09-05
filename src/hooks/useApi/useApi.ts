import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { loadAllWishesActionCreator } from "../../store/features/wishes/slices/wishesSlice";
import { useAppDispatch } from "../../store/hooks";

const apiURL = process.env.REACT_APP_API_URL;

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

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

  return {
    getAllWishes,
  };
};

export default useApi;
