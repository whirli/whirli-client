"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Product = _interopRequireDefault(require("../Product"));

var _ProductVariantTransformer = _interopRequireDefault(require("./ProductVariantTransformer"));

var _AssetTransformer = _interopRequireDefault(require("../../asset/Transformers/AssetTransformer"));

var _ProductAssociationTransformer = _interopRequireDefault(require("../../association/Transformers/ProductAssociationTransformer"));

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

var ProductTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductTransformer, _BaseTransformer);

  function ProductTransformer() {
    _classCallCheck(this, ProductTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductTransformer).apply(this, arguments));
  }

  _createClass(ProductTransformer, [{
    key: "mapData",

    /**
     * Map an product response
     *
     * @param product
     */
    value: function mapData(product) {
      return new _Product["default"]({
        id: product.id,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        publishedAt: product.publishedAt,
        name: product.name,
        brand: product.brand,
        tokens: product.tokens,
        features: product.features,
        pageTitle: product.pageTitle,
        popularity: product.popularity,
        description: product.description,
        recentRank: product.recentRank,
        manufacturer: product.manufacturer,
        metaKeywords: product.metaKeywords,
        recommendedAge: product.recommendedAge,
        metaDescription: product.metaDescription,
        shortDescription: product.shortDescription,
        // has many
        assets: this.includeAssets(product),
        productAssociations: this.includeProductAssociations(product),
        productVariants: this.includeProductVariants(product),
        relatedProducts: this.includeRelatedProducts(product)
      });
    }
  }, {
    key: "includeAssets",
    value: function includeAssets(product) {
      return this.collection(product, 'assets', new _AssetTransformer["default"]());
    }
  }, {
    key: "includeProductAssociations",
    value: function includeProductAssociations(product) {
      return this.collection(product, 'productAssociations', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeProductVariants",
    value: function includeProductVariants(product) {
      return this.collection(product, 'productVariants', new _ProductVariantTransformer["default"]());
    }
  }, {
    key: "includeRelatedProducts",
    value: function includeRelatedProducts(product) {
      return this.collection(product, 'relatedProducts', new ProductTransformer());
    }
  }]);

  return ProductTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2Zvcm1lciIsInByb2R1Y3QiLCJQcm9kdWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIm5hbWUiLCJicmFuZCIsInRva2VucyIsImZlYXR1cmVzIiwicGFnZVRpdGxlIiwicG9wdWxhcml0eSIsImRlc2NyaXB0aW9uIiwicmVjZW50UmFuayIsIm1hbnVmYWN0dXJlciIsIm1ldGFLZXl3b3JkcyIsInJlY29tbWVuZGVkQWdlIiwibWV0YURlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsImFzc2V0cyIsImluY2x1ZGVBc3NldHMiLCJwcm9kdWN0QXNzb2NpYXRpb25zIiwiaW5jbHVkZVByb2R1Y3RBc3NvY2lhdGlvbnMiLCJwcm9kdWN0VmFyaWFudHMiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnRzIiwicmVsYXRlZFByb2R1Y3RzIiwiaW5jbHVkZVJlbGF0ZWRQcm9kdWN0cyIsImNvbGxlY3Rpb24iLCJBc3NldFRyYW5zZm9ybWVyIiwiUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIiLCJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLE8sRUFBb0M7QUFDeEMsYUFBTyxJQUFJQyxtQkFBSixDQUFZO0FBQ2ZDLFFBQUFBLEVBQUUsRUFBRUYsT0FBTyxDQUFDRSxFQURHO0FBRWZDLFFBQUFBLFNBQVMsRUFBRUgsT0FBTyxDQUFDRyxTQUZKO0FBR2ZDLFFBQUFBLFNBQVMsRUFBRUosT0FBTyxDQUFDSSxTQUhKO0FBSWZDLFFBQUFBLFdBQVcsRUFBRUwsT0FBTyxDQUFDSyxXQUpOO0FBS2ZDLFFBQUFBLElBQUksRUFBRU4sT0FBTyxDQUFDTSxJQUxDO0FBTWZDLFFBQUFBLEtBQUssRUFBRVAsT0FBTyxDQUFDTyxLQU5BO0FBT2ZDLFFBQUFBLE1BQU0sRUFBRVIsT0FBTyxDQUFDUSxNQVBEO0FBUWZDLFFBQUFBLFFBQVEsRUFBRVQsT0FBTyxDQUFDUyxRQVJIO0FBU2ZDLFFBQUFBLFNBQVMsRUFBRVYsT0FBTyxDQUFDVSxTQVRKO0FBVWZDLFFBQUFBLFVBQVUsRUFBRVgsT0FBTyxDQUFDVyxVQVZMO0FBV2ZDLFFBQUFBLFdBQVcsRUFBRVosT0FBTyxDQUFDWSxXQVhOO0FBWWZDLFFBQUFBLFVBQVUsRUFBRWIsT0FBTyxDQUFDYSxVQVpMO0FBYWZDLFFBQUFBLFlBQVksRUFBRWQsT0FBTyxDQUFDYyxZQWJQO0FBY2ZDLFFBQUFBLFlBQVksRUFBRWYsT0FBTyxDQUFDZSxZQWRQO0FBZWZDLFFBQUFBLGNBQWMsRUFBRWhCLE9BQU8sQ0FBQ2dCLGNBZlQ7QUFnQmZDLFFBQUFBLGVBQWUsRUFBRWpCLE9BQU8sQ0FBQ2lCLGVBaEJWO0FBaUJmQyxRQUFBQSxnQkFBZ0IsRUFBRWxCLE9BQU8sQ0FBQ2tCLGdCQWpCWDtBQWtCZjtBQUNBQyxRQUFBQSxNQUFNLEVBQUUsS0FBS0MsYUFBTCxDQUFtQnBCLE9BQW5CLENBbkJPO0FBb0JmcUIsUUFBQUEsbUJBQW1CLEVBQUUsS0FBS0MsMEJBQUwsQ0FBZ0N0QixPQUFoQyxDQXBCTjtBQXFCZnVCLFFBQUFBLGVBQWUsRUFBRSxLQUFLQyxzQkFBTCxDQUE0QnhCLE9BQTVCLENBckJGO0FBc0JmeUIsUUFBQUEsZUFBZSxFQUFFLEtBQUtDLHNCQUFMLENBQTRCMUIsT0FBNUI7QUF0QkYsT0FBWixDQUFQO0FBd0JIOzs7a0NBRWFBLE8sRUFBeUM7QUFDbkQsYUFBTyxLQUFLMkIsVUFBTCxDQUFnQjNCLE9BQWhCLEVBQXlCLFFBQXpCLEVBQW1DLElBQUk0Qiw0QkFBSixFQUFuQyxDQUFQO0FBQ0g7OzsrQ0FFMEI1QixPLEVBQXNEO0FBQzdFLGFBQU8sS0FBSzJCLFVBQUwsQ0FBZ0IzQixPQUFoQixFQUF5QixxQkFBekIsRUFBZ0QsSUFBSTZCLHlDQUFKLEVBQWhELENBQVA7QUFDSDs7OzJDQUVzQjdCLE8sRUFBa0Q7QUFDckUsYUFBTyxLQUFLMkIsVUFBTCxDQUFnQjNCLE9BQWhCLEVBQXlCLGlCQUF6QixFQUE0QyxJQUFJOEIscUNBQUosRUFBNUMsQ0FBUDtBQUNIOzs7MkNBRXNCOUIsTyxFQUEyQztBQUM5RCxhQUFPLEtBQUsyQixVQUFMLENBQWdCM0IsT0FBaEIsRUFBeUIsaUJBQXpCLEVBQTRDLElBQUlELGtCQUFKLEVBQTVDLENBQVA7QUFDSDs7OztFQS9DMkNnQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0IGZyb20gJy4uL1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50IGZyb20gJy4uL1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBBc3NldCBmcm9tICcuLi8uLi9hc3NldC9Bc3NldCc7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uIGZyb20gJy4uLy4uL2Fzc29jaWF0aW9uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciBmcm9tICcuL1Byb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Fzc29jaWF0aW9uL1RyYW5zZm9ybWVycy9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHByb2R1Y3QgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0XG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogUHJvZHVjdCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdCh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcHJvZHVjdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHByb2R1Y3QudXBkYXRlZEF0LFxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IHByb2R1Y3QucHVibGlzaGVkQXQsXG4gICAgICAgICAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXG4gICAgICAgICAgICBicmFuZDogcHJvZHVjdC5icmFuZCxcbiAgICAgICAgICAgIHRva2VuczogcHJvZHVjdC50b2tlbnMsXG4gICAgICAgICAgICBmZWF0dXJlczogcHJvZHVjdC5mZWF0dXJlcyxcbiAgICAgICAgICAgIHBhZ2VUaXRsZTogcHJvZHVjdC5wYWdlVGl0bGUsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiBwcm9kdWN0LnBvcHVsYXJpdHksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvZHVjdC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlY2VudFJhbms6IHByb2R1Y3QucmVjZW50UmFuayxcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlcjogcHJvZHVjdC5tYW51ZmFjdHVyZXIsXG4gICAgICAgICAgICBtZXRhS2V5d29yZHM6IHByb2R1Y3QubWV0YUtleXdvcmRzLFxuICAgICAgICAgICAgcmVjb21tZW5kZWRBZ2U6IHByb2R1Y3QucmVjb21tZW5kZWRBZ2UsXG4gICAgICAgICAgICBtZXRhRGVzY3JpcHRpb246IHByb2R1Y3QubWV0YURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgc2hvcnREZXNjcmlwdGlvbjogcHJvZHVjdC5zaG9ydERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5pbmNsdWRlQXNzZXRzKHByb2R1Y3QpLFxuICAgICAgICAgICAgcHJvZHVjdEFzc29jaWF0aW9uczogdGhpcy5pbmNsdWRlUHJvZHVjdEFzc29jaWF0aW9ucyhwcm9kdWN0KSxcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50czogdGhpcy5pbmNsdWRlUHJvZHVjdFZhcmlhbnRzKHByb2R1Y3QpLFxuICAgICAgICAgICAgcmVsYXRlZFByb2R1Y3RzOiB0aGlzLmluY2x1ZGVSZWxhdGVkUHJvZHVjdHMocHJvZHVjdCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NldHMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PEFzc2V0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ2Fzc2V0cycsIG5ldyBBc3NldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0QXNzb2NpYXRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAncHJvZHVjdEFzc29jaWF0aW9ucycsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdFZhcmlhbnRzKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0VmFyaWFudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICdwcm9kdWN0VmFyaWFudHMnLCBuZXcgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmVsYXRlZFByb2R1Y3RzKHByb2R1Y3Q6IFByb2R1Y3RJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ3JlbGF0ZWRQcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19