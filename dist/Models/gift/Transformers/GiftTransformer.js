"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Gift = _interopRequireDefault(require("../Gift"));

var _OrderTransformer = _interopRequireDefault(require("../../order/Transformers/OrderTransformer"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _BasketTransformer = _interopRequireDefault(require("../../basket/Transformers/BasketTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

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

var GiftTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(GiftTransformer, _BaseTransformer);

  function GiftTransformer() {
    _classCallCheck(this, GiftTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(GiftTransformer).apply(this, arguments));
  }

  _createClass(GiftTransformer, [{
    key: "mapData",

    /**
     * Map an gift response
     *
     * @param gift
     */
    value: function mapData(gift) {
      return new _Gift["default"]({
        id: gift.id,
        createdAt: gift.createdAt,
        completedAt: gift.completedAt,
        deletedAt: gift.deletedAt,
        updatedAt: gift.updatedAt,
        statusId: gift.statusId,
        shippingMethod: gift.shippingMethod,
        shippingPreference: gift.shippingPreference,
        notes: gift.notes,
        currency: gift.currency,
        billingPhone: gift.billingPhone,
        billingEmail: gift.billingEmail,
        billingFirstname: gift.billingFirstname,
        billingLastname: gift.billingLastname,
        billingAddress: gift.billingAddress,
        billingAddressTwo: gift.billingAddressTwo,
        billingAddressThree: gift.billingAddressThree,
        billingCity: gift.billingCity,
        billingCounty: gift.billingCounty,
        billingState: gift.billingState,
        billingCountry: gift.billingCountry,
        billingZip: gift.billingZip,
        shippingPhone: gift.shippingPhone,
        shippingEmail: gift.shippingEmail,
        shippingFirstname: gift.shippingFirstname,
        shippingLastname: gift.shippingLastname,
        shippingAddress: gift.shippingAddress,
        shippingAddressTwo: gift.shippingAddressTwo,
        shippingCity: gift.shippingCity,
        shippingCounty: gift.shippingCounty,
        shippingState: gift.shippingState,
        shippingCountry: gift.shippingCountry,
        shippingZip: gift.shippingZip,
        contactEmail: gift.contactEmail,
        contactPhone: gift.contactPhone,
        dispatchedAt: gift.dispatchedAt,
        redeemedAt: gift.redeemedAt,
        packedAt: gift.packedAt,
        placedAt: gift.placedAt,
        meta: gift.meta,
        message: gift.message,
        resourceType: gift.resourceType,
        value: gift.value,
        allowEmailDiscountOffers: gift.allowEmailDiscountOffers,
        toGiftRecipient: gift.toGiftRecipient,
        stripeCustomerId: gift.stripeCustomerId,
        withBasket: gift.withBasket,
        guest: gift.guest,
        deliveryMethod: gift.deliveryMethod,
        expectedDeliveryDate: gift.expectedDeliveryDate,
        // belongs to
        giftBasket: this.includeGiftBasket(gift),
        order: this.includeOrder(gift),
        user: this.includeUser(gift),
        redeemedBy: this.includeUser(gift),
        // accessors
        giftStatusId: gift.giftStatusId
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(gift) {
      return this.item(gift, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeOrder",
    value: function includeOrder(gift) {
      return this.item(gift, 'order', new _OrderTransformer["default"]());
    }
  }, {
    key: "includeGiftBasket",
    value: function includeGiftBasket(gift) {
      return this.item(gift, 'giftBasket', new _BasketTransformer["default"]());
    }
  }]);

  return GiftTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = GiftTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRUcmFuc2Zvcm1lciIsImdpZnQiLCJHaWZ0IiwiaWQiLCJjcmVhdGVkQXQiLCJjb21wbGV0ZWRBdCIsImRlbGV0ZWRBdCIsInVwZGF0ZWRBdCIsInN0YXR1c0lkIiwic2hpcHBpbmdNZXRob2QiLCJzaGlwcGluZ1ByZWZlcmVuY2UiLCJub3RlcyIsImN1cnJlbmN5IiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0NpdHkiLCJzaGlwcGluZ0NvdW50eSIsInNoaXBwaW5nU3RhdGUiLCJzaGlwcGluZ0NvdW50cnkiLCJzaGlwcGluZ1ppcCIsImNvbnRhY3RFbWFpbCIsImNvbnRhY3RQaG9uZSIsImRpc3BhdGNoZWRBdCIsInJlZGVlbWVkQXQiLCJwYWNrZWRBdCIsInBsYWNlZEF0IiwibWV0YSIsIm1lc3NhZ2UiLCJyZXNvdXJjZVR5cGUiLCJ2YWx1ZSIsImFsbG93RW1haWxEaXNjb3VudE9mZmVycyIsInRvR2lmdFJlY2lwaWVudCIsInN0cmlwZUN1c3RvbWVySWQiLCJ3aXRoQmFza2V0IiwiZ3Vlc3QiLCJkZWxpdmVyeU1ldGhvZCIsImV4cGVjdGVkRGVsaXZlcnlEYXRlIiwiZ2lmdEJhc2tldCIsImluY2x1ZGVHaWZ0QmFza2V0Iiwib3JkZXIiLCJpbmNsdWRlT3JkZXIiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJyZWRlZW1lZEJ5IiwiZ2lmdFN0YXR1c0lkIiwiaXRlbSIsIlVzZXJUcmFuc2Zvcm1lciIsIk9yZGVyVHJhbnNmb3JtZXIiLCJCYXNrZXRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEksRUFBMkI7QUFDL0IsYUFBTyxJQUFJQyxnQkFBSixDQUFTO0FBQ1pDLFFBQUFBLEVBQUUsRUFBRUYsSUFBSSxDQUFDRSxFQURHO0FBRVpDLFFBQUFBLFNBQVMsRUFBRUgsSUFBSSxDQUFDRyxTQUZKO0FBR1pDLFFBQUFBLFdBQVcsRUFBRUosSUFBSSxDQUFDSSxXQUhOO0FBSVpDLFFBQUFBLFNBQVMsRUFBRUwsSUFBSSxDQUFDSyxTQUpKO0FBS1pDLFFBQUFBLFNBQVMsRUFBRU4sSUFBSSxDQUFDTSxTQUxKO0FBTVpDLFFBQUFBLFFBQVEsRUFBRVAsSUFBSSxDQUFDTyxRQU5IO0FBT1pDLFFBQUFBLGNBQWMsRUFBRVIsSUFBSSxDQUFDUSxjQVBUO0FBUVpDLFFBQUFBLGtCQUFrQixFQUFFVCxJQUFJLENBQUNTLGtCQVJiO0FBU1pDLFFBQUFBLEtBQUssRUFBRVYsSUFBSSxDQUFDVSxLQVRBO0FBVVpDLFFBQUFBLFFBQVEsRUFBRVgsSUFBSSxDQUFDVyxRQVZIO0FBV1pDLFFBQUFBLFlBQVksRUFBRVosSUFBSSxDQUFDWSxZQVhQO0FBWVpDLFFBQUFBLFlBQVksRUFBRWIsSUFBSSxDQUFDYSxZQVpQO0FBYVpDLFFBQUFBLGdCQUFnQixFQUFFZCxJQUFJLENBQUNjLGdCQWJYO0FBY1pDLFFBQUFBLGVBQWUsRUFBRWYsSUFBSSxDQUFDZSxlQWRWO0FBZVpDLFFBQUFBLGNBQWMsRUFBRWhCLElBQUks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QUksQ0FBQzJEO0FBekRQLE9BQVQsQ0FBUDtBQTJESDs7O2dDQUVXM0QsSSxFQUEyQztBQUNuRCxhQUFPLEtBQUs0RCxJQUFMLENBQVU1RCxJQUFWLEVBQWdCLE1BQWhCLEVBQXdCLElBQUk2RCwyQkFBSixFQUF4QixDQUFQO0FBQ0g7OztpQ0FFWTdELEksRUFBNEM7QUFDckQsYUFBTyxLQUFLNEQsSUFBTCxDQUFVNUQsSUFBVixFQUFnQixPQUFoQixFQUF5QixJQUFJOEQsNEJBQUosRUFBekIsQ0FBUDtBQUNIOzs7c0NBRWlCOUQsSSxFQUE2QztBQUMzRCxhQUFPLEtBQUs0RCxJQUFMLENBQVU1RCxJQUFWLEVBQWdCLFlBQWhCLEVBQThCLElBQUkrRCw2QkFBSixFQUE5QixDQUFQO0FBQ0g7Ozs7RUE5RXdDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHaWZ0IGZyb20gJy4uL0dpZnQnO1xuaW1wb3J0IEdpZnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9naWZ0L0dpZnQnO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQmFza2V0IGFzIEJhc2tldEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmFza2V0L0Jhc2tldCc7XG5pbXBvcnQgQmFza2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIGdpZnQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBnaWZ0XG4gICAgICovXG4gICAgbWFwRGF0YShnaWZ0OiBHaWZ0SW50ZXJmYWNlKTogR2lmdCB7XG4gICAgICAgIHJldHVybiBuZXcgR2lmdCh7XG4gICAgICAgICAgICBpZDogZ2lmdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZ2lmdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogZ2lmdC5jb21wbGV0ZWRBdCxcbiAgICAgICAgICAgIGRlbGV0ZWRBdDogZ2lmdC5kZWxldGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGdpZnQudXBkYXRlZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IGdpZnQuc3RhdHVzSWQsXG4gICAgICAgICAgICBzaGlwcGluZ01ldGhvZDogZ2lmdC5zaGlwcGluZ01ldGhvZCxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJlZmVyZW5jZTogZ2lmdC5zaGlwcGluZ1ByZWZlcmVuY2UsXG4gICAgICAgICAgICBub3RlczogZ2lmdC5ub3RlcyxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBnaWZ0LmN1cnJlbmN5LFxuICAgICAgICAgICAgYmlsbGluZ1Bob25lOiBnaWZ0LmJpbGxpbmdQaG9uZSxcbiAgICAgICAgICAgIGJpbGxpbmdFbWFpbDogZ2lmdC5iaWxsaW5nRW1haWwsXG4gICAgICAgICAgICBiaWxsaW5nRmlyc3RuYW1lOiBnaWZ0LmJpbGxpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nTGFzdG5hbWU6IGdpZnQuYmlsbGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3M6IGdpZnQuYmlsbGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1R3bzogZ2lmdC5iaWxsaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU6IGdpZnQuYmlsbGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIGJpbGxpbmdDaXR5OiBnaWZ0LmJpbGxpbmdDaXR5LFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50eTogZ2lmdC5iaWxsaW5nQ291bnR5LFxuICAgICAgICAgICAgYmlsbGluZ1N0YXRlOiBnaWZ0LmJpbGxpbmdTdGF0ZSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHJ5OiBnaWZ0LmJpbGxpbmdDb3VudHJ5LFxuICAgICAgICAgICAgYmlsbGluZ1ppcDogZ2lmdC5iaWxsaW5nWmlwLFxuICAgICAgICAgICAgc2hpcHBpbmdQaG9uZTogZ2lmdC5zaGlwcGluZ1Bob25lLFxuICAgICAgICAgICAgc2hpcHBpbmdFbWFpbDogZ2lmdC5zaGlwcGluZ0VtYWlsLFxuICAgICAgICAgICAgc2hpcHBpbmdGaXJzdG5hbWU6IGdpZnQuc2hpcHBpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0xhc3RuYW1lOiBnaWZ0LnNoaXBwaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IGdpZnQuc2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVHdvOiBnaWZ0LnNoaXBwaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIHNoaXBwaW5nQ2l0eTogZ2lmdC5zaGlwcGluZ0NpdHksXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50eTogZ2lmdC5zaGlwcGluZ0NvdW50eSxcbiAgICAgICAgICAgIHNoaXBwaW5nU3RhdGU6IGdpZnQuc2hpcHBpbmdTdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnRyeTogZ2lmdC5zaGlwcGluZ0NvdW50cnksXG4gICAgICAgICAgICBzaGlwcGluZ1ppcDogZ2lmdC5zaGlwcGluZ1ppcCxcbiAgICAgICAgICAgIGNvbnRhY3RFbWFpbDogZ2lmdC5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IGdpZnQuY29udGFjdFBob25lLFxuICAgICAgICAgICAgZGlzcGF0Y2hlZEF0OiBnaWZ0LmRpc3BhdGNoZWRBdCxcbiAgICAgICAgICAgIHJlZGVlbWVkQXQ6IGdpZnQucmVkZWVtZWRBdCxcbiAgICAgICAgICAgIHBhY2tlZEF0OiBnaWZ0LnBhY2tlZEF0LFxuICAgICAgICAgICAgcGxhY2VkQXQ6IGdpZnQucGxhY2VkQXQsXG4gICAgICAgICAgICBtZXRhOiBnaWZ0Lm1ldGEsXG4gICAgICAgICAgICBtZXNzYWdlOiBnaWZ0Lm1lc3NhZ2UsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IGdpZnQucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgdmFsdWU6IGdpZnQudmFsdWUsXG4gICAgICAgICAgICBhbGxvd0VtYWlsRGlzY291bnRPZmZlcnM6IGdpZnQuYWxsb3dFbWFpbERpc2NvdW50T2ZmZXJzLFxuICAgICAgICAgICAgdG9HaWZ0UmVjaXBpZW50OiBnaWZ0LnRvR2lmdFJlY2lwaWVudCxcbiAgICAgICAgICAgIHN0cmlwZUN1c3RvbWVySWQ6IGdpZnQuc3RyaXBlQ3VzdG9tZXJJZCxcbiAgICAgICAgICAgIHdpdGhCYXNrZXQ6IGdpZnQud2l0aEJhc2tldCxcbiAgICAgICAgICAgIGd1ZXN0OiBnaWZ0Lmd1ZXN0LFxuICAgICAgICAgICAgZGVsaXZlcnlNZXRob2Q6IGdpZnQuZGVsaXZlcnlNZXRob2QsXG4gICAgICAgICAgICBleHBlY3RlZERlbGl2ZXJ5RGF0ZTogZ2lmdC5leHBlY3RlZERlbGl2ZXJ5RGF0ZSxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGdpZnRCYXNrZXQ6IHRoaXMuaW5jbHVkZUdpZnRCYXNrZXQoZ2lmdCksXG4gICAgICAgICAgICBvcmRlcjogdGhpcy5pbmNsdWRlT3JkZXIoZ2lmdCksXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKGdpZnQpLFxuICAgICAgICAgICAgcmVkZWVtZWRCeTogdGhpcy5pbmNsdWRlVXNlcihnaWZ0KSxcbiAgICAgICAgICAgIC8vIGFjY2Vzc29yc1xuICAgICAgICAgICAgZ2lmdFN0YXR1c0lkOiBnaWZ0LmdpZnRTdGF0dXNJZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIoZ2lmdDogR2lmdEludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0LCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyKGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBPcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnQsICdvcmRlcicsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVHaWZ0QmFza2V0KGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBCYXNrZXRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0LCAnZ2lmdEJhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=