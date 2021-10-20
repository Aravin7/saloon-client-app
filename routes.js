import * as React from 'react';
import Home from './container/Home';
import Booking from './container/Booking';
import Contact from './container/Contact';
import Services from './container/Services';
import Register from './container/Register';
import SignIn from './container/SignIn';
import ForgotPassword from './container/ForgotPassword';
import EntryPage from './container/EntryPage';

export const routes = [
  {
    path: '/',
    displayName: 'HOME',
    component: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: '/Contact',
    displayName: 'Contact US',
    component: (
      <div>
        <Contact />
      </div>
    ),
  },
  {
    path: '/services',
    displayName: 'SERVICES',
    component: (
      <div>
        <Services />
      </div>
    ),
  },
  {
    path: '/booking',
    displayName: 'BOOKING',
    component: (
      <div>
        <Booking />
      </div>
    ),
  },
  {
    path: '/Register',
    displayName: 'Register',
    component: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: '/signIn',
    displayName: 'Sign In',
    component: (
      <div>
        <SignIn />
      </div>
    ),
  },
  {
    path: '/EntryPage',
    displayName: 'EntryPage',
    component: (
      <div>
        <EntryPage />
      </div>
    ),
  },
  {
    path: '/forgotPassword',
    displayName: 'forgotPassword',
    component: (
      <div>
        <ForgotPassword />
      </div>
    ),
  },
];
