"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Code = _interopRequireDefault(require("../Code"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _TypeTransformer = _interopRequireDefault(require("./TypeTransformer"));

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

var CodeTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(CodeTransformer, _BaseTransformer);

  function CodeTransformer() {
    _classCallCheck(this, CodeTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(CodeTransformer).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvY29kZS9UcmFuc2Zvcm1lcnMvQ29kZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkNvZGVUcmFuc2Zvcm1lciIsImNvZGUiLCJDb2RlIiwibmFtZSIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInZhbHVlIiwidmFsdWVUeXBlSWQiLCJ0eXBlIiwiaW5jbHVkZVR5cGUiLCJpdGVtIiwiVHlwZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLGU7Ozs7Ozs7Ozs7Ozs7NEJBQ1RDLEksRUFBMkI7QUFDL0IsYUFBTyxJQUFJQyxnQkFBSixDQUFTO0FBQ1pDLFFBQUFBLElBQUksRUFBRUYsSUFBSSxDQUFDRSxJQURDO0FBRVpDLFFBQUFBLFNBQVMsRUFBRUgsSUFBSSxDQUFDRyxTQUZKO0FBR1pDLFFBQUFBLFNBQVMsRUFBRUosSUFBSSxDQUFDSSxTQUhKO0FBSVpDLFFBQUFBLEtBQUssRUFBRUwsSUFBSSxDQUFDSyxLQUpBO0FBS1pDLFFBQUFBLFdBQVcsRUFBRU4sSUFBSSxDQUFDTSxXQUxOO0FBTVo7QUFDQUMsUUFBQUEsSUFBSSxFQUFFLEtBQUtDLFdBQUwsQ0FBaUJSLElBQWpCO0FBUE0sT0FBVCxDQUFQO0FBU0g7OztnQ0FFV0EsSSxFQUFrQztBQUMxQyxhQUFPLEtBQUtTLElBQUwsQ0FBVVQsSUFBVixFQUFnQixNQUFoQixFQUF3QixJQUFJVSwyQkFBSixFQUF4QixDQUFQO0FBQ0g7Ozs7RUFmd0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvZGUgZnJvbSAnLi4vQ29kZSc7XG5pbXBvcnQgQ29kZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2NvZGUvQ29kZSc7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVHlwZVRyYW5zZm9ybWVyIGZyb20gJy4vVHlwZVRyYW5zZm9ybWVyJztcbmltcG9ydCBUeXBlIGZyb20gJy4uL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEoY29kZTogQ29kZUludGVyZmFjZSk6IENvZGUge1xuICAgICAgICByZXR1cm4gbmV3IENvZGUoe1xuICAgICAgICAgICAgbmFtZTogY29kZS5uYW1lLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBjb2RlLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogY29kZS51cGRhdGVkQXQsXG4gICAgICAgICAgICB2YWx1ZTogY29kZS52YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlVHlwZUlkOiBjb2RlLnZhbHVlVHlwZUlkLFxuICAgICAgICAgICAgLy8gaGFzIG9uZVxuICAgICAgICAgICAgdHlwZTogdGhpcy5pbmNsdWRlVHlwZShjb2RlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVR5cGUoY29kZTogQ29kZUludGVyZmFjZSk6IFR5cGUgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShjb2RlLCAndHlwZScsIG5ldyBUeXBlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19