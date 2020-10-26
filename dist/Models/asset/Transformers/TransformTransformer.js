"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Transform = _interopRequireDefault(require("../Transform"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

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

var TransformTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(TransformTransformer, _BaseTransformer);

  var _super = _createSuper(TransformTransformer);

  function TransformTransformer() {
    _classCallCheck(this, TransformTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(TransformTransformer, [{
    key: "mapData",

    /**
     * Map a transform response
     *
     * @param transform
     */
    value: function mapData(transform) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL1RyYW5zZm9ybVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlRyYW5zZm9ybVRyYW5zZm9ybWVyIiwidHJhbnNmb3JtIiwiVHJhbnNmb3JtIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJuYW1lIiwiaGFuZGxlIiwid2lkdGgiLCJoZWlnaHQiLCJjb25zdHJhaW50IiwicXVhbGl0eSIsImZvcm1hdCIsIm1vZGUiLCJwb3NpdGlvbiIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsb0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7NEJBQ1lDLFMsRUFBMEM7QUFDOUMsYUFBTyxJQUFJQyxxQkFBSixDQUFjO0FBQ2pCQyxRQUFBQSxFQUFFLEVBQUVGLFNBQVMsQ0FBQ0UsRUFERztBQUVqQkMsUUFBQUEsU0FBUyxFQUFFSCxTQUFTLENBQUNHLFNBRko7QUFHakJDLFFBQUFBLFNBQVMsRUFBRUosU0FBUyxDQUFDSSxTQUhKO0FBSWpCQyxRQUFBQSxJQUFJLEVBQUVMLFNBQVMsQ0FBQ0ssSUFKQztBQUtqQkMsUUFBQUEsTUFBTSxFQUFFTixTQUFTLENBQUNNLE1BTEQ7QUFNakJDLFFBQUFBLEtBQUssRUFBRVAsU0FBUyxDQUFDTyxLQU5BO0FBT2pCQyxRQUFBQSxNQUFNLEVBQUVSLFNBQVMsQ0FBQ1EsTUFQRDtBQVFqQkMsUUFBQUEsVUFBVSxFQUFFVCxTQUFTLENBQUNTLFVBUkw7QUFTakJDLFFBQUFBLE9BQU8sRUFBRVYsU0FBUyxDQUFDVSxPQVRGO0FBVWpCQyxRQUFBQSxNQUFNLEVBQUVYLFNBQVMsQ0FBQ1csTUFWRDtBQVdqQkMsUUFBQUEsSUFBSSxFQUFFWixTQUFTLENBQUNZLElBWEM7QUFZakJDLFFBQUFBLFFBQVEsRUFBRWIsU0FBUyxDQUFDYTtBQVpILE9BQWQsQ0FBUDtBQWNIOzs7O0VBckI2Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4uL1RyYW5zZm9ybSc7XG5pbXBvcnQgVHJhbnNmb3JtSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvVHJhbnNmb3JtJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHRyYW5zZm9ybSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHRyYW5zZm9ybVxuICAgICAqL1xuICAgIG1hcERhdGEodHJhbnNmb3JtOiBUcmFuc2Zvcm1JbnRlcmZhY2UpOiBUcmFuc2Zvcm0ge1xuICAgICAgICByZXR1cm4gbmV3IFRyYW5zZm9ybSh7XG4gICAgICAgICAgICBpZDogdHJhbnNmb3JtLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiB0cmFuc2Zvcm0uY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB0cmFuc2Zvcm0udXBkYXRlZEF0LFxuICAgICAgICAgICAgbmFtZTogdHJhbnNmb3JtLm5hbWUsXG4gICAgICAgICAgICBoYW5kbGU6IHRyYW5zZm9ybS5oYW5kbGUsXG4gICAgICAgICAgICB3aWR0aDogdHJhbnNmb3JtLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0cmFuc2Zvcm0uaGVpZ2h0LFxuICAgICAgICAgICAgY29uc3RyYWludDogdHJhbnNmb3JtLmNvbnN0cmFpbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiB0cmFuc2Zvcm0ucXVhbGl0eSxcbiAgICAgICAgICAgIGZvcm1hdDogdHJhbnNmb3JtLmZvcm1hdCxcbiAgICAgICAgICAgIG1vZGU6IHRyYW5zZm9ybS5tb2RlLFxuICAgICAgICAgICAgcG9zaXRpb246IHRyYW5zZm9ybS5wb3NpdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19