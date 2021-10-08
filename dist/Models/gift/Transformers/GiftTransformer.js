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
        meta: gift.meta
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRUcmFuc2Zvcm1lciIsImdpZnQiLCJHaWZ0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwbGFjZWRBdCIsInBhY2tlZEF0IiwiZGlzcGF0Y2hlZEF0IiwiY29tcGxldGVkQXQiLCJkZWxldGVkQXQiLCJyZWRlZW1lZEF0IiwiZXhwZWN0ZWREZWxpdmVyeURhdGUiLCJjb2RlIiwidmFsdWUiLCJtZXNzYWdlIiwiZ2lmdFN0YXR1c0lkIiwiZ3Vlc3QiLCJhbGxvd0VtYWlsRGlzY291bnRPZmZlcnMiLCJ3aXRoQmFza2V0IiwidG9HaWZ0UmVjaXBpZW50Iiwic3RyaXBlQ3VzdG9tZXJJZCIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdFbWFpbCIsImJpbGxpbmdGaXJzdG5hbWUiLCJiaWxsaW5nTGFzdG5hbWUiLCJiaWxsaW5nQWRkcmVzcyIsImJpbGxpbmdBZGRyZXNzVHdvIiwiYmlsbGluZ0FkZHJlc3NUaHJlZSIsImJpbGxpbmdDaXR5IiwiYmlsbGluZ0NvdW50eSIsImJpbGxpbmdTdGF0ZSIsImJpbGxpbmdDb3VudHJ5IiwiYmlsbGluZ1ppcCIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ0VtYWlsIiwic2hpcHBpbmdGaXJzdG5hbWUiLCJzaGlwcGluZ0xhc3RuYW1lIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzVHdvIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdDb3VudHkiLCJzaGlwcGluZ1N0YXRlIiwic2hpcHBpbmdDb3VudHJ5Iiwic2hpcHBpbmdaaXAiLCJyZXNvdXJjZVR5cGUiLCJkaXNwYXRjaEJ5IiwiYXNzaWduZWVJZCIsImdpZnRCYXNrZXQiLCJpbmNsdWRlR2lmdEJhc2tldCIsIm9yZGVyIiwiaW5jbHVkZU9yZGVyIiwidXNlciIsImluY2x1ZGVVc2VyIiwicmVkZWVtZWRCeSIsImFzc2lnbmVlIiwiaW5jbHVkZUFzc2lnbmVlIiwic3RhdHVzSWQiLCJkZWxpdmVyeU1ldGhvZCIsImhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4iLCJoYXNUb3lzIiwic2hpcHBpbmdGZWUiLCJjaGVja291dCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwibm90ZXMiLCJjdXJyZW5jeSIsImNvbnRhY3RFbWFpbCIsImNvbnRhY3RQaG9uZSIsIm1ldGEiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiT3JkZXJUcmFuc2Zvcm1lciIsIkJhc2tldFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLGU7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsSSxFQUEyQjtBQUMvQixhQUFPLElBQUlDLGdCQUFKLENBQVM7QUFDWkMsUUFBQUEsRUFBRSxFQUFFRixJQUFJLENBQUNFLEVBREc7QUFFWkMsUUFBQUEsU0FBUyxFQUFFSCxJQUFJLENBQUNHLFNBRko7QUFHWkMsUUFBQUEsU0FBUyxFQUFFSixJQUFJLENBQUNJLFNBSEo7QUFJWkMsUUFBQUEsUUFBUSxFQUFFTCxJQUFJLENBQUNLLFFBSkg7QUFLWkMsUUFBQUEsUUFBUSxFQUFFTixJQUFJLENBQUNNLFFBTEg7QUFNWkMsUUFBQUEsWUFBWSxFQUFFUCxJQUFJLENBQUNPLFlBTlA7QUFPWkMsUUFBQUEsV0FBVyxFQUFFUixJQUFJLENBQUNRLFdBUE47QUFRWkMsUUFBQUEsU0FBUyxFQUFFVCxJQUFJLENBQUNTLFNBUko7QUFTWkMsUUFBQUEsVUFBVSxFQUFFVixJQUFJLENBQUNVLFVBVEw7QUFVWkMsUUFBQUEsb0JBQW9CLEVBQUVYLElBQUksQ0FBQ1csb0JBVmY7QUFXWkMsUUFBQUEsSUFBSSxFQUFFWixJQUFJLENBQUNZLElBWEM7QUFZWkMsUUFBQUEsS0FBSyxFQUFFYixJ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LDJCQUFKLEVBQTVCLENBQVA7QUFDSDs7OztFQTNGd0NHLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdpZnQgZnJvbSAnLi4vR2lmdCc7XG5pbXBvcnQgR2lmdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdCc7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFza2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgR2lmdEJhc2tldEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdEJhc2tldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIGdpZnQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBnaWZ0XG4gICAgICovXG4gICAgbWFwRGF0YShnaWZ0OiBHaWZ0SW50ZXJmYWNlKTogR2lmdCB7XG4gICAgICAgIHJldHVybiBuZXcgR2lmdCh7XG4gICAgICAgICAgICBpZDogZ2lmdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZ2lmdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGdpZnQudXBkYXRlZEF0LFxuICAgICAgICAgICAgcGxhY2VkQXQ6IGdpZnQucGxhY2VkQXQsXG4gICAgICAgICAgICBwYWNrZWRBdDogZ2lmdC5wYWNrZWRBdCxcbiAgICAgICAgICAgIGRpc3BhdGNoZWRBdDogZ2lmdC5kaXNwYXRjaGVkQXQsXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogZ2lmdC5jb21wbGV0ZWRBdCxcbiAgICAgICAgICAgIGRlbGV0ZWRBdDogZ2lmdC5kZWxldGVkQXQsXG4gICAgICAgICAgICByZWRlZW1lZEF0OiBnaWZ0LnJlZGVlbWVkQXQsXG4gICAgICAgICAgICBleHBlY3RlZERlbGl2ZXJ5RGF0ZTogZ2lmdC5leHBlY3RlZERlbGl2ZXJ5RGF0ZSxcbiAgICAgICAgICAgIGNvZGU6IGdpZnQuY29kZSxcbiAgICAgICAgICAgIHZhbHVlOiBnaWZ0LnZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogZ2lmdC5tZXNzYWdlLFxuICAgICAgICAgICAgZ2lmdFN0YXR1c0lkOiBnaWZ0LmdpZnRTdGF0dXNJZCxcbiAgICAgICAgICAgIGd1ZXN0OiBnaWZ0Lmd1ZXN0LFxuICAgICAgICAgICAgYWxsb3dFbWFpbERpc2NvdW50T2ZmZXJzOiBnaWZ0LmFsbG93RW1haWxEaXNjb3VudE9mZmVycyxcbiAgICAgICAgICAgIHdpdGhCYXNrZXQ6IGdpZnQud2l0aEJhc2tldCxcbiAgICAgICAgICAgIHRvR2lmdFJlY2lwaWVudDogZ2lmdC50b0dpZnRSZWNpcGllbnQsXG4gICAgICAgICAgICBzdHJpcGVDdXN0b21lcklkOiBnaWZ0LnN0cmlwZUN1c3RvbWVySWQsXG4gICAgICAgICAgICBiaWxsaW5nUGhvbmU6IGdpZnQuYmlsbGluZ1Bob25lLFxuICAgICAgICAgICAgYmlsbGluZ0VtYWlsOiBnaWZ0LmJpbGxpbmdFbWFpbCxcbiAgICAgICAgICAgIGJpbGxpbmdGaXJzdG5hbWU6IGdpZnQuYmlsbGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdMYXN0bmFtZTogZ2lmdC5iaWxsaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzczogZ2lmdC5iaWxsaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVHdvOiBnaWZ0LmJpbGxpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUaHJlZTogZ2lmdC5iaWxsaW5nQWRkcmVzc1RocmVlLFxuICAgICAgICAgICAgYmlsbGluZ0NpdHk6IGdpZnQuYmlsbGluZ0NpdHksXG4gICAgICAgICAgICBiaWxsaW5nQ291bnR5OiBnaWZ0LmJpbGxpbmdDb3VudHksXG4gICAgICAgICAgICBiaWxsaW5nU3RhdGU6IGdpZnQuYmlsbGluZ1N0YXRlLFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50cnk6IGdpZnQuYmlsbGluZ0NvdW50cnksXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBnaWZ0LmJpbGxpbmdaaXAsXG4gICAgICAgICAgICBzaGlwcGluZ1Bob25lOiBnaWZ0LnNoaXBwaW5nUGhvbmUsXG4gICAgICAgICAgICBzaGlwcGluZ0VtYWlsOiBnaWZ0LnNoaXBwaW5nRW1haWwsXG4gICAgICAgICAgICBzaGlwcGluZ0ZpcnN0bmFtZTogZ2lmdC5zaGlwcGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nTGFzdG5hbWU6IGdpZnQuc2hpcHBpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogZ2lmdC5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUd286IGdpZnQuc2hpcHBpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgc2hpcHBpbmdDaXR5OiBnaWZ0LnNoaXBwaW5nQ2l0eSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnR5OiBnaWZ0LnNoaXBwaW5nQ291bnR5LFxuICAgICAgICAgICAgc2hpcHBpbmdTdGF0ZTogZ2lmdC5zaGlwcGluZ1N0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHJ5OiBnaWZ0LnNoaXBwaW5nQ291bnRyeSxcbiAgICAgICAgICAgIHNoaXBwaW5nWmlwOiBnaWZ0LnNoaXBwaW5nWmlwLFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiBnaWZ0LnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIGRpc3BhdGNoQnk6IGdpZnQuZGlzcGF0Y2hCeSxcbiAgICAgICAgICAgIGFzc2lnbmVlSWQ6IGdpZnQuYXNzaWduZWVJZCxcbiAgICAgICAgICAgIC8vIHJlbGF0aW9uc1xuICAgICAgICAgICAgZ2lmdEJhc2tldDogdGhpcy5pbmNsdWRlR2lmdEJhc2tldChnaWZ0KSxcbiAgICAgICAgICAgIG9yZGVyOiB0aGlzLmluY2x1ZGVPcmRlcihnaWZ0KSxcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIoZ2lmdCksXG4gICAgICAgICAgICByZWRlZW1lZEJ5OiB0aGlzLmluY2x1ZGVVc2VyKGdpZnQpLFxuICAgICAgICAgICAgYXNzaWduZWU6IHRoaXMuaW5jbHVkZUFzc2lnbmVlKGdpZnQpLFxuICAgICAgICAgICAgLy8gYWNjZXNzb3JzXG4gICAgICAgICAgICBzdGF0dXNJZDogZ2lmdC5zdGF0dXNJZCxcbiAgICAgICAgICAgIGRlbGl2ZXJ5TWV0aG9kOiBnaWZ0LmRlbGl2ZXJ5TWV0aG9kLFxuICAgICAgICAgICAgaGFzUmV1c2FibGVQYWNrYWdpbmdPcHRJbjogZ2lmdC5oYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluLFxuICAgICAgICAgICAgaGFzVG95czogZ2lmdC5oYXNUb3lzLFxuICAgICAgICAgICAgc2hpcHBpbmdGZWU6IGdpZnQuc2hpcHBpbmdGZWUsXG4gICAgICAgICAgICBjaGVja291dDogZ2lmdC5jaGVja291dCxcbiAgICAgICAgICAgIC8vIEB0b2RvIGFyZSB0aGVzZSB1c2VkXG4gICAgICAgICAgICBzaGlwcGluZ01ldGhvZDogZ2lmdC5zaGlwcGluZ01ldGhvZCxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJlZmVyZW5jZTogZ2lmdC5zaGlwcGluZ1ByZWZlcmVuY2UsXG4gICAgICAgICAgICBub3RlczogZ2lmdC5ub3RlcyxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBnaWZ0LmN1cnJlbmN5LFxuICAgICAgICAgICAgY29udGFjdEVtYWlsOiBnaWZ0LmNvbnRhY3RFbWFpbCxcbiAgICAgICAgICAgIGNvbnRhY3RQaG9uZTogZ2lmdC5jb250YWN0UGhvbmUsXG4gICAgICAgICAgICBtZXRhOiBnaWZ0Lm1ldGEsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyKGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oZ2lmdCwgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlcihnaWZ0OiBHaWZ0SW50ZXJmYWNlKTogT3JkZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0LCAnb3JkZXInLCBuZXcgT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlR2lmdEJhc2tldChnaWZ0OiBHaWZ0SW50ZXJmYWNlKTogR2lmdEJhc2tldEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnQsICdnaWZ0QmFza2V0JywgbmV3IEJhc2tldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NpZ25lZShnaWZ0OiBHaWZ0SW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnQsICdhc3NpZ25lZScsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19