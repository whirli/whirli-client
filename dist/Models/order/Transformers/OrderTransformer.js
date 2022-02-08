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

var _ShippingManifestTransformer = _interopRequireDefault(require("../../delivery/Transformers/ShippingManifestTransformer"));

var _GiftTransformer = _interopRequireDefault(require("../../gift/Transformers/GiftTransformer"));

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
        pickingAt: order.pickingAt,
        pickedAt: order.pickedAt,
        packingAt: order.packingAt,
        packedAt: order.packedAt,
        placedAt: order.placedAt,
        onHoldPickingAt: order.onHoldPickingAt,
        onHoldPackingAt: order.onHoldPackingAt,
        dispatchedAt: order.dispatchedAt,
        completedAt: order.completedAt,
        deletedAt: order.deletedAt,
        shippingMethod: order.shippingMethod,
        shippingPreference: order.shippingPreference,
        notes: order.notes,
        currency: order.currency,
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
        trackingNo: order.trackingNo,
        reference: order.reference,
        meta: order.meta,
        expectedDeliveryDate: order.expectedDeliveryDate,
        dispatchBy: order.dispatchBy,
        resourceType: order.resourceType,
        binLocation: order.binLocation,
        // relations
        basket: this.includeBasket(order),
        user: this.includeUser(order),
        assignee: this.includeAssignee(order),
        lines: this.includeOrderLines(order),
        shippingManifest: this.includeShippingManifest(order),
        gift: this.includeGift(order),
        // accessors
        isGift: order.isGift,
        statusId: order.statusId,
        deliveryMethod: order.deliveryMethod,
        hasReusablePackagingOptIn: order.hasReusablePackagingOptIn,
        tokensTotal: order.tokensTotal,
        onFirstOrder: order.onFirstOrder,
        isFirstOrder: order.isFirstOrder,
        weight: order.weight,
        isPastDueDispatch: order.isPastDueDispatch,
        isPastDueDelivery: order.isPastDueDelivery,
        shippingReference: order.shippingReference,
        shippingValue: order.shippingValue,
        shippingWeight: order.shippingWeight,
        shippingNotificationEmail: order.shippingNotificationEmail
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
  }, {
    key: "includeShippingManifest",
    value: function includeShippingManifest(order) {
      return this.item(order, 'shippingManifest', new _ShippingManifestTransformer["default"]());
    }
  }, {
    key: "includeGift",
    value: function includeGift(order) {
      return this.item(order, 'gift', new _GiftTransformer["default"]());
    }
  }]);

  return OrderTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = OrderTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBpY2tpbmdBdCIsInBpY2tlZEF0IiwicGFja2luZ0F0IiwicGFja2VkQXQiLCJwbGFjZWRBdCIsIm9uSG9sZFBpY2tpbmdBdCIsIm9uSG9sZFBhY2tpbmdBdCIsImRpc3BhdGNoZWRBdCIsImNvbXBsZXRlZEF0IiwiZGVsZXRlZEF0Iiwic2hpcHBpbmdNZXRob2QiLCJzaGlwcGluZ1ByZWZlcmVuY2UiLCJub3RlcyIsImN1cnJlbmN5IiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwidHJhY2tpbmdObyIsInJlZmVyZW5jZSIsIm1ldGEiLCJleHBlY3RlZERlbGl2ZXJ5RGF0ZSIsImRpc3BhdGNoQnkiLCJyZXNvdXJjZVR5cGUiLCJiaW5Mb2NhdGlvbiIsImJhc2tldCIsImluY2x1ZGVCYXNrZXQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJhc3NpZ25lZSIsImluY2x1ZGVBc3NpZ25lZSIsImxpbmVzIiwiaW5jbHVkZU9yZGVyTGluZXMiLCJzaGlwcGluZ01hbmlmZXN0IiwiaW5jbHVkZVNoaXBwaW5nTWFuaWZlc3QiLCJnaWZ0IiwiaW5jbHVkZUdpZnQiLCJpc0dpZnQiLCJzdGF0dXNJZCIsImRlbGl2ZXJ5TWV0aG9kIiwiaGFzUmV1c2FibGVQYWNrYWdpbmdPcHRJbiIsInRva2Vuc1RvdGFsIiwib25GaXJzdE9yZGVyIiwiaXNGaXJzdE9yZGVyIiwid2VpZ2h0IiwiaXNQYXN0RHVlRGlzcGF0Y2giLCJpc1Bhc3REdWVEZWxpdmVyeSIsInNoaXBwaW5nUmVmZXJlbmNlIiwic2hpcHBpbmdWYWx1ZSIsInNoaXBwaW5nV2VpZ2h0Iiwic2hpcHBpbmdOb3RpZmljYXRpb25FbWFpbCIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiT3JkZXJMaW5lVHJhbnNmb3JtZXIiLCJBc3NpZ25lZVRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJTaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXIiLCJHaWZ0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsSyxFQUE4QjtBQUNsQyxhQUFPLElBQUlDLGlCQUFKLENBQVU7QUFDYkMsUUFBQUEsRUFBRSxFQUFFRixLQUFLLENBQUNFLEVBREc7QUFFYkMsUUFBQUEsU0FBUyxFQUFFSCxLQUFLLENBQUNHLFNBRko7QUFHYkMsUUFBQUEsU0FBUyxFQUFFSixLQUFLLENBQUNJLFNBSEo7QUFJYkMsUUFBQUEsU0FBUyxFQUFFTCxLQUFLLENBQUNLLFNBSko7QUFLYkMsUUFB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XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXJMaW5lJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBBc3NpZ25lZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL0Fzc2lnbmVlJztcbmltcG9ydCB7IEJhc2tldCBhcyBCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IE9yZGVyTGluZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL29yZGVyL1RyYW5zZm9ybWVycy9PcmRlckxpbmVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQXNzaWduZWVUcmFuc2Zvcm1lciBmcm9tICcuL0Fzc2lnbmVlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2tldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFNoaXBwaW5nTWFuaWZlc3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9kZWxpdmVyeS9TaGlwcGluZ01hbmlmZXN0SW50ZXJmYWNlJztcbmltcG9ydCBTaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1NoaXBwaW5nTWFuaWZlc3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgR2lmdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdCc7XG5pbXBvcnQgR2lmdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2dpZnQvVHJhbnNmb3JtZXJzL0dpZnRUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBvcmRlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9yZGVyXG4gICAgICovXG4gICAgbWFwRGF0YShvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBPcmRlciB7XG4gICAgICAgIHJldHVybiBuZXcgT3JkZXIoe1xuICAgICAgICAgICAgaWQ6IG9yZGVyLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBvcmRlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG9yZGVyLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHBpY2tpbmdBdDogb3JkZXIucGlja2luZ0F0LFxuICAgICAgICAgICAgcGlja2VkQXQ6IG9yZGVyLnBpY2tlZEF0LFxuICAgICAgICAgICAgcGFja2luZ0F0OiBvcmRlci5wYWNraW5nQXQsXG4gICAgICAgICAgICBwYWNrZWRBdDogb3JkZXIucGFja2VkQXQsXG4gICAgICAgICAgICBwbGFjZWRBdDogb3JkZXIucGxhY2VkQXQsXG4gICAgICAgICAgICBvbkhvbGRQaWNraW5nQXQ6IG9yZGVyLm9uSG9sZFBpY2tpbmdBdCxcbiAgICAgICAgICAgIG9uSG9sZFBhY2tpbmdBdDogb3JkZXIub25Ib2xkUGFja2luZ0F0LFxuICAgICAgICAgICAgZGlzcGF0Y2hlZEF0OiBvcmRlci5kaXNwYXRjaGVkQXQsXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogb3JkZXIuY29tcGxldGVkQXQsXG4gICAgICAgICAgICBkZWxldGVkQXQ6IG9yZGVyLmRlbGV0ZWRBdCxcbiAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kOiBvcmRlci5zaGlwcGluZ01ldGhvZCxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJlZmVyZW5jZTogb3JkZXIuc2hpcHBpbmdQcmVmZXJlbmNlLFxuICAgICAgICAgICAgbm90ZXM6IG9yZGVyLm5vdGVzLFxuICAgICAgICAgICAgY3VycmVuY3k6IG9yZGVyLmN1cnJlbmN5LFxuICAgICAgICAgICAgYmlsbGluZ1Bob25lOiBvcmRlci5iaWxsaW5nUGhvbmUsXG4gICAgICAgICAgICBiaWxsaW5nRW1haWw6IG9yZGVyLmJpbGxpbmdFbWFpbCxcbiAgICAgICAgICAgIGJpbGxpbmdGaXJzdG5hbWU6IG9yZGVyLmJpbGxpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nTGFzdG5hbWU6IG9yZGVyLmJpbGxpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiBvcmRlci5iaWxsaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVHdvOiBvcmRlci5iaWxsaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU6IG9yZGVyLmJpbGxpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBiaWxsaW5nQ2l0eTogb3JkZXIuYmlsbGluZ0NpdHksXG4gICAgICAgICAgICBiaWxsaW5nQ291bnR5OiBvcmRlci5iaWxsaW5nQ291bnR5LFxuICAgICAgICAgICAgYmlsbGluZ1N0YXRlOiBvcmRlci5iaWxsaW5nU3RhdGUsXG4gICAgICAgICAgICBiaWxsaW5nQ291bnRyeTogb3JkZXIuYmlsbGluZ0NvdW50cnksXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBvcmRlci5iaWxsaW5nWmlwLFxuICAgICAgICAgICAgc2hpcHBpbmdQaG9uZTogb3JkZXIuc2hpcHBpbmdQaG9uZSxcbiAgICAgICAgICAgIHNoaXBwaW5nRW1haWw6IG9yZGVyLnNoaXBwaW5nRW1haWwsXG4gICAgICAgICAgICBzaGlwcGluZ0ZpcnN0bmFtZTogb3JkZXIuc2hpcHBpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0xhc3RuYW1lOiBvcmRlci5zaGlwcGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBvcmRlci5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUd286IG9yZGVyLnNoaXBwaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1RocmVlOiBvcmRlci5zaGlwcGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ2l0eTogb3JkZXIuc2hpcHBpbmdDaXR5LFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHk6IG9yZGVyLnNoaXBwaW5nQ291bnR5LFxuICAgICAgICAgICAgc2hpcHBpbmdTdGF0ZTogb3JkZXIuc2hpcHBpbmdTdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnRyeTogb3JkZXIuc2hpcHBpbmdDb3VudHJ5LFxuICAgICAgICAgICAgc2hpcHBpbmdaaXA6IG9yZGVyLnNoaXBwaW5nWmlwLFxuICAgICAgICAgICAgY29udGFjdEVtYWlsOiBvcmRlci5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IG9yZGVyLmNvbnRhY3RQaG9uZSxcbiAgICAgICAgICAgIHRyYWNraW5nTm86IG9yZGVyLnRyYWNraW5nTm8sXG4gICAgICAgICAgICByZWZlcmVuY2U6IG9yZGVyLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIG1ldGE6IG9yZGVyLm1ldGEsXG4gICAgICAgICAgICBleHBlY3RlZERlbGl2ZXJ5RGF0ZTogb3JkZXIuZXhwZWN0ZWREZWxpdmVyeURhdGUsXG4gICAgICAgICAgICBkaXNwYXRjaEJ5OiBvcmRlci5kaXNwYXRjaEJ5LFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiBvcmRlci5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICBiaW5Mb2NhdGlvbjogb3JkZXIuYmluTG9jYXRpb24sXG4gICAgICAgICAgICAvLyByZWxhdGlvbnNcbiAgICAgICAgICAgIGJhc2tldDogdGhpcy5pbmNsdWRlQmFza2V0KG9yZGVyKSxcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIob3JkZXIpLFxuICAgICAgICAgICAgYXNzaWduZWU6IHRoaXMuaW5jbHVkZUFzc2lnbmVlKG9yZGVyKSxcbiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmluY2x1ZGVPcmRlckxpbmVzKG9yZGVyKSxcbiAgICAgICAgICAgIHNoaXBwaW5nTWFuaWZlc3Q6IHRoaXMuaW5jbHVkZVNoaXBwaW5nTWFuaWZlc3Qob3JkZXIpLFxuICAgICAgICAgICAgZ2lmdDogdGhpcy5pbmNsdWRlR2lmdChvcmRlciksXG4gICAgICAgICAgICAvLyBhY2Nlc3NvcnNcbiAgICAgICAgICAgIGlzR2lmdDogb3JkZXIuaXNHaWZ0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IG9yZGVyLnN0YXR1c0lkLFxuICAgICAgICAgICAgZGVsaXZlcnlNZXRob2Q6IG9yZGVyLmRlbGl2ZXJ5TWV0aG9kLFxuICAgICAgICAgICAgaGFzUmV1c2FibGVQYWNrYWdpbmdPcHRJbjogb3JkZXIuaGFzUmV1c2FibGVQYWNrYWdpbmdPcHRJbixcbiAgICAgICAgICAgIHRva2Vuc1RvdGFsOiBvcmRlci50b2tlbnNUb3RhbCxcbiAgICAgICAgICAgIG9uRmlyc3RPcmRlcjogb3JkZXIub25GaXJzdE9yZGVyLFxuICAgICAgICAgICAgaXNGaXJzdE9yZGVyOiBvcmRlci5pc0ZpcnN0T3JkZXIsXG4gICAgICAgICAgICB3ZWlnaHQ6IG9yZGVyLndlaWdodCxcbiAgICAgICAgICAgIGlzUGFzdER1ZURpc3BhdGNoOiBvcmRlci5pc1Bhc3REdWVEaXNwYXRjaCxcbiAgICAgICAgICAgIGlzUGFzdER1ZURlbGl2ZXJ5OiBvcmRlci5pc1Bhc3REdWVEZWxpdmVyeSxcbiAgICAgICAgICAgIHNoaXBwaW5nUmVmZXJlbmNlOiBvcmRlci5zaGlwcGluZ1JlZmVyZW5jZSxcbiAgICAgICAgICAgIHNoaXBwaW5nVmFsdWU6IG9yZGVyLnNoaXBwaW5nVmFsdWUsXG4gICAgICAgICAgICBzaGlwcGluZ1dlaWdodDogb3JkZXIuc2hpcHBpbmdXZWlnaHQsXG4gICAgICAgICAgICBzaGlwcGluZ05vdGlmaWNhdGlvbkVtYWlsOiBvcmRlci5zaGlwcGluZ05vdGlmaWNhdGlvbkVtYWlsLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXIsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJMaW5lcyhvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBBcnJheTxPcmRlckxpbmVJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihvcmRlciwgJ2xpbmVzJywgbmV3IE9yZGVyTGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NpZ25lZShvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBBc3NpZ25lZUludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnYXNzaWduZWUnLCBuZXcgQXNzaWduZWVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQmFza2V0KG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEJhc2tldEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnYmFza2V0JywgbmV3IEJhc2tldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTaGlwcGluZ01hbmlmZXN0KG9yZGVyOiBPcmRlckludGVyZmFjZSk6IFNoaXBwaW5nTWFuaWZlc3RJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ3NoaXBwaW5nTWFuaWZlc3QnLCBuZXcgU2hpcHBpbmdNYW5pZmVzdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVHaWZ0KG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEdpZnRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ2dpZnQnLCBuZXcgR2lmdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==