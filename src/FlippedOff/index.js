import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Screen, { CardDisplay, Nav } from './Screen';
import Hamburger from './Hamburger';
import Menu from './Menu';

const FlippedOff = () => {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <ThemeProvider theme={{}}>
      <React.Fragment>
        <GlobalStyles />

        <Hamburger onClick={() => setHideMenu(!hideMenu)} />

        <Screen>
          <CardDisplay>
            <h1>Current Card</h1>
          </CardDisplay>

          <Nav>
            <h1>Nav</h1>
          </Nav>
        </Screen>

        <Menu className={hideMenu && 'hidden'} />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default FlippedOff;
