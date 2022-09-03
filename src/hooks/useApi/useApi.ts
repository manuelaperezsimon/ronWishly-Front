import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { loadAllWishesActionCreator } from "../../store/features/wishes/slices/wishesSlice";
import { useAppDispatch } from "../../store/hooks";
import { Wishes } from "../../store/interfaces/wishesInterfaces";

const apiURL = process.env.REACT_APP_API_URL;

export const loadingModal = (loading: string) =>
  toast.loading(loading, {
    position: toast.POSITION.TOP_CENTER,
  });

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
      loadingModal("Please wait :)");
      const { data, status } = await axios.get(loadWishesUrl, {
        headers: { authorization: `Bearer ${token}` },
      });
      if (status === 200) {
        dispatch(loadAllWishesActionCreator(data));
      }
    } catch (error) {
      errorModal("Oops, something went wrong :(");
    }
  }, [dispatch]);

  return {
    getAllWishes,
  };
};

export default useApi;
