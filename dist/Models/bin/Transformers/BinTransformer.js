"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _Bin = _interopRequireDefault(require("../Bin"));

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

var BinTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(BinTransformer, _BaseTransformer);

  function BinTransformer() {
    _classCallCheck(this, BinTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(BinTransformer).apply(this, arguments));
  }

  _createClass(BinTransformer, [{
    key: "mapData",

    /**
     * Map an stock response
     *
     * @param bin
     */
    value: function mapData(bin) {
      return new _Bin["default"]({
        id: bin.id,
        name: bin.name,
        totalStock: bin.totalStock,
        createdAt: bin.createdAt,
        updatedAt: bin.updatedAt,
        stock: this.includeStocks(bin)
      });
    }
  }, {
    key: "includeStocks",
    value: function includeStocks(bin) {
      return this.collection(bin, 'stock', new _StockTransformer["default"]());
    }
  }]);

  return BinTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = BinTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYmluL1RyYW5zZm9ybWVycy9CaW5UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJCaW5UcmFuc2Zvcm1lciIsImJpbiIsIkJpbiIsImlkIiwibmFtZSIsInRvdGFsU3RvY2siLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJzdG9jayIsImluY2x1ZGVTdG9ja3MiLCJjb2xsZWN0aW9uIiwiU3RvY2tUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEcsRUFBd0I7QUFDNUIsYUFBTyxJQUFJQyxlQUFKLENBQVE7QUFDWEMsUUFBQUEsRUFBRSxFQUFFRixHQUFHLENBQUNFLEVBREc7QUFFWEMsUUFBQUEsSUFBSSxFQUFFSCxHQUFHLENBQUNHLElBRkM7QUFHWEMsUUFBQUEsVUFBVSxFQUFFSixHQUFHLENBQUNJLFVBSEw7QUFJWEMsUUFBQUEsU0FBUyxFQUFFTCxHQUFHLENBQUNLLFNBSko7QUFLWEMsUUFBQUEsU0FBUyxFQUFFTixHQUFHLENBQUNNLFNBTEo7QUFNWEMsUUFBQUEsS0FBSyxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJSLEdBQW5CO0FBTkksT0FBUixDQUFQO0FBUUg7OztrQ0FFYUEsRyxFQUFpRDtBQUMzRCxhQUFPLEtBQUtTLFVBQUwsQ0FBZ0JULEdBQWhCLEVBQXFCLE9BQXJCLEVBQThCLElBQUlVLDRCQUFKLEVBQTlCLENBQVA7QUFDSDs7OztFQW5CdUNDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJpbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jpbi9CaW4nO1xuaW1wb3J0IEJpbiBmcm9tICcuLi9CaW4nO1xuaW1wb3J0IFN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2snO1xuaW1wb3J0IFN0b2NrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaW5UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHN0b2NrIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmluXG4gICAgICovXG4gICAgbWFwRGF0YShiaW46IEJpbkludGVyZmFjZSk6IEJpbiB7XG4gICAgICAgIHJldHVybiBuZXcgQmluKHtcbiAgICAgICAgICAgIGlkOiBiaW4uaWQsXG4gICAgICAgICAgICBuYW1lOiBiaW4ubmFtZSxcbiAgICAgICAgICAgIHRvdGFsU3RvY2s6IGJpbi50b3RhbFN0b2NrLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBiaW4uY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBiaW4udXBkYXRlZEF0LFxuICAgICAgICAgICAgc3RvY2s6IHRoaXMuaW5jbHVkZVN0b2NrcyhiaW4pLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2tzKGJpbjogQmluSW50ZXJmYWNlKTogQXJyYXk8U3RvY2tJbnRlcmZhY2U+IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oYmluLCAnc3RvY2snLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=