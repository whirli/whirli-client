"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AssetSource = _interopRequireDefault(require("../AssetSource"));

var _AssetTransformer = _interopRequireDefault(require("./AssetTransformer"));

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

var AssetSourceTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(AssetSourceTransformer, _BaseTransformer);

  var _super = _createSuper(AssetSourceTransformer);

  function AssetSourceTransformer() {
    _classCallCheck(this, AssetSourceTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(AssetSourceTransformer, [{
    key: "mapData",

    /**
     * Map an asset source response
     *
     * @param assetSource
     */
    value: function mapData(assetSource) {
      return new _AssetSource["default"]({
        id: assetSource.id,
        createdAt: assetSource.createdAt,
        updatedAt: assetSource.updatedAt,
        name: assetSource.name,
        handle: assetSource.handle,
        disk: assetSource.disk,
        "default": assetSource["default"],
        bucket: assetSource.bucket,
        path: assetSource.path,
        // has many
        assets: this.includeAssets(assetSource)
      });
    }
  }, {
    key: "includeAssets",
    value: function includeAssets(assetSource) {
      return this.collection(assetSource, 'assets', new _AssetTransformer["default"]());
    }
  }]);

  return AssetSourceTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = AssetSourceTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0U291cmNlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciIsImFzc2V0U291cmNlIiwiQXNzZXRTb3VyY2UiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIm5hbWUiLCJoYW5kbGUiLCJkaXNrIiwiYnVja2V0IiwicGF0aCIsImFzc2V0cyIsImluY2x1ZGVBc3NldHMiLCJjb2xsZWN0aW9uIiwiQXNzZXRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsc0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7NEJBQ1lDLFcsRUFBZ0Q7QUFDcEQsYUFBTyxJQUFJQyx1QkFBSixDQUFnQjtBQUNuQkMsUUFBQUEsRUFBRSxFQUFFRixXQUFXLENBQUNFLEVBREc7QUFFbkJDLFFBQUFBLFNBQVMsRUFBRUgsV0FBVyxDQUFDRyxTQUZKO0FBR25CQyxRQUFBQSxTQUFTLEVBQUVKLFdBQVcsQ0FBQ0ksU0FISjtBQUluQkMsUUFBQUEsSUFBSSxFQUFFTCxXQUFXLENBQUNLLElBSkM7QUFLbkJDLFFBQUFBLE1BQU0sRUFBRU4sV0FBVyxDQUFDTSxNQUxEO0FBTW5CQyxRQUFBQSxJQUFJLEVBQUVQLFdBQVcsQ0FBQ08sSUFOQztBQU9uQixtQkFBU1AsV0FBVyxXQVBEO0FBUW5CUSxRQUFBQSxNQUFNLEVBQUVSLFdBQVcsQ0FBQ1EsTUFSRDtBQVNuQkMsUUFBQUEsSUFBSSxFQUFFVCxXQUFXLENBQUNTLElBVEM7QUFVbkI7QUFDQUMsUUFBQUEsTUFBTSxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJYLFdBQW5CO0FBWFcsT0FBaEIsQ0FBUDtBQWFIOzs7a0NBRWFBLFcsRUFBMEQ7QUFDcEUsYUFBTyxLQUFLWSxVQUFMLENBQWdCWixXQUFoQixFQUE2QixRQUE3QixFQUF1QyxJQUFJYSw0QkFBSixFQUF2QyxDQUFQO0FBQ0g7Ozs7RUF4QitDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldFNvdXJjZSBmcm9tICcuLi9Bc3NldFNvdXJjZSc7XG5pbXBvcnQgQXNzZXRTb3VyY2VJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NldC9Bc3NldFNvdXJjZSc7XG5pbXBvcnQgQXNzZXRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NldC9Bc3NldCc7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm1lciBmcm9tICcuL0Fzc2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldFNvdXJjZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gYXNzZXQgc291cmNlIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXNzZXRTb3VyY2VcbiAgICAgKi9cbiAgICBtYXBEYXRhKGFzc2V0U291cmNlOiBBc3NldFNvdXJjZUludGVyZmFjZSk6IEFzc2V0U291cmNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3NldFNvdXJjZSh7XG4gICAgICAgICAgICBpZDogYXNzZXRTb3VyY2UuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGFzc2V0U291cmNlLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYXNzZXRTb3VyY2UudXBkYXRlZEF0LFxuICAgICAgICAgICAgbmFtZTogYXNzZXRTb3VyY2UubmFtZSxcbiAgICAgICAgICAgIGhhbmRsZTogYXNzZXRTb3VyY2UuaGFuZGxlLFxuICAgICAgICAgICAgZGlzazogYXNzZXRTb3VyY2UuZGlzayxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGFzc2V0U291cmNlLmRlZmF1bHQsXG4gICAgICAgICAgICBidWNrZXQ6IGFzc2V0U291cmNlLmJ1Y2tldCxcbiAgICAgICAgICAgIHBhdGg6IGFzc2V0U291cmNlLnBhdGgsXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgYXNzZXRzOiB0aGlzLmluY2x1ZGVBc3NldHMoYXNzZXRTb3VyY2UpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzZXRzKGFzc2V0U291cmNlOiBBc3NldFNvdXJjZUludGVyZmFjZSk6IEFycmF5PEFzc2V0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oYXNzZXRTb3VyY2UsICdhc3NldHMnLCBuZXcgQXNzZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=