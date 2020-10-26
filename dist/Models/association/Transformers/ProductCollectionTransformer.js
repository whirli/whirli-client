"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductCollection = _interopRequireDefault(require("../ProductCollection"));

var _AssetTransformer = _interopRequireDefault(require("../../asset/Transformers/AssetTransformer"));

var _ProductTransformer = _interopRequireDefault(require("../../product/Transformers/ProductTransformer"));

var _ProductAssociationTransformer = _interopRequireDefault(require("./ProductAssociationTransformer"));

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

var ProductCollectionTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductCollectionTransformer, _BaseTransformer);

  var _super = _createSuper(ProductCollectionTransformer);

  function ProductCollectionTransformer() {
    _classCallCheck(this, ProductCollectionTransformer);

    return _super.apply(this, arguments);
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
        featured: productCollection.featured,
        position: productCollection.position,
        associationClass: productCollection.associationClass,
        productsCount: productCollection.productsCount,
        // belongs to
        associated: this.includeAssociated(productCollection),
        // has many
        assets: this.includeAssets(productCollection),
        products: this.includeProducts(productCollection)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productCollection) {
      return this.item(productCollection, 'associated', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeAssets",
    value: function includeAssets(productCollection) {
      return this.collection(productCollection, 'assets', new _AssetTransformer["default"]());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RDb2xsZWN0aW9uVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUHJvZHVjdENvbGxlY3Rpb25UcmFuc2Zvcm1lciIsInByb2R1Y3RDb2xsZWN0aW9uIiwiUHJvZHVjdENvbGxlY3Rpb24iLCJpZCIsImhhc1BhZ2UiLCJzbHVnIiwiaGVhZGVyRGVzY3JpcHRpb24iLCJoZWFkZXJJbWFnZSIsImZlYXR1cmVkIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsImFzc2V0cyIsImluY2x1ZGVBc3NldHMiLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsIml0ZW0iLCJQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJBc3NldFRyYW5zZm9ybWVyIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw0Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTs0QkFDWUMsaUIsRUFBa0U7QUFDdEUsYUFBTyxJQUFJQyw2QkFBSixDQUFzQjtBQUN6QkMsUUFBQUEsRUFBRSxFQUFFRixpQkFBaUIsQ0FBQ0UsRUFERztBQUV6QkMsUUFBQUEsT0FBTyxFQUFFSCxpQkFBaUIsQ0FBQ0csT0FGRjtBQUd6QkMsUUFBQUEsSUFBSSxFQUFFSixpQkFBaUIsQ0FBQ0ksSUFIQztBQUl6QkMsUUFBQUEsaUJBQWlCLEVBQUVMLGlCQUFpQixDQUFDSyxpQkFKWjtBQUt6QkMsUUFBQUEsV0FBVyxFQUFFTixpQkFBaUIsQ0FBQ00sV0FMTjtBQU16QkMsUUFBQUEsUUFBUSxFQUFFUCxpQkFBaUIsQ0FBQ08sUUFOSDtBQU96QkMsUUFBQUEsUUFBUSxFQUFFUixpQkFBaUIsQ0FBQ1EsUUFQSDtBQVF6QkMsUUFBQUEsZ0JBQWdCLEVBQUVULGlCQUFpQixDQUFDUyxnQkFSWDtBQVN6QkMsUUFBQUEsYUFBYSxFQUFFVixpQkFBaUIsQ0FBQ1UsYUFUUjtBQVV6QjtBQUNBQyxRQUFBQSxVQUFVLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUJaLGlCQUF2QixDQVhhO0FBWXpCO0FBQ0FhLFFBQUFBLE1BQU0sRUFBRSxLQUFLQyxhQUFMLENBQW1CZCxpQkFBbkIsQ0FiaUI7QUFjekJlLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCaEIsaUJBQXJCO0FBZGUsT0FBdEIsQ0FBUDtBQWdCSDs7O3NDQUVpQkEsaUIsRUFBbUY7QUFDakcsYUFBTyxLQUFLaUIsSUFBTCxDQUFVakIsaUJBQVYsRUFBNkIsWUFBN0IsRUFBMkMsSUFBSWtCLHlDQUFKLEVBQTNDLENBQVA7QUFDSDs7O2tDQUVhbEIsaUIsRUFBc0U7QUFDaEYsYUFBTyxLQUFLbUIsVUFBTCxDQUFnQm5CLGlCQUFoQixFQUFtQyxRQUFuQyxFQUE2QyxJQUFJb0IsNEJBQUosRUFBN0MsQ0FBUDtBQUNIOzs7b0NBRWVwQixpQixFQUF3RTtBQUNwRixhQUFPLEtBQUttQixVQUFMLENBQWdCbkIsaUJBQWhCLEVBQW1DLFVBQW5DLEVBQStDLElBQUlxQiw4QkFBSixFQUEvQyxDQUFQO0FBQ0g7Ozs7RUFuQ3FEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0Q29sbGVjdGlvbiBmcm9tICcuLi9Qcm9kdWN0Q29sbGVjdGlvbic7XG5pbXBvcnQgUHJvZHVjdENvbGxlY3Rpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0Q29sbGVjdGlvbic7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBBc3NldEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc2V0L0Fzc2V0JztcbmltcG9ydCBBc3NldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Fzc2V0L1RyYW5zZm9ybWVycy9Bc3NldFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdENvbGxlY3Rpb25UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgcHJvZHVjdCBhZ2UgcmFuZ2UgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0Q29sbGVjdGlvblxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdENvbGxlY3Rpb246IFByb2R1Y3RDb2xsZWN0aW9uSW50ZXJmYWNlKTogUHJvZHVjdENvbGxlY3Rpb24ge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RDb2xsZWN0aW9uKHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0Q29sbGVjdGlvbi5pZCxcbiAgICAgICAgICAgIGhhc1BhZ2U6IHByb2R1Y3RDb2xsZWN0aW9uLmhhc1BhZ2UsXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0Q29sbGVjdGlvbi5zbHVnLFxuICAgICAgICAgICAgaGVhZGVyRGVzY3JpcHRpb246IHByb2R1Y3RDb2xsZWN0aW9uLmhlYWRlckRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaGVhZGVySW1hZ2U6IHByb2R1Y3RDb2xsZWN0aW9uLmhlYWRlckltYWdlLFxuICAgICAgICAgICAgZmVhdHVyZWQ6IHByb2R1Y3RDb2xsZWN0aW9uLmZlYXR1cmVkLFxuICAgICAgICAgICAgcG9zaXRpb246IHByb2R1Y3RDb2xsZWN0aW9uLnBvc2l0aW9uLFxuICAgICAgICAgICAgYXNzb2NpYXRpb25DbGFzczogcHJvZHVjdENvbGxlY3Rpb24uYXNzb2NpYXRpb25DbGFzcyxcbiAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RDb2xsZWN0aW9uLnByb2R1Y3RzQ291bnQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBhc3NvY2lhdGVkOiB0aGlzLmluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RDb2xsZWN0aW9uKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBhc3NldHM6IHRoaXMuaW5jbHVkZUFzc2V0cyhwcm9kdWN0Q29sbGVjdGlvbiksXG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdENvbGxlY3Rpb24pLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0Q29sbGVjdGlvbjogUHJvZHVjdENvbGxlY3Rpb25JbnRlcmZhY2UpOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0Q29sbGVjdGlvbiwgJ2Fzc29jaWF0ZWQnLCBuZXcgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2V0cyhwcm9kdWN0Q29sbGVjdGlvbjogUHJvZHVjdENvbGxlY3Rpb25JbnRlcmZhY2UpOiBBcnJheTxBc3NldEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RDb2xsZWN0aW9uLCAnYXNzZXRzJywgbmV3IEFzc2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RDb2xsZWN0aW9uOiBQcm9kdWN0Q29sbGVjdGlvbkludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0Q29sbGVjdGlvbiwgJ3Byb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=