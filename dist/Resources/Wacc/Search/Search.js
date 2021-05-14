"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../../AbstractResource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Search =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Search, _AbstractResource);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/'
    }));

    return _this;
  }

  _createClass(Search, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/search';
      this.defaultAccess = 'wacc';
    }
  }]);

  return Search;
}(_AbstractResource2["default"]);

exports["default"] = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvV2FjYy9TZWFyY2gvU2VhcmNoLnRzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE07Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFNK0MsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDN0ZDLE1BQUFBLE1BQU0sRUFBRSxLQURxRjtBQUU3RkMsTUFBQUEsSUFBSSxFQUFFO0FBRnVGLEtBQWpDLEM7Ozs7Ozs7aUNBTDdDO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixTQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsTUFBckI7QUFDSDs7OztFQUorQkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi8uLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcsIEh0dHBDbGllbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy9zZWFyY2gnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnd2FjYyc7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xufVxuIl19