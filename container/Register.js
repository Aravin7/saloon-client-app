import React from 'react';
import SignIn from './SignIn';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// const changeView = () => {
//   return <SignIn />;
// };

const Register = () => (
  <form>
    <h2>Sign Up!</h2>
    <fieldset>
      <legend>Create Account</legend>
      <ul>
        <li>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required />
        </li>
        <li>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </li>
        <li>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </li>
        <li>
          <label htmlFor="telNo">Telephone NO:</label>
          <input type="tel" id="telNo" required />
        </li>
      </ul>
    </fieldset>
    <button>Submit</button>
    <button type="button">
      <Link to="/SignIn">Have an Account?</Link>
    </button>
  </form>
);

export default Register;
