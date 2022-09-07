import { SyntheticEvent, useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import { RegisterStyled } from "./RegisterFormStyled";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = (): JSX.Element => {
  const initialState = {
    userName: "",
    password: "",
    repeatPassword: "",
  };

  const { register } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [fieldStatus, setFieldStatus] = useState("");

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      setFieldStatus("form__input--wrong");

      setFormData({
        userName: formData.userName,
        password: initialState.password,
        repeatPassword: initialState.repeatPassword,
      });
    } else {
      const registerResult = await register(formData);

      if (registerResult) {
        navigate("/login");
      }
    }
  };

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldStatus("");
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const hasEmptyFields =
    formData.userName.length < 5 ||
    formData.password.length < 5 ||
    formData.repeatPassword.length < 5;

  return (
    <>
      <RegisterStyled className="form" onSubmit={onSubmitData}>
        <img
          src="img/circles.png"
          alt="two circles yellow"
          className="circles__picture"
          width={"200px"}
        />
        <h1>
          <img
            src="img/brand-logo.png"
            alt="ronWishly logo"
            className="logo__picture"
            width={"130px"}
          />
        </h1>
        <h2 className="form__heading">Welcome Onboard!</h2>
        <form action="" className="form-register" noValidate>
          <div className="form-register__group">
            <label htmlFor="userName" className="form__label">
              User Name:
            </label>
            <input
              type="text"
              id="userName"
              className="form__input input-userName"
              placeholder="Create you user name :)"
              autoComplete="off"
              required
              value={formData.userName}
              onChange={onChangeData}
            />
          </div>
          <div className="form-register__group">
            <label htmlFor="password" className="form__label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className={`form__input input-password ${fieldStatus}`}
              placeholder="Put your password here!"
              autoComplete="off"
              required
              value={formData.password}
              onChange={onChangeData}
            />
          </div>
          <div className="form-register__group">
            <label htmlFor="repeatPassword" className="form__label">
              Repeat password:
            </label>
            <input
              type="password"
              id="repeatPassword"
              className={`form__input input-repeat-password ${fieldStatus}`}
              placeholder="Repeat your password"
              autoComplete="off"
              required
              value={formData.repeatPassword}
              onChange={onChangeData}
            />
          </div>
          <Button
            buttonText="Register"
            type="submit"
            classNameTypeButton="button--big"
            actionOnclick={() => {}}
            isDisable={hasEmptyFields}
          />
        </form>{" "}
      </RegisterStyled>
    </>
  );
};

export default RegisterForm;
