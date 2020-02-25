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
      access: 'member',
      method: 'POST',
      path: ''
    }));

    _defineProperty(_assertThisInitialized(_this), "update", _this.createMethodFromPartialSpec({
      access: 'member',
      method: 'PUT',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "pay", _this.createMethodFromPartialSpec({
      access: 'member',
      method: 'PUT',
      path: '/{id}/pay'
    }));

    return _this;
  }

  _createClass(Subscriptions, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = 'user-subscriptions';
    }
  }]);

  return Subscriptions;
}(_AbstractResource2["default"]);

exports["default"] = Subscriptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXNvdXJjZXMvU3Vic2NyaXB0aW9ucy9zdWJzY3JpcHRpb25zLnRzIl0sIm5hbWVzIjpbIlN1YnNjcmlwdGlvbnMiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJhY2Nlc3MiLCJtZXRob2QiLCJwYXRoIiwicmVzb3VyY2VQYXRoIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFLUyxNQUFLQywyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLFFBRCtDO0FBRXZEQyxNQUFBQSxNQUFNLEVBQUUsTUFGK0M7QUFHdkRDLE1BQUFBLElBQUksRUFBRTtBQUhpRCxLQUFqQyxDOzs2REFNQSxNQUFLSCwyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLFFBRCtDO0FBRXZEQyxNQUFBQSxNQUFNLEVBQUUsS0FGK0M7QUFHdkRDLE1BQUFBLElBQUksRUFBRTtBQUhpRCxLQUFqQyxDOzswREFNSCxNQUFLSCwyQkFBTCxDQUFpQztBQUNwREMsTUFBQUEsTUFBTSxFQUFFLFFBRDRDO0FBRXBEQyxNQUFBQSxNQUFNLEVBQUUsS0FGNEM7QUFHcERDLE1BQUFBLElBQUksRUFBRTtBQUg4QyxLQUFqQyxDOzs7Ozs7O2lDQWhCSjtBQUNmLFdBQUtDLFlBQUwsR0FBb0Isb0JBQXBCO0FBQ0g7Ozs7RUFIc0NDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnNjcmlwdGlvbnMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICd1c2VyLXN1YnNjcmlwdGlvbnMnO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGU6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBhY2Nlc3M6ICdtZW1iZXInLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdXBkYXRlOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgYWNjZXNzOiAnbWVtYmVyJyxcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgcGF0aDogJy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBwYXk6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBhY2Nlc3M6ICdtZW1iZXInLFxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBwYXRoOiAnL3tpZH0vcGF5JyxcbiAgICB9KTtcbn1cbiJdfQ==