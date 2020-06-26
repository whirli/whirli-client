"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ReturnOrderLine = _interopRequireDefault(require("../ReturnOrderLine"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _StockTransformer = _interopRequireDefault(require("../../stock/Transformers/StockTransformer"));

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

var ReturnOrderLineTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ReturnOrderLineTransformer, _BaseTransformer);

  var _super = _createSuper(ReturnOrderLineTransformer);

  function ReturnOrderLineTransformer() {
    _classCallCheck(this, ReturnOrderLineTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ReturnOrderLineTransformer, [{
    key: "mapData",

    /**
     * Map an returnOrderLine response
     *
     * @param returnOrderLine
     */
    value: function mapData(returnOrderLine) {
      return new _ReturnOrderLine["default"]({
        id: returnOrderLine.id,
        createdAt: returnOrderLine.createdAt,
        updatedAt: returnOrderLine.updatedAt,
        statusId: returnOrderLine.statusId,
        isManual: returnOrderLine.isManual,
        isDamaged: returnOrderLine.isDamaged,
        meta: returnOrderLine.meta,
        // belongs to
        rtrn: this.includeReturnOrder(returnOrderLine),
        stock: this.includeStock(returnOrderLine)
      });
    }
  }, {
    key: "includeReturnOrder",
    value: function includeReturnOrder(returnOrderLine) {
      return this.item(returnOrderLine, 'rtrn', new _UserTransformer["default"]());
    }
  }, {
    key: "includeStock",
    value: function includeStock(returnOrderLine) {
      return this.item(returnOrderLine, 'stock', new _StockTransformer["default"]());
    }
  }]);

  return ReturnOrderLineTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ReturnOrderLineTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciIsInJldHVybk9yZGVyTGluZSIsIlJldHVybk9yZGVyTGluZSIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic3RhdHVzSWQiLCJpc01hbnVhbCIsImlzRGFtYWdlZCIsIm1ldGEiLCJydHJuIiwiaW5jbHVkZVJldHVybk9yZGVyIiwic3RvY2siLCJpbmNsdWRlU3RvY2siLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiU3RvY2tUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsMEI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsZSxFQUE0RDtBQUNoRSxhQUFPLElBQUlDLDJCQUFKLENBQW9CO0FBQ3ZCQyxRQUFBQSxFQUFFLEVBQUVGLGVBQWUsQ0FBQ0UsRUFERztBQUV2QkMsUUFBQUEsU0FBUyxFQUFFSCxlQUFlLENBQUNHLFNBRko7QUFHdkJDLFFBQUFBLFNBQVMsRUFBRUosZUFBZSxDQUFDSSxTQUhKO0FBSXZCQyxRQUFBQSxRQUFRLEVBQUVMLGVBQWUsQ0FBQ0ssUUFKSDtBQUt2QkMsUUFBQUEsUUFBUSxFQUFFTixlQUFlLENBQUNNLFFBTEg7QUFNdkJDLFFBQUFBLFNBQVMsRUFBRVAsZUFBZSxDQUFDTyxTQU5KO0FBT3ZCQyxRQUFBQSxJQUFJLEVBQUVSLGVBQWUsQ0FBQ1EsSUFQQztBQVF2QjtBQUNBQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0Msa0JBQUwsQ0FBd0JWLGVBQXhCLENBVGlCO0FBVXZCVyxRQUFBQSxLQUFLLEVBQUUsS0FBS0MsWUFBTCxDQUFrQlosZUFBbEI7QUFWZ0IsT0FBcEIsQ0FBUDtBQVlIOzs7dUNBRWtCQSxlLEVBQXdFO0FBQ3ZGLGFBQU8sS0FBS2EsSUFBTCxDQUFVYixlQUFWLEVBQTJCLE1BQTNCLEVBQW1DLElBQUljLDJCQUFKLEVBQW5DLENBQVA7QUFDSDs7O2lDQUVZZCxlLEVBQWtFO0FBQzNFLGFBQU8sS0FBS2EsSUFBTCxDQUFVYixlQUFWLEVBQTJCLE9BQTNCLEVBQW9DLElBQUllLDRCQUFKLEVBQXBDLENBQVA7QUFDSDs7OztFQTNCbURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJldHVybk9yZGVyTGluZSBmcm9tICcuLi9SZXR1cm5PcmRlckxpbmUnO1xuaW1wb3J0IFJldHVybk9yZGVyTGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JldHVybi9SZXR1cm5PcmRlckxpbmUnO1xuaW1wb3J0IFN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2snO1xuaW1wb3J0IFJldHVybk9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV0dXJuL1JldHVybk9yZGVyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBTdG9ja1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N0b2NrL1RyYW5zZm9ybWVycy9TdG9ja1RyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV0dXJuT3JkZXJMaW5lVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiByZXR1cm5PcmRlckxpbmUgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXR1cm5PcmRlckxpbmVcbiAgICAgKi9cbiAgICBtYXBEYXRhKHJldHVybk9yZGVyTGluZTogUmV0dXJuT3JkZXJMaW5lSW50ZXJmYWNlKTogUmV0dXJuT3JkZXJMaW5lIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXR1cm5PcmRlckxpbmUoe1xuICAgICAgICAgICAgaWQ6IHJldHVybk9yZGVyTGluZS5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcmV0dXJuT3JkZXJMaW5lLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcmV0dXJuT3JkZXJMaW5lLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiByZXR1cm5PcmRlckxpbmUuc3RhdHVzSWQsXG4gICAgICAgICAgICBpc01hbnVhbDogcmV0dXJuT3JkZXJMaW5lLmlzTWFudWFsLFxuICAgICAgICAgICAgaXNEYW1hZ2VkOiByZXR1cm5PcmRlckxpbmUuaXNEYW1hZ2VkLFxuICAgICAgICAgICAgbWV0YTogcmV0dXJuT3JkZXJMaW5lLm1ldGEsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBydHJuOiB0aGlzLmluY2x1ZGVSZXR1cm5PcmRlcihyZXR1cm5PcmRlckxpbmUpLFxuICAgICAgICAgICAgc3RvY2s6IHRoaXMuaW5jbHVkZVN0b2NrKHJldHVybk9yZGVyTGluZSksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZXR1cm5PcmRlcihyZXR1cm5PcmRlckxpbmU6IFJldHVybk9yZGVyTGluZUludGVyZmFjZSk6IFJldHVybk9yZGVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocmV0dXJuT3JkZXJMaW5lLCAncnRybicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN0b2NrKHJldHVybk9yZGVyTGluZTogUmV0dXJuT3JkZXJMaW5lSW50ZXJmYWNlKTogU3RvY2tJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShyZXR1cm5PcmRlckxpbmUsICdzdG9jaycsIG5ldyBTdG9ja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==