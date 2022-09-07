import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import LoginForm from "../Login/LoginForm";
import Protector from "./Protector";

let mockUserWithoutToken: string;

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockUserWithoutToken,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Protector component", () => {
  beforeEach(() => jest.clearAllMocks());
  describe("When it's invoked and the user not has a token", () => {
    test("Then it should call the navigate function", () => {
      mockUserWithoutToken = "";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Protector>
              <LoginForm />
            </Protector>
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When it's invoked and the user has a token", () => {
    test("Then it should call the navigate function", () => {
      mockUserWithoutToken = "1234345344";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Protector>
              <h1>Don't have any wishes?</h1>
            </Protector>
          </BrowserRouter>
        </Provider>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: "Don't have any wishes?",
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
