"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductBrand = _interopRequireDefault(require("../ProductBrand"));

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

var ProductBrandTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductBrandTransformer, _BaseTransformer);

  function ProductBrandTransformer() {
    _classCallCheck(this, ProductBrandTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductBrandTransformer).apply(this, arguments));
  }

  _createClass(ProductBrandTransformer, [{
    key: "mapData",

    /**
     * Map a product age range response
     *
     * @param productBrand
     */
    value: function mapData(productBrand) {
      return new _ProductBrand["default"]({
        id: productBrand.id,
        hasPage: productBrand.hasPage,
        slug: productBrand.slug,
        headerDescription: productBrand.headerDescription,
        headerImage: productBrand.headerImage,
        position: productBrand.position,
        associationClass: productBrand.associationClass,
        productsCount: productBrand.productsCount,
        // belongs to
        associated: this.includeAssociated(productBrand),
        // has many
        assets: this.includeAssets(productBrand),
        products: this.includeProducts(productBrand)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productBrand) {
      return this.item(productBrand, 'associated', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeAssets",
    value: function includeAssets(productBrand) {
      return this.collection(productBrand, 'assets', new _AssetTransformer["default"]());
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(productBrand) {
      return this.collection(productBrand, 'products', new _ProductTransformer["default"]());
    }
  }]);

  return ProductBrandTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductBrandTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RCcmFuZFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RCcmFuZFRyYW5zZm9ybWVyIiwicHJvZHVjdEJyYW5kIiwiUHJvZHVjdEJyYW5kIiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50IiwiYXNzb2NpYXRlZCIsImluY2x1ZGVBc3NvY2lhdGVkIiwiYXNzZXRzIiwiaW5jbHVkZUFzc2V0cyIsInByb2R1Y3RzIiwiaW5jbHVkZVByb2R1Y3RzIiwiaXRlbSIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIkFzc2V0VHJhbnNmb3JtZXIiLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsdUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsWSxFQUFtRDtBQUN2RCxhQUFPLElBQUlDLHdCQUFKLENBQWlCO0FBQ3BCQyxRQUFBQSxFQUFFLEVBQUVGLFlBQVksQ0FBQ0UsRUFERztBQUVwQkMsUUFBQUEsT0FBTyxFQUFFSCxZQUFZLENBQUNHLE9BRkY7QUFHcEJDLFFBQUFBLElBQUksRUFBRUosWUFBWSxDQUFDSSxJQUhDO0FBSXBCQyxRQUFBQSxpQkFBaUIsRUFBRUwsWUFBWSxDQUFDSyxpQkFKWjtBQUtwQkMsUUFBQUEsV0FBVyxFQUFFTixZQUFZLENBQUNNLFdBTE47QUFNcEJDLFFBQUFBLFFBQVEsRUFBRVAsWUFBWSxDQUFDTyxRQU5IO0FBT3BCQyxRQUFBQSxnQkFBZ0IsRUFBRVIsWUFBWSxDQUFDUSxnQkFQWDtBQVFwQkMsUUFBQUEsYUFBYSxFQUFFVCxZQUFZLENBQUNTLGFBUlI7QUFTcEI7QUFDQUMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCWCxZQUF2QixDQVZRO0FBV3BCO0FBQ0FZLFFBQUFBLE1BQU0sRUFBRSxLQUFLQyxhQUFMLENBQW1CYixZQUFuQixDQVpZO0FBYXBCYyxRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQmYsWUFBckI7QUFiVSxPQUFqQixDQUFQO0FBZUg7OztzQ0FFaUJBLFksRUFBeUU7QUFDdkYsYUFBTyxLQUFLZ0IsSUFBTCxDQUFVaEIsWUFBVixFQUF3QixZQUF4QixFQUFzQyxJQUFJaUIseUNBQUosRUFBdEMsQ0FBUDtBQUNIOzs7a0NBRWFqQixZLEVBQTREO0FBQ3RFLGFBQU8sS0FBS2tCLFVBQUwsQ0FBZ0JsQixZQUFoQixFQUE4QixRQUE5QixFQUF3QyxJQUFJbUIsNEJBQUosRUFBeEMsQ0FBUDtBQUNIOzs7b0NBRWVuQixZLEVBQThEO0FBQzFFLGFBQU8sS0FBS2tCLFVBQUwsQ0FBZ0JsQixZQUFoQixFQUE4QixVQUE5QixFQUEwQyxJQUFJb0IsOEJBQUosRUFBMUMsQ0FBUDtBQUNIOzs7O0VBbENnREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdEJyYW5kIGZyb20gJy4uL1Byb2R1Y3RCcmFuZCc7XG5pbXBvcnQgUHJvZHVjdEJyYW5kSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEJyYW5kJztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IEFzc2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXQnO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0QnJhbmRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgcHJvZHVjdCBhZ2UgcmFuZ2UgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0QnJhbmRcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RCcmFuZDogUHJvZHVjdEJyYW5kSW50ZXJmYWNlKTogUHJvZHVjdEJyYW5kIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QnJhbmQoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RCcmFuZC5pZCxcbiAgICAgICAgICAgIGhhc1BhZ2U6IHByb2R1Y3RCcmFuZC5oYXNQYWdlLFxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdEJyYW5kLnNsdWcsXG4gICAgICAgICAgICBoZWFkZXJEZXNjcmlwdGlvbjogcHJvZHVjdEJyYW5kLmhlYWRlckRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaGVhZGVySW1hZ2U6IHByb2R1Y3RCcmFuZC5oZWFkZXJJbWFnZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0QnJhbmQucG9zaXRpb24sXG4gICAgICAgICAgICBhc3NvY2lhdGlvbkNsYXNzOiBwcm9kdWN0QnJhbmQuYXNzb2NpYXRpb25DbGFzcyxcbiAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RCcmFuZC5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0QnJhbmQpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5pbmNsdWRlQXNzZXRzKHByb2R1Y3RCcmFuZCksXG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdEJyYW5kKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdEJyYW5kOiBQcm9kdWN0QnJhbmRJbnRlcmZhY2UpOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0QnJhbmQsICdhc3NvY2lhdGVkJywgbmV3IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NldHMocHJvZHVjdEJyYW5kOiBQcm9kdWN0QnJhbmRJbnRlcmZhY2UpOiBBcnJheTxBc3NldEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RCcmFuZCwgJ2Fzc2V0cycsIG5ldyBBc3NldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0QnJhbmQ6IFByb2R1Y3RCcmFuZEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0QnJhbmQsICdwcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19