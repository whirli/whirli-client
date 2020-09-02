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
        totalSubscriptionCost: userSubscription.totalSubscriptionCost
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsInVzZXJTdWJzY3JpcHRpb24iLCJVc2VyU3Vic2NyaXB0aW9uIiwiaWQiLCJzdHJpcGVJZCIsInN0YXJ0ZWRBdCIsImVuZGVkQXQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJyZWFzb25Gb3JFbmRJZCIsInBlbmRpbmdDYW5jZWxBdCIsInN1c3BlbmRlZEF0IiwicmVzb3VyY2VUeXBlIiwiaGFzRGVsaXZlcnlCb29zdGVyIiwic3RhdHVzSWQiLCJ1c2VyIiwic3Vic2NyaXB0aW9uIiwiaW5jbHVkZVN1YnNjcmlwdGlvbiIsInVuZGVmaW5lZCIsInN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwiaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwic3Vic2NyaXB0aW9uVGllcnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uVGllcnMiLCJhY3RpdmVTdWJzY3JpcHRpb25UaWVyIiwiaW5jbHVkZUFjdGl2ZVN1YnNjcmlwdGlvblRpZXIiLCJhZGRvbnMiLCJpbmNsdWRlQWRkb25zIiwiaGlnaGxpZ2h0cyIsInRvdGFsU3Vic2NyaXB0aW9uQ29zdCIsIml0ZW0iLCJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyIiwiU3Vic2NyaXB0aW9uQWRkb25UcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUVBOztBQUdBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSwyQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxnQixFQUErRDtBQUNuRSxhQUFPLElBQUlDLDRCQUFKLENBQXFCO0FBQ3hCQyxRQUFBQSxFQUFFLEVBQUVGLGdCQUFnQixDQUFDRSxFQURHO0FBRXhCQyxRQUFBQSxRQUFRLEVBQUVILGdCQUFnQixDQUFDRyxRQUZIO0FBR3hCQyxRQUFBQSxTQUFTLEVBQUVKLGdCQUFnQixDQUFDSSxTQUhKO0FBSXhCQyxRQUFBQSxPQUFPLEVBQUVMLGdCQUFnQixDQUFDSyxPQUpGO0FBS3hCQyxRQUFBQSxTQUFTLEVBQUVOLGdCQUFnQixDQUFDTSxTQUxKO0FBTXhCQyxRQUFBQSxTQUFTLEVBQUVQLGdCQUFnQixDQUFDTyxTQU5KO0FBT3hCQyxRQUFBQSxjQUFjLEVBQUVSLGdCQUFnQixDQUFDUSxjQVBUO0FBUXhCQyxRQUFBQSxlQUFlLEVBQUVULGdCQUFnQixDQUFDUyxlQVJWO0FBU3hCQyxRQUFBQSxXQUFXLEVBQUVWLGdCQUFnQixDQUFDVSxXQVROO0FBVXhCQyxRQUFBQSxZQUFZLEVBQUVYLGdCQUFnQixDQUFDVyxZQVZQO0FBV3hCQyxRQUFBQSxrQkFBa0IsRUFBRVosZ0JBQWdCLENBQUNZLGtCQVhiO0FBWXhCQyxRQUFBQSxRQUFRLEVBQUViLGdCQUFnQixDQUFDYSxRQVpIO0FBYXhCQyxRQUFBQSxJQUFJLEVBQUVkLGdCQUFnQixDQUFDYyxJQWJDO0FBY3hCQyxRQUFBQSxZQUFZLEVBQUUsS0FBS0MsbUJBQUwsQ0FBeUJoQixnQkFBekIsS0FBOENpQixTQWRwQztBQWV4QkMsUUFBQUEsdUJBQXVCLEVBQUUsS0FBS0MsOEJBQUwsQ0FBb0NuQixnQkFBcEMsS0FBeURpQixTQWYxRDtBQWdCeEJHLFFBQUFBLGlCQUFpQixFQUFFLEtBQUtDLHdCQUFMLENBQThCckIsZ0JBQTlCLEtBQW1EaUIsU0FoQjlDO0FBaUJ4QkssUUFBQUEsc0JBQXNCLEVBQUUsS0FBS0MsNkJBQUwsQ0FBbUN2QixnQkFBbkMsS0FBd0RpQixTQWpCeEQ7QUFrQnhCTyxRQUFBQSxNQUFNLEVBQUUsS0FBS0MsYUFBTCxDQUFtQnpCLGdCQUFuQixLQUF3Q2lCLFNBbEJ4QjtBQW1CeEJTLFFBQUFBLFVBQVUsRUFBRTFCLGdCQUFnQixDQUFDMEIsVUFuQkw7QUFvQnhCQyxRQUFBQSxxQkFBcUIsRUFBRTNCLGdCQUFnQixDQUFDMkI7QUFwQmhCLE9BQXJCLENBQVA7QUFzQkg7Ozt3Q0FFbUIzQixnQixFQUEyRTtBQUMzRixhQUFPLEtBQUs0QixJQUFMLENBQVU1QixnQkFBVixFQUE0QixjQUE1QixFQUE0QyxJQUFJNkIsbUNBQUosRUFBNUMsQ0FBUDtBQUNIOzs7bURBR0c3QixnQixFQUN1QztBQUN2QyxhQUFPLEtBQUs0QixJQUFMLENBQVU1QixnQkFBVixFQUE0Qix5QkFBNUIsRUFBdUQsSUFBSThCLDhDQUFKLEVBQXZELENBQVA7QUFDSDs7OzZDQUV3QjlCLGdCLEVBQXNGO0FBQzNHLGFBQU8sS0FBSytCLFVBQUwsQ0FBZ0IvQixnQkFBaEIsRUFBa0MsbUJBQWxDLEVBQXVELElBQUlnQyx1Q0FBSixFQUF2RCxDQUFQO0FBQ0g7OztrREFFNkJoQyxnQixFQUErRTtBQUN6RyxhQUFPLEtBQUs0QixJQUFMLENBQVU1QixnQkFBVixFQUE0Qix3QkFBNUIsRUFBc0QsSUFBSWdDLHVDQUFKLEVBQXRELENBQVA7QUFDSDs7O2tDQUVhaEMsZ0IsRUFBdUY7QUFDakcsYUFBTyxLQUFLK0IsVUFBTCxDQUFnQi9CLGdCQUFoQixFQUFrQyxRQUFsQyxFQUE0QyxJQUFJaUMsd0NBQUosRUFBNUMsQ0FBUDtBQUNIOzs7O0VBbkRvREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlclN1YnNjcmlwdGlvbic7XG5pbXBvcnQgVXNlclN1YnNjcmlwdGlvbiBmcm9tICcuLi9Vc2VyU3Vic2NyaXB0aW9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdWJzY3JpcHRpb24vVHJhbnNmb3JtZXJzL1N1YnNjcmlwdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiBhcyBTdWJzY3JpcHRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuIGFzIFN1YnNjcmlwdGlvblByaWNpbmdQbGFuSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4nO1xuaW1wb3J0IFN1YnNjcmlwdGlvblRpZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uVGllcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N1YnNjcmlwdGlvbi9UcmFuc2Zvcm1lcnMvU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyJztcbmltcG9ydCBTdWJzY3JpcHRpb25BZGRvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb25BZGRvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uQWRkb25UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdWJzY3JpcHRpb24vVHJhbnNmb3JtZXJzL1N1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIFVzZXJTdWJzY3JpcHRpb24gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VyU3Vic2NyaXB0aW9uXG4gICAgICovXG4gICAgbWFwRGF0YSh1c2VyU3Vic2NyaXB0aW9uOiBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogVXNlclN1YnNjcmlwdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgVXNlclN1YnNjcmlwdGlvbih7XG4gICAgICAgICAgICBpZDogdXNlclN1YnNjcmlwdGlvbi5pZCxcbiAgICAgICAgICAgIHN0cmlwZUlkOiB1c2VyU3Vic2NyaXB0aW9uLnN0cmlwZUlkLFxuICAgICAgICAgICAgc3RhcnRlZEF0OiB1c2VyU3Vic2NyaXB0aW9uLnN0YXJ0ZWRBdCxcbiAgICAgICAgICAgIGVuZGVkQXQ6IHVzZXJTdWJzY3JpcHRpb24uZW5kZWRBdCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdXNlclN1YnNjcmlwdGlvbi5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHVzZXJTdWJzY3JpcHRpb24udXBkYXRlZEF0LFxuICAgICAgICAgICAgcmVhc29uRm9yRW5kSWQ6IHVzZXJTdWJzY3JpcHRpb24ucmVhc29uRm9yRW5kSWQsXG4gICAgICAgICAgICBwZW5kaW5nQ2FuY2VsQXQ6IHVzZXJTdWJzY3JpcHRpb24ucGVuZGluZ0NhbmNlbEF0LFxuICAgICAgICAgICAgc3VzcGVuZGVkQXQ6IHVzZXJTdWJzY3JpcHRpb24uc3VzcGVuZGVkQXQsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHVzZXJTdWJzY3JpcHRpb24ucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgaGFzRGVsaXZlcnlCb29zdGVyOiB1c2VyU3Vic2NyaXB0aW9uLmhhc0RlbGl2ZXJ5Qm9vc3RlcixcbiAgICAgICAgICAgIHN0YXR1c0lkOiB1c2VyU3Vic2NyaXB0aW9uLnN0YXR1c0lkLFxuICAgICAgICAgICAgdXNlcjogdXNlclN1YnNjcmlwdGlvbi51c2VyLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiB0aGlzLmluY2x1ZGVTdWJzY3JpcHRpb24odXNlclN1YnNjcmlwdGlvbikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW46IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFuKHVzZXJTdWJzY3JpcHRpb24pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblRpZXJzOiB0aGlzLmluY2x1ZGVTdWJzY3JpcHRpb25UaWVycyh1c2VyU3Vic2NyaXB0aW9uKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb25UaWVyOiB0aGlzLmluY2x1ZGVBY3RpdmVTdWJzY3JpcHRpb25UaWVyKHVzZXJTdWJzY3JpcHRpb24pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFkZG9uczogdGhpcy5pbmNsdWRlQWRkb25zKHVzZXJTdWJzY3JpcHRpb24pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhpZ2hsaWdodHM6IHVzZXJTdWJzY3JpcHRpb24uaGlnaGxpZ2h0cyxcbiAgICAgICAgICAgIHRvdGFsU3Vic2NyaXB0aW9uQ29zdDogdXNlclN1YnNjcmlwdGlvbi50b3RhbFN1YnNjcmlwdGlvbkNvc3QsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdWJzY3JpcHRpb24odXNlclN1YnNjcmlwdGlvbjogVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSk6IFN1YnNjcmlwdGlvbkludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXJTdWJzY3JpcHRpb24sICdzdWJzY3JpcHRpb24nLCBuZXcgU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFuKFxuICAgICAgICB1c2VyU3Vic2NyaXB0aW9uOiBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlLFxuICAgICk6IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0odXNlclN1YnNjcmlwdGlvbiwgJ3N1YnNjcmlwdGlvblByaWNpbmdQbGFuJywgbmV3IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvblRpZXJzKHVzZXJTdWJzY3JpcHRpb246IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBBcnJheTxTdWJzY3JpcHRpb25UaWVySW50ZXJmYWNlPiB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXJTdWJzY3JpcHRpb24sICdzdWJzY3JpcHRpb25UaWVycycsIG5ldyBTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFjdGl2ZVN1YnNjcmlwdGlvblRpZXIodXNlclN1YnNjcmlwdGlvbjogVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSk6IFN1YnNjcmlwdGlvblRpZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyU3Vic2NyaXB0aW9uLCAnYWN0aXZlU3Vic2NyaXB0aW9uVGllcicsIG5ldyBTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFkZG9ucyh1c2VyU3Vic2NyaXB0aW9uOiBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogQXJyYXk8U3Vic2NyaXB0aW9uQWRkb25JbnRlcmZhY2U+IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlclN1YnNjcmlwdGlvbiwgJ2FkZG9ucycsIG5ldyBTdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==