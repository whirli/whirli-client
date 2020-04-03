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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJCYXNrZXRUcmFuc2Zvcm1lciIsImJhc2tldCIsIkJhc2tldCIsImlkIiwidG9rZW5zVG90YWwiLCJ0b2tlbnNfdG90YWwiLCJjcmVhdGVkQXQiLCJjcmVhdGVkX2F0IiwidXBkYXRlZEF0IiwidXBkYXRlZF9hdCIsImJhc2tldExpbmVzIiwiaW5jbHVkZUJhc2tldExpbmVzIiwiY29sbGVjdGlvbiIsIkJhc2tldExpbmVUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxNLEVBQW9DO0FBQ3hDLGFBQU8sSUFBSUMsa0JBQUosQ0FBVztBQUNkQyxRQUFBQSxFQUFFLEVBQUVGLE1BQU0sQ0FBQ0UsRUFERztBQUVkQyxRQUFBQSxXQUFXLEVBQUVILE1BQU0sQ0FBQ0ksWUFGTjtBQUdkQyxRQUFBQSxTQUFTLEVBQUVMLE1BQU0sQ0FBQ00sVUFISjtBQUlkQyxRQUFBQSxTQUFTLEVBQUVQLE1BQU0sQ0FBQ1EsVUFKSjtBQUtkQyxRQUFBQSxXQUFXLEVBQUUsS0FBS0Msa0JBQUwsQ0FBd0JWLE1BQXhCO0FBTEMsT0FBWCxDQUFQO0FBT0g7Ozt1Q0FDa0JBLE0sRUFBK0M7QUFDOUQsYUFBTyxLQUFLVyxVQUFMLENBQWdCWCxNQUFoQixFQUF3QixjQUF4QixFQUF3QyxJQUFJWSxpQ0FBSixFQUF4QyxDQUFQO0FBQ0g7Ozs7RUFqQjBDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNrZXQgZnJvbSAnLi4vQmFza2V0JztcbmltcG9ydCBCYXNrZXRMaW5lIGZyb20gJy4uL0Jhc2tldExpbmUnO1xuaW1wb3J0IHsgQVBJQmFza2V0IGFzIEFQSUJhc2tldEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmFza2V0L0Jhc2tldCc7XG5pbXBvcnQgQmFza2V0TGluZVRyYW5zZm9ybWVyIGZyb20gJy4vQmFza2V0TGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFza2V0VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBiYXNrZXQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBiYXNrZXRcbiAgICAgKi9cbiAgICBtYXBEYXRhKGJhc2tldDogQVBJQmFza2V0SW50ZXJmYWNlKTogQmFza2V0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBCYXNrZXQoe1xuICAgICAgICAgICAgaWQ6IGJhc2tldC5pZCxcbiAgICAgICAgICAgIHRva2Vuc1RvdGFsOiBiYXNrZXQudG9rZW5zX3RvdGFsLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBiYXNrZXQuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYmFza2V0LnVwZGF0ZWRfYXQsXG4gICAgICAgICAgICBiYXNrZXRMaW5lczogdGhpcy5pbmNsdWRlQmFza2V0TGluZXMoYmFza2V0KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluY2x1ZGVCYXNrZXRMaW5lcyhiYXNrZXQ6IEFQSUJhc2tldEludGVyZmFjZSk6IEFycmF5PEJhc2tldExpbmU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihiYXNrZXQsICdiYXNrZXRfbGluZXMnLCBuZXcgQmFza2V0TGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==