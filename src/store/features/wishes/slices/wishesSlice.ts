import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IdWish, Wishes } from "../../../interfaces/wishesInterfaces";

const wishesInitialState: Wishes = [];

const wishesSlice = createSlice({
  name: "wishes",
  initialState: wishesInitialState,
  reducers: {
    loadAllWishes: (previousWishes, action: PayloadAction<Wishes>) => [
      ...action.payload,
    ],
    createNewWish: (previousState, action: PayloadAction<IdWish>) => [
      ...previousState,
      action.payload,
    ],
    deleteWish: (previousState, action: PayloadAction<string>) =>
      previousState.filter((wish) => wish.id !== action.payload),
  },
});

export const { reducer: wishesReducer } = wishesSlice;

export const {
  loadAllWishes: loadAllWishesActionCreator,
  deleteWish: deleteWishActionCreator,
  createNewWish: createNewWishActionCreator,
} = wishesSlice.actions;

export default wishesSlice.reducer;
