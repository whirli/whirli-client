"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ShippingService = _interopRequireDefault(require("../ShippingService"));

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

var ShippingServiceTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ShippingServiceTransformer, _BaseTransformer);

  function ShippingServiceTransformer() {
    _classCallCheck(this, ShippingServiceTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShippingServiceTransformer).apply(this, arguments));
  }

  _createClass(ShippingServiceTransformer, [{
    key: "mapData",

    /**
     * Map an shipping addon response
     *
     * @param shippingService
     */
    value: function mapData(shippingService) {
      return new _ShippingService["default"]({
        name: shippingService.name,
        courier: shippingService.courier
      });
    }
  }]);

  return ShippingServiceTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ShippingServiceTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1NoaXBwaW5nU2VydmljZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlNoaXBwaW5nU2VydmljZVRyYW5zZm9ybWVyIiwic2hpcHBpbmdTZXJ2aWNlIiwiU2hpcHBpbmdTZXJ2aWNlIiwibmFtZSIsImNvdXJpZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsMEI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsZSxFQUE0RDtBQUNoRSxhQUFPLElBQUlDLDJCQUFKLENBQW9CO0FBQ3ZCQyxRQUFBQSxJQUFJLEVBQUVGLGVBQWUsQ0FBQ0UsSUFEQztBQUV2QkMsUUFBQUEsT0FBTyxFQUFFSCxlQUFlLENBQUNHO0FBRkYsT0FBcEIsQ0FBUDtBQUlIOzs7O0VBWG1EQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBTaGlwcGluZ1NlcnZpY2UgZnJvbSAnLi4vU2hpcHBpbmdTZXJ2aWNlJztcbmltcG9ydCBTaGlwcGluZ1NlcnZpY2VJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9kZWxpdmVyeS9TaGlwcGluZ1NlcnZpY2VJbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ1NlcnZpY2VUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHNoaXBwaW5nIGFkZG9uIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2hpcHBpbmdTZXJ2aWNlXG4gICAgICovXG4gICAgbWFwRGF0YShzaGlwcGluZ1NlcnZpY2U6IFNoaXBwaW5nU2VydmljZUludGVyZmFjZSk6IFNoaXBwaW5nU2VydmljZSB7XG4gICAgICAgIHJldHVybiBuZXcgU2hpcHBpbmdTZXJ2aWNlKHtcbiAgICAgICAgICAgIG5hbWU6IHNoaXBwaW5nU2VydmljZS5uYW1lLFxuICAgICAgICAgICAgY291cmllcjogc2hpcHBpbmdTZXJ2aWNlLmNvdXJpZXIsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==