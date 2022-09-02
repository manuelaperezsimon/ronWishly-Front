import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Wrapper from "../../utils/Wrapper";
import RegisterForm from "./RegisterForm";

const mockUser = jest.fn();

jest.mock("../../hooks/useUser", () => () => ({
  register: mockUser,
}));

describe("Given a form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, three inputs, a button and a link", () => {
      render(<RegisterForm />, { wrapper: Wrapper });

      const elementsInScreen = [
        screen.getByAltText("ronWishly logo"),
        screen.getByText("Welcome Onboard!"),
        screen.getByPlaceholderText("Create you user name :)"),
        screen.getByPlaceholderText("Put your password here!"),
        screen.getByPlaceholderText("Repeat your password"),
        screen.getByRole("button"),
      ];

      elementsInScreen.forEach((element) =>
        expect(element).toBeInTheDocument()
      );
    });
    describe("When a user fills every input", () => {
      test("Then all inputs should have what the users filled inside", async () => {
        const filledInput1 = "Maria";
        const filledInput2 = "1234";
        const filledInput3 = "1234";

        render(<RegisterForm />);

        const usernameInput = screen.getByLabelText(
          "User Name:"
        ) as HTMLInputElement;
        const passwordInput = screen.getByLabelText(
          "Password:"
        ) as HTMLInputElement;
        const repeatPasswordInput = screen.getByLabelText(
          "Repeat password:"
        ) as HTMLInputElement;

        await userEvent.type(usernameInput, filledInput1);
        await userEvent.type(passwordInput, filledInput2);
        await userEvent.type(repeatPasswordInput, filledInput3);

        expect(usernameInput.value).toBe(filledInput1);
        expect(passwordInput).toHaveValue(filledInput2);
        expect(repeatPasswordInput.value).toBe(filledInput3);
      });
    });

    describe("When all inputs are fullfiled and the user clicks on the submit button", () => {
      test("Then the register function will be called", async () => {
        const userNameInputFilled = "Mariaa";
        const passwordInputFilled = "12345";
        const repeatInputFilled = "12345";

        render(<RegisterForm />);

        const usernameInput = screen.getByLabelText(
          "User Name:"
        ) as HTMLInputElement;
        const passwordInput = screen.getByLabelText(
          "Password:"
        ) as HTMLInputElement;
        const repeatPasswordInput = screen.getByLabelText(
          "Repeat password:"
        ) as HTMLInputElement;

        const submitButton = screen.getByRole("button");

        await userEvent.type(usernameInput, userNameInputFilled);
        await userEvent.type(passwordInput, passwordInputFilled);
        await userEvent.type(repeatPasswordInput, repeatInputFilled);

        await userEvent.click(submitButton);

        expect(mockUser).toHaveBeenCalled();
      });

      describe("And the user type different passwords", () => {
        test("Then it shouldn't call the mockUser function", async () => {
          const fakeUserName = "Margarita";
          const fakePassword = "holaquetal";
          const repeatFakePassword = "chauadeu";

          render(<RegisterForm />);

          const form = {
            userName: screen.getByLabelText("User Name:") as HTMLInputElement,
            password: screen.getByLabelText("Password:") as HTMLInputElement,
            repeatPassword: screen.getByLabelText(
              "Repeat password:"
            ) as HTMLInputElement,
          };

          fireEvent.change(form.userName, { target: { value: fakeUserName } });
          fireEvent.change(form.password, { target: { value: fakePassword } });
          fireEvent.change(form.repeatPassword, {
            target: { value: repeatFakePassword },
          });
          const submit = screen.getByRole("button", { name: "Register" });
          await userEvent.click(submit);

          expect(mockUser).not.toHaveBeenCalled();
        });
      });
    });
  });
});
