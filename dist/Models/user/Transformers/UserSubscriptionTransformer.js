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

var UserSubscriptionTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(UserSubscriptionTransformer, _BaseTransformer);

  var _super = _createSuper(UserSubscriptionTransformer);

  function UserSubscriptionTransformer() {
    _classCallCheck(this, UserSubscriptionTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsInVzZXJTdWJzY3JpcHRpb24iLCJVc2VyU3Vic2NyaXB0aW9uIiwiaWQiLCJzdHJpcGVJZCIsInN0YXJ0ZWRBdCIsImVuZGVkQXQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJyZWFzb25Gb3JFbmRJZCIsInBlbmRpbmdDYW5jZWxBdCIsInN1c3BlbmRlZEF0IiwicmVzb3VyY2VUeXBlIiwiaGFzRGVsaXZlcnlCb29zdGVyIiwic3RhdHVzSWQiLCJ1c2VyIiwic3Vic2NyaXB0aW9uIiwiaW5jbHVkZVN1YnNjcmlwdGlvbiIsInVuZGVmaW5lZCIsInN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwiaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwic3Vic2NyaXB0aW9uVGllcnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uVGllcnMiLCJhY3RpdmVTdWJzY3JpcHRpb25UaWVyIiwiaW5jbHVkZUFjdGl2ZVN1YnNjcmlwdGlvblRpZXIiLCJhZGRvbnMiLCJpbmNsdWRlQWRkb25zIiwiaGlnaGxpZ2h0cyIsInRvdGFsU3Vic2NyaXB0aW9uQ29zdCIsInBsYW5OYW1lIiwiaXRlbSIsIlN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIiwiU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIiLCJTdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSwyQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxnQixFQUErRDtBQUNuRSxhQUFPLElBQUlDLDRCQUFKLENBQXFCO0FBQ3hCQyxRQUFBQSxFQUFFLEVBQUVGLGdCQUFnQixDQUFDRSxFQURHO0FBRXhCQyxRQUFBQSxRQUFRLEVBQUVILGdCQUFnQixDQUFDRyxRQUZIO0FBR3hCQyxRQUFBQSxTQUFTLEVBQUVKLGdCQUFnQixDQUFDSSxTQUhKO0FBSXhCQyxRQUFBQSxPQUFPLEVBQUVMLGdCQUFnQixDQUFDSyxPQUpGO0FBS3hCQyxRQUFBQSxTQUFTLEVBQUVOLGdCQUFnQixDQUFDTSxTQUxKO0FBTXhCQyxRQUFBQSxTQUFTLEVBQUVQLGdCQUFnQixDQUFDTyxTQU5KO0FBT3hCQyxRQUFBQSxjQUFjLEVBQUVSLGdCQUFnQixDQUFDUSxjQVBUO0FBUXhCQyxRQUFBQSxlQUFlLEVBQUVULGdCQUFnQixDQUFDUyxlQVJWO0FBU3hCQyxRQUFBQSxXQUFXLEVBQUVWLGdCQUFnQixDQUFDVSxXQVROO0FBVXhCQyxRQUFBQSxZQUFZLEVBQUVYLGdCQUFnQixDQUFDVyxZQVZQO0FBV3hCQyxRQUFBQSxrQkFBa0IsRUFBRVosZ0JBQWdCLENBQUNZLGtCQVhiO0FBWXhCQyxRQUFBQSxRQUFRLEVBQUViLGdCQUFnQixDQUFDYSxRQVpIO0FBYXhCQyxRQUFBQSxJQUFJLEVBQUVkLGdCQUFnQixDQUFDYyxJQWJDO0FBY3hCQyxRQUFBQSxZQUFZLEVBQUUsS0FBS0MsbUJBQUwsQ0FBeUJoQixnQkFBekIsS0FBOENpQixTQWRwQztBQWV4QkMsUUFBQUEsdUJBQXVCLEVBQUUsS0FBS0MsOEJBQUwsQ0FBb0NuQixnQkFBcEMsS0FBeURpQixTQWYxRDtBQWdCeEJHLFFBQUFBLGlCQUFpQixFQUFFLEtBQUtDLHdCQUFMLENBQThCckIsZ0JBQTlCLEtBQW1EaUIsU0FoQjlDO0FBaUJ4QkssUUFBQUEsc0JBQXNCLEVBQUUsS0FBS0MsNkJBQUwsQ0FBbUN2QixnQkFBbkMsS0FBd0RpQixTQWpCeEQ7QUFrQnhCTyxRQUFBQSxNQUFNLEVBQUUsS0FBS0MsYUFBTCxDQUFtQnpCLGdCQUFuQixLQUF3Q2lCLFNBbEJ4QjtBQW1CeEJTLFFBQUFBLFVBQVUsRUFBRTFCLGdCQUFnQixDQUFDMEIsVUFuQkw7QUFvQnhCQyxRQUFBQSxxQkFBcUIsRUFBRTNCLGdCQUFnQixDQUFDMkIscUJBcEJoQjtBQXFCeEJDLFFBQUFBLFFBQVEsRUFBRTVCLGdCQUFnQixDQUFDNEI7QUFyQkgsT0FBckIsQ0FBUDtBQXVCSDs7O3dDQUVtQjVCLGdCLEVBQTJFO0FBQzNGLGFBQU8sS0FBSzZCLElBQUwsQ0FBVTdCLGdCQUFWLEVBQTRCLGNBQTVCLEVBQTRDLElBQUk4QixtQ0FBSixFQUE1QyxDQUFQO0FBQ0g7OzttREFHRzlCLGdCLEVBQ3VDO0FBQ3ZDLGFBQU8sS0FBSzZCLElBQUwsQ0FBVTdCLGdCQUFWLEVBQTRCLHlCQUE1QixFQUF1RCxJQUFJK0IsOENBQUosRUFBdkQsQ0FBUDtBQUNIOzs7NkNBRXdCL0IsZ0IsRUFBc0Y7QUFDM0csYUFBTyxLQUFLZ0MsVUFBTCxDQUFnQmhDLGdCQUFoQixFQUFrQyxtQkFBbEMsRUFBdUQsSUFBSWlDLHVDQUFKLEVBQXZELENBQVA7QUFDSDs7O2tEQUU2QmpDLGdCLEVBQStFO0FBQ3pHLGFBQU8sS0FBSzZCLElBQUwsQ0FBVTdCLGdCQUFWLEVBQTRCLHdCQUE1QixFQUFzRCxJQUFJaUMsdUNBQUosRUFBdEQsQ0FBUDtBQUNIOzs7a0NBRWFqQyxnQixFQUEyRjtBQUNyRyxhQUFPLEtBQUtnQyxVQUFMLENBQWdCaEMsZ0JBQWhCLEVBQWtDLFFBQWxDLEVBQTRDLElBQUlrQyx3Q0FBSixFQUE1QyxDQUFQO0FBQ0g7Ozs7RUFwRG9EQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyU3Vic2NyaXB0aW9uJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uIGZyb20gJy4uL1VzZXJTdWJzY3JpcHRpb24nO1xuaW1wb3J0IFN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N1YnNjcmlwdGlvbi9UcmFuc2Zvcm1lcnMvU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIGFzIFN1YnNjcmlwdGlvbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdWJzY3JpcHRpb24vVHJhbnNmb3JtZXJzL1N1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4gYXMgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb25QcmljaW5nUGxhbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uVGllckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb25UaWVyJztcbmltcG9ydCBTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uQWRkb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXJTdWJzY3JpcHRpb25BZGRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgVXNlclN1YnNjcmlwdGlvbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHVzZXJTdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBtYXBEYXRhKHVzZXJTdWJzY3JpcHRpb246IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBVc2VyU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VyU3Vic2NyaXB0aW9uKHtcbiAgICAgICAgICAgIGlkOiB1c2VyU3Vic2NyaXB0aW9uLmlkLFxuICAgICAgICAgICAgc3RyaXBlSWQ6IHVzZXJTdWJzY3JpcHRpb24uc3RyaXBlSWQsXG4gICAgICAgICAgICBzdGFydGVkQXQ6IHVzZXJTdWJzY3JpcHRpb24uc3RhcnRlZEF0LFxuICAgICAgICAgICAgZW5kZWRBdDogdXNlclN1YnNjcmlwdGlvbi5lbmRlZEF0LFxuICAgICAgICAgICAgY3JlYXRlZEF0OiB1c2VyU3Vic2NyaXB0aW9uLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogdXNlclN1YnNjcmlwdGlvbi51cGRhdGVkQXQsXG4gICAgICAgICAgICByZWFzb25Gb3JFbmRJZDogdXNlclN1YnNjcmlwdGlvbi5yZWFzb25Gb3JFbmRJZCxcbiAgICAgICAgICAgIHBlbmRpbmdDYW5jZWxBdDogdXNlclN1YnNjcmlwdGlvbi5wZW5kaW5nQ2FuY2VsQXQsXG4gICAgICAgICAgICBzdXNwZW5kZWRBdDogdXNlclN1YnNjcmlwdGlvbi5zdXNwZW5kZWRBdCxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogdXNlclN1YnNjcmlwdGlvbi5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICBoYXNEZWxpdmVyeUJvb3N0ZXI6IHVzZXJTdWJzY3JpcHRpb24uaGFzRGVsaXZlcnlCb29zdGVyLFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHVzZXJTdWJzY3JpcHRpb24uc3RhdHVzSWQsXG4gICAgICAgICAgICB1c2VyOiB1c2VyU3Vic2NyaXB0aW9uLnVzZXIsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb246IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvbih1c2VyU3Vic2NyaXB0aW9uKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25QcmljaW5nUGxhbjogdGhpcy5pbmNsdWRlU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4odXNlclN1YnNjcmlwdGlvbikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uVGllcnM6IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvblRpZXJzKHVzZXJTdWJzY3JpcHRpb24pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFjdGl2ZVN1YnNjcmlwdGlvblRpZXI6IHRoaXMuaW5jbHVkZUFjdGl2ZVN1YnNjcmlwdGlvblRpZXIodXNlclN1YnNjcmlwdGlvbikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWRkb25zOiB0aGlzLmluY2x1ZGVBZGRvbnModXNlclN1YnNjcmlwdGlvbikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGlnaGxpZ2h0czogdXNlclN1YnNjcmlwdGlvbi5oaWdobGlnaHRzLFxuICAgICAgICAgICAgdG90YWxTdWJzY3JpcHRpb25Db3N0OiB1c2VyU3Vic2NyaXB0aW9uLnRvdGFsU3Vic2NyaXB0aW9uQ29zdCxcbiAgICAgICAgICAgIHBsYW5OYW1lOiB1c2VyU3Vic2NyaXB0aW9uLnBsYW5OYW1lLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3Vic2NyaXB0aW9uKHVzZXJTdWJzY3JpcHRpb246IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBTdWJzY3JpcHRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyU3Vic2NyaXB0aW9uLCAnc3Vic2NyaXB0aW9uJywgbmV3IFN1YnNjcmlwdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdWJzY3JpcHRpb25QcmljaW5nUGxhbihcbiAgICAgICAgdXNlclN1YnNjcmlwdGlvbjogVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSxcbiAgICApOiBTdWJzY3JpcHRpb25QcmljaW5nUGxhbkludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXJTdWJzY3JpcHRpb24sICdzdWJzY3JpcHRpb25QcmljaW5nUGxhbicsIG5ldyBTdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdWJzY3JpcHRpb25UaWVycyh1c2VyU3Vic2NyaXB0aW9uOiBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogQXJyYXk8U3Vic2NyaXB0aW9uVGllckludGVyZmFjZT4gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyU3Vic2NyaXB0aW9uLCAnc3Vic2NyaXB0aW9uVGllcnMnLCBuZXcgU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBY3RpdmVTdWJzY3JpcHRpb25UaWVyKHVzZXJTdWJzY3JpcHRpb246IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBTdWJzY3JpcHRpb25UaWVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0odXNlclN1YnNjcmlwdGlvbiwgJ2FjdGl2ZVN1YnNjcmlwdGlvblRpZXInLCBuZXcgU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBZGRvbnModXNlclN1YnNjcmlwdGlvbjogVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSk6IEFycmF5PFVzZXJTdWJzY3JpcHRpb25BZGRvbkludGVyZmFjZT4gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyU3Vic2NyaXB0aW9uLCAnYWRkb25zJywgbmV3IFN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19