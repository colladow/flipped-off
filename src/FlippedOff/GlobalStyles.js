import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  html, body, #render {
    width: 100%;
    height: 100%;
    background-color: lavender;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
