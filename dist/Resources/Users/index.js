"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Baskets = _interopRequireDefault(require("./Baskets"));

var _Gifts = _interopRequireDefault(require("./Gifts"));

var _Subscriptions = _interopRequireDefault(require("./Subscriptions"));

var _Toybox = _interopRequireDefault(require("./Toybox"));

var _Details = _interopRequireDefault(require("./Details"));

var _Addresses = _interopRequireDefault(require("./Addresses"));

var _ProductLists = _interopRequireDefault(require("./ProductLists"));

var _Orders = _interopRequireDefault(require("./Orders"));

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

  function Users(api) {
    var _this;

    _classCallCheck(this, Users);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Users).call(this, api));

    _defineProperty(_assertThisInitialized(_this), "addresses", void 0);

    _defineProperty(_assertThisInitialized(_this), "baskets", void 0);

    _defineProperty(_assertThisInitialized(_this), "gifts", void 0);

    _defineProperty(_assertThisInitialized(_this), "details", void 0);

    _defineProperty(_assertThisInitialized(_this), "subscriptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "toybox", void 0);

    _defineProperty(_assertThisInitialized(_this), "productLists", void 0);

    _defineProperty(_assertThisInitialized(_this), "orders", void 0);

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      access: 'guest',
      method: 'POST',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "claimGuestResources", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/claim'
    }));

    _defineProperty(_assertThisInitialized(_this), "checkout", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/checkout'
    }));

    _this.api = api;

    _this.initialise();

    _this.addresses = new _Addresses["default"](api);
    _this.baskets = new _Baskets["default"](api);
    _this.gifts = new _Gifts["default"](api);
    _this.details = new _Details["default"](api);
    _this.subscriptions = new _Subscriptions["default"](api);
    _this.toybox = new _Toybox["default"](api);
    _this.productLists = new _ProductLists["default"](api);
    _this.orders = new _Orders["default"](api);
    return _this;
  }

  _createClass(Users, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/users';
      this.defaultAccess = 'member';
    }
  }]);

  return Users;
}(_AbstractResource2["default"]);

exports["default"] = Users;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJhY2Nlc3MiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFkZHJlc3NlcyIsIkFkZHJlc3NlcyIsImJhc2tldHMiLCJCYXNrZXRzIiwiZ2lmdHMiLCJHaWZ0cyIsImRldGFpbHMiLCJEZXRhaWxzIiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbnMiLCJ0b3lib3giLCJUb3lib3giLCJwcm9kdWN0TGlzdHMiLCJQcm9kdWN0TGlzdHMiLCJvcmRlcnMiLCJPcmRlcnMiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7O0FBVWpCLGlCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLCtFQUFNQSxHQUFOOztBQURxQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSw2REFvQkMsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxPQUQrQztBQUV2REMsTUFBQUEsTUFBTSxFQUFFLE1BRitDO0FBR3ZEQyxNQUFBQSxJQUFJLEVBQUU7QUFIaUQsS0FBakMsQ0FwQkQ7O0FBQUEsMEVBMEJ1RCxNQUFLSCwyQkFBTCxDQUFpQztBQUM3R0UsTUFBQUEsTUFBTSxFQUFFLE9BRHFHO0FBRTdHQyxNQUFBQSxJQUFJLEVBQUU7QUFGdUcsS0FBakMsQ0ExQnZEOztBQUFBLCtEQStCNEMsTUFBS0gsMkJBQUwsQ0FBaUM7QUFDbEdFLE1BQUFBLE1BQU0sRUFBRSxNQUQwRjtBQUVsR0MsTUFBQUEsSUFBSSxFQUFFO0FBRjRGLEtBQWpDLENBL0I1Qzs7QUFFckIsVUFBS0osR0FBTCxHQUFXQSxHQUFYOztBQUNBLFVBQUtLLFVBQUw7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixDQUFjUCxHQUFkLENBQWpCO0FBQ0EsVUFBS1EsT0FBTCxHQUFlLElBQUlDLG1CQUFKLENBQVlULEdBQVosQ0FBZjtBQUNBLFVBQUtVLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFVWCxHQUFWLENBQWI7QUFDQSxVQUFLWSxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWWIsR0FBWixDQUFmO0FBQ0EsVUFBS2MsYUFBTCxHQUFxQixJQUFJQyx5QkFBSixDQUFrQmYsR0FBbEIsQ0FBckI7QUFDQSxVQUFLZ0IsTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVdqQixHQUFYLENBQWQ7QUFDQSxVQUFLa0IsWUFBTCxHQUFvQixJQUFJQyx3QkFBSixDQUFpQm5CLEdBQWpCLENBQXBCO0FBQ0EsVUFBS29CLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXckIsR0FBWCxDQUFkO0FBWnFCO0FBYXhCOzs7O2lDQUVrQjtBQUNmLFdBQUtzQixZQUFMLEdBQW9CLFFBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixRQUFyQjtBQUNIOzs7O0VBNUI4QkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCBCYXNrZXRzIGZyb20gJy4vQmFza2V0cyc7XG5pbXBvcnQgR2lmdHMgZnJvbSAnLi9HaWZ0cyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9ucyBmcm9tICcuL1N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IFRveWJveCBmcm9tICcuL1RveWJveCc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xuaW1wb3J0IEFkZHJlc3NlcyBmcm9tICcuL0FkZHJlc3Nlcyc7XG5pbXBvcnQgUHJvZHVjdExpc3RzIGZyb20gJy4vUHJvZHVjdExpc3RzJztcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9PcmRlcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZywgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwdWJsaWMgYWRkcmVzc2VzOiBBZGRyZXNzZXM7XG4gICAgcHVibGljIGJhc2tldHM6IEJhc2tldHM7XG4gICAgcHVibGljIGdpZnRzOiBHaWZ0cztcbiAgICBwdWJsaWMgZGV0YWlsczogRGV0YWlscztcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9ucztcbiAgICBwdWJsaWMgdG95Ym94OiBUb3lib3g7XG4gICAgcHVibGljIHByb2R1Y3RMaXN0czogUHJvZHVjdExpc3RzO1xuICAgIHB1YmxpYyBvcmRlcnM6IE9yZGVycztcblxuICAgIGNvbnN0cnVjdG9yKGFwaTogQ2xpZW50KSB7XG4gICAgICAgIHN1cGVyKGFwaSk7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcblxuICAgICAgICB0aGlzLmFkZHJlc3NlcyA9IG5ldyBBZGRyZXNzZXMoYXBpKTtcbiAgICAgICAgdGhpcy5iYXNrZXRzID0gbmV3IEJhc2tldHMoYXBpKTtcbiAgICAgICAgdGhpcy5naWZ0cyA9IG5ldyBHaWZ0cyhhcGkpO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyhhcGkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9ucyhhcGkpO1xuICAgICAgICB0aGlzLnRveWJveCA9IG5ldyBUb3lib3goYXBpKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdHMgPSBuZXcgUHJvZHVjdExpc3RzKGFwaSk7XG4gICAgICAgIHRoaXMub3JkZXJzID0gbmV3IE9yZGVycyhhcGkpO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy91c2Vycyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdtZW1iZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGU6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBhY2Nlc3M6ICdndWVzdCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgY2xhaW1HdWVzdFJlc291cmNlczogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAnL2NsYWltJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBjaGVja291dDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvY2hlY2tvdXQnLFxuICAgIH0pO1xufVxuIl19