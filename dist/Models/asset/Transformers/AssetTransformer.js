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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRUcmFuc2Zvcm1lciIsImFzc2V0IiwiQXNzZXQiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBvc2l0aW9uIiwibG9jYXRpb24iLCJwcmltYXJ5Iiwia2luZCIsInN1YktpbmQiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwib3JpZ2luYWxGaWxlbmFtZSIsImNhcHRpb24iLCJzaXplIiwiZXh0ZXJuYWwiLCJleHRlbnNpb24iLCJmaWxlbmFtZSIsInVybCIsInNvdXJjZSIsImluY2x1ZGVTb3VyY2UiLCJ0aHVtYm5haWwiLCJpbmNsdWRlVGh1bWJuYWlsIiwicHJvZHVjdHMiLCJpbmNsdWRlUHJvZHVjdHMiLCJ0cmFuc2Zvcm1zIiwiaW5jbHVkZVRyYW5zZm9ybXMiLCJpdGVtIiwiQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciIsIkFzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEssRUFBOEI7QUFDbEMsYUFBTyxJQUFJQyxpQkFBSixDQUFVO0FBQ2JDLFFBQUFBLEVBQUUsRUFBRUYsS0FBSyxDQUFDRSxFQURHO0FBRWJDLFFBQUFBLFNBQVMsRUFBRUgsS0FBSyxDQUFDRyxTQUZKO0FBR2JDLFFBQUFBLFNBQVMsRUFBRUosS0FBSyxDQUFDSSxTQUhKO0FBSWJDLFFBQUFBLFFBQVEsRUFBRUwsS0FBSyxDQUFDSyxRQUpIO0FBS2JDLFFBQUFBLFFBQVEsRUFBRU4sS0FBSyxDQUFDTSxRQUxIO0FBTWJDLFFBQUFBLE9BQU8sRUFBRVAsS0FBSyxDQUFDTyxPQU5GO0FBT2JDLFFBQUFBLElBQUksRUFBRVIsS0FBSyxDQUFDUSxJQVBDO0FBUWJDLFFBQUFBLE9BQU8sRUFBRVQsS0FBSyxDQUFDUyxPQVJGO0FBU2JDLFFBQUFBLEtBQUssRUFBRVYsS0FBSyxDQUFDVSxLQVRBO0FBVWJDLFFBQUFBLE1BQU0sRUFBRVgsS0FBSyxDQUFDVyxNQVZEO0FBV2JDLFFBQUFBLEtBQUssRUFBRVosS0FBSyxDQUFDWSxLQVhBO0FBWWJDLFFBQUFBLGdCQUFnQixFQUFFYixLQUFLLENBQUNhLGdCQVpYO0FBYWJDLFFBQUFBLE9BQU8sRUFBRWQsS0FBSyxDQUFDYyxPQWJGO0FBY2JDLFFBQUFBLElBQUksRUFBRWYsS0FBSyxDQUFDZSxJQWRDO0FBZWJDLFFBQUFBLFFBQVEsRUFBRWhCLEtBQUssQ0FBQ2dCLFFBZkg7QUFnQmJDLFFBQUFBLFNBQVMsRUFBRWpCLEtBQUssQ0FBQ2lCLFNBaEJKO0FBaUJiQyxRQUFBQSxRQUFRLEVBQUVsQixLQUFLLENBQUNrQixRQWpCSDtBQWtCYkMsUUFBQUEsR0FBRyxFQUFFbkIsS0FBSyxDQUFDbUIsR0FsQkU7QUFtQmI7QUFDQUMsUUFBQUEsTUFBTSxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJyQixLQUFuQixDQXBCSztBQXFCYnNCLFFBQUFBLFNBQVMsRUFBRSxLQUFLQyxnQkFBTCxDQUFzQnZCLEtBQXRCLENBckJFO0FBc0JiO0FBQ0F3QixRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQnpCLEtBQXJCLENBdkJHO0FBd0JiMEIsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCM0IsS0FBdkI7QUF4QkMsT0FBVixDQUFQO0FBMEJIOzs7a0NBRWFBLEssRUFBb0Q7QUFDOUQsYUFBTyxLQUFLNEIsSUFBTCxDQUFVNUIsS0FBVixFQUFpQixRQUFqQixFQUEyQixJQUFJNkIsa0NBQUosRUFBM0IsQ0FBUDtBQUNIOzs7cUNBRWdCN0IsSyxFQUF1RDtBQUNwRSxhQUFPLEtBQUs0QixJQUFMLENBQVU1QixLQUFWLEVBQWlCLFdBQWpCLEVBQThCLElBQUk4QixxQ0FBSixFQUE5QixDQUFQO0FBQ0g7OztvQ0FFZTlCLEssRUFBZ0Q7QUFDNUQsYUFBTyxLQUFLK0IsVUFBTCxDQUFnQi9CLEtBQWhCLEVBQXVCLFVBQXZCLEVBQW1DLElBQUlnQyw4QkFBSixFQUFuQyxDQUFQO0FBQ0g7OztzQ0FFaUJoQyxLLEVBQXVEO0FBQ3JFLGFBQU8sS0FBSytCLFVBQUwsQ0FBZ0IvQixLQUFoQixFQUF1QixZQUF2QixFQUFxQyxJQUFJOEIscUNBQUosRUFBckMsQ0FBUDtBQUNIOzs7O0VBakR5Q0csNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXQgZnJvbSAnLi4vQXNzZXQnO1xuaW1wb3J0IEFzc2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXQnO1xuaW1wb3J0IEFzc2V0U291cmNlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXRTb3VyY2UnO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXRUcmFuc2Zvcm0nO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IEFzc2V0U291cmNlVHJhbnNmb3JtZXIgZnJvbSAnLi9Bc3NldFNvdXJjZVRyYW5zZm9ybWVyJztcbmltcG9ydCBBc3NldFRyYW5zZm9ybVRyYW5zZm9ybWVyIGZyb20gJy4vQXNzZXRUcmFuc2Zvcm1UcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBhc3NldCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGFzc2V0XG4gICAgICovXG4gICAgbWFwRGF0YShhc3NldDogQXNzZXRJbnRlcmZhY2UpOiBBc3NldCB7XG4gICAgICAgIHJldHVybiBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgaWQ6IGFzc2V0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBhc3NldC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGFzc2V0LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhc3NldC5wb3NpdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBhc3NldC5sb2NhdGlvbixcbiAgICAgICAgICAgIHByaW1hcnk6IGFzc2V0LnByaW1hcnksXG4gICAgICAgICAgICBraW5kOiBhc3NldC5raW5kLFxuICAgICAgICAgICAgc3ViS2luZDogYXNzZXQuc3ViS2luZCxcbiAgICAgICAgICAgIHdpZHRoOiBhc3NldC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogYXNzZXQuaGVpZ2h0LFxuICAgICAgICAgICAgdGl0bGU6IGFzc2V0LnRpdGxlLFxuICAgICAgICAgICAgb3JpZ2luYWxGaWxlbmFtZTogYXNzZXQub3JpZ2luYWxGaWxlbmFtZSxcbiAgICAgICAgICAgIGNhcHRpb246IGFzc2V0LmNhcHRpb24sXG4gICAgICAgICAgICBzaXplOiBhc3NldC5zaXplLFxuICAgICAgICAgICAgZXh0ZXJuYWw6IGFzc2V0LmV4dGVybmFsLFxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBhc3NldC5leHRlbnNpb24sXG4gICAgICAgICAgICBmaWxlbmFtZTogYXNzZXQuZmlsZW5hbWUsXG4gICAgICAgICAgICB1cmw6IGFzc2V0LnVybCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5pbmNsdWRlU291cmNlKGFzc2V0KSxcbiAgICAgICAgICAgIHRodW1ibmFpbDogdGhpcy5pbmNsdWRlVGh1bWJuYWlsKGFzc2V0KSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMoYXNzZXQpLFxuICAgICAgICAgICAgdHJhbnNmb3JtczogdGhpcy5pbmNsdWRlVHJhbnNmb3Jtcyhhc3NldCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVTb3VyY2UoYXNzZXQ6IEFzc2V0SW50ZXJmYWNlKTogQXNzZXRTb3VyY2VJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShhc3NldCwgJ3NvdXJjZScsIG5ldyBBc3NldFNvdXJjZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVUaHVtYm5haWwoYXNzZXQ6IEFzc2V0SW50ZXJmYWNlKTogQXNzZXRUcmFuc2Zvcm1JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShhc3NldCwgJ3RodW1ibmFpbCcsIG5ldyBBc3NldFRyYW5zZm9ybVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0cyhhc3NldDogQXNzZXRJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oYXNzZXQsICdwcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVRyYW5zZm9ybXMoYXNzZXQ6IEFzc2V0SW50ZXJmYWNlKTogQXJyYXk8QXNzZXRUcmFuc2Zvcm1JbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihhc3NldCwgJ3RyYW5zZm9ybXMnLCBuZXcgQXNzZXRUcmFuc2Zvcm1UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=