"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var _StockCheckTransformer = _interopRequireDefault(require("../../stock/Transformers/StockCheckTransformer"));

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

var ProductVariantTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductVariantTransformer, _BaseTransformer);

  var _super = _createSuper(ProductVariantTransformer);

  function ProductVariantTransformer() {
    _classCallCheck(this, ProductVariantTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ProductVariantTransformer, [{
    key: "mapData",
    value:
    /**
     * Map an productVariant response
     *
     * @param productVariant
     */
    function mapData(productVariant) {
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
        stockCheckCounter: productVariant.stockCheckCounter,
        // belongs to
        product: this.includeProduct(productVariant),
        // has many
        basketLines: this.includeBasketLines(productVariant),
        orderLines: this.includeOrderLines(productVariant),
        stockObjects: this.includeStockObjects(productVariant),
        reviews: this.includeReviews(productVariant),
        accountedForReviews: this.includeAccountedForReviews(productVariant),
        stockChecks: this.includeStockChecks(productVariant),
        // accessor
        totalSafetyStock: productVariant.totalSafetyStock,
        totalStockWithCustomer: productVariant.totalStockWithCustomer,
        totalStockUnits: productVariant.totalStockUnits,
        totalOrders: productVariant.totalOrders,
        totalReturnedWriteOff: productVariant.totalReturnedWriteOff,
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
    key: "includeStockChecks",
    value: function includeStockChecks(productVariant) {
      return this.collection(productVariant, 'stockChecks', new _StockCheckTransformer["default"]());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwicHJvZHVjdFZhcmlhbnQiLCJQcm9kdWN0VmFyaWFudCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic2t1Iiwib3B0aW9ucyIsInByaWNlIiwidW5pdFF0eSIsIm1pblF0eSIsIm1pbkJhdGNoIiwibWF4UXR5Iiwic3RvY2siLCJpbmNvbWluZyIsImJhY2tvcmRlciIsInJlcXVpcmVzU2hpcHBpbmciLCJ3ZWlnaHRWYWx1ZSIsIndlaWdodFVuaXQiLCJoZWlnaHRWYWx1ZSIsImhlaWdodFVuaXQiLCJ3aWR0aFZhbHVlIiwid2lkdGhVbml0IiwiZGVwdGhWYWx1ZSIsImRlcHRoVW5pdCIsInZvbHVtZVZhbHVlIiwidm9sdW1lVW5pdCIsInRheElkIiwiZ3JvdXBQcmljaW5nIiwiYm94U2l6ZUlkIiwibnVtYmVyT2ZQaWVjZXMiLCJiYXR0ZXJpZXNSZXF1aXJlZCIsInN1cHBsaWVyU2t1Iiwic3VwcGxpZXJUcmFkZVByaWNlIiwic3VwcGxpZXJUb2tlbk1hcmdpbiIsIm90aGVySGF6YXJkcyIsInN1cHBsaWVyTmFtZSIsImFnZ3JlZ2F0ZVJhdGluZyIsInN0b2NrQ2hlY2tDb3VudGVyIiwicHJvZHVjdCIsImluY2x1ZGVQcm9kdWN0IiwiYmFza2V0TGluZXMiLCJpbmNsdWRlQmFza2V0TGluZXMiLCJvcmRlckxpbmVzIiwiaW5jbHVkZU9yZGVyTGluZXMiLCJzdG9ja09iamVjdHMiLCJpbmNsdWRlU3RvY2tPYmplY3RzIiwicmV2aWV3cyIsImluY2x1ZGVSZXZpZXdzIiwiYWNjb3VudGVkRm9yUmV2aWV3cyIsImluY2x1ZGVBY2NvdW50ZWRGb3JSZXZpZXdzIiwic3RvY2tDaGVja3MiLCJpbmNsdWRlU3RvY2tDaGVja3MiLCJ0b3RhbFNhZmV0eVN0b2NrIiwidG90YWxTdG9ja1dpdGhDdXN0b21lciIsInRvdGFsU3RvY2tVbml0cyIsInRvdGFsT3JkZXJzIiwidG90YWxSZXR1cm5lZFdyaXRlT2ZmIiwidG90YWxTb2xkIiwidG90YWxSZXZpZXdzIiwicmF0aW5ncyIsIml0ZW0iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiQmFza2V0TGluZVRyYW5zZm9ybWVyIiwiU3RvY2tDaGVja1RyYW5zZm9ybWVyIiwiT3JkZXJMaW5lVHJhbnNmb3JtZXIiLCJTdG9ja1RyYW5zZm9ybWVyIiwiUmV2aWV3VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHlCOzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0kscUJBQVFDLGNBQVIsRUFBaUU7QUFDN0QsYUFBTyxJQUFJQywwQkFBSixDQUFtQjtBQUN0QkMsUUFBQUEsRUFBRSxFQUFFRixjQUFjLENBQUNFLEVBREc7QUFFdEJDLFFBQUFBLFNBQVMsRUFBRUgsY0FBYyxDQUFDRyxTQUZKO0FBR3RCQyxRQUFBQSxTQUFTLEVBQUVKLGNBQWMsQ0FBQ0ksU0FISjtBQUl0QkMsUUFBQUEsR0FBRyxFQUFFTCxjQUFjLENBQUNLLEdBSkU7QUFLdEJDLFFBQUFBLE9BQU8sRUFBRU4sY0FBYyxDQUFDTSxPQUxGO0FBTXRCQyxRQUFBQSxLQUFLLEVBQUVQLGNBQWMsQ0FBQ08sS0FOQTtBQU90QkMsUUFBQUEsT0FBTyxFQUFFUixjQUFjLENBQUNRLE9BUEY7QUFRdEJDLFFBQUFBLE1BQU0sRUFBRVQsY0FBYyxDQUFDUyxNQVJEO0FBU3RCQyxRQUFBQSxRQUFRLEVBQUVWLGNBQWMsQ0FBQ1UsUUFUSDtBQVV0QkMsUUFBQUEsTUFBTSxFQUFFWCxjQUFjLENBQUNXLE1BVkQ7QUFXdEJDLFFBQUFBLEtB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OztFQTNGa0RDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RWYXJpYW50IGZyb20gJy4uL1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBCYXNrZXRMaW5lIGFzIEJhc2tldExpbmVJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXRMaW5lJztcbmltcG9ydCBCYXNrZXRMaW5lVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRMaW5lVHJhbnNmb3JtZXInO1xuaW1wb3J0IE9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyTGluZSc7XG5pbXBvcnQgT3JkZXJMaW5lVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyTGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1N0b2NrJztcbmltcG9ydCBTdG9ja1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N0b2NrL1RyYW5zZm9ybWVycy9TdG9ja1RyYW5zZm9ybWVyJztcbmltcG9ydCBSZXZpZXdJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXZpZXcvUmV2aWV3JztcbmltcG9ydCBSZXZpZXdUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yZXZpZXcvVHJhbnNmb3JtZXJzL1Jldmlld1RyYW5zZm9ybWVyJztcbmltcG9ydCBTdG9ja0NoZWNrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2tDaGVjayc7XG5pbXBvcnQgU3RvY2tDaGVja1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N0b2NrL1RyYW5zZm9ybWVycy9TdG9ja0NoZWNrVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcHJvZHVjdFZhcmlhbnQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0VmFyaWFudFxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogUHJvZHVjdFZhcmlhbnQge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RWYXJpYW50KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0VmFyaWFudC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcHJvZHVjdFZhcmlhbnQuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBwcm9kdWN0VmFyaWFudC51cGRhdGVkQXQsXG4gICAgICAgICAgICBza3U6IHByb2R1Y3RWYXJpYW50LnNrdSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHByb2R1Y3RWYXJpYW50Lm9wdGlvbnMsXG4gICAgICAgICAgICBwcmljZTogcHJvZHVjdFZhcmlhbnQucHJpY2UsXG4gICAgICAgICAgICB1bml0UXR5OiBwcm9kdWN0VmFyaWFudC51bml0UXR5LFxuICAgICAgICAgICAgbWluUXR5OiBwcm9kdWN0VmFyaWFudC5taW5RdHksXG4gICAgICAgICAgICBtaW5CYXRjaDogcHJvZHVjdFZhcmlhbnQubWluQmF0Y2gsXG4gICAgICAgICAgICBtYXhRdHk6IHByb2R1Y3RWYXJpYW50Lm1heFF0eSxcbiAgICAgICAgICAgIHN0b2NrOiBwcm9kdWN0VmFyaWFudC5zdG9jayxcbiAgICAgICAgICAgIGluY29taW5nOiBwcm9kdWN0VmFyaWFudC5pbmNvbWluZyxcbiAgICAgICAgICAgIGJhY2tvcmRlcjogcHJvZHVjdFZhcmlhbnQuYmFja29yZGVyLFxuICAgICAgICAgICAgcmVxdWlyZXNTaGlwcGluZzogcHJvZHVjdFZhcmlhbnQucmVxdWlyZXNTaGlwcGluZyxcbiAgICAgICAgICAgIHdlaWdodFZhbHVlOiBwcm9kdWN0VmFyaWFudC53ZWlnaHRWYWx1ZSxcbiAgICAgICAgICAgIHdlaWdodFVuaXQ6IHByb2R1Y3RWYXJpYW50LndlaWdodFVuaXQsXG4gICAgICAgICAgICBoZWlnaHRWYWx1ZTogcHJvZHVjdFZhcmlhbnQuaGVpZ2h0VmFsdWUsXG4gICAgICAgICAgICBoZWlnaHRVbml0OiBwcm9kdWN0VmFyaWFudC5oZWlnaHRVbml0LFxuICAgICAgICAgICAgd2lkdGhWYWx1ZTogcHJvZHVjdFZhcmlhbnQud2lkdGhWYWx1ZSxcbiAgICAgICAgICAgIHdpZHRoVW5pdDogcHJvZHVjdFZhcmlhbnQud2lkdGhVbml0LFxuICAgICAgICAgICAgZGVwdGhWYWx1ZTogcHJvZHVjdFZhcmlhbnQuZGVwdGhWYWx1ZSxcbiAgICAgICAgICAgIGRlcHRoVW5pdDogcHJvZHVjdFZhcmlhbnQuZGVwdGhVbml0LFxuICAgICAgICAgICAgdm9sdW1lVmFsdWU6IHByb2R1Y3RWYXJpYW50LnZvbHVtZVZhbHVlLFxuICAgICAgICAgICAgdm9sdW1lVW5pdDogcHJvZHVjdFZhcmlhbnQudm9sdW1lVW5pdCxcbiAgICAgICAgICAgIHRheElkOiBwcm9kdWN0VmFyaWFudC50YXhJZCxcbiAgICAgICAgICAgIGdyb3VwUHJpY2luZzogcHJvZHVjdFZhcmlhbnQuZ3JvdXBQcmljaW5nLFxuICAgICAgICAgICAgYm94U2l6ZUlkOiBwcm9kdWN0VmFyaWFudC5ib3hTaXplSWQsXG4gICAgICAgICAgICBudW1iZXJPZlBpZWNlczogcHJvZHVjdFZhcmlhbnQubnVtYmVyT2ZQaWVjZXMsXG4gICAgICAgICAgICBiYXR0ZXJpZXNSZXF1aXJlZDogcHJvZHVjdFZhcmlhbnQuYmF0dGVyaWVzUmVxdWlyZWQsXG4gICAgICAgICAgICBzdXBwbGllclNrdTogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJTa3UsXG4gICAgICAgICAgICBzdXBwbGllclRyYWRlUHJpY2U6IHByb2R1Y3RWYXJpYW50LnN1cHBsaWVyVHJhZGVQcmljZSxcbiAgICAgICAgICAgIHN1cHBsaWVyVG9rZW5NYXJnaW46IHByb2R1Y3RWYXJpYW50LnN1cHBsaWVyVG9rZW5NYXJnaW4sXG4gICAgICAgICAgICBvdGhlckhhemFyZHM6IHByb2R1Y3RWYXJpYW50Lm90aGVySGF6YXJkcyxcbiAgICAgICAgICAgIHN1cHBsaWVyTmFtZTogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJOYW1lLFxuICAgICAgICAgICAgYWdncmVnYXRlUmF0aW5nOiBwcm9kdWN0VmFyaWFudC5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgICAgICAgICBzdG9ja0NoZWNrQ291bnRlcjogcHJvZHVjdFZhcmlhbnQuc3RvY2tDaGVja0NvdW50ZXIsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBwcm9kdWN0OiB0aGlzLmluY2x1ZGVQcm9kdWN0KHByb2R1Y3RWYXJpYW50KSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBiYXNrZXRMaW5lczogdGhpcy5pbmNsdWRlQmFza2V0TGluZXMocHJvZHVjdFZhcmlhbnQpLFxuICAgICAgICAgICAgb3JkZXJMaW5lczogdGhpcy5pbmNsdWRlT3JkZXJMaW5lcyhwcm9kdWN0VmFyaWFudCksXG4gICAgICAgICAgICBzdG9ja09iamVjdHM6IHRoaXMuaW5jbHVkZVN0b2NrT2JqZWN0cyhwcm9kdWN0VmFyaWFudCksXG4gICAgICAgICAgICByZXZpZXdzOiB0aGlzLmluY2x1ZGVSZXZpZXdzKHByb2R1Y3RWYXJpYW50KSxcbiAgICAgICAgICAgIGFjY291bnRlZEZvclJldmlld3M6IHRoaXMuaW5jbHVkZUFjY291bnRlZEZvclJldmlld3MocHJvZHVjdFZhcmlhbnQpLFxuICAgICAgICAgICAgc3RvY2tDaGVja3M6IHRoaXMuaW5jbHVkZVN0b2NrQ2hlY2tzKHByb2R1Y3RWYXJpYW50KSxcbiAgICAgICAgICAgIC8vIGFjY2Vzc29yXG4gICAgICAgICAgICB0b3RhbFNhZmV0eVN0b2NrOiBwcm9kdWN0VmFyaWFudC50b3RhbFNhZmV0eVN0b2NrLFxuICAgICAgICAgICAgdG90YWxTdG9ja1dpdGhDdXN0b21lcjogcHJvZHVjdFZhcmlhbnQudG90YWxTdG9ja1dpdGhDdXN0b21lcixcbiAgICAgICAgICAgIHRvdGFsU3RvY2tVbml0czogcHJvZHVjdFZhcmlhbnQudG90YWxTdG9ja1VuaXRzLFxuICAgICAgICAgICAgdG90YWxPcmRlcnM6IHByb2R1Y3RWYXJpYW50LnRvdGFsT3JkZXJzLFxuICAgICAgICAgICAgdG90YWxSZXR1cm5lZFdyaXRlT2ZmOiBwcm9kdWN0VmFyaWFudC50b3RhbFJldHVybmVkV3JpdGVPZmYsXG4gICAgICAgICAgICB0b3RhbFNvbGQ6IHByb2R1Y3RWYXJpYW50LnRvdGFsU29sZCxcbiAgICAgICAgICAgIHRvdGFsUmV2aWV3czogcHJvZHVjdFZhcmlhbnQudG90YWxSZXZpZXdzLFxuICAgICAgICAgICAgcmF0aW5nczogcHJvZHVjdFZhcmlhbnQucmF0aW5ncyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3QocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogUHJvZHVjdCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3RWYXJpYW50LCAncHJvZHVjdCcsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUJhc2tldExpbmVzKHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IEFycmF5PEJhc2tldExpbmVJbnRlcmZhY2U+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0VmFyaWFudCwgJ2Jhc2tldExpbmVzJywgbmV3IEJhc2tldExpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2tDaGVja3MocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogQXJyYXk8U3RvY2tDaGVja0ludGVyZmFjZT4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RWYXJpYW50LCAnc3RvY2tDaGVja3MnLCBuZXcgU3RvY2tDaGVja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlckxpbmVzKHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IEFycmF5PE9yZGVyTGluZUludGVyZmFjZT4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RWYXJpYW50LCAnb3JkZXJMaW5lcycsIG5ldyBPcmRlckxpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2tPYmplY3RzKHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IEFycmF5PFN0b2NrSW50ZXJmYWNlPiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdFZhcmlhbnQsICdzdG9ja09iamVjdHMnLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmV2aWV3cyhwcm9kdWN0VmFyaWFudDogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UpOiBBcnJheTxSZXZpZXdJbnRlcmZhY2U+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0VmFyaWFudCwgJ3Jldmlld3MnLCBuZXcgUmV2aWV3VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFjY291bnRlZEZvclJldmlld3MocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogQXJyYXk8UmV2aWV3SW50ZXJmYWNlPiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdFZhcmlhbnQsICdhY2NvdW50ZWRGb3JSZXZpZXdzJywgbmV3IFJldmlld1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==