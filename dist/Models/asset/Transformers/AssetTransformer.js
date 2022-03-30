"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var AssetTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(AssetTransformer, _BaseTransformer);

  var _super = _createSuper(AssetTransformer);

  function AssetTransformer() {
    _classCallCheck(this, AssetTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(AssetTransformer, [{
    key: "mapData",
    value:
    /**
     * Map an asset response
     *
     * @param asset
     */
    function mapData(asset) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRUcmFuc2Zvcm1lciIsImFzc2V0IiwiQXNzZXQiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInBvc2l0aW9uIiwibG9jYXRpb24iLCJwcmltYXJ5Iiwia2luZCIsInN1YktpbmQiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwib3JpZ2luYWxGaWxlbmFtZSIsImNhcHRpb24iLCJzaXplIiwiZXh0ZXJuYWwiLCJleHRlbnNpb24iLCJmaWxlbmFtZSIsInZpc2libGUiLCJjYXRlZ29yeSIsInVybCIsInNvdXJjZSIsImluY2x1ZGVTb3VyY2UiLCJ0aHVtYm5haWwiLCJpbmNsdWRlVGh1bWJuYWlsIiwicHJvZHVjdHMiLCJpbmNsdWRlUHJvZHVjdHMiLCJ0cmFuc2Zvcm1zIiwiaW5jbHVkZVRyYW5zZm9ybXMiLCJpdGVtIiwiQXNzZXRTb3VyY2VUcmFuc2Zvcm1lciIsIkFzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLHFCQUFRQyxLQUFSLEVBQXNDO0FBQ2xDLGFBQU8sSUFBSUMsaUJBQUosQ0FBVTtBQUNiQyxRQUFBQSxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFERztBQUViQyxRQUFBQSxTQUFTLEVBQUVILEtBQUssQ0FBQ0csU0FGSjtBQUdiQyxRQUFBQSxTQUFTLEVBQUVKLEtBQUssQ0FBQ0ksU0FISjtBQUliQyxRQUFBQSxRQUFRLEVBQUVMLEtBQUssQ0FBQ0ssUUFKSDtBQUtiQyxRQUFBQSxRQUFRLEVBQUVOLEtBQUssQ0FBQ00sUUFMSDtBQU1iQyxRQUFBQSxPQUFPLEVBQUVQLEtBQUssQ0FBQ08sT0FORjtBQU9iQyxRQUFBQSxJQUFJLEVBQUVSLEtBQUssQ0FBQ1EsSUFQQztBQVFiQyxRQUFBQSxPQUFPLEVBQUVULEtBQUssQ0FBQ1MsT0FSRjtBQVNiQyxRQUFBQSxLQUFLLEVBQUVWLEtBQUssQ0FBQ1UsS0FUQTtBQVViQyxRQUFBQSxNQUFNLEVBQUVYLEtBQUssQ0FBQ1csTUFWRDtBQVdiQyxRQUFBQSxLQUFLLEVBQUVaLEtBQUssQ0FBQ1ksS0FYQTtBQVliQyxRQUFBQSxnQkFBZ0IsRUFBRWIsS0FBSyxDQUFDYSxnQkFaWDtBQWFiQyxRQUFBQSxPQUFPLEVBQUVkLEtBQUssQ0FBQ2MsT0FiRjtBQWNiQyxRQUFBQSxJQUFJLEVBQUVmLEtBQUssQ0FBQ2UsSUFkQztBQWViQyxRQUFBQSxRQUFRLEVBQUVoQixLQUFLLENBQUNnQixRQWZIO0FBZ0JiQyxRQUFBQSxTQUFTLEVBQUVqQixLQUFLLENBQUNpQixTQWhCSjtBQWlCYkMsUUFBQUEsUUFBUSxFQUFFbEIsS0FBSyxDQUFDa0IsUUFqQkg7QUFrQmJDLFFBQUFBLE9BQU8sRUFBRW5CLEtBQUssQ0FBQ21CLE9BbEJGO0FBbUJiQyxRQUFBQSxRQUFRLEVBQUVwQixLQUFLLENBQUNvQixRQW5CSDtBQW9CYkMsUUFBQUEsR0FBRyxFQUFFckIsS0FBSyxDQUFDcUIsR0FwQkU7QUFxQmI7QUFDQUMsUUFBQUEsTUFBTSxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJ2QixLQUFuQixDQXRCSztBQXVCYndCLFFBQUFBLFNBQVMsRUFBRSxLQUFLQyxnQkFBTCxDQUFzQnpCLEtBQXRCLENBdkJFO0FBd0JiO0FBQ0EwQixRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQjNCLEtBQXJCLENBekJHO0FBMEJiNEIsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCN0IsS0FBdkI7QUExQkMsT0FBVixDQUFQO0FBNEJIOzs7V0FFRCx1QkFBY0EsS0FBZCxFQUF5RDtBQUNyRCxhQUFPLEtBQUs4QixJQUFMLENBQVU5QixLQUFWLEVBQWlCLFFBQWpCLEVBQTJCLElBQUkrQixrQ0FBSixFQUEzQixDQUFQO0FBQ0g7OztXQUVELDBCQUFpQi9CLEtBQWpCLEVBQStEO0FBQzNELGFBQU8sS0FBSzhCLElBQUwsQ0FBVTlCLEtBQVYsRUFBaUIsV0FBakIsRUFBOEIsSUFBSWdDLHFDQUFKLEVBQTlCLENBQVA7QUFDSDs7O1dBRUQseUJBQWdCaEMsS0FBaEIsRUFBdUQ7QUFDbkQsYUFBTyxLQUFLaUMsVUFBTCxDQUFnQmpDLEtBQWhCLEVBQXVCLFVBQXZCLEVBQW1DLElBQUlrQyw4QkFBSixFQUFuQyxDQUFQO0FBQ0g7OztXQUVELDJCQUFrQmxDLEtBQWxCLEVBQWdFO0FBQzVELGFBQU8sS0FBS2lDLFVBQUwsQ0FBZ0JqQyxLQUFoQixFQUF1QixZQUF2QixFQUFxQyxJQUFJZ0MscUNBQUosRUFBckMsQ0FBUDtBQUNIOzs7O0VBbkR5Q0csNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXQgZnJvbSAnLi4vQXNzZXQnO1xuaW1wb3J0IEFzc2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXQnO1xuaW1wb3J0IEFzc2V0U291cmNlIGZyb20gJy4uLy4uL2Fzc2V0L0Fzc2V0U291cmNlJztcbmltcG9ydCBBc3NldFRyYW5zZm9ybSBmcm9tICcuLi8uLi9hc3NldC9Bc3NldFRyYW5zZm9ybSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IEFzc2V0U291cmNlVHJhbnNmb3JtZXIgZnJvbSAnLi9Bc3NldFNvdXJjZVRyYW5zZm9ybWVyJztcbmltcG9ydCBBc3NldFRyYW5zZm9ybVRyYW5zZm9ybWVyIGZyb20gJy4vQXNzZXRUcmFuc2Zvcm1UcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBhc3NldCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGFzc2V0XG4gICAgICovXG4gICAgbWFwRGF0YShhc3NldDogQXNzZXRJbnRlcmZhY2UpOiBBc3NldCB7XG4gICAgICAgIHJldHVybiBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgaWQ6IGFzc2V0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBhc3NldC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGFzc2V0LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhc3NldC5wb3NpdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBhc3NldC5sb2NhdGlvbixcbiAgICAgICAgICAgIHByaW1hcnk6IGFzc2V0LnByaW1hcnksXG4gICAgICAgICAgICBraW5kOiBhc3NldC5raW5kLFxuICAgICAgICAgICAgc3ViS2luZDogYXNzZXQuc3ViS2luZCxcbiAgICAgICAgICAgIHdpZHRoOiBhc3NldC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogYXNzZXQuaGVpZ2h0LFxuICAgICAgICAgICAgdGl0bGU6IGFzc2V0LnRpdGxlLFxuICAgICAgICAgICAgb3JpZ2luYWxGaWxlbmFtZTogYXNzZXQub3JpZ2luYWxGaWxlbmFtZSxcbiAgICAgICAgICAgIGNhcHRpb246IGFzc2V0LmNhcHRpb24sXG4gICAgICAgICAgICBzaXplOiBhc3NldC5zaXplLFxuICAgICAgICAgICAgZXh0ZXJuYWw6IGFzc2V0LmV4dGVybmFsLFxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBhc3NldC5leHRlbnNpb24sXG4gICAgICAgICAgICBmaWxlbmFtZTogYXNzZXQuZmlsZW5hbWUsXG4gICAgICAgICAgICB2aXNpYmxlOiBhc3NldC52aXNpYmxlLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IGFzc2V0LmNhdGVnb3J5LFxuICAgICAgICAgICAgdXJsOiBhc3NldC51cmwsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuaW5jbHVkZVNvdXJjZShhc3NldCksXG4gICAgICAgICAgICB0aHVtYm5haWw6IHRoaXMuaW5jbHVkZVRodW1ibmFpbChhc3NldCksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKGFzc2V0KSxcbiAgICAgICAgICAgIHRyYW5zZm9ybXM6IHRoaXMuaW5jbHVkZVRyYW5zZm9ybXMoYXNzZXQpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU291cmNlKGFzc2V0OiBBc3NldEludGVyZmFjZSk6IEFzc2V0U291cmNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oYXNzZXQsICdzb3VyY2UnLCBuZXcgQXNzZXRTb3VyY2VUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVGh1bWJuYWlsKGFzc2V0OiBBc3NldEludGVyZmFjZSk6IEFzc2V0VHJhbnNmb3JtIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oYXNzZXQsICd0aHVtYm5haWwnLCBuZXcgQXNzZXRUcmFuc2Zvcm1UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMoYXNzZXQ6IEFzc2V0SW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKGFzc2V0LCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVUcmFuc2Zvcm1zKGFzc2V0OiBBc3NldEludGVyZmFjZSk6IEFycmF5PEFzc2V0VHJhbnNmb3JtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oYXNzZXQsICd0cmFuc2Zvcm1zJywgbmV3IEFzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19