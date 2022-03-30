"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var StockTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(StockTransformer, _BaseTransformer);

  var _super = _createSuper(StockTransformer);

  function StockTransformer() {
    _classCallCheck(this, StockTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(StockTransformer, [{
    key: "mapData",
    value:
    /**
     * Map an stock response
     *
     * @param stock
     */
    function mapData(stock) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiU3RvY2tUcmFuc2Zvcm1lciIsInN0b2NrIiwiU3RvY2siLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInN0YXR1c0lkIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJiaW4iLCJpbmNsdWRlQmluIiwicmV0dXJuT3JkZXJMaW5lcyIsImluY2x1ZGVSZXR1cm5PcmRlckxpbmVzIiwiaXRlbSIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJVc2VyVHJhbnNmb3JtZXIiLCJCaW5UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSSxxQkFBUUMsS0FBUixFQUFzQztBQUNsQyxhQUFPLElBQUlDLGlCQUFKLENBQVU7QUFDYkMsUUFBQUEsRUFBRSxFQUFFRixLQUFLLENBQUNFLEVBREc7QUFFYkMsUUFBQUEsU0FBUyxFQUFFSCxLQUFLLENBQUNHLFNBRko7QUFHYkMsUUFBQUEsU0FBUyxFQUFFSixLQUFLLENBQUNJLFNBSEo7QUFJYkMsUUFBQUEsUUFBUSxFQUFFTCxLQUFLLENBQUNLLFFBSkg7QUFLYjtBQUNBQyxRQUFBQSxjQUFjLEVBQUUsS0FBS0MscUJBQUwsQ0FBMkJQLEtBQTNCLENBTkg7QUFPYlEsUUFBQUEsSUFBSSxFQUFFLEtBQUtDLFdBQUwsQ0FBaUJULEtBQWpCLENBUE87QUFRYlUsUUFBQUEsR0FBRyxFQUFFLEtBQUtDLFVBQUwsQ0FBZ0JYLEtBQWhCLENBUlE7QUFTYjtBQUNBWSxRQUFBQSxnQkFBZ0IsRUFBRSxLQUFLQyx1QkFBTCxDQUE2QmIsS0FBN0I7QUFWTCxPQUFWLENBQVA7QUFZSDs7O1dBRUQsK0JBQXNCQSxLQUF0QixFQUE2RTtBQUN6RSxhQUFPLEtBQUtjLElBQUwsQ0FBVWQsS0FBVixFQUFpQixnQkFBakIsRUFBbUMsSUFBSWUscUNBQUosRUFBbkMsQ0FBUDtBQUNIOzs7V0FDRCxxQkFBWWYsS0FBWixFQUF5RDtBQUNyRCxhQUFPLEtBQUtjLElBQUwsQ0FBVWQsS0FBVixFQUFpQixNQUFqQixFQUF5QixJQUFJZ0IsMkJBQUosRUFBekIsQ0FBUDtBQUNIOzs7V0FDRCxvQkFBV2hCLEtBQVgsRUFBdUQ7QUFDbkQsYUFBTyxLQUFLYyxJQUFMLENBQVVkLEtBQVYsRUFBaUIsS0FBakIsRUFBd0IsSUFBSWlCLDBCQUFKLEVBQXhCLENBQVA7QUFDSDs7O1dBQ0QsaUNBQXdCakIsS0FBeEIsRUFBMkU7QUFDdkUsYUFBTyxLQUFLa0IsVUFBTCxDQUFnQmxCLEtBQWhCLEVBQXVCLGtCQUF2QixFQUEyQyxJQUFJbUIsc0NBQUosRUFBM0MsQ0FBUDtBQUNIOzs7O0VBaEN5Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvY2sgZnJvbSAnLi4vU3RvY2snO1xuaW1wb3J0IFN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2snO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgUmV0dXJuT3JkZXJMaW5lSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV0dXJuL1JldHVybk9yZGVyTGluZSc7XG5pbXBvcnQgQmluSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmluL0Jpbic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyJztcbmltcG9ydCBSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yZXR1cm4vVHJhbnNmb3JtZXJzL1JldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCaW5UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iaW4vVHJhbnNmb3JtZXJzL0JpblRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvY2tUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHN0b2NrIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvY2tcbiAgICAgKi9cbiAgICBtYXBEYXRhKHN0b2NrOiBTdG9ja0ludGVyZmFjZSk6IFN0b2NrIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdG9jayh7XG4gICAgICAgICAgICBpZDogc3RvY2suaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHN0b2NrLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogc3RvY2sudXBkYXRlZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHN0b2NrLnN0YXR1c0lkLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQ6IHRoaXMuaW5jbHVkZVByb2R1Y3RWYXJpYW50KHN0b2NrKSxcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIoc3RvY2spLFxuICAgICAgICAgICAgYmluOiB0aGlzLmluY2x1ZGVCaW4oc3RvY2spLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIHJldHVybk9yZGVyTGluZXM6IHRoaXMuaW5jbHVkZVJldHVybk9yZGVyTGluZXMoc3RvY2spLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdFZhcmlhbnQoc3RvY2s6IFN0b2NrSW50ZXJmYWNlKTogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShzdG9jaywgJ3Byb2R1Y3RWYXJpYW50JywgbmV3IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuICAgIGluY2x1ZGVVc2VyKHN0b2NrOiBTdG9ja0ludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShzdG9jaywgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbiAgICBpbmNsdWRlQmluKHN0b2NrOiBTdG9ja0ludGVyZmFjZSk6IEJpbkludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHN0b2NrLCAnYmluJywgbmV3IEJpblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbiAgICBpbmNsdWRlUmV0dXJuT3JkZXJMaW5lcyhzdG9jazogU3RvY2tJbnRlcmZhY2UpOiBSZXR1cm5PcmRlckxpbmVJbnRlcmZhY2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oc3RvY2ssICdyZXR1cm5PcmRlckxpbmVzJywgbmV3IFJldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==