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

var SubscriptionTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(SubscriptionTransformer, _BaseTransformer);

  var _super = _createSuper(SubscriptionTransformer);

  function SubscriptionTransformer() {
    _classCallCheck(this, SubscriptionTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsInN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkIiwic3RyaXBlSWQiLCJzdHJpcGVfaWQiLCJuYW1lIiwic3ViVGl0bGUiLCJzdWJfdGl0bGUiLCJjcmVkaXRzIiwiYWxsb3dhbmNlRGVzY3JpcHRpb24iLCJhbGxvd2FuY2VfZGVzY3JpcHRpb24iLCJjcmVkaXRzRGVzY3JpcHRpb24iLCJjcmVkaXRzX2Rlc2NyaXB0aW9uIiwiaWNvbkZpbGVuYW1lIiwiaWNvbl9maWxlbmFtZSIsInJlY29tbWVuZGVkIiwiYWN0aXZlIiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXQiLCJzdWJzY3JpcHRpb25QcmljaW5nUGxhbnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5zIiwic3Vic2NyaXB0aW9uVGllcnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uVGllcnMiLCJjb2xsZWN0aW9uIiwiU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciIsIlN1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsdUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7NEJBQ1lDLFksRUFBc0Q7QUFDMUQsYUFBTyxJQUFJQyx3QkFBSixDQUFpQjtBQUNwQkMsUUFBQUEsRUFBRSxFQUFFRixZQUFZLENBQUNFLEVBREc7QUFFcEJDLFFBQUFBLFFBQVEsRUFBRUgsWUFBWSxDQUFDSSxTQUZIO0FBR3BCQyxRQUFBQSxJQUFJLEVBQUVMLFlBQVksQ0FBQ0ssSUFIQztBQUlwQkMsUUFBQUEsUUFBUSxFQUFFTixZQUFZLENBQUNPLFNBSkg7QUFLcEJDLFFBQUFBLE9BQU8sRUFBRVIsWUFBWSxDQUFDUSxPQUxGO0FBTXBCQyxRQUFBQSxvQkFBb0IsRUFBRVQsWUFBWSxDQUFDVSxxQkFOZjtBQU9wQkMsUUFBQUEsa0JBQWtCLEVBQUVYLFlBQVksQ0FBQ1ksbUJBUGI7QUFRcEJDLFFBQUFBLFlBQVksRUFBRWIsWUFBWSxDQUFDYyxhQVJQO0FBU3BCQyxRQUFBQSxXQUFXLEVBQUVmLFlBQVksQ0FBQ2UsV0FUTjtBQVVwQkMsUUFBQUEsTUFBTSxFQUFFaEIsWUFBWSxDQUFDZ0IsTUFWRDtBQVdwQkMsUUFBQUEsU0FBUyxFQUFFakIsWUFBWSxDQUFDa0IsVUFYSjtBQVlwQkMsUUFBQUEsU0FBUyxFQUFFbkIsWUFBWSxDQUFDb0IsVUFaSjtBQWFwQjtBQUNBQyxRQUFBQSx3QkFBd0IsRUFBRSxLQUFLQywrQkFBTCxDQUFxQ3RCLFlBQXJDLENBZE47QUFlcEJ1QixRQUFBQSxpQkFBaUIsRUFBRSxLQUFLQyx3QkFBTCxDQUE4QnhCLFlBQTlCO0FBZkMsT0FBakIsQ0FBUDtBQWlCSDs7O29EQUUrQkEsWSxFQUF3RTtBQUNwRyxhQUFPLEtBQUt5QixVQUFMLENBQWdCekIsWUFBaEIsRUFBOEIsNEJBQTlCLEVBQTRELElBQUkwQiw4Q0FBSixFQUE1RCxDQUFQO0FBQ0g7Ozs2Q0FFd0IxQixZLEVBQWlFO0FBQ3RGLGFBQU8sS0FBS3lCLFVBQUwsQ0FBZ0J6QixZQUFoQixFQUE4Qiw0QkFBOUIsRUFBNEQsSUFBSTJCLHVDQUFKLEVBQTVELENBQVA7QUFDSDs7OztFQWhDZ0RDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuIGZyb20gJy4uL1N1YnNjcmlwdGlvblByaWNpbmdQbGFuJztcbmltcG9ydCB7IEFQSVN1YnNjcmlwdGlvbiBhcyBBUElTdWJzY3JpcHRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIgZnJvbSAnLi9TdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBTdWJzY3JpcHRpb25UaWVyIGZyb20gJy4uL1N1YnNjcmlwdGlvblRpZXInO1xuaW1wb3J0IFN1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lciBmcm9tICcuL1N1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBzdWJzY3JpcHRpb24gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBtYXBEYXRhKHN1YnNjcmlwdGlvbjogQVBJU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oe1xuICAgICAgICAgICAgaWQ6IHN1YnNjcmlwdGlvbi5pZCxcbiAgICAgICAgICAgIHN0cmlwZUlkOiBzdWJzY3JpcHRpb24uc3RyaXBlX2lkLFxuICAgICAgICAgICAgbmFtZTogc3Vic2NyaXB0aW9uLm5hbWUsXG4gICAgICAgICAgICBzdWJUaXRsZTogc3Vic2NyaXB0aW9uLnN1Yl90aXRsZSxcbiAgICAgICAgICAgIGNyZWRpdHM6IHN1YnNjcmlwdGlvbi5jcmVkaXRzLFxuICAgICAgICAgICAgYWxsb3dhbmNlRGVzY3JpcHRpb246IHN1YnNjcmlwdGlvbi5hbGxvd2FuY2VfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjcmVkaXRzRGVzY3JpcHRpb246IHN1YnNjcmlwdGlvbi5jcmVkaXRzX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaWNvbkZpbGVuYW1lOiBzdWJzY3JpcHRpb24uaWNvbl9maWxlbmFtZSxcbiAgICAgICAgICAgIHJlY29tbWVuZGVkOiBzdWJzY3JpcHRpb24ucmVjb21tZW5kZWQsXG4gICAgICAgICAgICBhY3RpdmU6IHN1YnNjcmlwdGlvbi5hY3RpdmUsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHN1YnNjcmlwdGlvbi5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBzdWJzY3JpcHRpb24udXBkYXRlZF9hdCxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25QcmljaW5nUGxhbnM6IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFucyhzdWJzY3JpcHRpb24pLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uVGllcnM6IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvblRpZXJzKHN1YnNjcmlwdGlvbiksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdWJzY3JpcHRpb25QcmljaW5nUGxhbnMoc3Vic2NyaXB0aW9uOiBBUElTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBBcnJheTxTdWJzY3JpcHRpb25QcmljaW5nUGxhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHN1YnNjcmlwdGlvbiwgJ3N1YnNjcmlwdGlvbl9wcmljaW5nX3BsYW5zJywgbmV3IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvblRpZXJzKHN1YnNjcmlwdGlvbjogQVBJU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogQXJyYXk8U3Vic2NyaXB0aW9uVGllcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHN1YnNjcmlwdGlvbiwgJ3N1YnNjcmlwdGlvbl9wcmljaW5nX3BsYW5zJywgbmV3IFN1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=