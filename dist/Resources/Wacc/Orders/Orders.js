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

var Orders =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Orders, _AbstractResource);

  function Orders() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Orders);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Orders)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

    _defineProperty(_assertThisInitialized(_this), "assignOrders", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/assign-user/{id}'
    }));

    return _this;
  }

  _createClass(Orders, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/orders';
      this.defaultAccess = 'wacc';
    }
  }]);

  return Orders;
}(_AbstractResource2["default"]);

exports["default"] = Orders;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvV2FjYy9PcmRlcnMvT3JkZXJzLnRzIl0sIm5hbWVzIjpbIk9yZGVycyIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE07Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFNK0MsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDN0ZDLE1BQUFBLE1BQU0sRUFBRSxLQURxRjtBQUU3RkMsTUFBQUEsSUFBSSxFQUFFO0FBRnVGLEtBQWpDLEM7OzBEQUtBLE1BQUtGLDJCQUFMLENBQWlDO0FBQzdGQyxNQUFBQSxNQUFNLEVBQUUsS0FEcUY7QUFFN0ZDLE1BQUFBLElBQUksRUFBRTtBQUZ1RixLQUFqQyxDOzs2REFLRyxNQUFLRiwyQkFBTCxDQUFpQztBQUNoR0MsTUFBQUEsTUFBTSxFQUFFLE1BRHdGO0FBRWhHQyxNQUFBQSxJQUFJLEVBQUU7QUFGMEYsS0FBakMsQzs7NkRBS0EsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDaEdDLE1BQUFBLE1BQU0sRUFBRSxLQUR3RjtBQUVoR0MsTUFBQUEsSUFBSSxFQUFFO0FBRjBGLEtBQWpDLEM7OzZEQUtBLE1BQUtGLDJCQUFMLENBQWlDO0FBQ2hHQyxNQUFBQSxNQUFNLEVBQUUsUUFEd0Y7QUFFaEdDLE1BQUFBLElBQUksRUFBRTtBQUYwRixLQUFqQyxDOzs0REFLRCxNQUFLRiwyQkFBTCxDQUFpQztBQUMvRkMsTUFBQUEsTUFBTSxFQUFFLEtBRHVGO0FBRS9GQyxNQUFBQSxJQUFJLEVBQUU7QUFGeUYsS0FBakMsQzs7b0VBS1EsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDdkdDLE1BQUFBLE1BQU0sRUFBRSxLQUQrRjtBQUV2R0MsTUFBQUEsSUFBSSxFQUFFO0FBRmlHLEtBQWpDLEM7O21FQUtELE1BQUtGLDJCQUFMLENBQWlDO0FBQ3RHQyxNQUFBQSxNQUFNLEVBQUUsT0FEOEY7QUFFdEdDLE1BQUFBLElBQUksRUFBRTtBQUZnRyxLQUFqQyxDOzs7Ozs7O2lDQXhDdEQ7QUFDZixXQUFLQyxZQUFMLEdBQW9CLFNBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixNQUFyQjtBQUNIOzs7O0VBSitCQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uLy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZywgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL29yZGVycyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICd3YWNjJztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWxsOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgZ2V0OiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGNyZWF0ZTogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB1cGRhdGU6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIHBhdGg6ICcve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgZGVsZXRlOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBwYXRoOiAnL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHByaW50OiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3tpZH0vcHJpbnQnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGdldEZvclBpY2tpbmc6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcvcGljaycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgYXNzaWduT3JkZXJzOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICcvYXNzaWduLXVzZXIve2lkfScsXG4gICAgfSk7XG59XG4iXX0=