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
import CreateSet from './Set/Create';
import theme from './theme';
import reducer, { initialState } from './reducer';
import { loadData } from './actions';

const FlippedOff = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hideMenu, setHideMenu] = useState(true);

  const toggleMenu = () => setHideMenu(!hideMenu);

  useEffect(() => dispatch(loadData()), []);

  // TODO: move Menu contents to the Menu directory
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />

          <Menu
            hidden={hideMenu}
            onHamburgerClick={toggleMenu}
          >
            <Primary>
              <Link to="/sets/create" onClick={toggleMenu}>Create New +</Link>
            </Primary>
            {state.sets.map(set => (
              <MenuItem key={set.name}>{set.name}</MenuItem>
            ))}
          </Menu>

          <Switch>
            <Route path="/sets/create">
              <CreateSet dispatch={dispatch} />
            </Route>

            <Route path="/sets/:id">
              <Set
                sets={state.sets}
                onMenuClick={toggleMenu}
              />
            </Route>

            <Route path="/">
              <p>Hi</p>

              <p><Link to="/sets/0">Go to Set</Link></p>
              <p><Link to="/sets/create">Create a Set</Link></p>
            </Route>
          </Switch>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default FlippedOff;
