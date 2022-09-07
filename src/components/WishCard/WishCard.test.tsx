import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import WishCard from "./WishCard";

let mockDeleteWish = { deleteWish: jest.fn() };
jest.mock("../../hooks/useApi/useApi", () => () => mockDeleteWish);

describe("Given a WishCard component", () => {
  const wish = {
    id: "232464fe42536dd232",
    title: "Viajar a Japón",
    picture: "japon.png",
    limitDate: new Date(),
    description: "",
  };
  describe("When instantiated", () => {
    test("Then it should show a picture of Japan and a 'Viajar a Japón' title", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <WishCard key={wish.title} wish={wish} />
          </BrowserRouter>
        </Provider>
      );

      const titleOfWish = screen.getByRole("heading", {
        name: wish.title,
      });

      const pictureOfWish = screen.getByRole("img");

      expect(titleOfWish).toBeInTheDocument();
      expect(pictureOfWish).toBeInTheDocument();
      expect((pictureOfWish as HTMLImageElement).alt).toBe(wish.title);
    });
  });

  describe("When click on trash icon", () => {
    test("Then it should call the deleteWish function", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <WishCard key={wish.title} wish={wish} />
          </BrowserRouter>
        </Provider>
      );

      const iconTrash = screen.getByTestId("icon-trash");

      await userEvent.click(iconTrash);

      expect(iconTrash).toBeInTheDocument();

      await expect(mockDeleteWish.deleteWish).toHaveBeenCalled();
    });
  });
});
