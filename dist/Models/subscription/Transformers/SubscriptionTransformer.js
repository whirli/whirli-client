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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsInN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkIiwic3RyaXBlSWQiLCJzdHJpcGVfaWQiLCJuYW1lIiwic3ViVGl0bGUiLCJzdWJfdGl0bGUiLCJjcmVkaXRzIiwiYWxsb3dhbmNlRGVzY3JpcHRpb24iLCJhbGxvd2FuY2VfZGVzY3JpcHRpb24iLCJjcmVkaXRzRGVzY3JpcHRpb24iLCJjcmVkaXRzX2Rlc2NyaXB0aW9uIiwiaWNvbkZpbGVuYW1lIiwiaWNvbl9maWxlbmFtZSIsInJlY29tbWVuZGVkIiwiYWN0aXZlIiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXQiLCJzdWJzY3JpcHRpb25QcmljaW5nUGxhbnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5zIiwic3Vic2NyaXB0aW9uVGllcnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uVGllcnMiLCJjb2xsZWN0aW9uIiwiU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciIsIlN1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx1Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxZLEVBQXNEO0FBQzFELGFBQU8sSUFBSUMsd0JBQUosQ0FBaUI7QUFDcEJDLFFBQUFBLEVBQUUsRUFBRUYsWUFBWSxDQUFDRSxFQURHO0FBRXBCQyxRQUFBQSxRQUFRLEVBQUVILFlBQVksQ0FBQ0ksU0FGSDtBQUdwQkMsUUFBQUEsSUFBSSxFQUFFTCxZQUFZLENBQUNLLElBSEM7QUFJcEJDLFFBQUFBLFFBQVEsRUFBRU4sWUFBWSxDQUFDTyxTQUpIO0FBS3BCQyxRQUFBQSxPQUFPLEVBQUVSLFlBQVksQ0FBQ1EsT0FMRjtBQU1wQkMsUUFBQUEsb0JBQW9CLEVBQUVULFlBQVksQ0FBQ1UscUJBTmY7QUFPcEJDLFFBQUFBLGtCQUFrQixFQUFFWCxZQUFZLENBQUNZLG1CQVBiO0FBUXBCQyxRQUFBQSxZQUFZLEVBQUViLFlBQVksQ0FBQ2MsYUFSUDtBQVNwQkMsUUFBQUEsV0FBVyxFQUFFZixZQUFZLENBQUNlLFdBVE47QUFVcEJDLFFBQUFBLE1BQU0sRUFBRWhCLFlBQVksQ0FBQ2dCLE1BVkQ7QUFXcEJDLFFBQUFBLFNBQVMsRUFBRWpCLFlBQVksQ0FBQ2tCLFVBWEo7QUFZcEJDLFFBQUFBLFNBQVMsRUFBRW5CLFlBQVksQ0FBQ29CLFVBWko7QUFhcEI7QUFDQUMsUUFBQUEsd0JBQXdCLEVBQUUsS0FBS0MsK0JBQUwsQ0FBcUN0QixZQUFyQyxDQWROO0FBZXBCdUIsUUFBQUEsaUJBQWlCLEVBQUUsS0FBS0Msd0JBQUwsQ0FBOEJ4QixZQUE5QjtBQWZDLE9BQWpCLENBQVA7QUFpQkg7OztvREFFK0JBLFksRUFBd0U7QUFDcEcsYUFBTyxLQUFLeUIsVUFBTCxDQUFnQnpCLFlBQWhCLEVBQThCLDRCQUE5QixFQUE0RCxJQUFJMEIsOENBQUosRUFBNUQsQ0FBUDtBQUNIOzs7NkNBRXdCMUIsWSxFQUFpRTtBQUN0RixhQUFPLEtBQUt5QixVQUFMLENBQWdCekIsWUFBaEIsRUFBOEIsNEJBQTlCLEVBQTRELElBQUkyQix1Q0FBSixFQUE1RCxDQUFQO0FBQ0g7Ozs7RUFoQ2dEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25QcmljaW5nUGxhbiBmcm9tICcuLi9TdWJzY3JpcHRpb25QcmljaW5nUGxhbic7XG5pbXBvcnQgeyBBUElTdWJzY3JpcHRpb24gYXMgQVBJU3Vic2NyaXB0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIGZyb20gJy4vU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uVGllciBmcm9tICcuLi9TdWJzY3JpcHRpb25UaWVyJztcbmltcG9ydCBTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIgZnJvbSAnLi9TdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgc3Vic2NyaXB0aW9uIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3Vic2NyaXB0aW9uXG4gICAgICovXG4gICAgbWFwRGF0YShzdWJzY3JpcHRpb246IEFQSVN1YnNjcmlwdGlvbkludGVyZmFjZSk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKHtcbiAgICAgICAgICAgIGlkOiBzdWJzY3JpcHRpb24uaWQsXG4gICAgICAgICAgICBzdHJpcGVJZDogc3Vic2NyaXB0aW9uLnN0cmlwZV9pZCxcbiAgICAgICAgICAgIG5hbWU6IHN1YnNjcmlwdGlvbi5uYW1lLFxuICAgICAgICAgICAgc3ViVGl0bGU6IHN1YnNjcmlwdGlvbi5zdWJfdGl0bGUsXG4gICAgICAgICAgICBjcmVkaXRzOiBzdWJzY3JpcHRpb24uY3JlZGl0cyxcbiAgICAgICAgICAgIGFsbG93YW5jZURlc2NyaXB0aW9uOiBzdWJzY3JpcHRpb24uYWxsb3dhbmNlX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY3JlZGl0c0Rlc2NyaXB0aW9uOiBzdWJzY3JpcHRpb24uY3JlZGl0c19kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGljb25GaWxlbmFtZTogc3Vic2NyaXB0aW9uLmljb25fZmlsZW5hbWUsXG4gICAgICAgICAgICByZWNvbW1lbmRlZDogc3Vic2NyaXB0aW9uLnJlY29tbWVuZGVkLFxuICAgICAgICAgICAgYWN0aXZlOiBzdWJzY3JpcHRpb24uYWN0aXZlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBzdWJzY3JpcHRpb24uY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogc3Vic2NyaXB0aW9uLnVwZGF0ZWRfYXQsXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5zOiB0aGlzLmluY2x1ZGVTdWJzY3JpcHRpb25QcmljaW5nUGxhbnMoc3Vic2NyaXB0aW9uKSxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblRpZXJzOiB0aGlzLmluY2x1ZGVTdWJzY3JpcHRpb25UaWVycyhzdWJzY3JpcHRpb24pLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5zKHN1YnNjcmlwdGlvbjogQVBJU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogQXJyYXk8U3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihzdWJzY3JpcHRpb24sICdzdWJzY3JpcHRpb25fcHJpY2luZ19wbGFucycsIG5ldyBTdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdWJzY3JpcHRpb25UaWVycyhzdWJzY3JpcHRpb246IEFQSVN1YnNjcmlwdGlvbkludGVyZmFjZSk6IEFycmF5PFN1YnNjcmlwdGlvblRpZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihzdWJzY3JpcHRpb24sICdzdWJzY3JpcHRpb25fcHJpY2luZ19wbGFucycsIG5ldyBTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19