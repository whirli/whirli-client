"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _StockCheck = _interopRequireDefault(require("../StockCheck"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

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

var StockCheckTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(StockCheckTransformer, _BaseTransformer);

  function StockCheckTransformer() {
    _classCallCheck(this, StockCheckTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(StockCheckTransformer).apply(this, arguments));
  }

  _createClass(StockCheckTransformer, [{
    key: "mapData",
    value: function mapData(stockCheck) {
      return new _StockCheck["default"]({
        id: stockCheck.id,
        user: this.includeUser(stockCheck),
        productVariant: this.includeProductVariant(stockCheck),
        previousTotal: stockCheck.previousTotal,
        verifiedTotal: stockCheck.verifiedTotal,
        checkedAt: stockCheck.checkedAt,
        createdAt: stockCheck.createdAt,
        updatedAt: stockCheck.updatedAt
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(stockCheck) {
      return this.item(stockCheck, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeProductVariant",
    value: function includeProductVariant(stockCheck) {
      return this.item(stockCheck, 'productVariant', new _ProductVariantTransformer["default"]());
    }
  }]);

  return StockCheckTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = StockCheckTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrQ2hlY2tUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTdG9ja0NoZWNrVHJhbnNmb3JtZXIiLCJzdG9ja0NoZWNrIiwiU3RvY2tDaGVjayIsImlkIiwidXNlciIsImluY2x1ZGVVc2VyIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJwcmV2aW91c1RvdGFsIiwidmVyaWZpZWRUb3RhbCIsImNoZWNrZWRBdCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHFCOzs7Ozs7Ozs7Ozs7OzRCQUNUQyxVLEVBQTZDO0FBQ2pELGFBQU8sSUFBSUMsc0JBQUosQ0FBZTtBQUNsQkMsUUFBQUEsRUFBRSxFQUFFRixVQUFVLENBQUNFLEVBREc7QUFFbEJDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCSixVQUFqQixDQUZZO0FBR2xCSyxRQUFBQSxjQUFjLEVBQUUsS0FBS0MscUJBQUwsQ0FBMkJOLFVBQTNCLENBSEU7QUFJbEJPLFFBQUFBLGFBQWEsRUFBRVAsVUFBVSxDQUFDTyxhQUpSO0FBS2xCQyxRQUFBQSxhQUFhLEVBQUVSLFVBQVUsQ0FBQ1EsYUFMUjtBQU1sQkMsUUFBQUEsU0FBUyxFQUFFVCxVQUFVLENBQUNTLFNBTko7QUFPbEJDLFFBQUFBLFNBQVMsRUFBRVYsVUFBVSxDQUFDVSxTQVBKO0FBUWxCQyxRQUFBQSxTQUFTLEVBQUVYLFVBQVUsQ0FBQ1c7QUFSSixPQUFmLENBQVA7QUFVSDs7O2dDQUVXWCxVLEVBQXVEO0FBQy9ELGFBQU8sS0FBS1ksSUFBTCxDQUFVWixVQUFWLEVBQXNCLE1BQXRCLEVBQThCLElBQUlhLDJCQUFKLEVBQTlCLENBQVA7QUFDSDs7OzBDQUVxQmIsVSxFQUFpRTtBQUNuRixhQUFPLEtBQUtZLElBQUwsQ0FBVVosVUFBVixFQUFzQixnQkFBdEIsRUFBd0MsSUFBSWMscUNBQUosRUFBeEMsQ0FBUDtBQUNIOzs7O0VBcEI4Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3RvY2tDaGVja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1N0b2NrQ2hlY2snO1xuaW1wb3J0IFN0b2NrQ2hlY2sgZnJvbSAnLi4vU3RvY2tDaGVjayc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9ja0NoZWNrVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEoc3RvY2tDaGVjazogU3RvY2tDaGVja0ludGVyZmFjZSk6IFN0b2NrQ2hlY2sge1xuICAgICAgICByZXR1cm4gbmV3IFN0b2NrQ2hlY2soe1xuICAgICAgICAgICAgaWQ6IHN0b2NrQ2hlY2suaWQsXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKHN0b2NrQ2hlY2spLFxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQ6IHRoaXMuaW5jbHVkZVByb2R1Y3RWYXJpYW50KHN0b2NrQ2hlY2spLFxuICAgICAgICAgICAgcHJldmlvdXNUb3RhbDogc3RvY2tDaGVjay5wcmV2aW91c1RvdGFsLFxuICAgICAgICAgICAgdmVyaWZpZWRUb3RhbDogc3RvY2tDaGVjay52ZXJpZmllZFRvdGFsLFxuICAgICAgICAgICAgY2hlY2tlZEF0OiBzdG9ja0NoZWNrLmNoZWNrZWRBdCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogc3RvY2tDaGVjay5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHN0b2NrQ2hlY2sudXBkYXRlZEF0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihzdG9ja0NoZWNrOiBTdG9ja0NoZWNrSW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHN0b2NrQ2hlY2ssICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdFZhcmlhbnQoc3RvY2tDaGVjazogU3RvY2tDaGVja0ludGVyZmFjZSk6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oc3RvY2tDaGVjaywgJ3Byb2R1Y3RWYXJpYW50JywgbmV3IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19