import WishesListPage from "../../pages/WishesListPage/WishesListPage";
import { render, screen } from "@testing-library/react";
import Protector from "./Protector";
import Wrapper from "../../utils/Wrapper";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter } from "react-router-dom";

describe("Given a Protector component", () => {
  describe("When instantiated with another component as a child", () => {
    test("Then it should render the component if the user has a token", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Protector>
              <WishesListPage />
            </Protector>
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });

    test("Then it should not render the component if the user not has the token", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Protector>
              <WishesListPage />
            </Protector>
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");

      expect(button).not.toBeInTheDocument();
    });
  });
});
