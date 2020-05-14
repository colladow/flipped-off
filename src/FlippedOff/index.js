import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Menu, { MenuItem, Primary } from './Menu';
import Set from './Set';

import theme from './theme';

const FlippedOff = () => {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />

        <Menu hidden={hideMenu}>
          <Primary>Create New +</Primary>
          <MenuItem>Animals</MenuItem>
          <MenuItem>Math</MenuItem>
          <MenuItem>Spanish</MenuItem>
        </Menu>

        <Set onMenuClick={() => setHideMenu(!hideMenu)} />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default FlippedOff;
