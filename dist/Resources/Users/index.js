"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Baskets = _interopRequireDefault(require("./Baskets"));

var _Subscriptions = _interopRequireDefault(require("./Subscriptions"));

var _Toyboxs = _interopRequireDefault(require("./Toyboxs"));

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
 * - `client.users.create();`
 * - `client.users.baskets...;`
 * - `client.users.subscriptions...;`
 * - `client.users.toybox...;`
 * - `client.users.details...;`
 */
var Users =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Users, _AbstractResource);

  function Users(api) {
    var _this;

    _classCallCheck(this, Users);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Users).call(this, api));

    _defineProperty(_assertThisInitialized(_this), "baskets", void 0);

    _defineProperty(_assertThisInitialized(_this), "details", void 0);

    _defineProperty(_assertThisInitialized(_this), "subscriptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "toybox", void 0);

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/'
    }));

    _this.api = api;

    _this.initialise();

    _this.baskets = new _Baskets["default"](api);
    _this.details = new _Details["default"](api);
    _this.subscriptions = new _Subscriptions["default"](api);
    _this.toybox = new _Toyboxs["default"](api);
    return _this;
  }

  _createClass(Users, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/users';
      this.defaultAccess = 'guest';
    }
  }]);

  return Users;
}(_AbstractResource2["default"]);

exports["default"] = Users;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImJhc2tldHMiLCJCYXNrZXRzIiwiZGV0YWlscyIsIkRldGFpbHMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsInRveWJveCIsIlRveWJveCIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLEs7Ozs7O0FBTWpCLGlCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLCtFQUFNQSxHQUFOOztBQURxQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSw2REFlQyxNQUFLQywyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLE1BRCtDO0FBRXZEQyxNQUFBQSxJQUFJLEVBQUU7QUFGaUQsS0FBakMsQ0FmRDs7QUFFckIsVUFBS0gsR0FBTCxHQUFXQSxHQUFYOztBQUNBLFVBQUtJLFVBQUw7O0FBQ0EsVUFBS0MsT0FBTCxHQUFlLElBQUlDLG1CQUFKLENBQVlOLEdBQVosQ0FBZjtBQUNBLFVBQUtPLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZUixHQUFaLENBQWY7QUFDQSxVQUFLUyxhQUFMLEdBQXFCLElBQUlDLHlCQUFKLENBQWtCVixHQUFsQixDQUFyQjtBQUNBLFVBQUtXLE1BQUwsR0FBYyxJQUFJQyxtQkFBSixDQUFXWixHQUFYLENBQWQ7QUFQcUI7QUFReEI7Ozs7aUNBRWtCO0FBQ2YsV0FBS2EsWUFBTCxHQUFvQixRQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsT0FBckI7QUFDSDs7OztFQW5COEJDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9DbGllbnQnO1xuaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5pbXBvcnQgQmFza2V0cyBmcm9tICcuL0Jhc2tldHMnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbnMgZnJvbSAnLi9TdWJzY3JpcHRpb25zJztcbmltcG9ydCBUb3lib3ggZnJvbSAnLi9Ub3lib3hzJztcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vRGV0YWlscyc7XG5cbi8qKlxuICogX1Jlc291cmNlcyBjb25uZWN0ZWQgdG8gYSB1c2VyLl9cbiAqXG4gKiAtIGBjbGllbnQudXNlcnMuY3JlYXRlKCk7YFxuICogLSBgY2xpZW50LnVzZXJzLmJhc2tldHMuLi47YFxuICogLSBgY2xpZW50LnVzZXJzLnN1YnNjcmlwdGlvbnMuLi47YFxuICogLSBgY2xpZW50LnVzZXJzLnRveWJveC4uLjtgXG4gKiAtIGBjbGllbnQudXNlcnMuZGV0YWlscy4uLjtgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgcHVibGljIGJhc2tldHM6IEJhc2tldHM7XG4gICAgcHVibGljIGRldGFpbHM6IERldGFpbHM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbnM7XG4gICAgcHVibGljIHRveWJveDogVG95Ym94O1xuXG4gICAgY29uc3RydWN0b3IoYXBpOiBDbGllbnQpIHtcbiAgICAgICAgc3VwZXIoYXBpKTtcbiAgICAgICAgdGhpcy5hcGkgPSBhcGk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICAgICAgICB0aGlzLmJhc2tldHMgPSBuZXcgQmFza2V0cyhhcGkpO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyhhcGkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9ucyhhcGkpO1xuICAgICAgICB0aGlzLnRveWJveCA9IG5ldyBUb3lib3goYXBpKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcvdXNlcnMnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnZ3Vlc3QnO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGU6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xufVxuIl19