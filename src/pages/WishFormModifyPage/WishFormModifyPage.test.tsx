import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import WishFormModifyPage from "./WishFormModifyPage";

const mockUseParams = jest.fn();
const mockUseAppSelector = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => mockUseParams(),
}));

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockUseAppSelector(),
}));

const mockUseApi = {
  getWishById: jest.fn().mockResolvedValue({
    id: "12234",
    title: "Hola",
    picture: "japon.jpg",
    limitDate: expect.any(Date),
    description: "caminando",
  }),
};
jest.mock("../../hooks/useApi/useApi", () => () => mockUseApi);

describe("Given a WishFormModifyPage component", () => {
  describe("When receives an id", () => {
    test("Then it should rendered the modify form component", () => {
      mockUseParams.mockReturnValue({ id: undefined });
      mockUseAppSelector.mockReturnValue([]);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <WishFormModifyPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedTextButton = "Modify wish";
      const button = screen.getByRole("button", {
        name: expectedTextButton,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
