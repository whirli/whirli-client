"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _UserSubscription = _interopRequireDefault(require("../UserSubscription"));

var _SubscriptionTransformer = _interopRequireDefault(require("../../subscription/Transformers/SubscriptionTransformer"));

var _SubscriptionPricingPlanTransformer = _interopRequireDefault(require("../../subscription/Transformers/SubscriptionPricingPlanTransformer"));

var _SubscriptionTierTransformer = _interopRequireDefault(require("../../subscription/Transformers/SubscriptionTierTransformer"));

var _SubscriptionAddonTransformer = _interopRequireDefault(require("../../subscription/Transformers/SubscriptionAddonTransformer"));

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

var UserSubscriptionTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(UserSubscriptionTransformer, _BaseTransformer);

  function UserSubscriptionTransformer() {
    _classCallCheck(this, UserSubscriptionTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserSubscriptionTransformer).apply(this, arguments));
  }

  _createClass(UserSubscriptionTransformer, [{
    key: "mapData",

    /**
     * Map a UserSubscription response
     *
     * @param userSubscription
     */
    value: function mapData(userSubscription) {
      return new _UserSubscription["default"]({
        id: userSubscription.id,
        stripeId: userSubscription.stripeId,
        startedAt: userSubscription.startedAt,
        endedAt: userSubscription.endedAt,
        createdAt: userSubscription.createdAt,
        updatedAt: userSubscription.updatedAt,
        reasonForEndId: userSubscription.reasonForEndId,
        pendingCancelAt: userSubscription.pendingCancelAt,
        suspendedAt: userSubscription.suspendedAt,
        resourceType: userSubscription.resourceType,
        hasDeliveryBooster: userSubscription.hasDeliveryBooster,
        statusId: userSubscription.statusId,
        user: userSubscription.user,
        subscription: this.includeSubscription(userSubscription) || undefined,
        subscriptionPricingPlan: this.includeSubscriptionPricingPlan(userSubscription) || undefined,
        subscriptionTiers: this.includeSubscriptionTiers(userSubscription) || undefined,
        activeSubscriptionTier: this.includeActiveSubscriptionTier(userSubscription) || undefined,
        addons: this.includeAddons(userSubscription) || undefined,
        highlights: userSubscription.highlights,
        totalSubscriptionCost: userSubscription.totalSubscriptionCost,
        planName: userSubscription.planName
      });
    }
  }, {
    key: "includeSubscription",
    value: function includeSubscription(userSubscription) {
      return this.item(userSubscription, 'subscription', new _SubscriptionTransformer["default"]());
    }
  }, {
    key: "includeSubscriptionPricingPlan",
    value: function includeSubscriptionPricingPlan(userSubscription) {
      return this.item(userSubscription, 'subscriptionPricingPlan', new _SubscriptionPricingPlanTransformer["default"]());
    }
  }, {
    key: "includeSubscriptionTiers",
    value: function includeSubscriptionTiers(userSubscription) {
      return this.collection(userSubscription, 'subscriptionTiers', new _SubscriptionTierTransformer["default"]());
    }
  }, {
    key: "includeActiveSubscriptionTier",
    value: function includeActiveSubscriptionTier(userSubscription) {
      return this.item(userSubscription, 'activeSubscriptionTier', new _SubscriptionTierTransformer["default"]());
    }
  }, {
    key: "includeAddons",
    value: function includeAddons(userSubscription) {
      return this.collection(userSubscription, 'addons', new _SubscriptionAddonTransformer["default"]());
    }
  }]);

  return UserSubscriptionTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = UserSubscriptionTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsInVzZXJTdWJzY3JpcHRpb24iLCJVc2VyU3Vic2NyaXB0aW9uIiwiaWQiLCJzdHJpcGVJZCIsInN0YXJ0ZWRBdCIsImVuZGVkQXQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJyZWFzb25Gb3JFbmRJZCIsInBlbmRpbmdDYW5jZWxBdCIsInN1c3BlbmRlZEF0IiwicmVzb3VyY2VUeXBlIiwiaGFzRGVsaXZlcnlCb29zdGVyIiwic3RhdHVzSWQiLCJ1c2VyIiwic3Vic2NyaXB0aW9uIiwiaW5jbHVkZVN1YnNjcmlwdGlvbiIsInVuZGVmaW5lZCIsInN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwiaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwic3Vic2NyaXB0aW9uVGllcnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uVGllcnMiLCJhY3RpdmVTdWJzY3JpcHRpb25UaWVyIiwiaW5jbHVkZUFjdGl2ZVN1YnNjcmlwdGlvblRpZXIiLCJhZGRvbnMiLCJpbmNsdWRlQWRkb25zIiwiaGlnaGxpZ2h0cyIsInRvdGFsU3Vic2NyaXB0aW9uQ29zdCIsInBsYW5OYW1lIiwiaXRlbSIsIlN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIiwiU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIiLCJTdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDJCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLGdCLEVBQStEO0FBQ25FLGFBQU8sSUFBSUMsNEJBQUosQ0FBcUI7QUFDeEJDLFFBQUFBLEVBQUUsRUFBRUYsZ0JBQWdCLENBQUNFLEVBREc7QUFFeEJDLFFBQUFBLFFBQVEsRUFBRUgsZ0JBQWdCLENBQUNHLFFBRkg7QUFHeEJDLFFBQUFBLFNBQVMsRUFBRUosZ0JBQWdCLENBQUNJLFNBSEo7QUFJeEJDLFFBQUFBLE9BQU8sRUFBRUwsZ0JBQWdCLENBQUNLLE9BSkY7QUFLeEJDLFFBQUFBLFNBQVMsRUFBRU4sZ0JBQWdCLENBQUNNLFNBTEo7QUFNeEJDLFFBQUFBLFNBQVMsRUFBRVAsZ0JBQWdCLENBQUNPLFNBTko7QUFPeEJDLFFBQUFBLGNBQWMsRUFBRVIsZ0JBQWdCLENBQUNRLGNBUFQ7QUFReEJDLFFBQUFBLGVBQWUsRUFBRVQsZ0JBQWdCLENBQUNTLGVBUlY7QUFTeEJDLFFBQUFBLFdBQVcsRUFBRVYsZ0JBQWdCLENBQUNVLFdBVE47QUFVeEJDLFFBQUFBLFlBQVksRUFBRVgsZ0JBQWdCLENBQUNXLFlBVlA7QUFXeEJDLFFBQUFBLGtCQUFrQixFQUFFWixnQkFBZ0IsQ0FBQ1ksa0JBWGI7QUFZeEJDLFFBQUFBLFFBQVEsRUFBRWIsZ0JBQWdCLENBQUNhLFFBWkg7QUFheEJDLFFBQUFBLElBQUksRUFBRWQsZ0JBQWdCLENBQUNjLElBYkM7QUFjeEJDLFFBQUFBLFlBQVksRUFBRSxLQUFLQyxtQkFBTCxDQUF5QmhCLGdCQUF6QixLQUE4Q2lCLFNBZHBDO0FBZXhCQyxRQUFBQSx1QkFBdUIsRUFBRSxLQUFLQyw4QkFBTCxDQUFvQ25CLGdCQUFwQyxLQUF5RGlCLFNBZjFEO0FBZ0J4QkcsUUFBQUEsaUJBQWlCLEVBQUUsS0FBS0Msd0JBQUwsQ0FBOEJyQixnQkFBOUIsS0FBbURpQixTQWhCOUM7QUFpQnhCSyxRQUFBQSxzQkFBc0IsRUFBRSxLQUFLQyw2QkFBTCxDQUFtQ3ZCLGdCQUFuQyxLQUF3RGlCLFNBakJ4RDtBQWtCeEJPLFFBQUFBLE1BQU0sRUFBRSxLQUFLQyxhQUFMLENBQW1CekIsZ0JBQW5CLEtBQXdDaUIsU0FsQnhCO0FBbUJ4QlMsUUFBQUEsVUFBVSxFQUFFMUIsZ0JBQWdCLENBQUMwQixVQW5CTDtBQW9CeEJDLFFBQUFBLHFCQUFxQixFQUFFM0IsZ0JBQWdCLENBQUMyQixxQkFwQmhCO0FBcUJ4QkMsUUFBQUEsUUFBUSxFQUFFNUIsZ0JBQWdCLENBQUM0QjtBQXJCSCxPQUFyQixDQUFQO0FBdUJIOzs7d0NBRW1CNUIsZ0IsRUFBMkU7QUFDM0YsYUFBTyxLQUFLNkIsSUFBTCxDQUFVN0IsZ0JBQVYsRUFBNEIsY0FBNUIsRUFBNEMsSUFBSThCLG1DQUFKLEVBQTVDLENBQVA7QUFDSDs7O21EQUdHOUIsZ0IsRUFDdUM7QUFDdkMsYUFBTyxLQUFLNkIsSUFBTCxDQUFVN0IsZ0JBQVYsRUFBNEIseUJBQTVCLEVBQXVELElBQUkrQiw4Q0FBSixFQUF2RCxDQUFQO0FBQ0g7Ozs2Q0FFd0IvQixnQixFQUFzRjtBQUMzRyxhQUFPLEtBQUtnQyxVQUFMLENBQWdCaEMsZ0JBQWhCLEVBQWtDLG1CQUFsQyxFQUF1RCxJQUFJaUMsdUNBQUosRUFBdkQsQ0FBUDtBQUNIOzs7a0RBRTZCakMsZ0IsRUFBK0U7QUFDekcsYUFBTyxLQUFLNkIsSUFBTCxDQUFVN0IsZ0JBQVYsRUFBNEIsd0JBQTVCLEVBQXNELElBQUlpQyx1Q0FBSixFQUF0RCxDQUFQO0FBQ0g7OztrQ0FFYWpDLGdCLEVBQXVGO0FBQ2pHLGFBQU8sS0FBS2dDLFVBQUwsQ0FBZ0JoQyxnQkFBaEIsRUFBa0MsUUFBbEMsRUFBNEMsSUFBSWtDLHdDQUFKLEVBQTVDLENBQVA7QUFDSDs7OztFQXBEb0RDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXJTdWJzY3JpcHRpb24nO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb24gZnJvbSAnLi4vVXNlclN1YnNjcmlwdGlvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gYXMgU3Vic2NyaXB0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N1YnNjcmlwdGlvbi9UcmFuc2Zvcm1lcnMvU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25QcmljaW5nUGxhbiBhcyBTdWJzY3JpcHRpb25QcmljaW5nUGxhbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvblByaWNpbmdQbGFuJztcbmltcG9ydCBTdWJzY3JpcHRpb25UaWVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvblRpZXInO1xuaW1wb3J0IFN1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdWJzY3JpcHRpb24vVHJhbnNmb3JtZXJzL1N1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uQWRkb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uQWRkb24nO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBVc2VyU3Vic2NyaXB0aW9uIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlclN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIG1hcERhdGEodXNlclN1YnNjcmlwdGlvbjogVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSk6IFVzZXJTdWJzY3JpcHRpb24ge1xuICAgICAgICByZXR1cm4gbmV3IFVzZXJTdWJzY3JpcHRpb24oe1xuICAgICAgICAgICAgaWQ6IHVzZXJTdWJzY3JpcHRpb24uaWQsXG4gICAgICAgICAgICBzdHJpcGVJZDogdXNlclN1YnNjcmlwdGlvbi5zdHJpcGVJZCxcbiAgICAgICAgICAgIHN0YXJ0ZWRBdDogdXNlclN1YnNjcmlwdGlvbi5zdGFydGVkQXQsXG4gICAgICAgICAgICBlbmRlZEF0OiB1c2VyU3Vic2NyaXB0aW9uLmVuZGVkQXQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHVzZXJTdWJzY3JpcHRpb24uY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB1c2VyU3Vic2NyaXB0aW9uLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHJlYXNvbkZvckVuZElkOiB1c2VyU3Vic2NyaXB0aW9uLnJlYXNvbkZvckVuZElkLFxuICAgICAgICAgICAgcGVuZGluZ0NhbmNlbEF0OiB1c2VyU3Vic2NyaXB0aW9uLnBlbmRpbmdDYW5jZWxBdCxcbiAgICAgICAgICAgIHN1c3BlbmRlZEF0OiB1c2VyU3Vic2NyaXB0aW9uLnN1c3BlbmRlZEF0LFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiB1c2VyU3Vic2NyaXB0aW9uLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIGhhc0RlbGl2ZXJ5Qm9vc3RlcjogdXNlclN1YnNjcmlwdGlvbi5oYXNEZWxpdmVyeUJvb3N0ZXIsXG4gICAgICAgICAgICBzdGF0dXNJZDogdXNlclN1YnNjcmlwdGlvbi5zdGF0dXNJZCxcbiAgICAgICAgICAgIHVzZXI6IHVzZXJTdWJzY3JpcHRpb24udXNlcixcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbjogdGhpcy5pbmNsdWRlU3Vic2NyaXB0aW9uKHVzZXJTdWJzY3JpcHRpb24pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblByaWNpbmdQbGFuOiB0aGlzLmluY2x1ZGVTdWJzY3JpcHRpb25QcmljaW5nUGxhbih1c2VyU3Vic2NyaXB0aW9uKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25UaWVyczogdGhpcy5pbmNsdWRlU3Vic2NyaXB0aW9uVGllcnModXNlclN1YnNjcmlwdGlvbikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWN0aXZlU3Vic2NyaXB0aW9uVGllcjogdGhpcy5pbmNsdWRlQWN0aXZlU3Vic2NyaXB0aW9uVGllcih1c2VyU3Vic2NyaXB0aW9uKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBhZGRvbnM6IHRoaXMuaW5jbHVkZUFkZG9ucyh1c2VyU3Vic2NyaXB0aW9uKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBoaWdobGlnaHRzOiB1c2VyU3Vic2NyaXB0aW9uLmhpZ2hsaWdodHMsXG4gICAgICAgICAgICB0b3RhbFN1YnNjcmlwdGlvbkNvc3Q6IHVzZXJTdWJzY3JpcHRpb24udG90YWxTdWJzY3JpcHRpb25Db3N0LFxuICAgICAgICAgICAgcGxhbk5hbWU6IHVzZXJTdWJzY3JpcHRpb24ucGxhbk5hbWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdWJzY3JpcHRpb24odXNlclN1YnNjcmlwdGlvbjogVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSk6IFN1YnNjcmlwdGlvbkludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXJTdWJzY3JpcHRpb24sICdzdWJzY3JpcHRpb24nLCBuZXcgU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFuKFxuICAgICAgICB1c2VyU3Vic2NyaXB0aW9uOiBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlLFxuICAgICk6IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0odXNlclN1YnNjcmlwdGlvbiwgJ3N1YnNjcmlwdGlvblByaWNpbmdQbGFuJywgbmV3IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvblRpZXJzKHVzZXJTdWJzY3JpcHRpb246IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBBcnJheTxTdWJzY3JpcHRpb25UaWVySW50ZXJmYWNlPiB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXJTdWJzY3JpcHRpb24sICdzdWJzY3JpcHRpb25UaWVycycsIG5ldyBTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFjdGl2ZVN1YnNjcmlwdGlvblRpZXIodXNlclN1YnNjcmlwdGlvbjogVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSk6IFN1YnNjcmlwdGlvblRpZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyU3Vic2NyaXB0aW9uLCAnYWN0aXZlU3Vic2NyaXB0aW9uVGllcicsIG5ldyBTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFkZG9ucyh1c2VyU3Vic2NyaXB0aW9uOiBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogQXJyYXk8U3Vic2NyaXB0aW9uQWRkb25JbnRlcmZhY2U+IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlclN1YnNjcmlwdGlvbiwgJ2FkZG9ucycsIG5ldyBTdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==