import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IdWish } from "../../store/interfaces/wishesInterfaces";
import { store } from "../../store/store";
import WishFormModify from "./WishFormModify";

beforeEach(() => jest.restoreAllMocks());

const mockModfyWish = jest.fn();

jest.mock("../../hooks/useApi/useApi", () => () => ({
  modifyWish: mockModfyWish,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a WishFormModify component", () => {
  const wish: IdWish = {
    id: "1234",
    title: "Viajar",
    limitDate: new Date(),
    description: "hola",
    picture: "",
  };
  describe("When it's instantiated", () => {
    test("Then it should show a title, four inputs and a button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <WishFormModify wish={wish} />
          </BrowserRouter>
        </Provider>
      );

      const elementsInScreen = [
        screen.getByPlaceholderText("THE title for your wish:)"),
        screen.getByPlaceholderText("In a picture, your fantasy!"),
        screen.getByPlaceholderText("Put a limit date"),
        screen.getByPlaceholderText("Describe your adventure"),
        screen.getByRole("button"),
      ];

      elementsInScreen.forEach((element) =>
        expect(element).toBeInTheDocument()
      );
    });

    test("Then if the user sets a file, it should be appended to the form data", async () => {
      const useState = jest.spyOn(React, "useState");

      const file = new File(["file"], "");

      render(
        <Provider store={store}>
          <BrowserRouter>
            <WishFormModify wish={wish} />
          </BrowserRouter>
        </Provider>
      );

      const inputFile = screen.getByPlaceholderText(
        "In a picture, your fantasy!"
      ) as HTMLInputElement;

      await userEvent.upload(inputFile, file);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });

    test("If the user submits, the default action of submit should be prevented", async () => {
      mockModfyWish.mockResolvedValue(true);

      const titleInput = "Volar";
      const pictureInput = "japon.png";
      const limitDateInput = "2022/09/09";
      const descriptionInput = "volaremos por el cielo";

      render(
        <Provider store={store}>
          <WishFormModify wish={wish} />
        </Provider>
      );

      const title = screen.getByPlaceholderText(
        "THE title for your wish:)"
      ) as HTMLInputElement;
      const picture = screen.getByPlaceholderText(
        "In a picture, your fantasy!"
      ) as HTMLInputElement;
      const limitDate = screen.getByPlaceholderText(
        "Put a limit date"
      ) as HTMLInputElement;
      const description = screen.getByPlaceholderText(
        "Describe your adventure"
      ) as HTMLInputElement;

      await userEvent.type(title, titleInput);
      await userEvent.upload(picture, new File(["asd"], pictureInput));
      await fireEvent.input(limitDate, limitDateInput);
      await userEvent.type(description, descriptionInput);

      const submitButton = screen.getByRole("button");

      await userEvent.click(submitButton);

      expect(mockModfyWish).toHaveBeenCalled();
    });
  });

  describe("When click on close icon", () => {
    test("Then it should call the navigateToWishLis function", async () => {
      render(
        <Provider store={store}>
          <WishFormModify wish={wish} />
        </Provider>
      );

      const iconClose = screen.getByTestId("icon-close");

      await userEvent.click(iconClose);

      expect(iconClose).toBeInTheDocument();

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
