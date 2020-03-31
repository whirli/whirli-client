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

    /**
     * Map an order response
     *
     * @param type
     */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvY29kZS9UcmFuc2Zvcm1lcnMvVHlwZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlR5cGVUcmFuc2Zvcm1lciIsInR5cGUiLCJDb2RlIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJuYW1lIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsSSxFQUEyQjtBQUMvQixhQUFPLElBQUlDLGdCQUFKLENBQVM7QUFDWkMsUUFBQUEsRUFBRSxFQUFFRixJQUFJLENBQUNFLEVBREc7QUFFWkMsUUFBQUEsU0FBUyxFQUFFSCxJQUFJLENBQUNHLFNBRko7QUFHWkMsUUFBQUEsU0FBUyxFQUFFSixJQUFJLENBQUNJLFNBSEo7QUFJWkMsUUFBQUEsSUFBSSxFQUFFTCxJQUFJLENBQUNLO0FBSkMsT0FBVCxDQUFQO0FBTUg7Ozs7RUFid0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvZGUgZnJvbSAnLi4vVHlwZSc7XG5pbXBvcnQgVHlwZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2NvZGUvVHlwZSc7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIG9yZGVyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqL1xuICAgIG1hcERhdGEodHlwZTogVHlwZUludGVyZmFjZSk6IENvZGUge1xuICAgICAgICByZXR1cm4gbmV3IENvZGUoe1xuICAgICAgICAgICAgaWQ6IHR5cGUuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHR5cGUuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB0eXBlLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHR5cGUubmFtZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19