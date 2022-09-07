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

describe("Given a App component", () => {
  describe("When it's instantiated", () => {
    test("Then it get the token to localStorage", () => {
      const mockToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
      window.localStorage.setItem("token", mockToken);

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
});
