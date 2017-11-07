/* eslint-disable */
import Rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';

// fill in your config data here
const app = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
});

const db = database(app);
const base = Rebase.createClass(db);

export default base;
