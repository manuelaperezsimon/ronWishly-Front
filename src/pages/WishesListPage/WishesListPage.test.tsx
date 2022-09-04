import { render, screen } from "@testing-library/react";

import Wrapper from "../../utils/Wrapper";
import WishesListPage from "./WishesListPage";

describe("Given the WishesList page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'WishesList' component", () => {
      const headingText = "Here your wishes :)";

      render(<WishesListPage />, { wrapper: Wrapper });
      const expectedText = screen.getByRole("heading", { name: headingText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
