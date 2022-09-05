import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import WishesListPage from "./WishesListPage";

describe("Given the RegiterPage page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'Register' component", () => {
      const headingText = "Don't you have any wish yet?";

      render(<WishesListPage />, { wrapper: Wrapper });
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
