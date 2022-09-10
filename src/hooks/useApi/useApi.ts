import axios from "axios";
import { useCallback } from "react";

import { toast } from "react-toastify";
import {
  createNewWishActionCreator,
  deleteWishActionCreator,
  loadAllWishesActionCreator,
} from "../../store/features/wishes/slices/wishesSlice";
import { useAppDispatch } from "../../store/hooks";
import { IWish } from "../../store/interfaces/wishesInterfaces";

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

  const getWishById = useCallback(async (idWish: string) => {
    const token = localStorage.getItem("token");
    const getWishUrl = `${apiURL}wishes/`;

    try {
      const {
        data: { wish },
      } = await axios.get(`${getWishUrl}${idWish}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return wish;
    } catch (error) {
      errorModal("Cannot show details from this wish :(");
    }
  }, []);

  const createWish = useCallback(
    async (newWish: IWish) => {
      const token = localStorage.getItem("token");
      const createURL = `${apiURL}wishes/`;

      try {
        const {
          data: { newWish: wishCreated },
        } = await axios.post(`${createURL}`, newWish, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(createNewWishActionCreator(wishCreated));
        successModal("Wish created successfully!");
        return wishCreated;
      } catch (error) {
        errorModal("Cannot create the wish :(");
      }
    },
    [dispatch]
  );

  return {
    getAllWishes,
    deleteWish,
    getWishById,
    createWish,
  };
};

export default useApi;
