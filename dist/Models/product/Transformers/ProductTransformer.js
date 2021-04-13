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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2Zvcm1lciIsInByb2R1Y3QiLCJQcm9kdWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIm5hbWUiLCJzbHVnIiwic3RhdHVzIiwic3RvY2siLCJicmFuZCIsInRva2VucyIsImZlYXR1cmVzIiwicGFnZVRpdGxlIiwicG9wdWxhcml0eSIsImRlc2NyaXB0aW9uIiwicmVjZW50UmFuayIsIm1hbnVmYWN0dXJlciIsIm1ldGFLZXl3b3JkcyIsInJlY29tbWVuZGVkQWdlIiwibWV0YURlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsInJlc291cmNlVHlwZSIsInRvdGFsT3JkZXJzIiwidG90YWxSZXR1cm5lZERhbWFnZWQiLCJ0b3RhbFJldHVybmVkVW5kYW1hZ2VkIiwidG90YWxTYWZldHlTdG9jayIsInRvdGFsU29sZCIsInRvdGFsU3RvY2tXaXRoQ3VzdG9tZXIiLCJ0b3RhbFN0b2NrUXVldWVkIiwidG90YWxTdG9ja0luUmV0dXJuIiwidG90YWxTdG9ja1dpdGhDdXN0b21lck9yRGVzaWduYXRlZEZvclJldHVybiIsInRvdGFsU3RvY2tVbml0cyIsImd0aW4iLCJhc3NldHMiLCJpbmNsdWRlQXNzZXRzIiwicHJvZHVjdEFzc29jaWF0aW9ucyIsImluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zIiwicHJvZHVjdFZhcmlhbnRzIiwiaW5jbHVkZVByb2R1Y3RWYXJpYW50cyIsInJlbGF0ZWRQcm9kdWN0cyIsImluY2x1ZGVSZWxhdGVkUHJvZHVjdHMiLCJjb2xsZWN0aW9uIiwiQXNzZXRUcmFuc2Zvcm1lciIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJt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QUFtQyxJQUFJMkMsNEJBQUosRUFBbkMsQ0FBUDtBQUNIOzs7K0NBRTBCM0MsTyxFQUFzRDtBQUM3RSxhQUFPLEtBQUswQyxVQUFMLENBQWdCMUMsT0FBaEIsRUFBeUIscUJBQXpCLEVBQWdELElBQUk0Qyx5Q0FBSixFQUFoRCxDQUFQO0FBQ0g7OzsyQ0FFc0I1QyxPLEVBQWtEO0FBQ3JFLGFBQU8sS0FBSzBDLFVBQUwsQ0FBZ0IxQyxPQUFoQixFQUF5QixpQkFBekIsRUFBNEMsSUFBSTZDLHFDQUFKLEVBQTVDLENBQVA7QUFDSDs7OzJDQUVzQjdDLE8sRUFBMkM7QUFDOUQsYUFBTyxLQUFLMEMsVUFBTCxDQUFnQjFDLE9BQWhCLEVBQXlCLGlCQUF6QixFQUE0QyxJQUFJRCxrQkFBSixFQUE1QyxDQUFQO0FBQ0g7Ozs7RUE5RDJDK0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdCBmcm9tICcuLi9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudCBmcm9tICcuLi9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgQXNzZXQgZnJvbSAnLi4vLi4vYXNzZXQvQXNzZXQnO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbiBmcm9tICcuLi8uLi9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyJztcbmltcG9ydCBBc3NldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Fzc2V0L1RyYW5zZm9ybWVycy9Bc3NldFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hc3NvY2lhdGlvbi9UcmFuc2Zvcm1lcnMvUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBwcm9kdWN0IHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdFxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IFByb2R1Y3Qge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3Qoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBwcm9kdWN0LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBwcm9kdWN0LnB1Ymxpc2hlZEF0LFxuICAgICAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdC5zbHVnLFxuICAgICAgICAgICAgc3RhdHVzOiBwcm9kdWN0LnN0YXR1cyxcbiAgICAgICAgICAgIHN0b2NrOiBwcm9kdWN0LnN0b2NrLFxuICAgICAgICAgICAgYnJhbmQ6IHByb2R1Y3QuYnJhbmQsXG4gICAgICAgICAgICB0b2tlbnM6IHByb2R1Y3QudG9rZW5zLFxuICAgICAgICAgICAgZmVhdHVyZXM6IHByb2R1Y3QuZmVhdHVyZXMsXG4gICAgICAgICAgICBwYWdlVGl0bGU6IHByb2R1Y3QucGFnZVRpdGxlLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogcHJvZHVjdC5wb3B1bGFyaXR5LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZWNlbnRSYW5rOiBwcm9kdWN0LnJlY2VudFJhbmssXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXI6IHByb2R1Y3QubWFudWZhY3R1cmVyLFxuICAgICAgICAgICAgbWV0YUtleXdvcmRzOiBwcm9kdWN0Lm1ldGFLZXl3b3JkcyxcbiAgICAgICAgICAgIHJlY29tbWVuZGVkQWdlOiBwcm9kdWN0LnJlY29tbWVuZGVkQWdlLFxuICAgICAgICAgICAgbWV0YURlc2NyaXB0aW9uOiBwcm9kdWN0Lm1ldGFEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHNob3J0RGVzY3JpcHRpb246IHByb2R1Y3Quc2hvcnREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogcHJvZHVjdC5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICB0b3RhbE9yZGVyczogcHJvZHVjdC50b3RhbE9yZGVycyxcbiAgICAgICAgICAgIHRvdGFsUmV0dXJuZWREYW1hZ2VkOiBwcm9kdWN0LnRvdGFsUmV0dXJuZWREYW1hZ2VkLFxuICAgICAgICAgICAgdG90YWxSZXR1cm5lZFVuZGFtYWdlZDogcHJvZHVjdC50b3RhbFJldHVybmVkVW5kYW1hZ2VkLFxuICAgICAgICAgICAgdG90YWxTYWZldHlTdG9jazogcHJvZHVjdC50b3RhbFNhZmV0eVN0b2NrLFxuICAgICAgICAgICAgdG90YWxTb2xkOiBwcm9kdWN0LnRvdGFsU29sZCxcbiAgICAgICAgICAgIHRvdGFsU3RvY2tXaXRoQ3VzdG9tZXI6IHByb2R1Y3QudG90YWxTdG9ja1dpdGhDdXN0b21lcixcbiAgICAgICAgICAgIHRvdGFsU3RvY2tRdWV1ZWQ6IHByb2R1Y3QudG90YWxTdG9ja1F1ZXVlZCxcbiAgICAgICAgICAgIHRvdGFsU3RvY2tJblJldHVybjogcHJvZHVjdC50b3RhbFN0b2NrSW5SZXR1cm4sXG4gICAgICAgICAgICB0b3RhbFN0b2NrV2l0aEN1c3RvbWVyT3JEZXNpZ25hdGVkRm9yUmV0dXJuOiBwcm9kdWN0LnRvdGFsU3RvY2tXaXRoQ3VzdG9tZXJPckRlc2lnbmF0ZWRGb3JSZXR1cm4sXG4gICAgICAgICAgICB0b3RhbFN0b2NrVW5pdHM6IHByb2R1Y3QudG90YWxTdG9ja1VuaXRzLFxuICAgICAgICAgICAgZ3RpbjogcHJvZHVjdC5ndGluLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5pbmNsdWRlQXNzZXRzKHByb2R1Y3QpLFxuICAgICAgICAgICAgcHJvZHVjdEFzc29jaWF0aW9uczogdGhpcy5pbmNsdWRlUHJvZHVjdEFzc29jaWF0aW9ucyhwcm9kdWN0KSxcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50czogdGhpcy5pbmNsdWRlUHJvZHVjdFZhcmlhbnRzKHByb2R1Y3QpLFxuICAgICAgICAgICAgcmVsYXRlZFByb2R1Y3RzOiB0aGlzLmluY2x1ZGVSZWxhdGVkUHJvZHVjdHMocHJvZHVjdCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NldHMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PEFzc2V0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ2Fzc2V0cycsIG5ldyBBc3NldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0QXNzb2NpYXRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAncHJvZHVjdEFzc29jaWF0aW9ucycsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdFZhcmlhbnRzKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0VmFyaWFudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICdwcm9kdWN0VmFyaWFudHMnLCBuZXcgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmVsYXRlZFByb2R1Y3RzKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ3JlbGF0ZWRQcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19