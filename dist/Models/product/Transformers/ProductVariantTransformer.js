"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductVariant = _interopRequireDefault(require("../ProductVariant"));

var _ProductTransformer = _interopRequireDefault(require("../../product/Transformers/ProductTransformer"));

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
        resourceType: productVariant.resourceType,
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
        totalOrders: productVariant.totalOrders,
        totalReturnedDamaged: productVariant.totalReturnedDamaged,
        totalReturnedUndamaged: productVariant.totalReturnedUndamaged,
        totalSafetyStock: productVariant.totalSafetyStock,
        totalSold: productVariant.totalSold,
        totalStockUnits: productVariant.totalStockUnits,
        totalStockWithCustomer: productVariant.totalStockWithCustomer,
        groupPricing: productVariant.groupPricing,
        boxSizeId: productVariant.boxSizeId,
        numberOfPieces: productVariant.numberOfPieces,
        batteriesRequired: productVariant.batteriesRequired,
        supplierSku: productVariant.supplierSku,
        supplierTradePrice: productVariant.supplierTradePrice,
        supplierTokenMargin: productVariant.supplierTokenMargin,
        otherHazards: productVariant.otherHazards,
        supplierName: productVariant.supplierName,
        // belongs to
        product: this.includeProduct(productVariant)
      });
    }
  }, {
    key: "includeProduct",
    value: function includeProduct(productVariant) {
      return this.item(productVariant, 'product', new _ProductTransformer["default"]());
    }
  }]);

  return ProductVariantTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductVariantTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwicHJvZHVjdFZhcmlhbnQiLCJQcm9kdWN0VmFyaWFudCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic2t1Iiwib3B0aW9ucyIsInByaWNlIiwidW5pdFF0eSIsIm1pblF0eSIsIm1pbkJhdGNoIiwibWF4UXR5Iiwic3RvY2siLCJpbmNvbWluZyIsImJhY2tvcmRlciIsInJlcXVpcmVzU2hpcHBpbmciLCJyZXNvdXJjZVR5cGUiLCJ3ZWlnaHRWYWx1ZSIsIndlaWdodFVuaXQiLCJoZWlnaHRWYWx1ZSIsImhlaWdodFVuaXQiLCJ3aWR0aFZhbHVlIiwid2lkdGhVbml0IiwiZGVwdGhWYWx1ZSIsImRlcHRoVW5pdCIsInZvbHVtZVZhbHVlIiwidm9sdW1lVW5pdCIsInRheElkIiwidG90YWxPcmRlcnMiLCJ0b3RhbFJldHVybmVkRGFtYWdlZCIsInRvdGFsUmV0dXJuZWRVbmRhbWFnZWQiLCJ0b3RhbFNhZmV0eVN0b2NrIiwidG90YWxTb2xkIiwidG90YWxTdG9ja1VuaXRzIiwidG90YWxTdG9ja1dpdGhDdXN0b21lciIsImdyb3VwUHJpY2luZyIsImJveFNpemVJZCIsIm51bWJlck9mUGllY2VzIiwiYmF0dGVyaWVzUmVxdWlyZWQiLCJzdXBwbGllclNrdSIsInN1cHBsaWVyVHJhZGVQcmljZSIsInN1cHBsaWVyVG9rZW5NYXJnaW4iLCJvdGhlckhhemFyZHMiLCJzdXBwbGllck5hbWUiLCJwcm9kdWN0IiwiaW5jbHVkZVByb2R1Y3QiLCJpdGVtIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHlCOzs7Ozs7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QUFBLFlBQVksRUFBRTFDLGNBQWMsQ0FBQzBDLFlBekNQO0FBMEN0QkMsUUFBQUEsWUFBWSxFQUFFM0MsY0FBYyxDQUFDMkMsWUExQ1A7QUEyQ3RCO0FBQ0FDLFFBQUFBLE9BQU8sRUFBRSxLQUFLQyxjQUFMLENBQW9CN0MsY0FBcEI7QUE1Q2EsT0FBbkIsQ0FBUDtBQThDSDs7O21DQUVjQSxjLEVBQXlEO0FBQ3BFLGFBQU8sS0FBSzhDLElBQUwsQ0FBVTlDLGNBQVYsRUFBMEIsU0FBMUIsRUFBcUMsSUFBSStDLDhCQUFKLEVBQXJDLENBQVA7QUFDSDs7OztFQXpEa0RDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RWYXJpYW50IGZyb20gJy4uL1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBwcm9kdWN0VmFyaWFudCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RWYXJpYW50XG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0VmFyaWFudDogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdFZhcmlhbnQoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RWYXJpYW50LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0VmFyaWFudC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHByb2R1Y3RWYXJpYW50LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHNrdTogcHJvZHVjdFZhcmlhbnQuc2t1LFxuICAgICAgICAgICAgb3B0aW9uczogcHJvZHVjdFZhcmlhbnQub3B0aW9ucyxcbiAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0VmFyaWFudC5wcmljZSxcbiAgICAgICAgICAgIHVuaXRRdHk6IHByb2R1Y3RWYXJpYW50LnVuaXRRdHksXG4gICAgICAgICAgICBtaW5RdHk6IHByb2R1Y3RWYXJpYW50Lm1pblF0eSxcbiAgICAgICAgICAgIG1pbkJhdGNoOiBwcm9kdWN0VmFyaWFudC5taW5CYXRjaCxcbiAgICAgICAgICAgIG1heFF0eTogcHJvZHVjdFZhcmlhbnQubWF4UXR5LFxuICAgICAgICAgICAgc3RvY2s6IHByb2R1Y3RWYXJpYW50LnN0b2NrLFxuICAgICAgICAgICAgaW5jb21pbmc6IHByb2R1Y3RWYXJpYW50LmluY29taW5nLFxuICAgICAgICAgICAgYmFja29yZGVyOiBwcm9kdWN0VmFyaWFudC5iYWNrb3JkZXIsXG4gICAgICAgICAgICByZXF1aXJlc1NoaXBwaW5nOiBwcm9kdWN0VmFyaWFudC5yZXF1aXJlc1NoaXBwaW5nLFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiBwcm9kdWN0VmFyaWFudC5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICB3ZWlnaHRWYWx1ZTogcHJvZHVjdFZhcmlhbnQud2VpZ2h0VmFsdWUsXG4gICAgICAgICAgICB3ZWlnaHRVbml0OiBwcm9kdWN0VmFyaWFudC53ZWlnaHRVbml0LFxuICAgICAgICAgICAgaGVpZ2h0VmFsdWU6IHByb2R1Y3RWYXJpYW50LmhlaWdodFZhbHVlLFxuICAgICAgICAgICAgaGVpZ2h0VW5pdDogcHJvZHVjdFZhcmlhbnQuaGVpZ2h0VW5pdCxcbiAgICAgICAgICAgIHdpZHRoVmFsdWU6IHByb2R1Y3RWYXJpYW50LndpZHRoVmFsdWUsXG4gICAgICAgICAgICB3aWR0aFVuaXQ6IHByb2R1Y3RWYXJpYW50LndpZHRoVW5pdCxcbiAgICAgICAgICAgIGRlcHRoVmFsdWU6IHByb2R1Y3RWYXJpYW50LmRlcHRoVmFsdWUsXG4gICAgICAgICAgICBkZXB0aFVuaXQ6IHByb2R1Y3RWYXJpYW50LmRlcHRoVW5pdCxcbiAgICAgICAgICAgIHZvbHVtZVZhbHVlOiBwcm9kdWN0VmFyaWFudC52b2x1bWVWYWx1ZSxcbiAgICAgICAgICAgIHZvbHVtZVVuaXQ6IHByb2R1Y3RWYXJpYW50LnZvbHVtZVVuaXQsXG4gICAgICAgICAgICB0YXhJZDogcHJvZHVjdFZhcmlhbnQudGF4SWQsXG4gICAgICAgICAgICB0b3RhbE9yZGVyczogcHJvZHVjdFZhcmlhbnQudG90YWxPcmRlcnMsXG4gICAgICAgICAgICB0b3RhbFJldHVybmVkRGFtYWdlZDogcHJvZHVjdFZhcmlhbnQudG90YWxSZXR1cm5lZERhbWFnZWQsXG4gICAgICAgICAgICB0b3RhbFJldHVybmVkVW5kYW1hZ2VkOiBwcm9kdWN0VmFyaWFudC50b3RhbFJldHVybmVkVW5kYW1hZ2VkLFxuICAgICAgICAgICAgdG90YWxTYWZldHlTdG9jazogcHJvZHVjdFZhcmlhbnQudG90YWxTYWZldHlTdG9jayxcbiAgICAgICAgICAgIHRvdGFsU29sZDogcHJvZHVjdFZhcmlhbnQudG90YWxTb2xkLFxuICAgICAgICAgICAgdG90YWxTdG9ja1VuaXRzOiBwcm9kdWN0VmFyaWFudC50b3RhbFN0b2NrVW5pdHMsXG4gICAgICAgICAgICB0b3RhbFN0b2NrV2l0aEN1c3RvbWVyOiBwcm9kdWN0VmFyaWFudC50b3RhbFN0b2NrV2l0aEN1c3RvbWVyLFxuICAgICAgICAgICAgZ3JvdXBQcmljaW5nOiBwcm9kdWN0VmFyaWFudC5ncm91cFByaWNpbmcsXG4gICAgICAgICAgICBib3hTaXplSWQ6IHByb2R1Y3RWYXJpYW50LmJveFNpemVJZCxcbiAgICAgICAgICAgIG51bWJlck9mUGllY2VzOiBwcm9kdWN0VmFyaWFudC5udW1iZXJPZlBpZWNlcyxcbiAgICAgICAgICAgIGJhdHRlcmllc1JlcXVpcmVkOiBwcm9kdWN0VmFyaWFudC5iYXR0ZXJpZXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHN1cHBsaWVyU2t1OiBwcm9kdWN0VmFyaWFudC5zdXBwbGllclNrdSxcbiAgICAgICAgICAgIHN1cHBsaWVyVHJhZGVQcmljZTogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJUcmFkZVByaWNlLFxuICAgICAgICAgICAgc3VwcGxpZXJUb2tlbk1hcmdpbjogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJUb2tlbk1hcmdpbixcbiAgICAgICAgICAgIG90aGVySGF6YXJkczogcHJvZHVjdFZhcmlhbnQub3RoZXJIYXphcmRzLFxuICAgICAgICAgICAgc3VwcGxpZXJOYW1lOiBwcm9kdWN0VmFyaWFudC5zdXBwbGllck5hbWUsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBwcm9kdWN0OiB0aGlzLmluY2x1ZGVQcm9kdWN0KHByb2R1Y3RWYXJpYW50KSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3QocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogUHJvZHVjdCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3RWYXJpYW50LCAncHJvZHVjdCcsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19