"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Type = _interopRequireDefault(require("../Type"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

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

var TypeTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(TypeTransformer, _BaseTransformer);

  function TypeTransformer() {
    _classCallCheck(this, TypeTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(TypeTransformer).apply(this, arguments));
  }

  _createClass(TypeTransformer, [{
    key: "mapData",
    value: function mapData(type) {
      return new _Type["default"]({
        id: type.id,
        createdAt: type.createdAt,
        updatedAt: type.updatedAt,
        name: type.name
      });
    }
  }]);

  return TypeTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = TypeTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvY29kZS9UcmFuc2Zvcm1lcnMvVHlwZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlR5cGVUcmFuc2Zvcm1lciIsInR5cGUiLCJUeXBlIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJuYW1lIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7NEJBQ1RDLEksRUFBMkI7QUFDL0IsYUFBTyxJQUFJQyxnQkFBSixDQUFTO0FBQ1pDLFFBQUFBLEVBQUUsRUFBRUYsSUFBSSxDQUFDRSxFQURHO0FBRVpDLFFBQUFBLFNBQVMsRUFBRUgsSUFBSSxDQUFDRyxTQUZKO0FBR1pDLFFBQUFBLFNBQVMsRUFBRUosSUFBSSxDQUFDSSxTQUhKO0FBSVpDLFFBQUFBLElBQUksRUFBRUwsSUFBSSxDQUFDSztBQUpDLE9BQVQsQ0FBUDtBQU1IOzs7O0VBUndDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBlIGZyb20gJy4uL1R5cGUnO1xuaW1wb3J0IFR5cGVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9jb2RlL1R5cGUnO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEodHlwZTogVHlwZUludGVyZmFjZSk6IFR5cGUge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGUoe1xuICAgICAgICAgICAgaWQ6IHR5cGUuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHR5cGUuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB0eXBlLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHR5cGUubmFtZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19