import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html, body, #render {
    width: 100vw;
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
