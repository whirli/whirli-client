"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Basket = _interopRequireDefault(require("../Basket"));

var _BasketLineTransformer = _interopRequireDefault(require("./BasketLineTransformer"));

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

var BasketTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(BasketTransformer, _BaseTransformer);

  function BasketTransformer() {
    _classCallCheck(this, BasketTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(BasketTransformer).apply(this, arguments));
  }

  _createClass(BasketTransformer, [{
    key: "mapData",

    /**
     * Map basket response
     *
     * @param basket
     */
    value: function mapData(basket) {
      return new _Basket["default"]({
        id: basket.id,
        totalTokens: basket.totalTokens,
        createdAt: basket.createdAt,
        updatedAt: basket.updatedAt,
        basketLines: this.includeBasketLines(basket)
      });
    }
  }, {
    key: "includeBasketLines",
    value: function includeBasketLines(basket) {
      return this.collection(basket, 'basket_lines', new _BasketLineTransformer["default"]());
    }
  }]);

  return BasketTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = BasketTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJCYXNrZXRUcmFuc2Zvcm1lciIsImJhc2tldCIsIkJhc2tldCIsImlkIiwidG90YWxUb2tlbnMiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJiYXNrZXRMaW5lcyIsImluY2x1ZGVCYXNrZXRMaW5lcyIsImNvbGxlY3Rpb24iLCJCYXNrZXRMaW5lVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsTSxFQUFpQztBQUNyQyxhQUFPLElBQUlDLGtCQUFKLENBQVc7QUFDZEMsUUFBQUEsRUFBRSxFQUFFRixNQUFNLENBQUNFLEVBREc7QUFFZEMsUUFBQUEsV0FBVyxFQUFFSCxNQUFNLENBQUNHLFdBRk47QUFHZEMsUUFBQUEsU0FBUyxFQUFFSixNQUFNLENBQUNJLFNBSEo7QUFJZEMsUUFBQUEsU0FBUyxFQUFFTCxNQUFNLENBQUNLLFNBSko7QUFLZEMsUUFBQUEsV0FBVyxFQUFFLEtBQUtDLGtCQUFMLENBQXdCUCxNQUF4QjtBQUxDLE9BQVgsQ0FBUDtBQU9IOzs7dUNBQ2tCQSxNLEVBQTRDO0FBQzNELGFBQU8sS0FBS1EsVUFBTCxDQUFnQlIsTUFBaEIsRUFBd0IsY0FBeEIsRUFBd0MsSUFBSVMsaUNBQUosRUFBeEMsQ0FBUDtBQUNIOzs7O0VBakIwQ0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFza2V0IGZyb20gJy4uL0Jhc2tldCc7XG5pbXBvcnQgQmFza2V0TGluZSBmcm9tICcuLi9CYXNrZXRMaW5lJztcbmltcG9ydCB7IEJhc2tldCBhcyBCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IEJhc2tldExpbmVUcmFuc2Zvcm1lciBmcm9tICcuL0Jhc2tldExpbmVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2tldFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYmFza2V0IHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmFza2V0XG4gICAgICovXG4gICAgbWFwRGF0YShiYXNrZXQ6IEJhc2tldEludGVyZmFjZSk6IEJhc2tldCB7XG4gICAgICAgIHJldHVybiBuZXcgQmFza2V0KHtcbiAgICAgICAgICAgIGlkOiBiYXNrZXQuaWQsXG4gICAgICAgICAgICB0b3RhbFRva2VuczogYmFza2V0LnRvdGFsVG9rZW5zLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBiYXNrZXQuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBiYXNrZXQudXBkYXRlZEF0LFxuICAgICAgICAgICAgYmFza2V0TGluZXM6IHRoaXMuaW5jbHVkZUJhc2tldExpbmVzKGJhc2tldCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbmNsdWRlQmFza2V0TGluZXMoYmFza2V0OiBCYXNrZXRJbnRlcmZhY2UpOiBBcnJheTxCYXNrZXRMaW5lPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oYmFza2V0LCAnYmFza2V0X2xpbmVzJywgbmV3IEJhc2tldExpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=