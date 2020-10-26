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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiVXNlclN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIiLCJ1c2VyU3Vic2NyaXB0aW9uQWRkb24iLCJVc2VyU3Vic2NyaXB0aW9uQWRkb24iLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInVzZXJTdWJzY3JpcHRpb25JZCIsInN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5JZCIsInN0YXJ0ZWRBdCIsImVuZGVkQXQiLCJzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuIiwiaW5jbHVkZVN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4iLCJ1bmRlZmluZWQiLCJpdGVtIiwiU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQzs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTs0QkFDWUMscUIsRUFBOEU7QUFDbEYsYUFBTyxJQUFJQyxpQ0FBSixDQUEwQjtBQUM3QkMsUUFBQUEsRUFBRSxFQUFFRixxQkFBcUIsQ0FBQ0UsRUFERztBQUU3QkMsUUFBQUEsU0FBUyxFQUFFSCxxQkFBcUIsQ0FBQ0csU0FGSjtBQUc3QkMsUUFBQUEsU0FBUyxFQUFFSixxQkFBcUIsQ0FBQ0ksU0FISjtBQUk3QkMsUUFBQUEsa0JBQWtCLEVBQUVMLHFCQUFxQixDQUFDSyxrQkFKYjtBQUs3QkMsUUFBQUEsOEJBQThCLEVBQUVOLHFCQUFxQixDQUFDTSw4QkFMekI7QUFNN0JDLFFBQUFBLFNBQVMsRUFBRVAscUJBQXFCLENBQUNPLFNBTko7QUFPN0JDLFFBQUFBLE9BQU8sRUFBRVIscUJBQXFCLENBQUNRLE9BUEY7QUFRN0JDLFFBQUFBLDRCQUE0QixFQUFFLEtBQUtDLG1DQUFMLENBQXlDVixxQkFBekMsS0FBbUVXO0FBUnBFLE9BQTFCLENBQVA7QUFVSDs7O3dEQUdHWCxxQixFQUM0QztBQUM1QyxhQUFPLEtBQUtZLElBQUwsQ0FDSFoscUJBREcsRUFFSCw4QkFGRyxFQUdILElBQUlhLG1EQUFKLEVBSEcsQ0FBUDtBQUtIOzs7O0VBM0J5REMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlclN1YnNjcmlwdGlvbkFkZG9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyU3Vic2NyaXB0aW9uQWRkb24nO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25BZGRvbiBmcm9tICcuLi9Vc2VyU3Vic2NyaXB0aW9uQWRkb24nO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N1YnNjcmlwdGlvbi9UcmFuc2Zvcm1lcnMvU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIFVzZXJTdWJzY3JpcHRpb25BZGRvbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHVzZXJTdWJzY3JpcHRpb25BZGRvblxuICAgICAqL1xuICAgIG1hcERhdGEodXNlclN1YnNjcmlwdGlvbkFkZG9uOiBVc2VyU3Vic2NyaXB0aW9uQWRkb25JbnRlcmZhY2UpOiBVc2VyU3Vic2NyaXB0aW9uQWRkb24ge1xuICAgICAgICByZXR1cm4gbmV3IFVzZXJTdWJzY3JpcHRpb25BZGRvbih7XG4gICAgICAgICAgICBpZDogdXNlclN1YnNjcmlwdGlvbkFkZG9uLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiB1c2VyU3Vic2NyaXB0aW9uQWRkb24uY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB1c2VyU3Vic2NyaXB0aW9uQWRkb24udXBkYXRlZEF0LFxuICAgICAgICAgICAgdXNlclN1YnNjcmlwdGlvbklkOiB1c2VyU3Vic2NyaXB0aW9uQWRkb24udXNlclN1YnNjcmlwdGlvbklkLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbklkOiB1c2VyU3Vic2NyaXB0aW9uQWRkb24uc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbklkLFxuICAgICAgICAgICAgc3RhcnRlZEF0OiB1c2VyU3Vic2NyaXB0aW9uQWRkb24uc3RhcnRlZEF0LFxuICAgICAgICAgICAgZW5kZWRBdDogdXNlclN1YnNjcmlwdGlvbkFkZG9uLmVuZGVkQXQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuOiB0aGlzLmluY2x1ZGVTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuKHVzZXJTdWJzY3JpcHRpb25BZGRvbikgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbihcbiAgICAgICAgdXNlclN1YnNjcmlwdGlvbkFkZG9uOiBVc2VyU3Vic2NyaXB0aW9uQWRkb25JbnRlcmZhY2UsXG4gICAgKTogU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbkludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKFxuICAgICAgICAgICAgdXNlclN1YnNjcmlwdGlvbkFkZG9uLFxuICAgICAgICAgICAgJ3N1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4nLFxuICAgICAgICAgICAgbmV3IFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lcigpLFxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==