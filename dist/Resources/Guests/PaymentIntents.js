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

var PaymentIntents =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(PaymentIntents, _AbstractResource);

  function PaymentIntents() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaymentIntents);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaymentIntents)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "succeeded", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/{id}/succeeded'
    }));

    return _this;
  }

  _createClass(PaymentIntents, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/payment-intents';
      this.defaultAccess = 'guest';
    }
  }]);

  return PaymentIntents;
}(_AbstractResource2["default"]);

exports["default"] = PaymentIntents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvR3Vlc3RzL1BheW1lbnRJbnRlbnRzLnRzIl0sIm5hbWVzIjpbIlBheW1lbnRJbnRlbnRzIiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQU1xRCxNQUFLQywyQkFBTCxDQUFpQztBQUNuR0MsTUFBQUEsTUFBTSxFQUFFLE9BRDJGO0FBRW5HQyxNQUFBQSxJQUFJLEVBQUU7QUFGNkYsS0FBakMsQzs7Ozs7OztpQ0FMbkQ7QUFDZixXQUFLQyxZQUFMLEdBQW9CLGtCQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsT0FBckI7QUFDSDs7OztFQUp1Q0MsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcsIEh0dHBDbGllbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBheW1lbnRJbnRlbnRzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL3BheW1lbnQtaW50ZW50cyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdndWVzdCc7XG4gICAgfVxuXG4gICAgcHVibGljIHN1Y2NlZWRlZDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAnL3tpZH0vc3VjY2VlZGVkJyxcbiAgICB9KTtcbn1cbiJdfQ==