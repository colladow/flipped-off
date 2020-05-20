import React, { useReducer, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import Set from './Set';
import Home from './Home';
import CreateSet from './Set/Create';
import EditSet from './Set/Edit';
import theme from './theme';
import reducer, { initialState } from './reducer';
import { loadData } from './actions';

const FlippedOff = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { sets } = state;

  useEffect(() => dispatch(loadData()), []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />

          <Switch>
            <Route path="/sets/create">
              <CreateSet sets={sets} dispatch={dispatch} />
            </Route>

            <Route path="/sets/:id/edit">
              <EditSet sets={sets} dispatch={dispatch} />
            </Route>

            <Route path="/sets/:id">
              <Set sets={sets} />
            </Route>

            <Route path="/">
              <Home sets={sets} />
            </Route>
          </Switch>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default FlippedOff;
