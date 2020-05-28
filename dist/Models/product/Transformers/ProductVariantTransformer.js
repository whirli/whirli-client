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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwicHJvZHVjdFZhcmlhbnQiLCJQcm9kdWN0VmFyaWFudCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic2t1Iiwib3B0aW9ucyIsInByaWNlIiwidW5pdFF0eSIsIm1pblF0eSIsIm1pbkJhdGNoIiwibWF4UXR5Iiwic3RvY2siLCJpbmNvbWluZyIsImJhY2tvcmRlciIsInJlcXVpcmVzU2hpcHBpbmciLCJ3ZWlnaHRWYWx1ZSIsIndlaWdodFVuaXQiLCJoZWlnaHRWYWx1ZSIsImhlaWdodFVuaXQiLCJ3aWR0aFZhbHVlIiwid2lkdGhVbml0IiwiZGVwdGhWYWx1ZSIsImRlcHRoVW5pdCIsInZvbHVtZVZhbHVlIiwidm9sdW1lVW5pdCIsInRheElkIiwiZ3JvdXBQcmljaW5nIiwiYm94U2l6ZUlkIiwibnVtYmVyT2ZQaWVjZXMiLCJwcm9kdWN0IiwiaW5jbHVkZVByb2R1Y3QiLCJpdGVtIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHlCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLGMsRUFBeUQ7QUFDN0QsYUFBTyxJQUFJQywwQkFBSixDQUFtQjtBQUN0QkMsUUFBQUEsRUFBRSxFQUFFRixjQUFjLENBQUNFLEVBREc7QUFFdEJDLFFBQUFBLFNBQVMsRUFBRUgsY0FBYyxDQUFDRyxTQUZKO0FBR3RCQyxRQUFBQSxTQUFTLEVBQUVKLGNBQWMsQ0FBQ0ksU0FISjtBQUl0QkMsUUFBQUEsR0FBRyxFQUFFTCxjQUFjLENBQUNLLEdBSkU7QUFLdEJDLFFBQUFBLE9BQU8sRUFBRU4sY0FBYyxDQUFDTSxPQUxGO0FBTXRCQyxRQUFBQSxLQUFLLEVBQUVQLGNBQWMsQ0FBQ08sS0FOQTtBQU90QkMsUUFBQUEsT0FBTyxFQUFFUixjQUFjLENBQUNRLE9BUEY7QUFRdEJDLFFBQUFBLE1BQU0sRUFBRVQsY0FBYyxDQUFDUyxNQVJEO0FBU3RCQyxRQUFBQSxRQUFRLEVBQUVWLGNBQWMsQ0FBQ1UsUUFUSDtBQVV0QkMsUUFBQUEsTUFBTSxFQUFFWCxjQUFjLENBQUNXLE1BVkQ7QUFXdEJDLFFBQUFBLEtBQUssRUFBRVosY0FBYyxDQUFDWSxLQVhBO0FBWXRCQyxRQUFBQSxRQUFRLEVBQUViLGNBQWMsQ0FBQ2EsUUFaSDtBQWF0QkMsUUFBQUEsU0FBUyxFQUFFZCxjQUFjLENBQUNjLFNBYko7QUFjdEJDLFFBQUFBLGdCQUFnQixFQUFFZixjQUFjLENBQUNlLGdCQWRYO0FBZXRCQyxRQUFBQSxXQUFXLEVBQUVoQixjQUFjLENBQUNnQixXQWZOO0FBZ0J0QkMsUUFBQUEsVUFBVSxFQUFFakIsY0FBYyxDQUFDaUIsVUFoQkw7QUFpQnRCQyxRQUFBQSxXQUFXLEVBQUVsQixjQUFjLENBQUNrQixXQWpCTjtBQWtCdEJDLFFBQUFBLFVBQVUsRUFBRW5CLGNBQWMsQ0FBQ21CLFVBbEJMO0FBbUJ0QkMsUUFBQUEsVUFBVSxFQUFFcEIsY0FBYyxDQUFDb0IsVUFuQkw7QUFvQnRCQyxRQUFBQSxTQUFTLEVBQUVyQixjQUFjLENBQUNxQixTQXBCSjtBQXFCdEJDLFFBQUFBLFVBQVUsRUFBRXRCLGNBQWMsQ0FBQ3NCLFVBckJMO0FBc0J0QkMsUUFBQUEsU0FBUyxFQUFFdkIsY0FBYyxDQUFDdUIsU0F0Qko7QUF1QnRCQyxRQUFBQSxXQUFXLEVBQUV4QixjQUFjLENBQUN3QixXQXZCTjtBQXdCdEJDLFFBQUFBLFVBQVUsRUFBRXpCLGNBQWMsQ0FBQ3lCLFVBeEJMO0FBeUJ0QkMsUUFBQUEsS0FBSyxFQUFFMUIsY0FBYyxDQUFDMEIsS0F6QkE7QUEwQnRCQyxRQUFBQSxZQUFZLEVBQUUzQixjQUFjLENBQUMyQixZQTFCUDtBQTJCdEJDLFFBQUFBLFNBQVMsRUFBRTVCLGNBQWMsQ0FBQzRCLFNBM0JKO0FBNEJ0QkMsUUFBQUEsY0FBYyxFQUFFN0IsY0FBYyxDQUFDNkIsY0E1QlQ7QUE2QnRCO0FBQ0FDLFFBQUFBLE9BQU8sRUFBRSxLQUFLQyxjQUFMLENBQW9CL0IsY0FBcEI7QUE5QmEsT0FBbkIsQ0FBUDtBQWdDSDs7O21DQUVjQSxjLEVBQWtFO0FBQzdFLGFBQU8sS0FBS2dDLElBQUwsQ0FBVWhDLGNBQVYsRUFBMEIsU0FBMUIsRUFBcUMsSUFBSWlDLDhCQUFKLEVBQXJDLENBQVA7QUFDSDs7OztFQTNDa0RDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RWYXJpYW50IGZyb20gJy4uL1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcHJvZHVjdFZhcmlhbnQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0VmFyaWFudFxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogUHJvZHVjdFZhcmlhbnQge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RWYXJpYW50KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0VmFyaWFudC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcHJvZHVjdFZhcmlhbnQuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBwcm9kdWN0VmFyaWFudC51cGRhdGVkQXQsXG4gICAgICAgICAgICBza3U6IHByb2R1Y3RWYXJpYW50LnNrdSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHByb2R1Y3RWYXJpYW50Lm9wdGlvbnMsXG4gICAgICAgICAgICBwcmljZTogcHJvZHVjdFZhcmlhbnQucHJpY2UsXG4gICAgICAgICAgICB1bml0UXR5OiBwcm9kdWN0VmFyaWFudC51bml0UXR5LFxuICAgICAgICAgICAgbWluUXR5OiBwcm9kdWN0VmFyaWFudC5taW5RdHksXG4gICAgICAgICAgICBtaW5CYXRjaDogcHJvZHVjdFZhcmlhbnQubWluQmF0Y2gsXG4gICAgICAgICAgICBtYXhRdHk6IHByb2R1Y3RWYXJpYW50Lm1heFF0eSxcbiAgICAgICAgICAgIHN0b2NrOiBwcm9kdWN0VmFyaWFudC5zdG9jayxcbiAgICAgICAgICAgIGluY29taW5nOiBwcm9kdWN0VmFyaWFudC5pbmNvbWluZyxcbiAgICAgICAgICAgIGJhY2tvcmRlcjogcHJvZHVjdFZhcmlhbnQuYmFja29yZGVyLFxuICAgICAgICAgICAgcmVxdWlyZXNTaGlwcGluZzogcHJvZHVjdFZhcmlhbnQucmVxdWlyZXNTaGlwcGluZyxcbiAgICAgICAgICAgIHdlaWdodFZhbHVlOiBwcm9kdWN0VmFyaWFudC53ZWlnaHRWYWx1ZSxcbiAgICAgICAgICAgIHdlaWdodFVuaXQ6IHByb2R1Y3RWYXJpYW50LndlaWdodFVuaXQsXG4gICAgICAgICAgICBoZWlnaHRWYWx1ZTogcHJvZHVjdFZhcmlhbnQuaGVpZ2h0VmFsdWUsXG4gICAgICAgICAgICBoZWlnaHRVbml0OiBwcm9kdWN0VmFyaWFudC5oZWlnaHRVbml0LFxuICAgICAgICAgICAgd2lkdGhWYWx1ZTogcHJvZHVjdFZhcmlhbnQud2lkdGhWYWx1ZSxcbiAgICAgICAgICAgIHdpZHRoVW5pdDogcHJvZHVjdFZhcmlhbnQud2lkdGhVbml0LFxuICAgICAgICAgICAgZGVwdGhWYWx1ZTogcHJvZHVjdFZhcmlhbnQuZGVwdGhWYWx1ZSxcbiAgICAgICAgICAgIGRlcHRoVW5pdDogcHJvZHVjdFZhcmlhbnQuZGVwdGhVbml0LFxuICAgICAgICAgICAgdm9sdW1lVmFsdWU6IHByb2R1Y3RWYXJpYW50LnZvbHVtZVZhbHVlLFxuICAgICAgICAgICAgdm9sdW1lVW5pdDogcHJvZHVjdFZhcmlhbnQudm9sdW1lVW5pdCxcbiAgICAgICAgICAgIHRheElkOiBwcm9kdWN0VmFyaWFudC50YXhJZCxcbiAgICAgICAgICAgIGdyb3VwUHJpY2luZzogcHJvZHVjdFZhcmlhbnQuZ3JvdXBQcmljaW5nLFxuICAgICAgICAgICAgYm94U2l6ZUlkOiBwcm9kdWN0VmFyaWFudC5ib3hTaXplSWQsXG4gICAgICAgICAgICBudW1iZXJPZlBpZWNlczogcHJvZHVjdFZhcmlhbnQubnVtYmVyT2ZQaWVjZXMsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBwcm9kdWN0OiB0aGlzLmluY2x1ZGVQcm9kdWN0KHByb2R1Y3RWYXJpYW50KSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3QocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogUHJvZHVjdEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3RWYXJpYW50LCAncHJvZHVjdCcsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19