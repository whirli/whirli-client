"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Basket = _interopRequireDefault(require("../Basket"));

var _BasketLineTransformer = _interopRequireDefault(require("./BasketLineTransformer"));

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

var BasketTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(BasketTransformer, _BaseTransformer);

  var _super = _createSuper(BasketTransformer);

  function BasketTransformer() {
    _classCallCheck(this, BasketTransformer);

    return _super.apply(this, arguments);
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
        tokensTotal: basket.tokens_total,
        createdAt: basket.created_at,
        updatedAt: basket.updated_at,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJCYXNrZXRUcmFuc2Zvcm1lciIsImJhc2tldCIsIkJhc2tldCIsImlkIiwidG9rZW5zVG90YWwiLCJ0b2tlbnNfdG90YWwiLCJjcmVhdGVkQXQiLCJjcmVhdGVkX2F0IiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdCIsImJhc2tldExpbmVzIiwiaW5jbHVkZUJhc2tldExpbmVzIiwiY29sbGVjdGlvbiIsIkJhc2tldExpbmVUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsTSxFQUFvQztBQUN4QyxhQUFPLElBQUlDLGtCQUFKLENBQVc7QUFDZEMsUUFBQUEsRUFBRSxFQUFFRixNQUFNLENBQUNFLEVBREc7QUFFZEMsUUFBQUEsV0FBVyxFQUFFSCxNQUFNLENBQUNJLFlBRk47QUFHZEMsUUFBQUEsU0FBUyxFQUFFTCxNQUFNLENBQUNNLFVBSEo7QUFJZEMsUUFBQUEsU0FBUyxFQUFFUCxNQUFNLENBQUNRLFVBSko7QUFLZEMsUUFBQUEsV0FBVyxFQUFFLEtBQUtDLGtCQUFMLENBQXdCVixNQUF4QjtBQUxDLE9BQVgsQ0FBUDtBQU9IOzs7dUNBQ2tCQSxNLEVBQStDO0FBQzlELGFBQU8sS0FBS1csVUFBTCxDQUFnQlgsTUFBaEIsRUFBd0IsY0FBeEIsRUFBd0MsSUFBSVksaUNBQUosRUFBeEMsQ0FBUDtBQUNIOzs7O0VBakIwQ0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFza2V0IGZyb20gJy4uL0Jhc2tldCc7XG5pbXBvcnQgQmFza2V0TGluZSBmcm9tICcuLi9CYXNrZXRMaW5lJztcbmltcG9ydCB7IEFQSUJhc2tldCBhcyBBUElCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IEJhc2tldExpbmVUcmFuc2Zvcm1lciBmcm9tICcuL0Jhc2tldExpbmVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2tldFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYmFza2V0IHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmFza2V0XG4gICAgICovXG4gICAgbWFwRGF0YShiYXNrZXQ6IEFQSUJhc2tldEludGVyZmFjZSk6IEJhc2tldCB7XG4gICAgICAgIHJldHVybiBuZXcgQmFza2V0KHtcbiAgICAgICAgICAgIGlkOiBiYXNrZXQuaWQsXG4gICAgICAgICAgICB0b2tlbnNUb3RhbDogYmFza2V0LnRva2Vuc190b3RhbCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYmFza2V0LmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGJhc2tldC51cGRhdGVkX2F0LFxuICAgICAgICAgICAgYmFza2V0TGluZXM6IHRoaXMuaW5jbHVkZUJhc2tldExpbmVzKGJhc2tldCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbmNsdWRlQmFza2V0TGluZXMoYmFza2V0OiBBUElCYXNrZXRJbnRlcmZhY2UpOiBBcnJheTxCYXNrZXRMaW5lPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oYmFza2V0LCAnYmFza2V0X2xpbmVzJywgbmV3IEJhc2tldExpbmVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=