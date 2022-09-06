import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";
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
        <Provider store={store}>
          <Button
            buttonText=""
            classNameTypeButton=""
            actionOnclick={mockAction}
            type="submit"
          ></Button>
        </Provider>
      );

      const button = screen.getByRole("button", { name: "" });
      userEvent.click(button);

      expect(mockAction).toHaveBeenCalled();
    });
  });
});
