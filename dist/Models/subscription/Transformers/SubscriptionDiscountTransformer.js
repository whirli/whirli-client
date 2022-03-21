"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionDiscount = _interopRequireDefault(require("../SubscriptionDiscount"));

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

var SubscriptionDiscountTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(SubscriptionDiscountTransformer, _BaseTransformer);

  var _super = _createSuper(SubscriptionDiscountTransformer);

  function SubscriptionDiscountTransformer() {
    _classCallCheck(this, SubscriptionDiscountTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(SubscriptionDiscountTransformer, [{
    key: "mapData",
    value: function mapData(subscriptionDiscount) {
      return new _SubscriptionDiscount["default"]({
        id: subscriptionDiscount.id,
        code: subscriptionDiscount.code,
        type: subscriptionDiscount.type,
        redemptions: subscriptionDiscount.redemptions,
        startDate: subscriptionDiscount.startDate,
        endDate: subscriptionDiscount.endDate,
        attributionSource: subscriptionDiscount.attributionSource,
        stripeCouponIds: subscriptionDiscount.stripeCouponIds,
        frequencies: subscriptionDiscount.frequencies,
        status: subscriptionDiscount.status,
        discount: subscriptionDiscount.discount,
        billingPlans: subscriptionDiscount.billingPlans
      });
    }
  }]);

  return SubscriptionDiscountTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = SubscriptionDiscountTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25EaXNjb3VudFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlN1YnNjcmlwdGlvbkRpc2NvdW50VHJhbnNmb3JtZXIiLCJzdWJzY3JpcHRpb25EaXNjb3VudCIsIlN1YnNjcmlwdGlvbkRpc2NvdW50IiwiaWQiLCJjb2RlIiwidHlwZSIsInJlZGVtcHRpb25zIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImF0dHJpYnV0aW9uU291cmNlIiwic3RyaXBlQ291cG9uSWRzIiwiZnJlcXVlbmNpZXMiLCJzdGF0dXMiLCJkaXNjb3VudCIsImJpbGxpbmdQbGFucyIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsK0I7Ozs7Ozs7Ozs7Ozs7V0FDakIsaUJBQVFDLG9CQUFSLEVBQW1GO0FBQy9FLGFBQU8sSUFBSUMsZ0NBQUosQ0FBeUI7QUFDNUJDLFFBQUFBLEVBQUUsRUFBRUYsb0JBQW9CLENBQUNFLEVBREc7QUFFNUJDLFFBQUFBLElBQUksRUFBRUgsb0JBQW9CLENBQUNHLElBRkM7QUFHNUJDLFFBQUFBLElBQUksRUFBRUosb0JBQW9CLENBQUNJLElBSEM7QUFJNUJDLFFBQUFBLFdBQVcsRUFBRUwsb0JBQW9CLENBQUNLLFdBSk47QUFLNUJDLFFBQUFBLFNBQVMsRUFBRU4sb0JBQW9CLENBQUNNLFNBTEo7QUFNNUJDLFFBQUFBLE9BQU8sRUFBRVAsb0JBQW9CLENBQUNPLE9BTkY7QUFPNUJDLFFBQUFBLGlCQUFpQixFQUFFUixvQkFBb0IsQ0FBQ1EsaUJBUFo7QUFRNUJDLFFBQUFBLGVBQWUsRUFBRVQsb0JBQW9CLENBQUNTLGVBUlY7QUFTNUJDLFFBQUFBLFdBQVcsRUFBRVYsb0JBQW9CLENBQUNVLFdBVE47QUFVNUJDLFFBQUFBLE1BQU0sRUFBRVgsb0JBQW9CLENBQUNXLE1BVkQ7QUFXNUJDLFFBQUFBLFFBQVEsRUFBRVosb0JBQW9CLENBQUNZLFFBWEg7QUFZNUJDLFFBQUFBLFlBQVksRUFBRWIsb0JBQW9CLENBQUNhO0FBWlAsT0FBekIsQ0FBUDtBQWNIOzs7O0VBaEJ3REMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uRGlzY291bnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uRGlzY291bnQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkRpc2NvdW50IGZyb20gJy4uL1N1YnNjcmlwdGlvbkRpc2NvdW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic2NyaXB0aW9uRGlzY291bnRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgbWFwRGF0YShzdWJzY3JpcHRpb25EaXNjb3VudDogU3Vic2NyaXB0aW9uRGlzY291bnRJbnRlcmZhY2UpOiBTdWJzY3JpcHRpb25EaXNjb3VudCB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uRGlzY291bnQoe1xuICAgICAgICAgICAgaWQ6IHN1YnNjcmlwdGlvbkRpc2NvdW50LmlkLFxuICAgICAgICAgICAgY29kZTogc3Vic2NyaXB0aW9uRGlzY291bnQuY29kZSxcbiAgICAgICAgICAgIHR5cGU6IHN1YnNjcmlwdGlvbkRpc2NvdW50LnR5cGUsXG4gICAgICAgICAgICByZWRlbXB0aW9uczogc3Vic2NyaXB0aW9uRGlzY291bnQucmVkZW1wdGlvbnMsXG4gICAgICAgICAgICBzdGFydERhdGU6IHN1YnNjcmlwdGlvbkRpc2NvdW50LnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IHN1YnNjcmlwdGlvbkRpc2NvdW50LmVuZERhdGUsXG4gICAgICAgICAgICBhdHRyaWJ1dGlvblNvdXJjZTogc3Vic2NyaXB0aW9uRGlzY291bnQuYXR0cmlidXRpb25Tb3VyY2UsXG4gICAgICAgICAgICBzdHJpcGVDb3Vwb25JZHM6IHN1YnNjcmlwdGlvbkRpc2NvdW50LnN0cmlwZUNvdXBvbklkcyxcbiAgICAgICAgICAgIGZyZXF1ZW5jaWVzOiBzdWJzY3JpcHRpb25EaXNjb3VudC5mcmVxdWVuY2llcyxcbiAgICAgICAgICAgIHN0YXR1czogc3Vic2NyaXB0aW9uRGlzY291bnQuc3RhdHVzLFxuICAgICAgICAgICAgZGlzY291bnQ6IHN1YnNjcmlwdGlvbkRpc2NvdW50LmRpc2NvdW50LFxuICAgICAgICAgICAgYmlsbGluZ1BsYW5zOiBzdWJzY3JpcHRpb25EaXNjb3VudC5iaWxsaW5nUGxhbnMsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==