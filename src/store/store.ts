import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "./features/users/slices/usersSlice";
import { wishesReducer } from "./features/wishes/slices/wishesSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    wishes: wishesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
