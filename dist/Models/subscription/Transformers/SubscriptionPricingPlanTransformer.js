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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25QcmljaW5nUGxhblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIiLCJzdWJzY3JpcHRpb25QcmljaW5nUGxhbiIsIlN1YnNjcmlwdGlvblByaWNpbmdQbGFuIiwiaWQiLCJzdHJpcGVJZCIsInN0cmlwZV9pZCIsInN1YnNjcmlwdGlvbklkIiwic3Vic2NyaXB0aW9uX2lkIiwibmFtZSIsImNvc3QiLCJpbnRlcnZhbFVuaXQiLCJpbnRlcnZhbF91bml0IiwiaW50ZXJ2YWxMZW5ndGgiLCJpbnRlcnZhbF9sZW5ndGgiLCJzdGFydGluZ1N1YnNjcmlwdGlvblRpZXIiLCJzdGFydGluZ19zdWJzY3JpcHRpb25fdGllciIsInN1YnNjcmlwdGlvbiIsImluY2x1ZGVTdWJzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJhY3RpdmUiLCJjcmVhdGVkQXQiLCJjcmVhdGVkX2F0IiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdCIsIml0ZW0iLCJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxrQzs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyx1QixFQUF1RjtBQUMzRixhQUFPLElBQUlDLG1DQUFKLENBQTRCO0FBQy9CQyxRQUFBQSxFQUFFLEVBQUVGLHVCQUF1QixDQUFDRSxFQURHO0FBRS9CQyxRQUFBQSxRQUFRLEVBQUVILHVCQUF1QixDQUFDSSxTQUZIO0FBRy9CQyxRQUFBQSxjQUFjLEVBQUVMLHVCQUF1QixDQUFDTSxlQUhUO0FBSS9CQyxRQUFBQSxJQUFJLEVBQUVQLHVCQUF1QixDQUFDTyxJQUpDO0FBSy9CQyxRQUFBQSxJQUFJLEVBQUVSLHVCQUF1QixDQUFDUSxJQUxDO0FBTS9CQyxRQUFBQSxZQUFZLEVBQUVULHVCQUF1QixDQUFDVSxhQU5QO0FBTy9CQyxRQUFBQSxjQUFjLEVBQUVYLHVCQUF1QixDQUFDWSxlQVBUO0FBUS9CQyxRQUFBQSx3QkFBd0IsRUFBRWIsdUJBQXVCLENBQUNjLDBCQVJuQjtBQVMvQkMsUUFBQUEsWUFBWSxFQUFFLEtBQUtDLG1CQUFMLENBQXlCaEIsdUJBQXpCLEtBQXFEaUIsU0FUcEM7QUFVL0JDLFFBQUFBLE1BQU0sRUFBRWxCLHVCQUF1QixDQUFDa0IsTUFWRDtBQVcvQkMsUUFBQUEsU0FBUyxFQUFFbkIsdUJBQXVCLENBQUNvQixVQVhKO0FBWS9CQyxRQUFBQSxTQUFTLEVBQUVyQix1QkFBdUIsQ0FBQ3NCO0FBWkosT0FBNUIsQ0FBUDtBQWNIOzs7d0NBRW1CdEIsdUIsRUFBNEY7QUFDNUcsYUFBTyxLQUFLdUIsSUFBTCxDQUFVdkIsdUJBQVYsRUFBbUMsY0FBbkMsRUFBbUQsSUFBSXdCLG1DQUFKLEVBQW5ELENBQVA7QUFDSDs7OztFQXpCMkRDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuIGZyb20gJy4uL1N1YnNjcmlwdGlvblByaWNpbmdQbGFuJztcbmltcG9ydCB7IEFQSVN1YnNjcmlwdGlvblByaWNpbmdQbGFuIGFzIEFQSVN1YnNjcmlwdGlvblByaWNpbmdQbGFuSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4nO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIGFzIFN1YnNjcmlwdGlvbkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9TdWJzY3JpcHRpb25UcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnNjcmlwdGlvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHN1YnNjcmlwdGlvbiBwcmljaW5nIHBsYW4gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdWJzY3JpcHRpb25QcmljaW5nUGxhblxuICAgICAqL1xuICAgIG1hcERhdGEoc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW46IEFQSVN1YnNjcmlwdGlvblByaWNpbmdQbGFuSW50ZXJmYWNlKTogU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4ge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvblByaWNpbmdQbGFuKHtcbiAgICAgICAgICAgIGlkOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5pZCxcbiAgICAgICAgICAgIHN0cmlwZUlkOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5zdHJpcGVfaWQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25JZDogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4uc3Vic2NyaXB0aW9uX2lkLFxuICAgICAgICAgICAgbmFtZTogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4ubmFtZSxcbiAgICAgICAgICAgIGNvc3Q6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLmNvc3QsXG4gICAgICAgICAgICBpbnRlcnZhbFVuaXQ6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLmludGVydmFsX3VuaXQsXG4gICAgICAgICAgICBpbnRlcnZhbExlbmd0aDogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4uaW50ZXJ2YWxfbGVuZ3RoLFxuICAgICAgICAgICAgc3RhcnRpbmdTdWJzY3JpcHRpb25UaWVyOiBzdWJzY3JpcHRpb25QcmljaW5nUGxhbi5zdGFydGluZ19zdWJzY3JpcHRpb25fdGllcixcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbjogdGhpcy5pbmNsdWRlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvblByaWNpbmdQbGFuKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBhY3RpdmU6IHN1YnNjcmlwdGlvblByaWNpbmdQbGFuLmFjdGl2ZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4uY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogc3Vic2NyaXB0aW9uUHJpY2luZ1BsYW4udXBkYXRlZF9hdCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb25QcmljaW5nUGxhbjogQVBJU3Vic2NyaXB0aW9uUHJpY2luZ1BsYW5JbnRlcmZhY2UpOiBTdWJzY3JpcHRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShzdWJzY3JpcHRpb25QcmljaW5nUGxhbiwgJ3N1YnNjcmlwdGlvbicsIG5ldyBTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=