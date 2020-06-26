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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Users = /*#__PURE__*/function (_AbstractResource) {
  _inherits(Users, _AbstractResource);

  var _super = _createSuper(Users);

  function Users(api) {
    var _this;

    _classCallCheck(this, Users);

    _this = _super.call(this, api);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJhY2Nlc3MiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFkZHJlc3NlcyIsIkFkZHJlc3NlcyIsImJhc2tldHMiLCJCYXNrZXRzIiwiZ2lmdHMiLCJHaWZ0cyIsImRldGFpbHMiLCJEZXRhaWxzIiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbnMiLCJ0b3lib3giLCJUb3lib3giLCJjaGVja291dCIsIkNoZWNrb3V0IiwicHJvZHVjdExpc3RzIiwiUHJvZHVjdExpc3RzIiwib3JkZXJzIiwiT3JkZXJzIiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7QUFXakIsaUJBQVlDLEdBQVosRUFBeUI7QUFBQTs7QUFBQTs7QUFDckIsOEJBQU1BLEdBQU47O0FBRHFCOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLDZEQXFCQyxNQUFLQywyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLE9BRCtDO0FBRXZEQyxNQUFBQSxNQUFNLEVBQUUsTUFGK0M7QUFHdkRDLE1BQUFBLElBQUksRUFBRTtBQUhpRCxLQUFqQyxDQXJCRDs7QUFBQSwwRUEyQnVELE1BQUtILDJCQUFMLENBQWlDO0FBQzdHRSxNQUFBQSxNQUFNLEVBQUUsT0FEcUc7QUFFN0dDLE1BQUFBLElBQUksRUFBRTtBQUZ1RyxLQUFqQyxDQTNCdkQ7O0FBRXJCLFVBQUtKLEdBQUwsR0FBV0EsR0FBWDs7QUFDQSxVQUFLSyxVQUFMOztBQUVBLFVBQUtDLFNBQUwsR0FBaUIsSUFBSUMscUJBQUosQ0FBY1AsR0FBZCxDQUFqQjtBQUNBLFVBQUtRLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZVCxHQUFaLENBQWY7QUFDQSxVQUFLVSxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBVVgsR0FBVixDQUFiO0FBQ0EsVUFBS1ksT0FBTCxHQUFlLElBQUlDLG1CQUFKLENBQVliLEdBQVosQ0FBZjtBQUNBLFVBQUtjLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosQ0FBa0JmLEdBQWxCLENBQXJCO0FBQ0EsVUFBS2dCLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXakIsR0FBWCxDQUFkO0FBQ0EsVUFBS2tCLFFBQUwsR0FBZ0IsSUFBSUMsb0JBQUosQ0FBYW5CLEdBQWIsQ0FBaEI7QUFDQSxVQUFLb0IsWUFBTCxHQUFvQixJQUFJQyx3QkFBSixDQUFpQnJCLEdBQWpCLENBQXBCO0FBQ0EsVUFBS3NCLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXdkIsR0FBWCxDQUFkO0FBYnFCO0FBY3hCOzs7O2lDQUVrQjtBQUNmLFdBQUt3QixZQUFMLEdBQW9CLFFBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixRQUFyQjtBQUNIOzs7O0VBOUI4QkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCBCYXNrZXRzIGZyb20gJy4vQmFza2V0cyc7XG5pbXBvcnQgR2lmdHMgZnJvbSAnLi9HaWZ0cyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9ucyBmcm9tICcuL1N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IFRveWJveCBmcm9tICcuL1RveWJveCc7XG5pbXBvcnQgQ2hlY2tvdXQgZnJvbSAnLi9DaGVja291dCc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xuaW1wb3J0IEFkZHJlc3NlcyBmcm9tICcuL0FkZHJlc3Nlcyc7XG5pbXBvcnQgUHJvZHVjdExpc3RzIGZyb20gJy4vUHJvZHVjdExpc3RzJztcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9PcmRlcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZywgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwdWJsaWMgYWRkcmVzc2VzOiBBZGRyZXNzZXM7XG4gICAgcHVibGljIGJhc2tldHM6IEJhc2tldHM7XG4gICAgcHVibGljIGdpZnRzOiBHaWZ0cztcbiAgICBwdWJsaWMgZGV0YWlsczogRGV0YWlscztcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9ucztcbiAgICBwdWJsaWMgdG95Ym94OiBUb3lib3g7XG4gICAgcHVibGljIGNoZWNrb3V0OiBDaGVja291dDtcbiAgICBwdWJsaWMgcHJvZHVjdExpc3RzOiBQcm9kdWN0TGlzdHM7XG4gICAgcHVibGljIG9yZGVyczogT3JkZXJzO1xuXG4gICAgY29uc3RydWN0b3IoYXBpOiBDbGllbnQpIHtcbiAgICAgICAgc3VwZXIoYXBpKTtcbiAgICAgICAgdGhpcy5hcGkgPSBhcGk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuXG4gICAgICAgIHRoaXMuYWRkcmVzc2VzID0gbmV3IEFkZHJlc3NlcyhhcGkpO1xuICAgICAgICB0aGlzLmJhc2tldHMgPSBuZXcgQmFza2V0cyhhcGkpO1xuICAgICAgICB0aGlzLmdpZnRzID0gbmV3IEdpZnRzKGFwaSk7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IG5ldyBEZXRhaWxzKGFwaSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb25zKGFwaSk7XG4gICAgICAgIHRoaXMudG95Ym94ID0gbmV3IFRveWJveChhcGkpO1xuICAgICAgICB0aGlzLmNoZWNrb3V0ID0gbmV3IENoZWNrb3V0KGFwaSk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3RzID0gbmV3IFByb2R1Y3RMaXN0cyhhcGkpO1xuICAgICAgICB0aGlzLm9yZGVycyA9IG5ldyBPcmRlcnMoYXBpKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcvdXNlcnMnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnbWVtYmVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgYWNjZXNzOiAnZ3Vlc3QnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGNsYWltR3Vlc3RSZXNvdXJjZXM6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgcGF0aDogJy9jbGFpbScsXG4gICAgfSk7XG59XG4iXX0=