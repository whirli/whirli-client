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
 * - `$whirli.user.subscriptions...;`
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

    _defineProperty(_assertThisInitialized(_this), "subscriptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "toybox", void 0);

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/'
    }));

    _this.api = api;

    _this.initialise();

    _this.basket = new _Basket["default"](api);
    _this.details = new _Details["default"](api);
    _this.subscriptions = new _Subscription["default"](api);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlci9pbmRleC50cyJdLCJuYW1lcyI6WyJVc2VyIiwiYXBpIiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsImluaXRpYWxpc2UiLCJiYXNrZXQiLCJCYXNrZXQiLCJkZXRhaWxzIiwiRGV0YWlscyIsInN1YnNjcmlwdGlvbnMiLCJTdWJzY3JpcHRpb25zIiwidG95Ym94IiwiVG95Ym94IiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztJQVNxQkEsSTs7Ozs7QUFNakIsZ0JBQVlDLEdBQVosRUFBeUI7QUFBQTs7QUFBQTs7QUFDckIsOEVBQU1BLEdBQU47O0FBRHFCOztBQUFBOztBQUFBOztBQUFBOztBQUFBLDZEQWVDLE1BQUtDLDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsTUFEK0M7QUFFdkRDLE1BQUFBLElBQUksRUFBRTtBQUZpRCxLQUFqQyxDQWZEOztBQUVyQixVQUFLSCxHQUFMLEdBQVdBLEdBQVg7O0FBQ0EsVUFBS0ksVUFBTDs7QUFDQSxVQUFLQyxNQUFMLEdBQWMsSUFBSUMsa0JBQUosQ0FBV04sR0FBWCxDQUFkO0FBQ0EsVUFBS08sT0FBTCxHQUFlLElBQUlDLG1CQUFKLENBQVlSLEdBQVosQ0FBZjtBQUNBLFVBQUtTLGFBQUwsR0FBcUIsSUFBSUMsd0JBQUosQ0FBa0JWLEdBQWxCLENBQXJCO0FBQ0EsVUFBS1csTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVdaLEdBQVgsQ0FBZDtBQVBxQjtBQVF4Qjs7OztpQ0FFa0I7QUFDZixXQUFLYSxZQUFMLEdBQW9CLFFBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixPQUFyQjtBQUNIOzs7O0VBbkI2QkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCBCYXNrZXQgZnJvbSAnLi9CYXNrZXQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbnMgZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IFRveWJveCBmcm9tICcuL1RveWJveCc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xuXG4vKipcbiAqIF9SZXNvdXJjZXMgY29ubmVjdGVkIHRvIGEgdXNlci5fXG4gKlxuICogLSBgJHdoaXJsaS51c2VyLmNyZWF0ZSgpO2BcbiAqIC0gYCR3aGlybGkudXNlci5iYXNrZXQuLi47YFxuICogLSBgJHdoaXJsaS51c2VyLnN1YnNjcmlwdGlvbnMuLi47YFxuICogLSBgJHdoaXJsaS51c2VyLnRveWJveC4uLjtgXG4gKiAtIGAkd2hpcmxpLnVzZXIuZGV0YWlscy4uLjtgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwdWJsaWMgYmFza2V0OiBCYXNrZXQ7XG4gICAgcHVibGljIGRldGFpbHM6IERldGFpbHM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbnM7XG4gICAgcHVibGljIHRveWJveDogVG95Ym94O1xuXG4gICAgY29uc3RydWN0b3IoYXBpOiBDbGllbnQpIHtcbiAgICAgICAgc3VwZXIoYXBpKTtcbiAgICAgICAgdGhpcy5hcGkgPSBhcGk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICAgICAgICB0aGlzLmJhc2tldCA9IG5ldyBCYXNrZXQoYXBpKTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gbmV3IERldGFpbHMoYXBpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbnMoYXBpKTtcbiAgICAgICAgdGhpcy50b3lib3ggPSBuZXcgVG95Ym94KGFwaSk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL3VzZXJzJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ2d1ZXN0JztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcbn1cbiJdfQ==