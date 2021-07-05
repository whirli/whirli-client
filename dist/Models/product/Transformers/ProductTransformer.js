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
        discountedValue: product.discountedValue,
        // has many
        assets: this.includeAssets(product),
        productAssociations: this.includeProductAssociations(product),
        productVariants: this.includeProductVariants(product),
        relatedProducts: this.includeRelatedProducts(product)
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2Zvcm1lciIsInByb2R1Y3QiLCJQcm9kdWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIm5hbWUiLCJzbHVnIiwic3RhdHVzIiwic3RvY2siLCJicmFuZCIsInRva2VucyIsImZlYXR1cmVzIiwicGFnZVRpdGxlIiwicG9wdWxhcml0eSIsImRlc2NyaXB0aW9uIiwicmVjZW50UmFuayIsIm1hbnVmYWN0dXJlciIsIm1ldGFLZXl3b3JkcyIsInJlY29tbWVuZGVkQWdlIiwibWV0YURlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsInJlc291cmNlVHlwZSIsInRvdGFsT3JkZXJzIiwidG90YWxSZXR1cm5lZERhbWFnZWQiLCJ0b3RhbFJldHVybmVkVW5kYW1hZ2VkIiwidG90YWxTYWZldHlTdG9jayIsInRvdGFsU29sZCIsInRvdGFsU3RvY2tXaXRoQ3VzdG9tZXIiLCJ0b3RhbFN0b2NrUXVldWVkIiwidG90YWxTdG9ja0luUmV0dXJuIiwidG90YWxTdG9ja1dpdGhDdXN0b21lck9yRGVzaWduYXRlZEZvclJldHVybiIsInRvdGFsU3RvY2tVbml0cyIsImd0aW4iLCJkaXNjb3VudGVkVmFsdWUiLCJhc3NldHMiLCJpbmNsdWRlQXNzZXRzIiwicHJvZHVjdEFzc29jaWF0aW9ucyIsImluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zIiwicHJvZHVjdFZhcmlhbnRzIiwiaW5jbHVkZVByb2R1Y3RWYXJpYW50cyIsInJlbGF0ZWRQcm9kdWN0cyIsImluY2x1ZGVSZWxhdGVkUHJvZHVjdHMiLCJjb2xsZWN0aW9uIiwiQXNzZXRUcmFuc2Zvcm1lciIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciIsIkJh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YUEsTyxFQUF5QztBQUNuRCxhQUFPLEtBQUsyQyxVQUFMLENBQWdCM0MsT0FBaEIsRUFBeUIsUUFBekIsRUFBbUMsSUFBSTRDLDRCQUFKLEVBQW5DLENBQVA7QUFDSDs7OytDQUUwQjVDLE8sRUFBc0Q7QUFDN0UsYUFBTyxLQUFLMkMsVUFBTCxDQUFnQjNDLE9BQWhCLEVBQXlCLHFCQUF6QixFQUFnRCxJQUFJNkMseUNBQUosRUFBaEQsQ0FBUDtBQUNIOzs7MkNBRXNCN0MsTyxFQUFrRDtBQUNyRSxhQUFPLEtBQUsyQyxVQUFMLENBQWdCM0MsT0FBaEIsRUFBeUIsaUJBQXpCLEVBQTRDLElBQUk4QyxxQ0FBSixFQUE1QyxDQUFQO0FBQ0g7OzsyQ0FFc0I5QyxPLEVBQTJDO0FBQzlELGFBQU8sS0FBSzJDLFVBQUwsQ0FBZ0IzQyxPQUFoQixFQUF5QixpQkFBekIsRUFBNEMsSUFBSUQsa0JBQUosRUFBNUMsQ0FBUDtBQUNIOzs7O0VBL0QyQ2dELDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnQgZnJvbSAnLi4vUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IEFzc2V0IGZyb20gJy4uLy4uL2Fzc2V0L0Fzc2V0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb24gZnJvbSAnLi4vLi4vYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hc3NldC9UcmFuc2Zvcm1lcnMvQXNzZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcHJvZHVjdCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBQcm9kdWN0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcHJvZHVjdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogcHJvZHVjdC5wdWJsaXNoZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3Quc2x1ZyxcbiAgICAgICAgICAgIHN0YXR1czogcHJvZHVjdC5zdGF0dXMsXG4gICAgICAgICAgICBzdG9jazogcHJvZHVjdC5zdG9jayxcbiAgICAgICAgICAgIGJyYW5kOiBwcm9kdWN0LmJyYW5kLFxuICAgICAgICAgICAgdG9rZW5zOiBwcm9kdWN0LnRva2VucyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBwcm9kdWN0LmZlYXR1cmVzLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiBwcm9kdWN0LnBhZ2VUaXRsZSxcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IHByb2R1Y3QucG9wdWxhcml0eSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVjZW50UmFuazogcHJvZHVjdC5yZWNlbnRSYW5rLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyOiBwcm9kdWN0Lm1hbnVmYWN0dXJlcixcbiAgICAgICAgICAgIG1ldGFLZXl3b3JkczogcHJvZHVjdC5tZXRhS2V5d29yZHMsXG4gICAgICAgICAgICByZWNvbW1lbmRlZEFnZTogcHJvZHVjdC5yZWNvbW1lbmRlZEFnZSxcbiAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvbjogcHJvZHVjdC5tZXRhRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBwcm9kdWN0LnNob3J0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHByb2R1Y3QucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgdG90YWxPcmRlcnM6IHByb2R1Y3QudG90YWxPcmRlcnMsXG4gICAgICAgICAgICB0b3RhbFJldHVybmVkRGFtYWdlZDogcHJvZHVjdC50b3RhbFJldHVybmVkRGFtYWdlZCxcbiAgICAgICAgICAgIHRvdGFsUmV0dXJuZWRVbmRhbWFnZWQ6IHByb2R1Y3QudG90YWxSZXR1cm5lZFVuZGFtYWdlZCxcbiAgICAgICAgICAgIHRvdGFsU2FmZXR5U3RvY2s6IHByb2R1Y3QudG90YWxTYWZldHlTdG9jayxcbiAgICAgICAgICAgIHRvdGFsU29sZDogcHJvZHVjdC50b3RhbFNvbGQsXG4gICAgICAgICAgICB0b3RhbFN0b2NrV2l0aEN1c3RvbWVyOiBwcm9kdWN0LnRvdGFsU3RvY2tXaXRoQ3VzdG9tZXIsXG4gICAgICAgICAgICB0b3RhbFN0b2NrUXVldWVkOiBwcm9kdWN0LnRvdGFsU3RvY2tRdWV1ZWQsXG4gICAgICAgICAgICB0b3RhbFN0b2NrSW5SZXR1cm46IHByb2R1Y3QudG90YWxTdG9ja0luUmV0dXJuLFxuICAgICAgICAgICAgdG90YWxTdG9ja1dpdGhDdXN0b21lck9yRGVzaWduYXRlZEZvclJldHVybjogcHJvZHVjdC50b3RhbFN0b2NrV2l0aEN1c3RvbWVyT3JEZXNpZ25hdGVkRm9yUmV0dXJuLFxuICAgICAgICAgICAgdG90YWxTdG9ja1VuaXRzOiBwcm9kdWN0LnRvdGFsU3RvY2tVbml0cyxcbiAgICAgICAgICAgIGd0aW46IHByb2R1Y3QuZ3RpbixcbiAgICAgICAgICAgIGRpc2NvdW50ZWRWYWx1ZTogcHJvZHVjdC5kaXNjb3VudGVkVmFsdWUsXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgYXNzZXRzOiB0aGlzLmluY2x1ZGVBc3NldHMocHJvZHVjdCksXG4gICAgICAgICAgICBwcm9kdWN0QXNzb2NpYXRpb25zOiB0aGlzLmluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zKHByb2R1Y3QpLFxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnRzOiB0aGlzLmluY2x1ZGVQcm9kdWN0VmFyaWFudHMocHJvZHVjdCksXG4gICAgICAgICAgICByZWxhdGVkUHJvZHVjdHM6IHRoaXMuaW5jbHVkZVJlbGF0ZWRQcm9kdWN0cyhwcm9kdWN0KSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2V0cyhwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogQXJyYXk8QXNzZXQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAnYXNzZXRzJywgbmV3IEFzc2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RBc3NvY2lhdGlvbnMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RBc3NvY2lhdGlvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICdwcm9kdWN0QXNzb2NpYXRpb25zJywgbmV3IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0VmFyaWFudHMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RWYXJpYW50PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ3Byb2R1Y3RWYXJpYW50cycsIG5ldyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZWxhdGVkUHJvZHVjdHMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAncmVsYXRlZFByb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=