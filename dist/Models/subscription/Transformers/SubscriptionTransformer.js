"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Subscription = _interopRequireDefault(require("../Subscription"));

var _SubscriptionPricingPlanTransformer = _interopRequireDefault(require("./SubscriptionPricingPlanTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsInN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkIiwic3RyaXBlSWQiLCJzdHJpcGVfaWQiLCJuYW1lIiwic3ViVGl0bGUiLCJzdWJfdGl0bGUiLCJjcmVkaXRzIiwiYWxsb3dhbmNlRGVzY3JpcHRpb24iLCJhbGxvd2FuY2VfZGVzY3JpcHRpb24iLCJjcmVkaXRzRGVzY3JpcHRpb24iLCJjcmVkaXRzX2Rlc2NyaXB0aW9uIiwiaWNvbkZpbGVuYW1lIiwiaWNvbl9maWxlbmFtZSIsInJlY29tbWVuZGVkIiwiYWN0aXZlIiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXQiLCJwcmljaW5nUGxhbnMiLCJpbmNsdWRlUHJpY2luZ1BsYW5zIiwiY29sbGVjdGlvbiIsIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHVCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFksRUFBc0Q7QUFDMUQsYUFBTyxJQUFJQyx3QkFBSixDQUFpQjtBQUNwQkMsUUFBQUEsRUFBRSxFQUFFRixZQUFZLENBQUNFLEVBREc7QUFFcEJDLFFBQUFBLFFBQVEsRUFBRUgsWUFBWSxDQUFDSSxTQUZIO0FBR3BCQyxRQUFBQSxJQUFJLEVBQUVMLFlBQVksQ0FBQ0ssSUFIQztBQUlwQkMsUUFBQUEsUUFBUSxFQUFFTixZQUFZLENBQUNPLFNBSkg7QUFLcEJDLFFBQUFBLE9BQU8sRUFBRVIsWUFBWSxDQUFDUSxPQUxGO0FBTXBCQyxRQUFBQSxvQkFBb0IsRUFBRVQsWUFBWSxDQUFDVSxxQkFOZjtBQU9wQkMsUUFBQUEsa0JBQWtCLEVBQUVYLFlBQVksQ0FBQ1ksbUJBUGI7QUFRcEJDLFFBQUFBLFlBQVksRUFBRWIsWUFBWSxDQUFDYyxhQVJQO0FBU3BCQyxRQUFBQSxXQUFXLEVBQUVmLFlBQVksQ0FBQ2UsV0FUTjtBQVVwQkMsUUFBQUEsTUFBTSxFQUFFaEIsWUFBWSxDQUFDZ0IsTUFWRDtBQVdwQkMsUUFBQUEsU0FBUyxFQUFFakIsWUFBWSxDQUFDa0IsVUFYSjtBQVlwQkMsUUFBQUEsU0FBUyxFQUFFbkIsWUFBWSxDQUFDb0IsVUFaSjtBQWFwQjtBQUNBQyxRQUFBQSxZQUFZLEVBQUUsS0FBS0MsbUJBQUwsQ0FBeUJ0QixZQUF6QjtBQWRNLE9BQWpCLENBQVA7QUFnQkg7Ozt3Q0FFbUJBLFksRUFBd0U7QUFDeEYsYUFBTyxLQUFLdUIsVUFBTCxDQUFnQnZCLFlBQWhCLEVBQThCLDRCQUE5QixFQUE0RCxJQUFJd0IsOENBQUosRUFBNUQsQ0FBUDtBQUNIOzs7O0VBM0JnREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4gZnJvbSAnLi4vU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4nO1xuaW1wb3J0IHsgQVBJU3Vic2NyaXB0aW9uIGFzIEFQSVN1YnNjcmlwdGlvbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciBmcm9tICcuL1N1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgc3Vic2NyaXB0aW9uIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3Vic2NyaXB0aW9uXG4gICAgICovXG4gICAgbWFwRGF0YShzdWJzY3JpcHRpb246IEFQSVN1YnNjcmlwdGlvbkludGVyZmFjZSk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKHtcbiAgICAgICAgICAgIGlkOiBzdWJzY3JpcHRpb24uaWQsXG4gICAgICAgICAgICBzdHJpcGVJZDogc3Vic2NyaXB0aW9uLnN0cmlwZV9pZCxcbiAgICAgICAgICAgIG5hbWU6IHN1YnNjcmlwdGlvbi5uYW1lLFxuICAgICAgICAgICAgc3ViVGl0bGU6IHN1YnNjcmlwdGlvbi5zdWJfdGl0bGUsXG4gICAgICAgICAgICBjcmVkaXRzOiBzdWJzY3JpcHRpb24uY3JlZGl0cyxcbiAgICAgICAgICAgIGFsbG93YW5jZURlc2NyaXB0aW9uOiBzdWJzY3JpcHRpb24uYWxsb3dhbmNlX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY3JlZGl0c0Rlc2NyaXB0aW9uOiBzdWJzY3JpcHRpb24uY3JlZGl0c19kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGljb25GaWxlbmFtZTogc3Vic2NyaXB0aW9uLmljb25fZmlsZW5hbWUsXG4gICAgICAgICAgICByZWNvbW1lbmRlZDogc3Vic2NyaXB0aW9uLnJlY29tbWVuZGVkLFxuICAgICAgICAgICAgYWN0aXZlOiBzdWJzY3JpcHRpb24uYWN0aXZlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBzdWJzY3JpcHRpb24uY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogc3Vic2NyaXB0aW9uLnVwZGF0ZWRfYXQsXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJpY2luZ1BsYW5zOiB0aGlzLmluY2x1ZGVQcmljaW5nUGxhbnMoc3Vic2NyaXB0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByaWNpbmdQbGFucyhzdWJzY3JpcHRpb246IEFQSVN1YnNjcmlwdGlvbkludGVyZmFjZSk6IEFycmF5PFN1YnNjcmlwdGlvblByaWNpbmdQbGFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oc3Vic2NyaXB0aW9uLCAnc3Vic2NyaXB0aW9uX3ByaWNpbmdfcGxhbnMnLCBuZXcgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=