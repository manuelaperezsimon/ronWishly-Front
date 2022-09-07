import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import ProtectorReverse from "./ProtectorReverse";
let mockNotHasToken: string;

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockNotHasToken,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a ProtectorReverse component", () => {
  beforeEach(() => jest.clearAllMocks());
  describe("When it's invoked and the user not has a token", () => {
    test("Then it should call the navigate function", () => {
      mockNotHasToken = "12345";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProtectorReverse>
              <h1>Welcome back!</h1>
            </ProtectorReverse>
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When it's invoked and the user has a token", () => {
    test("Then it should call the navigate function", () => {
      mockNotHasToken = "";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProtectorReverse>
              <h1>Here are your wishes!</h1>
            </ProtectorReverse>
          </BrowserRouter>
        </Provider>
      );

      const headingExpected = screen.getByRole("heading", {
        name: "Here are your wishes!",
      });

      expect(headingExpected).toBeInTheDocument();
    });
  });
});
