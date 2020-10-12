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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvR3Vlc3RzL0Jhc2tldHMudHMiXSwibmFtZXMiOlsiQmFza2V0cyIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozs7OzBEQU1NLE1BQUtDLDJCQUFMLENBQWlDO0FBQ3BEQyxNQUFBQSxNQUFNLEVBQUUsS0FENEM7QUFFcERDLE1BQUFBLElBQUksRUFBRTtBQUY4QyxLQUFqQyxDOzs4REFLSSxNQUFLRiwyQkFBTCxDQUFpQztBQUN4REMsTUFBQUEsTUFBTSxFQUFFLE1BRGdEO0FBRXhEQyxNQUFBQSxJQUFJLEVBQUU7QUFGa0QsS0FBakMsQzs7aUVBS0csTUFBS0YsMkJBQUwsQ0FBaUM7QUFDM0RDLE1BQUFBLE1BQU0sRUFBRSxLQURtRDtBQUUzREMsTUFBQUEsSUFBSSxFQUFFO0FBRnFELEtBQWpDLEM7O2lFQUtBLE1BQUtGLDJCQUFMLENBQWlDO0FBQzNEQyxNQUFBQSxNQUFNLEVBQUUsUUFEbUQ7QUFFM0RDLE1BQUFBLElBQUksRUFBRTtBQUZxRCxLQUFqQyxDOzs7Ozs7O2lDQXBCWDtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE9BQXJCO0FBQ0g7Ozs7RUFKZ0NDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2tldHMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnZ3Vlc3QnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQ6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL2Jhc2tldHMve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgYWRkTGluZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnL2Jhc2tldC1saW5lcycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdXBkYXRlTGluZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIHBhdGg6ICcvYmFza2V0LWxpbmVzL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHJlbW92ZUxpbmU6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBwYXRoOiAnL2Jhc2tldC1saW5lcy97aWR9JyxcbiAgICB9KTtcbn1cbiJdfQ==