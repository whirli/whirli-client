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

var ReturnOrderTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ReturnOrderTransformer, _BaseTransformer);

  var _super = _createSuper(ReturnOrderTransformer);

  function ReturnOrderTransformer() {
    _classCallCheck(this, ReturnOrderTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJyZXR1cm5PcmRlciIsIlJldHVybk9yZGVyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJzdGF0dXNJZCIsInN1YlRvdGFsIiwiZGVsaXZlcnlUb3RhbCIsImRpc2NvdW50VG90YWwiLCJ0YXhUb3RhbCIsIm9yZGVyVG90YWwiLCJzaGlwcGluZ01ldGhvZCIsInNoaXBwaW5nUHJlZmVyZW5jZSIsImN1cnJlbmN5IiwidmF0Tm8iLCJyZWZlcmVuY2UiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJ0cmFja2luZ051bWJlciIsImNvbnZlcnNpb24iLCJtZXRhIiwibm90ZXMiLCJwbGFjZWRBdCIsImRpc3BhdGNoZWRBdCIsInJlY2VpdmVkQXQiLCJyZXNvdXJjZVR5cGUiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJyZXR1cm5PcmRlckxpbmVzIiwiaW5jbHVkZU9yZGVyTGluZXMiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlJldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxzQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTs0QkFDWUMsVyxFQUFnRDtBQUNwRCxhQUFPLElBQUlDLHVCQUFKLENBQWdCO0FBQ25CQyxRQUFBQSxFQUFFLEVBQUVGLFdBQVcsQ0FBQ0UsRUFERztBQUVuQkMsUUFBQUEsU0FBUyxFQUFFSCxXQUFXLENBQUNHLFNBRko7QUFHbkJDLFFBQUFBLFNBQVMsRUFBRUosV0FBVyxDQUFDSSxTQUhKO0FBSW5CQyxRQUFBQSxRQUFRLEVBQUVMLFdBQVcsQ0FBQ0ssUUFKSDtBQUtuQkMsUUFBQUEsUUFBUSxFQUFFTixXQUFXLENBQUNNLFFBTEg7QUFNbkJDLFFBQUFBLGFBQWEsRUFBRVAsV0FBVyxDQUFDTyxhQU5SO0FBT25CQyxRQUFBQSxhQUFhLEVBQUVSLFdBQVcsQ0FBQ1EsYUFQUjtBQVFuQkMsUUFBQUEsUUFBUSxFQUFFVCxXQUFXLENBQUNTLFFBUkg7QUFTbkJDLFFBQUFBLFVBQVUsRUFBRVYsV0FBVyxDQUFDVSxVQVRMO0FBVW5CQyxRQUFBQSxjQUFjLEVBQUVYLFdBQVcsQ0FBQ1csY0FWVDtBQVduQkMsUUFBQUEsa0JBQWtCLEVBQUVaLFdBQVcsQ0FBQ1ksa0JBWGI7QUFZbkJDLFFBQUFBLFFBQVEsRUFBRWIsV0FBVyxDQUFDYSxRQVpIO0FBYW5CQyxRQUFBQSxLQUFLLEVBQUVkLFdBQVcsQ0FBQ2MsS0FiQTtBQWNuQkMsUUFBQUEsU0FBUyxFQUFFZixXQUFXLENBQUNlLFNBZEo7QUFlbkJDLFFBQUFBLFlBQVksRUFBRWhCLFdBQVcsQ0FBQ2dCLFlBZlA7QUFnQm5CQyxRQUFBQSxZQUFZLEVBQUVqQixXQUFXLENBQUNpQixZQWhCUDtBQWlCbkJDLFFBQUFBLGNBQWMsRUFBRWxCLFdBQVcsQ0FBQ2tCLGNBakJUO0FBa0JuQkMsUUFBQUEsVUFBVSxFQUFFbkIsV0FBVyxDQUFDbUIsVUFsQkw7QUFtQm5CQyxRQUFBQSxJQUFJLEVBQUVwQixXQUFXLENBQUNvQixJQW5CQztBQW9CbkJDLFFBQUFBLEtBQUssRUFBRXJCLFdBQVcsQ0FBQ3FCLEtBcEJBO0FBcUJuQkMsUUFBQUEsUUFBUSxFQUFFdEIsV0FBVyxDQUFDc0IsUUFyQkg7QUFzQm5CQyxRQUFBQSxZQUFZLEVBQUV2QixXQUFXLENBQUN1QixZQXRCUDtBQXVCbkJDLFFBQUFBLFVBQVUsRUFBRXhCLFdBQVcsQ0FBQ3dCLFVBdkJMO0FBd0JuQkMsUUFBQUEsWUFBWSxFQUFFekIsV0FBVyxDQUFDeUIsWUF4QlA7QUF5Qm5CO0FBQ0FDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCM0IsV0FBakIsQ0ExQmE7QUEyQm5CO0FBQ0E0QixRQUFBQSxnQkFBZ0IsRUFBRSxLQUFLQyxpQkFBTCxDQUF1QjdCLFdBQXZCO0FBNUJDLE9BQWhCLENBQVA7QUE4Qkg7OztnQ0FFV0EsVyxFQUF5RDtBQUNqRSxhQUFPLEtBQUs4QixJQUFMLENBQVU5QixXQUFWLEVBQXVCLE1BQXZCLEVBQStCLElBQUkrQiwyQkFBSixFQUEvQixDQUFQO0FBQ0g7OztzQ0FFaUIvQixXLEVBQStEO0FBQzdFLGFBQU8sS0FBS2dDLFVBQUwsQ0FBZ0JoQyxXQUFoQixFQUE2QixrQkFBN0IsRUFBaUQsSUFBSWlDLHNDQUFKLEVBQWpELENBQVA7QUFDSDs7OztFQTdDK0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJldHVybk9yZGVyIGZyb20gJy4uL1JldHVybk9yZGVyJztcbmltcG9ydCBSZXR1cm5PcmRlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JldHVybi9SZXR1cm5PcmRlcic7XG5pbXBvcnQgUmV0dXJuT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV0dXJuL1JldHVybk9yZGVyTGluZSc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUmV0dXJuT3JkZXJMaW5lVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldHVybk9yZGVyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiByZXR1cm5PcmRlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJldHVybk9yZGVyXG4gICAgICovXG4gICAgbWFwRGF0YShyZXR1cm5PcmRlcjogUmV0dXJuT3JkZXJJbnRlcmZhY2UpOiBSZXR1cm5PcmRlciB7XG4gICAgICAgIHJldHVybiBuZXcgUmV0dXJuT3JkZXIoe1xuICAgICAgICAgICAgaWQ6IHJldHVybk9yZGVyLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiByZXR1cm5PcmRlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHJldHVybk9yZGVyLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiByZXR1cm5PcmRlci5zdGF0dXNJZCxcbiAgICAgICAgICAgIHN1YlRvdGFsOiByZXR1cm5PcmRlci5zdWJUb3RhbCxcbiAgICAgICAgICAgIGRlbGl2ZXJ5VG90YWw6IHJldHVybk9yZGVyLmRlbGl2ZXJ5VG90YWwsXG4gICAgICAgICAgICBkaXNjb3VudFRvdGFsOiByZXR1cm5PcmRlci5kaXNjb3VudFRvdGFsLFxuICAgICAgICAgICAgdGF4VG90YWw6IHJldHVybk9yZGVyLnRheFRvdGFsLFxuICAgICAgICAgICAgb3JkZXJUb3RhbDogcmV0dXJuT3JkZXIub3JkZXJUb3RhbCxcbiAgICAgICAgICAgIHNoaXBwaW5nTWV0aG9kOiByZXR1cm5PcmRlci5zaGlwcGluZ01ldGhvZCxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJlZmVyZW5jZTogcmV0dXJuT3JkZXIuc2hpcHBpbmdQcmVmZXJlbmNlLFxuICAgICAgICAgICAgY3VycmVuY3k6IHJldHVybk9yZGVyLmN1cnJlbmN5LFxuICAgICAgICAgICAgdmF0Tm86IHJldHVybk9yZGVyLnZhdE5vLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiByZXR1cm5PcmRlci5yZWZlcmVuY2UsXG4gICAgICAgICAgICBjb250YWN0RW1haWw6IHJldHVybk9yZGVyLmNvbnRhY3RFbWFpbCxcbiAgICAgICAgICAgIGNvbnRhY3RQaG9uZTogcmV0dXJuT3JkZXIuY29udGFjdFBob25lLFxuICAgICAgICAgICAgdHJhY2tpbmdOdW1iZXI6IHJldHVybk9yZGVyLnRyYWNraW5nTnVtYmVyLFxuICAgICAgICAgICAgY29udmVyc2lvbjogcmV0dXJuT3JkZXIuY29udmVyc2lvbixcbiAgICAgICAgICAgIG1ldGE6IHJldHVybk9yZGVyLm1ldGEsXG4gICAgICAgICAgICBub3RlczogcmV0dXJuT3JkZXIubm90ZXMsXG4gICAgICAgICAgICBwbGFjZWRBdDogcmV0dXJuT3JkZXIucGxhY2VkQXQsXG4gICAgICAgICAgICBkaXNwYXRjaGVkQXQ6IHJldHVybk9yZGVyLmRpc3BhdGNoZWRBdCxcbiAgICAgICAgICAgIHJlY2VpdmVkQXQ6IHJldHVybk9yZGVyLnJlY2VpdmVkQXQsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHJldHVybk9yZGVyLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIocmV0dXJuT3JkZXIpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIHJldHVybk9yZGVyTGluZXM6IHRoaXMuaW5jbHVkZU9yZGVyTGluZXMocmV0dXJuT3JkZXIpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihyZXR1cm5PcmRlcjogUmV0dXJuT3JkZXJJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocmV0dXJuT3JkZXIsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJMaW5lcyhyZXR1cm5PcmRlcjogUmV0dXJuT3JkZXJJbnRlcmZhY2UpOiBSZXR1cm5PcmRlckxpbmVJbnRlcmZhY2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocmV0dXJuT3JkZXIsICdyZXR1cm5PcmRlckxpbmVzJywgbmV3IFJldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==