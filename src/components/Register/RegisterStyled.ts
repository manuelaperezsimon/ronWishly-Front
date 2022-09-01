import styled from "styled-components";

const RegisterStyled = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 700px;
  background-color: ${(props) => props.theme.greyColor};
  font-size: 20px;

  h2 {
    margin: 0px;
  }

  .form-register {
    flex-direction: column;
    padding: 0;
    margin: 0 auto;
    gap: 1rem;
    width: fit-content;
    padding: 3rem;
  }

  .form-register__group {
    flex-direction: column;
    display: flex;
    width: 300px;
  }

  .form__label {
    margin-bottom: 10px;
    margin-left: 17px;
  }

  .form__input {
    height: 60px;
    border-radius: 30px;
    margin-bottom: 30px;
    padding: 15px;
    border: 1rem;
    font-size: 16px;
    font-family: inherit;
  }

  .form__input--wrong {
    border: solid red 1px;
  }
`;

export { RegisterStyled };
