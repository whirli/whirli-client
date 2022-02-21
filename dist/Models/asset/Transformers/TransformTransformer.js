"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Transform = _interopRequireDefault(require("../Transform"));

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

var TransformTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(TransformTransformer, _BaseTransformer);

  function TransformTransformer() {
    _classCallCheck(this, TransformTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(TransformTransformer).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL1RyYW5zZm9ybVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlRyYW5zZm9ybVRyYW5zZm9ybWVyIiwidHJhbnNmb3JtIiwiVHJhbnNmb3JtIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJuYW1lIiwiaGFuZGxlIiwid2lkdGgiLCJoZWlnaHQiLCJjb25zdHJhaW50IiwicXVhbGl0eSIsImZvcm1hdCIsIm1vZGUiLCJwb3NpdGlvbiIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxvQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxTLEVBQTBDO0FBQzlDLGFBQU8sSUFBSUMscUJBQUosQ0FBYztBQUNqQkMsUUFBQUEsRUFBRSxFQUFFRixTQUFTLENBQUNFLEVBREc7QUFFakJDLFFBQUFBLFNBQVMsRUFBRUgsU0FBUyxDQUFDRyxTQUZKO0FBR2pCQyxRQUFBQSxTQUFTLEVBQUVKLFNBQVMsQ0FBQ0ksU0FISjtBQUlqQkMsUUFBQUEsSUFBSSxFQUFFTCxTQUFTLENBQUNLLElBSkM7QUFLakJDLFFBQUFBLE1BQU0sRUFBRU4sU0FBUyxDQUFDTSxNQUxEO0FBTWpCQyxRQUFBQSxLQUFLLEVBQUVQLFNBQVMsQ0FBQ08sS0FOQTtBQU9qQkMsUUFBQUEsTUFBTSxFQUFFUixTQUFTLENBQUNRLE1BUEQ7QUFRakJDLFFBQUFBLFVBQVUsRUFBRVQsU0FBUyxDQUFDUyxVQVJMO0FBU2pCQyxRQUFBQSxPQUFPLEVBQUVWLFNBQVMsQ0FBQ1UsT0FURjtBQVVqQkMsUUFBQUEsTUFBTSxFQUFFWCxTQUFTLENBQUNXLE1BVkQ7QUFXakJDLFFBQUFBLElBQUksRUFBRVosU0FBUyxDQUFDWSxJQVhDO0FBWWpCQyxRQUFBQSxRQUFRLEVBQUViLFNBQVMsQ0FBQ2E7QUFaSCxPQUFkLENBQVA7QUFjSDs7OztFQXJCNkNDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuLi9UcmFuc2Zvcm0nO1xuaW1wb3J0IFRyYW5zZm9ybUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc2V0L1RyYW5zZm9ybSc7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZm9ybVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSB0cmFuc2Zvcm0gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm1cbiAgICAgKi9cbiAgICBtYXBEYXRhKHRyYW5zZm9ybTogVHJhbnNmb3JtSW50ZXJmYWNlKTogVHJhbnNmb3JtIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2Zvcm0oe1xuICAgICAgICAgICAgaWQ6IHRyYW5zZm9ybS5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdHJhbnNmb3JtLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogdHJhbnNmb3JtLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHRyYW5zZm9ybS5uYW1lLFxuICAgICAgICAgICAgaGFuZGxlOiB0cmFuc2Zvcm0uaGFuZGxlLFxuICAgICAgICAgICAgd2lkdGg6IHRyYW5zZm9ybS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdHJhbnNmb3JtLmhlaWdodCxcbiAgICAgICAgICAgIGNvbnN0cmFpbnQ6IHRyYW5zZm9ybS5jb25zdHJhaW50LFxuICAgICAgICAgICAgcXVhbGl0eTogdHJhbnNmb3JtLnF1YWxpdHksXG4gICAgICAgICAgICBmb3JtYXQ6IHRyYW5zZm9ybS5mb3JtYXQsXG4gICAgICAgICAgICBtb2RlOiB0cmFuc2Zvcm0ubW9kZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0cmFuc2Zvcm0ucG9zaXRpb24sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==