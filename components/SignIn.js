import React from 'react';
import PropTypes from 'prop-types';

const SignIn = ({ handleAuth }) => (
  <div>
    <h1>SignIn</h1>
    <button onClick={handleAuth}>Sign In</button>
  </div>
);

SignIn.propTypes = {
  handleAuth: PropTypes.func.isRequired,
};

export default SignIn;
