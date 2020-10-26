"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BasketLine = _interopRequireDefault(require("../BasketLine"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

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

var BasketLineTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(BasketLineTransformer, _BaseTransformer);

  var _super = _createSuper(BasketLineTransformer);

  function BasketLineTransformer() {
    _classCallCheck(this, BasketLineTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(BasketLineTransformer, [{
    key: "mapData",

    /**
     * Map basket line response
     *
     * @param basketLine
     */
    value: function mapData(basketLine) {
      return new _BasketLine["default"]({
        id: basketLine.id,
        quantity: basketLine.quantity,
        createdAt: basketLine.created_at,
        updatedAt: basketLine.updated_at,
        productVariant: this.includeProductVariant(basketLine)
      });
    }
  }, {
    key: "includeProductVariant",
    value: function includeProductVariant(basketLine) {
      return this.item(basketLine, 'product_variant', new _ProductVariantTransformer["default"]());
    }
  }]);

  return BasketLineTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = BasketLineTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRMaW5lVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQmFza2V0TGluZVRyYW5zZm9ybWVyIiwiYmFza2V0TGluZSIsIkJhc2tldExpbmUiLCJpZCIsInF1YW50aXR5IiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXQiLCJwcm9kdWN0VmFyaWFudCIsImluY2x1ZGVQcm9kdWN0VmFyaWFudCIsIml0ZW0iLCJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxxQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTs0QkFDWUMsVSxFQUFnRDtBQUNwRCxhQUFPLElBQUlDLHNCQUFKLENBQWU7QUFDbEJDLFFBQUFBLEVBQUUsRUFBRUYsVUFBVSxDQUFDRSxFQURHO0FBRWxCQyxRQUFBQSxRQUFRLEVBQUVILFVBQVUsQ0FBQ0csUUFGSDtBQUdsQkMsUUFBQUEsU0FBUyxFQUFFSixVQUFVLENBQUNLLFVBSEo7QUFJbEJDLFFBQUFBLFNBQVMsRUFBRU4sVUFBVSxDQUFDTyxVQUpKO0FBS2xCQyxRQUFBQSxjQUFjLEVBQUUsS0FBS0MscUJBQUwsQ0FBMkJULFVBQTNCO0FBTEUsT0FBZixDQUFQO0FBT0g7OzswQ0FDcUJBLFUsRUFBMkQ7QUFDN0UsYUFBTyxLQUFLVSxJQUFMLENBQVVWLFVBQVYsRUFBc0IsaUJBQXRCLEVBQXlDLElBQUlXLHFDQUFKLEVBQXpDLENBQVA7QUFDSDs7OztFQWpCOENDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2tldExpbmUgZnJvbSAnLi4vQmFza2V0TGluZSc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnQgZnJvbSAnLi4vLi4vcHJvZHVjdC9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgeyBBUElCYXNrZXRMaW5lIGFzIEFQSUJhc2tldExpbmVJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXRMaW5lJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNrZXRMaW5lVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBiYXNrZXQgbGluZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGJhc2tldExpbmVcbiAgICAgKi9cbiAgICBtYXBEYXRhKGJhc2tldExpbmU6IEFQSUJhc2tldExpbmVJbnRlcmZhY2UpOiBCYXNrZXRMaW5lIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCYXNrZXRMaW5lKHtcbiAgICAgICAgICAgIGlkOiBiYXNrZXRMaW5lLmlkLFxuICAgICAgICAgICAgcXVhbnRpdHk6IGJhc2tldExpbmUucXVhbnRpdHksXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGJhc2tldExpbmUuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYmFza2V0TGluZS51cGRhdGVkX2F0LFxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQ6IHRoaXMuaW5jbHVkZVByb2R1Y3RWYXJpYW50KGJhc2tldExpbmUpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5jbHVkZVByb2R1Y3RWYXJpYW50KGJhc2tldExpbmU6IEFQSUJhc2tldExpbmVJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGJhc2tldExpbmUsICdwcm9kdWN0X3ZhcmlhbnQnLCBuZXcgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=