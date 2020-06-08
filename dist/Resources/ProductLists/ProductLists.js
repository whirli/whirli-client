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

    _defineProperty(_assertThisInitialized(_this), "getList", _this.createMethodFromPartialSpec({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvUHJvZHVjdExpc3RzL1Byb2R1Y3RMaXN0cy50cyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdHMiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJtZXRob2QiLCJwYXRoIiwicmVzb3VyY2VQYXRoIiwiZGVmYXVsdEFjY2VzcyIsIkFic3RyYWN0UmVzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBTWtELE1BQUtDLDJCQUFMLENBQWlDO0FBQ2hHQyxNQUFBQSxNQUFNLEVBQUUsS0FEd0Y7QUFFaEdDLE1BQUFBLElBQUksRUFBRTtBQUYwRixLQUFqQyxDOzs4REFLZSxNQUFLRiwyQkFBTCxDQUFpQztBQUMvR0MsTUFBQUEsTUFBTSxFQUFFLEtBRHVHO0FBRS9HQyxNQUFBQSxJQUFJLEVBQUU7QUFGeUcsS0FBakMsQzs7Z0VBS1osTUFBS0YsMkJBQUwsQ0FBaUM7QUFDbkdDLE1BQUFBLE1BQU0sRUFBRSxPQUQyRjtBQUVuR0MsTUFBQUEsSUFBSSxFQUFFO0FBRjZGLEtBQWpDLEM7O2tFQUtFLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3JHQyxNQUFBQSxNQUFNLEVBQUUsTUFENkY7QUFFckdDLE1BQUFBLElBQUksRUFBRTtBQUYrRixLQUFqQyxDOztxRUFROUMsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxLQUQrQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFO0FBRmlELEtBQWpDLEM7O3FFQVFBLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3ZEQyxNQUFBQSxNQUFNLEVBQUUsUUFEK0M7QUFFdkRDLE1BQUFBLElBQUksRUFBRTtBQUZpRCxLQUFqQyxDOzt5RUFRQSxNQUFLRiwyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLE9BRCtDO0FBRXZEQyxNQUFBQSxJQUFJLEVBQUU7QUFGaUQsS0FBakMsQzs7Ozs7OztpQ0E1Q1A7QUFDZixXQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixRQUFyQjtBQUNIOzs7O0VBSnFDQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZywgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3RzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ21lbWJlcic7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFsbDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGF0aDogJy9wcm9kdWN0LWxpc3RzJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBnZXRMaXN0OiAoc2x1Zzogc3RyaW5nLCAuLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcvcHJvZHVjdC1saXN0cy97c2x1Z30nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHVwZGF0ZUFsbDogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBwYXRoOiAnL3Byb2R1Y3QtbGlzdHMnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGFkZExpc3RMaW5lOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJy9wcm9kdWN0LWxpc3QtbGluZXMnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHVwZGF0ZUxpc3RMaW5lOiAoXG4gICAgICAgIHByb2R1Y3RMaXN0SWQ6IHN0cmluZyxcbiAgICAgICAgLi4uYXJnczogSHR0cENsaWVudENvbmZpZ1xuICAgICkgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBwYXRoOiAnL3Byb2R1Y3QtbGlzdC1saW5lcy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBkZWxldGVMaXN0TGluZTogKFxuICAgICAgICBwcm9kdWN0TGlzdElkOiBzdHJpbmcsXG4gICAgICAgIC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWdcbiAgICApID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgcGF0aDogJy9wcm9kdWN0LWxpc3QtbGluZXMve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdW5kb0RlbGV0ZUxpc3RMaW5lOiAoXG4gICAgICAgIHByb2R1Y3RMaXN0SWQ6IHN0cmluZyxcbiAgICAgICAgLi4uYXJnczogSHR0cENsaWVudENvbmZpZ1xuICAgICkgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIHBhdGg6ICcvcHJvZHVjdC1saXN0LWxpbmVzL3VuZG8ve2lkfScsXG4gICAgfSk7XG59XG4iXX0=