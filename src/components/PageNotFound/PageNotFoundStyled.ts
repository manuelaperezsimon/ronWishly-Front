import styled from "styled-components";

const PageNotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  margin-top: 50px;
  background-color: ${(props) => props.theme.greyColor};

  .not-found-warning__text__title {
    font-size: 20px;
  }
`;

export default PageNotFoundStyled;
