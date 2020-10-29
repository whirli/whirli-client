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
        hasToys: gift.hasToys,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRUcmFuc2Zvcm1lciIsImdpZnQiLCJHaWZ0IiwiaWQiLCJjcmVhdGVkQXQiLCJjb21wbGV0ZWRBdCIsImRlbGV0ZWRBdCIsInVwZGF0ZWRBdCIsInN0YXR1c0lkIiwiaGFzVG95cyIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwibm90ZXMiLCJjdXJyZW5jeSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdFbWFpbCIsImJpbGxpbmdGaXJzdG5hbWUiLCJiaWxsaW5nTGFzdG5hbWUiLCJiaWxsaW5nQWRkcmVzcyIsImJpbGxpbmdBZGRyZXNzVHdvIiwiYmlsbGluZ0FkZHJlc3NUaHJlZSIsImJpbGxpbmdDaXR5IiwiYmlsbGluZ0NvdW50eSIsImJpbGxpbmdTdGF0ZSIsImJpbGxpbmdDb3VudHJ5IiwiYmlsbGluZ1ppcCIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ0VtYWlsIiwic2hpcHBpbmdGaXJzdG5hbWUiLCJzaGlwcGluZ0xhc3RuYW1lIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzVHdvIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdDb3VudHkiLCJzaGlwcGluZ1N0YXRlIiwic2hpcHBpbmdDb3VudHJ5Iiwic2hpcHBpbmdaaXAiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJkaXNwYXRjaGVkQXQiLCJyZWRlZW1lZEF0IiwicGFja2VkQXQiLCJwbGFjZWRBdCIsIm1ldGEiLCJtZXNzYWdlIiwicmVzb3VyY2VUeXBlIiwidmFsdWUiLCJhbGxvd0VtYWlsRGlzY291bnRPZmZlcnMiLCJ0b0dpZnRSZWNpcGllbnQiLCJzdHJpcGVDdXN0b21lcklkIiwid2l0aEJhc2tldCIsImd1ZXN0IiwiZGVsaXZlcnlNZXRob2QiLCJleHBlY3RlZERlbGl2ZXJ5RGF0ZSIsImdpZnRCYXNrZXQiLCJpbmNsdWRlR2lmdEJhc2tldCIsIm9yZGVyIiwiaW5jbHVkZU9yZGVyIiwidXNlciIsImluY2x1ZGVVc2VyIiwicmVkZWVtZWRCeSIsImdpZnRTdGF0dXNJZCIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJPcmRlclRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsZTs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxJLEVBQTJCO0FBQy9CLGFBQU8sSUFBSUMsZ0JBQUosQ0FBUztBQUNaQyxRQUFBQSxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFERztBQUVaQyxRQUFBQSxTQUFTLEVBQUVILElBQUksQ0FBQ0csU0FGSjtBQUdaQyxRQUFBQSxXQUFXLEVBQUVKLElBQUksQ0FBQ0ksV0FITjtBQUlaQyxRQUFBQSxTQUFTLEVBQUVMLElBQUksQ0FBQ0ssU0FKSjtBQUtaQyxRQUFBQSxTQUFTLEVBQUVOLElBQUksQ0FBQ00sU0FMSjtBQU1aQyxRQUFBQSxRQUFRLEVBQUVQLElBQUksQ0FBQ08sUUFOSDtBQU9aQyxRQUFBQSxPQUFPLEVBQUVSLElBQUksQ0FBQ1EsT0FQRjtBQVFaQyxRQUFBQSxjQUFjLEVBQUVULElBQUksQ0FBQ1MsY0FSVDtBQVNaQyxRQUFBQSxrQkFBa0IsRUFBRVYsSUFBSSxDQUFDVSxrQkFUYjtBQVVaQyxRQUFBQSxLQUFLLEVBQUVYLElBQUksQ0FBQ1csS0FWQTtBQVdaQyxRQUFBQSxRQUFRLEVBQUVaLElBQUksQ0FBQ1ksUUFYSDtBQVlaQyxRQUFBQSxZQUFZLEVBQUViLElBQUksQ0FBQ2EsWUFaUDtBQWFaQyxRQUFBQSxZQUFZLEVBQUVkLElBQUksQ0FBQ2MsWUFiUDtBQWNaQyxRQUFBQSxnQkFBZ0IsRUFBRWYsSUFBSSxDQUFDZSxnQkFkWDtBQWVaQyxRQUFBQSxlQUFlLEVB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Q0FBaUIxRCxJQUFqQixDQXhEQTtBQXlEWjtBQUNBNEQsUUFBQUEsWUFBWSxFQUFFNUQsSUFBSSxDQUFDNEQ7QUExRFAsT0FBVCxDQUFQO0FBNERIOzs7Z0NBRVc1RCxJLEVBQTJDO0FBQ25ELGFBQU8sS0FBSzZELElBQUwsQ0FBVTdELElBQVYsRUFBZ0IsTUFBaEIsRUFBd0IsSUFBSThELDJCQUFKLEVBQXhCLENBQVA7QUFDSDs7O2lDQUVZOUQsSSxFQUE0QztBQUNyRCxhQUFPLEtBQUs2RCxJQUFMLENBQVU3RCxJQUFWLEVBQWdCLE9BQWhCLEVBQXlCLElBQUkrRCw0QkFBSixFQUF6QixDQUFQO0FBQ0g7OztzQ0FFaUIvRCxJLEVBQWlEO0FBQy9ELGFBQU8sS0FBSzZELElBQUwsQ0FBVTdELElBQVYsRUFBZ0IsWUFBaEIsRUFBOEIsSUFBSWdFLDZCQUFKLEVBQTlCLENBQVA7QUFDSDs7OztFQS9Fd0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdpZnQgZnJvbSAnLi4vR2lmdCc7XG5pbXBvcnQgR2lmdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdCc7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFza2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgR2lmdEJhc2tldEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdEJhc2tldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIGdpZnQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBnaWZ0XG4gICAgICovXG4gICAgbWFwRGF0YShnaWZ0OiBHaWZ0SW50ZXJmYWNlKTogR2lmdCB7XG4gICAgICAgIHJldHVybiBuZXcgR2lmdCh7XG4gICAgICAgICAgICBpZDogZ2lmdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZ2lmdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogZ2lmdC5jb21wbGV0ZWRBdCxcbiAgICAgICAgICAgIGRlbGV0ZWRBdDogZ2lmdC5kZWxldGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGdpZnQudXBkYXRlZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IGdpZnQuc3RhdHVzSWQsXG4gICAgICAgICAgICBoYXNUb3lzOiBnaWZ0Lmhhc1RveXMsXG4gICAgICAgICAgICBzaGlwcGluZ01ldGhvZDogZ2lmdC5zaGlwcGluZ01ldGhvZCxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJlZmVyZW5jZTogZ2lmdC5zaGlwcGluZ1ByZWZlcmVuY2UsXG4gICAgICAgICAgICBub3RlczogZ2lmdC5ub3RlcyxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBnaWZ0LmN1cnJlbmN5LFxuICAgICAgICAgICAgYmlsbGluZ1Bob25lOiBnaWZ0LmJpbGxpbmdQaG9uZSxcbiAgICAgICAgICAgIGJpbGxpbmdFbWFpbDogZ2lmdC5iaWxsaW5nRW1haWwsXG4gICAgICAgICAgICBiaWxsaW5nRmlyc3RuYW1lOiBnaWZ0LmJpbGxpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nTGFzdG5hbWU6IGdpZnQuYmlsbGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3M6IGdpZnQuYmlsbGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1R3bzogZ2lmdC5iaWxsaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU6IGdpZnQuYmlsbGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIGJpbGxpbmdDaXR5OiBnaWZ0LmJpbGxpbmdDaXR5LFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50eTogZ2lmdC5iaWxsaW5nQ291bnR5LFxuICAgICAgICAgICAgYmlsbGluZ1N0YXRlOiBnaWZ0LmJpbGxpbmdTdGF0ZSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHJ5OiBnaWZ0LmJpbGxpbmdDb3VudHJ5LFxuICAgICAgICAgICAgYmlsbGluZ1ppcDogZ2lmdC5iaWxsaW5nWmlwLFxuICAgICAgICAgICAgc2hpcHBpbmdQaG9uZTogZ2lmdC5zaGlwcGluZ1Bob25lLFxuICAgICAgICAgICAgc2hpcHBpbmdFbWFpbDogZ2lmdC5zaGlwcGluZ0VtYWlsLFxuICAgICAgICAgICAgc2hpcHBpbmdGaXJzdG5hbWU6IGdpZnQuc2hpcHBpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0xhc3RuYW1lOiBnaWZ0LnNoaXBwaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IGdpZnQuc2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVHdvOiBnaWZ0LnNoaXBwaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIHNoaXBwaW5nQ2l0eTogZ2lmdC5zaGlwcGluZ0NpdHksXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50eTogZ2lmdC5zaGlwcGluZ0NvdW50eSxcbiAgICAgICAgICAgIHNoaXBwaW5nU3RhdGU6IGdpZnQuc2hpcHBpbmdTdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnRyeTogZ2lmdC5zaGlwcGluZ0NvdW50cnksXG4gICAgICAgICAgICBzaGlwcGluZ1ppcDogZ2lmdC5zaGlwcGluZ1ppcCxcbiAgICAgICAgICAgIGNvbnRhY3RFbWFpbDogZ2lmdC5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IGdpZnQuY29udGFjdFBob25lLFxuICAgICAgICAgICAgZGlzcGF0Y2hlZEF0OiBnaWZ0LmRpc3BhdGNoZWRBdCxcbiAgICAgICAgICAgIHJlZGVlbWVkQXQ6IGdpZnQucmVkZWVtZWRBdCxcbiAgICAgICAgICAgIHBhY2tlZEF0OiBnaWZ0LnBhY2tlZEF0LFxuICAgICAgICAgICAgcGxhY2VkQXQ6IGdpZnQucGxhY2VkQXQsXG4gICAgICAgICAgICBtZXRhOiBnaWZ0Lm1ldGEsXG4gICAgICAgICAgICBtZXNzYWdlOiBnaWZ0Lm1lc3NhZ2UsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IGdpZnQucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgdmFsdWU6IGdpZnQudmFsdWUsXG4gICAgICAgICAgICBhbGxvd0VtYWlsRGlzY291bnRPZmZlcnM6IGdpZnQuYWxsb3dFbWFpbERpc2NvdW50T2ZmZXJzLFxuICAgICAgICAgICAgdG9HaWZ0UmVjaXBpZW50OiBnaWZ0LnRvR2lmdFJlY2lwaWVudCxcbiAgICAgICAgICAgIHN0cmlwZUN1c3RvbWVySWQ6IGdpZnQuc3RyaXBlQ3VzdG9tZXJJZCxcbiAgICAgICAgICAgIHdpdGhCYXNrZXQ6IGdpZnQud2l0aEJhc2tldCxcbiAgICAgICAgICAgIGd1ZXN0OiBnaWZ0Lmd1ZXN0LFxuICAgICAgICAgICAgZGVsaXZlcnlNZXRob2Q6IGdpZnQuZGVsaXZlcnlNZXRob2QsXG4gICAgICAgICAgICBleHBlY3RlZERlbGl2ZXJ5RGF0ZTogZ2lmdC5leHBlY3RlZERlbGl2ZXJ5RGF0ZSxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGdpZnRCYXNrZXQ6IHRoaXMuaW5jbHVkZUdpZnRCYXNrZXQoZ2lmdCksXG4gICAgICAgICAgICBvcmRlcjogdGhpcy5pbmNsdWRlT3JkZXIoZ2lmdCksXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKGdpZnQpLFxuICAgICAgICAgICAgcmVkZWVtZWRCeTogdGhpcy5pbmNsdWRlVXNlcihnaWZ0KSxcbiAgICAgICAgICAgIC8vIGFjY2Vzc29yc1xuICAgICAgICAgICAgZ2lmdFN0YXR1c0lkOiBnaWZ0LmdpZnRTdGF0dXNJZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIoZ2lmdDogR2lmdEludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0LCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyKGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBPcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnQsICdvcmRlcicsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVHaWZ0QmFza2V0KGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBHaWZ0QmFza2V0SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oZ2lmdCwgJ2dpZnRCYXNrZXQnLCBuZXcgQmFza2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19