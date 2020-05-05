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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRUcmFuc2Zvcm1lciIsImdpZnQiLCJHaWZ0IiwiaWQiLCJjcmVhdGVkQXQiLCJjb21wbGV0ZWRBdCIsImRlbGV0ZWRBdCIsInVwZGF0ZWRBdCIsInN0YXR1c0lkIiwiaGFzVG95cyIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwibm90ZXMiLCJjdXJyZW5jeSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdFbWFpbCIsImJpbGxpbmdGaXJzdG5hbWUiLCJiaWxsaW5nTGFzdG5hbWUiLCJiaWxsaW5nQWRkcmVzcyIsImJpbGxpbmdBZGRyZXNzVHdvIiwiYmlsbGluZ0FkZHJlc3NUaHJlZSIsImJpbGxpbmdDaXR5IiwiYmlsbGluZ0NvdW50eSIsImJpbGxpbmdTdGF0ZSIsImJpbGxpbmdDb3VudHJ5IiwiYmlsbGluZ1ppcCIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ0VtYWlsIiwic2hpcHBpbmdGaXJzdG5hbWUiLCJzaGlwcGluZ0xhc3RuYW1lIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzVHdvIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdDb3VudHkiLCJzaGlwcGluZ1N0YXRlIiwic2hpcHBpbmdDb3VudHJ5Iiwic2hpcHBpbmdaaXAiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJkaXNwYXRjaGVkQXQiLCJyZWRlZW1lZEF0IiwicGFja2VkQXQiLCJwbGFjZWRBdCIsIm1ldGEiLCJtZXNzYWdlIiwicmVzb3VyY2VUeXBlIiwidmFsdWUiLCJhbGxvd0VtYWlsRGlzY291bnRPZmZlcnMiLCJ0b0dpZnRSZWNpcGllbnQiLCJzdHJpcGVDdXN0b21lcklkIiwid2l0aEJhc2tldCIsImd1ZXN0IiwiZGVsaXZlcnlNZXRob2QiLCJleHBlY3RlZERlbGl2ZXJ5RGF0ZSIsImdpZnRCYXNrZXQiLCJpbmNsdWRlR2lmdEJhc2tldCIsIm9yZGVyIiwiaW5jbHVkZU9yZGVyIiwidXNlciIsImluY2x1ZGVVc2VyIiwicmVkZWVtZWRCeSIsImdpZnRTdGF0dXNJZCIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJPcmRlclRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxJLEVBQTJCO0FBQy9CLGFBQU8sSUFBSUMsZ0JBQUosQ0FBUztBQUNaQyxRQUFBQSxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFERztBQUVaQyxRQUFBQSxTQUFTLEVBQUVILElBQUksQ0FBQ0csU0FGSjtBQUdaQyxRQUFBQSxXQUFXLEVBQUVKLElBQUksQ0FBQ0ksV0FITjtBQUlaQyxRQUFBQSxTQUFTLEVBQUVMLElBQUksQ0FBQ0ssU0FKSjtBQUtaQyxRQUFBQSxTQUFTLEVBQUVOLElBQUksQ0FBQ00sU0FMSjtBQU1aQyxRQUFBQSxRQUFRLEVBQUVQLElBQUksQ0FBQ08sUUFOSDtBQU9aQyxRQUFBQSxPQUFPLEVBQUVSLElBQUksQ0FBQ1EsT0FQRjtBQVFaQyxRQUFBQSxjQUFjLEVBQUVULElBQUksQ0FBQ1MsY0FSVDtBQVNaQyxRQUFBQSxrQkFBa0IsRUFBRVYsSUFBSSxDQUFDVSxrQkFUYjtBQVVaQyxRQUFBQSxLQUFLLEVBQUVYLElBQUksQ0FBQ1csS0FWQTtBQVdaQyxRQUFBQSxRQUFRLEVBQUVaLElBQUksQ0FBQ1ksUUFYSDtBQVlaQyxRQUFBQSxZQUFZLEVBQUViLElBQUksQ0FBQ2EsWUFaUDtBQWFaQyxRQUFBQSxZQUFZLEVBQUVkLElBQUksQ0FBQ2MsWUFiUDtBQWNaQyxRQUFBQSxnQkFBZ0IsRUFBRWYsSUFBSSxDQUFDZSxnQkFkWDtBQWVaQyxRQUFBQSxlQUFlLEVBQUVoQixJQUFJLENBQUNnQixlQWZWO0FBZ0JaQyxRQUFBQSxjQUFjLEVBQUVqQixJQUFJLENBQUNpQixjQWhCVDtBQWlCWkMsUUFBQUEsaUJBQWlCLEVBQUVsQixJQUFJLENBQUNrQixpQkFqQlo7QUFrQlpDLFFBQUFBLG1CQUFtQixFQUFFbkIsSUFBSSxDQUFDbUIsbUJBbEJkO0FBbUJaQyxRQUFBQSxXQUFXLEVBQUVwQixJQUFJLENBQUNvQixXQW5CTjtBQW9CWkMsUUFBQUEsYUFBYSxFQUFFckIsSUFBSSxDQUFDcUIsYUFwQlI7QUFxQlpDLFFBQUFBLFlBQVksRUFBRXRCLElBQUksQ0FBQ3NCLFlBckJQO0FBc0JaQyxRQUFBQSxjQUFjLEVBQUV2QixJQUFJLENBQUN1QixjQXRCVDtBQXVCWkMsUUFBQUEsVUFBVSxFQUFFeEIsSUFBSSxDQUFDd0IsVUF2Qkw7QUF3QlpDLFFBQUFBLGFBQWEsRUFBRXpCLElBQUksQ0FBQ3lCLGFBeEJSO0FBeUJaQyxRQUFBQSxhQUFhLEVBQUUxQixJQUFJLENBQUMwQixhQXpCUjtBQTBCWkMsUUFBQUEsaUJBQWlCLEVBQUUzQixJQUFJLENBQUMyQixpQkExQlo7QUEyQlpDLFFBQUFBLGdCQUFnQixFQUFFNUIsSUFBSSxDQUFDNEIsZ0JBM0JYO0FBNEJaQyxRQUFBQSxlQUFlLEVBQUU3QixJQUFJLENBQUM2QixlQTVCVjtBQTZCWkMsUUFBQUEsa0JBQWtCLEVBQUU5QixJQUFJLENBQUM4QixrQkE3QmI7QUE4QlpDLFFBQUFBLFlBQVksRUFBRS9CLElBQUksQ0FBQytCLFlBOUJQO0FBK0JaQyxRQUFBQSxjQUFjLEVBQUVoQyxJQUFJLENBQUNnQyxjQS9CVDtBQWdDWkMsUUFBQUEsYUFBYSxFQUFFakMsSUFBSSxDQUFDaUMsYUFoQ1I7QUFpQ1pDLFFBQUFBLGVBQWUsRUFBRWxDLElBQUksQ0FBQ2tDLGVBakNWO0FBa0NaQyxRQUFBQSxXQUFXLEVBQUVuQyxJQUFJLENBQUNtQyxXQWxDTjtBQW1DWkMsUUFBQUEsWUFBWSxFQUFFcEMsSUFBSSxDQUFDb0MsWUFuQ1A7QUFvQ1pDLFFBQUFBLFlBQVksRUFBRXJDLElBQUksQ0FBQ3FDLFlBcENQO0FBcUNaQyxRQUFBQSxZQUFZLEVBQUV0QyxJQUFJLENBQUNzQyxZQXJDUDtBQXNDWkMsUUFBQUEsVUFBVSxFQUFFdkMsSUFBSSxDQUFDdUMsVUF0Q0w7QUF1Q1pDLFFBQUFBLFFBQVEsRUFBRXhDLElBQUksQ0FBQ3dDLFFBdkNIO0FBd0NaQyxRQUFBQSxRQUFRLEVBQUV6QyxJQUFJLENBQUN5QyxRQXhDSDtBQXlDWkMsUUFBQUEsSUFBSSxFQUFFMUMsSUFBSSxDQUFDMEMsSUF6Q0M7QUEwQ1pDLFFBQUFBLE9BQU8sRUFBRTNDLElBQUksQ0FBQzJDLE9BMUNGO0FBMkNaQyxRQUFBQSxZQUFZLEVBQUU1QyxJQUFJLENBQUM0QyxZQTNDUDtBQTRDWkMsUUFBQUEsS0FBSyxFQUFFN0MsSUFBSSxDQUFDNkMsS0E1Q0E7QUE2Q1pDLFFBQUFBLHdCQUF3QixFQUFFOUMsSUFBSSxDQUFDOEMsd0JBN0NuQjtBQThDWkMsUUFBQUEsZUFBZSxFQUFFL0MsSUFBSSxDQUFDK0MsZUE5Q1Y7QUErQ1pDLFFBQUFBLGdCQUFnQixFQUFFaEQsSUFBSSxDQUFDZ0QsZ0JBL0NYO0FBZ0RaQyxRQUFBQSxVQUFVLEVBQUVqRCxJQUFJLENBQUNpRCxVQWhETDtBQWlEWkMsUUFBQUEsS0FBSyxFQUFFbEQsSUFBSSxDQUFDa0QsS0FqREE7QUFrRFpDLFFBQUFBLGNBQWMsRUFBRW5ELElBQUksQ0FBQ21ELGNBbERUO0FBbURaQyxRQUFBQSxvQkFBb0IsRUFBRXBELElBQUksQ0FBQ29ELG9CQW5EZjtBQW9EWjtBQUNBQyxRQUFBQSxVQUFVLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUJ0RCxJQUF2QixDQXJEQTtBQXNEWnVELFFBQUFBLEtBQUssRUFBRSxLQUFLQyxZQUFMLENBQWtCeEQsSUFBbEIsQ0F0REs7QUF1RFp5RCxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQjFELElBQWpCLENBdkRNO0FBd0RaMkQsUUFBQUEsVUFBVSxFQUFFLEtBQUtELFdBQUwsQ0FBaUIxRCxJQUFqQixDQXhEQTtBQXlEWjtBQUNBNEQsUUFBQUEsWUFBWSxFQUFFNUQsSUFBSSxDQUFDNEQ7QUExRFAsT0FBVCxDQUFQO0FBNERIOzs7Z0NBRVc1RCxJLEVBQTJDO0FBQ25ELGFBQU8sS0FBSzZELElBQUwsQ0FBVTdELElBQVYsRUFBZ0IsTUFBaEIsRUFBd0IsSUFBSThELDJCQUFKLEVBQXhCLENBQVA7QUFDSDs7O2lDQUVZOUQsSSxFQUE0QztBQUNyRCxhQUFPLEtBQUs2RCxJQUFMLENBQVU3RCxJQUFWLEVBQWdCLE9BQWhCLEVBQXlCLElBQUkrRCw0QkFBSixFQUF6QixDQUFQO0FBQ0g7OztzQ0FFaUIvRCxJLEVBQTZDO0FBQzNELGFBQU8sS0FBSzZELElBQUwsQ0FBVTdELElBQVYsRUFBZ0IsWUFBaEIsRUFBOEIsSUFBSWdFLDZCQUFKLEVBQTlCLENBQVA7QUFDSDs7OztFQS9Fd0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdpZnQgZnJvbSAnLi4vR2lmdCc7XG5pbXBvcnQgR2lmdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdCc7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBCYXNrZXQgYXMgQmFza2V0SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iYXNrZXQvQmFza2V0JztcbmltcG9ydCBCYXNrZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iYXNrZXQvVHJhbnNmb3JtZXJzL0Jhc2tldFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lmdFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gZ2lmdCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGdpZnRcbiAgICAgKi9cbiAgICBtYXBEYXRhKGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBHaWZ0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBHaWZ0KHtcbiAgICAgICAgICAgIGlkOiBnaWZ0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBnaWZ0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIGNvbXBsZXRlZEF0OiBnaWZ0LmNvbXBsZXRlZEF0LFxuICAgICAgICAgICAgZGVsZXRlZEF0OiBnaWZ0LmRlbGV0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogZ2lmdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBzdGF0dXNJZDogZ2lmdC5zdGF0dXNJZCxcbiAgICAgICAgICAgIGhhc1RveXM6IGdpZnQuaGFzVG95cyxcbiAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kOiBnaWZ0LnNoaXBwaW5nTWV0aG9kLFxuICAgICAgICAgICAgc2hpcHBpbmdQcmVmZXJlbmNlOiBnaWZ0LnNoaXBwaW5nUHJlZmVyZW5jZSxcbiAgICAgICAgICAgIG5vdGVzOiBnaWZ0Lm5vdGVzLFxuICAgICAgICAgICAgY3VycmVuY3k6IGdpZnQuY3VycmVuY3ksXG4gICAgICAgICAgICBiaWxsaW5nUGhvbmU6IGdpZnQuYmlsbGluZ1Bob25lLFxuICAgICAgICAgICAgYmlsbGluZ0VtYWlsOiBnaWZ0LmJpbGxpbmdFbWFpbCxcbiAgICAgICAgICAgIGJpbGxpbmdGaXJzdG5hbWU6IGdpZnQuYmlsbGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdMYXN0bmFtZTogZ2lmdC5iaWxsaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzczogZ2lmdC5iaWxsaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVHdvOiBnaWZ0LmJpbGxpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUaHJlZTogZ2lmdC5iaWxsaW5nQWRkcmVzc1RocmVlLFxuICAgICAgICAgICAgYmlsbGluZ0NpdHk6IGdpZnQuYmlsbGluZ0NpdHksXG4gICAgICAgICAgICBiaWxsaW5nQ291bnR5OiBnaWZ0LmJpbGxpbmdDb3VudHksXG4gICAgICAgICAgICBiaWxsaW5nU3RhdGU6IGdpZnQuYmlsbGluZ1N0YXRlLFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50cnk6IGdpZnQuYmlsbGluZ0NvdW50cnksXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBnaWZ0LmJpbGxpbmdaaXAsXG4gICAgICAgICAgICBzaGlwcGluZ1Bob25lOiBnaWZ0LnNoaXBwaW5nUGhvbmUsXG4gICAgICAgICAgICBzaGlwcGluZ0VtYWlsOiBnaWZ0LnNoaXBwaW5nRW1haWwsXG4gICAgICAgICAgICBzaGlwcGluZ0ZpcnN0bmFtZTogZ2lmdC5zaGlwcGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nTGFzdG5hbWU6IGdpZnQuc2hpcHBpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogZ2lmdC5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUd286IGdpZnQuc2hpcHBpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgc2hpcHBpbmdDaXR5OiBnaWZ0LnNoaXBwaW5nQ2l0eSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnR5OiBnaWZ0LnNoaXBwaW5nQ291bnR5LFxuICAgICAgICAgICAgc2hpcHBpbmdTdGF0ZTogZ2lmdC5zaGlwcGluZ1N0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHJ5OiBnaWZ0LnNoaXBwaW5nQ291bnRyeSxcbiAgICAgICAgICAgIHNoaXBwaW5nWmlwOiBnaWZ0LnNoaXBwaW5nWmlwLFxuICAgICAgICAgICAgY29udGFjdEVtYWlsOiBnaWZ0LmNvbnRhY3RFbWFpbCxcbiAgICAgICAgICAgIGNvbnRhY3RQaG9uZTogZ2lmdC5jb250YWN0UGhvbmUsXG4gICAgICAgICAgICBkaXNwYXRjaGVkQXQ6IGdpZnQuZGlzcGF0Y2hlZEF0LFxuICAgICAgICAgICAgcmVkZWVtZWRBdDogZ2lmdC5yZWRlZW1lZEF0LFxuICAgICAgICAgICAgcGFja2VkQXQ6IGdpZnQucGFja2VkQXQsXG4gICAgICAgICAgICBwbGFjZWRBdDogZ2lmdC5wbGFjZWRBdCxcbiAgICAgICAgICAgIG1ldGE6IGdpZnQubWV0YSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGdpZnQubWVzc2FnZSxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogZ2lmdC5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICB2YWx1ZTogZ2lmdC52YWx1ZSxcbiAgICAgICAgICAgIGFsbG93RW1haWxEaXNjb3VudE9mZmVyczogZ2lmdC5hbGxvd0VtYWlsRGlzY291bnRPZmZlcnMsXG4gICAgICAgICAgICB0b0dpZnRSZWNpcGllbnQ6IGdpZnQudG9HaWZ0UmVjaXBpZW50LFxuICAgICAgICAgICAgc3RyaXBlQ3VzdG9tZXJJZDogZ2lmdC5zdHJpcGVDdXN0b21lcklkLFxuICAgICAgICAgICAgd2l0aEJhc2tldDogZ2lmdC53aXRoQmFza2V0LFxuICAgICAgICAgICAgZ3Vlc3Q6IGdpZnQuZ3Vlc3QsXG4gICAgICAgICAgICBkZWxpdmVyeU1ldGhvZDogZ2lmdC5kZWxpdmVyeU1ldGhvZCxcbiAgICAgICAgICAgIGV4cGVjdGVkRGVsaXZlcnlEYXRlOiBnaWZ0LmV4cGVjdGVkRGVsaXZlcnlEYXRlLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgZ2lmdEJhc2tldDogdGhpcy5pbmNsdWRlR2lmdEJhc2tldChnaWZ0KSxcbiAgICAgICAgICAgIG9yZGVyOiB0aGlzLmluY2x1ZGVPcmRlcihnaWZ0KSxcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIoZ2lmdCksXG4gICAgICAgICAgICByZWRlZW1lZEJ5OiB0aGlzLmluY2x1ZGVVc2VyKGdpZnQpLFxuICAgICAgICAgICAgLy8gYWNjZXNzb3JzXG4gICAgICAgICAgICBnaWZ0U3RhdHVzSWQ6IGdpZnQuZ2lmdFN0YXR1c0lkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihnaWZ0OiBHaWZ0SW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnQsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXIoZ2lmdDogR2lmdEludGVyZmFjZSk6IE9yZGVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oZ2lmdCwgJ29yZGVyJywgbmV3IE9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUdpZnRCYXNrZXQoZ2lmdDogR2lmdEludGVyZmFjZSk6IEJhc2tldEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnQsICdnaWZ0QmFza2V0JywgbmV3IEJhc2tldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==