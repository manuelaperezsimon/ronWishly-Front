import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import {
  ProtoUser,
  RegisterUserData,
  User,
  UserToken,
} from "../store/interfaces/usersInterfaces";
import { loginUsersActionCreator } from "../store/features/users/slices/usersSlice";
import { useAppDispatch } from "../store/hooks";

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
    } catch (error) {
      errorModal("Oops, something went wrong");
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

        const userInfo: User = jwtDecode(token);
        dispatch(loginUsersActionCreator(userInfo));
      }
    } catch (error: any) {
      errorModal("Oops! Something went wrong, try again...");
      return error.message;
    }
  };

  return { register, login };
};
export default useUser;
