"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Transform = _interopRequireDefault(require("../Transform"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

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

var TransformTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(TransformTransformer, _BaseTransformer);

  var _super = _createSuper(TransformTransformer);

  function TransformTransformer() {
    _classCallCheck(this, TransformTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(TransformTransformer, [{
    key: "mapData",
    value:
    /**
     * Map a transform response
     *
     * @param transform
     */
    function mapData(transform) {
      return new _Transform["default"]({
        id: transform.id,
        createdAt: transform.createdAt,
        updatedAt: transform.updatedAt,
        name: transform.name,
        handle: transform.handle,
        width: transform.width,
        height: transform.height,
        constraint: transform.constraint,
        quality: transform.quality,
        format: transform.format,
        mode: transform.mode,
        position: transform.position
      });
    }
  }]);

  return TransformTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = TransformTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL1RyYW5zZm9ybVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlRyYW5zZm9ybVRyYW5zZm9ybWVyIiwidHJhbnNmb3JtIiwiVHJhbnNmb3JtIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJuYW1lIiwiaGFuZGxlIiwid2lkdGgiLCJoZWlnaHQiLCJjb25zdHJhaW50IiwicXVhbGl0eSIsImZvcm1hdCIsIm1vZGUiLCJwb3NpdGlvbiIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsb0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSSxxQkFBUUMsU0FBUixFQUFrRDtBQUM5QyxhQUFPLElBQUlDLHFCQUFKLENBQWM7QUFDakJDLFFBQUFBLEVBQUUsRUFBRUYsU0FBUyxDQUFDRSxFQURHO0FBRWpCQyxRQUFBQSxTQUFTLEVBQUVILFNBQVMsQ0FBQ0csU0FGSjtBQUdqQkMsUUFBQUEsU0FBUyxFQUFFSixTQUFTLENBQUNJLFNBSEo7QUFJakJDLFFBQUFBLElBQUksRUFBRUwsU0FBUyxDQUFDSyxJQUpDO0FBS2pCQyxRQUFBQSxNQUFNLEVBQUVOLFNBQVMsQ0FBQ00sTUFMRDtBQU1qQkMsUUFBQUEsS0FBSyxFQUFFUCxTQUFTLENBQUNPLEtBTkE7QUFPakJDLFFBQUFBLE1BQU0sRUFBRVIsU0FBUyxDQUFDUSxNQVBEO0FBUWpCQyxRQUFBQSxVQUFVLEVBQUVULFNBQVMsQ0FBQ1MsVUFSTDtBQVNqQkMsUUFBQUEsT0FBTyxFQUFFVixTQUFTLENBQUNVLE9BVEY7QUFVakJDLFFBQUFBLE1BQU0sRUFBRVgsU0FBUyxDQUFDVyxNQVZEO0FBV2pCQyxRQUFBQSxJQUFJLEVBQUVaLFNBQVMsQ0FBQ1ksSUFYQztBQVlqQkMsUUFBQUEsUUFBUSxFQUFFYixTQUFTLENBQUNhO0FBWkgsT0FBZCxDQUFQO0FBY0g7Ozs7RUFyQjZDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi4vVHJhbnNmb3JtJztcbmltcG9ydCBUcmFuc2Zvcm1JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NldC9UcmFuc2Zvcm0nO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2Zvcm1UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgdHJhbnNmb3JtIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtXG4gICAgICovXG4gICAgbWFwRGF0YSh0cmFuc2Zvcm06IFRyYW5zZm9ybUludGVyZmFjZSk6IFRyYW5zZm9ybSB7XG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNmb3JtKHtcbiAgICAgICAgICAgIGlkOiB0cmFuc2Zvcm0uaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHRyYW5zZm9ybS5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHRyYW5zZm9ybS51cGRhdGVkQXQsXG4gICAgICAgICAgICBuYW1lOiB0cmFuc2Zvcm0ubmFtZSxcbiAgICAgICAgICAgIGhhbmRsZTogdHJhbnNmb3JtLmhhbmRsZSxcbiAgICAgICAgICAgIHdpZHRoOiB0cmFuc2Zvcm0ud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRyYW5zZm9ybS5oZWlnaHQsXG4gICAgICAgICAgICBjb25zdHJhaW50OiB0cmFuc2Zvcm0uY29uc3RyYWludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHRyYW5zZm9ybS5xdWFsaXR5LFxuICAgICAgICAgICAgZm9ybWF0OiB0cmFuc2Zvcm0uZm9ybWF0LFxuICAgICAgICAgICAgbW9kZTogdHJhbnNmb3JtLm1vZGUsXG4gICAgICAgICAgICBwb3NpdGlvbjogdHJhbnNmb3JtLnBvc2l0aW9uLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=