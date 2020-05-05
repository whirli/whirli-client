"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductAssociation = _interopRequireDefault(require("../ProductAssociation"));

var _ProductTransformer = _interopRequireDefault(require("../../product/Transformers/ProductTransformer"));

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

var ProductAssociationTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductAssociationTransformer, _BaseTransformer);

  function ProductAssociationTransformer() {
    _classCallCheck(this, ProductAssociationTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductAssociationTransformer).apply(this, arguments));
  }

  _createClass(ProductAssociationTransformer, [{
    key: "mapData",

    /**
     * Map a product-association response
     *
     * @param productAssociation
     */
    value: function mapData(productAssociation) {
      return new _ProductAssociation["default"]({
        id: productAssociation.id,
        name: productAssociation.name,
        active: productAssociation.active,
        position: productAssociation.position,
        associationClass: productAssociation.associationClass,
        productsCount: productAssociation.productsCount,
        association: productAssociation.association,
        // has many
        products: this.includeProducts(productAssociation)
      });
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(productAssociation) {
      return this.collection(productAssociation, 'products', new _ProductTransformer["default"]());
    }
  }]);

  return ProductAssociationTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductAssociationTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIiLCJwcm9kdWN0QXNzb2NpYXRpb24iLCJQcm9kdWN0QXNzb2NpYXRpb24iLCJpZCIsIm5hbWUiLCJhY3RpdmUiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50IiwiYXNzb2NpYXRpb24iLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsImNvbGxlY3Rpb24iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsNkI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsa0IsRUFBcUU7QUFDekUsYUFBTyxJQUFJQyw4QkFBSixDQUF1QjtBQUMxQkMsUUFBQUEsRUFBRSxFQUFFRixrQkFBa0IsQ0FBQ0UsRUFERztBQUUxQkMsUUFBQUEsSUFBSSxFQUFFSCxrQkFBa0IsQ0FBQ0csSUFGQztBQUcxQkMsUUFBQUEsTUFBTSxFQUFFSixrQkFBa0IsQ0FBQ0ksTUFIRDtBQUkxQkMsUUFBQUEsUUFBUSxFQUFFTCxrQkFBa0IsQ0FBQ0ssUUFKSDtBQUsxQkMsUUFBQUEsZ0JBQWdCLEVBQUVOLGtCQUFrQixDQUFDTSxnQkFMWDtBQU0xQkMsUUFBQUEsYUFBYSxFQUFFUCxrQkFBa0IsQ0FBQ08sYUFOUjtBQU8xQkMsUUFBQUEsV0FBVyxFQUFFUixrQkFBa0IsQ0FBQ1EsV0FQTjtBQVExQjtBQUNBQyxRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQlYsa0JBQXJCO0FBVGdCLE9BQXZCLENBQVA7QUFXSDs7O29DQUVlQSxrQixFQUEwRTtBQUN0RixhQUFPLEtBQUtXLFVBQUwsQ0FBZ0JYLGtCQUFoQixFQUFvQyxVQUFwQyxFQUFnRCxJQUFJWSw4QkFBSixFQUFoRCxDQUFQO0FBQ0g7Ozs7RUF0QnNEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb24gZnJvbSAnLi4vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBwcm9kdWN0LWFzc29jaWF0aW9uIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdEFzc29jaWF0aW9uXG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0QXNzb2NpYXRpb246IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSk6IFByb2R1Y3RBc3NvY2lhdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFzc29jaWF0aW9uKHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0QXNzb2NpYXRpb24uaWQsXG4gICAgICAgICAgICBuYW1lOiBwcm9kdWN0QXNzb2NpYXRpb24ubmFtZSxcbiAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEFzc29jaWF0aW9uLmFjdGl2ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0QXNzb2NpYXRpb24ucG9zaXRpb24sXG4gICAgICAgICAgICBhc3NvY2lhdGlvbkNsYXNzOiBwcm9kdWN0QXNzb2NpYXRpb24uYXNzb2NpYXRpb25DbGFzcyxcbiAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RBc3NvY2lhdGlvbi5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgYXNzb2NpYXRpb246IHByb2R1Y3RBc3NvY2lhdGlvbi5hc3NvY2lhdGlvbixcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdEFzc29jaWF0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RBc3NvY2lhdGlvbjogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RBc3NvY2lhdGlvbiwgJ3Byb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=