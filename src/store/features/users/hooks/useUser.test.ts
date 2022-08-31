import { toast } from "react-toastify";
import { RegisterUserData } from "../../../interfaces/usersInterfaces";
import useUser from "./useUser";

jest.mock("react-toastify");

describe("Given a useUser hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should post a new user", async () => {
      const mockUser: RegisterUserData = {
        userName: "Federico",
        password: "vivaisdi",
        repeatPassword: "vivaisdi",
      };

      const { register } = useUser();
      await register(mockUser);

      expect(toast.success).toHaveBeenCalledWith(
        "Great! You have been registered! :)",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    });

    describe("When invoke register function with a mockUser without required properties", () => {
      test.only("Then it should send a modal error", async () => {
        const mockUser2: RegisterUserData = {
          userName: "Federico",
          password: "vivaisdi",
          repeatPassword: "",
        };

        const { register } = useUser();
        await register(mockUser2);

        expect(toast.error).toHaveBeenCalledWith("Ups, something went wrong", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    });
  });
});
