"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Code = _interopRequireDefault(require("../Code"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _TypeTransformer = _interopRequireDefault(require("./TypeTransformer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CodeTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(CodeTransformer, _BaseTransformer);

  var _super = _createSuper(CodeTransformer);

  function CodeTransformer() {
    _classCallCheck(this, CodeTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(CodeTransformer, [{
    key: "mapData",
    value: function mapData(code) {
      return new _Code["default"]({
        name: code.name,
        createdAt: code.createdAt,
        updatedAt: code.updatedAt,
        value: code.value,
        valueTypeId: code.valueTypeId,
        // has one
        type: this.includeType(code)
      });
    }
  }, {
    key: "includeType",
    value: function includeType(code) {
      return this.item(code, 'type', new _TypeTransformer["default"]());
    }
  }]);

  return CodeTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = CodeTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvY29kZS9UcmFuc2Zvcm1lcnMvQ29kZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkNvZGVUcmFuc2Zvcm1lciIsImNvZGUiLCJDb2RlIiwibmFtZSIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInZhbHVlIiwidmFsdWVUeXBlSWQiLCJ0eXBlIiwiaW5jbHVkZVR5cGUiLCJpdGVtIiwiVHlwZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxlOzs7Ozs7Ozs7Ozs7OzRCQUNUQyxJLEVBQTJCO0FBQy9CLGFBQU8sSUFBSUMsZ0JBQUosQ0FBUztBQUNaQyxRQUFBQSxJQUFJLEVBQUVGLElBQUksQ0FBQ0UsSUFEQztBQUVaQyxRQUFBQSxTQUFTLEVBQUVILElBQUksQ0FBQ0csU0FGSjtBQUdaQyxRQUFBQSxTQUFTLEVBQUVKLElBQUksQ0FBQ0ksU0FISjtBQUlaQyxRQUFBQSxLQUFLLEVBQUVMLElBQUksQ0FBQ0ssS0FKQTtBQUtaQyxRQUFBQSxXQUFXLEVBQUVOLElBQUksQ0FBQ00sV0FMTjtBQU1aO0FBQ0FDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCUixJQUFqQjtBQVBNLE9BQVQsQ0FBUDtBQVNIOzs7Z0NBRVdBLEksRUFBa0M7QUFDMUMsYUFBTyxLQUFLUyxJQUFMLENBQVVULElBQVYsRUFBZ0IsTUFBaEIsRUFBd0IsSUFBSVUsMkJBQUosRUFBeEIsQ0FBUDtBQUNIOzs7O0VBZndDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2RlIGZyb20gJy4uL0NvZGUnO1xuaW1wb3J0IENvZGVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9jb2RlL0NvZGUnO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFR5cGVUcmFuc2Zvcm1lciBmcm9tICcuL1R5cGVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVHlwZSBmcm9tICcuLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKGNvZGU6IENvZGVJbnRlcmZhY2UpOiBDb2RlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2RlKHtcbiAgICAgICAgICAgIG5hbWU6IGNvZGUubmFtZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogY29kZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGNvZGUudXBkYXRlZEF0LFxuICAgICAgICAgICAgdmFsdWU6IGNvZGUudmFsdWUsXG4gICAgICAgICAgICB2YWx1ZVR5cGVJZDogY29kZS52YWx1ZVR5cGVJZCxcbiAgICAgICAgICAgIC8vIGhhcyBvbmVcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuaW5jbHVkZVR5cGUoY29kZSksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVUeXBlKGNvZGU6IENvZGVJbnRlcmZhY2UpOiBUeXBlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oY29kZSwgJ3R5cGUnLCBuZXcgVHlwZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==