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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRUcmFuc2Zvcm1UcmFuc2Zvcm1lciIsImFzc2V0VHJhbnNmb3JtIiwiQXNzZXRUcmFuc2Zvcm0iLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImZpbGVFeGlzdHMiLCJsb2NhdGlvbiIsImZpbGVuYW1lIiwidXJsIiwiYXNzZXQiLCJpbmNsdWRlQXNzZXQiLCJ0cmFuc2Zvcm0iLCJpbmNsdWRlVHJhbnNmb3JtIiwiaXRlbSIsIkFzc2V0VHJhbnNmb3JtZXIiLCJUcmFuc2Zvcm1UcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx5Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxjLEVBQXlEO0FBQzdELGFBQU8sSUFBSUMsMEJBQUosQ0FBbUI7QUFDdEJDLFFBQUFBLEVBQUUsRUFBRUYsY0FBYyxDQUFDRSxFQURHO0FBRXRCQyxRQUFBQSxTQUFTLEVBQUVILGNBQWMsQ0FBQ0csU0FGSjtBQUd0QkMsUUFBQUEsU0FBUyxFQUFFSixjQUFjLENBQUNJLFNBSEo7QUFJdEJDLFFBQUFBLFVBQVUsRUFBRUwsY0FBYyxDQUFDSyxVQUpMO0FBS3RCQyxRQUFBQSxRQUFRLEVBQUVOLGNBQWMsQ0FBQ00sUUFMSDtBQU10QkMsUUFBQUEsUUFBUSxFQUFFUCxjQUFjLENBQUNPLFFBTkg7QUFPdEJDLFFBQUFBLEdBQUcsRUFBRVIsY0FBYyxDQUFDUSxHQVBFO0FBUXRCO0FBQ0FDLFFBQUFBLEtBQUssRUFBRSxLQUFLQyxZQUFMLENBQWtCVixjQUFsQixDQVRlO0FBVXRCVyxRQUFBQSxTQUFTLEVBQUUsS0FBS0MsZ0JBQUwsQ0FBc0JaLGNBQXRCO0FBVlcsT0FBbkIsQ0FBUDtBQVlIOzs7aUNBRVlBLGMsRUFBZ0U7QUFDekUsYUFBTyxLQUFLYSxJQUFMLENBQVViLGNBQVYsRUFBMEIsT0FBMUIsRUFBbUMsSUFBSWMsNEJBQUosRUFBbkMsQ0FBUDtBQUNIOzs7cUNBRWdCZCxjLEVBQW9FO0FBQ2pGLGFBQU8sS0FBS2EsSUFBTCxDQUFVYixjQUFWLEVBQTBCLFdBQTFCLEVBQXVDLElBQUllLGdDQUFKLEVBQXZDLENBQVA7QUFDSDs7OztFQTNCa0RDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0VHJhbnNmb3JtIGZyb20gJy4uL0Fzc2V0VHJhbnNmb3JtJztcbmltcG9ydCBBc3NldFRyYW5zZm9ybUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc2V0L0Fzc2V0VHJhbnNmb3JtJztcbmltcG9ydCBBc3NldEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc2V0L0Fzc2V0JztcbmltcG9ydCBUcmFuc2Zvcm1JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NldC9UcmFuc2Zvcm0nO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtZXIgZnJvbSAnLi9Bc3NldFRyYW5zZm9ybWVyJztcbmltcG9ydCBUcmFuc2Zvcm1UcmFuc2Zvcm1lciBmcm9tICcuL1RyYW5zZm9ybVRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRUcmFuc2Zvcm1UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIGFzc2V0IHRyYW5zZm9ybSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGFzc2V0VHJhbnNmb3JtXG4gICAgICovXG4gICAgbWFwRGF0YShhc3NldFRyYW5zZm9ybTogQXNzZXRUcmFuc2Zvcm1JbnRlcmZhY2UpOiBBc3NldFRyYW5zZm9ybSB7XG4gICAgICAgIHJldHVybiBuZXcgQXNzZXRUcmFuc2Zvcm0oe1xuICAgICAgICAgICAgaWQ6IGFzc2V0VHJhbnNmb3JtLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBhc3NldFRyYW5zZm9ybS5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGFzc2V0VHJhbnNmb3JtLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGZpbGVFeGlzdHM6IGFzc2V0VHJhbnNmb3JtLmZpbGVFeGlzdHMsXG4gICAgICAgICAgICBsb2NhdGlvbjogYXNzZXRUcmFuc2Zvcm0ubG9jYXRpb24sXG4gICAgICAgICAgICBmaWxlbmFtZTogYXNzZXRUcmFuc2Zvcm0uZmlsZW5hbWUsXG4gICAgICAgICAgICB1cmw6IGFzc2V0VHJhbnNmb3JtLnVybCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGFzc2V0OiB0aGlzLmluY2x1ZGVBc3NldChhc3NldFRyYW5zZm9ybSksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRoaXMuaW5jbHVkZVRyYW5zZm9ybShhc3NldFRyYW5zZm9ybSksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NldChhc3NldFRyYW5zZm9ybTogQXNzZXRUcmFuc2Zvcm1JbnRlcmZhY2UpOiBBc3NldEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGFzc2V0VHJhbnNmb3JtLCAnYXNzZXQnLCBuZXcgQXNzZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVHJhbnNmb3JtKGFzc2V0VHJhbnNmb3JtOiBBc3NldFRyYW5zZm9ybUludGVyZmFjZSk6IFRyYW5zZm9ybUludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGFzc2V0VHJhbnNmb3JtLCAndHJhbnNmb3JtJywgbmV3IFRyYW5zZm9ybVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==