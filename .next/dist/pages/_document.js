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

var _document = require('next\\dist\\server\\document.js');

var _document2 = _interopRequireDefault(_document);

var _JssProvider = require('react-jss/lib/JssProvider');

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _getContext = require('../styles/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\artur.s\\Atom_Projects\\KimsListe-2.0\\pages\\_document.js?entry';
//  weak

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', { lang: 'en', dir: 'ltr', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'My page'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'user-scalable=0, initial-scale=1, ' + 'minimum-scale=1, width=device-width, height=device-height',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.json', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('meta', { name: 'theme-color', content: this.props.stylesContext.theme.palette.primary[500], __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })));
    }
  }]);

  return MyDocument;
}(_document2.default);

MyDocument.getInitialProps = function (ctx) {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context to collected side effects.
  var context = (0, _getContext2.default)();
  var page = ctx.renderPage(function (Component) {
    return function (props) {
      return _react2.default.createElement(_JssProvider2.default, { registry: context.sheetsRegistry, jss: context.jss, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(Component, (0, _extends3.default)({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })));
    };
  });

  return (0, _extends3.default)({}, page, {
    stylesContext: context,
    styles: _react2.default.createElement('style', {
      id: 'jss-server-side'
      // eslint-disable-next-line react/no-danger
      , dangerouslySetInnerHTML: { __html: context.sheetsRegistry.toString() },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      }
    })
  });
};

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIkpzc1Byb3ZpZGVyIiwiZ2V0Q29udGV4dCIsIk15RG9jdW1lbnQiLCJwcm9wcyIsInN0eWxlc0NvbnRleHQiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInBhZ2UiLCJjdHgiLCJyZW5kZXJQYWdlIiwic2hlZXRzUmVnaXN0cnkiLCJqc3MiLCJzdHlsZXMiLCJfX2h0bWwiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7Ozs7QUFMdkI7O0lBT00sQTs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDs2QkFDRSxjQUFBLFVBQU0sTUFBTixBQUFXLE1BQUssS0FBaEIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxvREFBTSxTQUFOLEFBQWM7b0JBQWQ7c0JBRkYsQUFFRSxBQUVBO0FBRkE7O2NBRUEsQUFDTyxBQUNMO2lCQUNFLHVDQUhKLEFBSUk7O29CQUpKO3NCQUpGLEFBSUUsQUFXQTtBQVhBO0FBQ0Usa0RBVUksS0FBTixBQUFVLFlBQVcsTUFBckIsQUFBMEI7b0JBQTFCO3NCQWZGLEFBZUUsQUFFQTtBQUZBO2tEQUVNLE1BQU4sQUFBVyxlQUFjLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLE1BQXpCLEFBQStCLFFBQS9CLEFBQXVDLFFBQXpFLEFBQWtDLEFBQStDO29CQUFqRjtzQkFqQkYsQUFpQkUsQUFDQTtBQURBOzthQUNBLEFBQ00sQUFDSjtjQUZGLEFBRU87O29CQUZQO3NCQW5CSixBQUNFLEFBa0JFLEFBS0Y7QUFMRTtBQUNFLDJCQUlKLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBM0JOLEFBQ0UsQUF3QkUsQUFFRSxBQUlQO0FBSk87QUFBQTs7Ozs7QUE3QmUsQTs7QUFvQ3pCLFdBQUEsQUFBVyxrQkFBa0IsZUFBTyxBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO01BQU0sVUFBTixBQUFnQixBQUNoQjtNQUFNLFdBQU8sQUFBSSxXQUFXLHFCQUFBO1dBQWEsaUJBQUE7NkJBQ3ZDLEFBQUMsdUNBQVksVUFBVSxRQUF2QixBQUErQixnQkFBZ0IsS0FBSyxRQUFwRCxBQUE0RDtvQkFBNUQ7c0JBQUEsQUFDRTtBQURGO09BQUEsZ0NBQ0UsQUFBQyxzQ0FBRCxBQUFlOztvQkFBZjtzQkFGcUMsQUFDdkMsQUFDRTtBQUFBO0FBQUE7QUFGd0I7QUFBNUIsQUFBYSxBQU1iLEdBTmE7O29DQU1iLEFBQ0s7bUJBREwsQUFFaUIsQUFDZjs7VUFFTyxBQUNIO0FBRkY7QUFDRSxRQUVBLHlCQUF5QixFQUFFLFFBQVEsUUFBQSxBQUFRLGVBSDdDLEFBRzJCLEFBQVUsQUFBdUI7O2tCQUg1RDtvQkFKSixBQUlJLEFBT0w7QUFQSztLQUFBO0FBRkY7QUE1QkosQUF1Q0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2FydHVyLnMvQXRvbV9Qcm9qZWN0cy9LaW1zTGlzdGUtMi4wIn0=