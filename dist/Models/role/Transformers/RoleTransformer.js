"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _Role = _interopRequireDefault(require("../Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RoleTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(RoleTransformer, _BaseTransformer);

  var _super = _createSuper(RoleTransformer);

  function RoleTransformer() {
    _classCallCheck(this, RoleTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcm9sZS9UcmFuc2Zvcm1lcnMvUm9sZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlJvbGVUcmFuc2Zvcm1lciIsInJvbGUiLCJSb2xlIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJuYW1lIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7O1dBQ2pCLGlCQUFRQyxJQUFSLEVBQW1DO0FBQy9CLGFBQU8sSUFBSUMsZ0JBQUosQ0FBUztBQUNaQyxRQUFBQSxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFERztBQUVaQyxRQUFBQSxTQUFTLEVBQUVILElBQUksQ0FBQ0csU0FGSjtBQUdaQyxRQUFBQSxTQUFTLEVBQUVKLElBQUksQ0FBQ0ksU0FISjtBQUlaQyxRQUFBQSxJQUFJLEVBQUVMLElBQUksQ0FBQ0s7QUFKQyxPQUFULENBQVA7QUFNSDs7OztFQVJ3Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUm9sZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JvbGUvUm9sZSc7XG5pbXBvcnQgUm9sZSBmcm9tICcuLi9Sb2xlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9sZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKHJvbGU6IFJvbGVJbnRlcmZhY2UpOiBSb2xlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSb2xlKHtcbiAgICAgICAgICAgIGlkOiByb2xlLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiByb2xlLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcm9sZS51cGRhdGVkQXQsXG4gICAgICAgICAgICBuYW1lOiByb2xlLm5hbWUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==