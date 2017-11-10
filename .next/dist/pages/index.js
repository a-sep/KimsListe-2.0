'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('material-ui/styles');

var _withRoot = require('../components/withRoot');

var _withRoot2 = _interopRequireDefault(_withRoot);

var _ButtonAppBar = require('../components/ButtonAppBar');

var _ButtonAppBar2 = _interopRequireDefault(_ButtonAppBar);

var _CncProductsList = require('../components/CncProductsList');

var _CncProductsList2 = _interopRequireDefault(_CncProductsList);

var _SignIn = require('../components/SignIn');

var _SignIn2 = _interopRequireDefault(_SignIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\artur.s\\Atom_Projects\\KimsListe-2.0\\pages\\index.js?entry';
/* eslint-disable flowtype/require-valid-file-annotation */

var styles = {
  root: {
    textAlign: 'center'
    // paddingTop: 200,
  }
};

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

    _this.handleRequestClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.handleClick = function () {
      _this.setState({
        open: true
      });
    };

    _this.signedIn = function () {
      return _this.state.uid;
    };

    _this.handleAuth = function () {
      _this.setState({ uid: 'dstrus' });
    };

    _this.signOut = function () {
      _this.setState({ uid: null });
    };

    _this.state = {
      open: false,
      uid: true
    };
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: this.props.classes.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_ButtonAppBar2.default, {
        handleAuth: this.handleAuth,
        signOut: this.signOut,
        signedIn: this.signedIn(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement(_Dialog2.default, { open: this.state.open, onRequestClose: this.handleRequestClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_Dialog.DialogTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Super Secret Password'), _react2.default.createElement(_Dialog.DialogContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_Dialog.DialogContentText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, '1-2-3-4-5')), _react2.default.createElement(_Dialog.DialogActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_Button2.default, { color: 'primary', onClick: this.handleRequestClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'OK'))), _react2.default.createElement(_Typography2.default, { type: 'display1', gutterBottom: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Material-UI'), _react2.default.createElement(_Typography2.default, { type: 'subheading', gutterBottom: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'example project'), _react2.default.createElement(_Button2.default, { raised: true, color: 'accent', onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, 'Super Secret Password'), this.signedIn() ? _react2.default.createElement(_CncProductsList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }) : _react2.default.createElement(_SignIn2.default, { handleAuth: this.handleAuth, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }));
    }
  }]);

  return Index;
}(_react.Component);

Index.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withRoot2.default)((0, _styles.withStyles)(styles)(Index));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIkRpYWxvZyIsIkRpYWxvZ1RpdGxlIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0NvbnRlbnRUZXh0IiwiRGlhbG9nQWN0aW9ucyIsIlR5cG9ncmFwaHkiLCJ3aXRoU3R5bGVzIiwid2l0aFJvb3QiLCJCdXR0b25BcHBCYXIiLCJDbmNQcm9kdWN0c0xpc3QiLCJTaWduSW4iLCJzdHlsZXMiLCJyb290IiwidGV4dEFsaWduIiwiSW5kZXgiLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJzZXRTdGF0ZSIsIm9wZW4iLCJoYW5kbGVDbGljayIsInNpZ25lZEluIiwic3RhdGUiLCJ1aWQiLCJoYW5kbGVBdXRoIiwic2lnbk91dCIsInByb3BzIiwiY2xhc3NlcyIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUNMLEFBQ0EsQUFDQSxBQUNBOzs7O0FBRUYsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFjOzs7O0FBRXJCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFPLEFBQVk7Ozs7Ozs7QUFqQm5COztBQW1CQSxJQUFNOztlQUVTLEFBQ1g7QUFISixBQUFlLEFBQ1A7QUFBQSxBQUNKO0FBRlcsQUFDYjs7SSxBQU1JO2lDQUNKOzttQkFBYzt3Q0FBQTs7OEhBQUE7O1VBQUEsQUFRZCxxQkFBcUIsWUFBTSxBQUN6QjtZQUFBLEFBQUs7Y0FBTCxBQUFjLEFBQ04sQUFFVDtBQUhlLEFBQ1o7QUFWVTs7VUFBQSxBQWNkLGNBQWMsWUFBTSxBQUNsQjtZQUFBLEFBQUs7Y0FBTCxBQUFjLEFBQ04sQUFFVDtBQUhlLEFBQ1o7QUFoQlU7O1VBQUEsQUFvQmQsV0FBVyxZQUFNLEFBQ2Y7YUFBTyxNQUFBLEFBQUssTUFBWixBQUFrQixBQUNuQjtBQXRCYTs7VUFBQSxBQXdCZCxhQUFhLFlBQU0sQUFDakI7WUFBQSxBQUFLLFNBQVMsRUFBRSxLQUFoQixBQUFjLEFBQU8sQUFDdEI7QUExQmE7O1VBQUEsQUE0QmQsVUFBVSxZQUFNLEFBQ2Q7WUFBQSxBQUFLLFNBQVMsRUFBRSxLQUFoQixBQUFjLEFBQU8sQUFDdEI7QUE5QmEsQUFFWjs7VUFBQSxBQUFLO1lBQVEsQUFDTCxBQUNOO1dBSlUsQUFFWixBQUFhLEFBRU47QUFGTSxBQUNYO1dBR0g7Ozs7OzZCQTBCUSxBQUNQOzZCQUNFLGNBQUEsU0FBSyxXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBM0IsQUFBbUM7b0JBQW5DO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7b0JBQ2EsS0FEZCxBQUNtQixBQUNqQjtpQkFBUyxLQUZYLEFBRWdCLEFBQ2Q7a0JBQVUsS0FIWixBQUdZLEFBQUs7O29CQUhqQjtzQkFERixBQUNFLEFBS0E7QUFMQTtBQUNFLDBCQUlGLEFBQUMsa0NBQU8sTUFBTSxLQUFBLEFBQUssTUFBbkIsQUFBeUIsTUFBTSxnQkFBZ0IsS0FBL0MsQUFBb0Q7b0JBQXBEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMENBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBSEosQUFFRSxBQUNFLEFBRUYsK0JBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxrQ0FBTyxPQUFSLEFBQWMsV0FBVSxTQUFTLEtBQWpDLEFBQXNDO29CQUF0QztzQkFBQTtBQUFBO1NBWk4sQUFNRSxBQUtFLEFBQ0UsQUFLSix5QkFBQSxBQUFDLHNDQUFXLE1BQVosQUFBaUIsWUFBVyxjQUE1QjtvQkFBQTtzQkFBQTtBQUFBO1NBakJGLEFBaUJFLEFBR0EsZ0NBQUEsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCLGNBQWEsY0FBOUI7b0JBQUE7c0JBQUE7QUFBQTtTQXBCRixBQW9CRSxBQUdBLG9DQUFBLEFBQUMsa0NBQU8sUUFBUixNQUFlLE9BQWYsQUFBcUIsVUFBUyxTQUFTLEtBQXZDLEFBQTRDO29CQUE1QztzQkFBQTtBQUFBO1NBdkJGLEFBdUJFLEFBR0MsK0JBQUEsQUFBSyw2QkFBYSxBQUFDOztvQkFBRDtzQkFBbEIsQUFBa0I7QUFBQTtBQUFBLE9BQUEsb0JBQXNCLEFBQUMsa0NBQU8sWUFBWSxLQUFwQixBQUF5QjtvQkFBekI7c0JBM0I3QyxBQUNFLEFBMEIyQyxBQUc5QztBQUg4QztPQUFBOzs7OztBLEFBN0Q3Qjs7QUFtRXBCLE1BQUEsQUFBTTtXQUNLLG9CQUFBLEFBQVUsT0FEckIsQUFBa0IsQUFDVSxBQUc1QjtBQUprQixBQUNoQjs7a0JBR2Esd0JBQVMsd0JBQUEsQUFBVyxRQUFuQyxBQUFlLEFBQVMsQUFBbUIiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYXJ0dXIucy9BdG9tX1Byb2plY3RzL0tpbXNMaXN0ZS0yLjAifQ==