"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _PurchaseStock = _interopRequireDefault(require("../PurchaseStock"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

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

var PurchaseStockTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(PurchaseStockTransformer, _BaseTransformer);

  var _super = _createSuper(PurchaseStockTransformer);

  function PurchaseStockTransformer() {
    _classCallCheck(this, PurchaseStockTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(PurchaseStockTransformer, [{
    key: "mapData",
    value: function mapData(purchaseStock) {
      return new _PurchaseStock["default"]({
        id: purchaseStock.id,
        createdAt: purchaseStock.createdAt,
        updatedAt: purchaseStock.updatedAt,
        statusId: purchaseStock.statusId,
        // Belongs to
        productVariant: this.includeProductVariant(purchaseStock) || undefined,
        user: this.includeUser(purchaseStock) || undefined,
        // Accessors
        availableForOrder: purchaseStock.availableForOrder,
        daysToKeep: purchaseStock.daysToKeep,
        orderDate: purchaseStock.orderDate,
        daysHeld: purchaseStock.daysHeld,
        keepPrice: purchaseStock.keepPrice
      });
    }
  }, {
    key: "includeProductVariant",
    value: function includeProductVariant(purchaseStock) {
      return this.item(purchaseStock, 'productVariant', new _ProductVariantTransformer["default"]());
    }
  }, {
    key: "includeUser",
    value: function includeUser(purchaseStock) {
      return this.item(purchaseStock, 'user', new _UserTransformer["default"]());
    }
  }]);

  return PurchaseStockTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = PurchaseStockTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3RvY2svVHJhbnNmb3JtZXJzL1B1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXIiLCJwdXJjaGFzZVN0b2NrIiwiUHVyY2hhc2VTdG9jayIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic3RhdHVzSWQiLCJwcm9kdWN0VmFyaWFudCIsImluY2x1ZGVQcm9kdWN0VmFyaWFudCIsInVuZGVmaW5lZCIsInVzZXIiLCJpbmNsdWRlVXNlciIsImF2YWlsYWJsZUZvck9yZGVyIiwiZGF5c1RvS2VlcCIsIm9yZGVyRGF0ZSIsImRheXNIZWxkIiwia2VlcFByaWNlIiwiaXRlbSIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJVc2VyVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHdCOzs7Ozs7Ozs7Ozs7OzRCQUNUQyxhLEVBQXNEO0FBQzFELGFBQU8sSUFBSUMseUJBQUosQ0FBa0I7QUFDckJDLFFBQUFBLEVBQUUsRUFBRUYsYUFBYSxDQUFDRSxFQURHO0FBRXJCQyxRQUFBQSxTQUFTLEVBQUVILGFBQWEsQ0FBQ0csU0FGSjtBQUdyQkMsUUFBQUEsU0FBUyxFQUFFSixhQUFhLENBQUNJLFNBSEo7QUFJckJDLFFBQUFBLFFBQVEsRUFBRUwsYUFBYSxDQUFDSyxRQUpIO0FBS3JCO0FBQ0FDLFFBQUFBLGNBQWMsRUFBRSxLQUFLQyxxQkFBTCxDQUEyQlAsYUFBM0IsS0FBNkNRLFNBTnhDO0FBT3JCQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQlYsYUFBakIsS0FBbUNRLFNBUHBCO0FBUXJCO0FBQ0FHLFFBQUFBLGlCQUFpQixFQUFFWCxhQUFhLENBQUNXLGlCQVRaO0FBVXJCQyxRQUFBQSxVQUFVLEVBQUVaLGFBQWEsQ0FBQ1ksVUFWTDtBQVdyQkMsUUFBQUEsU0FBUyxFQUFFYixhQUFhLENBQUNhLFNBWEo7QUFZckJDLFFBQUFBLFFBQVEsRUFBRWQsYUFBYSxDQUFDYyxRQVpIO0FBYXJCQyxRQUFBQSxTQUFTLEVBQUVmLGFBQWEsQ0FBQ2U7QUFiSixPQUFsQixDQUFQO0FBZUg7OzswQ0FFcUJmLGEsRUFBdUU7QUFDekYsYUFBTyxLQUFLZ0IsSUFBTCxDQUFVaEIsYUFBVixFQUF5QixnQkFBekIsRUFBMkMsSUFBSWlCLHFDQUFKLEVBQTNDLENBQVA7QUFDSDs7O2dDQUVXakIsYSxFQUE2RDtBQUNyRSxhQUFPLEtBQUtnQixJQUFMLENBQVVoQixhQUFWLEVBQXlCLE1BQXpCLEVBQWlDLElBQUlrQiwyQkFBSixFQUFqQyxDQUFQO0FBQ0g7Ozs7RUF6QmlEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBQdXJjaGFzZVN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svUHVyY2hhc2VTdG9jayc7XG5pbXBvcnQgUHVyY2hhc2VTdG9jayBmcm9tICcuLi9QdXJjaGFzZVN0b2NrJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgbWFwRGF0YShwdXJjaGFzZVN0b2NrOiBQdXJjaGFzZVN0b2NrSW50ZXJmYWNlKTogUHVyY2hhc2VTdG9jayB7XG4gICAgICAgIHJldHVybiBuZXcgUHVyY2hhc2VTdG9jayh7XG4gICAgICAgICAgICBpZDogcHVyY2hhc2VTdG9jay5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcHVyY2hhc2VTdG9jay5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHB1cmNoYXNlU3RvY2sudXBkYXRlZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHB1cmNoYXNlU3RvY2suc3RhdHVzSWQsXG4gICAgICAgICAgICAvLyBCZWxvbmdzIHRvXG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudDogdGhpcy5pbmNsdWRlUHJvZHVjdFZhcmlhbnQocHVyY2hhc2VTdG9jaykgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgdXNlcjogdGhpcy5pbmNsdWRlVXNlcihwdXJjaGFzZVN0b2NrKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAvLyBBY2Nlc3NvcnNcbiAgICAgICAgICAgIGF2YWlsYWJsZUZvck9yZGVyOiBwdXJjaGFzZVN0b2NrLmF2YWlsYWJsZUZvck9yZGVyLFxuICAgICAgICAgICAgZGF5c1RvS2VlcDogcHVyY2hhc2VTdG9jay5kYXlzVG9LZWVwLFxuICAgICAgICAgICAgb3JkZXJEYXRlOiBwdXJjaGFzZVN0b2NrLm9yZGVyRGF0ZSxcbiAgICAgICAgICAgIGRheXNIZWxkOiBwdXJjaGFzZVN0b2NrLmRheXNIZWxkLFxuICAgICAgICAgICAga2VlcFByaWNlOiBwdXJjaGFzZVN0b2NrLmtlZXBQcmljZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RWYXJpYW50KHB1cmNoYXNlU3RvY2s6IFB1cmNoYXNlU3RvY2tJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHB1cmNoYXNlU3RvY2ssICdwcm9kdWN0VmFyaWFudCcsIG5ldyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyKHB1cmNoYXNlU3RvY2s6IFB1cmNoYXNlU3RvY2tJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHVyY2hhc2VTdG9jaywgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==