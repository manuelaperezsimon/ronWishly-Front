import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a component Button", () => {
  describe("When it receives a 'Register' text", () => {
    test("Then it should show a text 'Register' inside", () => {
      const expectedButtonText = "Register";

      render(
        <Button
          buttonText="Register"
          classNameTypeButton=""
          actionOnclick={() => {}}
          type="submit"
        ></Button>
      );

      const resultedButtonText = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(resultedButtonText).toBeInTheDocument();
    });
  });

  describe("When it receives an action and the user clicks on it", () => {
    test("Then it should invoke a function on Click", () => {
      const mockAction = jest.fn();

      render(
        <Button
          buttonText=""
          classNameTypeButton=""
          actionOnclick={mockAction}
          type="submit"
        ></Button>
      );

      const button = screen.getByRole("button", { name: "" });
      userEvent.click(button);

      expect(mockAction).toHaveBeenCalled();
    });
  });
});
