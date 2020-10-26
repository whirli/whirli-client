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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRUcmFuc2Zvcm1lciIsImdpZnQiLCJHaWZ0IiwiaWQiLCJjcmVhdGVkQXQiLCJjb21wbGV0ZWRBdCIsImRlbGV0ZWRBdCIsInVwZGF0ZWRBdCIsInN0YXR1c0lkIiwiaGFzVG95cyIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwibm90ZXMiLCJjdXJyZW5jeSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdFbWFpbCIsImJpbGxpbmdGaXJzdG5hbWUiLCJiaWxsaW5nTGFzdG5hbWUiLCJiaWxsaW5nQWRkcmVzcyIsImJpbGxpbmdBZGRyZXNzVHdvIiwiYmlsbGluZ0FkZHJlc3NUaHJlZSIsImJpbGxpbmdDaXR5IiwiYmlsbGluZ0NvdW50eSIsImJpbGxpbmdTdGF0ZSIsImJpbGxpbmdDb3VudHJ5IiwiYmlsbGluZ1ppcCIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ0VtYWlsIiwic2hpcHBpbmdGaXJzdG5hbWUiLCJzaGlwcGluZ0xhc3RuYW1lIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzVHdvIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdDb3VudHkiLCJzaGlwcGluZ1N0YXRlIiwic2hpcHBpbmdDb3VudHJ5Iiwic2hpcHBpbmdaaXAiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJkaXNwYXRjaGVkQXQiLCJyZWRlZW1lZEF0IiwicGFja2VkQXQiLCJwbGFjZWRBdCIsIm1ldGEiLCJtZXNzYWdlIiwicmVzb3VyY2VUeXBlIiwidmFsdWUiLCJhbGxvd0VtYWlsRGlzY291bnRPZmZlcnMiLCJ0b0dpZnRSZWNpcGllbnQiLCJzdHJpcGVDdXN0b21lcklkIiwid2l0aEJhc2tldCIsImd1ZXN0IiwiZGVsaXZlcnlNZXRob2QiLCJleHBlY3RlZERlbGl2ZXJ5RGF0ZSIsImdpZnRCYXNrZXQiLCJpbmNsdWRlR2lmdEJhc2tldCIsIm9yZGVyIiwiaW5jbHVkZU9yZGVyIiwidXNlciIsImluY2x1ZGVVc2VyIiwicmVkZWVtZWRCeSIsImdpZnRTdGF0dXNJZCIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJPcmRlclRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLGU7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7NEJBQ1lDLEksRUFBMkI7QUFDL0IsYUFBTyxJQUFJQyxnQkFBSixDQUFTO0FBQ1pDLFFBQUFBLEVBQUUsRUFBRUYsSUFBSSxDQUFDRSxFQURHO0FBRVpDLFFBQUFBLFNBQVMsRUFBRUgsSUFBSSxDQUFDRyxTQUZKO0FBR1pDLFFBQUFBLFdBQVcsRUFBRUosSUFBSSxDQUFDSSxXQUhOO0FBSVpDLFFBQUFBLFNBQVMsRUFBRUwsSUFBSSxDQUFDSyxTQUpKO0FBS1pDLFFBQUFBLFNBQVMsRUFBRU4sSUFBSSxDQUFDTSxTQUxKO0FBTVpDLFFBQUFBLFFBQVEsRUFBRVAsSUFBSSxDQUFDTyxRQU5IO0FBT1pDLFFBQUFBLE9BQU8sRUFBRVIsSUFBSSxDQUFDUSxPQVBGO0FBUVpDLFFBQUFBLGNBQWMsRUFBRVQsSUFBSSxDQUFDUyxjQVJUO0FBU1pDLFFBQUFBLGtCQUFrQixFQUFFVixJQUFJLENBQUNVLGtCQVRiO0FBVVpDLFFBQUFBLEtBQUssRUFBRVgsSUFBSSxDQUFDVyxLQVZBO0FBV1pDLFFBQUFBLFFBQVEsRUFBRVosSUFBSSxDQUFDWSxRQVhIO0FBWVpDLFFBQUFBLFlBQVksRUFBRWIsSUFBSSxDQUFDYSxZQVpQO0FBYVpDLFFBQUFBLFlBQVksRUFBRWQsSUFBSSxDQUFDYyxZQWJQO0FBY1pDLFFBQUFBLGdCQUFnQixFQUFFZixJQUFJLENBQUNlLGdCQWRY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QUFVLEVBQUUsS0FBS0QsV0FBTCxDQUFpQjFELElBQWpCLENBeERBO0FBeURaO0FBQ0E0RCxRQUFBQSxZQUFZLEVBQUU1RCxJQUFJLENBQUM0RDtBQTFEUCxPQUFULENBQVA7QUE0REg7OztnQ0FFVzVELEksRUFBMkM7QUFDbkQsYUFBTyxLQUFLNkQsSUFBTCxDQUFVN0QsSUFBVixFQUFnQixNQUFoQixFQUF3QixJQUFJOEQsMkJBQUosRUFBeEIsQ0FBUDtBQUNIOzs7aUNBRVk5RCxJLEVBQTRDO0FBQ3JELGFBQU8sS0FBSzZELElBQUwsQ0FBVTdELElBQVYsRUFBZ0IsT0FBaEIsRUFBeUIsSUFBSStELDRCQUFKLEVBQXpCLENBQVA7QUFDSDs7O3NDQUVpQi9ELEksRUFBaUQ7QUFDL0QsYUFBTyxLQUFLNkQsSUFBTCxDQUFVN0QsSUFBVixFQUFnQixZQUFoQixFQUE4QixJQUFJZ0UsNkJBQUosRUFBOUIsQ0FBUDtBQUNIOzs7O0VBL0V3Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2lmdCBmcm9tICcuLi9HaWZ0JztcbmltcG9ydCBHaWZ0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZ2lmdC9HaWZ0JztcbmltcG9ydCBPcmRlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyJztcbmltcG9ydCBPcmRlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL29yZGVyL1RyYW5zZm9ybWVycy9PcmRlclRyYW5zZm9ybWVyJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNrZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iYXNrZXQvVHJhbnNmb3JtZXJzL0Jhc2tldFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBHaWZ0QmFza2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZ2lmdC9HaWZ0QmFza2V0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lmdFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gZ2lmdCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGdpZnRcbiAgICAgKi9cbiAgICBtYXBEYXRhKGdpZnQ6IEdpZnRJbnRlcmZhY2UpOiBHaWZ0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBHaWZ0KHtcbiAgICAgICAgICAgIGlkOiBnaWZ0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBnaWZ0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIGNvbXBsZXRlZEF0OiBnaWZ0LmNvbXBsZXRlZEF0LFxuICAgICAgICAgICAgZGVsZXRlZEF0OiBnaWZ0LmRlbGV0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogZ2lmdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBzdGF0dXNJZDogZ2lmdC5zdGF0dXNJZCxcbiAgICAgICAgICAgIGhhc1RveXM6IGdpZnQuaGFzVG95cyxcbiAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kOiBnaWZ0LnNoaXBwaW5nTWV0aG9kLFxuICAgICAgICAgICAgc2hpcHBpbmdQcmVmZXJlbmNlOiBnaWZ0LnNoaXBwaW5nUHJlZmVyZW5jZSxcbiAgICAgICAgICAgIG5vdGVzOiBnaWZ0Lm5vdGVzLFxuICAgICAgICAgICAgY3VycmVuY3k6IGdpZnQuY3VycmVuY3ksXG4gICAgICAgICAgICBiaWxsaW5nUGhvbmU6IGdpZnQuYmlsbGluZ1Bob25lLFxuICAgICAgICAgICAgYmlsbGluZ0VtYWlsOiBnaWZ0LmJpbGxpbmdFbWFpbCxcbiAgICAgICAgICAgIGJpbGxpbmdGaXJzdG5hbWU6IGdpZnQuYmlsbGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdMYXN0bmFtZTogZ2lmdC5iaWxsaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzczogZ2lmdC5iaWxsaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVHdvOiBnaWZ0LmJpbGxpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUaHJlZTogZ2lmdC5iaWxsaW5nQWRkcmVzc1RocmVlLFxuICAgICAgICAgICAgYmlsbGluZ0NpdHk6IGdpZnQuYmlsbGluZ0NpdHksXG4gICAgICAgICAgICBiaWxsaW5nQ291bnR5OiBnaWZ0LmJpbGxpbmdDb3VudHksXG4gICAgICAgICAgICBiaWxsaW5nU3RhdGU6IGdpZnQuYmlsbGluZ1N0YXRlLFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50cnk6IGdpZnQuYmlsbGluZ0NvdW50cnksXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBnaWZ0LmJpbGxpbmdaaXAsXG4gICAgICAgICAgICBzaGlwcGluZ1Bob25lOiBnaWZ0LnNoaXBwaW5nUGhvbmUsXG4gICAgICAgICAgICBzaGlwcGluZ0VtYWlsOiBnaWZ0LnNoaXBwaW5nRW1haWwsXG4gICAgICAgICAgICBzaGlwcGluZ0ZpcnN0bmFtZTogZ2lmdC5zaGlwcGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nTGFzdG5hbWU6IGdpZnQuc2hpcHBpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogZ2lmdC5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUd286IGdpZnQuc2hpcHBpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgc2hpcHBpbmdDaXR5OiBnaWZ0LnNoaXBwaW5nQ2l0eSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnR5OiBnaWZ0LnNoaXBwaW5nQ291bnR5LFxuICAgICAgICAgICAgc2hpcHBpbmdTdGF0ZTogZ2lmdC5zaGlwcGluZ1N0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHJ5OiBnaWZ0LnNoaXBwaW5nQ291bnRyeSxcbiAgICAgICAgICAgIHNoaXBwaW5nWmlwOiBnaWZ0LnNoaXBwaW5nWmlwLFxuICAgICAgICAgICAgY29udGFjdEVtYWlsOiBnaWZ0LmNvbnRhY3RFbWFpbCxcbiAgICAgICAgICAgIGNvbnRhY3RQaG9uZTogZ2lmdC5jb250YWN0UGhvbmUsXG4gICAgICAgICAgICBkaXNwYXRjaGVkQXQ6IGdpZnQuZGlzcGF0Y2hlZEF0LFxuICAgICAgICAgICAgcmVkZWVtZWRBdDogZ2lmdC5yZWRlZW1lZEF0LFxuICAgICAgICAgICAgcGFja2VkQXQ6IGdpZnQucGFja2VkQXQsXG4gICAgICAgICAgICBwbGFjZWRBdDogZ2lmdC5wbGFjZWRBdCxcbiAgICAgICAgICAgIG1ldGE6IGdpZnQubWV0YSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGdpZnQubWVzc2FnZSxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogZ2lmdC5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICB2YWx1ZTogZ2lmdC52YWx1ZSxcbiAgICAgICAgICAgIGFsbG93RW1haWxEaXNjb3VudE9mZmVyczogZ2lmdC5hbGxvd0VtYWlsRGlzY291bnRPZmZlcnMsXG4gICAgICAgICAgICB0b0dpZnRSZWNpcGllbnQ6IGdpZnQudG9HaWZ0UmVjaXBpZW50LFxuICAgICAgICAgICAgc3RyaXBlQ3VzdG9tZXJJZDogZ2lmdC5zdHJpcGVDdXN0b21lcklkLFxuICAgICAgICAgICAgd2l0aEJhc2tldDogZ2lmdC53aXRoQmFza2V0LFxuICAgICAgICAgICAgZ3Vlc3Q6IGdpZnQuZ3Vlc3QsXG4gICAgICAgICAgICBkZWxpdmVyeU1ldGhvZDogZ2lmdC5kZWxpdmVyeU1ldGhvZCxcbiAgICAgICAgICAgIGV4cGVjdGVkRGVsaXZlcnlEYXRlOiBnaWZ0LmV4cGVjdGVkRGVsaXZlcnlEYXRlLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgZ2lmdEJhc2tldDogdGhpcy5pbmNsdWRlR2lmdEJhc2tldChnaWZ0KSxcbiAgICAgICAgICAgIG9yZGVyOiB0aGlzLmluY2x1ZGVPcmRlcihnaWZ0KSxcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIoZ2lmdCksXG4gICAgICAgICAgICByZWRlZW1lZEJ5OiB0aGlzLmluY2x1ZGVVc2VyKGdpZnQpLFxuICAgICAgICAgICAgLy8gYWNjZXNzb3JzXG4gICAgICAgICAgICBnaWZ0U3RhdHVzSWQ6IGdpZnQuZ2lmdFN0YXR1c0lkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihnaWZ0OiBHaWZ0SW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnQsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXIoZ2lmdDogR2lmdEludGVyZmFjZSk6IE9yZGVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oZ2lmdCwgJ29yZGVyJywgbmV3IE9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUdpZnRCYXNrZXQoZ2lmdDogR2lmdEludGVyZmFjZSk6IEdpZnRCYXNrZXRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0LCAnZ2lmdEJhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=