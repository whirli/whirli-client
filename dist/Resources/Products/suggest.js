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

    _this.api = api;

    _this.initialise();

    _this.associations = new _Associations["default"](api);
    return _this;
  }

  _createClass(Products, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/products/suggest';
      this.defaultAccess = 'guest';
    }
    /**
     * **Main endpoint for browse toys suggest.**
     * @param {string} search - Search term.
     * @param {string} match - Returns all records that match the query, for example `productCategories.name:board%20games`.
     * @param {string} orderBy - Field you want to order by, for example `created_at`.
     * @param {string} sortedBy - Ascending or descending, needs `orderBy` field - `asc` or `desc`.
     */

  }]);

  return Products;
}(_AbstractResource2["default"]);

exports["default"] = Products;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvUHJvZHVjdHMvc3VnZ2VzdC50cyJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsImFwaSIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJpbml0aWFsaXNlIiwiYXNzb2NpYXRpb25zIiwiQXNzb2NpYXRpb25zIiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxROzs7OztBQUdqQixvQkFBWUMsR0FBWixFQUF5QjtBQUFBOztBQUFBOztBQUNyQixrRkFBTUEsR0FBTjs7QUFEcUI7O0FBQUEsMERBbUJ1QyxNQUFLQywyQkFBTCxDQUFpQztBQUM3RkMsTUFBQUEsTUFBTSxFQUFFLEtBRHFGO0FBRTdGQyxNQUFBQSxJQUFJLEVBQUU7QUFGdUYsS0FBakMsQ0FuQnZDOztBQUVyQixVQUFLSCxHQUFMLEdBQVdBLEdBQVg7O0FBQ0EsVUFBS0ksVUFBTDs7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLElBQUlDLHdCQUFKLENBQWlCTixHQUFqQixDQUFwQjtBQUpxQjtBQUt4Qjs7OztpQ0FFa0I7QUFDZixXQUFLTyxZQUFMLEdBQW9CLG1CQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsT0FBckI7QUFDSDtBQUVEOzs7Ozs7Ozs7OztFQWZrQ0MsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCBBc3NvY2lhdGlvbnMgZnJvbSAnLi9Bc3NvY2lhdGlvbnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZywgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwdWJsaWMgYXNzb2NpYXRpb25zOiBBc3NvY2lhdGlvbnM7XG5cbiAgICBjb25zdHJ1Y3RvcihhcGk6IENsaWVudCkge1xuICAgICAgICBzdXBlcihhcGkpO1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gICAgICAgIHRoaXMuYXNzb2NpYXRpb25zID0gbmV3IEFzc29jaWF0aW9ucyhhcGkpO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy9wcm9kdWN0cy9zdWdnZXN0JztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ2d1ZXN0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAqKk1haW4gZW5kcG9pbnQgZm9yIGJyb3dzZSB0b3lzIHN1Z2dlc3QuKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoIC0gU2VhcmNoIHRlcm0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoIC0gUmV0dXJucyBhbGwgcmVjb3JkcyB0aGF0IG1hdGNoIHRoZSBxdWVyeSwgZm9yIGV4YW1wbGUgYHByb2R1Y3RDYXRlZ29yaWVzLm5hbWU6Ym9hcmQlMjBnYW1lc2AuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9yZGVyQnkgLSBGaWVsZCB5b3Ugd2FudCB0byBvcmRlciBieSwgZm9yIGV4YW1wbGUgYGNyZWF0ZWRfYXRgLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3J0ZWRCeSAtIEFzY2VuZGluZyBvciBkZXNjZW5kaW5nLCBuZWVkcyBgb3JkZXJCeWAgZmllbGQgLSBgYXNjYCBvciBgZGVzY2AuXG4gICAgICovXG4gICAgcHVibGljIGFsbDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xufVxuIl19