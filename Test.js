import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Header } from './Header';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from './routes';
import Navigation from './container/Navigation';
import Home from './container/Home';
import Booking from './container/authUser/Booking';
import Contact from './container/Contact';
import Services from './container/Services';

//This would be the my app.js

export const Test = () => {
  return (
    <Router>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Box className={'nav'}>
          <Navigation />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Switch>
            {routes.map((item, index) => {
              return (
                <Route exact key={index} path={item.path}>
                  {item.component}
                </Route>
              );
            })}
          </Switch>
        </Box>
      </Box>
    </Router>
  );
};
