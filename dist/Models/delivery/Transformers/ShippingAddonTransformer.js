"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ShippingAddon = _interopRequireDefault(require("../ShippingAddon"));

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

var ShippingAddonTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ShippingAddonTransformer, _BaseTransformer);

  var _super = _createSuper(ShippingAddonTransformer);

  function ShippingAddonTransformer() {
    _classCallCheck(this, ShippingAddonTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1NoaXBwaW5nQWRkb25UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJTaGlwcGluZ0FkZG9uVHJhbnNmb3JtZXIiLCJzaGlwcGluZ0FkZG9uIiwiU2hpcHBpbmdBZGRvbiIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwib3JpZ2luYWxDb3N0Iiwib3JkZXJDaGVja291dENvc3QiLCJ0eXBlSWQiLCJkZWxheSIsImV4cGVjdGVkRGVsaXZlcnlEYXRlIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx3Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTs0QkFDWUMsYSxFQUFzRDtBQUMxRCxhQUFPLElBQUlDLHlCQUFKLENBQWtCO0FBQ3JCQyxRQUFBQSxFQUFFLEVBQUVGLGFBQWEsQ0FBQ0UsRUFERztBQUVyQkMsUUFBQUEsSUFBSSxFQUFFSCxhQUFhLENBQUNHLElBRkM7QUFHckJDLFFBQUFBLFdBQVcsRUFBRUosYUFBYSxDQUFDSSxXQUhOO0FBSXJCQyxRQUFBQSxZQUFZLEVBQUVMLGFBQWEsQ0FBQ0ssWUFKUDtBQUtyQkMsUUFBQUEsaUJBQWlCLEVBQUVOLGFBQWEsQ0FBQ00saUJBTFo7QUFNckJDLFFBQUFBLE1BQU0sRUFBRVAsYUFBYSxDQUFDTyxNQU5EO0FBT3JCQyxRQUFBQSxLQUFLLEVBQUVSLGFBQWEsQ0FBQ1EsS0FQQTtBQVFyQkMsUUFBQUEsb0JBQW9CLEVBQUVULGFBQWEsQ0FBQ1M7QUFSZixPQUFsQixDQUFQO0FBVUg7Ozs7RUFqQmlEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwcGluZ0FkZG9uIGZyb20gJy4uL1NoaXBwaW5nQWRkb24nO1xuaW1wb3J0IFNoaXBwaW5nQWRkb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9kZWxpdmVyeS9TaGlwcGluZ0FkZG9uJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdBZGRvblRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gc2hpcHBpbmcgYWRkb24gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzaGlwcGluZ0FkZG9uXG4gICAgICovXG4gICAgbWFwRGF0YShzaGlwcGluZ0FkZG9uOiBTaGlwcGluZ0FkZG9uSW50ZXJmYWNlKTogU2hpcHBpbmdBZGRvbiB7XG4gICAgICAgIHJldHVybiBuZXcgU2hpcHBpbmdBZGRvbih7XG4gICAgICAgICAgICBpZDogc2hpcHBpbmdBZGRvbi5pZCxcbiAgICAgICAgICAgIG5hbWU6IHNoaXBwaW5nQWRkb24ubmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzaGlwcGluZ0FkZG9uLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3JpZ2luYWxDb3N0OiBzaGlwcGluZ0FkZG9uLm9yaWdpbmFsQ29zdCxcbiAgICAgICAgICAgIG9yZGVyQ2hlY2tvdXRDb3N0OiBzaGlwcGluZ0FkZG9uLm9yZGVyQ2hlY2tvdXRDb3N0LFxuICAgICAgICAgICAgdHlwZUlkOiBzaGlwcGluZ0FkZG9uLnR5cGVJZCxcbiAgICAgICAgICAgIGRlbGF5OiBzaGlwcGluZ0FkZG9uLmRlbGF5LFxuICAgICAgICAgICAgZXhwZWN0ZWREZWxpdmVyeURhdGU6IHNoaXBwaW5nQWRkb24uZXhwZWN0ZWREZWxpdmVyeURhdGUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==