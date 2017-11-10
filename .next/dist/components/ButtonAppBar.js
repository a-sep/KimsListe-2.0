'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('material-ui-icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\artur.s\\Atom_Projects\\KimsListe-2.0\\components\\ButtonAppBar.js';


var styles = function styles(theme) {
  return {
    root: {
      // marginTop: theme.spacing.unit * 3,
      width: '100%'
    },
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  };
};

var ButtonAppBar = function ButtonAppBar(props) {
  var classes = props.classes;

  var button = _react2.default.createElement(_Button2.default, { color: 'contrast', onClick: props.handleAuth, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'Sign In');
  if (props.signedIn) {
    button = _react2.default.createElement(_Button2.default, { color: 'contrast', onClick: props.signOut, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    }, 'Sign Out');
  }
  return _react2.default.createElement('div', { className: classes.root, __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement(_AppBar2.default, { position: 'static', __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement(_Toolbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement(_IconButton2.default, { className: classes.menuButton, color: 'contrast', 'aria-label': 'Menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(_Menu2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  })), _react2.default.createElement(_Typography2.default, { type: 'title', color: 'inherit', className: classes.flex, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, 'Kim\'s Liste'), button)));
};

ButtonAppBar.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  signOut: _propTypes2.default.func.isRequired,
  handleAuth: _propTypes2.default.func.isRequired,
  signedIn: _propTypes2.default.bool.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(ButtonAppBar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEJ1dHRvbkFwcEJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIndpdGhTdHlsZXMiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJNZW51SWNvbiIsInN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImZsZXgiLCJtZW51QnV0dG9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiQnV0dG9uQXBwQmFyIiwicHJvcHMiLCJjbGFzc2VzIiwiYnV0dG9uIiwiaGFuZGxlQXV0aCIsInNpZ25lZEluIiwic2lnbk91dCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBOzs7QUFHWDthQUhxQixBQUNqQixBQUVHLEFBRVQ7QUFKTSxBQUNKOztZQUZxQixBQUtqQixBQUNFLEFBRVI7QUFITSxBQUNKOztrQkFHWSxDQURGLEFBQ0csQUFDYjttQkFWVyxBQUFVLEFBUVgsQUFFRztBQUZILEFBQ1Y7QUFUcUIsQUFDdkI7QUFERjs7QUFjQSxJQUFNLGVBQWUsU0FBZixBQUFlLGFBQUEsQUFBQyxPQUFVO01BQUEsQUFDdEIsVUFEc0IsQUFDVixNQURVLEFBQ3RCLEFBQ1I7O01BQUkseUJBQ0YsQUFBQyxrQ0FBTyxPQUFSLEFBQWMsWUFBVyxTQUFTLE1BQWxDLEFBQXdDO2dCQUF4QztrQkFBQTtBQUFBO0dBQUEsRUFERixBQUNFLEFBSUY7TUFBSSxNQUFKLEFBQVUsVUFBVSxBQUNsQjs2QkFDRSxBQUFDLGtDQUFPLE9BQVIsQUFBYyxZQUFXLFNBQVMsTUFBbEMsQUFBd0M7a0JBQXhDO29CQUFBO0FBQUE7S0FBQSxFQURGLEFBQ0UsQUFJSDtBQUNEO3lCQUNFLGNBQUEsU0FBSyxXQUFXLFFBQWhCLEFBQXdCO2dCQUF4QjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLGtDQUFPLFVBQVIsQUFBaUI7Z0JBQWpCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLHNDQUFXLFdBQVcsUUFBdkIsQUFBK0IsWUFBWSxPQUEzQyxBQUFpRCxZQUFXLGNBQTVELEFBQXVFO2dCQUF2RTtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTtBQUFBLHVCQUVGLEFBQUMsc0NBQVcsTUFBWixBQUFpQixTQUFRLE9BQXpCLEFBQStCLFdBQVUsV0FBVyxRQUFwRCxBQUE0RDtnQkFBNUQ7a0JBQUE7QUFBQTtLQUpGLEFBSUUsQUFHQyxpQkFWVCxBQUNFLEFBQ0UsQUFDRSxBQVlQO0FBN0JEOztBQStCQSxhQUFBLEFBQWE7V0FDRixvQkFBQSxBQUFVLE9BREksQUFDRyxBQUMxQjtXQUFTLG9CQUFBLEFBQVUsS0FGSSxBQUVDLEFBQ3hCO2NBQVksb0JBQUEsQUFBVSxLQUhDLEFBR0ksQUFDM0I7WUFBVSxvQkFBQSxBQUFVLEtBSnRCLEFBQXlCLEFBSUUsQUFHM0I7QUFQeUIsQUFDdkI7O2tCQU1hLHdCQUFBLEFBQVcsUUFBMUIsQUFBZSxBQUFtQiIsImZpbGUiOiJCdXR0b25BcHBCYXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYXJ0dXIucy9BdG9tX1Byb2plY3RzL0tpbXNMaXN0ZS0yLjAifQ==