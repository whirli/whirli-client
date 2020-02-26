"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ReturnOrder = _interopRequireDefault(require("../ReturnOrder"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _ReturnOrderLineTransformer = _interopRequireDefault(require("../../return/Transformers/ReturnOrderLineTransformer"));

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

var ReturnOrderTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ReturnOrderTransformer, _BaseTransformer);

  function ReturnOrderTransformer() {
    _classCallCheck(this, ReturnOrderTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReturnOrderTransformer).apply(this, arguments));
  }

  _createClass(ReturnOrderTransformer, [{
    key: "mapData",

    /**
     * Map an returnOrder response
     *
     * @param returnOrder
     */
    value: function mapData(returnOrder) {
      return new _ReturnOrder["default"]({
        id: returnOrder.id,
        createdAt: returnOrder.createdAt,
        updatedAt: returnOrder.updatedAt,
        statusId: returnOrder.statusId,
        subTotal: returnOrder.subTotal,
        deliveryTotal: returnOrder.deliveryTotal,
        discountTotal: returnOrder.discountTotal,
        taxTotal: returnOrder.taxTotal,
        orderTotal: returnOrder.orderTotal,
        shippingMethod: returnOrder.shippingMethod,
        shippingPreference: returnOrder.shippingPreference,
        currency: returnOrder.currency,
        vatNo: returnOrder.vatNo,
        reference: returnOrder.reference,
        contactEmail: returnOrder.contactEmail,
        contactPhone: returnOrder.contactPhone,
        trackingNumber: returnOrder.trackingNumber,
        conversion: returnOrder.conversion,
        meta: returnOrder.meta,
        notes: returnOrder.notes,
        placedAt: returnOrder.placedAt,
        dispatchedAt: returnOrder.dispatchedAt,
        receivedAt: returnOrder.receivedAt,
        resourceType: returnOrder.resourceType,
        // belongs to
        user: this.includeUser(returnOrder),
        // has many
        returnOrderLines: this.includeOrderLines(returnOrder)
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(returnOrder) {
      return this.item(returnOrder, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeOrderLines",
    value: function includeOrderLines(returnOrder) {
      return this.collection(returnOrder, 'returnOrderLines', new _ReturnOrderLineTransformer["default"]());
    }
  }]);

  return ReturnOrderTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ReturnOrderTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJyZXR1cm5PcmRlciIsIlJldHVybk9yZGVyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJzdGF0dXNJZCIsInN1YlRvdGFsIiwiZGVsaXZlcnlUb3RhbCIsImRpc2NvdW50VG90YWwiLCJ0YXhUb3RhbCIsIm9yZGVyVG90YWwiLCJzaGlwcGluZ01ldGhvZCIsInNoaXBwaW5nUHJlZmVyZW5jZSIsImN1cnJlbmN5IiwidmF0Tm8iLCJyZWZlcmVuY2UiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJ0cmFja2luZ051bWJlciIsImNvbnZlcnNpb24iLCJtZXRhIiwibm90ZXMiLCJwbGFjZWRBdCIsImRpc3BhdGNoZWRBdCIsInJlY2VpdmVkQXQiLCJyZXNvdXJjZVR5cGUiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJyZXR1cm5PcmRlckxpbmVzIiwiaW5jbHVkZU9yZGVyTGluZXMiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlJldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHNCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFcsRUFBZ0Q7QUFDcEQsYUFBTyxJQUFJQyx1QkFBSixDQUFnQjtBQUNuQkMsUUFBQUEsRUFBRSxFQUFFRixXQUFXLENBQUNFLEVBREc7QUFFbkJDLFFBQUFBLFNBQVMsRUFBRUgsV0FBVyxDQUFDRyxTQUZKO0FBR25CQyxRQUFBQSxTQUFTLEVBQUVKLFdBQVcsQ0FBQ0ksU0FISjtBQUluQkMsUUFBQUEsUUFBUSxFQUFFTCxXQUFXLENBQUNLLFFBSkg7QUFLbkJDLFFBQUFBLFFBQVEsRUFBRU4sV0FBVyxDQUFDTSxRQUxIO0FBTW5CQyxRQUFBQSxhQUFhLEVBQUVQLFdBQVcsQ0FBQ08sYUFOUjtBQU9uQkMsUUFBQUEsYUFBYSxFQUFFUixXQUFXLENBQUNRLGFBUFI7QUFRbkJDLFFBQUFBLFFBQVEsRUFBRVQsV0FBVyxDQUFDUyxRQVJIO0FBU25CQyxRQUFBQSxVQUFVLEVBQUVWLFdBQVcsQ0FBQ1UsVUFUTDtBQVVuQkMsUUFBQUEsY0FBYyxFQUFFWCxXQUFXLENBQUNXLGNBVlQ7QUFXbkJDLFFBQUFBLGtCQUFrQixFQUFFWixXQUFXLENBQUNZLGtCQVhiO0FBWW5CQyxRQUFBQSxRQUFRLEVBQUViLFdBQVcsQ0FBQ2EsUUFaSDtBQWFuQkMsUUFBQUEsS0FBSyxFQUFFZCxXQUFXLENBQUNjLEtBYkE7QUFjbkJDLFFBQUFBLFNBQVMsRUFBRWYsV0FBVyxDQUFDZSxTQWRKO0FBZW5CQyxRQUFBQSxZQUFZLEVBQUVoQixXQUFXLENBQUNnQixZQWZQO0FBZ0JuQkMsUUFBQUEsWUFBWSxFQUFFakIsV0FBVyxDQUFDaUIsWUFoQlA7QUFpQm5CQyxRQUFBQSxjQUFjLEVBQUVsQixXQUFXLENBQUNrQixjQWpCVDtBQWtCbkJDLFFBQUFBLFVBQVUsRUFBRW5CLFdBQVcsQ0FBQ21CLFVBbEJMO0FBbUJuQkMsUUFBQUEsSUFBSSxFQUFFcEIsV0FBVyxDQUFDb0IsSUFuQkM7QUFvQm5CQyxRQUFBQSxLQUFLLEVBQUVyQixXQUFXLENBQUNxQixLQXBCQTtBQXFCbkJDLFFBQUFBLFFBQVEsRUFBRXRCLFdBQVcsQ0FBQ3NCLFFBckJIO0FBc0JuQkMsUUFBQUEsWUFBWSxFQUFFdkIsV0FBVyxDQUFDdUIsWUF0QlA7QUF1Qm5CQyxRQUFBQSxVQUFVLEVBQUV4QixXQUFXLENBQUN3QixVQXZCTDtBQXdCbkJDLFFBQUFBLFlBQVksRUFBRXpCLFdBQVcsQ0FBQ3lCLFlBeEJQO0FBeUJuQjtBQUNBQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQjNCLFdBQWpCLENBMUJhO0FBMkJuQjtBQUNBNEIsUUFBQUEsZ0JBQWdCLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUI3QixXQUF2QjtBQTVCQyxPQUFoQixDQUFQO0FBOEJIOzs7Z0NBRVdBLFcsRUFBeUQ7QUFDakUsYUFBTyxLQUFLOEIsSUFBTCxDQUFVOUIsV0FBVixFQUF1QixNQUF2QixFQUErQixJQUFJK0IsMkJBQUosRUFBL0IsQ0FBUDtBQUNIOzs7c0NBRWlCL0IsVyxFQUErRDtBQUM3RSxhQUFPLEtBQUtnQyxVQUFMLENBQWdCaEMsV0FBaEIsRUFBNkIsa0JBQTdCLEVBQWlELElBQUlpQyxzQ0FBSixFQUFqRCxDQUFQO0FBQ0g7Ozs7RUE3QytDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXR1cm5PcmRlciBmcm9tICcuLi9SZXR1cm5PcmRlcic7XG5pbXBvcnQgUmV0dXJuT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXInO1xuaW1wb3J0IFJldHVybk9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JldHVybi9SZXR1cm5PcmRlckxpbmUnO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IFJldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JldHVybi9UcmFuc2Zvcm1lcnMvUmV0dXJuT3JkZXJMaW5lVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXR1cm5PcmRlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcmV0dXJuT3JkZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXR1cm5PcmRlclxuICAgICAqL1xuICAgIG1hcERhdGEocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogUmV0dXJuT3JkZXIge1xuICAgICAgICByZXR1cm4gbmV3IFJldHVybk9yZGVyKHtcbiAgICAgICAgICAgIGlkOiByZXR1cm5PcmRlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcmV0dXJuT3JkZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiByZXR1cm5PcmRlci51cGRhdGVkQXQsXG4gICAgICAgICAgICBzdGF0dXNJZDogcmV0dXJuT3JkZXIuc3RhdHVzSWQsXG4gICAgICAgICAgICBzdWJUb3RhbDogcmV0dXJuT3JkZXIuc3ViVG90YWwsXG4gICAgICAgICAgICBkZWxpdmVyeVRvdGFsOiByZXR1cm5PcmRlci5kZWxpdmVyeVRvdGFsLFxuICAgICAgICAgICAgZGlzY291bnRUb3RhbDogcmV0dXJuT3JkZXIuZGlzY291bnRUb3RhbCxcbiAgICAgICAgICAgIHRheFRvdGFsOiByZXR1cm5PcmRlci50YXhUb3RhbCxcbiAgICAgICAgICAgIG9yZGVyVG90YWw6IHJldHVybk9yZGVyLm9yZGVyVG90YWwsXG4gICAgICAgICAgICBzaGlwcGluZ01ldGhvZDogcmV0dXJuT3JkZXIuc2hpcHBpbmdNZXRob2QsXG4gICAgICAgICAgICBzaGlwcGluZ1ByZWZlcmVuY2U6IHJldHVybk9yZGVyLnNoaXBwaW5nUHJlZmVyZW5jZSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiByZXR1cm5PcmRlci5jdXJyZW5jeSxcbiAgICAgICAgICAgIHZhdE5vOiByZXR1cm5PcmRlci52YXRObyxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogcmV0dXJuT3JkZXIucmVmZXJlbmNlLFxuICAgICAgICAgICAgY29udGFjdEVtYWlsOiByZXR1cm5PcmRlci5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IHJldHVybk9yZGVyLmNvbnRhY3RQaG9uZSxcbiAgICAgICAgICAgIHRyYWNraW5nTnVtYmVyOiByZXR1cm5PcmRlci50cmFja2luZ051bWJlcixcbiAgICAgICAgICAgIGNvbnZlcnNpb246IHJldHVybk9yZGVyLmNvbnZlcnNpb24sXG4gICAgICAgICAgICBtZXRhOiByZXR1cm5PcmRlci5tZXRhLFxuICAgICAgICAgICAgbm90ZXM6IHJldHVybk9yZGVyLm5vdGVzLFxuICAgICAgICAgICAgcGxhY2VkQXQ6IHJldHVybk9yZGVyLnBsYWNlZEF0LFxuICAgICAgICAgICAgZGlzcGF0Y2hlZEF0OiByZXR1cm5PcmRlci5kaXNwYXRjaGVkQXQsXG4gICAgICAgICAgICByZWNlaXZlZEF0OiByZXR1cm5PcmRlci5yZWNlaXZlZEF0LFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiByZXR1cm5PcmRlci5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKHJldHVybk9yZGVyKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICByZXR1cm5PcmRlckxpbmVzOiB0aGlzLmluY2x1ZGVPcmRlckxpbmVzKHJldHVybk9yZGVyKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHJldHVybk9yZGVyLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyTGluZXMocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogUmV0dXJuT3JkZXJMaW5lSW50ZXJmYWNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHJldHVybk9yZGVyLCAncmV0dXJuT3JkZXJMaW5lcycsIG5ldyBSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=