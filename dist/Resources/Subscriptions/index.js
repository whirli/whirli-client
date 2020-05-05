"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Addons = _interopRequireDefault(require("./Addons"));

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
 * _Resources connected to subscriptions._
 *
 * - `client.subscriptions.all();`
 * - `client.subscriptions.addons.all();`
 */
var Subscriptions =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Subscriptions, _AbstractResource);

  function Subscriptions(api) {
    var _this;

    _classCallCheck(this, Subscriptions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Subscriptions).call(this, api));

    _defineProperty(_assertThisInitialized(_this), "addons", void 0);

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/'
    }));

    _this.api = api;

    _this.initialise();

    _this.addons = new _Addons["default"](api);
    return _this;
  }

  _createClass(Subscriptions, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/subscriptions';
      this.defaultAccess = 'guest';
    }
  }]);

  return Subscriptions;
}(_AbstractResource2["default"]);

exports["default"] = Subscriptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvU3Vic2NyaXB0aW9ucy9pbmRleC50cyJdLCJuYW1lcyI6WyJTdWJzY3JpcHRpb25zIiwiYXBpIiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsImluaXRpYWxpc2UiLCJhZGRvbnMiLCJBZGRvbnMiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTXFCQSxhOzs7OztBQUdqQix5QkFBWUMsR0FBWixFQUF5QjtBQUFBOztBQUFBOztBQUNyQix1RkFBTUEsR0FBTjs7QUFEcUI7O0FBQUEsMERBWUYsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDcERDLE1BQUFBLE1BQU0sRUFBRSxLQUQ0QztBQUVwREMsTUFBQUEsSUFBSSxFQUFFO0FBRjhDLEtBQWpDLENBWkU7O0FBRXJCLFVBQUtILEdBQUwsR0FBV0EsR0FBWDs7QUFDQSxVQUFLSSxVQUFMOztBQUNBLFVBQUtDLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXTixHQUFYLENBQWQ7QUFKcUI7QUFLeEI7Ozs7aUNBRWtCO0FBQ2YsV0FBS08sWUFBTCxHQUFvQixnQkFBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE9BQXJCO0FBQ0g7Ozs7RUFic0NDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9DbGllbnQnO1xuaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5pbXBvcnQgQWRkb25zIGZyb20gJy4vQWRkb25zJztcblxuLyoqXG4gKiBfUmVzb3VyY2VzIGNvbm5lY3RlZCB0byBzdWJzY3JpcHRpb25zLl9cbiAqXG4gKiAtIGBjbGllbnQuc3Vic2NyaXB0aW9ucy5hbGwoKTtgXG4gKiAtIGBjbGllbnQuc3Vic2NyaXB0aW9ucy5hZGRvbnMuYWxsKCk7YFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzY3JpcHRpb25zIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgcHVibGljIGFkZG9uczogQWRkb25zO1xuXG4gICAgY29uc3RydWN0b3IoYXBpOiBDbGllbnQpIHtcbiAgICAgICAgc3VwZXIoYXBpKTtcbiAgICAgICAgdGhpcy5hcGkgPSBhcGk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICAgICAgICB0aGlzLmFkZG9ucyA9IG5ldyBBZGRvbnMoYXBpKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcvc3Vic2NyaXB0aW9ucyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdndWVzdCc7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbDogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcbn1cbiJdfQ==