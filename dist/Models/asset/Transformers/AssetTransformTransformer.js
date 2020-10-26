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

var AssetTransformTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(AssetTransformTransformer, _BaseTransformer);

  var _super = _createSuper(AssetTransformTransformer);

  function AssetTransformTransformer() {
    _classCallCheck(this, AssetTransformTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzZXRUcmFuc2Zvcm1UcmFuc2Zvcm1lciIsImFzc2V0VHJhbnNmb3JtIiwiQXNzZXRUcmFuc2Zvcm0iLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImZpbGVFeGlzdHMiLCJsb2NhdGlvbiIsImZpbGVuYW1lIiwidXJsIiwiYXNzZXQiLCJpbmNsdWRlQXNzZXQiLCJ0cmFuc2Zvcm0iLCJpbmNsdWRlVHJhbnNmb3JtIiwiaXRlbSIsIkFzc2V0VHJhbnNmb3JtZXIiLCJUcmFuc2Zvcm1UcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEseUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7NEJBQ1lDLGMsRUFBeUQ7QUFDN0QsYUFBTyxJQUFJQywwQkFBSixDQUFtQjtBQUN0QkMsUUFBQUEsRUFBRSxFQUFFRixjQUFjLENBQUNFLEVBREc7QUFFdEJDLFFBQUFBLFNBQVMsRUFBRUgsY0FBYyxDQUFDRyxTQUZKO0FBR3RCQyxRQUFBQSxTQUFTLEVBQUVKLGNBQWMsQ0FBQ0ksU0FISjtBQUl0QkMsUUFBQUEsVUFBVSxFQUFFTCxjQUFjLENBQUNLLFVBSkw7QUFLdEJDLFFBQUFBLFFBQVEsRUFBRU4sY0FBYyxDQUFDTSxRQUxIO0FBTXRCQyxRQUFBQSxRQUFRLEVBQUVQLGNBQWMsQ0FBQ08sUUFOSDtBQU90QkMsUUFBQUEsR0FBRyxFQUFFUixjQUFjLENBQUNRLEdBUEU7QUFRdEI7QUFDQUMsUUFBQUEsS0FBSyxFQUFFLEtBQUtDLFlBQUwsQ0FBa0JWLGNBQWxCLENBVGU7QUFVdEJXLFFBQUFBLFNBQVMsRUFBRSxLQUFLQyxnQkFBTCxDQUFzQlosY0FBdEI7QUFWVyxPQUFuQixDQUFQO0FBWUg7OztpQ0FFWUEsYyxFQUFnRTtBQUN6RSxhQUFPLEtBQUthLElBQUwsQ0FBVWIsY0FBVixFQUEwQixPQUExQixFQUFtQyxJQUFJYyw0QkFBSixFQUFuQyxDQUFQO0FBQ0g7OztxQ0FFZ0JkLGMsRUFBb0U7QUFDakYsYUFBTyxLQUFLYSxJQUFMLENBQVViLGNBQVYsRUFBMEIsV0FBMUIsRUFBdUMsSUFBSWUsZ0NBQUosRUFBdkMsQ0FBUDtBQUNIOzs7O0VBM0JrREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRUcmFuc2Zvcm0gZnJvbSAnLi4vQXNzZXRUcmFuc2Zvcm0nO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXRUcmFuc2Zvcm0nO1xuaW1wb3J0IEFzc2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXQnO1xuaW1wb3J0IFRyYW5zZm9ybUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc2V0L1RyYW5zZm9ybSc7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm1lciBmcm9tICcuL0Fzc2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFRyYW5zZm9ybVRyYW5zZm9ybWVyIGZyb20gJy4vVHJhbnNmb3JtVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldFRyYW5zZm9ybVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gYXNzZXQgdHJhbnNmb3JtIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXNzZXRUcmFuc2Zvcm1cbiAgICAgKi9cbiAgICBtYXBEYXRhKGFzc2V0VHJhbnNmb3JtOiBBc3NldFRyYW5zZm9ybUludGVyZmFjZSk6IEFzc2V0VHJhbnNmb3JtIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3NldFRyYW5zZm9ybSh7XG4gICAgICAgICAgICBpZDogYXNzZXRUcmFuc2Zvcm0uaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGFzc2V0VHJhbnNmb3JtLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYXNzZXRUcmFuc2Zvcm0udXBkYXRlZEF0LFxuICAgICAgICAgICAgZmlsZUV4aXN0czogYXNzZXRUcmFuc2Zvcm0uZmlsZUV4aXN0cyxcbiAgICAgICAgICAgIGxvY2F0aW9uOiBhc3NldFRyYW5zZm9ybS5sb2NhdGlvbixcbiAgICAgICAgICAgIGZpbGVuYW1lOiBhc3NldFRyYW5zZm9ybS5maWxlbmFtZSxcbiAgICAgICAgICAgIHVybDogYXNzZXRUcmFuc2Zvcm0udXJsLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzZXQ6IHRoaXMuaW5jbHVkZUFzc2V0KGFzc2V0VHJhbnNmb3JtKSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdGhpcy5pbmNsdWRlVHJhbnNmb3JtKGFzc2V0VHJhbnNmb3JtKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2V0KGFzc2V0VHJhbnNmb3JtOiBBc3NldFRyYW5zZm9ybUludGVyZmFjZSk6IEFzc2V0SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oYXNzZXRUcmFuc2Zvcm0sICdhc3NldCcsIG5ldyBBc3NldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVUcmFuc2Zvcm0oYXNzZXRUcmFuc2Zvcm06IEFzc2V0VHJhbnNmb3JtSW50ZXJmYWNlKTogVHJhbnNmb3JtSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oYXNzZXRUcmFuc2Zvcm0sICd0cmFuc2Zvcm0nLCBuZXcgVHJhbnNmb3JtVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19