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

var Baskets = /*#__PURE__*/function (_AbstractResource) {
  _inherits(Baskets, _AbstractResource);

  var _super = _createSuper(Baskets);

  function Baskets() {
    var _this;

    _classCallCheck(this, Baskets);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/baskets/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "addLine", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/basket-lines'
    }));

    _defineProperty(_assertThisInitialized(_this), "updateLine", _this.createMethodFromPartialSpec({
      method: 'PUT',
      path: '/basket-lines/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "removeLine", _this.createMethodFromPartialSpec({
      method: 'DELETE',
      path: '/basket-lines/{id}'
    }));

    return _this;
  }

  _createClass(Baskets, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '';
      this.defaultAccess = 'guest';
    }
  }]);

  return Baskets;
}(_AbstractResource2["default"]);

exports["default"] = Baskets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvR3Vlc3RzL0Jhc2tldHMudHMiXSwibmFtZXMiOlsiQmFza2V0cyIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs7OzBEQU0rQyxNQUFLQywyQkFBTCxDQUFpQztBQUM3RkMsTUFBQUEsTUFBTSxFQUFFLEtBRHFGO0FBRTdGQyxNQUFBQSxJQUFJLEVBQUU7QUFGdUYsS0FBakMsQzs7OERBS0ksTUFBS0YsMkJBQUwsQ0FBaUM7QUFDakdDLE1BQUFBLE1BQU0sRUFBRSxNQUR5RjtBQUVqR0MsTUFBQUEsSUFBSSxFQUFFO0FBRjJGLEtBQWpDLEM7O2lFQUtHLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3BHQyxNQUFBQSxNQUFNLEVBQUUsS0FENEY7QUFFcEdDLE1BQUFBLElBQUksRUFBRTtBQUY4RixLQUFqQyxDOztpRUFLQSxNQUFLRiwyQkFBTCxDQUFpQztBQUNwR0MsTUFBQUEsTUFBTSxFQUFFLFFBRDRGO0FBRXBHQyxNQUFBQSxJQUFJLEVBQUU7QUFGOEYsS0FBakMsQzs7Ozs7OztXQXBCdkUsc0JBQW1CO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsT0FBckI7QUFDSDs7OztFQUpnQ0MsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcsIEh0dHBDbGllbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2tldHMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnZ3Vlc3QnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQ6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcvYmFza2V0cy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBhZGRMaW5lOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJy9iYXNrZXQtbGluZXMnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHVwZGF0ZUxpbmU6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIHBhdGg6ICcvYmFza2V0LWxpbmVzL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHJlbW92ZUxpbmU6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIHBhdGg6ICcvYmFza2V0LWxpbmVzL3tpZH0nLFxuICAgIH0pO1xufVxuIl19