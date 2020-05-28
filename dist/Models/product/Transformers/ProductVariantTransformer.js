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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwicHJvZHVjdFZhcmlhbnQiLCJQcm9kdWN0VmFyaWFudCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic2t1Iiwib3B0aW9ucyIsInByaWNlIiwidW5pdFF0eSIsIm1pblF0eSIsIm1pbkJhdGNoIiwibWF4UXR5Iiwic3RvY2siLCJpbmNvbWluZyIsImJhY2tvcmRlciIsInJlcXVpcmVzU2hpcHBpbmciLCJ3ZWlnaHRWYWx1ZSIsIndlaWdodFVuaXQiLCJoZWlnaHRWYWx1ZSIsImhlaWdodFVuaXQiLCJ3aWR0aFZhbHVlIiwid2lkdGhVbml0IiwiZGVwdGhWYWx1ZSIsImRlcHRoVW5pdCIsInZvbHVtZVZhbHVlIiwidm9sdW1lVW5pdCIsInRheElkIiwiZ3JvdXBQcmljaW5nIiwiYm94U2l6ZUlkIiwibnVtYmVyT2ZQaWVjZXMiLCJiYXR0ZXJpZXNSZXF1aXJlZCIsInByb2R1Y3QiLCJpbmNsdWRlUHJvZHVjdCIsIml0ZW0iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEseUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsYyxFQUF5RDtBQUM3RCxhQUFPLElBQUlDLDBCQUFKLENBQW1CO0FBQ3RCQyxRQUFBQSxFQUFFLEVBQUVGLGNBQWMsQ0FBQ0UsRUFERztBQUV0QkMsUUFBQUEsU0FBUyxFQUFFSCxjQUFjLENBQUNHLFNBRko7QUFHdEJDLFFBQUFBLFNBQVMsRUFBRUosY0FBYyxDQUFDSSxTQUhKO0FBSXRCQyxRQUFBQSxHQUFHLEVBQUVMLGNBQWMsQ0FBQ0ssR0FKRTtBQUt0QkMsUUFBQUEsT0FBTyxFQUFFTixjQUFjLENBQUNNLE9BTEY7QUFNdEJDLFFBQUFBLEtBQUssRUFBRVAsY0FBYyxDQUFDTyxLQU5BO0FBT3RCQyxRQUFBQSxPQUFPLEVBQUVSLGNBQWMsQ0FBQ1EsT0FQRjtBQVF0QkMsUUFBQUEsTUFBTSxFQUFFVCxjQUFjLENBQUNTLE1BUkQ7QUFTdEJDLFFBQUFBLFFBQVEsRUFBRVYsY0FBYyxDQUFDVSxRQVRIO0FBVXRCQyxRQUFBQSxNQUFNLEVBQUVYLGNBQWMsQ0FBQ1csTUFWRDtBQVd0QkMsUUFBQUEsS0FBSyxFQUFFWixjQUFjLENBQUNZLEtBWEE7QUFZdEJDLFFBQUFBLFFBQVEsRUFBRWIsY0FBYyxDQUFDYSxRQVpIO0FBYXRCQyxRQUFBQSxTQUFTLEVBQUVkLGNBQWMsQ0FBQ2MsU0FiSjtBQWN0QkMsUUFBQUEsZ0JBQWdCLEVBQUVmLGNBQWMsQ0FBQ2UsZ0JBZFg7QUFldEJDLFFBQUFBLFdBQVcsRUFBRWhCLGNBQWMsQ0FBQ2dCLFdBZk47QUFnQnRCQyxRQUFBQSxVQUFVLEVBQUVqQixjQUFjLENBQUNpQixVQWhCTDtBQWlCdEJDLFFBQUFBLFdBQVcsRUFBRWxCLGNBQWMsQ0FBQ2tCLFdBakJOO0FBa0J0QkMsUUFBQUEsVUFBVSxFQUFFbkIsY0FBYyxDQUFDbUIsVUFsQkw7QUFtQnRCQyxRQUFBQSxVQUFVLEVBQUVwQixjQUFjLENBQUNvQixVQW5CTDtBQW9CdEJDLFFBQUFBLFNBQVMsRUFBRXJCLGNBQWMsQ0FBQ3FCLFNBcEJKO0FBcUJ0QkMsUUFBQUEsVUFBVSxFQUFFdEIsY0FBYyxDQUFDc0IsVUFyQkw7QUFzQnRCQyxRQUFBQSxTQUFTLEVBQUV2QixjQUFjLENBQUN1QixTQXRCSjtBQXVCdEJDLFFBQUFBLFdBQVcsRUFBRXhCLGNBQWMsQ0FBQ3dCLFdBdkJOO0FBd0J0QkMsUUFBQUEsVUFBVSxFQUFFekIsY0FBYyxDQUFDeUIsVUF4Qkw7QUF5QnRCQyxRQUFBQSxLQUFLLEVBQUUxQixjQUFjLENBQUMwQixLQXpCQTtBQTBCdEJDLFFBQUFBLFlBQVksRUFBRTNCLGNBQWMsQ0FBQzJCLFlBMUJQO0FBMkJ0QkMsUUFBQUEsU0FBUyxFQUFFNUIsY0FBYyxDQUFDNEIsU0EzQko7QUE0QnRCQyxRQUFBQSxjQUFjLEVBQUU3QixjQUFjLENBQUM2QixjQTVCVDtBQTZCdEJDLFFBQUFBLGlCQUFpQixFQUFFOUIsY0FBYyxDQUFDOEIsaUJBN0JaO0FBOEJ0QjtBQUNBQyxRQUFBQSxPQUFPLEVBQUUsS0FBS0MsY0FBTCxDQUFvQmhDLGNBQXBCO0FBL0JhLE9BQW5CLENBQVA7QUFpQ0g7OzttQ0FFY0EsYyxFQUFrRTtBQUM3RSxhQUFPLEtBQUtpQyxJQUFMLENBQVVqQyxjQUFWLEVBQTBCLFNBQTFCLEVBQXFDLElBQUlrQyw4QkFBSixFQUFyQyxDQUFQO0FBQ0g7Ozs7RUE1Q2tEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0VmFyaWFudCBmcm9tICcuLi9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHByb2R1Y3RWYXJpYW50IHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdFZhcmlhbnRcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IFByb2R1Y3RWYXJpYW50IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0VmFyaWFudCh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdFZhcmlhbnQuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHByb2R1Y3RWYXJpYW50LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcHJvZHVjdFZhcmlhbnQudXBkYXRlZEF0LFxuICAgICAgICAgICAgc2t1OiBwcm9kdWN0VmFyaWFudC5za3UsXG4gICAgICAgICAgICBvcHRpb25zOiBwcm9kdWN0VmFyaWFudC5vcHRpb25zLFxuICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3RWYXJpYW50LnByaWNlLFxuICAgICAgICAgICAgdW5pdFF0eTogcHJvZHVjdFZhcmlhbnQudW5pdFF0eSxcbiAgICAgICAgICAgIG1pblF0eTogcHJvZHVjdFZhcmlhbnQubWluUXR5LFxuICAgICAgICAgICAgbWluQmF0Y2g6IHByb2R1Y3RWYXJpYW50Lm1pbkJhdGNoLFxuICAgICAgICAgICAgbWF4UXR5OiBwcm9kdWN0VmFyaWFudC5tYXhRdHksXG4gICAgICAgICAgICBzdG9jazogcHJvZHVjdFZhcmlhbnQuc3RvY2ssXG4gICAgICAgICAgICBpbmNvbWluZzogcHJvZHVjdFZhcmlhbnQuaW5jb21pbmcsXG4gICAgICAgICAgICBiYWNrb3JkZXI6IHByb2R1Y3RWYXJpYW50LmJhY2tvcmRlcixcbiAgICAgICAgICAgIHJlcXVpcmVzU2hpcHBpbmc6IHByb2R1Y3RWYXJpYW50LnJlcXVpcmVzU2hpcHBpbmcsXG4gICAgICAgICAgICB3ZWlnaHRWYWx1ZTogcHJvZHVjdFZhcmlhbnQud2VpZ2h0VmFsdWUsXG4gICAgICAgICAgICB3ZWlnaHRVbml0OiBwcm9kdWN0VmFyaWFudC53ZWlnaHRVbml0LFxuICAgICAgICAgICAgaGVpZ2h0VmFsdWU6IHByb2R1Y3RWYXJpYW50LmhlaWdodFZhbHVlLFxuICAgICAgICAgICAgaGVpZ2h0VW5pdDogcHJvZHVjdFZhcmlhbnQuaGVpZ2h0VW5pdCxcbiAgICAgICAgICAgIHdpZHRoVmFsdWU6IHByb2R1Y3RWYXJpYW50LndpZHRoVmFsdWUsXG4gICAgICAgICAgICB3aWR0aFVuaXQ6IHByb2R1Y3RWYXJpYW50LndpZHRoVW5pdCxcbiAgICAgICAgICAgIGRlcHRoVmFsdWU6IHByb2R1Y3RWYXJpYW50LmRlcHRoVmFsdWUsXG4gICAgICAgICAgICBkZXB0aFVuaXQ6IHByb2R1Y3RWYXJpYW50LmRlcHRoVW5pdCxcbiAgICAgICAgICAgIHZvbHVtZVZhbHVlOiBwcm9kdWN0VmFyaWFudC52b2x1bWVWYWx1ZSxcbiAgICAgICAgICAgIHZvbHVtZVVuaXQ6IHByb2R1Y3RWYXJpYW50LnZvbHVtZVVuaXQsXG4gICAgICAgICAgICB0YXhJZDogcHJvZHVjdFZhcmlhbnQudGF4SWQsXG4gICAgICAgICAgICBncm91cFByaWNpbmc6IHByb2R1Y3RWYXJpYW50Lmdyb3VwUHJpY2luZyxcbiAgICAgICAgICAgIGJveFNpemVJZDogcHJvZHVjdFZhcmlhbnQuYm94U2l6ZUlkLFxuICAgICAgICAgICAgbnVtYmVyT2ZQaWVjZXM6IHByb2R1Y3RWYXJpYW50Lm51bWJlck9mUGllY2VzLFxuICAgICAgICAgICAgYmF0dGVyaWVzUmVxdWlyZWQ6IHByb2R1Y3RWYXJpYW50LmJhdHRlcmllc1JlcXVpcmVkLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgcHJvZHVjdDogdGhpcy5pbmNsdWRlUHJvZHVjdChwcm9kdWN0VmFyaWFudCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0KHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IFByb2R1Y3RJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0VmFyaWFudCwgJ3Byb2R1Y3QnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==