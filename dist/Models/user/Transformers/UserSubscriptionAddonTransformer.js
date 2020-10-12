"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _UserSubscriptionAddon = _interopRequireDefault(require("../UserSubscriptionAddon"));

var _SubscriptionAddonPricingPlanTransformer = _interopRequireDefault(require("../../subscription/Transformers/SubscriptionAddonPricingPlanTransformer"));

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

var UserSubscriptionAddonTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(UserSubscriptionAddonTransformer, _BaseTransformer);

  var _super = _createSuper(UserSubscriptionAddonTransformer);

  function UserSubscriptionAddonTransformer() {
    _classCallCheck(this, UserSubscriptionAddonTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(UserSubscriptionAddonTransformer, [{
    key: "mapData",

    /**
     * Map a UserSubscriptionAddon response
     *
     * @param userSubscriptionAddon
     */
    value: function mapData(userSubscriptionAddon) {
      return new _UserSubscriptionAddon["default"]({
        id: userSubscriptionAddon.id,
        createdAt: userSubscriptionAddon.createdAt,
        updatedAt: userSubscriptionAddon.updatedAt,
        userSubscriptionId: userSubscriptionAddon.userSubscriptionId,
        subscriptionAddonPricingPlanId: userSubscriptionAddon.subscriptionAddonPricingPlanId,
        startedAt: userSubscriptionAddon.startedAt,
        endedAt: userSubscriptionAddon.endedAt,
        subscriptionAddonPricingPlan: this.includeSubscriptionAddonPricingPlan(userSubscriptionAddon) || undefined
      });
    }
  }, {
    key: "includeSubscriptionAddonPricingPlan",
    value: function includeSubscriptionAddonPricingPlan(userSubscriptionAddon) {
      return this.item(userSubscriptionAddon, 'subscriptionAddonPricingPlan', new _SubscriptionAddonPricingPlanTransformer["default"]());
    }
  }]);

  return UserSubscriptionAddonTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = UserSubscriptionAddonTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiVXNlclN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIiLCJ1c2VyU3Vic2NyaXB0aW9uQWRkb24iLCJVc2VyU3Vic2NyaXB0aW9uQWRkb24iLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInVzZXJTdWJzY3JpcHRpb25JZCIsInN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5JZCIsInN0YXJ0ZWRBdCIsImVuZGVkQXQiLCJzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuIiwiaW5jbHVkZVN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4iLCJ1bmRlZmluZWQiLCJpdGVtIiwiU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQzs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxxQixFQUE4RTtBQUNsRixhQUFPLElBQUlDLGlDQUFKLENBQTBCO0FBQzdCQyxRQUFBQSxFQUFFLEVBQUVGLHFCQUFxQixDQUFDRSxFQURHO0FBRTdCQyxRQUFBQSxTQUFTLEVBQUVILHFCQUFxQixDQUFDRyxTQUZKO0FBRzdCQyxRQUFBQSxTQUFTLEVBQUVKLHFCQUFxQixDQUFDSSxTQUhKO0FBSTdCQyxRQUFBQSxrQkFBa0IsRUFBRUwscUJBQXFCLENBQUNLLGtCQUpiO0FBSzdCQyxRQUFBQSw4QkFBOEIsRUFBRU4scUJBQXFCLENBQUNNLDhCQUx6QjtBQU03QkMsUUFBQUEsU0FBUyxFQUFFUCxxQkFBcUIsQ0FBQ08sU0FOSjtBQU83QkMsUUFBQUEsT0FBTyxFQUFFUixxQkFBcUIsQ0FBQ1EsT0FQRjtBQVE3QkMsUUFBQUEsNEJBQTRCLEVBQUUsS0FBS0MsbUNBQUwsQ0FBeUNWLHFCQUF6QyxLQUFtRVc7QUFScEUsT0FBMUIsQ0FBUDtBQVVIOzs7d0RBR0dYLHFCLEVBQzRDO0FBQzVDLGFBQU8sS0FBS1ksSUFBTCxDQUNIWixxQkFERyxFQUVILDhCQUZHLEVBR0gsSUFBSWEsbURBQUosRUFIRyxDQUFQO0FBS0g7Ozs7RUEzQnlEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uQWRkb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXJTdWJzY3JpcHRpb25BZGRvbic7XG5pbXBvcnQgVXNlclN1YnNjcmlwdGlvbkFkZG9uIGZyb20gJy4uL1VzZXJTdWJzY3JpcHRpb25BZGRvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuJztcbmltcG9ydCBTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyU3Vic2NyaXB0aW9uQWRkb25UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgVXNlclN1YnNjcmlwdGlvbkFkZG9uIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlclN1YnNjcmlwdGlvbkFkZG9uXG4gICAgICovXG4gICAgbWFwRGF0YSh1c2VyU3Vic2NyaXB0aW9uQWRkb246IFVzZXJTdWJzY3JpcHRpb25BZGRvbkludGVyZmFjZSk6IFVzZXJTdWJzY3JpcHRpb25BZGRvbiB7XG4gICAgICAgIHJldHVybiBuZXcgVXNlclN1YnNjcmlwdGlvbkFkZG9uKHtcbiAgICAgICAgICAgIGlkOiB1c2VyU3Vic2NyaXB0aW9uQWRkb24uaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHVzZXJTdWJzY3JpcHRpb25BZGRvbi5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHVzZXJTdWJzY3JpcHRpb25BZGRvbi51cGRhdGVkQXQsXG4gICAgICAgICAgICB1c2VyU3Vic2NyaXB0aW9uSWQ6IHVzZXJTdWJzY3JpcHRpb25BZGRvbi51c2VyU3Vic2NyaXB0aW9uSWQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuSWQ6IHVzZXJTdWJzY3JpcHRpb25BZGRvbi5zdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuSWQsXG4gICAgICAgICAgICBzdGFydGVkQXQ6IHVzZXJTdWJzY3JpcHRpb25BZGRvbi5zdGFydGVkQXQsXG4gICAgICAgICAgICBlbmRlZEF0OiB1c2VyU3Vic2NyaXB0aW9uQWRkb24uZW5kZWRBdCxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW46IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4odXNlclN1YnNjcmlwdGlvbkFkZG9uKSB8fCB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuKFxuICAgICAgICB1c2VyU3Vic2NyaXB0aW9uQWRkb246IFVzZXJTdWJzY3JpcHRpb25BZGRvbkludGVyZmFjZSxcbiAgICApOiBTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oXG4gICAgICAgICAgICB1c2VyU3Vic2NyaXB0aW9uQWRkb24sXG4gICAgICAgICAgICAnc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbicsXG4gICAgICAgICAgICBuZXcgU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyKCksXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19