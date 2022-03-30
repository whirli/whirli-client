"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Gifts = /*#__PURE__*/function (_AbstractResource) {
  _inherits(Gifts, _AbstractResource);

  var _super = _createSuper(Gifts);

  function Gifts() {
    var _this;

    _classCallCheck(this, Gifts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/gifts'
    }));

    _defineProperty(_assertThisInitialized(_this), "getActive", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/active-gift'
    }));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/gifts/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "update", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/gifts/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "placeOrder", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/gifts/{id}/pay'
    }));

    return _this;
  }

  _createClass(Gifts, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '';
      this.defaultAccess = 'member';
    }
  }]);

  return Gifts;
}(_AbstractResource2["default"]);

exports["default"] = Gifts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvR2lmdHMudHMiXSwibmFtZXMiOlsiR2lmdHMiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs2REFNa0QsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDaEdDLE1BQUFBLE1BQU0sRUFBRSxNQUR3RjtBQUVoR0MsTUFBQUEsSUFBSSxFQUFFO0FBRjBGLEtBQWpDLEM7O2dFQUtHLE1BQUtGLDJCQUFMLENBQWlDO0FBQ25HQyxNQUFBQSxNQUFNLEVBQUUsS0FEMkY7QUFFbkdDLE1BQUFBLElBQUksRUFBRTtBQUY2RixLQUFqQyxDOzswREFLVSxNQUFLRiwyQkFBTCxDQUFpQztBQUM3R0MsTUFBQUEsTUFBTSxFQUFFLEtBRHFHO0FBRTdHQyxNQUFBQSxJQUFJLEVBQUU7QUFGdUcsS0FBakMsQzs7NkRBS0csTUFBS0YsMkJBQUwsQ0FDL0U7QUFDSUMsTUFBQUEsTUFBTSxFQUFFLE9BRFo7QUFFSUMsTUFBQUEsSUFBSSxFQUFFO0FBRlYsS0FEK0UsQzs7aUVBVXpELE1BQUtGLDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsT0FEK0M7QUFFdkRDLE1BQUFBLElBQUksRUFBRTtBQUZpRCxLQUFqQyxDOzs7Ozs7O1dBOUIxQixzQkFBbUI7QUFDZixXQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixRQUFyQjtBQUNIOzs7O0VBSjhCQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZywgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lmdHMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnbWVtYmVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJy9naWZ0cycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgZ2V0QWN0aXZlOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL2FjdGl2ZS1naWZ0JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBnZXQ6IChnaWZ0SWQ6IHN0cmluZywgLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL2dpZnRzL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHVwZGF0ZTogKGdpZnRJZDogc3RyaW5nLCAuLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyhcbiAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgICAgcGF0aDogJy9naWZ0cy97aWR9JyxcbiAgICAgICAgfSxcbiAgICApO1xuXG4gICAgcHVibGljIHBsYWNlT3JkZXI6IChcbiAgICAgICAgZ2lmdElkOiBzdHJpbmcsXG4gICAgICAgIC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWdcbiAgICApID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAnL2dpZnRzL3tpZH0vcGF5JyxcbiAgICB9KTtcbn1cbiJdfQ==