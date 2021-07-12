"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Product = _interopRequireDefault(require("../Product"));

var _ProductVariantTransformer = _interopRequireDefault(require("./ProductVariantTransformer"));

var _AssetTransformer = _interopRequireDefault(require("../../asset/Transformers/AssetTransformer"));

var _ProductAssociationTransformer = _interopRequireDefault(require("../../association/Transformers/ProductAssociationTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ProductAgeRangeTransformer = _interopRequireDefault(require("../../association/Transformers/ProductAgeRangeTransformer"));

var _ProductSkillTransformer = _interopRequireDefault(require("../../association/Transformers/ProductSkillTransformer"));

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
        slug: product.slug,
        status: product.status,
        stock: product.stock,
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
        resourceType: product.resourceType,
        totalOrders: product.totalOrders,
        totalReturnedDamaged: product.totalReturnedDamaged,
        totalReturnedUndamaged: product.totalReturnedUndamaged,
        totalSafetyStock: product.totalSafetyStock,
        totalSold: product.totalSold,
        totalStockWithCustomer: product.totalStockWithCustomer,
        totalStockQueued: product.totalStockQueued,
        totalStockInReturn: product.totalStockInReturn,
        totalStockWithCustomerOrDesignatedForReturn: product.totalStockWithCustomerOrDesignatedForReturn,
        totalStockUnits: product.totalStockUnits,
        gtin: product.gtin,
        optimumAgeId: product.optimumAgeId,
        primarySkillId: product.primarySkillId,
        discountedValue: product.discountedValue,
        // belongs to
        optimumAge: this.includeOptimumAge(product),
        primarySkill: this.includePrimarySkill(product),
        // has many
        assets: this.includeAssets(product),
        productAssociations: this.includeProductAssociations(product),
        productVariants: this.includeProductVariants(product),
        relatedProducts: this.includeRelatedProducts(product)
      });
    }
  }, {
    key: "includeOptimumAge",
    value: function includeOptimumAge(product) {
      return this.item(product, 'optimumAge', new _ProductAgeRangeTransformer["default"]());
    }
  }, {
    key: "includePrimarySkill",
    value: function includePrimarySkill(product) {
      return this.item(product, 'primarySkill', new _ProductSkillTransformer["default"]());
    }
  }, {
    key: "includeAssets",
    value: function includeAssets(product) {
      return this.collection(product, 'assets', new _AssetTransformer["default"]());
    }
  }, {
    key: "includeProductAssociations",
    value: function includeProductAssociations(product) {
      return this.collection(product, 'productAssociations', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeProductVariants",
    value: function includeProductVariants(product) {
      return this.collection(product, 'productVariants', new _ProductVariantTransformer["default"]());
    }
  }, {
    key: "includeRelatedProducts",
    value: function includeRelatedProducts(product) {
      return this.collection(product, 'relatedProducts', new ProductTransformer());
    }
  }]);

  return ProductTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2Zvcm1lciIsInByb2R1Y3QiLCJQcm9kdWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIm5hbWUiLCJzbHVnIiwic3RhdHVzIiwic3RvY2siLCJicmFuZCIsInRva2VucyIsImZlYXR1cmVzIiwicGFnZVRpdGxlIiwicG9wdWxhcml0eSIsImRlc2NyaXB0aW9uIiwicmVjZW50UmFuayIsIm1hbnVmYWN0dXJlciIsIm1ldGFLZXl3b3JkcyIsInJlY29tbWVuZGVkQWdlIiwibWV0YURlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsInJlc291cmNlVHlwZSIsInRvdGFsT3JkZXJzIiwidG90YWxSZXR1cm5lZERhbWFnZWQiLCJ0b3RhbFJldHVybmVkVW5kYW1hZ2VkIiwidG90YWxTYWZldHlTdG9jayIsInRvdGFsU29sZCIsInRvdGFsU3RvY2tXaXRoQ3VzdG9tZXIiLCJ0b3RhbFN0b2NrUXVldWVkIiwidG90YWxTdG9ja0luUmV0dXJuIiwidG90YWxTdG9ja1dpdGhDdXN0b21lck9yRGVzaWduYXRlZEZvclJldHVybiIsInRvdGFsU3RvY2tVbml0cyIsImd0aW4iLCJvcHRpbXVtQWdlSWQiLCJwcmltYXJ5U2tpbGxJZCIsImRpc2NvdW50ZWRWYWx1ZSIsIm9wdGltdW1BZ2UiLCJpbmNsdWRlT3B0aW11bUFnZSIsInByaW1hcnlTa2lsbCIsImluY2x1ZGVQcmltYXJ5U2tpbGwiLCJhc3NldHMiLCJpbmNsdWRlQXNzZXRzIiwicHJvZHVjdEFzc29jaWF0aW9ucyIsImluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zIiwicHJvZHVjdFZhcmlhbnRzIiwiaW5jbHVkZVByb2R1Y3RWYXJpYW50cyIsInJlbGF0ZWRQcm9kdWN0cyIsImluY2x1ZGVSZWxhdGVkUHJvZHVjdHMiLCJpdGVtIiwiUHJvZHVjdEFnZVJhbmdlVHJhbnNmb3JtZXIiLCJQcm9kdWN0U2tpbGxUcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJBc3NldFRyYW5zZm9ybWVyIiwiUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIiLCJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLE8sRUFBb0M7QUFDeEMsYUFBTyxJQUFJQyxtQkFBSixDQUFZO0FBQ2ZDLFFBQUFBLEVBQUUsRUFBRUYsT0FBTyxDQUFDRSxFQURHO0FBRWZDLFFBQUFBLFNBQVMsRUFBRUgsT0FBTyxDQUFDRyxTQUZKO0FBR2ZDLFFBQUFBLFNBQVMsRUFBRUosT0FBTyxDQUFDSSxTQUhKO0FBSWZDLFFBQUFBLFdBQVcsRUFBRUwsT0FBTyxDQUFDSyxXQUpOO0FBS2ZDLFFBQUFBLElBQUksRUFBRU4sT0FBTyxDQUFDTSxJQUxDO0FBTWZDLFFBQUFBLElBQUksRUFBRVAsT0FBTyxDQUFDTyxJQU5DO0FBT2ZDLFFBQUFBLE1BQU0sRUFBRVIsT0FBTyxDQUFDUSxNQVBEO0FBUWZDLFFBQUFBLEtBQUssRUFBRVQsT0FBTyxDQUFDUyxLQVJBO0FBU2ZDLFFBQUFBLEtBQUssRUFBRVYsT0FBTyxDQUFDVSxLQVRBO0FBVWZDLFFBQUFBLE1BQU0sRUFBRVgsT0FBTyxDQUFDVyxNQVZEO0FBV2ZDLFFBQUFBLFFBQVEsRUFBRVosT0FBTyxDQUFDWSxRQVhIO0FBWWZDLFFBQUFBLFNBQVMsRUFBRWIsT0FBTyxDQUFDYSxTQVpKO0FBYWZDLFFBQUFBLFVBQVUsRUFBRWQsT0FBTyxDQUFDYyxVQWJMO0FBY2ZDLFFBQUFBLFdBQVcsRUFBRWYsT0FBTyxDQUFDZSxXQWROO0FBZWZDLFFBQUFBLFVBQVUs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MkM7QUFDOUQsYUFBTyxLQUFLb0QsVUFBTCxDQUFnQnBELE9BQWhCLEVBQXlCLGlCQUF6QixFQUE0QyxJQUFJRCxrQkFBSixFQUE1QyxDQUFQO0FBQ0g7Ozs7RUE1RTJDeUQsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdCBmcm9tICcuLi9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudCBmcm9tICcuLi9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgQXNzZXQgZnJvbSAnLi4vLi4vYXNzZXQvQXNzZXQnO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbiBmcm9tICcuLi8uLi9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyJztcbmltcG9ydCBBc3NldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Fzc2V0L1RyYW5zZm9ybWVycy9Bc3NldFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hc3NvY2lhdGlvbi9UcmFuc2Zvcm1lcnMvUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBZ2VSYW5nZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Fzc29jaWF0aW9uL1RyYW5zZm9ybWVycy9Qcm9kdWN0QWdlUmFuZ2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFnZVJhbmdlIGZyb20gJy4uLy4uL2Fzc29jaWF0aW9uL1Byb2R1Y3RBZ2VSYW5nZSc7XG5pbXBvcnQgUHJvZHVjdFNraWxsIGZyb20gJy4uLy4uL2Fzc29jaWF0aW9uL1Byb2R1Y3RTa2lsbCc7XG5pbXBvcnQgUHJvZHVjdFNraWxsVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RTa2lsbFRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcHJvZHVjdCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBQcm9kdWN0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcHJvZHVjdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogcHJvZHVjdC5wdWJsaXNoZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3Quc2x1ZyxcbiAgICAgICAgICAgIHN0YXR1czogcHJvZHVjdC5zdGF0dXMsXG4gICAgICAgICAgICBzdG9jazogcHJvZHVjdC5zdG9jayxcbiAgICAgICAgICAgIGJyYW5kOiBwcm9kdWN0LmJyYW5kLFxuICAgICAgICAgICAgdG9rZW5zOiBwcm9kdWN0LnRva2VucyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBwcm9kdWN0LmZlYXR1cmVzLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiBwcm9kdWN0LnBhZ2VUaXRsZSxcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IHByb2R1Y3QucG9wdWxhcml0eSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVjZW50UmFuazogcHJvZHVjdC5yZWNlbnRSYW5rLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyOiBwcm9kdWN0Lm1hbnVmYWN0dXJlcixcbiAgICAgICAgICAgIG1ldGFLZXl3b3JkczogcHJvZHVjdC5tZXRhS2V5d29yZHMsXG4gICAgICAgICAgICByZWNvbW1lbmRlZEFnZTogcHJvZHVjdC5yZWNvbW1lbmRlZEFnZSxcbiAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvbjogcHJvZHVjdC5tZXRhRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBwcm9kdWN0LnNob3J0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHByb2R1Y3QucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgdG90YWxPcmRlcnM6IHByb2R1Y3QudG90YWxPcmRlcnMsXG4gICAgICAgICAgICB0b3RhbFJldHVybmVkRGFtYWdlZDogcHJvZHVjdC50b3RhbFJldHVybmVkRGFtYWdlZCxcbiAgICAgICAgICAgIHRvdGFsUmV0dXJuZWRVbmRhbWFnZWQ6IHByb2R1Y3QudG90YWxSZXR1cm5lZFVuZGFtYWdlZCxcbiAgICAgICAgICAgIHRvdGFsU2FmZXR5U3RvY2s6IHByb2R1Y3QudG90YWxTYWZldHlTdG9jayxcbiAgICAgICAgICAgIHRvdGFsU29sZDogcHJvZHVjdC50b3RhbFNvbGQsXG4gICAgICAgICAgICB0b3RhbFN0b2NrV2l0aEN1c3RvbWVyOiBwcm9kdWN0LnRvdGFsU3RvY2tXaXRoQ3VzdG9tZXIsXG4gICAgICAgICAgICB0b3RhbFN0b2NrUXVldWVkOiBwcm9kdWN0LnRvdGFsU3RvY2tRdWV1ZWQsXG4gICAgICAgICAgICB0b3RhbFN0b2NrSW5SZXR1cm46IHByb2R1Y3QudG90YWxTdG9ja0luUmV0dXJuLFxuICAgICAgICAgICAgdG90YWxTdG9ja1dpdGhDdXN0b21lck9yRGVzaWduYXRlZEZvclJldHVybjogcHJvZHVjdC50b3RhbFN0b2NrV2l0aEN1c3RvbWVyT3JEZXNpZ25hdGVkRm9yUmV0dXJuLFxuICAgICAgICAgICAgdG90YWxTdG9ja1VuaXRzOiBwcm9kdWN0LnRvdGFsU3RvY2tVbml0cyxcbiAgICAgICAgICAgIGd0aW46IHByb2R1Y3QuZ3RpbixcbiAgICAgICAgICAgIG9wdGltdW1BZ2VJZDogcHJvZHVjdC5vcHRpbXVtQWdlSWQsXG4gICAgICAgICAgICBwcmltYXJ5U2tpbGxJZDogcHJvZHVjdC5wcmltYXJ5U2tpbGxJZCxcbiAgICAgICAgICAgIGRpc2NvdW50ZWRWYWx1ZTogcHJvZHVjdC5kaXNjb3VudGVkVmFsdWUsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBvcHRpbXVtQWdlOiB0aGlzLmluY2x1ZGVPcHRpbXVtQWdlKHByb2R1Y3QpLFxuICAgICAgICAgICAgcHJpbWFyeVNraWxsOiB0aGlzLmluY2x1ZGVQcmltYXJ5U2tpbGwocHJvZHVjdCksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgYXNzZXRzOiB0aGlzLmluY2x1ZGVBc3NldHMocHJvZHVjdCksXG4gICAgICAgICAgICBwcm9kdWN0QXNzb2NpYXRpb25zOiB0aGlzLmluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zKHByb2R1Y3QpLFxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnRzOiB0aGlzLmluY2x1ZGVQcm9kdWN0VmFyaWFudHMocHJvZHVjdCksXG4gICAgICAgICAgICByZWxhdGVkUHJvZHVjdHM6IHRoaXMuaW5jbHVkZVJlbGF0ZWRQcm9kdWN0cyhwcm9kdWN0KSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9wdGltdW1BZ2UocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IFByb2R1Y3RBZ2VSYW5nZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3QsICdvcHRpbXVtQWdlJywgbmV3IFByb2R1Y3RBZ2VSYW5nZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcmltYXJ5U2tpbGwocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IFByb2R1Y3RTa2lsbCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3QsICdwcmltYXJ5U2tpbGwnLCBuZXcgUHJvZHVjdFNraWxsVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2V0cyhwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogQXJyYXk8QXNzZXQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAnYXNzZXRzJywgbmV3IEFzc2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RBc3NvY2lhdGlvbnMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RBc3NvY2lhdGlvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICdwcm9kdWN0QXNzb2NpYXRpb25zJywgbmV3IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0VmFyaWFudHMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RWYXJpYW50PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ3Byb2R1Y3RWYXJpYW50cycsIG5ldyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZWxhdGVkUHJvZHVjdHMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAncmVsYXRlZFByb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=