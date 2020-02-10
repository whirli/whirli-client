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
        orderStatus: order.orderStatus,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwicmVmZXJlbmNlIiwidHJhY2tpbmdObyIsImRpc3BhdGNoZWRBdCIsImN1cnJlbmN5Iiwib3JkZXJTdGF0dXMiLCJwbGFjZWRBdCIsIm5vdGVzIiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwibWV0YSIsInJlc291cmNlVHlwZSIsInVzZXIiLCJpbmNsdWRlVXNlciIsImxpbmVzIiwiaW5jbHVkZU9yZGVyTGluZXMiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIk9yZGVyTGluZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FB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eENQO0FBeUNiO0FBQ0FDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCM0MsS0FBakIsQ0ExQ087QUEyQ2I7QUFDQTRDLFFBQUFBLEtBQUssRUFBRSxLQUFLQyxpQkFBTCxDQUF1QjdDLEtBQXZCO0FBNUNNLE9BQVYsQ0FBUDtBQThDSDs7O2dDQUVXQSxLLEVBQTZDO0FBQ3JELGFBQU8sS0FBSzhDLElBQUwsQ0FBVTlDLEtBQVYsRUFBaUIsTUFBakIsRUFBeUIsSUFBSStDLDJCQUFKLEVBQXpCLENBQVA7QUFDSDs7O3NDQUVpQi9DLEssRUFBNkM7QUFDM0QsYUFBTyxLQUFLZ0QsVUFBTCxDQUFnQmhELEtBQWhCLEVBQXVCLE9BQXZCLEVBQWdDLElBQUlpRCxnQ0FBSixFQUFoQyxDQUFQO0FBQ0g7Ozs7RUE3RHlDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlciBmcm9tICcuLi9PcmRlcic7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXJMaW5lJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBPcmRlckxpbmVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJMaW5lVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gb3JkZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcmRlclxuICAgICAqL1xuICAgIG1hcERhdGEob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogT3JkZXIge1xuICAgICAgICByZXR1cm4gbmV3IE9yZGVyKHtcbiAgICAgICAgICAgIGlkOiBvcmRlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogb3JkZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBvcmRlci51cGRhdGVkQXQsXG4gICAgICAgICAgICBzaGlwcGluZ01ldGhvZDogb3JkZXIuc2hpcHBpbmdNZXRob2QsXG4gICAgICAgICAgICBzaGlwcGluZ1ByZWZlcmVuY2U6IG9yZGVyLnNoaXBwaW5nUHJlZmVyZW5jZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogb3JkZXIucmVmZXJlbmNlLFxuICAgICAgICAgICAgdHJhY2tpbmdObzogb3JkZXIudHJhY2tpbmdObyxcbiAgICAgICAgICAgIGRpc3BhdGNoZWRBdDogb3JkZXIuZGlzcGF0Y2hlZEF0LFxuICAgICAgICAgICAgY3VycmVuY3k6IG9yZGVyLmN1cnJlbmN5LFxuICAgICAgICAgICAgb3JkZXJTdGF0dXM6IG9yZGVyLm9yZGVyU3RhdHVzLFxuICAgICAgICAgICAgcGxhY2VkQXQ6IG9yZGVyLnBsYWNlZEF0LFxuICAgICAgICAgICAgbm90ZXM6IG9yZGVyLm5vdGVzLFxuICAgICAgICAgICAgYmlsbGluZ1Bob25lOiBvcmRlci5iaWxsaW5nUGhvbmUsXG4gICAgICAgICAgICBiaWxsaW5nRW1haWw6IG9yZGVyLmJpbGxpbmdFbWFpbCxcbiAgICAgICAgICAgIGJpbGxpbmdGaXJzdG5hbWU6IG9yZGVyLmJpbGxpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nTGFzdG5hbWU6IG9yZGVyLmJpbGxpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiBvcmRlci5iaWxsaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVHdvOiBvcmRlci5iaWxsaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU6IG9yZGVyLmJpbGxpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBiaWxsaW5nQ2l0eTogb3JkZXIuYmlsbGluZ0NpdHksXG4gICAgICAgICAgICBiaWxsaW5nQ291bnR5OiBvcmRlci5iaWxsaW5nQ291bnR5LFxuICAgICAgICAgICAgYmlsbGluZ1N0YXRlOiBvcmRlci5iaWxsaW5nU3RhdGUsXG4gICAgICAgICAgICBiaWxsaW5nQ291bnRyeTogb3JkZXIuYmlsbGluZ0NvdW50cnksXG4gICAgICAgICAgICBiaWxsaW5nWmlwOiBvcmRlci5iaWxsaW5nWmlwLFxuICAgICAgICAgICAgc2hpcHBpbmdQaG9uZTogb3JkZXIuc2hpcHBpbmdQaG9uZSxcbiAgICAgICAgICAgIHNoaXBwaW5nRW1haWw6IG9yZGVyLnNoaXBwaW5nRW1haWwsXG4gICAgICAgICAgICBzaGlwcGluZ0ZpcnN0bmFtZTogb3JkZXIuc2hpcHBpbmdGaXJzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0xhc3RuYW1lOiBvcmRlci5zaGlwcGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBvcmRlci5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUd286IG9yZGVyLnNoaXBwaW5nQWRkcmVzc1R3byxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1RocmVlOiBvcmRlci5zaGlwcGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ2l0eTogb3JkZXIuc2hpcHBpbmdDaXR5LFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHk6IG9yZGVyLnNoaXBwaW5nQ291bnR5LFxuICAgICAgICAgICAgc2hpcHBpbmdTdGF0ZTogb3JkZXIuc2hpcHBpbmdTdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnRyeTogb3JkZXIuc2hpcHBpbmdDb3VudHJ5LFxuICAgICAgICAgICAgc2hpcHBpbmdaaXA6IG9yZGVyLnNoaXBwaW5nWmlwLFxuICAgICAgICAgICAgY29udGFjdEVtYWlsOiBvcmRlci5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IG9yZGVyLmNvbnRhY3RQaG9uZSxcbiAgICAgICAgICAgIG1ldGE6IG9yZGVyLm1ldGEsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IG9yZGVyLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIob3JkZXIpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmluY2x1ZGVPcmRlckxpbmVzKG9yZGVyKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyTGluZXMob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogT3JkZXJMaW5lSW50ZXJmYWNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKG9yZGVyLCAnbGluZXMnLCBuZXcgT3JkZXJMaW5lVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19