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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRUcmFuc2Zvcm1lciIsImFzc2V0IiwiQXNzZXQiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBvc2l0aW9uIiwibG9jYXRpb24iLCJwcmltYXJ5Iiwia2luZCIsInN1YktpbmQiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwib3JpZ2luYWxGaWxlbmFtZSIsImNhcHRpb24iLCJzaXplIiwiZXh0ZXJuYWwiLCJleHRlbnNpb24iLCJmaWxlbmFtZSIsInVybCIsInNvdXJjZSIsImluY2x1ZGVTb3VyY2UiLCJ0aHVtYm5haWwiLCJpbmNsdWRlVGh1bWJuYWlsIiwicHJvZHVjdHMiLCJpbmNsdWRlUHJvZHVjdHMiLCJ0cmFuc2Zvcm1zIiwiaW5jbHVkZVRyYW5zZm9ybXMiLCJpdGVtIiwiQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciIsIkFzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxLLEVBQThCO0FBQ2xDLGFBQU8sSUFBSUMsaUJBQUosQ0FBVTtBQUNiQyxRQUFBQSxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFERztBQUViQyxRQUFBQSxTQUFTLEVBQUVILEtBQUssQ0FBQ0csU0FGSjtBQUdiQyxRQUFBQSxTQUFTLEVBQUVKLEtBQUssQ0FBQ0ksU0FISjtBQUliQyxRQUFBQSxRQUFRLEVBQUVMLEtBQUssQ0FBQ0ssUUFKSDtBQUtiQyxRQUFBQSxRQUFRLEVBQUVOLEtBQUssQ0FBQ00sUUFMSDtBQU1iQyxRQUFBQSxPQUFPLEVBQUVQLEtBQUssQ0FBQ08sT0FORjtBQU9iQyxRQUFBQSxJQUFJLEVBQUVSLEtBQUssQ0FBQ1EsSUFQQztBQVFiQyxRQUFBQSxPQUFPLEVBQUVULEtBQUssQ0FBQ1MsT0FSRjtBQVNiQyxRQUFBQSxLQUFLLEVBQUVWLEtBQUssQ0FBQ1UsS0FUQTtBQVViQyxRQUFBQSxNQUFNLEVBQUVYLEtBQUssQ0FBQ1csTUFWRDtBQVdiQyxRQUFBQSxLQUFLLEVBQUVaLEtBQUssQ0FBQ1ksS0FYQTtBQVliQyxRQUFBQSxnQkFBZ0IsRUFBRWIsS0FBSyxDQUFDYSxnQkFaWDtBQWFiQyxRQUFBQSxPQUFPLEVBQUVkLEtBQUssQ0FBQ2MsT0FiRjtBQWNiQyxRQUFBQSxJQUFJLEVBQUVmLEtBQUssQ0FBQ2UsSUFkQztBQWViQyxRQUFBQSxRQUFRLEVBQUVoQixLQUFLLENBQUNnQixRQWZIO0FBZ0JiQyxRQUFBQSxTQUFTLEVBQUVqQixLQUFLLENBQUNpQixTQWhCSjtBQWlCYkMsUUFBQUEsUUFBUSxFQUFFbEIsS0FBSyxDQUFDa0IsUUFqQkg7QUFrQmJDLFFBQUFBLEdBQUcsRUFBRW5CLEtBQUssQ0FBQ21CLEdBbEJFO0FBbUJiO0FBQ0FDLFFBQUFBLE1BQU0sRUFBRSxLQUFLQyxhQUFMLENBQW1CckIsS0FBbkIsQ0FwQks7QUFxQmJzQixRQUFBQSxTQUFTLEVBQUUsS0FBS0MsZ0JBQUwsQ0FBc0J2QixLQUF0QixDQXJCRTtBQXNCYjtBQUNBd0IsUUFBQUEsUUFBUSxFQUFFLEtBQUtDLGVBQUwsQ0FBcUJ6QixLQUFyQixDQXZCRztBQXdCYjBCLFFBQUFBLFVBQVUsRUFBRSxLQUFLQyxpQkFBTCxDQUF1QjNCLEtBQXZCO0FBeEJDLE9BQVYsQ0FBUDtBQTBCSDs7O2tDQUVhQSxLLEVBQTJDO0FBQ3JELGFBQU8sS0FBSzRCLElBQUwsQ0FBVTVCLEtBQVYsRUFBaUIsUUFBakIsRUFBMkIsSUFBSTZCLGtDQUFKLEVBQTNCLENBQVA7QUFDSDs7O3FDQUVnQjdCLEssRUFBOEM7QUFDM0QsYUFBTyxLQUFLNEIsSUFBTCxDQUFVNUIsS0FBVixFQUFpQixXQUFqQixFQUE4QixJQUFJOEIscUNBQUosRUFBOUIsQ0FBUDtBQUNIOzs7b0NBRWU5QixLLEVBQXVDO0FBQ25ELGFBQU8sS0FBSytCLFVBQUwsQ0FBZ0IvQixLQUFoQixFQUF1QixVQUF2QixFQUFtQyxJQUFJZ0MsOEJBQUosRUFBbkMsQ0FBUDtBQUNIOzs7c0NBRWlCaEMsSyxFQUE4QztBQUM1RCxhQUFPLEtBQUsrQixVQUFMLENBQWdCL0IsS0FBaEIsRUFBdUIsWUFBdkIsRUFBcUMsSUFBSThCLHFDQUFKLEVBQXJDLENBQVA7QUFDSDs7OztFQWpEeUNHLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0IGZyb20gJy4uL0Fzc2V0JztcbmltcG9ydCBBc3NldEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc2V0L0Fzc2V0JztcbmltcG9ydCBBc3NldFNvdXJjZSBmcm9tICcuLi8uLi9hc3NldC9Bc3NldFNvdXJjZSc7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm0gZnJvbSAnLi4vLi4vYXNzZXQvQXNzZXRUcmFuc2Zvcm0nO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBBc3NldFNvdXJjZVRyYW5zZm9ybWVyIGZyb20gJy4vQXNzZXRTb3VyY2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm1UcmFuc2Zvcm1lciBmcm9tICcuL0Fzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gYXNzZXQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhc3NldFxuICAgICAqL1xuICAgIG1hcERhdGEoYXNzZXQ6IEFzc2V0SW50ZXJmYWNlKTogQXNzZXQge1xuICAgICAgICByZXR1cm4gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGlkOiBhc3NldC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYXNzZXQuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBhc3NldC51cGRhdGVkQXQsXG4gICAgICAgICAgICBwb3NpdGlvbjogYXNzZXQucG9zaXRpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogYXNzZXQubG9jYXRpb24sXG4gICAgICAgICAgICBwcmltYXJ5OiBhc3NldC5wcmltYXJ5LFxuICAgICAgICAgICAga2luZDogYXNzZXQua2luZCxcbiAgICAgICAgICAgIHN1YktpbmQ6IGFzc2V0LnN1YktpbmQsXG4gICAgICAgICAgICB3aWR0aDogYXNzZXQud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGFzc2V0LmhlaWdodCxcbiAgICAgICAgICAgIHRpdGxlOiBhc3NldC50aXRsZSxcbiAgICAgICAgICAgIG9yaWdpbmFsRmlsZW5hbWU6IGFzc2V0Lm9yaWdpbmFsRmlsZW5hbWUsXG4gICAgICAgICAgICBjYXB0aW9uOiBhc3NldC5jYXB0aW9uLFxuICAgICAgICAgICAgc2l6ZTogYXNzZXQuc2l6ZSxcbiAgICAgICAgICAgIGV4dGVybmFsOiBhc3NldC5leHRlcm5hbCxcbiAgICAgICAgICAgIGV4dGVuc2lvbjogYXNzZXQuZXh0ZW5zaW9uLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGFzc2V0LmZpbGVuYW1lLFxuICAgICAgICAgICAgdXJsOiBhc3NldC51cmwsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuaW5jbHVkZVNvdXJjZShhc3NldCksXG4gICAgICAgICAgICB0aHVtYm5haWw6IHRoaXMuaW5jbHVkZVRodW1ibmFpbChhc3NldCksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKGFzc2V0KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybXM6IHRoaXMuaW5jbHVkZVRyYW5zZm9ybXMoYXNzZXQpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU291cmNlKGFzc2V0OiBBc3NldEludGVyZmFjZSk6IEFzc2V0U291cmNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oYXNzZXQsICdzb3VyY2UnLCBuZXcgQXNzZXRTb3VyY2VUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVGh1bWJuYWlsKGFzc2V0OiBBc3NldEludGVyZmFjZSk6IEFzc2V0VHJhbnNmb3JtIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oYXNzZXQsICd0aHVtYm5haWwnLCBuZXcgQXNzZXRUcmFuc2Zvcm1UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMoYXNzZXQ6IEFzc2V0SW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKGFzc2V0LCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVUcmFuc2Zvcm1zKGFzc2V0OiBBc3NldEludGVyZmFjZSk6IEFycmF5PEFzc2V0VHJhbnNmb3JtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oYXNzZXQsICd0cmFuc2Zvcm1zJywgbmV3IEFzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19