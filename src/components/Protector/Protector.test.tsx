import WishesListPage from "../../pages/WishesListPage/WishesListPage";
import { render, screen } from "@testing-library/react";
import Protector from "./Protector";
import Wrapper from "../../utils/Wrapper";

describe("Given a Protector component", () => {
  describe("When instantiated with another component as a child", () => {
    test("Then it should render the component if the user has a token", () => {
      render(
        <Protector>
          <WishesListPage />
        </Protector>,
        { wrapper: Wrapper }
      );

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });

    test("Then it should not render the component if the user not has the token", () => {
      render(
        <Protector>
          <WishesListPage />
        </Protector>,
        { wrapper: Wrapper }
      );

      const button = screen.getByRole("button");

      expect(button).not.toBeInTheDocument();
    });
  });
});
