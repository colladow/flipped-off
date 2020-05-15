import React, { useState, useReducer, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import Menu from './Menu';
import Set from './Set';
import CreateSet from './Set/Create';
import theme from './theme';
import reducer, { initialState } from './reducer';
import { loadData } from './actions';

const FlippedOff = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [menuHidden, setMenuHidden] = useState(true);
  const toggleMenu = () => setMenuHidden(!menuHidden);

  useEffect(() => dispatch(loadData()), []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />

          <Menu
            sets={state.sets}
            hidden={menuHidden}
            onToggleMenu={toggleMenu}
          />

          <Switch>
            <Route path="/sets/create">
              <CreateSet sets={state.sets} dispatch={dispatch} />
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
