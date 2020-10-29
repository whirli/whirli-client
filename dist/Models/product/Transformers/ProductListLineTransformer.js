"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ProductListLine = _interopRequireDefault(require("../ProductListLine"));

var _ProductListTransformer = _interopRequireDefault(require("./ProductListTransformer"));

var _ProductVariantTransformer = _interopRequireDefault(require("./ProductVariantTransformer"));

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

var ProductListLineTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductListLineTransformer, _BaseTransformer);

  function ProductListLineTransformer() {
    _classCallCheck(this, ProductListLineTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductListLineTransformer).apply(this, arguments));
  }

  _createClass(ProductListLineTransformer, [{
    key: "mapData",
    value: function mapData(productListLine) {
      return new _ProductListLine["default"]({
        id: productListLine.id,
        createdAt: productListLine.createdAt,
        updatedAt: productListLine.updatedAt,
        gifted: productListLine.gifted,
        // Belongs to
        productList: this.includeProductList(productListLine) || undefined,
        productVariant: this.includeProductVariant(productListLine) || undefined
      });
    }
  }, {
    key: "includeProductList",
    value: function includeProductList(productListLine) {
      return this.item(productListLine, 'productList', new _ProductListTransformer["default"]());
    }
  }, {
    key: "includeProductVariant",
    value: function includeProductVariant(productListLine) {
      return this.item(productListLine, 'productVariant', new _ProductVariantTransformer["default"]());
    }
  }]);

  return ProductListLineTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductListLineTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdExpc3RMaW5lVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUHJvZHVjdExpc3RMaW5lVHJhbnNmb3JtZXIiLCJwcm9kdWN0TGlzdExpbmUiLCJQcm9kdWN0TGlzdExpbmUiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImdpZnRlZCIsInByb2R1Y3RMaXN0IiwiaW5jbHVkZVByb2R1Y3RMaXN0IiwidW5kZWZpbmVkIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJpdGVtIiwiUHJvZHVjdExpc3RUcmFuc2Zvcm1lciIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsMEI7Ozs7Ozs7Ozs7Ozs7NEJBQ1RDLGUsRUFBNEQ7QUFDaEUsYUFBTyxJQUFJQywyQkFBSixDQUFvQjtBQUN2QkMsUUFBQUEsRUFBRSxFQUFFRixlQUFlLENBQUNFLEVBREc7QUFFdkJDLFFBQUFBLFNBQVMsRUFBRUgsZUFBZSxDQUFDRyxTQUZKO0FBR3ZCQyxRQUFBQSxTQUFTLEVBQUVKLGVBQWUsQ0FBQ0ksU0FISjtBQUl2QkMsUUFBQUEsTUFBTSxFQUFFTCxlQUFlLENBQUNLLE1BSkQ7QUFLdkI7QUFDQUMsUUFBQUEsV0FBVyxFQUFFLEtBQUtDLGtCQUFMLENBQXdCUCxlQUF4QixLQUE0Q1EsU0FObEM7QUFPdkJDLFFBQUFBLGNBQWMsRUFBRSxLQUFLQyxxQkFBTCxDQUEyQlYsZUFBM0IsS0FBK0NRO0FBUHhDLE9BQXBCLENBQVA7QUFTSDs7O3VDQUVrQlIsZSxFQUF3RTtBQUN2RixhQUFPLEtBQUtXLElBQUwsQ0FBVVgsZUFBVixFQUEyQixhQUEzQixFQUEwQyxJQUFJWSxrQ0FBSixFQUExQyxDQUFQO0FBQ0g7OzswQ0FFcUJaLGUsRUFBMkU7QUFDN0YsYUFBTyxLQUFLVyxJQUFMLENBQVVYLGVBQVYsRUFBMkIsZ0JBQTNCLEVBQTZDLElBQUlhLHFDQUFKLEVBQTdDLENBQVA7QUFDSDs7OztFQW5CbURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0TGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdExpc3RMaW5lJztcbmltcG9ydCBQcm9kdWN0TGlzdExpbmUgZnJvbSAnLi4vUHJvZHVjdExpc3RMaW5lJztcbmltcG9ydCBQcm9kdWN0TGlzdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdExpc3QnO1xuaW1wb3J0IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0TGlzdFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3RMaW5lVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEocHJvZHVjdExpc3RMaW5lOiBQcm9kdWN0TGlzdExpbmVJbnRlcmZhY2UpOiBQcm9kdWN0TGlzdExpbmUge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RMaXN0TGluZSh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdExpc3RMaW5lLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0TGlzdExpbmUuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBwcm9kdWN0TGlzdExpbmUudXBkYXRlZEF0LFxuICAgICAgICAgICAgZ2lmdGVkOiBwcm9kdWN0TGlzdExpbmUuZ2lmdGVkLFxuICAgICAgICAgICAgLy8gQmVsb25ncyB0b1xuICAgICAgICAgICAgcHJvZHVjdExpc3Q6IHRoaXMuaW5jbHVkZVByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0TGluZSkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQ6IHRoaXMuaW5jbHVkZVByb2R1Y3RWYXJpYW50KHByb2R1Y3RMaXN0TGluZSkgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdExpc3QocHJvZHVjdExpc3RMaW5lOiBQcm9kdWN0TGlzdExpbmVJbnRlcmZhY2UpOiBQcm9kdWN0TGlzdEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3RMaXN0TGluZSwgJ3Byb2R1Y3RMaXN0JywgbmV3IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RWYXJpYW50KHByb2R1Y3RMaXN0TGluZTogUHJvZHVjdExpc3RMaW5lSW50ZXJmYWNlKTogUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0TGlzdExpbmUsICdwcm9kdWN0VmFyaWFudCcsIG5ldyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==