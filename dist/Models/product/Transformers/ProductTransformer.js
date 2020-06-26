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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProductTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductTransformer, _BaseTransformer);

  var _super = _createSuper(ProductTransformer);

  function ProductTransformer() {
    _classCallCheck(this, ProductTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2Zvcm1lciIsInByb2R1Y3QiLCJQcm9kdWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIm5hbWUiLCJzbHVnIiwic3RhdHVzIiwic3RvY2siLCJicmFuZCIsInRva2VucyIsImZlYXR1cmVzIiwicGFnZVRpdGxlIiwicG9wdWxhcml0eSIsImRlc2NyaXB0aW9uIiwicmVjZW50UmFuayIsIm1hbnVmYWN0dXJlciIsIm1ldGFLZXl3b3JkcyIsInJlY29tbWVuZGVkQWdlIiwibWV0YURlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsInJlc291cmNlVHlwZSIsInRvdGFsT3JkZXJzIiwidG90YWxSZXR1cm5lZERhbWFnZWQiLCJ0b3RhbFJldHVybmVkVW5kYW1hZ2VkIiwidG90YWxTYWZldHlTdG9jayIsInRvdGFsU29sZCIsInRvdGFsU3RvY2tVbml0cyIsInRvdGFsU3RvY2tXaXRoQ3VzdG9tZXIiLCJhc3NldHMiLCJpbmNsdWRlQXNzZXRzIiwicHJvZHVjdEFzc29jaWF0aW9ucyIsImluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zIiwicHJvZHVjdFZhcmlhbnRzIiwiaW5jbHVkZVByb2R1Y3RWYXJpYW50cyIsInJlbGF0ZWRQcm9kdWN0cyIsImluY2x1ZGVSZWxhdGVkUHJvZHVjdHMiLCJjb2xsZWN0aW9uIiwiQXNzZXRUcmFuc2Zvcm1lciIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUtBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsa0I7Ozs7Ozs7Ozs7Ozs7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LEtBQUtzQyxVQUFMLENBQWdCdEMsT0FBaEIsRUFBeUIsaUJBQXpCLEVBQTRDLElBQUlELGtCQUFKLEVBQTVDLENBQVA7QUFDSDs7OztFQTFEMkMyQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gJy4uL1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50IGZyb20gJy4uL1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBBc3NldCBmcm9tICcuLi8uLi9hc3NldC9Bc3NldCc7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uIGZyb20gJy4uLy4uL2Fzc29jaWF0aW9uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciBmcm9tICcuL1Byb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Fzc29jaWF0aW9uL1RyYW5zZm9ybWVycy9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHByb2R1Y3QgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0XG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogUHJvZHVjdCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdCh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcHJvZHVjdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHByb2R1Y3QudXBkYXRlZEF0LFxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IHByb2R1Y3QucHVibGlzaGVkQXQsXG4gICAgICAgICAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0LnNsdWcsXG4gICAgICAgICAgICBzdGF0dXM6IHByb2R1Y3Quc3RhdHVzLFxuICAgICAgICAgICAgc3RvY2s6IHByb2R1Y3Quc3RvY2ssXG4gICAgICAgICAgICBicmFuZDogcHJvZHVjdC5icmFuZCxcbiAgICAgICAgICAgIHRva2VuczogcHJvZHVjdC50b2tlbnMsXG4gICAgICAgICAgICBmZWF0dXJlczogcHJvZHVjdC5mZWF0dXJlcyxcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogcHJvZHVjdC5wYWdlVGl0bGUsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiBwcm9kdWN0LnBvcHVsYXJpdHksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvZHVjdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlY2VudFJhbms6IHByb2R1Y3QucmVjZW50UmFuayxcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlcjogcHJvZHVjdC5tYW51ZmFjdHVyZXIsXG4gICAgICAgICAgICBtZXRhS2V5d29yZHM6IHByb2R1Y3QubWV0YUtleXdvcmRzLFxuICAgICAgICAgICAgcmVjb21tZW5kZWRBZ2U6IHByb2R1Y3QucmVjb21tZW5kZWRBZ2UsXG4gICAgICAgICAgICBtZXRhRGVzY3JpcHRpb246IHByb2R1Y3QubWV0YURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogcHJvZHVjdC5zaG9ydERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiBwcm9kdWN0LnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIHRvdGFsT3JkZXJzOiBwcm9kdWN0LnRvdGFsT3JkZXJzLFxuICAgICAgICAgICAgdG90YWxSZXR1cm5lZERhbWFnZWQ6IHByb2R1Y3QudG90YWxSZXR1cm5lZERhbWFnZWQsXG4gICAgICAgICAgICB0b3RhbFJldHVybmVkVW5kYW1hZ2VkOiBwcm9kdWN0LnRvdGFsUmV0dXJuZWRVbmRhbWFnZWQsXG4gICAgICAgICAgICB0b3RhbFNhZmV0eVN0b2NrOiBwcm9kdWN0LnRvdGFsU2FmZXR5U3RvY2ssXG4gICAgICAgICAgICB0b3RhbFNvbGQ6IHByb2R1Y3QudG90YWxTb2xkLFxuICAgICAgICAgICAgdG90YWxTdG9ja1VuaXRzOiBwcm9kdWN0LnRvdGFsU3RvY2tVbml0cyxcbiAgICAgICAgICAgIHRvdGFsU3RvY2tXaXRoQ3VzdG9tZXI6IHByb2R1Y3QudG90YWxTdG9ja1dpdGhDdXN0b21lcixcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBhc3NldHM6IHRoaXMuaW5jbHVkZUFzc2V0cyhwcm9kdWN0KSxcbiAgICAgICAgICAgIHByb2R1Y3RBc3NvY2lhdGlvbnM6IHRoaXMuaW5jbHVkZVByb2R1Y3RBc3NvY2lhdGlvbnMocHJvZHVjdCksXG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RWYXJpYW50cyhwcm9kdWN0KSxcbiAgICAgICAgICAgIHJlbGF0ZWRQcm9kdWN0czogdGhpcy5pbmNsdWRlUmVsYXRlZFByb2R1Y3RzKHByb2R1Y3QpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzZXRzKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxBc3NldD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICdhc3NldHMnLCBuZXcgQXNzZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdEFzc29jaWF0aW9ucyhwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdEFzc29jaWF0aW9uPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ3Byb2R1Y3RBc3NvY2lhdGlvbnMnLCBuZXcgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RWYXJpYW50cyhwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdFZhcmlhbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAncHJvZHVjdFZhcmlhbnRzJywgbmV3IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJlbGF0ZWRQcm9kdWN0cyhwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICdyZWxhdGVkUHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==