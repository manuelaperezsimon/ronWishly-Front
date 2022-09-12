import styled from "styled-components";

const WishFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.greyColor};
  font-size: 20px;

  h2 {
    margin: 0px;
    margin-top: 80px;
  }

  .circles__picture {
    position: absolute;
    top: 15px;
    left: 30px;
  }

  .form-create {
    flex-direction: column;
    padding: 0;
    width: fit-content;
    padding: 3rem;
  }

  .form-create__group {
    flex-direction: column;
    display: flex;
    width: 300px;
  }

  .form__label {
    margin-bottom: 10px;
    margin-left: 17px;
  }

  .form-create__input {
    height: 60px;
    border-radius: 30px;
    margin-bottom: 45px;
    padding: 15px;
    border: 1rem;
    font-size: 16px;
    font-family: inherit;
  }

  .icon--close {
    font-size: 60px;
    display: grid;
    margin-top: 40px;
    margin-left: 250px;
  }

  .inputs-create__group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input[type="file" i] {
    background-color: white;
    text-align: center;
    padding-left: 20px;
    width: 302px;
    display: flex;
    align-items: center;
  }
`;

export default WishFormStyled;
