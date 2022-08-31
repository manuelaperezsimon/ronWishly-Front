import axios from "axios";
import { toast } from "react-toastify";
import { RegisterUserData } from "../../../interfaces/usersInterfaces";

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
  const register = async (registerUserData: RegisterUserData) => {
    try {
      await axios.post(`${apiURL}users/register`, {
        userName: registerUserData.userName,
        password: registerUserData.password,
        repeatPassword: registerUserData.repeatPassword,
      });

      successModal("Great! You have been registered! :)");
    } catch (error) {
      errorModal("Ups, something went wrong");
    }
  };

  return { register };
};
export default useUser;
