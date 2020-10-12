"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ProductList = _interopRequireDefault(require("../ProductList"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _ProductListLineTransformer = _interopRequireDefault(require("./ProductListLineTransformer"));

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

var ProductListTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductListTransformer, _BaseTransformer);

  var _super = _createSuper(ProductListTransformer);

  function ProductListTransformer() {
    _classCallCheck(this, ProductListTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ProductListTransformer, [{
    key: "mapData",
    value: function mapData(productList) {
      return new _ProductList["default"]({
        id: productList.id,
        createdAt: productList.createdAt,
        updatedAt: productList.updatedAt,
        deletedAt: productList.deletedAt,
        name: productList.name,
        slug: productList.slug,
        type: productList.type,
        description: productList.description,
        "public": productList["public"],
        sharingSlug: productList.sharingSlug,
        // Belongs to
        user: this.includeUser(productList) || undefined,
        lines: this.includeProductListLines(productList)
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(productList) {
      return this.item(productList, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeProductListLines",
    value: function includeProductListLines(productList) {
      return this.collection(productList, 'lines', new _ProductListLineTransformer["default"]());
    }
  }]);

  return ProductListTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductListTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdExpc3RUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdFRyYW5zZm9ybWVyIiwicHJvZHVjdExpc3QiLCJQcm9kdWN0TGlzdCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiZGVsZXRlZEF0IiwibmFtZSIsInNsdWciLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJzaGFyaW5nU2x1ZyIsInVzZXIiLCJpbmNsdWRlVXNlciIsInVuZGVmaW5lZCIsImxpbmVzIiwiaW5jbHVkZVByb2R1Y3RMaXN0TGluZXMiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlByb2R1Y3RMaXN0TGluZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxzQjs7Ozs7Ozs7Ozs7Ozs0QkFDVEMsVyxFQUFnRDtBQUNwRCxhQUFPLElBQUlDLHVCQUFKLENBQWdCO0FBQ25CQyxRQUFBQSxFQUFFLEVBQUVGLFdBQVcsQ0FBQ0UsRUFERztBQUVuQkMsUUFBQUEsU0FBUyxFQUFFSCxXQUFXLENBQUNHLFNBRko7QUFHbkJDLFFBQUFBLFNBQVMsRUFBRUosV0FBVyxDQUFDSSxTQUhKO0FBSW5CQyxRQUFBQSxTQUFTLEVBQUVMLFdBQVcsQ0FBQ0ssU0FKSjtBQUtuQkMsUUFBQUEsSUFBSSxFQUFFTixXQUFXLENBQUNNLElBTEM7QUFNbkJDLFFBQUFBLElBQUksRUFBRVAsV0FBVyxDQUFDTyxJQU5DO0FBT25CQyxRQUFBQSxJQUFJLEVBQUVSLFdBQVcsQ0FBQ1EsSUFQQztBQVFuQkMsUUFBQUEsV0FBVyxFQUFFVCxXQUFXLENBQUNTLFdBUk47QUFTbkIsa0JBQVFULFdBQVcsVUFUQTtBQVVuQlUsUUFBQUEsV0FBVyxFQUFFVixXQUFXLENBQUNVLFdBVk47QUFXbkI7QUFDQUMsUUFBQUEsSUFBSSxFQUFFLEtBQUtDLFdBQUwsQ0FBaUJaLFdBQWpCLEtBQWlDYSxTQVpwQjtBQWFuQkMsUUFBQUEsS0FBSyxFQUFFLEtBQUtDLHVCQUFMLENBQTZCZixXQUE3QjtBQWJZLE9BQWhCLENBQVA7QUFlSDs7O2dDQUVXQSxXLEVBQXlEO0FBQ2pFLGFBQU8sS0FBS2dCLElBQUwsQ0FBVWhCLFdBQVYsRUFBdUIsTUFBdkIsRUFBK0IsSUFBSWlCLDJCQUFKLEVBQS9CLENBQVA7QUFDSDs7OzRDQUV1QmpCLFcsRUFBb0U7QUFDeEYsYUFBTyxLQUFLa0IsVUFBTCxDQUFnQmxCLFdBQWhCLEVBQTZCLE9BQTdCLEVBQXNDLElBQUltQixzQ0FBSixFQUF0QyxDQUFQO0FBQ0g7Ozs7RUF6QitDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0TGlzdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdExpc3QnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL1Byb2R1Y3RMaXN0JztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0TGlzdExpbmVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RMaXN0TGluZSc7XG5pbXBvcnQgUHJvZHVjdExpc3RMaW5lVHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0TGlzdExpbmVUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEocHJvZHVjdExpc3Q6IFByb2R1Y3RMaXN0SW50ZXJmYWNlKTogUHJvZHVjdExpc3Qge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RMaXN0KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0TGlzdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcHJvZHVjdExpc3QuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBwcm9kdWN0TGlzdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBkZWxldGVkQXQ6IHByb2R1Y3RMaXN0LmRlbGV0ZWRBdCxcbiAgICAgICAgICAgIG5hbWU6IHByb2R1Y3RMaXN0Lm5hbWUsXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0TGlzdC5zbHVnLFxuICAgICAgICAgICAgdHlwZTogcHJvZHVjdExpc3QudHlwZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0TGlzdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHB1YmxpYzogcHJvZHVjdExpc3QucHVibGljLFxuICAgICAgICAgICAgc2hhcmluZ1NsdWc6IHByb2R1Y3RMaXN0LnNoYXJpbmdTbHVnLFxuICAgICAgICAgICAgLy8gQmVsb25ncyB0b1xuICAgICAgICAgICAgdXNlcjogdGhpcy5pbmNsdWRlVXNlcihwcm9kdWN0TGlzdCkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgbGluZXM6IHRoaXMuaW5jbHVkZVByb2R1Y3RMaXN0TGluZXMocHJvZHVjdExpc3QpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlcihwcm9kdWN0TGlzdDogUHJvZHVjdExpc3RJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdExpc3QsICd1c2VyJywgbmV3IFVzZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdExpc3RMaW5lcyhwcm9kdWN0TGlzdDogUHJvZHVjdExpc3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0TGlzdExpbmVJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0TGlzdCwgJ2xpbmVzJywgbmV3IFByb2R1Y3RMaXN0TGluZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==