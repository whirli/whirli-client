"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Subscription = _interopRequireDefault(require("../Subscription"));

var _SubscriptionPricingPlanTransformer = _interopRequireDefault(require("./SubscriptionPricingPlanTransformer"));

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
        pricingPlans: this.includePricingPlans(subscription)
      });
    }
  }, {
    key: "includePricingPlans",
    value: function includePricingPlans(subscription) {
      return this.collection(subscription, 'subscription_pricing_plans', new _SubscriptionPricingPlanTransformer["default"]());
    }
  }]);

  return SubscriptionTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = SubscriptionTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsInN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkIiwic3RyaXBlSWQiLCJzdHJpcGVfaWQiLCJuYW1lIiwic3ViVGl0bGUiLCJzdWJfdGl0bGUiLCJjcmVkaXRzIiwiYWxsb3dhbmNlRGVzY3JpcHRpb24iLCJhbGxvd2FuY2VfZGVzY3JpcHRpb24iLCJjcmVkaXRzRGVzY3JpcHRpb24iLCJjcmVkaXRzX2Rlc2NyaXB0aW9uIiwiaWNvbkZpbGVuYW1lIiwiaWNvbl9maWxlbmFtZSIsInJlY29tbWVuZGVkIiwiYWN0aXZlIiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXQiLCJwcmljaW5nUGxhbnMiLCJpbmNsdWRlUHJpY2luZ1BsYW5zIiwiY29sbGVjdGlvbiIsIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsdUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsWSxFQUFzRDtBQUMxRCxhQUFPLElBQUlDLHdCQUFKLENBQWlCO0FBQ3BCQyxRQUFBQSxFQUFFLEVBQUVGLFlBQVksQ0FBQ0UsRUFERztBQUVwQkMsUUFBQUEsUUFBUSxFQUFFSCxZQUFZLENBQUNJLFNBRkg7QUFHcEJDLFFBQUFBLElBQUksRUFBRUwsWUFBWSxDQUFDSyxJQUhDO0FBSXBCQyxRQUFBQSxRQUFRLEVBQUVOLFlBQVksQ0FBQ08sU0FKSDtBQUtwQkMsUUFBQUEsT0FBTyxFQUFFUixZQUFZLENBQUNRLE9BTEY7QUFNcEJDLFFBQUFBLG9CQUFvQixFQUFFVCxZQUFZLENBQUNVLHFCQU5mO0FBT3BCQyxRQUFBQSxrQkFBa0IsRUFBRVgsWUFBWSxDQUFDWSxtQkFQYjtBQVFwQkMsUUFBQUEsWUFBWSxFQUFFYixZQUFZLENBQUNjLGFBUlA7QUFTcEJDLFFBQUFBLFdBQVcsRUFBRWYsWUFBWSxDQUFDZSxXQVROO0FBVXBCQyxRQUFBQSxNQUFNLEVBQUVoQixZQUFZLENBQUNnQixNQVZEO0FBV3BCQyxRQUFBQSxTQUFTLEVBQUVqQixZQUFZLENBQUNrQixVQVhKO0FBWXBCQyxRQUFBQSxTQUFTLEVBQUVuQixZQUFZLENBQUNvQixVQVpKO0FBYXBCO0FBQ0FDLFFBQUFBLFlBQVksRUFBRSxLQUFLQyxtQkFBTCxDQUF5QnRCLFlBQXpCO0FBZE0sT0FBakIsQ0FBUDtBQWdCSDs7O3dDQUVtQkEsWSxFQUF3RTtBQUN4RixhQUFPLEtBQUt1QixVQUFMLENBQWdCdkIsWUFBaEIsRUFBOEIsNEJBQTlCLEVBQTRELElBQUl3Qiw4Q0FBSixFQUE1RCxDQUFQO0FBQ0g7Ozs7RUEzQmdEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25QcmljaW5nUGxhbiBmcm9tICcuLi9TdWJzY3JpcHRpb25QcmljaW5nUGxhbic7XG5pbXBvcnQgeyBBUElTdWJzY3JpcHRpb24gYXMgQVBJU3Vic2NyaXB0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIGZyb20gJy4vU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBzdWJzY3JpcHRpb24gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBtYXBEYXRhKHN1YnNjcmlwdGlvbjogQVBJU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oe1xuICAgICAgICAgICAgaWQ6IHN1YnNjcmlwdGlvbi5pZCxcbiAgICAgICAgICAgIHN0cmlwZUlkOiBzdWJzY3JpcHRpb24uc3RyaXBlX2lkLFxuICAgICAgICAgICAgbmFtZTogc3Vic2NyaXB0aW9uLm5hbWUsXG4gICAgICAgICAgICBzdWJUaXRsZTogc3Vic2NyaXB0aW9uLnN1Yl90aXRsZSxcbiAgICAgICAgICAgIGNyZWRpdHM6IHN1YnNjcmlwdGlvbi5jcmVkaXRzLFxuICAgICAgICAgICAgYWxsb3dhbmNlRGVzY3JpcHRpb246IHN1YnNjcmlwdGlvbi5hbGxvd2FuY2VfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjcmVkaXRzRGVzY3JpcHRpb246IHN1YnNjcmlwdGlvbi5jcmVkaXRzX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaWNvbkZpbGVuYW1lOiBzdWJzY3JpcHRpb24uaWNvbl9maWxlbmFtZSxcbiAgICAgICAgICAgIHJlY29tbWVuZGVkOiBzdWJzY3JpcHRpb24ucmVjb21tZW5kZWQsXG4gICAgICAgICAgICBhY3RpdmU6IHN1YnNjcmlwdGlvbi5hY3RpdmUsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHN1YnNjcmlwdGlvbi5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBzdWJzY3JpcHRpb24udXBkYXRlZF9hdCxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBwcmljaW5nUGxhbnM6IHRoaXMuaW5jbHVkZVByaWNpbmdQbGFucyhzdWJzY3JpcHRpb24pLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJpY2luZ1BsYW5zKHN1YnNjcmlwdGlvbjogQVBJU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogQXJyYXk8U3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihzdWJzY3JpcHRpb24sICdzdWJzY3JpcHRpb25fcHJpY2luZ19wbGFucycsIG5ldyBTdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==