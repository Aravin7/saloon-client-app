import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
// import ClippedDrawer from './demo';

import { Test } from './Test';
import './main.css';

import Dashboard from './container/authUser/Dashboard';

ReactDOM.render(
  <Router>
    <StyledEngineProvider injectFirst>
      <Test />
    </StyledEngineProvider>
  </Router>,
  document.querySelector('#root')
);
