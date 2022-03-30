"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ReturnOrder = _interopRequireDefault(require("../ReturnOrder"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _ReturnOrderLineTransformer = _interopRequireDefault(require("../../return/Transformers/ReturnOrderLineTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ShippingAddonTransformer = _interopRequireDefault(require("../../delivery/Transformers/ShippingAddonTransformer"));

var _ShippingManifestTransformer = _interopRequireDefault(require("../../delivery/Transformers/ShippingManifestTransformer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
    value:
    /**
     * Map an returnOrder response
     *
     * @param returnOrder
     */
    function mapData(returnOrder) {
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
        shippingManifest: this.includeShippingManifest(returnOrder),
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
    key: "includeShippingManifest",
    value: function includeShippingManifest(returnOrder) {
      return this.item(returnOrder, 'shippingManifest', new _ShippingManifestTransformer["default"]());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJyZXR1cm5PcmRlciIsIlJldHVybk9yZGVyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJzdGF0dXNJZCIsInN1YlRvdGFsIiwiZGVsaXZlcnlUb3RhbCIsImRpc2NvdW50VG90YWwiLCJ0YXhUb3RhbCIsIm9yZGVyVG90YWwiLCJzaGlwcGluZ01ldGhvZCIsInNoaXBwaW5nUHJlZmVyZW5jZSIsImN1cnJlbmN5IiwidmF0Tm8iLCJyZWZlcmVuY2UiLCJjb250YWN0RW1haWwiLCJjb250YWN0UGhvbmUiLCJ0cmFja2luZ051bWJlciIsImNvbnZlcnNpb24iLCJtZXRhIiwibm90ZXMiLCJwbGFjZWRBdCIsImRpc3BhdGNoZWRBdCIsInJlY2VpdmVkQXQiLCJwcm9jZXNzZWRBdCIsInJlc291cmNlVHlwZSIsInVzZXIiLCJpbmNsdWRlVXNlciIsInNoaXBwaW5nTWFuaWZlc3QiLCJpbmNsdWRlU2hpcHBpbmdNYW5pZmVzdCIsInNoaXBwaW5nQWRkb25zIiwiaW5jbHVkZVNoaXBwaW5nQWRkb25zIiwicmV0dXJuT3JkZXJMaW5lcyIsImluY2x1ZGVPcmRlckxpbmVzIiwiaXRlbSIsIlVzZXJUcmFuc2Zvcm1lciIsIlNoaXBwaW5nTWFuaWZlc3RUcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciIsIlNoaXBwaW5nQWRkb25UcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsc0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSSxx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RUF6RCtDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXR1cm5PcmRlciBmcm9tICcuLi9SZXR1cm5PcmRlcic7XG5pbXBvcnQgUmV0dXJuT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXInO1xuaW1wb3J0IFJldHVybk9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JldHVybi9SZXR1cm5PcmRlckxpbmUnO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IFJldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JldHVybi9UcmFuc2Zvcm1lcnMvUmV0dXJuT3JkZXJMaW5lVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFNoaXBwaW5nQWRkb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9kZWxpdmVyeS9TaGlwcGluZ0FkZG9uJztcbmltcG9ydCBTaGlwcGluZ0FkZG9uVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1NoaXBwaW5nQWRkb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgU2hpcHBpbmdNYW5pZmVzdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2RlbGl2ZXJ5L1RyYW5zZm9ybWVycy9TaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFNoaXBwaW5nTWFuaWZlc3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9kZWxpdmVyeS9TaGlwcGluZ01hbmlmZXN0SW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV0dXJuT3JkZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHJldHVybk9yZGVyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmV0dXJuT3JkZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKHJldHVybk9yZGVyOiBSZXR1cm5PcmRlckludGVyZmFjZSk6IFJldHVybk9yZGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXR1cm5PcmRlcih7XG4gICAgICAgICAgICBpZDogcmV0dXJuT3JkZXIuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHJldHVybk9yZGVyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcmV0dXJuT3JkZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHJldHVybk9yZGVyLnN0YXR1c0lkLFxuICAgICAgICAgICAgc3ViVG90YWw6IHJldHVybk9yZGVyLnN1YlRvdGFsLFxuICAgICAgICAgICAgZGVsaXZlcnlUb3RhbDogcmV0dXJuT3JkZXIuZGVsaXZlcnlUb3RhbCxcbiAgICAgICAgICAgIGRpc2NvdW50VG90YWw6IHJldHVybk9yZGVyLmRpc2NvdW50VG90YWwsXG4gICAgICAgICAgICB0YXhUb3RhbDogcmV0dXJuT3JkZXIudGF4VG90YWwsXG4gICAgICAgICAgICBvcmRlclRvdGFsOiByZXR1cm5PcmRlci5vcmRlclRvdGFsLFxuICAgICAgICAgICAgc2hpcHBpbmdNZXRob2Q6IHJldHVybk9yZGVyLnNoaXBwaW5nTWV0aG9kLFxuICAgICAgICAgICAgc2hpcHBpbmdQcmVmZXJlbmNlOiByZXR1cm5PcmRlci5zaGlwcGluZ1ByZWZlcmVuY2UsXG4gICAgICAgICAgICBjdXJyZW5jeTogcmV0dXJuT3JkZXIuY3VycmVuY3ksXG4gICAgICAgICAgICB2YXRObzogcmV0dXJuT3JkZXIudmF0Tm8sXG4gICAgICAgICAgICByZWZlcmVuY2U6IHJldHVybk9yZGVyLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGNvbnRhY3RFbWFpbDogcmV0dXJuT3JkZXIuY29udGFjdEVtYWlsLFxuICAgICAgICAgICAgY29udGFjdFBob25lOiByZXR1cm5PcmRlci5jb250YWN0UGhvbmUsXG4gICAgICAgICAgICB0cmFja2luZ051bWJlcjogcmV0dXJuT3JkZXIudHJhY2tpbmdOdW1iZXIsXG4gICAgICAgICAgICBjb252ZXJzaW9uOiByZXR1cm5PcmRlci5jb252ZXJzaW9uLFxuICAgICAgICAgICAgbWV0YTogcmV0dXJuT3JkZXIubWV0YSxcbiAgICAgICAgICAgIG5vdGVzOiByZXR1cm5PcmRlci5ub3RlcyxcbiAgICAgICAgICAgIHBsYWNlZEF0OiByZXR1cm5PcmRlci5wbGFjZWRBdCxcbiAgICAgICAgICAgIGRpc3BhdGNoZWRBdDogcmV0dXJuT3JkZXIuZGlzcGF0Y2hlZEF0LFxuICAgICAgICAgICAgcmVjZWl2ZWRBdDogcmV0dXJuT3JkZXIucmVjZWl2ZWRBdCxcbiAgICAgICAgICAgIHByb2Nlc3NlZEF0OiByZXR1cm5PcmRlci5wcm9jZXNzZWRBdCxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogcmV0dXJuT3JkZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgdXNlcjogdGhpcy5pbmNsdWRlVXNlcihyZXR1cm5PcmRlciksXG4gICAgICAgICAgICBzaGlwcGluZ01hbmlmZXN0OiB0aGlzLmluY2x1ZGVTaGlwcGluZ01hbmlmZXN0KHJldHVybk9yZGVyKSxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG8gbWFueVxuICAgICAgICAgICAgc2hpcHBpbmdBZGRvbnM6IHRoaXMuaW5jbHVkZVNoaXBwaW5nQWRkb25zKHJldHVybk9yZGVyKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICByZXR1cm5PcmRlckxpbmVzOiB0aGlzLmluY2x1ZGVPcmRlckxpbmVzKHJldHVybk9yZGVyKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHJldHVybk9yZGVyLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVNoaXBwaW5nTWFuaWZlc3QocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogU2hpcHBpbmdNYW5pZmVzdEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHJldHVybk9yZGVyLCAnc2hpcHBpbmdNYW5pZmVzdCcsIG5ldyBTaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVyTGluZXMocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogUmV0dXJuT3JkZXJMaW5lSW50ZXJmYWNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHJldHVybk9yZGVyLCAncmV0dXJuT3JkZXJMaW5lcycsIG5ldyBSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU2hpcHBpbmdBZGRvbnMocmV0dXJuT3JkZXI6IFJldHVybk9yZGVySW50ZXJmYWNlKTogU2hpcHBpbmdBZGRvbkludGVyZmFjZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihyZXR1cm5PcmRlciwgJ3NoaXBwaW5nQWRkb25zJywgbmV3IFNoaXBwaW5nQWRkb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=