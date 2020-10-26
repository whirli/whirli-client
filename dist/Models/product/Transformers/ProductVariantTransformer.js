"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductVariant = _interopRequireDefault(require("../ProductVariant"));

var _ProductTransformer = _interopRequireDefault(require("../../product/Transformers/ProductTransformer"));

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

var ProductVariantTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductVariantTransformer, _BaseTransformer);

  var _super = _createSuper(ProductVariantTransformer);

  function ProductVariantTransformer() {
    _classCallCheck(this, ProductVariantTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwicHJvZHVjdFZhcmlhbnQiLCJQcm9kdWN0VmFyaWFudCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic2t1Iiwib3B0aW9ucyIsInByaWNlIiwidW5pdFF0eSIsIm1pblF0eSIsIm1pbkJhdGNoIiwibWF4UXR5Iiwic3RvY2siLCJpbmNvbWluZyIsImJhY2tvcmRlciIsInJlcXVpcmVzU2hpcHBpbmciLCJ3ZWlnaHRWYWx1ZSIsIndlaWdodFVuaXQiLCJoZWlnaHRWYWx1ZSIsImhlaWdodFVuaXQiLCJ3aWR0aFZhbHVlIiwid2lkdGhVbml0IiwiZGVwdGhWYWx1ZSIsImRlcHRoVW5pdCIsInZvbHVtZVZhbHVlIiwidm9sdW1lVW5pdCIsInRheElkIiwiZ3JvdXBQcmljaW5nIiwiYm94U2l6ZUlkIiwibnVtYmVyT2ZQaWVjZXMiLCJiYXR0ZXJpZXNSZXF1aXJlZCIsInN1cHBsaWVyU2t1Iiwic3VwcGxpZXJUcmFkZVByaWNlIiwic3VwcGxpZXJUb2tlbk1hcmdpbiIsIm90aGVySGF6YXJkcyIsInN1cHBsaWVyTmFtZSIsInByb2R1Y3QiLCJpbmNsdWRlUHJvZHVjdCIsIml0ZW0iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHlCOzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBOzRCQUNZQyxjLEVBQXlEO0FBQzdELGFBQU8sSUFBSUMsMEJBQUosQ0FBbUI7QUFDdEJDLFFBQUFBLEVBQUUsRUFBRUYsY0FBYyxDQUFDRSxFQURHO0FBRXRCQyxRQUFBQSxTQUFTLEVBQUVILGNBQWMsQ0FBQ0csU0FGSjtBQUd0QkMsUUFBQUEsU0FBUyxFQUFFSixjQUFjLENBQUNJLFNBSEo7QUFJdEJDLFFBQUFBLEdBQUcsRUFBRUwsY0FBYyxDQUFDSyxHQUpFO0FBS3RCQyxRQUFBQSxPQUFPLEVBQUVOLGNBQWMsQ0FBQ00sT0FMRjtBQU10QkMsUUFBQUEsS0FBSyxFQUFFUCxjQUFjLENBQUNPLEtBTkE7QUFPdEJDLFFBQUFBLE9BQU8sRUFBRVIsY0FBYyxDQUFDUSxPQVBGO0FBUXRCQyxRQUFBQSxNQUFNLEVBQUVULGNBQWMsQ0FBQ1MsTUFSRDtBQVN0QkMsUUFBQUEsUUFBUSxFQUFFVixjQUFjLENBQUNVLFFBVEg7QUFVdEJDLFFBQUFBLE1BQU0sRUFBRVgsY0FBYyxDQUFDVyxNQVZEO0FBV3RCQyxRQUFBQSxLQUFLLEVBQUVaLGNBQWMsQ0FBQ1ksS0FYQTtBQVl0QkMsUUFBQUEsUUFBUSxFQUFFYixjQUFjLENBQUNhLFFBWkg7QUFhdEJDLFFBQUFBLFNBQVMsRUFBRWQsY0FBYyxDQUFDYyxTQWJKO0FBY3RCQyxRQUFBQSxnQkFBZ0IsRUFBRWYsY0FBYyxDQUFDZSxnQkFkWDtBQWV0QkMsUUFBQUEsV0FBVyxFQUFFaEIsY0FBYyxDQUFDZ0IsV0FmTjtBQWdCdEJDLFFBQUFBLFVBQVUsRUFBRWpCLGNBQWMsQ0FBQ2lCLFVBaEJMO0FBaUJ0QkMsUUFBQUEsV0FBVyxFQUFFbEIsY0FBYyxDQUFDa0IsV0FqQk47QUFrQnRCQyxRQUFBQSxVQUFVLEVBQUVuQixjQUFjLENBQUNtQixVQWxCTDtBQW1CdEJDLFFBQUFBLFVBQVUsRUFBRXBCLGNBQWMsQ0FBQ29CLFVBbkJMO0FBb0J0QkMsUUFBQUEsU0FBUyxFQUFFckIsY0FBYyxDQUFDcUIsU0FwQko7QUFxQnRCQyxRQUFBQSxVQUFVLEVBQUV0QixjQUFjLENBQUNzQixVQXJCTDtBQXNCdEJDLFFBQUFBLFNBQVMsRUFBRXZCLGNBQWMsQ0FBQ3VCLFNBdEJKO0FBdUJ0QkMsUUFBQUEsV0FBVyxFQUFFeEIsY0FBYyxDQUFDd0IsV0F2Qk47QUF3QnRCQyxRQUFBQSxVQUFVLEVBQUV6QixjQUFjLENBQUN5QixVQXhCTDtBQXlCdEJDLFFBQUFBLEtBQUssRUFBRTFCLGNBQWMsQ0FBQzBCLEtBekJBO0FBMEJ0QkMsUUFBQUEsWUFBWSxFQUFFM0IsY0FBYyxDQUFDMkIsWUExQlA7QUEyQnRCQyxRQUFBQSxTQUFTLEVBQUU1QixjQUFjLENBQUM0QixTQTNCSjtBQTRCdEJDLFFBQUFBLGNBQWMsRUFBRTdCLGNBQWMsQ0FBQzZCLGNBNUJUO0FBNkJ0QkMsUUFBQUEsaUJBQWlCLEVBQUU5QixjQUFjLENBQUM4QixpQkE3Qlo7QUE4QnRCQyxRQUFBQSxXQUFXLEVBQUUvQixjQUFjLENBQUMrQixXQTlCTjtBQStCdEJDLFFBQUFBLGtCQUFrQixFQUFFaEMsY0FBYyxDQUFDZ0Msa0JBL0JiO0FBZ0N0QkMsUUFBQUEsbUJBQW1CLEVBQUVqQyxjQUFjLENBQUNpQyxtQkFoQ2Q7QUFpQ3RCQyxRQUFBQSxZQUFZLEVBQUVsQyxjQUFjLENBQUNrQyxZQWpDUDtBQWtDdEJDLFFBQUFBLFlBQVksRUFBRW5DLGNBQWMsQ0FBQ21DLFlBbENQO0FBbUN0QjtBQUNBQyxRQUFBQSxPQUFPLEVBQUUsS0FBS0MsY0FBTCxDQUFvQnJDLGNBQXBCO0FBcENhLE9BQW5CLENBQVA7QUFzQ0g7OzttQ0FFY0EsYyxFQUF5RDtBQUNwRSxhQUFPLEtBQUtzQyxJQUFMLENBQVV0QyxjQUFWLEVBQTBCLFNBQTFCLEVBQXFDLElBQUl1Qyw4QkFBSixFQUFyQyxDQUFQO0FBQ0g7Ozs7RUFqRGtEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0VmFyaWFudCBmcm9tICcuLi9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uL1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcHJvZHVjdFZhcmlhbnQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0VmFyaWFudFxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdFZhcmlhbnQ6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlKTogUHJvZHVjdFZhcmlhbnQge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RWYXJpYW50KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0VmFyaWFudC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcHJvZHVjdFZhcmlhbnQuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBwcm9kdWN0VmFyaWFudC51cGRhdGVkQXQsXG4gICAgICAgICAgICBza3U6IHByb2R1Y3RWYXJpYW50LnNrdSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHByb2R1Y3RWYXJpYW50Lm9wdGlvbnMsXG4gICAgICAgICAgICBwcmljZTogcHJvZHVjdFZhcmlhbnQucHJpY2UsXG4gICAgICAgICAgICB1bml0UXR5OiBwcm9kdWN0VmFyaWFudC51bml0UXR5LFxuICAgICAgICAgICAgbWluUXR5OiBwcm9kdWN0VmFyaWFudC5taW5RdHksXG4gICAgICAgICAgICBtaW5CYXRjaDogcHJvZHVjdFZhcmlhbnQubWluQmF0Y2gsXG4gICAgICAgICAgICBtYXhRdHk6IHByb2R1Y3RWYXJpYW50Lm1heFF0eSxcbiAgICAgICAgICAgIHN0b2NrOiBwcm9kdWN0VmFyaWFudC5zdG9jayxcbiAgICAgICAgICAgIGluY29taW5nOiBwcm9kdWN0VmFyaWFudC5pbmNvbWluZyxcbiAgICAgICAgICAgIGJhY2tvcmRlcjogcHJvZHVjdFZhcmlhbnQuYmFja29yZGVyLFxuICAgICAgICAgICAgcmVxdWlyZXNTaGlwcGluZzogcHJvZHVjdFZhcmlhbnQucmVxdWlyZXNTaGlwcGluZyxcbiAgICAgICAgICAgIHdlaWdodFZhbHVlOiBwcm9kdWN0VmFyaWFudC53ZWlnaHRWYWx1ZSxcbiAgICAgICAgICAgIHdlaWdodFVuaXQ6IHByb2R1Y3RWYXJpYW50LndlaWdodFVuaXQsXG4gICAgICAgICAgICBoZWlnaHRWYWx1ZTogcHJvZHVjdFZhcmlhbnQuaGVpZ2h0VmFsdWUsXG4gICAgICAgICAgICBoZWlnaHRVbml0OiBwcm9kdWN0VmFyaWFudC5oZWlnaHRVbml0LFxuICAgICAgICAgICAgd2lkdGhWYWx1ZTogcHJvZHVjdFZhcmlhbnQud2lkdGhWYWx1ZSxcbiAgICAgICAgICAgIHdpZHRoVW5pdDogcHJvZHVjdFZhcmlhbnQud2lkdGhVbml0LFxuICAgICAgICAgICAgZGVwdGhWYWx1ZTogcHJvZHVjdFZhcmlhbnQuZGVwdGhWYWx1ZSxcbiAgICAgICAgICAgIGRlcHRoVW5pdDogcHJvZHVjdFZhcmlhbnQuZGVwdGhVbml0LFxuICAgICAgICAgICAgdm9sdW1lVmFsdWU6IHByb2R1Y3RWYXJpYW50LnZvbHVtZVZhbHVlLFxuICAgICAgICAgICAgdm9sdW1lVW5pdDogcHJvZHVjdFZhcmlhbnQudm9sdW1lVW5pdCxcbiAgICAgICAgICAgIHRheElkOiBwcm9kdWN0VmFyaWFudC50YXhJZCxcbiAgICAgICAgICAgIGdyb3VwUHJpY2luZzogcHJvZHVjdFZhcmlhbnQuZ3JvdXBQcmljaW5nLFxuICAgICAgICAgICAgYm94U2l6ZUlkOiBwcm9kdWN0VmFyaWFudC5ib3hTaXplSWQsXG4gICAgICAgICAgICBudW1iZXJPZlBpZWNlczogcHJvZHVjdFZhcmlhbnQubnVtYmVyT2ZQaWVjZXMsXG4gICAgICAgICAgICBiYXR0ZXJpZXNSZXF1aXJlZDogcHJvZHVjdFZhcmlhbnQuYmF0dGVyaWVzUmVxdWlyZWQsXG4gICAgICAgICAgICBzdXBwbGllclNrdTogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJTa3UsXG4gICAgICAgICAgICBzdXBwbGllclRyYWRlUHJpY2U6IHByb2R1Y3RWYXJpYW50LnN1cHBsaWVyVHJhZGVQcmljZSxcbiAgICAgICAgICAgIHN1cHBsaWVyVG9rZW5NYXJnaW46IHByb2R1Y3RWYXJpYW50LnN1cHBsaWVyVG9rZW5NYXJnaW4sXG4gICAgICAgICAgICBvdGhlckhhemFyZHM6IHByb2R1Y3RWYXJpYW50Lm90aGVySGF6YXJkcyxcbiAgICAgICAgICAgIHN1cHBsaWVyTmFtZTogcHJvZHVjdFZhcmlhbnQuc3VwcGxpZXJOYW1lLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgcHJvZHVjdDogdGhpcy5pbmNsdWRlUHJvZHVjdChwcm9kdWN0VmFyaWFudCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0KHByb2R1Y3RWYXJpYW50OiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSk6IFByb2R1Y3QgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0VmFyaWFudCwgJ3Byb2R1Y3QnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==