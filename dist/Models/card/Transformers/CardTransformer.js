"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Card = _interopRequireDefault(require("../Card"));

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

var CardTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(CardTransformer, _BaseTransformer);

  var _super = _createSuper(CardTransformer);

  function CardTransformer() {
    _classCallCheck(this, CardTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(CardTransformer, [{
    key: "mapData",
    value: function mapData(card) {
      return new _Card["default"]({
        last4: card.last4,
        brand: card.brand,
        expMonth: card.expMonth,
        expYear: card.expYear
      });
    }
  }]);

  return CardTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = CardTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvY2FyZC9UcmFuc2Zvcm1lcnMvQ2FyZFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkNhcmRUcmFuc2Zvcm1lciIsImNhcmQiLCJDYXJkIiwibGFzdDQiLCJicmFuZCIsImV4cE1vbnRoIiwiZXhwWWVhciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs0QkFDVEMsSSxFQUEyQjtBQUMvQixhQUFPLElBQUlDLGdCQUFKLENBQVM7QUFDWkMsUUFBQUEsS0FBSyxFQUFFRixJQUFJLENBQUNFLEtBREE7QUFFWkMsUUFBQUEsS0FBSyxFQUFFSCxJQUFJLENBQUNHLEtBRkE7QUFHWkMsUUFBQUEsUUFBUSxFQUFFSixJQUFJLENBQUNJLFFBSEg7QUFJWkMsUUFBQUEsT0FBTyxFQUFFTCxJQUFJLENBQUNLO0FBSkYsT0FBVCxDQUFQO0FBTUg7Ozs7RUFSd0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZCc7XG5pbXBvcnQgQ2FyZEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2NhcmQvQ2FyZCc7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgbWFwRGF0YShjYXJkOiBDYXJkSW50ZXJmYWNlKTogQ2FyZCB7XG4gICAgICAgIHJldHVybiBuZXcgQ2FyZCh7XG4gICAgICAgICAgICBsYXN0NDogY2FyZC5sYXN0NCxcbiAgICAgICAgICAgIGJyYW5kOiBjYXJkLmJyYW5kLFxuICAgICAgICAgICAgZXhwTW9udGg6IGNhcmQuZXhwTW9udGgsXG4gICAgICAgICAgICBleHBZZWFyOiBjYXJkLmV4cFllYXIsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==