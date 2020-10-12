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

var GiftBasketTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(GiftBasketTransformer, _BaseTransformer);

  var _super = _createSuper(GiftBasketTransformer);

  function GiftBasketTransformer() {
    _classCallCheck(this, GiftBasketTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdEJhc2tldFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRCYXNrZXRUcmFuc2Zvcm1lciIsImdpZnRCYXNrZXQiLCJHaWZ0QmFza2V0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJiYXNrZXQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJ1bmRlZmluZWQiLCJnaWZ0IiwiaW5jbHVkZUdpZnQiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiR2lmdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxxQjs7Ozs7Ozs7Ozs7Ozs0QkFDVEMsVSxFQUE2QztBQUNqRCxhQUFPLElBQUlDLHNCQUFKLENBQWU7QUFDbEJDLFFBQUFBLEVBQUUsRUFBRUYsVUFBVSxDQUFDRSxFQURHO0FBRWxCQyxRQUFBQSxTQUFTLEVBQUVILFVBQVUsQ0FBQ0csU0FGSjtBQUdsQkMsUUFBQUEsU0FBUyxFQUFFSixVQUFVLENBQUNJLFNBSEo7QUFJbEJDLFFBQUFBLE1BQU0sRUFBRUwsVUFBVSxDQUFDSyxNQUpEO0FBS2xCQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQlAsVUFBakIsS0FBZ0NRLFNBTHBCO0FBTWxCQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQlYsVUFBakIsS0FBZ0NRO0FBTnBCLE9BQWYsQ0FBUDtBQVFIOzs7Z0NBRVdSLFUsRUFBdUQ7QUFDL0QsYUFBTyxLQUFLVyxJQUFMLENBQVVYLFVBQVYsRUFBc0IsTUFBdEIsRUFBOEIsSUFBSVksMkJBQUosRUFBOUIsQ0FBUDtBQUNIOzs7Z0NBRVdaLFUsRUFBdUQ7QUFDL0QsYUFBTyxLQUFLVyxJQUFMLENBQVVYLFVBQVYsRUFBc0IsTUFBdEIsRUFBOEIsSUFBSWEsMkJBQUosRUFBOUIsQ0FBUDtBQUNIOzs7O0VBbEI4Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgR2lmdEJhc2tldEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdEJhc2tldCc7XG5pbXBvcnQgR2lmdEJhc2tldCBmcm9tICcuLi9HaWZ0QmFza2V0JztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBHaWZ0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZ2lmdC9HaWZ0JztcbmltcG9ydCBHaWZ0VHJhbnNmb3JtZXIgZnJvbSAnLi9HaWZ0VHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaWZ0QmFza2V0VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEoZ2lmdEJhc2tldDogR2lmdEJhc2tldEludGVyZmFjZSk6IEdpZnRCYXNrZXQge1xuICAgICAgICByZXR1cm4gbmV3IEdpZnRCYXNrZXQoe1xuICAgICAgICAgICAgaWQ6IGdpZnRCYXNrZXQuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGdpZnRCYXNrZXQuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBnaWZ0QmFza2V0LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGJhc2tldDogZ2lmdEJhc2tldC5iYXNrZXQsXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKGdpZnRCYXNrZXQpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdpZnQ6IHRoaXMuaW5jbHVkZUdpZnQoZ2lmdEJhc2tldCkgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihnaWZ0QmFza2V0OiBHaWZ0QmFza2V0SW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnRCYXNrZXQsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlR2lmdChnaWZ0QmFza2V0OiBHaWZ0QmFza2V0SW50ZXJmYWNlKTogR2lmdEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGdpZnRCYXNrZXQsICdnaWZ0JywgbmV3IEdpZnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=