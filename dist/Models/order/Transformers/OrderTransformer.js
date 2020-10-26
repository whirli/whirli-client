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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiT3JkZXJUcmFuc2Zvcm1lciIsIm9yZGVyIiwiT3JkZXIiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInNoaXBwaW5nTWV0aG9kIiwic2hpcHBpbmdQcmVmZXJlbmNlIiwicmVmZXJlbmNlIiwidHJhY2tpbmdObyIsImRpc3BhdGNoZWRBdCIsImN1cnJlbmN5Iiwic3RhdHVzSWQiLCJwbGFjZWRBdCIsIm5vdGVzIiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ0ZpcnN0bmFtZSIsImJpbGxpbmdMYXN0bmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0FkZHJlc3NUd28iLCJiaWxsaW5nQWRkcmVzc1RocmVlIiwiYmlsbGluZ0NpdHkiLCJiaWxsaW5nQ291bnR5IiwiYmlsbGluZ1N0YXRlIiwiYmlsbGluZ0NvdW50cnkiLCJiaWxsaW5nWmlwIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nRW1haWwiLCJzaGlwcGluZ0ZpcnN0bmFtZSIsInNoaXBwaW5nTGFzdG5hbWUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0FkZHJlc3NUd28iLCJzaGlwcGluZ0FkZHJlc3NUaHJlZSIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nQ291bnR5Iiwic2hpcHBpbmdTdGF0ZSIsInNoaXBwaW5nQ291bnRyeSIsInNoaXBwaW5nWmlwIiwiY29udGFjdEVtYWlsIiwiY29udGFjdFBob25lIiwibWV0YSIsInJlc291cmNlVHlwZSIsIm9uRmlyc3RPcmRlciIsImlzRmlyc3RPcmRlciIsImRlbGl2ZXJ5TWV0aG9kIiwiZXhwZWN0ZWREZWxpdmVyeURhdGUiLCJoYXNSZXVzYWJsZVBhY2thZ2luZ09wdEluIiwid2VpZ2h0IiwidXNlciIsImluY2x1ZGVVc2VyIiwibGluZXMiLCJpbmNsdWRlT3JkZXJMaW5lcyIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiT3JkZXJMaW5lVHJhbnNmb3JtZXIiLCJBc3NpZ25lZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTs0QkFDWUMsSyxFQUE4QjtBQUNsQyxhQUFPLElBQUlDLGlCQUFKLENBQVU7QUFDYkMsUUFBQUEsRUFBRSxFQUFFRixLQUFLLENBQUNFLEVBREc7QUFFYkMsUUFBQUEsU0FBUyxFQUFFSCxLQUFLLENBQUNHLFNBRko7QUFHYkMsUUFBQUEsU0FBUyxFQUFFSixLQUFLLENBQUNJLFNBSEo7QUFJYkMsUUFBQUEsY0FBYyxFQUFFTCxLQUFLLENBQUNLLGNBSlQ7QUFLYkMsUUFBQUEsa0JBQWtCLEVBQUVOLEtBQUssQ0FBQ00sa0JBTGI7QUFNYkMsUUFBQUEsU0FBUyxFQUFFUCxLQUFLLENBQUNPLFNBTko7QUFPYkMsUUFBQUEsVUFBVSxFQUFFUixLQUFLLENBQUNRLFVBUEw7QUFRYkMsUUFBQUEsWUFBWSxFQUFFVCxLQUFLLENBQUNTLFlBUlA7QUFTYkMsUUFBQUEsUUFBUSxFQUFFVixLQUFLLENBQUNVLFFBVEg7QUFVYkMsUUFBQUEsUUFBUSxFQUFFWCxLQUFLLENBQUNXLFFBVkg7QUFXYkMsUUFBQUEsUUFBUSxFQUFFWixLQUFLLENBQUNZLFFBWEg7QUFZYkMsUUFBQUEsS0FBSyxFQUFFYixLQUFLLENBQUNhLEtBWkE7QUFhYkMsUUFBQUEsWUFBWSxFQUFFZCxLQUFLLENBQUNjLFlBYlA7QUFjYkMsUUFBQUEsWUFBWSxFQUFFZixLQUFLLENBQUNlLFlBZFA7QUFlYkMsUUFBQUEsZ0JBQWdCLEVBQUVoQixLQUFLLENBQUNnQixnQkFmWDtBQWdCYkMsUUFBQUEsZUFBZSxFQUFFakIsS0FBSyxDQUFDaUIs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T3JkZXIgZnJvbSAnLi4vT3JkZXInO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyTGluZSc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgT3JkZXJMaW5lVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyTGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBBc3NpZ25lZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL0Fzc2lnbmVlJztcbmltcG9ydCBBc3NpZ25lZVRyYW5zZm9ybWVyIGZyb20gJy4vQXNzaWduZWVUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBvcmRlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIG9yZGVyXG4gICAgICovXG4gICAgbWFwRGF0YShvcmRlcjogT3JkZXJJbnRlcmZhY2UpOiBPcmRlciB7XG4gICAgICAgIHJldHVybiBuZXcgT3JkZXIoe1xuICAgICAgICAgICAgaWQ6IG9yZGVyLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBvcmRlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG9yZGVyLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kOiBvcmRlci5zaGlwcGluZ01ldGhvZCxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJlZmVyZW5jZTogb3JkZXIuc2hpcHBpbmdQcmVmZXJlbmNlLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiBvcmRlci5yZWZlcmVuY2UsXG4gICAgICAgICAgICB0cmFja2luZ05vOiBvcmRlci50cmFja2luZ05vLFxuICAgICAgICAgICAgZGlzcGF0Y2hlZEF0OiBvcmRlci5kaXNwYXRjaGVkQXQsXG4gICAgICAgICAgICBjdXJyZW5jeTogb3JkZXIuY3VycmVuY3ksXG4gICAgICAgICAgICBzdGF0dXNJZDogb3JkZXIuc3RhdHVzSWQsXG4gICAgICAgICAgICBwbGFjZWRBdDogb3JkZXIucGxhY2VkQXQsXG4gICAgICAgICAgICBub3Rlczogb3JkZXIubm90ZXMsXG4gICAgICAgICAgICBiaWxsaW5nUGhvbmU6IG9yZGVyLmJpbGxpbmdQaG9uZSxcbiAgICAgICAgICAgIGJpbGxpbmdFbWFpbDogb3JkZXIuYmlsbGluZ0VtYWlsLFxuICAgICAgICAgICAgYmlsbGluZ0ZpcnN0bmFtZTogb3JkZXIuYmlsbGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIGJpbGxpbmdMYXN0bmFtZTogb3JkZXIuYmlsbGluZ0xhc3RuYW1lLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3M6IG9yZGVyLmJpbGxpbmdBZGRyZXNzLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUd286IG9yZGVyLmJpbGxpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3NUaHJlZTogb3JkZXIuYmlsbGluZ0FkZHJlc3NUaHJlZSxcbiAgICAgICAgICAgIGJpbGxpbmdDaXR5OiBvcmRlci5iaWxsaW5nQ2l0eSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHk6IG9yZGVyLmJpbGxpbmdDb3VudHksXG4gICAgICAgICAgICBiaWxsaW5nU3RhdGU6IG9yZGVyLmJpbGxpbmdTdGF0ZSxcbiAgICAgICAgICAgIGJpbGxpbmdDb3VudHJ5OiBvcmRlci5iaWxsaW5nQ291bnRyeSxcbiAgICAgICAgICAgIGJpbGxpbmdaaXA6IG9yZGVyLmJpbGxpbmdaaXAsXG4gICAgICAgICAgICBzaGlwcGluZ1Bob25lOiBvcmRlci5zaGlwcGluZ1Bob25lLFxuICAgICAgICAgICAgc2hpcHBpbmdFbWFpbDogb3JkZXIuc2hpcHBpbmdFbWFpbCxcbiAgICAgICAgICAgIHNoaXBwaW5nRmlyc3RuYW1lOiBvcmRlci5zaGlwcGluZ0ZpcnN0bmFtZSxcbiAgICAgICAgICAgIHNoaXBwaW5nTGFzdG5hbWU6IG9yZGVyLnNoaXBwaW5nTGFzdG5hbWUsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IG9yZGVyLnNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc1R3bzogb3JkZXIuc2hpcHBpbmdBZGRyZXNzVHdvLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzVGhyZWU6IG9yZGVyLnNoaXBwaW5nQWRkcmVzc1RocmVlLFxuICAgICAgICAgICAgc2hpcHBpbmdDaXR5OiBvcmRlci5zaGlwcGluZ0NpdHksXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50eTogb3JkZXIuc2hpcHBpbmdDb3VudHksXG4gICAgICAgICAgICBzaGlwcGluZ1N0YXRlOiBvcmRlci5zaGlwcGluZ1N0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmdDb3VudHJ5OiBvcmRlci5zaGlwcGluZ0NvdW50cnksXG4gICAgICAgICAgICBzaGlwcGluZ1ppcDogb3JkZXIuc2hpcHBpbmdaaXAsXG4gICAgICAgICAgICBjb250YWN0RW1haWw6IG9yZGVyLmNvbnRhY3RFbWFpbCxcbiAgICAgICAgICAgIGNvbnRhY3RQaG9uZTogb3JkZXIuY29udGFjdFBob25lLFxuICAgICAgICAgICAgbWV0YTogb3JkZXIubWV0YSxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogb3JkZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgb25GaXJzdE9yZGVyOiBvcmRlci5vbkZpcnN0T3JkZXIsXG4gICAgICAgICAgICBpc0ZpcnN0T3JkZXI6IG9yZGVyLmlzRmlyc3RPcmRlcixcbiAgICAgICAgICAgIGRlbGl2ZXJ5TWV0aG9kOiBvcmRlci5kZWxpdmVyeU1ldGhvZCxcbiAgICAgICAgICAgIGV4cGVjdGVkRGVsaXZlcnlEYXRlOiBvcmRlci5leHBlY3RlZERlbGl2ZXJ5RGF0ZSxcbiAgICAgICAgICAgIGhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW46IG9yZGVyLmhhc1JldXNhYmxlUGFja2FnaW5nT3B0SW4sXG4gICAgICAgICAgICB3ZWlnaHQ6IG9yZGVyLndlaWdodCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIob3JkZXIpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGxpbmVzOiB0aGlzLmluY2x1ZGVPcmRlckxpbmVzKG9yZGVyKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKG9yZGVyLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyTGluZXMob3JkZXI6IE9yZGVySW50ZXJmYWNlKTogT3JkZXJMaW5lSW50ZXJmYWNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKG9yZGVyLCAnbGluZXMnLCBuZXcgT3JkZXJMaW5lVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2lnbmVlKG9yZGVyOiBPcmRlckludGVyZmFjZSk6IEFzc2lnbmVlSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ob3JkZXIsICdhc3NpZ25lZScsIG5ldyBBc3NpZ25lZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==