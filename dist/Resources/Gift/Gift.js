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

var Gift =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Gift, _AbstractResource);

  function Gift() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Gift);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Gift)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "redeem", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/{code}'
    }));

    return _this;
  }

  _createClass(Gift, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/redeem-gift';
      this.defaultAccess = 'member';
    }
  }]);

  return Gift;
}(_AbstractResource2["default"]);

exports["default"] = Gift;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvR2lmdC9HaWZ0LnRzIl0sIm5hbWVzIjpbIkdpZnQiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBTVMsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxNQUQrQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFO0FBRmlELEtBQWpDLEM7Ozs7Ozs7aUNBTFA7QUFDZixXQUFLQyxZQUFMLEdBQW9CLGNBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixRQUFyQjtBQUNIOzs7O0VBSjZCQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaWZ0IGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL3JlZGVlbS1naWZ0JztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ21lbWJlcic7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZGVlbTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnL3tjb2RlfScsXG4gICAgfSk7XG59XG4iXX0=