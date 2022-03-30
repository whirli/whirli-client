"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
    value:
    /**
     * Map a UserSubscription response
     *
     * @param userSubscription
     */
    function mapData(userSubscription) {
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
      return this.collection(userSubscription, 'activeSubscriptionTier', new _SubscriptionTierTransformer["default"]());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsInVzZXJTdWJzY3JpcHRpb24iLCJVc2VyU3Vic2NyaXB0aW9uIiwiaWQiLCJzdHJpcGVJZCIsInN0YXJ0ZWRBdCIsImVuZGVkQXQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJyZWFzb25Gb3JFbmRJZCIsInBlbmRpbmdDYW5jZWxBdCIsInN1c3BlbmRlZEF0IiwicmVzb3VyY2VUeXBlIiwiaGFzRGVsaXZlcnlCb29zdGVyIiwic3RhdHVzSWQiLCJ1c2VyIiwic3Vic2NyaXB0aW9uIiwiaW5jbHVkZVN1YnNjcmlwdGlvbiIsInVuZGVmaW5lZCIsInN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwiaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwic3Vic2NyaXB0aW9uVGllcnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uVGllcnMiLCJhY3RpdmVTdWJzY3JpcHRpb25UaWVyIiwiaW5jbHVkZUFjdGl2ZVN1YnNjcmlwdGlvblRpZXIiLCJhZGRvbnMiLCJpbmNsdWRlQWRkb25zIiwiaGlnaGxpZ2h0cyIsInRvdGFsU3Vic2NyaXB0aW9uQ29zdCIsInBsYW5OYW1lIiwiaXRlbSIsIlN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIiwiU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIiLCJTdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSwyQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLHFCQUFRQyxnQkFBUixFQUF1RTtBQUNuRSxhQUFPLElBQUlDLDRCQUFKLENBQXFCO0FBQ3hCQyxRQUFBQSxFQUFFLEVBQUVGLGdCQUFnQixDQUFDRSxFQURHO0FBRXhCQyxRQUFBQSxRQUFRLEVBQUVILGdCQUFnQixDQUFDRyxRQUZIO0FBR3hCQyxRQUFBQSxTQUFTLEVBQUVKLGdCQUFnQixDQUFDSSxTQUhKO0FBSXhCQyxRQUFBQSxPQUFPLEVBQUVMLGdCQUFnQixDQUFDSyxPQUpGO0FBS3hCQyxRQUFBQSxTQUFTLEVBQUVOLGdCQUFnQixDQUFDTSxTQUxKO0FBTXhCQyxRQUFBQSxTQUFTLEVBQUVQLGdCQUFnQixDQUFDTyxTQU5KO0FBT3hCQyxRQUFBQSxjQUFjLEVBQUVSLGdCQUFnQixDQUFDUSxjQVBUO0FBUXhCQyxRQUFBQSxlQUFlLEVBQUVULGdCQUFnQixDQUFDUyxlQVJWO0FBU3hCQyxRQUFBQSxXQUFXLEVBQUVWLGdCQUFnQixDQUFDVSxXQVROO0FBVXhCQyxRQUFBQSxZQUFZLEVBQUVYLGdCQUFnQixDQUFDVyxZQVZQO0FBV3hCQyxRQUFBQSxrQkFBa0IsRUFBRVosZ0JBQWdCLENBQUNZLGtCQVhiO0FBWXhCQyxRQUFBQSxRQUFRLEVBQUViLGdCQUFnQixDQUFDYSxRQVpIO0FBYXhCQyxRQUFBQSxJQUFJLEVBQUVkLGdCQUFnQixDQUFDYyxJQWJDO0FBY3hCQyxRQUFBQSxZQUFZLEVBQUUsS0FBS0MsbUJBQUwsQ0FBeUJoQixnQkFBekIsS0FBOENpQixTQWRwQztBQWV4QkMsUUFBQUEsdUJBQXVCLEVBQUUsS0FBS0MsOEJBQUwsQ0FBb0NuQixnQkFBcEMsS0FBeURpQixTQWYxRDtBQWdCeEJHLFFBQUFBLGlCQUFpQixFQUFFLEtBQUtDLHdCQUFMLENBQThCckIsZ0JBQTlCLEtBQW1EaUIsU0FoQjlDO0FBaUJ4QkssUUFBQUEsc0JBQXNCLEVBQUUsS0FBS0MsNkJBQUwsQ0FBbUN2QixnQkFBbkMsS0FBd0RpQixTQWpCeEQ7QUFrQnhCTyxRQUFBQSxNQUFNLEVBQUUsS0FBS0MsYUFBTCxDQUFtQnpCLGdCQUFuQixLQUF3Q2lCLFNBbEJ4QjtBQW1CeEJTLFFBQUFBLFVBQVUsRUFBRTFCLGdCQUFnQixDQUFDMEIsVUFuQkw7QUFvQnhCQyxRQUFBQSxxQkFBcUIsRUFBRTNCLGdCQUFnQixDQUFDMkIscUJBcEJoQjtBQXFCeEJDLFFBQUFBLFFBQVEsRUFBRTVCLGdCQUFnQixDQUFDNEI7QUFyQkgsT0FBckIsQ0FBUDtBQXVCSDs7O1dBRUQsNkJBQW9CNUIsZ0JBQXBCLEVBQStGO0FBQzNGLGFBQU8sS0FBSzZCLElBQUwsQ0FBVTdCLGdCQUFWLEVBQTRCLGNBQTVCLEVBQTRDLElBQUk4QixtQ0FBSixFQUE1QyxDQUFQO0FBQ0g7OztXQUVELHdDQUNJOUIsZ0JBREosRUFFMkM7QUFDdkMsYUFBTyxLQUFLNkIsSUFBTCxDQUFVN0IsZ0JBQVYsRUFBNEIseUJBQTVCLEVBQXVELElBQUkrQiw4Q0FBSixFQUF2RCxDQUFQO0FBQ0g7OztXQUVELGtDQUF5Qi9CLGdCQUF6QixFQUErRztBQUMzRyxhQUFPLEtBQUtnQyxVQUFMLENBQWdCaEMsZ0JBQWhCLEVBQWtDLG1CQUFsQyxFQUF1RCxJQUFJaUMsdUNBQUosRUFBdkQsQ0FBUDtBQUNIOzs7V0FFRCx1Q0FDSWpDLGdCQURKLEVBRTJDO0FBQ3ZDLGFBQU8sS0FBS2dDLFVBQUwsQ0FBZ0JoQyxnQkFBaEIsRUFBa0Msd0JBQWxDLEVBQTRELElBQUlpQyx1Q0FBSixFQUE1RCxDQUFQO0FBQ0g7OztXQUVELHVCQUFjakMsZ0JBQWQsRUFBeUc7QUFDckcsYUFBTyxLQUFLZ0MsVUFBTCxDQUFnQmhDLGdCQUFoQixFQUFrQyxRQUFsQyxFQUE0QyxJQUFJa0Msd0NBQUosRUFBNUMsQ0FBUDtBQUNIOzs7O0VBdERvREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlclN1YnNjcmlwdGlvbic7XG5pbXBvcnQgVXNlclN1YnNjcmlwdGlvbiBmcm9tICcuLi9Vc2VyU3Vic2NyaXB0aW9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdWJzY3JpcHRpb24vVHJhbnNmb3JtZXJzL1N1YnNjcmlwdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiBhcyBTdWJzY3JpcHRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuIGFzIFN1YnNjcmlwdGlvblByaWNpbmdQbGFuSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4nO1xuaW1wb3J0IFN1YnNjcmlwdGlvblRpZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uVGllcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N1YnNjcmlwdGlvbi9UcmFuc2Zvcm1lcnMvU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyJztcbmltcG9ydCBTdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N1YnNjcmlwdGlvbi9UcmFuc2Zvcm1lcnMvU3Vic2NyaXB0aW9uQWRkb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlclN1YnNjcmlwdGlvbkFkZG9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyU3Vic2NyaXB0aW9uQWRkb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIFVzZXJTdWJzY3JpcHRpb24gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VyU3Vic2NyaXB0aW9uXG4gICAgICovXG4gICAgbWFwRGF0YSh1c2VyU3Vic2NyaXB0aW9uOiBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogVXNlclN1YnNjcmlwdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgVXNlclN1YnNjcmlwdGlvbih7XG4gICAgICAgICAgICBpZDogdXNlclN1YnNjcmlwdGlvbi5pZCxcbiAgICAgICAgICAgIHN0cmlwZUlkOiB1c2VyU3Vic2NyaXB0aW9uLnN0cmlwZUlkLFxuICAgICAgICAgICAgc3RhcnRlZEF0OiB1c2VyU3Vic2NyaXB0aW9uLnN0YXJ0ZWRBdCxcbiAgICAgICAgICAgIGVuZGVkQXQ6IHVzZXJTdWJzY3JpcHRpb24uZW5kZWRBdCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdXNlclN1YnNjcmlwdGlvbi5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHVzZXJTdWJzY3JpcHRpb24udXBkYXRlZEF0LFxuICAgICAgICAgICAgcmVhc29uRm9yRW5kSWQ6IHVzZXJTdWJzY3JpcHRpb24ucmVhc29uRm9yRW5kSWQsXG4gICAgICAgICAgICBwZW5kaW5nQ2FuY2VsQXQ6IHVzZXJTdWJzY3JpcHRpb24ucGVuZGluZ0NhbmNlbEF0LFxuICAgICAgICAgICAgc3VzcGVuZGVkQXQ6IHVzZXJTdWJzY3JpcHRpb24uc3VzcGVuZGVkQXQsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHVzZXJTdWJzY3JpcHRpb24ucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgaGFzRGVsaXZlcnlCb29zdGVyOiB1c2VyU3Vic2NyaXB0aW9uLmhhc0RlbGl2ZXJ5Qm9vc3RlcixcbiAgICAgICAgICAgIHN0YXR1c0lkOiB1c2VyU3Vic2NyaXB0aW9uLnN0YXR1c0lkLFxuICAgICAgICAgICAgdXNlcjogdXNlclN1YnNjcmlwdGlvbi51c2VyLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiB0aGlzLmluY2x1ZGVTdWJzY3JpcHRpb24odXNlclN1YnNjcmlwdGlvbikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW46IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFuKHVzZXJTdWJzY3JpcHRpb24pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblRpZXJzOiB0aGlzLmluY2x1ZGVTdWJzY3JpcHRpb25UaWVycyh1c2VyU3Vic2NyaXB0aW9uKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb25UaWVyOiB0aGlzLmluY2x1ZGVBY3RpdmVTdWJzY3JpcHRpb25UaWVyKHVzZXJTdWJzY3JpcHRpb24pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFkZG9uczogdGhpcy5pbmNsdWRlQWRkb25zKHVzZXJTdWJzY3JpcHRpb24pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhpZ2hsaWdodHM6IHVzZXJTdWJzY3JpcHRpb24uaGlnaGxpZ2h0cyxcbiAgICAgICAgICAgIHRvdGFsU3Vic2NyaXB0aW9uQ29zdDogdXNlclN1YnNjcmlwdGlvbi50b3RhbFN1YnNjcmlwdGlvbkNvc3QsXG4gICAgICAgICAgICBwbGFuTmFtZTogdXNlclN1YnNjcmlwdGlvbi5wbGFuTmFtZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvbih1c2VyU3Vic2NyaXB0aW9uOiBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogU3Vic2NyaXB0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0odXNlclN1YnNjcmlwdGlvbiwgJ3N1YnNjcmlwdGlvbicsIG5ldyBTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4oXG4gICAgICAgIHVzZXJTdWJzY3JpcHRpb246IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UsXG4gICAgKTogU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyU3Vic2NyaXB0aW9uLCAnc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4nLCBuZXcgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3Vic2NyaXB0aW9uVGllcnModXNlclN1YnNjcmlwdGlvbjogVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSk6IEFycmF5PFN1YnNjcmlwdGlvblRpZXJJbnRlcmZhY2U+IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlclN1YnNjcmlwdGlvbiwgJ3N1YnNjcmlwdGlvblRpZXJzJywgbmV3IFN1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWN0aXZlU3Vic2NyaXB0aW9uVGllcihcbiAgICAgICAgdXNlclN1YnNjcmlwdGlvbjogVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSxcbiAgICApOiBBcnJheTxTdWJzY3JpcHRpb25UaWVySW50ZXJmYWNlPiB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXJTdWJzY3JpcHRpb24sICdhY3RpdmVTdWJzY3JpcHRpb25UaWVyJywgbmV3IFN1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWRkb25zKHVzZXJTdWJzY3JpcHRpb246IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBBcnJheTxVc2VyU3Vic2NyaXB0aW9uQWRkb25JbnRlcmZhY2U+IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlclN1YnNjcmlwdGlvbiwgJ2FkZG9ucycsIG5ldyBTdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==