"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Asset = _interopRequireDefault(require("../Asset"));

var _AssetSourceTransformer = _interopRequireDefault(require("./AssetSourceTransformer"));

var _AssetTransformTransformer = _interopRequireDefault(require("./AssetTransformTransformer"));

var _ProductTransformer = _interopRequireDefault(require("../../product/Transformers/ProductTransformer"));

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

var AssetTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(AssetTransformer, _BaseTransformer);

  function AssetTransformer() {
    _classCallCheck(this, AssetTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(AssetTransformer).apply(this, arguments));
  }

  _createClass(AssetTransformer, [{
    key: "mapData",

    /**
     * Map an asset response
     *
     * @param asset
     */
    value: function mapData(asset) {
      return new _Asset["default"]({
        id: asset.id,
        createdAt: asset.createdAt,
        updatedAt: asset.updatedAt,
        position: asset.position,
        location: asset.location,
        primary: asset.primary,
        kind: asset.kind,
        subKind: asset.subKind,
        width: asset.width,
        height: asset.height,
        title: asset.title,
        originalFilename: asset.originalFilename,
        caption: asset.caption,
        size: asset.size,
        external: asset.external,
        extension: asset.extension,
        filename: asset.filename,
        visible: asset.visible,
        category: asset.category,
        url: asset.url,
        // belongs to
        source: this.includeSource(asset),
        thumbnail: this.includeThumbnail(asset),
        // has many
        products: this.includeProducts(asset),
        transforms: this.includeTransforms(asset)
      });
    }
  }, {
    key: "includeSource",
    value: function includeSource(asset) {
      return this.item(asset, 'source', new _AssetSourceTransformer["default"]());
    }
  }, {
    key: "includeThumbnail",
    value: function includeThumbnail(asset) {
      return this.item(asset, 'thumbnail', new _AssetTransformTransformer["default"]());
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(asset) {
      return this.collection(asset, 'products', new _ProductTransformer["default"]());
    }
  }, {
    key: "includeTransforms",
    value: function includeTransforms(asset) {
      return this.collection(asset, 'transforms', new _AssetTransformTransformer["default"]());
    }
  }]);

  return AssetTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = AssetTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRUcmFuc2Zvcm1lciIsImFzc2V0IiwiQXNzZXQiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBvc2l0aW9uIiwibG9jYXRpb24iLCJwcmltYXJ5Iiwia2luZCIsInN1YktpbmQiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwib3JpZ2luYWxGaWxlbmFtZSIsImNhcHRpb24iLCJzaXplIiwiZXh0ZXJuYWwiLCJleHRlbnNpb24iLCJmaWxlbmFtZSIsInZpc2libGUiLCJjYXRlZ29yeSIsInVybCIsInNvdXJjZSIsImluY2x1ZGVTb3VyY2UiLCJ0aHVtYm5haWwiLCJpbmNsdWRlVGh1bWJuYWlsIiwicHJvZHVjdHMiLCJpbmNsdWRlUHJvZHVjdHMiLCJ0cmFuc2Zvcm1zIiwiaW5jbHVkZVRyYW5zZm9ybXMiLCJpdGVtIiwiQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciIsIkFzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEssRUFBOEI7QUFDbEMsYUFBTyxJQUFJQyxpQkFBSixDQUFVO0FBQ2JDLFFBQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDRSxFQURHO0FBRWJDLFFBQUFBLFNBQVMsRUFBRUgsS0FBSyxDQUFDRyxTQUZKO0FBR2JDLFFBQUFBLFNBQVMsRUFBRUosS0FBSyxDQUFDSSxTQUhKO0FBSWJDLFFBQUFBLFFBQVEsRUFBRUwsS0FBSyxDQUFDSyxRQUpIO0FBS2JDLFFBQUFBLFFBQVEsRUFBRU4sS0FBSyxDQUFDTSxRQUxIO0FBTWJDLFFBQUFBLE9BQU8sRUFBRVAsS0FBSyxDQUFDTyxPQU5GO0FBT2JDLFFBQUFBLElBQUksRUFBRVIsS0FBSyxDQUFDUSxJQVBDO0FBUWJDLFFBQUFBLE9BQU8sRUFBRVQsS0FBSyxDQUFDUyxPQVJGO0FBU2JDLFFBQUFBLEtBQUssRUFBRVYsS0FBSyxDQUFDVSxLQVRBO0FBVWJDLFFBQUFBLE1BQU0sRUFBRVgsS0FBSyxDQUFDVyxNQVZEO0FBV2JDLFFBQUFBLEtBQUssRUFBRVosS0FBSyxDQUFDWSxLQVhBO0FBWWJDLFFBQUFBLGdCQUFnQixFQUFFYixLQUFLLENBQUNhLGdCQVpYO0FBYWJDLFFBQUFBLE9BQU8sRUFBRWQsS0FBSyxDQUFDYyxPQWJGO0FBY2JDLFFBQUFBLElBQUksRUFBRWYsS0FBSyxDQUFDZSxJQWRDO0FBZWJDLFFBQUFBLFFBQVEsRUFBRWhCLEtBQUssQ0FBQ2dCLFFBZkg7QUFnQmJDLFFBQUFBLFNBQVMsRUFBRWpCLEtBQUssQ0FBQ2lCLFNBaEJKO0FBaUJiQyxRQUFBQSxRQUFRLEVBQUVsQixLQUFLLENBQUNrQixRQWpCSDtBQWtCYkMsUUFBQUEsT0FBTyxFQUFFbkIsS0FBSyxDQUFDbUIsT0FsQkY7QUFtQmJDLFFBQUFBLFFBQVEsRUFBRXBCLEtBQUssQ0FBQ29CLFFBbkJIO0FBb0JiQyxRQUFBQSxHQUFHLEVBQUVyQixLQUFLLENBQUNxQixHQXBCRTtBQXFCYjtBQUNBQyxRQUFBQSxNQUFNLEVBQUUsS0FBS0MsYUFBTCxDQUFtQnZCLEtBQW5CLENBdEJLO0FBdUJid0IsUUFBQUEsU0FBUyxFQUFFLEtBQUtDLGdCQUFMLENBQXNCekIsS0FBdEIsQ0F2QkU7QUF3QmI7QUFDQTBCLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCM0IsS0FBckIsQ0F6Qkc7QUEwQmI0QixRQUFBQSxVQUFVLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUI3QixLQUF2QjtBQTFCQyxPQUFWLENBQVA7QUE0Qkg7OztrQ0FFYUEsSyxFQUEyQztBQUNyRCxhQUFPLEtBQUs4QixJQUFMLENBQVU5QixLQUFWLEVBQWlCLFFBQWpCLEVBQTJCLElBQUkrQixrQ0FBSixFQUEzQixDQUFQO0FBQ0g7OztxQ0FFZ0IvQixLLEVBQThDO0FBQzNELGFBQU8sS0FBSzhCLElBQUwsQ0FBVTlCLEtBQVYsRUFBaUIsV0FBakIsRUFBOEIsSUFBSWdDLHFDQUFKLEVBQTlCLENBQVA7QUFDSDs7O29DQUVlaEMsSyxFQUF1QztBQUNuRCxhQUFPLEtBQUtpQyxVQUFMLENBQWdCakMsS0FBaEIsRUFBdUIsVUFBdkIsRUFBbUMsSUFBSWtDLDhCQUFKLEVBQW5DLENBQVA7QUFDSDs7O3NDQUVpQmxDLEssRUFBOEM7QUFDNUQsYUFBTyxLQUFLaUMsVUFBTCxDQUFnQmpDLEtBQWhCLEVBQXVCLFlBQXZCLEVBQXFDLElBQUlnQyxxQ0FBSixFQUFyQyxDQUFQO0FBQ0g7Ozs7RUFuRHlDRyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldCBmcm9tICcuLi9Bc3NldCc7XG5pbXBvcnQgQXNzZXRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NldC9Bc3NldCc7XG5pbXBvcnQgQXNzZXRTb3VyY2UgZnJvbSAnLi4vLi4vYXNzZXQvQXNzZXRTb3VyY2UnO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtIGZyb20gJy4uLy4uL2Fzc2V0L0Fzc2V0VHJhbnNmb3JtJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciBmcm9tICcuL0Fzc2V0U291cmNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIgZnJvbSAnLi9Bc3NldFRyYW5zZm9ybVRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIGFzc2V0IHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXNzZXRcbiAgICAgKi9cbiAgICBtYXBEYXRhKGFzc2V0OiBBc3NldEludGVyZmFjZSk6IEFzc2V0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3NldCh7XG4gICAgICAgICAgICBpZDogYXNzZXQuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGFzc2V0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYXNzZXQudXBkYXRlZEF0LFxuICAgICAgICAgICAgcG9zaXRpb246IGFzc2V0LnBvc2l0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGFzc2V0LmxvY2F0aW9uLFxuICAgICAgICAgICAgcHJpbWFyeTogYXNzZXQucHJpbWFyeSxcbiAgICAgICAgICAgIGtpbmQ6IGFzc2V0LmtpbmQsXG4gICAgICAgICAgICBzdWJLaW5kOiBhc3NldC5zdWJLaW5kLFxuICAgICAgICAgICAgd2lkdGg6IGFzc2V0LndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBhc3NldC5oZWlnaHQsXG4gICAgICAgICAgICB0aXRsZTogYXNzZXQudGl0bGUsXG4gICAgICAgICAgICBvcmlnaW5hbEZpbGVuYW1lOiBhc3NldC5vcmlnaW5hbEZpbGVuYW1lLFxuICAgICAgICAgICAgY2FwdGlvbjogYXNzZXQuY2FwdGlvbixcbiAgICAgICAgICAgIHNpemU6IGFzc2V0LnNpemUsXG4gICAgICAgICAgICBleHRlcm5hbDogYXNzZXQuZXh0ZXJuYWwsXG4gICAgICAgICAgICBleHRlbnNpb246IGFzc2V0LmV4dGVuc2lvbixcbiAgICAgICAgICAgIGZpbGVuYW1lOiBhc3NldC5maWxlbmFtZSxcbiAgICAgICAgICAgIHZpc2libGU6IGFzc2V0LnZpc2libGUsXG4gICAgICAgICAgICBjYXRlZ29yeTogYXNzZXQuY2F0ZWdvcnksXG4gICAgICAgICAgICB1cmw6IGFzc2V0LnVybCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5pbmNsdWRlU291cmNlKGFzc2V0KSxcbiAgICAgICAgICAgIHRodW1ibmFpbDogdGhpcy5pbmNsdWRlVGh1bWJuYWlsKGFzc2V0KSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMoYXNzZXQpLFxuICAgICAgICAgICAgdHJhbnNmb3JtczogdGhpcy5pbmNsdWRlVHJhbnNmb3Jtcyhhc3NldCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVTb3VyY2UoYXNzZXQ6IEFzc2V0SW50ZXJmYWNlKTogQXNzZXRTb3VyY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShhc3NldCwgJ3NvdXJjZScsIG5ldyBBc3NldFNvdXJjZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVUaHVtYm5haWwoYXNzZXQ6IEFzc2V0SW50ZXJmYWNlKTogQXNzZXRUcmFuc2Zvcm0gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShhc3NldCwgJ3RodW1ibmFpbCcsIG5ldyBBc3NldFRyYW5zZm9ybVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0cyhhc3NldDogQXNzZXRJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oYXNzZXQsICdwcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVRyYW5zZm9ybXMoYXNzZXQ6IEFzc2V0SW50ZXJmYWNlKTogQXJyYXk8QXNzZXRUcmFuc2Zvcm0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihhc3NldCwgJ3RyYW5zZm9ybXMnLCBuZXcgQXNzZXRUcmFuc2Zvcm1UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=