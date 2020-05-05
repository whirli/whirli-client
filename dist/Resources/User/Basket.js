"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

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
 * _Used for **member's** baskets only._
 * - Getting a user's basket: `$whirli.user.basket.getActive();`
 * - Adding a basketLine: `$whirli.user.basket.addLine({ productVariantId, quantity });`
 * - Updating a basketLine: `$whirli.user.basket.updateLine({ basketLineId, quantity });`
 * - Deleting a basketLine: `$whirli.user.basket.removeLine(basketLineId);`
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

    _defineProperty(_assertThisInitialized(_this), "getActive", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/active-basket'
    }));

    _defineProperty(_assertThisInitialized(_this), "addLine", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/basket-lines'
    }));

    _defineProperty(_assertThisInitialized(_this), "updateLine", _this.createMethodFromPartialSpec({
      method: 'PUT',
      path: '/basket-lines/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "removeLine", _this.createMethodFromPartialSpec({
      method: 'DELETE',
      path: '/basket-lines/{id}'
    }));

    return _this;
  }

  _createClass(Basket, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '';
      this.defaultAccess = 'member';
    }
  }]);

  return Basket;
}(_AbstractResource2["default"]);

exports["default"] = Basket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlci9CYXNrZXQudHMiXSwibmFtZXMiOlsiQmFza2V0IiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0lBT3FCQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0VBTVksTUFBS0MsMkJBQUwsQ0FBaUM7QUFDMURDLE1BQUFBLE1BQU0sRUFBRSxLQURrRDtBQUUxREMsTUFBQUEsSUFBSSxFQUFFO0FBRm9ELEtBQWpDLEM7OzhEQUtGLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3hEQyxNQUFBQSxNQUFNLEVBQUUsTUFEZ0Q7QUFFeERDLE1BQUFBLElBQUksRUFBRTtBQUZrRCxLQUFqQyxDOztpRUFLRyxNQUFLRiwyQkFBTCxDQUFpQztBQUMzREMsTUFBQUEsTUFBTSxFQUFFLEtBRG1EO0FBRTNEQyxNQUFBQSxJQUFJLEVBQUU7QUFGcUQsS0FBakMsQzs7aUVBS0EsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDM0RDLE1BQUFBLE1BQU0sRUFBRSxRQURtRDtBQUUzREMsTUFBQUEsSUFBSSxFQUFFO0FBRnFELEtBQWpDLEM7Ozs7Ozs7aUNBcEJYO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsUUFBckI7QUFDSDs7OztFQUorQkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcblxuLyoqXG4gKiBfVXNlZCBmb3IgKiptZW1iZXIncyoqIGJhc2tldHMgb25seS5fXG4gKiAtIEdldHRpbmcgYSB1c2VyJ3MgYmFza2V0OiBgJHdoaXJsaS51c2VyLmJhc2tldC5nZXRBY3RpdmUoKTtgXG4gKiAtIEFkZGluZyBhIGJhc2tldExpbmU6IGAkd2hpcmxpLnVzZXIuYmFza2V0LmFkZExpbmUoeyBwcm9kdWN0VmFyaWFudElkLCBxdWFudGl0eSB9KTtgXG4gKiAtIFVwZGF0aW5nIGEgYmFza2V0TGluZTogYCR3aGlybGkudXNlci5iYXNrZXQudXBkYXRlTGluZSh7IGJhc2tldExpbmVJZCwgcXVhbnRpdHkgfSk7YFxuICogLSBEZWxldGluZyBhIGJhc2tldExpbmU6IGAkd2hpcmxpLnVzZXIuYmFza2V0LnJlbW92ZUxpbmUoYmFza2V0TGluZUlkKTtgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2tldCBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdtZW1iZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBY3RpdmU6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL2FjdGl2ZS1iYXNrZXQnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGFkZExpbmU6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJy9iYXNrZXQtbGluZXMnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHVwZGF0ZUxpbmU6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBwYXRoOiAnL2Jhc2tldC1saW5lcy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyByZW1vdmVMaW5lOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgcGF0aDogJy9iYXNrZXQtbGluZXMve2lkfScsXG4gICAgfSk7XG59XG4iXX0=