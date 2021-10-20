import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <form>
      <h2>Reset Password</h2>
      <fieldset>
        <legend>Password Reset</legend>
        <ul>
          <li>
            <em>A reset link will be sent to your inbox!</em>
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </li>
        </ul>
      </fieldset>
      <button>Send Reset Link</button>
      <button type="button">
        <Link to="/SignIn">Go Back</Link>
      </button>
    </form>
  );
};

export default ForgotPassword;
