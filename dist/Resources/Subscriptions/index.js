"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Addons = _interopRequireDefault(require("./Addons"));

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

  function Subscriptions(api) {
    var _this;

    _classCallCheck(this, Subscriptions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Subscriptions).call(this, api));

    _defineProperty(_assertThisInitialized(_this), "addons", void 0);

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "allWithChange", _this.createMethodFromPartialSpec({
      access: 'member',
      method: 'GET',
      path: '/'
    }));

    _this.api = api;

    _this.initialise();

    _this.addons = new _Addons["default"](api);
    return _this;
  }

  _createClass(Subscriptions, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/subscriptions';
      this.defaultAccess = 'guest';
    }
  }]);

  return Subscriptions;
}(_AbstractResource2["default"]);

exports["default"] = Subscriptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvU3Vic2NyaXB0aW9ucy9pbmRleC50cyJdLCJuYW1lcyI6WyJTdWJzY3JpcHRpb25zIiwiYXBpIiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsImFjY2VzcyIsImluaXRpYWxpc2UiLCJhZGRvbnMiLCJBZGRvbnMiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7O0FBR2pCLHlCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLHVGQUFNQSxHQUFOOztBQURxQjs7QUFBQSwwREFZRixNQUFLQywyQkFBTCxDQUFpQztBQUNwREMsTUFBQUEsTUFBTSxFQUFFLEtBRDRDO0FBRXBEQyxNQUFBQSxJQUFJLEVBQUU7QUFGOEMsS0FBakMsQ0FaRTs7QUFBQSxvRUFpQlEsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDOURHLE1BQUFBLE1BQU0sRUFBRSxRQURzRDtBQUU5REYsTUFBQUEsTUFBTSxFQUFFLEtBRnNEO0FBRzlEQyxNQUFBQSxJQUFJLEVBQUU7QUFId0QsS0FBakMsQ0FqQlI7O0FBRXJCLFVBQUtILEdBQUwsR0FBV0EsR0FBWDs7QUFDQSxVQUFLSyxVQUFMOztBQUNBLFVBQUtDLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXUCxHQUFYLENBQWQ7QUFKcUI7QUFLeEI7Ozs7aUNBRWtCO0FBQ2YsV0FBS1EsWUFBTCxHQUFvQixnQkFBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE9BQXJCO0FBQ0g7Ozs7RUFic0NDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9DbGllbnQnO1xuaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5pbXBvcnQgQWRkb25zIGZyb20gJy4vQWRkb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic2NyaXB0aW9ucyBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIHB1YmxpYyBhZGRvbnM6IEFkZG9ucztcblxuICAgIGNvbnN0cnVjdG9yKGFwaTogQ2xpZW50KSB7XG4gICAgICAgIHN1cGVyKGFwaSk7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgICAgICAgdGhpcy5hZGRvbnMgPSBuZXcgQWRkb25zKGFwaSk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL3N1YnNjcmlwdGlvbnMnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnZ3Vlc3QnO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbGw6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgYWxsV2l0aENoYW5nZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIGFjY2VzczogJ21lbWJlcicsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcbn1cbiJdfQ==