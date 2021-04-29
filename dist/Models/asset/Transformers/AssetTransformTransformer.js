"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AssetTransform = _interopRequireDefault(require("../AssetTransform"));

var _AssetTransformer = _interopRequireDefault(require("./AssetTransformer"));

var _TransformTransformer = _interopRequireDefault(require("./TransformTransformer"));

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

var AssetTransformTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(AssetTransformTransformer, _BaseTransformer);

  function AssetTransformTransformer() {
    _classCallCheck(this, AssetTransformTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(AssetTransformTransformer).apply(this, arguments));
  }

  _createClass(AssetTransformTransformer, [{
    key: "mapData",

    /**
     * Map an asset transform response
     *
     * @param assetTransform
     */
    value: function mapData(assetTransform) {
      return new _AssetTransform["default"]({
        id: assetTransform.id,
        createdAt: assetTransform.createdAt,
        updatedAt: assetTransform.updatedAt,
        fileExists: assetTransform.fileExists,
        location: assetTransform.location,
        filename: assetTransform.filename,
        url: assetTransform.url,
        transformId: assetTransform.transformId,
        // belongs to
        asset: this.includeAsset(assetTransform),
        transform: this.includeTransform(assetTransform)
      });
    }
  }, {
    key: "includeAsset",
    value: function includeAsset(assetTransform) {
      return this.item(assetTransform, 'asset', new _AssetTransformer["default"]());
    }
  }, {
    key: "includeTransform",
    value: function includeTransform(assetTransform) {
      return this.item(assetTransform, 'transform', new _TransformTransformer["default"]());
    }
  }]);

  return AssetTransformTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = AssetTransformTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRUcmFuc2Zvcm1UcmFuc2Zvcm1lciIsImFzc2V0VHJhbnNmb3JtIiwiQXNzZXRUcmFuc2Zvcm0iLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImZpbGVFeGlzdHMiLCJsb2NhdGlvbiIsImZpbGVuYW1lIiwidXJsIiwidHJhbnNmb3JtSWQiLCJhc3NldCIsImluY2x1ZGVBc3NldCIsInRyYW5zZm9ybSIsImluY2x1ZGVUcmFuc2Zvcm0iLCJpdGVtIiwiQXNzZXRUcmFuc2Zvcm1lciIsIlRyYW5zZm9ybVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHlCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLGMsRUFBeUQ7QUFDN0QsYUFBTyxJQUFJQywwQkFBSixDQUFtQjtBQUN0QkMsUUFBQUEsRUFBRSxFQUFFRixjQUFjLENBQUNFLEVBREc7QUFFdEJDLFFBQUFBLFNBQVMsRUFBRUgsY0FBYyxDQUFDRyxTQUZKO0FBR3RCQyxRQUFBQSxTQUFTLEVBQUVKLGNBQWMsQ0FBQ0ksU0FISjtBQUl0QkMsUUFBQUEsVUFBVSxFQUFFTCxjQUFjLENBQUNLLFVBSkw7QUFLdEJDLFFBQUFBLFFBQVEsRUFBRU4sY0FBYyxDQUFDTSxRQUxIO0FBTXRCQyxRQUFBQSxRQUFRLEVBQUVQLGNBQWMsQ0FBQ08sUUFOSDtBQU90QkMsUUFBQUEsR0FBRyxFQUFFUixjQUFjLENBQUNRLEdBUEU7QUFRdEJDLFFBQUFBLFdBQVcsRUFBRVQsY0FBYyxDQUFDUyxXQVJOO0FBU3RCO0FBQ0FDLFFBQUFBLEtBQUssRUFBRSxLQUFLQyxZQUFMLENBQWtCWCxjQUFsQixDQVZlO0FBV3RCWSxRQUFBQSxTQUFTLEVBQUUsS0FBS0MsZ0JBQUwsQ0FBc0JiLGNBQXRCO0FBWFcsT0FBbkIsQ0FBUDtBQWFIOzs7aUNBRVlBLGMsRUFBZ0U7QUFDekUsYUFBTyxLQUFLYyxJQUFMLENBQVVkLGNBQVYsRUFBMEIsT0FBMUIsRUFBbUMsSUFBSWUsNEJBQUosRUFBbkMsQ0FBUDtBQUNIOzs7cUNBRWdCZixjLEVBQW9FO0FBQ2pGLGFBQU8sS0FBS2MsSUFBTCxDQUFVZCxjQUFWLEVBQTBCLFdBQTFCLEVBQXVDLElBQUlnQixnQ0FBSixFQUF2QyxDQUFQO0FBQ0g7Ozs7RUE1QmtEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NldFRyYW5zZm9ybSBmcm9tICcuLi9Bc3NldFRyYW5zZm9ybSc7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm1JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NldC9Bc3NldFRyYW5zZm9ybSc7XG5pbXBvcnQgQXNzZXRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NldC9Bc3NldCc7XG5pbXBvcnQgVHJhbnNmb3JtSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvVHJhbnNmb3JtJztcbmltcG9ydCBBc3NldFRyYW5zZm9ybWVyIGZyb20gJy4vQXNzZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVHJhbnNmb3JtVHJhbnNmb3JtZXIgZnJvbSAnLi9UcmFuc2Zvcm1UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBhc3NldCB0cmFuc2Zvcm0gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhc3NldFRyYW5zZm9ybVxuICAgICAqL1xuICAgIG1hcERhdGEoYXNzZXRUcmFuc2Zvcm06IEFzc2V0VHJhbnNmb3JtSW50ZXJmYWNlKTogQXNzZXRUcmFuc2Zvcm0ge1xuICAgICAgICByZXR1cm4gbmV3IEFzc2V0VHJhbnNmb3JtKHtcbiAgICAgICAgICAgIGlkOiBhc3NldFRyYW5zZm9ybS5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYXNzZXRUcmFuc2Zvcm0uY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBhc3NldFRyYW5zZm9ybS51cGRhdGVkQXQsXG4gICAgICAgICAgICBmaWxlRXhpc3RzOiBhc3NldFRyYW5zZm9ybS5maWxlRXhpc3RzLFxuICAgICAgICAgICAgbG9jYXRpb246IGFzc2V0VHJhbnNmb3JtLmxvY2F0aW9uLFxuICAgICAgICAgICAgZmlsZW5hbWU6IGFzc2V0VHJhbnNmb3JtLmZpbGVuYW1lLFxuICAgICAgICAgICAgdXJsOiBhc3NldFRyYW5zZm9ybS51cmwsXG4gICAgICAgICAgICB0cmFuc2Zvcm1JZDogYXNzZXRUcmFuc2Zvcm0udHJhbnNmb3JtSWQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBhc3NldDogdGhpcy5pbmNsdWRlQXNzZXQoYXNzZXRUcmFuc2Zvcm0pLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0aGlzLmluY2x1ZGVUcmFuc2Zvcm0oYXNzZXRUcmFuc2Zvcm0pLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzZXQoYXNzZXRUcmFuc2Zvcm06IEFzc2V0VHJhbnNmb3JtSW50ZXJmYWNlKTogQXNzZXRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShhc3NldFRyYW5zZm9ybSwgJ2Fzc2V0JywgbmV3IEFzc2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVRyYW5zZm9ybShhc3NldFRyYW5zZm9ybTogQXNzZXRUcmFuc2Zvcm1JbnRlcmZhY2UpOiBUcmFuc2Zvcm1JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShhc3NldFRyYW5zZm9ybSwgJ3RyYW5zZm9ybScsIG5ldyBUcmFuc2Zvcm1UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=