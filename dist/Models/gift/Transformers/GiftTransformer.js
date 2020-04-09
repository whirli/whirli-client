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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRUcmFuc2Zvcm1lciIsImdpZnQiLCJHaWZ0IiwiaWQiLCJjcmVhdGVkQXQiLCJjb21wbGV0ZWRBdCIsImRlbGV0ZWRBdCIsInVwZGF0ZWRBdCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwibm90ZXMiLCJjdXJyZW5jeSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdFbWFpbCIsImJpbGxpbmdGaXJzdG5hbWUiLCJiaWxsaW5nTGFzdG5hbWUiLCJiaWxsaW5nQWRkcmVzcyIsImJpbGxpbmdBZGRyZXNzVHdvIiwiYmlsbGluZ0FkZHJlc3NUaHJlZSIsImJpbGxpbmdDaXR5IiwiYmlsbGluZ0NvdW50eSIsImJpbGxpbmdTdGF0ZSIsImJpbGxpbmdDb3VudHJ5IiwiYmlsbGluZ1ppcCIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ0VtYWlsIiwic2hpcHBpbmdGaXJzdG5hbWUiLCJzaGlwcGluZ0xhc3RuYW1lIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzVHdvIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdDb3VudHkiLCJzaGlwcGluZ1N0YXRlIiwic2hpcHBpbmdDb3VudHJ5Iiwic2hpcHBpbmdaaXAiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJkaXNwYXRjaGVkQXQiLCJyZWRlZW1lZEF0IiwicGFja2VkQXQiLCJwbGFjZWRBdCIsIm1ldGEiLCJtZXNzYWdlIiwicmVzb3VyY2VUeXBlIiwidmFsdWUiLCJhbGxvd0VtYWlsRGlzY291bnRPZmZlcnMiLCJ0b0dpZnRSZWNpcGllbnQiLCJzdHJpcGVDdXN0b21lcklkIiwid2l0aEJhc2tldCIsImd1ZXN0IiwiZ2lmdEJhc2tldCIsImluY2x1ZGVHaWZ0QmFza2V0Iiwib3JkZXIiLCJpbmNsdWRlT3JkZXIiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJyZWRlZW1lZEJ5IiwiZ2lmdFN0YXR1c0lkIiwiaXRlbSIsIlVzZXJUcmFuc2Zvcm1lciIsIk9yZGVyVHJhbnNmb3JtZXIiLCJCYXNrZXRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEksRUFBMkI7QUFDL0IsYUFBTyxJQUFJQyxnQkFBSixDQUFTO0FBQ1pDLFFBQUFBLEVBQUUsRUFBRUYsSUFBSSxDQUFDRSxFQURHO0FBRVpDLFFBQUFBLFNBQVMsRUFBRUgsSUFBSSxDQUFDRyxTQUZKO0FBR1pDLFFBQUFBLFdBQVcsRUFBRUosSUFBSSxDQUFDSSxXQUhOO0FBSVpDLFFBQUFBLFNBQVMsRUFBRUwsSUFBSSxDQUFDSyxTQUpKO0FBS1pDLFFBQUFBLFNBQVMsRUFBRU4sSUFBSSxDQUFDTSxTQUxKO0FBTVpDLFFBQUFBLGNBQWMsRUFBRVAsSUFBSSxDQUFDTyxjQU5UO0FBT1pDLFFBQUFBLGtCQUFrQixFQUFFUixJQUFJLENBQUNRLGtCQVBiO0FBUVpDLFFBQUFBLEtBQUssRUFBRVQsSUFBSSxDQUFDUyxLQVJBO0FBU1pDLFFBQUFBLFFBQVEsRUFBRVYsSUFBSSxDQUFDVSxRQVRIO0FBVVpDLFFBQUFBLFlBQVksRUFBRVgsSUFBSSxDQUFDVyxZQVZQO0FBV1pDLFFBQUFBLFlBQVksRUFBRVosSUFBSSxDQUFDWSxZQVhQO0FBWVpDLFFBQUFBLGdCQUFnQixFQUFFYixJQUFJLENBQUNhLGdCQVpYO0FBYVpDLFFBQUFBLGVBQWUsRUFBRWQsSUFBSSxDQUFDYyxlQWJWO0FBY1pDLFFBQUFBLGNBQWMsRUFBRWYsSUFBSSxDQUFDZSxjQWRUO0FBZVpDLFFBQUFBLGlCQUFpQixFQUFFaEIsSUFBSSxDQUFDZ0IsaUJBZlo7QUFnQlpDLFFBQUFBLG1CQUFtQixFQUFFakIsSUFBSSxDQUFD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VixFQUFnQixPQUFoQixFQUF5QixJQUFJMkQsNEJBQUosRUFBekIsQ0FBUDtBQUNIOzs7c0NBRWlCM0QsSSxFQUE2QztBQUMzRCxhQUFPLEtBQUt5RCxJQUFMLENBQVV6RCxJQUFWLEVBQWdCLFlBQWhCLEVBQThCLElBQUk0RCw2QkFBSixFQUE5QixDQUFQO0FBQ0g7Ozs7RUEzRXdDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHaWZ0IGZyb20gJy4uL0dpZnQnO1xuaW1wb3J0IEdpZnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9naWZ0L0dpZnQnO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQmFza2V0IGFzIEJhc2tldEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmFza2V0L0Jhc2tldCc7XG5pbXBvcnQgQmFza2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIGdpZnQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBnaWZ0XG4gICAgICovXG4gICAgbWFwRGF0YShnaWZ0OiBHaWZ0SW50ZXJmYWNlKTogR2lmdCB7XG4gICAgICAgIHJldHVybiBuZXcgR2lmdCh7XG4gICAgICAgICAgICBpZDogZ2lmdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZ2lmdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogZ2lmdC5jb21wbGV0ZWRBdCxcbiAgICAgICAgICAgIGRlbGV0ZWRBdDogZ2lmdC5kZWxldGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGdpZnQudXBkYXRlZEF0LFxuICAgICAgICAgICAgc2hpcHBpbmdNZXRob2Q6IGdpZnQuc2hpcHBpbmdNZXRob2QsXG4gICAgICAgICAgICBzaGlwcGluZ1ByZWZlcmVuY2U6IGdpZnQuc2hpcHBpbmdQcmVmZXJlbmNlLFxuICAgICAgICAgICAgbm90ZXM6IGdpZnQubm90ZXMsXG4gICAgICAgICAgICBjdXJyZW5jeTogZ2lmdC5jdXJyZW5jeSxcbiAgICAgICAgICAgIGJpbGxpbmdQaG9uZTogZ2lmdC5iaWxsaW5nUGhvbmUsXG4gICAgICAgICAgICBiaWxsaW5nRW1haWw6IGdpZnQuYmlsbGluZ0VtYWlsLFxuICAgICAgICAgICAgYmlsbGluZ0ZpcnN0bmFtZTogZ2lmdC5iaWxsaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0xhc3RuYW1lOiBnaWZ0LmJpbGxpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiBnaWZ0LmJpbGxpbmdBZGRyZXNzLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUd286IGdpZnQuYmlsbGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1RocmVlOiBnaWZ0LmJpbGxpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBiaWxsaW5nQ2l0eTogZ2lmdC5iaWxsaW5nQ2l0eSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHk6IGdpZnQuYmlsbGluZ0NvdW50eSxcbiAgICAgICAgICAgIGJpbGxpbmdTdGF0ZTogZ2lmdC5iaWxsaW5nU3RhdGUsXG4gICAgICAgICAgICBiaWxsaW5nQ291bnRyeTogZ2lmdC5iaWxsaW5nQ291bnRyeSxcbiAgICAgICAgICAgIGJpbGxpbmdaaXA6IGdpZnQuYmlsbGluZ1ppcCxcbiAgICAgICAgICAgIHNoaXBwaW5nUGhvbmU6IGdpZnQuc2hpcHBpbmdQaG9uZSxcbiAgICAgICAgICAgIHNoaXBwaW5nRW1haWw6IGdpZnQuc2hpcHBpbmdFbWFpbCxcbiAgICAgICAgICAgIHNoaXBwaW5nRmlyc3RuYW1lOiBnaWZ0LnNoaXBwaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdMYXN0bmFtZTogZ2lmdC5zaGlwcGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBnaWZ0LnNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1R3bzogZ2lmdC5zaGlwcGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBzaGlwcGluZ0NpdHk6IGdpZnQuc2hpcHBpbmdDaXR5LFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHk6IGdpZnQuc2hpcHBpbmdDb3VudHksXG4gICAgICAgICAgICBzaGlwcGluZ1N0YXRlOiBnaWZ0LnNoaXBwaW5nU3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50cnk6IGdpZnQuc2hpcHBpbmdDb3VudHJ5LFxuICAgICAgICAgICAgc2hpcHBpbmdaaXA6IGdpZnQuc2hpcHBpbmdaaXAsXG4gICAgICAgICAgICBjb250YWN0RW1haWw6IGdpZnQuY29udGFjdEVtYWlsLFxuICAgICAgICAgICAgY29udGFjdFBob25lOiBnaWZ0LmNvbnRhY3RQaG9uZSxcbiAgICAgICAgICAgIGRpc3BhdGNoZWRBdDogZ2lmdC5kaXNwYXRjaGVkQXQsXG4gICAgICAgICAgICByZWRlZW1lZEF0OiBnaWZ0LnJlZGVlbWVkQXQsXG4gICAgICAgICAgICBwYWNrZWRBdDogZ2lmdC5wYWNrZWRBdCxcbiAgICAgICAgICAgIHBsYWNlZEF0OiBnaWZ0LnBsYWNlZEF0LFxuICAgICAgICAgICAgbWV0YTogZ2lmdC5tZXRhLFxuICAgICAgICAgICAgbWVzc2FnZTogZ2lmdC5tZXNzYWdlLFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiBnaWZ0LnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIHZhbHVlOiBnaWZ0LnZhbHVlLFxuICAgICAgICAgICAgYWxsb3dFbWFpbERpc2NvdW50T2ZmZXJzOiBnaWZ0LmFsbG93RW1haWxEaXNjb3VudE9mZmVycyxcbiAgICAgICAgICAgIHRvR2lmdFJlY2lwaWVudDogZ2lmdC50b0dpZnRSZWNpcGllbnQsXG4gICAgICAgICAgICBzdHJpcGVDdXN0b21lcklkOiBnaWZ0LnN0cmlwZUN1c3RvbWVySWQsXG4gICAgICAgICAgICB3aXRoQmFza2V0OiBnaWZ0LndpdGhCYXNrZXQsXG4gICAgICAgICAgICBndWVzdDogZ2lmdC5ndWVzdCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGdpZnRCYXNrZXQ6IHRoaXMuaW5jbHVkZUdpZnRCYXNrZXQoZ2lmdCksXG4gICAgICAgICAgICBvcmRlcjogdGhpcy5pbmNsdWRlT3JkZXIoZ2lmdCksXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKGdpZnQpLFxuICAgICAgICAgICAgcmVkZWVtZWRCeTogdGhpcy5pbmNsdWRlVXNlcihnaWZ0KSxcbiAgICAgICAgICAgIC8vIGFjY2Vzc29yc1xuICAgICAgICAgICAgZ2lmdFN0YXR1c0lkOiBnaWZ0LmdpZnRTdGF0dXNJZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIoZ2lmdDogR2lmdEludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0LCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyKGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBPcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnQsICdvcmRlcicsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVHaWZ0QmFza2V0KGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBCYXNrZXRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0LCAnZ2lmdEJhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=