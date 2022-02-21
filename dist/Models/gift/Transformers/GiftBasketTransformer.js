"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _GiftBasket = _interopRequireDefault(require("../GiftBasket"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _GiftTransformer = _interopRequireDefault(require("./GiftTransformer"));

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

var GiftBasketTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(GiftBasketTransformer, _BaseTransformer);

  function GiftBasketTransformer() {
    _classCallCheck(this, GiftBasketTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(GiftBasketTransformer).apply(this, arguments));
  }

  _createClass(GiftBasketTransformer, [{
    key: "mapData",
    value: function mapData(giftBasket) {
      return new _GiftBasket["default"]({
        id: giftBasket.id,
        createdAt: giftBasket.createdAt,
        updatedAt: giftBasket.updatedAt,
        basket: giftBasket.basket,
        user: this.includeUser(giftBasket) || undefined,
        gift: this.includeGift(giftBasket) || undefined
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(giftBasket) {
      return this.item(giftBasket, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeGift",
    value: function includeGift(giftBasket) {
      return this.item(giftBasket, 'gift', new _GiftTransformer["default"]());
    }
  }]);

  return GiftBasketTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = GiftBasketTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdEJhc2tldFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRCYXNrZXRUcmFuc2Zvcm1lciIsImdpZnRCYXNrZXQiLCJHaWZ0QmFza2V0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJiYXNrZXQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJ1bmRlZmluZWQiLCJnaWZ0IiwiaW5jbHVkZUdpZnQiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiR2lmdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHFCOzs7Ozs7Ozs7Ozs7OzRCQUNUQyxVLEVBQTZDO0FBQ2pELGFBQU8sSUFBSUMsc0JBQUosQ0FBZTtBQUNsQkMsUUFBQUEsRUFBRSxFQUFFRixVQUFVLENBQUNFLEVBREc7QUFFbEJDLFFBQUFBLFNBQVMsRUFBRUgsVUFBVSxDQUFDRyxTQUZKO0FBR2xCQyxRQUFBQSxTQUFTLEVBQUVKLFVBQVUsQ0FBQ0ksU0FISjtBQUlsQkMsUUFBQUEsTUFBTSxFQUFFTCxVQUFVLENBQUNLLE1BSkQ7QUFLbEJDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCUCxVQUFqQixLQUFnQ1EsU0FMcEI7QUFNbEJDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCVixVQUFqQixLQUFnQ1E7QUFOcEIsT0FBZixDQUFQO0FBUUg7OztnQ0FFV1IsVSxFQUF1RDtBQUMvRCxhQUFPLEtBQUtXLElBQUwsQ0FBVVgsVUFBVixFQUFzQixNQUF0QixFQUE4QixJQUFJWSwyQkFBSixFQUE5QixDQUFQO0FBQ0g7OztnQ0FFV1osVSxFQUF1RDtBQUMvRCxhQUFPLEtBQUtXLElBQUwsQ0FBVVgsVUFBVixFQUFzQixNQUF0QixFQUE4QixJQUFJYSwyQkFBSixFQUE5QixDQUFQO0FBQ0g7Ozs7RUFsQjhDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBHaWZ0QmFza2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZ2lmdC9HaWZ0QmFza2V0JztcbmltcG9ydCBHaWZ0QmFza2V0IGZyb20gJy4uL0dpZnRCYXNrZXQnO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IEdpZnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9naWZ0L0dpZnQnO1xuaW1wb3J0IEdpZnRUcmFuc2Zvcm1lciBmcm9tICcuL0dpZnRUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRCYXNrZXRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgbWFwRGF0YShnaWZ0QmFza2V0OiBHaWZ0QmFza2V0SW50ZXJmYWNlKTogR2lmdEJhc2tldCB7XG4gICAgICAgIHJldHVybiBuZXcgR2lmdEJhc2tldCh7XG4gICAgICAgICAgICBpZDogZ2lmdEJhc2tldC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZ2lmdEJhc2tldC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGdpZnRCYXNrZXQudXBkYXRlZEF0LFxuICAgICAgICAgICAgYmFza2V0OiBnaWZ0QmFza2V0LmJhc2tldCxcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIoZ2lmdEJhc2tldCkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgZ2lmdDogdGhpcy5pbmNsdWRlR2lmdChnaWZ0QmFza2V0KSB8fCB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyKGdpZnRCYXNrZXQ6IEdpZnRCYXNrZXRJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oZ2lmdEJhc2tldCwgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVHaWZ0KGdpZnRCYXNrZXQ6IEdpZnRCYXNrZXRJbnRlcmZhY2UpOiBHaWZ0SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oZ2lmdEJhc2tldCwgJ2dpZnQnLCBuZXcgR2lmdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==