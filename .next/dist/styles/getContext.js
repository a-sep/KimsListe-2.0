'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getContext;

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _jss = require('jss');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _styles = require('material-ui/styles');

var _blue = require('material-ui/colors/blue');

var _blue2 = _interopRequireDefault(_blue);

var _amber = require('material-ui/colors/amber');

var _amber2 = _interopRequireDefault(_amber);

var _createGenerateClassName = require('material-ui/styles/createGenerateClassName');

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak
/* eslint-disable no-underscore-dangle */

var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: _blue2.default,
    secondary: _amber2.default
  }
});

// Configure JSS
var jss = (0, _jss.create)((0, _jssPresetDefault2.default)());
jss.options.createGenerateClassName = _createGenerateClassName2.default;

function createContext() {
  return {
    jss: jss,
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new _map2.default(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new _jss.SheetsRegistry()
  };
}

function getContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createContext();
  }

  // Reuse context on the client-side
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcZ2V0Q29udGV4dC5qcyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJTaGVldHNSZWdpc3RyeSIsInByZXNldCIsImNyZWF0ZU11aVRoZW1lIiwiYmx1ZSIsImFtYmVyIiwiY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwianNzIiwib3B0aW9ucyIsImNyZWF0ZUNvbnRleHQiLCJzaGVldHNNYW5hZ2VyIiwic2hlZXRzUmVnaXN0cnkiLCJnZXRDb250ZXh0IiwicHJvY2VzcyIsImJyb3dzZXIiLCJnbG9iYWwiLCJfX0lOSVRfTUFURVJJQUxfVUlfXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxBQUFTLEFBQVE7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7O0FBUlA7QUFDQTs7QUFTQSxJQUFNOztBQUNLLEFBQ0UsQUFDVDtBQUhKLEFBQWMsQUFBZSxBQUNsQixBQUVJO0FBRkosQUFDUDtBQUZ5QixBQUMzQixDQURZOztBQU9kO0FBQ0EsSUFBTSxNQUFNLGlCQUFaLEFBQVksQUFBTztBQUNuQixJQUFBLEFBQUksUUFBSixBQUFZLEFBQTBCOztBQUV0QyxTQUFBLEFBQVMsZ0JBQWdCLEFBQ3ZCOztTQUFPLEFBRUw7V0FGSyxBQUdMO0FBQ0E7bUJBSkssQUFJVSxBQUNmO0FBQ0E7b0JBTkYsQUFBTyxBQU1XLEFBQUksQUFFdkI7QUFSUSxBQUNMO0FBU0o7O0FBQWUsU0FBQSxBQUFTLGFBQWEsQUFDbkM7QUFDQTtBQUNBO01BQUksQ0FBQyxRQUFMLEFBQWEsU0FBUyxBQUNwQjtXQUFBLEFBQU8sQUFDUjtBQUVEOztBQUNBO01BQUksQ0FBQyxPQUFMLEFBQVksc0JBQXNCLEFBQ2hDO1dBQUEsQUFBTyx1QkFBUCxBQUE4QixBQUMvQjtBQUVEOztTQUFPLE9BQVAsQUFBYyxBQUNmIiwiZmlsZSI6ImdldENvbnRleHQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYXJ0dXIucy9BdG9tX1Byb2plY3RzL0tpbXNMaXN0ZS0yLjAifQ==