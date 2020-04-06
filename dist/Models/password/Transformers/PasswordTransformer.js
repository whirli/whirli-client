"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Password = _interopRequireDefault(require("../Password"));

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

var PasswordTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(PasswordTransformer, _BaseTransformer);

  function PasswordTransformer() {
    _classCallCheck(this, PasswordTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(PasswordTransformer).apply(this, arguments));
  }

  _createClass(PasswordTransformer, [{
    key: "mapData",

    /**
     * Map password response
     *
     * @param password
     */
    value: function mapData(password) {
      return new _Password["default"]({
        httpCode: password.http_code,
        success: password.success,
        errors: password.errors,
        messages: password.messages,
        meta: password.meta,
        data: password.data
      });
    }
  }]);

  return PasswordTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = PasswordTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcGFzc3dvcmQvVHJhbnNmb3JtZXJzL1Bhc3N3b3JkVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUGFzc3dvcmRUcmFuc2Zvcm1lciIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJodHRwQ29kZSIsImh0dHBfY29kZSIsInN1Y2Nlc3MiLCJlcnJvcnMiLCJtZXNzYWdlcyIsIm1ldGEiLCJkYXRhIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFEsRUFBMEM7QUFDOUMsYUFBTyxJQUFJQyxvQkFBSixDQUFhO0FBQ2hCQyxRQUFBQSxRQUFRLEVBQUVGLFFBQVEsQ0FBQ0csU0FESDtBQUVoQkMsUUFBQUEsT0FBTyxFQUFFSixRQUFRLENBQUNJLE9BRkY7QUFHaEJDLFFBQUFBLE1BQU0sRUFBRUwsUUFBUSxDQUFDSyxNQUhEO0FBSWhCQyxRQUFBQSxRQUFRLEVBQUVOLFFBQVEsQ0FBQ00sUUFKSDtBQUtoQkMsUUFBQUEsSUFBSSxFQUFFUCxRQUFRLENBQUNPLElBTEM7QUFNaEJDLFFBQUFBLElBQUksRUFBRVIsUUFBUSxDQUFDUTtBQU5DLE9BQWIsQ0FBUDtBQVFIOzs7O0VBZjRDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXNzd29yZCBmcm9tICcuLi9QYXNzd29yZCc7XG5pbXBvcnQgeyBBUElQYXNzd29yZCBhcyBBUElQYXNzd29yZEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcGFzc3dvcmQvUGFzc3dvcmQnO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgcGFzc3dvcmQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXNzd29yZFxuICAgICAqL1xuICAgIG1hcERhdGEocGFzc3dvcmQ6IEFQSVBhc3N3b3JkSW50ZXJmYWNlKTogUGFzc3dvcmQge1xuICAgICAgICByZXR1cm4gbmV3IFBhc3N3b3JkKHtcbiAgICAgICAgICAgIGh0dHBDb2RlOiBwYXNzd29yZC5odHRwX2NvZGUsXG4gICAgICAgICAgICBzdWNjZXNzOiBwYXNzd29yZC5zdWNjZXNzLFxuICAgICAgICAgICAgZXJyb3JzOiBwYXNzd29yZC5lcnJvcnMsXG4gICAgICAgICAgICBtZXNzYWdlczogcGFzc3dvcmQubWVzc2FnZXMsXG4gICAgICAgICAgICBtZXRhOiBwYXNzd29yZC5tZXRhLFxuICAgICAgICAgICAgZGF0YTogcGFzc3dvcmQuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19