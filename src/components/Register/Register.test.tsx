import { render, screen } from "@testing-library/react";
import Register from "./Register";

describe("Given a form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, three inputs, a button and a link", () => {
      render(<Register />);

      const elementsInScreen = [
        screen.getByText("Welcome Onboard!"),
        screen.getByPlaceholderText("Create you user name :)"),
        screen.getByPlaceholderText("Put your password here!"),
        screen.getByPlaceholderText("Repeat your password"),
        screen.getByRole("button"),
        screen.getByText("Already have an account?"),
      ];

      elementsInScreen.forEach((element) =>
        expect(element).toBeInTheDocument()
      );
    });
  });
});
