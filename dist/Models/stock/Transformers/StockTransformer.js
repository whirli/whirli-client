"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Stock = _interopRequireDefault(require("../Stock"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

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

var StockTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(StockTransformer, _BaseTransformer);

  function StockTransformer() {
    _classCallCheck(this, StockTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(StockTransformer).apply(this, arguments));
  }

  _createClass(StockTransformer, [{
    key: "mapData",

    /**
     * Map an stock response
     *
     * @param stock
     */
    value: function mapData(stock) {
      return new _Stock["default"]({
        id: stock.id,
        createdAt: stock.createdAt,
        updatedAt: stock.updatedAt,
        statusId: stock.statusId,
        // belongs to
        productVariant: this.includeProductVariant(stock),
        user: this.includeUser(stock),
        // has many
        returnOrderLines: this.includeReturnOrderLines(stock.returnOrderLines || [])
      });
    }
  }, {
    key: "includeProductVariant",
    value: function includeProductVariant(stock) {
      return this.item(stock, 'productVariant', new _ProductVariantTransformer["default"]());
    }
  }, {
    key: "includeUser",
    value: function includeUser(stock) {
      return this.item(stock, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeReturnOrderLines",
    value: function includeReturnOrderLines(stock) {
      return this.collection(stock, 'returnOrderLines', new _ReturnOrderLineTransformer["default"]());
    }
  }]);

  return StockTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = StockTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiU3RvY2tUcmFuc2Zvcm1lciIsInN0b2NrIiwiU3RvY2siLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInN0YXR1c0lkIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJyZXR1cm5PcmRlckxpbmVzIiwiaW5jbHVkZVJldHVybk9yZGVyTGluZXMiLCJpdGVtIiwiUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciIsIlVzZXJUcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUtBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxLLEVBQThCO0FBQ2xDLGFBQU8sSUFBSUMsaUJBQUosQ0FBVTtBQUNiQyxRQUFBQSxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFERztBQUViQyxRQUFBQSxTQUFTLEVBQUVILEtBQUssQ0FBQ0csU0FGSjtBQUdiQyxRQUFBQSxTQUFTLEVBQUVKLEtBQUssQ0FBQ0ksU0FISjtBQUliQyxRQUFBQSxRQUFRLEVBQUVMLEtBQUssQ0FBQ0ssUUFKSDtBQUtiO0FBQ0FDLFFBQUFBLGNBQWMsRUFBRSxLQUFLQyxxQkFBTCxDQUEyQlAsS0FBM0IsQ0FOSDtBQU9iUSxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQlQsS0FBakIsQ0FQTztBQVFiO0FBQ0FVLFFBQUFBLGdCQUFnQixFQUFFLEtBQUtDLHVCQUFMLENBQTZCWCxLQUFLLENBQUNVLGdCQUFOLElBQTBCLEVBQXZEO0FBVEwsT0FBVixDQUFQO0FBV0g7OzswQ0FFcUJWLEssRUFBdUQ7QUFDekUsYUFBTyxLQUFLWSxJQUFMLENBQVVaLEtBQVYsRUFBaUIsZ0JBQWpCLEVBQW1DLElBQUlhLHFDQUFKLEVBQW5DLENBQVA7QUFDSDs7O2dDQUNXYixLLEVBQTZDO0FBQ3JELGFBQU8sS0FBS1ksSUFBTCxDQUFVWixLQUFWLEVBQWlCLE1BQWpCLEVBQXlCLElBQUljLDJCQUFKLEVBQXpCLENBQVA7QUFDSDs7OzRDQUN1QmQsSyxFQUFxRDtBQUN6RSxhQUFPLEtBQUtlLFVBQUwsQ0FBZ0JmLEtBQWhCLEVBQXVCLGtCQUF2QixFQUEyQyxJQUFJZ0Isc0NBQUosRUFBM0MsQ0FBUDtBQUNIOzs7O0VBNUJ5Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvY2sgZnJvbSAnLi4vU3RvY2snO1xuaW1wb3J0IFN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2snO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgUmV0dXJuT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV0dXJuL1JldHVybk9yZGVyTGluZSc7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyJztcbmltcG9ydCBSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yZXR1cm4vVHJhbnNmb3JtZXJzL1JldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvY2tUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHN0b2NrIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvY2tcbiAgICAgKi9cbiAgICBtYXBEYXRhKHN0b2NrOiBTdG9ja0ludGVyZmFjZSk6IFN0b2NrIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdG9jayh7XG4gICAgICAgICAgICBpZDogc3RvY2suaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHN0b2NrLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogc3RvY2sudXBkYXRlZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHN0b2NrLnN0YXR1c0lkLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQ6IHRoaXMuaW5jbHVkZVByb2R1Y3RWYXJpYW50KHN0b2NrKSxcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIoc3RvY2spLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIHJldHVybk9yZGVyTGluZXM6IHRoaXMuaW5jbHVkZVJldHVybk9yZGVyTGluZXMoc3RvY2sucmV0dXJuT3JkZXJMaW5lcyB8fCBbXSksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0VmFyaWFudChzdG9jazogU3RvY2tJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHN0b2NrLCAncHJvZHVjdFZhcmlhbnQnLCBuZXcgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG4gICAgaW5jbHVkZVVzZXIoc3RvY2s6IFN0b2NrSW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHN0b2NrLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuICAgIGluY2x1ZGVSZXR1cm5PcmRlckxpbmVzKHN0b2NrOiBTdG9ja0ludGVyZmFjZVtdKTogUmV0dXJuT3JkZXJMaW5lSW50ZXJmYWNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHN0b2NrLCAncmV0dXJuT3JkZXJMaW5lcycsIG5ldyBSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=