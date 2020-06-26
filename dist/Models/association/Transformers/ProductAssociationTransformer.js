"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductAssociation = _interopRequireDefault(require("../ProductAssociation"));

var _ProductTransformer = _interopRequireDefault(require("../../product/Transformers/ProductTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

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

var ProductAssociationTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductAssociationTransformer, _BaseTransformer);

  var _super = _createSuper(ProductAssociationTransformer);

  function ProductAssociationTransformer() {
    _classCallCheck(this, ProductAssociationTransformer);

    return _super.apply(this, arguments);
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
        internalName: productAssociation.internalName,
        active: productAssociation.active,
        position: productAssociation.position,
        associationClass: productAssociation.associationClass,
        productsCount: productAssociation.productsCount,
        publishedAt: productAssociation.publishedAt,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwicHJvZHVjdEFzc29jaWF0aW9uIiwiUHJvZHVjdEFzc29jaWF0aW9uIiwiaWQiLCJuYW1lIiwiaW50ZXJuYWxOYW1lIiwiYWN0aXZlIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsInB1Ymxpc2hlZEF0IiwiYXNzb2NpYXRpb24iLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsImNvbGxlY3Rpb24iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDZCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLGtCLEVBQXFFO0FBQ3pFLGFBQU8sSUFBSUMsOEJBQUosQ0FBdUI7QUFDMUJDLFFBQUFBLEVBQUUsRUFBRUYsa0JBQWtCLENBQUNFLEVBREc7QUFFMUJDLFFBQUFBLElBQUksRUFBRUgsa0JBQWtCLENBQUNHLElBRkM7QUFHMUJDLFFBQUFBLFlBQVksRUFBRUosa0JBQWtCLENBQUNJLFlBSFA7QUFJMUJDLFFBQUFBLE1BQU0sRUFBRUwsa0JBQWtCLENBQUNLLE1BSkQ7QUFLMUJDLFFBQUFBLFFBQVEsRUFBRU4sa0JBQWtCLENBQUNNLFFBTEg7QUFNMUJDLFFBQUFBLGdCQUFnQixFQUFFUCxrQkFBa0IsQ0FBQ08sZ0JBTlg7QUFPMUJDLFFBQUFBLGFBQWEsRUFBRVIsa0JBQWtCLENBQUNRLGFBUFI7QUFRMUJDLFFBQUFBLFdBQVcsRUFBRVQsa0JBQWtCLENBQUNTLFdBUk47QUFTMUJDLFFBQUFBLFdBQVcsRUFBRVYsa0JBQWtCLENBQUNVLFdBVE47QUFVMUI7QUFDQUMsUUFBQUEsUUFBUSxFQUFFLEtBQUtDLGVBQUwsQ0FBcUJaLGtCQUFyQjtBQVhnQixPQUF2QixDQUFQO0FBYUg7OztvQ0FFZUEsa0IsRUFBMEU7QUFDdEYsYUFBTyxLQUFLYSxVQUFMLENBQWdCYixrQkFBaEIsRUFBb0MsVUFBcEMsRUFBZ0QsSUFBSWMsOEJBQUosRUFBaEQsQ0FBUDtBQUNIOzs7O0VBeEJzREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uIGZyb20gJy4uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHByb2R1Y3QtYXNzb2NpYXRpb24gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0QXNzb2NpYXRpb25cbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RBc3NvY2lhdGlvbjogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QXNzb2NpYXRpb24oe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RBc3NvY2lhdGlvbi5pZCxcbiAgICAgICAgICAgIG5hbWU6IHByb2R1Y3RBc3NvY2lhdGlvbi5uYW1lLFxuICAgICAgICAgICAgaW50ZXJuYWxOYW1lOiBwcm9kdWN0QXNzb2NpYXRpb24uaW50ZXJuYWxOYW1lLFxuICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0QXNzb2NpYXRpb24uYWN0aXZlLFxuICAgICAgICAgICAgcG9zaXRpb246IHByb2R1Y3RBc3NvY2lhdGlvbi5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RBc3NvY2lhdGlvbi5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdEFzc29jaWF0aW9uLnByb2R1Y3RzQ291bnQsXG4gICAgICAgICAgICBwdWJsaXNoZWRBdDogcHJvZHVjdEFzc29jaWF0aW9uLnB1Ymxpc2hlZEF0LFxuICAgICAgICAgICAgYXNzb2NpYXRpb246IHByb2R1Y3RBc3NvY2lhdGlvbi5hc3NvY2lhdGlvbixcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdEFzc29jaWF0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RBc3NvY2lhdGlvbjogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RBc3NvY2lhdGlvbiwgJ3Byb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=