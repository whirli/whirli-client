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
        publishedAt: product.publishedAt,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2Zvcm1lciIsInByb2R1Y3QiLCJQcm9kdWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIm5hbWUiLCJicmFuZCIsInRva2VucyIsImZlYXR1cmVzIiwicGFnZVRpdGxlIiwicG9wdWxhcml0eSIsImRlc2NyaXB0aW9uIiwicmVjZW50UmFuayIsIm1hbnVmYWN0dXJlciIsIm1ldGFLZXl3b3JkcyIsInJlY29tbWVuZGVkQWdlIiwibWV0YURlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsInZhcmlhbnRzIiwiaW5jbHVkZVByb2R1Y3RWYXJpYW50cyIsImNvbGxlY3Rpb24iLCJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLE8sRUFBb0M7QUFDeEMsYUFBTyxJQUFJQyxtQkFBSixDQUFZO0FBQ2ZDLFFBQUFBLEVBQUUsRUFBRUYsT0FBTyxDQUFDRSxFQURHO0FBRWZDLFFBQUFBLFNBQVMsRUFBRUgsT0FBTyxDQUFDRyxTQUZKO0FBR2ZDLFFBQUFBLFNBQVMsRUFBRUosT0FBTyxDQUFDSSxTQUhKO0FBSWZDLFFBQUFBLFdBQVcsRUFBRUwsT0FBTyxDQUFDSyxXQUpOO0FBS2ZDLFFBQUFBLElBQUksRUFBRU4sT0FBTyxDQUFDTSxJQUxDO0FBTWZDLFFBQUFBLEtBQUssRUFBRVAsT0FBTyxDQUFDTyxLQU5BO0FBT2ZDLFFBQUFBLE1BQU0sRUFBRVIsT0FBTyxDQUFDUSxNQVBEO0FBUWZDLFFBQUFBLFFBQVEsRUFBRVQsT0FBTyxDQUFDUyxRQVJIO0FBU2ZDLFFBQUFBLFNBQVMsRUFBRVYsT0FBTyxDQUFDVSxTQVRKO0FBVWZDLFFBQUFBLFVBQVUsRUFBRVgsT0FBTyxDQUFDVyxVQVZMO0FBV2ZDLFFBQUFBLFdBQVcsRUFBRVosT0FBTyxDQUFDWSxXQVhOO0FBWWZDLFFBQUFBLFVBQVUsRUFBRWIsT0FBTyxDQUFDYSxVQVpMO0FBYWZDLFFBQUFBLFlBQVksRUFBRWQsT0FBTyxDQUFDYyxZQWJQO0FBY2ZDLFFBQUFBLFlBQVksRUFBRWYsT0FBTyxDQUFDZSxZQWRQO0FBZWZDLFFBQUFBLGNBQWMsRUFBRWhCLE9BQU8sQ0FBQ2dCLGNBZlQ7QUFnQmZDLFFBQUFBLGVBQWUsRUFBRWpCLE9BQU8sQ0FBQ2lCLGVBaEJWO0FBaUJmQyxRQUFBQSxnQkFBZ0IsRUFBRWxCLE9BQU8sQ0FBQ2tCLGdCQWpCWDtBQWtCZjtBQUNBQyxRQUFBQSxRQUFRLEVBQUUsS0FBS0Msc0JBQUwsQ0FBNEJwQixPQUE1QjtBQW5CSyxPQUFaLENBQVA7QUFxQkg7OzsyQ0FFc0JBLE8sRUFBc0Q7QUFDekUsYUFBTyxLQUFLcUIsVUFBTCxDQUFnQnJCLE9BQWhCLEVBQXlCLFVBQXpCLEVBQXFDLElBQUlzQixxQ0FBSixFQUFyQyxDQUFQO0FBQ0g7Ozs7RUFoQzJDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gJy4uL1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcHJvZHVjdCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBQcm9kdWN0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcHJvZHVjdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogcHJvZHVjdC5wdWJsaXNoZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgICAgIGJyYW5kOiBwcm9kdWN0LmJyYW5kLFxuICAgICAgICAgICAgdG9rZW5zOiBwcm9kdWN0LnRva2VucyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBwcm9kdWN0LmZlYXR1cmVzLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiBwcm9kdWN0LnBhZ2VUaXRsZSxcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IHByb2R1Y3QucG9wdWxhcml0eSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVjZW50UmFuazogcHJvZHVjdC5yZWNlbnRSYW5rLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyOiBwcm9kdWN0Lm1hbnVmYWN0dXJlcixcbiAgICAgICAgICAgIG1ldGFLZXl3b3JkczogcHJvZHVjdC5tZXRhS2V5d29yZHMsXG4gICAgICAgICAgICByZWNvbW1lbmRlZEFnZTogcHJvZHVjdC5yZWNvbW1lbmRlZEFnZSxcbiAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvbjogcHJvZHVjdC5tZXRhRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBwcm9kdWN0LnNob3J0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgdmFyaWFudHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RWYXJpYW50cyhwcm9kdWN0KSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RWYXJpYW50cyhwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ3ZhcmlhbnRzJywgbmV3IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19