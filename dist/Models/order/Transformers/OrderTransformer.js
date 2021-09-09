"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Order = _interopRequireDefault(require("../Order"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _OrderLineTransformer = _interopRequireDefault(require("../../order/Transformers/OrderLineTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _AssigneeTransformer = _interopRequireDefault(require("./AssigneeTransformer"));

var _BasketTransformer = _interopRequireDefault(require("../../basket/Transformers/BasketTransformer"));

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

var OrderTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(OrderTransformer, _BaseTransformer);

  function OrderTransformer() {
    _classCallCheck(this, OrderTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderTransformer).apply(this, arguments));
  }

  _createClass(OrderTransformer, [{
    key: "mapData",

    /**
     * Map an order response
     *
     * @param order
     */
    value: function mapData(order) {
      return new _Order["default"]({
        id: order.id,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        shippingMethod: order.shippingMethod,
        shippingPreference: order.shippingPreference,
        reference: order.reference,
        trackingNo: order.trackingNo,
        dispatchedAt: order.dispatchedAt,
        dispatchBy: order.dispatchBy,
        onHoldPickingAt: order.onHoldPickingAt,
        onHoldPackingAt: order.onHoldPackingAt,
        currency: order.currency,
        placedAt: order.placedAt,
        notes: order.notes,
        billingPhone: order.billingPhone,
        billingEmail: order.billingEmail,
        billingFirstname: order.billingFirstname,
        billingLastname: order.billingLastname,
        billingAddress: order.billingAddress,
        billingAddressTwo: order.billingAddressTwo,
        billingAddressThree: order.billingAddressThree,
        billingCity: order.billingCity,
        billingCounty: order.billingCounty,
        billingState: order.billingState,
        billingCountry: order.billingCountry,
        billingZip: order.billingZip,
        shippingPhone: order.shippingPhone,
        shippingEmail: order.shippingEmail,
        shippingFirstname: order.shippingFirstname,
        shippingLastname: order.shippingLastname,
        shippingAddress: order.shippingAddress,
        shippingAddressTwo: order.shippingAddressTwo,
        shippingAddressThree: order.shippingAddressThree,
        shippingCity: order.shippingCity,
        shippingCounty: order.shippingCounty,
        shippingState: order.shippingState,
        shippingCountry: order.shippingCountry,
        shippingZip: order.shippingZip,
        contactEmail: order.contactEmail,
        contactPhone: order.contactPhone,
        meta: order.meta,
        resourceType: order.resourceType,
        onFirstOrder: order.onFirstOrder,
        shippingServiceId: order.shippingServiceId,
        // belongs to
        user: this.includeUser(order),
        basket: this.includeBasket(order),
        assignee: this.includeAssignee(order),
        // has many
        lines: this.includeOrderLines(order),
        // accessors
        isGift: order.isGift,
        statusId: order.statusId,
        deliveryMethod: order.deliveryMethod,
        hasReusablePackagingOptIn: order.hasReusablePackagingOptIn,
        tokensTotal: order.tokensTotal,
        isFirstOrder: order.isFirstOrder,
        expectedDeliveryDate: order.expectedDeliveryDate,
        weight: order.weight
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(order) {
      return this.item(order, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeOrderLines",
    value: function includeOrderLines(order) {
      return this.collection(order, 'lines', new _OrderLineTransformer["default"]());
    }
  }, {
    key: "includeAssignee",
    value: function includeAssignee(order) {
      return this.item(order, 'assignee', new _AssigneeTransformer["default"]());
    }
  }, {
    key: "includeBasket",
    value: function includeBasket(order) {
      return this.item(order, 'basket', new _BasketTransformer["default"]());
    }
  }]);

  return OrderTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = OrderTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwicmVmZXJlbmNlIiwidHJhY2tpbmdObyIsImRpc3BhdGNoZWRBdCIsImRpc3BhdGNoQnkiLCJvbkhvbGRQaWNraW5nQXQiLCJvbkhvbGRQYWNraW5nQXQiLCJjdXJyZW5jeSIsInBsYWNlZEF0Iiwibm90ZXMiLCJiaWxsaW5nUGhvbmUiLCJiaWxsaW5nRW1haWwiLCJiaWxsaW5nRmlyc3RuYW1lIiwiYmlsbGluZ0xhc3RuYW1lIiwiYmlsbGluZ0FkZHJlc3MiLCJiaWxsaW5nQWRkcmVzc1R3byIsImJpbGxpbmdBZGRyZXNzVGhyZWUiLCJiaWxsaW5nQ2l0eSIsImJpbGxpbmdDb3VudHkiLCJiaWxsaW5nU3RhdGUiLCJiaWxsaW5nQ291bnRyeSIsImJpbGxpbmdaaXAiLCJzaGlwcGluZ1Bob25lIiwic2hpcHBpbmdFbWFpbCIsInNoaXBwaW5nRmlyc3RuYW1lIiwic2hpcHBpbmdMYXN0bmFtZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nQWRkcmVzc1R3byIsInNoaXBwaW5nQWRkcmVzc1RocmVlIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdDb3VudHkiLCJzaGlwcGluZ1N0YXRlIiwic2hpcHBpbmdDb3VudHJ5Iiwic2hpcHBpbmdaaXAiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJtZXRhIiwicmVzb3VyY2VUeXBlIiwib25GaXJzdE9yZGVyIiwic2hpcHBpbmdTZXJ2aWNlSWQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJiYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwiYXNzaWduZWUiLCJpbmNsdWRlQXNzaWduZWUiLCJsaW5lcyIsImluY2x1ZGVPcmRlckxpbmVzIiwiaXNHaWZ0Iiwic3RhdHVzSWQiLCJkZWxpdmVyeU1ldGhvZCIsImhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4iLCJ0b2tlbnNUb3RhbCIsImlzRmlyc3RPcmRlciIsImV4cGVjdGVkRGVsaXZlcnlEYXRlIiwid2VpZ2h0IiwiaXRlbSIsIlVzZXJUcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJPcmRlckxpbmVUcmFuc2Zvcm1lciIsIkFzc2lnbmVlVHJhbnNmb3JtZXIiLCJCYXNrZXRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxLLEVBQThCO0FBQ2xDLGFBQU8sSUFBSUMsaUJBQUosQ0FBVTtBQUNiQyxRQUFBQSxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFERztBQUViQyxRQUFBQSxTQUFTLEVBQUVILEtBQUssQ0FBQ0csU0FGSjtBQUdiQyxRQUFBQSxTQUFTLEVBQUVKLEtBQUssQ0FBQ0ksU0FISjtBQUliQyxRQUFBQSxjQUFjLEVBQUVMLEtBQUssQ0FBQ0ssY0FKVDtBQUtiQyxRQUFBQSxrQkFBa0IsRUFBRU4sS0FBSyxDQUFDTSxrQkFMYjtBQU1iQyxRQUFBQSxTQUFTLEVBQUVQLEtBQUssQ0FBQ08sU0FOSjtBQU9iQyxRQUFBQSxVQUFVLEVBQUVSLEtBQUssQ0FBQ1EsVUFQTDtBQVFiQyxRQUFBQSxZQUFZLEVBQUVULEtBQUssQ0FBQ1MsWUFSUDtBQVNiQyxRQUFBQSxVQUFVLEVBQUVWLEtBQUssQ0FBQ1UsVUFUTDtBQVViQyxRQUFBQSxlQUFlLEVBQUVYLEtBQUssQ0FBQ1csZUFWVjtBQVdiQyxRQUFBQSxlQUFlLEVBQUVaLEtBQUssQ0FBQ1ksZUFYVjtBQVliQyxRQUFBQSxRQUFRLEVBQUViLEtBQUssQ0FBQ2EsUUFaSDtBQWFiQyxR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QyxRQUFBQSxXQUFXLEVBQUUxRCxLQUFLLENBQUMwRCxXQXhETjtBQXlEYkMsUUFBQUEsWUFBWSxFQUFFM0QsS0FBSyxDQUFDMkQsWUF6RFA7QUEwRGJDLFFBQUFBLG9CQUFvQixFQUFFNUQsS0FBSyxDQUFDNEQsb0JBMURmO0FBMkRiQyxRQUFBQSxNQUFNLEVBQUU3RCxLQUFLLENBQUM2RDtBQTNERCxPQUFWLENBQVA7QUE2REg7OztnQ0FFVzdELEssRUFBNkM7QUFDckQsYUFBTyxLQUFLOEQsSUFBTCxDQUFVOUQsS0FBVixFQUFpQixNQUFqQixFQUF5QixJQUFJK0QsMkJBQUosRUFBekIsQ0FBUDtBQUNIOzs7c0NBRWlCL0QsSyxFQUFrRDtBQUNoRSxhQUFPLEtBQUtnRSxVQUFMLENBQWdCaEUsS0FBaEIsRUFBdUIsT0FBdkIsRUFBZ0MsSUFBSWlFLGdDQUFKLEVBQWhDLENBQVA7QUFDSDs7O29DQUVlakUsSyxFQUFpRDtBQUM3RCxhQUFPLEtBQUs4RCxJQUFMLENBQVU5RCxLQUFWLEVBQWlCLFVBQWpCLEVBQTZCLElBQUlrRSwrQkFBSixFQUE3QixDQUFQO0FBQ0g7OztrQ0FFYWxFLEssRUFBK0M7QUFDekQsYUFBTyxLQUFLOEQsSUFBTCxDQUFVOUQsS0FBVixFQUFpQixRQUFqQixFQUEyQixJQUFJbUUsNkJBQUosRUFBM0IsQ0FBUDtBQUNIOzs7O0VBcEZ5Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXIgZnJvbSAnLi4vT3JkZXInO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyTGluZSc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgQXNzaWduZWVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9Bc3NpZ25lZSc7XG5pbXBvcnQgeyBCYXNrZXQgYXMgQmFza2V0SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iYXNrZXQvQmFza2V0JztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBPcmRlckxpbmVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJMaW5lVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFzc2lnbmVlVHJhbnNmb3JtZXIgZnJvbSAnLi9Bc3NpZ25lZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNrZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iYXNrZXQvVHJhbnNmb3JtZXJzL0Jhc2tldFRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIG9yZGVyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3JkZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IE9yZGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPcmRlcih7XG4gICAgICAgICAgICBpZDogb3JkZXIuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG9yZGVyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogb3JkZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgc2hpcHBpbmdNZXRob2Q6IG9yZGVyLnNoaXBwaW5nTWV0aG9kLFxuICAgICAgICAgICAgc2hpcHBpbmdQcmVmZXJlbmNlOiBvcmRlci5zaGlwcGluZ1ByZWZlcmVuY2UsXG4gICAgICAgICAgICByZWZlcmVuY2U6IG9yZGVyLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHRyYWNraW5nTm86IG9yZGVyLnRyYWNraW5nTm8sXG4gICAgICAgICAgICBkaXNwYXRjaGVkQXQ6IG9yZGVyLmRpc3BhdGNoZWRBdCxcbiAgICAgICAgICAgIGRpc3BhdGNoQnk6IG9yZGVyLmRpc3BhdGNoQnksXG4gICAgICAgICAgICBvbkhvbGRQaWNraW5nQXQ6IG9yZGVyLm9uSG9sZFBpY2tpbmdBdCxcbiAgICAgICAgICAgIG9uSG9sZFBhY2tpbmdBdDogb3JkZXIub25Ib2xkUGFja2luZ0F0LFxuICAgICAgICAgICAgY3VycmVuY3k6IG9yZGVyLmN1cnJlbmN5LFxuICAgICAgICAgICAgcGxhY2VkQXQ6IG9yZGVyLnBsYWNlZEF0LFxuICAgICAgICAgICAgbm90ZXM6IG9yZGVyLm5vdGVzLFxuICAgICAgICAgICAgYmlsbGluZ1Bob25lOiBvcmRlci5iaWxsaW5nUGhvbmUsXG4gICAgICAgICAgICBiaWxsaW5nRW1haWw6IG9yZGVyLmJpbGxpbmdFbWFpbCxcbiAgICAgICAgICAgIGJpbGxpbmdGaXJzdG5hbWU6IG9yZGVyLmJpbGxpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nTGFzdG5hbWU6IG9yZGVyLmJpbGxpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiBvcmRlci5iaWxsaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVHdvOiBvcmRlci5iaWxsaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU6IG9yZGVyLmJpbGxpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBiaWxsaW5nQ2l0eTogb3JkZXIuYmlsbGluZ0NpdHksXG4gICAgICAgICAgICBiaWxsaW5nQ291bnR5OiBvcmRlci5iaWxsaW5nQ291bnR5LFxuICAgICAgICAgICAgYmlsbGluZ1N0YXRlOiBvcmRlci5iaWxsaW5nU3RhdGUsXG4gICAgICAgICAgICBiaWxsaW5nQ291bnRyeTogb3JkZXIuYmlsbGluZ0NvdW50cnksXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBvcmRlci5iaWxsaW5nWmlwLFxuICAgICAgICAgICAgc2hpcHBpbmdQaG9uZTogb3JkZXIuc2hpcHBpbmdQaG9uZSxcbiAgICAgICAgICAgIHNoaXBwaW5nRW1haWw6IG9yZGVyLnNoaXBwaW5nRW1haWwsXG4gICAgICAgICAgICBzaGlwcGluZ0ZpcnN0bmFtZTogb3JkZXIuc2hpcHBpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0xhc3RuYW1lOiBvcmRlci5zaGlwcGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBvcmRlci5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUd286IG9yZGVyLnNoaXBwaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1RocmVlOiBvcmRlci5zaGlwcGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ2l0eTogb3JkZXIuc2hpcHBpbmdDaXR5LFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHk6IG9yZGVyLnNoaXBwaW5nQ291bnR5LFxuICAgICAgICAgICAgc2hpcHBpbmdTdGF0ZTogb3JkZXIuc2hpcHBpbmdTdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnRyeTogb3JkZXIuc2hpcHBpbmdDb3VudHJ5LFxuICAgICAgICAgICAgc2hpcHBpbmdaaXA6IG9yZGVyLnNoaXBwaW5nWmlwLFxuICAgICAgICAgICAgY29udGFjdEVtYWlsOiBvcmRlci5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IG9yZGVyLmNvbnRhY3RQaG9uZSxcbiAgICAgICAgICAgIG1ldGE6IG9yZGVyLm1ldGEsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IG9yZGVyLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIG9uRmlyc3RPcmRlcjogb3JkZXIub25GaXJzdE9yZGVyLFxuICAgICAgICAgICAgc2hpcHBpbmdTZXJ2aWNlSWQ6IG9yZGVyLnNoaXBwaW5nU2VydmljZUlkLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgdXNlcjogdGhpcy5pbmNsdWRlVXNlcihvcmRlciksXG4gICAgICAgICAgICBiYXNrZXQ6IHRoaXMuaW5jbHVkZUJhc2tldChvcmRlciksXG4gICAgICAgICAgICBhc3NpZ25lZTogdGhpcy5pbmNsdWRlQXNzaWduZWUob3JkZXIpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmluY2x1ZGVPcmRlckxpbmVzKG9yZGVyKSxcbiAgICAgICAgICAgIC8vIGFjY2Vzc29yc1xuICAgICAgICAgICAgaXNHaWZ0OiBvcmRlci5pc0dpZnQsXG4gICAgICAgICAgICBzdGF0dXNJZDogb3JkZXIuc3RhdHVzSWQsXG4gICAgICAgICAgICBkZWxpdmVyeU1ldGhvZDogb3JkZXIuZGVsaXZlcnlNZXRob2QsXG4gICAgICAgICAgICBoYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluOiBvcmRlci5oYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluLFxuICAgICAgICAgICAgdG9rZW5zVG90YWw6IG9yZGVyLnRva2Vuc1RvdGFsLFxuICAgICAgICAgICAgaXNGaXJzdE9yZGVyOiBvcmRlci5pc0ZpcnN0T3JkZXIsXG4gICAgICAgICAgICBleHBlY3RlZERlbGl2ZXJ5RGF0ZTogb3JkZXIuZXhwZWN0ZWREZWxpdmVyeURhdGUsXG4gICAgICAgICAgICB3ZWlnaHQ6IG9yZGVyLndlaWdodCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyTGluZXMob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogQXJyYXk8T3JkZXJMaW5lSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ob3JkZXIsICdsaW5lcycsIG5ldyBPcmRlckxpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzaWduZWUob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogQXNzaWduZWVJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ2Fzc2lnbmVlJywgbmV3IEFzc2lnbmVlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUJhc2tldChvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBCYXNrZXRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ2Jhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=