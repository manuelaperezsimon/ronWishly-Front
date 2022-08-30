import Button from "../Button/Button";
import { RegisterStyled } from "./RegisterStyled";

const Register = (): JSX.Element => {
  return (
    <>
      <RegisterStyled>
        <h2>Welcome Onboard!</h2>
        <form action="" className="form-register">
          <div className="form-register__group">
            <label htmlFor="userName" className="form-register__label">
              User Name:
            </label>
            <input
              type="text"
              id="userName"
              className="form-register__input input-text"
              placeholder="Create you user name :)"
              value={""}
              onChange={() => {}}
              autoComplete="off"
              required
            />
          </div>
          <div className="form-register__group">
            <label htmlFor="password" className="form-register__label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-register__input input-password"
              placeholder="Put your password here!"
              value={""}
              onChange={() => {}}
              autoComplete="off"
              required
            />
          </div>
          <div className="form-register__group">
            <label htmlFor="repeatPassword" className="form-register__label">
              Repeat password:
            </label>
            <input
              type="password"
              id="repeatPassword"
              className="form-register__input input-repeat-password"
              placeholder="Repeat your password"
              value={""}
              onChange={() => {}}
              autoComplete="off"
              required
            />
          </div>
        </form>{" "}
        <Button
          type="submit"
          buttonText="Register"
          classNameTypeButton="button--big"
          actionOnclick={() => {}}
        />
        <div className="form-register__link">
          <span>Already have an account?</span>
          <a href="/">Sign In</a>
        </div>
      </RegisterStyled>
    </>
  );
};

export default Register;
