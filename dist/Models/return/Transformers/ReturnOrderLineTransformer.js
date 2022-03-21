"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ReturnOrderLine = _interopRequireDefault(require("../ReturnOrderLine"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _StockTransformer = _interopRequireDefault(require("../../stock/Transformers/StockTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

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

var ReturnOrderLineTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ReturnOrderLineTransformer, _BaseTransformer);

  var _super = _createSuper(ReturnOrderLineTransformer);

  function ReturnOrderLineTransformer() {
    _classCallCheck(this, ReturnOrderLineTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ReturnOrderLineTransformer, [{
    key: "mapData",
    value:
    /**
     * Map an returnOrderLine response
     *
     * @param returnOrderLine
     */
    function mapData(returnOrderLine) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciIsInJldHVybk9yZGVyTGluZSIsIlJldHVybk9yZGVyTGluZSIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic3RhdHVzSWQiLCJpc01hbnVhbCIsImlzRGFtYWdlZCIsIm1ldGEiLCJydHJuIiwiaW5jbHVkZVJldHVybk9yZGVyIiwic3RvY2siLCJpbmNsdWRlU3RvY2siLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiU3RvY2tUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsMEI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSSxxQkFBUUMsZUFBUixFQUFvRTtBQUNoRSxhQUFPLElBQUlDLDJCQUFKLENBQW9CO0FBQ3ZCQyxRQUFBQSxFQUFFLEVBQUVGLGVBQWUsQ0FBQ0UsRUFERztBQUV2QkMsUUFBQUEsU0FBUyxFQUFFSCxlQUFlLENBQUNHLFNBRko7QUFHdkJDLFFBQUFBLFNBQVMsRUFBRUosZUFBZSxDQUFDSSxTQUhKO0FBSXZCQyxRQUFBQSxRQUFRLEVBQUVMLGVBQWUsQ0FBQ0ssUUFKSDtBQUt2QkMsUUFBQUEsUUFBUSxFQUFFTixlQUFlLENBQUNNLFFBTEg7QUFNdkJDLFFBQUFBLFNBQVMsRUFBRVAsZUFBZSxDQUFDTyxTQU5KO0FBT3ZCQyxRQUFBQSxJQUFJLEVBQUVSLGVBQWUsQ0FBQ1EsSUFQQztBQVF2QjtBQUNBQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0Msa0JBQUwsQ0FBd0JWLGVBQXhCLENBVGlCO0FBVXZCVyxRQUFBQSxLQUFLLEVBQUUsS0FBS0MsWUFBTCxDQUFrQlosZUFBbEI7QUFWZ0IsT0FBcEIsQ0FBUDtBQVlIOzs7V0FFRCw0QkFBbUJBLGVBQW5CLEVBQTJGO0FBQ3ZGLGFBQU8sS0FBS2EsSUFBTCxDQUFVYixlQUFWLEVBQTJCLE1BQTNCLEVBQW1DLElBQUljLDJCQUFKLEVBQW5DLENBQVA7QUFDSDs7O1dBRUQsc0JBQWFkLGVBQWIsRUFBK0U7QUFDM0UsYUFBTyxLQUFLYSxJQUFMLENBQVViLGVBQVYsRUFBMkIsT0FBM0IsRUFBb0MsSUFBSWUsNEJBQUosRUFBcEMsQ0FBUDtBQUNIOzs7O0VBM0JtREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmV0dXJuT3JkZXJMaW5lIGZyb20gJy4uL1JldHVybk9yZGVyTGluZSc7XG5pbXBvcnQgUmV0dXJuT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV0dXJuL1JldHVybk9yZGVyTGluZSc7XG5pbXBvcnQgU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9TdG9jayc7XG5pbXBvcnQgUmV0dXJuT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXInO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN0b2NrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHJldHVybk9yZGVyTGluZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJldHVybk9yZGVyTGluZVxuICAgICAqL1xuICAgIG1hcERhdGEocmV0dXJuT3JkZXJMaW5lOiBSZXR1cm5PcmRlckxpbmVJbnRlcmZhY2UpOiBSZXR1cm5PcmRlckxpbmUge1xuICAgICAgICByZXR1cm4gbmV3IFJldHVybk9yZGVyTGluZSh7XG4gICAgICAgICAgICBpZDogcmV0dXJuT3JkZXJMaW5lLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiByZXR1cm5PcmRlckxpbmUuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiByZXR1cm5PcmRlckxpbmUudXBkYXRlZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHJldHVybk9yZGVyTGluZS5zdGF0dXNJZCxcbiAgICAgICAgICAgIGlzTWFudWFsOiByZXR1cm5PcmRlckxpbmUuaXNNYW51YWwsXG4gICAgICAgICAgICBpc0RhbWFnZWQ6IHJldHVybk9yZGVyTGluZS5pc0RhbWFnZWQsXG4gICAgICAgICAgICBtZXRhOiByZXR1cm5PcmRlckxpbmUubWV0YSxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHJ0cm46IHRoaXMuaW5jbHVkZVJldHVybk9yZGVyKHJldHVybk9yZGVyTGluZSksXG4gICAgICAgICAgICBzdG9jazogdGhpcy5pbmNsdWRlU3RvY2socmV0dXJuT3JkZXJMaW5lKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJldHVybk9yZGVyKHJldHVybk9yZGVyTGluZTogUmV0dXJuT3JkZXJMaW5lSW50ZXJmYWNlKTogUmV0dXJuT3JkZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShyZXR1cm5PcmRlckxpbmUsICdydHJuJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2socmV0dXJuT3JkZXJMaW5lOiBSZXR1cm5PcmRlckxpbmVJbnRlcmZhY2UpOiBTdG9ja0ludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHJldHVybk9yZGVyTGluZSwgJ3N0b2NrJywgbmV3IFN0b2NrVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19