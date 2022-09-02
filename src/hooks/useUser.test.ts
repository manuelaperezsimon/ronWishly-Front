import { renderHook, waitFor } from "@testing-library/react";
import { toast } from "react-toastify";
import Wrapper from "../utils/Wrapper";
import {
  ProtoUser,
  RegisterUserData,
  User,
} from "../store/interfaces/usersInterfaces";
import useUser from "./useUser";

jest.mock("react-toastify");
const mockUseDispatch = jest.fn();

jest.mock("../store/hooks", () => ({
  ...jest.requireActual("../store/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

const mockJwtDecode = jest.fn();

describe("Given a useUser hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should post a new user", async () => {
      const mockUser: RegisterUserData = {
        userName: "Federico",
        password: "vivaisdi",
        repeatPassword: "vivaisdi",
      };

      const {
        result: {
          current: { register },
        },
      } = renderHook(useUser, { wrapper: Wrapper });
      await register(mockUser);

      expect(toast.success).toHaveBeenCalledWith(
        "Great! You have been registered! :)",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    });

    describe("When invoke register function with a mockUser without required properties", () => {
      test("Then it should send a modal error", async () => {
        const mockUser2: RegisterUserData = {
          userName: "Federico",
          password: "vivaisdi",
          repeatPassword: "",
        };

        const {
          result: {
            current: { register },
          },
        } = renderHook(useUser, { wrapper: Wrapper });

        await register(mockUser2);

        expect(toast.error).toHaveBeenCalledWith("Oops, something went wrong", {
          position: toast.POSITION.TOP_CENTER,
        });
      });

      describe("When login function is called with a User name and a password", () => {
        test("Then it should return a token", async () => {
          const mockUserTest: ProtoUser = {
            password: "cosasquepasan",
            userName: "mariogl",
          };

          const {
            result: {
              current: { login },
            },
          } = renderHook(useUser, { wrapper: Wrapper });

          await login(mockUserTest);

          const expectedResult = {
            payload: {
              id: "rgert4549jfe9e2nx9",
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJnZXJ0NDU0OWpmZTllMm54OSIsInVzZXJOYW1lIjoibWFyaW9nbCJ9.8Tv7Dnd5CrzjUSQ00fHc3HvdObTNJ5AA8sMymMSN0xg",
              userName: "mariogl",
            },
            type: "users/loginUser",
          };

          expect(mockUseDispatch).toHaveBeenCalledWith(expectedResult);
        });
      });

      describe("When login function is called with a User name or password not valid", () => {
        test("Then it should send a modal error", async () => {
          const mockUserTest: ProtoUser = {
            password: "cosasquepasan",
            userName: "",
          };

          const {
            result: {
              current: { login },
            },
          } = renderHook(useUser, { wrapper: Wrapper });

          await login(mockUserTest);

          expect(toast.error).toHaveBeenCalledWith(
            "Oops! Something went wrong, try again...",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        });
      });
    });
  });
});
