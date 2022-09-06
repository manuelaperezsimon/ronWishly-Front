import { IdWish, Wishes } from "../../../interfaces/wishesInterfaces";
import wishesSlice, {
  deleteWishActionCreator,
  loadAllWishesActionCreator,
} from "./wishesSlice";

describe("Given a wishes slice", () => {
  describe("When invoked with an initial state as previous wishes and a loadAllWishes with a fake list of wishes", () => {
    test("Then it should return the list with two wishes", () => {
      const initialState: Wishes = [];

      const fakeListWishes: Wishes = [
        {
          id: "1234",
          title: "Viajar",
          picture: "/wish.png",
          limitDate: new Date(),
          description: "Viajando por Rivadavia",
        },
        {
          id: "223298242",
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

describe("Given a deleteWishActionCreator function", () => {
  describe("When called with a wish id as a payload", () => {
    test("Then it should return an action with a type 'wishes/deleteWish' and said id as payload", () => {
      const fakeWish: IdWish = {
        id: "1234",
        title: "Viajar",
        picture: "/wish.png",
        limitDate: new Date(),
        description: "Viajando por Rivadavia",
      };

      const actionType = "wishes/deleteWish";
      const expectedAction = {
        type: actionType,
        payload: fakeWish.id,
      };

      const action = deleteWishActionCreator(expectedAction.payload);

      expect(action).toStrictEqual(expectedAction);
    });
  });
});
