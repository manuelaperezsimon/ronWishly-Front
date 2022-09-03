import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Wishes } from "../../../interfaces/wishesInterfaces";

const wishesInitialState: Wishes = [];

const wishesSlice = createSlice({
  name: "wishes",
  initialState: wishesInitialState,
  reducers: {
    loadAllWishes: (previousWishes, action: PayloadAction<Wishes>) => [
      ...action.payload,
    ],
  },
});

export const { reducer: wishesReducer } = wishesSlice;

export const { loadAllWishes: loadAllWishesActionCreator } =
  wishesSlice.actions;

export default wishesSlice.reducer;
