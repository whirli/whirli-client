"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BasketLine = _interopRequireDefault(require("../BasketLine"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

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

var BasketLineTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(BasketLineTransformer, _BaseTransformer);

  function BasketLineTransformer() {
    _classCallCheck(this, BasketLineTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(BasketLineTransformer).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRMaW5lVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQmFza2V0TGluZVRyYW5zZm9ybWVyIiwiYmFza2V0TGluZSIsIkJhc2tldExpbmUiLCJpZCIsInF1YW50aXR5IiwiY3JlYXRlZEF0IiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWRfYXQiLCJwcm9kdWN0VmFyaWFudCIsImluY2x1ZGVQcm9kdWN0VmFyaWFudCIsIml0ZW0iLCJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHFCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFUsRUFBZ0Q7QUFDcEQsYUFBTyxJQUFJQyxzQkFBSixDQUFlO0FBQ2xCQyxRQUFBQSxFQUFFLEVBQUVGLFVBQVUsQ0FBQ0UsRUFERztBQUVsQkMsUUFBQUEsUUFBUSxFQUFFSCxVQUFVLENBQUNHLFFBRkg7QUFHbEJDLFFBQUFBLFNBQVMsRUFBRUosVUFBVSxDQUFDSyxVQUhKO0FBSWxCQyxRQUFBQSxTQUFTLEVBQUVOLFVBQVUsQ0FBQ08sVUFKSjtBQUtsQkMsUUFBQUEsY0FBYyxFQUFFLEtBQUtDLHFCQUFMLENBQTJCVCxVQUEzQjtBQUxFLE9BQWYsQ0FBUDtBQU9IOzs7MENBQ3FCQSxVLEVBQTJEO0FBQzdFLGFBQU8sS0FBS1UsSUFBTCxDQUFVVixVQUFWLEVBQXNCLGlCQUF0QixFQUF5QyxJQUFJVyxxQ0FBSixFQUF6QyxDQUFQO0FBQ0g7Ozs7RUFqQjhDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNrZXRMaW5lIGZyb20gJy4uL0Jhc2tldExpbmUnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50IGZyb20gJy4uLy4uL3Byb2R1Y3QvUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IHsgQVBJQmFza2V0TGluZSBhcyBBUElCYXNrZXRMaW5lSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iYXNrZXQvQmFza2V0TGluZSc7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFza2V0TGluZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYmFza2V0IGxpbmUgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBiYXNrZXRMaW5lXG4gICAgICovXG4gICAgbWFwRGF0YShiYXNrZXRMaW5lOiBBUElCYXNrZXRMaW5lSW50ZXJmYWNlKTogQmFza2V0TGluZSB7XG4gICAgICAgIHJldHVybiBuZXcgQmFza2V0TGluZSh7XG4gICAgICAgICAgICBpZDogYmFza2V0TGluZS5pZCxcbiAgICAgICAgICAgIHF1YW50aXR5OiBiYXNrZXRMaW5lLnF1YW50aXR5LFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBiYXNrZXRMaW5lLmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGJhc2tldExpbmUudXBkYXRlZF9hdCxcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50OiB0aGlzLmluY2x1ZGVQcm9kdWN0VmFyaWFudChiYXNrZXRMaW5lKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluY2x1ZGVQcm9kdWN0VmFyaWFudChiYXNrZXRMaW5lOiBBUElCYXNrZXRMaW5lSW50ZXJmYWNlKTogUHJvZHVjdFZhcmlhbnQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShiYXNrZXRMaW5lLCAncHJvZHVjdF92YXJpYW50JywgbmV3IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19