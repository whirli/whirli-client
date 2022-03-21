"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _GiftBasket = _interopRequireDefault(require("../GiftBasket"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _GiftTransformer = _interopRequireDefault(require("./GiftTransformer"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdEJhc2tldFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkdpZnRCYXNrZXRUcmFuc2Zvcm1lciIsImdpZnRCYXNrZXQiLCJHaWZ0QmFza2V0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJiYXNrZXQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJ1bmRlZmluZWQiLCJnaWZ0IiwiaW5jbHVkZUdpZnQiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiR2lmdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxxQjs7Ozs7Ozs7Ozs7OztXQUNqQixpQkFBUUMsVUFBUixFQUFxRDtBQUNqRCxhQUFPLElBQUlDLHNCQUFKLENBQWU7QUFDbEJDLFFBQUFBLEVBQUUsRUFBRUYsVUFBVSxDQUFDRSxFQURHO0FBRWxCQyxRQUFBQSxTQUFTLEVBQUVILFVBQVUsQ0FBQ0csU0FGSjtBQUdsQkMsUUFBQUEsU0FBUyxFQUFFSixVQUFVLENBQUNJLFNBSEo7QUFJbEJDLFFBQUFBLE1BQU0sRUFBRUwsVUFBVSxDQUFDSyxNQUpEO0FBS2xCQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQlAsVUFBakIsS0FBZ0NRLFNBTHBCO0FBTWxCQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQlYsVUFBakIsS0FBZ0NRO0FBTnBCLE9BQWYsQ0FBUDtBQVFIOzs7V0FFRCxxQkFBWVIsVUFBWixFQUFtRTtBQUMvRCxhQUFPLEtBQUtXLElBQUwsQ0FBVVgsVUFBVixFQUFzQixNQUF0QixFQUE4QixJQUFJWSwyQkFBSixFQUE5QixDQUFQO0FBQ0g7OztXQUVELHFCQUFZWixVQUFaLEVBQW1FO0FBQy9ELGFBQU8sS0FBS1csSUFBTCxDQUFVWCxVQUFWLEVBQXNCLE1BQXRCLEVBQThCLElBQUlhLDJCQUFKLEVBQTlCLENBQVA7QUFDSDs7OztFQWxCOENDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEdpZnRCYXNrZXRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9naWZ0L0dpZnRCYXNrZXQnO1xuaW1wb3J0IEdpZnRCYXNrZXQgZnJvbSAnLi4vR2lmdEJhc2tldCc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgR2lmdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdCc7XG5pbXBvcnQgR2lmdFRyYW5zZm9ybWVyIGZyb20gJy4vR2lmdFRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lmdEJhc2tldFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKGdpZnRCYXNrZXQ6IEdpZnRCYXNrZXRJbnRlcmZhY2UpOiBHaWZ0QmFza2V0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBHaWZ0QmFza2V0KHtcbiAgICAgICAgICAgIGlkOiBnaWZ0QmFza2V0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBnaWZ0QmFza2V0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogZ2lmdEJhc2tldC51cGRhdGVkQXQsXG4gICAgICAgICAgICBiYXNrZXQ6IGdpZnRCYXNrZXQuYmFza2V0LFxuICAgICAgICAgICAgdXNlcjogdGhpcy5pbmNsdWRlVXNlcihnaWZ0QmFza2V0KSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBnaWZ0OiB0aGlzLmluY2x1ZGVHaWZ0KGdpZnRCYXNrZXQpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIoZ2lmdEJhc2tldDogR2lmdEJhc2tldEludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0QmFza2V0LCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUdpZnQoZ2lmdEJhc2tldDogR2lmdEJhc2tldEludGVyZmFjZSk6IEdpZnRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShnaWZ0QmFza2V0LCAnZ2lmdCcsIG5ldyBHaWZ0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19