import { render, screen } from "@testing-library/react";
import PageNotFound from "../../components/NotFound/PageNotFound";
import Wrapper from "../../utils/Wrapper";
import PageNotFoundPage from "./PageNotFoundPage";

describe("Given the PageNotFound page", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'PageNotFound' component", () => {
      const textNotFound = "404: PAGE NOT FOUND";
      const textLink = "Go to Sign In!";

      render(<PageNotFoundPage />, { wrapper: Wrapper });

      const expectedText = screen.getByText(textNotFound);
      const expectedTextLink = screen.getByText(textLink);

      expect(expectedText).toBeInTheDocument();
      expect(expectedTextLink).toBeInTheDocument();
    });
  });
});
