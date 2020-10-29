"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AssetSource = _interopRequireDefault(require("../AssetSource"));

var _AssetTransformer = _interopRequireDefault(require("./AssetTransformer"));

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

var AssetSourceTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(AssetSourceTransformer, _BaseTransformer);

  function AssetSourceTransformer() {
    _classCallCheck(this, AssetSourceTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(AssetSourceTransformer).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0U291cmNlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciIsImFzc2V0U291cmNlIiwiQXNzZXRTb3VyY2UiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIm5hbWUiLCJoYW5kbGUiLCJkaXNrIiwiYnVja2V0IiwicGF0aCIsImFzc2V0cyIsImluY2x1ZGVBc3NldHMiLCJjb2xsZWN0aW9uIiwiQXNzZXRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxzQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxXLEVBQWdEO0FBQ3BELGFBQU8sSUFBSUMsdUJBQUosQ0FBZ0I7QUFDbkJDLFFBQUFBLEVBQUUsRUFBRUYsV0FBVyxDQUFDRSxFQURHO0FBRW5CQyxRQUFBQSxTQUFTLEVBQUVILFdBQVcsQ0FBQ0csU0FGSjtBQUduQkMsUUFBQUEsU0FBUyxFQUFFSixXQUFXLENBQUNJLFNBSEo7QUFJbkJDLFFBQUFBLElBQUksRUFBRUwsV0FBVyxDQUFDSyxJQUpDO0FBS25CQyxRQUFBQSxNQUFNLEVBQUVOLFdBQVcsQ0FBQ00sTUFMRDtBQU1uQkMsUUFBQUEsSUFBSSxFQUFFUCxXQUFXLENBQUNPLElBTkM7QUFPbkIsbUJBQVNQLFdBQVcsV0FQRDtBQVFuQlEsUUFBQUEsTUFBTSxFQUFFUixXQUFXLENBQUNRLE1BUkQ7QUFTbkJDLFFBQUFBLElBQUksRUFBRVQsV0FBVyxDQUFDUyxJQVRDO0FBVW5CO0FBQ0FDLFFBQUFBLE1BQU0sRUFBRSxLQUFLQyxhQUFMLENBQW1CWCxXQUFuQjtBQVhXLE9BQWhCLENBQVA7QUFhSDs7O2tDQUVhQSxXLEVBQTBEO0FBQ3BFLGFBQU8sS0FBS1ksVUFBTCxDQUFnQlosV0FBaEIsRUFBNkIsUUFBN0IsRUFBdUMsSUFBSWEsNEJBQUosRUFBdkMsQ0FBUDtBQUNIOzs7O0VBeEIrQ0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRTb3VyY2UgZnJvbSAnLi4vQXNzZXRTb3VyY2UnO1xuaW1wb3J0IEFzc2V0U291cmNlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXRTb3VyY2UnO1xuaW1wb3J0IEFzc2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXQnO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtZXIgZnJvbSAnLi9Bc3NldFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIGFzc2V0IHNvdXJjZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGFzc2V0U291cmNlXG4gICAgICovXG4gICAgbWFwRGF0YShhc3NldFNvdXJjZTogQXNzZXRTb3VyY2VJbnRlcmZhY2UpOiBBc3NldFNvdXJjZSB7XG4gICAgICAgIHJldHVybiBuZXcgQXNzZXRTb3VyY2Uoe1xuICAgICAgICAgICAgaWQ6IGFzc2V0U291cmNlLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBhc3NldFNvdXJjZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGFzc2V0U291cmNlLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IGFzc2V0U291cmNlLm5hbWUsXG4gICAgICAgICAgICBoYW5kbGU6IGFzc2V0U291cmNlLmhhbmRsZSxcbiAgICAgICAgICAgIGRpc2s6IGFzc2V0U291cmNlLmRpc2ssXG4gICAgICAgICAgICBkZWZhdWx0OiBhc3NldFNvdXJjZS5kZWZhdWx0LFxuICAgICAgICAgICAgYnVja2V0OiBhc3NldFNvdXJjZS5idWNrZXQsXG4gICAgICAgICAgICBwYXRoOiBhc3NldFNvdXJjZS5wYXRoLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5pbmNsdWRlQXNzZXRzKGFzc2V0U291cmNlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2V0cyhhc3NldFNvdXJjZTogQXNzZXRTb3VyY2VJbnRlcmZhY2UpOiBBcnJheTxBc3NldEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKGFzc2V0U291cmNlLCAnYXNzZXRzJywgbmV3IEFzc2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19