'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _wrapDisplayName = require('recompose/wrapDisplayName');

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _getContext = require('../styles/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\artur.s\\Atom_Projects\\KimsListe-2.0\\components\\withRoot.js';
/* eslint-disable flowtype/require-valid-file-annotation */

// Apply some reset
var styles = function styles(theme) {
  return {
    '@global': {
      html: {
        background: theme.palette.background.default,
        WebkitFontSmoothing: 'antialiased', // Antialiasing.
        MozOsxFontSmoothing: 'grayscale' // Antialiasing.
      },
      body: {
        margin: 0
      }
    }
  };
};

var AppWrapper = function AppWrapper(props) {
  return props.children;
};

AppWrapper = (0, _styles.withStyles)(styles)(AppWrapper);

function withRoot(BaseComponent) {
  var WithRoot = function (_Component) {
    (0, _inherits3.default)(WithRoot, _Component);

    function WithRoot() {
      (0, _classCallCheck3.default)(this, WithRoot);

      return (0, _possibleConstructorReturn3.default)(this, (WithRoot.__proto__ || (0, _getPrototypeOf2.default)(WithRoot)).apply(this, arguments));
    }

    (0, _createClass3.default)(WithRoot, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.styleContext = (0, _getContext2.default)();
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_styles.MuiThemeProvider, {
          theme: this.styleContext.theme,
          sheetsManager: this.styleContext.sheetsManager,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement(AppWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }))));
      }
    }], [{
      key: 'getInitialProps',
      value: function getInitialProps(ctx) {
        if (BaseComponent.getInitialProps) {
          return BaseComponent.getInitialProps(ctx);
        }

        return {};
      }
    }]);

    return WithRoot;
  }(_react.Component);

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = (0, _wrapDisplayName2.default)(BaseComponent, 'withRoot');
  }

  return WithRoot;
}

exports.default = withRoot;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHdpdGhSb290LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aFN0eWxlcyIsIk11aVRoZW1lUHJvdmlkZXIiLCJ3cmFwRGlzcGxheU5hbWUiLCJnZXRDb250ZXh0Iiwic3R5bGVzIiwiaHRtbCIsImJhY2tncm91bmQiLCJ0aGVtZSIsInBhbGV0dGUiLCJkZWZhdWx0IiwiV2Via2l0Rm9udFNtb290aGluZyIsIk1vek9zeEZvbnRTbW9vdGhpbmciLCJib2R5IiwibWFyZ2luIiwiQXBwV3JhcHBlciIsInByb3BzIiwiY2hpbGRyZW4iLCJ3aXRoUm9vdCIsIkJhc2VDb21wb25lbnQiLCJXaXRoUm9vdCIsInN0eWxlQ29udGV4dCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNoZWV0c01hbmFnZXIiLCJjdHgiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBWTs7QUFDckIsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7Ozs7QUFMdkI7O0FBT0E7QUFDQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7Ozs7b0JBR0csTUFBQSxBQUFNLFFBQU4sQUFBYyxXQUR0QixBQUNpQyxBQUNyQzs2QkFGSSxBQUVpQixlQUFlLEFBQ3BDOzZCQUhJLEFBR2lCLFlBSmQsQUFDSCxBQUc4QixBQUVwQztBQUxNLEFBQ0o7O2dCQUhTLEFBQVUsQUFDWixBQU1ILEFBQ0k7QUFESixBQUNKO0FBUE8sQUFDVDtBQUZxQixBQUN2QjtBQURGOztBQWFBLElBQUksYUFBYSwyQkFBQTtTQUFTLE1BQVQsQUFBZTtBQUFoQzs7QUFFQSxhQUFhLHdCQUFBLEFBQVcsUUFBeEIsQUFBYSxBQUFtQjs7QUFFaEMsU0FBQSxBQUFTLFNBQVQsQUFBa0IsZUFBZTtNQUFBLEFBQ3pCLGlDQUR5QjtzQ0FBQTs7d0JBQUE7MENBQUE7O3dJQUFBO0FBQUE7OztXQUFBOzJDQVVSLEFBQ25CO2FBQUEsQUFBSyxlQUFMLEFBQW9CLEFBQ3JCO0FBWjRCO0FBQUE7V0FBQTswQ0FjVCxBQUNsQjtBQUNBO1lBQU0sWUFBWSxTQUFBLEFBQVMsY0FBM0IsQUFBa0IsQUFBdUIsQUFDekM7WUFBSSxhQUFhLFVBQWpCLEFBQTJCLFlBQVksQUFDckM7b0JBQUEsQUFBVSxXQUFWLEFBQXFCLFlBQXJCLEFBQWlDLEFBQ2xDO0FBQ0Y7QUFwQjRCO0FBQUE7V0FBQTsrQkFzQnBCLEFBQ1A7K0JBQ0UsQUFBQztpQkFDUSxLQUFBLEFBQUssYUFEZCxBQUMyQixBQUN6Qjt5QkFBZSxLQUFBLEFBQUssYUFGdEIsQUFFbUM7O3NCQUZuQzt3QkFBQSxBQUlFO0FBSkY7QUFDRSxTQURGLGtCQUlHLGNBQUQ7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLHlDQUNFLEFBQUMsMENBQWtCLEtBQW5CLEFBQXdCOztzQkFBeEI7d0JBTk4sQUFDRSxBQUlFLEFBQ0UsQUFJUDtBQUpPO0FBQUE7QUE3QnFCO0FBQUE7V0FBQTtzQ0FBQSxBQUVOLEtBQUssQUFDMUI7WUFBSSxjQUFKLEFBQWtCLGlCQUFpQixBQUNqQztpQkFBTyxjQUFBLEFBQWMsZ0JBQXJCLEFBQU8sQUFBOEIsQUFDdEM7QUFFRDs7ZUFBQSxBQUFPLEFBQ1I7QUFSNEI7QUFBQTs7V0FBQTtBQUFBLEFBQ1IsQUFtQ3ZCOztNQUFJLFFBQUEsQUFBUSxJQUFSLEFBQVksYUFBaEIsQUFBNkIsY0FBYyxBQUN6QzthQUFBLEFBQVMsY0FBYywrQkFBQSxBQUFnQixlQUF2QyxBQUF1QixBQUErQixBQUN2RDtBQUVEOztTQUFBLEFBQU8sQUFDUjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndpdGhSb290LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2FydHVyLnMvQXRvbV9Qcm9qZWN0cy9LaW1zTGlzdGUtMi4wIn0=