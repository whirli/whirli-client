"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ShippingManifest = _interopRequireDefault(require("../ShippingManifest"));

var _ShippingServiceTransformer = _interopRequireDefault(require("./ShippingServiceTransformer"));

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

var ShippingManifestTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ShippingManifestTransformer, _BaseTransformer);

  var _super = _createSuper(ShippingManifestTransformer);

  function ShippingManifestTransformer() {
    _classCallCheck(this, ShippingManifestTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ShippingManifestTransformer, [{
    key: "mapData",
    value:
    /**
     * Map an shippingManifest response
     *
     * @param shippingManifest
     */
    function mapData(shippingManifest) {
      return new _ShippingManifest["default"]({
        id: shippingManifest.id,
        createdAt: shippingManifest.createdAt,
        updatedAt: shippingManifest.updatedAt,
        barcode: shippingManifest.barcode,
        parcels: shippingManifest.parcels,
        oversized: shippingManifest.oversized,
        weight: shippingManifest.weight,
        extraData: shippingManifest.extraData,
        shippingService: this.includeShippingService(shippingManifest) || undefined
      });
    }
  }, {
    key: "includeShippingService",
    value: function includeShippingService(shippingManifest) {
      return this.item(shippingManifest, 'shippingService', new _ShippingServiceTransformer["default"]());
    }
  }]);

  return ShippingManifestTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ShippingManifestTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1NoaXBwaW5nTWFuaWZlc3RUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXIiLCJzaGlwcGluZ01hbmlmZXN0IiwiU2hpcHBpbmdNYW5pZmVzdCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiYmFyY29kZSIsInBhcmNlbHMiLCJvdmVyc2l6ZWQiLCJ3ZWlnaHQiLCJleHRyYURhdGEiLCJzaGlwcGluZ1NlcnZpY2UiLCJpbmNsdWRlU2hpcHBpbmdTZXJ2aWNlIiwidW5kZWZpbmVkIiwiaXRlbSIsIlNoaXBwaW5nU2VydmljZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSwyQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLHFCQUFRQyxnQkFBUixFQUF1RTtBQUNuRSxhQUFPLElBQUlDLDRCQUFKLENBQXFCO0FBQ3hCQyxRQUFBQSxFQUFFLEVBQUVGLGdCQUFnQixDQUFDRSxFQURHO0FBRXhCQyxRQUFBQSxTQUFTLEVBQUVILGdCQUFnQixDQUFDRyxTQUZKO0FBR3hCQyxRQUFBQSxTQUFTLEVBQUVKLGdCQUFnQixDQUFDSSxTQUhKO0FBSXhCQyxRQUFBQSxPQUFPLEVBQUVMLGdCQUFnQixDQUFDSyxPQUpGO0FBS3hCQyxRQUFBQSxPQUFPLEVBQUVOLGdCQUFnQixDQUFDTSxPQUxGO0FBTXhCQyxRQUFBQSxTQUFTLEVBQUVQLGdCQUFnQixDQUFDTyxTQU5KO0FBT3hCQyxRQUFBQSxNQUFNLEVBQUVSLGdCQUFnQixDQUFDUSxNQVBEO0FBUXhCQyxRQUFBQSxTQUFTLEVBQUVULGdCQUFnQixDQUFDUyxTQVJKO0FBU3hCQyxRQUFBQSxlQUFlLEVBQUUsS0FBS0Msc0JBQUwsQ0FBNEJYLGdCQUE1QixLQUFpRFk7QUFUMUMsT0FBckIsQ0FBUDtBQVdIOzs7V0FFRCxnQ0FBdUJaLGdCQUF2QixFQUFxRztBQUNqRyxhQUFPLEtBQUthLElBQUwsQ0FBVWIsZ0JBQVYsRUFBNEIsaUJBQTVCLEVBQStDLElBQUljLHNDQUFKLEVBQS9DLENBQVA7QUFDSDs7OztFQXRCb0RDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFNoaXBwaW5nTWFuaWZlc3QgZnJvbSAnLi4vU2hpcHBpbmdNYW5pZmVzdCc7XG5pbXBvcnQgU2hpcHBpbmdNYW5pZmVzdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2RlbGl2ZXJ5L1NoaXBwaW5nTWFuaWZlc3RJbnRlcmZhY2UnO1xuaW1wb3J0IFNoaXBwaW5nU2VydmljZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2RlbGl2ZXJ5L1NoaXBwaW5nU2VydmljZUludGVyZmFjZSc7XG5pbXBvcnQgU2hpcHBpbmdTZXJ2aWNlVHJhbnNmb3JtZXIgZnJvbSAnLi9TaGlwcGluZ1NlcnZpY2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nTWFuaWZlc3RUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHNoaXBwaW5nTWFuaWZlc3QgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzaGlwcGluZ01hbmlmZXN0XG4gICAgICovXG4gICAgbWFwRGF0YShzaGlwcGluZ01hbmlmZXN0OiBTaGlwcGluZ01hbmlmZXN0SW50ZXJmYWNlKTogU2hpcHBpbmdNYW5pZmVzdCB7XG4gICAgICAgIHJldHVybiBuZXcgU2hpcHBpbmdNYW5pZmVzdCh7XG4gICAgICAgICAgICBpZDogc2hpcHBpbmdNYW5pZmVzdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogc2hpcHBpbmdNYW5pZmVzdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHNoaXBwaW5nTWFuaWZlc3QudXBkYXRlZEF0LFxuICAgICAgICAgICAgYmFyY29kZTogc2hpcHBpbmdNYW5pZmVzdC5iYXJjb2RlLFxuICAgICAgICAgICAgcGFyY2Vsczogc2hpcHBpbmdNYW5pZmVzdC5wYXJjZWxzLFxuICAgICAgICAgICAgb3ZlcnNpemVkOiBzaGlwcGluZ01hbmlmZXN0Lm92ZXJzaXplZCxcbiAgICAgICAgICAgIHdlaWdodDogc2hpcHBpbmdNYW5pZmVzdC53ZWlnaHQsXG4gICAgICAgICAgICBleHRyYURhdGE6IHNoaXBwaW5nTWFuaWZlc3QuZXh0cmFEYXRhLFxuICAgICAgICAgICAgc2hpcHBpbmdTZXJ2aWNlOiB0aGlzLmluY2x1ZGVTaGlwcGluZ1NlcnZpY2Uoc2hpcHBpbmdNYW5pZmVzdCkgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU2hpcHBpbmdTZXJ2aWNlKHNoaXBwaW5nTWFuaWZlc3Q6IFNoaXBwaW5nTWFuaWZlc3RJbnRlcmZhY2UpOiBTaGlwcGluZ1NlcnZpY2VJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShzaGlwcGluZ01hbmlmZXN0LCAnc2hpcHBpbmdTZXJ2aWNlJywgbmV3IFNoaXBwaW5nU2VydmljZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==