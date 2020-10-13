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

var ProductLists =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(ProductLists, _AbstractResource);

  function ProductLists() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProductLists);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProductLists)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getAll", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/product-lists'
    }));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/product-lists/{slug}'
    }));

    _defineProperty(_assertThisInitialized(_this), "updateAll", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/product-lists'
    }));

    _defineProperty(_assertThisInitialized(_this), "addListLine", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/product-list-lines'
    }));

    _defineProperty(_assertThisInitialized(_this), "updateListLine", _this.createMethodFromPartialSpec({
      method: 'PUT',
      path: '/product-list-lines/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "deleteListLine", _this.createMethodFromPartialSpec({
      method: 'DELETE',
      path: '/product-list-lines/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "undoDeleteListLine", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/product-list-lines/undo/{id}'
    }));

    return _this;
  }

  _createClass(ProductLists, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '';
      this.defaultAccess = 'member';
    }
  }]);

  return ProductLists;
}(_AbstractResource2["default"]);

exports["default"] = ProductLists;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvUHJvZHVjdExpc3RzLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0cyIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFNa0QsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDaEdDLE1BQUFBLE1BQU0sRUFBRSxLQUR3RjtBQUVoR0MsTUFBQUEsSUFBSSxFQUFFO0FBRjBGLEtBQWpDLEM7OzBEQUtXLE1BQUtGLDJCQUFMLENBQWlDO0FBQzNHQyxNQUFBQSxNQUFNLEVBQUUsS0FEbUc7QUFFM0dDLE1BQUFBLElBQUksRUFBRTtBQUZxRyxLQUFqQyxDOztnRUFLUixNQUFLRiwyQkFBTCxDQUFpQztBQUNuR0MsTUFBQUEsTUFBTSxFQUFFLE9BRDJGO0FBRW5HQyxNQUFBQSxJQUFJLEVBQUU7QUFGNkYsS0FBakMsQzs7a0VBS0UsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDckdDLE1BQUFBLE1BQU0sRUFBRSxNQUQ2RjtBQUVyR0MsTUFBQUEsSUFBSSxFQUFFO0FBRitGLEtBQWpDLEM7O3FFQVE5QyxNQUFLRiwyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLEtBRCtDO0FBRXZEQyxNQUFBQSxJQUFJLEVBQUU7QUFGaUQsS0FBakMsQzs7cUVBUUEsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxRQUQrQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFO0FBRmlELEtBQWpDLEM7O3lFQVFBLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsT0FEK0M7QUFFdkRDLE1BQUFBLElBQUksRUFBRTtBQUZpRCxLQUFqQyxDOzs7Ozs7O2lDQTVDUDtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLFFBQXJCO0FBQ0g7Ozs7RUFKcUNDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnLCBIdHRwQ2xpZW50UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TGlzdHMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnbWVtYmVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxsOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3Byb2R1Y3QtbGlzdHMnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGdldDogKHNsdWc6IHN0cmluZywgLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3Byb2R1Y3QtbGlzdHMve3NsdWd9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB1cGRhdGVBbGw6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgcGF0aDogJy9wcm9kdWN0LWxpc3RzJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBhZGRMaXN0TGluZTogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvcHJvZHVjdC1saXN0LWxpbmVzJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB1cGRhdGVMaXN0TGluZTogKFxuICAgICAgICBwcm9kdWN0TGlzdElkOiBzdHJpbmcsXG4gICAgICAgIC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWdcbiAgICApID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgcGF0aDogJy9wcm9kdWN0LWxpc3QtbGluZXMve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgZGVsZXRlTGlzdExpbmU6IChcbiAgICAgICAgcHJvZHVjdExpc3RJZDogc3RyaW5nLFxuICAgICAgICAuLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnXG4gICAgKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIHBhdGg6ICcvcHJvZHVjdC1saXN0LWxpbmVzL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHVuZG9EZWxldGVMaXN0TGluZTogKFxuICAgICAgICBwcm9kdWN0TGlzdElkOiBzdHJpbmcsXG4gICAgICAgIC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWdcbiAgICApID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAnL3Byb2R1Y3QtbGlzdC1saW5lcy91bmRvL3tpZH0nLFxuICAgIH0pO1xufVxuIl19