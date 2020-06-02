"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

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

  function Products() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Products);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Products)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/{slug}'
    }));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvUHJvZHVjdHMvUHJvZHVjdHMudHMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBaUJnQyxNQUFLQywyQkFBTCxDQUFpQztBQUM5RUMsTUFBQUEsTUFBTSxFQUFFLEtBRHNFO0FBRTlFQyxNQUFBQSxJQUFJLEVBQUU7QUFGd0UsS0FBakMsQzs7MERBS2MsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDNUZDLE1BQUFBLE1BQU0sRUFBRSxLQURvRjtBQUU1RkMsTUFBQUEsSUFBSSxFQUFFO0FBRnNGLEtBQWpDLEM7Ozs7Ozs7aUNBckI1QztBQUNmLFdBQUtDLFlBQUwsR0FBb0IsV0FBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE9BQXJCO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0VBTmtDQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZyB9IGZyb20gJy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL3Byb2R1Y3RzJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ2d1ZXN0JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAqKk1haW4gZW5kcG9pbnQgZm9yIGJyb3dzZSB0b3lzLioqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlclBhZ2UgLSBzaXplIG9mIGRhdGEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhZ2UgLSBwYWdpbmF0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2ggLSBTZWFyY2ggdGVybS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2ggLSBSZXR1cm5zIGFsbCByZWNvcmRzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LCBmb3IgZXhhbXBsZSBgcHJvZHVjdENhdGVnb3JpZXMubmFtZTpib2FyZCUyMGdhbWVzYC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3JkZXJCeSAtIEZpZWxkIHlvdSB3YW50IHRvIG9yZGVyIGJ5LCBmb3IgZXhhbXBsZSBgY3JlYXRlZF9hdGAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnRlZEJ5IC0gQXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcsIG5lZWRzIGBvcmRlckJ5YCBmaWVsZCAtIGBhc2NgIG9yIGBkZXNjYC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdG8gLSBBbnl0aGluZyBlcXVhbCBvciBzbWFsbGVyIHRoYW4gY29sdW1uOm51bWJlciwgZm9yIGV4YW1wbGUgYHRva2VuczozMGAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZyb20gLSBBbnl0aGluZyBlcXVhbCBvciBsYXJnZSB0aGFuIGNvbHVtbjpudW1iZXIsIGZvciBleGFtcGxlIGB0b2tlbnM6MWAuXG4gICAgICovXG4gICAgcHVibGljIGFsbDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IGFueSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGdldDogKHNsdWc6IHN0cmluZywgLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gYW55ID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3tzbHVnfScsXG4gICAgfSk7XG59XG4iXX0=