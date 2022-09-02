import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given a Login Component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, two inputs, a button and a link", () => {
      render(<LoginForm />);

      const elementsInScreen = [
        screen.getByAltText("two circles yellows"),
        screen.getByAltText("ronWishly logo"),
        screen.getByText("Welcome back!"),
        screen.getByPlaceholderText("Enter your user name :)"),
        screen.getByPlaceholderText("Here your password"),
        screen.getByRole("button"),
      ];

      elementsInScreen.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
