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

var _Checkout = _interopRequireDefault(require("./Checkout"));

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

    _defineProperty(_assertThisInitialized(_this), "checkout", void 0);

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

    _this.api = api;

    _this.initialise();

    _this.addresses = new _Addresses["default"](api);
    _this.baskets = new _Baskets["default"](api);
    _this.gifts = new _Gifts["default"](api);
    _this.details = new _Details["default"](api);
    _this.subscriptions = new _Subscriptions["default"](api);
    _this.toybox = new _Toybox["default"](api);
    _this.checkout = new _Checkout["default"](api);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJhY2Nlc3MiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFkZHJlc3NlcyIsIkFkZHJlc3NlcyIsImJhc2tldHMiLCJCYXNrZXRzIiwiZ2lmdHMiLCJHaWZ0cyIsImRldGFpbHMiLCJEZXRhaWxzIiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbnMiLCJ0b3lib3giLCJUb3lib3giLCJjaGVja291dCIsIkNoZWNrb3V0IiwicHJvZHVjdExpc3RzIiwiUHJvZHVjdExpc3RzIiwib3JkZXJzIiwiT3JkZXJzIiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7OztBQVdqQixpQkFBWUMsR0FBWixFQUF5QjtBQUFBOztBQUFBOztBQUNyQiwrRUFBTUEsR0FBTjs7QUFEcUI7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsNkRBcUJDLE1BQUtDLDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsT0FEK0M7QUFFdkRDLE1BQUFBLE1BQU0sRUFBRSxNQUYrQztBQUd2REMsTUFBQUEsSUFBSSxFQUFFO0FBSGlELEtBQWpDLENBckJEOztBQUFBLDBFQTJCdUQsTUFBS0gsMkJBQUwsQ0FBaUM7QUFDN0dFLE1BQUFBLE1BQU0sRUFBRSxPQURxRztBQUU3R0MsTUFBQUEsSUFBSSxFQUFFO0FBRnVHLEtBQWpDLENBM0J2RDs7QUFFckIsVUFBS0osR0FBTCxHQUFXQSxHQUFYOztBQUNBLFVBQUtLLFVBQUw7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixDQUFjUCxHQUFkLENBQWpCO0FBQ0EsVUFBS1EsT0FBTCxHQUFlLElBQUlDLG1CQUFKLENBQVlULEdBQVosQ0FBZjtBQUNBLFVBQUtVLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFVWCxHQUFWLENBQWI7QUFDQSxVQUFLWSxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWWIsR0FBWixDQUFmO0FBQ0EsVUFBS2MsYUFBTCxHQUFxQixJQUFJQyx5QkFBSixDQUFrQmYsR0FBbEIsQ0FBckI7QUFDQSxVQUFLZ0IsTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVdqQixHQUFYLENBQWQ7QUFDQSxVQUFLa0IsUUFBTCxHQUFnQixJQUFJQyxvQkFBSixDQUFhbkIsR0FBYixDQUFoQjtBQUNBLFVBQUtvQixZQUFMLEdBQW9CLElBQUlDLHdCQUFKLENBQWlCckIsR0FBakIsQ0FBcEI7QUFDQSxVQUFLc0IsTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVd2QixHQUFYLENBQWQ7QUFicUI7QUFjeEI7Ozs7aUNBRWtCO0FBQ2YsV0FBS3dCLFlBQUwsR0FBb0IsUUFBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLFFBQXJCO0FBQ0g7Ozs7RUE5QjhCQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnQgZnJvbSAnLi4vLi4vQ2xpZW50JztcbmltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuaW1wb3J0IEJhc2tldHMgZnJvbSAnLi9CYXNrZXRzJztcbmltcG9ydCBHaWZ0cyBmcm9tICcuL0dpZnRzJztcbmltcG9ydCBTdWJzY3JpcHRpb25zIGZyb20gJy4vU3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgVG95Ym94IGZyb20gJy4vVG95Ym94JztcbmltcG9ydCBDaGVja291dCBmcm9tICcuL0NoZWNrb3V0JztcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vRGV0YWlscyc7XG5pbXBvcnQgQWRkcmVzc2VzIGZyb20gJy4vQWRkcmVzc2VzJztcbmltcG9ydCBQcm9kdWN0TGlzdHMgZnJvbSAnLi9Qcm9kdWN0TGlzdHMnO1xuaW1wb3J0IE9yZGVycyBmcm9tICcuL09yZGVycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnLCBIdHRwQ2xpZW50UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VycyBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIHB1YmxpYyBhZGRyZXNzZXM6IEFkZHJlc3NlcztcbiAgICBwdWJsaWMgYmFza2V0czogQmFza2V0cztcbiAgICBwdWJsaWMgZ2lmdHM6IEdpZnRzO1xuICAgIHB1YmxpYyBkZXRhaWxzOiBEZXRhaWxzO1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25zO1xuICAgIHB1YmxpYyB0b3lib3g6IFRveWJveDtcbiAgICBwdWJsaWMgY2hlY2tvdXQ6IENoZWNrb3V0O1xuICAgIHB1YmxpYyBwcm9kdWN0TGlzdHM6IFByb2R1Y3RMaXN0cztcbiAgICBwdWJsaWMgb3JkZXJzOiBPcmRlcnM7XG5cbiAgICBjb25zdHJ1Y3RvcihhcGk6IENsaWVudCkge1xuICAgICAgICBzdXBlcihhcGkpO1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG5cbiAgICAgICAgdGhpcy5hZGRyZXNzZXMgPSBuZXcgQWRkcmVzc2VzKGFwaSk7XG4gICAgICAgIHRoaXMuYmFza2V0cyA9IG5ldyBCYXNrZXRzKGFwaSk7XG4gICAgICAgIHRoaXMuZ2lmdHMgPSBuZXcgR2lmdHMoYXBpKTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gbmV3IERldGFpbHMoYXBpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbnMoYXBpKTtcbiAgICAgICAgdGhpcy50b3lib3ggPSBuZXcgVG95Ym94KGFwaSk7XG4gICAgICAgIHRoaXMuY2hlY2tvdXQgPSBuZXcgQ2hlY2tvdXQoYXBpKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdHMgPSBuZXcgUHJvZHVjdExpc3RzKGFwaSk7XG4gICAgICAgIHRoaXMub3JkZXJzID0gbmV3IE9yZGVycyhhcGkpO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy91c2Vycyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdtZW1iZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGU6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBhY2Nlc3M6ICdndWVzdCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgY2xhaW1HdWVzdFJlc291cmNlczogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAnL2NsYWltJyxcbiAgICB9KTtcbn1cbiJdfQ==