"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SubscriptionPricingPlan = _interopRequireDefault(require("../SubscriptionPricingPlan"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionTransformer = _interopRequireDefault(require("./SubscriptionTransformer"));

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
        subscription: this.includeSubscription(subscriptionPricingPlan) || undefined,
        active: subscriptionPricingPlan.active,
        createdAt: subscriptionPricingPlan.created_at,
        updatedAt: subscriptionPricingPlan.updated_at,
        canChange: subscriptionPricingPlan.can_change,
        canChangeReason: subscriptionPricingPlan.can_change_reason
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIiLCJzdWJzY3JpcHRpb25QcmljaW5nUGxhbiIsIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwiaWQiLCJzdHJpcGVJZCIsInN0cmlwZV9pZCIsInN1YnNjcmlwdGlvbklkIiwic3Vic2NyaXB0aW9uX2lkIiwibmFtZSIsImNvc3QiLCJpbnRlcnZhbFVuaXQiLCJpbnRlcnZhbF91bml0IiwiaW50ZXJ2YWxMZW5ndGgiLCJpbnRlcnZhbF9sZW5ndGgiLCJzdGFydGluZ1N1YnNjcmlwdGlvblRpZXIiLCJzdGFydGluZ19zdWJzY3JpcHRpb25fdGllciIsInN1YnNjcmlwdGlvbiIsImluY2x1ZGVTdWJzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJhY3RpdmUiLCJjcmVhdGVkQXQiLCJjcmVhdGVkX2F0IiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdCIsImNhbkNoYW5nZSIsImNhbl9jaGFuZ2UiLCJjYW5DaGFuZ2VSZWFzb24iLCJjYW5fY2hhbmdlX3JlYXNvbiIsIml0ZW0iLCJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxrQzs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyx1QixFQUF1RjtBQUMzRixhQUFPLElBQUlDLG1DQUFKLENBQTRCO0FBQy9CQyxRQUFBQSxFQUFFLEVBQUVGLHVCQUF1QixDQUFDRSxFQURHO0FBRS9CQyxRQUFBQSxRQUFRLEVBQUVILHVCQUF1QixDQUFDSSxTQUZIO0FBRy9CQyxRQUFBQSxjQUFjLEVBQUVMLHVCQUF1QixDQUFDTSxlQUhUO0FBSS9CQyxRQUFBQSxJQUFJLEVBQUVQLHVCQUF1QixDQUFDTyxJQUpDO0FBSy9CQyxRQUFBQSxJQUFJLEVBQUVSLHVCQUF1QixDQUFDUSxJQUxDO0FBTS9CQyxRQUFBQSxZQUFZLEVBQUVULHVCQUF1QixDQUFDVSxhQU5QO0FBTy9CQyxRQUFBQSxjQUFjLEVBQUVYLHVCQUF1QixDQUFDWSxlQVBUO0FBUS9CQyxRQUFBQSx3QkFBd0IsRUFBRWIsdUJBQXVCLENBQUNjLDBCQVJuQjtBQVMvQkMsUUFBQUEsWUFBWSxFQUFFLEtBQUtDLG1CQUFMLENBQXlCaEIsdUJBQXpCLEtBQXFEaUIsU0FUcEM7QUFVL0JDLFFBQUFBLE1BQU0sRUFBRWxCLHVCQUF1QixDQUFDa0IsTUFWRDtBQVcvQkMsUUFBQUEsU0FBUyxFQUFFbkIsdUJBQXVCLENBQUNvQixVQVhKO0FBWS9CQyxRQUFBQSxTQUFTLEVBQUVyQix1QkFBdUIsQ0FBQ3NCLFVBWko7QUFhL0JDLFFBQUFBLFNBQVMsRUFBRXZCLHVCQUF1QixDQUFDd0IsVUFiSjtBQWMvQkMsUUFBQUEsZUFBZSxFQUFFekIsdUJBQXVCLENBQUMwQjtBQWRWLE9BQTVCLENBQVA7QUFnQkg7Ozt3Q0FFbUIxQix1QixFQUE0RjtBQUM1RyxhQUFPLEtBQUsyQixJQUFMLENBQVUzQix1QkFBVixFQUFtQyxjQUFuQyxFQUFtRCxJQUFJNEIsbUNBQUosRUFBbkQsQ0FBUDtBQUNIOzs7O0VBM0IyREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4gZnJvbSAnLi4vU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4nO1xuaW1wb3J0IHsgQVBJU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4gYXMgQVBJU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb25QcmljaW5nUGxhbic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gYXMgU3Vic2NyaXB0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1N1YnNjcmlwdGlvblRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgc3Vic2NyaXB0aW9uIHByaWNpbmcgcGxhbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN1YnNjcmlwdGlvblByaWNpbmdQbGFuXG4gICAgICovXG4gICAgbWFwRGF0YShzdWJzY3JpcHRpb25QcmljaW5nUGxhbjogQVBJU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5JbnRlcmZhY2UpOiBTdWJzY3JpcHRpb25QcmljaW5nUGxhbiB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4oe1xuICAgICAgICAgICAgaWQ6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLmlkLFxuICAgICAgICAgICAgc3RyaXBlSWQ6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLnN0cmlwZV9pZCxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbklkOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5zdWJzY3JpcHRpb25faWQsXG4gICAgICAgICAgICBuYW1lOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5uYW1lLFxuICAgICAgICAgICAgY29zdDogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4uY29zdCxcbiAgICAgICAgICAgIGludGVydmFsVW5pdDogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4uaW50ZXJ2YWxfdW5pdCxcbiAgICAgICAgICAgIGludGVydmFsTGVuZ3RoOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5pbnRlcnZhbF9sZW5ndGgsXG4gICAgICAgICAgICBzdGFydGluZ1N1YnNjcmlwdGlvblRpZXI6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLnN0YXJ0aW5nX3N1YnNjcmlwdGlvbl90aWVyLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiB0aGlzLmluY2x1ZGVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFjdGl2ZTogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4uYWN0aXZlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi51cGRhdGVkX2F0LFxuICAgICAgICAgICAgY2FuQ2hhbmdlOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5jYW5fY2hhbmdlLFxuICAgICAgICAgICAgY2FuQ2hhbmdlUmVhc29uOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5jYW5fY2hhbmdlX3JlYXNvbixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb25QcmljaW5nUGxhbjogQVBJU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5JbnRlcmZhY2UpOiBTdWJzY3JpcHRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShzdWJzY3JpcHRpb25QcmljaW5nUGxhbiwgJ3N1YnNjcmlwdGlvbicsIG5ldyBTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=