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
        resourceType: product.resourceType,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RUcmFuc2Zvcm1lciIsInByb2R1Y3QiLCJQcm9kdWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwdWJsaXNoZWRBdCIsIm5hbWUiLCJicmFuZCIsInRva2VucyIsImZlYXR1cmVzIiwicGFnZVRpdGxlIiwicG9wdWxhcml0eSIsImRlc2NyaXB0aW9uIiwicmVjZW50UmFuayIsIm1hbnVmYWN0dXJlciIsIm1ldGFLZXl3b3JkcyIsInJlY29tbWVuZGVkQWdlIiwibWV0YURlc2NyaXB0aW9uIiwic2hvcnREZXNjcmlwdGlvbiIsInJlc291cmNlVHlwZSIsImFzc2V0cyIsImluY2x1ZGVBc3NldHMiLCJwcm9kdWN0QXNzb2NpYXRpb25zIiwiaW5jbHVkZVByb2R1Y3RBc3NvY2lhdGlvbnMiLCJwcm9kdWN0VmFyaWFudHMiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnRzIiwicmVsYXRlZFByb2R1Y3RzIiwiaW5jbHVkZVJlbGF0ZWRQcm9kdWN0cyIsImNvbGxlY3Rpb24iLCJBc3NldFRyYW5zZm9ybWVyIiwiUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIiLCJQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGtCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLE8sRUFBb0M7QUFDeEMsYUFBTyxJQUFJQyxtQkFBSixDQUFZO0FBQ2ZDLFFBQUFBLEVBQUUsRUFBRUYsT0FBTyxDQUFDRSxFQURHO0FBRWZDLFFBQUFBLFNBQVMsRUFBRUgsT0FBTyxDQUFDRyxTQUZKO0FBR2ZDLFFBQUFBLFNBQVMsRUFBRUosT0FBTyxDQUFDSSxTQUhKO0FBSWZDLFFBQUFBLFdBQVcsRUFBRUwsT0FBTyxDQUFDSyxXQUpOO0FBS2ZDLFFBQUFBLElBQUksRUFBRU4sT0FBTyxDQUFDTSxJQUxDO0FBTWZDLFFBQUFBLEtBQUssRUFBRVAsT0FBTyxDQUFDTyxLQU5BO0FBT2ZDLFFBQUFBLE1BQU0sRUFBRVIsT0FBTyxDQUFDUSxNQVBEO0FBUWZDLFFBQUFBLFFBQVEsRUFBRVQsT0FBTyxDQUFDUyxRQVJIO0FBU2ZDLFFBQUFBLFNBQVMsRUFBRVYsT0FBTyxDQUFDVSxTQVRKO0FBVWZDLFFBQUFBLFVBQVUsRUFBRVgsT0FBTyxDQUFDVyxVQVZMO0FBV2ZDLFFBQUFBLFdBQVcsRUFBRVosT0FBTyxDQUFDWSxXQVhOO0FBWWZDLFFBQUFBLFVBQVUsRUFBRWIsT0FBTyxDQUFDYSxVQVpMO0FBYWZDLFFBQUFBLFlBQVksRUFBRWQsT0FBTyxDQUFDYyxZQWJQO0FBY2ZDLFFBQUFBLFlBQVksRUFBRWYsT0FBTyxDQUFDZSxZQWRQO0FBZWZDLFFBQUFBLGNBQWMsRUFBRWhCLE9BQU8sQ0FBQ2dCLGNBZlQ7QUFnQmZDLFFBQUFBLGVBQWUsRUFBRWpCLE9BQU8sQ0FBQ2lCLGVBaEJWO0FBaUJmQyxRQUFBQSxnQkFBZ0IsRUFBRWxCLE9BQU8sQ0FBQ2tCLGdCQWpCWDtBQWtCZkMsUUFBQUEsWUFBWSxFQUFFbkIsT0FBTyxDQUFDbUIsWUFsQlA7QUFtQmY7QUFDQUMsUUFBQUEsTUFBTSxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJyQixPQUFuQixDQXBCTztBQXFCZnNCLFFBQUFBLG1CQUFtQixFQUFFLEtBQUtDLDBCQUFMLENBQWdDdkIsT0FBaEMsQ0FyQk47QUFzQmZ3QixRQUFBQSxlQUFlLEVBQUUsS0FBS0Msc0JBQUwsQ0FBNEJ6QixPQUE1QixDQXRCRjtBQXVCZjBCLFFBQUFBLGVBQWUsRUFBRSxLQUFLQyxzQkFBTCxDQUE0QjNCLE9BQTVCO0FBdkJGLE9BQVosQ0FBUDtBQXlCSDs7O2tDQUVhQSxPLEVBQXlDO0FBQ25ELGFBQU8sS0FBSzRCLFVBQUwsQ0FBZ0I1QixPQUFoQixFQUF5QixRQUF6QixFQUFtQyxJQUFJNkIsNEJBQUosRUFBbkMsQ0FBUDtBQUNIOzs7K0NBRTBCN0IsTyxFQUFzRDtBQUM3RSxhQUFPLEtBQUs0QixVQUFMLENBQWdCNUIsT0FBaEIsRUFBeUIscUJBQXpCLEVBQWdELElBQUk4Qix5Q0FBSixFQUFoRCxDQUFQO0FBQ0g7OzsyQ0FFc0I5QixPLEVBQWtEO0FBQ3JFLGFBQU8sS0FBSzRCLFVBQUwsQ0FBZ0I1QixPQUFoQixFQUF5QixpQkFBekIsRUFBNEMsSUFBSStCLHFDQUFKLEVBQTVDLENBQVA7QUFDSDs7OzJDQUVzQi9CLE8sRUFBMkM7QUFDOUQsYUFBTyxLQUFLNEIsVUFBTCxDQUFnQjVCLE9BQWhCLEVBQXlCLGlCQUF6QixFQUE0QyxJQUFJRCxrQkFBSixFQUE1QyxDQUFQO0FBQ0g7Ozs7RUFoRDJDaUMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdCBmcm9tICcuLi9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudCBmcm9tICcuLi9Qcm9kdWN0VmFyaWFudCc7XG5pbXBvcnQgQXNzZXQgZnJvbSAnLi4vLi4vYXNzZXQvQXNzZXQnO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbiBmcm9tICcuLi8uLi9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyJztcbmltcG9ydCBBc3NldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Fzc2V0L1RyYW5zZm9ybWVycy9Bc3NldFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hc3NvY2lhdGlvbi9UcmFuc2Zvcm1lcnMvUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBwcm9kdWN0IHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdFxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IFByb2R1Y3Qge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3Qoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBwcm9kdWN0LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHB1Ymxpc2hlZEF0OiBwcm9kdWN0LnB1Ymxpc2hlZEF0LFxuICAgICAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICAgICAgYnJhbmQ6IHByb2R1Y3QuYnJhbmQsXG4gICAgICAgICAgICB0b2tlbnM6IHByb2R1Y3QudG9rZW5zLFxuICAgICAgICAgICAgZmVhdHVyZXM6IHByb2R1Y3QuZmVhdHVyZXMsXG4gICAgICAgICAgICBwYWdlVGl0bGU6IHByb2R1Y3QucGFnZVRpdGxlLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogcHJvZHVjdC5wb3B1bGFyaXR5LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZWNlbnRSYW5rOiBwcm9kdWN0LnJlY2VudFJhbmssXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXI6IHByb2R1Y3QubWFudWZhY3R1cmVyLFxuICAgICAgICAgICAgbWV0YUtleXdvcmRzOiBwcm9kdWN0Lm1ldGFLZXl3b3JkcyxcbiAgICAgICAgICAgIHJlY29tbWVuZGVkQWdlOiBwcm9kdWN0LnJlY29tbWVuZGVkQWdlLFxuICAgICAgICAgICAgbWV0YURlc2NyaXB0aW9uOiBwcm9kdWN0Lm1ldGFEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHNob3J0RGVzY3JpcHRpb246IHByb2R1Y3Quc2hvcnREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogcHJvZHVjdC5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgYXNzZXRzOiB0aGlzLmluY2x1ZGVBc3NldHMocHJvZHVjdCksXG4gICAgICAgICAgICBwcm9kdWN0QXNzb2NpYXRpb25zOiB0aGlzLmluY2x1ZGVQcm9kdWN0QXNzb2NpYXRpb25zKHByb2R1Y3QpLFxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnRzOiB0aGlzLmluY2x1ZGVQcm9kdWN0VmFyaWFudHMocHJvZHVjdCksXG4gICAgICAgICAgICByZWxhdGVkUHJvZHVjdHM6IHRoaXMuaW5jbHVkZVJlbGF0ZWRQcm9kdWN0cyhwcm9kdWN0KSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2V0cyhwcm9kdWN0OiBQcm9kdWN0SW50ZXJmYWNlKTogQXJyYXk8QXNzZXQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAnYXNzZXRzJywgbmV3IEFzc2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RBc3NvY2lhdGlvbnMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RBc3NvY2lhdGlvbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3QsICdwcm9kdWN0QXNzb2NpYXRpb25zJywgbmV3IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0VmFyaWFudHMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RWYXJpYW50PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdCwgJ3Byb2R1Y3RWYXJpYW50cycsIG5ldyBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZWxhdGVkUHJvZHVjdHMocHJvZHVjdDogUHJvZHVjdEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0LCAncmVsYXRlZFByb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=