"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _Review = _interopRequireDefault(require("../Review"));

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

var ReviewTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ReviewTransformer, _BaseTransformer);

  function ReviewTransformer() {
    _classCallCheck(this, ReviewTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReviewTransformer).apply(this, arguments));
  }

  _createClass(ReviewTransformer, [{
    key: "mapData",
    value: function mapData(review) {
      return new _Review["default"]({
        id: review.id,
        rating: review.rating,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt,
        // has one
        userId: review.userId,
        productVariantId: review.productVariantId
      });
    }
  }]);

  return ReviewTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ReviewTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmV2aWV3L1RyYW5zZm9ybWVycy9SZXZpZXdUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJSZXZpZXdUcmFuc2Zvcm1lciIsInJldmlldyIsIlJldmlldyIsImlkIiwicmF0aW5nIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwidXNlcklkIiwicHJvZHVjdFZhcmlhbnRJZCIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7Ozs0QkFDVEMsTSxFQUFpQztBQUNyQyxhQUFPLElBQUlDLGtCQUFKLENBQVc7QUFDZEMsUUFBQUEsRUFBRSxFQUFFRixNQUFNLENBQUNFLEVBREc7QUFFZEMsUUFBQUEsTUFBTSxFQUFFSCxNQUFNLENBQUNHLE1BRkQ7QUFHZEMsUUFBQUEsU0FBUyxFQUFFSixNQUFNLENBQUNJLFNBSEo7QUFJZEMsUUFBQUEsU0FBUyxFQUFFTCxNQUFNLENBQUNLLFNBSko7QUFLZDtBQUNBQyxRQUFBQSxNQUFNLEVBQUVOLE1BQU0sQ0FBQ00sTUFORDtBQU9kQyxRQUFBQSxnQkFBZ0IsRUFBRVAsTUFBTSxDQUFDTztBQVBYLE9BQVgsQ0FBUDtBQVNIOzs7O0VBWDBDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBSZXZpZXdJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXZpZXcvUmV2aWV3JztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi4vUmV2aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV2aWV3VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEocmV2aWV3OiBSZXZpZXdJbnRlcmZhY2UpOiBSZXZpZXcge1xuICAgICAgICByZXR1cm4gbmV3IFJldmlldyh7XG4gICAgICAgICAgICBpZDogcmV2aWV3LmlkLFxuICAgICAgICAgICAgcmF0aW5nOiByZXZpZXcucmF0aW5nLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiByZXZpZXcuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiByZXZpZXcudXBkYXRlZEF0LFxuICAgICAgICAgICAgLy8gaGFzIG9uZVxuICAgICAgICAgICAgdXNlcklkOiByZXZpZXcudXNlcklkLFxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnRJZDogcmV2aWV3LnByb2R1Y3RWYXJpYW50SWQsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==