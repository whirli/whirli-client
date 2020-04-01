"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SubscriptionPricingPlan = _interopRequireDefault(require("../SubscriptionPricingPlan"));

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

var SubscriptionPricingPlanTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(SubscriptionPricingPlanTransformer, _BaseTransformer);

  function SubscriptionPricingPlanTransformer() {
    _classCallCheck(this, SubscriptionPricingPlanTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubscriptionPricingPlanTransformer).apply(this, arguments));
  }

  _createClass(SubscriptionPricingPlanTransformer, [{
    key: "mapData",

    /**
     * Map a subscription pricing plan response
     *
     * @param subscriptionPricingPlan
     */
    value: function mapData(subscriptionPricingPlan) {
      return new _SubscriptionPricingPlan["default"]({
        id: subscriptionPricingPlan.id,
        stripeId: subscriptionPricingPlan.stripe_id,
        subscriptionId: subscriptionPricingPlan.subscription_id,
        name: subscriptionPricingPlan.name,
        cost: subscriptionPricingPlan.cost,
        intervalUnit: subscriptionPricingPlan.interval_unit,
        intervalLength: subscriptionPricingPlan.interval_length,
        startingSubscriptionTier: subscriptionPricingPlan.starting_subscription_tier,
        active: subscriptionPricingPlan.active,
        createdAt: subscriptionPricingPlan.created_at,
        updatedAt: subscriptionPricingPlan.updated_at
      });
    }
  }]);

  return SubscriptionPricingPlanTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = SubscriptionPricingPlanTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIiLCJzdWJzY3JpcHRpb25QcmljaW5nUGxhbiIsIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwiaWQiLCJzdHJpcGVJZCIsInN0cmlwZV9pZCIsInN1YnNjcmlwdGlvbklkIiwic3Vic2NyaXB0aW9uX2lkIiwibmFtZSIsImNvc3QiLCJpbnRlcnZhbFVuaXQiLCJpbnRlcnZhbF91bml0IiwiaW50ZXJ2YWxMZW5ndGgiLCJpbnRlcnZhbF9sZW5ndGgiLCJzdGFydGluZ1N1YnNjcmlwdGlvblRpZXIiLCJzdGFydGluZ19zdWJzY3JpcHRpb25fdGllciIsImFjdGl2ZSIsImNyZWF0ZWRBdCIsImNyZWF0ZWRfYXQiLCJ1cGRhdGVkQXQiLCJ1cGRhdGVkX2F0IiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGtDOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLHVCLEVBQXVGO0FBQzNGLGFBQU8sSUFBSUMsbUNBQUosQ0FBNEI7QUFDL0JDLFFBQUFBLEVBQUUsRUFBRUYsdUJBQXVCLENBQUNFLEVBREc7QUFFL0JDLFFBQUFBLFFBQVEsRUFBRUgsdUJBQXVCLENBQUNJLFNBRkg7QUFHL0JDLFFBQUFBLGNBQWMsRUFBRUwsdUJBQXVCLENBQUNNLGVBSFQ7QUFJL0JDLFFBQUFBLElBQUksRUFBRVAsdUJBQXVCLENBQUNPLElBSkM7QUFLL0JDLFFBQUFBLElBQUksRUFBRVIsdUJBQXVCLENBQUNRLElBTEM7QUFNL0JDLFFBQUFBLFlBQVksRUFBRVQsdUJBQXVCLENBQUNVLGFBTlA7QUFPL0JDLFFBQUFBLGNBQWMsRUFBRVgsdUJBQXVCLENBQUNZLGVBUFQ7QUFRL0JDLFFBQUFBLHdCQUF3QixFQUFFYix1QkFBdUIsQ0FBQ2MsMEJBUm5CO0FBUy9CQyxRQUFBQSxNQUFNLEVBQUVmLHVCQUF1QixDQUFDZSxNQVREO0FBVS9CQyxRQUFBQSxTQUFTLEVBQUVoQix1QkFBdUIsQ0FBQ2lCLFVBVko7QUFXL0JDLFFBQUFBLFNBQVMsRUFBRWxCLHVCQUF1QixDQUFDbUI7QUFYSixPQUE1QixDQUFQO0FBYUg7Ozs7RUFwQjJEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdWJzY3JpcHRpb25QcmljaW5nUGxhbiBmcm9tICcuLi9TdWJzY3JpcHRpb25QcmljaW5nUGxhbic7XG5pbXBvcnQgeyBBUElTdWJzY3JpcHRpb25QcmljaW5nUGxhbiBhcyBBUElTdWJzY3JpcHRpb25QcmljaW5nUGxhbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvblByaWNpbmdQbGFuJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgc3Vic2NyaXB0aW9uIHByaWNpbmcgcGxhbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN1YnNjcmlwdGlvblByaWNpbmdQbGFuXG4gICAgICovXG4gICAgbWFwRGF0YShzdWJzY3JpcHRpb25QcmljaW5nUGxhbjogQVBJU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5JbnRlcmZhY2UpOiBTdWJzY3JpcHRpb25QcmljaW5nUGxhbiB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4oe1xuICAgICAgICAgICAgaWQ6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLmlkLFxuICAgICAgICAgICAgc3RyaXBlSWQ6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLnN0cmlwZV9pZCxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbklkOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5zdWJzY3JpcHRpb25faWQsXG4gICAgICAgICAgICBuYW1lOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5uYW1lLFxuICAgICAgICAgICAgY29zdDogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4uY29zdCxcbiAgICAgICAgICAgIGludGVydmFsVW5pdDogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4uaW50ZXJ2YWxfdW5pdCxcbiAgICAgICAgICAgIGludGVydmFsTGVuZ3RoOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5pbnRlcnZhbF9sZW5ndGgsXG4gICAgICAgICAgICBzdGFydGluZ1N1YnNjcmlwdGlvblRpZXI6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLnN0YXJ0aW5nX3N1YnNjcmlwdGlvbl90aWVyLFxuICAgICAgICAgICAgYWN0aXZlOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5hY3RpdmUsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLnVwZGF0ZWRfYXQsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==