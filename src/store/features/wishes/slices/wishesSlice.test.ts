import { Wishes } from "../../../interfaces/wishesInterfaces";
import wishesSlice, { loadAllWishesActionCreator } from "./wishesSlice";

describe("Given a wishes slice", () => {
  describe("When invoked with an initial state as previous wishes and a loadAllWishes with a fake list of wishes", () => {
    test("Then it should return the list with two wishes", () => {
      const initialState: Wishes = [];

      const fakeListWishes: Wishes = [
        {
          title: "Viajar",
          picture: "/wish.png",
          limitDate: new Date(),
          description: "Viajando por Rivadavia",
        },
        {
          title: "Paracaidismo",
          picture: "/wish.png",
          limitDate: new Date(),
          description: "Averiguar en Barcelona",
        },
      ];

      const wishes = wishesSlice(
        initialState,
        loadAllWishesActionCreator(fakeListWishes)
      );

      expect(wishes).toStrictEqual(fakeListWishes);
    });
  });
});
