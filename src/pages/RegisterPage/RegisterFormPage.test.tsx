import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import RegisterFormPage from "./RegisterFormPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Register' component", () => {
      const headingText = "Welcome Onboard!";

      render(
        <Provider store={store}>
          <RegisterFormPage />
        </Provider>
      );
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
