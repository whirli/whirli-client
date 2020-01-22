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
      this.resourcePath = 'wacc/search';
    }
  }, {
    key: "all",
    value: function all(term) {
      return this.createMethodFromPartialSpec({
        method: 'GET',
        // methodType: 'list', // @todo Add this once auto-pagination is complete
        path: "?search=".concat(term)
      });
    }
  }]);

  return Search;
}(_AbstractResource2["default"]);

exports["default"] = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvU2VhcmNoL3NlYXJjaC50cyJdLCJuYW1lcyI6WyJTZWFyY2giLCJyZXNvdXJjZVBhdGgiLCJ0ZXJtIiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7OztpQ0FDRTtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsYUFBcEI7QUFDSDs7O3dCQUVVQyxJLEVBQXdCO0FBQy9CLGFBQU8sS0FBS0MsMkJBQUwsQ0FBaUM7QUFDcENDLFFBQUFBLE1BQU0sRUFBRSxLQUQ0QjtBQUVwQztBQUNBQyxRQUFBQSxJQUFJLG9CQUFhSCxJQUFiO0FBSGdDLE9BQWpDLENBQVA7QUFLSDs7OztFQVgrQkksNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnd2FjYy9zZWFyY2gnO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbGwodGVybTogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIC8vIG1ldGhvZFR5cGU6ICdsaXN0JywgLy8gQHRvZG8gQWRkIHRoaXMgb25jZSBhdXRvLXBhZ2luYXRpb24gaXMgY29tcGxldGVcbiAgICAgICAgICAgIHBhdGg6IGA/c2VhcmNoPSR7dGVybX1gLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=