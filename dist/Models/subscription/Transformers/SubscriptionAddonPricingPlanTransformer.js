"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionAddonPricingPlan = _interopRequireDefault(require("../SubscriptionAddonPricingPlan"));

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

var SubscriptionAddonPricingPlanTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(SubscriptionAddonPricingPlanTransformer, _BaseTransformer);

  var _super = _createSuper(SubscriptionAddonPricingPlanTransformer);

  function SubscriptionAddonPricingPlanTransformer() {
    _classCallCheck(this, SubscriptionAddonPricingPlanTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIiwic3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbiIsIlN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4iLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIm5hbWUiLCJzdHJpcGVJZCIsImNvc3QiLCJpbnRlcnZhbExlbmd0aCIsImludGVydmFsVW5pdCIsImFyY2hpdmVkQXQiLCJzdWJzY3JpcHRpb25BZGRvbklkIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx1Qzs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTs0QkFDWUMsNEIsRUFBbUc7QUFDdkcsYUFBTyxJQUFJQyx3Q0FBSixDQUFpQztBQUNwQ0MsUUFBQUEsRUFBRSxFQUFFRiw0QkFBNEIsQ0FBQ0UsRUFERztBQUVwQ0MsUUFBQUEsU0FBUyxFQUFFSCw0QkFBNEIsQ0FBQ0csU0FGSjtBQUdwQ0MsUUFBQUEsU0FBUyxFQUFFSiw0QkFBNEIsQ0FBQ0ksU0FISjtBQUlwQ0MsUUFBQUEsSUFBSSxFQUFFTCw0QkFBNEIsQ0FBQ0ssSUFKQztBQUtwQ0MsUUFBQUEsUUFBUSxFQUFFTiw0QkFBNEIsQ0FBQ00sUUFMSDtBQU1wQ0MsUUFBQUEsSUFBSSxFQUFFUCw0QkFBNEIsQ0FBQ08sSUFOQztBQU9wQ0MsUUFBQUEsY0FBYyxFQUFFUiw0QkFBNEIsQ0FBQ1EsY0FQVDtBQVFwQ0MsUUFBQUEsWUFBWSxFQUFFVCw0QkFBNEIsQ0FBQ1MsWUFSUDtBQVNwQ0MsUUFBQUEsVUFBVSxFQUFFViw0QkFBNEIsQ0FBQ1UsVUFUTDtBQVVwQ0MsUUFBQUEsbUJBQW1CLEVBQUVYLDRCQUE0QixDQUFDVztBQVZkLE9BQWpDLENBQVA7QUFZSDs7OztFQW5CZ0VDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbiBmcm9tICcuLi9TdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBzdWJzY3JpcHRpb24gcHJpY2luZyBwbGFuIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblxuICAgICAqL1xuICAgIG1hcERhdGEoc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbjogU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbkludGVyZmFjZSk6IFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4ge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4oe1xuICAgICAgICAgICAgaWQ6IHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4uaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4uY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4ubmFtZSxcbiAgICAgICAgICAgIHN0cmlwZUlkOiBzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuLnN0cmlwZUlkLFxuICAgICAgICAgICAgY29zdDogc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbi5jb3N0LFxuICAgICAgICAgICAgaW50ZXJ2YWxMZW5ndGg6IHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4uaW50ZXJ2YWxMZW5ndGgsXG4gICAgICAgICAgICBpbnRlcnZhbFVuaXQ6IHN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4uaW50ZXJ2YWxVbml0LFxuICAgICAgICAgICAgYXJjaGl2ZWRBdDogc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbi5hcmNoaXZlZEF0LFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQWRkb25JZDogc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbi5zdWJzY3JpcHRpb25BZGRvbklkLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=