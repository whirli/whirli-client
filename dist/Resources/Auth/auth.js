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
    value: function login(loginBody) {
      var spec = {
        method: 'POST',
        path: '/login',
        requestBody: loginBody
      };
      return this.createMethodFromPartialSpec(spec);
    }
  }, {
    key: "logout",
    value: function logout(loginBody) {
      var spec = {
        method: 'GET',
        path: '/logout',
        requestBody: loginBody
      };
      return this.createMethodFromPartialSpec(spec);
    }
  }, {
    key: "register",
    value: function register(loginBody) {
      var spec = {
        method: 'POST',
        path: '/register',
        requestBody: loginBody
      };
      return this.createMethodFromPartialSpec(spec);
    }
  }]);

  return Auth;
}(_AbstractResource2["default"]);

exports["default"] = Auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvQXV0aC9hdXRoLnRzIl0sIm5hbWVzIjpbIkF1dGgiLCJyZXNvdXJjZVBhdGgiLCJsb2dpbkJvZHkiLCJzcGVjIiwibWV0aG9kIiwicGF0aCIsInJlcXVlc3RCb2R5IiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXFCQSxJOzs7Ozs7Ozs7Ozs7O2lDQUNFO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixNQUFwQjtBQUNIOzs7MEJBRUtDLFMsRUFBZ0M7QUFDbEMsVUFBTUMsSUFBaUIsR0FBRztBQUN0QkMsUUFBQUEsTUFBTSxFQUFFLE1BRGM7QUFFdEJDLFFBQUFBLElBQUksRUFBRSxRQUZnQjtBQUd0QkMsUUFBQUEsV0FBVyxFQUFFSjtBQUhTLE9BQTFCO0FBS0EsYUFBTyxLQUFLSywyQkFBTCxDQUFpQ0osSUFBakMsQ0FBUDtBQUNIOzs7MkJBRU1ELFMsRUFBZ0M7QUFDbkMsVUFBTUMsSUFBaUIsR0FBRztBQUN0QkMsUUFBQUEsTUFBTSxFQUFFLEtBRGM7QUFFdEJDLFFBQUFBLElBQUksRUFBRSxTQUZnQjtBQUd0QkMsUUFBQUEsV0FBVyxFQUFFSjtBQUhTLE9BQTFCO0FBS0EsYUFBTyxLQUFLSywyQkFBTCxDQUFpQ0osSUFBakMsQ0FBUDtBQUNIOzs7NkJBRVFELFMsRUFBZ0M7QUFDckMsVUFBTUMsSUFBaUIsR0FBRztBQUN0QkMsUUFBQUEsTUFBTSxFQUFFLE1BRGM7QUFFdEJDLFFBQUFBLElBQUksRUFBRSxXQUZnQjtBQUd0QkMsUUFBQUEsV0FBVyxFQUFFSjtBQUhTLE9BQTFCO0FBS0EsYUFBTyxLQUFLSywyQkFBTCxDQUFpQ0osSUFBakMsQ0FBUDtBQUNIOzs7O0VBOUI2QkssNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCBQYXJ0aWFsU3BlYyBmcm9tICcuLi8uLi9JbnRlcmZhY2VzL1BhcnRpYWxTcGVjJztcbmltcG9ydCBMb2dpbkJvZHkgZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9Mb2dpbkJvZHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnYXV0aCc7XG4gICAgfVxuXG4gICAgbG9naW4obG9naW5Cb2R5OiBMb2dpbkJvZHkpOiBGdW5jdGlvbiB7XG4gICAgICAgIGNvbnN0IHNwZWM6IFBhcnRpYWxTcGVjID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgICAgICAgIHJlcXVlc3RCb2R5OiBsb2dpbkJvZHksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyhzcGVjKTtcbiAgICB9XG5cbiAgICBsb2dvdXQobG9naW5Cb2R5OiBMb2dpbkJvZHkpOiBGdW5jdGlvbiB7XG4gICAgICAgIGNvbnN0IHNwZWM6IFBhcnRpYWxTcGVjID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHBhdGg6ICcvbG9nb3V0JyxcbiAgICAgICAgICAgIHJlcXVlc3RCb2R5OiBsb2dpbkJvZHksXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyhzcGVjKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcihsb2dpbkJvZHk6IExvZ2luQm9keSk6IEZ1bmN0aW9uIHtcbiAgICAgICAgY29uc3Qgc3BlYzogUGFydGlhbFNwZWMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHBhdGg6ICcvcmVnaXN0ZXInLFxuICAgICAgICAgICAgcmVxdWVzdEJvZHk6IGxvZ2luQm9keSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHNwZWMpO1xuICAgIH1cbn1cbiJdfQ==