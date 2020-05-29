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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwicHJvZHVjdFZhcmlhbnQiLCJQcm9kdWN0VmFyaWFudCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic2t1Iiwib3B0aW9ucyIsInByaWNlIiwidW5pdFF0eSIsIm1pblF0eSIsIm1pbkJhdGNoIiwibWF4UXR5Iiwic3RvY2siLCJpbmNvbWluZyIsImJhY2tvcmRlciIsInJlcXVpcmVzU2hpcHBpbmciLCJ3ZWlnaHRWYWx1ZSIsIndlaWdodFVuaXQiLCJoZWlnaHRWYWx1ZSIsImhlaWdodFVuaXQiLCJ3aWR0aFZhbHVlIiwid2lkdGhVbml0IiwiZGVwdGhWYWx1ZSIsImRlcHRoVW5pdCIsInZvbHVtZVZhbHVlIiwidm9sdW1lVW5pdCIsInRheElkIiwiZ3JvdXBQcmljaW5nIiwiYm94U2l6ZUlkIiwibnVtYmVyT2ZQaWVjZXMiLCJiYXR0ZXJpZXNSZXF1aXJlZCIsInN1cHBsaWVyU2t1Iiwic3VwcGxpZXJUcmFkZVByaWNlIiwic3VwcGxpZXJUb2tlbk1hcmdpbiIsIm90aGVySGF6YXJkcyIsInByb2R1Y3QiLCJpbmNsdWRlUHJvZHVjdCIsIml0ZW0iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEseUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsYyxFQUF5RDtBQUM3RCxhQUFPLElBQUlDLDBCQUFKLENBQW1CO0FBQ3RCQyxRQUFBQSxFQUFFLEVBQUVGLGNBQWMsQ0FBQ0UsRUFERztBQUV0QkMsUUFBQUEsU0FBUyxFQUFFSCxjQUFjLENBQUNHLFNBRko7QUFHdEJDLFFBQUFBLFNBQVMsRUFBRUosY0FBYyxDQUFDSSxTQUhKO0FBSXRCQyxRQUFBQSxHQUFHLEVBQUVMLGNBQWMsQ0FBQ0ssR0FKRTtBQUt0QkMsUUFBQUEsT0FBTyxFQUFFTixjQUFjLENBQUNNLE9BTEY7QUFNdEJDLFFBQUFBLEtBQUssRUFBRVAsY0FBYyxDQUFDTyxLQU5BO0FBT3RCQyxRQUFBQSxPQUFPLEVBQUVSLGNBQWMsQ0FBQ1EsT0FQRjtBQVF0QkMsUUFBQUEsTUFBTSxFQUFFVCxjQUFjLENBQUNTLE1BUkQ7QUFTdEJDLFFBQUFBLFFBQVEsRUFBRVYsY0FBYyxDQUFDVSxRQVRIO0FBVXRCQyxRQUFBQSxNQUFNLEVBQUVYLGNBQWMsQ0FBQ1csTUFWRDtBQVd0QkMsUUFBQUEsS0FBSyxFQUFFWixjQUFjLENBQUNZLEtBWEE7QUFZdEJDLFFBQUFBLFFBQVEsRUFBRWIsY0FBYyxDQUFDYSxRQVpIO0FBYXRCQyxRQUFBQSxTQUFTLEVBQUVkLGNBQWMsQ0FBQ2MsU0FiSjtBQWN0QkMsUUFBQUEsZ0JBQWdCLEVBQUVmLGNBQWMsQ0FBQ2UsZ0JBZFg7QUFldEJDLFFBQUFBLFdBQVcsRUFBRWhCLGNBQWMsQ0FBQ2dCLFdBZk47QUFnQnRCQyxRQUFBQSxVQUFVLEVBQUVqQixjQUFjLENBQUNpQixVQWhCTDtBQWlCdEJDLFFBQUFBLFdBQVcsRUFBRWxCLGNBQWMsQ0FBQ2tCLFdBakJOO0FBa0J0QkMsUUFBQUEsVUFBVSxFQUFFbkIsY0FBYyxDQUFDbUIsVUFsQkw7QUFtQnRCQyxRQUFBQSxVQUFVLEVBQUVwQixjQUFjLENBQUNvQixVQW5CTDtBQW9CdEJDLFFBQUFBLFNBQVMsRUFBRXJCLGNBQWMsQ0FBQ3FCLFNBcEJKO0FBcUJ0QkMsUUFBQUEsVUFBVSxFQUFFdEIsY0FBYyxDQUFDc0IsVUFyQkw7QUFzQnRCQyxRQUFBQSxTQUFTLEVBQUV2QixjQUFjLENBQUN1QixTQXRCSjtBQXVCdEJDLFFBQUFBLFdBQVcsRUFBRXhCLGNBQWMsQ0FBQ3dCLFdBdkJOO0FBd0J0QkMsUUFBQUEsVUFBVSxFQUFFekIsY0FBYyxDQUFDeUIsVUF4Qkw7QUF5QnRCQyxRQUFBQSxLQUFLLEVBQUUxQixjQUFjLENBQUMwQixLQXpCQTtBQTBCdEJDLFFBQUFBLFlBQVksRUFBRTNCLGNBQWMsQ0FBQzJCLFlBMUJQO0FBMkJ0QkMsUUFBQUEsU0FBUyxFQUFFNUIsY0FBYyxDQUFDNEIsU0EzQko7QUE0QnRCQyxRQUFBQSxjQUFjLEVBQUU3QixjQUFjLENBQUM2QixjQTVCVDtBQTZCdEJDLFFBQUFBLGlCQUFpQixFQUFFOUIsY0FBYyxDQUFDOEIsaUJBN0JaO0FBOEJ0QkMsUUFBQUEsV0FBVyxFQUFFL0IsY0FBYyxDQUFDK0IsV0E5Qk47QUErQnRCQyxRQUFBQSxrQkFBa0IsRUFBRWhDLGNBQWMsQ0FBQ2dDLGtCQS9CYjtBQWdDdEJDLFFBQUFBLG1CQUFtQixFQUFFakMsY0FBYyxDQUFDaUMsbUJBaENkO0FBaUN0QkMsUUFBQUEsWUFBWSxFQUFFbEMsY0FBYyxDQUFDa0MsWUFqQ1A7QUFrQ3RCO0FBQ0FDLFFBQUFBLE9BQU8sRUFBRSxLQUFLQyxjQUFMLENBQW9CcEMsY0FBcEI7QUFuQ2EsT0FBbkIsQ0FBUDtBQXFDSDs7O21DQUVjQSxjLEVBQXlEO0FBQ3BFLGFBQU8sS0FBS3FDLElBQUwsQ0FBVXJDLGNBQVYsRUFBMEIsU0FBMUIsRUFBcUMsSUFBSXNDLDhCQUFKLEVBQXJDLENBQVA7QUFDSDs7OztFQWhEa0RDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RWYXJpYW50IGZyb20gJy4uL1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBwcm9kdWN0VmFyaWFudCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RWYXJpYW50XG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0VmFyaWFudDogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdFZhcmlhbnQoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RWYXJpYW50LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0VmFyaWFudC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHByb2R1Y3RWYXJpYW50LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHNrdTogcHJvZHVjdFZhcmlhbnQuc2t1LFxuICAgICAgICAgICAgb3B0aW9uczogcHJvZHVjdFZhcmlhbnQub3B0aW9ucyxcbiAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0VmFyaWFudC5wcmljZSxcbiAgICAgICAgICAgIHVuaXRRdHk6IHByb2R1Y3RWYXJpYW50LnVuaXRRdHksXG4gICAgICAgICAgICBtaW5RdHk6IHByb2R1Y3RWYXJpYW50Lm1pblF0eSxcbiAgICAgICAgICAgIG1pbkJhdGNoOiBwcm9kdWN0VmFyaWFudC5taW5CYXRjaCxcbiAgICAgICAgICAgIG1heFF0eTogcHJvZHVjdFZhcmlhbnQubWF4UXR5LFxuICAgICAgICAgICAgc3RvY2s6IHByb2R1Y3RWYXJpYW50LnN0b2NrLFxuICAgICAgICAgICAgaW5jb21pbmc6IHByb2R1Y3RWYXJpYW50LmluY29taW5nLFxuICAgICAgICAgICAgYmFja29yZGVyOiBwcm9kdWN0VmFyaWFudC5iYWNrb3JkZXIsXG4gICAgICAgICAgICByZXF1aXJlc1NoaXBwaW5nOiBwcm9kdWN0VmFyaWFudC5yZXF1aXJlc1NoaXBwaW5nLFxuICAgICAgICAgICAgd2VpZ2h0VmFsdWU6IHByb2R1Y3RWYXJpYW50LndlaWdodFZhbHVlLFxuICAgICAgICAgICAgd2VpZ2h0VW5pdDogcHJvZHVjdFZhcmlhbnQud2VpZ2h0VW5pdCxcbiAgICAgICAgICAgIGhlaWdodFZhbHVlOiBwcm9kdWN0VmFyaWFudC5oZWlnaHRWYWx1ZSxcbiAgICAgICAgICAgIGhlaWdodFVuaXQ6IHByb2R1Y3RWYXJpYW50LmhlaWdodFVuaXQsXG4gICAgICAgICAgICB3aWR0aFZhbHVlOiBwcm9kdWN0VmFyaWFudC53aWR0aFZhbHVlLFxuICAgICAgICAgICAgd2lkdGhVbml0OiBwcm9kdWN0VmFyaWFudC53aWR0aFVuaXQsXG4gICAgICAgICAgICBkZXB0aFZhbHVlOiBwcm9kdWN0VmFyaWFudC5kZXB0aFZhbHVlLFxuICAgICAgICAgICAgZGVwdGhVbml0OiBwcm9kdWN0VmFyaWFudC5kZXB0aFVuaXQsXG4gICAgICAgICAgICB2b2x1bWVWYWx1ZTogcHJvZHVjdFZhcmlhbnQudm9sdW1lVmFsdWUsXG4gICAgICAgICAgICB2b2x1bWVVbml0OiBwcm9kdWN0VmFyaWFudC52b2x1bWVVbml0LFxuICAgICAgICAgICAgdGF4SWQ6IHByb2R1Y3RWYXJpYW50LnRheElkLFxuICAgICAgICAgICAgZ3JvdXBQcmljaW5nOiBwcm9kdWN0VmFyaWFudC5ncm91cFByaWNpbmcsXG4gICAgICAgICAgICBib3hTaXplSWQ6IHByb2R1Y3RWYXJpYW50LmJveFNpemVJZCxcbiAgICAgICAgICAgIG51bWJlck9mUGllY2VzOiBwcm9kdWN0VmFyaWFudC5udW1iZXJPZlBpZWNlcyxcbiAgICAgICAgICAgIGJhdHRlcmllc1JlcXVpcmVkOiBwcm9kdWN0VmFyaWFudC5iYXR0ZXJpZXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHN1cHBsaWVyU2t1OiBwcm9kdWN0VmFyaWFudC5zdXBwbGllclNrdSxcbiAgICAgICAgICAgIHN1cHBsaWVyVHJhZGVQcmljZTogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJUcmFkZVByaWNlLFxuICAgICAgICAgICAgc3VwcGxpZXJUb2tlbk1hcmdpbjogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJUb2tlbk1hcmdpbixcbiAgICAgICAgICAgIG90aGVySGF6YXJkczogcHJvZHVjdFZhcmlhbnQub3RoZXJIYXphcmRzLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgcHJvZHVjdDogdGhpcy5pbmNsdWRlUHJvZHVjdChwcm9kdWN0VmFyaWFudCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0KHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IFByb2R1Y3QgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0VmFyaWFudCwgJ3Byb2R1Y3QnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==