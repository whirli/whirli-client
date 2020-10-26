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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwicHJvZHVjdEFzc29jaWF0aW9uIiwiUHJvZHVjdEFzc29jaWF0aW9uIiwiaWQiLCJuYW1lIiwiaW50ZXJuYWxOYW1lIiwiYWN0aXZlIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsInB1Ymxpc2hlZEF0IiwiYXNzb2NpYXRpb24iLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsImNvbGxlY3Rpb24iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDZCOzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBOzRCQUNZQyxrQixFQUFxRTtBQUN6RSxhQUFPLElBQUlDLDhCQUFKLENBQXVCO0FBQzFCQyxRQUFBQSxFQUFFLEVBQUVGLGtCQUFrQixDQUFDRSxFQURHO0FBRTFCQyxRQUFBQSxJQUFJLEVBQUVILGtCQUFrQixDQUFDRyxJQUZDO0FBRzFCQyxRQUFBQSxZQUFZLEVBQUVKLGtCQUFrQixDQUFDSSxZQUhQO0FBSTFCQyxRQUFBQSxNQUFNLEVBQUVMLGtCQUFrQixDQUFDSyxNQUpEO0FBSzFCQyxRQUFBQSxRQUFRLEVBQUVOLGtCQUFrQixDQUFDTSxRQUxIO0FBTTFCQyxRQUFBQSxnQkFBZ0IsRUFBRVAsa0JBQWtCLENBQUNPLGdCQU5YO0FBTzFCQyxRQUFBQSxhQUFhLEVBQUVSLGtCQUFrQixDQUFDUSxhQVBSO0FBUTFCQyxRQUFBQSxXQUFXLEVBQUVULGtCQUFrQixDQUFDUyxXQVJOO0FBUzFCQyxRQUFBQSxXQUFXLEVBQUVWLGtCQUFrQixDQUFDVSxXQVROO0FBVTFCO0FBQ0FDLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCWixrQkFBckI7QUFYZ0IsT0FBdkIsQ0FBUDtBQWFIOzs7b0NBRWVBLGtCLEVBQTBFO0FBQ3RGLGFBQU8sS0FBS2EsVUFBTCxDQUFnQmIsa0JBQWhCLEVBQW9DLFVBQXBDLEVBQWdELElBQUljLDhCQUFKLEVBQWhELENBQVA7QUFDSDs7OztFQXhCc0RDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbiBmcm9tICcuLi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBwcm9kdWN0LWFzc29jaWF0aW9uIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdEFzc29jaWF0aW9uXG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0QXNzb2NpYXRpb246IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSk6IFByb2R1Y3RBc3NvY2lhdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEFzc29jaWF0aW9uKHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0QXNzb2NpYXRpb24uaWQsXG4gICAgICAgICAgICBuYW1lOiBwcm9kdWN0QXNzb2NpYXRpb24ubmFtZSxcbiAgICAgICAgICAgIGludGVybmFsTmFtZTogcHJvZHVjdEFzc29jaWF0aW9uLmludGVybmFsTmFtZSxcbiAgICAgICAgICAgIGFjdGl2ZTogcHJvZHVjdEFzc29jaWF0aW9uLmFjdGl2ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0QXNzb2NpYXRpb24ucG9zaXRpb24sXG4gICAgICAgICAgICBhc3NvY2lhdGlvbkNsYXNzOiBwcm9kdWN0QXNzb2NpYXRpb24uYXNzb2NpYXRpb25DbGFzcyxcbiAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RBc3NvY2lhdGlvbi5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgcHVibGlzaGVkQXQ6IHByb2R1Y3RBc3NvY2lhdGlvbi5wdWJsaXNoZWRBdCxcbiAgICAgICAgICAgIGFzc29jaWF0aW9uOiBwcm9kdWN0QXNzb2NpYXRpb24uYXNzb2NpYXRpb24sXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RBc3NvY2lhdGlvbiksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0QXNzb2NpYXRpb246IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0QXNzb2NpYXRpb24sICdwcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19