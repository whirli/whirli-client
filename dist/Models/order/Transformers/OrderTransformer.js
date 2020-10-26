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

var OrderTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(OrderTransformer, _BaseTransformer);

  var _super = _createSuper(OrderTransformer);

  function OrderTransformer() {
    _classCallCheck(this, OrderTransformer);

    return _super.apply(this, arguments);
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
  }, {
    key: "includeAssignee",
    value: function includeAssignee(order) {
      return this.item(order, 'assignee', new _AssigneeTransformer["default"]());
    }
  }]);

  return OrderTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = OrderTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwicmVmZXJlbmNlIiwidHJhY2tpbmdObyIsImRpc3BhdGNoZWRBdCIsImN1cnJlbmN5Iiwic3RhdHVzSWQiLCJwbGFjZWRBdCIsIm5vdGVzIiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwibWV0YSIsInJlc291cmNlVHlwZSIsIm9uRmlyc3RPcmRlciIsImlzRmlyc3RPcmRlciIsImRlbGl2ZXJ5TWV0aG9kIiwiZXhwZWN0ZWREZWxpdmVyeURhdGUiLCJoYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluIiwid2VpZ2h0IiwidXNlciIsImluY2x1ZGVVc2VyIiwibGluZXMiLCJpbmNsdWRlT3JkZXJMaW5lcyIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiT3JkZXJMaW5lVHJhbnNmb3JtZXIiLCJBc3NpZ25lZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxLLEVBQThCO0FBQ2xDLGFBQU8sSUFBSUMsaUJBQUosQ0FBVTtBQUNiQyxRQUFBQSxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFERztBQUViQyxRQUFBQSxTQUFTLEVBQUVILEtBQUssQ0FBQ0csU0FGSjtBQUdiQyxRQUFBQSxTQUFTLEVBQUVKLEtBQUssQ0FBQ0ksU0FISjtBQUliQyxRQUFBQSxjQUFjLEVBQUVMLEtBQUssQ0FBQ0ssY0FKVDtBQUtiQyxRQUFBQSxrQkFBa0IsRUFBRU4sS0FBSyxDQUFDTSxrQkFMYjtBQU1iQyxRQUFBQSxTQUFTLEVBQUVQLEtBQUssQ0FBQ08sU0FOSjtBQU9iQyxRQUFBQSxVQUFVLEVBQUVSLEtBQUssQ0FBQ1EsVUFQTDtBQVFiQyxRQUFBQSxZQUFZLEVBQUVULEtBQUssQ0FBQ1MsWUFSUDtBQVNiQyxRQUFBQSxRQUFRLEVBQUVWLEtBQUssQ0FBQ1UsUUFUSDtBQVViQyxRQUFBQSxRQUFRLEVBQUVYLEtBQUssQ0FBQ1csUUFWSDtBQVdiQyxRQUFBQSxRQUFRLEVBQUVaLEtBQUssQ0FBQ1ksUUFYSDtBQVliQyxRQUFBQSxLQUFLLEVBQUViLEtBQUssQ0FBQ2EsS0FaQTtBQWFiQyxRQUFBQSxZQUFZLEVBQUVkLEtBQUssQ0FBQ2MsWUFiUDtBQWNiQyxRQUFBQSxZQUFZLEVBQUVmLEtBQUssQ0FBQ2UsWUFkUDtBQWViQyxRQUFBQSxnQkFBZ0IsRUFBRWhCLEtBQUssQ0FBQ2dCLGdCQWZYO0FBZ0JiQyxRQUFBQSxlQUFlLEVBQUVqQixLQUFLLENBQUNpQixlQWhCVjtBQWlCYkMsUUFB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cmRlcic7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXJMaW5lJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBPcmRlckxpbmVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJMaW5lVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFzc2lnbmVlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvQXNzaWduZWUnO1xuaW1wb3J0IEFzc2lnbmVlVHJhbnNmb3JtZXIgZnJvbSAnLi9Bc3NpZ25lZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIG9yZGVyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3JkZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IE9yZGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPcmRlcih7XG4gICAgICAgICAgICBpZDogb3JkZXIuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG9yZGVyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogb3JkZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgc2hpcHBpbmdNZXRob2Q6IG9yZGVyLnNoaXBwaW5nTWV0aG9kLFxuICAgICAgICAgICAgc2hpcHBpbmdQcmVmZXJlbmNlOiBvcmRlci5zaGlwcGluZ1ByZWZlcmVuY2UsXG4gICAgICAgICAgICByZWZlcmVuY2U6IG9yZGVyLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHRyYWNraW5nTm86IG9yZGVyLnRyYWNraW5nTm8sXG4gICAgICAgICAgICBkaXNwYXRjaGVkQXQ6IG9yZGVyLmRpc3BhdGNoZWRBdCxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBvcmRlci5jdXJyZW5jeSxcbiAgICAgICAgICAgIHN0YXR1c0lkOiBvcmRlci5zdGF0dXNJZCxcbiAgICAgICAgICAgIHBsYWNlZEF0OiBvcmRlci5wbGFjZWRBdCxcbiAgICAgICAgICAgIG5vdGVzOiBvcmRlci5ub3RlcyxcbiAgICAgICAgICAgIGJpbGxpbmdQaG9uZTogb3JkZXIuYmlsbGluZ1Bob25lLFxuICAgICAgICAgICAgYmlsbGluZ0VtYWlsOiBvcmRlci5iaWxsaW5nRW1haWwsXG4gICAgICAgICAgICBiaWxsaW5nRmlyc3RuYW1lOiBvcmRlci5iaWxsaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0xhc3RuYW1lOiBvcmRlci5iaWxsaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzczogb3JkZXIuYmlsbGluZ0FkZHJlc3MsXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1R3bzogb3JkZXIuYmlsbGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBiaWxsaW5nQWRkcmVzc1RocmVlOiBvcmRlci5iaWxsaW5nQWRkcmVzc1RocmVlLFxuICAgICAgICAgICAgYmlsbGluZ0NpdHk6IG9yZGVyLmJpbGxpbmdDaXR5LFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50eTogb3JkZXIuYmlsbGluZ0NvdW50eSxcbiAgICAgICAgICAgIGJpbGxpbmdTdGF0ZTogb3JkZXIuYmlsbGluZ1N0YXRlLFxuICAgICAgICAgICAgYmlsbGluZ0NvdW50cnk6IG9yZGVyLmJpbGxpbmdDb3VudHJ5LFxuICAgICAgICAgICAgYmlsbGluZ1ppcDogb3JkZXIuYmlsbGluZ1ppcCxcbiAgICAgICAgICAgIHNoaXBwaW5nUGhvbmU6IG9yZGVyLnNoaXBwaW5nUGhvbmUsXG4gICAgICAgICAgICBzaGlwcGluZ0VtYWlsOiBvcmRlci5zaGlwcGluZ0VtYWlsLFxuICAgICAgICAgICAgc2hpcHBpbmdGaXJzdG5hbWU6IG9yZGVyLnNoaXBwaW5nRmlyc3RuYW1lLFxuICAgICAgICAgICAgc2hpcHBpbmdMYXN0bmFtZTogb3JkZXIuc2hpcHBpbmdMYXN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogb3JkZXIuc2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVHdvOiBvcmRlci5zaGlwcGluZ0FkZHJlc3NUd28sXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NUaHJlZTogb3JkZXIuc2hpcHBpbmdBZGRyZXNzVGhyZWUsXG4gICAgICAgICAgICBzaGlwcGluZ0NpdHk6IG9yZGVyLnNoaXBwaW5nQ2l0eSxcbiAgICAgICAgICAgIHNoaXBwaW5nQ291bnR5OiBvcmRlci5zaGlwcGluZ0NvdW50eSxcbiAgICAgICAgICAgIHNoaXBwaW5nU3RhdGU6IG9yZGVyLnNoaXBwaW5nU3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50cnk6IG9yZGVyLnNoaXBwaW5nQ291bnRyeSxcbiAgICAgICAgICAgIHNoaXBwaW5nWmlwOiBvcmRlci5zaGlwcGluZ1ppcCxcbiAgICAgICAgICAgIGNvbnRhY3RFbWFpbDogb3JkZXIuY29udGFjdEVtYWlsLFxuICAgICAgICAgICAgY29udGFjdFBob25lOiBvcmRlci5jb250YWN0UGhvbmUsXG4gICAgICAgICAgICBtZXRhOiBvcmRlci5tZXRhLFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiBvcmRlci5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICBvbkZpcnN0T3JkZXI6IG9yZGVyLm9uRmlyc3RPcmRlcixcbiAgICAgICAgICAgIGlzRmlyc3RPcmRlcjogb3JkZXIuaXNGaXJzdE9yZGVyLFxuICAgICAgICAgICAgZGVsaXZlcnlNZXRob2Q6IG9yZGVyLmRlbGl2ZXJ5TWV0aG9kLFxuICAgICAgICAgICAgZXhwZWN0ZWREZWxpdmVyeURhdGU6IG9yZGVyLmV4cGVjdGVkRGVsaXZlcnlEYXRlLFxuICAgICAgICAgICAgaGFzUmV1c2FibGVQYWNrYWdpbmdPcHRJbjogb3JkZXIuaGFzUmV1c2FibGVQYWNrYWdpbmdPcHRJbixcbiAgICAgICAgICAgIHdlaWdodDogb3JkZXIud2VpZ2h0LFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgdXNlcjogdGhpcy5pbmNsdWRlVXNlcihvcmRlciksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgbGluZXM6IHRoaXMuaW5jbHVkZU9yZGVyTGluZXMob3JkZXIpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXIsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJMaW5lcyhvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBPcmRlckxpbmVJbnRlcmZhY2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ob3JkZXIsICdsaW5lcycsIG5ldyBPcmRlckxpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzaWduZWUob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogQXNzaWduZWVJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ2Fzc2lnbmVlJywgbmV3IEFzc2lnbmVlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19