import { Link } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/ButtonStyled";
import RegisterForm from "../../components/Register/RegisterForm";
import LinkStyledRegister from "./RegisterPageStyled";

const RegisterFormPage = (): JSX.Element => {
  return (
    <>
      <RegisterForm />
      <LinkStyledRegister className="register-text">
        <span className="register-text__text">
          Already have an account? Sign In
          <Link to={"/login"}>
            <ButtonStyled>here</ButtonStyled>
          </Link>
        </span>
      </LinkStyledRegister>
    </>
  );
};
export default RegisterFormPage;
