"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _OrderLine = _interopRequireDefault(require("../OrderLine"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

var _OrderTransformer = _interopRequireDefault(require("../../order/Transformers/OrderTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _StockTransformer = _interopRequireDefault(require("../../stock/Transformers/StockTransformer"));

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
        statusId: orderLine.statusId,
        message: orderLine.message,
        testType: orderLine.testType,
        // belongs to
        order: this.includeOrder(orderLine),
        productVariant: this.includeProductVariant(orderLine),
        stock: this.includeStock(orderLine)
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
  }, {
    key: "includeStock",
    value: function includeStock(orderLine) {
      return this.collection(orderLine, 'stock', new _StockTransformer["default"]());
    }
  }]);

  return OrderLineTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = OrderLineTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyTGluZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIk9yZGVyTGluZVRyYW5zZm9ybWVyIiwib3JkZXJMaW5lIiwiT3JkZXJMaW5lIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJpc1NoaXBwaW5nIiwiaXNNYW51YWwiLCJxdWFudGl0eSIsImxpbmVUb3RhbCIsInVuaXRQcmljZSIsInVuaXRRdHkiLCJkaXNjb3VudFRvdGFsIiwiZGVsaXZlcnlUb3RhbCIsInRheFRvdGFsIiwidGF4UmF0ZSIsInNrdSIsImRlc2NyaXB0aW9uIiwib3B0aW9uIiwiZGVsZXRlZEF0IiwibWV0YSIsInN0YXR1c0lkIiwibWVzc2FnZSIsInRlc3RUeXBlIiwib3JkZXIiLCJpbmNsdWRlT3JkZXIiLCJwcm9kdWN0VmFyaWFudCIsImluY2x1ZGVQcm9kdWN0VmFyaWFudCIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiaXRlbSIsIk9yZGVyVHJhbnNmb3JtZXIiLCJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlN0b2NrVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsb0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsUyxFQUEwQztBQUM5QyxhQUFPLElBQUlDLHFCQUFKLENBQWM7QUFDakJDLFFBQUFBLEVBQUUsRUFBRUYsU0FBUyxDQUFDRSxFQURHO0FBRWpCQyxRQUFBQSxTQUFTLEVBQUVILFNBQVMsQ0FBQ0csU0FGSjtBQUdqQkMsUUFBQUEsU0FBUyxFQUFFSixTQUFTLENBQUNJLFNBSEo7QUFJakJDLFFBQUFBLFVBQVUsRUFBRUwsU0FBUyxDQUFDSyxVQUpMO0FBS2pCQyxRQUFBQSxRQUFRLEVBQUVOLFNBQVMsQ0FBQ00sUUFMSDtBQU1qQkMsUUFBQUEsUUFBUSxFQUFFUCxTQUFTLENBQUNPLFFBTkg7QUFPakJDLFFBQUFBLFNBQVMsRUFBRVIsU0FBUyxDQUFDUSxTQVBKO0FBUWpCQyxRQUFBQSxTQUFTLEVBQUVULFNBQVMsQ0FBQ1MsU0FSSjtBQVNqQkMsUUFBQUEsT0FBTyxFQUFFVixTQUFTLENBQUNVLE9BVEY7QUFVakJDLFFBQUFBLGFBQWEsRUFBRVgsU0FBUyxDQUFDVyxhQVZSO0FBV2pCQyxRQUFBQSxhQUFhLEVBQUVaLFNBQVMsQ0FBQ1ksYUFYUjtBQVlqQkMsUUFBQUEsUUFBUSxFQUFFYixTQUFTLENBQUNhLFFBWkg7QUFhakJDLFFBQUFBLE9BQU8sRUFBRWQsU0FBUyxDQUFDYyxPQWJGO0FBY2pCQyxRQUFBQSxHQUFHLEVBQUVmLFNBQVMsQ0FBQ2UsR0FkRTtBQWVqQkMsUUFBQUEsV0FBVyxFQUFFaEIsU0FBUyxDQUFDZ0IsV0FmTjtBQWdCakJDLFFBQUFBLE1BQU0sRUFBRWpCLFNBQVMsQ0FBQ2lCLE1BaEJEO0FBaUJqQkMsUUFBQUEsU0FBUyxFQUFFbEIsU0FBUyxDQUFDa0IsU0FqQko7QUFrQmpCQyxRQUFBQSxJQUFJLEVBQUVuQixTQUFTLENBQUNtQixJQWxCQztBQW1CakJDLFFBQUFBLFFBQVEsRUFBRXBCLFNBQVMsQ0FBQ29CLFFBbkJIO0FBb0JqQkMsUUFBQUEsT0FBTyxFQUFFckIsU0FBUyxDQUFDcUIsT0FwQkY7QUFxQmpCQyxRQUFBQSxRQUFRLEVBQUV0QixTQUFTLENBQUNzQixRQXJCSDtBQXNCakI7QUFDQUMsUUFBQUEsS0FBSyxFQUFFLEtBQUtDLFlBQUwsQ0FBa0J4QixTQUFsQixDQXZCVTtBQXdCakJ5QixRQUFBQSxjQUFjLEVBQUUsS0FBS0MscUJBQUwsQ0FBMkIxQixTQUEzQixDQXhCQztBQXlCakIyQixRQUFBQSxLQUFLLEVBQUUsS0FBS0MsWUFBTCxDQUFrQjVCLFNBQWxCO0FBekJVLE9BQWQsQ0FBUDtBQTJCSDs7O2lDQUVZQSxTLEVBQXNEO0FBQy9ELGFBQU8sS0FBSzZCLElBQUwsQ0FBVTdCLFNBQVYsRUFBcUIsT0FBckIsRUFBOEIsSUFBSThCLDRCQUFKLEVBQTlCLENBQVA7QUFDSDs7OzBDQUVxQjlCLFMsRUFBK0Q7QUFDakYsYUFBTyxLQUFLNkIsSUFBTCxDQUFVN0IsU0FBVixFQUFxQixnQkFBckIsRUFBdUMsSUFBSStCLHFDQUFKLEVBQXZDLENBQVA7QUFDSDs7O2lDQUVZL0IsUyxFQUFzRDtBQUMvRCxhQUFPLEtBQUtnQyxVQUFMLENBQWdCaEMsU0FBaEIsRUFBMkIsT0FBM0IsRUFBb0MsSUFBSWlDLDRCQUFKLEVBQXBDLENBQVA7QUFDSDs7OztFQTlDNkNDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9yZGVyTGluZSBmcm9tICcuLi9PcmRlckxpbmUnO1xuaW1wb3J0IE9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyTGluZSc7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1N0b2NrJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IE9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN0b2NrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckxpbmVUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIG9yZGVyTGluZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9yZGVyTGluZVxuICAgICAqL1xuICAgIG1hcERhdGEob3JkZXJMaW5lOiBPcmRlckxpbmVJbnRlcmZhY2UpOiBPcmRlckxpbmUge1xuICAgICAgICByZXR1cm4gbmV3IE9yZGVyTGluZSh7XG4gICAgICAgICAgICBpZDogb3JkZXJMaW5lLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBvcmRlckxpbmUuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBvcmRlckxpbmUudXBkYXRlZEF0LFxuICAgICAgICAgICAgaXNTaGlwcGluZzogb3JkZXJMaW5lLmlzU2hpcHBpbmcsXG4gICAgICAgICAgICBpc01hbnVhbDogb3JkZXJMaW5lLmlzTWFudWFsLFxuICAgICAgICAgICAgcXVhbnRpdHk6IG9yZGVyTGluZS5xdWFudGl0eSxcbiAgICAgICAgICAgIGxpbmVUb3RhbDogb3JkZXJMaW5lLmxpbmVUb3RhbCxcbiAgICAgICAgICAgIHVuaXRQcmljZTogb3JkZXJMaW5lLnVuaXRQcmljZSxcbiAgICAgICAgICAgIHVuaXRRdHk6IG9yZGVyTGluZS51bml0UXR5LFxuICAgICAgICAgICAgZGlzY291bnRUb3RhbDogb3JkZXJMaW5lLmRpc2NvdW50VG90YWwsXG4gICAgICAgICAgICBkZWxpdmVyeVRvdGFsOiBvcmRlckxpbmUuZGVsaXZlcnlUb3RhbCxcbiAgICAgICAgICAgIHRheFRvdGFsOiBvcmRlckxpbmUudGF4VG90YWwsXG4gICAgICAgICAgICB0YXhSYXRlOiBvcmRlckxpbmUudGF4UmF0ZSxcbiAgICAgICAgICAgIHNrdTogb3JkZXJMaW5lLnNrdSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvcmRlckxpbmUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvcHRpb246IG9yZGVyTGluZS5vcHRpb24sXG4gICAgICAgICAgICBkZWxldGVkQXQ6IG9yZGVyTGluZS5kZWxldGVkQXQsXG4gICAgICAgICAgICBtZXRhOiBvcmRlckxpbmUubWV0YSxcbiAgICAgICAgICAgIHN0YXR1c0lkOiBvcmRlckxpbmUuc3RhdHVzSWQsXG4gICAgICAgICAgICBtZXNzYWdlOiBvcmRlckxpbmUubWVzc2FnZSxcbiAgICAgICAgICAgIHRlc3RUeXBlOiBvcmRlckxpbmUudGVzdFR5cGUsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBvcmRlcjogdGhpcy5pbmNsdWRlT3JkZXIob3JkZXJMaW5lKSxcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50OiB0aGlzLmluY2x1ZGVQcm9kdWN0VmFyaWFudChvcmRlckxpbmUpLFxuICAgICAgICAgICAgc3RvY2s6IHRoaXMuaW5jbHVkZVN0b2NrKG9yZGVyTGluZSksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlcihvcmRlckxpbmU6IE9yZGVyTGluZUludGVyZmFjZSk6IE9yZGVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXJMaW5lLCAnb3JkZXInLCBuZXcgT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdFZhcmlhbnQob3JkZXJMaW5lOiBPcmRlckxpbmVJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyTGluZSwgJ3Byb2R1Y3RWYXJpYW50JywgbmV3IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN0b2NrKG9yZGVyTGluZTogT3JkZXJMaW5lSW50ZXJmYWNlKTogQXJyYXk8U3RvY2tJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihvcmRlckxpbmUsICdzdG9jaycsIG5ldyBTdG9ja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==