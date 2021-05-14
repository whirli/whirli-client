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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJhY2Nlc3MiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFkZHJlc3NlcyIsIkFkZHJlc3NlcyIsImJhc2tldHMiLCJCYXNrZXRzIiwiZ2lmdHMiLCJHaWZ0cyIsImRldGFpbHMiLCJEZXRhaWxzIiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbnMiLCJ0b3lib3giLCJUb3lib3giLCJjaGVja291dCIsIkNoZWNrb3V0IiwicHJvZHVjdExpc3RzIiwiUHJvZHVjdExpc3RzIiwid2FpdFNwb3RzIiwiV2FpdFNwb3RzIiwib3JkZXJzIiwiT3JkZXJzIiwicmVmZXJyYWwiLCJSZWZlcnJhbCIsImNhcmQiLCJDYXJkIiwibXlQbGF5dGltZSIsIk15UGxheXRpbWUiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7O0FBZWpCLGlCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLCtFQUFNQSxHQUFOOztBQURxQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSwyREF5QndDLE1BQUtDLDJCQUFMLENBQWlDO0FBQzlGQyxNQUFBQSxNQUFNLEVBQUUsTUFEc0Y7QUFFOUZDLE1BQUFBLE1BQU0sRUFBRSxLQUZzRjtBQUc5RkMsTUFBQUEsSUFBSSxFQUFFO0FBSHdGLEtBQWpDLENBekJ4Qzs7QUFBQSw2REErQjBDLE1BQUtILDJCQUFMLENBQWlDO0FBQ2hHQyxNQUFBQSxNQUFNLEVBQUUsT0FEd0Y7QUFFaEdDLE1BQUFBLE1BQU0sRUFBRSxNQUZ3RjtBQUdoR0MsTUFBQUEsSUFBSSxFQUFFO0FBSDBGLEtBQWpDLENBL0IxQzs7QUFBQSwwRUFxQ3VELE1BQUtILDJCQUFMLENBQWlDO0FBQzdHRSxNQUFBQSxNQUFNLEVBQUUsT0FEcUc7QUFFN0dDLE1BQUFBLElBQUksRUFBRTtBQUZ1RyxLQUFqQyxDQXJDdkQ7O0FBRXJCLFVBQUtKLEdBQUwsR0FBV0EsR0FBWDs7QUFDQSxVQUFLSyxVQUFMOztBQUVBLFVBQUtDLFNBQUwsR0FBaUIsSUFBSUMscUJBQUosQ0FBY1AsR0FBZCxDQUFqQjtBQUNBLFVBQUtRLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZVCxHQUFaLENBQWY7QUFDQSxVQUFLVSxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBVVgsR0FBVixDQUFiO0FBQ0EsVUFBS1ksT0FBTCxHQUFlLElBQUlDLG1CQUFKLENBQVliLEdBQVosQ0FBZjtBQUNBLFVBQUtjLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosQ0FBa0JmLEdBQWxCLENBQXJCO0FBQ0EsVUFBS2dCLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXakIsR0FBWCxDQUFkO0FBQ0EsVUFBS2tCLFFBQUwsR0FBZ0IsSUFBSUMsb0JBQUosQ0FBYW5CLEdBQWIsQ0FBaEI7QUFDQSxVQUFLb0IsWUFBTCxHQUFvQixJQUFJQyx3QkFBSixDQUFpQnJCLEdBQWpCLENBQXBCO0FBQ0EsVUFBS3NCLFNBQUwsR0FBaUIsSUFBSUMscUJBQUosQ0FBY3ZCLEdBQWQsQ0FBakI7QUFDQSxVQUFLd0IsTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVd6QixHQUFYLENBQWQ7QUFDQSxVQUFLMEIsUUFBTCxHQUFnQixJQUFJQyxvQkFBSixDQUFhM0IsR0FBYixDQUFoQjtBQUNBLFVBQUs0QixJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBUzdCLEdBQVQsQ0FBWjtBQUNBLFVBQUs4QixVQUFMLEdBQWtCLElBQUlDLHNCQUFKLENBQWUvQixHQUFmLENBQWxCO0FBakJxQjtBQWtCeEI7Ozs7aUNBRWtCO0FBQ2YsV0FBS2dDLFlBQUwsR0FBb0IsR0FBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLFFBQXJCO0FBQ0g7Ozs7RUF0QzhCQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnQgZnJvbSAnLi4vLi4vQ2xpZW50JztcbmltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuaW1wb3J0IEJhc2tldHMgZnJvbSAnLi9CYXNrZXRzJztcbmltcG9ydCBHaWZ0cyBmcm9tICcuL0dpZnRzJztcbmltcG9ydCBTdWJzY3JpcHRpb25zIGZyb20gJy4vU3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgVG95Ym94IGZyb20gJy4vVG95Ym94JztcbmltcG9ydCBDaGVja291dCBmcm9tICcuL0NoZWNrb3V0JztcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vRGV0YWlscyc7XG5pbXBvcnQgQWRkcmVzc2VzIGZyb20gJy4vQWRkcmVzc2VzJztcbmltcG9ydCBQcm9kdWN0TGlzdHMgZnJvbSAnLi9Qcm9kdWN0TGlzdHMnO1xuaW1wb3J0IFdhaXRTcG90cyBmcm9tICcuL1dhaXRTcG90cyc7XG5pbXBvcnQgT3JkZXJzIGZyb20gJy4vT3JkZXJzJztcbmltcG9ydCBSZWZlcnJhbCBmcm9tICcuL1JlZmVycmFsJztcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5pbXBvcnQgTXlQbGF5dGltZSBmcm9tICcuL015UGxheXRpbWUnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZywgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwdWJsaWMgYWRkcmVzc2VzOiBBZGRyZXNzZXM7XG4gICAgcHVibGljIGJhc2tldHM6IEJhc2tldHM7XG4gICAgcHVibGljIGdpZnRzOiBHaWZ0cztcbiAgICBwdWJsaWMgZGV0YWlsczogRGV0YWlscztcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9ucztcbiAgICBwdWJsaWMgdG95Ym94OiBUb3lib3g7XG4gICAgcHVibGljIGNoZWNrb3V0OiBDaGVja291dDtcbiAgICBwdWJsaWMgcHJvZHVjdExpc3RzOiBQcm9kdWN0TGlzdHM7XG4gICAgcHVibGljIHdhaXRTcG90czogV2FpdFNwb3RzO1xuICAgIHB1YmxpYyBvcmRlcnM6IE9yZGVycztcbiAgICBwdWJsaWMgcmVmZXJyYWw6IFJlZmVycmFsO1xuICAgIHB1YmxpYyBjYXJkOiBDYXJkO1xuICAgIHB1YmxpYyBteVBsYXl0aW1lOiBNeVBsYXl0aW1lO1xuXG4gICAgY29uc3RydWN0b3IoYXBpOiBDbGllbnQpIHtcbiAgICAgICAgc3VwZXIoYXBpKTtcbiAgICAgICAgdGhpcy5hcGkgPSBhcGk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuXG4gICAgICAgIHRoaXMuYWRkcmVzc2VzID0gbmV3IEFkZHJlc3NlcyhhcGkpO1xuICAgICAgICB0aGlzLmJhc2tldHMgPSBuZXcgQmFza2V0cyhhcGkpO1xuICAgICAgICB0aGlzLmdpZnRzID0gbmV3IEdpZnRzKGFwaSk7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IG5ldyBEZXRhaWxzKGFwaSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb25zKGFwaSk7XG4gICAgICAgIHRoaXMudG95Ym94ID0gbmV3IFRveWJveChhcGkpO1xuICAgICAgICB0aGlzLmNoZWNrb3V0ID0gbmV3IENoZWNrb3V0KGFwaSk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3RzID0gbmV3IFByb2R1Y3RMaXN0cyhhcGkpO1xuICAgICAgICB0aGlzLndhaXRTcG90cyA9IG5ldyBXYWl0U3BvdHMoYXBpKTtcbiAgICAgICAgdGhpcy5vcmRlcnMgPSBuZXcgT3JkZXJzKGFwaSk7XG4gICAgICAgIHRoaXMucmVmZXJyYWwgPSBuZXcgUmVmZXJyYWwoYXBpKTtcbiAgICAgICAgdGhpcy5jYXJkID0gbmV3IENhcmQoYXBpKTtcbiAgICAgICAgdGhpcy5teVBsYXl0aW1lID0gbmV3IE15UGxheXRpbWUoYXBpKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcvJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ21lbWJlcic7XG4gICAgfVxuXG4gICAgcHVibGljIHVzZXI6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIGFjY2VzczogJ2F1dGgnLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAndXNlcicsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgY3JlYXRlOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBhY2Nlc3M6ICdndWVzdCcsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAndXNlcnMnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGNsYWltR3Vlc3RSZXNvdXJjZXM6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgcGF0aDogJ3VzZXJzL2NsYWltJyxcbiAgICB9KTtcbn1cbiJdfQ==