"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _OrderLine = _interopRequireDefault(require("../OrderLine"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

var _OrderTransformer = _interopRequireDefault(require("../../order/Transformers/OrderTransformer"));

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

var OrderLineTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(OrderLineTransformer, _BaseTransformer);

  function OrderLineTransformer() {
    _classCallCheck(this, OrderLineTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderLineTransformer).apply(this, arguments));
  }

  _createClass(OrderLineTransformer, [{
    key: "mapData",

    /**
     * Map an orderLine response
     *
     * @param orderLine
     */
    value: function mapData(orderLine) {
      return new _OrderLine["default"]({
        id: orderLine.id,
        createdAt: orderLine.createdAt,
        updatedAt: orderLine.updatedAt,
        isShipping: orderLine.isShipping,
        isManual: orderLine.isManual,
        quantity: orderLine.quantity,
        lineTotal: orderLine.lineTotal,
        unitPrice: orderLine.unitPrice,
        unitQty: orderLine.unitQty,
        discountTotal: orderLine.discountTotal,
        deliveryTotal: orderLine.deliveryTotal,
        taxTotal: orderLine.taxTotal,
        taxRate: orderLine.taxRate,
        sku: orderLine.sku,
        description: orderLine.description,
        option: orderLine.option,
        deletedAt: orderLine.deletedAt,
        meta: orderLine.meta,
        // belongs to
        order: this.includeOrder(orderLine),
        productVariant: this.includeProductVariant(orderLine)
      });
    }
  }, {
    key: "includeOrder",
    value: function includeOrder(orderLine) {
      return this.item(orderLine, 'order', new _OrderTransformer["default"]());
    }
  }, {
    key: "includeProductVariant",
    value: function includeProductVariant(orderLine) {
      return this.item(orderLine, 'productVariant', new _ProductVariantTransformer["default"]());
    }
  }]);

  return OrderLineTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = OrderLineTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyTGluZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIk9yZGVyTGluZVRyYW5zZm9ybWVyIiwib3JkZXJMaW5lIiwiT3JkZXJMaW5lIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJpc1NoaXBwaW5nIiwiaXNNYW51YWwiLCJxdWFudGl0eSIsImxpbmVUb3RhbCIsInVuaXRQcmljZSIsInVuaXRRdHkiLCJkaXNjb3VudFRvdGFsIiwiZGVsaXZlcnlUb3RhbCIsInRheFRvdGFsIiwidGF4UmF0ZSIsInNrdSIsImRlc2NyaXB0aW9uIiwib3B0aW9uIiwiZGVsZXRlZEF0IiwibWV0YSIsIm9yZGVyIiwiaW5jbHVkZU9yZGVyIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJpdGVtIiwiT3JkZXJUcmFuc2Zvcm1lciIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFJQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsb0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsUyxFQUEwQztBQUM5QyxhQUFPLElBQUlDLHFCQUFKLENBQWM7QUFDakJDLFFBQUFBLEVBQUUsRUFBRUYsU0FBUyxDQUFDRSxFQURHO0FBRWpCQyxRQUFBQSxTQUFTLEVBQUVILFNBQVMsQ0FBQ0csU0FGSjtBQUdqQkMsUUFBQUEsU0FBUyxFQUFFSixTQUFTLENBQUNJLFNBSEo7QUFJakJDLFFBQUFBLFVBQVUsRUFBRUwsU0FBUyxDQUFDSyxVQUpMO0FBS2pCQyxRQUFBQSxRQUFRLEVBQUVOLFNBQVMsQ0FBQ00sUUFMSDtBQU1qQkMsUUFBQUEsUUFBUSxFQUFFUCxTQUFTLENBQUNPLFFBTkg7QUFPakJDLFFBQUFBLFNBQVMsRUFBRVIsU0FBUyxDQUFDUSxTQVBKO0FBUWpCQyxRQUFBQSxTQUFTLEVBQUVULFNBQVMsQ0FBQ1MsU0FSSjtBQVNqQkMsUUFBQUEsT0FBTyxFQUFFVixTQUFTLENBQUNVLE9BVEY7QUFVakJDLFFBQUFBLGFBQWEsRUFBRVgsU0FBUyxDQUFDVyxhQVZSO0FBV2pCQyxRQUFBQSxhQUFhLEVBQUVaLFNBQVMsQ0FBQ1ksYUFYUjtBQVlqQkMsUUFBQUEsUUFBUSxFQUFFYixTQUFTLENBQUNhLFFBWkg7QUFhakJDLFFBQUFBLE9BQU8sRUFBRWQsU0FBUyxDQUFDYyxPQWJGO0FBY2pCQyxRQUFBQSxHQUFHLEVBQUVmLFNBQVMsQ0FBQ2UsR0FkRTtBQWVqQkMsUUFBQUEsV0FBVyxFQUFFaEIsU0FBUyxDQUFDZ0IsV0FmTjtBQWdCakJDLFFBQUFBLE1BQU0sRUFBRWpCLFNBQVMsQ0FBQ2lCLE1BaEJEO0FBaUJqQkMsUUFBQUEsU0FBUyxFQUFFbEIsU0FBUyxDQUFDa0IsU0FqQko7QUFrQmpCQyxRQUFBQSxJQUFJLEVBQUVuQixTQUFTLENBQUNtQixJQWxCQztBQW1CakI7QUFDQUMsUUFBQUEsS0FBSyxFQUFFLEtBQUtDLFlBQUwsQ0FBa0JyQixTQUFsQixDQXBCVTtBQXFCakJzQixRQUFBQSxjQUFjLEVBQUUsS0FBS0MscUJBQUwsQ0FBMkJ2QixTQUEzQjtBQXJCQyxPQUFkLENBQVA7QUF1Qkg7OztpQ0FFWUEsUyxFQUFzRDtBQUMvRCxhQUFPLEtBQUt3QixJQUFMLENBQVV4QixTQUFWLEVBQXFCLE9BQXJCLEVBQThCLElBQUl5Qiw0QkFBSixFQUE5QixDQUFQO0FBQ0g7OzswQ0FFcUJ6QixTLEVBQStEO0FBQ2pGLGFBQU8sS0FBS3dCLElBQUwsQ0FBVXhCLFNBQVYsRUFBcUIsZ0JBQXJCLEVBQXVDLElBQUkwQixxQ0FBSixFQUF2QyxDQUFQO0FBQ0g7Ozs7RUF0QzZDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlckxpbmUgZnJvbSAnLi4vT3JkZXJMaW5lJztcbmltcG9ydCBPcmRlckxpbmVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlckxpbmUnO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyJztcbmltcG9ydCBPcmRlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL29yZGVyL1RyYW5zZm9ybWVycy9PcmRlclRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJMaW5lVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBvcmRlckxpbmUgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcmRlckxpbmVcbiAgICAgKi9cbiAgICBtYXBEYXRhKG9yZGVyTGluZTogT3JkZXJMaW5lSW50ZXJmYWNlKTogT3JkZXJMaW5lIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPcmRlckxpbmUoe1xuICAgICAgICAgICAgaWQ6IG9yZGVyTGluZS5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogb3JkZXJMaW5lLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogb3JkZXJMaW5lLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGlzU2hpcHBpbmc6IG9yZGVyTGluZS5pc1NoaXBwaW5nLFxuICAgICAgICAgICAgaXNNYW51YWw6IG9yZGVyTGluZS5pc01hbnVhbCxcbiAgICAgICAgICAgIHF1YW50aXR5OiBvcmRlckxpbmUucXVhbnRpdHksXG4gICAgICAgICAgICBsaW5lVG90YWw6IG9yZGVyTGluZS5saW5lVG90YWwsXG4gICAgICAgICAgICB1bml0UHJpY2U6IG9yZGVyTGluZS51bml0UHJpY2UsXG4gICAgICAgICAgICB1bml0UXR5OiBvcmRlckxpbmUudW5pdFF0eSxcbiAgICAgICAgICAgIGRpc2NvdW50VG90YWw6IG9yZGVyTGluZS5kaXNjb3VudFRvdGFsLFxuICAgICAgICAgICAgZGVsaXZlcnlUb3RhbDogb3JkZXJMaW5lLmRlbGl2ZXJ5VG90YWwsXG4gICAgICAgICAgICB0YXhUb3RhbDogb3JkZXJMaW5lLnRheFRvdGFsLFxuICAgICAgICAgICAgdGF4UmF0ZTogb3JkZXJMaW5lLnRheFJhdGUsXG4gICAgICAgICAgICBza3U6IG9yZGVyTGluZS5za3UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogb3JkZXJMaW5lLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3B0aW9uOiBvcmRlckxpbmUub3B0aW9uLFxuICAgICAgICAgICAgZGVsZXRlZEF0OiBvcmRlckxpbmUuZGVsZXRlZEF0LFxuICAgICAgICAgICAgbWV0YTogb3JkZXJMaW5lLm1ldGEsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBvcmRlcjogdGhpcy5pbmNsdWRlT3JkZXIob3JkZXJMaW5lKSxcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50OiB0aGlzLmluY2x1ZGVQcm9kdWN0VmFyaWFudChvcmRlckxpbmUpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXIob3JkZXJMaW5lOiBPcmRlckxpbmVJbnRlcmZhY2UpOiBPcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyTGluZSwgJ29yZGVyJywgbmV3IE9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RWYXJpYW50KG9yZGVyTGluZTogT3JkZXJMaW5lSW50ZXJmYWNlKTogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlckxpbmUsICdwcm9kdWN0VmFyaWFudCcsIG5ldyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==