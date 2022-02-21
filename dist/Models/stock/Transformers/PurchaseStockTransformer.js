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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PurchaseStockTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(PurchaseStockTransformer, _BaseTransformer);

  function PurchaseStockTransformer() {
    _classCallCheck(this, PurchaseStockTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(PurchaseStockTransformer).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3RvY2svVHJhbnNmb3JtZXJzL1B1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXIiLCJwdXJjaGFzZVN0b2NrIiwiUHVyY2hhc2VTdG9jayIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic3RhdHVzSWQiLCJwcm9kdWN0VmFyaWFudCIsImluY2x1ZGVQcm9kdWN0VmFyaWFudCIsInVuZGVmaW5lZCIsInVzZXIiLCJpbmNsdWRlVXNlciIsImF2YWlsYWJsZUZvck9yZGVyIiwiZGF5c1RvS2VlcCIsIm9yZGVyRGF0ZSIsImRheXNIZWxkIiwia2VlcFByaWNlIiwiaXRlbSIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJVc2VyVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsd0I7Ozs7Ozs7Ozs7Ozs7NEJBQ1RDLGEsRUFBc0Q7QUFDMUQsYUFBTyxJQUFJQyx5QkFBSixDQUFrQjtBQUNyQkMsUUFBQUEsRUFBRSxFQUFFRixhQUFhLENBQUNFLEVBREc7QUFFckJDLFFBQUFBLFNBQVMsRUFBRUgsYUFBYSxDQUFDRyxTQUZKO0FBR3JCQyxRQUFBQSxTQUFTLEVBQUVKLGFBQWEsQ0FBQ0ksU0FISjtBQUlyQkMsUUFBQUEsUUFBUSxFQUFFTCxhQUFhLENBQUNLLFFBSkg7QUFLckI7QUFDQUMsUUFBQUEsY0FBYyxFQUFFLEtBQUtDLHFCQUFMLENBQTJCUCxhQUEzQixLQUE2Q1EsU0FOeEM7QUFPckJDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCVixhQUFqQixLQUFtQ1EsU0FQcEI7QUFRckI7QUFDQUcsUUFBQUEsaUJBQWlCLEVBQUVYLGFBQWEsQ0FBQ1csaUJBVFo7QUFVckJDLFFBQUFBLFVBQVUsRUFBRVosYUFBYSxDQUFDWSxVQVZMO0FBV3JCQyxRQUFBQSxTQUFTLEVBQUViLGFBQWEsQ0FBQ2EsU0FYSjtBQVlyQkMsUUFBQUEsUUFBUSxFQUFFZCxhQUFhLENBQUNjLFFBWkg7QUFhckJDLFFBQUFBLFNBQVMsRUFBRWYsYUFBYSxDQUFDZTtBQWJKLE9BQWxCLENBQVA7QUFlSDs7OzBDQUVxQmYsYSxFQUF1RTtBQUN6RixhQUFPLEtBQUtnQixJQUFMLENBQVVoQixhQUFWLEVBQXlCLGdCQUF6QixFQUEyQyxJQUFJaUIscUNBQUosRUFBM0MsQ0FBUDtBQUNIOzs7Z0NBRVdqQixhLEVBQTZEO0FBQ3JFLGFBQU8sS0FBS2dCLElBQUwsQ0FBVWhCLGFBQVYsRUFBeUIsTUFBekIsRUFBaUMsSUFBSWtCLDJCQUFKLEVBQWpDLENBQVA7QUFDSDs7OztFQXpCaURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFB1cmNoYXNlU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9QdXJjaGFzZVN0b2NrJztcbmltcG9ydCBQdXJjaGFzZVN0b2NrIGZyb20gJy4uL1B1cmNoYXNlU3RvY2snO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKHB1cmNoYXNlU3RvY2s6IFB1cmNoYXNlU3RvY2tJbnRlcmZhY2UpOiBQdXJjaGFzZVN0b2NrIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQdXJjaGFzZVN0b2NrKHtcbiAgICAgICAgICAgIGlkOiBwdXJjaGFzZVN0b2NrLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwdXJjaGFzZVN0b2NrLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcHVyY2hhc2VTdG9jay51cGRhdGVkQXQsXG4gICAgICAgICAgICBzdGF0dXNJZDogcHVyY2hhc2VTdG9jay5zdGF0dXNJZCxcbiAgICAgICAgICAgIC8vIEJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50OiB0aGlzLmluY2x1ZGVQcm9kdWN0VmFyaWFudChwdXJjaGFzZVN0b2NrKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKHB1cmNoYXNlU3RvY2spIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8vIEFjY2Vzc29yc1xuICAgICAgICAgICAgYXZhaWxhYmxlRm9yT3JkZXI6IHB1cmNoYXNlU3RvY2suYXZhaWxhYmxlRm9yT3JkZXIsXG4gICAgICAgICAgICBkYXlzVG9LZWVwOiBwdXJjaGFzZVN0b2NrLmRheXNUb0tlZXAsXG4gICAgICAgICAgICBvcmRlckRhdGU6IHB1cmNoYXNlU3RvY2sub3JkZXJEYXRlLFxuICAgICAgICAgICAgZGF5c0hlbGQ6IHB1cmNoYXNlU3RvY2suZGF5c0hlbGQsXG4gICAgICAgICAgICBrZWVwUHJpY2U6IHB1cmNoYXNlU3RvY2sua2VlcFByaWNlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdFZhcmlhbnQocHVyY2hhc2VTdG9jazogUHVyY2hhc2VTdG9ja0ludGVyZmFjZSk6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHVyY2hhc2VTdG9jaywgJ3Byb2R1Y3RWYXJpYW50JywgbmV3IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIocHVyY2hhc2VTdG9jazogUHVyY2hhc2VTdG9ja0ludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwdXJjaGFzZVN0b2NrLCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19