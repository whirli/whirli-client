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

    _defineProperty(_assertThisInitialized(_this), "unassignOrder", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/unassign-user/{assigneeId}'
    }));

    _defineProperty(_assertThisInitialized(_this), "getPriorityOrder", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/priority'
    }));

    _defineProperty(_assertThisInitialized(_this), "completeOutgoingOrder", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/complete-outgoing-process'
    }));

    _defineProperty(_assertThisInitialized(_this), "getOutstandingOrderCount", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/outstanding-order-count'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvV2FjYy9PcmRlcnMvT3JkZXJzLnRzIl0sIm5hbWVzIjpbIk9yZGVycyIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLE07Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFNK0MsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDN0ZDLE1BQUFBLE1BQU0sRUFBRSxLQURxRjtBQUU3RkMsTUFBQUEsSUFBSSxFQUFFO0FBRnVGLEtBQWpDLEM7OzBEQUtBLE1BQUtGLDJCQUFMLENBQWlDO0FBQzdGQyxNQUFBQSxNQUFNLEVBQUUsS0FEcUY7QUFFN0ZDLE1BQUFBLElBQUksRUFBRTtBQUZ1RixLQUFqQyxDOzs2REFLRyxNQUFLRiwyQkFBTCxDQUFpQztBQUNoR0MsTUFBQUEsTUFBTSxFQUFFLE1BRHdGO0FBRWhHQyxNQUFBQSxJQUFJLEVBQUU7QUFGMEYsS0FBakMsQzs7NkRBS0EsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDaEdDLE1BQUFBLE1BQU0sRUFBRSxLQUR3RjtBQUVoR0MsTUFBQUEsSUFBSSxFQUFFO0FBRjBGLEtBQWpDLEM7OzZEQUtBLE1BQUtGLDJCQUFMLENBQWlDO0FBQ2hHQyxNQUFBQSxNQUFNLEVBQUUsUUFEd0Y7QUFFaEdDLE1BQUFBLElBQUksRUFBRTtBQUYwRixLQUFqQyxDOzs0REFLRCxNQUFLRiwyQkFBTCxDQUFpQztBQUMvRkMsTUFBQUEsTUFBTSxFQUFFLEtBRHVGO0FBRS9GQyxNQUFBQSxJQUFJLEVBQUU7QUFGeUYsS0FBakMsQzs7b0VBS1EsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDdkdDLE1BQUFBLE1BQU0sRUFBRSxLQUQrRjtBQUV2R0MsTUFBQUEsSUFBSSxFQUFFO0FBRmlHLEtBQWpDLEM7O21FQUtELE1BQUtGLDJCQUFMLENBQWlDO0FBQ3RHQyxNQUFBQSxNQUFNLEVBQUUsT0FEOEY7QUFFdEdDLE1BQUFBLElBQUksRUFBRTtBQUZnRyxLQUFqQyxDOztvRUFLQyxNQUFLRiwyQkFBTCxDQUFpQztBQUN2R0MsTUFBQUEsTUFBTSxFQUFFLE9BRCtGO0FBRXZHQyxNQUFBQSxJQUFJLEVBQUU7QUFGaUcsS0FBakMsQzs7dUVBS0csTUFBS0YsMkJBQUwsQ0FBaUM7QUFDMUdDLE1BQUFBLE1BQU0sRUFBRSxLQURrRztBQUUxR0MsTUFBQUEsSUFBSSxFQUFFO0FBRm9HLEtBQWpDLEM7OzRFQUtLLE1BQUtGLDJCQUFMLENBQWlDO0FBQy9HQyxNQUFBQSxNQUFNLEVBQUUsT0FEdUc7QUFFL0dDLE1BQUFBLElBQUksRUFBRTtBQUZ5RyxLQUFqQyxDOzsrRUFPeEQsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxLQUQrQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFO0FBRmlELEtBQWpDLEM7Ozs7Ozs7aUNBOURQO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixTQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsTUFBckI7QUFDSDs7OztFQUorQkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi8uLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcsIEh0dHBDbGllbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVycyBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy9vcmRlcnMnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnd2FjYyc7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGdldDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBjcmVhdGU6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdXBkYXRlOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBwYXRoOiAnL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGRlbGV0ZTogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgcGF0aDogJy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBwcmludDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy97aWR9L3ByaW50JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBnZXRGb3JQaWNraW5nOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3BpY2snLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGFzc2lnbk9yZGVyczogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAnL2Fzc2lnbi11c2VyL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHVuYXNzaWduT3JkZXI6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgcGF0aDogJy91bmFzc2lnbi11c2VyL3thc3NpZ25lZUlkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgZ2V0UHJpb3JpdHlPcmRlcjogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy9wcmlvcml0eScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgY29tcGxldGVPdXRnb2luZ09yZGVyOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICcvY29tcGxldGUtb3V0Z29pbmctcHJvY2VzcycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgZ2V0T3V0c3RhbmRpbmdPcmRlckNvdW50OiAoXG4gICAgICAgIC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWdcbiAgICApID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy9vdXRzdGFuZGluZy1vcmRlci1jb3VudCcsXG4gICAgfSk7XG59XG4iXX0=