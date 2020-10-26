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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsInN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkIiwic3RyaXBlSWQiLCJzdHJpcGVfaWQiLCJuYW1lIiwic3ViVGl0bGUiLCJzdWJfdGl0bGUiLCJjcmVkaXRzIiwiYWxsb3dhbmNlRGVzY3JpcHRpb24iLCJhbGxvd2FuY2VfZGVzY3JpcHRpb24iLCJjcmVkaXRzRGVzY3JpcHRpb24iLCJjcmVkaXRzX2Rlc2NyaXB0aW9uIiwiaWNvbkZpbGVuYW1lIiwiaWNvbl9maWxlbmFtZSIsInJlY29tbWVuZGVkIiwiYWN0aXZlIiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXQiLCJzdWJzY3JpcHRpb25QcmljaW5nUGxhbnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5zIiwic3Vic2NyaXB0aW9uVGllcnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uVGllcnMiLCJjb2xsZWN0aW9uIiwiU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciIsIlN1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsdUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsWSxFQUFzRDtBQUMxRCxhQUFPLElBQUlDLHdCQUFKLENBQWlCO0FBQ3BCQyxRQUFBQSxFQUFFLEVBQUVGLFlBQVksQ0FBQ0UsRUFERztBQUVwQkMsUUFBQUEsUUFBUSxFQUFFSCxZQUFZLENBQUNJLFNBRkg7QUFHcEJDLFFBQUFBLElBQUksRUFBRUwsWUFBWSxDQUFDSyxJQUhDO0FBSXBCQyxRQUFBQSxRQUFRLEVBQUVOLFlBQVksQ0FBQ08sU0FKSDtBQUtwQkMsUUFBQUEsT0FBTyxFQUFFUixZQUFZLENBQUNRLE9BTEY7QUFNcEJDLFFBQUFBLG9CQUFvQixFQUFFVCxZQUFZLENBQUNVLHFCQU5mO0FBT3BCQyxRQUFBQSxrQkFBa0IsRUFBRVgsWUFBWSxDQUFDWSxtQkFQYjtBQVFwQkMsUUFBQUEsWUFBWSxFQUFFYixZQUFZLENBQUNjLGFBUlA7QUFTcEJDLFFBQUFBLFdBQVcsRUFBRWYsWUFBWSxDQUFDZSxXQVROO0FBVXBCQyxRQUFBQSxNQUFNLEVBQUVoQixZQUFZLENBQUNnQixNQVZEO0FBV3BCQyxRQUFBQSxTQUFTLEVBQUVqQixZQUFZLENBQUNrQixVQVhKO0FBWXBCQyxRQUFBQSxTQUFTLEVBQUVuQixZQUFZLENBQUNvQixVQVpKO0FBYXBCO0FBQ0FDLFFBQUFBLHdCQUF3QixFQUFFLEtBQUtDLCtCQUFMLENBQXFDdEIsWUFBckMsQ0FkTjtBQWVwQnVCLFFBQUFBLGlCQUFpQixFQUFFLEtBQUtDLHdCQUFMLENBQThCeEIsWUFBOUI7QUFmQyxPQUFqQixDQUFQO0FBaUJIOzs7b0RBRStCQSxZLEVBQXdFO0FBQ3BHLGFBQU8sS0FBS3lCLFVBQUwsQ0FBZ0J6QixZQUFoQixFQUE4Qiw0QkFBOUIsRUFBNEQsSUFBSTBCLDhDQUFKLEVBQTVELENBQVA7QUFDSDs7OzZDQUV3QjFCLFksRUFBaUU7QUFDdEYsYUFBTyxLQUFLeUIsVUFBTCxDQUFnQnpCLFlBQWhCLEVBQThCLDRCQUE5QixFQUE0RCxJQUFJMkIsdUNBQUosRUFBNUQsQ0FBUDtBQUNIOzs7O0VBaENnREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4gZnJvbSAnLi4vU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4nO1xuaW1wb3J0IHsgQVBJU3Vic2NyaXB0aW9uIGFzIEFQSVN1YnNjcmlwdGlvbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciBmcm9tICcuL1N1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN1YnNjcmlwdGlvblRpZXIgZnJvbSAnLi4vU3Vic2NyaXB0aW9uVGllcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyIGZyb20gJy4vU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHN1YnNjcmlwdGlvbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIG1hcERhdGEoc3Vic2NyaXB0aW9uOiBBUElTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbih7XG4gICAgICAgICAgICBpZDogc3Vic2NyaXB0aW9uLmlkLFxuICAgICAgICAgICAgc3RyaXBlSWQ6IHN1YnNjcmlwdGlvbi5zdHJpcGVfaWQsXG4gICAgICAgICAgICBuYW1lOiBzdWJzY3JpcHRpb24ubmFtZSxcbiAgICAgICAgICAgIHN1YlRpdGxlOiBzdWJzY3JpcHRpb24uc3ViX3RpdGxlLFxuICAgICAgICAgICAgY3JlZGl0czogc3Vic2NyaXB0aW9uLmNyZWRpdHMsXG4gICAgICAgICAgICBhbGxvd2FuY2VEZXNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLmFsbG93YW5jZV9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNyZWRpdHNEZXNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLmNyZWRpdHNfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpY29uRmlsZW5hbWU6IHN1YnNjcmlwdGlvbi5pY29uX2ZpbGVuYW1lLFxuICAgICAgICAgICAgcmVjb21tZW5kZWQ6IHN1YnNjcmlwdGlvbi5yZWNvbW1lbmRlZCxcbiAgICAgICAgICAgIGFjdGl2ZTogc3Vic2NyaXB0aW9uLmFjdGl2ZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogc3Vic2NyaXB0aW9uLmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHN1YnNjcmlwdGlvbi51cGRhdGVkX2F0LFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblByaWNpbmdQbGFuczogdGhpcy5pbmNsdWRlU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5zKHN1YnNjcmlwdGlvbiksXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25UaWVyczogdGhpcy5pbmNsdWRlU3Vic2NyaXB0aW9uVGllcnMoc3Vic2NyaXB0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFucyhzdWJzY3JpcHRpb246IEFQSVN1YnNjcmlwdGlvbkludGVyZmFjZSk6IEFycmF5PFN1YnNjcmlwdGlvblByaWNpbmdQbGFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oc3Vic2NyaXB0aW9uLCAnc3Vic2NyaXB0aW9uX3ByaWNpbmdfcGxhbnMnLCBuZXcgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3Vic2NyaXB0aW9uVGllcnMoc3Vic2NyaXB0aW9uOiBBUElTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBBcnJheTxTdWJzY3JpcHRpb25UaWVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oc3Vic2NyaXB0aW9uLCAnc3Vic2NyaXB0aW9uX3ByaWNpbmdfcGxhbnMnLCBuZXcgU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==