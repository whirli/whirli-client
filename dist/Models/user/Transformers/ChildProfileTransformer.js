"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ChildProfile = _interopRequireDefault(require("../ChildProfile"));

var _UserTransformer = _interopRequireDefault(require("./UserTransformer"));

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

var ChildProfileTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ChildProfileTransformer, _BaseTransformer);

  function ChildProfileTransformer() {
    _classCallCheck(this, ChildProfileTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChildProfileTransformer).apply(this, arguments));
  }

  _createClass(ChildProfileTransformer, [{
    key: "mapData",

    /**
     * Map an user response
     *
     * @param childProfile
     */
    value: function mapData(childProfile) {
      return new _ChildProfile["default"]({
        id: childProfile.id,
        name: childProfile.name,
        dob: childProfile.dob,
        createdAt: childProfile.createdAt,
        updatedAt: childProfile.updatedAt,
        // belongs to
        user: this.includeUser(childProfile) || undefined
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(childProfile) {
      return this.item(childProfile, 'user', new _UserTransformer["default"]());
    }
  }]);

  return ChildProfileTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ChildProfileTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvQ2hpbGRQcm9maWxlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQ2hpbGRQcm9maWxlVHJhbnNmb3JtZXIiLCJjaGlsZFByb2ZpbGUiLCJDaGlsZFByb2ZpbGUiLCJpZCIsIm5hbWUiLCJkb2IiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJ1bmRlZmluZWQiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHVCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFksRUFBbUQ7QUFDdkQsYUFBTyxJQUFJQyx3QkFBSixDQUFpQjtBQUNwQkMsUUFBQUEsRUFBRSxFQUFFRixZQUFZLENBQUNFLEVBREc7QUFFcEJDLFFBQUFBLElBQUksRUFBRUgsWUFBWSxDQUFDRyxJQUZDO0FBR3BCQyxRQUFBQSxHQUFHLEVBQUVKLFlBQVksQ0FBQ0ksR0FIRTtBQUlwQkMsUUFBQUEsU0FBUyxFQUFFTCxZQUFZLENBQUNLLFNBSko7QUFLcEJDLFFBQUFBLFNBQVMsRUFBRU4sWUFBWSxDQUFDTSxTQUxKO0FBTXBCO0FBQ0FDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCUixZQUFqQixLQUFrQ1M7QUFQcEIsT0FBakIsQ0FBUDtBQVNIOzs7Z0NBRVdULFksRUFBMkQ7QUFDbkUsYUFBTyxLQUFLVSxJQUFMLENBQVVWLFlBQVYsRUFBd0IsTUFBeEIsRUFBZ0MsSUFBSVcsMkJBQUosRUFBaEMsQ0FBUDtBQUNIOzs7O0VBcEJnREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQ2hpbGRQcm9maWxlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9DaGlsZFByb2ZpbGUnO1xuaW1wb3J0IENoaWxkUHJvZmlsZSBmcm9tICcuLi9DaGlsZFByb2ZpbGUnO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuL1VzZXJUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWxkUHJvZmlsZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gdXNlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGNoaWxkUHJvZmlsZVxuICAgICAqL1xuICAgIG1hcERhdGEoY2hpbGRQcm9maWxlOiBDaGlsZFByb2ZpbGVJbnRlcmZhY2UpOiBDaGlsZFByb2ZpbGUge1xuICAgICAgICByZXR1cm4gbmV3IENoaWxkUHJvZmlsZSh7XG4gICAgICAgICAgICBpZDogY2hpbGRQcm9maWxlLmlkLFxuICAgICAgICAgICAgbmFtZTogY2hpbGRQcm9maWxlLm5hbWUsXG4gICAgICAgICAgICBkb2I6IGNoaWxkUHJvZmlsZS5kb2IsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGNoaWxkUHJvZmlsZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGNoaWxkUHJvZmlsZS51cGRhdGVkQXQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKGNoaWxkUHJvZmlsZSkgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihjaGlsZFByb2ZpbGU6IENoaWxkUHJvZmlsZUludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShjaGlsZFByb2ZpbGUsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=