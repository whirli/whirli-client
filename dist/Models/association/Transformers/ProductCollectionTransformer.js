"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductCollection = _interopRequireDefault(require("../ProductCollection"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RDb2xsZWN0aW9uVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUHJvZHVjdENvbGxlY3Rpb25UcmFuc2Zvcm1lciIsInByb2R1Y3RDb2xsZWN0aW9uIiwiUHJvZHVjdENvbGxlY3Rpb24iLCJpZCIsImhhc1BhZ2UiLCJzbHVnIiwiaGVhZGVyRGVzY3JpcHRpb24iLCJoZWFkZXJJbWFnZSIsInBvc2l0aW9uIiwiYXNzb2NpYXRpb25DbGFzcyIsInByb2R1Y3RzQ291bnQiLCJhc3NvY2lhdGVkIiwiaW5jbHVkZUFzc29jaWF0ZWQiLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsIml0ZW0iLCJQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFJQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsNEI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsaUIsRUFBa0U7QUFDdEUsYUFBTyxJQUFJQyw2QkFBSixDQUFzQjtBQUN6QkMsUUFBQUEsRUFBRSxFQUFFRixpQkFBaUIsQ0FBQ0UsRUFERztBQUV6QkMsUUFBQUEsT0FBTyxFQUFFSCxpQkFBaUIsQ0FBQ0csT0FGRjtBQUd6QkMsUUFBQUEsSUFBSSxFQUFFSixpQkFBaUIsQ0FBQ0ksSUFIQztBQUl6QkMsUUFBQUEsaUJBQWlCLEVBQUVMLGlCQUFpQixDQUFDSyxpQkFKWjtBQUt6QkMsUUFBQUEsV0FBVyxFQUFFTixpQkFBaUIsQ0FBQ00sV0FMTjtBQU16QkMsUUFBQUEsUUFBUSxFQUFFUCxpQkFBaUIsQ0FBQ08sUUFOSDtBQU96QkMsUUFBQUEsZ0JBQWdCLEVBQUVSLGlCQUFpQixDQUFDUSxnQkFQWDtBQVF6QkMsUUFBQUEsYUFBYSxFQUFFVCxpQkFBaUIsQ0FBQ1MsYUFSUjtBQVN6QjtBQUNBQyxRQUFBQSxVQUFVLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUJYLGlCQUF2QixDQVZhO0FBV3pCO0FBQ0FZLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCYixpQkFBckI7QUFaZSxPQUF0QixDQUFQO0FBY0g7OztzQ0FFaUJBLGlCLEVBQW1GO0FBQ2pHLGFBQU8sS0FBS2MsSUFBTCxDQUFVZCxpQkFBVixFQUE2QixZQUE3QixFQUEyQyxJQUFJZSx5Q0FBSixFQUEzQyxDQUFQO0FBQ0g7OztvQ0FFZWYsaUIsRUFBd0U7QUFDcEYsYUFBTyxLQUFLZ0IsVUFBTCxDQUFnQmhCLGlCQUFoQixFQUFtQyxVQUFuQyxFQUErQyxJQUFJaUIsOEJBQUosRUFBL0MsQ0FBUDtBQUNIOzs7O0VBN0JxREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdENvbGxlY3Rpb24gZnJvbSAnLi4vUHJvZHVjdENvbGxlY3Rpb24nO1xuaW1wb3J0IFByb2R1Y3RDb2xsZWN0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdENvbGxlY3Rpb24nO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RDb2xsZWN0aW9uVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHByb2R1Y3QgYWdlIHJhbmdlIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdENvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RDb2xsZWN0aW9uOiBQcm9kdWN0Q29sbGVjdGlvbkludGVyZmFjZSk6IFByb2R1Y3RDb2xsZWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0Q29sbGVjdGlvbih7XG4gICAgICAgICAgICBpZDogcHJvZHVjdENvbGxlY3Rpb24uaWQsXG4gICAgICAgICAgICBoYXNQYWdlOiBwcm9kdWN0Q29sbGVjdGlvbi5oYXNQYWdlLFxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdENvbGxlY3Rpb24uc2x1ZyxcbiAgICAgICAgICAgIGhlYWRlckRlc2NyaXB0aW9uOiBwcm9kdWN0Q29sbGVjdGlvbi5oZWFkZXJEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGhlYWRlckltYWdlOiBwcm9kdWN0Q29sbGVjdGlvbi5oZWFkZXJJbWFnZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0Q29sbGVjdGlvbi5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RDb2xsZWN0aW9uLmFzc29jaWF0aW9uQ2xhc3MsXG4gICAgICAgICAgICBwcm9kdWN0c0NvdW50OiBwcm9kdWN0Q29sbGVjdGlvbi5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0Q29sbGVjdGlvbiksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RDb2xsZWN0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdENvbGxlY3Rpb246IFByb2R1Y3RDb2xsZWN0aW9uSW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdENvbGxlY3Rpb24sICdhc3NvY2lhdGVkJywgbmV3IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0Q29sbGVjdGlvbjogUHJvZHVjdENvbGxlY3Rpb25JbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdENvbGxlY3Rpb24sICdwcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19