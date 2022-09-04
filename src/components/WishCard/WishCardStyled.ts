import styled from "styled-components";

const WishCardStyled = styled.div`
  .wish-card__container {
    border-radius: 16px;
    width: 300px;
    height: 288px;
    background-color: ${(props) => props.theme.whiteColor};
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .wish-card__image {
    width: 250px;
    height: 200px;
    border-radius: 16px;
    margin-top: 20px;
  }

  .wish-card__title {
    display: grid;
    justify-content: center;
  }

  .icon {
    display: grid;
    justify-content: flex-end;
    margin-top: 15px;
  }
`;

export default WishCardStyled;
