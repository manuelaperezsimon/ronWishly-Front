import styled from "styled-components";

const ButtonStyled = styled.div`
  .button {
    &--big {
      height: 70px;
      width: 300px;
      left: 33px;
      top: 611px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.yellowColor};
    }
  }
`;

export { ButtonStyled };
