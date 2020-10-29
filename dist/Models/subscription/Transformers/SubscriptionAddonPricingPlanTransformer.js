"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionAddonPricingPlan = _interopRequireDefault(require("../SubscriptionAddonPricingPlan"));

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

var SubscriptionAddonPricingPlanTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(SubscriptionAddonPricingPlanTransformer, _BaseTransformer);

  function SubscriptionAddonPricingPlanTransformer() {
    _classCallCheck(this, SubscriptionAddonPricingPlanTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubscriptionAddonPricingPlanTransformer).apply(this, arguments));
  }

  _createClass(SubscriptionAddonPricingPlanTransformer, [{
    key: "mapData",

    /**
     * Map a subscription pricing plan response
     *
     * @param subscriptionAddonPricingPlan
     */
    value: function mapData(subscriptionAddonPricingPlan) {
      return new _SubscriptionAddonPricingPlan["default"]({
        id: subscriptionAddonPricingPlan.id,
        createdAt: subscriptionAddonPricingPlan.createdAt,
        updatedAt: subscriptionAddonPricingPlan.updatedAt,
        name: subscriptionAddonPricingPlan.name,
        stripeId: subscriptionAddonPricingPlan.stripeId,
        cost: subscriptionAddonPricingPlan.cost,
        intervalLength: subscriptionAddonPricingPlan.intervalLength,
        intervalUnit: subscriptionAddonPricingPlan.intervalUnit,
        archivedAt: subscriptionAddonPricingPlan.archivedAt,
        subscriptionAddonId: subscriptionAddonPricingPlan.subscriptionAddonId
      });
    }
  }]);

  return SubscriptionAddonPricingPlanTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = SubscriptionAddonPricingPlanTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIiwic3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbiIsIlN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4iLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIm5hbWUiLCJzdHJpcGVJZCIsImNvc3QiLCJpbnRlcnZhbExlbmd0aCIsImludGVydmFsVW5pdCIsImFyY2hpdmVkQXQiLCJzdWJzY3JpcHRpb25BZGRvbklkIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHVDOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLDRCLEVBQW1HO0FBQ3ZHLGFBQU8sSUFBSUMsd0NBQUosQ0FBaUM7QUFDcENDLFFBQUFBLEVBQUUsRUFBRUYsNEJBQTRCLENBQUNFLEVBREc7QUFFcENDLFFBQUFBLFNBQVMsRUFBRUgsNEJBQTRCLENBQUNHLFNBRko7QUFHcENDLFFBQUFBLFNBQVMsRUFBRUosNEJBQTRCLENBQUNJLFNBSEo7QUFJcENDLFFBQUFBLElBQUksRUFBRUwsNEJBQTRCLENBQUNLLElBSkM7QUFLcENDLFFBQUFBLFFBQVEsRUFBRU4sNEJBQTRCLENBQUNNLFFBTEg7QUFNcENDLFFBQUFBLElBQUksRUFBRVAsNEJBQTRCLENBQUNPLElBTkM7QUFPcENDLFFBQUFBLGNBQWMsRUFBRVIsNEJBQTRCLENBQUNRLGNBUFQ7QUFRcENDLFFBQUFBLFlBQVksRUFBRVQsNEJBQTRCLENBQUNTLFlBUlA7QUFTcENDLFFBQUFBLFVBQVUsRUFBRVYsNEJBQTRCLENBQUNVLFVBVEw7QUFVcENDLFFBQUFBLG1CQUFtQixFQUFFWCw0QkFBNEIsQ0FBQ1c7QUFWZCxPQUFqQyxDQUFQO0FBWUg7Ozs7RUFuQmdFQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4nO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4gZnJvbSAnLi4vU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgc3Vic2NyaXB0aW9uIHByaWNpbmcgcGxhbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5cbiAgICAgKi9cbiAgICBtYXBEYXRhKHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW46IFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5JbnRlcmZhY2UpOiBTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuKHtcbiAgICAgICAgICAgIGlkOiBzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbi51cGRhdGVkQXQsXG4gICAgICAgICAgICBuYW1lOiBzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuLm5hbWUsXG4gICAgICAgICAgICBzdHJpcGVJZDogc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbi5zdHJpcGVJZCxcbiAgICAgICAgICAgIGNvc3Q6IHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4uY29zdCxcbiAgICAgICAgICAgIGludGVydmFsTGVuZ3RoOiBzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuLmludGVydmFsTGVuZ3RoLFxuICAgICAgICAgICAgaW50ZXJ2YWxVbml0OiBzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuLmludGVydmFsVW5pdCxcbiAgICAgICAgICAgIGFyY2hpdmVkQXQ6IHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4uYXJjaGl2ZWRBdCxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkFkZG9uSWQ6IHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4uc3Vic2NyaXB0aW9uQWRkb25JZCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19