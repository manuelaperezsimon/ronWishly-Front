import { render, screen } from "@testing-library/react";
import LoginFormPage from "./LoginFormPage";

describe("Given the LoginPage component", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Loginr' component", () => {
      const headingText = "Welcome back!";

      render(<LoginFormPage />);
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
