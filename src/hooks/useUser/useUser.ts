import axios, { AxiosResponse } from "axios";
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
import decodeToken from "../../utils/decodeToken";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const login = async (userData: ProtoUser) => {
    try {
      const {
        data: { token },
      }: AxiosResponse<UserToken> = await axios.post(
        `${apiURL}users/login`,
        userData
      );

      const userInfo: User = decodeToken(token);

      dispatch(loginUsersActionCreator(userInfo));
      localStorage.setItem("token", token);
      navigate("/wishes");

      return true;
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
