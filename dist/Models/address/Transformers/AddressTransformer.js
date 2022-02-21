"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _Address = _interopRequireDefault(require("../Address"));

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

var AddressTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(AddressTransformer, _BaseTransformer);

  function AddressTransformer() {
    _classCallCheck(this, AddressTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddressTransformer).apply(this, arguments));
  }

  _createClass(AddressTransformer, [{
    key: "mapData",
    value: function mapData(address) {
      return new _Address["default"]({
        id: address.id,
        firstname: address.firstname,
        lastname: address.lastname,
        address: address.address,
        addressTwo: address.addressTwo,
        addressthree: address.addressthree,
        city: address.city,
        company: address.company,
        zip: address.zip,
        shipping: address.shipping,
        billing: address.billing,
        "default": address["default"],
        phoneNumber: address.phoneNumber
      });
    }
  }]);

  return AddressTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = AddressTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYWRkcmVzcy9UcmFuc2Zvcm1lcnMvQWRkcmVzc1RyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkFkZHJlc3NUcmFuc2Zvcm1lciIsImFkZHJlc3MiLCJBZGRyZXNzIiwiaWQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImFkZHJlc3NUd28iLCJhZGRyZXNzdGhyZWUiLCJjaXR5IiwiY29tcGFueSIsInppcCIsInNoaXBwaW5nIiwiYmlsbGluZyIsInBob25lTnVtYmVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7Ozs7Ozs7Ozs7OzRCQUNUQyxPLEVBQW9DO0FBQ3hDLGFBQU8sSUFBSUMsbUJBQUosQ0FBWTtBQUNmQyxRQUFBQSxFQUFFLEVBQUVGLE9BQU8sQ0FBQ0UsRUFERztBQUVmQyxRQUFBQSxTQUFTLEVBQUVILE9BQU8sQ0FBQ0csU0FGSjtBQUdmQyxRQUFBQSxRQUFRLEVBQUVKLE9BQU8sQ0FBQ0ksUUFISDtBQUlmSixRQUFBQSxPQUFPLEVBQUVBLE9BQU8sQ0FBQ0EsT0FKRjtBQUtmSyxRQUFBQSxVQUFVLEVBQUVMLE9BQU8sQ0FBQ0ssVUFMTDtBQU1mQyxRQUFBQSxZQUFZLEVBQUVOLE9BQU8sQ0FBQ00sWUFOUDtBQU9mQyxRQUFBQSxJQUFJLEVBQUVQLE9BQU8sQ0FBQ08sSUFQQztBQVFmQyxRQUFBQSxPQUFPLEVBQUVSLE9BQU8sQ0FBQ1EsT0FSRjtBQVNmQyxRQUFBQSxHQUFHLEVBQUVULE9BQU8sQ0FBQ1MsR0FURTtBQVVmQyxRQUFBQSxRQUFRLEVBQUVWLE9BQU8sQ0FBQ1UsUUFWSDtBQVdmQyxRQUFBQSxPQUFPLEVBQUVYLE9BQU8sQ0FBQ1csT0FYRjtBQVlmLG1CQUFTWCxPQUFPLFdBWkQ7QUFhZlksUUFBQUEsV0FBVyxFQUFFWixPQUFPLENBQUNZO0FBYk4sT0FBWixDQUFQO0FBZUg7Ozs7RUFqQjJDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBBZGRyZXNzSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYWRkcmVzcy9BZGRyZXNzJztcbmltcG9ydCBBZGRyZXNzIGZyb20gJy4uL0FkZHJlc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRyZXNzVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEoYWRkcmVzczogQWRkcmVzc0ludGVyZmFjZSk6IEFkZHJlc3Mge1xuICAgICAgICByZXR1cm4gbmV3IEFkZHJlc3Moe1xuICAgICAgICAgICAgaWQ6IGFkZHJlc3MuaWQsXG4gICAgICAgICAgICBmaXJzdG5hbWU6IGFkZHJlc3MuZmlyc3RuYW1lLFxuICAgICAgICAgICAgbGFzdG5hbWU6IGFkZHJlc3MubGFzdG5hbWUsXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLmFkZHJlc3MsXG4gICAgICAgICAgICBhZGRyZXNzVHdvOiBhZGRyZXNzLmFkZHJlc3NUd28sXG4gICAgICAgICAgICBhZGRyZXNzdGhyZWU6IGFkZHJlc3MuYWRkcmVzc3RocmVlLFxuICAgICAgICAgICAgY2l0eTogYWRkcmVzcy5jaXR5LFxuICAgICAgICAgICAgY29tcGFueTogYWRkcmVzcy5jb21wYW55LFxuICAgICAgICAgICAgemlwOiBhZGRyZXNzLnppcCxcbiAgICAgICAgICAgIHNoaXBwaW5nOiBhZGRyZXNzLnNoaXBwaW5nLFxuICAgICAgICAgICAgYmlsbGluZzogYWRkcmVzcy5iaWxsaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogYWRkcmVzcy5kZWZhdWx0LFxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGFkZHJlc3MucGhvbmVOdW1iZXIsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==