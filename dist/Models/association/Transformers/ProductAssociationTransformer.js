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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwicHJvZHVjdEFzc29jaWF0aW9uIiwiUHJvZHVjdEFzc29jaWF0aW9uIiwiaWQiLCJuYW1lIiwiYWN0aXZlIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsImFzc29jaWF0aW9uIiwicHJvZHVjdHMiLCJpbmNsdWRlUHJvZHVjdHMiLCJjb2xsZWN0aW9uIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDZCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLGtCLEVBQXFFO0FBQ3pFLGFBQU8sSUFBSUMsOEJBQUosQ0FBdUI7QUFDMUJDLFFBQUFBLEVBQUUsRUFBRUYsa0JBQWtCLENBQUNFLEVBREc7QUFFMUJDLFFBQUFBLElBQUksRUFBRUgsa0JBQWtCLENBQUNHLElBRkM7QUFHMUJDLFFBQUFBLE1BQU0sRUFBRUosa0JBQWtCLENBQUNJLE1BSEQ7QUFJMUJDLFFBQUFBLFFBQVEsRUFBRUwsa0JBQWtCLENBQUNLLFFBSkg7QUFLMUJDLFFBQUFBLGdCQUFnQixFQUFFTixrQkFBa0IsQ0FBQ00sZ0JBTFg7QUFNMUJDLFFBQUFBLGFBQWEsRUFBRVAsa0JBQWtCLENBQUNPLGFBTlI7QUFPMUJDLFFBQUFBLFdBQVcsRUFBRVIsa0JBQWtCLENBQUNRLFdBUE47QUFRMUI7QUFDQUMsUUFBQUEsUUFBUSxFQUFFLEtBQUtDLGVBQUwsQ0FBcUJWLGtCQUFyQjtBQVRnQixPQUF2QixDQUFQO0FBV0g7OztvQ0FFZUEsa0IsRUFBMEU7QUFDdEYsYUFBTyxLQUFLVyxVQUFMLENBQWdCWCxrQkFBaEIsRUFBb0MsVUFBcEMsRUFBZ0QsSUFBSVksOEJBQUosRUFBaEQsQ0FBUDtBQUNIOzs7O0VBdEJzREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uIGZyb20gJy4uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHByb2R1Y3QtYXNzb2NpYXRpb24gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0QXNzb2NpYXRpb25cbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RBc3NvY2lhdGlvbjogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QXNzb2NpYXRpb24oe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RBc3NvY2lhdGlvbi5pZCxcbiAgICAgICAgICAgIG5hbWU6IHByb2R1Y3RBc3NvY2lhdGlvbi5uYW1lLFxuICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0QXNzb2NpYXRpb24uYWN0aXZlLFxuICAgICAgICAgICAgcG9zaXRpb246IHByb2R1Y3RBc3NvY2lhdGlvbi5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RBc3NvY2lhdGlvbi5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdEFzc29jaWF0aW9uLnByb2R1Y3RzQ291bnQsXG4gICAgICAgICAgICBhc3NvY2lhdGlvbjogcHJvZHVjdEFzc29jaWF0aW9uLmFzc29jaWF0aW9uLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIHByb2R1Y3RzOiB0aGlzLmluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0QXNzb2NpYXRpb24pLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdEFzc29jaWF0aW9uOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdEFzc29jaWF0aW9uLCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==