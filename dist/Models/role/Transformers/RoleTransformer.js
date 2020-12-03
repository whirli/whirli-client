"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _Role = _interopRequireDefault(require("../Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RoleTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(RoleTransformer, _BaseTransformer);

  function RoleTransformer() {
    _classCallCheck(this, RoleTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(RoleTransformer).apply(this, arguments));
  }

  _createClass(RoleTransformer, [{
    key: "mapData",
    value: function mapData(role) {
      return new _Role["default"]({
        id: role.id,
        createdAt: role.createdAt,
        updatedAt: role.updatedAt,
        name: role.name
      });
    }
  }]);

  return RoleTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = RoleTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcm9sZS9UcmFuc2Zvcm1lcnMvUm9sZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlJvbGVUcmFuc2Zvcm1lciIsInJvbGUiLCJSb2xlIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJuYW1lIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7NEJBQ1RDLEksRUFBMkI7QUFDL0IsYUFBTyxJQUFJQyxnQkFBSixDQUFTO0FBQ1pDLFFBQUFBLEVBQUUsRUFBRUYsSUFBSSxDQUFDRSxFQURHO0FBRVpDLFFBQUFBLFNBQVMsRUFBRUgsSUFBSSxDQUFDRyxTQUZKO0FBR1pDLFFBQUFBLFNBQVMsRUFBRUosSUFBSSxDQUFDSSxTQUhKO0FBSVpDLFFBQUFBLElBQUksRUFBRUwsSUFBSSxDQUFDSztBQUpDLE9BQVQsQ0FBUDtBQU1IOzs7O0VBUndDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBSb2xlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcm9sZS9Sb2xlJztcbmltcG9ydCBSb2xlIGZyb20gJy4uL1JvbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xlVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEocm9sZTogUm9sZUludGVyZmFjZSk6IFJvbGUge1xuICAgICAgICByZXR1cm4gbmV3IFJvbGUoe1xuICAgICAgICAgICAgaWQ6IHJvbGUuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHJvbGUuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiByb2xlLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHJvbGUubmFtZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19