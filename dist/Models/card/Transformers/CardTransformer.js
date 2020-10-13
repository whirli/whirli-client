"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Card = _interopRequireDefault(require("../Card"));

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

var CardTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(CardTransformer, _BaseTransformer);

  function CardTransformer() {
    _classCallCheck(this, CardTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardTransformer).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvY2FyZC9UcmFuc2Zvcm1lcnMvQ2FyZFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkNhcmRUcmFuc2Zvcm1lciIsImNhcmQiLCJDYXJkIiwibGFzdDQiLCJicmFuZCIsImV4cE1vbnRoIiwiZXhwWWVhciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7OzRCQUNUQyxJLEVBQTJCO0FBQy9CLGFBQU8sSUFBSUMsZ0JBQUosQ0FBUztBQUNaQyxRQUFBQSxLQUFLLEVBQUVGLElBQUksQ0FBQ0UsS0FEQTtBQUVaQyxRQUFBQSxLQUFLLEVBQUVILElBQUksQ0FBQ0csS0FGQTtBQUdaQyxRQUFBQSxRQUFRLEVBQUVKLElBQUksQ0FBQ0ksUUFISDtBQUlaQyxRQUFBQSxPQUFPLEVBQUVMLElBQUksQ0FBQ0s7QUFKRixPQUFULENBQVA7QUFNSDs7OztFQVJ3Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcbmltcG9ydCBDYXJkSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvY2FyZC9DYXJkJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKGNhcmQ6IENhcmRJbnRlcmZhY2UpOiBDYXJkIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDYXJkKHtcbiAgICAgICAgICAgIGxhc3Q0OiBjYXJkLmxhc3Q0LFxuICAgICAgICAgICAgYnJhbmQ6IGNhcmQuYnJhbmQsXG4gICAgICAgICAgICBleHBNb250aDogY2FyZC5leHBNb250aCxcbiAgICAgICAgICAgIGV4cFllYXI6IGNhcmQuZXhwWWVhcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19