import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonText: string;
  classNameTypeButton: string;
  actionOnclick: () => void;
  type: "submit" | "button";
}
const Button = ({
  buttonText,
  actionOnclick,
  classNameTypeButton,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button
        className={classNameTypeButton}
        type={type}
        onClick={() => actionOnclick()}
      >
        {buttonText}{" "}
      </button>
    </ButtonStyled>
  );
};

export default Button;
