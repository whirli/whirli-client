"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Baskets = _interopRequireDefault(require("./Baskets"));

var _Gifts = _interopRequireDefault(require("./Gifts"));

var _Subscriptions = _interopRequireDefault(require("./Subscriptions"));

var _Toybox = _interopRequireDefault(require("./Toybox"));

var _Details = _interopRequireDefault(require("./Details"));

var _Addresses = _interopRequireDefault(require("./Addresses"));

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

    _defineProperty(_assertThisInitialized(_this), "addresses", void 0);

    _defineProperty(_assertThisInitialized(_this), "baskets", void 0);

    _defineProperty(_assertThisInitialized(_this), "gifts", void 0);

    _defineProperty(_assertThisInitialized(_this), "details", void 0);

    _defineProperty(_assertThisInitialized(_this), "subscriptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "toybox", void 0);

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/'
    }));

    _this.api = api;

    _this.initialise();

    _this.addresses = new _Addresses["default"](api);
    _this.baskets = new _Baskets["default"](api);
    _this.gifts = new _Gifts["default"](api);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFkZHJlc3NlcyIsIkFkZHJlc3NlcyIsImJhc2tldHMiLCJCYXNrZXRzIiwiZ2lmdHMiLCJHaWZ0cyIsImRldGFpbHMiLCJEZXRhaWxzIiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbnMiLCJ0b3lib3giLCJUb3lib3giLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7O0FBUWpCLGlCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLCtFQUFNQSxHQUFOOztBQURxQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSw2REFrQkMsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxNQUQrQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFO0FBRmlELEtBQWpDLENBbEJEOztBQUVyQixVQUFLSCxHQUFMLEdBQVdBLEdBQVg7O0FBQ0EsVUFBS0ksVUFBTDs7QUFFQSxVQUFLQyxTQUFMLEdBQWlCLElBQUlDLHFCQUFKLENBQWNOLEdBQWQsQ0FBakI7QUFDQSxVQUFLTyxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWVIsR0FBWixDQUFmO0FBQ0EsVUFBS1MsS0FBTCxHQUFhLElBQUlDLGlCQUFKLENBQVVWLEdBQVYsQ0FBYjtBQUNBLFVBQUtXLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZWixHQUFaLENBQWY7QUFDQSxVQUFLYSxhQUFMLEdBQXFCLElBQUlDLHlCQUFKLENBQWtCZCxHQUFsQixDQUFyQjtBQUNBLFVBQUtlLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXaEIsR0FBWCxDQUFkO0FBVnFCO0FBV3hCOzs7O2lDQUVrQjtBQUNmLFdBQUtpQixZQUFMLEdBQW9CLFFBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixPQUFyQjtBQUNIOzs7O0VBeEI4QkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCBCYXNrZXRzIGZyb20gJy4vQmFza2V0cyc7XG5pbXBvcnQgR2lmdHMgZnJvbSAnLi9HaWZ0cyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9ucyBmcm9tICcuL1N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IFRveWJveCBmcm9tICcuL1RveWJveCc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xuaW1wb3J0IEFkZHJlc3NlcyBmcm9tICcuL0FkZHJlc3Nlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgcHVibGljIGFkZHJlc3NlczogQWRkcmVzc2VzO1xuICAgIHB1YmxpYyBiYXNrZXRzOiBCYXNrZXRzO1xuICAgIHB1YmxpYyBnaWZ0czogR2lmdHM7XG4gICAgcHVibGljIGRldGFpbHM6IERldGFpbHM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbnM7XG4gICAgcHVibGljIHRveWJveDogVG95Ym94O1xuXG4gICAgY29uc3RydWN0b3IoYXBpOiBDbGllbnQpIHtcbiAgICAgICAgc3VwZXIoYXBpKTtcbiAgICAgICAgdGhpcy5hcGkgPSBhcGk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuXG4gICAgICAgIHRoaXMuYWRkcmVzc2VzID0gbmV3IEFkZHJlc3NlcyhhcGkpO1xuICAgICAgICB0aGlzLmJhc2tldHMgPSBuZXcgQmFza2V0cyhhcGkpO1xuICAgICAgICB0aGlzLmdpZnRzID0gbmV3IEdpZnRzKGFwaSk7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IG5ldyBEZXRhaWxzKGFwaSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb25zKGFwaSk7XG4gICAgICAgIHRoaXMudG95Ym94ID0gbmV3IFRveWJveChhcGkpO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy91c2Vycyc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEFjY2VzcyA9ICdndWVzdCc7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG59XG4iXX0=