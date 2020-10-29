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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2Zvcm1lciIsInByb2R1Y3QiLCJQcm9kdWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIm5hbWUiLCJzbHVnIiwic3RhdHVzIiwic3RvY2siLCJicmFuZCIsInRva2VucyIsImZlYXR1cmVzIiwicGFnZVRpdGxlIiwicG9wdWxhcml0eSIsImRlc2NyaXB0aW9uIiwicmVjZW50UmFuayIsIm1hbnVmYWN0dXJlciIsIm1ldGFLZXl3b3JkcyIsInJlY29tbWVuZGVkQWdlIiwibWV0YURlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsInJlc291cmNlVHlwZSIsInRvdGFsT3JkZXJzIiwidG90YWxSZXR1cm5lZERhbWFnZWQiLCJ0b3RhbFJldHVybmVkVW5kYW1hZ2VkIiwidG90YWxTYWZldHlTdG9jayIsInRvdGFsU29sZCIsInRvdGFsU3RvY2tVbml0cyIsInRvdGFsU3RvY2tXaXRoQ3VzdG9tZXIiLCJhc3NldHMiLCJpbmNsdWRlQXNzZXRzIiwicHJvZHVjdEFzc29jaWF0aW9ucyIsImluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zIiwicHJvZHVjdFZhcmlhbnRzIiwiaW5jbHVkZVByb2R1Y3RWYXJpYW50cyIsInJlbGF0ZWRQcm9kdWN0cyIsImluY2x1ZGVSZWxhdGVkUHJvZHVjdHMiLCJjb2xsZWN0aW9uIiwiQXNzZXRUcmFuc2Zvcm1lciIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUtBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxrQjs7Ozs7Ozs7Ozs7Ozs7QUFD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S3NDLFVBQUwsQ0FBZ0J0QyxPQUFoQixFQUF5QixpQkFBekIsRUFBNEMsSUFBSUQsa0JBQUosRUFBNUMsQ0FBUDtBQUNIOzs7O0VBMUQyQzJDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnQgZnJvbSAnLi4vUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IEFzc2V0IGZyb20gJy4uLy4uL2Fzc2V0L0Fzc2V0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb24gZnJvbSAnLi4vLi4vYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hc3NldC9UcmFuc2Zvcm1lcnMvQXNzZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcHJvZHVjdCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBQcm9kdWN0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcHJvZHVjdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogcHJvZHVjdC5wdWJsaXNoZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3Quc2x1ZyxcbiAgICAgICAgICAgIHN0YXR1czogcHJvZHVjdC5zdGF0dXMsXG4gICAgICAgICAgICBzdG9jazogcHJvZHVjdC5zdG9jayxcbiAgICAgICAgICAgIGJyYW5kOiBwcm9kdWN0LmJyYW5kLFxuICAgICAgICAgICAgdG9rZW5zOiBwcm9kdWN0LnRva2VucyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBwcm9kdWN0LmZlYXR1cmVzLFxuICAgICAgICAgICAgcGFnZVRpdGxlOiBwcm9kdWN0LnBhZ2VUaXRsZSxcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IHByb2R1Y3QucG9wdWxhcml0eSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVjZW50UmFuazogcHJvZHVjdC5yZWNlbnRSYW5rLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyOiBwcm9kdWN0Lm1hbnVmYWN0dXJlcixcbiAgICAgICAgICAgIG1ldGFLZXl3b3JkczogcHJvZHVjdC5tZXRhS2V5d29yZHMsXG4gICAgICAgICAgICByZWNvbW1lbmRlZEFnZTogcHJvZHVjdC5yZWNvbW1lbmRlZEFnZSxcbiAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvbjogcHJvZHVjdC5tZXRhRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiBwcm9kdWN0LnNob3J0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHByb2R1Y3QucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgdG90YWxPcmRlcnM6IHByb2R1Y3QudG90YWxPcmRlcnMsXG4gICAgICAgICAgICB0b3RhbFJldHVybmVkRGFtYWdlZDogcHJvZHVjdC50b3RhbFJldHVybmVkRGFtYWdlZCxcbiAgICAgICAgICAgIHRvdGFsUmV0dXJuZWRVbmRhbWFnZWQ6IHByb2R1Y3QudG90YWxSZXR1cm5lZFVuZGFtYWdlZCxcbiAgICAgICAgICAgIHRvdGFsU2FmZXR5U3RvY2s6IHByb2R1Y3QudG90YWxTYWZldHlTdG9jayxcbiAgICAgICAgICAgIHRvdGFsU29sZDogcHJvZHVjdC50b3RhbFNvbGQsXG4gICAgICAgICAgICB0b3RhbFN0b2NrVW5pdHM6IHByb2R1Y3QudG90YWxTdG9ja1VuaXRzLFxuICAgICAgICAgICAgdG90YWxTdG9ja1dpdGhDdXN0b21lcjogcHJvZHVjdC50b3RhbFN0b2NrV2l0aEN1c3RvbWVyLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5pbmNsdWRlQXNzZXRzKHByb2R1Y3QpLFxuICAgICAgICAgICAgcHJvZHVjdEFzc29jaWF0aW9uczogdGhpcy5pbmNsdWRlUHJvZHVjdEFzc29jaWF0aW9ucyhwcm9kdWN0KSxcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50czogdGhpcy5pbmNsdWRlUHJvZHVjdFZhcmlhbnRzKHByb2R1Y3QpLFxuICAgICAgICAgICAgcmVsYXRlZFByb2R1Y3RzOiB0aGlzLmluY2x1ZGVSZWxhdGVkUHJvZHVjdHMocHJvZHVjdCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NldHMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PEFzc2V0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ2Fzc2V0cycsIG5ldyBBc3NldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0QXNzb2NpYXRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAncHJvZHVjdEFzc29jaWF0aW9ucycsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdFZhcmlhbnRzKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0VmFyaWFudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICdwcm9kdWN0VmFyaWFudHMnLCBuZXcgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmVsYXRlZFByb2R1Y3RzKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ3JlbGF0ZWRQcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19