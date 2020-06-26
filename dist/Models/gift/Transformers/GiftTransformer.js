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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GiftTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(GiftTransformer, _BaseTransformer);

  var _super = _createSuper(GiftTransformer);

  function GiftTransformer() {
    _classCallCheck(this, GiftTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRUcmFuc2Zvcm1lciIsImdpZnQiLCJHaWZ0IiwiaWQiLCJjcmVhdGVkQXQiLCJjb21wbGV0ZWRBdCIsImRlbGV0ZWRBdCIsInVwZGF0ZWRBdCIsInN0YXR1c0lkIiwiaGFzVG95cyIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwibm90ZXMiLCJjdXJyZW5jeSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdFbWFpbCIsImJpbGxpbmdGaXJzdG5hbWUiLCJiaWxsaW5nTGFzdG5hbWUiLCJiaWxsaW5nQWRkcmVzcyIsImJpbGxpbmdBZGRyZXNzVHdvIiwiYmlsbGluZ0FkZHJlc3NUaHJlZSIsImJpbGxpbmdDaXR5IiwiYmlsbGluZ0NvdW50eSIsImJpbGxpbmdTdGF0ZSIsImJpbGxpbmdDb3VudHJ5IiwiYmlsbGluZ1ppcCIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ0VtYWlsIiwic2hpcHBpbmdGaXJzdG5hbWUiLCJzaGlwcGluZ0xhc3RuYW1lIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzVHdvIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdDb3VudHkiLCJzaGlwcGluZ1N0YXRlIiwic2hpcHBpbmdDb3VudHJ5Iiwic2hpcHBpbmdaaXAiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJkaXNwYXRjaGVkQXQiLCJyZWRlZW1lZEF0IiwicGFja2VkQXQiLCJwbGFjZWRBdCIsIm1ldGEiLCJtZXNzYWdlIiwicmVzb3VyY2VUeXBlIiwidmFsdWUiLCJhbGxvd0VtYWlsRGlzY291bnRPZmZlcnMiLCJ0b0dpZnRSZWNpcGllbnQiLCJzdHJpcGVDdXN0b21lcklkIiwid2l0aEJhc2tldCIsImd1ZXN0IiwiZGVsaXZlcnlNZXRob2QiLCJleHBlY3RlZERlbGl2ZXJ5RGF0ZSIsImdpZnRCYXNrZXQiLCJpbmNsdWRlR2lmdEJhc2tldCIsIm9yZGVyIiwiaW5jbHVkZU9yZGVyIiwidXNlciIsImluY2x1ZGVVc2VyIiwicmVkZWVtZWRCeSIsImdpZnRTdGF0dXNJZCIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJPcmRlclRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsSSxFQUEyQjtBQUMvQixhQUFPLElBQUlDLGdCQUFKLENBQVM7QUFDWkMsUUFBQUEsRUFBRSxFQUFFRixJQUFJLENBQUNFLEVBREc7QUFFWkMsUUFBQUEsU0FBUyxFQUFFSCxJQUFJLENBQUNHLFNBRko7QUFHWkMsUUFBQUEsV0FBVyxFQUFFSixJQUFJLENBQUNJLFdBSE47QUFJWkMsUUFBQUEsU0FBUyxFQUFFTCxJQUFJLENBQUNLLFNBSko7QUFLWkMsUUFBQUEsU0FBUyxFQUFFTixJQUFJLENBQUNNLFNBTEo7QUFNWkMsUUFBQUEsUUFBUSxFQUFFUCxJQUFJLENBQUNPLFFBTkg7QUFPWkMsUUFBQUEsT0FBTyxFQUFFUixJQUFJLENBQUNRLE9BUEY7QUFRWkMsUUFBQUEsY0FBYyxFQUFFVCxJQUFJLENBQUNTLGNBUlQ7QUFTWkMsUUFBQUEsa0JBQWtCLEVBQUVWLElBQUksQ0FBQ1Usa0JBVGI7QUFVWkMsUUFBQUEsS0FBSyxFQUFFWCxJQUFJLENBQUNXLEtBVkE7QUFXWkMsUUFBQUEsUUFBUSxFQUFFWixJQUFJLENBQUNZLFFBWEg7QUFZWkMsUUFBQUEsWUFBWSxFQUFFYixJQUFJLENBQUNhLFlBWlA7QUFhWkMsUUFBQUEsWUFBWSxFQUFFZCxJQUFJLENBQUNjLFlBYlA7QUFjWkMsUUFBQUEsZ0JBQWdCLEVBQUVmLElBQUksQ0FBQ2UsZ0JBZFg7QUFlWkMsUUFBQUEsZUFB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QUFMLENBQWlCMUQsSUFBakIsQ0F4REE7QUF5RFo7QUFDQTRELFFBQUFBLFlBQVksRUFBRTVELElBQUksQ0FBQzREO0FBMURQLE9BQVQsQ0FBUDtBQTRESDs7O2dDQUVXNUQsSSxFQUEyQztBQUNuRCxhQUFPLEtBQUs2RCxJQUFMLENBQVU3RCxJQUFWLEVBQWdCLE1BQWhCLEVBQXdCLElBQUk4RCwyQkFBSixFQUF4QixDQUFQO0FBQ0g7OztpQ0FFWTlELEksRUFBNEM7QUFDckQsYUFBTyxLQUFLNkQsSUFBTCxDQUFVN0QsSUFBVixFQUFnQixPQUFoQixFQUF5QixJQUFJK0QsNEJBQUosRUFBekIsQ0FBUDtBQUNIOzs7c0NBRWlCL0QsSSxFQUE2QztBQUMzRCxhQUFPLEtBQUs2RCxJQUFMLENBQVU3RCxJQUFWLEVBQWdCLFlBQWhCLEVBQThCLElBQUlnRSw2QkFBSixFQUE5QixDQUFQO0FBQ0g7Ozs7RUEvRXdDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHaWZ0IGZyb20gJy4uL0dpZnQnO1xuaW1wb3J0IEdpZnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9naWZ0L0dpZnQnO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQmFza2V0IGFzIEJhc2tldEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmFza2V0L0Jhc2tldCc7XG5pbXBvcnQgQmFza2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIGdpZnQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBnaWZ0XG4gICAgICovXG4gICAgbWFwRGF0YShnaWZ0OiBHaWZ0SW50ZXJmYWNlKTogR2lmdCB7XG4gICAgICAgIHJldHVybiBuZXcgR2lmdCh7XG4gICAgICAgICAgICBpZDogZ2lmdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZ2lmdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogZ2lmdC5jb21wbGV0ZWRBdCxcbiAgICAgICAgICAgIGRlbGV0ZWRBdDogZ2lmdC5kZWxldGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGdpZnQudXBkYXRlZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IGdpZnQuc3RhdHVzSWQsXG4gICAgICAgICAgICBoYXNUb3lzOiBnaWZ0Lmhhc1RveXMsXG4gICAgICAgICAgICBzaGlwcGluZ01ldGhvZDogZ2lmdC5zaGlwcGluZ01ldGhvZCxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJlZmVyZW5jZTogZ2lmdC5zaGlwcGluZ1ByZWZlcmVuY2UsXG4gICAgICAgICAgICBub3RlczogZ2lmdC5ub3RlcyxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBnaWZ0LmN1cnJlbmN5LFxuICAgICAgICAgICAgYmlsbGluZ1Bob25lOiBnaWZ0LmJpbGxpbmdQaG9uZSxcbiAgICAgICAgICAgIGJpbGxpbmdFbWFpbDogZ2lmdC5iaWxsaW5nRW1haWwsXG4gICAgICAgICAgICBiaWxsaW5nRmlyc3RuYW1lOiBnaWZ0LmJpbGxpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nTGFzdG5hbWU6IGdpZnQuYmlsbGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3M6IGdpZnQuYmlsbGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1R3bzogZ2lmdC5iaWxsaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU6IGdpZnQuYmlsbGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIGJpbGxpbmdDaXR5OiBnaWZ0LmJpbGxpbmdDaXR5LFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50eTogZ2lmdC5iaWxsaW5nQ291bnR5LFxuICAgICAgICAgICAgYmlsbGluZ1N0YXRlOiBnaWZ0LmJpbGxpbmdTdGF0ZSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHJ5OiBnaWZ0LmJpbGxpbmdDb3VudHJ5LFxuICAgICAgICAgICAgYmlsbGluZ1ppcDogZ2lmdC5iaWxsaW5nWmlwLFxuICAgICAgICAgICAgc2hpcHBpbmdQaG9uZTogZ2lmdC5zaGlwcGluZ1Bob25lLFxuICAgICAgICAgICAgc2hpcHBpbmdFbWFpbDogZ2lmdC5zaGlwcGluZ0VtYWlsLFxuICAgICAgICAgICAgc2hpcHBpbmdGaXJzdG5hbWU6IGdpZnQuc2hpcHBpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0xhc3RuYW1lOiBnaWZ0LnNoaXBwaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IGdpZnQuc2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVHdvOiBnaWZ0LnNoaXBwaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIHNoaXBwaW5nQ2l0eTogZ2lmdC5zaGlwcGluZ0NpdHksXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50eTogZ2lmdC5zaGlwcGluZ0NvdW50eSxcbiAgICAgICAgICAgIHNoaXBwaW5nU3RhdGU6IGdpZnQuc2hpcHBpbmdTdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnRyeTogZ2lmdC5zaGlwcGluZ0NvdW50cnksXG4gICAgICAgICAgICBzaGlwcGluZ1ppcDogZ2lmdC5zaGlwcGluZ1ppcCxcbiAgICAgICAgICAgIGNvbnRhY3RFbWFpbDogZ2lmdC5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IGdpZnQuY29udGFjdFBob25lLFxuICAgICAgICAgICAgZGlzcGF0Y2hlZEF0OiBnaWZ0LmRpc3BhdGNoZWRBdCxcbiAgICAgICAgICAgIHJlZGVlbWVkQXQ6IGdpZnQucmVkZWVtZWRBdCxcbiAgICAgICAgICAgIHBhY2tlZEF0OiBnaWZ0LnBhY2tlZEF0LFxuICAgICAgICAgICAgcGxhY2VkQXQ6IGdpZnQucGxhY2VkQXQsXG4gICAgICAgICAgICBtZXRhOiBnaWZ0Lm1ldGEsXG4gICAgICAgICAgICBtZXNzYWdlOiBnaWZ0Lm1lc3NhZ2UsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IGdpZnQucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgdmFsdWU6IGdpZnQudmFsdWUsXG4gICAgICAgICAgICBhbGxvd0VtYWlsRGlzY291bnRPZmZlcnM6IGdpZnQuYWxsb3dFbWFpbERpc2NvdW50T2ZmZXJzLFxuICAgICAgICAgICAgdG9HaWZ0UmVjaXBpZW50OiBnaWZ0LnRvR2lmdFJlY2lwaWVudCxcbiAgICAgICAgICAgIHN0cmlwZUN1c3RvbWVySWQ6IGdpZnQuc3RyaXBlQ3VzdG9tZXJJZCxcbiAgICAgICAgICAgIHdpdGhCYXNrZXQ6IGdpZnQud2l0aEJhc2tldCxcbiAgICAgICAgICAgIGd1ZXN0OiBnaWZ0Lmd1ZXN0LFxuICAgICAgICAgICAgZGVsaXZlcnlNZXRob2Q6IGdpZnQuZGVsaXZlcnlNZXRob2QsXG4gICAgICAgICAgICBleHBlY3RlZERlbGl2ZXJ5RGF0ZTogZ2lmdC5leHBlY3RlZERlbGl2ZXJ5RGF0ZSxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGdpZnRCYXNrZXQ6IHRoaXMuaW5jbHVkZUdpZnRCYXNrZXQoZ2lmdCksXG4gICAgICAgICAgICBvcmRlcjogdGhpcy5pbmNsdWRlT3JkZXIoZ2lmdCksXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKGdpZnQpLFxuICAgICAgICAgICAgcmVkZWVtZWRCeTogdGhpcy5pbmNsdWRlVXNlcihnaWZ0KSxcbiAgICAgICAgICAgIC8vIGFjY2Vzc29yc1xuICAgICAgICAgICAgZ2lmdFN0YXR1c0lkOiBnaWZ0LmdpZnRTdGF0dXNJZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIoZ2lmdDogR2lmdEludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0LCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyKGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBPcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnQsICdvcmRlcicsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVHaWZ0QmFza2V0KGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBCYXNrZXRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0LCAnZ2lmdEJhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=