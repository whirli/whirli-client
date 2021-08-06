"use strict";

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BinStockTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(BinStockTransformer, _BaseTransformer);

  function BinStockTransformer() {
    _classCallCheck(this, BinStockTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(BinStockTransformer).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYmluL1RyYW5zZm9ybWVycy9CaW5TdG9ja1RyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkJpblN0b2NrVHJhbnNmb3JtZXIiLCJiaW5TdG9jayIsIkJpblN0b2NrIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJiaW4iLCJpbmNsdWRlQmluIiwidW5kZWZpbmVkIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJzdG9jayIsImluY2x1ZGVTdG9jayIsIml0ZW0iLCJCaW5UcmFuc2Zvcm1lciIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJTdG9ja1RyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7Ozs7Ozs7Ozs7OzRCQUNUQyxRLEVBQXVDO0FBQzNDLGFBQU8sSUFBSUMsb0JBQUosQ0FBYTtBQUNoQkMsUUFBQUEsRUFBRSxFQUFFRixRQUFRLENBQUNFLEVBREc7QUFFaEJDLFFBQUFBLFNBQVMsRUFBRUgsUUFBUSxDQUFDRyxTQUZKO0FBR2hCQyxRQUFBQSxTQUFTLEVBQUVKLFFBQVEsQ0FBQ0ksU0FISjtBQUloQkMsUUFBQUEsR0FBRyxFQUFFLEtBQUtDLFVBQUwsQ0FBZ0JOLFFBQWhCLEtBQTZCTyxTQUpsQjtBQUtoQkMsUUFBQUEsY0FBYyxFQUFFLEtBQUtDLHFCQUFMLENBQTJCVCxRQUEzQixLQUF3Q08sU0FMeEM7QUFNaEJHLFFBQUFBLEtBQUssRUFBRSxLQUFLQyxZQUFMLENBQWtCWCxRQUFsQixLQUErQk87QUFOdEIsT0FBYixDQUFQO0FBUUg7OzsrQkFFVVAsUSxFQUFrRDtBQUN6RCxhQUFPLEtBQUtZLElBQUwsQ0FBVVosUUFBVixFQUFvQixLQUFwQixFQUEyQixJQUFJYSwwQkFBSixFQUEzQixDQUFQO0FBQ0g7OzswQ0FFcUJiLFEsRUFBNkQ7QUFDL0UsYUFBTyxLQUFLWSxJQUFMLENBQVVaLFFBQVYsRUFBb0IsZ0JBQXBCLEVBQXNDLElBQUljLHFDQUFKLEVBQXRDLENBQVA7QUFDSDs7O2lDQUVZZCxRLEVBQW9EO0FBQzdELGFBQU8sS0FBS1ksSUFBTCxDQUFVWixRQUFWLEVBQW9CLE9BQXBCLEVBQTZCLElBQUllLDRCQUFKLEVBQTdCLENBQVA7QUFDSDs7OztFQXRCNENDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJpblN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmluL0JpblN0b2NrJztcbmltcG9ydCBCaW5TdG9jayBmcm9tICcuLi9CaW5TdG9jayc7XG5pbXBvcnQgQmluSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmluL0Jpbic7XG5pbXBvcnQgQmluVHJhbnNmb3JtZXIgZnJvbSAnLi9CaW5UcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IFN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2snO1xuaW1wb3J0IFN0b2NrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaW5TdG9ja1RyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKGJpblN0b2NrOiBCaW5TdG9ja0ludGVyZmFjZSk6IEJpblN0b2NrIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5TdG9jayh7XG4gICAgICAgICAgICBpZDogYmluU3RvY2suaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGJpblN0b2NrLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYmluU3RvY2sudXBkYXRlZEF0LFxuICAgICAgICAgICAgYmluOiB0aGlzLmluY2x1ZGVCaW4oYmluU3RvY2spIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50OiB0aGlzLmluY2x1ZGVQcm9kdWN0VmFyaWFudChiaW5TdG9jaykgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3RvY2s6IHRoaXMuaW5jbHVkZVN0b2NrKGJpblN0b2NrKSB8fCB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVCaW4oYmluU3RvY2s6IEJpblN0b2NrSW50ZXJmYWNlKTogQmluSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oYmluU3RvY2ssICdiaW4nLCBuZXcgQmluVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RWYXJpYW50KGJpblN0b2NrOiBCaW5TdG9ja0ludGVyZmFjZSk6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oYmluU3RvY2ssICdwcm9kdWN0VmFyaWFudCcsIG5ldyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdG9jayhiaW5TdG9jazogQmluU3RvY2tJbnRlcmZhY2UpOiBTdG9ja0ludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGJpblN0b2NrLCAnc3RvY2snLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=