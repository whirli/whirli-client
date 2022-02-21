"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ReturnOrder = _interopRequireDefault(require("../ReturnOrder"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _ReturnOrderLineTransformer = _interopRequireDefault(require("../../return/Transformers/ReturnOrderLineTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ShippingAddonTransformer = _interopRequireDefault(require("../../delivery/Transformers/ShippingAddonTransformer"));

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
        processedAt: returnOrder.processedAt,
        resourceType: returnOrder.resourceType,
        // belongs to
        user: this.includeUser(returnOrder),
        // belongs to many
        shippingAddons: this.includeShippingAddons(returnOrder),
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
  }, {
    key: "includeShippingAddons",
    value: function includeShippingAddons(returnOrder) {
      return this.collection(returnOrder, 'shippingAddons', new _ShippingAddonTransformer["default"]());
    }
  }]);

  return ReturnOrderTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ReturnOrderTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJyZXR1cm5PcmRlciIsIlJldHVybk9yZGVyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJzdGF0dXNJZCIsInN1YlRvdGFsIiwiZGVsaXZlcnlUb3RhbCIsImRpc2NvdW50VG90YWwiLCJ0YXhUb3RhbCIsIm9yZGVyVG90YWwiLCJzaGlwcGluZ01ldGhvZCIsInNoaXBwaW5nUHJlZmVyZW5jZSIsImN1cnJlbmN5IiwidmF0Tm8iLCJyZWZlcmVuY2UiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJ0cmFja2luZ051bWJlciIsImNvbnZlcnNpb24iLCJtZXRhIiwibm90ZXMiLCJwbGFjZWRBdCIsImRpc3BhdGNoZWRBdCIsInJlY2VpdmVkQXQiLCJwcm9jZXNzZWRBdCIsInJlc291cmNlVHlwZSIsInVzZXIiLCJpbmNsdWRlVXNlciIsInNoaXBwaW5nQWRkb25zIiwiaW5jbHVkZVNoaXBwaW5nQWRkb25zIiwicmV0dXJuT3JkZXJMaW5lcyIsImluY2x1ZGVPcmRlckxpbmVzIiwiaXRlbSIsIlVzZXJUcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciIsIlNoaXBwaW5nQWRkb25UcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxzQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxXLEVBQWdEO0FBQ3BELGFBQU8sSUFBSUMsdUJBQUosQ0FBZ0I7QUFDbkJDLFFBQUFBLEVBQUUsRUFBRUYsV0FBVyxDQUFDRSxFQURHO0FBRW5CQyxRQUFBQSxTQUFTLEVBQUVILFdBQVcsQ0FBQ0csU0FGSjtBQUduQkMsUUFBQUEsU0FBUyxFQUFFSixXQUFXLENBQUNJLFNBSEo7QUFJbkJDLFFBQUFBLFFBQVEsRUFBRUwsV0FBVyxDQUFDSyxRQUpIO0FBS25CQyxRQUFBQSxRQUFRLEVBQUVOLFdBQVcsQ0FBQ00sUUFMSDtBQU1uQkMsUUFBQUEsYUFBYSxFQUFFUCxXQUFXLENBQUNPLGFBTlI7QUFPbkJDLFFBQUFBLGFBQWEsRUFBRVIsV0FBVyxDQUFDUSxhQVBSO0FBUW5CQyxRQUFBQSxRQUFRLEVBQUVULFdBQVcsQ0FBQ1MsUUFSSDtBQVNuQkMsUUFBQUEsVUFBVSxFQUFFVixXQUFXLENBQUNVLFVBVEw7QUFVbkJDLFFBQUFBLGNBQWMsRUFBRVgsV0FBVyxDQUFDVyxjQVZUO0FBV25CQyxRQUFBQSxrQkFBa0IsRUFBRVosV0FBVyxDQUFDWSxrQkFYYjtBQVluQkMsUUFBQUEsUUFBUSxFQUFFYixXQUFXLENBQUNhLFFBWkg7QUFhbkJDLFFBQUFBLEtBQUssRUFBRWQsV0FBVyxDQUFDYyxLQWJBO0FBY25CQyxRQUFBQSxTQUFTLEVBQUVmLFdBQVcsQ0FBQ2UsU0FkSjtBQWVuQkMsUUFBQUEsWUFBWSxFQUFFaEIsV0FBVyxDQUFDZ0IsWUFmUDtBQWdCbkJDLFFBQUFBLFlBQVksRUFBRWpCLFdBQVcsQ0FBQ2lCLFlBaEJQO0FBaUJuQkMsUUFBQUEsY0FBYyxFQUFFbEIsV0FBVyxDQUFDa0IsY0FqQlQ7QUFrQm5CQyxRQUFBQSxVQUFVLEVBQUVuQixXQUFXLENBQUNtQixVQWxCTDtBQW1CbkJDLFFBQUFBLElBQUksRUFBRXBCLFdBQVcsQ0FBQ29CLElBbkJDO0FBb0JuQkMsUUFBQUEsS0FBSyxFQUFFckIsV0FBVyxDQUFDcUIsS0FwQkE7QUFxQm5CQyxRQUFBQSxRQUFRLEVBQUV0QixXQUFXLENBQUNzQixRQXJCSDtBQXNCbkJDLFFBQUFBLFlBQVksRUFBRXZCLFdBQVcsQ0FBQ3VCLFlBdEJQO0FBdUJuQkMsUUFBQUEsVUFBVSxFQUFFeEIsV0FBVyxDQUFDd0IsVUF2Qkw7QUF3Qm5CQyxRQUFBQSxXQUFXLEVBQUV6QixXQUFXLENBQUN5QixXQXhCTjtBQXlCbkJDLFFBQUFBLFlBQVksRUFBRTFCLFdBQVcsQ0FBQzBCLFlBekJQO0FBMEJuQjtBQUNBQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQjVCLFdBQWpCLENBM0JhO0FBNEJuQjtBQUNBNkIsUUFBQUEsY0FBYyxFQUFFLEtBQUtDLHFCQUFMLENBQTJCOUIsV0FBM0IsQ0E3Qkc7QUE4Qm5CO0FBQ0ErQixRQUFBQSxnQkFBZ0IsRUFBRSxLQUFLQyxpQkFBTCxDQUF1QmhDLFdBQXZCO0FBL0JDLE9BQWhCLENBQVA7QUFpQ0g7OztnQ0FFV0EsVyxFQUF5RDtBQUNqRSxhQUFPLEtBQUtpQyxJQUFMLENBQVVqQyxXQUFWLEVBQXVCLE1BQXZCLEVBQStCLElBQUlrQywyQkFBSixFQUEvQixDQUFQO0FBQ0g7OztzQ0FFaUJsQyxXLEVBQStEO0FBQzdFLGFBQU8sS0FBS21DLFVBQUwsQ0FBZ0JuQyxXQUFoQixFQUE2QixrQkFBN0IsRUFBaUQsSUFBSW9DLHNDQUFKLEVBQWpELENBQVA7QUFDSDs7OzBDQUVxQnBDLFcsRUFBNkQ7QUFDL0UsYUFBTyxLQUFLbUMsVUFBTCxDQUFnQm5DLFdBQWhCLEVBQTZCLGdCQUE3QixFQUErQyxJQUFJcUMsb0NBQUosRUFBL0MsQ0FBUDtBQUNIOzs7O0VBcEQrQ0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmV0dXJuT3JkZXIgZnJvbSAnLi4vUmV0dXJuT3JkZXInO1xuaW1wb3J0IFJldHVybk9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV0dXJuL1JldHVybk9yZGVyJztcbmltcG9ydCBSZXR1cm5PcmRlckxpbmVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXJMaW5lJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yZXR1cm4vVHJhbnNmb3JtZXJzL1JldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBTaGlwcGluZ0FkZG9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZGVsaXZlcnkvU2hpcHBpbmdBZGRvbic7XG5pbXBvcnQgU2hpcHBpbmdBZGRvblRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2RlbGl2ZXJ5L1RyYW5zZm9ybWVycy9TaGlwcGluZ0FkZG9uVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXR1cm5PcmRlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcmV0dXJuT3JkZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXR1cm5PcmRlclxuICAgICAqL1xuICAgIG1hcERhdGEocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogUmV0dXJuT3JkZXIge1xuICAgICAgICByZXR1cm4gbmV3IFJldHVybk9yZGVyKHtcbiAgICAgICAgICAgIGlkOiByZXR1cm5PcmRlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcmV0dXJuT3JkZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiByZXR1cm5PcmRlci51cGRhdGVkQXQsXG4gICAgICAgICAgICBzdGF0dXNJZDogcmV0dXJuT3JkZXIuc3RhdHVzSWQsXG4gICAgICAgICAgICBzdWJUb3RhbDogcmV0dXJuT3JkZXIuc3ViVG90YWwsXG4gICAgICAgICAgICBkZWxpdmVyeVRvdGFsOiByZXR1cm5PcmRlci5kZWxpdmVyeVRvdGFsLFxuICAgICAgICAgICAgZGlzY291bnRUb3RhbDogcmV0dXJuT3JkZXIuZGlzY291bnRUb3RhbCxcbiAgICAgICAgICAgIHRheFRvdGFsOiByZXR1cm5PcmRlci50YXhUb3RhbCxcbiAgICAgICAgICAgIG9yZGVyVG90YWw6IHJldHVybk9yZGVyLm9yZGVyVG90YWwsXG4gICAgICAgICAgICBzaGlwcGluZ01ldGhvZDogcmV0dXJuT3JkZXIuc2hpcHBpbmdNZXRob2QsXG4gICAgICAgICAgICBzaGlwcGluZ1ByZWZlcmVuY2U6IHJldHVybk9yZGVyLnNoaXBwaW5nUHJlZmVyZW5jZSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiByZXR1cm5PcmRlci5jdXJyZW5jeSxcbiAgICAgICAgICAgIHZhdE5vOiByZXR1cm5PcmRlci52YXRObyxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogcmV0dXJuT3JkZXIucmVmZXJlbmNlLFxuICAgICAgICAgICAgY29udGFjdEVtYWlsOiByZXR1cm5PcmRlci5jb250YWN0RW1haWwsXG4gICAgICAgICAgICBjb250YWN0UGhvbmU6IHJldHVybk9yZGVyLmNvbnRhY3RQaG9uZSxcbiAgICAgICAgICAgIHRyYWNraW5nTnVtYmVyOiByZXR1cm5PcmRlci50cmFja2luZ051bWJlcixcbiAgICAgICAgICAgIGNvbnZlcnNpb246IHJldHVybk9yZGVyLmNvbnZlcnNpb24sXG4gICAgICAgICAgICBtZXRhOiByZXR1cm5PcmRlci5tZXRhLFxuICAgICAgICAgICAgbm90ZXM6IHJldHVybk9yZGVyLm5vdGVzLFxuICAgICAgICAgICAgcGxhY2VkQXQ6IHJldHVybk9yZGVyLnBsYWNlZEF0LFxuICAgICAgICAgICAgZGlzcGF0Y2hlZEF0OiByZXR1cm5PcmRlci5kaXNwYXRjaGVkQXQsXG4gICAgICAgICAgICByZWNlaXZlZEF0OiByZXR1cm5PcmRlci5yZWNlaXZlZEF0LFxuICAgICAgICAgICAgcHJvY2Vzc2VkQXQ6IHJldHVybk9yZGVyLnByb2Nlc3NlZEF0LFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiByZXR1cm5PcmRlci5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKHJldHVybk9yZGVyKSxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG8gbWFueVxuICAgICAgICAgICAgc2hpcHBpbmdBZGRvbnM6IHRoaXMuaW5jbHVkZVNoaXBwaW5nQWRkb25zKHJldHVybk9yZGVyKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICByZXR1cm5PcmRlckxpbmVzOiB0aGlzLmluY2x1ZGVPcmRlckxpbmVzKHJldHVybk9yZGVyKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHJldHVybk9yZGVyLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyTGluZXMocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogUmV0dXJuT3JkZXJMaW5lSW50ZXJmYWNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHJldHVybk9yZGVyLCAncmV0dXJuT3JkZXJMaW5lcycsIG5ldyBSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU2hpcHBpbmdBZGRvbnMocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogU2hpcHBpbmdBZGRvbkludGVyZmFjZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihyZXR1cm5PcmRlciwgJ3NoaXBwaW5nQWRkb25zJywgbmV3IFNoaXBwaW5nQWRkb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=