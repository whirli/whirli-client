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
        returnOrderLines: this.includeOrderLines(returnOrder.returnOrderLines || [])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJyZXR1cm5PcmRlciIsIlJldHVybk9yZGVyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJzdGF0dXNJZCIsInN1YlRvdGFsIiwiZGVsaXZlcnlUb3RhbCIsImRpc2NvdW50VG90YWwiLCJ0YXhUb3RhbCIsIm9yZGVyVG90YWwiLCJzaGlwcGluZ01ldGhvZCIsInNoaXBwaW5nUHJlZmVyZW5jZSIsImN1cnJlbmN5IiwidmF0Tm8iLCJyZWZlcmVuY2UiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJ0cmFja2luZ051bWJlciIsImNvbnZlcnNpb24iLCJtZXRhIiwibm90ZXMiLCJwbGFjZWRBdCIsImRpc3BhdGNoZWRBdCIsInJlY2VpdmVkQXQiLCJyZXNvdXJjZVR5cGUiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJyZXR1cm5PcmRlckxpbmVzIiwiaW5jbHVkZU9yZGVyTGluZXMiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlJldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHNCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFcsRUFBZ0Q7QUFDcEQsYUFBTyxJQUFJQyx1QkFBSixDQUFnQjtBQUNuQkMsUUFBQUEsRUFBRSxFQUFFRixXQUFXLENBQUNFLEVBREc7QUFFbkJDLFFBQUFBLFNBQVMsRUFBRUgsV0FBVyxDQUFDRyxTQUZKO0FBR25CQyxRQUFBQSxTQUFTLEVBQUVKLFdBQVcsQ0FBQ0ksU0FISjtBQUluQkMsUUFBQUEsUUFBUSxFQUFFTCxXQUFXLENBQUNLLFFBSkg7QUFLbkJDLFFBQUFBLFFBQVEsRUFBRU4sV0FBVyxDQUFDTSxRQUxIO0FBTW5CQyxRQUFBQSxhQUFhLEVBQUVQLFdBQVcsQ0FBQ08sYUFOUjtBQU9uQkMsUUFBQUEsYUFBYSxFQUFFUixXQUFXLENBQUNRLGFBUFI7QUFRbkJDLFFBQUFBLFFBQVEsRUFBRVQsV0FBVyxDQUFDUyxRQVJIO0FBU25CQyxRQUFBQSxVQUFVLEVBQUVWLFdBQVcsQ0FBQ1UsVUFUTDtBQVVuQkMsUUFBQUEsY0FBYyxFQUFFWCxXQUFXLENBQUNXLGNBVlQ7QUFXbkJDLFFBQUFBLGtCQUFrQixFQUFFWixXQUFXLENBQUNZLGtCQVhiO0FBWW5CQyxRQUFBQSxRQUFRLEVBQUViLFdBQVcsQ0FBQ2EsUUFaSDtBQWFuQkMsUUFBQUEsS0FBSyxFQUFFZCxXQUFXLENBQUNjLEtBYkE7QUFjbkJDLFFBQUFBLFNBQVMsRUFBRWYsV0FBVyxDQUFDZSxTQWRKO0FBZW5CQyxRQUFBQSxZQUFZLEVBQUVoQixXQUFXLENBQUNnQixZQWZQO0FBZ0JuQkMsUUFBQUEsWUFBWSxFQUFFakIsV0FBVyxDQUFDaUIsWUFoQlA7QUFpQm5CQyxRQUFBQSxjQUFjLEVBQUVsQixXQUFXLENBQUNrQixjQWpCVDtBQWtCbkJDLFFBQUFBLFVBQVUsRUFBRW5CLFdBQVcsQ0FBQ21CLFVBbEJMO0FBbUJuQkMsUUFBQUEsSUFBSSxFQUFFcEIsV0FBVyxDQUFDb0IsSUFuQkM7QUFvQm5CQyxRQUFBQSxLQUFLLEVBQUVyQixXQUFXLENBQUNxQixLQXBCQTtBQXFCbkJDLFFBQUFBLFFBQVEsRUFBRXRCLFdBQVcsQ0FBQ3NCLFFBckJIO0FBc0JuQkMsUUFBQUEsWUFBWSxFQUFFdkIsV0FBVyxDQUFDdUIsWUF0QlA7QUF1Qm5CQyxRQUFBQSxVQUFVLEVBQUV4QixXQUFXLENBQUN3QixVQXZCTDtBQXdCbkJDLFFBQUFBLFlBQVksRUFBRXpCLFdBQVcsQ0FBQ3lCLFlBeEJQO0FBeUJuQjtBQUNBQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQjNCLFdBQWpCLENBMUJhO0FBMkJuQjtBQUNBNEIsUUFBQUEsZ0JBQWdCLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUI3QixXQUFXLENBQUM0QixnQkFBWixJQUFnQyxFQUF2RDtBQTVCQyxPQUFoQixDQUFQO0FBOEJIOzs7Z0NBRVc1QixXLEVBQXlEO0FBQ2pFLGFBQU8sS0FBSzhCLElBQUwsQ0FBVTlCLFdBQVYsRUFBdUIsTUFBdkIsRUFBK0IsSUFBSStCLDJCQUFKLEVBQS9CLENBQVA7QUFDSDs7O3NDQUVpQi9CLFcsRUFBaUU7QUFDL0UsYUFBTyxLQUFLZ0MsVUFBTCxDQUFnQmhDLFdBQWhCLEVBQTZCLGtCQUE3QixFQUFpRCxJQUFJaUMsc0NBQUosRUFBakQsQ0FBUDtBQUNIOzs7O0VBN0MrQ0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmV0dXJuT3JkZXIgZnJvbSAnLi4vUmV0dXJuT3JkZXInO1xuaW1wb3J0IFJldHVybk9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV0dXJuL1JldHVybk9yZGVyJztcbmltcG9ydCBSZXR1cm5PcmRlckxpbmVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXJMaW5lJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yZXR1cm4vVHJhbnNmb3JtZXJzL1JldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV0dXJuT3JkZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHJldHVybk9yZGVyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmV0dXJuT3JkZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKHJldHVybk9yZGVyOiBSZXR1cm5PcmRlckludGVyZmFjZSk6IFJldHVybk9yZGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXR1cm5PcmRlcih7XG4gICAgICAgICAgICBpZDogcmV0dXJuT3JkZXIuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHJldHVybk9yZGVyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcmV0dXJuT3JkZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHJldHVybk9yZGVyLnN0YXR1c0lkLFxuICAgICAgICAgICAgc3ViVG90YWw6IHJldHVybk9yZGVyLnN1YlRvdGFsLFxuICAgICAgICAgICAgZGVsaXZlcnlUb3RhbDogcmV0dXJuT3JkZXIuZGVsaXZlcnlUb3RhbCxcbiAgICAgICAgICAgIGRpc2NvdW50VG90YWw6IHJldHVybk9yZGVyLmRpc2NvdW50VG90YWwsXG4gICAgICAgICAgICB0YXhUb3RhbDogcmV0dXJuT3JkZXIudGF4VG90YWwsXG4gICAgICAgICAgICBvcmRlclRvdGFsOiByZXR1cm5PcmRlci5vcmRlclRvdGFsLFxuICAgICAgICAgICAgc2hpcHBpbmdNZXRob2Q6IHJldHVybk9yZGVyLnNoaXBwaW5nTWV0aG9kLFxuICAgICAgICAgICAgc2hpcHBpbmdQcmVmZXJlbmNlOiByZXR1cm5PcmRlci5zaGlwcGluZ1ByZWZlcmVuY2UsXG4gICAgICAgICAgICBjdXJyZW5jeTogcmV0dXJuT3JkZXIuY3VycmVuY3ksXG4gICAgICAgICAgICB2YXRObzogcmV0dXJuT3JkZXIudmF0Tm8sXG4gICAgICAgICAgICByZWZlcmVuY2U6IHJldHVybk9yZGVyLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGNvbnRhY3RFbWFpbDogcmV0dXJuT3JkZXIuY29udGFjdEVtYWlsLFxuICAgICAgICAgICAgY29udGFjdFBob25lOiByZXR1cm5PcmRlci5jb250YWN0UGhvbmUsXG4gICAgICAgICAgICB0cmFja2luZ051bWJlcjogcmV0dXJuT3JkZXIudHJhY2tpbmdOdW1iZXIsXG4gICAgICAgICAgICBjb252ZXJzaW9uOiByZXR1cm5PcmRlci5jb252ZXJzaW9uLFxuICAgICAgICAgICAgbWV0YTogcmV0dXJuT3JkZXIubWV0YSxcbiAgICAgICAgICAgIG5vdGVzOiByZXR1cm5PcmRlci5ub3RlcyxcbiAgICAgICAgICAgIHBsYWNlZEF0OiByZXR1cm5PcmRlci5wbGFjZWRBdCxcbiAgICAgICAgICAgIGRpc3BhdGNoZWRBdDogcmV0dXJuT3JkZXIuZGlzcGF0Y2hlZEF0LFxuICAgICAgICAgICAgcmVjZWl2ZWRBdDogcmV0dXJuT3JkZXIucmVjZWl2ZWRBdCxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogcmV0dXJuT3JkZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgdXNlcjogdGhpcy5pbmNsdWRlVXNlcihyZXR1cm5PcmRlciksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcmV0dXJuT3JkZXJMaW5lczogdGhpcy5pbmNsdWRlT3JkZXJMaW5lcyhyZXR1cm5PcmRlci5yZXR1cm5PcmRlckxpbmVzIHx8IFtdKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHJldHVybk9yZGVyLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyTGluZXMocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlW10pOiBSZXR1cm5PcmRlckxpbmVJbnRlcmZhY2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocmV0dXJuT3JkZXIsICdyZXR1cm5PcmRlckxpbmVzJywgbmV3IFJldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==