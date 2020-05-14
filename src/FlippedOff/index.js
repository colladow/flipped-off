import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Screen from 'components/Screen';
import Card from 'components/Card';
import Menu, { MenuItem, Primary, Hamburger } from './Menu';

import theme from './theme';

const FlippedOff = () => {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />

        <Hamburger onClick={() => setHideMenu(!hideMenu)} />

        <Menu hidden={hideMenu}>
          <Primary>Create New +</Primary>
          <MenuItem>Animals</MenuItem>
          <MenuItem>Math</MenuItem>
          <MenuItem>Spanish</MenuItem>
        </Menu>

        <Screen>
          <Card>Hola</Card>
          <Card>Manzana</Card>
        </Screen>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default FlippedOff;
