import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import { routes } from '../routes';

const navList = [
  {
    path: '/',
    displayName: 'HOME',
  },
  {
    path: '/Contact',
    displayName: 'Contact Us',
  },
  {
    path: '/services',
    displayName: 'SERVICES',
  },
  {
    path: '/booking',
    displayName: 'BOOKING',
  },
];

const Navigation = () => {
  return (
    <>
      <List>
        {navList.map((item, index) => (
          <Link to={item.path}>
            <ListItem button key={index}>
              <ListItemText primary={item.displayName} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Navigation;
