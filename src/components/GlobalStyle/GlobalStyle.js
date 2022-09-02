import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: monospace;
  background-color: #eee;
  padding: 0.2rem;
}
`;

export default GlobalStyle;
