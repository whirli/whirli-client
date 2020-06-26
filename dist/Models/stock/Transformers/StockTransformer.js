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

var StockTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(StockTransformer, _BaseTransformer);

  var _super = _createSuper(StockTransformer);

  function StockTransformer() {
    _classCallCheck(this, StockTransformer);

    return _super.apply(this, arguments);
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
    key: "includeReturnOrderLines",
    value: function includeReturnOrderLines(stock) {
      return this.collection(stock, 'returnOrderLines', new _ReturnOrderLineTransformer["default"]());
    }
  }]);

  return StockTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = StockTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiU3RvY2tUcmFuc2Zvcm1lciIsInN0b2NrIiwiU3RvY2siLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInN0YXR1c0lkIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJyZXR1cm5PcmRlckxpbmVzIiwiaW5jbHVkZVJldHVybk9yZGVyTGluZXMiLCJpdGVtIiwiUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciIsIlVzZXJUcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJSZXR1cm5PcmRlckxpbmVUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUtBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsSyxFQUE4QjtBQUNsQyxhQUFPLElBQUlDLGlCQUFKLENBQVU7QUFDYkMsUUFBQUEsRUFBRSxFQUFFRixLQUFLLENBQUNFLEVBREc7QUFFYkMsUUFBQUEsU0FBUyxFQUFFSCxLQUFLLENBQUNHLFNBRko7QUFHYkMsUUFBQUEsU0FBUyxFQUFFSixLQUFLLENBQUNJLFNBSEo7QUFJYkMsUUFBQUEsUUFBUSxFQUFFTCxLQUFLLENBQUNLLFFBSkg7QUFLYjtBQUNBQyxRQUFBQSxjQUFjLEVBQUUsS0FBS0MscUJBQUwsQ0FBMkJQLEtBQTNCLENBTkg7QUFPYlEsUUFBQUEsSUFBSSxFQUFFLEtBQUtDLFdBQUwsQ0FBaUJULEtBQWpCLENBUE87QUFRYjtBQUNBVSxRQUFBQSxnQkFBZ0IsRUFBRSxLQUFLQyx1QkFBTCxDQUE2QlgsS0FBN0I7QUFUTCxPQUFWLENBQVA7QUFXSDs7OzBDQUVxQkEsSyxFQUF1RDtBQUN6RSxhQUFPLEtBQUtZLElBQUwsQ0FBVVosS0FBVixFQUFpQixnQkFBakIsRUFBbUMsSUFBSWEscUNBQUosRUFBbkMsQ0FBUDtBQUNIOzs7Z0NBQ1diLEssRUFBNkM7QUFDckQsYUFBTyxLQUFLWSxJQUFMLENBQVVaLEtBQVYsRUFBaUIsTUFBakIsRUFBeUIsSUFBSWMsMkJBQUosRUFBekIsQ0FBUDtBQUNIOzs7NENBQ3VCZCxLLEVBQW1EO0FBQ3ZFLGFBQU8sS0FBS2UsVUFBTCxDQUFnQmYsS0FBaEIsRUFBdUIsa0JBQXZCLEVBQTJDLElBQUlnQixzQ0FBSixFQUEzQyxDQUFQO0FBQ0g7Ozs7RUE1QnlDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9jayBmcm9tICcuLi9TdG9jayc7XG5pbXBvcnQgU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9TdG9jayc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBSZXR1cm5PcmRlckxpbmVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXJMaW5lJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IFJldHVybk9yZGVyTGluZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JldHVybi9UcmFuc2Zvcm1lcnMvUmV0dXJuT3JkZXJMaW5lVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9ja1RyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gc3RvY2sgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdG9ja1xuICAgICAqL1xuICAgIG1hcERhdGEoc3RvY2s6IFN0b2NrSW50ZXJmYWNlKTogU3RvY2sge1xuICAgICAgICByZXR1cm4gbmV3IFN0b2NrKHtcbiAgICAgICAgICAgIGlkOiBzdG9jay5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogc3RvY2suY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBzdG9jay51cGRhdGVkQXQsXG4gICAgICAgICAgICBzdGF0dXNJZDogc3RvY2suc3RhdHVzSWQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudDogdGhpcy5pbmNsdWRlUHJvZHVjdFZhcmlhbnQoc3RvY2spLFxuICAgICAgICAgICAgdXNlcjogdGhpcy5pbmNsdWRlVXNlcihzdG9jayksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcmV0dXJuT3JkZXJMaW5lczogdGhpcy5pbmNsdWRlUmV0dXJuT3JkZXJMaW5lcyhzdG9jayksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0VmFyaWFudChzdG9jazogU3RvY2tJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHN0b2NrLCAncHJvZHVjdFZhcmlhbnQnLCBuZXcgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG4gICAgaW5jbHVkZVVzZXIoc3RvY2s6IFN0b2NrSW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHN0b2NrLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuICAgIGluY2x1ZGVSZXR1cm5PcmRlckxpbmVzKHN0b2NrOiBTdG9ja0ludGVyZmFjZSk6IFJldHVybk9yZGVyTGluZUludGVyZmFjZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihzdG9jaywgJ3JldHVybk9yZGVyTGluZXMnLCBuZXcgUmV0dXJuT3JkZXJMaW5lVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19