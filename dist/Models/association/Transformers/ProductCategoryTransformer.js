"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductCategory = _interopRequireDefault(require("../ProductCategory"));

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

var ProductCategoryTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductCategoryTransformer, _BaseTransformer);

  var _super = _createSuper(ProductCategoryTransformer);

  function ProductCategoryTransformer() {
    _classCallCheck(this, ProductCategoryTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ProductCategoryTransformer, [{
    key: "mapData",
    value:
    /**
     * Map a product age range response
     *
     * @param productCategory
     */
    function mapData(productCategory) {
      return new _ProductCategory["default"]({
        id: productCategory.id,
        hasPage: productCategory.hasPage,
        slug: productCategory.slug,
        headerDescription: productCategory.headerDescription,
        headerImage: productCategory.headerImage,
        position: productCategory.position,
        associationClass: productCategory.associationClass,
        productsCount: productCategory.productsCount,
        // belongs to
        associated: this.includeAssociated(productCategory),
        // has many
        assets: this.includeAssets(productCategory),
        products: this.includeProducts(productCategory)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productCategory) {
      return this.item(productCategory, 'associated', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeAssets",
    value: function includeAssets(productCategory) {
      return this.collection(productCategory, 'assets', new _AssetTransformer["default"]());
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(productCategory) {
      return this.collection(productCategory, 'products', new _ProductTransformer["default"]());
    }
  }]);

  return ProductCategoryTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductCategoryTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RDYXRlZ29yeVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXRlZ29yeVRyYW5zZm9ybWVyIiwicHJvZHVjdENhdGVnb3J5IiwiUHJvZHVjdENhdGVnb3J5IiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50IiwiYXNzb2NpYXRlZCIsImluY2x1ZGVBc3NvY2lhdGVkIiwiYXNzZXRzIiwiaW5jbHVkZUFzc2V0cyIsInByb2R1Y3RzIiwiaW5jbHVkZVByb2R1Y3RzIiwiaXRlbSIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIkFzc2V0VHJhbnNmb3JtZXIiLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUtBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDBCOzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0kscUJBQVFDLGVBQVIsRUFBb0U7QUFDaEUsYUFBTyxJQUFJQywyQkFBSixDQUFvQjtBQUN2QkMsUUFBQUEsRUFBRSxFQUFFRixlQUFlLENBQUNFLEVBREc7QUFFdkJDLFFBQUFBLE9BQU8sRUFBRUgsZUFBZSxDQUFDRyxPQUZGO0FBR3ZCQyxRQUFBQSxJQUFJLEVBQUVKLGVBQWUsQ0FBQ0ksSUFIQztBQUl2QkMsUUFBQUEsaUJBQWlCLEVBQUVMLGVBQWUsQ0FBQ0ssaUJBSlo7QUFLdkJDLFFBQUFBLFdBQVcsRUFBRU4sZUFBZSxDQUFDTSxXQUxOO0FBTXZCQyxRQUFBQSxRQUFRLEVBQUVQLGVBQWUsQ0FBQ08sUUFOSDtBQU92QkMsUUFBQUEsZ0JBQWdCLEVBQUVSLGVBQWUsQ0FBQ1EsZ0JBUFg7QUFRdkJDLFFBQUFBLGFBQWEsRUFBRVQsZUFBZSxDQUFDUyxhQVJSO0FBU3ZCO0FBQ0FDLFFBQUFBLFVBQVUsRUFBRSxLQUFLQyxpQkFBTCxDQUF1QlgsZUFBdkIsQ0FWVztBQVd2QjtBQUNBWSxRQUFBQSxNQUFNLEVBQUUsS0FBS0MsYUFBTCxDQUFtQmIsZUFBbkIsQ0FaZTtBQWF2QmMsUUFBQUEsUUFBUSxFQUFFLEtBQUtDLGVBQUwsQ0FBcUJmLGVBQXJCO0FBYmEsT0FBcEIsQ0FBUDtBQWVIOzs7V0FFRCwyQkFBa0JBLGVBQWxCLEVBQWlHO0FBQzdGLGFBQU8sS0FBS2dCLElBQUwsQ0FBVWhCLGVBQVYsRUFBMkIsWUFBM0IsRUFBeUMsSUFBSWlCLHlDQUFKLEVBQXpDLENBQVA7QUFDSDs7O1dBRUQsdUJBQWNqQixlQUFkLEVBQWdGO0FBQzVFLGFBQU8sS0FBS2tCLFVBQUwsQ0FBZ0JsQixlQUFoQixFQUFpQyxRQUFqQyxFQUEyQyxJQUFJbUIsNEJBQUosRUFBM0MsQ0FBUDtBQUNIOzs7V0FFRCx5QkFBZ0JuQixlQUFoQixFQUFvRjtBQUNoRixhQUFPLEtBQUtrQixVQUFMLENBQWdCbEIsZUFBaEIsRUFBaUMsVUFBakMsRUFBNkMsSUFBSW9CLDhCQUFKLEVBQTdDLENBQVA7QUFDSDs7OztFQWxDbURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RDYXRlZ29yeSBmcm9tICcuLi9Qcm9kdWN0Q2F0ZWdvcnknO1xuaW1wb3J0IFByb2R1Y3RDYXRlZ29yeUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RDYXRlZ29yeSc7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBBc3NldEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc2V0L0Fzc2V0JztcbmltcG9ydCBBc3NldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Fzc2V0L1RyYW5zZm9ybWVycy9Bc3NldFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdENhdGVnb3J5VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHByb2R1Y3QgYWdlIHJhbmdlIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdENhdGVnb3J5XG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0Q2F0ZWdvcnk6IFByb2R1Y3RDYXRlZ29yeUludGVyZmFjZSk6IFByb2R1Y3RDYXRlZ29yeSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdENhdGVnb3J5KHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0Q2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICBoYXNQYWdlOiBwcm9kdWN0Q2F0ZWdvcnkuaGFzUGFnZSxcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3RDYXRlZ29yeS5zbHVnLFxuICAgICAgICAgICAgaGVhZGVyRGVzY3JpcHRpb246IHByb2R1Y3RDYXRlZ29yeS5oZWFkZXJEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGhlYWRlckltYWdlOiBwcm9kdWN0Q2F0ZWdvcnkuaGVhZGVySW1hZ2UsXG4gICAgICAgICAgICBwb3NpdGlvbjogcHJvZHVjdENhdGVnb3J5LnBvc2l0aW9uLFxuICAgICAgICAgICAgYXNzb2NpYXRpb25DbGFzczogcHJvZHVjdENhdGVnb3J5LmFzc29jaWF0aW9uQ2xhc3MsXG4gICAgICAgICAgICBwcm9kdWN0c0NvdW50OiBwcm9kdWN0Q2F0ZWdvcnkucHJvZHVjdHNDb3VudCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGFzc29jaWF0ZWQ6IHRoaXMuaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdENhdGVnb3J5KSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBhc3NldHM6IHRoaXMuaW5jbHVkZUFzc2V0cyhwcm9kdWN0Q2F0ZWdvcnkpLFxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RDYXRlZ29yeSksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RDYXRlZ29yeTogUHJvZHVjdENhdGVnb3J5SW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdENhdGVnb3J5LCAnYXNzb2NpYXRlZCcsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzZXRzKHByb2R1Y3RDYXRlZ29yeTogUHJvZHVjdENhdGVnb3J5SW50ZXJmYWNlKTogQXJyYXk8QXNzZXRJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0Q2F0ZWdvcnksICdhc3NldHMnLCBuZXcgQXNzZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdENhdGVnb3J5OiBQcm9kdWN0Q2F0ZWdvcnlJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdENhdGVnb3J5LCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==