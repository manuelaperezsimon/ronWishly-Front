import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store/store";
import WishFormPage from "./WishFormCreatePage";

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

describe("Given a WishFormPage component", () => {
  describe("When not receives an id", () => {
    test("Then it should rendered the create component", () => {
      mockUseParams.mockReturnValue({ id: undefined });
      mockUseAppSelector.mockReturnValue([]);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <WishFormPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedTextButton = "Create wish";
      const button = screen.getByRole("button", {
        name: expectedTextButton,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
