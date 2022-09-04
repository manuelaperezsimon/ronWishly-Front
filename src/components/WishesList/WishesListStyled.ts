import styled from "styled-components";

const WishesListStyled = styled.div`
  margin-top: 50px;

  .list__heading {
    display: grid;
    justify-content: center;
    position: relative;
    margin-bottom: 40px;
  }

  .filter {
    display: flex;
    justify-content: center;
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

  .circles__picture {
    position: absolute;
    top: 15px;
    left: 30px;
    width: 70px;
  }

  .filter__input {
    height: 60px;
    border-radius: 30px;
    padding: 15px;
    border: 1rem;
    font-size: 16px;
    font-family: inherit;
    width: 300px;
  }

  .button {
    /* position: fixed; */
  }
`;

export default WishesListStyled;
