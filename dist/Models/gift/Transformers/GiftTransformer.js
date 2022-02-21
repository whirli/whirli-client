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
        updatedAt: gift.updatedAt,
        placedAt: gift.placedAt,
        packedAt: gift.packedAt,
        dispatchedAt: gift.dispatchedAt,
        completedAt: gift.completedAt,
        deletedAt: gift.deletedAt,
        redeemedAt: gift.redeemedAt,
        expectedDeliveryDate: gift.expectedDeliveryDate,
        code: gift.code,
        value: gift.value,
        message: gift.message,
        giftStatusId: gift.giftStatusId,
        guest: gift.guest,
        allowEmailDiscountOffers: gift.allowEmailDiscountOffers,
        withBasket: gift.withBasket,
        toGiftRecipient: gift.toGiftRecipient,
        stripeCustomerId: gift.stripeCustomerId,
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
        resourceType: gift.resourceType,
        dispatchBy: gift.dispatchBy,
        assigneeId: gift.assigneeId,
        // relations
        giftBasket: this.includeGiftBasket(gift),
        order: this.includeOrder(gift),
        user: this.includeUser(gift),
        redeemedBy: this.includeUser(gift),
        assignee: this.includeAssignee(gift),
        // accessors
        statusId: gift.statusId,
        deliveryMethod: gift.deliveryMethod,
        hasReusablePackagingOptIn: gift.hasReusablePackagingOptIn,
        hasToys: gift.hasToys,
        shippingFee: gift.shippingFee,
        checkout: gift.checkout,
        // @todo are these used
        shippingMethod: gift.shippingMethod,
        shippingPreference: gift.shippingPreference,
        notes: gift.notes,
        currency: gift.currency,
        contactEmail: gift.contactEmail,
        contactPhone: gift.contactPhone,
        meta: gift.meta,
        shippingNotificationEmail: gift.shippingNotificationEmail
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
  }, {
    key: "includeAssignee",
    value: function includeAssignee(gift) {
      return this.item(gift, 'assignee', new _UserTransformer["default"]());
    }
  }]);

  return GiftTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = GiftTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRUcmFuc2Zvcm1lciIsImdpZnQiLCJHaWZ0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwbGFjZWRBdCIsInBhY2tlZEF0IiwiZGlzcGF0Y2hlZEF0IiwiY29tcGxldGVkQXQiLCJkZWxldGVkQXQiLCJyZWRlZW1lZEF0IiwiZXhwZWN0ZWREZWxpdmVyeURhdGUiLCJjb2RlIiwidmFsdWUiLCJtZXNzYWdlIiwiZ2lmdFN0YXR1c0lkIiwiZ3Vlc3QiLCJhbGxvd0VtYWlsRGlzY291bnRPZmZlcnMiLCJ3aXRoQmFza2V0IiwidG9HaWZ0UmVjaXBpZW50Iiwic3RyaXBlQ3VzdG9tZXJJZCIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdFbWFpbCIsImJpbGxpbmdGaXJzdG5hbWUiLCJiaWxsaW5nTGFzdG5hbWUiLCJiaWxsaW5nQWRkcmVzcyIsImJpbGxpbmdBZGRyZXNzVHdvIiwiYmlsbGluZ0FkZHJlc3NUaHJlZSIsImJpbGxpbmdDaXR5IiwiYmlsbGluZ0NvdW50eSIsImJpbGxpbmdTdGF0ZSIsImJpbGxpbmdDb3VudHJ5IiwiYmlsbGluZ1ppcCIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ0VtYWlsIiwic2hpcHBpbmdGaXJzdG5hbWUiLCJzaGlwcGluZ0xhc3RuYW1lIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzVHdvIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdDb3VudHkiLCJzaGlwcGluZ1N0YXRlIiwic2hpcHBpbmdDb3VudHJ5Iiwic2hpcHBpbmdaaXAiLCJyZXNvdXJjZVR5cGUiLCJkaXNwYXRjaEJ5IiwiYXNzaWduZWVJZCIsImdpZnRCYXNrZXQiLCJpbmNsdWRlR2lmdEJhc2tldCIsIm9yZGVyIiwiaW5jbHVkZU9yZGVyIiwidXNlciIsImluY2x1ZGVVc2VyIiwicmVkZWVtZWRCeSIsImFzc2lnbmVlIiwiaW5jbHVkZUFzc2lnbmVlIiwic3RhdHVzSWQiLCJkZWxpdmVyeU1ldGhvZCIsImhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4iLCJoYXNUb3lzIiwic2hpcHBpbmdGZWUiLCJjaGVja291dCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwibm90ZXMiLCJjdXJyZW5jeSIsImNvbnRhY3RFbWFpbCIsImNvbnRhY3RQaG9uZSIsIm1ldGEiLCJzaGlwcGluZ05vdGlmaWNhdGlvbkVtYWlsIiwiaXRlbSIsIlVzZXJUcmFuc2Zvcm1lciIsIk9yZGVyVHJhbnNmb3JtZXIiLCJCYXNrZXRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxlOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEksRUFBMkI7QUFDL0IsYUFBTyxJQUFJQyxnQkFBSixDQUFTO0FBQ1pDLFFBQUFBLEVBQUUsRUFBRUYsSUFBSSxDQUFDRSxFQURHO0FBRVpDLFFBQUFBLFNBQVMsRUFBRUgsSUFBSSxDQUFDRyxTQUZKO0FBR1pDLFFBQUFBLFNBQVMsRUFBRUosSUFBSSxDQUFDSSxTQUhKO0FBSVpDLFFBQUFBLFFBQVEsRUFBRUwsSUFBSSxDQUFDSyxRQUpIO0FBS1pDLFFBQUFBLFFBQVEsRUFBRU4sSUFBSSxDQUFDTSxRQUxIO0FBTVpDLFFBQUFBLFlBQVksRUFBRVAsSUFBSSxDQUFDTyxZQU5QO0FBT1pDLFFBQUFBLFdBQVcsRUFBRVIsSUFBSSxDQUFDUSxXQVBOO0FBUVpDLFFBQUFBLFNBQVMsRUFBRVQsSUFBSSxDQUFDUyxTQVJKO0FBU1pDLFFBQUFBLFVBQVUsRUFBRVYsSUFBSSxDQUFDVSxVQVRMO0FBVVpDLFFBQUFBLG9CQUFvQixFQUFFWCxJQUFJLENBQUNXLG9CQVZmO0FBV1pDLFFBQUFBLElBQUksRUFBRVosSUFBSSxDQUFDWSxJ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Q0FFZXpFLEksRUFBMkM7QUFDdkQsYUFBTyxLQUFLc0UsSUFBTCxDQUFVdEUsSUFBVixFQUFnQixVQUFoQixFQUE0QixJQUFJdUUsMkJBQUosRUFBNUIsQ0FBUDtBQUNIOzs7O0VBNUZ3Q0csNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2lmdCBmcm9tICcuLi9HaWZ0JztcbmltcG9ydCBHaWZ0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZ2lmdC9HaWZ0JztcbmltcG9ydCBPcmRlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyJztcbmltcG9ydCBPcmRlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL29yZGVyL1RyYW5zZm9ybWVycy9PcmRlclRyYW5zZm9ybWVyJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNrZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iYXNrZXQvVHJhbnNmb3JtZXJzL0Jhc2tldFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBHaWZ0QmFza2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZ2lmdC9HaWZ0QmFza2V0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lmdFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gZ2lmdCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGdpZnRcbiAgICAgKi9cbiAgICBtYXBEYXRhKGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBHaWZ0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBHaWZ0KHtcbiAgICAgICAgICAgIGlkOiBnaWZ0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBnaWZ0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogZ2lmdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBwbGFjZWRBdDogZ2lmdC5wbGFjZWRBdCxcbiAgICAgICAgICAgIHBhY2tlZEF0OiBnaWZ0LnBhY2tlZEF0LFxuICAgICAgICAgICAgZGlzcGF0Y2hlZEF0OiBnaWZ0LmRpc3BhdGNoZWRBdCxcbiAgICAgICAgICAgIGNvbXBsZXRlZEF0OiBnaWZ0LmNvbXBsZXRlZEF0LFxuICAgICAgICAgICAgZGVsZXRlZEF0OiBnaWZ0LmRlbGV0ZWRBdCxcbiAgICAgICAgICAgIHJlZGVlbWVkQXQ6IGdpZnQucmVkZWVtZWRBdCxcbiAgICAgICAgICAgIGV4cGVjdGVkRGVsaXZlcnlEYXRlOiBnaWZ0LmV4cGVjdGVkRGVsaXZlcnlEYXRlLFxuICAgICAgICAgICAgY29kZTogZ2lmdC5jb2RlLFxuICAgICAgICAgICAgdmFsdWU6IGdpZnQudmFsdWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBnaWZ0Lm1lc3NhZ2UsXG4gICAgICAgICAgICBnaWZ0U3RhdHVzSWQ6IGdpZnQuZ2lmdFN0YXR1c0lkLFxuICAgICAgICAgICAgZ3Vlc3Q6IGdpZnQuZ3Vlc3QsXG4gICAgICAgICAgICBhbGxvd0VtYWlsRGlzY291bnRPZmZlcnM6IGdpZnQuYWxsb3dFbWFpbERpc2NvdW50T2ZmZXJzLFxuICAgICAgICAgICAgd2l0aEJhc2tldDogZ2lmdC53aXRoQmFza2V0LFxuICAgICAgICAgICAgdG9HaWZ0UmVjaXBpZW50OiBnaWZ0LnRvR2lmdFJlY2lwaWVudCxcbiAgICAgICAgICAgIHN0cmlwZUN1c3RvbWVySWQ6IGdpZnQuc3RyaXBlQ3VzdG9tZXJJZCxcbiAgICAgICAgICAgIGJpbGxpbmdQaG9uZTogZ2lmdC5iaWxsaW5nUGhvbmUsXG4gICAgICAgICAgICBiaWxsaW5nRW1haWw6IGdpZnQuYmlsbGluZ0VtYWlsLFxuICAgICAgICAgICAgYmlsbGluZ0ZpcnN0bmFtZTogZ2lmdC5iaWxsaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0xhc3RuYW1lOiBnaWZ0LmJpbGxpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiBnaWZ0LmJpbGxpbmdBZGRyZXNzLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUd286IGdpZnQuYmlsbGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1RocmVlOiBnaWZ0LmJpbGxpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBiaWxsaW5nQ2l0eTogZ2lmdC5iaWxsaW5nQ2l0eSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHk6IGdpZnQuYmlsbGluZ0NvdW50eSxcbiAgICAgICAgICAgIGJpbGxpbmdTdGF0ZTogZ2lmdC5iaWxsaW5nU3RhdGUsXG4gICAgICAgICAgICBiaWxsaW5nQ291bnRyeTogZ2lmdC5iaWxsaW5nQ291bnRyeSxcbiAgICAgICAgICAgIGJpbGxpbmdaaXA6IGdpZnQuYmlsbGluZ1ppcCxcbiAgICAgICAgICAgIHNoaXBwaW5nUGhvbmU6IGdpZnQuc2hpcHBpbmdQaG9uZSxcbiAgICAgICAgICAgIHNoaXBwaW5nRW1haWw6IGdpZnQuc2hpcHBpbmdFbWFpbCxcbiAgICAgICAgICAgIHNoaXBwaW5nRmlyc3RuYW1lOiBnaWZ0LnNoaXBwaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdMYXN0bmFtZTogZ2lmdC5zaGlwcGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBnaWZ0LnNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1R3bzogZ2lmdC5zaGlwcGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBzaGlwcGluZ0NpdHk6IGdpZnQuc2hpcHBpbmdDaXR5LFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHk6IGdpZnQuc2hpcHBpbmdDb3VudHksXG4gICAgICAgICAgICBzaGlwcGluZ1N0YXRlOiBnaWZ0LnNoaXBwaW5nU3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50cnk6IGdpZnQuc2hpcHBpbmdDb3VudHJ5LFxuICAgICAgICAgICAgc2hpcHBpbmdaaXA6IGdpZnQuc2hpcHBpbmdaaXAsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IGdpZnQucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgZGlzcGF0Y2hCeTogZ2lmdC5kaXNwYXRjaEJ5LFxuICAgICAgICAgICAgYXNzaWduZWVJZDogZ2lmdC5hc3NpZ25lZUlkLFxuICAgICAgICAgICAgLy8gcmVsYXRpb25zXG4gICAgICAgICAgICBnaWZ0QmFza2V0OiB0aGlzLmluY2x1ZGVHaWZ0QmFza2V0KGdpZnQpLFxuICAgICAgICAgICAgb3JkZXI6IHRoaXMuaW5jbHVkZU9yZGVyKGdpZnQpLFxuICAgICAgICAgICAgdXNlcjogdGhpcy5pbmNsdWRlVXNlcihnaWZ0KSxcbiAgICAgICAgICAgIHJlZGVlbWVkQnk6IHRoaXMuaW5jbHVkZVVzZXIoZ2lmdCksXG4gICAgICAgICAgICBhc3NpZ25lZTogdGhpcy5pbmNsdWRlQXNzaWduZWUoZ2lmdCksXG4gICAgICAgICAgICAvLyBhY2Nlc3NvcnNcbiAgICAgICAgICAgIHN0YXR1c0lkOiBnaWZ0LnN0YXR1c0lkLFxuICAgICAgICAgICAgZGVsaXZlcnlNZXRob2Q6IGdpZnQuZGVsaXZlcnlNZXRob2QsXG4gICAgICAgICAgICBoYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluOiBnaWZ0Lmhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4sXG4gICAgICAgICAgICBoYXNUb3lzOiBnaWZ0Lmhhc1RveXMsXG4gICAgICAgICAgICBzaGlwcGluZ0ZlZTogZ2lmdC5zaGlwcGluZ0ZlZSxcbiAgICAgICAgICAgIGNoZWNrb3V0OiBnaWZ0LmNoZWNrb3V0LFxuICAgICAgICAgICAgLy8gQHRvZG8gYXJlIHRoZXNlIHVzZWRcbiAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kOiBnaWZ0LnNoaXBwaW5nTWV0aG9kLFxuICAgICAgICAgICAgc2hpcHBpbmdQcmVmZXJlbmNlOiBnaWZ0LnNoaXBwaW5nUHJlZmVyZW5jZSxcbiAgICAgICAgICAgIG5vdGVzOiBnaWZ0Lm5vdGVzLFxuICAgICAgICAgICAgY3VycmVuY3k6IGdpZnQuY3VycmVuY3ksXG4gICAgICAgICAgICBjb250YWN0RW1haWw6IGdpZnQuY29udGFjdEVtYWlsLFxuICAgICAgICAgICAgY29udGFjdFBob25lOiBnaWZ0LmNvbnRhY3RQaG9uZSxcbiAgICAgICAgICAgIG1ldGE6IGdpZnQubWV0YSxcbiAgICAgICAgICAgIHNoaXBwaW5nTm90aWZpY2F0aW9uRW1haWw6IGdpZnQuc2hpcHBpbmdOb3RpZmljYXRpb25FbWFpbCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIoZ2lmdDogR2lmdEludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0LCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyKGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBPcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnQsICdvcmRlcicsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVHaWZ0QmFza2V0KGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBHaWZ0QmFza2V0SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oZ2lmdCwgJ2dpZnRCYXNrZXQnLCBuZXcgQmFza2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2lnbmVlKGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oZ2lmdCwgJ2Fzc2lnbmVlJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=