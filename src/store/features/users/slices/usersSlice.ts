import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interfaces/usersInterfaces";

const usersInitialState: User = {
  id: "",
  token: "",
  userName: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loginUser: (previousUsers, action: PayloadAction<User>) => action.payload,
  },
});

export const { reducer: userReducer } = usersSlice;

export const { loginUser: loginUsersActionCreator } = usersSlice.actions;
export default usersSlice.reducer;
