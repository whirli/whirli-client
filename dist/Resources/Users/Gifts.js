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

var Gifts =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Gifts, _AbstractResource);

  function Gifts() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Gifts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Gifts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/gifts'
    }));

    _defineProperty(_assertThisInitialized(_this), "getActive", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/active-gift'
    }));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/gifts/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "update", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/gifts/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "placeOrder", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/gifts/{id}/pay'
    }));

    _defineProperty(_assertThisInitialized(_this), "claimGuestBasket", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/gifts/{id}/assign'
    }));

    return _this;
  }

  _createClass(Gifts, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '';
      this.defaultAccess = 'member';
    }
  }]);

  return Gifts;
}(_AbstractResource2["default"]);

exports["default"] = Gifts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvR2lmdHMudHMiXSwibmFtZXMiOlsiR2lmdHMiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBTWtELE1BQUtDLDJCQUFMLENBQWlDO0FBQ2hHQyxNQUFBQSxNQUFNLEVBQUUsTUFEd0Y7QUFFaEdDLE1BQUFBLElBQUksRUFBRTtBQUYwRixLQUFqQyxDOztnRUFLRyxNQUFLRiwyQkFBTCxDQUFpQztBQUNuR0MsTUFBQUEsTUFBTSxFQUFFLEtBRDJGO0FBRW5HQyxNQUFBQSxJQUFJLEVBQUU7QUFGNkYsS0FBakMsQzs7MERBS1UsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDN0dDLE1BQUFBLE1BQU0sRUFBRSxLQURxRztBQUU3R0MsTUFBQUEsSUFBSSxFQUFFO0FBRnVHLEtBQWpDLEM7OzZEQUtHLE1BQUtGLDJCQUFMLENBQy9FO0FBQ0lDLE1BQUFBLE1BQU0sRUFBRSxPQURaO0FBRUlDLE1BQUFBLElBQUksRUFBRTtBQUZWLEtBRCtFLEM7O2lFQVV6RCxNQUFLRiwyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLE9BRCtDO0FBRXZEQyxNQUFBQSxJQUFJLEVBQUU7QUFGaUQsS0FBakMsQzs7dUVBUUEsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxPQUQrQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFO0FBRmlELEtBQWpDLEM7Ozs7Ozs7aUNBdENQO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsUUFBckI7QUFDSDs7OztFQUo4QkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcsIEh0dHBDbGllbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ21lbWJlcic7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZTogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvZ2lmdHMnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGdldEFjdGl2ZTogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy9hY3RpdmUtZ2lmdCcsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgZ2V0OiAoZ2lmdElkOiBzdHJpbmcsIC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy9naWZ0cy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB1cGRhdGU6IChnaWZ0SWQ6IHN0cmluZywgLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICAgIHBhdGg6ICcvZ2lmdHMve2lkfScsXG4gICAgICAgIH0sXG4gICAgKTtcblxuICAgIHB1YmxpYyBwbGFjZU9yZGVyOiAoXG4gICAgICAgIGdpZnRJZDogc3RyaW5nLFxuICAgICAgICAuLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnXG4gICAgKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgcGF0aDogJy9naWZ0cy97aWR9L3BheScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgY2xhaW1HdWVzdEJhc2tldDogKFxuICAgICAgICBnaWZ0SWQ6IHN0cmluZyxcbiAgICAgICAgLi4uYXJnczogSHR0cENsaWVudENvbmZpZ1xuICAgICkgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICcvZ2lmdHMve2lkfS9hc3NpZ24nLFxuICAgIH0pO1xufVxuIl19