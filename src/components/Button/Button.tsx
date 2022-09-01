import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  classNameTypeButton: string;
  actionOnclick: () => void;
  type: "submit" | "button";
  isDisable?: boolean;
}
const Button = ({
  buttonText,
  actionOnclick,
  classNameTypeButton,
  type,
  isDisable,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button
        className={classNameTypeButton}
        type={type}
        onClick={() => actionOnclick()}
        disabled={isDisable}
      >
        {buttonText}{" "}
      </button>
    </ButtonStyled>
  );
};

export default Button;
