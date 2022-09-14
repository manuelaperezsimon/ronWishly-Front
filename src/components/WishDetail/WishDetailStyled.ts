import styled from "styled-components";

const WishDetailStyled = styled.div`
  display: grid;
  justify-content: space-around;
  margin-bottom: 50px;

  .wish-detail__section {
    background-color: white;
    width: 380px;
    display: grid;
    align-items: center;
    justify-content: center;
    align-self: center;
    border-radius: 16px;
    padding: 25px;
  }

  .icon--close {
    align-self: center;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .icon--close {
    font-size: 70px;
  }

  .wish-detail__title {
    font-size: 20px;
  }

  .wish-detail__limit-date {
    font-size: 18px;
  }

  .wish-detail__image {
    border-radius: 16px;
    height: 230px;
    object-fit: cover;
  }

  .wish-detail-container__image {
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .wish-detail__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttons {
    display: flex;
    gap: 50px;
    justify-content: center;
    margin-bottom: 10px;
  }

  .wish-detail__description {
    margin: 25px 0px;
    text-align: center;
    padding: 0 5px;
  }
`;

export default WishDetailStyled;
