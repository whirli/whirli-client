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
        onHoldPickingAt: order.onHoldPickingAt,
        onHoldPackingAt: order.onHoldPackingAt,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwicmVmZXJlbmNlIiwidHJhY2tpbmdObyIsImRpc3BhdGNoZWRBdCIsIm9uSG9sZFBpY2tpbmdBdCIsIm9uSG9sZFBhY2tpbmdBdCIsImN1cnJlbmN5Iiwic3RhdHVzSWQiLCJwbGFjZWRBdCIsIm5vdGVzIiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwibWV0YSIsInJlc291cmNlVHlwZSIsIm9uRmlyc3RPcmRlciIsImlzRmlyc3RPcmRlciIsImRlbGl2ZXJ5TWV0aG9kIiwiZXhwZWN0ZWREZWxpdmVyeURhdGUiLCJoYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluIiwid2VpZ2h0Iiwic2hpcHBpbmdTZXJ2aWNlSWQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJiYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwiYXNzaWduZWUiLCJpbmNsdWRlQXNzaWduZWUiLCJsaW5lcyIsImluY2x1ZGVPcmRlckxpbmVzIiwiaXNHaWZ0IiwiaXRlbSIsIlVzZXJUcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJPcmRlckxpbmVUcmFuc2Zvcm1lciIsIkFzc2lnbmVlVHJhbnNmb3JtZXIiLCJCYXNrZXRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxLLEVBQThCO0FBQ2xDLGFBQU8sSUFBSUMsaUJBQUosQ0FBVTtBQUNiQyxRQUFBQSxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFERztBQUViQyxRQUFBQSxTQUFTLEVBQUVILEtBQUssQ0FBQ0csU0FGSjtBQUdiQyxRQUFBQSxTQUFTLEVBQUVKLEtBQUssQ0FBQ0ksU0FISjtBQUliQyxRQUFBQSxjQUFjLEVBQUVMLEtBQUssQ0FBQ0ssY0FKVDtBQUtiQyxRQUFBQSxrQkFBa0IsRUFBRU4sS0FBSyxDQUFDTSxrQkFMYjtBQU1iQyxRQUFBQSxTQUFTLEVBQUVQLEtBQUssQ0FBQ08sU0FOSjtBQU9iQyxRQUFBQSxVQUFVLEVBQUVSLEtBQUssQ0FBQ1EsVUFQTDtBQVFiQyxRQUFBQSxZQUFZLEVBQUVULEtBQUssQ0FBQ1MsWUFSUDtBQVNiQyxRQUFBQSxlQUFlLEVBQUVWLEtBQUssQ0FBQ1UsZUFUVjtBQVViQyxRQUFBQSxlQUFlLEVBQUVYLEtBQUssQ0FBQ1csZUFWVjtBQVdiQyxRQUFBQSxRQUFRLEVBQUVaLEtBQUssQ0FBQ1ksUUFYSDtBQVliQyxRQUFBQSxRQUFRLEVBQUViLEtBQUssQ0FBQ2EsUUFaSDtBQWFiQyxRQUFBQSxRQUFRLEVBQUVkLEtBQUssQ0FBQ2Ms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QixDQXZETTtBQXdEYjtBQUNBMkQsUUFBQUEsTUFBTSxFQUFFM0QsS0FBSyxDQUFDMkQ7QUF6REQsT0FBVixDQUFQO0FBMkRIOzs7Z0NBRVczRCxLLEVBQTZDO0FBQ3JELGFBQU8sS0FBSzRELElBQUwsQ0FBVTVELEtBQVYsRUFBaUIsTUFBakIsRUFBeUIsSUFBSTZELDJCQUFKLEVBQXpCLENBQVA7QUFDSDs7O3NDQUVpQjdELEssRUFBa0Q7QUFDaEUsYUFBTyxLQUFLOEQsVUFBTCxDQUFnQjlELEtBQWhCLEVBQXVCLE9BQXZCLEVBQWdDLElBQUkrRCxnQ0FBSixFQUFoQyxDQUFQO0FBQ0g7OztvQ0FFZS9ELEssRUFBaUQ7QUFDN0QsYUFBTyxLQUFLNEQsSUFBTCxDQUFVNUQsS0FBVixFQUFpQixVQUFqQixFQUE2QixJQUFJZ0UsK0JBQUosRUFBN0IsQ0FBUDtBQUNIOzs7a0NBRWFoRSxLLEVBQStDO0FBQ3pELGFBQU8sS0FBSzRELElBQUwsQ0FBVTVELEtBQVYsRUFBaUIsUUFBakIsRUFBMkIsSUFBSWlFLDZCQUFKLEVBQTNCLENBQVA7QUFDSDs7OztFQWxGeUNDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9yZGVyIGZyb20gJy4uL09yZGVyJztcbmltcG9ydCBPcmRlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyJztcbmltcG9ydCBPcmRlckxpbmVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlckxpbmUnO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IEFzc2lnbmVlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvQXNzaWduZWUnO1xuaW1wb3J0IHsgQmFza2V0IGFzIEJhc2tldEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmFza2V0L0Jhc2tldCc7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgT3JkZXJMaW5lVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyTGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBBc3NpZ25lZVRyYW5zZm9ybWVyIGZyb20gJy4vQXNzaWduZWVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFza2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBvcmRlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9yZGVyXG4gICAgICovXG4gICAgbWFwRGF0YShvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBPcmRlciB7XG4gICAgICAgIHJldHVybiBuZXcgT3JkZXIoe1xuICAgICAgICAgICAgaWQ6IG9yZGVyLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBvcmRlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG9yZGVyLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kOiBvcmRlci5zaGlwcGluZ01ldGhvZCxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJlZmVyZW5jZTogb3JkZXIuc2hpcHBpbmdQcmVmZXJlbmNlLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiBvcmRlci5yZWZlcmVuY2UsXG4gICAgICAgICAgICB0cmFja2luZ05vOiBvcmRlci50cmFja2luZ05vLFxuICAgICAgICAgICAgZGlzcGF0Y2hlZEF0OiBvcmRlci5kaXNwYXRjaGVkQXQsXG4gICAgICAgICAgICBvbkhvbGRQaWNraW5nQXQ6IG9yZGVyLm9uSG9sZFBpY2tpbmdBdCxcbiAgICAgICAgICAgIG9uSG9sZFBhY2tpbmdBdDogb3JkZXIub25Ib2xkUGFja2luZ0F0LFxuICAgICAgICAgICAgY3VycmVuY3k6IG9yZGVyLmN1cnJlbmN5LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IG9yZGVyLnN0YXR1c0lkLFxuICAgICAgICAgICAgcGxhY2VkQXQ6IG9yZGVyLnBsYWNlZEF0LFxuICAgICAgICAgICAgbm90ZXM6IG9yZGVyLm5vdGVzLFxuICAgICAgICAgICAgYmlsbGluZ1Bob25lOiBvcmRlci5iaWxsaW5nUGhvbmUsXG4gICAgICAgICAgICBiaWxsaW5nRW1haWw6IG9yZGVyLmJpbGxpbmdFbWFpbCxcbiAgICAgICAgICAgIGJpbGxpbmdGaXJzdG5hbWU6IG9yZGVyLmJpbGxpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nTGFzdG5hbWU6IG9yZGVyLmJpbGxpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiBvcmRlci5iaWxsaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVHdvOiBvcmRlci5iaWxsaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU6IG9yZGVyLmJpbGxpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBiaWxsaW5nQ2l0eTogb3JkZXIuYmlsbGluZ0NpdHksXG4gICAgICAgICAgICBiaWxsaW5nQ291bnR5OiBvcmRlci5iaWxsaW5nQ291bnR5LFxuICAgICAgICAgICAgYmlsbGluZ1N0YXRlOiBvcmRlci5iaWxsaW5nU3RhdGUsXG4gICAgICAgICAgICBiaWxsaW5nQ291bnRyeTogb3JkZXIuYmlsbGluZ0NvdW50cnksXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBvcmRlci5iaWxsaW5nWmlwLFxuICAgICAgICAgICAgc2hpcHBpbmdQaG9uZTogb3JkZXIuc2hpcHBpbmdQaG9uZSxcbiAgICAgICAgICAgIHNoaXBwaW5nRW1haWw6IG9yZGVyLnNoaXBwaW5nRW1haWwsXG4gICAgICAgICAgICBzaGlwcGluZ0ZpcnN0bmFtZTogb3JkZXIuc2hpcHBpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0xhc3RuYW1lOiBvcmRlci5zaGlwcGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBvcmRlci5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUd286IG9yZGVyLnNoaXBwaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1RocmVlOiBvcmRlci5zaGlwcGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ2l0eTogb3JkZXIuc2hpcHBpbmdDaXR5LFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHk6IG9yZGVyLnNoaXBwaW5nQ291bnR5LFxuICAgICAgICAgICAgc2hpcHBpbmdTdGF0ZTogb3JkZXIuc2hpcHBpbmdTdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnRyeTogb3JkZXIuc2hpcHBpbmdDb3VudHJ5LFxuICAgICAgICAgICAgc2hpcHBpbmdaaXA6IG9yZGVyLnNoaXBwaW5nWmlwLFxuICAgICAgICAgICAgY29udGFjdEVtYWlsOiBvcmRlci5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IG9yZGVyLmNvbnRhY3RQaG9uZSxcbiAgICAgICAgICAgIG1ldGE6IG9yZGVyLm1ldGEsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IG9yZGVyLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIG9uRmlyc3RPcmRlcjogb3JkZXIub25GaXJzdE9yZGVyLFxuICAgICAgICAgICAgaXNGaXJzdE9yZGVyOiBvcmRlci5pc0ZpcnN0T3JkZXIsXG4gICAgICAgICAgICBkZWxpdmVyeU1ldGhvZDogb3JkZXIuZGVsaXZlcnlNZXRob2QsXG4gICAgICAgICAgICBleHBlY3RlZERlbGl2ZXJ5RGF0ZTogb3JkZXIuZXhwZWN0ZWREZWxpdmVyeURhdGUsXG4gICAgICAgICAgICBoYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluOiBvcmRlci5oYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluLFxuICAgICAgICAgICAgd2VpZ2h0OiBvcmRlci53ZWlnaHQsXG4gICAgICAgICAgICBzaGlwcGluZ1NlcnZpY2VJZDogb3JkZXIuc2hpcHBpbmdTZXJ2aWNlSWQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKG9yZGVyKSxcbiAgICAgICAgICAgIGJhc2tldDogdGhpcy5pbmNsdWRlQmFza2V0KG9yZGVyKSxcbiAgICAgICAgICAgIGFzc2lnbmVlOiB0aGlzLmluY2x1ZGVBc3NpZ25lZShvcmRlciksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgbGluZXM6IHRoaXMuaW5jbHVkZU9yZGVyTGluZXMob3JkZXIpLFxuICAgICAgICAgICAgLy8gYWNjZXNzb3JzXG4gICAgICAgICAgICBpc0dpZnQ6IG9yZGVyLmlzR2lmdCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyTGluZXMob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogQXJyYXk8T3JkZXJMaW5lSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ob3JkZXIsICdsaW5lcycsIG5ldyBPcmRlckxpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzaWduZWUob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogQXNzaWduZWVJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ2Fzc2lnbmVlJywgbmV3IEFzc2lnbmVlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUJhc2tldChvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBCYXNrZXRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ2Jhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=