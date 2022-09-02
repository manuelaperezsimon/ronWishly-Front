import { render, screen } from "@testing-library/react";
import RegisterFormPage from "./RegisterFormPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Register' component", () => {
      const headingText = "Welcome Onboard!";

      render(<RegisterFormPage />);
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
