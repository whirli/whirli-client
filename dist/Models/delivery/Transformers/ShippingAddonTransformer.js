"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ShippingAddon = _interopRequireDefault(require("../ShippingAddon"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

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

var ShippingAddonTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ShippingAddonTransformer, _BaseTransformer);

  var _super = _createSuper(ShippingAddonTransformer);

  function ShippingAddonTransformer() {
    _classCallCheck(this, ShippingAddonTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ShippingAddonTransformer, [{
    key: "mapData",
    value:
    /**
     * Map an shipping addon response
     *
     * @param shippingAddon
     */
    function mapData(shippingAddon) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1NoaXBwaW5nQWRkb25UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTaGlwcGluZ0FkZG9uVHJhbnNmb3JtZXIiLCJzaGlwcGluZ0FkZG9uIiwiU2hpcHBpbmdBZGRvbiIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwib3JpZ2luYWxDb3N0Iiwib3JkZXJDaGVja291dENvc3QiLCJ0eXBlSWQiLCJkZWxheSIsImV4cGVjdGVkRGVsaXZlcnlEYXRlIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx3Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLHFCQUFRQyxhQUFSLEVBQThEO0FBQzFELGFBQU8sSUFBSUMseUJBQUosQ0FBa0I7QUFDckJDLFFBQUFBLEVBQUUsRUFBRUYsYUFBYSxDQUFDRSxFQURHO0FBRXJCQyxRQUFBQSxJQUFJLEVBQUVILGFBQWEsQ0FBQ0csSUFGQztBQUdyQkMsUUFBQUEsV0FBVyxFQUFFSixhQUFhLENBQUNJLFdBSE47QUFJckJDLFFBQUFBLFlBQVksRUFBRUwsYUFBYSxDQUFDSyxZQUpQO0FBS3JCQyxRQUFBQSxpQkFBaUIsRUFBRU4sYUFBYSxDQUFDTSxpQkFMWjtBQU1yQkMsUUFBQUEsTUFBTSxFQUFFUCxhQUFhLENBQUNPLE1BTkQ7QUFPckJDLFFBQUFBLEtBQUssRUFBRVIsYUFBYSxDQUFDUSxLQVBBO0FBUXJCQyxRQUFBQSxvQkFBb0IsRUFBRVQsYUFBYSxDQUFDUztBQVJmLE9BQWxCLENBQVA7QUFVSDs7OztFQWpCaURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXBwaW5nQWRkb24gZnJvbSAnLi4vU2hpcHBpbmdBZGRvbic7XG5pbXBvcnQgU2hpcHBpbmdBZGRvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2RlbGl2ZXJ5L1NoaXBwaW5nQWRkb24nO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0FkZG9uVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBzaGlwcGluZyBhZGRvbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNoaXBwaW5nQWRkb25cbiAgICAgKi9cbiAgICBtYXBEYXRhKHNoaXBwaW5nQWRkb246IFNoaXBwaW5nQWRkb25JbnRlcmZhY2UpOiBTaGlwcGluZ0FkZG9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTaGlwcGluZ0FkZG9uKHtcbiAgICAgICAgICAgIGlkOiBzaGlwcGluZ0FkZG9uLmlkLFxuICAgICAgICAgICAgbmFtZTogc2hpcHBpbmdBZGRvbi5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNoaXBwaW5nQWRkb24uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBvcmlnaW5hbENvc3Q6IHNoaXBwaW5nQWRkb24ub3JpZ2luYWxDb3N0LFxuICAgICAgICAgICAgb3JkZXJDaGVja291dENvc3Q6IHNoaXBwaW5nQWRkb24ub3JkZXJDaGVja291dENvc3QsXG4gICAgICAgICAgICB0eXBlSWQ6IHNoaXBwaW5nQWRkb24udHlwZUlkLFxuICAgICAgICAgICAgZGVsYXk6IHNoaXBwaW5nQWRkb24uZGVsYXksXG4gICAgICAgICAgICBleHBlY3RlZERlbGl2ZXJ5RGF0ZTogc2hpcHBpbmdBZGRvbi5leHBlY3RlZERlbGl2ZXJ5RGF0ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19