import { SyntheticEvent, useState } from "react";
import { ToastContainer } from "react-toastify";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import { LoginFormStyled } from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const initialState = {
    userName: "",
    password: "",
  };

  const { login } = useUser();
  const [formData, setFormData] = useState(initialState);

  const onSubmitData = (event: SyntheticEvent) => {
    event.preventDefault();
    login({
      userName: formData.userName,
      password: formData.password,
    });
  };

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const hasEmptyFields =
    formData.userName.length < 5 || formData.password.length < 5;

  return (
    <>
      <LoginFormStyled className="form" onSubmit={onSubmitData}>
        <ToastContainer />
        <img
          src="img/circles.png"
          alt="two circles yellows"
          className="circles__picture"
          width={"200px"}
        />
        <img
          src="img/brand-logo.png"
          alt="ronWishly logo"
          className="logo__picture"
          width={"130px"}
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
              className="form__input"
              placeholder="Enter your user name :)"
              autoComplete="off"
              required
              value={formData.userName}
              onChange={onChangeData}
            />
          </div>
          <div className="form-login__group">
            <label htmlFor="password" className="form__label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form__input input-password"
              placeholder="Here your password"
              autoComplete="off"
              required
              value={formData.password}
              onChange={onChangeData}
            />
          </div>

          <Button
            buttonText="Sign In"
            type="submit"
            classNameTypeButton="button--big"
            actionOnclick={() => {}}
            isDisable={hasEmptyFields}
          />
        </form>{" "}
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
