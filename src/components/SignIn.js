import React from 'react';
import * as firebase from 'firebase';

const SignIn = ({ handleAuth }) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const authenticate = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(handleAuth)
      .catch(err => console.error(err));
  };
  return (
    <div>
      <h1>SIGN IN</h1>
      <button onClick={authenticate}>Sign In</button>
    </div>
  );
};

export default SignIn;
