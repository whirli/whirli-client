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
        shippingWeight: order.shippingWeight
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBpY2tpbmdBdCIsInBpY2tlZEF0IiwicGFja2luZ0F0IiwicGFja2VkQXQiLCJwbGFjZWRBdCIsIm9uSG9sZFBpY2tpbmdBdCIsIm9uSG9sZFBhY2tpbmdBdCIsImRpc3BhdGNoZWRBdCIsImNvbXBsZXRlZEF0IiwiZGVsZXRlZEF0Iiwic2hpcHBpbmdNZXRob2QiLCJzaGlwcGluZ1ByZWZlcmVuY2UiLCJub3RlcyIsImN1cnJlbmN5IiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwidHJhY2tpbmdObyIsInJlZmVyZW5jZSIsIm1ldGEiLCJleHBlY3RlZERlbGl2ZXJ5RGF0ZSIsImRpc3BhdGNoQnkiLCJyZXNvdXJjZVR5cGUiLCJiYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwidXNlciIsImluY2x1ZGVVc2VyIiwiYXNzaWduZWUiLCJpbmNsdWRlQXNzaWduZWUiLCJsaW5lcyIsImluY2x1ZGVPcmRlckxpbmVzIiwic2hpcHBpbmdNYW5pZmVzdCIsImluY2x1ZGVTaGlwcGluZ01hbmlmZXN0IiwiZ2lmdCIsImluY2x1ZGVHaWZ0IiwiaXNHaWZ0Iiwic3RhdHVzSWQiLCJkZWxpdmVyeU1ldGhvZCIsImhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4iLCJ0b2tlbnNUb3RhbCIsIm9uRmlyc3RPcmRlciIsImlzRmlyc3RPcmRlciIsIndlaWdodCIsImlzUGFzdER1ZURpc3BhdGNoIiwiaXNQYXN0RHVlRGVsaXZlcnkiLCJzaGlwcGluZ1JlZmVyZW5jZSIsInNoaXBwaW5nVmFsdWUiLCJzaGlwcGluZ1dlaWdodCIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiT3JkZXJMaW5lVHJhbnNmb3JtZXIiLCJBc3NpZ25lZVRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJTaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXIiLCJHaWZ0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsSyxFQUE4QjtBQUNsQyxhQUFPLElBQUlDLGlCQUFKLENBQVU7QUFDYkMsUUFBQUEsRUFBRSxFQUFFRixLQUFLLENBQUNFLEVBREc7QUFFYkMsUUFBQUEsU0FBUyxFQUFFSCxLQUFLLENBQUNHLFNBRko7QUFHYkMsUUFBQUEsU0FBUyxFQUFFSixLQUFLLENBQUNJLFNBSEo7QUFJYkMsUUFBQUEsU0FBUyxFQUFFTCxLQUFLLENBQUNLLFNBSko7QUFLYkMsUUFBQUEsUUFBUSxFQUFFTixLQUFLLENBQUNNLFFBTEg7QUFNYkMsUUFBQUEs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QXFFYkMsUUFBQUEsYUFBYSxFQUFFMUUsS0FBSyxDQUFDMEUsYUFyRVI7QUFzRWJDLFFBQUFBLGNBQWMsRUFBRTNFLEtBQUssQ0FBQzJFO0FBdEVULE9BQVYsQ0FBUDtBQXdFSDs7O2dDQUVXM0UsSyxFQUE2QztBQUNyRCxhQUFPLEtBQUs0RSxJQUFMLENBQVU1RSxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCLElBQUk2RSwyQkFBSixFQUF6QixDQUFQO0FBQ0g7OztzQ0FFaUI3RSxLLEVBQWtEO0FBQ2hFLGFBQU8sS0FBSzhFLFVBQUwsQ0FBZ0I5RSxLQUFoQixFQUF1QixPQUF2QixFQUFnQyxJQUFJK0UsZ0NBQUosRUFBaEMsQ0FBUDtBQUNIOzs7b0NBRWUvRSxLLEVBQWlEO0FBQzdELGFBQU8sS0FBSzRFLElBQUwsQ0FBVTVFLEtBQVYsRUFBaUIsVUFBakIsRUFBNkIsSUFBSWdGLCtCQUFKLEVBQTdCLENBQVA7QUFDSDs7O2tDQUVhaEYsSyxFQUErQztBQUN6RCxhQUFPLEtBQUs0RSxJQUFMLENBQVU1RSxLQUFWLEVBQWlCLFFBQWpCLEVBQTJCLElBQUlpRiw2QkFBSixFQUEzQixDQUFQO0FBQ0g7Ozs0Q0FFdUJqRixLLEVBQXlEO0FBQzdFLGFBQU8sS0FBSzRFLElBQUwsQ0FBVTVFLEtBQVYsRUFBaUIsa0JBQWpCLEVBQXFDLElBQUlrRix1Q0FBSixFQUFyQyxDQUFQO0FBQ0g7OztnQ0FFV2xGLEssRUFBNkM7QUFDckQsYUFBTyxLQUFLNEUsSUFBTCxDQUFVNUUsS0FBVixFQUFpQixNQUFqQixFQUF5QixJQUFJbUYsMkJBQUosRUFBekIsQ0FBUDtBQUNIOzs7O0VBdkd5Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXIgZnJvbSAnLi4vT3JkZXInO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyTGluZSc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgQXNzaWduZWVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9Bc3NpZ25lZSc7XG5pbXBvcnQgeyBCYXNrZXQgYXMgQmFza2V0SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iYXNrZXQvQmFza2V0JztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBPcmRlckxpbmVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJMaW5lVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFzc2lnbmVlVHJhbnNmb3JtZXIgZnJvbSAnLi9Bc3NpZ25lZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNrZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iYXNrZXQvVHJhbnNmb3JtZXJzL0Jhc2tldFRyYW5zZm9ybWVyJztcbmltcG9ydCBTaGlwcGluZ01hbmlmZXN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZGVsaXZlcnkvU2hpcHBpbmdNYW5pZmVzdEludGVyZmFjZSc7XG5pbXBvcnQgU2hpcHBpbmdNYW5pZmVzdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2RlbGl2ZXJ5L1RyYW5zZm9ybWVycy9TaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IEdpZnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9naWZ0L0dpZnQnO1xuaW1wb3J0IEdpZnRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9naWZ0L1RyYW5zZm9ybWVycy9HaWZ0VHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gb3JkZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcmRlclxuICAgICAqL1xuICAgIG1hcERhdGEob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogT3JkZXIge1xuICAgICAgICByZXR1cm4gbmV3IE9yZGVyKHtcbiAgICAgICAgICAgIGlkOiBvcmRlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogb3JkZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBvcmRlci51cGRhdGVkQXQsXG4gICAgICAgICAgICBwaWNraW5nQXQ6IG9yZGVyLnBpY2tpbmdBdCxcbiAgICAgICAgICAgIHBpY2tlZEF0OiBvcmRlci5waWNrZWRBdCxcbiAgICAgICAgICAgIHBhY2tpbmdBdDogb3JkZXIucGFja2luZ0F0LFxuICAgICAgICAgICAgcGFja2VkQXQ6IG9yZGVyLnBhY2tlZEF0LFxuICAgICAgICAgICAgcGxhY2VkQXQ6IG9yZGVyLnBsYWNlZEF0LFxuICAgICAgICAgICAgb25Ib2xkUGlja2luZ0F0OiBvcmRlci5vbkhvbGRQaWNraW5nQXQsXG4gICAgICAgICAgICBvbkhvbGRQYWNraW5nQXQ6IG9yZGVyLm9uSG9sZFBhY2tpbmdBdCxcbiAgICAgICAgICAgIGRpc3BhdGNoZWRBdDogb3JkZXIuZGlzcGF0Y2hlZEF0LFxuICAgICAgICAgICAgY29tcGxldGVkQXQ6IG9yZGVyLmNvbXBsZXRlZEF0LFxuICAgICAgICAgICAgZGVsZXRlZEF0OiBvcmRlci5kZWxldGVkQXQsXG4gICAgICAgICAgICBzaGlwcGluZ01ldGhvZDogb3JkZXIuc2hpcHBpbmdNZXRob2QsXG4gICAgICAgICAgICBzaGlwcGluZ1ByZWZlcmVuY2U6IG9yZGVyLnNoaXBwaW5nUHJlZmVyZW5jZSxcbiAgICAgICAgICAgIG5vdGVzOiBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBvcmRlci5jdXJyZW5jeSxcbiAgICAgICAgICAgIGJpbGxpbmdQaG9uZTogb3JkZXIuYmlsbGluZ1Bob25lLFxuICAgICAgICAgICAgYmlsbGluZ0VtYWlsOiBvcmRlci5iaWxsaW5nRW1haWwsXG4gICAgICAgICAgICBiaWxsaW5nRmlyc3RuYW1lOiBvcmRlci5iaWxsaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0xhc3RuYW1lOiBvcmRlci5iaWxsaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzczogb3JkZXIuYmlsbGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1R3bzogb3JkZXIuYmlsbGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1RocmVlOiBvcmRlci5iaWxsaW5nQWRkcmVzc1RocmVlLFxuICAgICAgICAgICAgYmlsbGluZ0NpdHk6IG9yZGVyLmJpbGxpbmdDaXR5LFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50eTogb3JkZXIuYmlsbGluZ0NvdW50eSxcbiAgICAgICAgICAgIGJpbGxpbmdTdGF0ZTogb3JkZXIuYmlsbGluZ1N0YXRlLFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50cnk6IG9yZGVyLmJpbGxpbmdDb3VudHJ5LFxuICAgICAgICAgICAgYmlsbGluZ1ppcDogb3JkZXIuYmlsbGluZ1ppcCxcbiAgICAgICAgICAgIHNoaXBwaW5nUGhvbmU6IG9yZGVyLnNoaXBwaW5nUGhvbmUsXG4gICAgICAgICAgICBzaGlwcGluZ0VtYWlsOiBvcmRlci5zaGlwcGluZ0VtYWlsLFxuICAgICAgICAgICAgc2hpcHBpbmdGaXJzdG5hbWU6IG9yZGVyLnNoaXBwaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdMYXN0bmFtZTogb3JkZXIuc2hpcHBpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogb3JkZXIuc2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVHdvOiBvcmRlci5zaGlwcGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUaHJlZTogb3JkZXIuc2hpcHBpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBzaGlwcGluZ0NpdHk6IG9yZGVyLnNoaXBwaW5nQ2l0eSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnR5OiBvcmRlci5zaGlwcGluZ0NvdW50eSxcbiAgICAgICAgICAgIHNoaXBwaW5nU3RhdGU6IG9yZGVyLnNoaXBwaW5nU3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50cnk6IG9yZGVyLnNoaXBwaW5nQ291bnRyeSxcbiAgICAgICAgICAgIHNoaXBwaW5nWmlwOiBvcmRlci5zaGlwcGluZ1ppcCxcbiAgICAgICAgICAgIGNvbnRhY3RFbWFpbDogb3JkZXIuY29udGFjdEVtYWlsLFxuICAgICAgICAgICAgY29udGFjdFBob25lOiBvcmRlci5jb250YWN0UGhvbmUsXG4gICAgICAgICAgICB0cmFja2luZ05vOiBvcmRlci50cmFja2luZ05vLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiBvcmRlci5yZWZlcmVuY2UsXG4gICAgICAgICAgICBtZXRhOiBvcmRlci5tZXRhLFxuICAgICAgICAgICAgZXhwZWN0ZWREZWxpdmVyeURhdGU6IG9yZGVyLmV4cGVjdGVkRGVsaXZlcnlEYXRlLFxuICAgICAgICAgICAgZGlzcGF0Y2hCeTogb3JkZXIuZGlzcGF0Y2hCeSxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogb3JkZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgLy8gcmVsYXRpb25zXG4gICAgICAgICAgICBiYXNrZXQ6IHRoaXMuaW5jbHVkZUJhc2tldChvcmRlciksXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKG9yZGVyKSxcbiAgICAgICAgICAgIGFzc2lnbmVlOiB0aGlzLmluY2x1ZGVBc3NpZ25lZShvcmRlciksXG4gICAgICAgICAgICBsaW5lczogdGhpcy5pbmNsdWRlT3JkZXJMaW5lcyhvcmRlciksXG4gICAgICAgICAgICBzaGlwcGluZ01hbmlmZXN0OiB0aGlzLmluY2x1ZGVTaGlwcGluZ01hbmlmZXN0KG9yZGVyKSxcbiAgICAgICAgICAgIGdpZnQ6IHRoaXMuaW5jbHVkZUdpZnQob3JkZXIpLFxuICAgICAgICAgICAgLy8gYWNjZXNzb3JzXG4gICAgICAgICAgICBpc0dpZnQ6IG9yZGVyLmlzR2lmdCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiBvcmRlci5zdGF0dXNJZCxcbiAgICAgICAgICAgIGRlbGl2ZXJ5TWV0aG9kOiBvcmRlci5kZWxpdmVyeU1ldGhvZCxcbiAgICAgICAgICAgIGhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW46IG9yZGVyLmhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4sXG4gICAgICAgICAgICB0b2tlbnNUb3RhbDogb3JkZXIudG9rZW5zVG90YWwsXG4gICAgICAgICAgICBvbkZpcnN0T3JkZXI6IG9yZGVyLm9uRmlyc3RPcmRlcixcbiAgICAgICAgICAgIGlzRmlyc3RPcmRlcjogb3JkZXIuaXNGaXJzdE9yZGVyLFxuICAgICAgICAgICAgd2VpZ2h0OiBvcmRlci53ZWlnaHQsXG4gICAgICAgICAgICBpc1Bhc3REdWVEaXNwYXRjaDogb3JkZXIuaXNQYXN0RHVlRGlzcGF0Y2gsXG4gICAgICAgICAgICBpc1Bhc3REdWVEZWxpdmVyeTogb3JkZXIuaXNQYXN0RHVlRGVsaXZlcnksXG4gICAgICAgICAgICBzaGlwcGluZ1JlZmVyZW5jZTogb3JkZXIuc2hpcHBpbmdSZWZlcmVuY2UsXG4gICAgICAgICAgICBzaGlwcGluZ1ZhbHVlOiBvcmRlci5zaGlwcGluZ1ZhbHVlLFxuICAgICAgICAgICAgc2hpcHBpbmdXZWlnaHQ6IG9yZGVyLnNoaXBwaW5nV2VpZ2h0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXIsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJMaW5lcyhvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBBcnJheTxPcmRlckxpbmVJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihvcmRlciwgJ2xpbmVzJywgbmV3IE9yZGVyTGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NpZ25lZShvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBBc3NpZ25lZUludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnYXNzaWduZWUnLCBuZXcgQXNzaWduZWVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQmFza2V0KG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEJhc2tldEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnYmFza2V0JywgbmV3IEJhc2tldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTaGlwcGluZ01hbmlmZXN0KG9yZGVyOiBPcmRlckludGVyZmFjZSk6IFNoaXBwaW5nTWFuaWZlc3RJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ3NoaXBwaW5nTWFuaWZlc3QnLCBuZXcgU2hpcHBpbmdNYW5pZmVzdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVHaWZ0KG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEdpZnRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ2dpZnQnLCBuZXcgR2lmdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==