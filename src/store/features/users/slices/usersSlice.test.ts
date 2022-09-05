import { User } from "../../../interfaces/usersInterfaces";
import usersSlice, {
  loginUsersActionCreator,
  logOutActionCreator,
} from "./usersSlice";

describe("Given a user slice", () => {
  describe("When invoked with an initial state as previous user and a login user action creator with a fakeUser", () => {
    test("Then it should return the fakeUser", () => {
      const initialState: User = {
        id: "",
        token: "",
        userName: "",
      };
      const fakeUser: User = {
        id: "123456789HTMB",
        token: "sdfwefsdvdfew",
        userName: "soyfernando",
      };

      const user = usersSlice(initialState, loginUsersActionCreator(fakeUser));

      expect(user).toStrictEqual(fakeUser);
    });
  });

  describe("When invoked with a fakeUser and logOutActionCreator", () => {
    test("Then it should return a initial State", () => {
      const fakeUser: User = {
        id: "123456789HTMB",
        token: "grgergfcvfd",
        userName: "soyfernando",
      };

      const initialState: User = {
        id: "",
        token: "",
        userName: "",
      };

      const logOutUser = usersSlice(fakeUser, logOutActionCreator());

      expect(logOutUser).toStrictEqual(initialState);
    });
  });
});
