"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Addons = _interopRequireDefault(require("../Subscriptions/Addons"));

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

var GuestSubscriptions =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(GuestSubscriptions, _AbstractResource);

  function GuestSubscriptions(api) {
    var _this;

    _classCallCheck(this, GuestSubscriptions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GuestSubscriptions).call(this, api));

    _defineProperty(_assertThisInitialized(_this), "addons", void 0);

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/'
    }));

    _this.addons = new _Addons["default"](api);
    return _this;
  }

  _createClass(GuestSubscriptions, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/subscriptions';
      this.defaultAccess = 'guest';
    }
  }]);

  return GuestSubscriptions;
}(_AbstractResource2["default"]);

exports["default"] = GuestSubscriptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvR3Vlc3RzL1N1YnNjcmlwdGlvbnMudHMiXSwibmFtZXMiOlsiR3Vlc3RTdWJzY3JpcHRpb25zIiwiYXBpIiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsImFkZG9ucyIsIkFkZG9ucyIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsa0I7Ozs7O0FBR2pCLDhCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLDRGQUFNQSxHQUFOOztBQURxQjs7QUFBQSwwREFVdUMsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDN0ZDLE1BQUFBLE1BQU0sRUFBRSxLQURxRjtBQUU3RkMsTUFBQUEsSUFBSSxFQUFFO0FBRnVGLEtBQWpDLENBVnZDOztBQUVyQixVQUFLQyxNQUFMLEdBQWMsSUFBSUMsa0JBQUosQ0FBV0wsR0FBWCxDQUFkO0FBRnFCO0FBR3hCOzs7O2lDQUVrQjtBQUNmLFdBQUtNLFlBQUwsR0FBb0IsZ0JBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixPQUFyQjtBQUNIOzs7O0VBWDJDQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9DbGllbnQnO1xuaW1wb3J0IEFkZG9ucyBmcm9tICcuLi9TdWJzY3JpcHRpb25zL0FkZG9ucyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnLCBIdHRwQ2xpZW50UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWVzdFN1YnNjcmlwdGlvbnMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwdWJsaWMgYWRkb25zOiBBZGRvbnM7XG5cbiAgICBjb25zdHJ1Y3RvcihhcGk6IENsaWVudCkge1xuICAgICAgICBzdXBlcihhcGkpO1xuICAgICAgICB0aGlzLmFkZG9ucyA9IG5ldyBBZGRvbnMoYXBpKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcvc3Vic2NyaXB0aW9ucyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdndWVzdCc7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xufVxuIl19