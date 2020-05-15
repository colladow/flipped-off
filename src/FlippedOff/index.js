import React, { useState, useReducer, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

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
    <Router>
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

          <Switch>
            <Route path="/sets/:id">
              <Set
                sets={state.sets}
                onMenuClick={toggleMenu}
              />
            </Route>

            <Route path="/">
              <p>Hi</p>

              <p><Link to="/sets/0">Go to Set</Link></p>
            </Route>
          </Switch>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default FlippedOff;
