import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IdWish } from "../../store/interfaces/wishesInterfaces";
import { store } from "../../store/store";
import Wrapper from "../../utils/Wrapper";
import WishDetailsPage from "./WishDetailPage";

const mockWish: IdWish = {
  id: "235v4546v4546",
  title: "Escalar el Aconcagua",
  picture: "",
  limitDate: new Date(),
  description: "",
};
const mockNavigate = jest.fn().mockReturnValue(mockWish.id);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: mockWish.id }),
  useNavigate: () => mockNavigate,
}));

const mockUseApi = {
  getWishById: jest.fn().mockResolvedValue(mockWish),
};

jest.mock("../../hooks/useApi/useApi", () => () => mockUseApi);

describe("Given a WishDetailsPage component", () => {
  describe("When it's instantiated", () => {
    test("Then should show 'WishDetail' component", async () => {
      render(<WishDetailsPage />, { wrapper: Wrapper });
      const expectedTextButton = "Modify";
      const button = screen.getByRole("button", { name: expectedTextButton });

      expect(button).toBeInTheDocument();
    });

    test("And it should call the useState function", () => {
      let mockUseState;
      act(() => {
        mockUseState = jest.spyOn(React, "useState");
      });
      render(
        <Provider store={store}>
          <BrowserRouter>
            <WishDetailsPage />
          </BrowserRouter>
        </Provider>
      );

      expect(mockUseState).toHaveBeenCalled();
    });
  });
});
