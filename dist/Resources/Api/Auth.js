"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

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

var Auth =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Auth, _AbstractResource);

  function Auth() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Auth);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Auth)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "login", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/login'
    }));

    _defineProperty(_assertThisInitialized(_this), "logout", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/logout'
    }));

    _defineProperty(_assertThisInitialized(_this), "user", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/user'
    }));

    return _this;
  }

  _createClass(Auth, [{
    key: "initialise",
    value: function initialise() {
      this.defaultAccess = 'auth';
    }
  }]);

  return Auth;
}(_AbstractResource2["default"]);

exports["default"] = Auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvQXBpL0F1dGgudHMiXSwibmFtZXMiOlsiQXV0aCIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REFLaUQsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDL0ZDLE1BQUFBLE1BQU0sRUFBRSxNQUR1RjtBQUUvRkMsTUFBQUEsSUFBSSxFQUFFO0FBRnlGLEtBQWpDLEM7OzZEQUtDLE1BQUtGLDJCQUFMLENBQWlDO0FBQ2hHQyxNQUFBQSxNQUFNLEVBQUUsTUFEd0Y7QUFFaEdDLE1BQUFBLElBQUksRUFBRTtBQUYwRixLQUFqQyxDOzsyREFLRixNQUFLRiwyQkFBTCxDQUFpQztBQUM5RkMsTUFBQUEsTUFBTSxFQUFFLEtBRHNGO0FBRTlGQyxNQUFBQSxJQUFJLEVBQUU7QUFGd0YsS0FBakMsQzs7Ozs7OztpQ0FkOUM7QUFDZixXQUFLQyxhQUFMLEdBQXFCLE1BQXJCO0FBQ0g7Ozs7RUFINkJDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnLCBIdHRwQ2xpZW50UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ2F1dGgnO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpbjogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvbG9naW4nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGxvZ291dDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvbG9nb3V0JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB1c2VyOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3VzZXInLFxuICAgIH0pO1xufVxuIl19