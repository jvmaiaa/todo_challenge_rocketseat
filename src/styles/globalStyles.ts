import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* :focus{
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green_100};
  } */
`;