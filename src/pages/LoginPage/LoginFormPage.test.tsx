import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import LoginFormPage from "./LoginFormPage";

describe("Given the LoginPage component", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Login' component", () => {
      const headingText = "Welcome back!";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginFormPage />
          </BrowserRouter>
        </Provider>
      );
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
