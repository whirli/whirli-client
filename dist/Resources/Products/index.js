"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Associations = _interopRequireDefault(require("./Associations"));

var _Suggest = _interopRequireDefault(require("./Suggest"));

var _Reviews = _interopRequireDefault(require("./Reviews"));

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

var Products =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Products, _AbstractResource);

  function Products(api) {
    var _this;

    _classCallCheck(this, Products);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Products).call(this, api));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvUHJvZHVjdHMvaW5kZXgudHMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFzc29jaWF0aW9ucyIsIkFzc29jaWF0aW9ucyIsInN1Z2dlc3QiLCJTdWdnZXN0IiwicmV2aWV3cyIsIlJldmlld3MiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLFE7Ozs7O0FBS2pCLG9CQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLGtGQUFNQSxHQUFOOztBQURxQjs7QUFBQTs7QUFBQTs7QUFBQSwwREEwQnVDLE1BQUtDLDJCQUFMLENBQWlDO0FBQzdGQyxNQUFBQSxNQUFNLEVBQUUsS0FEcUY7QUFFN0ZDLE1BQUFBLElBQUksRUFBRTtBQUZ1RixLQUFqQyxDQTFCdkM7O0FBQUEsMERBK0JxRCxNQUFLRiwyQkFBTCxDQUFpQztBQUMzR0MsTUFBQUEsTUFBTSxFQUFFLEtBRG1HO0FBRTNHQyxNQUFBQSxJQUFJLEVBQUU7QUFGcUcsS0FBakMsQ0EvQnJEOztBQUVyQixVQUFLSCxHQUFMLEdBQVdBLEdBQVg7O0FBQ0EsVUFBS0ksVUFBTDs7QUFFQSxVQUFLQyxZQUFMLEdBQW9CLElBQUlDLHdCQUFKLENBQWlCTixHQUFqQixDQUFwQjtBQUNBLFVBQUtPLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZUixHQUFaLENBQWY7QUFDQSxVQUFLUyxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWVYsR0FBWixDQUFmO0FBUHFCO0FBUXhCOzs7O2lDQUVrQjtBQUNmLFdBQUtXLFlBQUwsR0FBb0IsV0FBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE9BQXJCO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0VBcEJrQ0MsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCBBc3NvY2lhdGlvbnMgZnJvbSAnLi9Bc3NvY2lhdGlvbnMnO1xuaW1wb3J0IFN1Z2dlc3QgZnJvbSAnLi9TdWdnZXN0JztcbmltcG9ydCBSZXZpZXdzIGZyb20gJy4vUmV2aWV3cyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnLCBIdHRwQ2xpZW50UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0cyBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIHB1YmxpYyBhc3NvY2lhdGlvbnM6IEFzc29jaWF0aW9ucztcbiAgICBwdWJsaWMgc3VnZ2VzdDogU3VnZ2VzdDtcbiAgICBwdWJsaWMgcmV2aWV3czogUmV2aWV3cztcblxuICAgIGNvbnN0cnVjdG9yKGFwaTogQ2xpZW50KSB7XG4gICAgICAgIHN1cGVyKGFwaSk7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcblxuICAgICAgICB0aGlzLmFzc29jaWF0aW9ucyA9IG5ldyBBc3NvY2lhdGlvbnMoYXBpKTtcbiAgICAgICAgdGhpcy5zdWdnZXN0ID0gbmV3IFN1Z2dlc3QoYXBpKTtcbiAgICAgICAgdGhpcy5yZXZpZXdzID0gbmV3IFJldmlld3MoYXBpKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcvcHJvZHVjdHMnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnZ3Vlc3QnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqICoqTWFpbiBlbmRwb2ludCBmb3IgYnJvd3NlIHRveXMuKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyUGFnZSAtIHNpemUgb2YgZGF0YS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFnZSAtIHBhZ2luYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaCAtIFNlYXJjaCB0ZXJtLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaCAtIFJldHVybnMgYWxsIHJlY29yZHMgdGhhdCBtYXRjaCB0aGUgcXVlcnksIGZvciBleGFtcGxlIGBwcm9kdWN0Q2F0ZWdvcmllcy5uYW1lOmJvYXJkJTIwZ2FtZXNgLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcmRlckJ5IC0gRmllbGQgeW91IHdhbnQgdG8gb3JkZXIgYnksIGZvciBleGFtcGxlIGBjcmVhdGVkX2F0YC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydGVkQnkgLSBBc2NlbmRpbmcgb3IgZGVzY2VuZGluZywgbmVlZHMgYG9yZGVyQnlgIGZpZWxkIC0gYGFzY2Agb3IgYGRlc2NgLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0byAtIEFueXRoaW5nIGVxdWFsIG9yIHNtYWxsZXIgdGhhbiBjb2x1bW46bnVtYmVyLCBmb3IgZXhhbXBsZSBgdG9rZW5zOjMwYC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZnJvbSAtIEFueXRoaW5nIGVxdWFsIG9yIGxhcmdlIHRoYW4gY29sdW1uOm51bWJlciwgZm9yIGV4YW1wbGUgYHRva2VuczoxYC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWxsOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgZ2V0OiAoc2x1Zzogc3RyaW5nLCAuLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcve3NsdWd9JyxcbiAgICB9KTtcbn1cbiJdfQ==