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

var Toybox =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Toybox, _AbstractResource);

  function Toybox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Toybox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Toybox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "designateToyForReturn", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/{id}/designate-for-return'
    }));

    _defineProperty(_assertThisInitialized(_this), "undesignateToyForReturn", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/{id}/add-to-toybox'
    }));

    return _this;
  }

  _createClass(Toybox, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/stock';
      this.defaultAccess = 'member';
    }
  }]);

  return Toybox;
}(_AbstractResource2["default"]);

exports["default"] = Toybox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvVG95Ym94LnRzIl0sIm5hbWVzIjpbIlRveWJveCIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RUFNd0IsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDdEVDLE1BQUFBLE1BQU0sRUFBRSxPQUQ4RDtBQUV0RUMsTUFBQUEsSUFBSSxFQUFFO0FBRmdFLEtBQWpDLEM7OzhFQUtFLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3hFQyxNQUFBQSxNQUFNLEVBQUUsT0FEZ0U7QUFFeEVDLE1BQUFBLElBQUksRUFBRTtBQUZrRSxLQUFqQyxDOzs7Ozs7O2lDQVZ4QjtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsUUFBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLFFBQXJCO0FBQ0g7Ozs7RUFKK0JDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRveWJveCBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy9zdG9jayc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdtZW1iZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXNpZ25hdGVUb3lGb3JSZXR1cm46IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICcve2lkfS9kZXNpZ25hdGUtZm9yLXJldHVybicsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdW5kZXNpZ25hdGVUb3lGb3JSZXR1cm46IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICcve2lkfS9hZGQtdG8tdG95Ym94JyxcbiAgICB9KTtcbn1cbiJdfQ==