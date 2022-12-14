import styled from "styled-components";

const WishesListStyled = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;

  .circles__picture--big {
    position: absolute;
    top: -75px;
    left: -50px;
  }

  .list__heading {
    display: grid;
    justify-content: center;
    position: relative;
    margin-bottom: 50px;
    margin-top: 60px;
  }

  .filter__group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .list-wishes {
    display: grid;
    padding: 0;
    justify-content: center;
    gap: 30px;
  }

  .list__item {
    list-style: none;
  }

  .circles__picture--small {
    position: absolute;
    top: 15px;
    left: 30px;
  }

  .filter {
    display: flex;
  }

  .filter__input {
    height: 60px;
    border-radius: 30px;
    padding: 15px;
    border: 1rem;
    font-size: 16px;
    font-family: inherit;
    width: 300px;
    margin-bottom: 20px;
    margin-left: 50px;
  }

  .icon--close {
    align-self: center;
    margin-left: 10px;
    font-size: 40px;
    margin-bottom: 20px;
    visibility: hidden;
  }

  .icon--close.icon-close__open {
    visibility: visible;
  }

  .container__button {
    position: fixed;
    bottom: 0px;
    align-items: center;
    width: 100%;
  }

  .container {
    margin-top: 100px;
  }

  .icon__logout {
    display: grid;
    margin-right: 40px;
    justify-content: end;
    font-size: 30px;
  }

  .filter__label {
    margin-bottom: 10px;
    align-self: start;
    display: flex;
    align-self: center;
  }

  .button--big {
    margin-bottom: 15px;
  }

  .wishcard__details {
    text-decoration: none;
    color: ${(props) => props.theme.blackColor};
  }
`;

export default WishesListStyled;
