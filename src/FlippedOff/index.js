import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Screen, { CardDisplay, Nav } from './Screen';

const FlippedOff = () => (
  <ThemeProvider theme={{}}>
    <React.Fragment>
      <GlobalStyles />

      <Screen>
        <CardDisplay>
          <h1>Current Card</h1>
        </CardDisplay>

        <Nav>
          <h1>Nav</h1>
        </Nav>
      </Screen>
    </React.Fragment>
  </ThemeProvider>
);

export default FlippedOff;
