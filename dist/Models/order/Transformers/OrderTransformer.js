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
        weight: order.weight,
        isPastDueDispatch: order.isPastDueDispatch,
        isPastDueDelivery: order.isPastDueDelivery
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwicmVmZXJlbmNlIiwidHJhY2tpbmdObyIsImRpc3BhdGNoZWRBdCIsImRpc3BhdGNoQnkiLCJvbkhvbGRQaWNraW5nQXQiLCJvbkhvbGRQYWNraW5nQXQiLCJjdXJyZW5jeSIsInBsYWNlZEF0Iiwibm90ZXMiLCJiaWxsaW5nUGhvbmUiLCJiaWxsaW5nRW1haWwiLCJiaWxsaW5nRmlyc3RuYW1lIiwiYmlsbGluZ0xhc3RuYW1lIiwiYmlsbGluZ0FkZHJlc3MiLCJiaWxsaW5nQWRkcmVzc1R3byIsImJpbGxpbmdBZGRyZXNzVGhyZWUiLCJiaWxsaW5nQ2l0eSIsImJpbGxpbmdDb3VudHkiLCJiaWxsaW5nU3RhdGUiLCJiaWxsaW5nQ291bnRyeSIsImJpbGxpbmdaaXAiLCJzaGlwcGluZ1Bob25lIiwic2hpcHBpbmdFbWFpbCIsInNoaXBwaW5nRmlyc3RuYW1lIiwic2hpcHBpbmdMYXN0bmFtZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nQWRkcmVzc1R3byIsInNoaXBwaW5nQWRkcmVzc1RocmVlIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdDb3VudHkiLCJzaGlwcGluZ1N0YXRlIiwic2hpcHBpbmdDb3VudHJ5Iiwic2hpcHBpbmdaaXAiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJtZXRhIiwicmVzb3VyY2VUeXBlIiwib25GaXJzdE9yZGVyIiwic2hpcHBpbmdTZXJ2aWNlSWQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJiYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwiYXNzaWduZWUiLCJpbmNsdWRlQXNzaWduZWUiLCJsaW5lcyIsImluY2x1ZGVPcmRlckxpbmVzIiwiaXNHaWZ0Iiwic3RhdHVzSWQiLCJkZWxpdmVyeU1ldGhvZCIsImhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4iLCJ0b2tlbnNUb3RhbCIsImlzRmlyc3RPcmRlciIsImV4cGVjdGVkRGVsaXZlcnlEYXRlIiwid2VpZ2h0IiwiaXNQYXN0RHVlRGlzcGF0Y2giLCJpc1Bhc3REdWVEZWxpdmVyeSIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiT3JkZXJMaW5lVHJhbnNmb3JtZXIiLCJBc3NpZ25lZVRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsSyxFQUE4QjtBQUNsQyxhQUFPLElBQUlDLGlCQUFKLENBQVU7QUFDYkMsUUFBQUEsRUFBRSxFQUFFRixLQUFLLENBQUNFLEVBREc7QUFFYkMsUUFBQUEsU0FBUyxFQUFFSCxLQUFLLENBQUNHLFNBRko7QUFHYkMsUUFBQUEsU0FBUyxFQUFFSixLQUFLLENBQUNJLFNBSEo7QUFJYkMsUUFBQUEsY0FBYyxFQUFFTCxLQUFLLENBQUNLLGNBSlQ7QUFLYkMsUUFBQUEsa0JBQWtCLEVBQUVOLEtBQUssQ0FBQ00sa0JBTGI7QUFNYkMsUUFBQUEsU0FBUyxFQUFFUCxLQUFLLENBQUNPLFNBTko7QUFPYkMsUUFBQUEsVUFBVSxFQUFFUixLQUFLLENBQUNRLFVBUEw7QUFRYkMsUUFBQUEsWUFBWSxFQUFFVCxLQUFLLENBQUNTLFlBUlA7QUFTYkMsUUFBQUEsVUFBVSxFQUFFVixLQUFLLENBQUNVLFVBVEw7QUFVYkMsUUFBQUEsZUFBZSxFQUFFWCxLQUFLLENBQUNXLGVBVlY7QUFXYkMsUUFBQUEsZUFBZSxFQUFFWixLQUFLLENBQUNZLGVBWFY7QUFZYkMs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LHlCQUF5QixFQUFFekQsS0FBSyxDQUFDeUQseUJBdkRwQjtBQXdEYkMsUUFBQUEsV0FBVyxFQUFFMUQsS0FBSyxDQUFDMEQsV0F4RE47QUF5RGJDLFFBQUFBLFlBQVksRUFBRTNELEtBQUssQ0FBQzJELFlBekRQO0FBMERiQyxRQUFBQSxvQkFBb0IsRUFBRTVELEtBQUssQ0FBQzRELG9CQTFEZjtBQTJEYkMsUUFBQUEsTUFBTSxFQUFFN0QsS0FBSyxDQUFDNkQsTUEzREQ7QUE0RGJDLFFBQUFBLGlCQUFpQixFQUFFOUQsS0FBSyxDQUFDOEQsaUJBNURaO0FBNkRiQyxRQUFBQSxpQkFBaUIsRUFBRS9ELEtBQUssQ0FBQytEO0FBN0RaLE9BQVYsQ0FBUDtBQStESDs7O2dDQUVXL0QsSyxFQUE2QztBQUNyRCxhQUFPLEtBQUtnRSxJQUFMLENBQVVoRSxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCLElBQUlpRSwyQkFBSixFQUF6QixDQUFQO0FBQ0g7OztzQ0FFaUJqRSxLLEVBQWtEO0FBQ2hFLGFBQU8sS0FBS2tFLFVBQUwsQ0FBZ0JsRSxLQUFoQixFQUF1QixPQUF2QixFQUFnQyxJQUFJbUUsZ0NBQUosRUFBaEMsQ0FBUDtBQUNIOzs7b0NBRWVuRSxLLEVBQWlEO0FBQzdELGFBQU8sS0FBS2dFLElBQUwsQ0FBVWhFLEtBQVYsRUFBaUIsVUFBakIsRUFBNkIsSUFBSW9FLCtCQUFKLEVBQTdCLENBQVA7QUFDSDs7O2tDQUVhcEUsSyxFQUErQztBQUN6RCxhQUFPLEtBQUtnRSxJQUFMLENBQVVoRSxLQUFWLEVBQWlCLFFBQWpCLEVBQTJCLElBQUlxRSw2QkFBSixFQUEzQixDQUFQO0FBQ0g7Ozs7RUF0RnlDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlciBmcm9tICcuLi9PcmRlcic7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXJMaW5lJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBBc3NpZ25lZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL0Fzc2lnbmVlJztcbmltcG9ydCB7IEJhc2tldCBhcyBCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IE9yZGVyTGluZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL29yZGVyL1RyYW5zZm9ybWVycy9PcmRlckxpbmVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQXNzaWduZWVUcmFuc2Zvcm1lciBmcm9tICcuL0Fzc2lnbmVlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2tldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0VHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gb3JkZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcmRlclxuICAgICAqL1xuICAgIG1hcERhdGEob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogT3JkZXIge1xuICAgICAgICByZXR1cm4gbmV3IE9yZGVyKHtcbiAgICAgICAgICAgIGlkOiBvcmRlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogb3JkZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBvcmRlci51cGRhdGVkQXQsXG4gICAgICAgICAgICBzaGlwcGluZ01ldGhvZDogb3JkZXIuc2hpcHBpbmdNZXRob2QsXG4gICAgICAgICAgICBzaGlwcGluZ1ByZWZlcmVuY2U6IG9yZGVyLnNoaXBwaW5nUHJlZmVyZW5jZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogb3JkZXIucmVmZXJlbmNlLFxuICAgICAgICAgICAgdHJhY2tpbmdObzogb3JkZXIudHJhY2tpbmdObyxcbiAgICAgICAgICAgIGRpc3BhdGNoZWRBdDogb3JkZXIuZGlzcGF0Y2hlZEF0LFxuICAgICAgICAgICAgZGlzcGF0Y2hCeTogb3JkZXIuZGlzcGF0Y2hCeSxcbiAgICAgICAgICAgIG9uSG9sZFBpY2tpbmdBdDogb3JkZXIub25Ib2xkUGlja2luZ0F0LFxuICAgICAgICAgICAgb25Ib2xkUGFja2luZ0F0OiBvcmRlci5vbkhvbGRQYWNraW5nQXQsXG4gICAgICAgICAgICBjdXJyZW5jeTogb3JkZXIuY3VycmVuY3ksXG4gICAgICAgICAgICBwbGFjZWRBdDogb3JkZXIucGxhY2VkQXQsXG4gICAgICAgICAgICBub3Rlczogb3JkZXIubm90ZXMsXG4gICAgICAgICAgICBiaWxsaW5nUGhvbmU6IG9yZGVyLmJpbGxpbmdQaG9uZSxcbiAgICAgICAgICAgIGJpbGxpbmdFbWFpbDogb3JkZXIuYmlsbGluZ0VtYWlsLFxuICAgICAgICAgICAgYmlsbGluZ0ZpcnN0bmFtZTogb3JkZXIuYmlsbGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdMYXN0bmFtZTogb3JkZXIuYmlsbGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3M6IG9yZGVyLmJpbGxpbmdBZGRyZXNzLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUd286IG9yZGVyLmJpbGxpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUaHJlZTogb3JkZXIuYmlsbGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIGJpbGxpbmdDaXR5OiBvcmRlci5iaWxsaW5nQ2l0eSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHk6IG9yZGVyLmJpbGxpbmdDb3VudHksXG4gICAgICAgICAgICBiaWxsaW5nU3RhdGU6IG9yZGVyLmJpbGxpbmdTdGF0ZSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHJ5OiBvcmRlci5iaWxsaW5nQ291bnRyeSxcbiAgICAgICAgICAgIGJpbGxpbmdaaXA6IG9yZGVyLmJpbGxpbmdaaXAsXG4gICAgICAgICAgICBzaGlwcGluZ1Bob25lOiBvcmRlci5zaGlwcGluZ1Bob25lLFxuICAgICAgICAgICAgc2hpcHBpbmdFbWFpbDogb3JkZXIuc2hpcHBpbmdFbWFpbCxcbiAgICAgICAgICAgIHNoaXBwaW5nRmlyc3RuYW1lOiBvcmRlci5zaGlwcGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nTGFzdG5hbWU6IG9yZGVyLnNoaXBwaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IG9yZGVyLnNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1R3bzogb3JkZXIuc2hpcHBpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVGhyZWU6IG9yZGVyLnNoaXBwaW5nQWRkcmVzc1RocmVlLFxuICAgICAgICAgICAgc2hpcHBpbmdDaXR5OiBvcmRlci5zaGlwcGluZ0NpdHksXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50eTogb3JkZXIuc2hpcHBpbmdDb3VudHksXG4gICAgICAgICAgICBzaGlwcGluZ1N0YXRlOiBvcmRlci5zaGlwcGluZ1N0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHJ5OiBvcmRlci5zaGlwcGluZ0NvdW50cnksXG4gICAgICAgICAgICBzaGlwcGluZ1ppcDogb3JkZXIuc2hpcHBpbmdaaXAsXG4gICAgICAgICAgICBjb250YWN0RW1haWw6IG9yZGVyLmNvbnRhY3RFbWFpbCxcbiAgICAgICAgICAgIGNvbnRhY3RQaG9uZTogb3JkZXIuY29udGFjdFBob25lLFxuICAgICAgICAgICAgbWV0YTogb3JkZXIubWV0YSxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogb3JkZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgb25GaXJzdE9yZGVyOiBvcmRlci5vbkZpcnN0T3JkZXIsXG4gICAgICAgICAgICBzaGlwcGluZ1NlcnZpY2VJZDogb3JkZXIuc2hpcHBpbmdTZXJ2aWNlSWQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKG9yZGVyKSxcbiAgICAgICAgICAgIGJhc2tldDogdGhpcy5pbmNsdWRlQmFza2V0KG9yZGVyKSxcbiAgICAgICAgICAgIGFzc2lnbmVlOiB0aGlzLmluY2x1ZGVBc3NpZ25lZShvcmRlciksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgbGluZXM6IHRoaXMuaW5jbHVkZU9yZGVyTGluZXMob3JkZXIpLFxuICAgICAgICAgICAgLy8gYWNjZXNzb3JzXG4gICAgICAgICAgICBpc0dpZnQ6IG9yZGVyLmlzR2lmdCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiBvcmRlci5zdGF0dXNJZCxcbiAgICAgICAgICAgIGRlbGl2ZXJ5TWV0aG9kOiBvcmRlci5kZWxpdmVyeU1ldGhvZCxcbiAgICAgICAgICAgIGhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW46IG9yZGVyLmhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4sXG4gICAgICAgICAgICB0b2tlbnNUb3RhbDogb3JkZXIudG9rZW5zVG90YWwsXG4gICAgICAgICAgICBpc0ZpcnN0T3JkZXI6IG9yZGVyLmlzRmlyc3RPcmRlcixcbiAgICAgICAgICAgIGV4cGVjdGVkRGVsaXZlcnlEYXRlOiBvcmRlci5leHBlY3RlZERlbGl2ZXJ5RGF0ZSxcbiAgICAgICAgICAgIHdlaWdodDogb3JkZXIud2VpZ2h0LFxuICAgICAgICAgICAgaXNQYXN0RHVlRGlzcGF0Y2g6IG9yZGVyLmlzUGFzdER1ZURpc3BhdGNoLFxuICAgICAgICAgICAgaXNQYXN0RHVlRGVsaXZlcnk6IG9yZGVyLmlzUGFzdER1ZURlbGl2ZXJ5LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXIsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJMaW5lcyhvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBBcnJheTxPcmRlckxpbmVJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihvcmRlciwgJ2xpbmVzJywgbmV3IE9yZGVyTGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NpZ25lZShvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBBc3NpZ25lZUludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnYXNzaWduZWUnLCBuZXcgQXNzaWduZWVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQmFza2V0KG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEJhc2tldEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnYmFza2V0JywgbmV3IEJhc2tldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==