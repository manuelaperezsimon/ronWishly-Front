import { Link } from "react-router-dom";
import { ButtonStyled } from "../../components/Button/ButtonStyled";
import LoginForm from "../../components/Login/LoginForm";
import LinkStyled from "./LoginPageStyled";

const LoginFormPage = (): JSX.Element => {
  return (
    <>
      <LoginForm />
      <LinkStyled className="login-text">
        <span className="login-text__text">
          Don't have an account? Sign Up{""}
          <Link to={"/register"}>
            <ButtonStyled className="login-text__register-link">
              here
            </ButtonStyled>
          </Link>
        </span>
      </LinkStyled>
    </>
  );
};
export default LoginFormPage;
