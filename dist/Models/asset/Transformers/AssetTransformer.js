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

var AssetTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(AssetTransformer, _BaseTransformer);

  var _super = _createSuper(AssetTransformer);

  function AssetTransformer() {
    _classCallCheck(this, AssetTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRUcmFuc2Zvcm1lciIsImFzc2V0IiwiQXNzZXQiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBvc2l0aW9uIiwibG9jYXRpb24iLCJwcmltYXJ5Iiwia2luZCIsInN1YktpbmQiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwib3JpZ2luYWxGaWxlbmFtZSIsImNhcHRpb24iLCJzaXplIiwiZXh0ZXJuYWwiLCJleHRlbnNpb24iLCJmaWxlbmFtZSIsInVybCIsInNvdXJjZSIsImluY2x1ZGVTb3VyY2UiLCJ0aHVtYm5haWwiLCJpbmNsdWRlVGh1bWJuYWlsIiwicHJvZHVjdHMiLCJpbmNsdWRlUHJvZHVjdHMiLCJ0cmFuc2Zvcm1zIiwiaW5jbHVkZVRyYW5zZm9ybXMiLCJpdGVtIiwiQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciIsIkFzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTs0QkFDWUMsSyxFQUE4QjtBQUNsQyxhQUFPLElBQUlDLGlCQUFKLENBQVU7QUFDYkMsUUFBQUEsRUFBRSxFQUFFRixLQUFLLENBQUNFLEVBREc7QUFFYkMsUUFBQUEsU0FBUyxFQUFFSCxLQUFLLENBQUNHLFNBRko7QUFHYkMsUUFBQUEsU0FBUyxFQUFFSixLQUFLLENBQUNJLFNBSEo7QUFJYkMsUUFBQUEsUUFBUSxFQUFFTCxLQUFLLENBQUNLLFFBSkg7QUFLYkMsUUFBQUEsUUFBUSxFQUFFTixLQUFLLENBQUNNLFFBTEg7QUFNYkMsUUFBQUEsT0FBTyxFQUFFUCxLQUFLLENBQUNPLE9BTkY7QUFPYkMsUUFBQUEsSUFBSSxFQUFFUixLQUFLLENBQUNRLElBUEM7QUFRYkMsUUFBQUEsT0FBTyxFQUFFVCxLQUFLLENBQUNTLE9BUkY7QUFTYkMsUUFBQUEsS0FBSyxFQUFFVixLQUFLLENBQUNVLEtBVEE7QUFVYkMsUUFBQUEsTUFBTSxFQUFFWCxLQUFLLENBQUNXLE1BVkQ7QUFXYkMsUUFBQUEsS0FBSyxFQUFFWixLQUFLLENBQUNZLEtBWEE7QUFZYkMsUUFBQUEsZ0JBQWdCLEVBQUViLEtBQUssQ0FBQ2EsZ0JBWlg7QUFhYkMsUUFBQUEsT0FBTyxFQUFFZCxLQUFLLENBQUNjLE9BYkY7QUFjYkMsUUFBQUEsSUFBSSxFQUFFZixLQUFLLENBQUNlLElBZEM7QUFlYkMsUUFBQUEsUUFBUSxFQUFFaEIsS0FBSyxDQUFDZ0IsUUFmSDtBQWdCYkMsUUFBQUEsU0FBUyxFQUFFakIsS0FBSyxDQUFDaUIsU0FoQko7QUFpQmJDLFFBQUFBLFFBQVEsRUFBRWxCLEtBQUssQ0FBQ2tCLFFBakJIO0FBa0JiQyxRQUFBQSxHQUFHLEVBQUVuQixLQUFLLENBQUNtQixHQWxCRTtBQW1CYjtBQUNBQyxRQUFBQSxNQUFNLEVBQUUsS0FBS0MsYUFBTCxDQUFtQnJCLEtBQW5CLENBcEJLO0FBcUJic0IsUUFBQUEsU0FBUyxFQUFFLEtBQUtDLGdCQUFMLENBQXNCdkIsS0FBdEIsQ0FyQkU7QUFzQmI7QUFDQXdCLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCekIsS0FBckIsQ0F2Qkc7QUF3QmIwQixRQUFBQSxVQUFVLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUIzQixLQUF2QjtBQXhCQyxPQUFWLENBQVA7QUEwQkg7OztrQ0FFYUEsSyxFQUEyQztBQUNyRCxhQUFPLEtBQUs0QixJQUFMLENBQVU1QixLQUFWLEVBQWlCLFFBQWpCLEVBQTJCLElBQUk2QixrQ0FBSixFQUEzQixDQUFQO0FBQ0g7OztxQ0FFZ0I3QixLLEVBQThDO0FBQzNELGFBQU8sS0FBSzRCLElBQUwsQ0FBVTVCLEtBQVYsRUFBaUIsV0FBakIsRUFBOEIsSUFBSThCLHFDQUFKLEVBQTlCLENBQVA7QUFDSDs7O29DQUVlOUIsSyxFQUF1QztBQUNuRCxhQUFPLEtBQUsrQixVQUFMLENBQWdCL0IsS0FBaEIsRUFBdUIsVUFBdkIsRUFBbUMsSUFBSWdDLDhCQUFKLEVBQW5DLENBQVA7QUFDSDs7O3NDQUVpQmhDLEssRUFBOEM7QUFDNUQsYUFBTyxLQUFLK0IsVUFBTCxDQUFnQi9CLEtBQWhCLEVBQXVCLFlBQXZCLEVBQXFDLElBQUk4QixxQ0FBSixFQUFyQyxDQUFQO0FBQ0g7Ozs7RUFqRHlDRyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldCBmcm9tICcuLi9Bc3NldCc7XG5pbXBvcnQgQXNzZXRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NldC9Bc3NldCc7XG5pbXBvcnQgQXNzZXRTb3VyY2UgZnJvbSAnLi4vLi4vYXNzZXQvQXNzZXRTb3VyY2UnO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtIGZyb20gJy4uLy4uL2Fzc2V0L0Fzc2V0VHJhbnNmb3JtJztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4uLy4uL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciBmcm9tICcuL0Fzc2V0U291cmNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIgZnJvbSAnLi9Bc3NldFRyYW5zZm9ybVRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIGFzc2V0IHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXNzZXRcbiAgICAgKi9cbiAgICBtYXBEYXRhKGFzc2V0OiBBc3NldEludGVyZmFjZSk6IEFzc2V0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3NldCh7XG4gICAgICAgICAgICBpZDogYXNzZXQuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGFzc2V0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYXNzZXQudXBkYXRlZEF0LFxuICAgICAgICAgICAgcG9zaXRpb246IGFzc2V0LnBvc2l0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGFzc2V0LmxvY2F0aW9uLFxuICAgICAgICAgICAgcHJpbWFyeTogYXNzZXQucHJpbWFyeSxcbiAgICAgICAgICAgIGtpbmQ6IGFzc2V0LmtpbmQsXG4gICAgICAgICAgICBzdWJLaW5kOiBhc3NldC5zdWJLaW5kLFxuICAgICAgICAgICAgd2lkdGg6IGFzc2V0LndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBhc3NldC5oZWlnaHQsXG4gICAgICAgICAgICB0aXRsZTogYXNzZXQudGl0bGUsXG4gICAgICAgICAgICBvcmlnaW5hbEZpbGVuYW1lOiBhc3NldC5vcmlnaW5hbEZpbGVuYW1lLFxuICAgICAgICAgICAgY2FwdGlvbjogYXNzZXQuY2FwdGlvbixcbiAgICAgICAgICAgIHNpemU6IGFzc2V0LnNpemUsXG4gICAgICAgICAgICBleHRlcm5hbDogYXNzZXQuZXh0ZXJuYWwsXG4gICAgICAgICAgICBleHRlbnNpb246IGFzc2V0LmV4dGVuc2lvbixcbiAgICAgICAgICAgIGZpbGVuYW1lOiBhc3NldC5maWxlbmFtZSxcbiAgICAgICAgICAgIHVybDogYXNzZXQudXJsLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgc291cmNlOiB0aGlzLmluY2x1ZGVTb3VyY2UoYXNzZXQpLFxuICAgICAgICAgICAgdGh1bWJuYWlsOiB0aGlzLmluY2x1ZGVUaHVtYm5haWwoYXNzZXQpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIHByb2R1Y3RzOiB0aGlzLmluY2x1ZGVQcm9kdWN0cyhhc3NldCksXG4gICAgICAgICAgICB0cmFuc2Zvcm1zOiB0aGlzLmluY2x1ZGVUcmFuc2Zvcm1zKGFzc2V0KSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVNvdXJjZShhc3NldDogQXNzZXRJbnRlcmZhY2UpOiBBc3NldFNvdXJjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGFzc2V0LCAnc291cmNlJywgbmV3IEFzc2V0U291cmNlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVRodW1ibmFpbChhc3NldDogQXNzZXRJbnRlcmZhY2UpOiBBc3NldFRyYW5zZm9ybSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGFzc2V0LCAndGh1bWJuYWlsJywgbmV3IEFzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RzKGFzc2V0OiBBc3NldEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihhc3NldCwgJ3Byb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVHJhbnNmb3Jtcyhhc3NldDogQXNzZXRJbnRlcmZhY2UpOiBBcnJheTxBc3NldFRyYW5zZm9ybT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKGFzc2V0LCAndHJhbnNmb3JtcycsIG5ldyBBc3NldFRyYW5zZm9ybVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==