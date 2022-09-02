import Button from "../Button/Button";
import { LoginFormStyled } from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  return (
    <>
      <LoginFormStyled className="form" onSubmit={() => {}}>
        <img
          src="img/circles.png"
          alt="two circles yellows"
          className="circles__picture"
        />
        <img
          src="img/brand-logo.png"
          alt="ronWishly logo"
          className="logo__picture"
        />
        <h2 className="form__heading">Welcome back!</h2>
        <form action="" className="form-login" noValidate>
          <div className="form-login__group">
            <label htmlFor="userName" className="form__label">
              User Name:
            </label>
            <input
              type="text"
              id="userName"
              className="form__input input-userName"
              placeholder="Enter your user name :)"
              autoComplete="off"
              required
              value={""}
              onChange={() => {}}
            />
          </div>
          <div className="form-login__group">
            <label htmlFor="password" className="form__label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className={`form__input input-password ${""}`}
              placeholder="Here your password"
              autoComplete="off"
              required
              value={""}
              onChange={() => {}}
            />
          </div>

          <Button
            buttonText="Sign In"
            type="submit"
            classNameTypeButton="button--big"
            actionOnclick={() => {}}
            isDisable={true}
          />
        </form>{" "}
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
