import React from 'react';
//import EntryPage from './EntryPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <form>
      <h2>Welcome Back!</h2>
      <fieldset>
        <legend>Log In</legend>
        <ul>
          <li>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" required />
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
          </li>
          <li>
            <i />
            <Link to="/forgotPassword">Forgot Password?</Link>
          </li>
        </ul>
      </fieldset>
      <button>Login</button>
      <button type="button">
        <Link to="/Register">Create an Account</Link>
      </button>
    </form>
  );
};

export default SignIn;
