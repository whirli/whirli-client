"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ShippingService = _interopRequireDefault(require("../ShippingService"));

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

var ShippingServiceTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ShippingServiceTransformer, _BaseTransformer);

  var _super = _createSuper(ShippingServiceTransformer);

  function ShippingServiceTransformer() {
    _classCallCheck(this, ShippingServiceTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ShippingServiceTransformer, [{
    key: "mapData",
    value:
    /**
     * Map an shipping addon response
     *
     * @param shippingService
     */
    function mapData(shippingService) {
      return new _ShippingService["default"]({
        name: shippingService.name,
        courier: shippingService.courier
      });
    }
  }]);

  return ShippingServiceTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ShippingServiceTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1NoaXBwaW5nU2VydmljZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlNoaXBwaW5nU2VydmljZVRyYW5zZm9ybWVyIiwic2hpcHBpbmdTZXJ2aWNlIiwiU2hpcHBpbmdTZXJ2aWNlIiwibmFtZSIsImNvdXJpZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLDBCOzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0kscUJBQVFDLGVBQVIsRUFBb0U7QUFDaEUsYUFBTyxJQUFJQywyQkFBSixDQUFvQjtBQUN2QkMsUUFBQUEsSUFBSSxFQUFFRixlQUFlLENBQUNFLElBREM7QUFFdkJDLFFBQUFBLE9BQU8sRUFBRUgsZUFBZSxDQUFDRztBQUZGLE9BQXBCLENBQVA7QUFJSDs7OztFQVhtREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU2hpcHBpbmdTZXJ2aWNlIGZyb20gJy4uL1NoaXBwaW5nU2VydmljZSc7XG5pbXBvcnQgU2hpcHBpbmdTZXJ2aWNlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZGVsaXZlcnkvU2hpcHBpbmdTZXJ2aWNlSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdTZXJ2aWNlVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBzaGlwcGluZyBhZGRvbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNoaXBwaW5nU2VydmljZVxuICAgICAqL1xuICAgIG1hcERhdGEoc2hpcHBpbmdTZXJ2aWNlOiBTaGlwcGluZ1NlcnZpY2VJbnRlcmZhY2UpOiBTaGlwcGluZ1NlcnZpY2Uge1xuICAgICAgICByZXR1cm4gbmV3IFNoaXBwaW5nU2VydmljZSh7XG4gICAgICAgICAgICBuYW1lOiBzaGlwcGluZ1NlcnZpY2UubmFtZSxcbiAgICAgICAgICAgIGNvdXJpZXI6IHNoaXBwaW5nU2VydmljZS5jb3VyaWVyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=