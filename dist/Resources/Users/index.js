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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJhY2Nlc3MiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFkZHJlc3NlcyIsIkFkZHJlc3NlcyIsImJhc2tldHMiLCJCYXNrZXRzIiwiZ2lmdHMiLCJHaWZ0cyIsImRldGFpbHMiLCJEZXRhaWxzIiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbnMiLCJ0b3lib3giLCJUb3lib3giLCJjaGVja291dCIsIkNoZWNrb3V0IiwicHJvZHVjdExpc3RzIiwiUHJvZHVjdExpc3RzIiwid2FpdFNwb3RzIiwiV2FpdFNwb3RzIiwib3JkZXJzIiwiT3JkZXJzIiwicmVmZXJyYWwiLCJSZWZlcnJhbCIsImNhcmQiLCJDYXJkIiwibXlQbGF5dGltZSIsIk15UGxheXRpbWUiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7O0FBZWpCLGlCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLCtFQUFNQSxHQUFOOztBQURxQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSwyREF5QndDLE1BQUtDLDJCQUFMLENBQWlDO0FBQzlGQyxNQUFBQSxNQUFNLEVBQUUsTUFEc0Y7QUFFOUZDLE1BQUFBLE1BQU0sRUFBRSxLQUZzRjtBQUc5RkMsTUFBQUEsSUFBSSxFQUFFO0FBSHdGLEtBQWpDLENBekJ4Qzs7QUFBQSw2REErQkMsTUFBS0gsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxPQUQrQztBQUV2REMsTUFBQUEsTUFBTSxFQUFFLE1BRitDO0FBR3ZEQyxNQUFBQSxJQUFJLEVBQUU7QUFIaUQsS0FBakMsQ0EvQkQ7O0FBQUEsMEVBcUN1RCxNQUFLSCwyQkFBTCxDQUFpQztBQUM3R0UsTUFBQUEsTUFBTSxFQUFFLE9BRHFHO0FBRTdHQyxNQUFBQSxJQUFJLEVBQUU7QUFGdUcsS0FBakMsQ0FyQ3ZEOztBQUVyQixVQUFLSixHQUFMLEdBQVdBLEdBQVg7O0FBQ0EsVUFBS0ssVUFBTDs7QUFFQSxVQUFLQyxTQUFMLEdBQWlCLElBQUlDLHFCQUFKLENBQWNQLEdBQWQsQ0FBakI7QUFDQSxVQUFLUSxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWVQsR0FBWixDQUFmO0FBQ0EsVUFBS1UsS0FBTCxHQUFhLElBQUlDLGlCQUFKLENBQVVYLEdBQVYsQ0FBYjtBQUNBLFVBQUtZLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZYixHQUFaLENBQWY7QUFDQSxVQUFLYyxhQUFMLEdBQXFCLElBQUlDLHlCQUFKLENBQWtCZixHQUFsQixDQUFyQjtBQUNBLFVBQUtnQixNQUFMLEdBQWMsSUFBSUMsa0JBQUosQ0FBV2pCLEdBQVgsQ0FBZDtBQUNBLFVBQUtrQixRQUFMLEdBQWdCLElBQUlDLG9CQUFKLENBQWFuQixHQUFiLENBQWhCO0FBQ0EsVUFBS29CLFlBQUwsR0FBb0IsSUFBSUMsd0JBQUosQ0FBaUJyQixHQUFqQixDQUFwQjtBQUNBLFVBQUtzQixTQUFMLEdBQWlCLElBQUlDLHFCQUFKLENBQWN2QixHQUFkLENBQWpCO0FBQ0EsVUFBS3dCLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXekIsR0FBWCxDQUFkO0FBQ0EsVUFBSzBCLFFBQUwsR0FBZ0IsSUFBSUMsb0JBQUosQ0FBYTNCLEdBQWIsQ0FBaEI7QUFDQSxVQUFLNEIsSUFBTCxHQUFZLElBQUlDLGdCQUFKLENBQVM3QixHQUFULENBQVo7QUFDQSxVQUFLOEIsVUFBTCxHQUFrQixJQUFJQyxzQkFBSixDQUFlL0IsR0FBZixDQUFsQjtBQWpCcUI7QUFrQnhCOzs7O2lDQUVrQjtBQUNmLFdBQUtnQyxZQUFMLEdBQW9CLEdBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixRQUFyQjtBQUNIOzs7O0VBdEM4QkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCBCYXNrZXRzIGZyb20gJy4vQmFza2V0cyc7XG5pbXBvcnQgR2lmdHMgZnJvbSAnLi9HaWZ0cyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9ucyBmcm9tICcuL1N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IFRveWJveCBmcm9tICcuL1RveWJveCc7XG5pbXBvcnQgQ2hlY2tvdXQgZnJvbSAnLi9DaGVja291dCc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xuaW1wb3J0IEFkZHJlc3NlcyBmcm9tICcuL0FkZHJlc3Nlcyc7XG5pbXBvcnQgUHJvZHVjdExpc3RzIGZyb20gJy4vUHJvZHVjdExpc3RzJztcbmltcG9ydCBXYWl0U3BvdHMgZnJvbSAnLi9XYWl0U3BvdHMnO1xuaW1wb3J0IE9yZGVycyBmcm9tICcuL09yZGVycyc7XG5pbXBvcnQgUmVmZXJyYWwgZnJvbSAnLi9SZWZlcnJhbCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuaW1wb3J0IE15UGxheXRpbWUgZnJvbSAnLi9NeVBsYXl0aW1lJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcsIEh0dHBDbGllbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgcHVibGljIGFkZHJlc3NlczogQWRkcmVzc2VzO1xuICAgIHB1YmxpYyBiYXNrZXRzOiBCYXNrZXRzO1xuICAgIHB1YmxpYyBnaWZ0czogR2lmdHM7XG4gICAgcHVibGljIGRldGFpbHM6IERldGFpbHM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbnM7XG4gICAgcHVibGljIHRveWJveDogVG95Ym94O1xuICAgIHB1YmxpYyBjaGVja291dDogQ2hlY2tvdXQ7XG4gICAgcHVibGljIHByb2R1Y3RMaXN0czogUHJvZHVjdExpc3RzO1xuICAgIHB1YmxpYyB3YWl0U3BvdHM6IFdhaXRTcG90cztcbiAgICBwdWJsaWMgb3JkZXJzOiBPcmRlcnM7XG4gICAgcHVibGljIHJlZmVycmFsOiBSZWZlcnJhbDtcbiAgICBwdWJsaWMgY2FyZDogQ2FyZDtcbiAgICBwdWJsaWMgbXlQbGF5dGltZTogTXlQbGF5dGltZTtcblxuICAgIGNvbnN0cnVjdG9yKGFwaTogQ2xpZW50KSB7XG4gICAgICAgIHN1cGVyKGFwaSk7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcblxuICAgICAgICB0aGlzLmFkZHJlc3NlcyA9IG5ldyBBZGRyZXNzZXMoYXBpKTtcbiAgICAgICAgdGhpcy5iYXNrZXRzID0gbmV3IEJhc2tldHMoYXBpKTtcbiAgICAgICAgdGhpcy5naWZ0cyA9IG5ldyBHaWZ0cyhhcGkpO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyhhcGkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9ucyhhcGkpO1xuICAgICAgICB0aGlzLnRveWJveCA9IG5ldyBUb3lib3goYXBpKTtcbiAgICAgICAgdGhpcy5jaGVja291dCA9IG5ldyBDaGVja291dChhcGkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0cyA9IG5ldyBQcm9kdWN0TGlzdHMoYXBpKTtcbiAgICAgICAgdGhpcy53YWl0U3BvdHMgPSBuZXcgV2FpdFNwb3RzKGFwaSk7XG4gICAgICAgIHRoaXMub3JkZXJzID0gbmV3IE9yZGVycyhhcGkpO1xuICAgICAgICB0aGlzLnJlZmVycmFsID0gbmV3IFJlZmVycmFsKGFwaSk7XG4gICAgICAgIHRoaXMuY2FyZCA9IG5ldyBDYXJkKGFwaSk7XG4gICAgICAgIHRoaXMubXlQbGF5dGltZSA9IG5ldyBNeVBsYXl0aW1lKGFwaSk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnLyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdtZW1iZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyB1c2VyOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBhY2Nlc3M6ICdhdXRoJyxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJ3VzZXInLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGNyZWF0ZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIGFjY2VzczogJ2d1ZXN0JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICd1c2VycycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgY2xhaW1HdWVzdFJlc291cmNlczogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAndXNlcnMvY2xhaW0nLFxuICAgIH0pO1xufVxuIl19