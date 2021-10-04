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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBpY2tpbmdBdCIsInBpY2tlZEF0IiwicGFja2luZ0F0IiwicGFja2VkQXQiLCJwbGFjZWRBdCIsIm9uSG9sZFBpY2tpbmdBdCIsIm9uSG9sZFBhY2tpbmdBdCIsImRpc3BhdGNoZWRBdCIsImNvbXBsZXRlZEF0IiwiZGVsZXRlZEF0Iiwic2hpcHBpbmdNZXRob2QiLCJzaGlwcGluZ1ByZWZlcmVuY2UiLCJub3RlcyIsImN1cnJlbmN5IiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwidHJhY2tpbmdObyIsInJlZmVyZW5jZSIsIm1ldGEiLCJleHBlY3RlZERlbGl2ZXJ5RGF0ZSIsImRpc3BhdGNoQnkiLCJyZXNvdXJjZVR5cGUiLCJiYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwidXNlciIsImluY2x1ZGVVc2VyIiwiYXNzaWduZWUiLCJpbmNsdWRlQXNzaWduZWUiLCJsaW5lcyIsImluY2x1ZGVPcmRlckxpbmVzIiwic2hpcHBpbmdNYW5pZmVzdCIsImluY2x1ZGVTaGlwcGluZ01hbmlmZXN0IiwiZ2lmdCIsImluY2x1ZGVHaWZ0IiwiaXNHaWZ0Iiwic3RhdHVzSWQiLCJkZWxpdmVyeU1ldGhvZCIsImhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4iLCJ0b2tlbnNUb3RhbCIsIm9uRmlyc3RPcmRlciIsImlzRmlyc3RPcmRlciIsIndlaWdodCIsImlzUGFzdER1ZURpc3BhdGNoIiwiaXNQYXN0RHVlRGVsaXZlcnkiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIk9yZGVyTGluZVRyYW5zZm9ybWVyIiwiQXNzaWduZWVUcmFuc2Zvcm1lciIsIkJhc2tldFRyYW5zZm9ybWVyIiwiU2hpcHBpbmdNYW5pZmVzdFRyYW5zZm9ybWVyIiwiR2lmdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEssRUFBOEI7QUFDbEMsYUFBTyxJQUFJQyxpQkFBSixDQUFVO0FBQ2JDLFFBQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDRSxFQURHO0FBRWJDLFFBQUFBLFNBQVMsRUFBRUgsS0FBSyxDQUFDRyxTQUZKO0FBR2JDLFFBQUFBLFNBQVMsRUFBRUosS0FBSyxDQUFDSSxTQUhKO0FBSWJDLFFBQUFBLFNBQVMsRUFBRUwsS0FBSyxDQUFDSyxTQUpKO0FBS2JDLFFBQUFBLFFBQVEsRUFBRU4sS0FBSyxDQUFDTSxRQUxIO0FBTWJDLFFBQUFBLFNBQVMsRUFBRVAsS0FBSyxDQUFDTyxTQU5KO0FBT2JDLFFBQUFBLFFBQVEsRUFBRVIsS0FB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QUF6QixDQUFQO0FBQ0g7OztzQ0FFaUIxRSxLLEVBQWtEO0FBQ2hFLGFBQU8sS0FBSzJFLFVBQUwsQ0FBZ0IzRSxLQUFoQixFQUF1QixPQUF2QixFQUFnQyxJQUFJNEUsZ0NBQUosRUFBaEMsQ0FBUDtBQUNIOzs7b0NBRWU1RSxLLEVBQWlEO0FBQzdELGFBQU8sS0FBS3lFLElBQUwsQ0FBVXpFLEtBQVYsRUFBaUIsVUFBakIsRUFBNkIsSUFBSTZFLCtCQUFKLEVBQTdCLENBQVA7QUFDSDs7O2tDQUVhN0UsSyxFQUErQztBQUN6RCxhQUFPLEtBQUt5RSxJQUFMLENBQVV6RSxLQUFWLEVBQWlCLFFBQWpCLEVBQTJCLElBQUk4RSw2QkFBSixFQUEzQixDQUFQO0FBQ0g7Ozs0Q0FFdUI5RSxLLEVBQXlEO0FBQzdFLGFBQU8sS0FBS3lFLElBQUwsQ0FBVXpFLEtBQVYsRUFBaUIsa0JBQWpCLEVBQXFDLElBQUkrRSx1Q0FBSixFQUFyQyxDQUFQO0FBQ0g7OztnQ0FFVy9FLEssRUFBNkM7QUFDckQsYUFBTyxLQUFLeUUsSUFBTCxDQUFVekUsS0FBVixFQUFpQixNQUFqQixFQUF5QixJQUFJZ0YsMkJBQUosRUFBekIsQ0FBUDtBQUNIOzs7O0VBcEd5Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXIgZnJvbSAnLi4vT3JkZXInO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyTGluZSc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgQXNzaWduZWVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9Bc3NpZ25lZSc7XG5pbXBvcnQgeyBCYXNrZXQgYXMgQmFza2V0SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iYXNrZXQvQmFza2V0JztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBPcmRlckxpbmVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJMaW5lVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFzc2lnbmVlVHJhbnNmb3JtZXIgZnJvbSAnLi9Bc3NpZ25lZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNrZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iYXNrZXQvVHJhbnNmb3JtZXJzL0Jhc2tldFRyYW5zZm9ybWVyJztcbmltcG9ydCBTaGlwcGluZ01hbmlmZXN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZGVsaXZlcnkvU2hpcHBpbmdNYW5pZmVzdEludGVyZmFjZSc7XG5pbXBvcnQgU2hpcHBpbmdNYW5pZmVzdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2RlbGl2ZXJ5L1RyYW5zZm9ybWVycy9TaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IEdpZnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9naWZ0L0dpZnQnO1xuaW1wb3J0IEdpZnRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9naWZ0L1RyYW5zZm9ybWVycy9HaWZ0VHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gb3JkZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcmRlclxuICAgICAqL1xuICAgIG1hcERhdGEob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogT3JkZXIge1xuICAgICAgICByZXR1cm4gbmV3IE9yZGVyKHtcbiAgICAgICAgICAgIGlkOiBvcmRlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogb3JkZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBvcmRlci51cGRhdGVkQXQsXG4gICAgICAgICAgICBwaWNraW5nQXQ6IG9yZGVyLnBpY2tpbmdBdCxcbiAgICAgICAgICAgIHBpY2tlZEF0OiBvcmRlci5waWNrZWRBdCxcbiAgICAgICAgICAgIHBhY2tpbmdBdDogb3JkZXIucGFja2luZ0F0LFxuICAgICAgICAgICAgcGFja2VkQXQ6IG9yZGVyLnBhY2tlZEF0LFxuICAgICAgICAgICAgcGxhY2VkQXQ6IG9yZGVyLnBsYWNlZEF0LFxuICAgICAgICAgICAgb25Ib2xkUGlja2luZ0F0OiBvcmRlci5vbkhvbGRQaWNraW5nQXQsXG4gICAgICAgICAgICBvbkhvbGRQYWNraW5nQXQ6IG9yZGVyLm9uSG9sZFBhY2tpbmdBdCxcbiAgICAgICAgICAgIGRpc3BhdGNoZWRBdDogb3JkZXIuZGlzcGF0Y2hlZEF0LFxuICAgICAgICAgICAgY29tcGxldGVkQXQ6IG9yZGVyLmNvbXBsZXRlZEF0LFxuICAgICAgICAgICAgZGVsZXRlZEF0OiBvcmRlci5kZWxldGVkQXQsXG4gICAgICAgICAgICBzaGlwcGluZ01ldGhvZDogb3JkZXIuc2hpcHBpbmdNZXRob2QsXG4gICAgICAgICAgICBzaGlwcGluZ1ByZWZlcmVuY2U6IG9yZGVyLnNoaXBwaW5nUHJlZmVyZW5jZSxcbiAgICAgICAgICAgIG5vdGVzOiBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBvcmRlci5jdXJyZW5jeSxcbiAgICAgICAgICAgIGJpbGxpbmdQaG9uZTogb3JkZXIuYmlsbGluZ1Bob25lLFxuICAgICAgICAgICAgYmlsbGluZ0VtYWlsOiBvcmRlci5iaWxsaW5nRW1haWwsXG4gICAgICAgICAgICBiaWxsaW5nRmlyc3RuYW1lOiBvcmRlci5iaWxsaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0xhc3RuYW1lOiBvcmRlci5iaWxsaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzczogb3JkZXIuYmlsbGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1R3bzogb3JkZXIuYmlsbGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1RocmVlOiBvcmRlci5iaWxsaW5nQWRkcmVzc1RocmVlLFxuICAgICAgICAgICAgYmlsbGluZ0NpdHk6IG9yZGVyLmJpbGxpbmdDaXR5LFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50eTogb3JkZXIuYmlsbGluZ0NvdW50eSxcbiAgICAgICAgICAgIGJpbGxpbmdTdGF0ZTogb3JkZXIuYmlsbGluZ1N0YXRlLFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50cnk6IG9yZGVyLmJpbGxpbmdDb3VudHJ5LFxuICAgICAgICAgICAgYmlsbGluZ1ppcDogb3JkZXIuYmlsbGluZ1ppcCxcbiAgICAgICAgICAgIHNoaXBwaW5nUGhvbmU6IG9yZGVyLnNoaXBwaW5nUGhvbmUsXG4gICAgICAgICAgICBzaGlwcGluZ0VtYWlsOiBvcmRlci5zaGlwcGluZ0VtYWlsLFxuICAgICAgICAgICAgc2hpcHBpbmdGaXJzdG5hbWU6IG9yZGVyLnNoaXBwaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdMYXN0bmFtZTogb3JkZXIuc2hpcHBpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogb3JkZXIuc2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVHdvOiBvcmRlci5zaGlwcGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUaHJlZTogb3JkZXIuc2hpcHBpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBzaGlwcGluZ0NpdHk6IG9yZGVyLnNoaXBwaW5nQ2l0eSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnR5OiBvcmRlci5zaGlwcGluZ0NvdW50eSxcbiAgICAgICAgICAgIHNoaXBwaW5nU3RhdGU6IG9yZGVyLnNoaXBwaW5nU3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50cnk6IG9yZGVyLnNoaXBwaW5nQ291bnRyeSxcbiAgICAgICAgICAgIHNoaXBwaW5nWmlwOiBvcmRlci5zaGlwcGluZ1ppcCxcbiAgICAgICAgICAgIGNvbnRhY3RFbWFpbDogb3JkZXIuY29udGFjdEVtYWlsLFxuICAgICAgICAgICAgY29udGFjdFBob25lOiBvcmRlci5jb250YWN0UGhvbmUsXG4gICAgICAgICAgICB0cmFja2luZ05vOiBvcmRlci50cmFja2luZ05vLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiBvcmRlci5yZWZlcmVuY2UsXG4gICAgICAgICAgICBtZXRhOiBvcmRlci5tZXRhLFxuICAgICAgICAgICAgZXhwZWN0ZWREZWxpdmVyeURhdGU6IG9yZGVyLmV4cGVjdGVkRGVsaXZlcnlEYXRlLFxuICAgICAgICAgICAgZGlzcGF0Y2hCeTogb3JkZXIuZGlzcGF0Y2hCeSxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogb3JkZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgLy8gcmVsYXRpb25zXG4gICAgICAgICAgICBiYXNrZXQ6IHRoaXMuaW5jbHVkZUJhc2tldChvcmRlciksXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKG9yZGVyKSxcbiAgICAgICAgICAgIGFzc2lnbmVlOiB0aGlzLmluY2x1ZGVBc3NpZ25lZShvcmRlciksXG4gICAgICAgICAgICBsaW5lczogdGhpcy5pbmNsdWRlT3JkZXJMaW5lcyhvcmRlciksXG4gICAgICAgICAgICBzaGlwcGluZ01hbmlmZXN0OiB0aGlzLmluY2x1ZGVTaGlwcGluZ01hbmlmZXN0KG9yZGVyKSxcbiAgICAgICAgICAgIGdpZnQ6IHRoaXMuaW5jbHVkZUdpZnQob3JkZXIpLFxuICAgICAgICAgICAgLy8gYWNjZXNzb3JzXG4gICAgICAgICAgICBpc0dpZnQ6IG9yZGVyLmlzR2lmdCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiBvcmRlci5zdGF0dXNJZCxcbiAgICAgICAgICAgIGRlbGl2ZXJ5TWV0aG9kOiBvcmRlci5kZWxpdmVyeU1ldGhvZCxcbiAgICAgICAgICAgIGhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW46IG9yZGVyLmhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4sXG4gICAgICAgICAgICB0b2tlbnNUb3RhbDogb3JkZXIudG9rZW5zVG90YWwsXG4gICAgICAgICAgICBvbkZpcnN0T3JkZXI6IG9yZGVyLm9uRmlyc3RPcmRlcixcbiAgICAgICAgICAgIGlzRmlyc3RPcmRlcjogb3JkZXIuaXNGaXJzdE9yZGVyLFxuICAgICAgICAgICAgd2VpZ2h0OiBvcmRlci53ZWlnaHQsXG4gICAgICAgICAgICBpc1Bhc3REdWVEaXNwYXRjaDogb3JkZXIuaXNQYXN0RHVlRGlzcGF0Y2gsXG4gICAgICAgICAgICBpc1Bhc3REdWVEZWxpdmVyeTogb3JkZXIuaXNQYXN0RHVlRGVsaXZlcnksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlckxpbmVzKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEFycmF5PE9yZGVyTGluZUludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKG9yZGVyLCAnbGluZXMnLCBuZXcgT3JkZXJMaW5lVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2lnbmVlKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEFzc2lnbmVlSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXIsICdhc3NpZ25lZScsIG5ldyBBc3NpZ25lZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVCYXNrZXQob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogQmFza2V0SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXIsICdiYXNrZXQnLCBuZXcgQmFza2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVNoaXBwaW5nTWFuaWZlc3Qob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogU2hpcHBpbmdNYW5pZmVzdEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnc2hpcHBpbmdNYW5pZmVzdCcsIG5ldyBTaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUdpZnQob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogR2lmdEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnZ2lmdCcsIG5ldyBHaWZ0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19