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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0U291cmNlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciIsImFzc2V0U291cmNlIiwiQXNzZXRTb3VyY2UiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIm5hbWUiLCJoYW5kbGUiLCJkaXNrIiwiYnVja2V0IiwicGF0aCIsImFzc2V0cyIsImluY2x1ZGVBc3NldHMiLCJjb2xsZWN0aW9uIiwiQXNzZXRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsc0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsVyxFQUFnRDtBQUNwRCxhQUFPLElBQUlDLHVCQUFKLENBQWdCO0FBQ25CQyxRQUFBQSxFQUFFLEVBQUVGLFdBQVcsQ0FBQ0UsRUFERztBQUVuQkMsUUFBQUEsU0FBUyxFQUFFSCxXQUFXLENBQUNHLFNBRko7QUFHbkJDLFFBQUFBLFNBQVMsRUFBRUosV0FBVyxDQUFDSSxTQUhKO0FBSW5CQyxRQUFBQSxJQUFJLEVBQUVMLFdBQVcsQ0FBQ0ssSUFKQztBQUtuQkMsUUFBQUEsTUFBTSxFQUFFTixXQUFXLENBQUNNLE1BTEQ7QUFNbkJDLFFBQUFBLElBQUksRUFBRVAsV0FBVyxDQUFDTyxJQU5DO0FBT25CLG1CQUFTUCxXQUFXLFdBUEQ7QUFRbkJRLFFBQUFBLE1BQU0sRUFBRVIsV0FBVyxDQUFDUSxNQVJEO0FBU25CQyxRQUFBQSxJQUFJLEVBQUVULFdBQVcsQ0FBQ1MsSUFUQztBQVVuQjtBQUNBQyxRQUFBQSxNQUFNLEVBQUUsS0FBS0MsYUFBTCxDQUFtQlgsV0FBbkI7QUFYVyxPQUFoQixDQUFQO0FBYUg7OztrQ0FFYUEsVyxFQUEwRDtBQUNwRSxhQUFPLEtBQUtZLFVBQUwsQ0FBZ0JaLFdBQWhCLEVBQTZCLFFBQTdCLEVBQXVDLElBQUlhLDRCQUFKLEVBQXZDLENBQVA7QUFDSDs7OztFQXhCK0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0U291cmNlIGZyb20gJy4uL0Fzc2V0U291cmNlJztcbmltcG9ydCBBc3NldFNvdXJjZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc2V0L0Fzc2V0U291cmNlJztcbmltcG9ydCBBc3NldEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc2V0L0Fzc2V0JztcbmltcG9ydCBBc3NldFRyYW5zZm9ybWVyIGZyb20gJy4vQXNzZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0U291cmNlVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBhc3NldCBzb3VyY2UgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhc3NldFNvdXJjZVxuICAgICAqL1xuICAgIG1hcERhdGEoYXNzZXRTb3VyY2U6IEFzc2V0U291cmNlSW50ZXJmYWNlKTogQXNzZXRTb3VyY2Uge1xuICAgICAgICByZXR1cm4gbmV3IEFzc2V0U291cmNlKHtcbiAgICAgICAgICAgIGlkOiBhc3NldFNvdXJjZS5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYXNzZXRTb3VyY2UuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBhc3NldFNvdXJjZS51cGRhdGVkQXQsXG4gICAgICAgICAgICBuYW1lOiBhc3NldFNvdXJjZS5uYW1lLFxuICAgICAgICAgICAgaGFuZGxlOiBhc3NldFNvdXJjZS5oYW5kbGUsXG4gICAgICAgICAgICBkaXNrOiBhc3NldFNvdXJjZS5kaXNrLFxuICAgICAgICAgICAgZGVmYXVsdDogYXNzZXRTb3VyY2UuZGVmYXVsdCxcbiAgICAgICAgICAgIGJ1Y2tldDogYXNzZXRTb3VyY2UuYnVja2V0LFxuICAgICAgICAgICAgcGF0aDogYXNzZXRTb3VyY2UucGF0aCxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBhc3NldHM6IHRoaXMuaW5jbHVkZUFzc2V0cyhhc3NldFNvdXJjZSksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NldHMoYXNzZXRTb3VyY2U6IEFzc2V0U291cmNlSW50ZXJmYWNlKTogQXJyYXk8QXNzZXRJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihhc3NldFNvdXJjZSwgJ2Fzc2V0cycsIG5ldyBBc3NldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==