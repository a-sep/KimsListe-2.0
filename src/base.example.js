import Rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';

const app = firebase.initializeApp({
  // fill in your Firebase config data
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
});

const db = database(app);
export default Rebase.createClass(db);
