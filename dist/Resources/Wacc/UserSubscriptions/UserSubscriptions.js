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

var UserSubscriptions =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(UserSubscriptions, _AbstractResource);

  function UserSubscriptions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UserSubscriptions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UserSubscriptions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "update", _this.createMethodFromPartialSpec({
      method: 'PUT',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "suspend", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/{id}/suspend'
    }));

    _defineProperty(_assertThisInitialized(_this), "cancel", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "activate", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/{id}/activate'
    }));

    _defineProperty(_assertThisInitialized(_this), "previewChange", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/{id}/preview-change'
    }));

    _defineProperty(_assertThisInitialized(_this), "change", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/{id}/change'
    }));

    _defineProperty(_assertThisInitialized(_this), "upgradeTier", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/{id}/upgrade-tier'
    }));

    return _this;
  }

  _createClass(UserSubscriptions, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/user-subscriptions';
      this.defaultAccess = 'wacc';
    }
  }]);

  return UserSubscriptions;
}(_AbstractResource2["default"]);

exports["default"] = UserSubscriptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvV2FjYy9Vc2VyU3Vic2NyaXB0aW9ucy9Vc2VyU3Vic2NyaXB0aW9ucy50cyJdLCJuYW1lcyI6WyJVc2VyU3Vic2NyaXB0aW9ucyIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBTStDLE1BQUtDLDJCQUFMLENBQWlDO0FBQzdGQyxNQUFBQSxNQUFNLEVBQUUsS0FEcUY7QUFFN0ZDLE1BQUFBLElBQUksRUFBRTtBQUZ1RixLQUFqQyxDOzswREFLWSxNQUFLRiwyQkFBTCxDQUFpQztBQUN6R0MsTUFBQUEsTUFBTSxFQUFFLEtBRGlHO0FBRXpHQyxNQUFBQSxJQUFJLEVBQUU7QUFGbUcsS0FBakMsQzs7NkRBS0csTUFBS0YsMkJBQUwsQ0FBaUM7QUFDNUdDLE1BQUFBLE1BQU0sRUFBRSxLQURvRztBQUU1R0MsTUFBQUEsSUFBSSxFQUFFO0FBRnNHLEtBQWpDLEM7OzhEQUtDLE1BQUtGLDJCQUFMLENBQWlDO0FBQzdHQyxNQUFBQSxNQUFNLEVBQUUsT0FEcUc7QUFFN0dDLE1BQUFBLElBQUksRUFBRTtBQUZ1RyxLQUFqQyxDOzs2REFLRCxNQUFLRiwyQkFBTCxDQUFpQztBQUM1R0MsTUFBQUEsTUFBTSxFQUFFLE9BRG9HO0FBRTVHQyxNQUFBQSxJQUFJLEVBQUU7QUFGc0csS0FBakMsQzs7K0RBS0UsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDOUdDLE1BQUFBLE1BQU0sRUFBRSxPQURzRztBQUU5R0MsTUFBQUEsSUFBSSxFQUFFO0FBRndHLEtBQWpDLEM7O29FQVF2RCxNQUFLRiwyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLE1BRCtDO0FBRXZEQyxNQUFBQSxJQUFJLEVBQUU7QUFGaUQsS0FBakMsQzs7NkRBS3FELE1BQUtGLDJCQUFMLENBQWlDO0FBQzVHQyxNQUFBQSxNQUFNLEVBQUUsTUFEb0c7QUFFNUdDLE1BQUFBLElBQUksRUFBRTtBQUZzRyxLQUFqQyxDOztrRUFRckQsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxNQUQrQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFO0FBRmlELEtBQWpDLEM7Ozs7Ozs7aUNBbkRQO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixxQkFBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE1BQXJCO0FBQ0g7Ozs7RUFKMENDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnLCBIdHRwQ2xpZW50UmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU3Vic2NyaXB0aW9ucyBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy91c2VyLXN1YnNjcmlwdGlvbnMnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnd2FjYyc7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGdldDogKGlkOiBzdHJpbmcsIC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB1cGRhdGU6IChpZDogc3RyaW5nLCAuLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIHBhdGg6ICcve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgc3VzcGVuZDogKGlkOiBzdHJpbmcsIC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAnL3tpZH0vc3VzcGVuZCcsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgY2FuY2VsOiAoaWQ6IHN0cmluZywgLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICcve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgYWN0aXZhdGU6IChpZDogc3RyaW5nLCAuLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgcGF0aDogJy97aWR9L2FjdGl2YXRlJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBwcmV2aWV3Q2hhbmdlOiAoXG4gICAgICAgIGlkOiBzdHJpbmcsXG4gICAgICAgIC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWdcbiAgICApID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcve2lkfS9wcmV2aWV3LWNoYW5nZScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgY2hhbmdlOiAoaWQ6IHN0cmluZywgLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJy97aWR9L2NoYW5nZScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdXBncmFkZVRpZXI6IChcbiAgICAgICAgaWQ6IHN0cmluZyxcbiAgICAgICAgLi4uYXJnczogSHR0cENsaWVudENvbmZpZ1xuICAgICkgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJy97aWR9L3VwZ3JhZGUtdGllcicsXG4gICAgfSk7XG59XG4iXX0=