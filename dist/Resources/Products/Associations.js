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

var Products = /*#__PURE__*/function (_AbstractResource) {
  _inherits(Products, _AbstractResource);

  var _super = _createSuper(Products);

  function Products() {
    var _this;

    _classCallCheck(this, Products);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/{slug}'
    }));

    _defineProperty(_assertThisInitialized(_this), "getByType", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/type/{slug}'
    }));

    return _this;
  }

  _createClass(Products, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/products/associations';
      this.defaultAccess = 'guest';
    }
    /**
     * Get all product associations
     * e.g. `/products/associations`.
     */

  }]);

  return Products;
}(_AbstractResource2["default"]);

exports["default"] = Products;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvUHJvZHVjdHMvQXNzb2NpYXRpb25zLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7MERBVStDLE1BQUtDLDJCQUFMLENBQWlDO0FBQzdGQyxNQUFBQSxNQUFNLEVBQUUsS0FEcUY7QUFFN0ZDLE1BQUFBLElBQUksRUFBRTtBQUZ1RixLQUFqQyxDOzswREFZdEMsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxLQUQrQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFO0FBRmlELEtBQWpDLEM7O2dFQVlBLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsS0FEK0M7QUFFdkRDLE1BQUFBLElBQUksRUFBRTtBQUZpRCxLQUFqQyxDOzs7Ozs7O1dBakMxQixzQkFBbUI7QUFDZixXQUFLQyxZQUFMLEdBQW9CLHdCQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsT0FBckI7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7OztFQVRzQ0MsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcsIEh0dHBDbGllbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL3Byb2R1Y3RzL2Fzc29jaWF0aW9ucyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdndWVzdCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBwcm9kdWN0IGFzc29jaWF0aW9uc1xuICAgICAqIGUuZy4gYC9wcm9kdWN0cy9hc3NvY2lhdGlvbnNgLlxuICAgICAqL1xuICAgIHB1YmxpYyBhbGw6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEdldCBhIHNpbmdsZSBwcm9kdWN0IGFzc29jaWF0aW9uXG4gICAgICogZS5nLiBgL3Byb2R1Y3RzL2Fzc29jaWF0aW9ucy9kaXNuZXlgLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQ6IChcbiAgICAgICAgcHJvZHVjdEFzc29jaWF0aW9uU2x1Zzogc3RyaW5nLFxuICAgICAgICAuLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnXG4gICAgKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcve3NsdWd9JyxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEdldCBhIHNpbmdsZSBwcm9kdWN0IGFzc29jaWF0aW9uIHR5cGU6IGFnZSwgYnJhbmQsIGNhdGVnb3J5LCBjb2xsZWN0aW9uXG4gICAgICogZS5nLiBgL3Byb2R1Y3RzL2Fzc29jaWF0aW9ucy9hZ2VgLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRCeVR5cGU6IChcbiAgICAgICAgcHJvZHVjdEFzc29jaWF0aW9uVHlwZVNsdWc6IHN0cmluZyxcbiAgICAgICAgLi4uYXJnczogSHR0cENsaWVudENvbmZpZ1xuICAgICkgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3R5cGUve3NsdWd9JyxcbiAgICB9KTtcbn1cbiJdfQ==