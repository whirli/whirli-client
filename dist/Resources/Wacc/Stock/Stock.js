"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../../AbstractResource"));

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

var Stock = /*#__PURE__*/function (_AbstractResource) {
  _inherits(Stock, _AbstractResource);

  var _super = _createSuper(Stock);

  function Stock() {
    var _this;

    _classCallCheck(this, Stock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "update", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/toybox'
    }));

    _defineProperty(_assertThisInitialized(_this), "reassign", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/reassign-status'
    }));

    _defineProperty(_assertThisInitialized(_this), "transitionInWarehouse", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/transition-in-warehouse'
    }));

    _defineProperty(_assertThisInitialized(_this), "stockCheck", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/stock-check'
    }));

    return _this;
  }

  _createClass(Stock, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/stock';
      this.defaultAccess = 'wacc';
    }
  }]);

  return Stock;
}(_AbstractResource2["default"]);

exports["default"] = Stock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvV2FjYy9TdG9jay9TdG9jay50cyJdLCJuYW1lcyI6WyJTdG9jayIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozs7OzZEQU1rRCxNQUFLQywyQkFBTCxDQUFpQztBQUNoR0MsTUFBQUEsTUFBTSxFQUFFLE9BRHdGO0FBRWhHQyxNQUFBQSxJQUFJLEVBQUU7QUFGMEYsS0FBakMsQzs7K0RBS0UsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDbEdDLE1BQUFBLE1BQU0sRUFBRSxPQUQwRjtBQUVsR0MsTUFBQUEsSUFBSSxFQUFFO0FBRjRGLEtBQWpDLEM7OzRFQUthLE1BQUtGLDJCQUFMLENBQWlDO0FBQy9HQyxNQUFBQSxNQUFNLEVBQUUsT0FEdUc7QUFFL0dDLE1BQUFBLElBQUksRUFBRTtBQUZ5RyxLQUFqQyxDOztpRUFLWCxNQUFLRiwyQkFBTCxDQUFpQztBQUNwR0MsTUFBQUEsTUFBTSxFQUFFLE9BRDRGO0FBRXBHQyxNQUFBQSxJQUFJLEVBQUU7QUFGOEYsS0FBakMsQzs7Ozs7OztXQXBCdkUsc0JBQW1CO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixRQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsTUFBckI7QUFDSDs7OztFQUo4QkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi8uLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcsIEh0dHBDbGllbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b2NrIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL3N0b2NrJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ3dhY2MnO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGU6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgcGF0aDogJy90b3lib3gnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHJlYXNzaWduOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICcvcmVhc3NpZ24tc3RhdHVzJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uSW5XYXJlaG91c2U6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgcGF0aDogJy90cmFuc2l0aW9uLWluLXdhcmVob3VzZScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgc3RvY2tDaGVjazogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAnL3N0b2NrLWNoZWNrJyxcbiAgICB9KTtcbn1cbiJdfQ==