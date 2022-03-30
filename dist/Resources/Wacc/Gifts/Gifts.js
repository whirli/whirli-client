"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../../AbstractResource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Gifts = /*#__PURE__*/function (_AbstractResource) {
  _inherits(Gifts, _AbstractResource);

  var _super = _createSuper(Gifts);

  function Gifts() {
    var _this;

    _classCallCheck(this, Gifts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "update", _this.createMethodFromPartialSpec({
      method: 'PUT',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "delete", _this.createMethodFromPartialSpec({
      method: 'DELETE',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "print", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/{id}/print'
    }));

    _defineProperty(_assertThisInitialized(_this), "getForPicking", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/pick'
    }));

    _defineProperty(_assertThisInitialized(_this), "assignGifts", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/assign-user/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "unassignGift", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/unassign-user/{assigneeId}'
    }));

    return _this;
  }

  _createClass(Gifts, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/gifts';
      this.defaultAccess = 'wacc';
    }
  }]);

  return Gifts;
}(_AbstractResource2["default"]);

exports["default"] = Gifts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvV2FjYy9HaWZ0cy9HaWZ0cy50cyJdLCJuYW1lcyI6WyJHaWZ0cyIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozs7OzBEQU0rQyxNQUFLQywyQkFBTCxDQUFpQztBQUM3RkMsTUFBQUEsTUFBTSxFQUFFLEtBRHFGO0FBRTdGQyxNQUFBQSxJQUFJLEVBQUU7QUFGdUYsS0FBakMsQzs7MERBS0EsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDN0ZDLE1BQUFBLE1BQU0sRUFBRSxLQURxRjtBQUU3RkMsTUFBQUEsSUFBSSxFQUFFO0FBRnVGLEtBQWpDLEM7OzZEQUtHLE1BQUtGLDJCQUFMLENBQWlDO0FBQ2hHQyxNQUFBQSxNQUFNLEVBQUUsTUFEd0Y7QUFFaEdDLE1BQUFBLElBQUksRUFBRTtBQUYwRixLQUFqQyxDOzs2REFLQSxNQUFLRiwyQkFBTCxDQUFpQztBQUNoR0MsTUFBQUEsTUFBTSxFQUFFLEtBRHdGO0FBRWhHQyxNQUFBQSxJQUFJLEVBQUU7QUFGMEYsS0FBakMsQzs7NkRBS0EsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDaEdDLE1BQUFBLE1BQU0sRUFBRSxRQUR3RjtBQUVoR0MsTUFBQUEsSUFBSSxFQUFFO0FBRjBGLEtBQWpDLEM7OzREQUtELE1BQUtGLDJCQUFMLENBQWlDO0FBQy9GQyxNQUFBQSxNQUFNLEVBQUUsS0FEdUY7QUFFL0ZDLE1BQUFBLElBQUksRUFBRTtBQUZ5RixLQUFqQyxDOztvRUFLUSxNQUFLRiwyQkFBTCxDQUFpQztBQUN2R0MsTUFBQUEsTUFBTSxFQUFFLEtBRCtGO0FBRXZHQyxNQUFBQSxJQUFJLEVBQUU7QUFGaUcsS0FBakMsQzs7a0VBS0YsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDckdDLE1BQUFBLE1BQU0sRUFBRSxPQUQ2RjtBQUVyR0MsTUFBQUEsSUFBSSxFQUFFO0FBRitGLEtBQWpDLEM7O21FQUtDLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3RHQyxNQUFBQSxNQUFNLEVBQUUsT0FEOEY7QUFFdEdDLE1BQUFBLElBQUksRUFBRTtBQUZnRyxLQUFqQyxDOzs7Ozs7O1dBN0N6RSxzQkFBbUI7QUFDZixXQUFLQyxZQUFMLEdBQW9CLFFBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixNQUFyQjtBQUNIOzs7O0VBSjhCQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uLy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZywgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lmdHMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcvZ2lmdHMnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnd2FjYyc7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGdldDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBjcmVhdGU6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdXBkYXRlOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBwYXRoOiAnL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGRlbGV0ZTogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgcGF0aDogJy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBwcmludDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy97aWR9L3ByaW50JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBnZXRGb3JQaWNraW5nOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3BpY2snLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGFzc2lnbkdpZnRzOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICcvYXNzaWduLXVzZXIve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdW5hc3NpZ25HaWZ0OiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICcvdW5hc3NpZ24tdXNlci97YXNzaWduZWVJZH0nLFxuICAgIH0pO1xufVxuIl19