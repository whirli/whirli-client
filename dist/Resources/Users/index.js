"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Baskets = _interopRequireDefault(require("./Baskets"));

var _Subscriptions = _interopRequireDefault(require("./Subscriptions"));

var _Toybox = _interopRequireDefault(require("./Toybox"));

var _Details = _interopRequireDefault(require("./Details"));

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

var Users =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Users, _AbstractResource);

  function Users(api) {
    var _this;

    _classCallCheck(this, Users);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Users).call(this, api));

    _defineProperty(_assertThisInitialized(_this), "baskets", void 0);

    _defineProperty(_assertThisInitialized(_this), "details", void 0);

    _defineProperty(_assertThisInitialized(_this), "subscriptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "toybox", void 0);

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/'
    }));

    _this.api = api;

    _this.initialise();

    _this.baskets = new _Baskets["default"](api);
    _this.details = new _Details["default"](api);
    _this.subscriptions = new _Subscriptions["default"](api);
    _this.toybox = new _Toybox["default"](api);
    return _this;
  }

  _createClass(Users, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/users';
      this.defaultAccess = 'guest';
    }
  }]);

  return Users;
}(_AbstractResource2["default"]);

exports["default"] = Users;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImJhc2tldHMiLCJCYXNrZXRzIiwiZGV0YWlscyIsIkRldGFpbHMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsInRveWJveCIsIlRveWJveCIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7QUFNakIsaUJBQVlDLEdBQVosRUFBeUI7QUFBQTs7QUFBQTs7QUFDckIsK0VBQU1BLEdBQU47O0FBRHFCOztBQUFBOztBQUFBOztBQUFBOztBQUFBLDZEQWVDLE1BQUtDLDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsTUFEK0M7QUFFdkRDLE1BQUFBLElBQUksRUFBRTtBQUZpRCxLQUFqQyxDQWZEOztBQUVyQixVQUFLSCxHQUFMLEdBQVdBLEdBQVg7O0FBQ0EsVUFBS0ksVUFBTDs7QUFDQSxVQUFLQyxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWU4sR0FBWixDQUFmO0FBQ0EsVUFBS08sT0FBTCxHQUFlLElBQUlDLG1CQUFKLENBQVlSLEdBQVosQ0FBZjtBQUNBLFVBQUtTLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosQ0FBa0JWLEdBQWxCLENBQXJCO0FBQ0EsVUFBS1csTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVdaLEdBQVgsQ0FBZDtBQVBxQjtBQVF4Qjs7OztpQ0FFa0I7QUFDZixXQUFLYSxZQUFMLEdBQW9CLFFBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixPQUFyQjtBQUNIOzs7O0VBbkI4QkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCBCYXNrZXRzIGZyb20gJy4vQmFza2V0cyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9ucyBmcm9tICcuL1N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IFRveWJveCBmcm9tICcuL1RveWJveCc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VycyBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIHB1YmxpYyBiYXNrZXRzOiBCYXNrZXRzO1xuICAgIHB1YmxpYyBkZXRhaWxzOiBEZXRhaWxzO1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25zO1xuICAgIHB1YmxpYyB0b3lib3g6IFRveWJveDtcblxuICAgIGNvbnN0cnVjdG9yKGFwaTogQ2xpZW50KSB7XG4gICAgICAgIHN1cGVyKGFwaSk7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgICAgICAgdGhpcy5iYXNrZXRzID0gbmV3IEJhc2tldHMoYXBpKTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gbmV3IERldGFpbHMoYXBpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbnMoYXBpKTtcbiAgICAgICAgdGhpcy50b3lib3ggPSBuZXcgVG95Ym94KGFwaSk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL3VzZXJzJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ2d1ZXN0JztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcbn1cbiJdfQ==