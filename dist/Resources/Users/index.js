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

    _defineProperty(_assertThisInitialized(_this), "buyBoltOnGuestResources", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: 'users/buy-bolt-on'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJhY2Nlc3MiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFkZHJlc3NlcyIsIkFkZHJlc3NlcyIsImJhc2tldHMiLCJCYXNrZXRzIiwiZ2lmdHMiLCJHaWZ0cyIsImRldGFpbHMiLCJEZXRhaWxzIiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbnMiLCJ0b3lib3giLCJUb3lib3giLCJjaGVja291dCIsIkNoZWNrb3V0IiwicHJvZHVjdExpc3RzIiwiUHJvZHVjdExpc3RzIiwid2FpdFNwb3RzIiwiV2FpdFNwb3RzIiwib3JkZXJzIiwiT3JkZXJzIiwicmVmZXJyYWwiLCJSZWZlcnJhbCIsImNhcmQiLCJDYXJkIiwibXlQbGF5dGltZSIsIk15UGxheXRpbWUiLCJjaGlsZFByb2ZpbGVzIiwiQ2hpbGRQcm9maWxlcyIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7QUFnQmpCLGlCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLCtFQUFNQSxHQUFOOztBQURxQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSwyREEwQndDLE1BQUtDLDJCQUFMLENBQWlDO0FBQzlGQyxNQUFBQSxNQUFNLEVBQUUsTUFEc0Y7QUFFOUZDLE1BQUFBLE1BQU0sRUFBRSxLQUZzRjtBQUc5RkMsTUFBQUEsSUFBSSxFQUFFO0FBSHdGLEtBQWpDLENBMUJ4Qzs7QUFBQSw2REFnQzBDLE1BQUtILDJCQUFMLENBQWlDO0FBQ2hHQyxNQUFBQSxNQUFNLEVBQUUsT0FEd0Y7QUFFaEdDLE1BQUFBLE1BQU0sRUFBRSxNQUZ3RjtBQUdoR0MsTUFBQUEsSUFBSSxFQUFFO0FBSDBGLEtBQWpDLENBaEMxQzs7QUFBQSwwRUFzQ3VELE1BQUtILDJCQUFMLENBQWlDO0FBQzdHRSxNQUFBQSxNQUFNLEVBQUUsT0FEcUc7QUFFN0dDLE1BQUFBLElBQUksRUFBRTtBQUZ1RyxLQUFqQyxDQXRDdkQ7O0FBQUEsOEVBNkNDLE1BQUtILDJCQUFMLENBQWlDO0FBQ3ZERSxNQUFBQSxNQUFNLEVBQUUsT0FEK0M7QUFFdkRDLE1BQUFBLElBQUksRUFBRTtBQUZpRCxLQUFqQyxDQTdDRDs7QUFFckIsVUFBS0osR0FBTCxHQUFXQSxHQUFYOztBQUNBLFVBQUtLLFVBQUw7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixDQUFjUCxHQUFkLENBQWpCO0FBQ0EsVUFBS1EsT0FBTCxHQUFlLElBQUlDLG1CQUFKLENBQVlULEdBQVosQ0FBZjtBQUNBLFVBQUtVLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFVWCxHQUFWLENBQWI7QUFDQSxVQUFLWSxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWWIsR0FBWixDQUFmO0FBQ0EsVUFBS2MsYUFBTCxHQUFxQixJQUFJQyx5QkFBSixDQUFrQmYsR0FBbEIsQ0FBckI7QUFDQSxVQUFLZ0IsTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVdqQixHQUFYLENBQWQ7QUFDQSxVQUFLa0IsUUFBTCxHQUFnQixJQUFJQyxvQkFBSixDQUFhbkIsR0FBYixDQUFoQjtBQUNBLFVBQUtvQixZQUFMLEdBQW9CLElBQUlDLHdCQUFKLENBQWlCckIsR0FBakIsQ0FBcEI7QUFDQSxVQUFLc0IsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixDQUFjdkIsR0FBZCxDQUFqQjtBQUNBLFVBQUt3QixNQUFMLEdBQWMsSUFBSUMsa0JBQUosQ0FBV3pCLEdBQVgsQ0FBZDtBQUNBLFVBQUswQixRQUFMLEdBQWdCLElBQUlDLG9CQUFKLENBQWEzQixHQUFiLENBQWhCO0FBQ0EsVUFBSzRCLElBQUwsR0FBWSxJQUFJQyxnQkFBSixDQUFTN0IsR0FBVCxDQUFaO0FBQ0EsVUFBSzhCLFVBQUwsR0FBa0IsSUFBSUMsc0JBQUosQ0FBZS9CLEdBQWYsQ0FBbEI7QUFDQSxVQUFLZ0MsYUFBTCxHQUFxQixJQUFJQyx5QkFBSixDQUFrQmpDLEdBQWxCLENBQXJCO0FBbEJxQjtBQW1CeEI7Ozs7aUNBRWtCO0FBQ2YsV0FBS2tDLFlBQUwsR0FBb0IsR0FBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLFFBQXJCO0FBQ0g7Ozs7RUF4QzhCQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnQgZnJvbSAnLi4vLi4vQ2xpZW50JztcbmltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuaW1wb3J0IEJhc2tldHMgZnJvbSAnLi9CYXNrZXRzJztcbmltcG9ydCBHaWZ0cyBmcm9tICcuL0dpZnRzJztcbmltcG9ydCBTdWJzY3JpcHRpb25zIGZyb20gJy4vU3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgVG95Ym94IGZyb20gJy4vVG95Ym94JztcbmltcG9ydCBDaGVja291dCBmcm9tICcuL0NoZWNrb3V0JztcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vRGV0YWlscyc7XG5pbXBvcnQgQWRkcmVzc2VzIGZyb20gJy4vQWRkcmVzc2VzJztcbmltcG9ydCBQcm9kdWN0TGlzdHMgZnJvbSAnLi9Qcm9kdWN0TGlzdHMnO1xuaW1wb3J0IFdhaXRTcG90cyBmcm9tICcuL1dhaXRTcG90cyc7XG5pbXBvcnQgT3JkZXJzIGZyb20gJy4vT3JkZXJzJztcbmltcG9ydCBSZWZlcnJhbCBmcm9tICcuL1JlZmVycmFsJztcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5pbXBvcnQgTXlQbGF5dGltZSBmcm9tICcuL015UGxheXRpbWUnO1xuaW1wb3J0IENoaWxkUHJvZmlsZXMgZnJvbSAnLi9DaGlsZFByb2ZpbGVzJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcsIEh0dHBDbGllbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgcHVibGljIGFkZHJlc3NlczogQWRkcmVzc2VzO1xuICAgIHB1YmxpYyBiYXNrZXRzOiBCYXNrZXRzO1xuICAgIHB1YmxpYyBnaWZ0czogR2lmdHM7XG4gICAgcHVibGljIGRldGFpbHM6IERldGFpbHM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbnM7XG4gICAgcHVibGljIHRveWJveDogVG95Ym94O1xuICAgIHB1YmxpYyBjaGVja291dDogQ2hlY2tvdXQ7XG4gICAgcHVibGljIHByb2R1Y3RMaXN0czogUHJvZHVjdExpc3RzO1xuICAgIHB1YmxpYyB3YWl0U3BvdHM6IFdhaXRTcG90cztcbiAgICBwdWJsaWMgb3JkZXJzOiBPcmRlcnM7XG4gICAgcHVibGljIHJlZmVycmFsOiBSZWZlcnJhbDtcbiAgICBwdWJsaWMgY2FyZDogQ2FyZDtcbiAgICBwdWJsaWMgbXlQbGF5dGltZTogTXlQbGF5dGltZTtcbiAgICBwdWJsaWMgY2hpbGRQcm9maWxlczogQ2hpbGRQcm9maWxlcztcblxuICAgIGNvbnN0cnVjdG9yKGFwaTogQ2xpZW50KSB7XG4gICAgICAgIHN1cGVyKGFwaSk7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcblxuICAgICAgICB0aGlzLmFkZHJlc3NlcyA9IG5ldyBBZGRyZXNzZXMoYXBpKTtcbiAgICAgICAgdGhpcy5iYXNrZXRzID0gbmV3IEJhc2tldHMoYXBpKTtcbiAgICAgICAgdGhpcy5naWZ0cyA9IG5ldyBHaWZ0cyhhcGkpO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyhhcGkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9ucyhhcGkpO1xuICAgICAgICB0aGlzLnRveWJveCA9IG5ldyBUb3lib3goYXBpKTtcbiAgICAgICAgdGhpcy5jaGVja291dCA9IG5ldyBDaGVja291dChhcGkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0cyA9IG5ldyBQcm9kdWN0TGlzdHMoYXBpKTtcbiAgICAgICAgdGhpcy53YWl0U3BvdHMgPSBuZXcgV2FpdFNwb3RzKGFwaSk7XG4gICAgICAgIHRoaXMub3JkZXJzID0gbmV3IE9yZGVycyhhcGkpO1xuICAgICAgICB0aGlzLnJlZmVycmFsID0gbmV3IFJlZmVycmFsKGFwaSk7XG4gICAgICAgIHRoaXMuY2FyZCA9IG5ldyBDYXJkKGFwaSk7XG4gICAgICAgIHRoaXMubXlQbGF5dGltZSA9IG5ldyBNeVBsYXl0aW1lKGFwaSk7XG4gICAgICAgIHRoaXMuY2hpbGRQcm9maWxlcyA9IG5ldyBDaGlsZFByb2ZpbGVzKGFwaSk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnLyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdtZW1iZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyB1c2VyOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBhY2Nlc3M6ICdhdXRoJyxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJ3VzZXInLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGNyZWF0ZTogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgYWNjZXNzOiAnZ3Vlc3QnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJ3VzZXJzJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBjbGFpbUd1ZXN0UmVzb3VyY2VzOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICd1c2Vycy9jbGFpbScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgYnV5Qm9sdE9uR3Vlc3RSZXNvdXJjZXM6IChcbiAgICAgICAgLi4uYXJnczogSHR0cENsaWVudENvbmZpZ1xuICAgICkgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICd1c2Vycy9idXktYm9sdC1vbicsXG4gICAgfSk7XG59XG4iXX0=