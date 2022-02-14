"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _UserSubscriptionAddon = _interopRequireDefault(require("../UserSubscriptionAddon"));

var _SubscriptionAddonPricingPlanTransformer = _interopRequireDefault(require("../../subscription/Transformers/SubscriptionAddonPricingPlanTransformer"));

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

var UserSubscriptionAddonTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(UserSubscriptionAddonTransformer, _BaseTransformer);

  var _super = _createSuper(UserSubscriptionAddonTransformer);

  function UserSubscriptionAddonTransformer() {
    _classCallCheck(this, UserSubscriptionAddonTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(UserSubscriptionAddonTransformer, [{
    key: "mapData",
    value:
    /**
     * Map a UserSubscriptionAddon response
     *
     * @param userSubscriptionAddon
     */
    function mapData(userSubscriptionAddon) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiVXNlclN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIiLCJ1c2VyU3Vic2NyaXB0aW9uQWRkb24iLCJVc2VyU3Vic2NyaXB0aW9uQWRkb24iLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInVzZXJTdWJzY3JpcHRpb25JZCIsInN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5JZCIsInN0YXJ0ZWRBdCIsImVuZGVkQXQiLCJzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuIiwiaW5jbHVkZVN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4iLCJ1bmRlZmluZWQiLCJpdGVtIiwiU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQzs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLHFCQUFRQyxxQkFBUixFQUFzRjtBQUNsRixhQUFPLElBQUlDLGlDQUFKLENBQTBCO0FBQzdCQyxRQUFBQSxFQUFFLEVBQUVGLHFCQUFxQixDQUFDRSxFQURHO0FBRTdCQyxRQUFBQSxTQUFTLEVBQUVILHFCQUFxQixDQUFDRyxTQUZKO0FBRzdCQyxRQUFBQSxTQUFTLEVBQUVKLHFCQUFxQixDQUFDSSxTQUhKO0FBSTdCQyxRQUFBQSxrQkFBa0IsRUFBRUwscUJBQXFCLENBQUNLLGtCQUpiO0FBSzdCQyxRQUFBQSw4QkFBOEIsRUFBRU4scUJBQXFCLENBQUNNLDhCQUx6QjtBQU03QkMsUUFBQUEsU0FBUyxFQUFFUCxxQkFBcUIsQ0FBQ08sU0FOSjtBQU83QkMsUUFBQUEsT0FBTyxFQUFFUixxQkFBcUIsQ0FBQ1EsT0FQRjtBQVE3QkMsUUFBQUEsNEJBQTRCLEVBQUUsS0FBS0MsbUNBQUwsQ0FBeUNWLHFCQUF6QyxLQUFtRVc7QUFScEUsT0FBMUIsQ0FBUDtBQVVIOzs7V0FFRCw2Q0FDSVgscUJBREosRUFFZ0Q7QUFDNUMsYUFBTyxLQUFLWSxJQUFMLENBQ0haLHFCQURHLEVBRUgsOEJBRkcsRUFHSCxJQUFJYSxtREFBSixFQUhHLENBQVA7QUFLSDs7OztFQTNCeURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25BZGRvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlclN1YnNjcmlwdGlvbkFkZG9uJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uQWRkb24gZnJvbSAnLi4vVXNlclN1YnNjcmlwdGlvbkFkZG9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4nO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdWJzY3JpcHRpb24vVHJhbnNmb3JtZXJzL1N1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJTdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBVc2VyU3Vic2NyaXB0aW9uQWRkb24gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VyU3Vic2NyaXB0aW9uQWRkb25cbiAgICAgKi9cbiAgICBtYXBEYXRhKHVzZXJTdWJzY3JpcHRpb25BZGRvbjogVXNlclN1YnNjcmlwdGlvbkFkZG9uSW50ZXJmYWNlKTogVXNlclN1YnNjcmlwdGlvbkFkZG9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VyU3Vic2NyaXB0aW9uQWRkb24oe1xuICAgICAgICAgICAgaWQ6IHVzZXJTdWJzY3JpcHRpb25BZGRvbi5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdXNlclN1YnNjcmlwdGlvbkFkZG9uLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogdXNlclN1YnNjcmlwdGlvbkFkZG9uLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHVzZXJTdWJzY3JpcHRpb25JZDogdXNlclN1YnNjcmlwdGlvbkFkZG9uLnVzZXJTdWJzY3JpcHRpb25JZCxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5JZDogdXNlclN1YnNjcmlwdGlvbkFkZG9uLnN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5JZCxcbiAgICAgICAgICAgIHN0YXJ0ZWRBdDogdXNlclN1YnNjcmlwdGlvbkFkZG9uLnN0YXJ0ZWRBdCxcbiAgICAgICAgICAgIGVuZGVkQXQ6IHVzZXJTdWJzY3JpcHRpb25BZGRvbi5lbmRlZEF0LFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbjogdGhpcy5pbmNsdWRlU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbih1c2VyU3Vic2NyaXB0aW9uQWRkb24pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4oXG4gICAgICAgIHVzZXJTdWJzY3JpcHRpb25BZGRvbjogVXNlclN1YnNjcmlwdGlvbkFkZG9uSW50ZXJmYWNlLFxuICAgICk6IFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShcbiAgICAgICAgICAgIHVzZXJTdWJzY3JpcHRpb25BZGRvbixcbiAgICAgICAgICAgICdzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuJyxcbiAgICAgICAgICAgIG5ldyBTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIoKSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=