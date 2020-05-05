"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductCollection = _interopRequireDefault(require("../ProductCollection"));

var _ProductTransformer = _interopRequireDefault(require("../../product/Transformers/ProductTransformer"));

var _ProductAssociationTransformer = _interopRequireDefault(require("../../product/Transformers/ProductAssociationTransformer"));

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

var ProductCollectionTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductCollectionTransformer, _BaseTransformer);

  function ProductCollectionTransformer() {
    _classCallCheck(this, ProductCollectionTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductCollectionTransformer).apply(this, arguments));
  }

  _createClass(ProductCollectionTransformer, [{
    key: "mapData",

    /**
     * Map a product age range response
     *
     * @param productCollection
     */
    value: function mapData(productCollection) {
      return new _ProductCollection["default"]({
        id: productCollection.id,
        hasPage: productCollection.hasPage,
        slug: productCollection.slug,
        headerDescription: productCollection.headerDescription,
        headerImage: productCollection.headerImage,
        position: productCollection.position,
        associationClass: productCollection.associationClass,
        productsCount: productCollection.productsCount,
        // belongs to
        associated: this.includeAssociated(productCollection),
        // has many
        products: this.includeProducts(productCollection)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productCollection) {
      return this.item(productCollection, 'associated', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(productCollection) {
      return this.collection(productCollection, 'products', new _ProductTransformer["default"]());
    }
  }]);

  return ProductCollectionTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductCollectionTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdENvbGxlY3Rpb25UcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0Q29sbGVjdGlvblRyYW5zZm9ybWVyIiwicHJvZHVjdENvbGxlY3Rpb24iLCJQcm9kdWN0Q29sbGVjdGlvbiIsImlkIiwiaGFzUGFnZSIsInNsdWciLCJoZWFkZXJEZXNjcmlwdGlvbiIsImhlYWRlckltYWdlIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsInByb2R1Y3RzIiwiaW5jbHVkZVByb2R1Y3RzIiwiaXRlbSIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlByb2R1Y3RUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw0Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxpQixFQUFrRTtBQUN0RSxhQUFPLElBQUlDLDZCQUFKLENBQXNCO0FBQ3pCQyxRQUFBQSxFQUFFLEVBQUVGLGlCQUFpQixDQUFDRSxFQURHO0FBRXpCQyxRQUFBQSxPQUFPLEVBQUVILGlCQUFpQixDQUFDRyxPQUZGO0FBR3pCQyxRQUFBQSxJQUFJLEVBQUVKLGlCQUFpQixDQUFDSSxJQUhDO0FBSXpCQyxRQUFBQSxpQkFBaUIsRUFBRUwsaUJBQWlCLENBQUNLLGlCQUpaO0FBS3pCQyxRQUFBQSxXQUFXLEVBQUVOLGlCQUFpQixDQUFDTSxXQUxOO0FBTXpCQyxRQUFBQSxRQUFRLEVBQUVQLGlCQUFpQixDQUFDTyxRQU5IO0FBT3pCQyxRQUFBQSxnQkFBZ0IsRUFBRVIsaUJBQWlCLENBQUNRLGdCQVBYO0FBUXpCQyxRQUFBQSxhQUFhLEVBQUVULGlCQUFpQixDQUFDUyxhQVJSO0FBU3pCO0FBQ0FDLFFBQUFBLFVBQVUsRUFBRSxLQUFLQyxpQkFBTCxDQUF1QlgsaUJBQXZCLENBVmE7QUFXekI7QUFDQVksUUFBQUEsUUFBUSxFQUFFLEtBQUtDLGVBQUwsQ0FBcUJiLGlCQUFyQjtBQVplLE9BQXRCLENBQVA7QUFjSDs7O3NDQUVpQkEsaUIsRUFBbUY7QUFDakcsYUFBTyxLQUFLYyxJQUFMLENBQVVkLGlCQUFWLEVBQTZCLFlBQTdCLEVBQTJDLElBQUllLHlDQUFKLEVBQTNDLENBQVA7QUFDSDs7O29DQUVlZixpQixFQUF3RTtBQUNwRixhQUFPLEtBQUtnQixVQUFMLENBQWdCaEIsaUJBQWhCLEVBQW1DLFVBQW5DLEVBQStDLElBQUlpQiw4QkFBSixFQUEvQyxDQUFQO0FBQ0g7Ozs7RUE3QnFEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0Q29sbGVjdGlvbiBmcm9tICcuLi9Qcm9kdWN0Q29sbGVjdGlvbic7XG5pbXBvcnQgUHJvZHVjdENvbGxlY3Rpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0Q29sbGVjdGlvbic7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RDb2xsZWN0aW9uVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHByb2R1Y3QgYWdlIHJhbmdlIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdENvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RDb2xsZWN0aW9uOiBQcm9kdWN0Q29sbGVjdGlvbkludGVyZmFjZSk6IFByb2R1Y3RDb2xsZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0Q29sbGVjdGlvbih7XG4gICAgICAgICAgICBpZDogcHJvZHVjdENvbGxlY3Rpb24uaWQsXG4gICAgICAgICAgICBoYXNQYWdlOiBwcm9kdWN0Q29sbGVjdGlvbi5oYXNQYWdlLFxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdENvbGxlY3Rpb24uc2x1ZyxcbiAgICAgICAgICAgIGhlYWRlckRlc2NyaXB0aW9uOiBwcm9kdWN0Q29sbGVjdGlvbi5oZWFkZXJEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGhlYWRlckltYWdlOiBwcm9kdWN0Q29sbGVjdGlvbi5oZWFkZXJJbWFnZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0Q29sbGVjdGlvbi5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RDb2xsZWN0aW9uLmFzc29jaWF0aW9uQ2xhc3MsXG4gICAgICAgICAgICBwcm9kdWN0c0NvdW50OiBwcm9kdWN0Q29sbGVjdGlvbi5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0Q29sbGVjdGlvbiksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RDb2xsZWN0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdENvbGxlY3Rpb246IFByb2R1Y3RDb2xsZWN0aW9uSW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdENvbGxlY3Rpb24sICdhc3NvY2lhdGVkJywgbmV3IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0Q29sbGVjdGlvbjogUHJvZHVjdENvbGxlY3Rpb25JbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdENvbGxlY3Rpb24sICdwcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19