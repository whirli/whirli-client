"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
    value:
    /**
     * Map an product response
     *
     * @param product
     */
    function mapData(product) {
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
        totalReturnedWriteOff: product.totalReturnedWriteOff,
        totalReturnedNotWriteOff: product.totalReturnedNotWriteOff,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2Zvcm1lciIsInByb2R1Y3QiLCJQcm9kdWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIm5hbWUiLCJzbHVnIiwic3RhdHVzIiwic3RvY2siLCJicmFuZCIsInRva2VucyIsImZlYXR1cmVzIiwicGFnZVRpdGxlIiwicG9wdWxhcml0eSIsImRlc2NyaXB0aW9uIiwicmVjZW50UmFuayIsIm1hbnVmYWN0dXJlciIsIm1ldGFLZXl3b3JkcyIsInJlY29tbWVuZGVkQWdlIiwibWV0YURlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsInJlc291cmNlVHlwZSIsInRvdGFsT3JkZXJzIiwidG90YWxSZXR1cm5lZFdyaXRlT2ZmIiwidG90YWxSZXR1cm5lZE5vdFdyaXRlT2ZmIiwidG90YWxTYWZldHlTdG9jayIsInRvdGFsU29sZCIsInRvdGFsU3RvY2tXaXRoQ3VzdG9tZXIiLCJ0b3RhbFN0b2NrUXVldWVkIiwidG90YWxTdG9ja0luUmV0dXJuIiwidG90YWxTdG9ja1dpdGhDdXN0b21lck9yRGVzaWduYXRlZEZvclJldHVybiIsInRvdGFsU3RvY2tVbml0cyIsImd0aW4iLCJvcHRpbXVtQWdlSWQiLCJwcmltYXJ5U2tpbGxJZCIsImRpc2NvdW50ZWRWYWx1ZSIsIm9wdGltdW1BZ2UiLCJpbmNsdWRlT3B0aW11bUFnZSIsInByaW1hcnlTa2lsbCIsImluY2x1ZGVQcmltYXJ5U2tpbGwiLCJhc3NldHMiLCJpbmNsdWRlQXNzZXRzIiwicHJvZHVjdEFzc29jaWF0aW9ucyIsImluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zIiwicHJvZHVjdFZhcmlhbnRzIiwiaW5jbHVkZVByb2R1Y3RWYXJpYW50cyIsInJlbGF0ZWRQcm9kdWN0cyIsImluY2x1ZGVSZWxhdGVkUHJvZHVjdHMiLCJpdGVtIiwiUHJvZHVjdEFnZVJhbmdlVHJhbnNmb3JtZXIiLCJQcm9kdWN0U2tpbGxUcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJBc3NldFRyYW5zZm9ybWVyIiwiUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIiLCJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxrQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLHFCQUFRQyxPQUFSLEVBQTRDO0FBQ3hDLGFBQU8sSUFBSUMsbUJBQUosQ0FBWTtBQUNmQyxRQUFBQSxFQUFFLEVBQUVGLE9BQU8sQ0FBQ0UsRUFERztBQUVmQyxRQUFBQSxTQUFTLEVBQUVILE9BQU8sQ0FBQ0csU0FGSjtBQUdmQyxRQUFBQSxTQUFTLEVBQUVKLE9BQU8sQ0FBQ0ksU0FISjtBQUlmQyxRQUFBQSxXQUFXLEVBQUVMLE9BQU8sQ0FBQ0ssV0FKTjtBQUtmQyxRQUFBQSxJQUFJLEVBQUVOLE9BQU8sQ0FBQ00sSUFMQztBQU1mQyxRQUFBQSxJQUFJLEVBQUVQLE9BQU8sQ0FBQ08sSUFOQztBQU9mQyxRQUFBQSxNQUFNLEVBQUVSLE9BQU8sQ0FBQ1EsTUFQRDtBQVFmQyxRQUFBQSxLQUFLLEVBQUVULE9BQU8sQ0FBQ1MsS0FSQTtBQVNmQyxRQUFBQSxLQUFLLEVBQUVWLE9BQU8sQ0FBQ1UsS0FUQTtBQVVmQyxRQUFBQSxNQUFNLEVBQUVYLE9BQU8sQ0FBQ1csTUFWRDtBQVdmQyxRQUFBQSxRQUFRLEVBQUVaLE9BQU8sQ0FBQ1ksUUFYSDtBQVlmQyxRQUFBQSxTQUFTLEVBQUViLE9BQU8sQ0FBQ2EsU0FaSjtBQWFmQyxRQUFBQSxVQUFVLEVBQUVkLE9BQU8sQ0FBQ2MsVUFiTDtBQWNmQyxRQUFBQSxXQUFXLEVBQUVmLE9B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QWdCcEQsT0FBaEIsRUFBeUIsaUJBQXpCLEVBQTRDLElBQUl1RCxxQ0FBSixFQUE1QyxDQUFQO0FBQ0g7OztXQUVELGdDQUF1QnZELE9BQXZCLEVBQWtFO0FBQzlELGFBQU8sS0FBS29ELFVBQUwsQ0FBZ0JwRCxPQUFoQixFQUF5QixpQkFBekIsRUFBNEMsSUFBSUQsa0JBQUosRUFBNUMsQ0FBUDtBQUNIOzs7O0VBNUUyQ3lELDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnQgZnJvbSAnLi4vUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IEFzc2V0IGZyb20gJy4uLy4uL2Fzc2V0L0Fzc2V0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb24gZnJvbSAnLi4vLi4vYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hc3NldC9UcmFuc2Zvcm1lcnMvQXNzZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QWdlUmFuZ2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hc3NvY2lhdGlvbi9UcmFuc2Zvcm1lcnMvUHJvZHVjdEFnZVJhbmdlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBZ2VSYW5nZSBmcm9tICcuLi8uLi9hc3NvY2lhdGlvbi9Qcm9kdWN0QWdlUmFuZ2UnO1xuaW1wb3J0IFByb2R1Y3RTa2lsbCBmcm9tICcuLi8uLi9hc3NvY2lhdGlvbi9Qcm9kdWN0U2tpbGwnO1xuaW1wb3J0IFByb2R1Y3RTa2lsbFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Fzc29jaWF0aW9uL1RyYW5zZm9ybWVycy9Qcm9kdWN0U2tpbGxUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHByb2R1Y3QgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0XG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogUHJvZHVjdCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdCh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcHJvZHVjdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHByb2R1Y3QudXBkYXRlZEF0LFxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IHByb2R1Y3QucHVibGlzaGVkQXQsXG4gICAgICAgICAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0LnNsdWcsXG4gICAgICAgICAgICBzdGF0dXM6IHByb2R1Y3Quc3RhdHVzLFxuICAgICAgICAgICAgc3RvY2s6IHByb2R1Y3Quc3RvY2ssXG4gICAgICAgICAgICBicmFuZDogcHJvZHVjdC5icmFuZCxcbiAgICAgICAgICAgIHRva2VuczogcHJvZHVjdC50b2tlbnMsXG4gICAgICAgICAgICBmZWF0dXJlczogcHJvZHVjdC5mZWF0dXJlcyxcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogcHJvZHVjdC5wYWdlVGl0bGUsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiBwcm9kdWN0LnBvcHVsYXJpdHksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvZHVjdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlY2VudFJhbms6IHByb2R1Y3QucmVjZW50UmFuayxcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlcjogcHJvZHVjdC5tYW51ZmFjdHVyZXIsXG4gICAgICAgICAgICBtZXRhS2V5d29yZHM6IHByb2R1Y3QubWV0YUtleXdvcmRzLFxuICAgICAgICAgICAgcmVjb21tZW5kZWRBZ2U6IHByb2R1Y3QucmVjb21tZW5kZWRBZ2UsXG4gICAgICAgICAgICBtZXRhRGVzY3JpcHRpb246IHByb2R1Y3QubWV0YURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogcHJvZHVjdC5zaG9ydERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiBwcm9kdWN0LnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIHRvdGFsT3JkZXJzOiBwcm9kdWN0LnRvdGFsT3JkZXJzLFxuICAgICAgICAgICAgdG90YWxSZXR1cm5lZFdyaXRlT2ZmOiBwcm9kdWN0LnRvdGFsUmV0dXJuZWRXcml0ZU9mZixcbiAgICAgICAgICAgIHRvdGFsUmV0dXJuZWROb3RXcml0ZU9mZjogcHJvZHVjdC50b3RhbFJldHVybmVkTm90V3JpdGVPZmYsXG4gICAgICAgICAgICB0b3RhbFNhZmV0eVN0b2NrOiBwcm9kdWN0LnRvdGFsU2FmZXR5U3RvY2ssXG4gICAgICAgICAgICB0b3RhbFNvbGQ6IHByb2R1Y3QudG90YWxTb2xkLFxuICAgICAgICAgICAgdG90YWxTdG9ja1dpdGhDdXN0b21lcjogcHJvZHVjdC50b3RhbFN0b2NrV2l0aEN1c3RvbWVyLFxuICAgICAgICAgICAgdG90YWxTdG9ja1F1ZXVlZDogcHJvZHVjdC50b3RhbFN0b2NrUXVldWVkLFxuICAgICAgICAgICAgdG90YWxTdG9ja0luUmV0dXJuOiBwcm9kdWN0LnRvdGFsU3RvY2tJblJldHVybixcbiAgICAgICAgICAgIHRvdGFsU3RvY2tXaXRoQ3VzdG9tZXJPckRlc2lnbmF0ZWRGb3JSZXR1cm46IHByb2R1Y3QudG90YWxTdG9ja1dpdGhDdXN0b21lck9yRGVzaWduYXRlZEZvclJldHVybixcbiAgICAgICAgICAgIHRvdGFsU3RvY2tVbml0czogcHJvZHVjdC50b3RhbFN0b2NrVW5pdHMsXG4gICAgICAgICAgICBndGluOiBwcm9kdWN0Lmd0aW4sXG4gICAgICAgICAgICBvcHRpbXVtQWdlSWQ6IHByb2R1Y3Qub3B0aW11bUFnZUlkLFxuICAgICAgICAgICAgcHJpbWFyeVNraWxsSWQ6IHByb2R1Y3QucHJpbWFyeVNraWxsSWQsXG4gICAgICAgICAgICBkaXNjb3VudGVkVmFsdWU6IHByb2R1Y3QuZGlzY291bnRlZFZhbHVlLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgb3B0aW11bUFnZTogdGhpcy5pbmNsdWRlT3B0aW11bUFnZShwcm9kdWN0KSxcbiAgICAgICAgICAgIHByaW1hcnlTa2lsbDogdGhpcy5pbmNsdWRlUHJpbWFyeVNraWxsKHByb2R1Y3QpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5pbmNsdWRlQXNzZXRzKHByb2R1Y3QpLFxuICAgICAgICAgICAgcHJvZHVjdEFzc29jaWF0aW9uczogdGhpcy5pbmNsdWRlUHJvZHVjdEFzc29jaWF0aW9ucyhwcm9kdWN0KSxcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50czogdGhpcy5pbmNsdWRlUHJvZHVjdFZhcmlhbnRzKHByb2R1Y3QpLFxuICAgICAgICAgICAgcmVsYXRlZFByb2R1Y3RzOiB0aGlzLmluY2x1ZGVSZWxhdGVkUHJvZHVjdHMocHJvZHVjdCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcHRpbXVtQWdlKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBQcm9kdWN0QWdlUmFuZ2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0LCAnb3B0aW11bUFnZScsIG5ldyBQcm9kdWN0QWdlUmFuZ2VUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJpbWFyeVNraWxsKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBQcm9kdWN0U2tpbGwgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0LCAncHJpbWFyeVNraWxsJywgbmV3IFByb2R1Y3RTa2lsbFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NldHMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PEFzc2V0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ2Fzc2V0cycsIG5ldyBBc3NldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0QXNzb2NpYXRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAncHJvZHVjdEFzc29jaWF0aW9ucycsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdFZhcmlhbnRzKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0VmFyaWFudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICdwcm9kdWN0VmFyaWFudHMnLCBuZXcgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmVsYXRlZFByb2R1Y3RzKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ3JlbGF0ZWRQcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19