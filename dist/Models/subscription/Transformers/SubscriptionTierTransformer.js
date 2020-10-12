"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionTier = _interopRequireDefault(require("../SubscriptionTier"));

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

var SubscriptionTierTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(SubscriptionTierTransformer, _BaseTransformer);

  var _super = _createSuper(SubscriptionTierTransformer);

  function SubscriptionTierTransformer() {
    _classCallCheck(this, SubscriptionTierTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(SubscriptionTierTransformer, [{
    key: "mapData",

    /**
     * Map a subscription tier response
     *
     * @param subscriptionTier
     */
    value: function mapData(subscriptionTier) {
      return new _SubscriptionTier["default"]({
        id: subscriptionTier.id,
        subscriptionId: subscriptionTier.subscriptionId,
        order: subscriptionTier.order,
        tokenAmount: subscriptionTier.tokenAmount,
        ageUnit: subscriptionTier.ageUnit,
        age: subscriptionTier.age,
        createdAt: subscriptionTier.createdAt,
        updatedAt: subscriptionTier.updatedAt
      });
    }
  }]);

  return SubscriptionTierTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = SubscriptionTierTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyIiwic3Vic2NyaXB0aW9uVGllciIsIlN1YnNjcmlwdGlvblRpZXIiLCJpZCIsInN1YnNjcmlwdGlvbklkIiwib3JkZXIiLCJ0b2tlbkFtb3VudCIsImFnZVVuaXQiLCJhZ2UiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDJCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLGdCLEVBQStEO0FBQ25FLGFBQU8sSUFBSUMsNEJBQUosQ0FBcUI7QUFDeEJDLFFBQUFBLEVBQUUsRUFBRUYsZ0JBQWdCLENBQUNFLEVBREc7QUFFeEJDLFFBQUFBLGNBQWMsRUFBRUgsZ0JBQWdCLENBQUNHLGNBRlQ7QUFHeEJDLFFBQUFBLEtBQUssRUFBRUosZ0JBQWdCLENBQUNJLEtBSEE7QUFJeEJDLFFBQUFBLFdBQVcsRUFBRUwsZ0JBQWdCLENBQUNLLFdBSk47QUFLeEJDLFFBQUFBLE9BQU8sRUFBRU4sZ0JBQWdCLENBQUNNLE9BTEY7QUFNeEJDLFFBQUFBLEdBQUcsRUFBRVAsZ0JBQWdCLENBQUNPLEdBTkU7QUFPeEJDLFFBQUFBLFNBQVMsRUFBRVIsZ0JBQWdCLENBQUNRLFNBUEo7QUFReEJDLFFBQUFBLFNBQVMsRUFBRVQsZ0JBQWdCLENBQUNTO0FBUkosT0FBckIsQ0FBUDtBQVVIOzs7O0VBakJvREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uVGllckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb25UaWVyJztcbmltcG9ydCBTdWJzY3JpcHRpb25UaWVyIGZyb20gJy4uL1N1YnNjcmlwdGlvblRpZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHN1YnNjcmlwdGlvbiB0aWVyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3Vic2NyaXB0aW9uVGllclxuICAgICAqL1xuICAgIG1hcERhdGEoc3Vic2NyaXB0aW9uVGllcjogU3Vic2NyaXB0aW9uVGllckludGVyZmFjZSk6IFN1YnNjcmlwdGlvblRpZXIge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmlwdGlvblRpZXIoe1xuICAgICAgICAgICAgaWQ6IHN1YnNjcmlwdGlvblRpZXIuaWQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25JZDogc3Vic2NyaXB0aW9uVGllci5zdWJzY3JpcHRpb25JZCxcbiAgICAgICAgICAgIG9yZGVyOiBzdWJzY3JpcHRpb25UaWVyLm9yZGVyLFxuICAgICAgICAgICAgdG9rZW5BbW91bnQ6IHN1YnNjcmlwdGlvblRpZXIudG9rZW5BbW91bnQsXG4gICAgICAgICAgICBhZ2VVbml0OiBzdWJzY3JpcHRpb25UaWVyLmFnZVVuaXQsXG4gICAgICAgICAgICBhZ2U6IHN1YnNjcmlwdGlvblRpZXIuYWdlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBzdWJzY3JpcHRpb25UaWVyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogc3Vic2NyaXB0aW9uVGllci51cGRhdGVkQXQsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==