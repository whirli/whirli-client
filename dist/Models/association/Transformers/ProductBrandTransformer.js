"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductBrand = _interopRequireDefault(require("../ProductBrand"));

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
        products: this.includeProducts(productBrand)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productBrand) {
      return this.item(productBrand, 'associated', new _ProductAssociationTransformer["default"]());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RCcmFuZFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RCcmFuZFRyYW5zZm9ybWVyIiwicHJvZHVjdEJyYW5kIiwiUHJvZHVjdEJyYW5kIiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50IiwiYXNzb2NpYXRlZCIsImluY2x1ZGVBc3NvY2lhdGVkIiwicHJvZHVjdHMiLCJpbmNsdWRlUHJvZHVjdHMiLCJpdGVtIiwiUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHVCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFksRUFBbUQ7QUFDdkQsYUFBTyxJQUFJQyx3QkFBSixDQUFpQjtBQUNwQkMsUUFBQUEsRUFBRSxFQUFFRixZQUFZLENBQUNFLEVBREc7QUFFcEJDLFFBQUFBLE9BQU8sRUFBRUgsWUFBWSxDQUFDRyxPQUZGO0FBR3BCQyxRQUFBQSxJQUFJLEVBQUVKLFlBQVksQ0FBQ0ksSUFIQztBQUlwQkMsUUFBQUEsaUJBQWlCLEVBQUVMLFlBQVksQ0FBQ0ssaUJBSlo7QUFLcEJDLFFBQUFBLFdBQVcsRUFBRU4sWUFBWSxDQUFDTSxXQUxOO0FBTXBCQyxRQUFBQSxRQUFRLEVBQUVQLFlBQVksQ0FBQ08sUUFOSDtBQU9wQkMsUUFBQUEsZ0JBQWdCLEVBQUVSLFlBQVksQ0FBQ1EsZ0JBUFg7QUFRcEJDLFFBQUFBLGFBQWEsRUFBRVQsWUFBWSxDQUFDUyxhQVJSO0FBU3BCO0FBQ0FDLFFBQUFBLFVBQVUsRUFBRSxLQUFLQyxpQkFBTCxDQUF1QlgsWUFBdkIsQ0FWUTtBQVdwQjtBQUNBWSxRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQmIsWUFBckI7QUFaVSxPQUFqQixDQUFQO0FBY0g7OztzQ0FFaUJBLFksRUFBeUU7QUFDdkYsYUFBTyxLQUFLYyxJQUFMLENBQVVkLFlBQVYsRUFBd0IsWUFBeEIsRUFBc0MsSUFBSWUseUNBQUosRUFBdEMsQ0FBUDtBQUNIOzs7b0NBRWVmLFksRUFBOEQ7QUFDMUUsYUFBTyxLQUFLZ0IsVUFBTCxDQUFnQmhCLFlBQWhCLEVBQThCLFVBQTlCLEVBQTBDLElBQUlpQiw4QkFBSixFQUExQyxDQUFQO0FBQ0g7Ozs7RUE3QmdEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0QnJhbmQgZnJvbSAnLi4vUHJvZHVjdEJyYW5kJztcbmltcG9ydCBQcm9kdWN0QnJhbmRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QnJhbmQnO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RCcmFuZFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBwcm9kdWN0IGFnZSByYW5nZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RCcmFuZFxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdEJyYW5kOiBQcm9kdWN0QnJhbmRJbnRlcmZhY2UpOiBQcm9kdWN0QnJhbmQge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RCcmFuZCh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdEJyYW5kLmlkLFxuICAgICAgICAgICAgaGFzUGFnZTogcHJvZHVjdEJyYW5kLmhhc1BhZ2UsXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0QnJhbmQuc2x1ZyxcbiAgICAgICAgICAgIGhlYWRlckRlc2NyaXB0aW9uOiBwcm9kdWN0QnJhbmQuaGVhZGVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBoZWFkZXJJbWFnZTogcHJvZHVjdEJyYW5kLmhlYWRlckltYWdlLFxuICAgICAgICAgICAgcG9zaXRpb246IHByb2R1Y3RCcmFuZC5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RCcmFuZC5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdEJyYW5kLnByb2R1Y3RzQ291bnQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBhc3NvY2lhdGVkOiB0aGlzLmluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RCcmFuZCksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RCcmFuZCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RCcmFuZDogUHJvZHVjdEJyYW5kSW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdEJyYW5kLCAnYXNzb2NpYXRlZCcsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdEJyYW5kOiBQcm9kdWN0QnJhbmRJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdEJyYW5kLCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==