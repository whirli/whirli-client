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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwicHJvZHVjdFZhcmlhbnQiLCJQcm9kdWN0VmFyaWFudCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic2t1Iiwib3B0aW9ucyIsInByaWNlIiwidW5pdFF0eSIsIm1pblF0eSIsIm1pbkJhdGNoIiwibWF4UXR5Iiwic3RvY2siLCJpbmNvbWluZyIsImJhY2tvcmRlciIsInJlcXVpcmVzU2hpcHBpbmciLCJ3ZWlnaHRWYWx1ZSIsIndlaWdodFVuaXQiLCJoZWlnaHRWYWx1ZSIsImhlaWdodFVuaXQiLCJ3aWR0aFZhbHVlIiwid2lkdGhVbml0IiwiZGVwdGhWYWx1ZSIsImRlcHRoVW5pdCIsInZvbHVtZVZhbHVlIiwidm9sdW1lVW5pdCIsInRheElkIiwiZ3JvdXBQcmljaW5nIiwiYm94U2l6ZUlkIiwibnVtYmVyT2ZQaWVjZXMiLCJiYXR0ZXJpZXNSZXF1aXJlZCIsInN1cHBsaWVyU2t1Iiwic3VwcGxpZXJUcmFkZVByaWNlIiwic3VwcGxpZXJUb2tlbk1hcmdpbiIsInByb2R1Y3QiLCJpbmNsdWRlUHJvZHVjdCIsIml0ZW0iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEseUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsYyxFQUF5RDtBQUM3RCxhQUFPLElBQUlDLDBCQUFKLENBQW1CO0FBQ3RCQyxRQUFBQSxFQUFFLEVBQUVGLGNBQWMsQ0FBQ0UsRUFERztBQUV0QkMsUUFBQUEsU0FBUyxFQUFFSCxjQUFjLENBQUNHLFNBRko7QUFHdEJDLFFBQUFBLFNBQVMsRUFBRUosY0FBYyxDQUFDSSxTQUhKO0FBSXRCQyxRQUFBQSxHQUFHLEVBQUVMLGNBQWMsQ0FBQ0ssR0FKRTtBQUt0QkMsUUFBQUEsT0FBTyxFQUFFTixjQUFjLENBQUNNLE9BTEY7QUFNdEJDLFFBQUFBLEtBQUssRUFBRVAsY0FBYyxDQUFDTyxLQU5BO0FBT3RCQyxRQUFBQSxPQUFPLEVBQUVSLGNBQWMsQ0FBQ1EsT0FQRjtBQVF0QkMsUUFBQUEsTUFBTSxFQUFFVCxjQUFjLENBQUNTLE1BUkQ7QUFTdEJDLFFBQUFBLFFBQVEsRUFBRVYsY0FBYyxDQUFDVSxRQVRIO0FBVXRCQyxRQUFBQSxNQUFNLEVBQUVYLGNBQWMsQ0FBQ1csTUFWRDtBQVd0QkMsUUFBQUEsS0FBSyxFQUFFWixjQUFjLENBQUNZLEtBWEE7QUFZdEJDLFFBQUFBLFFBQVEsRUFBRWIsY0FBYyxDQUFDYSxRQVpIO0FBYXRCQyxRQUFBQSxTQUFTLEVBQUVkLGNBQWMsQ0FBQ2MsU0FiSjtBQWN0QkMsUUFBQUEsZ0JBQWdCLEVBQUVmLGNBQWMsQ0FBQ2UsZ0JBZFg7QUFldEJDLFFBQUFBLFdBQVcsRUFBRWhCLGNBQWMsQ0FBQ2dCLFdBZk47QUFnQnRCQyxRQUFBQSxVQUFVLEVBQUVqQixjQUFjLENBQUNpQixVQWhCTDtBQWlCdEJDLFFBQUFBLFdBQVcsRUFBRWxCLGNBQWMsQ0FBQ2tCLFdBakJOO0FBa0J0QkMsUUFBQUEsVUFBVSxFQUFFbkIsY0FBYyxDQUFDbUIsVUFsQkw7QUFtQnRCQyxRQUFBQSxVQUFVLEVBQUVwQixjQUFjLENBQUNvQixVQW5CTDtBQW9CdEJDLFFBQUFBLFNBQVMsRUFBRXJCLGNBQWMsQ0FBQ3FCLFNBcEJKO0FBcUJ0QkMsUUFBQUEsVUFBVSxFQUFFdEIsY0FBYyxDQUFDc0IsVUFyQkw7QUFzQnRCQyxRQUFBQSxTQUFTLEVBQUV2QixjQUFjLENBQUN1QixTQXRCSjtBQXVCdEJDLFFBQUFBLFdBQVcsRUFBRXhCLGNBQWMsQ0FBQ3dCLFdBdkJOO0FBd0J0QkMsUUFBQUEsVUFBVSxFQUFFekIsY0FBYyxDQUFDeUIsVUF4Qkw7QUF5QnRCQyxRQUFBQSxLQUFLLEVBQUUxQixjQUFjLENBQUMwQixLQXpCQTtBQTBCdEJDLFFBQUFBLFlBQVksRUFBRTNCLGNBQWMsQ0FBQzJCLFlBMUJQO0FBMkJ0QkMsUUFBQUEsU0FBUyxFQUFFNUIsY0FBYyxDQUFDNEIsU0EzQko7QUE0QnRCQyxRQUFBQSxjQUFjLEVBQUU3QixjQUFjLENBQUM2QixjQTVCVDtBQTZCdEJDLFFBQUFBLGlCQUFpQixFQUFFOUIsY0FBYyxDQUFDOEIsaUJBN0JaO0FBOEJ0QkMsUUFBQUEsV0FBVyxFQUFFL0IsY0FBYyxDQUFDK0IsV0E5Qk47QUErQnRCQyxRQUFBQSxrQkFBa0IsRUFBRWhDLGNBQWMsQ0FBQ2dDLGtCQS9CYjtBQWdDdEJDLFFBQUFBLG1CQUFtQixFQUFFakMsY0FBYyxDQUFDaUMsbUJBaENkO0FBaUN0QjtBQUNBQyxRQUFBQSxPQUFPLEVBQUUsS0FBS0MsY0FBTCxDQUFvQm5DLGNBQXBCO0FBbENhLE9BQW5CLENBQVA7QUFvQ0g7OzttQ0FFY0EsYyxFQUF5RDtBQUNwRSxhQUFPLEtBQUtvQyxJQUFMLENBQVVwQyxjQUFWLEVBQTBCLFNBQTFCLEVBQXFDLElBQUlxQyw4QkFBSixFQUFyQyxDQUFQO0FBQ0g7Ozs7RUEvQ2tEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0VmFyaWFudCBmcm9tICcuLi9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcHJvZHVjdFZhcmlhbnQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0VmFyaWFudFxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogUHJvZHVjdFZhcmlhbnQge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RWYXJpYW50KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0VmFyaWFudC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcHJvZHVjdFZhcmlhbnQuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBwcm9kdWN0VmFyaWFudC51cGRhdGVkQXQsXG4gICAgICAgICAgICBza3U6IHByb2R1Y3RWYXJpYW50LnNrdSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHByb2R1Y3RWYXJpYW50Lm9wdGlvbnMsXG4gICAgICAgICAgICBwcmljZTogcHJvZHVjdFZhcmlhbnQucHJpY2UsXG4gICAgICAgICAgICB1bml0UXR5OiBwcm9kdWN0VmFyaWFudC51bml0UXR5LFxuICAgICAgICAgICAgbWluUXR5OiBwcm9kdWN0VmFyaWFudC5taW5RdHksXG4gICAgICAgICAgICBtaW5CYXRjaDogcHJvZHVjdFZhcmlhbnQubWluQmF0Y2gsXG4gICAgICAgICAgICBtYXhRdHk6IHByb2R1Y3RWYXJpYW50Lm1heFF0eSxcbiAgICAgICAgICAgIHN0b2NrOiBwcm9kdWN0VmFyaWFudC5zdG9jayxcbiAgICAgICAgICAgIGluY29taW5nOiBwcm9kdWN0VmFyaWFudC5pbmNvbWluZyxcbiAgICAgICAgICAgIGJhY2tvcmRlcjogcHJvZHVjdFZhcmlhbnQuYmFja29yZGVyLFxuICAgICAgICAgICAgcmVxdWlyZXNTaGlwcGluZzogcHJvZHVjdFZhcmlhbnQucmVxdWlyZXNTaGlwcGluZyxcbiAgICAgICAgICAgIHdlaWdodFZhbHVlOiBwcm9kdWN0VmFyaWFudC53ZWlnaHRWYWx1ZSxcbiAgICAgICAgICAgIHdlaWdodFVuaXQ6IHByb2R1Y3RWYXJpYW50LndlaWdodFVuaXQsXG4gICAgICAgICAgICBoZWlnaHRWYWx1ZTogcHJvZHVjdFZhcmlhbnQuaGVpZ2h0VmFsdWUsXG4gICAgICAgICAgICBoZWlnaHRVbml0OiBwcm9kdWN0VmFyaWFudC5oZWlnaHRVbml0LFxuICAgICAgICAgICAgd2lkdGhWYWx1ZTogcHJvZHVjdFZhcmlhbnQud2lkdGhWYWx1ZSxcbiAgICAgICAgICAgIHdpZHRoVW5pdDogcHJvZHVjdFZhcmlhbnQud2lkdGhVbml0LFxuICAgICAgICAgICAgZGVwdGhWYWx1ZTogcHJvZHVjdFZhcmlhbnQuZGVwdGhWYWx1ZSxcbiAgICAgICAgICAgIGRlcHRoVW5pdDogcHJvZHVjdFZhcmlhbnQuZGVwdGhVbml0LFxuICAgICAgICAgICAgdm9sdW1lVmFsdWU6IHByb2R1Y3RWYXJpYW50LnZvbHVtZVZhbHVlLFxuICAgICAgICAgICAgdm9sdW1lVW5pdDogcHJvZHVjdFZhcmlhbnQudm9sdW1lVW5pdCxcbiAgICAgICAgICAgIHRheElkOiBwcm9kdWN0VmFyaWFudC50YXhJZCxcbiAgICAgICAgICAgIGdyb3VwUHJpY2luZzogcHJvZHVjdFZhcmlhbnQuZ3JvdXBQcmljaW5nLFxuICAgICAgICAgICAgYm94U2l6ZUlkOiBwcm9kdWN0VmFyaWFudC5ib3hTaXplSWQsXG4gICAgICAgICAgICBudW1iZXJPZlBpZWNlczogcHJvZHVjdFZhcmlhbnQubnVtYmVyT2ZQaWVjZXMsXG4gICAgICAgICAgICBiYXR0ZXJpZXNSZXF1aXJlZDogcHJvZHVjdFZhcmlhbnQuYmF0dGVyaWVzUmVxdWlyZWQsXG4gICAgICAgICAgICBzdXBwbGllclNrdTogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJTa3UsXG4gICAgICAgICAgICBzdXBwbGllclRyYWRlUHJpY2U6IHByb2R1Y3RWYXJpYW50LnN1cHBsaWVyVHJhZGVQcmljZSxcbiAgICAgICAgICAgIHN1cHBsaWVyVG9rZW5NYXJnaW46IHByb2R1Y3RWYXJpYW50LnN1cHBsaWVyVG9rZW5NYXJnaW4sXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBwcm9kdWN0OiB0aGlzLmluY2x1ZGVQcm9kdWN0KHByb2R1Y3RWYXJpYW50KSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3QocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogUHJvZHVjdCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3RWYXJpYW50LCAncHJvZHVjdCcsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19