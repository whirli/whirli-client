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

var Users =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Users, _AbstractResource);

  function Users() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Users);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Users)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      access: 'wacc',
      method: 'GET',
      path: ''
    }));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      access: 'wacc',
      method: 'GET',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      access: 'wacc',
      method: 'POST',
      path: ''
    }));

    _defineProperty(_assertThisInitialized(_this), "update", _this.createMethodFromPartialSpec({
      access: 'wacc',
      method: 'PUT',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "delete", _this.createMethodFromPartialSpec({
      access: 'wacc',
      method: 'DELETE',
      path: '/{id}'
    }));

    return _this;
  }

  _createClass(Users, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = 'users';
    }
  }]);

  return Users;
}(_AbstractResource2["default"]);

exports["default"] = Users;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXNvdXJjZXMvd2FjYy9Vc2Vycy91c2Vycy50cyJdLCJuYW1lcyI6WyJVc2VycyIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsImFjY2VzcyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQUtNLE1BQUtDLDJCQUFMLENBQWlDO0FBQ3BEQyxNQUFBQSxNQUFNLEVBQUUsTUFENEM7QUFFcERDLE1BQUFBLE1BQU0sRUFBRSxLQUY0QztBQUdwREMsTUFBQUEsSUFBSSxFQUFFO0FBSDhDLEtBQWpDLEM7OzBEQU1BLE1BQUtILDJCQUFMLENBQWlDO0FBQ3BEQyxNQUFBQSxNQUFNLEVBQUUsTUFENEM7QUFFcERDLE1BQUFBLE1BQU0sRUFBRSxLQUY0QztBQUdwREMsTUFBQUEsSUFBSSxFQUFFO0FBSDhDLEtBQWpDLEM7OzZEQU1HLE1BQUtILDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsTUFEK0M7QUFFdkRDLE1BQUFBLE1BQU0sRUFBRSxNQUYrQztBQUd2REMsTUFBQUEsSUFBSSxFQUFFO0FBSGlELEtBQWpDLEM7OzZEQU1BLE1BQUtILDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsTUFEK0M7QUFFdkRDLE1BQUFBLE1BQU0sRUFBRSxLQUYrQztBQUd2REMsTUFBQUEsSUFBSSxFQUFFO0FBSGlELEtBQWpDLEM7OzZEQU1BLE1BQUtILDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsTUFEK0M7QUFFdkRDLE1BQUFBLE1BQU0sRUFBRSxRQUYrQztBQUd2REMsTUFBQUEsSUFBSSxFQUFFO0FBSGlELEtBQWpDLEM7Ozs7Ozs7aUNBNUJQO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixPQUFwQjtBQUNIOzs7O0VBSDhCQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uLy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VycyBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJ3VzZXJzJztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWxsOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgYWNjZXNzOiAnd2FjYycsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGdldDogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIGFjY2VzczogJ3dhY2MnLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGNyZWF0ZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIGFjY2VzczogJ3dhY2MnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdXBkYXRlOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgYWNjZXNzOiAnd2FjYycsXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIHBhdGg6ICcve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgZGVsZXRlOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgYWNjZXNzOiAnd2FjYycsXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIHBhdGg6ICcve2lkfScsXG4gICAgfSk7XG59XG4iXX0=