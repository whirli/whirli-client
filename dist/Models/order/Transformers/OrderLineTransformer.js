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

var OrderLineTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(OrderLineTransformer, _BaseTransformer);

  var _super = _createSuper(OrderLineTransformer);

  function OrderLineTransformer() {
    _classCallCheck(this, OrderLineTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyTGluZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIk9yZGVyTGluZVRyYW5zZm9ybWVyIiwib3JkZXJMaW5lIiwiT3JkZXJMaW5lIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJpc1NoaXBwaW5nIiwiaXNNYW51YWwiLCJxdWFudGl0eSIsImxpbmVUb3RhbCIsInVuaXRQcmljZSIsInVuaXRRdHkiLCJkaXNjb3VudFRvdGFsIiwiZGVsaXZlcnlUb3RhbCIsInRheFRvdGFsIiwidGF4UmF0ZSIsInNrdSIsImRlc2NyaXB0aW9uIiwib3B0aW9uIiwiZGVsZXRlZEF0IiwibWV0YSIsIm9yZGVyIiwiaW5jbHVkZU9yZGVyIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJpdGVtIiwiT3JkZXJUcmFuc2Zvcm1lciIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFJQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG9COzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBOzRCQUNZQyxTLEVBQTBDO0FBQzlDLGFBQU8sSUFBSUMscUJBQUosQ0FBYztBQUNqQkMsUUFBQUEsRUFBRSxFQUFFRixTQUFTLENBQUNFLEVBREc7QUFFakJDLFFBQUFBLFNBQVMsRUFBRUgsU0FBUyxDQUFDRyxTQUZKO0FBR2pCQyxRQUFBQSxTQUFTLEVBQUVKLFNBQVMsQ0FBQ0ksU0FISjtBQUlqQkMsUUFBQUEsVUFBVSxFQUFFTCxTQUFTLENBQUNLLFVBSkw7QUFLakJDLFFBQUFBLFFBQVEsRUFBRU4sU0FBUyxDQUFDTSxRQUxIO0FBTWpCQyxRQUFBQSxRQUFRLEVBQUVQLFNBQVMsQ0FBQ08sUUFOSDtBQU9qQkMsUUFBQUEsU0FBUyxFQUFFUixTQUFTLENBQUNRLFNBUEo7QUFRakJDLFFBQUFBLFNBQVMsRUFBRVQsU0FBUyxDQUFDUyxTQVJKO0FBU2pCQyxRQUFBQSxPQUFPLEVBQUVWLFNBQVMsQ0FBQ1UsT0FURjtBQVVqQkMsUUFBQUEsYUFBYSxFQUFFWCxTQUFTLENBQUNXLGFBVlI7QUFXakJDLFFBQUFBLGFBQWEsRUFBRVosU0FBUyxDQUFDWSxhQVhSO0FBWWpCQyxRQUFBQSxRQUFRLEVBQUViLFNBQVMsQ0FBQ2EsUUFaSDtBQWFqQkMsUUFBQUEsT0FBTyxFQUFFZCxTQUFTLENBQUNjLE9BYkY7QUFjakJDLFFBQUFBLEdBQUcsRUFBRWYsU0FBUyxDQUFDZSxHQWRFO0FBZWpCQyxRQUFBQSxXQUFXLEVBQUVoQixTQUFTLENBQUNnQixXQWZOO0FBZ0JqQkMsUUFBQUEsTUFBTSxFQUFFakIsU0FBUyxDQUFDaUIsTUFoQkQ7QUFpQmpCQyxRQUFBQSxTQUFTLEVBQUVsQixTQUFTLENBQUNrQixTQWpCSjtBQWtCakJDLFFBQUFBLElBQUksRUFBRW5CLFNBQVMsQ0FBQ21CLElBbEJDO0FBbUJqQjtBQUNBQyxRQUFBQSxLQUFLLEVBQUUsS0FBS0MsWUFBTCxDQUFrQnJCLFNBQWxCLENBcEJVO0FBcUJqQnNCLFFBQUFBLGNBQWMsRUFBRSxLQUFLQyxxQkFBTCxDQUEyQnZCLFNBQTNCO0FBckJDLE9BQWQsQ0FBUDtBQXVCSDs7O2lDQUVZQSxTLEVBQXNEO0FBQy9ELGFBQU8sS0FBS3dCLElBQUwsQ0FBVXhCLFNBQVYsRUFBcUIsT0FBckIsRUFBOEIsSUFBSXlCLDRCQUFKLEVBQTlCLENBQVA7QUFDSDs7OzBDQUVxQnpCLFMsRUFBK0Q7QUFDakYsYUFBTyxLQUFLd0IsSUFBTCxDQUFVeEIsU0FBVixFQUFxQixnQkFBckIsRUFBdUMsSUFBSTBCLHFDQUFKLEVBQXZDLENBQVA7QUFDSDs7OztFQXRDNkNDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9yZGVyTGluZSBmcm9tICcuLi9PcmRlckxpbmUnO1xuaW1wb3J0IE9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyTGluZSc7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IE9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckxpbmVUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIG9yZGVyTGluZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9yZGVyTGluZVxuICAgICAqL1xuICAgIG1hcERhdGEob3JkZXJMaW5lOiBPcmRlckxpbmVJbnRlcmZhY2UpOiBPcmRlckxpbmUge1xuICAgICAgICByZXR1cm4gbmV3IE9yZGVyTGluZSh7XG4gICAgICAgICAgICBpZDogb3JkZXJMaW5lLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBvcmRlckxpbmUuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBvcmRlckxpbmUudXBkYXRlZEF0LFxuICAgICAgICAgICAgaXNTaGlwcGluZzogb3JkZXJMaW5lLmlzU2hpcHBpbmcsXG4gICAgICAgICAgICBpc01hbnVhbDogb3JkZXJMaW5lLmlzTWFudWFsLFxuICAgICAgICAgICAgcXVhbnRpdHk6IG9yZGVyTGluZS5xdWFudGl0eSxcbiAgICAgICAgICAgIGxpbmVUb3RhbDogb3JkZXJMaW5lLmxpbmVUb3RhbCxcbiAgICAgICAgICAgIHVuaXRQcmljZTogb3JkZXJMaW5lLnVuaXRQcmljZSxcbiAgICAgICAgICAgIHVuaXRRdHk6IG9yZGVyTGluZS51bml0UXR5LFxuICAgICAgICAgICAgZGlzY291bnRUb3RhbDogb3JkZXJMaW5lLmRpc2NvdW50VG90YWwsXG4gICAgICAgICAgICBkZWxpdmVyeVRvdGFsOiBvcmRlckxpbmUuZGVsaXZlcnlUb3RhbCxcbiAgICAgICAgICAgIHRheFRvdGFsOiBvcmRlckxpbmUudGF4VG90YWwsXG4gICAgICAgICAgICB0YXhSYXRlOiBvcmRlckxpbmUudGF4UmF0ZSxcbiAgICAgICAgICAgIHNrdTogb3JkZXJMaW5lLnNrdSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvcmRlckxpbmUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvcHRpb246IG9yZGVyTGluZS5vcHRpb24sXG4gICAgICAgICAgICBkZWxldGVkQXQ6IG9yZGVyTGluZS5kZWxldGVkQXQsXG4gICAgICAgICAgICBtZXRhOiBvcmRlckxpbmUubWV0YSxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIG9yZGVyOiB0aGlzLmluY2x1ZGVPcmRlcihvcmRlckxpbmUpLFxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQ6IHRoaXMuaW5jbHVkZVByb2R1Y3RWYXJpYW50KG9yZGVyTGluZSksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlcihvcmRlckxpbmU6IE9yZGVyTGluZUludGVyZmFjZSk6IE9yZGVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXJMaW5lLCAnb3JkZXInLCBuZXcgT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdFZhcmlhbnQob3JkZXJMaW5lOiBPcmRlckxpbmVJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyTGluZSwgJ3Byb2R1Y3RWYXJpYW50JywgbmV3IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19