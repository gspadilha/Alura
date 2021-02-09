import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --secondaryColor: #88989e;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const theme = {
  colors: {
    primary: "#0070f3",
  },
};
