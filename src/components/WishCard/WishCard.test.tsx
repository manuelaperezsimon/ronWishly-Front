import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import WishCard from "./WishCard";

describe("Given a WishCard component", () => {
  describe("When instantiated", () => {
    test("Then it should show a picture of Japan and a 'Viajar a Japón' title", () => {
      const wish = {
        id: "",
        title: "Viajar a Japón",
        picture: "japon.png",
        limitDate: new Date(),
        description: "",
      };

      render(
        <BrowserRouter>
          <WishCard key={wish.title} wish={wish} />
        </BrowserRouter>
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
});
