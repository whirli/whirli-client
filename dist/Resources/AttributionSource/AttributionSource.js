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

var AttributionSource =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(AttributionSource, _AbstractResource);

  function AttributionSource() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AttributionSource);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AttributionSource)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/'
    }));

    return _this;
  }

  _createClass(AttributionSource, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/attribution-sources';
      this.defaultAccess = 'guest';
    }
  }]);

  return AttributionSource;
}(_AbstractResource2["default"]);

exports["default"] = AttributionSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvQXR0cmlidXRpb25Tb3VyY2UvQXR0cmlidXRpb25Tb3VyY2UudHMiXSwibmFtZXMiOlsiQXR0cmlidXRpb25Tb3VyY2UiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQU1rRCxNQUFLQywyQkFBTCxDQUFpQztBQUNoR0MsTUFBQUEsTUFBTSxFQUFFLE1BRHdGO0FBRWhHQyxNQUFBQSxJQUFJLEVBQUU7QUFGMEYsS0FBakMsQzs7Ozs7OztpQ0FMaEQ7QUFDZixXQUFLQyxZQUFMLEdBQW9CLHNCQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsT0FBckI7QUFDSDs7OztFQUowQ0MsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcsIEh0dHBDbGllbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJpYnV0aW9uU291cmNlIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL2F0dHJpYnV0aW9uLXNvdXJjZXMnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnZ3Vlc3QnO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGU6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG59XG4iXX0=