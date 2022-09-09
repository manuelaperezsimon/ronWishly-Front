import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import WishDetail from "./WishDetail";

let mockDeleteWish = { deleteWish: jest.fn() };
jest.mock("../../hooks/useApi/useApi", () => () => mockDeleteWish);

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a WishDetail component", () => {
  const wish = {
    id: "232464fe42536dd232",
    title: "Viajar a Japón",
    picture: "japon.png",
    limitDate: new Date(),
    description: "",
  };
  describe("When it's instantiated", () => {
    test("Then it should show a picture, a title, a limit date and a description", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <WishDetail key={wish.id} wish={wish} />
          </BrowserRouter>
        </Provider>
      );

      const buttonDelete = screen.getByRole("button", {
        name: "Delete",
      });

      const buttonModify = screen.getByRole("button", {
        name: "Modify",
      });

      const titleOfWish = screen.getByRole("heading", {
        name: wish.title,
      });

      expect(buttonDelete).toBeInTheDocument();
      expect(buttonModify).toBeInTheDocument();
      expect(titleOfWish).toBeInTheDocument();
    });
  });

  describe("When click on delete button", () => {
    test("Then it should call the deleteWish function", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <WishDetail key={wish.id} wish={wish} />
          </BrowserRouter>
        </Provider>
      );

      const buttonDelete = screen.getByRole("button", {
        name: "Delete",
      });

      await userEvent.click(buttonDelete);

      expect(buttonDelete).toBeInTheDocument();

      await expect(mockDeleteWish.deleteWish).toHaveBeenCalled();
    });
  });

  describe("When click on close icon", () => {
    test("Then the navigate function will be called", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <WishDetail key={wish.id} wish={wish} />
          </BrowserRouter>
        </Provider>
      );

      const iconClose = screen.getByTestId("icon-close");

      await userEvent.click(iconClose);

      expect(iconClose).toBeInTheDocument();
      await expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
