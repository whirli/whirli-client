"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Associations = _interopRequireDefault(require("./Associations"));

var _Suggest = _interopRequireDefault(require("./Suggest"));

var _Reviews = _interopRequireDefault(require("./Reviews"));

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

  function Products(api) {
    var _this;

    _classCallCheck(this, Products);

    _this = _super.call(this, api);

    _defineProperty(_assertThisInitialized(_this), "associations", void 0);

    _defineProperty(_assertThisInitialized(_this), "suggest", void 0);

    _defineProperty(_assertThisInitialized(_this), "reviews", void 0);

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/{slug}'
    }));

    _this.api = api;

    _this.initialise();

    _this.associations = new _Associations["default"](api);
    _this.suggest = new _Suggest["default"](api);
    _this.reviews = new _Reviews["default"](api);
    return _this;
  }

  _createClass(Products, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/products';
      this.defaultAccess = 'guest';
    }
    /**
     * **Main endpoint for browse toys.**
     * @param {string} perPage - size of data.
     * @param {string} page - pagination.
     * @param {string} search - Search term.
     * @param {string} match - Returns all records that match the query, for example `productCategories.name:board%20games`.
     * @param {string} orderBy - Field you want to order by, for example `created_at`.
     * @param {string} sortedBy - Ascending or descending, needs `orderBy` field - `asc` or `desc`.
     * @param {string} to - Anything equal or smaller than column:number, for example `tokens:30`.
     * @param {string} from - Anything equal or large than column:number, for example `tokens:1`.
     */

  }]);

  return Products;
}(_AbstractResource2["default"]);

exports["default"] = Products;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvUHJvZHVjdHMvaW5kZXgudHMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFzc29jaWF0aW9ucyIsIkFzc29jaWF0aW9ucyIsInN1Z2dlc3QiLCJTdWdnZXN0IiwicmV2aWV3cyIsIlJldmlld3MiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxROzs7OztBQUtqQixvQkFBWUMsR0FBWixFQUF5QjtBQUFBOztBQUFBOztBQUNyQiw4QkFBTUEsR0FBTjs7QUFEcUI7O0FBQUE7O0FBQUE7O0FBQUEsMERBMEJ1QyxNQUFLQywyQkFBTCxDQUFpQztBQUM3RkMsTUFBQUEsTUFBTSxFQUFFLEtBRHFGO0FBRTdGQyxNQUFBQSxJQUFJLEVBQUU7QUFGdUYsS0FBakMsQ0ExQnZDOztBQUFBLDBEQStCcUQsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDM0dDLE1BQUFBLE1BQU0sRUFBRSxLQURtRztBQUUzR0MsTUFBQUEsSUFBSSxFQUFFO0FBRnFHLEtBQWpDLENBL0JyRDs7QUFFckIsVUFBS0gsR0FBTCxHQUFXQSxHQUFYOztBQUNBLFVBQUtJLFVBQUw7O0FBRUEsVUFBS0MsWUFBTCxHQUFvQixJQUFJQyx3QkFBSixDQUFpQk4sR0FBakIsQ0FBcEI7QUFDQSxVQUFLTyxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWVIsR0FBWixDQUFmO0FBQ0EsVUFBS1MsT0FBTCxHQUFlLElBQUlDLG1CQUFKLENBQVlWLEdBQVosQ0FBZjtBQVBxQjtBQVF4Qjs7OztXQUVELHNCQUFtQjtBQUNmLFdBQUtXLFlBQUwsR0FBb0IsV0FBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE9BQXJCO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztFQTlCc0NDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9DbGllbnQnO1xuaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5pbXBvcnQgQXNzb2NpYXRpb25zIGZyb20gJy4vQXNzb2NpYXRpb25zJztcbmltcG9ydCBTdWdnZXN0IGZyb20gJy4vU3VnZ2VzdCc7XG5pbXBvcnQgUmV2aWV3cyBmcm9tICcuL1Jldmlld3MnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZywgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwdWJsaWMgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbnM7XG4gICAgcHVibGljIHN1Z2dlc3Q6IFN1Z2dlc3Q7XG4gICAgcHVibGljIHJldmlld3M6IFJldmlld3M7XG5cbiAgICBjb25zdHJ1Y3RvcihhcGk6IENsaWVudCkge1xuICAgICAgICBzdXBlcihhcGkpO1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG5cbiAgICAgICAgdGhpcy5hc3NvY2lhdGlvbnMgPSBuZXcgQXNzb2NpYXRpb25zKGFwaSk7XG4gICAgICAgIHRoaXMuc3VnZ2VzdCA9IG5ldyBTdWdnZXN0KGFwaSk7XG4gICAgICAgIHRoaXMucmV2aWV3cyA9IG5ldyBSZXZpZXdzKGFwaSk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL3Byb2R1Y3RzJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ2d1ZXN0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAqKk1haW4gZW5kcG9pbnQgZm9yIGJyb3dzZSB0b3lzLioqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlclBhZ2UgLSBzaXplIG9mIGRhdGEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhZ2UgLSBwYWdpbmF0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2ggLSBTZWFyY2ggdGVybS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2ggLSBSZXR1cm5zIGFsbCByZWNvcmRzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LCBmb3IgZXhhbXBsZSBgcHJvZHVjdENhdGVnb3JpZXMubmFtZTpib2FyZCUyMGdhbWVzYC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3JkZXJCeSAtIEZpZWxkIHlvdSB3YW50IHRvIG9yZGVyIGJ5LCBmb3IgZXhhbXBsZSBgY3JlYXRlZF9hdGAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnRlZEJ5IC0gQXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcsIG5lZWRzIGBvcmRlckJ5YCBmaWVsZCAtIGBhc2NgIG9yIGBkZXNjYC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdG8gLSBBbnl0aGluZyBlcXVhbCBvciBzbWFsbGVyIHRoYW4gY29sdW1uOm51bWJlciwgZm9yIGV4YW1wbGUgYHRva2VuczozMGAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZyb20gLSBBbnl0aGluZyBlcXVhbCBvciBsYXJnZSB0aGFuIGNvbHVtbjpudW1iZXIsIGZvciBleGFtcGxlIGB0b2tlbnM6MWAuXG4gICAgICovXG4gICAgcHVibGljIGFsbDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGdldDogKHNsdWc6IHN0cmluZywgLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3tzbHVnfScsXG4gICAgfSk7XG59XG4iXX0=