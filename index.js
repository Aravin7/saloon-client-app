import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import { Test } from './Test';
import './main.css';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Test />
  </StyledEngineProvider>,
  document.querySelector('#root')
);
