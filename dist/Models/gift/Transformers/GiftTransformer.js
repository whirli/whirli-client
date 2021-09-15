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
        // relations
        giftBasket: this.includeGiftBasket(gift),
        order: this.includeOrder(gift),
        user: this.includeUser(gift),
        redeemedBy: this.includeUser(gift),
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
  }]);

  return GiftTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = GiftTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRUcmFuc2Zvcm1lciIsImdpZnQiLCJHaWZ0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwbGFjZWRBdCIsInBhY2tlZEF0IiwiZGlzcGF0Y2hlZEF0IiwiY29tcGxldGVkQXQiLCJkZWxldGVkQXQiLCJyZWRlZW1lZEF0IiwiZXhwZWN0ZWREZWxpdmVyeURhdGUiLCJjb2RlIiwidmFsdWUiLCJtZXNzYWdlIiwiZ2lmdFN0YXR1c0lkIiwiZ3Vlc3QiLCJhbGxvd0VtYWlsRGlzY291bnRPZmZlcnMiLCJ3aXRoQmFza2V0IiwidG9HaWZ0UmVjaXBpZW50Iiwic3RyaXBlQ3VzdG9tZXJJZCIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdFbWFpbCIsImJpbGxpbmdGaXJzdG5hbWUiLCJiaWxsaW5nTGFzdG5hbWUiLCJiaWxsaW5nQWRkcmVzcyIsImJpbGxpbmdBZGRyZXNzVHdvIiwiYmlsbGluZ0FkZHJlc3NUaHJlZSIsImJpbGxpbmdDaXR5IiwiYmlsbGluZ0NvdW50eSIsImJpbGxpbmdTdGF0ZSIsImJpbGxpbmdDb3VudHJ5IiwiYmlsbGluZ1ppcCIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ0VtYWlsIiwic2hpcHBpbmdGaXJzdG5hbWUiLCJzaGlwcGluZ0xhc3RuYW1lIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzVHdvIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdDb3VudHkiLCJzaGlwcGluZ1N0YXRlIiwic2hpcHBpbmdDb3VudHJ5Iiwic2hpcHBpbmdaaXAiLCJyZXNvdXJjZVR5cGUiLCJnaWZ0QmFza2V0IiwiaW5jbHVkZUdpZnRCYXNrZXQiLCJvcmRlciIsImluY2x1ZGVPcmRlciIsInVzZXIiLCJpbmNsdWRlVXNlciIsInJlZGVlbWVkQnkiLCJzdGF0dXNJZCIsImRlbGl2ZXJ5TWV0aG9kIiwiaGFzUmV1c2FibGVQYWNrYWdpbmdPcHRJbiIsImhhc1RveXMiLCJzaGlwcGluZ0ZlZSIsImNoZWNrb3V0Iiwic2hpcHBpbmdNZXRob2QiLCJzaGlwcGluZ1ByZWZlcmVuY2UiLCJub3RlcyIsImN1cnJlbmN5IiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwibWV0YSIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJPcmRlclRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsZTs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxJLEVBQTJCO0FBQy9CLGFBQU8sSUFBSUMsZ0JBQUosQ0FBUztBQUNaQyxRQUFBQSxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFERztBQUVaQyxRQUFBQSxTQUFTLEVBQUVILElBQUksQ0FBQ0csU0FGSjtBQUdaQyxRQUFBQSxTQUFTLEVBQUVKLElBQUksQ0FBQ0ksU0FISjtBQUlaQyxRQUFBQSxRQUFRLEVBQUVMLElBQUksQ0FBQ0ssUUFKSDtBQUtaQyxRQUFBQSxRQUFRLEVBQUVOLElBQUksQ0FBQ00sUUFMSDtBQU1aQyxRQUFBQSxZQUFZLEVBQUVQLElBQUksQ0FBQ08sWUFOUDtBQU9aQyxRQUFBQSxXQUFXLEVBQUVSLElBQUksQ0FBQ1EsV0FQTjtBQVFaQyxRQUFBQSxTQUFTLEVBQUVULElBQUksQ0FBQ1MsU0FSSjtBQVNaQyxRQUFBQSxVQUFVLEVBQUVWLElBQUksQ0FBQ1UsVUFUTDtBQVVaQyxRQUFBQSxvQkFBb0IsRUFBRVgsSUFBSSxDQUFDVyxvQkFWZjtBQVdaQyxRQUFBQSxJQUFJLEVBQUVaLElBQUksQ0FBQ1ksSUFYQztBQVlaQyxRQUFBQSxLQUFLLEVBQUViLElBQUksQ0FBQ2EsS0FaQTtBQWFaQyxRQUFBQSxPQUFPLEVBQUVkLElBQUksQ0FBQ2MsT0FiRjtBQWNaQyxRQUFBQSxZQUFZLEVBQUVmLElBQUksQ0FBQ2UsWUFkUDtBQWVaQyxRQUFBQSxLQUFLLEVBQUVoQixJQUFJLENBQUNnQixLQWZBO0FBZ0JaQyxRQUFBQSx3QkFBd0IsRUFBRWpCLElBQUksQ0FBQ2lCLHdCQWhCbkI7QUFpQlpDLFFBQUFBLFVBQVUsRUFBRWxCLElBQUksQ0FBQ2tCLFVBakJMO0FBa0JaQyxRQUFBQSxlQUFlLEVBQUVuQixJQUFJLENBQUNtQixlQWxCVjtBQW1CWkMsUUFBQUEsZ0JBQWdCLEVBQUVwQixJQUFJLENBQUNvQixnQkFuQlg7QUFvQlpDLFFBQUFBLFlBQVksRUFBRXJCLElBQUksQ0FBQ3FCLFlBcEJQO0FBcUJaQyxRQUFBQSxZQUFZLEVBQUV0QixJQUFJLENBQUNzQixZQXJCUDtBQXNCWkMsUUFBQUEsZ0JBQWdCLEVBQUV2QixJQUFJLENBQUN1QixnQkF0Qlg7QUF1QlpDLFFBQUFBLGVBQWUsRUFBRXhCLElBQUksQ0FBQ3dCLGVBdkJWO0FBd0JaQyxRQUFBQSxjQUFjLEVBQUV6QixJQUFJLENBQUN5QixjQXhCVDtBQXlCWkMsUUFBQUEsaUJBQWlCLEVBQUUxQixJQUFJLENBQUMwQixpQkF6Qlo7QUEwQlpDLFFBQUFBLG1CQUFtQixFQUFFM0IsSUFBSSxDQUFDMkIsbUJBMUJkO0FBMkJaQyxRQUFBQSxXQUFXLEVBQUU1QixJQUFJLENBQUM0QixXQTNCTjtBQTRCWkMsUUFBQUEsYUFBYSxFQUFFN0IsSUFBSSxDQUFDNkIsYUE1QlI7QUE2QlpDLFFBQUFBLFlBQVksRUFBRTlCLElBQUksQ0FBQzhCLFlBN0JQO0FBOEJaQyxRQUFBQSxjQUFjLEVBQUUvQixJQUFJLENBQUMrQixjQTlCVDtBQStCWkMsUUFBQUEsVUFBVSxFQUFFaEMsSUFBSSxDQUFDZ0MsVUEvQkw7QUFnQ1pDLFFBQUFBLGFBQWEsRUFBRWpDLElBQUksQ0FBQ2lDLGFBaENSO0FBaUNaQyxRQUFBQSxhQUFhLEVBQUVsQyxJQUFJLENBQUNrQyxhQWpDUjtBQWtDWkMsUUFBQUEsaUJBQWlCLEVBQUVuQyxJQUFJLENBQUNtQyxpQkFsQ1o7QUFtQ1pDLFFBQUFBLGdCQUFnQixFQUFFcEMsSUFBSSxDQUFDb0MsZ0JBbkNYO0FBb0NaQyxRQUFBQSxlQUFlLEVBQUVyQyxJQUFJLENBQUNxQyxlQXBDVjtBQXFDWkMsUUFBQUEsa0JBQWtCLEVBQUV0QyxJQUFJLENBQUNzQyxrQkFyQ2I7QUFzQ1pDLFFBQUFBLFlBQVksRUFBRXZDLElBQUksQ0FBQ3VDLFlBdENQO0FBdUNaQyxRQUFBQSxjQUFjLEVBQUV4QyxJQUFJLENBQUN3QyxjQXZDVDtBQXdDWkMsUUFBQUEsYUFBYSxFQUFFekMsSUFBSSxDQUFDeUMsYUF4Q1I7QUF5Q1pDLFFBQUFBLGVBQWUsRUFBRTFDLElBQUksQ0FBQzBDLGVBekNWO0FBMENaQyxRQUFBQSxXQUFXLEVBQUUzQyxJQUFJLENBQUMyQyxXQTFDTjtBQTJDWkMsUUFBQUEsWUFBWSxFQUFFNUMsSUFBSSxDQUFDNEMsWUEzQ1A7QUE0Q1o7QUFDQUMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCOUMsSUFBdkIsQ0E3Q0E7QUE4Q1orQyxRQUFBQSxLQUFLLEVBQUUsS0FBS0MsWUFBTCxDQUFrQmhELElBQWxCLENBOUNLO0FBK0NaaUQsUUFBQUEsSUFBSSxFQUFFLEtBQUtDLFdBQUwsQ0FBaUJsRCxJQUFqQixDQS9DTTtBQWdEWm1ELFFBQUFBLFVBQVUsRUFBRSxLQUFLRCxXQUFMLENBQWlCbEQsSUFBakIsQ0FoREE7QUFpRFo7QUFDQW9ELFFBQUFBLFFBQVEsRUFBRXBELElBQUksQ0FBQ29ELFFBbERIO0FBbURaQyxRQUFBQSxjQUFjLEVBQUVyRCxJQUFJLENBQUNxRCxjQW5EVDtBQW9EWkMsUUFBQUEseUJBQXlCLEVBQUV0RCxJQUFJLENBQUNzRCx5QkFwRHBCO0FBcURaQyxRQUFBQSxPQUFPLEVBQUV2RCxJQUFJLENBQUN1RCxPQXJERjtBQXNEWkMsUUFBQUEsV0FBVyxFQUFFeEQsSUFBSSxDQUFDd0QsV0F0RE47QUF1RFpDLFFBQUFBLFFBQVEsRUFBRXpELElBQUksQ0FBQ3lELFFBdkRIO0FBd0RaO0FBQ0FDLFFBQUFBLGNBQWMsRUFBRTFELElBQUksQ0FBQzBELGNBekRUO0FBMERaQyxRQUFBQSxrQkFBa0IsRUFBRTNELElBQUksQ0FBQzJELGtCQTFEYjtBQTJEWkMsUUFBQUEsS0FBSyxFQUFFNUQsSUFBSSxDQUFDNEQsS0EzREE7QUE0RFpDLFFBQUFBLFFBQVEsRUFBRTdELElBQUksQ0FBQzZELFFBNURIO0FBNkRaQyxRQUFBQSxZQUFZLEVBQUU5RCxJQUFJLENBQUM4RCxZQTdEUDtBQThEWkMsUUFBQUEsWUFBWSxFQUFFL0QsSUFBSSxDQUFDK0QsWUE5RFA7QUErRFpDLFFBQUFBLElBQUksRUFBRWhFLElBQUksQ0FBQ2dFO0FBL0RDLE9BQVQsQ0FBUDtBQWlFSDs7O2dDQUVXaEUsSSxFQUEyQztBQUNuRCxhQUFPLEtBQUtpRSxJQUFMLENBQVVqRSxJQUFWLEVBQWdCLE1BQWhCLEVBQXdCLElBQUlrRSwyQkFBSixFQUF4QixDQUFQO0FBQ0g7OztpQ0FFWWxFLEksRUFBNEM7QUFDckQsYUFBTyxLQUFLaUUsSUFBTCxDQUFVakUsSUFBVixFQUFnQixPQUFoQixFQUF5QixJQUFJbUUsNEJBQUosRUFBekIsQ0FBUDtBQUNIOzs7c0NBRWlCbkUsSSxFQUFpRDtBQUMvRCxhQUFPLEtBQUtpRSxJQUFMLENBQVVqRSxJQUFWLEVBQWdCLFlBQWhCLEVBQThCLElBQUlvRSw2QkFBSixFQUE5QixDQUFQO0FBQ0g7Ozs7RUFwRndDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHaWZ0IGZyb20gJy4uL0dpZnQnO1xuaW1wb3J0IEdpZnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9naWZ0L0dpZnQnO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2tldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEdpZnRCYXNrZXRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9naWZ0L0dpZnRCYXNrZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaWZ0VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBnaWZ0IHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZ2lmdFxuICAgICAqL1xuICAgIG1hcERhdGEoZ2lmdDogR2lmdEludGVyZmFjZSk6IEdpZnQge1xuICAgICAgICByZXR1cm4gbmV3IEdpZnQoe1xuICAgICAgICAgICAgaWQ6IGdpZnQuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGdpZnQuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBnaWZ0LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHBsYWNlZEF0OiBnaWZ0LnBsYWNlZEF0LFxuICAgICAgICAgICAgcGFja2VkQXQ6IGdpZnQucGFja2VkQXQsXG4gICAgICAgICAgICBkaXNwYXRjaGVkQXQ6IGdpZnQuZGlzcGF0Y2hlZEF0LFxuICAgICAgICAgICAgY29tcGxldGVkQXQ6IGdpZnQuY29tcGxldGVkQXQsXG4gICAgICAgICAgICBkZWxldGVkQXQ6IGdpZnQuZGVsZXRlZEF0LFxuICAgICAgICAgICAgcmVkZWVtZWRBdDogZ2lmdC5yZWRlZW1lZEF0LFxuICAgICAgICAgICAgZXhwZWN0ZWREZWxpdmVyeURhdGU6IGdpZnQuZXhwZWN0ZWREZWxpdmVyeURhdGUsXG4gICAgICAgICAgICBjb2RlOiBnaWZ0LmNvZGUsXG4gICAgICAgICAgICB2YWx1ZTogZ2lmdC52YWx1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGdpZnQubWVzc2FnZSxcbiAgICAgICAgICAgIGdpZnRTdGF0dXNJZDogZ2lmdC5naWZ0U3RhdHVzSWQsXG4gICAgICAgICAgICBndWVzdDogZ2lmdC5ndWVzdCxcbiAgICAgICAgICAgIGFsbG93RW1haWxEaXNjb3VudE9mZmVyczogZ2lmdC5hbGxvd0VtYWlsRGlzY291bnRPZmZlcnMsXG4gICAgICAgICAgICB3aXRoQmFza2V0OiBnaWZ0LndpdGhCYXNrZXQsXG4gICAgICAgICAgICB0b0dpZnRSZWNpcGllbnQ6IGdpZnQudG9HaWZ0UmVjaXBpZW50LFxuICAgICAgICAgICAgc3RyaXBlQ3VzdG9tZXJJZDogZ2lmdC5zdHJpcGVDdXN0b21lcklkLFxuICAgICAgICAgICAgYmlsbGluZ1Bob25lOiBnaWZ0LmJpbGxpbmdQaG9uZSxcbiAgICAgICAgICAgIGJpbGxpbmdFbWFpbDogZ2lmdC5iaWxsaW5nRW1haWwsXG4gICAgICAgICAgICBiaWxsaW5nRmlyc3RuYW1lOiBnaWZ0LmJpbGxpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nTGFzdG5hbWU6IGdpZnQuYmlsbGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3M6IGdpZnQuYmlsbGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1R3bzogZ2lmdC5iaWxsaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU6IGdpZnQuYmlsbGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIGJpbGxpbmdDaXR5OiBnaWZ0LmJpbGxpbmdDaXR5LFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50eTogZ2lmdC5iaWxsaW5nQ291bnR5LFxuICAgICAgICAgICAgYmlsbGluZ1N0YXRlOiBnaWZ0LmJpbGxpbmdTdGF0ZSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHJ5OiBnaWZ0LmJpbGxpbmdDb3VudHJ5LFxuICAgICAgICAgICAgYmlsbGluZ1ppcDogZ2lmdC5iaWxsaW5nWmlwLFxuICAgICAgICAgICAgc2hpcHBpbmdQaG9uZTogZ2lmdC5zaGlwcGluZ1Bob25lLFxuICAgICAgICAgICAgc2hpcHBpbmdFbWFpbDogZ2lmdC5zaGlwcGluZ0VtYWlsLFxuICAgICAgICAgICAgc2hpcHBpbmdGaXJzdG5hbWU6IGdpZnQuc2hpcHBpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0xhc3RuYW1lOiBnaWZ0LnNoaXBwaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IGdpZnQuc2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVHdvOiBnaWZ0LnNoaXBwaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIHNoaXBwaW5nQ2l0eTogZ2lmdC5zaGlwcGluZ0NpdHksXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50eTogZ2lmdC5zaGlwcGluZ0NvdW50eSxcbiAgICAgICAgICAgIHNoaXBwaW5nU3RhdGU6IGdpZnQuc2hpcHBpbmdTdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnRyeTogZ2lmdC5zaGlwcGluZ0NvdW50cnksXG4gICAgICAgICAgICBzaGlwcGluZ1ppcDogZ2lmdC5zaGlwcGluZ1ppcCxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogZ2lmdC5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICAvLyByZWxhdGlvbnNcbiAgICAgICAgICAgIGdpZnRCYXNrZXQ6IHRoaXMuaW5jbHVkZUdpZnRCYXNrZXQoZ2lmdCksXG4gICAgICAgICAgICBvcmRlcjogdGhpcy5pbmNsdWRlT3JkZXIoZ2lmdCksXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKGdpZnQpLFxuICAgICAgICAgICAgcmVkZWVtZWRCeTogdGhpcy5pbmNsdWRlVXNlcihnaWZ0KSxcbiAgICAgICAgICAgIC8vIGFjY2Vzc29yc1xuICAgICAgICAgICAgc3RhdHVzSWQ6IGdpZnQuc3RhdHVzSWQsXG4gICAgICAgICAgICBkZWxpdmVyeU1ldGhvZDogZ2lmdC5kZWxpdmVyeU1ldGhvZCxcbiAgICAgICAgICAgIGhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW46IGdpZnQuaGFzUmV1c2FibGVQYWNrYWdpbmdPcHRJbixcbiAgICAgICAgICAgIGhhc1RveXM6IGdpZnQuaGFzVG95cyxcbiAgICAgICAgICAgIHNoaXBwaW5nRmVlOiBnaWZ0LnNoaXBwaW5nRmVlLFxuICAgICAgICAgICAgY2hlY2tvdXQ6IGdpZnQuY2hlY2tvdXQsXG4gICAgICAgICAgICAvLyBAdG9kbyBhcmUgdGhlc2UgdXNlZFxuICAgICAgICAgICAgc2hpcHBpbmdNZXRob2Q6IGdpZnQuc2hpcHBpbmdNZXRob2QsXG4gICAgICAgICAgICBzaGlwcGluZ1ByZWZlcmVuY2U6IGdpZnQuc2hpcHBpbmdQcmVmZXJlbmNlLFxuICAgICAgICAgICAgbm90ZXM6IGdpZnQubm90ZXMsXG4gICAgICAgICAgICBjdXJyZW5jeTogZ2lmdC5jdXJyZW5jeSxcbiAgICAgICAgICAgIGNvbnRhY3RFbWFpbDogZ2lmdC5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IGdpZnQuY29udGFjdFBob25lLFxuICAgICAgICAgICAgbWV0YTogZ2lmdC5tZXRhLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihnaWZ0OiBHaWZ0SW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnQsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXIoZ2lmdDogR2lmdEludGVyZmFjZSk6IE9yZGVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oZ2lmdCwgJ29yZGVyJywgbmV3IE9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUdpZnRCYXNrZXQoZ2lmdDogR2lmdEludGVyZmFjZSk6IEdpZnRCYXNrZXRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0LCAnZ2lmdEJhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=