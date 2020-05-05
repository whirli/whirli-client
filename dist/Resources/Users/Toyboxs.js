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

/**
 * _Updating a user's toybox_
 *
 * - `client.user.toybox.designateToyForReturn(stockId);`
 * - `client.user.toybox.undesignateToyForReturn(stockId);`
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvVG95Ym94cy50cyJdLCJuYW1lcyI6WyJUb3lib3giLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1xQkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRFQU13QixNQUFLQywyQkFBTCxDQUFpQztBQUN0RUMsTUFBQUEsTUFBTSxFQUFFLE9BRDhEO0FBRXRFQyxNQUFBQSxJQUFJLEVBQUU7QUFGZ0UsS0FBakMsQzs7OEVBS0UsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDeEVDLE1BQUFBLE1BQU0sRUFBRSxPQURnRTtBQUV4RUMsTUFBQUEsSUFBSSxFQUFFO0FBRmtFLEtBQWpDLEM7Ozs7Ozs7aUNBVnhCO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixRQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsUUFBckI7QUFDSDs7OztFQUorQkMsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcblxuLyoqXG4gKiBfVXBkYXRpbmcgYSB1c2VyJ3MgdG95Ym94X1xuICpcbiAqIC0gYGNsaWVudC51c2VyLnRveWJveC5kZXNpZ25hdGVUb3lGb3JSZXR1cm4oc3RvY2tJZCk7YFxuICogLSBgY2xpZW50LnVzZXIudG95Ym94LnVuZGVzaWduYXRlVG95Rm9yUmV0dXJuKHN0b2NrSWQpO2BcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG95Ym94IGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL3N0b2NrJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ21lbWJlcic7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2lnbmF0ZVRveUZvclJldHVybjogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgcGF0aDogJy97aWR9L2Rlc2lnbmF0ZS1mb3ItcmV0dXJuJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB1bmRlc2lnbmF0ZVRveUZvclJldHVybjogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgcGF0aDogJy97aWR9L2FkZC10by10b3lib3gnLFxuICAgIH0pO1xufVxuIl19