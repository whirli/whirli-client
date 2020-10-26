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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciIsInJldHVybk9yZGVyTGluZSIsIlJldHVybk9yZGVyTGluZSIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic3RhdHVzSWQiLCJpc01hbnVhbCIsImlzRGFtYWdlZCIsIm1ldGEiLCJydHJuIiwiaW5jbHVkZVJldHVybk9yZGVyIiwic3RvY2siLCJpbmNsdWRlU3RvY2siLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiU3RvY2tUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsMEI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7NEJBQ1lDLGUsRUFBNEQ7QUFDaEUsYUFBTyxJQUFJQywyQkFBSixDQUFvQjtBQUN2QkMsUUFBQUEsRUFBRSxFQUFFRixlQUFlLENBQUNFLEVBREc7QUFFdkJDLFFBQUFBLFNBQVMsRUFBRUgsZUFBZSxDQUFDRyxTQUZKO0FBR3ZCQyxRQUFBQSxTQUFTLEVBQUVKLGVBQWUsQ0FBQ0ksU0FISjtBQUl2QkMsUUFBQUEsUUFBUSxFQUFFTCxlQUFlLENBQUNLLFFBSkg7QUFLdkJDLFFBQUFBLFFBQVEsRUFBRU4sZUFBZSxDQUFDTSxRQUxIO0FBTXZCQyxRQUFBQSxTQUFTLEVBQUVQLGVBQWUsQ0FBQ08sU0FOSjtBQU92QkMsUUFBQUEsSUFBSSxFQUFFUixlQUFlLENBQUNRLElBUEM7QUFRdkI7QUFDQUMsUUFBQUEsSUFBSSxFQUFFLEtBQUtDLGtCQUFMLENBQXdCVixlQUF4QixDQVRpQjtBQVV2QlcsUUFBQUEsS0FBSyxFQUFFLEtBQUtDLFlBQUwsQ0FBa0JaLGVBQWxCO0FBVmdCLE9BQXBCLENBQVA7QUFZSDs7O3VDQUVrQkEsZSxFQUF3RTtBQUN2RixhQUFPLEtBQUthLElBQUwsQ0FBVWIsZUFBVixFQUEyQixNQUEzQixFQUFtQyxJQUFJYywyQkFBSixFQUFuQyxDQUFQO0FBQ0g7OztpQ0FFWWQsZSxFQUFrRTtBQUMzRSxhQUFPLEtBQUthLElBQUwsQ0FBVWIsZUFBVixFQUEyQixPQUEzQixFQUFvQyxJQUFJZSw0QkFBSixFQUFwQyxDQUFQO0FBQ0g7Ozs7RUEzQm1EQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXR1cm5PcmRlckxpbmUgZnJvbSAnLi4vUmV0dXJuT3JkZXJMaW5lJztcbmltcG9ydCBSZXR1cm5PcmRlckxpbmVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXJMaW5lJztcbmltcG9ydCBTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1N0b2NrJztcbmltcG9ydCBSZXR1cm5PcmRlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JldHVybi9SZXR1cm5PcmRlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvU3RvY2tUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gcmV0dXJuT3JkZXJMaW5lIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmV0dXJuT3JkZXJMaW5lXG4gICAgICovXG4gICAgbWFwRGF0YShyZXR1cm5PcmRlckxpbmU6IFJldHVybk9yZGVyTGluZUludGVyZmFjZSk6IFJldHVybk9yZGVyTGluZSB7XG4gICAgICAgIHJldHVybiBuZXcgUmV0dXJuT3JkZXJMaW5lKHtcbiAgICAgICAgICAgIGlkOiByZXR1cm5PcmRlckxpbmUuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHJldHVybk9yZGVyTGluZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHJldHVybk9yZGVyTGluZS51cGRhdGVkQXQsXG4gICAgICAgICAgICBzdGF0dXNJZDogcmV0dXJuT3JkZXJMaW5lLnN0YXR1c0lkLFxuICAgICAgICAgICAgaXNNYW51YWw6IHJldHVybk9yZGVyTGluZS5pc01hbnVhbCxcbiAgICAgICAgICAgIGlzRGFtYWdlZDogcmV0dXJuT3JkZXJMaW5lLmlzRGFtYWdlZCxcbiAgICAgICAgICAgIG1ldGE6IHJldHVybk9yZGVyTGluZS5tZXRhLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgcnRybjogdGhpcy5pbmNsdWRlUmV0dXJuT3JkZXIocmV0dXJuT3JkZXJMaW5lKSxcbiAgICAgICAgICAgIHN0b2NrOiB0aGlzLmluY2x1ZGVTdG9jayhyZXR1cm5PcmRlckxpbmUpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmV0dXJuT3JkZXIocmV0dXJuT3JkZXJMaW5lOiBSZXR1cm5PcmRlckxpbmVJbnRlcmZhY2UpOiBSZXR1cm5PcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHJldHVybk9yZGVyTGluZSwgJ3J0cm4nLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdG9jayhyZXR1cm5PcmRlckxpbmU6IFJldHVybk9yZGVyTGluZUludGVyZmFjZSk6IFN0b2NrSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocmV0dXJuT3JkZXJMaW5lLCAnc3RvY2snLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=