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

var _WaitSpots = _interopRequireDefault(require("./WaitSpots"));

var _Orders = _interopRequireDefault(require("./Orders"));

var _Referral = _interopRequireDefault(require("./Referral"));

var _Card = _interopRequireDefault(require("./Card"));

var _MyPlaytime = _interopRequireDefault(require("./MyPlaytime"));

var _ChildProfiles = _interopRequireDefault(require("./ChildProfiles"));

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

    _defineProperty(_assertThisInitialized(_this), "waitSpots", void 0);

    _defineProperty(_assertThisInitialized(_this), "orders", void 0);

    _defineProperty(_assertThisInitialized(_this), "referral", void 0);

    _defineProperty(_assertThisInitialized(_this), "card", void 0);

    _defineProperty(_assertThisInitialized(_this), "myPlaytime", void 0);

    _defineProperty(_assertThisInitialized(_this), "childProfiles", void 0);

    _defineProperty(_assertThisInitialized(_this), "user", _this.createMethodFromPartialSpec({
      access: 'auth',
      method: 'GET',
      path: 'user'
    }));

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      access: 'guest',
      method: 'POST',
      path: 'users'
    }));

    _defineProperty(_assertThisInitialized(_this), "claimGuestResources", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: 'users/claim'
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
    _this.waitSpots = new _WaitSpots["default"](api);
    _this.orders = new _Orders["default"](api);
    _this.referral = new _Referral["default"](api);
    _this.card = new _Card["default"](api);
    _this.myPlaytime = new _MyPlaytime["default"](api);
    _this.childProfiles = new _ChildProfiles["default"](api);
    return _this;
  }

  _createClass(Users, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/';
      this.defaultAccess = 'member';
    }
  }]);

  return Users;
}(_AbstractResource2["default"]);

exports["default"] = Users;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJhY2Nlc3MiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFkZHJlc3NlcyIsIkFkZHJlc3NlcyIsImJhc2tldHMiLCJCYXNrZXRzIiwiZ2lmdHMiLCJHaWZ0cyIsImRldGFpbHMiLCJEZXRhaWxzIiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbnMiLCJ0b3lib3giLCJUb3lib3giLCJjaGVja291dCIsIkNoZWNrb3V0IiwicHJvZHVjdExpc3RzIiwiUHJvZHVjdExpc3RzIiwid2FpdFNwb3RzIiwiV2FpdFNwb3RzIiwib3JkZXJzIiwiT3JkZXJzIiwicmVmZXJyYWwiLCJSZWZlcnJhbCIsImNhcmQiLCJDYXJkIiwibXlQbGF5dGltZSIsIk15UGxheXRpbWUiLCJjaGlsZFByb2ZpbGVzIiwiQ2hpbGRQcm9maWxlcyIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7QUFnQmpCLGlCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLCtFQUFNQSxHQUFOOztBQURxQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSwyREEwQndDLE1BQUtDLDJCQUFMLENBQWlDO0FBQzlGQyxNQUFBQSxNQUFNLEVBQUUsTUFEc0Y7QUFFOUZDLE1BQUFBLE1BQU0sRUFBRSxLQUZzRjtBQUc5RkMsTUFBQUEsSUFBSSxFQUFFO0FBSHdGLEtBQWpDLENBMUJ4Qzs7QUFBQSw2REFnQzBDLE1BQUtILDJCQUFMLENBQWlDO0FBQ2hHQyxNQUFBQSxNQUFNLEVBQUUsT0FEd0Y7QUFFaEdDLE1BQUFBLE1BQU0sRUFBRSxNQUZ3RjtBQUdoR0MsTUFBQUEsSUFBSSxFQUFFO0FBSDBGLEtBQWpDLENBaEMxQzs7QUFBQSwwRUFzQ3VELE1BQUtILDJCQUFMLENBQWlDO0FBQzdHRSxNQUFBQSxNQUFNLEVBQUUsT0FEcUc7QUFFN0dDLE1BQUFBLElBQUksRUFBRTtBQUZ1RyxLQUFqQyxDQXRDdkQ7O0FBRXJCLFVBQUtKLEdBQUwsR0FBV0EsR0FBWDs7QUFDQSxVQUFLSyxVQUFMOztBQUVBLFVBQUtDLFNBQUwsR0FBaUIsSUFBSUMscUJBQUosQ0FBY1AsR0FBZCxDQUFqQjtBQUNBLFVBQUtRLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZVCxHQUFaLENBQWY7QUFDQSxVQUFLVSxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBVVgsR0FBVixDQUFiO0FBQ0EsVUFBS1ksT0FBTCxHQUFlLElBQUlDLG1CQUFKLENBQVliLEdBQVosQ0FBZjtBQUNBLFVBQUtjLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosQ0FBa0JmLEdBQWxCLENBQXJCO0FBQ0EsVUFBS2dCLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXakIsR0FBWCxDQUFkO0FBQ0EsVUFBS2tCLFFBQUwsR0FBZ0IsSUFBSUMsb0JBQUosQ0FBYW5CLEdBQWIsQ0FBaEI7QUFDQSxVQUFLb0IsWUFBTCxHQUFvQixJQUFJQyx3QkFBSixDQUFpQnJCLEdBQWpCLENBQXBCO0FBQ0EsVUFBS3NCLFNBQUwsR0FBaUIsSUFBSUMscUJBQUosQ0FBY3ZCLEdBQWQsQ0FBakI7QUFDQSxVQUFLd0IsTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVd6QixHQUFYLENBQWQ7QUFDQSxVQUFLMEIsUUFBTCxHQUFnQixJQUFJQyxvQkFBSixDQUFhM0IsR0FBYixDQUFoQjtBQUNBLFVBQUs0QixJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBUzdCLEdBQVQsQ0FBWjtBQUNBLFVBQUs4QixVQUFMLEdBQWtCLElBQUlDLHNCQUFKLENBQWUvQixHQUFmLENBQWxCO0FBQ0EsVUFBS2dDLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosQ0FBa0JqQyxHQUFsQixDQUFyQjtBQWxCcUI7QUFtQnhCOzs7O2lDQUVrQjtBQUNmLFdBQUtrQyxZQUFMLEdBQW9CLEdBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixRQUFyQjtBQUNIOzs7O0VBeEM4QkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCBCYXNrZXRzIGZyb20gJy4vQmFza2V0cyc7XG5pbXBvcnQgR2lmdHMgZnJvbSAnLi9HaWZ0cyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9ucyBmcm9tICcuL1N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IFRveWJveCBmcm9tICcuL1RveWJveCc7XG5pbXBvcnQgQ2hlY2tvdXQgZnJvbSAnLi9DaGVja291dCc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xuaW1wb3J0IEFkZHJlc3NlcyBmcm9tICcuL0FkZHJlc3Nlcyc7XG5pbXBvcnQgUHJvZHVjdExpc3RzIGZyb20gJy4vUHJvZHVjdExpc3RzJztcbmltcG9ydCBXYWl0U3BvdHMgZnJvbSAnLi9XYWl0U3BvdHMnO1xuaW1wb3J0IE9yZGVycyBmcm9tICcuL09yZGVycyc7XG5pbXBvcnQgUmVmZXJyYWwgZnJvbSAnLi9SZWZlcnJhbCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuaW1wb3J0IE15UGxheXRpbWUgZnJvbSAnLi9NeVBsYXl0aW1lJztcbmltcG9ydCBDaGlsZFByb2ZpbGVzIGZyb20gJy4vQ2hpbGRQcm9maWxlcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnLCBIdHRwQ2xpZW50UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VycyBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIHB1YmxpYyBhZGRyZXNzZXM6IEFkZHJlc3NlcztcbiAgICBwdWJsaWMgYmFza2V0czogQmFza2V0cztcbiAgICBwdWJsaWMgZ2lmdHM6IEdpZnRzO1xuICAgIHB1YmxpYyBkZXRhaWxzOiBEZXRhaWxzO1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25zO1xuICAgIHB1YmxpYyB0b3lib3g6IFRveWJveDtcbiAgICBwdWJsaWMgY2hlY2tvdXQ6IENoZWNrb3V0O1xuICAgIHB1YmxpYyBwcm9kdWN0TGlzdHM6IFByb2R1Y3RMaXN0cztcbiAgICBwdWJsaWMgd2FpdFNwb3RzOiBXYWl0U3BvdHM7XG4gICAgcHVibGljIG9yZGVyczogT3JkZXJzO1xuICAgIHB1YmxpYyByZWZlcnJhbDogUmVmZXJyYWw7XG4gICAgcHVibGljIGNhcmQ6IENhcmQ7XG4gICAgcHVibGljIG15UGxheXRpbWU6IE15UGxheXRpbWU7XG4gICAgcHVibGljIGNoaWxkUHJvZmlsZXM6IENoaWxkUHJvZmlsZXM7XG5cbiAgICBjb25zdHJ1Y3RvcihhcGk6IENsaWVudCkge1xuICAgICAgICBzdXBlcihhcGkpO1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG5cbiAgICAgICAgdGhpcy5hZGRyZXNzZXMgPSBuZXcgQWRkcmVzc2VzKGFwaSk7XG4gICAgICAgIHRoaXMuYmFza2V0cyA9IG5ldyBCYXNrZXRzKGFwaSk7XG4gICAgICAgIHRoaXMuZ2lmdHMgPSBuZXcgR2lmdHMoYXBpKTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gbmV3IERldGFpbHMoYXBpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbnMoYXBpKTtcbiAgICAgICAgdGhpcy50b3lib3ggPSBuZXcgVG95Ym94KGFwaSk7XG4gICAgICAgIHRoaXMuY2hlY2tvdXQgPSBuZXcgQ2hlY2tvdXQoYXBpKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdHMgPSBuZXcgUHJvZHVjdExpc3RzKGFwaSk7XG4gICAgICAgIHRoaXMud2FpdFNwb3RzID0gbmV3IFdhaXRTcG90cyhhcGkpO1xuICAgICAgICB0aGlzLm9yZGVycyA9IG5ldyBPcmRlcnMoYXBpKTtcbiAgICAgICAgdGhpcy5yZWZlcnJhbCA9IG5ldyBSZWZlcnJhbChhcGkpO1xuICAgICAgICB0aGlzLmNhcmQgPSBuZXcgQ2FyZChhcGkpO1xuICAgICAgICB0aGlzLm15UGxheXRpbWUgPSBuZXcgTXlQbGF5dGltZShhcGkpO1xuICAgICAgICB0aGlzLmNoaWxkUHJvZmlsZXMgPSBuZXcgQ2hpbGRQcm9maWxlcyhhcGkpO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy8nO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnbWVtYmVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgdXNlcjogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgYWNjZXNzOiAnYXV0aCcsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICd1c2VyJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBjcmVhdGU6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIGFjY2VzczogJ2d1ZXN0JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICd1c2VycycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgY2xhaW1HdWVzdFJlc291cmNlczogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAndXNlcnMvY2xhaW0nLFxuICAgIH0pO1xufVxuIl19