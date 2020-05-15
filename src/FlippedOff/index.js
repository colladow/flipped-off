import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import data from 'data';

import GlobalStyles from './GlobalStyles';
import Menu, { MenuItem, Primary } from './Menu';
import Set from './Set';
import theme from './theme';

const FlippedOff = () => {
  const [hideMenu, setHideMenu] = useState(true);

  const toggleMenu = () => setHideMenu(!hideMenu);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />

        <Menu
          hidden={hideMenu}
          onHamburgerClick={toggleMenu}
        >
          <Primary>Create New +</Primary>
          {data.map(set => (
            <MenuItem key={set.name}>{set.name}</MenuItem>
          ))}
        </Menu>

        <Set onMenuClick={toggleMenu} />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default FlippedOff;
