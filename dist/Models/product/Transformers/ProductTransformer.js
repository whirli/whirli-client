"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Product = _interopRequireDefault(require("../Product"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

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

var ProductTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductTransformer, _BaseTransformer);

  function ProductTransformer() {
    _classCallCheck(this, ProductTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductTransformer).apply(this, arguments));
  }

  _createClass(ProductTransformer, [{
    key: "mapData",

    /**
     * Map an product response
     *
     * @param product
     */
    value: function mapData(product) {
      return new _Product["default"]({
        id: product.id,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        name: product.name,
        brand: product.brand,
        tokens: product.tokens,
        features: product.features,
        pageTitle: product.pageTitle,
        popularity: product.popularity,
        description: product.description,
        recentRank: product.recentRank,
        manufacturer: product.manufacturer,
        metaKeywords: product.metaKeywords,
        recommendedAge: product.recommendedAge,
        metaDescription: product.metaDescription,
        shortDescription: product.shortDescription,
        // has many
        variants: this.includeProductVariants(product)
      });
    }
  }, {
    key: "includeProductVariants",
    value: function includeProductVariants(product) {
      return this.collection(product, 'variants', new _ProductVariantTransformer["default"]());
    }
  }]);

  return ProductTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2Zvcm1lciIsInByb2R1Y3QiLCJQcm9kdWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJuYW1lIiwiYnJhbmQiLCJ0b2tlbnMiLCJmZWF0dXJlcyIsInBhZ2VUaXRsZSIsInBvcHVsYXJpdHkiLCJkZXNjcmlwdGlvbiIsInJlY2VudFJhbmsiLCJtYW51ZmFjdHVyZXIiLCJtZXRhS2V5d29yZHMiLCJyZWNvbW1lbmRlZEFnZSIsIm1ldGFEZXNjcmlwdGlvbiIsInNob3J0RGVzY3JpcHRpb24iLCJ2YXJpYW50cyIsImluY2x1ZGVQcm9kdWN0VmFyaWFudHMiLCJjb2xsZWN0aW9uIiwiUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxrQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxPLEVBQW9DO0FBQ3hDLGFBQU8sSUFBSUMsbUJBQUosQ0FBWTtBQUNmQyxRQUFBQSxFQUFFLEVBQUVGLE9BQU8sQ0FBQ0UsRUFERztBQUVmQyxRQUFBQSxTQUFTLEVBQUVILE9BQU8sQ0FBQ0csU0FGSjtBQUdmQyxRQUFBQSxTQUFTLEVBQUVKLE9BQU8sQ0FBQ0ksU0FISjtBQUlmQyxRQUFBQSxJQUFJLEVBQUVMLE9BQU8sQ0FBQ0ssSUFKQztBQUtmQyxRQUFBQSxLQUFLLEVBQUVOLE9BQU8sQ0FBQ00sS0FMQTtBQU1mQyxRQUFBQSxNQUFNLEVBQUVQLE9BQU8sQ0FBQ08sTUFORDtBQU9mQyxRQUFBQSxRQUFRLEVBQUVSLE9BQU8sQ0FBQ1EsUUFQSDtBQVFmQyxRQUFBQSxTQUFTLEVBQUVULE9BQU8sQ0FBQ1MsU0FSSjtBQVNmQyxRQUFBQSxVQUFVLEVBQUVWLE9BQU8sQ0FBQ1UsVUFUTDtBQVVmQyxRQUFBQSxXQUFXLEVBQUVYLE9BQU8sQ0FBQ1csV0FWTjtBQVdmQyxRQUFBQSxVQUFVLEVBQUVaLE9BQU8sQ0FBQ1ksVUFYTDtBQVlmQyxRQUFBQSxZQUFZLEVBQUViLE9BQU8sQ0FBQ2EsWUFaUDtBQWFmQyxRQUFBQSxZQUFZLEVBQUVkLE9BQU8sQ0FBQ2MsWUFiUDtBQWNmQyxRQUFBQSxjQUFjLEVBQUVmLE9BQU8sQ0FBQ2UsY0FkVDtBQWVmQyxRQUFBQSxlQUFlLEVBQUVoQixPQUFPLENBQUNnQixlQWZWO0FBZ0JmQyxRQUFBQSxnQkFBZ0IsRUFBRWpCLE9BQU8sQ0FBQ2lCLGdCQWhCWDtBQWlCZjtBQUNBQyxRQUFBQSxRQUFRLEVBQUUsS0FBS0Msc0JBQUwsQ0FBNEJuQixPQUE1QjtBQWxCSyxPQUFaLENBQVA7QUFvQkg7OzsyQ0FFc0JBLE8sRUFBc0Q7QUFDekUsYUFBTyxLQUFLb0IsVUFBTCxDQUFnQnBCLE9BQWhCLEVBQXlCLFVBQXpCLEVBQXFDLElBQUlxQixxQ0FBSixFQUFyQyxDQUFQO0FBQ0g7Ozs7RUEvQjJDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gJy4uL1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcHJvZHVjdCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBQcm9kdWN0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcHJvZHVjdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXG4gICAgICAgICAgICBicmFuZDogcHJvZHVjdC5icmFuZCxcbiAgICAgICAgICAgIHRva2VuczogcHJvZHVjdC50b2tlbnMsXG4gICAgICAgICAgICBmZWF0dXJlczogcHJvZHVjdC5mZWF0dXJlcyxcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogcHJvZHVjdC5wYWdlVGl0bGUsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiBwcm9kdWN0LnBvcHVsYXJpdHksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvZHVjdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlY2VudFJhbms6IHByb2R1Y3QucmVjZW50UmFuayxcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlcjogcHJvZHVjdC5tYW51ZmFjdHVyZXIsXG4gICAgICAgICAgICBtZXRhS2V5d29yZHM6IHByb2R1Y3QubWV0YUtleXdvcmRzLFxuICAgICAgICAgICAgcmVjb21tZW5kZWRBZ2U6IHByb2R1Y3QucmVjb21tZW5kZWRBZ2UsXG4gICAgICAgICAgICBtZXRhRGVzY3JpcHRpb246IHByb2R1Y3QubWV0YURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogcHJvZHVjdC5zaG9ydERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIHZhcmlhbnRzOiB0aGlzLmluY2x1ZGVQcm9kdWN0VmFyaWFudHMocHJvZHVjdCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0VmFyaWFudHMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICd2YXJpYW50cycsIG5ldyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==