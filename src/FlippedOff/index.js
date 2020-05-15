import React, { useState, useReducer, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Menu, { MenuItem, Primary } from './Menu';
import Set from './Set';
import theme from './theme';
import reducer, { initialState } from './reducer';
import { loadData } from './actions';

const FlippedOff = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hideMenu, setHideMenu] = useState(true);

  const toggleMenu = () => setHideMenu(!hideMenu);

  useEffect(() => dispatch(loadData()), []);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />

        <Menu
          hidden={hideMenu}
          onHamburgerClick={toggleMenu}
        >
          <Primary>Create New +</Primary>
          {state.sets.map(set => (
            <MenuItem key={set.name}>{set.name}</MenuItem>
          ))}
        </Menu>

        <Set onMenuClick={toggleMenu} />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default FlippedOff;
