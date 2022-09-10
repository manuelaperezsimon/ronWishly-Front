import styled from "styled-components";

const WishFormStyled = styled.div`
  display: grid;
  justify-items: center;
  background-color: ${(props) => props.theme.greyColor};
  font-size: 20px;

  h2 {
    margin: 0px;
    margin-top: 80px;
  }

  .circles__picture {
    /* position: absolute;
    top: -75px;
    left: -50px; */
  }

  .form {
    flex-direction: column;
    padding: 0;
    margin: 0 auto;
    gap: 1rem;
    width: fit-content;
    padding: 3rem;
  }

  .form__group {
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
    margin-bottom: 45px;
    padding: 15px;
    border: 1rem;
    font-size: 16px;
    font-family: inherit;
  }

  .icon--close {
    font-size: 18px;
  }
`;

export default WishFormStyled;
