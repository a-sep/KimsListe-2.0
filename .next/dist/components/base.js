'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = exports.googleProvider = undefined;

var _reBase = require('re-base');

var _reBase2 = _interopRequireDefault(_reBase);

var _database = require('firebase/database');

var _database2 = _interopRequireDefault(_database);

var _app = require('firebase/app');

var _app2 = _interopRequireDefault(_app);

require('firebase/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
var config = {
  apiKey: 'AIzaSyC_m6VaHDvrIRr3IlDPoMTKPZYE64NEGkw',
  authDomain: 'kimsliste-ccf6a.firebaseapp.com',
  databaseURL: 'https://kimsliste-ccf6a.firebaseio.com',
  projectId: 'kimsliste-ccf6a',
  storageBucket: 'kimsliste-ccf6a.appspot.com',
  messagingSenderId: '404181812683'
};
// import 'firebase/database';

//import firebase from 'firebase';


var app = !_app2.default.apps.length ? _app2.default.initializeApp(config) : _app2.default.app();
var db = _app2.default.database(app);

// 'name export' - to import those in other file type: import {auth, googleProvider} from ''
var googleProvider = exports.googleProvider = new _app2.default.auth.GoogleAuthProvider();
var auth = exports.auth = app.auth();

var base = _reBase2.default.createClass(db);
exports.default = base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJhc2UuanMiXSwibmFtZXMiOlsiUmViYXNlIiwiZGF0YWJhc2UiLCJmaXJlYmFzZSIsImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZGIiLCJnb29nbGVQcm92aWRlciIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJiYXNlIiwiY3JlYXRlQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUDs7OztBQU5BO0FBUUEsSUFBTTtVQUFTLEFBQ0wsQUFDUjtjQUZhLEFBRUQsQUFDWjtlQUhhLEFBR0EsQUFDYjthQUphLEFBSUYsQUFDWDtpQkFMYSxBQUtFLEFBQ2Y7cUJBTkYsQUFBZSxBQU1NO0FBTk4sQUFDYjtBQUpGOztBQUhBOzs7QUFlQSxJQUFNLE1BQU0sQ0FBQyxjQUFBLEFBQVMsS0FBVixBQUFlLFNBQVMsY0FBQSxBQUFTLGNBQWpDLEFBQXdCLEFBQXVCLFVBQVUsY0FBckUsQUFBcUUsQUFBUztBQUM5RSxJQUFNLEtBQUssY0FBQSxBQUFTLFNBQXBCLEFBQVcsQUFBa0I7O0FBRTdCLEFBQ0E7QUFBTyxJQUFNLDBDQUFpQixJQUFJLGNBQUEsQUFBUyxLQUFwQyxBQUF1QixBQUFrQixBQUNoRDtBQUFPLElBQU0sc0JBQU8sSUFBYixBQUFhLEFBQUk7O0FBRXhCLElBQU0sT0FBTyxpQkFBQSxBQUFPLFlBQXBCLEFBQWEsQUFBbUIsQUFDaEM7a0JBQUEsQUFBZSIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2FydHVyLnMvQXRvbV9Qcm9qZWN0cy9LaW1zTGlzdGUtMi4wIn0=