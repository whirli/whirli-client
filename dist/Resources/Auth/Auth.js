"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

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

var Auth = /*#__PURE__*/function (_AbstractResource) {
  _inherits(Auth, _AbstractResource);

  var _super = _createSuper(Auth);

  function Auth() {
    var _this;

    _classCallCheck(this, Auth);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "forgotPassword", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/password/forgot'
    }));

    _defineProperty(_assertThisInitialized(_this), "resetPassword", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/password/reset'
    }));

    _defineProperty(_assertThisInitialized(_this), "validateResetPasswordToken", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/password/validate'
    }));

    return _this;
  }

  _createClass(Auth, [{
    key: "initialise",
    value: function initialise() {
      this.defaultAccess = 'guest';
    }
  }]);

  return Auth;
}(_AbstractResource2["default"]);

exports["default"] = Auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvQXV0aC9BdXRoLnRzIl0sIm5hbWVzIjpbIkF1dGgiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7OztxRUFLaUIsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDL0RDLE1BQUFBLE1BQU0sRUFBRSxNQUR1RDtBQUUvREMsTUFBQUEsSUFBSSxFQUFFO0FBRnlELEtBQWpDLEM7O29FQUtELE1BQUtGLDJCQUFMLENBQWlDO0FBQzlEQyxNQUFBQSxNQUFNLEVBQUUsTUFEc0Q7QUFFOURDLE1BQUFBLElBQUksRUFBRTtBQUZ3RCxLQUFqQyxDOztpRkFLYSxNQUFLRiwyQkFBTCxDQUFpQztBQUMzRUMsTUFBQUEsTUFBTSxFQUFFLE1BRG1FO0FBRTNFQyxNQUFBQSxJQUFJLEVBQUU7QUFGcUUsS0FBakMsQzs7Ozs7OztpQ0FkM0I7QUFDZixXQUFLQyxhQUFMLEdBQXFCLE9BQXJCO0FBQ0g7Ozs7RUFINkJDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGggZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnZ3Vlc3QnO1xuICAgIH1cblxuICAgIHB1YmxpYyBmb3Jnb3RQYXNzd29yZDogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnL3Bhc3N3b3JkL2ZvcmdvdCcsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgcmVzZXRQYXNzd29yZDogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnL3Bhc3N3b3JkL3Jlc2V0JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB2YWxpZGF0ZVJlc2V0UGFzc3dvcmRUb2tlbjogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnL3Bhc3N3b3JkL3ZhbGlkYXRlJyxcbiAgICB9KTtcbn1cbiJdfQ==