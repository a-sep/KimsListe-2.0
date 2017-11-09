import React from 'react';
import PropTypes from 'prop-types';

const SignOut = ({ handleAuth }) => (
  <div>
    <h1>SignOut</h1>
    <button onClick={handleAuth}>Sign Out</button>
  </div>
);

SignOut.propTypes = {
  handleAuth: PropTypes.func.isRequired,
};

export default SignOut;
