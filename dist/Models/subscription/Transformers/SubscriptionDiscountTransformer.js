"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionDiscount = _interopRequireDefault(require("../SubscriptionDiscount"));

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

var SubscriptionDiscountTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(SubscriptionDiscountTransformer, _BaseTransformer);

  function SubscriptionDiscountTransformer() {
    _classCallCheck(this, SubscriptionDiscountTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubscriptionDiscountTransformer).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25EaXNjb3VudFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlN1YnNjcmlwdGlvbkRpc2NvdW50VHJhbnNmb3JtZXIiLCJzdWJzY3JpcHRpb25EaXNjb3VudCIsIlN1YnNjcmlwdGlvbkRpc2NvdW50IiwiaWQiLCJjb2RlIiwidHlwZSIsInJlZGVtcHRpb25zIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImF0dHJpYnV0aW9uU291cmNlIiwic3RyaXBlQ291cG9uSWRzIiwiZnJlcXVlbmNpZXMiLCJzdGF0dXMiLCJkaXNjb3VudCIsImJpbGxpbmdQbGFucyIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSwrQjs7Ozs7Ozs7Ozs7Ozs0QkFDVEMsb0IsRUFBMkU7QUFDL0UsYUFBTyxJQUFJQyxnQ0FBSixDQUF5QjtBQUM1QkMsUUFBQUEsRUFBRSxFQUFFRixvQkFBb0IsQ0FBQ0UsRUFERztBQUU1QkMsUUFBQUEsSUFBSSxFQUFFSCxvQkFBb0IsQ0FBQ0csSUFGQztBQUc1QkMsUUFBQUEsSUFBSSxFQUFFSixvQkFBb0IsQ0FBQ0ksSUFIQztBQUk1QkMsUUFBQUEsV0FBVyxFQUFFTCxvQkFBb0IsQ0FBQ0ssV0FKTjtBQUs1QkMsUUFBQUEsU0FBUyxFQUFFTixvQkFBb0IsQ0FBQ00sU0FMSjtBQU01QkMsUUFBQUEsT0FBTyxFQUFFUCxvQkFBb0IsQ0FBQ08sT0FORjtBQU81QkMsUUFBQUEsaUJBQWlCLEVBQUVSLG9CQUFvQixDQUFDUSxpQkFQWjtBQVE1QkMsUUFBQUEsZUFBZSxFQUFFVCxvQkFBb0IsQ0FBQ1MsZUFSVjtBQVM1QkMsUUFBQUEsV0FBVyxFQUFFVixvQkFBb0IsQ0FBQ1UsV0FUTjtBQVU1QkMsUUFBQUEsTUFBTSxFQUFFWCxvQkFBb0IsQ0FBQ1csTUFWRDtBQVc1QkMsUUFBQUEsUUFBUSxFQUFFWixvQkFBb0IsQ0FBQ1ksUUFYSDtBQVk1QkMsUUFBQUEsWUFBWSxFQUFFYixvQkFBb0IsQ0FBQ2E7QUFaUCxPQUF6QixDQUFQO0FBY0g7Ozs7RUFoQndEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBTdWJzY3JpcHRpb25EaXNjb3VudEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N1YnNjcmlwdGlvbi9TdWJzY3JpcHRpb25EaXNjb3VudCc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uRGlzY291bnQgZnJvbSAnLi4vU3Vic2NyaXB0aW9uRGlzY291bnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzY3JpcHRpb25EaXNjb3VudFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKHN1YnNjcmlwdGlvbkRpc2NvdW50OiBTdWJzY3JpcHRpb25EaXNjb3VudEludGVyZmFjZSk6IFN1YnNjcmlwdGlvbkRpc2NvdW50IHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb25EaXNjb3VudCh7XG4gICAgICAgICAgICBpZDogc3Vic2NyaXB0aW9uRGlzY291bnQuaWQsXG4gICAgICAgICAgICBjb2RlOiBzdWJzY3JpcHRpb25EaXNjb3VudC5jb2RlLFxuICAgICAgICAgICAgdHlwZTogc3Vic2NyaXB0aW9uRGlzY291bnQudHlwZSxcbiAgICAgICAgICAgIHJlZGVtcHRpb25zOiBzdWJzY3JpcHRpb25EaXNjb3VudC5yZWRlbXB0aW9ucyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogc3Vic2NyaXB0aW9uRGlzY291bnQuc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZTogc3Vic2NyaXB0aW9uRGlzY291bnQuZW5kRGF0ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uU291cmNlOiBzdWJzY3JpcHRpb25EaXNjb3VudC5hdHRyaWJ1dGlvblNvdXJjZSxcbiAgICAgICAgICAgIHN0cmlwZUNvdXBvbklkczogc3Vic2NyaXB0aW9uRGlzY291bnQuc3RyaXBlQ291cG9uSWRzLFxuICAgICAgICAgICAgZnJlcXVlbmNpZXM6IHN1YnNjcmlwdGlvbkRpc2NvdW50LmZyZXF1ZW5jaWVzLFxuICAgICAgICAgICAgc3RhdHVzOiBzdWJzY3JpcHRpb25EaXNjb3VudC5zdGF0dXMsXG4gICAgICAgICAgICBkaXNjb3VudDogc3Vic2NyaXB0aW9uRGlzY291bnQuZGlzY291bnQsXG4gICAgICAgICAgICBiaWxsaW5nUGxhbnM6IHN1YnNjcmlwdGlvbkRpc2NvdW50LmJpbGxpbmdQbGFucyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19