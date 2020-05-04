"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../../AbstractResource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * _Used for **guest** baskets only._
 * - Getting a guest basket: `$whirli.guest.basket.get(basketId);`
 * - Adding a basketLine: `$whirli.guest.basket.addLine({ basketId, productVariantId, quantity });`
 * - Updating a basketLine: `$whirli.guest.basket.updateLine({ basketLineId, quantity });`
 * - Deleting a basketLine `$whirli.guest.basket.removeLine(basketLineId);`
 */
var Basket =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Basket, _AbstractResource);

  function Basket() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Basket);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Basket)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "addLine", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "updateLine", _this.createMethodFromPartialSpec({
      method: 'PUT',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "removeLine", _this.createMethodFromPartialSpec({
      method: 'DELETE',
      path: '/{id}'
    }));

    return _this;
  }

  _createClass(Basket, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/basket-lines';
      this.defaultAccess = 'guest';
    }
  }]);

  return Basket;
}(_AbstractResource2["default"]);

exports["default"] = Basket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvR3Vlc3QvQmFza2V0L0Jhc2tldC50cyJdLCJuYW1lcyI6WyJCYXNrZXQiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7SUFPcUJBLE07Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFNTSxNQUFLQywyQkFBTCxDQUFpQztBQUNwREMsTUFBQUEsTUFBTSxFQUFFLEtBRDRDO0FBRXBEQyxNQUFBQSxJQUFJLEVBQUU7QUFGOEMsS0FBakMsQzs7OERBS0ksTUFBS0YsMkJBQUwsQ0FBaUM7QUFDeERDLE1BQUFBLE1BQU0sRUFBRSxNQURnRDtBQUV4REMsTUFBQUEsSUFBSSxFQUFFO0FBRmtELEtBQWpDLEM7O2lFQUtHLE1BQUtGLDJCQUFMLENBQWlDO0FBQzNEQyxNQUFBQSxNQUFNLEVBQUUsS0FEbUQ7QUFFM0RDLE1BQUFBLElBQUksRUFBRTtBQUZxRCxLQUFqQyxDOztpRUFLQSxNQUFLRiwyQkFBTCxDQUFpQztBQUMzREMsTUFBQUEsTUFBTSxFQUFFLFFBRG1EO0FBRTNEQyxNQUFBQSxJQUFJLEVBQUU7QUFGcUQsS0FBakMsQzs7Ozs7OztpQ0FwQlg7QUFDZixXQUFLQyxZQUFMLEdBQW9CLGVBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixPQUFyQjtBQUNIOzs7O0VBSitCQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uLy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuXG4vKipcbiAqIF9Vc2VkIGZvciAqKmd1ZXN0KiogYmFza2V0cyBvbmx5Ll9cbiAqIC0gR2V0dGluZyBhIGd1ZXN0IGJhc2tldDogYCR3aGlybGkuZ3Vlc3QuYmFza2V0LmdldChiYXNrZXRJZCk7YFxuICogLSBBZGRpbmcgYSBiYXNrZXRMaW5lOiBgJHdoaXJsaS5ndWVzdC5iYXNrZXQuYWRkTGluZSh7IGJhc2tldElkLCBwcm9kdWN0VmFyaWFudElkLCBxdWFudGl0eSB9KTtgXG4gKiAtIFVwZGF0aW5nIGEgYmFza2V0TGluZTogYCR3aGlybGkuZ3Vlc3QuYmFza2V0LnVwZGF0ZUxpbmUoeyBiYXNrZXRMaW5lSWQsIHF1YW50aXR5IH0pO2BcbiAqIC0gRGVsZXRpbmcgYSBiYXNrZXRMaW5lIGAkd2hpcmxpLmd1ZXN0LmJhc2tldC5yZW1vdmVMaW5lKGJhc2tldExpbmVJZCk7YFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNrZXQgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcvYmFza2V0LWxpbmVzJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ2d1ZXN0JztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0OiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBhZGRMaW5lOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB1cGRhdGVMaW5lOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgcGF0aDogJy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyByZW1vdmVMaW5lOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgcGF0aDogJy97aWR9JyxcbiAgICB9KTtcbn1cbiJdfQ==