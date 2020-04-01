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

var BasketLine =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(BasketLine, _AbstractResource);

  function BasketLine() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BasketLine);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BasketLine)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "addToGuest", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "add", _this.createMethodFromPartialSpec({
      access: 'member',
      method: 'POST',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "removeFromGuest", _this.createMethodFromPartialSpec({
      method: 'DELETE',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "remove", _this.createMethodFromPartialSpec({
      access: 'member',
      method: 'DELETE',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "updateGuest", _this.createMethodFromPartialSpec({
      method: 'PUT',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "update", _this.createMethodFromPartialSpec({
      access: 'member',
      method: 'PUT',
      path: '/{id}'
    }));

    return _this;
  }

  _createClass(BasketLine, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/basket-lines';
      this.defaultAccess = 'guest';
    }
  }]);

  return BasketLine;
}(_AbstractResource2["default"]);

exports["default"] = BasketLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvQmFza2V0L0Jhc2tldExpbmUudHMiXSwibmFtZXMiOlsiQmFza2V0TGluZSIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJhY2Nlc3MiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFNYSxNQUFLQywyQkFBTCxDQUFpQztBQUMzREMsTUFBQUEsTUFBTSxFQUFFLE1BRG1EO0FBRTNEQyxNQUFBQSxJQUFJLEVBQUU7QUFGcUQsS0FBakMsQzs7MERBS1AsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDcERHLE1BQUFBLE1BQU0sRUFBRSxRQUQ0QztBQUVwREYsTUFBQUEsTUFBTSxFQUFFLE1BRjRDO0FBR3BEQyxNQUFBQSxJQUFJLEVBQUU7QUFIOEMsS0FBakMsQzs7c0VBTVksTUFBS0YsMkJBQUwsQ0FBaUM7QUFDaEVDLE1BQUFBLE1BQU0sRUFBRSxRQUR3RDtBQUVoRUMsTUFBQUEsSUFBSSxFQUFFO0FBRjBELEtBQWpDLEM7OzZEQUtULE1BQUtGLDJCQUFMLENBQWlDO0FBQ3ZERyxNQUFBQSxNQUFNLEVBQUUsUUFEK0M7QUFFdkRGLE1BQUFBLE1BQU0sRUFBRSxRQUYrQztBQUd2REMsTUFBQUEsSUFBSSxFQUFFO0FBSGlELEtBQWpDLEM7O2tFQU1LLE1BQUtGLDJCQUFMLENBQWlDO0FBQzVEQyxNQUFBQSxNQUFNLEVBQUUsS0FEb0Q7QUFFNURDLE1BQUFBLElBQUksRUFBRTtBQUZzRCxLQUFqQyxDOzs2REFLTCxNQUFLRiwyQkFBTCxDQUFpQztBQUN2REcsTUFBQUEsTUFBTSxFQUFFLFFBRCtDO0FBRXZERixNQUFBQSxNQUFNLEVBQUUsS0FGK0M7QUFHdkRDLE1BQUFBLElBQUksRUFBRTtBQUhpRCxLQUFqQyxDOzs7Ozs7O2lDQWhDUDtBQUNmLFdBQUtFLFlBQUwsR0FBb0IsZUFBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE9BQXJCO0FBQ0g7Ozs7RUFKbUNDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2tldExpbmUgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcvYmFza2V0LWxpbmVzJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ2d1ZXN0JztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkVG9HdWVzdDogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgYWRkOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgYWNjZXNzOiAnbWVtYmVyJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyByZW1vdmVGcm9tR3Vlc3Q6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBwYXRoOiAnL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHJlbW92ZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIGFjY2VzczogJ21lbWJlcicsXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIHBhdGg6ICcve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdXBkYXRlR3Vlc3Q6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBwYXRoOiAnL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHVwZGF0ZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIGFjY2VzczogJ21lbWJlcicsXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIHBhdGg6ICcve2lkfScsXG4gICAgfSk7XG59XG4iXX0=