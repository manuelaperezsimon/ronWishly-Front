import styled from "styled-components";

const ButtonStyled = styled.div`
  color: ${(props) => props.theme.yellowColor};
  text-decoration: none;
  display: flex;
  justify-content: center;

  .button {
    &--big {
      height: 70px;
      width: 300px;
      left: 33px;
      top: 611px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.yellowColor};
      font-size: 20px;
      font-family: "Poppins", sans-serif;
    }

    &--small {
      height: 70px;
      width: 150px;
      left: 33px;
      top: 611px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.yellowColor};
      font-size: 20px;
      font-family: "Poppins", sans-serif;
    }
  }
`;

export { ButtonStyled };
