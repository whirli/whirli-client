"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Subscription = _interopRequireDefault(require("../Subscription"));

var _SubscriptionPricingPlanTransformer = _interopRequireDefault(require("./SubscriptionPricingPlanTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionTierTransformer = _interopRequireDefault(require("./SubscriptionTierTransformer"));

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

var SubscriptionTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(SubscriptionTransformer, _BaseTransformer);

  function SubscriptionTransformer() {
    _classCallCheck(this, SubscriptionTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubscriptionTransformer).apply(this, arguments));
  }

  _createClass(SubscriptionTransformer, [{
    key: "mapData",

    /**
     * Map a subscription response
     *
     * @param subscription
     */
    value: function mapData(subscription) {
      return new _Subscription["default"]({
        id: subscription.id,
        stripeId: subscription.stripe_id,
        name: subscription.name,
        subTitle: subscription.sub_title,
        credits: subscription.credits,
        allowanceDescription: subscription.allowance_description,
        creditsDescription: subscription.credits_description,
        iconFilename: subscription.icon_filename,
        recommended: subscription.recommended,
        active: subscription.active,
        createdAt: subscription.created_at,
        updatedAt: subscription.updated_at,
        waitSpots: subscription.wait_spots,
        // has many
        subscriptionPricingPlans: this.includeSubscriptionPricingPlans(subscription),
        subscriptionTiers: this.includeSubscriptionTiers(subscription)
      });
    }
  }, {
    key: "includeSubscriptionPricingPlans",
    value: function includeSubscriptionPricingPlans(subscription) {
      return this.collection(subscription, 'subscription_pricing_plans', new _SubscriptionPricingPlanTransformer["default"]());
    }
  }, {
    key: "includeSubscriptionTiers",
    value: function includeSubscriptionTiers(subscription) {
      return this.collection(subscription, 'subscription_pricing_plans', new _SubscriptionTierTransformer["default"]());
    }
  }]);

  return SubscriptionTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = SubscriptionTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsInN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkIiwic3RyaXBlSWQiLCJzdHJpcGVfaWQiLCJuYW1lIiwic3ViVGl0bGUiLCJzdWJfdGl0bGUiLCJjcmVkaXRzIiwiYWxsb3dhbmNlRGVzY3JpcHRpb24iLCJhbGxvd2FuY2VfZGVzY3JpcHRpb24iLCJjcmVkaXRzRGVzY3JpcHRpb24iLCJjcmVkaXRzX2Rlc2NyaXB0aW9uIiwiaWNvbkZpbGVuYW1lIiwiaWNvbl9maWxlbmFtZSIsInJlY29tbWVuZGVkIiwiYWN0aXZlIiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXQiLCJ3YWl0U3BvdHMiLCJ3YWl0X3Nwb3RzIiwic3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5zIiwiaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFucyIsInN1YnNjcmlwdGlvblRpZXJzIiwiaW5jbHVkZVN1YnNjcmlwdGlvblRpZXJzIiwiY29sbGVjdGlvbiIsIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIiLCJTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsdUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsWSxFQUFzRDtBQUMxRCxhQUFPLElBQUlDLHdCQUFKLENBQWlCO0FBQ3BCQyxRQUFBQSxFQUFFLEVBQUVGLFlBQVksQ0FBQ0UsRUFERztBQUVwQkMsUUFBQUEsUUFBUSxFQUFFSCxZQUFZLENBQUNJLFNBRkg7QUFHcEJDLFFBQUFBLElBQUksRUFBRUwsWUFBWSxDQUFDSyxJQUhDO0FBSXBCQyxRQUFBQSxRQUFRLEVBQUVOLFlBQVksQ0FBQ08sU0FKSDtBQUtwQkMsUUFBQUEsT0FBTyxFQUFFUixZQUFZLENBQUNRLE9BTEY7QUFNcEJDLFFBQUFBLG9CQUFvQixFQUFFVCxZQUFZLENBQUNVLHFCQU5mO0FBT3BCQyxRQUFBQSxrQkFBa0IsRUFBRVgsWUFBWSxDQUFDWSxtQkFQYjtBQVFwQkMsUUFBQUEsWUFBWSxFQUFFYixZQUFZLENBQUNjLGFBUlA7QUFTcEJDLFFBQUFBLFdBQVcsRUFBRWYsWUFBWSxDQUFDZSxXQVROO0FBVXBCQyxRQUFBQSxNQUFNLEVBQUVoQixZQUFZLENBQUNnQixNQVZEO0FBV3BCQyxRQUFBQSxTQUFTLEVBQUVqQixZQUFZLENBQUNrQixVQVhKO0FBWXBCQyxRQUFBQSxTQUFTLEVBQUVuQixZQUFZLENBQUNvQixVQVpKO0FBYXBCQyxRQUFBQSxTQUFTLEVBQUVyQixZQUFZLENBQUNzQixVQWJKO0FBY3BCO0FBQ0FDLFFBQUFBLHdCQUF3QixFQUFFLEtBQUtDLCtCQUFMLENBQXFDeEIsWUFBckMsQ0FmTjtBQWdCcEJ5QixRQUFBQSxpQkFBaUIsRUFBRSxLQUFLQyx3QkFBTCxDQUE4QjFCLFlBQTlCO0FBaEJDLE9BQWpCLENBQVA7QUFrQkg7OztvREFFK0JBLFksRUFBd0U7QUFDcEcsYUFBTyxLQUFLMkIsVUFBTCxDQUFnQjNCLFlBQWhCLEVBQThCLDRCQUE5QixFQUE0RCxJQUFJNEIsOENBQUosRUFBNUQsQ0FBUDtBQUNIOzs7NkNBRXdCNUIsWSxFQUFpRTtBQUN0RixhQUFPLEtBQUsyQixVQUFMLENBQWdCM0IsWUFBaEIsRUFBOEIsNEJBQTlCLEVBQTRELElBQUk2Qix1Q0FBSixFQUE1RCxDQUFQO0FBQ0g7Ozs7RUFqQ2dEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25QcmljaW5nUGxhbiBmcm9tICcuLi9TdWJzY3JpcHRpb25QcmljaW5nUGxhbic7XG5pbXBvcnQgeyBBUElTdWJzY3JpcHRpb24gYXMgQVBJU3Vic2NyaXB0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIGZyb20gJy4vU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uVGllciBmcm9tICcuLi9TdWJzY3JpcHRpb25UaWVyJztcbmltcG9ydCBTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIgZnJvbSAnLi9TdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgc3Vic2NyaXB0aW9uIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3Vic2NyaXB0aW9uXG4gICAgICovXG4gICAgbWFwRGF0YShzdWJzY3JpcHRpb246IEFQSVN1YnNjcmlwdGlvbkludGVyZmFjZSk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKHtcbiAgICAgICAgICAgIGlkOiBzdWJzY3JpcHRpb24uaWQsXG4gICAgICAgICAgICBzdHJpcGVJZDogc3Vic2NyaXB0aW9uLnN0cmlwZV9pZCxcbiAgICAgICAgICAgIG5hbWU6IHN1YnNjcmlwdGlvbi5uYW1lLFxuICAgICAgICAgICAgc3ViVGl0bGU6IHN1YnNjcmlwdGlvbi5zdWJfdGl0bGUsXG4gICAgICAgICAgICBjcmVkaXRzOiBzdWJzY3JpcHRpb24uY3JlZGl0cyxcbiAgICAgICAgICAgIGFsbG93YW5jZURlc2NyaXB0aW9uOiBzdWJzY3JpcHRpb24uYWxsb3dhbmNlX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY3JlZGl0c0Rlc2NyaXB0aW9uOiBzdWJzY3JpcHRpb24uY3JlZGl0c19kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGljb25GaWxlbmFtZTogc3Vic2NyaXB0aW9uLmljb25fZmlsZW5hbWUsXG4gICAgICAgICAgICByZWNvbW1lbmRlZDogc3Vic2NyaXB0aW9uLnJlY29tbWVuZGVkLFxuICAgICAgICAgICAgYWN0aXZlOiBzdWJzY3JpcHRpb24uYWN0aXZlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBzdWJzY3JpcHRpb24uY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogc3Vic2NyaXB0aW9uLnVwZGF0ZWRfYXQsXG4gICAgICAgICAgICB3YWl0U3BvdHM6IHN1YnNjcmlwdGlvbi53YWl0X3Nwb3RzLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblByaWNpbmdQbGFuczogdGhpcy5pbmNsdWRlU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5zKHN1YnNjcmlwdGlvbiksXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25UaWVyczogdGhpcy5pbmNsdWRlU3Vic2NyaXB0aW9uVGllcnMoc3Vic2NyaXB0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFucyhzdWJzY3JpcHRpb246IEFQSVN1YnNjcmlwdGlvbkludGVyZmFjZSk6IEFycmF5PFN1YnNjcmlwdGlvblByaWNpbmdQbGFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oc3Vic2NyaXB0aW9uLCAnc3Vic2NyaXB0aW9uX3ByaWNpbmdfcGxhbnMnLCBuZXcgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3Vic2NyaXB0aW9uVGllcnMoc3Vic2NyaXB0aW9uOiBBUElTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBBcnJheTxTdWJzY3JpcHRpb25UaWVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oc3Vic2NyaXB0aW9uLCAnc3Vic2NyaXB0aW9uX3ByaWNpbmdfcGxhbnMnLCBuZXcgU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==