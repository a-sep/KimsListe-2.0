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

var _styles = require('material-ui/styles');

var _withRoot = require('./withRoot');

var _withRoot2 = _interopRequireDefault(_withRoot);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\artur.s\\Atom_Projects\\KimsListe-2.0\\components\\CncProductsList.js';


var styles = {
  root: {
    textAlign: 'center'
    // paddingTop: 200,
  }
};

var CncProductsList = function (_Component) {
  (0, _inherits3.default)(CncProductsList, _Component);

  function CncProductsList() {
    (0, _classCallCheck3.default)(this, CncProductsList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CncProductsList.__proto__ || (0, _getPrototypeOf2.default)(CncProductsList)).call(this));

    _this.componentDidMount = function () {
      _base2.default.syncState('cncProducts', {
        context: _this, // what object the state is on
        state: 'cncProducts', // which property to sync
        asArray: true,
        then: function then() {
          return _this.setState({ firebaseCncProductsSynced: true });
        }
      });
    };

    _this.addItem = function (newItem) {
      _this.setState({
        cncProducts: _this.state.cncProducts.concat([newItem]) // updates Firebase and the local state
      });
    };

    _this.state = {
      cncProducts: [],
      firebaseCncProductsSynced: false
    };
    return _this;
  }

  (0, _createClass3.default)(CncProductsList, [{
    key: 'render',
    value: function render() {
      var cncProducts = this.state.cncProducts;
      var listItems = cncProducts.map(function (part) {
        return _react2.default.createElement('li', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, part.partName);
      });

      return _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, listItems);
    }
  }]);

  return CncProductsList;
}(_react.Component);

CncProductsList.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _withRoot2.default)((0, _styles.withStyles)(styles)(CncProductsList));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENuY1Byb2R1Y3RzTGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIndpdGhTdHlsZXMiLCJ3aXRoUm9vdCIsImJhc2UiLCJzdHlsZXMiLCJyb290IiwidGV4dEFsaWduIiwiQ25jUHJvZHVjdHNMaXN0IiwiY29tcG9uZW50RGlkTW91bnQiLCJzeW5jU3RhdGUiLCJjb250ZXh0Iiwic3RhdGUiLCJhc0FycmF5IiwidGhlbiIsInNldFN0YXRlIiwiZmlyZWJhc2VDbmNQcm9kdWN0c1N5bmNlZCIsImFkZEl0ZW0iLCJjbmNQcm9kdWN0cyIsImNvbmNhdCIsIm5ld0l0ZW0iLCJsaXN0SXRlbXMiLCJtYXAiLCJwYXJ0IiwicGFydE5hbWUiLCJwcm9wVHlwZXMiLCJjbGFzc2VzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCLElBQU07O2VBRVMsQUFDWDtBQUhKLEFBQWUsQUFDUDtBQUFBLEFBQ0o7QUFGVyxBQUNiOztJQU1JLEE7MkNBQ0o7OzZCQUFjO3dDQUFBOztrSkFBQTs7VUFBQSxBQVFkLG9CQUFvQixZQUFNLEFBQ3hCO3FCQUFBLEFBQUs7aUJBQXlCLE9BQ2IsQUFDZjtlQUY0QixBQUVyQixlQUFlLEFBQ3RCO2lCQUg0QixBQUduQixBQUNUO2NBQU0sZ0JBQUE7aUJBQU0sTUFBQSxBQUFLLFNBQVMsRUFBRSwyQkFBdEIsQUFBTSxBQUFjLEFBQTZCO0FBSnpELEFBQThCLEFBTS9CO0FBTitCLEFBQzVCO0FBVlU7O1VBQUEsQUFpQmQsVUFBVSxtQkFBVyxBQUNuQjtZQUFBLEFBQUs7cUJBQ1UsTUFBQSxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLE9BQU8sQ0FEL0IsQUFDQyxBQUE4QixBQUFDLFVBRDlDLEFBQWMsQUFDMkMsQUFFMUQ7QUFIZSxBQUNaO0FBbkJVLEFBRVo7O1VBQUEsQUFBSzttQkFBUSxBQUNFLEFBQ2I7aUNBSlUsQUFFWixBQUFhLEFBRWdCO0FBRmhCLEFBQ1g7V0FHSDs7Ozs7NkJBaUJRLEFBQ1A7VUFBTSxjQUFjLEtBQUEsQUFBSyxNQUF6QixBQUErQixBQUMvQjtVQUFNLHdCQUFZLEFBQVksSUFBSSxnQkFBQTsrQkFBUSxjQUFBOztzQkFBQTt3QkFBQSxBQUFLO0FBQUw7QUFBQSxTQUFBLE9BQVIsQUFBUSxBQUFVO0FBQXBELEFBQWtCLEFBRWxCLE9BRmtCOzs2QkFFWCxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxPQUFBLEVBQVAsQUFBTyxBQUNSOzs7OztBLEFBN0IyQjs7QUFnQzlCLGdCQUFBLEFBQWdCO1dBQ0wsb0JBQUEsQUFBVSxPQURyQixBQUE0QixBQUNBLEFBRzVCO0FBSjRCLEFBQzFCOztrQkFHYSx3QkFBUyx3QkFBQSxBQUFXLFFBQW5DLEFBQWUsQUFBUyxBQUFtQiIsImZpbGUiOiJDbmNQcm9kdWN0c0xpc3QuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYXJ0dXIucy9BdG9tX1Byb2plY3RzL0tpbXNMaXN0ZS0yLjAifQ==