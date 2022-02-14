"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OrderTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(OrderTransformer, _BaseTransformer);

  var _super = _createSuper(OrderTransformer);

  function OrderTransformer() {
    _classCallCheck(this, OrderTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(OrderTransformer, [{
    key: "mapData",
    value:
    /**
     * Map an order response
     *
     * @param order
     */
    function mapData(order) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBpY2tpbmdBdCIsInBpY2tlZEF0IiwicGFja2luZ0F0IiwicGFja2VkQXQiLCJwbGFjZWRBdCIsIm9uSG9sZFBpY2tpbmdBdCIsIm9uSG9sZFBhY2tpbmdBdCIsImRpc3BhdGNoZWRBdCIsImNvbXBsZXRlZEF0IiwiZGVsZXRlZEF0Iiwic2hpcHBpbmdNZXRob2QiLCJzaGlwcGluZ1ByZWZlcmVuY2UiLCJub3RlcyIsImN1cnJlbmN5IiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwidHJhY2tpbmdObyIsInJlZmVyZW5jZSIsIm1ldGEiLCJleHBlY3RlZERlbGl2ZXJ5RGF0ZSIsImRpc3BhdGNoQnkiLCJyZXNvdXJjZVR5cGUiLCJiaW5Mb2NhdGlvbiIsImJhc2tldCIsImluY2x1ZGVCYXNrZXQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJhc3NpZ25lZSIsImluY2x1ZGVBc3NpZ25lZSIsImxpbmVzIiwiaW5jbHVkZU9yZGVyTGluZXMiLCJzaGlwcGluZ01hbmlmZXN0IiwiaW5jbHVkZVNoaXBwaW5nTWFuaWZlc3QiLCJnaWZ0IiwiaW5jbHVkZUdpZnQiLCJpc0dpZnQiLCJzdGF0dXNJZCIsImRlbGl2ZXJ5TWV0aG9kIiwiaGFzUmV1c2FibGVQYWNrYWdpbmdPcHRJbiIsInRva2Vuc1RvdGFsIiwib25GaXJzdE9yZGVyIiwiaXNGaXJzdE9yZGVyIiwid2VpZ2h0IiwiaXNQYXN0RHVlRGlzcGF0Y2giLCJpc1Bhc3REdWVEZWxpdmVyeSIsInNoaXBwaW5nUmVmZXJlbmNlIiwic2hpcHBpbmdWYWx1ZSIsInNoaXBwaW5nV2VpZ2h0Iiwic2hpcHBpbmdOb3RpZmljYXRpb25FbWFpbCIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiT3JkZXJMaW5lVHJhbnNmb3JtZXIiLCJBc3NpZ25lZVRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJTaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXIiLCJHaWZ0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0kscUJBQVFDLEtBQVIsRUFBc0M7QUFDbEMsYUFBTyxJQUFJQyxpQkFBSixDQUFVO0FBQ2JDLFFBQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDRSxFQURHO0FBRWJDLFFBQUFBLFNBQVMsRUFBRUgsS0FBSyxDQUFDRyxTQUZKO0FBR2JDLFFBQUFBLFNBQVMsRUFBRUosS0FBSyxDQUFDSSxTQUhKO0FBSWJDLFFBQUFBLFNBQVMsRUFB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LEVBQXpCLENBQVA7QUFDSDs7OztFQXpHeUNDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9yZGVyIGZyb20gJy4uL09yZGVyJztcbmltcG9ydCBPcmRlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyJztcbmltcG9ydCBPcmRlckxpbmVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlckxpbmUnO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IEFzc2lnbmVlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvQXNzaWduZWUnO1xuaW1wb3J0IHsgQmFza2V0IGFzIEJhc2tldEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmFza2V0L0Jhc2tldCc7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgT3JkZXJMaW5lVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyTGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBBc3NpZ25lZVRyYW5zZm9ybWVyIGZyb20gJy4vQXNzaWduZWVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFza2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU2hpcHBpbmdNYW5pZmVzdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2RlbGl2ZXJ5L1NoaXBwaW5nTWFuaWZlc3RJbnRlcmZhY2UnO1xuaW1wb3J0IFNoaXBwaW5nTWFuaWZlc3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9kZWxpdmVyeS9UcmFuc2Zvcm1lcnMvU2hpcHBpbmdNYW5pZmVzdFRyYW5zZm9ybWVyJztcbmltcG9ydCBHaWZ0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZ2lmdC9HaWZ0JztcbmltcG9ydCBHaWZ0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdFRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIG9yZGVyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3JkZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IE9yZGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPcmRlcih7XG4gICAgICAgICAgICBpZDogb3JkZXIuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG9yZGVyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogb3JkZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgcGlja2luZ0F0OiBvcmRlci5waWNraW5nQXQsXG4gICAgICAgICAgICBwaWNrZWRBdDogb3JkZXIucGlja2VkQXQsXG4gICAgICAgICAgICBwYWNraW5nQXQ6IG9yZGVyLnBhY2tpbmdBdCxcbiAgICAgICAgICAgIHBhY2tlZEF0OiBvcmRlci5wYWNrZWRBdCxcbiAgICAgICAgICAgIHBsYWNlZEF0OiBvcmRlci5wbGFjZWRBdCxcbiAgICAgICAgICAgIG9uSG9sZFBpY2tpbmdBdDogb3JkZXIub25Ib2xkUGlja2luZ0F0LFxuICAgICAgICAgICAgb25Ib2xkUGFja2luZ0F0OiBvcmRlci5vbkhvbGRQYWNraW5nQXQsXG4gICAgICAgICAgICBkaXNwYXRjaGVkQXQ6IG9yZGVyLmRpc3BhdGNoZWRBdCxcbiAgICAgICAgICAgIGNvbXBsZXRlZEF0OiBvcmRlci5jb21wbGV0ZWRBdCxcbiAgICAgICAgICAgIGRlbGV0ZWRBdDogb3JkZXIuZGVsZXRlZEF0LFxuICAgICAgICAgICAgc2hpcHBpbmdNZXRob2Q6IG9yZGVyLnNoaXBwaW5nTWV0aG9kLFxuICAgICAgICAgICAgc2hpcHBpbmdQcmVmZXJlbmNlOiBvcmRlci5zaGlwcGluZ1ByZWZlcmVuY2UsXG4gICAgICAgICAgICBub3Rlczogb3JkZXIubm90ZXMsXG4gICAgICAgICAgICBjdXJyZW5jeTogb3JkZXIuY3VycmVuY3ksXG4gICAgICAgICAgICBiaWxsaW5nUGhvbmU6IG9yZGVyLmJpbGxpbmdQaG9uZSxcbiAgICAgICAgICAgIGJpbGxpbmdFbWFpbDogb3JkZXIuYmlsbGluZ0VtYWlsLFxuICAgICAgICAgICAgYmlsbGluZ0ZpcnN0bmFtZTogb3JkZXIuYmlsbGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdMYXN0bmFtZTogb3JkZXIuYmlsbGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3M6IG9yZGVyLmJpbGxpbmdBZGRyZXNzLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUd286IG9yZGVyLmJpbGxpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUaHJlZTogb3JkZXIuYmlsbGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIGJpbGxpbmdDaXR5OiBvcmRlci5iaWxsaW5nQ2l0eSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHk6IG9yZGVyLmJpbGxpbmdDb3VudHksXG4gICAgICAgICAgICBiaWxsaW5nU3RhdGU6IG9yZGVyLmJpbGxpbmdTdGF0ZSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHJ5OiBvcmRlci5iaWxsaW5nQ291bnRyeSxcbiAgICAgICAgICAgIGJpbGxpbmdaaXA6IG9yZGVyLmJpbGxpbmdaaXAsXG4gICAgICAgICAgICBzaGlwcGluZ1Bob25lOiBvcmRlci5zaGlwcGluZ1Bob25lLFxuICAgICAgICAgICAgc2hpcHBpbmdFbWFpbDogb3JkZXIuc2hpcHBpbmdFbWFpbCxcbiAgICAgICAgICAgIHNoaXBwaW5nRmlyc3RuYW1lOiBvcmRlci5zaGlwcGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nTGFzdG5hbWU6IG9yZGVyLnNoaXBwaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IG9yZGVyLnNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1R3bzogb3JkZXIuc2hpcHBpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVGhyZWU6IG9yZGVyLnNoaXBwaW5nQWRkcmVzc1RocmVlLFxuICAgICAgICAgICAgc2hpcHBpbmdDaXR5OiBvcmRlci5zaGlwcGluZ0NpdHksXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50eTogb3JkZXIuc2hpcHBpbmdDb3VudHksXG4gICAgICAgICAgICBzaGlwcGluZ1N0YXRlOiBvcmRlci5zaGlwcGluZ1N0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHJ5OiBvcmRlci5zaGlwcGluZ0NvdW50cnksXG4gICAgICAgICAgICBzaGlwcGluZ1ppcDogb3JkZXIuc2hpcHBpbmdaaXAsXG4gICAgICAgICAgICBjb250YWN0RW1haWw6IG9yZGVyLmNvbnRhY3RFbWFpbCxcbiAgICAgICAgICAgIGNvbnRhY3RQaG9uZTogb3JkZXIuY29udGFjdFBob25lLFxuICAgICAgICAgICAgdHJhY2tpbmdObzogb3JkZXIudHJhY2tpbmdObyxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogb3JkZXIucmVmZXJlbmNlLFxuICAgICAgICAgICAgbWV0YTogb3JkZXIubWV0YSxcbiAgICAgICAgICAgIGV4cGVjdGVkRGVsaXZlcnlEYXRlOiBvcmRlci5leHBlY3RlZERlbGl2ZXJ5RGF0ZSxcbiAgICAgICAgICAgIGRpc3BhdGNoQnk6IG9yZGVyLmRpc3BhdGNoQnksXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IG9yZGVyLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIGJpbkxvY2F0aW9uOiBvcmRlci5iaW5Mb2NhdGlvbixcbiAgICAgICAgICAgIC8vIHJlbGF0aW9uc1xuICAgICAgICAgICAgYmFza2V0OiB0aGlzLmluY2x1ZGVCYXNrZXQob3JkZXIpLFxuICAgICAgICAgICAgdXNlcjogdGhpcy5pbmNsdWRlVXNlcihvcmRlciksXG4gICAgICAgICAgICBhc3NpZ25lZTogdGhpcy5pbmNsdWRlQXNzaWduZWUob3JkZXIpLFxuICAgICAgICAgICAgbGluZXM6IHRoaXMuaW5jbHVkZU9yZGVyTGluZXMob3JkZXIpLFxuICAgICAgICAgICAgc2hpcHBpbmdNYW5pZmVzdDogdGhpcy5pbmNsdWRlU2hpcHBpbmdNYW5pZmVzdChvcmRlciksXG4gICAgICAgICAgICBnaWZ0OiB0aGlzLmluY2x1ZGVHaWZ0KG9yZGVyKSxcbiAgICAgICAgICAgIC8vIGFjY2Vzc29yc1xuICAgICAgICAgICAgaXNHaWZ0OiBvcmRlci5pc0dpZnQsXG4gICAgICAgICAgICBzdGF0dXNJZDogb3JkZXIuc3RhdHVzSWQsXG4gICAgICAgICAgICBkZWxpdmVyeU1ldGhvZDogb3JkZXIuZGVsaXZlcnlNZXRob2QsXG4gICAgICAgICAgICBoYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluOiBvcmRlci5oYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluLFxuICAgICAgICAgICAgdG9rZW5zVG90YWw6IG9yZGVyLnRva2Vuc1RvdGFsLFxuICAgICAgICAgICAgb25GaXJzdE9yZGVyOiBvcmRlci5vbkZpcnN0T3JkZXIsXG4gICAgICAgICAgICBpc0ZpcnN0T3JkZXI6IG9yZGVyLmlzRmlyc3RPcmRlcixcbiAgICAgICAgICAgIHdlaWdodDogb3JkZXIud2VpZ2h0LFxuICAgICAgICAgICAgaXNQYXN0RHVlRGlzcGF0Y2g6IG9yZGVyLmlzUGFzdER1ZURpc3BhdGNoLFxuICAgICAgICAgICAgaXNQYXN0RHVlRGVsaXZlcnk6IG9yZGVyLmlzUGFzdER1ZURlbGl2ZXJ5LFxuICAgICAgICAgICAgc2hpcHBpbmdSZWZlcmVuY2U6IG9yZGVyLnNoaXBwaW5nUmVmZXJlbmNlLFxuICAgICAgICAgICAgc2hpcHBpbmdWYWx1ZTogb3JkZXIuc2hpcHBpbmdWYWx1ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nV2VpZ2h0OiBvcmRlci5zaGlwcGluZ1dlaWdodCxcbiAgICAgICAgICAgIHNoaXBwaW5nTm90aWZpY2F0aW9uRW1haWw6IG9yZGVyLnNoaXBwaW5nTm90aWZpY2F0aW9uRW1haWwsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlckxpbmVzKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEFycmF5PE9yZGVyTGluZUludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKG9yZGVyLCAnbGluZXMnLCBuZXcgT3JkZXJMaW5lVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2lnbmVlKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEFzc2lnbmVlSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXIsICdhc3NpZ25lZScsIG5ldyBBc3NpZ25lZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVCYXNrZXQob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogQmFza2V0SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXIsICdiYXNrZXQnLCBuZXcgQmFza2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVNoaXBwaW5nTWFuaWZlc3Qob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogU2hpcHBpbmdNYW5pZmVzdEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnc2hpcHBpbmdNYW5pZmVzdCcsIG5ldyBTaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUdpZnQob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogR2lmdEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnZ2lmdCcsIG5ldyBHaWZ0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19