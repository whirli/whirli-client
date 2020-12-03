"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Order = _interopRequireDefault(require("../Order"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _OrderLineTransformer = _interopRequireDefault(require("../../order/Transformers/OrderLineTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _AssigneeTransformer = _interopRequireDefault(require("./AssigneeTransformer"));

var _BasketTransformer = _interopRequireDefault(require("../../basket/Transformers/BasketTransformer"));

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
        isFirstOrder: order.isFirstOrder,
        deliveryMethod: order.deliveryMethod,
        expectedDeliveryDate: order.expectedDeliveryDate,
        hasReusablePackagingOptIn: order.hasReusablePackagingOptIn,
        weight: order.weight,
        shippingServiceId: order.shippingServiceId,
        // belongs to
        user: this.includeUser(order),
        basket: this.includeBasket(order),
        assignee: this.includeAssignee(order),
        // has many
        lines: this.includeOrderLines(order),
        // accessors
        isGift: order.isGift
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
  }, {
    key: "includeAssignee",
    value: function includeAssignee(order) {
      return this.item(order, 'assignee', new _AssigneeTransformer["default"]());
    }
  }, {
    key: "includeBasket",
    value: function includeBasket(order) {
      return this.item(order, 'basket', new _BasketTransformer["default"]());
    }
  }]);

  return OrderTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = OrderTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwicmVmZXJlbmNlIiwidHJhY2tpbmdObyIsImRpc3BhdGNoZWRBdCIsImN1cnJlbmN5Iiwic3RhdHVzSWQiLCJwbGFjZWRBdCIsIm5vdGVzIiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwibWV0YSIsInJlc291cmNlVHlwZSIsIm9uRmlyc3RPcmRlciIsImlzRmlyc3RPcmRlciIsImRlbGl2ZXJ5TWV0aG9kIiwiZXhwZWN0ZWREZWxpdmVyeURhdGUiLCJoYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluIiwid2VpZ2h0Iiwic2hpcHBpbmdTZXJ2aWNlSWQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJiYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwiYXNzaWduZWUiLCJpbmNsdWRlQXNzaWduZWUiLCJsaW5lcyIsImluY2x1ZGVPcmRlckxpbmVzIiwiaXNHaWZ0IiwiaXRlbSIsIlVzZXJUcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJPcmRlckxpbmVUcmFuc2Zvcm1lciIsIkFzc2lnbmVlVHJhbnNmb3JtZXIiLCJCYXNrZXRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxLLEVBQThCO0FBQ2xDLGFBQU8sSUFBSUMsaUJBQUosQ0FBVTtBQUNiQyxRQUFBQSxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFERztBQUViQyxRQUFBQSxTQUFTLEVBQUVILEtBQUssQ0FBQ0csU0FGSjtBQUdiQyxRQUFBQSxTQUFTLEVBQUVKLEtBQUssQ0FBQ0ksU0FISjtBQUliQyxRQUFBQSxjQUFjLEVBQUVMLEtBQUssQ0FBQ0ssY0FKVDtBQUtiQyxRQUFBQSxrQkFBa0IsRUFBRU4sS0FBSyxDQUFDTSxrQkFMYjtBQU1iQyxRQUFBQSxTQUFTLEVBQUVQLEtBQUssQ0FBQ08sU0FOSjtBQU9iQyxRQUFBQSxVQUFVLEVBQUVSLEtBQUssQ0FBQ1EsVUFQTDtBQVFiQyxRQUFBQSxZQUFZLEVBQUVULEtBQUssQ0FBQ1MsWUFSUDtBQVNiQyxRQUFBQSxRQUFRLEVBQUVWLEtBQUssQ0FBQ1UsUUFUSDtBQVViQyxRQUFBQSxRQUFRLEVBQUVYLEtBQUssQ0FBQ1csUUFWSDtBQVdiQyxRQUFBQSxRQUFRLEVBQUVaLEtBQUssQ0FBQ1ksUUFYSDtBQVliQyxRQUFBQSxLQUFLLEVBQUViLEtBQUssQ0FBQ2EsS0FaQTtBQWFiQyxRQUFBQSxZQUFZLEVBQUVkLEtBQUssQ0FBQ2MsWUFiUDtBQWNiQyxRQUFBQSxZQUFZLEVBQUVmLEtBQUssQ0FB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QUFWLEVBQWlCLE1BQWpCLEVBQXlCLElBQUkyRCwyQkFBSixFQUF6QixDQUFQO0FBQ0g7OztzQ0FFaUIzRCxLLEVBQWtEO0FBQ2hFLGFBQU8sS0FBSzRELFVBQUwsQ0FBZ0I1RCxLQUFoQixFQUF1QixPQUF2QixFQUFnQyxJQUFJNkQsZ0NBQUosRUFBaEMsQ0FBUDtBQUNIOzs7b0NBRWU3RCxLLEVBQWlEO0FBQzdELGFBQU8sS0FBSzBELElBQUwsQ0FBVTFELEtBQVYsRUFBaUIsVUFBakIsRUFBNkIsSUFBSThELCtCQUFKLEVBQTdCLENBQVA7QUFDSDs7O2tDQUVhOUQsSyxFQUErQztBQUN6RCxhQUFPLEtBQUswRCxJQUFMLENBQVUxRCxLQUFWLEVBQWlCLFFBQWpCLEVBQTJCLElBQUkrRCw2QkFBSixFQUEzQixDQUFQO0FBQ0g7Ozs7RUFoRnlDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlciBmcm9tICcuLi9PcmRlcic7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXJMaW5lJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBBc3NpZ25lZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL0Fzc2lnbmVlJztcbmltcG9ydCB7IEJhc2tldCBhcyBCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IE9yZGVyTGluZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL29yZGVyL1RyYW5zZm9ybWVycy9PcmRlckxpbmVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQXNzaWduZWVUcmFuc2Zvcm1lciBmcm9tICcuL0Fzc2lnbmVlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2tldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0VHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gb3JkZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcmRlclxuICAgICAqL1xuICAgIG1hcERhdGEob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogT3JkZXIge1xuICAgICAgICByZXR1cm4gbmV3IE9yZGVyKHtcbiAgICAgICAgICAgIGlkOiBvcmRlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogb3JkZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBvcmRlci51cGRhdGVkQXQsXG4gICAgICAgICAgICBzaGlwcGluZ01ldGhvZDogb3JkZXIuc2hpcHBpbmdNZXRob2QsXG4gICAgICAgICAgICBzaGlwcGluZ1ByZWZlcmVuY2U6IG9yZGVyLnNoaXBwaW5nUHJlZmVyZW5jZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogb3JkZXIucmVmZXJlbmNlLFxuICAgICAgICAgICAgdHJhY2tpbmdObzogb3JkZXIudHJhY2tpbmdObyxcbiAgICAgICAgICAgIGRpc3BhdGNoZWRBdDogb3JkZXIuZGlzcGF0Y2hlZEF0LFxuICAgICAgICAgICAgY3VycmVuY3k6IG9yZGVyLmN1cnJlbmN5LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IG9yZGVyLnN0YXR1c0lkLFxuICAgICAgICAgICAgcGxhY2VkQXQ6IG9yZGVyLnBsYWNlZEF0LFxuICAgICAgICAgICAgbm90ZXM6IG9yZGVyLm5vdGVzLFxuICAgICAgICAgICAgYmlsbGluZ1Bob25lOiBvcmRlci5iaWxsaW5nUGhvbmUsXG4gICAgICAgICAgICBiaWxsaW5nRW1haWw6IG9yZGVyLmJpbGxpbmdFbWFpbCxcbiAgICAgICAgICAgIGJpbGxpbmdGaXJzdG5hbWU6IG9yZGVyLmJpbGxpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nTGFzdG5hbWU6IG9yZGVyLmJpbGxpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiBvcmRlci5iaWxsaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVHdvOiBvcmRlci5iaWxsaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU6IG9yZGVyLmJpbGxpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBiaWxsaW5nQ2l0eTogb3JkZXIuYmlsbGluZ0NpdHksXG4gICAgICAgICAgICBiaWxsaW5nQ291bnR5OiBvcmRlci5iaWxsaW5nQ291bnR5LFxuICAgICAgICAgICAgYmlsbGluZ1N0YXRlOiBvcmRlci5iaWxsaW5nU3RhdGUsXG4gICAgICAgICAgICBiaWxsaW5nQ291bnRyeTogb3JkZXIuYmlsbGluZ0NvdW50cnksXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBvcmRlci5iaWxsaW5nWmlwLFxuICAgICAgICAgICAgc2hpcHBpbmdQaG9uZTogb3JkZXIuc2hpcHBpbmdQaG9uZSxcbiAgICAgICAgICAgIHNoaXBwaW5nRW1haWw6IG9yZGVyLnNoaXBwaW5nRW1haWwsXG4gICAgICAgICAgICBzaGlwcGluZ0ZpcnN0bmFtZTogb3JkZXIuc2hpcHBpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0xhc3RuYW1lOiBvcmRlci5zaGlwcGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBvcmRlci5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUd286IG9yZGVyLnNoaXBwaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1RocmVlOiBvcmRlci5zaGlwcGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ2l0eTogb3JkZXIuc2hpcHBpbmdDaXR5LFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHk6IG9yZGVyLnNoaXBwaW5nQ291bnR5LFxuICAgICAgICAgICAgc2hpcHBpbmdTdGF0ZTogb3JkZXIuc2hpcHBpbmdTdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnRyeTogb3JkZXIuc2hpcHBpbmdDb3VudHJ5LFxuICAgICAgICAgICAgc2hpcHBpbmdaaXA6IG9yZGVyLnNoaXBwaW5nWmlwLFxuICAgICAgICAgICAgY29udGFjdEVtYWlsOiBvcmRlci5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IG9yZGVyLmNvbnRhY3RQaG9uZSxcbiAgICAgICAgICAgIG1ldGE6IG9yZGVyLm1ldGEsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IG9yZGVyLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIG9uRmlyc3RPcmRlcjogb3JkZXIub25GaXJzdE9yZGVyLFxuICAgICAgICAgICAgaXNGaXJzdE9yZGVyOiBvcmRlci5pc0ZpcnN0T3JkZXIsXG4gICAgICAgICAgICBkZWxpdmVyeU1ldGhvZDogb3JkZXIuZGVsaXZlcnlNZXRob2QsXG4gICAgICAgICAgICBleHBlY3RlZERlbGl2ZXJ5RGF0ZTogb3JkZXIuZXhwZWN0ZWREZWxpdmVyeURhdGUsXG4gICAgICAgICAgICBoYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluOiBvcmRlci5oYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluLFxuICAgICAgICAgICAgd2VpZ2h0OiBvcmRlci53ZWlnaHQsXG4gICAgICAgICAgICBzaGlwcGluZ1NlcnZpY2VJZDogb3JkZXIuc2hpcHBpbmdTZXJ2aWNlSWQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKG9yZGVyKSxcbiAgICAgICAgICAgIGJhc2tldDogdGhpcy5pbmNsdWRlQmFza2V0KG9yZGVyKSxcbiAgICAgICAgICAgIGFzc2lnbmVlOiB0aGlzLmluY2x1ZGVBc3NpZ25lZShvcmRlciksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgbGluZXM6IHRoaXMuaW5jbHVkZU9yZGVyTGluZXMob3JkZXIpLFxuICAgICAgICAgICAgLy8gYWNjZXNzb3JzXG4gICAgICAgICAgICBpc0dpZnQ6IG9yZGVyLmlzR2lmdCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyTGluZXMob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogQXJyYXk8T3JkZXJMaW5lSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ob3JkZXIsICdsaW5lcycsIG5ldyBPcmRlckxpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzaWduZWUob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogQXNzaWduZWVJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ2Fzc2lnbmVlJywgbmV3IEFzc2lnbmVlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUJhc2tldChvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBCYXNrZXRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ2Jhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=