"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Associations = _interopRequireDefault(require("./Associations"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvUHJvZHVjdHMvaW5kZXgudHMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFzc29jaWF0aW9ucyIsIkFzc29jaWF0aW9ucyIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7QUFHakIsb0JBQVlDLEdBQVosRUFBeUI7QUFBQTs7QUFBQTs7QUFDckIsa0ZBQU1BLEdBQU47O0FBRHFCOztBQUFBLDBEQXVCRixNQUFLQywyQkFBTCxDQUFpQztBQUNwREMsTUFBQUEsTUFBTSxFQUFFLEtBRDRDO0FBRXBEQyxNQUFBQSxJQUFJLEVBQUU7QUFGOEMsS0FBakMsQ0F2QkU7O0FBQUEsMERBNEJGLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3BEQyxNQUFBQSxNQUFNLEVBQUUsS0FENEM7QUFFcERDLE1BQUFBLElBQUksRUFBRTtBQUY4QyxLQUFqQyxDQTVCRTs7QUFFckIsVUFBS0gsR0FBTCxHQUFXQSxHQUFYOztBQUNBLFVBQUtJLFVBQUw7O0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixJQUFJQyx3QkFBSixDQUFpQk4sR0FBakIsQ0FBcEI7QUFKcUI7QUFLeEI7Ozs7aUNBRWtCO0FBQ2YsV0FBS08sWUFBTCxHQUFvQixXQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsT0FBckI7QUFDSDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7RUFma0NDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9DbGllbnQnO1xuaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5pbXBvcnQgQXNzb2NpYXRpb25zIGZyb20gJy4vQXNzb2NpYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwdWJsaWMgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbnM7XG5cbiAgICBjb25zdHJ1Y3RvcihhcGk6IENsaWVudCkge1xuICAgICAgICBzdXBlcihhcGkpO1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gICAgICAgIHRoaXMuYXNzb2NpYXRpb25zID0gbmV3IEFzc29jaWF0aW9ucyhhcGkpO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy9wcm9kdWN0cyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdndWVzdCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogKipNYWluIGVuZHBvaW50IGZvciBicm93c2UgdG95cy4qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJQYWdlIC0gc2l6ZSBvZiBkYXRhLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlIC0gcGFnaW5hdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoIC0gU2VhcmNoIHRlcm0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoIC0gUmV0dXJucyBhbGwgcmVjb3JkcyB0aGF0IG1hdGNoIHRoZSBxdWVyeSwgZm9yIGV4YW1wbGUgYHByb2R1Y3RDYXRlZ29yaWVzLm5hbWU6Ym9hcmQlMjBnYW1lc2AuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9yZGVyQnkgLSBGaWVsZCB5b3Ugd2FudCB0byBvcmRlciBieSwgZm9yIGV4YW1wbGUgYGNyZWF0ZWRfYXRgLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3J0ZWRCeSAtIEFzY2VuZGluZyBvciBkZXNjZW5kaW5nLCBuZWVkcyBgb3JkZXJCeWAgZmllbGQgLSBgYXNjYCBvciBgZGVzY2AuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRvIC0gQW55dGhpbmcgZXF1YWwgb3Igc21hbGxlciB0aGFuIGNvbHVtbjpudW1iZXIsIGZvciBleGFtcGxlIGB0b2tlbnM6MzBgLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmcm9tIC0gQW55dGhpbmcgZXF1YWwgb3IgbGFyZ2UgdGhhbiBjb2x1bW46bnVtYmVyLCBmb3IgZXhhbXBsZSBgdG9rZW5zOjFgLlxuICAgICAqL1xuICAgIHB1YmxpYyBhbGw6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgZ2V0OiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy97c2x1Z30nLFxuICAgIH0pO1xufVxuIl19