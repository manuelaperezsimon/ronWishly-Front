import { IdWish, Wishes } from "../../../interfaces/wishesInterfaces";
import wishesSlice, {
  createNewWishActionCreator,
  deleteWishActionCreator,
  loadAllWishesActionCreator,
  wishesReducer,
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
  const fakeWish: IdWish = {
    id: "1234",
    title: "Viajar",
    picture: "/wish.png",
    limitDate: new Date(),
    description: "Viajando por Rivadavia",
  };
  describe("When called with a wish id as a payload", () => {
    test("Then it should return an action with a type 'wishes/deleteWish' and said id as payload", () => {
      const actionType = "wishes/deleteWish";
      const expectedAction = {
        type: actionType,
        payload: fakeWish.id,
      };

      const action = deleteWishActionCreator(expectedAction.payload);

      expect(action).toStrictEqual(expectedAction);
    });
  });

  describe("When called with a deleteWish action", () => {
    test("Then it should remove the wish passed in the action from the state", () => {
      const initialState = [fakeWish] as Wishes;

      const expectedResult = [] as Wishes;

      const action = deleteWishActionCreator(fakeWish.id);

      const result = wishesReducer(initialState, action);

      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("When called with a createNewWish action", () => {
    test("Then it should return an action with a type 'wishes/createNewWish' and said wish as payload", () => {
      const initialState = [] as Wishes;

      const wishFake: IdWish = {
        id: "113224",
        title: "Holis",
        picture: "/tjth.png",
        limitDate: new Date(),
        description: "viajar",
      };

      const expectedResult = [wishFake] as Wishes;

      const actionFake = createNewWishActionCreator(wishFake);

      const result = wishesReducer(initialState, actionFake);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
