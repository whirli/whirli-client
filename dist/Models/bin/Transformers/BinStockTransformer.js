"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _BinStock = _interopRequireDefault(require("../BinStock"));

var _BinTransformer = _interopRequireDefault(require("./BinTransformer"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

var _StockTransformer = _interopRequireDefault(require("../../stock/Transformers/StockTransformer"));

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

var BinStockTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(BinStockTransformer, _BaseTransformer);

  var _super = _createSuper(BinStockTransformer);

  function BinStockTransformer() {
    _classCallCheck(this, BinStockTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(BinStockTransformer, [{
    key: "mapData",
    value: function mapData(binStock) {
      return new _BinStock["default"]({
        id: binStock.id,
        createdAt: binStock.createdAt,
        updatedAt: binStock.updatedAt,
        bin: this.includeBin(binStock) || undefined,
        productVariant: this.includeProductVariant(binStock) || undefined,
        stock: this.includeStock(binStock) || undefined
      });
    }
  }, {
    key: "includeBin",
    value: function includeBin(binStock) {
      return this.item(binStock, 'bin', new _BinTransformer["default"]());
    }
  }, {
    key: "includeProductVariant",
    value: function includeProductVariant(binStock) {
      return this.item(binStock, 'productVariant', new _ProductVariantTransformer["default"]());
    }
  }, {
    key: "includeStock",
    value: function includeStock(binStock) {
      return this.item(binStock, 'stock', new _StockTransformer["default"]());
    }
  }]);

  return BinStockTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = BinStockTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYmluL1RyYW5zZm9ybWVycy9CaW5TdG9ja1RyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkJpblN0b2NrVHJhbnNmb3JtZXIiLCJiaW5TdG9jayIsIkJpblN0b2NrIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJiaW4iLCJpbmNsdWRlQmluIiwidW5kZWZpbmVkIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJzdG9jayIsImluY2x1ZGVTdG9jayIsIml0ZW0iLCJCaW5UcmFuc2Zvcm1lciIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJTdG9ja1RyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxtQjs7Ozs7Ozs7Ozs7OztXQUNqQixpQkFBUUMsUUFBUixFQUErQztBQUMzQyxhQUFPLElBQUlDLG9CQUFKLENBQWE7QUFDaEJDLFFBQUFBLEVBQUUsRUFBRUYsUUFBUSxDQUFDRSxFQURHO0FBRWhCQyxRQUFBQSxTQUFTLEVBQUVILFFBQVEsQ0FBQ0csU0FGSjtBQUdoQkMsUUFBQUEsU0FBUyxFQUFFSixRQUFRLENBQUNJLFNBSEo7QUFJaEJDLFFBQUFBLEdBQUcsRUFBRSxLQUFLQyxVQUFMLENBQWdCTixRQUFoQixLQUE2Qk8sU0FKbEI7QUFLaEJDLFFBQUFBLGNBQWMsRUFBRSxLQUFLQyxxQkFBTCxDQUEyQlQsUUFBM0IsS0FBd0NPLFNBTHhDO0FBTWhCRyxRQUFBQSxLQUFLLEVBQUUsS0FBS0MsWUFBTCxDQUFrQlgsUUFBbEIsS0FBK0JPO0FBTnRCLE9BQWIsQ0FBUDtBQVFIOzs7V0FFRCxvQkFBV1AsUUFBWCxFQUE2RDtBQUN6RCxhQUFPLEtBQUtZLElBQUwsQ0FBVVosUUFBVixFQUFvQixLQUFwQixFQUEyQixJQUFJYSwwQkFBSixFQUEzQixDQUFQO0FBQ0g7OztXQUVELCtCQUFzQmIsUUFBdEIsRUFBbUY7QUFDL0UsYUFBTyxLQUFLWSxJQUFMLENBQVVaLFFBQVYsRUFBb0IsZ0JBQXBCLEVBQXNDLElBQUljLHFDQUFKLEVBQXRDLENBQVA7QUFDSDs7O1dBRUQsc0JBQWFkLFFBQWIsRUFBaUU7QUFDN0QsYUFBTyxLQUFLWSxJQUFMLENBQVVaLFFBQVYsRUFBb0IsT0FBcEIsRUFBNkIsSUFBSWUsNEJBQUosRUFBN0IsQ0FBUDtBQUNIOzs7O0VBdEI0Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmluU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iaW4vQmluU3RvY2snO1xuaW1wb3J0IEJpblN0b2NrIGZyb20gJy4uL0JpblN0b2NrJztcbmltcG9ydCBCaW5JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iaW4vQmluJztcbmltcG9ydCBCaW5UcmFuc2Zvcm1lciBmcm9tICcuL0JpblRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9TdG9jayc7XG5pbXBvcnQgU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvU3RvY2tUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpblN0b2NrVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEoYmluU3RvY2s6IEJpblN0b2NrSW50ZXJmYWNlKTogQmluU3RvY2sge1xuICAgICAgICByZXR1cm4gbmV3IEJpblN0b2NrKHtcbiAgICAgICAgICAgIGlkOiBiaW5TdG9jay5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYmluU3RvY2suY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBiaW5TdG9jay51cGRhdGVkQXQsXG4gICAgICAgICAgICBiaW46IHRoaXMuaW5jbHVkZUJpbihiaW5TdG9jaykgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQ6IHRoaXMuaW5jbHVkZVByb2R1Y3RWYXJpYW50KGJpblN0b2NrKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdG9jazogdGhpcy5pbmNsdWRlU3RvY2soYmluU3RvY2spIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUJpbihiaW5TdG9jazogQmluU3RvY2tJbnRlcmZhY2UpOiBCaW5JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShiaW5TdG9jaywgJ2JpbicsIG5ldyBCaW5UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdFZhcmlhbnQoYmluU3RvY2s6IEJpblN0b2NrSW50ZXJmYWNlKTogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShiaW5TdG9jaywgJ3Byb2R1Y3RWYXJpYW50JywgbmV3IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN0b2NrKGJpblN0b2NrOiBCaW5TdG9ja0ludGVyZmFjZSk6IFN0b2NrSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oYmluU3RvY2ssICdzdG9jaycsIG5ldyBTdG9ja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==