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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyTGluZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIk9yZGVyTGluZVRyYW5zZm9ybWVyIiwib3JkZXJMaW5lIiwiT3JkZXJMaW5lIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJpc1NoaXBwaW5nIiwiaXNNYW51YWwiLCJxdWFudGl0eSIsImxpbmVUb3RhbCIsInVuaXRQcmljZSIsInVuaXRRdHkiLCJkaXNjb3VudFRvdGFsIiwiZGVsaXZlcnlUb3RhbCIsInRheFRvdGFsIiwidGF4UmF0ZSIsInNrdSIsImRlc2NyaXB0aW9uIiwib3B0aW9uIiwiZGVsZXRlZEF0IiwibWV0YSIsInN0YXR1c0lkIiwibWVzc2FnZSIsIm9yZGVyIiwiaW5jbHVkZU9yZGVyIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJzdG9jayIsImluY2x1ZGVTdG9jayIsIml0ZW0iLCJPcmRlclRyYW5zZm9ybWVyIiwiUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJTdG9ja1RyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG9COzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFMsRUFBMEM7QUFDOUMsYUFBTyxJQUFJQyxxQkFBSixDQUFjO0FBQ2pCQyxRQUFBQSxFQUFFLEVBQUVGLFNBQVMsQ0FBQ0UsRUFERztBQUVqQkMsUUFBQUEsU0FBUyxFQUFFSCxTQUFTLENBQUNHLFNBRko7QUFHakJDLFFBQUFBLFNBQVMsRUFBRUosU0FBUyxDQUFDSSxTQUhKO0FBSWpCQyxRQUFBQSxVQUFVLEVBQUVMLFNBQVMsQ0FBQ0ssVUFKTDtBQUtqQkMsUUFBQUEsUUFBUSxFQUFFTixTQUFTLENBQUNNLFFBTEg7QUFNakJDLFFBQUFBLFFBQVEsRUFBRVAsU0FBUyxDQUFDTyxRQU5IO0FBT2pCQyxRQUFBQSxTQUFTLEVBQUVSLFNBQVMsQ0FBQ1EsU0FQSjtBQVFqQkMsUUFBQUEsU0FBUyxFQUFFVCxTQUFTLENBQUNTLFNBUko7QUFTakJDLFFBQUFBLE9BQU8sRUFBRVYsU0FBUyxDQUFDVSxPQVRGO0FBVWpCQyxRQUFBQSxhQUFhLEVBQUVYLFNBQVMsQ0FBQ1csYUFWUjtBQVdqQkMsUUFBQUEsYUFBYSxFQUFFWixTQUFTLENBQUNZLGFBWFI7QUFZakJDLFFBQUFBLFFBQVEsRUFBRWIsU0FBUyxDQUFDYSxRQVpIO0FBYWpCQyxRQUFBQSxPQUFPLEVBQUVkLFNBQVMsQ0FBQ2MsT0FiRjtBQWNqQkMsUUFBQUEsR0FBRyxFQUFFZixTQUFTLENBQUNlLEdBZEU7QUFlakJDLFFBQUFBLFdBQVcsRUFBRWhCLFNBQVMsQ0FBQ2dCLFdBZk47QUFnQmpCQyxRQUFBQSxNQUFNLEVBQUVqQixTQUFTLENBQUNpQixNQWhCRDtBQWlCakJDLFFBQUFBLFNBQVMsRUFBRWxCLFNBQVMsQ0FBQ2tCLFNBakJKO0FBa0JqQkMsUUFBQUEsSUFBSSxFQUFFbkIsU0FBUyxDQUFDbUIsSUFsQkM7QUFtQmpCQyxRQUFBQSxRQUFRLEVBQUVwQixTQUFTLENBQUNvQixRQW5CSDtBQW9CakJDLFFBQUFBLE9BQU8sRUFBRXJCLFNBQVMsQ0FBQ3FCLE9BcEJGO0FBcUJqQjtBQUNBQyxRQUFBQSxLQUFLLEVBQUUsS0FBS0MsWUFBTCxDQUFrQnZCLFNBQWxCLENBdEJVO0FBdUJqQndCLFFBQUFBLGNBQWMsRUFBRSxLQUFLQyxxQkFBTCxDQUEyQnpCLFNBQTNCLENBdkJDO0FBd0JqQjBCLFFBQUFBLEtBQUssRUFBRSxLQUFLQyxZQUFMLENBQWtCM0IsU0FBbEI7QUF4QlUsT0FBZCxDQUFQO0FBMEJIOzs7aUNBRVlBLFMsRUFBc0Q7QUFDL0QsYUFBTyxLQUFLNEIsSUFBTCxDQUFVNUIsU0FBVixFQUFxQixPQUFyQixFQUE4QixJQUFJNkIsNEJBQUosRUFBOUIsQ0FBUDtBQUNIOzs7MENBRXFCN0IsUyxFQUErRDtBQUNqRixhQUFPLEtBQUs0QixJQUFMLENBQVU1QixTQUFWLEVBQXFCLGdCQUFyQixFQUF1QyxJQUFJOEIscUNBQUosRUFBdkMsQ0FBUDtBQUNIOzs7aUNBRVk5QixTLEVBQXNEO0FBQy9ELGFBQU8sS0FBSytCLFVBQUwsQ0FBZ0IvQixTQUFoQixFQUEyQixPQUEzQixFQUFvQyxJQUFJZ0MsNEJBQUosRUFBcEMsQ0FBUDtBQUNIOzs7O0VBN0M2Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXJMaW5lIGZyb20gJy4uL09yZGVyTGluZSc7XG5pbXBvcnQgT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXJMaW5lJztcbmltcG9ydCBPcmRlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2snO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvU3RvY2tUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyTGluZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gb3JkZXJMaW5lIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3JkZXJMaW5lXG4gICAgICovXG4gICAgbWFwRGF0YShvcmRlckxpbmU6IE9yZGVyTGluZUludGVyZmFjZSk6IE9yZGVyTGluZSB7XG4gICAgICAgIHJldHVybiBuZXcgT3JkZXJMaW5lKHtcbiAgICAgICAgICAgIGlkOiBvcmRlckxpbmUuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG9yZGVyTGluZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG9yZGVyTGluZS51cGRhdGVkQXQsXG4gICAgICAgICAgICBpc1NoaXBwaW5nOiBvcmRlckxpbmUuaXNTaGlwcGluZyxcbiAgICAgICAgICAgIGlzTWFudWFsOiBvcmRlckxpbmUuaXNNYW51YWwsXG4gICAgICAgICAgICBxdWFudGl0eTogb3JkZXJMaW5lLnF1YW50aXR5LFxuICAgICAgICAgICAgbGluZVRvdGFsOiBvcmRlckxpbmUubGluZVRvdGFsLFxuICAgICAgICAgICAgdW5pdFByaWNlOiBvcmRlckxpbmUudW5pdFByaWNlLFxuICAgICAgICAgICAgdW5pdFF0eTogb3JkZXJMaW5lLnVuaXRRdHksXG4gICAgICAgICAgICBkaXNjb3VudFRvdGFsOiBvcmRlckxpbmUuZGlzY291bnRUb3RhbCxcbiAgICAgICAgICAgIGRlbGl2ZXJ5VG90YWw6IG9yZGVyTGluZS5kZWxpdmVyeVRvdGFsLFxuICAgICAgICAgICAgdGF4VG90YWw6IG9yZGVyTGluZS50YXhUb3RhbCxcbiAgICAgICAgICAgIHRheFJhdGU6IG9yZGVyTGluZS50YXhSYXRlLFxuICAgICAgICAgICAgc2t1OiBvcmRlckxpbmUuc2t1LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG9yZGVyTGluZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9wdGlvbjogb3JkZXJMaW5lLm9wdGlvbixcbiAgICAgICAgICAgIGRlbGV0ZWRBdDogb3JkZXJMaW5lLmRlbGV0ZWRBdCxcbiAgICAgICAgICAgIG1ldGE6IG9yZGVyTGluZS5tZXRhLFxuICAgICAgICAgICAgc3RhdHVzSWQ6IG9yZGVyTGluZS5zdGF0dXNJZCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG9yZGVyTGluZS5tZXNzYWdlLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgb3JkZXI6IHRoaXMuaW5jbHVkZU9yZGVyKG9yZGVyTGluZSksXG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudDogdGhpcy5pbmNsdWRlUHJvZHVjdFZhcmlhbnQob3JkZXJMaW5lKSxcbiAgICAgICAgICAgIHN0b2NrOiB0aGlzLmluY2x1ZGVTdG9jayhvcmRlckxpbmUpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXIob3JkZXJMaW5lOiBPcmRlckxpbmVJbnRlcmZhY2UpOiBPcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyTGluZSwgJ29yZGVyJywgbmV3IE9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RWYXJpYW50KG9yZGVyTGluZTogT3JkZXJMaW5lSW50ZXJmYWNlKTogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlckxpbmUsICdwcm9kdWN0VmFyaWFudCcsIG5ldyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdG9jayhvcmRlckxpbmU6IE9yZGVyTGluZUludGVyZmFjZSk6IEFycmF5PFN0b2NrSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ob3JkZXJMaW5lLCAnc3RvY2snLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=