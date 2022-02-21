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

var Baskets =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Baskets, _AbstractResource);

  function Baskets() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Baskets);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Baskets)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getActive", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/active-basket'
    }));

    _defineProperty(_assertThisInitialized(_this), "addLine", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/basket-lines'
    }));

    _defineProperty(_assertThisInitialized(_this), "updateLine", _this.createMethodFromPartialSpec({
      method: 'PUT',
      path: '/basket-lines/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "removeLine", _this.createMethodFromPartialSpec({
      method: 'DELETE',
      path: '/basket-lines/{id}'
    }));

    return _this;
  }

  _createClass(Baskets, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '';
      this.defaultAccess = 'member';
    }
  }]);

  return Baskets;
}(_AbstractResource2["default"]);

exports["default"] = Baskets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvQmFza2V0cy50cyJdLCJuYW1lcyI6WyJCYXNrZXRzIiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQU1xRCxNQUFLQywyQkFBTCxDQUFpQztBQUNuR0MsTUFBQUEsTUFBTSxFQUFFLEtBRDJGO0FBRW5HQyxNQUFBQSxJQUFJLEVBQUU7QUFGNkYsS0FBakMsQzs7OERBS0YsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDakdDLE1BQUFBLE1BQU0sRUFBRSxNQUR5RjtBQUVqR0MsTUFBQUEsSUFBSSxFQUFFO0FBRjJGLEtBQWpDLEM7O2lFQUtHLE1BQUtGLDJCQUFMLENBQWlDO0FBQ3BHQyxNQUFBQSxNQUFNLEVBQUUsS0FENEY7QUFFcEdDLE1BQUFBLElBQUksRUFBRTtBQUY4RixLQUFqQyxDOztpRUFLQSxNQUFLRiwyQkFBTCxDQUFpQztBQUNwR0MsTUFBQUEsTUFBTSxFQUFFLFFBRDRGO0FBRXBHQyxNQUFBQSxJQUFJLEVBQUU7QUFGOEYsS0FBakMsQzs7Ozs7OztpQ0FwQnBEO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsUUFBckI7QUFDSDs7OztFQUpnQ0MsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuLi9BYnN0cmFjdFJlc291cmNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcsIEh0dHBDbGllbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2tldHMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnbWVtYmVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWN0aXZlOiAoLi4uYXJnczogSHR0cENsaWVudENvbmZpZykgPT4gSHR0cENsaWVudFJlc3BvbnNlID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL2FjdGl2ZS1iYXNrZXQnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGFkZExpbmU6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBwYXRoOiAnL2Jhc2tldC1saW5lcycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgdXBkYXRlTGluZTogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgcGF0aDogJy9iYXNrZXQtbGluZXMve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgcmVtb3ZlTGluZTogKC4uLmFyZ3M6IEh0dHBDbGllbnRDb25maWcpID0+IEh0dHBDbGllbnRSZXNwb25zZSA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgcGF0aDogJy9iYXNrZXQtbGluZXMve2lkfScsXG4gICAgfSk7XG59XG4iXX0=