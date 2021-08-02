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

var _BinTransformer = _interopRequireDefault(require("../../bin/Transformers/BinTransformer"));

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
        bin: this.includeBin(stock),
        // has many
        returnOrderLines: this.includeReturnOrderLines(stock)
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
    key: "includeBin",
    value: function includeBin(stock) {
      return this.item(stock, 'bin', new _BinTransformer["default"]());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiU3RvY2tUcmFuc2Zvcm1lciIsInN0b2NrIiwiU3RvY2siLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInN0YXR1c0lkIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJiaW4iLCJpbmNsdWRlQmluIiwicmV0dXJuT3JkZXJMaW5lcyIsImluY2x1ZGVSZXR1cm5PcmRlckxpbmVzIiwiaXRlbSIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJVc2VyVHJhbnNmb3JtZXIiLCJCaW5UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxLLEVBQThCO0FBQ2xDLGFBQU8sSUFBSUMsaUJBQUosQ0FBVTtBQUNiQyxRQUFBQSxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFERztBQUViQyxRQUFBQSxTQUFTLEVBQUVILEtBQUssQ0FBQ0csU0FGSjtBQUdiQyxRQUFBQSxTQUFTLEVBQUVKLEtBQUssQ0FBQ0ksU0FISjtBQUliQyxRQUFBQSxRQUFRLEVBQUVMLEtBQUssQ0FBQ0ssUUFKSDtBQUtiO0FBQ0FDLFFBQUFBLGNBQWMsRUFBRSxLQUFLQyxxQkFBTCxDQUEyQlAsS0FBM0IsQ0FOSDtBQU9iUSxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQlQsS0FBakIsQ0FQTztBQVFiVSxRQUFBQSxHQUFHLEVBQUUsS0FBS0MsVUFBTCxDQUFnQlgsS0FBaEIsQ0FSUTtBQVNiO0FBQ0FZLFFBQUFBLGdCQUFnQixFQUFFLEtBQUtDLHVCQUFMLENBQTZCYixLQUE3QjtBQVZMLE9BQVYsQ0FBUDtBQVlIOzs7MENBRXFCQSxLLEVBQXVEO0FBQ3pFLGFBQU8sS0FBS2MsSUFBTCxDQUFVZCxLQUFWLEVBQWlCLGdCQUFqQixFQUFtQyxJQUFJZSxxQ0FBSixFQUFuQyxDQUFQO0FBQ0g7OztnQ0FDV2YsSyxFQUE2QztBQUNyRCxhQUFPLEtBQUtjLElBQUwsQ0FBVWQsS0FBVixFQUFpQixNQUFqQixFQUF5QixJQUFJZ0IsMkJBQUosRUFBekIsQ0FBUDtBQUNIOzs7K0JBQ1VoQixLLEVBQWlEO0FBQ3hELGFBQU8sS0FBS2MsSUFBTCxDQUFVZCxLQUFWLEVBQWlCLEtBQWpCLEVBQXdCLElBQUlpQiwwQkFBSixFQUF4QixDQUFQO0FBQ0g7Ozs0Q0FDdUJqQixLLEVBQW1EO0FBQ3ZFLGFBQU8sS0FBS2tCLFVBQUwsQ0FBZ0JsQixLQUFoQixFQUF1QixrQkFBdkIsRUFBMkMsSUFBSW1CLHNDQUFKLEVBQTNDLENBQVA7QUFDSDs7OztFQWhDeUNDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0b2NrIGZyb20gJy4uL1N0b2NrJztcbmltcG9ydCBTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1N0b2NrJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IFJldHVybk9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JldHVybi9SZXR1cm5PcmRlckxpbmUnO1xuaW1wb3J0IEJpbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jpbi9CaW4nO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUmV0dXJuT3JkZXJMaW5lVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmluVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYmluL1RyYW5zZm9ybWVycy9CaW5UcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b2NrVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBzdG9jayByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0b2NrXG4gICAgICovXG4gICAgbWFwRGF0YShzdG9jazogU3RvY2tJbnRlcmZhY2UpOiBTdG9jayB7XG4gICAgICAgIHJldHVybiBuZXcgU3RvY2soe1xuICAgICAgICAgICAgaWQ6IHN0b2NrLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBzdG9jay5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHN0b2NrLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiBzdG9jay5zdGF0dXNJZCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50OiB0aGlzLmluY2x1ZGVQcm9kdWN0VmFyaWFudChzdG9jayksXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKHN0b2NrKSxcbiAgICAgICAgICAgIGJpbjogdGhpcy5pbmNsdWRlQmluKHN0b2NrKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICByZXR1cm5PcmRlckxpbmVzOiB0aGlzLmluY2x1ZGVSZXR1cm5PcmRlckxpbmVzKHN0b2NrKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RWYXJpYW50KHN0b2NrOiBTdG9ja0ludGVyZmFjZSk6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oc3RvY2ssICdwcm9kdWN0VmFyaWFudCcsIG5ldyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbiAgICBpbmNsdWRlVXNlcihzdG9jazogU3RvY2tJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oc3RvY2ssICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG4gICAgaW5jbHVkZUJpbihzdG9jazogU3RvY2tJbnRlcmZhY2UpOiBCaW5JbnRlcmZhY2UgfCBudWxsIHwge30ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHN0b2NrLCAnYmluJywgbmV3IEJpblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbiAgICBpbmNsdWRlUmV0dXJuT3JkZXJMaW5lcyhzdG9jazogU3RvY2tJbnRlcmZhY2UpOiBSZXR1cm5PcmRlckxpbmVJbnRlcmZhY2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oc3RvY2ssICdyZXR1cm5PcmRlckxpbmVzJywgbmV3IFJldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==