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

var ReturnOrders =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(ReturnOrders, _AbstractResource);

  function ReturnOrders() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReturnOrders);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReturnOrders)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      access: 'wacc',
      method: 'GET',
      path: ''
    }));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      access: 'wacc',
      method: 'GET',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      access: 'wacc',
      method: 'POST',
      path: ''
    }));

    _defineProperty(_assertThisInitialized(_this), "complete", _this.createMethodFromPartialSpec({
      access: 'wacc',
      method: 'PUT',
      path: '/{id}/complete'
    }));

    return _this;
  }

  _createClass(ReturnOrders, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = 'return-orders';
    }
  }]);

  return ReturnOrders;
}(_AbstractResource2["default"]);

exports["default"] = ReturnOrders;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXNvdXJjZXMvd2FjYy9SZXR1cm5zL3JldHVybk9yZGVycy50cyJdLCJuYW1lcyI6WyJSZXR1cm5PcmRlcnMiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJhY2Nlc3MiLCJtZXRob2QiLCJwYXRoIiwicmVzb3VyY2VQYXRoIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFLTSxNQUFLQywyQkFBTCxDQUFpQztBQUNwREMsTUFBQUEsTUFBTSxFQUFFLE1BRDRDO0FBRXBEQyxNQUFBQSxNQUFNLEVBQUUsS0FGNEM7QUFHcERDLE1BQUFBLElBQUksRUFBRTtBQUg4QyxLQUFqQyxDOzswREFNQSxNQUFLSCwyQkFBTCxDQUFpQztBQUNwREMsTUFBQUEsTUFBTSxFQUFFLE1BRDRDO0FBRXBEQyxNQUFBQSxNQUFNLEVBQUUsS0FGNEM7QUFHcERDLE1BQUFBLElBQUksRUFBRTtBQUg4QyxLQUFqQyxDOzs2REFNRyxNQUFLSCwyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLE1BRCtDO0FBRXZEQyxNQUFBQSxNQUFNLEVBQUUsTUFGK0M7QUFHdkRDLE1BQUFBLElBQUksRUFBRTtBQUhpRCxLQUFqQyxDOzsrREFNRSxNQUFLSCwyQkFBTCxDQUFpQztBQUN6REMsTUFBQUEsTUFBTSxFQUFFLE1BRGlEO0FBRXpEQyxNQUFBQSxNQUFNLEVBQUUsS0FGaUQ7QUFHekRDLE1BQUFBLElBQUksRUFBRTtBQUhtRCxLQUFqQyxDOzs7Ozs7O2lDQXRCVDtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsZUFBcEI7QUFDSDs7OztFQUhxQ0MsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi8uLi9BYnN0cmFjdFJlc291cmNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV0dXJuT3JkZXJzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAncmV0dXJuLW9yZGVycyc7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbDogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIGFjY2VzczogJ3dhY2MnLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBnZXQ6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBhY2Nlc3M6ICd3YWNjJyxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBjcmVhdGU6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBhY2Nlc3M6ICd3YWNjJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGNvbXBsZXRlOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgYWNjZXNzOiAnd2FjYycsXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIHBhdGg6ICcve2lkfS9jb21wbGV0ZScsXG4gICAgfSk7XG59XG4iXX0=