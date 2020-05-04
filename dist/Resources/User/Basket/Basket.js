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
 * _Used for **member's** baskets only._
 * - Getting a user's basket: `$whirli.user.basket.getActive();`
 * - Adding a basketLine : `$whirli.user.basket.addLine({ productVariantId, quantity });`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlci9CYXNrZXQvQmFza2V0LnRzIl0sIm5hbWVzIjpbIkJhc2tldCIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9xQkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQU1ZLE1BQUtDLDJCQUFMLENBQWlDO0FBQzFEQyxNQUFBQSxNQUFNLEVBQUUsS0FEa0Q7QUFFMURDLE1BQUFBLElBQUksRUFBRTtBQUZvRCxLQUFqQyxDOzs4REFLRixNQUFLRiwyQkFBTCxDQUFpQztBQUN4REMsTUFBQUEsTUFBTSxFQUFFLE1BRGdEO0FBRXhEQyxNQUFBQSxJQUFJLEVBQUU7QUFGa0QsS0FBakMsQzs7aUVBS0csTUFBS0YsMkJBQUwsQ0FBaUM7QUFDM0RDLE1BQUFBLE1BQU0sRUFBRSxLQURtRDtBQUUzREMsTUFBQUEsSUFBSSxFQUFFO0FBRnFELEtBQWpDLEM7O2lFQUtBLE1BQUtGLDJCQUFMLENBQWlDO0FBQzNEQyxNQUFBQSxNQUFNLEVBQUUsUUFEbUQ7QUFFM0RDLE1BQUFBLElBQUksRUFBRTtBQUZxRCxLQUFqQyxDOzs7Ozs7O2lDQXBCWDtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLFFBQXJCO0FBQ0g7Ozs7RUFKK0JDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5cbi8qKlxuICogX1VzZWQgZm9yICoqbWVtYmVyJ3MqKiBiYXNrZXRzIG9ubHkuX1xuICogLSBHZXR0aW5nIGEgdXNlcidzIGJhc2tldDogYCR3aGlybGkudXNlci5iYXNrZXQuZ2V0QWN0aXZlKCk7YFxuICogLSBBZGRpbmcgYSBiYXNrZXRMaW5lIDogYCR3aGlybGkudXNlci5iYXNrZXQuYWRkTGluZSh7IHByb2R1Y3RWYXJpYW50SWQsIHF1YW50aXR5IH0pO2BcbiAqIC0gVXBkYXRpbmcgYSBiYXNrZXRMaW5lOiBgJHdoaXJsaS51c2VyLmJhc2tldC51cGRhdGVMaW5lKHsgYmFza2V0TGluZUlkLCBxdWFudGl0eSB9KTtgXG4gKiAtIERlbGV0aW5nIGEgYmFza2V0TGluZTogYCR3aGlybGkudXNlci5iYXNrZXQucmVtb3ZlTGluZShiYXNrZXRMaW5lSWQpO2BcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFza2V0IGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ21lbWJlcic7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFjdGl2ZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcvYWN0aXZlLWJhc2tldCcsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgYWRkTGluZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnL2Jhc2tldC1saW5lcycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdXBkYXRlTGluZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIHBhdGg6ICcvYmFza2V0LWxpbmVzL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHJlbW92ZUxpbmU6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBwYXRoOiAnL2Jhc2tldC1saW5lcy97aWR9JyxcbiAgICB9KTtcbn1cbiJdfQ==