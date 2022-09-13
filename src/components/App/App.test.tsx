import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import App from "./App";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a App component", () => {
  const mockLocalStorage = {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    length: 1,
    key: jest.fn(),
  };
  beforeAll(() => {
    window.localStorage = mockLocalStorage;
  });
  describe("When it's instantiated", () => {
    test("Then it get the token to localStorage", () => {
      const mockToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
      window.localStorage.setItem("token", mockToken);

      mockLocalStorage.getItem.mockReturnValue(mockToken);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />,
          </BrowserRouter>
        </Provider>
      );

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
  test("Then it get the token to localStorage", () => {
    window.localStorage.removeItem("token");

    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />,
        </BrowserRouter>
      </Provider>
    );

    expect(mockNavigate).toHaveBeenCalled();
  });
});
