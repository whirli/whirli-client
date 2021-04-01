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
        totalStockUnits: product.totalStockUnits,
        totalStockWithCustomer: product.totalStockWithCustomer,
        gtin: product.gtin,
        aggregateRating: product.aggregateRating,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2Zvcm1lciIsInByb2R1Y3QiLCJQcm9kdWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIm5hbWUiLCJzbHVnIiwic3RhdHVzIiwic3RvY2siLCJicmFuZCIsInRva2VucyIsImZlYXR1cmVzIiwicGFnZVRpdGxlIiwicG9wdWxhcml0eSIsImRlc2NyaXB0aW9uIiwicmVjZW50UmFuayIsIm1hbnVmYWN0dXJlciIsIm1ldGFLZXl3b3JkcyIsInJlY29tbWVuZGVkQWdlIiwibWV0YURlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsInJlc291cmNlVHlwZSIsInRvdGFsT3JkZXJzIiwidG90YWxSZXR1cm5lZERhbWFnZWQiLCJ0b3RhbFJldHVybmVkVW5kYW1hZ2VkIiwidG90YWxTYWZldHlTdG9jayIsInRvdGFsU29sZCIsInRvdGFsU3RvY2tVbml0cyIsInRvdGFsU3RvY2tXaXRoQ3VzdG9tZXIiLCJndGluIiwiYWdncmVnYXRlUmF0aW5nIiwiYXNzZXRzIiwiaW5jbHVkZUFzc2V0cyIsInByb2R1Y3RBc3NvY2lhdGlvbnMiLCJpbmNsdWRlUHJvZHVjdEFzc29jaWF0aW9ucyIsInByb2R1Y3RWYXJpYW50cyIsImluY2x1ZGVQcm9kdWN0VmFyaWFudHMiLCJyZWxhdGVkUHJvZHVjdHMiLCJpbmNsdWRlUmVsYXRlZFByb2R1Y3RzIiwiY29sbGVjdGlvbiIsIkFzc2V0VHJhbnNmb3JtZXIiLCJQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJ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QUFPLEtBQUt3QyxVQUFMLENBQWdCeEMsT0FBaEIsRUFBeUIsaUJBQXpCLEVBQTRDLElBQUkyQyxxQ0FBSixFQUE1QyxDQUFQO0FBQ0g7OzsyQ0FFc0IzQyxPLEVBQTJDO0FBQzlELGFBQU8sS0FBS3dDLFVBQUwsQ0FBZ0J4QyxPQUFoQixFQUF5QixpQkFBekIsRUFBNEMsSUFBSUQsa0JBQUosRUFBNUMsQ0FBUDtBQUNIOzs7O0VBNUQyQzZDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnQgZnJvbSAnLi4vUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IEFzc2V0IGZyb20gJy4uLy4uL2Fzc2V0L0Fzc2V0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb24gZnJvbSAnLi4vLi4vYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hc3NldC9UcmFuc2Zvcm1lcnMvQXNzZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcHJvZHVjdCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBQcm9kdWN0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcHJvZHVjdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogcHJvZHVjdC5wdWJsaXNoZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3Quc2x1ZyxcbiAgICAgICAgICAgIHN0YXR1czogcHJvZHVjdC5zdGF0dXMsXG4gICAgICAgICAgICBzdG9jazogcHJvZHVjdC5zdG9jayxcbiAgICAgICAgICAgIGJyYW5kOiBwcm9kdWN0LmJyYW5kLFxuICAgICAgICAgICAgdG9rZW5zOiBwcm9kdWN0LnRva2VucyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBwcm9kdWN0LmZlYXR1cmVzLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiBwcm9kdWN0LnBhZ2VUaXRsZSxcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IHByb2R1Y3QucG9wdWxhcml0eSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVjZW50UmFuazogcHJvZHVjdC5yZWNlbnRSYW5rLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyOiBwcm9kdWN0Lm1hbnVmYWN0dXJlcixcbiAgICAgICAgICAgIG1ldGFLZXl3b3JkczogcHJvZHVjdC5tZXRhS2V5d29yZHMsXG4gICAgICAgICAgICByZWNvbW1lbmRlZEFnZTogcHJvZHVjdC5yZWNvbW1lbmRlZEFnZSxcbiAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvbjogcHJvZHVjdC5tZXRhRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBwcm9kdWN0LnNob3J0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHByb2R1Y3QucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgdG90YWxPcmRlcnM6IHByb2R1Y3QudG90YWxPcmRlcnMsXG4gICAgICAgICAgICB0b3RhbFJldHVybmVkRGFtYWdlZDogcHJvZHVjdC50b3RhbFJldHVybmVkRGFtYWdlZCxcbiAgICAgICAgICAgIHRvdGFsUmV0dXJuZWRVbmRhbWFnZWQ6IHByb2R1Y3QudG90YWxSZXR1cm5lZFVuZGFtYWdlZCxcbiAgICAgICAgICAgIHRvdGFsU2FmZXR5U3RvY2s6IHByb2R1Y3QudG90YWxTYWZldHlTdG9jayxcbiAgICAgICAgICAgIHRvdGFsU29sZDogcHJvZHVjdC50b3RhbFNvbGQsXG4gICAgICAgICAgICB0b3RhbFN0b2NrVW5pdHM6IHByb2R1Y3QudG90YWxTdG9ja1VuaXRzLFxuICAgICAgICAgICAgdG90YWxTdG9ja1dpdGhDdXN0b21lcjogcHJvZHVjdC50b3RhbFN0b2NrV2l0aEN1c3RvbWVyLFxuICAgICAgICAgICAgZ3RpbjogcHJvZHVjdC5ndGluLFxuICAgICAgICAgICAgYWdncmVnYXRlUmF0aW5nOiBwcm9kdWN0LmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBhc3NldHM6IHRoaXMuaW5jbHVkZUFzc2V0cyhwcm9kdWN0KSxcbiAgICAgICAgICAgIHByb2R1Y3RBc3NvY2lhdGlvbnM6IHRoaXMuaW5jbHVkZVByb2R1Y3RBc3NvY2lhdGlvbnMocHJvZHVjdCksXG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RWYXJpYW50cyhwcm9kdWN0KSxcbiAgICAgICAgICAgIHJlbGF0ZWRQcm9kdWN0czogdGhpcy5pbmNsdWRlUmVsYXRlZFByb2R1Y3RzKHByb2R1Y3QpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzZXRzKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxBc3NldD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICdhc3NldHMnLCBuZXcgQXNzZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdEFzc29jaWF0aW9ucyhwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdEFzc29jaWF0aW9uPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ3Byb2R1Y3RBc3NvY2lhdGlvbnMnLCBuZXcgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RWYXJpYW50cyhwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdFZhcmlhbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAncHJvZHVjdFZhcmlhbnRzJywgbmV3IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJlbGF0ZWRQcm9kdWN0cyhwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICdyZWxhdGVkUHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==