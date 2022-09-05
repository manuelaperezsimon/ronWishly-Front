import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Wishes } from "../../store/interfaces/wishesInterfaces";
import Wrapper from "../../utils/Wrapper";
import WishesList from "./WishesList";

let mockLogout = { logOut: jest.fn() };
jest.mock("../../hooks/useUser/useUser", () => () => mockLogout);

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a WishList component", () => {
  describe("When instantiated without wishes", () => {
    test("Then it should show a '¿Don’t you have any wish yet?' text and a button with 'Create wish' as text", async () => {
      const wishesList: Wishes = [];

      render(<WishesList />, { wrapper: Wrapper });

      const buttonCreate = screen.getByRole("button", {
        name: "Create wish",
      });

      const headingText = screen.getByRole("heading", {
        name: "Don't you have any wish yet?",
      });

      expect(headingText).toBeInTheDocument();
      expect(buttonCreate).toBeInTheDocument();
      expect(wishesList).toHaveLength(0);
    });
  });

  describe("When instantiated with a list of two wishes", () => {
    test("Then it should show a title with 'Here are your wishes :)' as text, two wishes with a picture and a title and a button with 'Create wish' as text", async () => {
      const wishesList: Wishes = [
        {
          id: "1234",
          title: "Viaje a Japón",
          picture: "/wish.png",
          limitDate: new Date(),
          description: "Viajar en primavera",
        },
        {
          id: "223298242",
          title: "Navidad en NY",
          picture: "/NY.png",
          limitDate: new Date(),
          description: "Nieve nieve",
        },
      ];

      const filterDate = "2022-09-16";

      render(<WishesList />, { wrapper: Wrapper });

      const buttonCreate = screen.getByRole("button", {
        name: "Create wish",
      });

      const headingText = screen.getByRole("heading", {
        name: "Here are your wishes :)",
      });

      const dateInput = screen.getByLabelText(
        "Search by limit date:"
      ) as HTMLInputElement;

      await userEvent.type(dateInput, filterDate);

      expect(dateInput.value).toBe(filterDate);
      expect(headingText).toBeInTheDocument();
      expect(buttonCreate).toBeInTheDocument();
      expect(wishesList).toHaveLength(2);
    });
  });
  describe("When click on logOut icon", () => {
    test("Then it should call the logOut function", async () => {
      render(<WishesList />, { wrapper: Wrapper });

      const iconLogOut = screen.getByTestId("icon-logout");

      await userEvent.click(iconLogOut);

      expect(iconLogOut).toBeInTheDocument();

      await waitFor(() => {
        expect(mockLogout.logOut).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalled();
      });
    });
  });
});
