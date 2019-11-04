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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Auth =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Auth, _AbstractResource);

  function Auth() {
    _classCallCheck(this, Auth);

    return _possibleConstructorReturn(this, _getPrototypeOf(Auth).apply(this, arguments));
  }

  _createClass(Auth, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = 'auth';
    }
  }, {
    key: "login",
    value: function login(body) {
      var spec = {
        method: 'POST',
        path: '/login',
        requestBody: body
      };
      return this.createMethodFromPartialSpec(spec)();
    }
  }, {
    key: "logout",
    value: function logout() {
      var spec = {
        method: 'GET',
        path: '/logout'
      };
      return this.createMethodFromPartialSpec(spec)();
    }
  }, {
    key: "register",
    value: function register() {
      var spec = {
        method: 'POST',
        path: '/register'
      };
      return this.createMethodFromPartialSpec(spec)();
    }
  }]);

  return Auth;
}(_AbstractResource2["default"]);

exports["default"] = Auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvQXV0aC9hdXRoLnRzIl0sIm5hbWVzIjpbIkF1dGgiLCJyZXNvdXJjZVBhdGgiLCJib2R5Iiwic3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXF1ZXN0Qm9keSIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQkEsSTs7Ozs7Ozs7Ozs7OztpQ0FDRTtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsTUFBcEI7QUFDSDs7OzBCQUVLQyxJLEVBQTJCO0FBQzdCLFVBQU1DLElBQWlCLEdBQUc7QUFDdEJDLFFBQUFBLE1BQU0sRUFBRSxNQURjO0FBRXRCQyxRQUFBQSxJQUFJLEVBQUUsUUFGZ0I7QUFHdEJDLFFBQUFBLFdBQVcsRUFBRUo7QUFIUyxPQUExQjtBQUtBLGFBQU8sS0FBS0ssMkJBQUwsQ0FBaUNKLElBQWpDLEdBQVA7QUFDSDs7OzZCQUVrQjtBQUNmLFVBQU1BLElBQWlCLEdBQUc7QUFDdEJDLFFBQUFBLE1BQU0sRUFBRSxLQURjO0FBRXRCQyxRQUFBQSxJQUFJLEVBQUU7QUFGZ0IsT0FBMUI7QUFJQSxhQUFPLEtBQUtFLDJCQUFMLENBQWlDSixJQUFqQyxHQUFQO0FBQ0g7OzsrQkFFb0I7QUFDakIsVUFBTUEsSUFBaUIsR0FBRztBQUN0QkMsUUFBQUEsTUFBTSxFQUFFLE1BRGM7QUFFdEJDLFFBQUFBLElBQUksRUFBRTtBQUZnQixPQUExQjtBQUlBLGFBQU8sS0FBS0UsMkJBQUwsQ0FBaUNKLElBQWpDLEdBQVA7QUFDSDs7OztFQTVCNkJLLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5pbXBvcnQgUGFydGlhbFNwZWMgZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9QYXJ0aWFsU3BlYyc7XG5pbXBvcnQgTG9naW5Cb2R5IGZyb20gJy4uLy4uL0ludGVyZmFjZXMvTG9naW5Cb2R5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJ2F1dGgnO1xuICAgIH1cblxuICAgIGxvZ2luKGJvZHk6IExvZ2luQm9keSk6IEZ1bmN0aW9uIHtcbiAgICAgICAgY29uc3Qgc3BlYzogUGFydGlhbFNwZWMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHBhdGg6ICcvbG9naW4nLFxuICAgICAgICAgICAgcmVxdWVzdEJvZHk6IGJvZHksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyhzcGVjKSgpO1xuICAgIH1cblxuICAgIGxvZ291dCgpOiBGdW5jdGlvbiB7XG4gICAgICAgIGNvbnN0IHNwZWM6IFBhcnRpYWxTcGVjID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHBhdGg6ICcvbG9nb3V0JyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHNwZWMpKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKTogRnVuY3Rpb24ge1xuICAgICAgICBjb25zdCBzcGVjOiBQYXJ0aWFsU3BlYyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgcGF0aDogJy9yZWdpc3RlcicsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyhzcGVjKSgpO1xuICAgIH1cbn1cbiJdfQ==