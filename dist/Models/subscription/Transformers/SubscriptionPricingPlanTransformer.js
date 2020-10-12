"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SubscriptionPricingPlan = _interopRequireDefault(require("../SubscriptionPricingPlan"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionTransformer = _interopRequireDefault(require("./SubscriptionTransformer"));

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

var SubscriptionPricingPlanTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(SubscriptionPricingPlanTransformer, _BaseTransformer);

  var _super = _createSuper(SubscriptionPricingPlanTransformer);

  function SubscriptionPricingPlanTransformer() {
    _classCallCheck(this, SubscriptionPricingPlanTransformer);

    return _super.apply(this, arguments);
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
        subscription: this.includeSubscription(subscriptionPricingPlan) || undefined,
        active: subscriptionPricingPlan.active,
        createdAt: subscriptionPricingPlan.created_at,
        updatedAt: subscriptionPricingPlan.updated_at
      });
    }
  }, {
    key: "includeSubscription",
    value: function includeSubscription(subscriptionPricingPlan) {
      return this.item(subscriptionPricingPlan, 'subscription', new _SubscriptionTransformer["default"]());
    }
  }]);

  return SubscriptionPricingPlanTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = SubscriptionPricingPlanTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIiLCJzdWJzY3JpcHRpb25QcmljaW5nUGxhbiIsIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwiaWQiLCJzdHJpcGVJZCIsInN0cmlwZV9pZCIsInN1YnNjcmlwdGlvbklkIiwic3Vic2NyaXB0aW9uX2lkIiwibmFtZSIsImNvc3QiLCJpbnRlcnZhbFVuaXQiLCJpbnRlcnZhbF91bml0IiwiaW50ZXJ2YWxMZW5ndGgiLCJpbnRlcnZhbF9sZW5ndGgiLCJzdGFydGluZ1N1YnNjcmlwdGlvblRpZXIiLCJzdGFydGluZ19zdWJzY3JpcHRpb25fdGllciIsInN1YnNjcmlwdGlvbiIsImluY2x1ZGVTdWJzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJhY3RpdmUiLCJjcmVhdGVkQXQiLCJjcmVhdGVkX2F0IiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdCIsIml0ZW0iLCJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsa0M7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsdUIsRUFBdUY7QUFDM0YsYUFBTyxJQUFJQyxtQ0FBSixDQUE0QjtBQUMvQkMsUUFBQUEsRUFBRSxFQUFFRix1QkFBdUIsQ0FBQ0UsRUFERztBQUUvQkMsUUFBQUEsUUFBUSxFQUFFSCx1QkFBdUIsQ0FBQ0ksU0FGSDtBQUcvQkMsUUFBQUEsY0FBYyxFQUFFTCx1QkFBdUIsQ0FBQ00sZUFIVDtBQUkvQkMsUUFBQUEsSUFBSSxFQUFFUCx1QkFBdUIsQ0FBQ08sSUFKQztBQUsvQkMsUUFBQUEsSUFBSSxFQUFFUix1QkFBdUIsQ0FBQ1EsSUFMQztBQU0vQkMsUUFBQUEsWUFBWSxFQUFFVCx1QkFBdUIsQ0FBQ1UsYUFOUDtBQU8vQkMsUUFBQUEsY0FBYyxFQUFFWCx1QkFBdUIsQ0FBQ1ksZUFQVDtBQVEvQkMsUUFBQUEsd0JBQXdCLEVBQUViLHVCQUF1QixDQUFDYywwQkFSbkI7QUFTL0JDLFFBQUFBLFlBQVksRUFBRSxLQUFLQyxtQkFBTCxDQUF5QmhCLHVCQUF6QixLQUFxRGlCLFNBVHBDO0FBVS9CQyxRQUFBQSxNQUFNLEVBQUVsQix1QkFBdUIsQ0FBQ2tCLE1BVkQ7QUFXL0JDLFFBQUFBLFNBQVMsRUFBRW5CLHVCQUF1QixDQUFDb0IsVUFYSjtBQVkvQkMsUUFBQUEsU0FBUyxFQUFFckIsdUJBQXVCLENBQUNzQjtBQVpKLE9BQTVCLENBQVA7QUFjSDs7O3dDQUVtQnRCLHVCLEVBQTRGO0FBQzVHLGFBQU8sS0FBS3VCLElBQUwsQ0FBVXZCLHVCQUFWLEVBQW1DLGNBQW5DLEVBQW1ELElBQUl3QixtQ0FBSixFQUFuRCxDQUFQO0FBQ0g7Ozs7RUF6QjJEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdWJzY3JpcHRpb25QcmljaW5nUGxhbiBmcm9tICcuLi9TdWJzY3JpcHRpb25QcmljaW5nUGxhbic7XG5pbXBvcnQgeyBBUElTdWJzY3JpcHRpb25QcmljaW5nUGxhbiBhcyBBUElTdWJzY3JpcHRpb25QcmljaW5nUGxhbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvblByaWNpbmdQbGFuJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiBhcyBTdWJzY3JpcHRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IFN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIGZyb20gJy4vU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBzdWJzY3JpcHRpb24gcHJpY2luZyBwbGFuIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5cbiAgICAgKi9cbiAgICBtYXBEYXRhKHN1YnNjcmlwdGlvblByaWNpbmdQbGFuOiBBUElTdWJzY3JpcHRpb25QcmljaW5nUGxhbkludGVyZmFjZSk6IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb25QcmljaW5nUGxhbih7XG4gICAgICAgICAgICBpZDogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4uaWQsXG4gICAgICAgICAgICBzdHJpcGVJZDogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4uc3RyaXBlX2lkLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uSWQ6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLnN1YnNjcmlwdGlvbl9pZCxcbiAgICAgICAgICAgIG5hbWU6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLm5hbWUsXG4gICAgICAgICAgICBjb3N0OiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5jb3N0LFxuICAgICAgICAgICAgaW50ZXJ2YWxVbml0OiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5pbnRlcnZhbF91bml0LFxuICAgICAgICAgICAgaW50ZXJ2YWxMZW5ndGg6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLmludGVydmFsX2xlbmd0aCxcbiAgICAgICAgICAgIHN0YXJ0aW5nU3Vic2NyaXB0aW9uVGllcjogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4uc3RhcnRpbmdfc3Vic2NyaXB0aW9uX3RpZXIsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb246IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb25QcmljaW5nUGxhbikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWN0aXZlOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5hY3RpdmUsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLnVwZGF0ZWRfYXQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW46IEFQSVN1YnNjcmlwdGlvblByaWNpbmdQbGFuSW50ZXJmYWNlKTogU3Vic2NyaXB0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4sICdzdWJzY3JpcHRpb24nLCBuZXcgU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19