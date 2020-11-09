"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ReasonForEnd = _interopRequireDefault(require("../ReasonForEnd"));

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

var ReasonForEndTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ReasonForEndTransformer, _BaseTransformer);

  function ReasonForEndTransformer() {
    _classCallCheck(this, ReasonForEndTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReasonForEndTransformer).apply(this, arguments));
  }

  _createClass(ReasonForEndTransformer, [{
    key: "mapData",

    /**
     * Map an product response
     *
     * @param reasonForEnd
     */
    value: function mapData(reasonForEnd) {
      return new _ReasonForEnd["default"]({
        id: reasonForEnd.id,
        name: reasonForEnd.name,
        message: reasonForEnd.message,
        active: reasonForEnd.active,
        createdAt: reasonForEnd.createdAt,
        updatedAt: reasonForEnd.updatedAt
      });
    }
  }]);

  return ReasonForEndTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ReasonForEndTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmVhc29uRm9yRW5kL1RyYW5zZm9ybWVycy9SZWFzb25Gb3JFbmRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJSZWFzb25Gb3JFbmRUcmFuc2Zvcm1lciIsInJlYXNvbkZvckVuZCIsIlJlYXNvbkZvckVuZCIsImlkIiwibmFtZSIsIm1lc3NhZ2UiLCJhY3RpdmUiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsdUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsWSxFQUFtRDtBQUN2RCxhQUFPLElBQUlDLHdCQUFKLENBQWlCO0FBQ3BCQyxRQUFBQSxFQUFFLEVBQUVGLFlBQVksQ0FBQ0UsRUFERztBQUVwQkMsUUFBQUEsSUFBSSxFQUFFSCxZQUFZLENBQUNHLElBRkM7QUFHcEJDLFFBQUFBLE9BQU8sRUFBRUosWUFBWSxDQUFDSSxPQUhGO0FBSXBCQyxRQUFBQSxNQUFNLEVBQUVMLFlBQVksQ0FBQ0ssTUFKRDtBQUtwQkMsUUFBQUEsU0FBUyxFQUFFTixZQUFZLENBQUNNLFNBTEo7QUFNcEJDLFFBQUFBLFNBQVMsRUFBRVAsWUFBWSxDQUFDTztBQU5KLE9BQWpCLENBQVA7QUFRSDs7OztFQWZnREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUmVhc29uRm9yRW5kSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmVhc29uRm9yRW5kL1JlYXNvbkZvckVuZCc7XG5pbXBvcnQgUmVhc29uRm9yRW5kIGZyb20gJy4uL1JlYXNvbkZvckVuZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYXNvbkZvckVuZFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcHJvZHVjdCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlYXNvbkZvckVuZFxuICAgICAqL1xuICAgIG1hcERhdGEocmVhc29uRm9yRW5kOiBSZWFzb25Gb3JFbmRJbnRlcmZhY2UpOiBSZWFzb25Gb3JFbmQge1xuICAgICAgICByZXR1cm4gbmV3IFJlYXNvbkZvckVuZCh7XG4gICAgICAgICAgICBpZDogcmVhc29uRm9yRW5kLmlkLFxuICAgICAgICAgICAgbmFtZTogcmVhc29uRm9yRW5kLm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiByZWFzb25Gb3JFbmQubWVzc2FnZSxcbiAgICAgICAgICAgIGFjdGl2ZTogcmVhc29uRm9yRW5kLmFjdGl2ZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcmVhc29uRm9yRW5kLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcmVhc29uRm9yRW5kLnVwZGF0ZWRBdCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19