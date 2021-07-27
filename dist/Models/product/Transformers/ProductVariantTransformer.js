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

var _StockCheckTransformer = _interopRequireDefault(require("../../stock/Transformers/StockCheckTransformer"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwicHJvZHVjdFZhcmlhbnQiLCJQcm9kdWN0VmFyaWFudCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic2t1Iiwib3B0aW9ucyIsInByaWNlIiwidW5pdFF0eSIsIm1pblF0eSIsIm1pbkJhdGNoIiwibWF4UXR5Iiwic3RvY2siLCJpbmNvbWluZyIsImJhY2tvcmRlciIsInJlcXVpcmVzU2hpcHBpbmciLCJ3ZWlnaHRWYWx1ZSIsIndlaWdodFVuaXQiLCJoZWlnaHRWYWx1ZSIsImhlaWdodFVuaXQiLCJ3aWR0aFZhbHVlIiwid2lkdGhVbml0IiwiZGVwdGhWYWx1ZSIsImRlcHRoVW5pdCIsInZvbHVtZVZhbHVlIiwidm9sdW1lVW5pdCIsInRheElkIiwiZ3JvdXBQcmljaW5nIiwiYm94U2l6ZUlkIiwibnVtYmVyT2ZQaWVjZXMiLCJiYXR0ZXJpZXNSZXF1aXJlZCIsInN1cHBsaWVyU2t1Iiwic3VwcGxpZXJUcmFkZVByaWNlIiwic3VwcGxpZXJUb2tlbk1hcmdpbiIsIm90aGVySGF6YXJkcyIsInN1cHBsaWVyTmFtZSIsImFnZ3JlZ2F0ZVJhdGluZyIsInN0b2NrQ2hlY2tDb3VudGVyIiwicHJvZHVjdCIsImluY2x1ZGVQcm9kdWN0IiwiYmFza2V0TGluZXMiLCJpbmNsdWRlQmFza2V0TGluZXMiLCJvcmRlckxpbmVzIiwiaW5jbHVkZU9yZGVyTGluZXMiLCJzdG9ja09iamVjdHMiLCJpbmNsdWRlU3RvY2tPYmplY3RzIiwicmV2aWV3cyIsImluY2x1ZGVSZXZpZXdzIiwiYWNjb3VudGVkRm9yUmV2aWV3cyIsImluY2x1ZGVBY2NvdW50ZWRGb3JSZXZpZXdzIiwic3RvY2tDaGVja3MiLCJpbmNsdWRlU3RvY2tDaGVja3MiLCJ0b3RhbFNhZmV0eVN0b2NrIiwidG90YWxTdG9ja1dpdGhDdXN0b21lciIsInRvdGFsU3RvY2tVbml0cyIsInRvdGFsT3JkZXJzIiwidG90YWxSZXR1cm5lZERhbWFnZWQiLCJ0b3RhbFNvbGQiLCJ0b3RhbFJldmlld3MiLCJyYXRpbmdzIiwiaXRlbSIsIlByb2R1Y3RUcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJCYXNrZXRMaW5lVHJhbnNmb3JtZXIiLCJTdG9ja0NoZWNrVHJhbnNmb3JtZXIiLCJPcmRlckxpbmVUcmFuc2Zvcm1lciIsIlN0b2NrVHJhbnNmb3JtZXIiLCJSZXZpZXdUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx5Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxjLEVBQXlEO0FBQzdELGFBQU8sSUFBSUMsMEJBQUosQ0FBbUI7QUFDdEJDLFFBQUFBLEVBQUUsRUFBRUYsY0FBYyxDQUFDRSxFQURHO0FBRXRCQyxRQUFBQSxTQUFTLEVBQUVILGNBQWMsQ0FBQ0csU0FGSjtBQUd0QkMsUUFBQUEsU0FBUyxFQUFFSixjQUFjLENBQUNJLFNBSEo7QUFJdEJDLFFBQUFBLEdBQUcsRUFBRUwsY0FBYyxDQUFDSyxHQUpFO0FBS3RCQyxRQUFBQSxPQUFPLEVBQUVOLGNBQWMsQ0FBQ00sT0FMRjtBQU10QkMsUUFBQUEsS0FBSyxFQUFFUCxjQUFjLENBQUNPLEtBTkE7QUFPdEJDLFFBQUFBLE9BQU8sRUFBRVIsY0FBYyxDQUFDUSxPQVBGO0FBUXRCQyxRQUFBQSxNQUFNLEVBQUVULGNBQWMsQ0FBQ1MsTUFSRDtBQVN0QkMsUUFBQUEsUUFBUSxFQUFFVixjQUFjLENBQUNVLFFBVEg7QUFVdEJDLFFBQUFBLE1BQU0sRUFBRVgsY0FBYyxDQUFDVyxNQVZEO0FBV3RCQyxRQUFBQSxLQUFLLEVBQUVaLGNBQWMsQ0FBQ1ksS0FYQTtBQVl0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QUFZLEVBQUUxRCxjQUFjLENBQUMwRCxZQXJEUDtBQXNEdEJDLFFBQUFBLE9BQU8sRUFBRTNELGNBQWMsQ0FBQzJEO0FBdERGLE9BQW5CLENBQVA7QUF3REg7OzttQ0FFYzNELGMsRUFBeUQ7QUFDcEUsYUFBTyxLQUFLNEQsSUFBTCxDQUFVNUQsY0FBVixFQUEwQixTQUExQixFQUFxQyxJQUFJNkQsOEJBQUosRUFBckMsQ0FBUDtBQUNIOzs7dUNBRWtCN0QsYyxFQUFpRjtBQUNoRyxhQUFPLEtBQUs4RCxVQUFMLENBQWdCOUQsY0FBaEIsRUFBZ0MsYUFBaEMsRUFBK0MsSUFBSStELGlDQUFKLEVBQS9DLENBQVA7QUFDSDs7O3VDQUVrQi9ELGMsRUFBaUY7QUFDaEcsYUFBTyxLQUFLOEQsVUFBTCxDQUFnQjlELGNBQWhCLEVBQWdDLGFBQWhDLEVBQStDLElBQUlnRSxpQ0FBSixFQUEvQyxDQUFQO0FBQ0g7OztzQ0FFaUJoRSxjLEVBQWdGO0FBQzlGLGFBQU8sS0FBSzhELFVBQUwsQ0FBZ0I5RCxjQUFoQixFQUFnQyxZQUFoQyxFQUE4QyxJQUFJaUUsZ0NBQUosRUFBOUMsQ0FBUDtBQUNIOzs7d0NBRW1CakUsYyxFQUE0RTtBQUM1RixhQUFPLEtBQUs4RCxVQUFMLENBQWdCOUQsY0FBaEIsRUFBZ0MsY0FBaEMsRUFBZ0QsSUFBSWtFLDRCQUFKLEVBQWhELENBQVA7QUFDSDs7O21DQUVjbEUsYyxFQUE2RTtBQUN4RixhQUFPLEtBQUs4RCxVQUFMLENBQWdCOUQsY0FBaEIsRUFBZ0MsU0FBaEMsRUFBMkMsSUFBSW1FLDZCQUFKLEVBQTNDLENBQVA7QUFDSDs7OytDQUUwQm5FLGMsRUFBNkU7QUFDcEcsYUFBTyxLQUFLOEQsVUFBTCxDQUFnQjlELGNBQWhCLEVBQWdDLHFCQUFoQyxFQUF1RCxJQUFJbUUsNkJBQUosRUFBdkQsQ0FBUDtBQUNIOzs7O0VBM0ZrREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdFZhcmlhbnQgZnJvbSAnLi4vUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEJhc2tldExpbmUgYXMgQmFza2V0TGluZUludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmFza2V0L0Jhc2tldExpbmUnO1xuaW1wb3J0IEJhc2tldExpbmVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iYXNrZXQvVHJhbnNmb3JtZXJzL0Jhc2tldExpbmVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXJMaW5lJztcbmltcG9ydCBPcmRlckxpbmVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJMaW5lVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2snO1xuaW1wb3J0IFN0b2NrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IFJldmlld0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Jldmlldy9SZXZpZXcnO1xuaW1wb3J0IFJldmlld1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Jldmlldy9UcmFuc2Zvcm1lcnMvUmV2aWV3VHJhbnNmb3JtZXInO1xuaW1wb3J0IFN0b2NrQ2hlY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9TdG9ja0NoZWNrJztcbmltcG9ydCBTdG9ja0NoZWNrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrQ2hlY2tUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBwcm9kdWN0VmFyaWFudCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RWYXJpYW50XG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0VmFyaWFudDogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdFZhcmlhbnQoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RWYXJpYW50LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0VmFyaWFudC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHByb2R1Y3RWYXJpYW50LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHNrdTogcHJvZHVjdFZhcmlhbnQuc2t1LFxuICAgICAgICAgICAgb3B0aW9uczogcHJvZHVjdFZhcmlhbnQub3B0aW9ucyxcbiAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0VmFyaWFudC5wcmljZSxcbiAgICAgICAgICAgIHVuaXRRdHk6IHByb2R1Y3RWYXJpYW50LnVuaXRRdHksXG4gICAgICAgICAgICBtaW5RdHk6IHByb2R1Y3RWYXJpYW50Lm1pblF0eSxcbiAgICAgICAgICAgIG1pbkJhdGNoOiBwcm9kdWN0VmFyaWFudC5taW5CYXRjaCxcbiAgICAgICAgICAgIG1heFF0eTogcHJvZHVjdFZhcmlhbnQubWF4UXR5LFxuICAgICAgICAgICAgc3RvY2s6IHByb2R1Y3RWYXJpYW50LnN0b2NrLFxuICAgICAgICAgICAgaW5jb21pbmc6IHByb2R1Y3RWYXJpYW50LmluY29taW5nLFxuICAgICAgICAgICAgYmFja29yZGVyOiBwcm9kdWN0VmFyaWFudC5iYWNrb3JkZXIsXG4gICAgICAgICAgICByZXF1aXJlc1NoaXBwaW5nOiBwcm9kdWN0VmFyaWFudC5yZXF1aXJlc1NoaXBwaW5nLFxuICAgICAgICAgICAgd2VpZ2h0VmFsdWU6IHByb2R1Y3RWYXJpYW50LndlaWdodFZhbHVlLFxuICAgICAgICAgICAgd2VpZ2h0VW5pdDogcHJvZHVjdFZhcmlhbnQud2VpZ2h0VW5pdCxcbiAgICAgICAgICAgIGhlaWdodFZhbHVlOiBwcm9kdWN0VmFyaWFudC5oZWlnaHRWYWx1ZSxcbiAgICAgICAgICAgIGhlaWdodFVuaXQ6IHByb2R1Y3RWYXJpYW50LmhlaWdodFVuaXQsXG4gICAgICAgICAgICB3aWR0aFZhbHVlOiBwcm9kdWN0VmFyaWFudC53aWR0aFZhbHVlLFxuICAgICAgICAgICAgd2lkdGhVbml0OiBwcm9kdWN0VmFyaWFudC53aWR0aFVuaXQsXG4gICAgICAgICAgICBkZXB0aFZhbHVlOiBwcm9kdWN0VmFyaWFudC5kZXB0aFZhbHVlLFxuICAgICAgICAgICAgZGVwdGhVbml0OiBwcm9kdWN0VmFyaWFudC5kZXB0aFVuaXQsXG4gICAgICAgICAgICB2b2x1bWVWYWx1ZTogcHJvZHVjdFZhcmlhbnQudm9sdW1lVmFsdWUsXG4gICAgICAgICAgICB2b2x1bWVVbml0OiBwcm9kdWN0VmFyaWFudC52b2x1bWVVbml0LFxuICAgICAgICAgICAgdGF4SWQ6IHByb2R1Y3RWYXJpYW50LnRheElkLFxuICAgICAgICAgICAgZ3JvdXBQcmljaW5nOiBwcm9kdWN0VmFyaWFudC5ncm91cFByaWNpbmcsXG4gICAgICAgICAgICBib3hTaXplSWQ6IHByb2R1Y3RWYXJpYW50LmJveFNpemVJZCxcbiAgICAgICAgICAgIG51bWJlck9mUGllY2VzOiBwcm9kdWN0VmFyaWFudC5udW1iZXJPZlBpZWNlcyxcbiAgICAgICAgICAgIGJhdHRlcmllc1JlcXVpcmVkOiBwcm9kdWN0VmFyaWFudC5iYXR0ZXJpZXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHN1cHBsaWVyU2t1OiBwcm9kdWN0VmFyaWFudC5zdXBwbGllclNrdSxcbiAgICAgICAgICAgIHN1cHBsaWVyVHJhZGVQcmljZTogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJUcmFkZVByaWNlLFxuICAgICAgICAgICAgc3VwcGxpZXJUb2tlbk1hcmdpbjogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJUb2tlbk1hcmdpbixcbiAgICAgICAgICAgIG90aGVySGF6YXJkczogcHJvZHVjdFZhcmlhbnQub3RoZXJIYXphcmRzLFxuICAgICAgICAgICAgc3VwcGxpZXJOYW1lOiBwcm9kdWN0VmFyaWFudC5zdXBwbGllck5hbWUsXG4gICAgICAgICAgICBhZ2dyZWdhdGVSYXRpbmc6IHByb2R1Y3RWYXJpYW50LmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICAgICAgICAgIHN0b2NrQ2hlY2tDb3VudGVyOiBwcm9kdWN0VmFyaWFudC5zdG9ja0NoZWNrQ291bnRlcixcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHByb2R1Y3Q6IHRoaXMuaW5jbHVkZVByb2R1Y3QocHJvZHVjdFZhcmlhbnQpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGJhc2tldExpbmVzOiB0aGlzLmluY2x1ZGVCYXNrZXRMaW5lcyhwcm9kdWN0VmFyaWFudCksXG4gICAgICAgICAgICBvcmRlckxpbmVzOiB0aGlzLmluY2x1ZGVPcmRlckxpbmVzKHByb2R1Y3RWYXJpYW50KSxcbiAgICAgICAgICAgIHN0b2NrT2JqZWN0czogdGhpcy5pbmNsdWRlU3RvY2tPYmplY3RzKHByb2R1Y3RWYXJpYW50KSxcbiAgICAgICAgICAgIHJldmlld3M6IHRoaXMuaW5jbHVkZVJldmlld3MocHJvZHVjdFZhcmlhbnQpLFxuICAgICAgICAgICAgYWNjb3VudGVkRm9yUmV2aWV3czogdGhpcy5pbmNsdWRlQWNjb3VudGVkRm9yUmV2aWV3cyhwcm9kdWN0VmFyaWFudCksXG4gICAgICAgICAgICBzdG9ja0NoZWNrczogdGhpcy5pbmNsdWRlU3RvY2tDaGVja3MocHJvZHVjdFZhcmlhbnQpLFxuICAgICAgICAgICAgLy8gYWNjZXNzb3JcbiAgICAgICAgICAgIHRvdGFsU2FmZXR5U3RvY2s6IHByb2R1Y3RWYXJpYW50LnRvdGFsU2FmZXR5U3RvY2ssXG4gICAgICAgICAgICB0b3RhbFN0b2NrV2l0aEN1c3RvbWVyOiBwcm9kdWN0VmFyaWFudC50b3RhbFN0b2NrV2l0aEN1c3RvbWVyLFxuICAgICAgICAgICAgdG90YWxTdG9ja1VuaXRzOiBwcm9kdWN0VmFyaWFudC50b3RhbFN0b2NrVW5pdHMsXG4gICAgICAgICAgICB0b3RhbE9yZGVyczogcHJvZHVjdFZhcmlhbnQudG90YWxPcmRlcnMsXG4gICAgICAgICAgICB0b3RhbFJldHVybmVkRGFtYWdlZDogcHJvZHVjdFZhcmlhbnQudG90YWxSZXR1cm5lZERhbWFnZWQsXG4gICAgICAgICAgICB0b3RhbFNvbGQ6IHByb2R1Y3RWYXJpYW50LnRvdGFsU29sZCxcbiAgICAgICAgICAgIHRvdGFsUmV2aWV3czogcHJvZHVjdFZhcmlhbnQudG90YWxSZXZpZXdzLFxuICAgICAgICAgICAgcmF0aW5nczogcHJvZHVjdFZhcmlhbnQucmF0aW5ncyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3QocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogUHJvZHVjdCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3RWYXJpYW50LCAncHJvZHVjdCcsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUJhc2tldExpbmVzKHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IEFycmF5PEJhc2tldExpbmVJbnRlcmZhY2U+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0VmFyaWFudCwgJ2Jhc2tldExpbmVzJywgbmV3IEJhc2tldExpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2tDaGVja3MocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogQXJyYXk8U3RvY2tDaGVja0ludGVyZmFjZT4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RWYXJpYW50LCAnc3RvY2tDaGVja3MnLCBuZXcgU3RvY2tDaGVja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlckxpbmVzKHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IEFycmF5PE9yZGVyTGluZUludGVyZmFjZT4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RWYXJpYW50LCAnb3JkZXJMaW5lcycsIG5ldyBPcmRlckxpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2tPYmplY3RzKHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IEFycmF5PFN0b2NrSW50ZXJmYWNlPiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdFZhcmlhbnQsICdzdG9ja09iamVjdHMnLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmV2aWV3cyhwcm9kdWN0VmFyaWFudDogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UpOiBBcnJheTxSZXZpZXdJbnRlcmZhY2U+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0VmFyaWFudCwgJ3Jldmlld3MnLCBuZXcgUmV2aWV3VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFjY291bnRlZEZvclJldmlld3MocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogQXJyYXk8UmV2aWV3SW50ZXJmYWNlPiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdFZhcmlhbnQsICdhY2NvdW50ZWRGb3JSZXZpZXdzJywgbmV3IFJldmlld1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==