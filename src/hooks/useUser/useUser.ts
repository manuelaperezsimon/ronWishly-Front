import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import {
  ProtoUser,
  RegisterUserData,
  User,
  UserToken,
} from "../../store/interfaces/usersInterfaces";
import {
  loginUsersActionCreator,
  logOutActionCreator,
} from "../../store/features/users/slices/usersSlice";
import { useAppDispatch } from "../../store/hooks";
import { PayloadAction } from "@reduxjs/toolkit";

export const apiURL = process.env.REACT_APP_API_URL;

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

const useUser = () => {
  const dispatch = useAppDispatch();

  const register = async (registerUserData: RegisterUserData) => {
    try {
      await axios.post(`${apiURL}users/register`, {
        userName: registerUserData.userName,
        password: registerUserData.password,
        repeatPassword: registerUserData.repeatPassword,
      });

      successModal("Great! You have been registered! :)");
      return true;
    } catch (error) {
      errorModal("Oops, something went wrong");
      return false;
    }
  };

  const login = async (userData: ProtoUser) => {
    try {
      const {
        data: { token },
      }: AxiosResponse<UserToken> = await axios.post(
        `${apiURL}users/login`,
        userData
      );

      if (token) {
        localStorage.setItem("token", token);

        const userInfo: User = { ...jwtDecode(token), token };

        dispatch(loginUsersActionCreator(userInfo));
        return true;
      }
    } catch (error: any) {
      errorModal("Oops! Something went wrong, try again...");
      return error.message;
    }
  };

  const logOut = () => {
    dispatch<PayloadAction>(logOutActionCreator());
    localStorage.removeItem("token");
  };

  return { register, login, logOut };
};
export default useUser;
