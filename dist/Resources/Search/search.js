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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Search =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Search, _AbstractResource);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, _getPrototypeOf(Search).apply(this, arguments));
  }

  _createClass(Search, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = 'search';
    }
  }, {
    key: "products",
    value: function products() {
      var spec = {
        method: 'GET',
        // methodType: 'list', // @todo Add this once auto-pagination is complete
        path: '/products'
      };
      return this.createMethodFromPartialSpec(spec);
    }
  }]);

  return Search;
}(_AbstractResource2["default"]);

exports["default"] = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvU2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJyZXNvdXJjZVBhdGgiLCJzcGVjIiwibWV0aG9kIiwicGF0aCIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsTTs7Ozs7Ozs7Ozs7OztpQ0FDRTtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsUUFBcEI7QUFDSDs7OytCQUVvQjtBQUNqQixVQUFNQyxJQUFpQixHQUFHO0FBQ3RCQyxRQUFBQSxNQUFNLEVBQUUsS0FEYztBQUV0QjtBQUNBQyxRQUFBQSxJQUFJLEVBQUU7QUFIZ0IsT0FBMUI7QUFLQSxhQUFPLEtBQUtDLDJCQUFMLENBQWlDSCxJQUFqQyxDQUFQO0FBQ0g7Ozs7RUFaK0JJLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5pbXBvcnQgUGFydGlhbFNwZWMgZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9QYXJ0aWFsU3BlYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJ3NlYXJjaCc7XG4gICAgfVxuXG4gICAgcHJvZHVjdHMoKTogRnVuY3Rpb24ge1xuICAgICAgICBjb25zdCBzcGVjOiBQYXJ0aWFsU3BlYyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAvLyBtZXRob2RUeXBlOiAnbGlzdCcsIC8vIEB0b2RvIEFkZCB0aGlzIG9uY2UgYXV0by1wYWdpbmF0aW9uIGlzIGNvbXBsZXRlXG4gICAgICAgICAgICBwYXRoOiAnL3Byb2R1Y3RzJyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHNwZWMpO1xuICAgIH1cbn1cbiJdfQ==