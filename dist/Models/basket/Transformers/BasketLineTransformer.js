"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BasketLine = _interopRequireDefault(require("../BasketLine"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

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

var BasketLineTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(BasketLineTransformer, _BaseTransformer);

  var _super = _createSuper(BasketLineTransformer);

  function BasketLineTransformer() {
    _classCallCheck(this, BasketLineTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(BasketLineTransformer, [{
    key: "mapData",
    value:
    /**
     * Map basket line response
     *
     * @param basketLine
     */
    function mapData(basketLine) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRMaW5lVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQmFza2V0TGluZVRyYW5zZm9ybWVyIiwiYmFza2V0TGluZSIsIkJhc2tldExpbmUiLCJpZCIsInF1YW50aXR5IiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXQiLCJwcm9kdWN0VmFyaWFudCIsImluY2x1ZGVQcm9kdWN0VmFyaWFudCIsIml0ZW0iLCJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxxQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLHFCQUFRQyxVQUFSLEVBQXdEO0FBQ3BELGFBQU8sSUFBSUMsc0JBQUosQ0FBZTtBQUNsQkMsUUFBQUEsRUFBRSxFQUFFRixVQUFVLENBQUNFLEVBREc7QUFFbEJDLFFBQUFBLFFBQVEsRUFBRUgsVUFBVSxDQUFDRyxRQUZIO0FBR2xCQyxRQUFBQSxTQUFTLEVBQUVKLFVBQVUsQ0FBQ0ssVUFISjtBQUlsQkMsUUFBQUEsU0FBUyxFQUFFTixVQUFVLENBQUNPLFVBSko7QUFLbEJDLFFBQUFBLGNBQWMsRUFBRSxLQUFLQyxxQkFBTCxDQUEyQlQsVUFBM0I7QUFMRSxPQUFmLENBQVA7QUFPSDs7O1dBQ0QsK0JBQXNCQSxVQUF0QixFQUFpRjtBQUM3RSxhQUFPLEtBQUtVLElBQUwsQ0FBVVYsVUFBVixFQUFzQixpQkFBdEIsRUFBeUMsSUFBSVcscUNBQUosRUFBekMsQ0FBUDtBQUNIOzs7O0VBakI4Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFza2V0TGluZSBmcm9tICcuLi9CYXNrZXRMaW5lJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudCBmcm9tICcuLi8uLi9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCB7IEFQSUJhc2tldExpbmUgYXMgQVBJQmFza2V0TGluZUludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmFza2V0L0Jhc2tldExpbmUnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2tldExpbmVUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGJhc2tldCBsaW5lIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmFza2V0TGluZVxuICAgICAqL1xuICAgIG1hcERhdGEoYmFza2V0TGluZTogQVBJQmFza2V0TGluZUludGVyZmFjZSk6IEJhc2tldExpbmUge1xuICAgICAgICByZXR1cm4gbmV3IEJhc2tldExpbmUoe1xuICAgICAgICAgICAgaWQ6IGJhc2tldExpbmUuaWQsXG4gICAgICAgICAgICBxdWFudGl0eTogYmFza2V0TGluZS5xdWFudGl0eSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYmFza2V0TGluZS5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBiYXNrZXRMaW5lLnVwZGF0ZWRfYXQsXG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudDogdGhpcy5pbmNsdWRlUHJvZHVjdFZhcmlhbnQoYmFza2V0TGluZSksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbmNsdWRlUHJvZHVjdFZhcmlhbnQoYmFza2V0TGluZTogQVBJQmFza2V0TGluZUludGVyZmFjZSk6IFByb2R1Y3RWYXJpYW50IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oYmFza2V0TGluZSwgJ3Byb2R1Y3RfdmFyaWFudCcsIG5ldyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==