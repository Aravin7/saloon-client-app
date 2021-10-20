import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Header } from './Header';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { routes } from './routes';
import Home from './container/Home';
import Booking from './container/Booking';
import Contact from './container/Contact';
import Services from './container/Services';

//This would be the my app.js

export const Test = () => {
  return (
    <Router>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Box className={'nav'}>
          <List>
            {routes.map((item, index) => (
              <Link to={item.path}>
                <ListItem button key={index}>
                  <ListItemText primary={item.displayName} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
        {/* </Drawer> */}
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
