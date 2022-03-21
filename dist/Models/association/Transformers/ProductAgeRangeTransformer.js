"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductAgeRange = _interopRequireDefault(require("../ProductAgeRange"));

var _AssetTransformer = _interopRequireDefault(require("../../asset/Transformers/AssetTransformer"));

var _ProductTransformer = _interopRequireDefault(require("../../product/Transformers/ProductTransformer"));

var _ProductAssociationTransformer = _interopRequireDefault(require("./ProductAssociationTransformer"));

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

var ProductAgeRangeTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductAgeRangeTransformer, _BaseTransformer);

  var _super = _createSuper(ProductAgeRangeTransformer);

  function ProductAgeRangeTransformer() {
    _classCallCheck(this, ProductAgeRangeTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ProductAgeRangeTransformer, [{
    key: "mapData",
    value:
    /**
     * Map a product age range response
     *
     * @param productAgeRange
     */
    function mapData(productAgeRange) {
      return new _ProductAgeRange["default"]({
        id: productAgeRange.id,
        hasPage: productAgeRange.hasPage,
        slug: productAgeRange.slug,
        headerDescription: productAgeRange.headerDescription,
        headerImage: productAgeRange.headerImage,
        position: productAgeRange.position,
        associationClass: productAgeRange.associationClass,
        productsCount: productAgeRange.productsCount,
        ageGroup: productAgeRange.ageGroup,
        // belongs to
        associated: this.includeAssociated(productAgeRange),
        // has many
        assets: this.includeAssets(productAgeRange),
        products: this.includeProducts(productAgeRange)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productAgeRange) {
      return this.item(productAgeRange, 'associated', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeAssets",
    value: function includeAssets(productAgeRange) {
      return this.collection(productAgeRange, 'assets', new _AssetTransformer["default"]());
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(productAgeRange) {
      return this.collection(productAgeRange, 'products', new _ProductTransformer["default"]());
    }
  }]);

  return ProductAgeRangeTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductAgeRangeTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RBZ2VSYW5nZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RBZ2VSYW5nZVRyYW5zZm9ybWVyIiwicHJvZHVjdEFnZVJhbmdlIiwiUHJvZHVjdEFnZVJhbmdlIiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50IiwiYWdlR3JvdXAiLCJhc3NvY2lhdGVkIiwiaW5jbHVkZUFzc29jaWF0ZWQiLCJhc3NldHMiLCJpbmNsdWRlQXNzZXRzIiwicHJvZHVjdHMiLCJpbmNsdWRlUHJvZHVjdHMiLCJpdGVtIiwiUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiQXNzZXRUcmFuc2Zvcm1lciIsIlByb2R1Y3RUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsMEI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSSxxQkFBUUMsZUFBUixFQUFvRTtBQUNoRSxhQUFPLElBQUlDLDJCQUFKLENBQW9CO0FBQ3ZCQyxRQUFBQSxFQUFFLEVBQUVGLGVBQWUsQ0FBQ0UsRUFERztBQUV2QkMsUUFBQUEsT0FBTyxFQUFFSCxlQUFlLENBQUNHLE9BRkY7QUFHdkJDLFFBQUFBLElBQUksRUFBRUosZUFBZSxDQUFDSSxJQUhDO0FBSXZCQyxRQUFBQSxpQkFBaUIsRUFBRUwsZUFBZSxDQUFDSyxpQkFKWjtBQUt2QkMsUUFBQUEsV0FBVyxFQUFFTixlQUFlLENBQUNNLFdBTE47QUFNdkJDLFFBQUFBLFFBQVEsRUFBRVAsZUFBZSxDQUFDTyxRQU5IO0FBT3ZCQyxRQUFBQSxnQkFBZ0IsRUFBRVIsZUFBZSxDQUFDUSxnQkFQWDtBQVF2QkMsUUFBQUEsYUFBYSxFQUFFVCxlQUFlLENBQUNTLGFBUlI7QUFTdkJDLFFBQUFBLFFBQVEsRUFBRVYsZUFBZSxDQUFDVSxRQVRIO0FBVXZCO0FBQ0FDLFFBQUFBLFVBQVUsRUFBRSxLQUFLQyxpQkFBTCxDQUF1QlosZUFBdkIsQ0FYVztBQVl2QjtBQUNBYSxRQUFBQSxNQUFNLEVBQUUsS0FBS0MsYUFBTCxDQUFtQmQsZUFBbkIsQ0FiZTtBQWN2QmUsUUFBQUEsUUFBUSxFQUFFLEtBQUtDLGVBQUwsQ0FBcUJoQixlQUFyQjtBQWRhLE9BQXBCLENBQVA7QUFnQkg7OztXQUVELDJCQUFrQkEsZUFBbEIsRUFBaUc7QUFDN0YsYUFBTyxLQUFLaUIsSUFBTCxDQUFVakIsZUFBVixFQUEyQixZQUEzQixFQUF5QyxJQUFJa0IseUNBQUosRUFBekMsQ0FBUDtBQUNIOzs7V0FFRCx1QkFBY2xCLGVBQWQsRUFBZ0Y7QUFDNUUsYUFBTyxLQUFLbUIsVUFBTCxDQUFnQm5CLGVBQWhCLEVBQWlDLFFBQWpDLEVBQTJDLElBQUlvQiw0QkFBSixFQUEzQyxDQUFQO0FBQ0g7OztXQUVELHlCQUFnQnBCLGVBQWhCLEVBQW9GO0FBQ2hGLGFBQU8sS0FBS21CLFVBQUwsQ0FBZ0JuQixlQUFoQixFQUFpQyxVQUFqQyxFQUE2QyxJQUFJcUIsOEJBQUosRUFBN0MsQ0FBUDtBQUNIOzs7O0VBbkNtREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdEFnZVJhbmdlIGZyb20gJy4uL1Byb2R1Y3RBZ2VSYW5nZSc7XG5pbXBvcnQgUHJvZHVjdEFnZVJhbmdlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEFnZVJhbmdlJztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IEFzc2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXQnO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0QWdlUmFuZ2VUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgcHJvZHVjdCBhZ2UgcmFuZ2UgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0QWdlUmFuZ2VcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RBZ2VSYW5nZTogUHJvZHVjdEFnZVJhbmdlSW50ZXJmYWNlKTogUHJvZHVjdEFnZVJhbmdlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWdlUmFuZ2Uoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RBZ2VSYW5nZS5pZCxcbiAgICAgICAgICAgIGhhc1BhZ2U6IHByb2R1Y3RBZ2VSYW5nZS5oYXNQYWdlLFxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdEFnZVJhbmdlLnNsdWcsXG4gICAgICAgICAgICBoZWFkZXJEZXNjcmlwdGlvbjogcHJvZHVjdEFnZVJhbmdlLmhlYWRlckRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaGVhZGVySW1hZ2U6IHByb2R1Y3RBZ2VSYW5nZS5oZWFkZXJJbWFnZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0QWdlUmFuZ2UucG9zaXRpb24sXG4gICAgICAgICAgICBhc3NvY2lhdGlvbkNsYXNzOiBwcm9kdWN0QWdlUmFuZ2UuYXNzb2NpYXRpb25DbGFzcyxcbiAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RBZ2VSYW5nZS5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgYWdlR3JvdXA6IHByb2R1Y3RBZ2VSYW5nZS5hZ2VHcm91cCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGFzc29jaWF0ZWQ6IHRoaXMuaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdEFnZVJhbmdlKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBhc3NldHM6IHRoaXMuaW5jbHVkZUFzc2V0cyhwcm9kdWN0QWdlUmFuZ2UpLFxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RBZ2VSYW5nZSksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RBZ2VSYW5nZTogUHJvZHVjdEFnZVJhbmdlSW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdEFnZVJhbmdlLCAnYXNzb2NpYXRlZCcsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzZXRzKHByb2R1Y3RBZ2VSYW5nZTogUHJvZHVjdEFnZVJhbmdlSW50ZXJmYWNlKTogQXJyYXk8QXNzZXRJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0QWdlUmFuZ2UsICdhc3NldHMnLCBuZXcgQXNzZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdEFnZVJhbmdlOiBQcm9kdWN0QWdlUmFuZ2VJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdEFnZVJhbmdlLCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==