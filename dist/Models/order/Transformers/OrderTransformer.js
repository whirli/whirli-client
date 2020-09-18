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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwicmVmZXJlbmNlIiwidHJhY2tpbmdObyIsImRpc3BhdGNoZWRBdCIsImN1cnJlbmN5Iiwic3RhdHVzSWQiLCJwbGFjZWRBdCIsIm5vdGVzIiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwibWV0YSIsInJlc291cmNlVHlwZSIsIm9uRmlyc3RPcmRlciIsImlzRmlyc3RPcmRlciIsImRlbGl2ZXJ5TWV0aG9kIiwiZXhwZWN0ZWREZWxpdmVyeURhdGUiLCJoYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluIiwidXNlciIsImluY2x1ZGVVc2VyIiwibGluZXMiLCJpbmNsdWRlT3JkZXJMaW5lcyIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiT3JkZXJMaW5lVHJhbnNmb3JtZXIiLCJBc3NpZ25lZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEssRUFBOEI7QUFDbEMsYUFBTyxJQUFJQyxpQkFBSixDQUFVO0FBQ2JDLFFBQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDRSxFQURHO0FBRWJDLFFBQUFBLFNBQVMsRUFBRUgsS0FBSyxDQUFDRyxTQUZKO0FBR2JDLFFBQUFBLFNBQVMsRUFBRUosS0FBSyxDQUFDSSxTQUhKO0FBSWJDLFFBQUFBLGNBQWMsRUFBRUwsS0FBSyxDQUFDSyxjQUpUO0FBS2JDLFFBQUFBLGtCQUFrQixFQUFFTixLQUFLLENBQUNNLGtCQUxiO0FBTWJDLFFBQUFBLFNBQVMsRUFBRVAsS0FBSyxDQUFDTyxTQU5KO0FBT2JDLFFBQUFBLFVBQVUsRUFBRVIsS0FBSyxDQUFDUSxVQVBMO0FBUWJDLFFBQUFBLFlBQVksRUFBRVQsS0FBSyxDQUFDUyxZQVJQO0FBU2JDLFFBQUFBLFFBQVEsRUFBRVYsS0FBSyxDQUFDVSxRQVRIO0FBVWJDLFFBQUFBLFFBQVEsRUFBRVgsS0FBSyxDQUFDVyxRQVZIO0FBV2JDLFFBQUFBLFFBQVEsRUFBRVosS0FBSyxDQUFDWSxRQVhIO0FBWWJDLFFBQUFBLEtBQUssRUFBRWIsS0FBSyxDQUFDYSxLQVpBO0FBYWJDLFFBQUFBLFlBQVksRUFBRWQsS0FBSyxDQUFDYyxZQWJQO0FBY2JDLFFBQUFBLFlBQVksRUFBRWYsS0FBSyxDQUFDZSxZQWRQO0FBZWJDLFFBQUFBLGdCQUFnQixFQUFFaEIsS0FBSyxDQUFDZ0IsZ0JBZlg7QUFnQmJDLFFBQUFBLGVBQWUsRUFBRWpCLEtBQUssQ0FBQ2lCLGVBaEJWO0FBaUJiQyxRQUFBQSxjQUFjLEVBQUVsQixLQUFLLENBQUNrQixjQWpCVDtBQWtCYkMsUUFBQUEsaUJBQWlCLEVBQUVuQixLQUFLLENBQUNtQixpQkFsQlo7QUFtQmJDLFFBQUFBLG1CQUFtQixFQUFFcEIsS0FBSyxDQUFDb0IsbUJBbkJkO0FBb0JiQyxRQUFBQSxXQUFXLEVBQUVyQixLQUFLLENBQUNxQixXQXBCTjtBQXFCYkMsUUFBQUEsYUFBYSxFQUFFdEIsS0FBSyxDQUFDc0IsYUFyQlI7QUFzQmJDLFFBQUFBLFlBQVksRUFBRXZCLEtBQUssQ0FBQ3VCLFlBdEJQO0FBdUJiQyxRQUFBQSxjQUFjLEVBQUV4QixLQUFLLENBQUN3QixjQXZCVDtBQXdCYkMsUUFBQUEsVUFBVSxFQUFFekIsS0FBSyxDQUFDeUIsVUF4Qkw7QUF5QmJDLFFBQUFBLGFBQWEsRUFBRTFCLEtBQUssQ0FBQzBCLGFBekJSO0FBMEJiQyxRQUFBQSxhQUFhLEVBQUUzQixLQUFLLENBQUMyQixhQTFCUjtBQTJCYkMsUUFBQUEsaUJBQWlCLEVBQUU1QixLQUFLLENBQUM0QixpQkEzQlo7QUE0QmJDLFFBQUFBLGdCQUFnQixFQUFFN0IsS0FBSyxDQUFDNkIsZ0JBNUJYO0FBNkJiQyxRQUFBQSxlQUFlLEVBQUU5QixLQUFLLENBQUM4QixlQTdCVjtBQThCYkMsUUFBQUEsa0JBQWtCLEVBQUUvQixLQUFLLENBQUMrQixrQkE5QmI7QUErQmJDLFFBQUFBLG9CQUFvQixFQUFFaEMsS0FBSyxDQUFDZ0Msb0JBL0JmO0FBZ0NiQyxRQUFBQSxZQUFZLEVBQUVqQyxLQUFLLENBQUNpQyxZQWhDUDtBQWlDYkMsUUFBQUEsY0FBYyxFQUFFbEMsS0FBSyxDQUFDa0MsY0FqQ1Q7QUFrQ2JDLFFBQUFBLGFBQWEsRUFBRW5DLEtBQUssQ0FBQ21DLGFBbENSO0FBbUNiQyxRQUFBQSxlQUFlLEVBQUVwQyxLQUFLLENBQUNvQyxlQW5DVjtBQW9DYkMsUUFBQUEsV0FBVyxFQUFFckMsS0FBSyxDQUFDcUMsV0FwQ047QUFxQ2JDLFFBQUFBLFlBQVksRUFBRXRDLEtBQUssQ0FBQ3NDLFlBckNQO0FBc0NiQyxRQUFBQSxZQUFZLEVBQUV2QyxLQUFLLENBQUN1QyxZQXRDUDtBQXVDYkMsUUFBQUEsSUFBSSxFQUFFeEMsS0FBSyxDQUFDd0MsSUF2Q0M7QUF3Q2JDLFFBQUFBLFlBQVksRUFBRXpDLEtBQUssQ0FBQ3lDLFlBeENQO0FBeUNiQyxRQUFBQSxZQUFZLEVBQUUxQyxLQUFLLENBQUMwQyxZQXpDUDtBQTBDYkMsUUFBQUEsWUFBWSxFQUFFM0MsS0FBSyxDQUFDMkMsWUExQ1A7QUEyQ2JDLFFBQUFBLGNBQWMsRUFBRTVDLEtBQUssQ0FBQzRDLGNBM0NUO0FBNENiQyxRQUFBQSxvQkFBb0IsRUFBRTdDLEtBQUssQ0FBQzZDLG9CQTVDZjtBQTZDYkMsUUFBQUEseUJBQXlCLEVBQUU5QyxLQUFLLENBQUM4Qyx5QkE3Q3BCO0FBOENiO0FBQ0FDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCaEQsS0FBakIsQ0EvQ087QUFnRGI7QUFDQWlELFFBQUFBLEtBQUssRUFBRSxLQUFLQyxpQkFBTCxDQUF1QmxELEtBQXZCO0FBakRNLE9BQVYsQ0FBUDtBQW1ESDs7O2dDQUVXQSxLLEVBQTZDO0FBQ3JELGFBQU8sS0FBS21ELElBQUwsQ0FBVW5ELEtBQVYsRUFBaUIsTUFBakIsRUFBeUIsSUFBSW9ELDJCQUFKLEVBQXpCLENBQVA7QUFDSDs7O3NDQUVpQnBELEssRUFBNkM7QUFDM0QsYUFBTyxLQUFLcUQsVUFBTCxDQUFnQnJELEtBQWhCLEVBQXVCLE9BQXZCLEVBQWdDLElBQUlzRCxnQ0FBSixFQUFoQyxDQUFQO0FBQ0g7OztvQ0FFZXRELEssRUFBaUQ7QUFDN0QsYUFBTyxLQUFLbUQsSUFBTCxDQUFVbkQsS0FBVixFQUFpQixVQUFqQixFQUE2QixJQUFJdUQsK0JBQUosRUFBN0IsQ0FBUDtBQUNIOzs7O0VBdEV5Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXIgZnJvbSAnLi4vT3JkZXInO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyTGluZSc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgT3JkZXJMaW5lVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyTGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBBc3NpZ25lZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL0Fzc2lnbmVlJztcbmltcG9ydCBBc3NpZ25lZVRyYW5zZm9ybWVyIGZyb20gJy4vQXNzaWduZWVUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBvcmRlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9yZGVyXG4gICAgICovXG4gICAgbWFwRGF0YShvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBPcmRlciB7XG4gICAgICAgIHJldHVybiBuZXcgT3JkZXIoe1xuICAgICAgICAgICAgaWQ6IG9yZGVyLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBvcmRlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG9yZGVyLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kOiBvcmRlci5zaGlwcGluZ01ldGhvZCxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJlZmVyZW5jZTogb3JkZXIuc2hpcHBpbmdQcmVmZXJlbmNlLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiBvcmRlci5yZWZlcmVuY2UsXG4gICAgICAgICAgICB0cmFja2luZ05vOiBvcmRlci50cmFja2luZ05vLFxuICAgICAgICAgICAgZGlzcGF0Y2hlZEF0OiBvcmRlci5kaXNwYXRjaGVkQXQsXG4gICAgICAgICAgICBjdXJyZW5jeTogb3JkZXIuY3VycmVuY3ksXG4gICAgICAgICAgICBzdGF0dXNJZDogb3JkZXIuc3RhdHVzSWQsXG4gICAgICAgICAgICBwbGFjZWRBdDogb3JkZXIucGxhY2VkQXQsXG4gICAgICAgICAgICBub3Rlczogb3JkZXIubm90ZXMsXG4gICAgICAgICAgICBiaWxsaW5nUGhvbmU6IG9yZGVyLmJpbGxpbmdQaG9uZSxcbiAgICAgICAgICAgIGJpbGxpbmdFbWFpbDogb3JkZXIuYmlsbGluZ0VtYWlsLFxuICAgICAgICAgICAgYmlsbGluZ0ZpcnN0bmFtZTogb3JkZXIuYmlsbGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdMYXN0bmFtZTogb3JkZXIuYmlsbGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3M6IG9yZGVyLmJpbGxpbmdBZGRyZXNzLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUd286IG9yZGVyLmJpbGxpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUaHJlZTogb3JkZXIuYmlsbGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIGJpbGxpbmdDaXR5OiBvcmRlci5iaWxsaW5nQ2l0eSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHk6IG9yZGVyLmJpbGxpbmdDb3VudHksXG4gICAgICAgICAgICBiaWxsaW5nU3RhdGU6IG9yZGVyLmJpbGxpbmdTdGF0ZSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHJ5OiBvcmRlci5iaWxsaW5nQ291bnRyeSxcbiAgICAgICAgICAgIGJpbGxpbmdaaXA6IG9yZGVyLmJpbGxpbmdaaXAsXG4gICAgICAgICAgICBzaGlwcGluZ1Bob25lOiBvcmRlci5zaGlwcGluZ1Bob25lLFxuICAgICAgICAgICAgc2hpcHBpbmdFbWFpbDogb3JkZXIuc2hpcHBpbmdFbWFpbCxcbiAgICAgICAgICAgIHNoaXBwaW5nRmlyc3RuYW1lOiBvcmRlci5zaGlwcGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nTGFzdG5hbWU6IG9yZGVyLnNoaXBwaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IG9yZGVyLnNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1R3bzogb3JkZXIuc2hpcHBpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVGhyZWU6IG9yZGVyLnNoaXBwaW5nQWRkcmVzc1RocmVlLFxuICAgICAgICAgICAgc2hpcHBpbmdDaXR5OiBvcmRlci5zaGlwcGluZ0NpdHksXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50eTogb3JkZXIuc2hpcHBpbmdDb3VudHksXG4gICAgICAgICAgICBzaGlwcGluZ1N0YXRlOiBvcmRlci5zaGlwcGluZ1N0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHJ5OiBvcmRlci5zaGlwcGluZ0NvdW50cnksXG4gICAgICAgICAgICBzaGlwcGluZ1ppcDogb3JkZXIuc2hpcHBpbmdaaXAsXG4gICAgICAgICAgICBjb250YWN0RW1haWw6IG9yZGVyLmNvbnRhY3RFbWFpbCxcbiAgICAgICAgICAgIGNvbnRhY3RQaG9uZTogb3JkZXIuY29udGFjdFBob25lLFxuICAgICAgICAgICAgbWV0YTogb3JkZXIubWV0YSxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogb3JkZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgb25GaXJzdE9yZGVyOiBvcmRlci5vbkZpcnN0T3JkZXIsXG4gICAgICAgICAgICBpc0ZpcnN0T3JkZXI6IG9yZGVyLmlzRmlyc3RPcmRlcixcbiAgICAgICAgICAgIGRlbGl2ZXJ5TWV0aG9kOiBvcmRlci5kZWxpdmVyeU1ldGhvZCxcbiAgICAgICAgICAgIGV4cGVjdGVkRGVsaXZlcnlEYXRlOiBvcmRlci5leHBlY3RlZERlbGl2ZXJ5RGF0ZSxcbiAgICAgICAgICAgIGhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW46IG9yZGVyLmhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4sXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKG9yZGVyKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBsaW5lczogdGhpcy5pbmNsdWRlT3JkZXJMaW5lcyhvcmRlciksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShvcmRlciwgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlckxpbmVzKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IE9yZGVyTGluZUludGVyZmFjZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihvcmRlciwgJ2xpbmVzJywgbmV3IE9yZGVyTGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NpZ25lZShvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBBc3NpZ25lZUludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAnYXNzaWduZWUnLCBuZXcgQXNzaWduZWVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=