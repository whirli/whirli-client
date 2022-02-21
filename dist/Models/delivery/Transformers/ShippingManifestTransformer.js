"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ShippingManifest = _interopRequireDefault(require("../ShippingManifest"));

var _ShippingServiceTransformer = _interopRequireDefault(require("./ShippingServiceTransformer"));

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

var ShippingManifestTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ShippingManifestTransformer, _BaseTransformer);

  function ShippingManifestTransformer() {
    _classCallCheck(this, ShippingManifestTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShippingManifestTransformer).apply(this, arguments));
  }

  _createClass(ShippingManifestTransformer, [{
    key: "mapData",

    /**
     * Map an shippingManifest response
     *
     * @param shippingManifest
     */
    value: function mapData(shippingManifest) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1NoaXBwaW5nTWFuaWZlc3RUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTaGlwcGluZ01hbmlmZXN0VHJhbnNmb3JtZXIiLCJzaGlwcGluZ01hbmlmZXN0IiwiU2hpcHBpbmdNYW5pZmVzdCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiYmFyY29kZSIsInBhcmNlbHMiLCJvdmVyc2l6ZWQiLCJ3ZWlnaHQiLCJleHRyYURhdGEiLCJzaGlwcGluZ1NlcnZpY2UiLCJpbmNsdWRlU2hpcHBpbmdTZXJ2aWNlIiwidW5kZWZpbmVkIiwiaXRlbSIsIlNoaXBwaW5nU2VydmljZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDJCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLGdCLEVBQStEO0FBQ25FLGFBQU8sSUFBSUMsNEJBQUosQ0FBcUI7QUFDeEJDLFFBQUFBLEVBQUUsRUFBRUYsZ0JBQWdCLENBQUNFLEVBREc7QUFFeEJDLFFBQUFBLFNBQVMsRUFBRUgsZ0JBQWdCLENBQUNHLFNBRko7QUFHeEJDLFFBQUFBLFNBQVMsRUFBRUosZ0JBQWdCLENBQUNJLFNBSEo7QUFJeEJDLFFBQUFBLE9BQU8sRUFBRUwsZ0JBQWdCLENBQUNLLE9BSkY7QUFLeEJDLFFBQUFBLE9BQU8sRUFBRU4sZ0JBQWdCLENBQUNNLE9BTEY7QUFNeEJDLFFBQUFBLFNBQVMsRUFBRVAsZ0JBQWdCLENBQUNPLFNBTko7QUFPeEJDLFFBQUFBLE1BQU0sRUFBRVIsZ0JBQWdCLENBQUNRLE1BUEQ7QUFReEJDLFFBQUFBLFNBQVMsRUFBRVQsZ0JBQWdCLENBQUNTLFNBUko7QUFTeEJDLFFBQUFBLGVBQWUsRUFBRSxLQUFLQyxzQkFBTCxDQUE0QlgsZ0JBQTVCLEtBQWlEWTtBQVQxQyxPQUFyQixDQUFQO0FBV0g7OzsyQ0FFc0JaLGdCLEVBQThFO0FBQ2pHLGFBQU8sS0FBS2EsSUFBTCxDQUFVYixnQkFBVixFQUE0QixpQkFBNUIsRUFBK0MsSUFBSWMsc0NBQUosRUFBL0MsQ0FBUDtBQUNIOzs7O0VBdEJvREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU2hpcHBpbmdNYW5pZmVzdCBmcm9tICcuLi9TaGlwcGluZ01hbmlmZXN0JztcbmltcG9ydCBTaGlwcGluZ01hbmlmZXN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZGVsaXZlcnkvU2hpcHBpbmdNYW5pZmVzdEludGVyZmFjZSc7XG5pbXBvcnQgU2hpcHBpbmdTZXJ2aWNlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZGVsaXZlcnkvU2hpcHBpbmdTZXJ2aWNlSW50ZXJmYWNlJztcbmltcG9ydCBTaGlwcGluZ1NlcnZpY2VUcmFuc2Zvcm1lciBmcm9tICcuL1NoaXBwaW5nU2VydmljZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdNYW5pZmVzdFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gc2hpcHBpbmdNYW5pZmVzdCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNoaXBwaW5nTWFuaWZlc3RcbiAgICAgKi9cbiAgICBtYXBEYXRhKHNoaXBwaW5nTWFuaWZlc3Q6IFNoaXBwaW5nTWFuaWZlc3RJbnRlcmZhY2UpOiBTaGlwcGluZ01hbmlmZXN0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBTaGlwcGluZ01hbmlmZXN0KHtcbiAgICAgICAgICAgIGlkOiBzaGlwcGluZ01hbmlmZXN0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBzaGlwcGluZ01hbmlmZXN0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogc2hpcHBpbmdNYW5pZmVzdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBiYXJjb2RlOiBzaGlwcGluZ01hbmlmZXN0LmJhcmNvZGUsXG4gICAgICAgICAgICBwYXJjZWxzOiBzaGlwcGluZ01hbmlmZXN0LnBhcmNlbHMsXG4gICAgICAgICAgICBvdmVyc2l6ZWQ6IHNoaXBwaW5nTWFuaWZlc3Qub3ZlcnNpemVkLFxuICAgICAgICAgICAgd2VpZ2h0OiBzaGlwcGluZ01hbmlmZXN0LndlaWdodCxcbiAgICAgICAgICAgIGV4dHJhRGF0YTogc2hpcHBpbmdNYW5pZmVzdC5leHRyYURhdGEsXG4gICAgICAgICAgICBzaGlwcGluZ1NlcnZpY2U6IHRoaXMuaW5jbHVkZVNoaXBwaW5nU2VydmljZShzaGlwcGluZ01hbmlmZXN0KSB8fCB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVTaGlwcGluZ1NlcnZpY2Uoc2hpcHBpbmdNYW5pZmVzdDogU2hpcHBpbmdNYW5pZmVzdEludGVyZmFjZSk6IFNoaXBwaW5nU2VydmljZUludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHNoaXBwaW5nTWFuaWZlc3QsICdzaGlwcGluZ1NlcnZpY2UnLCBuZXcgU2hpcHBpbmdTZXJ2aWNlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19