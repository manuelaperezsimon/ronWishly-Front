import { render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Register' component", () => {
      const headingText = "Welcome Onboard!";

      render(<RegisterPage />);
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
