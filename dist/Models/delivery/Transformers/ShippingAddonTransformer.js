"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ShippingAddon = _interopRequireDefault(require("../ShippingAddon"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

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

var ShippingAddonTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ShippingAddonTransformer, _BaseTransformer);

  function ShippingAddonTransformer() {
    _classCallCheck(this, ShippingAddonTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShippingAddonTransformer).apply(this, arguments));
  }

  _createClass(ShippingAddonTransformer, [{
    key: "mapData",

    /**
     * Map an shipping addon response
     *
     * @param shippingAddon
     */
    value: function mapData(shippingAddon) {
      return new _ShippingAddon["default"]({
        id: shippingAddon.id,
        name: shippingAddon.name,
        description: shippingAddon.description,
        originalCost: shippingAddon.originalCost,
        orderCheckoutCost: shippingAddon.orderCheckoutCost,
        typeId: shippingAddon.typeId,
        delay: shippingAddon.delay,
        expectedDeliveryDate: shippingAddon.expectedDeliveryDate
      });
    }
  }]);

  return ShippingAddonTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ShippingAddonTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1NoaXBwaW5nQWRkb25UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTaGlwcGluZ0FkZG9uVHJhbnNmb3JtZXIiLCJzaGlwcGluZ0FkZG9uIiwiU2hpcHBpbmdBZGRvbiIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwib3JpZ2luYWxDb3N0Iiwib3JkZXJDaGVja291dENvc3QiLCJ0eXBlSWQiLCJkZWxheSIsImV4cGVjdGVkRGVsaXZlcnlEYXRlIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHdCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLGEsRUFBc0Q7QUFDMUQsYUFBTyxJQUFJQyx5QkFBSixDQUFrQjtBQUNyQkMsUUFBQUEsRUFBRSxFQUFFRixhQUFhLENBQUNFLEVBREc7QUFFckJDLFFBQUFBLElBQUksRUFBRUgsYUFBYSxDQUFDRyxJQUZDO0FBR3JCQyxRQUFBQSxXQUFXLEVBQUVKLGFBQWEsQ0FBQ0ksV0FITjtBQUlyQkMsUUFBQUEsWUFBWSxFQUFFTCxhQUFhLENBQUNLLFlBSlA7QUFLckJDLFFBQUFBLGlCQUFpQixFQUFFTixhQUFhLENBQUNNLGlCQUxaO0FBTXJCQyxRQUFBQSxNQUFNLEVBQUVQLGFBQWEsQ0FBQ08sTUFORDtBQU9yQkMsUUFBQUEsS0FBSyxFQUFFUixhQUFhLENBQUNRLEtBUEE7QUFRckJDLFFBQUFBLG9CQUFvQixFQUFFVCxhQUFhLENBQUNTO0FBUmYsT0FBbEIsQ0FBUDtBQVVIOzs7O0VBakJpREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcHBpbmdBZGRvbiBmcm9tICcuLi9TaGlwcGluZ0FkZG9uJztcbmltcG9ydCBTaGlwcGluZ0FkZG9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZGVsaXZlcnkvU2hpcHBpbmdBZGRvbic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nQWRkb25UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHNoaXBwaW5nIGFkZG9uIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2hpcHBpbmdBZGRvblxuICAgICAqL1xuICAgIG1hcERhdGEoc2hpcHBpbmdBZGRvbjogU2hpcHBpbmdBZGRvbkludGVyZmFjZSk6IFNoaXBwaW5nQWRkb24ge1xuICAgICAgICByZXR1cm4gbmV3IFNoaXBwaW5nQWRkb24oe1xuICAgICAgICAgICAgaWQ6IHNoaXBwaW5nQWRkb24uaWQsXG4gICAgICAgICAgICBuYW1lOiBzaGlwcGluZ0FkZG9uLm5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc2hpcHBpbmdBZGRvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG9yaWdpbmFsQ29zdDogc2hpcHBpbmdBZGRvbi5vcmlnaW5hbENvc3QsXG4gICAgICAgICAgICBvcmRlckNoZWNrb3V0Q29zdDogc2hpcHBpbmdBZGRvbi5vcmRlckNoZWNrb3V0Q29zdCxcbiAgICAgICAgICAgIHR5cGVJZDogc2hpcHBpbmdBZGRvbi50eXBlSWQsXG4gICAgICAgICAgICBkZWxheTogc2hpcHBpbmdBZGRvbi5kZWxheSxcbiAgICAgICAgICAgIGV4cGVjdGVkRGVsaXZlcnlEYXRlOiBzaGlwcGluZ0FkZG9uLmV4cGVjdGVkRGVsaXZlcnlEYXRlLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=