"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductVariant = _interopRequireDefault(require("../ProductVariant"));

var _ProductTransformer = _interopRequireDefault(require("../../product/Transformers/ProductTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _BasketLineTransformer = _interopRequireDefault(require("../../basket/Transformers/BasketLineTransformer"));

var _OrderLineTransformer = _interopRequireDefault(require("../../order/Transformers/OrderLineTransformer"));

var _StockTransformer = _interopRequireDefault(require("../../stock/Transformers/StockTransformer"));

var _ReviewTransformer = _interopRequireDefault(require("../../review/Transformers/ReviewTransformer"));

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

var ProductVariantTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductVariantTransformer, _BaseTransformer);

  function ProductVariantTransformer() {
    _classCallCheck(this, ProductVariantTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductVariantTransformer).apply(this, arguments));
  }

  _createClass(ProductVariantTransformer, [{
    key: "mapData",

    /**
     * Map an productVariant response
     *
     * @param productVariant
     */
    value: function mapData(productVariant) {
      return new _ProductVariant["default"]({
        id: productVariant.id,
        createdAt: productVariant.createdAt,
        updatedAt: productVariant.updatedAt,
        sku: productVariant.sku,
        options: productVariant.options,
        price: productVariant.price,
        unitQty: productVariant.unitQty,
        minQty: productVariant.minQty,
        minBatch: productVariant.minBatch,
        maxQty: productVariant.maxQty,
        stock: productVariant.stock,
        incoming: productVariant.incoming,
        backorder: productVariant.backorder,
        requiresShipping: productVariant.requiresShipping,
        weightValue: productVariant.weightValue,
        weightUnit: productVariant.weightUnit,
        heightValue: productVariant.heightValue,
        heightUnit: productVariant.heightUnit,
        widthValue: productVariant.widthValue,
        widthUnit: productVariant.widthUnit,
        depthValue: productVariant.depthValue,
        depthUnit: productVariant.depthUnit,
        volumeValue: productVariant.volumeValue,
        volumeUnit: productVariant.volumeUnit,
        taxId: productVariant.taxId,
        groupPricing: productVariant.groupPricing,
        boxSizeId: productVariant.boxSizeId,
        numberOfPieces: productVariant.numberOfPieces,
        batteriesRequired: productVariant.batteriesRequired,
        supplierSku: productVariant.supplierSku,
        supplierTradePrice: productVariant.supplierTradePrice,
        supplierTokenMargin: productVariant.supplierTokenMargin,
        otherHazards: productVariant.otherHazards,
        supplierName: productVariant.supplierName,
        aggregateRating: productVariant.aggregateRating,
        // belongs to
        product: this.includeProduct(productVariant),
        // has many
        basketLines: this.includeBasketLines(productVariant),
        orderLines: this.includeOrderLines(productVariant),
        stockObjects: this.includeStockObjects(productVariant),
        reviews: this.includeReviews(productVariant),
        accountedForReviews: this.includeAccountedForReviews(productVariant),
        // accessor
        totalSafetyStock: productVariant.totalSafetyStock,
        totalStockWithCustomer: productVariant.totalStockWithCustomer,
        totalStockUnits: productVariant.totalStockUnits,
        totalOrders: productVariant.totalOrders,
        totalReturnedDamaged: productVariant.totalReturnedDamaged,
        totalSold: productVariant.totalSold,
        totalReviews: productVariant.totalReviews,
        ratings: productVariant.ratings
      });
    }
  }, {
    key: "includeProduct",
    value: function includeProduct(productVariant) {
      return this.item(productVariant, 'product', new _ProductTransformer["default"]());
    }
  }, {
    key: "includeBasketLines",
    value: function includeBasketLines(productVariant) {
      return this.collection(productVariant, 'basketLines', new _BasketLineTransformer["default"]());
    }
  }, {
    key: "includeOrderLines",
    value: function includeOrderLines(productVariant) {
      return this.collection(productVariant, 'orderLines', new _OrderLineTransformer["default"]());
    }
  }, {
    key: "includeStockObjects",
    value: function includeStockObjects(productVariant) {
      return this.collection(productVariant, 'stockObjects', new _StockTransformer["default"]());
    }
  }, {
    key: "includeReviews",
    value: function includeReviews(productVariant) {
      return this.collection(productVariant, 'reviews', new _ReviewTransformer["default"]());
    }
  }, {
    key: "includeAccountedForReviews",
    value: function includeAccountedForReviews(productVariant) {
      return this.collection(productVariant, 'accountedForReviews', new _ReviewTransformer["default"]());
    }
  }]);

  return ProductVariantTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductVariantTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwicHJvZHVjdFZhcmlhbnQiLCJQcm9kdWN0VmFyaWFudCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic2t1Iiwib3B0aW9ucyIsInByaWNlIiwidW5pdFF0eSIsIm1pblF0eSIsIm1pbkJhdGNoIiwibWF4UXR5Iiwic3RvY2siLCJpbmNvbWluZyIsImJhY2tvcmRlciIsInJlcXVpcmVzU2hpcHBpbmciLCJ3ZWlnaHRWYWx1ZSIsIndlaWdodFVuaXQiLCJoZWlnaHRWYWx1ZSIsImhlaWdodFVuaXQiLCJ3aWR0aFZhbHVlIiwid2lkdGhVbml0IiwiZGVwdGhWYWx1ZSIsImRlcHRoVW5pdCIsInZvbHVtZVZhbHVlIiwidm9sdW1lVW5pdCIsInRheElkIiwiZ3JvdXBQcmljaW5nIiwiYm94U2l6ZUlkIiwibnVtYmVyT2ZQaWVjZXMiLCJiYXR0ZXJpZXNSZXF1aXJlZCIsInN1cHBsaWVyU2t1Iiwic3VwcGxpZXJUcmFkZVByaWNlIiwic3VwcGxpZXJUb2tlbk1hcmdpbiIsIm90aGVySGF6YXJkcyIsInN1cHBsaWVyTmFtZSIsImFnZ3JlZ2F0ZVJhdGluZyIsInByb2R1Y3QiLCJpbmNsdWRlUHJvZHVjdCIsImJhc2tldExpbmVzIiwiaW5jbHVkZUJhc2tldExpbmVzIiwib3JkZXJMaW5lcyIsImluY2x1ZGVPcmRlckxpbmVzIiwic3RvY2tPYmplY3RzIiwiaW5jbHVkZVN0b2NrT2JqZWN0cyIsInJldmlld3MiLCJpbmNsdWRlUmV2aWV3cyIsImFjY291bnRlZEZvclJldmlld3MiLCJpbmNsdWRlQWNjb3VudGVkRm9yUmV2aWV3cyIsInRvdGFsU2FmZXR5U3RvY2siLCJ0b3RhbFN0b2NrV2l0aEN1c3RvbWVyIiwidG90YWxTdG9ja1VuaXRzIiwidG90YWxPcmRlcnMiLCJ0b3RhbFJldHVybmVkRGFtYWdlZCIsInRvdGFsU29sZCIsInRvdGFsUmV2aWV3cyIsInJhdGluZ3MiLCJpdGVtIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIkJhc2tldExpbmVUcmFuc2Zvcm1lciIsIk9yZGVyTGluZVRyYW5zZm9ybWVyIiwiU3RvY2tUcmFuc2Zvcm1lciIsIlJldmlld1RyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHlCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLGMsRUFBeUQ7QUFDN0QsYUFBTyxJQUFJQywwQkFBSixDQUFtQjtBQUN0QkMsUUFBQUEsRUFBRSxFQUFFRixjQUFjLENBQUNFLEVBREc7QUFFdEJDLFFBQUFBLFNBQVMsRUFBRUgsY0FBYyxDQUFDRyxTQUZKO0FBR3RCQyxRQUFBQSxTQUFTLEVBQUVKLGNBQWMsQ0FBQ0ksU0FISjtBQUl0QkMsUUFBQUEsR0FBRyxFQUFFTCxjQUFjLENBQUNLLEdBSkU7QUFLdEJDLFFBQUFBLE9BQU8sRUFBRU4sY0FBYyxDQUFDTSxPQUxGO0FBTXRCQyxRQUFBQSxLQUFLLEVBQUVQLGNBQWMsQ0FBQ08sS0FOQTtBQU90QkMsUUFBQUEsT0FBTyxFQUFFUixjQUFjLENBQUNRLE9BUEY7QUFRdEJDLFFBQUFBLE1BQU0sRUFBRVQsY0FBYyxDQUFDUyxNQVJEO0FBU3RCQyxRQUFBQSxRQUFRLEVBQUVWLGNBQWMsQ0FBQ1UsUUFUSDtBQVV0QkMsUUFBQUEsTUFBTSxFQUFFWCxjQUFjLENBQUNXLE1BVkQ7QUFXdEJDLFFBQUFBLEtBQUssRUFBRVosY0FBYyxDQUFDWSxLQVhBO0FBWXRCQyxRQUFBQSxRQUFRLEVBQUViLGNBQWMsQ0FBQ2EsUUFaSDtBQWF0QkMsUUFBQUEsU0FBUyxFQUFFZCxjQUFjLENBQUNjLFNBYko7QUFjdEJDLFFB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Ozs7dUNBRWtCMUQsYyxFQUFpRjtBQUNoRyxhQUFPLEtBQUsyRCxVQUFMLENBQWdCM0QsY0FBaEIsRUFBZ0MsYUFBaEMsRUFBK0MsSUFBSTRELGlDQUFKLEVBQS9DLENBQVA7QUFDSDs7O3NDQUVpQjVELGMsRUFBZ0Y7QUFDOUYsYUFBTyxLQUFLMkQsVUFBTCxDQUFnQjNELGNBQWhCLEVBQWdDLFlBQWhDLEVBQThDLElBQUk2RCxnQ0FBSixFQUE5QyxDQUFQO0FBQ0g7Ozt3Q0FFbUI3RCxjLEVBQTRFO0FBQzVGLGFBQU8sS0FBSzJELFVBQUwsQ0FBZ0IzRCxjQUFoQixFQUFnQyxjQUFoQyxFQUFnRCxJQUFJOEQsNEJBQUosRUFBaEQsQ0FBUDtBQUNIOzs7bUNBRWM5RCxjLEVBQTZFO0FBQ3hGLGFBQU8sS0FBSzJELFVBQUwsQ0FBZ0IzRCxjQUFoQixFQUFnQyxTQUFoQyxFQUEyQyxJQUFJK0QsNkJBQUosRUFBM0MsQ0FBUDtBQUNIOzs7K0NBRTBCL0QsYyxFQUE2RTtBQUNwRyxhQUFPLEtBQUsyRCxVQUFMLENBQWdCM0QsY0FBaEIsRUFBZ0MscUJBQWhDLEVBQXVELElBQUkrRCw2QkFBSixFQUF2RCxDQUFQO0FBQ0g7Ozs7RUFyRmtEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0VmFyaWFudCBmcm9tICcuLi9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQmFza2V0TGluZSBhcyBCYXNrZXRMaW5lSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iYXNrZXQvQmFza2V0TGluZSc7XG5pbXBvcnQgQmFza2V0TGluZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0TGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBPcmRlckxpbmVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlckxpbmUnO1xuaW1wb3J0IE9yZGVyTGluZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL29yZGVyL1RyYW5zZm9ybWVycy9PcmRlckxpbmVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9TdG9jayc7XG5pbXBvcnQgU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvU3RvY2tUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUmV2aWV3SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV2aWV3L1Jldmlldyc7XG5pbXBvcnQgUmV2aWV3VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV2aWV3L1RyYW5zZm9ybWVycy9SZXZpZXdUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBwcm9kdWN0VmFyaWFudCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RWYXJpYW50XG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0VmFyaWFudDogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdFZhcmlhbnQoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RWYXJpYW50LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0VmFyaWFudC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHByb2R1Y3RWYXJpYW50LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHNrdTogcHJvZHVjdFZhcmlhbnQuc2t1LFxuICAgICAgICAgICAgb3B0aW9uczogcHJvZHVjdFZhcmlhbnQub3B0aW9ucyxcbiAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0VmFyaWFudC5wcmljZSxcbiAgICAgICAgICAgIHVuaXRRdHk6IHByb2R1Y3RWYXJpYW50LnVuaXRRdHksXG4gICAgICAgICAgICBtaW5RdHk6IHByb2R1Y3RWYXJpYW50Lm1pblF0eSxcbiAgICAgICAgICAgIG1pbkJhdGNoOiBwcm9kdWN0VmFyaWFudC5taW5CYXRjaCxcbiAgICAgICAgICAgIG1heFF0eTogcHJvZHVjdFZhcmlhbnQubWF4UXR5LFxuICAgICAgICAgICAgc3RvY2s6IHByb2R1Y3RWYXJpYW50LnN0b2NrLFxuICAgICAgICAgICAgaW5jb21pbmc6IHByb2R1Y3RWYXJpYW50LmluY29taW5nLFxuICAgICAgICAgICAgYmFja29yZGVyOiBwcm9kdWN0VmFyaWFudC5iYWNrb3JkZXIsXG4gICAgICAgICAgICByZXF1aXJlc1NoaXBwaW5nOiBwcm9kdWN0VmFyaWFudC5yZXF1aXJlc1NoaXBwaW5nLFxuICAgICAgICAgICAgd2VpZ2h0VmFsdWU6IHByb2R1Y3RWYXJpYW50LndlaWdodFZhbHVlLFxuICAgICAgICAgICAgd2VpZ2h0VW5pdDogcHJvZHVjdFZhcmlhbnQud2VpZ2h0VW5pdCxcbiAgICAgICAgICAgIGhlaWdodFZhbHVlOiBwcm9kdWN0VmFyaWFudC5oZWlnaHRWYWx1ZSxcbiAgICAgICAgICAgIGhlaWdodFVuaXQ6IHByb2R1Y3RWYXJpYW50LmhlaWdodFVuaXQsXG4gICAgICAgICAgICB3aWR0aFZhbHVlOiBwcm9kdWN0VmFyaWFudC53aWR0aFZhbHVlLFxuICAgICAgICAgICAgd2lkdGhVbml0OiBwcm9kdWN0VmFyaWFudC53aWR0aFVuaXQsXG4gICAgICAgICAgICBkZXB0aFZhbHVlOiBwcm9kdWN0VmFyaWFudC5kZXB0aFZhbHVlLFxuICAgICAgICAgICAgZGVwdGhVbml0OiBwcm9kdWN0VmFyaWFudC5kZXB0aFVuaXQsXG4gICAgICAgICAgICB2b2x1bWVWYWx1ZTogcHJvZHVjdFZhcmlhbnQudm9sdW1lVmFsdWUsXG4gICAgICAgICAgICB2b2x1bWVVbml0OiBwcm9kdWN0VmFyaWFudC52b2x1bWVVbml0LFxuICAgICAgICAgICAgdGF4SWQ6IHByb2R1Y3RWYXJpYW50LnRheElkLFxuICAgICAgICAgICAgZ3JvdXBQcmljaW5nOiBwcm9kdWN0VmFyaWFudC5ncm91cFByaWNpbmcsXG4gICAgICAgICAgICBib3hTaXplSWQ6IHByb2R1Y3RWYXJpYW50LmJveFNpemVJZCxcbiAgICAgICAgICAgIG51bWJlck9mUGllY2VzOiBwcm9kdWN0VmFyaWFudC5udW1iZXJPZlBpZWNlcyxcbiAgICAgICAgICAgIGJhdHRlcmllc1JlcXVpcmVkOiBwcm9kdWN0VmFyaWFudC5iYXR0ZXJpZXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHN1cHBsaWVyU2t1OiBwcm9kdWN0VmFyaWFudC5zdXBwbGllclNrdSxcbiAgICAgICAgICAgIHN1cHBsaWVyVHJhZGVQcmljZTogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJUcmFkZVByaWNlLFxuICAgICAgICAgICAgc3VwcGxpZXJUb2tlbk1hcmdpbjogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJUb2tlbk1hcmdpbixcbiAgICAgICAgICAgIG90aGVySGF6YXJkczogcHJvZHVjdFZhcmlhbnQub3RoZXJIYXphcmRzLFxuICAgICAgICAgICAgc3VwcGxpZXJOYW1lOiBwcm9kdWN0VmFyaWFudC5zdXBwbGllck5hbWUsXG4gICAgICAgICAgICBhZ2dyZWdhdGVSYXRpbmc6IHByb2R1Y3RWYXJpYW50LmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHByb2R1Y3Q6IHRoaXMuaW5jbHVkZVByb2R1Y3QocHJvZHVjdFZhcmlhbnQpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGJhc2tldExpbmVzOiB0aGlzLmluY2x1ZGVCYXNrZXRMaW5lcyhwcm9kdWN0VmFyaWFudCksXG4gICAgICAgICAgICBvcmRlckxpbmVzOiB0aGlzLmluY2x1ZGVPcmRlckxpbmVzKHByb2R1Y3RWYXJpYW50KSxcbiAgICAgICAgICAgIHN0b2NrT2JqZWN0czogdGhpcy5pbmNsdWRlU3RvY2tPYmplY3RzKHByb2R1Y3RWYXJpYW50KSxcbiAgICAgICAgICAgIHJldmlld3M6IHRoaXMuaW5jbHVkZVJldmlld3MocHJvZHVjdFZhcmlhbnQpLFxuICAgICAgICAgICAgYWNjb3VudGVkRm9yUmV2aWV3czogdGhpcy5pbmNsdWRlQWNjb3VudGVkRm9yUmV2aWV3cyhwcm9kdWN0VmFyaWFudCksXG4gICAgICAgICAgICAvLyBhY2Nlc3NvclxuICAgICAgICAgICAgdG90YWxTYWZldHlTdG9jazogcHJvZHVjdFZhcmlhbnQudG90YWxTYWZldHlTdG9jayxcbiAgICAgICAgICAgIHRvdGFsU3RvY2tXaXRoQ3VzdG9tZXI6IHByb2R1Y3RWYXJpYW50LnRvdGFsU3RvY2tXaXRoQ3VzdG9tZXIsXG4gICAgICAgICAgICB0b3RhbFN0b2NrVW5pdHM6IHByb2R1Y3RWYXJpYW50LnRvdGFsU3RvY2tVbml0cyxcbiAgICAgICAgICAgIHRvdGFsT3JkZXJzOiBwcm9kdWN0VmFyaWFudC50b3RhbE9yZGVycyxcbiAgICAgICAgICAgIHRvdGFsUmV0dXJuZWREYW1hZ2VkOiBwcm9kdWN0VmFyaWFudC50b3RhbFJldHVybmVkRGFtYWdlZCxcbiAgICAgICAgICAgIHRvdGFsU29sZDogcHJvZHVjdFZhcmlhbnQudG90YWxTb2xkLFxuICAgICAgICAgICAgdG90YWxSZXZpZXdzOiBwcm9kdWN0VmFyaWFudC50b3RhbFJldmlld3MsXG4gICAgICAgICAgICByYXRpbmdzOiBwcm9kdWN0VmFyaWFudC5yYXRpbmdzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdChwcm9kdWN0VmFyaWFudDogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UpOiBQcm9kdWN0IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdFZhcmlhbnQsICdwcm9kdWN0JywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQmFza2V0TGluZXMocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogQXJyYXk8QmFza2V0TGluZUludGVyZmFjZT4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RWYXJpYW50LCAnYmFza2V0TGluZXMnLCBuZXcgQmFza2V0TGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlckxpbmVzKHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IEFycmF5PE9yZGVyTGluZUludGVyZmFjZT4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RWYXJpYW50LCAnb3JkZXJMaW5lcycsIG5ldyBPcmRlckxpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2tPYmplY3RzKHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IEFycmF5PFN0b2NrSW50ZXJmYWNlPiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdFZhcmlhbnQsICdzdG9ja09iamVjdHMnLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmV2aWV3cyhwcm9kdWN0VmFyaWFudDogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UpOiBBcnJheTxSZXZpZXdJbnRlcmZhY2U+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0VmFyaWFudCwgJ3Jldmlld3MnLCBuZXcgUmV2aWV3VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFjY291bnRlZEZvclJldmlld3MocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogQXJyYXk8UmV2aWV3SW50ZXJmYWNlPiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdFZhcmlhbnQsICdhY2NvdW50ZWRGb3JSZXZpZXdzJywgbmV3IFJldmlld1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==