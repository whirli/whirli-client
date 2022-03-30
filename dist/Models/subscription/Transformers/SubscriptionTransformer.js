"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Subscription = _interopRequireDefault(require("../Subscription"));

var _SubscriptionPricingPlanTransformer = _interopRequireDefault(require("./SubscriptionPricingPlanTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionTierTransformer = _interopRequireDefault(require("./SubscriptionTierTransformer"));

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

var SubscriptionTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(SubscriptionTransformer, _BaseTransformer);

  var _super = _createSuper(SubscriptionTransformer);

  function SubscriptionTransformer() {
    _classCallCheck(this, SubscriptionTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(SubscriptionTransformer, [{
    key: "mapData",
    value:
    /**
     * Map a subscription response
     *
     * @param subscription
     */
    function mapData(subscription) {
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
        waitSpots: subscription.wait_spots,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsInN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkIiwic3RyaXBlSWQiLCJzdHJpcGVfaWQiLCJuYW1lIiwic3ViVGl0bGUiLCJzdWJfdGl0bGUiLCJjcmVkaXRzIiwiYWxsb3dhbmNlRGVzY3JpcHRpb24iLCJhbGxvd2FuY2VfZGVzY3JpcHRpb24iLCJjcmVkaXRzRGVzY3JpcHRpb24iLCJjcmVkaXRzX2Rlc2NyaXB0aW9uIiwiaWNvbkZpbGVuYW1lIiwiaWNvbl9maWxlbmFtZSIsInJlY29tbWVuZGVkIiwiYWN0aXZlIiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXQiLCJ3YWl0U3BvdHMiLCJ3YWl0X3Nwb3RzIiwic3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5zIiwiaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFucyIsInN1YnNjcmlwdGlvblRpZXJzIiwiaW5jbHVkZVN1YnNjcmlwdGlvblRpZXJzIiwiY29sbGVjdGlvbiIsIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIiLCJTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHVCOzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0kscUJBQVFDLFlBQVIsRUFBOEQ7QUFDMUQsYUFBTyxJQUFJQyx3QkFBSixDQUFpQjtBQUNwQkMsUUFBQUEsRUFBRSxFQUFFRixZQUFZLENBQUNFLEVBREc7QUFFcEJDLFFBQUFBLFFBQVEsRUFBRUgsWUFBWSxDQUFDSSxTQUZIO0FBR3BCQyxRQUFBQSxJQUFJLEVBQUVMLFlBQVksQ0FBQ0ssSUFIQztBQUlwQkMsUUFBQUEsUUFBUSxFQUFFTixZQUFZLENBQUNPLFNBSkg7QUFLcEJDLFFBQUFBLE9BQU8sRUFBRVIsWUFBWSxDQUFDUSxPQUxGO0FBTXBCQyxRQUFBQSxvQkFBb0IsRUFBRVQsWUFBWSxDQUFDVSxxQkFOZjtBQU9wQkMsUUFBQUEsa0JBQWtCLEVBQUVYLFlBQVksQ0FBQ1ksbUJBUGI7QUFRcEJDLFFBQUFBLFlBQVksRUFBRWIsWUFBWSxDQUFDYyxhQVJQO0FBU3BCQyxRQUFBQSxXQUFXLEVBQUVmLFlBQVksQ0FBQ2UsV0FUTjtBQVVwQkMsUUFBQUEsTUFBTSxFQUFFaEIsWUFBWSxDQUFDZ0IsTUFWRDtBQVdwQkMsUUFBQUEsU0FBUyxFQUFFakIsWUFBWSxDQUFDa0IsVUFYSjtBQVlwQkMsUUFBQUEsU0FBUyxFQUFFbkIsWUFBWSxDQUFDb0IsVUFaSjtBQWFwQkMsUUFBQUEsU0FBUyxFQUFFckIsWUFBWSxDQUFDc0IsVUFiSjtBQWNwQjtBQUNBQyxRQUFBQSx3QkFBd0IsRUFBRSxLQUFLQywrQkFBTCxDQUFxQ3hCLFlBQXJDLENBZk47QUFnQnBCeUIsUUFBQUEsaUJBQWlCLEVBQUUsS0FBS0Msd0JBQUwsQ0FBOEIxQixZQUE5QjtBQWhCQyxPQUFqQixDQUFQO0FBa0JIOzs7V0FFRCx5Q0FBZ0NBLFlBQWhDLEVBQXdHO0FBQ3BHLGFBQU8sS0FBSzJCLFVBQUwsQ0FBZ0IzQixZQUFoQixFQUE4Qiw0QkFBOUIsRUFBNEQsSUFBSTRCLDhDQUFKLEVBQTVELENBQVA7QUFDSDs7O1dBRUQsa0NBQXlCNUIsWUFBekIsRUFBMEY7QUFDdEYsYUFBTyxLQUFLMkIsVUFBTCxDQUFnQjNCLFlBQWhCLEVBQThCLDRCQUE5QixFQUE0RCxJQUFJNkIsdUNBQUosRUFBNUQsQ0FBUDtBQUNIOzs7O0VBakNnREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4gZnJvbSAnLi4vU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4nO1xuaW1wb3J0IHsgQVBJU3Vic2NyaXB0aW9uIGFzIEFQSVN1YnNjcmlwdGlvbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciBmcm9tICcuL1N1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN1YnNjcmlwdGlvblRpZXIgZnJvbSAnLi4vU3Vic2NyaXB0aW9uVGllcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyIGZyb20gJy4vU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHN1YnNjcmlwdGlvbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIG1hcERhdGEoc3Vic2NyaXB0aW9uOiBBUElTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBTdWJzY3JpcHRpb24ge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbih7XG4gICAgICAgICAgICBpZDogc3Vic2NyaXB0aW9uLmlkLFxuICAgICAgICAgICAgc3RyaXBlSWQ6IHN1YnNjcmlwdGlvbi5zdHJpcGVfaWQsXG4gICAgICAgICAgICBuYW1lOiBzdWJzY3JpcHRpb24ubmFtZSxcbiAgICAgICAgICAgIHN1YlRpdGxlOiBzdWJzY3JpcHRpb24uc3ViX3RpdGxlLFxuICAgICAgICAgICAgY3JlZGl0czogc3Vic2NyaXB0aW9uLmNyZWRpdHMsXG4gICAgICAgICAgICBhbGxvd2FuY2VEZXNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLmFsbG93YW5jZV9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNyZWRpdHNEZXNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLmNyZWRpdHNfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpY29uRmlsZW5hbWU6IHN1YnNjcmlwdGlvbi5pY29uX2ZpbGVuYW1lLFxuICAgICAgICAgICAgcmVjb21tZW5kZWQ6IHN1YnNjcmlwdGlvbi5yZWNvbW1lbmRlZCxcbiAgICAgICAgICAgIGFjdGl2ZTogc3Vic2NyaXB0aW9uLmFjdGl2ZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogc3Vic2NyaXB0aW9uLmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHN1YnNjcmlwdGlvbi51cGRhdGVkX2F0LFxuICAgICAgICAgICAgd2FpdFNwb3RzOiBzdWJzY3JpcHRpb24ud2FpdF9zcG90cyxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25QcmljaW5nUGxhbnM6IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvblByaWNpbmdQbGFucyhzdWJzY3JpcHRpb24pLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uVGllcnM6IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvblRpZXJzKHN1YnNjcmlwdGlvbiksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdWJzY3JpcHRpb25QcmljaW5nUGxhbnMoc3Vic2NyaXB0aW9uOiBBUElTdWJzY3JpcHRpb25JbnRlcmZhY2UpOiBBcnJheTxTdWJzY3JpcHRpb25QcmljaW5nUGxhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHN1YnNjcmlwdGlvbiwgJ3N1YnNjcmlwdGlvbl9wcmljaW5nX3BsYW5zJywgbmV3IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvblRpZXJzKHN1YnNjcmlwdGlvbjogQVBJU3Vic2NyaXB0aW9uSW50ZXJmYWNlKTogQXJyYXk8U3Vic2NyaXB0aW9uVGllcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHN1YnNjcmlwdGlvbiwgJ3N1YnNjcmlwdGlvbl9wcmljaW5nX3BsYW5zJywgbmV3IFN1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=