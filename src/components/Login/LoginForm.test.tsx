import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Wrapper from "../../utils/Wrapper";
import LoginForm from "./LoginForm";

let mockLogin = { login: jest.fn() };
jest.mock("../../hooks/useUser/useUser", () => () => mockLogin);

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Login Component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, two inputs, a button and a link", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const elementsInScreen = [
        screen.getByAltText("two circles yellows"),
        screen.getByAltText("ronWishly logo"),
        screen.getByText("Welcome back!"),
        screen.getByPlaceholderText("Enter your user name :)"),
        screen.getByPlaceholderText("Here your password"),
        screen.getByRole("button"),
      ];

      elementsInScreen.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });

    describe("When instantiated and the user writes in", () => {
      test("Then it should render a username with 'rodrigo' text and password inputs with the text '098765'", () => {
        const usernameFake = "rodrigo";
        const passwordFake = "098765";

        render(
          <Provider store={store}>
            <LoginForm />
          </Provider>
        );

        const formInputs = {
          userName: screen.getByLabelText("User Name:") as HTMLInputElement,
          password: screen.getByLabelText("Password:") as HTMLInputElement,
        };

        fireEvent.change(formInputs.userName, {
          target: { value: usernameFake },
        });
        fireEvent.change(formInputs.password, {
          target: { value: passwordFake },
        });

        expect(formInputs.userName.value).toBe(usernameFake);
        expect(formInputs.password.value).toBe(passwordFake);
      });

      test("Then it should call the mockLogin with the data user", async () => {
        const usernameFake = "rodrigo";
        const passwordFake = "098765";
        render(
          <Provider store={store}>
            <LoginForm />
          </Provider>
        );
        const form = {
          userName: screen.getByLabelText("User Name:") as HTMLInputElement,
          password: screen.getByLabelText("Password:") as HTMLInputElement,
        };

        fireEvent.change(form.userName, { target: { value: usernameFake } });
        fireEvent.change(form.password, { target: { value: passwordFake } });

        const submit = screen.getByRole("button", { name: "Sign In" });
        await userEvent.click(submit);
        const loginData = {
          userName: usernameFake,
          password: passwordFake,
        };

        expect(mockLogin.login).toHaveBeenCalledWith(loginData);
      });
    });
  });
});
