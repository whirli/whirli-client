"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Order = _interopRequireDefault(require("../Order"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _OrderLineTransformer = _interopRequireDefault(require("../../order/Transformers/OrderLineTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

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

var OrderTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(OrderTransformer, _BaseTransformer);

  function OrderTransformer() {
    _classCallCheck(this, OrderTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrderTransformer).apply(this, arguments));
  }

  _createClass(OrderTransformer, [{
    key: "mapData",

    /**
     * Map an order response
     *
     * @param order
     */
    value: function mapData(order) {
      return new _Order["default"]({
        id: order.id,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        shippingMethod: order.shippingMethod,
        shippingPreference: order.shippingPreference,
        reference: order.reference,
        trackingNo: order.trackingNo,
        dispatchedAt: order.dispatchedAt,
        currency: order.currency,
        statusId: order.statusId,
        placedAt: order.placedAt,
        notes: order.notes,
        billingPhone: order.billingPhone,
        billingEmail: order.billingEmail,
        billingFirstname: order.billingFirstname,
        billingLastname: order.billingLastname,
        billingAddress: order.billingAddress,
        billingAddressTwo: order.billingAddressTwo,
        billingAddressThree: order.billingAddressThree,
        billingCity: order.billingCity,
        billingCounty: order.billingCounty,
        billingState: order.billingState,
        billingCountry: order.billingCountry,
        billingZip: order.billingZip,
        shippingPhone: order.shippingPhone,
        shippingEmail: order.shippingEmail,
        shippingFirstname: order.shippingFirstname,
        shippingLastname: order.shippingLastname,
        shippingAddress: order.shippingAddress,
        shippingAddressTwo: order.shippingAddressTwo,
        shippingAddressThree: order.shippingAddressThree,
        shippingCity: order.shippingCity,
        shippingCounty: order.shippingCounty,
        shippingState: order.shippingState,
        shippingCountry: order.shippingCountry,
        shippingZip: order.shippingZip,
        contactEmail: order.contactEmail,
        contactPhone: order.contactPhone,
        meta: order.meta,
        resourceType: order.resourceType,
        onFirstOrder: order.onFirstOrder,
        deliveryMethod: order.deliveryMethod,
        expectedDeliveryDate: order.expectedDeliveryDate,
        hasReusablePackagingOptIn: order.hasReusablePackagingOptIn,
        // belongs to
        user: this.includeUser(order),
        // has many
        lines: this.includeOrderLines(order)
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(order) {
      return this.item(order, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeOrderLines",
    value: function includeOrderLines(order) {
      return this.collection(order, 'lines', new _OrderLineTransformer["default"]());
    }
  }]);

  return OrderTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = OrderTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwicmVmZXJlbmNlIiwidHJhY2tpbmdObyIsImRpc3BhdGNoZWRBdCIsImN1cnJlbmN5Iiwic3RhdHVzSWQiLCJwbGFjZWRBdCIsIm5vdGVzIiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwibWV0YSIsInJlc291cmNlVHlwZSIsIm9uRmlyc3RPcmRlciIsImRlbGl2ZXJ5TWV0aG9kIiwiZXhwZWN0ZWREZWxpdmVyeURhdGUiLCJoYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluIiwidXNlciIsImluY2x1ZGVVc2VyIiwibGluZXMiLCJpbmNsdWRlT3JkZXJMaW5lcyIsIml0ZW0iLCJVc2VyVHJhbnNmb3Jt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dUNiQyxRQUFBQSxJQUFJLEVBQUV4QyxLQUFLLENBQUN3QyxJQXZDQztBQXdDYkMsUUFBQUEsWUFBWSxFQUFFekMsS0FBSyxDQUFDeUMsWUF4Q1A7QUF5Q2JDLFFBQUFBLFlBQVksRUFBRTFDLEtBQUssQ0FBQzBDLFlBekNQO0FBMENiQyxRQUFBQSxjQUFjLEVBQUUzQyxLQUFLLENBQUMyQyxjQTFDVDtBQTJDYkMsUUFBQUEsb0JBQW9CLEVBQUU1QyxLQUFLLENBQUM0QyxvQkEzQ2Y7QUE0Q2JDLFFBQUFBLHlCQUF5QixFQUFFN0MsS0FBSyxDQUFDNkMseUJBNUNwQjtBQTZDYjtBQUNBQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQi9DLEtBQWpCLENBOUNPO0FBK0NiO0FBQ0FnRCxRQUFBQSxLQUFLLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUJqRCxLQUF2QjtBQWhETSxPQUFWLENBQVA7QUFrREg7OztnQ0FFV0EsSyxFQUE2QztBQUNyRCxhQUFPLEtBQUtrRCxJQUFMLENBQVVsRCxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCLElBQUltRCwyQkFBSixFQUF6QixDQUFQO0FBQ0g7OztzQ0FFaUJuRCxLLEVBQTZDO0FBQzNELGFBQU8sS0FBS29ELFVBQUwsQ0FBZ0JwRCxLQUFoQixFQUF1QixPQUF2QixFQUFnQyxJQUFJcUQsZ0NBQUosRUFBaEMsQ0FBUDtBQUNIOzs7O0VBakV5Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXIgZnJvbSAnLi4vT3JkZXInO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyTGluZSc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgT3JkZXJMaW5lVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyTGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIG9yZGVyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3JkZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IE9yZGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPcmRlcih7XG4gICAgICAgICAgICBpZDogb3JkZXIuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG9yZGVyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogb3JkZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgc2hpcHBpbmdNZXRob2Q6IG9yZGVyLnNoaXBwaW5nTWV0aG9kLFxuICAgICAgICAgICAgc2hpcHBpbmdQcmVmZXJlbmNlOiBvcmRlci5zaGlwcGluZ1ByZWZlcmVuY2UsXG4gICAgICAgICAgICByZWZlcmVuY2U6IG9yZGVyLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHRyYWNraW5nTm86IG9yZGVyLnRyYWNraW5nTm8sXG4gICAgICAgICAgICBkaXNwYXRjaGVkQXQ6IG9yZGVyLmRpc3BhdGNoZWRBdCxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBvcmRlci5jdXJyZW5jeSxcbiAgICAgICAgICAgIHN0YXR1c0lkOiBvcmRlci5zdGF0dXNJZCxcbiAgICAgICAgICAgIHBsYWNlZEF0OiBvcmRlci5wbGFjZWRBdCxcbiAgICAgICAgICAgIG5vdGVzOiBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgIGJpbGxpbmdQaG9uZTogb3JkZXIuYmlsbGluZ1Bob25lLFxuICAgICAgICAgICAgYmlsbGluZ0VtYWlsOiBvcmRlci5iaWxsaW5nRW1haWwsXG4gICAgICAgICAgICBiaWxsaW5nRmlyc3RuYW1lOiBvcmRlci5iaWxsaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0xhc3RuYW1lOiBvcmRlci5iaWxsaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzczogb3JkZXIuYmlsbGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1R3bzogb3JkZXIuYmlsbGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1RocmVlOiBvcmRlci5iaWxsaW5nQWRkcmVzc1RocmVlLFxuICAgICAgICAgICAgYmlsbGluZ0NpdHk6IG9yZGVyLmJpbGxpbmdDaXR5LFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50eTogb3JkZXIuYmlsbGluZ0NvdW50eSxcbiAgICAgICAgICAgIGJpbGxpbmdTdGF0ZTogb3JkZXIuYmlsbGluZ1N0YXRlLFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50cnk6IG9yZGVyLmJpbGxpbmdDb3VudHJ5LFxuICAgICAgICAgICAgYmlsbGluZ1ppcDogb3JkZXIuYmlsbGluZ1ppcCxcbiAgICAgICAgICAgIHNoaXBwaW5nUGhvbmU6IG9yZGVyLnNoaXBwaW5nUGhvbmUsXG4gICAgICAgICAgICBzaGlwcGluZ0VtYWlsOiBvcmRlci5zaGlwcGluZ0VtYWlsLFxuICAgICAgICAgICAgc2hpcHBpbmdGaXJzdG5hbWU6IG9yZGVyLnNoaXBwaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdMYXN0bmFtZTogb3JkZXIuc2hpcHBpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogb3JkZXIuc2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVHdvOiBvcmRlci5zaGlwcGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUaHJlZTogb3JkZXIuc2hpcHBpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBzaGlwcGluZ0NpdHk6IG9yZGVyLnNoaXBwaW5nQ2l0eSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnR5OiBvcmRlci5zaGlwcGluZ0NvdW50eSxcbiAgICAgICAgICAgIHNoaXBwaW5nU3RhdGU6IG9yZGVyLnNoaXBwaW5nU3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50cnk6IG9yZGVyLnNoaXBwaW5nQ291bnRyeSxcbiAgICAgICAgICAgIHNoaXBwaW5nWmlwOiBvcmRlci5zaGlwcGluZ1ppcCxcbiAgICAgICAgICAgIGNvbnRhY3RFbWFpbDogb3JkZXIuY29udGFjdEVtYWlsLFxuICAgICAgICAgICAgY29udGFjdFBob25lOiBvcmRlci5jb250YWN0UGhvbmUsXG4gICAgICAgICAgICBtZXRhOiBvcmRlci5tZXRhLFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiBvcmRlci5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICBvbkZpcnN0T3JkZXI6IG9yZGVyLm9uRmlyc3RPcmRlcixcbiAgICAgICAgICAgIGRlbGl2ZXJ5TWV0aG9kOiBvcmRlci5kZWxpdmVyeU1ldGhvZCxcbiAgICAgICAgICAgIGV4cGVjdGVkRGVsaXZlcnlEYXRlOiBvcmRlci5leHBlY3RlZERlbGl2ZXJ5RGF0ZSxcbiAgICAgICAgICAgIGhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW46IG9yZGVyLmhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4sXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKG9yZGVyKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBsaW5lczogdGhpcy5pbmNsdWRlT3JkZXJMaW5lcyhvcmRlciksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlckxpbmVzKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IE9yZGVyTGluZUludGVyZmFjZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihvcmRlciwgJ2xpbmVzJywgbmV3IE9yZGVyTGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==