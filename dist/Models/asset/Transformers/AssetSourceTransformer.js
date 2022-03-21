"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AssetSource = _interopRequireDefault(require("../AssetSource"));

var _AssetTransformer = _interopRequireDefault(require("./AssetTransformer"));

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

var AssetSourceTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(AssetSourceTransformer, _BaseTransformer);

  var _super = _createSuper(AssetSourceTransformer);

  function AssetSourceTransformer() {
    _classCallCheck(this, AssetSourceTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(AssetSourceTransformer, [{
    key: "mapData",
    value:
    /**
     * Map an asset source response
     *
     * @param assetSource
     */
    function mapData(assetSource) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0U291cmNlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciIsImFzc2V0U291cmNlIiwiQXNzZXRTb3VyY2UiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIm5hbWUiLCJoYW5kbGUiLCJkaXNrIiwiYnVja2V0IiwicGF0aCIsImFzc2V0cyIsImluY2x1ZGVBc3NldHMiLCJjb2xsZWN0aW9uIiwiQXNzZXRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsc0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSSxxQkFBUUMsV0FBUixFQUF3RDtBQUNwRCxhQUFPLElBQUlDLHVCQUFKLENBQWdCO0FBQ25CQyxRQUFBQSxFQUFFLEVBQUVGLFdBQVcsQ0FBQ0UsRUFERztBQUVuQkMsUUFBQUEsU0FBUyxFQUFFSCxXQUFXLENBQUNHLFNBRko7QUFHbkJDLFFBQUFBLFNBQVMsRUFBRUosV0FBVyxDQUFDSSxTQUhKO0FBSW5CQyxRQUFBQSxJQUFJLEVBQUVMLFdBQVcsQ0FBQ0ssSUFKQztBQUtuQkMsUUFBQUEsTUFBTSxFQUFFTixXQUFXLENBQUNNLE1BTEQ7QUFNbkJDLFFBQUFBLElBQUksRUFBRVAsV0FBVyxDQUFDTyxJQU5DO0FBT25CLG1CQUFTUCxXQUFXLFdBUEQ7QUFRbkJRLFFBQUFBLE1BQU0sRUFBRVIsV0FBVyxDQUFDUSxNQVJEO0FBU25CQyxRQUFBQSxJQUFJLEVBQUVULFdBQVcsQ0FBQ1MsSUFUQztBQVVuQjtBQUNBQyxRQUFBQSxNQUFNLEVBQUUsS0FBS0MsYUFBTCxDQUFtQlgsV0FBbkI7QUFYVyxPQUFoQixDQUFQO0FBYUg7OztXQUVELHVCQUFjQSxXQUFkLEVBQXdFO0FBQ3BFLGFBQU8sS0FBS1ksVUFBTCxDQUFnQlosV0FBaEIsRUFBNkIsUUFBN0IsRUFBdUMsSUFBSWEsNEJBQUosRUFBdkMsQ0FBUDtBQUNIOzs7O0VBeEIrQ0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRTb3VyY2UgZnJvbSAnLi4vQXNzZXRTb3VyY2UnO1xuaW1wb3J0IEFzc2V0U291cmNlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXRTb3VyY2UnO1xuaW1wb3J0IEFzc2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXQnO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtZXIgZnJvbSAnLi9Bc3NldFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIGFzc2V0IHNvdXJjZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGFzc2V0U291cmNlXG4gICAgICovXG4gICAgbWFwRGF0YShhc3NldFNvdXJjZTogQXNzZXRTb3VyY2VJbnRlcmZhY2UpOiBBc3NldFNvdXJjZSB7XG4gICAgICAgIHJldHVybiBuZXcgQXNzZXRTb3VyY2Uoe1xuICAgICAgICAgICAgaWQ6IGFzc2V0U291cmNlLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBhc3NldFNvdXJjZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGFzc2V0U291cmNlLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IGFzc2V0U291cmNlLm5hbWUsXG4gICAgICAgICAgICBoYW5kbGU6IGFzc2V0U291cmNlLmhhbmRsZSxcbiAgICAgICAgICAgIGRpc2s6IGFzc2V0U291cmNlLmRpc2ssXG4gICAgICAgICAgICBkZWZhdWx0OiBhc3NldFNvdXJjZS5kZWZhdWx0LFxuICAgICAgICAgICAgYnVja2V0OiBhc3NldFNvdXJjZS5idWNrZXQsXG4gICAgICAgICAgICBwYXRoOiBhc3NldFNvdXJjZS5wYXRoLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5pbmNsdWRlQXNzZXRzKGFzc2V0U291cmNlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2V0cyhhc3NldFNvdXJjZTogQXNzZXRTb3VyY2VJbnRlcmZhY2UpOiBBcnJheTxBc3NldEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKGFzc2V0U291cmNlLCAnYXNzZXRzJywgbmV3IEFzc2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19