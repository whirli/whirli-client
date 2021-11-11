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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBpY2tpbmdBdCIsInBpY2tlZEF0IiwicGFja2luZ0F0IiwicGFja2VkQXQiLCJwbGFjZWRBdCIsIm9uSG9sZFBpY2tpbmdBdCIsIm9uSG9sZFBhY2tpbmdBdCIsImRpc3BhdGNoZWRBdCIsImNvbXBsZXRlZEF0IiwiZGVsZXRlZEF0Iiwic2hpcHBpbmdNZXRob2QiLCJzaGlwcGluZ1ByZWZlcmVuY2UiLCJub3RlcyIsImN1cnJlbmN5IiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwidHJhY2tpbmdObyIsInJlZmVyZW5jZSIsIm1ldGEiLCJleHBlY3RlZERlbGl2ZXJ5RGF0ZSIsImRpc3BhdGNoQnkiLCJyZXNvdXJjZVR5cGUiLCJiYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwidXNlciIsImluY2x1ZGVVc2VyIiwiYXNzaWduZWUiLCJpbmNsdWRlQXNzaWduZWUiLCJsaW5lcyIsImluY2x1ZGVPcmRlckxpbmVzIiwic2hpcHBpbmdNYW5pZmVzdCIsImluY2x1ZGVTaGlwcGluZ01hbmlmZXN0IiwiZ2lmdCIsImluY2x1ZGVHaWZ0IiwiaXNHaWZ0Iiwic3RhdHVzSWQiLCJkZWxpdmVyeU1ldGhvZCIsImhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4iLCJ0b2tlbnNUb3RhbCIsIm9uRmlyc3RPcmRlciIsImlzRmlyc3RPcmRlciIsIndlaWdodCIsImlzUGFzdER1ZURpc3BhdGNoIiwiaXNQYXN0RHVlRGVsaXZlcnkiLCJzaGlwcGluZ1JlZmVyZW5jZSIsInNoaXBwaW5nVmFsdWUiLCJzaGlwcGluZ1dlaWdodCIsInNoaXBwaW5nTm90aWZpY2F0aW9uRW1haWwiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIk9yZGVyTGluZVRyYW5zZm9ybWVyIiwiQXNzaWduZWVUcmFuc2Zvcm1lciIsIkJhc2tldFRyYW5zZm9ybWVyIiwiU2hpcHBpbmdNYW5pZmVzdFRyYW5zZm9ybWVyIiwiR2lmdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEssRUFBOEI7QUFDbEMsYUFBTyxJQUFJQyxpQkFBSixDQUFVO0FBQ2JDLFFBQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDRSxFQURHO0FBRWJDLFFBQUFBLFNBQVMsRUFBRUgsS0FBSyxDQUFDRyxTQUZKO0FBR2JDLFFBQUFBLFNBQVMsRUFBRUosS0FBSyxDQUFDSSxTQUhKO0FBSWJDLFFBQUFBLFNBQVMsRUFBRUwsS0FBSyxDQUFDSyxTQUpKO0FBS2JDLFFBQUFBLFFBQVEsRUFBRU4s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LEVBQUV6RSxLQUFLLENBQUN5RSxpQkFwRVo7QUFxRWJDLFFBQUFBLGFBQWEsRUFBRTFFLEtBQUssQ0FBQzBFLGFBckVSO0FBc0ViQyxRQUFBQSxjQUFjLEVBQUUzRSxLQUFLLENBQUMyRSxjQXRFVDtBQXVFYkMsUUFBQUEseUJBQXlCLEVBQUU1RSxLQUFLLENBQUM0RTtBQXZFcEIsT0FBVixDQUFQO0FBeUVIOzs7Z0NBRVc1RSxLLEVBQTZDO0FBQ3JELGFBQU8sS0FBSzZFLElBQUwsQ0FBVTdFLEtBQVYsRUFBaUIsTUFBakIsRUFBeUIsSUFBSThFLDJCQUFKLEVBQXpCLENBQVA7QUFDSDs7O3NDQUVpQjlFLEssRUFBa0Q7QUFDaEUsYUFBTyxLQUFLK0UsVUFBTCxDQUFnQi9FLEtBQWhCLEVBQXVCLE9BQXZCLEVBQWdDLElBQUlnRixnQ0FBSixFQUFoQyxDQUFQO0FBQ0g7OztvQ0FFZWhGLEssRUFBaUQ7QUFDN0QsYUFBTyxLQUFLNkUsSUFBTCxDQUFVN0UsS0FBVixFQUFpQixVQUFqQixFQUE2QixJQUFJaUYsK0JBQUosRUFBN0IsQ0FBUDtBQUNIOzs7a0NBRWFqRixLLEVBQStDO0FBQ3pELGFBQU8sS0FBSzZFLElBQUwsQ0FBVTdFLEtBQVYsRUFBaUIsUUFBakIsRUFBMkIsSUFBSWtGLDZCQUFKLEVBQTNCLENBQVA7QUFDSDs7OzRDQUV1QmxGLEssRUFBeUQ7QUFDN0UsYUFBTyxLQUFLNkUsSUFBTCxDQUFVN0UsS0FBVixFQUFpQixrQkFBakIsRUFBcUMsSUFBSW1GLHVDQUFKLEVBQXJDLENBQVA7QUFDSDs7O2dDQUVXbkYsSyxFQUE2QztBQUNyRCxhQUFPLEtBQUs2RSxJQUFMLENBQVU3RSxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCLElBQUlvRiwyQkFBSixFQUF6QixDQUFQO0FBQ0g7Ozs7RUF4R3lDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlciBmcm9tICcuLi9PcmRlcic7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXJMaW5lJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBBc3NpZ25lZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL0Fzc2lnbmVlJztcbmltcG9ydCB7IEJhc2tldCBhcyBCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IE9yZGVyTGluZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL29yZGVyL1RyYW5zZm9ybWVycy9PcmRlckxpbmVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQXNzaWduZWVUcmFuc2Zvcm1lciBmcm9tICcuL0Fzc2lnbmVlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2tldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFNoaXBwaW5nTWFuaWZlc3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9kZWxpdmVyeS9TaGlwcGluZ01hbmlmZXN0SW50ZXJmYWNlJztcbmltcG9ydCBTaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1NoaXBwaW5nTWFuaWZlc3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgR2lmdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdCc7XG5pbXBvcnQgR2lmdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2dpZnQvVHJhbnNmb3JtZXJzL0dpZnRUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBvcmRlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9yZGVyXG4gICAgICovXG4gICAgbWFwRGF0YShvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBPcmRlciB7XG4gICAgICAgIHJldHVybiBuZXcgT3JkZXIoe1xuICAgICAgICAgICAgaWQ6IG9yZGVyLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBvcmRlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG9yZGVyLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHBpY2tpbmdBdDogb3JkZXIucGlja2luZ0F0LFxuICAgICAgICAgICAgcGlja2VkQXQ6IG9yZGVyLnBpY2tlZEF0LFxuICAgICAgICAgICAgcGFja2luZ0F0OiBvcmRlci5wYWNraW5nQXQsXG4gICAgICAgICAgICBwYWNrZWRBdDogb3JkZXIucGFja2VkQXQsXG4gICAgICAgICAgICBwbGFjZWRBdDogb3JkZXIucGxhY2VkQXQsXG4gICAgICAgICAgICBvbkhvbGRQaWNraW5nQXQ6IG9yZGVyLm9uSG9sZFBpY2tpbmdBdCxcbiAgICAgICAgICAgIG9uSG9sZFBhY2tpbmdBdDogb3JkZXIub25Ib2xkUGFja2luZ0F0LFxuICAgICAgICAgICAgZGlzcGF0Y2hlZEF0OiBvcmRlci5kaXNwYXRjaGVkQXQsXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogb3JkZXIuY29tcGxldGVkQXQsXG4gICAgICAgICAgICBkZWxldGVkQXQ6IG9yZGVyLmRlbGV0ZWRBdCxcbiAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kOiBvcmRlci5zaGlwcGluZ01ldGhvZCxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJlZmVyZW5jZTogb3JkZXIuc2hpcHBpbmdQcmVmZXJlbmNlLFxuICAgICAgICAgICAgbm90ZXM6IG9yZGVyLm5vdGVzLFxuICAgICAgICAgICAgY3VycmVuY3k6IG9yZGVyLmN1cnJlbmN5LFxuICAgICAgICAgICAgYmlsbGluZ1Bob25lOiBvcmRlci5iaWxsaW5nUGhvbmUsXG4gICAgICAgICAgICBiaWxsaW5nRW1haWw6IG9yZGVyLmJpbGxpbmdFbWFpbCxcbiAgICAgICAgICAgIGJpbGxpbmdGaXJzdG5hbWU6IG9yZGVyLmJpbGxpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nTGFzdG5hbWU6IG9yZGVyLmJpbGxpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiBvcmRlci5iaWxsaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVHdvOiBvcmRlci5iaWxsaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU6IG9yZGVyLmJpbGxpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBiaWxsaW5nQ2l0eTogb3JkZXIuYmlsbGluZ0NpdHksXG4gICAgICAgICAgICBiaWxsaW5nQ291bnR5OiBvcmRlci5iaWxsaW5nQ291bnR5LFxuICAgICAgICAgICAgYmlsbGluZ1N0YXRlOiBvcmRlci5iaWxsaW5nU3RhdGUsXG4gICAgICAgICAgICBiaWxsaW5nQ291bnRyeTogb3JkZXIuYmlsbGluZ0NvdW50cnksXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBvcmRlci5iaWxsaW5nWmlwLFxuICAgICAgICAgICAgc2hpcHBpbmdQaG9uZTogb3JkZXIuc2hpcHBpbmdQaG9uZSxcbiAgICAgICAgICAgIHNoaXBwaW5nRW1haWw6IG9yZGVyLnNoaXBwaW5nRW1haWwsXG4gICAgICAgICAgICBzaGlwcGluZ0ZpcnN0bmFtZTogb3JkZXIuc2hpcHBpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0xhc3RuYW1lOiBvcmRlci5zaGlwcGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBvcmRlci5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUd286IG9yZGVyLnNoaXBwaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1RocmVlOiBvcmRlci5zaGlwcGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ2l0eTogb3JkZXIuc2hpcHBpbmdDaXR5LFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHk6IG9yZGVyLnNoaXBwaW5nQ291bnR5LFxuICAgICAgICAgICAgc2hpcHBpbmdTdGF0ZTogb3JkZXIuc2hpcHBpbmdTdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnRyeTogb3JkZXIuc2hpcHBpbmdDb3VudHJ5LFxuICAgICAgICAgICAgc2hpcHBpbmdaaXA6IG9yZGVyLnNoaXBwaW5nWmlwLFxuICAgICAgICAgICAgY29udGFjdEVtYWlsOiBvcmRlci5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IG9yZGVyLmNvbnRhY3RQaG9uZSxcbiAgICAgICAgICAgIHRyYWNraW5nTm86IG9yZGVyLnRyYWNraW5nTm8sXG4gICAgICAgICAgICByZWZlcmVuY2U6IG9yZGVyLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIG1ldGE6IG9yZGVyLm1ldGEsXG4gICAgICAgICAgICBleHBlY3RlZERlbGl2ZXJ5RGF0ZTogb3JkZXIuZXhwZWN0ZWREZWxpdmVyeURhdGUsXG4gICAgICAgICAgICBkaXNwYXRjaEJ5OiBvcmRlci5kaXNwYXRjaEJ5LFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiBvcmRlci5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICAvLyByZWxhdGlvbnNcbiAgICAgICAgICAgIGJhc2tldDogdGhpcy5pbmNsdWRlQmFza2V0KG9yZGVyKSxcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIob3JkZXIpLFxuICAgICAgICAgICAgYXNzaWduZWU6IHRoaXMuaW5jbHVkZUFzc2lnbmVlKG9yZGVyKSxcbiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmluY2x1ZGVPcmRlckxpbmVzKG9yZGVyKSxcbiAgICAgICAgICAgIHNoaXBwaW5nTWFuaWZlc3Q6IHRoaXMuaW5jbHVkZVNoaXBwaW5nTWFuaWZlc3Qob3JkZXIpLFxuICAgICAgICAgICAgZ2lmdDogdGhpcy5pbmNsdWRlR2lmdChvcmRlciksXG4gICAgICAgICAgICAvLyBhY2Nlc3NvcnNcbiAgICAgICAgICAgIGlzR2lmdDogb3JkZXIuaXNHaWZ0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IG9yZGVyLnN0YXR1c0lkLFxuICAgICAgICAgICAgZGVsaXZlcnlNZXRob2Q6IG9yZGVyLmRlbGl2ZXJ5TWV0aG9kLFxuICAgICAgICAgICAgaGFzUmV1c2FibGVQYWNrYWdpbmdPcHRJbjogb3JkZXIuaGFzUmV1c2FibGVQYWNrYWdpbmdPcHRJbixcbiAgICAgICAgICAgIHRva2Vuc1RvdGFsOiBvcmRlci50b2tlbnNUb3RhbCxcbiAgICAgICAgICAgIG9uRmlyc3RPcmRlcjogb3JkZXIub25GaXJzdE9yZGVyLFxuICAgICAgICAgICAgaXNGaXJzdE9yZGVyOiBvcmRlci5pc0ZpcnN0T3JkZXIsXG4gICAgICAgICAgICB3ZWlnaHQ6IG9yZGVyLndlaWdodCxcbiAgICAgICAgICAgIGlzUGFzdER1ZURpc3BhdGNoOiBvcmRlci5pc1Bhc3REdWVEaXNwYXRjaCxcbiAgICAgICAgICAgIGlzUGFzdER1ZURlbGl2ZXJ5OiBvcmRlci5pc1Bhc3REdWVEZWxpdmVyeSxcbiAgICAgICAgICAgIHNoaXBwaW5nUmVmZXJlbmNlOiBvcmRlci5zaGlwcGluZ1JlZmVyZW5jZSxcbiAgICAgICAgICAgIHNoaXBwaW5nVmFsdWU6IG9yZGVyLnNoaXBwaW5nVmFsdWUsXG4gICAgICAgICAgICBzaGlwcGluZ1dlaWdodDogb3JkZXIuc2hpcHBpbmdXZWlnaHQsXG4gICAgICAgICAgICBzaGlwcGluZ05vdGlmaWNhdGlvbkVtYWlsOiBvcmRlci5zaGlwcGluZ05vdGlmaWNhdGlvbkVtYWlsLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXIsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJMaW5lcyhvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBBcnJheTxPcmRlckxpbmVJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihvcmRlciwgJ2xpbmVzJywgbmV3IE9yZGVyTGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NpZ25lZShvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBBc3NpZ25lZUludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnYXNzaWduZWUnLCBuZXcgQXNzaWduZWVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQmFza2V0KG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEJhc2tldEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnYmFza2V0JywgbmV3IEJhc2tldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTaGlwcGluZ01hbmlmZXN0KG9yZGVyOiBPcmRlckludGVyZmFjZSk6IFNoaXBwaW5nTWFuaWZlc3RJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ3NoaXBwaW5nTWFuaWZlc3QnLCBuZXcgU2hpcHBpbmdNYW5pZmVzdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVHaWZ0KG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEdpZnRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ2dpZnQnLCBuZXcgR2lmdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==