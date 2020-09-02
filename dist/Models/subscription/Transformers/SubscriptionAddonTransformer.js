"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionAddon = _interopRequireDefault(require("../SubscriptionAddon"));

var _SubscriptionAddonPricingPlanTransformer = _interopRequireDefault(require("./SubscriptionAddonPricingPlanTransformer"));

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

var SubscriptionAddonTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(SubscriptionAddonTransformer, _BaseTransformer);

  function SubscriptionAddonTransformer() {
    _classCallCheck(this, SubscriptionAddonTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubscriptionAddonTransformer).apply(this, arguments));
  }

  _createClass(SubscriptionAddonTransformer, [{
    key: "mapData",
    value: function mapData(subscriptionAddon) {
      return new _SubscriptionAddon["default"]({
        id: subscriptionAddon.id,
        createdAt: subscriptionAddon.createdAt,
        updatedAt: subscriptionAddon.updatedAt,
        archivedAt: subscriptionAddon.archivedAt,
        name: subscriptionAddon.name,
        stripeId: subscriptionAddon.stripeId,
        subscriptionAddonPricingPlans: this.includeSubscriptionAddonPricingPlans(subscriptionAddon) || undefined
      });
    }
  }, {
    key: "includeSubscriptionAddonPricingPlans",
    value: function includeSubscriptionAddonPricingPlans(subscriptionAddon) {
      return this.collection(subscriptionAddon, 'subscriptionAddonPricingPlans', new _SubscriptionAddonPricingPlanTransformer["default"]());
    }
  }]);

  return SubscriptionAddonTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = SubscriptionAddonTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIiLCJzdWJzY3JpcHRpb25BZGRvbiIsIlN1YnNjcmlwdGlvbkFkZG9uIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJhcmNoaXZlZEF0IiwibmFtZSIsInN0cmlwZUlkIiwic3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbnMiLCJ1bmRlZmluZWQiLCJjb2xsZWN0aW9uIiwiU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDRCOzs7Ozs7Ozs7Ozs7OzRCQUNUQyxpQixFQUFrRTtBQUN0RSxhQUFPLElBQUlDLDZCQUFKLENBQXNCO0FBQ3pCQyxRQUFBQSxFQUFFLEVBQUVGLGlCQUFpQixDQUFDRSxFQURHO0FBRXpCQyxRQUFBQSxTQUFTLEVBQUVILGlCQUFpQixDQUFDRyxTQUZKO0FBR3pCQyxRQUFBQSxTQUFTLEVBQUVKLGlCQUFpQixDQUFDSSxTQUhKO0FBSXpCQyxRQUFBQSxVQUFVLEVBQUVMLGlCQUFpQixDQUFDSyxVQUpMO0FBS3pCQyxRQUFBQSxJQUFJLEVBQUVOLGlCQUFpQixDQUFDTSxJQUxDO0FBTXpCQyxRQUFBQSxRQUFRLEVBQUVQLGlCQUFpQixDQUFDTyxRQU5IO0FBT3pCQyxRQUFBQSw2QkFBNkIsRUFBRSxLQUFLQyxvQ0FBTCxDQUEwQ1QsaUJBQTFDLEtBQWdFVTtBQVB0RSxPQUF0QixDQUFQO0FBU0g7Ozt5REFHR1YsaUIsRUFDbUQ7QUFDbkQsYUFBTyxLQUFLVyxVQUFMLENBQ0hYLGlCQURHLEVBRUgsK0JBRkcsRUFHSCxJQUFJWSxtREFBSixFQUhHLENBQVA7QUFLSDs7OztFQXJCcURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkFkZG9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvbkFkZG9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25BZGRvbiBmcm9tICcuLi9TdWJzY3JpcHRpb25BZGRvbic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuJztcbmltcG9ydCBTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIgZnJvbSAnLi9TdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKHN1YnNjcmlwdGlvbkFkZG9uOiBTdWJzY3JpcHRpb25BZGRvbkludGVyZmFjZSk6IFN1YnNjcmlwdGlvbkFkZG9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb25BZGRvbih7XG4gICAgICAgICAgICBpZDogc3Vic2NyaXB0aW9uQWRkb24uaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHN1YnNjcmlwdGlvbkFkZG9uLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogc3Vic2NyaXB0aW9uQWRkb24udXBkYXRlZEF0LFxuICAgICAgICAgICAgYXJjaGl2ZWRBdDogc3Vic2NyaXB0aW9uQWRkb24uYXJjaGl2ZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHN1YnNjcmlwdGlvbkFkZG9uLm5hbWUsXG4gICAgICAgICAgICBzdHJpcGVJZDogc3Vic2NyaXB0aW9uQWRkb24uc3RyaXBlSWQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuczogdGhpcy5pbmNsdWRlU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbnMoc3Vic2NyaXB0aW9uQWRkb24pIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5zKFxuICAgICAgICBzdWJzY3JpcHRpb25BZGRvbjogU3Vic2NyaXB0aW9uQWRkb25JbnRlcmZhY2UsXG4gICAgKTogQXJyYXk8U3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbkludGVyZmFjZT4gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkFkZG9uLFxuICAgICAgICAgICAgJ3N1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5zJyxcbiAgICAgICAgICAgIG5ldyBTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuVHJhbnNmb3JtZXIoKSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=