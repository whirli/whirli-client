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

var WACCAuth =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(WACCAuth, _AbstractResource);

  function WACCAuth() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WACCAuth);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WACCAuth)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "login", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/login'
    }));

    _defineProperty(_assertThisInitialized(_this), "logout", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/logout'
    }));

    _defineProperty(_assertThisInitialized(_this), "register", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/register'
    }));

    return _this;
  }

  _createClass(WACCAuth, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = 'auth';
    }
  }]);

  return WACCAuth;
}(_AbstractResource2["default"]);

exports["default"] = WACCAuth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvd2FjYy9BdXRoL2F1dGgudHMiXSwibmFtZXMiOlsiV0FDQ0F1dGgiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwicmVzb3VyY2VQYXRoIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REFLUSxNQUFLQywyQkFBTCxDQUFpQztBQUN0REMsTUFBQUEsTUFBTSxFQUFFLE1BRDhDO0FBRXREQyxNQUFBQSxJQUFJLEVBQUU7QUFGZ0QsS0FBakMsQzs7NkRBS0MsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxLQUQrQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFO0FBRmlELEtBQWpDLEM7OytEQUtFLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3pEQyxNQUFBQSxNQUFNLEVBQUUsTUFEaUQ7QUFFekRDLE1BQUFBLElBQUksRUFBRTtBQUZtRCxLQUFqQyxDOzs7Ozs7O2lDQWRUO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixNQUFwQjtBQUNIOzs7O0VBSGlDQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uLy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXQUNDQXV0aCBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJ2F1dGgnO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpbjogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBsb2dvdXQ6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL2xvZ291dCcsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXI6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJy9yZWdpc3RlcicsXG4gICAgfSk7XG59XG4iXX0=