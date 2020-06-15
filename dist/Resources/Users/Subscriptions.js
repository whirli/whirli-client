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

var Subscriptions =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Subscriptions, _AbstractResource);

  function Subscriptions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Subscriptions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Subscriptions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "update", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "pay", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/{id}/pay'
    }));

    _defineProperty(_assertThisInitialized(_this), "previewChange", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/{id}/preview-change'
    }));

    return _this;
  }

  _createClass(Subscriptions, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/user-subscriptions';
      this.defaultAccess = 'member';
    }
  }]);

  return Subscriptions;
}(_AbstractResource2["default"]);

exports["default"] = Subscriptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvU3Vic2NyaXB0aW9ucy50cyJdLCJuYW1lcyI6WyJTdWJzY3JpcHRpb25zIiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQU1TLE1BQUtDLDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsTUFEK0M7QUFFdkRDLE1BQUFBLElBQUksRUFBRTtBQUZpRCxLQUFqQyxDOzs2REFLQSxNQUFLRiwyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLE9BRCtDO0FBRXZEQyxNQUFBQSxJQUFJLEVBQUU7QUFGaUQsS0FBakMsQzs7MERBS0gsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDcERDLE1BQUFBLE1BQU0sRUFBRSxPQUQ0QztBQUVwREMsTUFBQUEsSUFBSSxFQUFFO0FBRjhDLEtBQWpDLEM7O29FQVFHLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsTUFEK0M7QUFFdkRDLE1BQUFBLElBQUksRUFBRTtBQUZpRCxLQUFqQyxDOzs7Ozs7O2lDQXZCUDtBQUNmLFdBQUtDLFlBQUwsR0FBb0IscUJBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixRQUFyQjtBQUNIOzs7O0VBSnNDQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZywgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic2NyaXB0aW9ucyBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy91c2VyLXN1YnNjcmlwdGlvbnMnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnbWVtYmVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB1cGRhdGU6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICcve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgcGF5OiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAnL3tpZH0vcGF5JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBwcmV2aWV3Q2hhbmdlOiAoXG4gICAgICAgIHN1YnNjcmlwdGlvbklkOiBzdHJpbmcsXG4gICAgICAgIC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWdcbiAgICApID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcve2lkfS9wcmV2aWV3LWNoYW5nZScsXG4gICAgfSk7XG59XG4iXX0=