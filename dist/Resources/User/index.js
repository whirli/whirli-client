"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Basket = _interopRequireDefault(require("./Basket"));

var _Subscription = _interopRequireDefault(require("./Subscription"));

var _Toybox = _interopRequireDefault(require("./Toybox"));

var _Details = _interopRequireDefault(require("./Details"));

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

/**
 * _Resources connected to a user._
 *
 * - `$whirli.user.create();`
 * - `$whirli.user.basket...;`
 * - `$whirli.user.subscription...;`
 * - `$whirli.user.toybox...;`
 * - `$whirli.user.details...;`
 */
var User =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(User, _AbstractResource);

  function User(api) {
    var _this;

    _classCallCheck(this, User);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(User).call(this, api));

    _defineProperty(_assertThisInitialized(_this), "basket", void 0);

    _defineProperty(_assertThisInitialized(_this), "details", void 0);

    _defineProperty(_assertThisInitialized(_this), "subscription", void 0);

    _defineProperty(_assertThisInitialized(_this), "toybox", void 0);

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/'
    }));

    _this.api = api;

    _this.initialise();

    _this.basket = new _Basket["default"](api);
    _this.details = new _Details["default"](api);
    _this.subscription = new _Subscription["default"](api);
    _this.toybox = new _Toybox["default"](api);
    return _this;
  }

  _createClass(User, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/users';
      this.defaultAccess = 'guest';
    }
  }]);

  return User;
}(_AbstractResource2["default"]);

exports["default"] = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlci9pbmRleC50cyJdLCJuYW1lcyI6WyJVc2VyIiwiYXBpIiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsImluaXRpYWxpc2UiLCJiYXNrZXQiLCJCYXNrZXQiLCJkZXRhaWxzIiwiRGV0YWlscyIsInN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsInRveWJveCIsIlRveWJveCIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLEk7Ozs7O0FBTWpCLGdCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLDhFQUFNQSxHQUFOOztBQURxQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSw2REFlQyxNQUFLQywyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLE1BRCtDO0FBRXZEQyxNQUFBQSxJQUFJLEVBQUU7QUFGaUQsS0FBakMsQ0FmRDs7QUFFckIsVUFBS0gsR0FBTCxHQUFXQSxHQUFYOztBQUNBLFVBQUtJLFVBQUw7O0FBQ0EsVUFBS0MsTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVdOLEdBQVgsQ0FBZDtBQUNBLFVBQUtPLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZUixHQUFaLENBQWY7QUFDQSxVQUFLUyxZQUFMLEdBQW9CLElBQUlDLHdCQUFKLENBQWlCVixHQUFqQixDQUFwQjtBQUNBLFVBQUtXLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXWixHQUFYLENBQWQ7QUFQcUI7QUFReEI7Ozs7aUNBRWtCO0FBQ2YsV0FBS2EsWUFBTCxHQUFvQixRQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsT0FBckI7QUFDSDs7OztFQW5CNkJDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9DbGllbnQnO1xuaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5pbXBvcnQgQmFza2V0IGZyb20gJy4vQmFza2V0JztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IFRveWJveCBmcm9tICcuL1RveWJveCc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xuXG4vKipcbiAqIF9SZXNvdXJjZXMgY29ubmVjdGVkIHRvIGEgdXNlci5fXG4gKlxuICogLSBgJHdoaXJsaS51c2VyLmNyZWF0ZSgpO2BcbiAqIC0gYCR3aGlybGkudXNlci5iYXNrZXQuLi47YFxuICogLSBgJHdoaXJsaS51c2VyLnN1YnNjcmlwdGlvbi4uLjtgXG4gKiAtIGAkd2hpcmxpLnVzZXIudG95Ym94Li4uO2BcbiAqIC0gYCR3aGlybGkudXNlci5kZXRhaWxzLi4uO2BcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIHB1YmxpYyBiYXNrZXQ6IEJhc2tldDtcbiAgICBwdWJsaWMgZGV0YWlsczogRGV0YWlscztcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHVibGljIHRveWJveDogVG95Ym94O1xuXG4gICAgY29uc3RydWN0b3IoYXBpOiBDbGllbnQpIHtcbiAgICAgICAgc3VwZXIoYXBpKTtcbiAgICAgICAgdGhpcy5hcGkgPSBhcGk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICAgICAgICB0aGlzLmJhc2tldCA9IG5ldyBCYXNrZXQoYXBpKTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gbmV3IERldGFpbHMoYXBpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKGFwaSk7XG4gICAgICAgIHRoaXMudG95Ym94ID0gbmV3IFRveWJveChhcGkpO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy91c2Vycyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdndWVzdCc7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG59XG4iXX0=