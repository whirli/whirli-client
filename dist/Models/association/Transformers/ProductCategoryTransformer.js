"use strict";

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProductCategoryTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductCategoryTransformer, _BaseTransformer);

  function ProductCategoryTransformer() {
    _classCallCheck(this, ProductCategoryTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductCategoryTransformer).apply(this, arguments));
  }

  _createClass(ProductCategoryTransformer, [{
    key: "mapData",

    /**
     * Map a product age range response
     *
     * @param productCategory
     */
    value: function mapData(productCategory) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RDYXRlZ29yeVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXRlZ29yeVRyYW5zZm9ybWVyIiwicHJvZHVjdENhdGVnb3J5IiwiUHJvZHVjdENhdGVnb3J5IiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50IiwiYXNzb2NpYXRlZCIsImluY2x1ZGVBc3NvY2lhdGVkIiwiYXNzZXRzIiwiaW5jbHVkZUFzc2V0cyIsInByb2R1Y3RzIiwiaW5jbHVkZVByb2R1Y3RzIiwiaXRlbSIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIkFzc2V0VHJhbnNmb3JtZXIiLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsMEI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsZSxFQUE0RDtBQUNoRSxhQUFPLElBQUlDLDJCQUFKLENBQW9CO0FBQ3ZCQyxRQUFBQSxFQUFFLEVBQUVGLGVBQWUsQ0FBQ0UsRUFERztBQUV2QkMsUUFBQUEsT0FBTyxFQUFFSCxlQUFlLENBQUNHLE9BRkY7QUFHdkJDLFFBQUFBLElBQUksRUFBRUosZUFBZSxDQUFDSSxJQUhDO0FBSXZCQyxRQUFBQSxpQkFBaUIsRUFBRUwsZUFBZSxDQUFDSyxpQkFKWjtBQUt2QkMsUUFBQUEsV0FBVyxFQUFFTixlQUFlLENBQUNNLFdBTE47QUFNdkJDLFFBQUFBLFFBQVEsRUFBRVAsZUFBZSxDQUFDTyxRQU5IO0FBT3ZCQyxRQUFBQSxnQkFBZ0IsRUFBRVIsZUFBZSxDQUFDUSxnQkFQWDtBQVF2QkMsUUFBQUEsYUFBYSxFQUFFVCxlQUFlLENBQUNTLGFBUlI7QUFTdkI7QUFDQUMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCWCxlQUF2QixDQVZXO0FBV3ZCO0FBQ0FZLFFBQUFBLE1BQU0sRUFBRSxLQUFLQyxhQUFMLENBQW1CYixlQUFuQixDQVplO0FBYXZCYyxRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQmYsZUFBckI7QUFiYSxPQUFwQixDQUFQO0FBZUg7OztzQ0FFaUJBLGUsRUFBK0U7QUFDN0YsYUFBTyxLQUFLZ0IsSUFBTCxDQUFVaEIsZUFBVixFQUEyQixZQUEzQixFQUF5QyxJQUFJaUIseUNBQUosRUFBekMsQ0FBUDtBQUNIOzs7a0NBRWFqQixlLEVBQWtFO0FBQzVFLGFBQU8sS0FBS2tCLFVBQUwsQ0FBZ0JsQixlQUFoQixFQUFpQyxRQUFqQyxFQUEyQyxJQUFJbUIsNEJBQUosRUFBM0MsQ0FBUDtBQUNIOzs7b0NBRWVuQixlLEVBQW9FO0FBQ2hGLGFBQU8sS0FBS2tCLFVBQUwsQ0FBZ0JsQixlQUFoQixFQUFpQyxVQUFqQyxFQUE2QyxJQUFJb0IsOEJBQUosRUFBN0MsQ0FBUDtBQUNIOzs7O0VBbENtREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdENhdGVnb3J5IGZyb20gJy4uL1Byb2R1Y3RDYXRlZ29yeSc7XG5pbXBvcnQgUHJvZHVjdENhdGVnb3J5SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdENhdGVnb3J5JztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IEFzc2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXQnO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0Q2F0ZWdvcnlUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgcHJvZHVjdCBhZ2UgcmFuZ2UgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0Q2F0ZWdvcnlcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RDYXRlZ29yeTogUHJvZHVjdENhdGVnb3J5SW50ZXJmYWNlKTogUHJvZHVjdENhdGVnb3J5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0Q2F0ZWdvcnkoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RDYXRlZ29yeS5pZCxcbiAgICAgICAgICAgIGhhc1BhZ2U6IHByb2R1Y3RDYXRlZ29yeS5oYXNQYWdlLFxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdENhdGVnb3J5LnNsdWcsXG4gICAgICAgICAgICBoZWFkZXJEZXNjcmlwdGlvbjogcHJvZHVjdENhdGVnb3J5LmhlYWRlckRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaGVhZGVySW1hZ2U6IHByb2R1Y3RDYXRlZ29yeS5oZWFkZXJJbWFnZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0Q2F0ZWdvcnkucG9zaXRpb24sXG4gICAgICAgICAgICBhc3NvY2lhdGlvbkNsYXNzOiBwcm9kdWN0Q2F0ZWdvcnkuYXNzb2NpYXRpb25DbGFzcyxcbiAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RDYXRlZ29yeS5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0Q2F0ZWdvcnkpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5pbmNsdWRlQXNzZXRzKHByb2R1Y3RDYXRlZ29yeSksXG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdENhdGVnb3J5KSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdENhdGVnb3J5OiBQcm9kdWN0Q2F0ZWdvcnlJbnRlcmZhY2UpOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0Q2F0ZWdvcnksICdhc3NvY2lhdGVkJywgbmV3IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NldHMocHJvZHVjdENhdGVnb3J5OiBQcm9kdWN0Q2F0ZWdvcnlJbnRlcmZhY2UpOiBBcnJheTxBc3NldEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RDYXRlZ29yeSwgJ2Fzc2V0cycsIG5ldyBBc3NldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0Q2F0ZWdvcnk6IFByb2R1Y3RDYXRlZ29yeUludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0Q2F0ZWdvcnksICdwcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19