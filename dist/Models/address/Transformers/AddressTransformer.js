"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _Address = _interopRequireDefault(require("../Address"));

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

var AddressTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(AddressTransformer, _BaseTransformer);

  var _super = _createSuper(AddressTransformer);

  function AddressTransformer() {
    _classCallCheck(this, AddressTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYWRkcmVzcy9UcmFuc2Zvcm1lcnMvQWRkcmVzc1RyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkFkZHJlc3NUcmFuc2Zvcm1lciIsImFkZHJlc3MiLCJBZGRyZXNzIiwiaWQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImFkZHJlc3NUd28iLCJhZGRyZXNzdGhyZWUiLCJjaXR5IiwiY29tcGFueSIsInppcCIsInNoaXBwaW5nIiwiYmlsbGluZyIsInBob25lTnVtYmVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxrQjs7Ozs7Ozs7Ozs7OztXQUNqQixpQkFBUUMsT0FBUixFQUE0QztBQUN4QyxhQUFPLElBQUlDLG1CQUFKLENBQVk7QUFDZkMsUUFBQUEsRUFBRSxFQUFFRixPQUFPLENBQUNFLEVBREc7QUFFZkMsUUFBQUEsU0FBUyxFQUFFSCxPQUFPLENBQUNHLFNBRko7QUFHZkMsUUFBQUEsUUFBUSxFQUFFSixPQUFPLENBQUNJLFFBSEg7QUFJZkosUUFBQUEsT0FBTyxFQUFFQSxPQUFPLENBQUNBLE9BSkY7QUFLZkssUUFBQUEsVUFBVSxFQUFFTCxPQUFPLENBQUNLLFVBTEw7QUFNZkMsUUFBQUEsWUFBWSxFQUFFTixPQUFPLENBQUNNLFlBTlA7QUFPZkMsUUFBQUEsSUFBSSxFQUFFUCxPQUFPLENBQUNPLElBUEM7QUFRZkMsUUFBQUEsT0FBTyxFQUFFUixPQUFPLENBQUNRLE9BUkY7QUFTZkMsUUFBQUEsR0FBRyxFQUFFVCxPQUFPLENBQUNTLEdBVEU7QUFVZkMsUUFBQUEsUUFBUSxFQUFFVixPQUFPLENBQUNVLFFBVkg7QUFXZkMsUUFBQUEsT0FBTyxFQUFFWCxPQUFPLENBQUNXLE9BWEY7QUFZZixtQkFBU1gsT0FBTyxXQVpEO0FBYWZZLFFBQUFBLFdBQVcsRUFBRVosT0FBTyxDQUFDWTtBQWJOLE9BQVosQ0FBUDtBQWVIOzs7O0VBakIyQ0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2FkZHJlc3MvQWRkcmVzcyc7XG5pbXBvcnQgQWRkcmVzcyBmcm9tICcuLi9BZGRyZXNzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkcmVzc1RyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKGFkZHJlc3M6IEFkZHJlc3NJbnRlcmZhY2UpOiBBZGRyZXNzIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBZGRyZXNzKHtcbiAgICAgICAgICAgIGlkOiBhZGRyZXNzLmlkLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiBhZGRyZXNzLmZpcnN0bmFtZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiBhZGRyZXNzLmxhc3RuYW1lLFxuICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWRkcmVzc1R3bzogYWRkcmVzcy5hZGRyZXNzVHdvLFxuICAgICAgICAgICAgYWRkcmVzc3RocmVlOiBhZGRyZXNzLmFkZHJlc3N0aHJlZSxcbiAgICAgICAgICAgIGNpdHk6IGFkZHJlc3MuY2l0eSxcbiAgICAgICAgICAgIGNvbXBhbnk6IGFkZHJlc3MuY29tcGFueSxcbiAgICAgICAgICAgIHppcDogYWRkcmVzcy56aXAsXG4gICAgICAgICAgICBzaGlwcGluZzogYWRkcmVzcy5zaGlwcGluZyxcbiAgICAgICAgICAgIGJpbGxpbmc6IGFkZHJlc3MuYmlsbGluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGFkZHJlc3MuZGVmYXVsdCxcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBhZGRyZXNzLnBob25lTnVtYmVyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=