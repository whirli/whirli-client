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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwicHJvZHVjdFZhcmlhbnQiLCJQcm9kdWN0VmFyaWFudCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic2t1Iiwib3B0aW9ucyIsInByaWNlIiwidW5pdFF0eSIsIm1pblF0eSIsIm1pbkJhdGNoIiwibWF4UXR5Iiwic3RvY2siLCJpbmNvbWluZyIsImJhY2tvcmRlciIsInJlcXVpcmVzU2hpcHBpbmciLCJ3ZWlnaHRWYWx1ZSIsIndlaWdodFVuaXQiLCJoZWlnaHRWYWx1ZSIsImhlaWdodFVuaXQiLCJ3aWR0aFZhbHVlIiwid2lkdGhVbml0IiwiZGVwdGhWYWx1ZSIsImRlcHRoVW5pdCIsInZvbHVtZVZhbHVlIiwidm9sdW1lVW5pdCIsInRheElkIiwiZ3JvdXBQcmljaW5nIiwiYm94U2l6ZUlkIiwicHJvZHVjdCIsImluY2x1ZGVQcm9kdWN0IiwiaXRlbSIsIlByb2R1Y3RUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx5Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxjLEVBQXlEO0FBQzdELGFBQU8sSUFBSUMsMEJBQUosQ0FBbUI7QUFDdEJDLFFBQUFBLEVBQUUsRUFBRUYsY0FBYyxDQUFDRSxFQURHO0FBRXRCQyxRQUFBQSxTQUFTLEVBQUVILGNBQWMsQ0FBQ0csU0FGSjtBQUd0QkMsUUFBQUEsU0FBUyxFQUFFSixjQUFjLENBQUNJLFNBSEo7QUFJdEJDLFFBQUFBLEdBQUcsRUFBRUwsY0FBYyxDQUFDSyxHQUpFO0FBS3RCQyxRQUFBQSxPQUFPLEVBQUVOLGNBQWMsQ0FBQ00sT0FMRjtBQU10QkMsUUFBQUEsS0FBSyxFQUFFUCxjQUFjLENBQUNPLEtBTkE7QUFPdEJDLFFBQUFBLE9BQU8sRUFBRVIsY0FBYyxDQUFDUSxPQVBGO0FBUXRCQyxRQUFBQSxNQUFNLEVBQUVULGNBQWMsQ0FBQ1MsTUFSRDtBQVN0QkMsUUFBQUEsUUFBUSxFQUFFVixjQUFjLENBQUNVLFFBVEg7QUFVdEJDLFFBQUFBLE1BQU0sRUFBRVgsY0FBYyxDQUFDVyxNQVZEO0FBV3RCQyxRQUFBQSxLQUFLLEVBQUVaLGNBQWMsQ0FBQ1ksS0FYQTtBQVl0QkMsUUFBQUEsUUFBUSxFQUFFYixjQUFjLENBQUNhLFFBWkg7QUFhdEJDLFFBQUFBLFNBQVMsRUFBRWQsY0FBYyxDQUFDYyxTQWJKO0FBY3RCQyxRQUFBQSxnQkFBZ0IsRUFBRWYsY0FBYyxDQUFDZSxnQkFkWDtBQWV0QkMsUUFBQUEsV0FBVyxFQUFFaEIsY0FBYyxDQUFDZ0IsV0FmTjtBQWdCdEJDLFFBQUFBLFVBQVUsRUFBRWpCLGNBQWMsQ0FBQ2lCLFVBaEJMO0FBaUJ0QkMsUUFBQUEsV0FBVyxFQUFFbEIsY0FBYyxDQUFDa0IsV0FqQk47QUFrQnRCQyxRQUFBQSxVQUFVLEVBQUVuQixjQUFjLENBQUNtQixVQWxCTDtBQW1CdEJDLFFBQUFBLFVBQVUsRUFBRXBCLGNBQWMsQ0FBQ29CLFVBbkJMO0FBb0J0QkMsUUFBQUEsU0FBUyxFQUFFckIsY0FBYyxDQUFDcUIsU0FwQko7QUFxQnRCQyxRQUFBQSxVQUFVLEVBQUV0QixjQUFjLENBQUNzQixVQXJCTDtBQXNCdEJDLFFBQUFBLFNBQVMsRUFBRXZCLGNBQWMsQ0FBQ3VCLFNBdEJKO0FBdUJ0QkMsUUFBQUEsV0FBVyxFQUFFeEIsY0FBYyxDQUFDd0IsV0F2Qk47QUF3QnRCQyxRQUFBQSxVQUFVLEVBQUV6QixjQUFjLENBQUN5QixVQXhCTDtBQXlCdEJDLFFBQUFBLEtBQUssRUFBRTFCLGNBQWMsQ0FBQzBCLEtBekJBO0FBMEJ0QkMsUUFBQUEsWUFBWSxFQUFFM0IsY0FBYyxDQUFDMkIsWUExQlA7QUEyQnRCQyxRQUFBQSxTQUFTLEVBQUU1QixjQUFjLENBQUM0QixTQTNCSjtBQTRCdEI7QUFDQUMsUUFBQUEsT0FBTyxFQUFFLEtBQUtDLGNBQUwsQ0FBb0I5QixjQUFwQjtBQTdCYSxPQUFuQixDQUFQO0FBK0JIOzs7bUNBRWNBLGMsRUFBa0U7QUFDN0UsYUFBTyxLQUFLK0IsSUFBTCxDQUFVL0IsY0FBVixFQUEwQixTQUExQixFQUFxQyxJQUFJZ0MsOEJBQUosRUFBckMsQ0FBUDtBQUNIOzs7O0VBMUNrREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdFZhcmlhbnQgZnJvbSAnLi4vUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBwcm9kdWN0VmFyaWFudCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RWYXJpYW50XG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0VmFyaWFudDogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdFZhcmlhbnQoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RWYXJpYW50LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0VmFyaWFudC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHByb2R1Y3RWYXJpYW50LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHNrdTogcHJvZHVjdFZhcmlhbnQuc2t1LFxuICAgICAgICAgICAgb3B0aW9uczogcHJvZHVjdFZhcmlhbnQub3B0aW9ucyxcbiAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0VmFyaWFudC5wcmljZSxcbiAgICAgICAgICAgIHVuaXRRdHk6IHByb2R1Y3RWYXJpYW50LnVuaXRRdHksXG4gICAgICAgICAgICBtaW5RdHk6IHByb2R1Y3RWYXJpYW50Lm1pblF0eSxcbiAgICAgICAgICAgIG1pbkJhdGNoOiBwcm9kdWN0VmFyaWFudC5taW5CYXRjaCxcbiAgICAgICAgICAgIG1heFF0eTogcHJvZHVjdFZhcmlhbnQubWF4UXR5LFxuICAgICAgICAgICAgc3RvY2s6IHByb2R1Y3RWYXJpYW50LnN0b2NrLFxuICAgICAgICAgICAgaW5jb21pbmc6IHByb2R1Y3RWYXJpYW50LmluY29taW5nLFxuICAgICAgICAgICAgYmFja29yZGVyOiBwcm9kdWN0VmFyaWFudC5iYWNrb3JkZXIsXG4gICAgICAgICAgICByZXF1aXJlc1NoaXBwaW5nOiBwcm9kdWN0VmFyaWFudC5yZXF1aXJlc1NoaXBwaW5nLFxuICAgICAgICAgICAgd2VpZ2h0VmFsdWU6IHByb2R1Y3RWYXJpYW50LndlaWdodFZhbHVlLFxuICAgICAgICAgICAgd2VpZ2h0VW5pdDogcHJvZHVjdFZhcmlhbnQud2VpZ2h0VW5pdCxcbiAgICAgICAgICAgIGhlaWdodFZhbHVlOiBwcm9kdWN0VmFyaWFudC5oZWlnaHRWYWx1ZSxcbiAgICAgICAgICAgIGhlaWdodFVuaXQ6IHByb2R1Y3RWYXJpYW50LmhlaWdodFVuaXQsXG4gICAgICAgICAgICB3aWR0aFZhbHVlOiBwcm9kdWN0VmFyaWFudC53aWR0aFZhbHVlLFxuICAgICAgICAgICAgd2lkdGhVbml0OiBwcm9kdWN0VmFyaWFudC53aWR0aFVuaXQsXG4gICAgICAgICAgICBkZXB0aFZhbHVlOiBwcm9kdWN0VmFyaWFudC5kZXB0aFZhbHVlLFxuICAgICAgICAgICAgZGVwdGhVbml0OiBwcm9kdWN0VmFyaWFudC5kZXB0aFVuaXQsXG4gICAgICAgICAgICB2b2x1bWVWYWx1ZTogcHJvZHVjdFZhcmlhbnQudm9sdW1lVmFsdWUsXG4gICAgICAgICAgICB2b2x1bWVVbml0OiBwcm9kdWN0VmFyaWFudC52b2x1bWVVbml0LFxuICAgICAgICAgICAgdGF4SWQ6IHByb2R1Y3RWYXJpYW50LnRheElkLFxuICAgICAgICAgICAgZ3JvdXBQcmljaW5nOiBwcm9kdWN0VmFyaWFudC5ncm91cFByaWNpbmcsXG4gICAgICAgICAgICBib3hTaXplSWQ6IHByb2R1Y3RWYXJpYW50LmJveFNpemVJZCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHByb2R1Y3Q6IHRoaXMuaW5jbHVkZVByb2R1Y3QocHJvZHVjdFZhcmlhbnQpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdChwcm9kdWN0VmFyaWFudDogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UpOiBQcm9kdWN0SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdFZhcmlhbnQsICdwcm9kdWN0JywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=