import React, { useState } from 'react';
import SignIn from './SignIn';
import Register from './Register';

const EntryPage = () => {
  // const [view, setView] = useState('SignIn');

  // // changeView = (e) => {
  // //   e.preventDefault();
  // //   setView(e);
  // // };
  // //console.log(view);

  // switch (view) {
  //   case 'SignIn':
  //     return <SignIn view={view} />;
  //   case 'Register':
  //     return <Register />;
  // }
  return <SignIn />;
};

export default EntryPage;
