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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJCYXNrZXRUcmFuc2Zvcm1lciIsImJhc2tldCIsIkJhc2tldCIsImlkIiwidG90YWxUb2tlbnMiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJiYXNrZXRMaW5lcyIsImluY2x1ZGVCYXNrZXRMaW5lcyIsImNvbGxlY3Rpb24iLCJCYXNrZXRMaW5lVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBOzRCQUNZQyxNLEVBQWlDO0FBQ3JDLGFBQU8sSUFBSUMsa0JBQUosQ0FBVztBQUNkQyxRQUFBQSxFQUFFLEVBQUVGLE1BQU0sQ0FBQ0UsRUFERztBQUVkQyxRQUFBQSxXQUFXLEVBQUVILE1BQU0sQ0FBQ0csV0FGTjtBQUdkQyxRQUFBQSxTQUFTLEVBQUVKLE1BQU0sQ0FBQ0ksU0FISjtBQUlkQyxRQUFBQSxTQUFTLEVBQUVMLE1BQU0sQ0FBQ0ssU0FKSjtBQUtkQyxRQUFBQSxXQUFXLEVBQUUsS0FBS0Msa0JBQUwsQ0FBd0JQLE1BQXhCO0FBTEMsT0FBWCxDQUFQO0FBT0g7Ozt1Q0FDa0JBLE0sRUFBNEM7QUFDM0QsYUFBTyxLQUFLUSxVQUFMLENBQWdCUixNQUFoQixFQUF3QixjQUF4QixFQUF3QyxJQUFJUyxpQ0FBSixFQUF4QyxDQUFQO0FBQ0g7Ozs7RUFqQjBDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNrZXQgZnJvbSAnLi4vQmFza2V0JztcbmltcG9ydCBCYXNrZXRMaW5lIGZyb20gJy4uL0Jhc2tldExpbmUnO1xuaW1wb3J0IHsgQmFza2V0IGFzIEJhc2tldEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmFza2V0L0Jhc2tldCc7XG5pbXBvcnQgQmFza2V0TGluZVRyYW5zZm9ybWVyIGZyb20gJy4vQmFza2V0TGluZVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFza2V0VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBiYXNrZXQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBiYXNrZXRcbiAgICAgKi9cbiAgICBtYXBEYXRhKGJhc2tldDogQmFza2V0SW50ZXJmYWNlKTogQmFza2V0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBCYXNrZXQoe1xuICAgICAgICAgICAgaWQ6IGJhc2tldC5pZCxcbiAgICAgICAgICAgIHRvdGFsVG9rZW5zOiBiYXNrZXQudG90YWxUb2tlbnMsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGJhc2tldC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGJhc2tldC51cGRhdGVkQXQsXG4gICAgICAgICAgICBiYXNrZXRMaW5lczogdGhpcy5pbmNsdWRlQmFza2V0TGluZXMoYmFza2V0KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluY2x1ZGVCYXNrZXRMaW5lcyhiYXNrZXQ6IEJhc2tldEludGVyZmFjZSk6IEFycmF5PEJhc2tldExpbmU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihiYXNrZXQsICdiYXNrZXRfbGluZXMnLCBuZXcgQmFza2V0TGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==