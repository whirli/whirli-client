"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductSkill = _interopRequireDefault(require("../ProductSkill"));

var _AssetTransformer = _interopRequireDefault(require("../../asset/Transformers/AssetTransformer"));

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

var ProductSkillTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductSkillTransformer, _BaseTransformer);

  function ProductSkillTransformer() {
    _classCallCheck(this, ProductSkillTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductSkillTransformer).apply(this, arguments));
  }

  _createClass(ProductSkillTransformer, [{
    key: "mapData",

    /**
     * Map a product skill response
     *
     * @param productSkill
     */
    value: function mapData(productSkill) {
      return new _ProductSkill["default"]({
        id: productSkill.id,
        hasPage: productSkill.hasPage,
        slug: productSkill.slug,
        headerDescription: productSkill.headerDescription,
        headerImage: productSkill.headerImage,
        position: productSkill.position,
        associationClass: productSkill.associationClass,
        primaryDescription: productSkill.primaryDescription,
        additionalDescription: productSkill.additionalDescription,
        productsCount: productSkill.productsCount,
        skillGroup: productSkill.skillGroup,
        // belongs to
        associated: this.includeAssociated(productSkill),
        // has many
        assets: this.includeAssets(productSkill),
        products: this.includeProducts(productSkill)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productSkill) {
      return this.item(productSkill, 'associated', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeAssets",
    value: function includeAssets(productSkill) {
      return this.collection(productSkill, 'assets', new _AssetTransformer["default"]());
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(productSkill) {
      return this.collection(productSkill, 'products', new _ProductTransformer["default"]());
    }
  }]);

  return ProductSkillTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductSkillTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RTa2lsbFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RTa2lsbFRyYW5zZm9ybWVyIiwicHJvZHVjdFNraWxsIiwiUHJvZHVjdFNraWxsIiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcmltYXJ5RGVzY3JpcHRpb24iLCJhZGRpdGlvbmFsRGVzY3JpcHRpb24iLCJwcm9kdWN0c0NvdW50Iiwic2tpbGxHcm91cCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsImFzc2V0cyIsImluY2x1ZGVBc3NldHMiLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsIml0ZW0iLCJQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJBc3NldFRyYW5zZm9ybWVyIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHVCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFksRUFBbUQ7QUFDdkQsYUFBTyxJQUFJQyx3QkFBSixDQUFpQjtBQUNwQkMsUUFBQUEsRUFBRSxFQUFFRixZQUFZLENBQUNFLEVBREc7QUFFcEJDLFFBQUFBLE9BQU8sRUFBRUgsWUFBWSxDQUFDRyxPQUZGO0FBR3BCQyxRQUFBQSxJQUFJLEVBQUVKLFlBQVksQ0FBQ0ksSUFIQztBQUlwQkMsUUFBQUEsaUJBQWlCLEVBQUVMLFlBQVksQ0FBQ0ssaUJBSlo7QUFLcEJDLFFBQUFBLFdBQVcsRUFBRU4sWUFBWSxDQUFDTSxXQUxOO0FBTXBCQyxRQUFBQSxRQUFRLEVBQUVQLFlBQVksQ0FBQ08sUUFOSDtBQU9wQkMsUUFBQUEsZ0JBQWdCLEVBQUVSLFlBQVksQ0FBQ1EsZ0JBUFg7QUFRcEJDLFFBQUFBLGtCQUFrQixFQUFFVCxZQUFZLENBQUNTLGtCQVJiO0FBU3BCQyxRQUFBQSxxQkFBcUIsRUFBRVYsWUFBWSxDQUFDVSxxQkFUaEI7QUFVcEJDLFFBQUFBLGFBQWEsRUFBRVgsWUFBWSxDQUFDVyxhQVZSO0FBV3BCQyxRQUFBQSxVQUFVLEVBQUVaLFlBQVksQ0FBQ1ksVUFYTDtBQVlwQjtBQUNBQyxRQUFBQSxVQUFVLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUJkLFlBQXZCLENBYlE7QUFjcEI7QUFDQWUsUUFBQUEsTUFBTSxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJoQixZQUFuQixDQWZZO0FBZ0JwQmlCLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCbEIsWUFBckI7QUFoQlUsT0FBakIsQ0FBUDtBQWtCSDs7O3NDQUVpQkEsWSxFQUF5RTtBQUN2RixhQUFPLEtBQUttQixJQUFMLENBQVVuQixZQUFWLEVBQXdCLFlBQXhCLEVBQXNDLElBQUlvQix5Q0FBSixFQUF0QyxDQUFQO0FBQ0g7OztrQ0FFYXBCLFksRUFBNEQ7QUFDdEUsYUFBTyxLQUFLcUIsVUFBTCxDQUFnQnJCLFlBQWhCLEVBQThCLFFBQTlCLEVBQXdDLElBQUlzQiw0QkFBSixFQUF4QyxDQUFQO0FBQ0g7OztvQ0FFZXRCLFksRUFBOEQ7QUFDMUUsYUFBTyxLQUFLcUIsVUFBTCxDQUFnQnJCLFlBQWhCLEVBQThCLFVBQTlCLEVBQTBDLElBQUl1Qiw4QkFBSixFQUExQyxDQUFQO0FBQ0g7Ozs7RUFyQ2dEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0U2tpbGwgZnJvbSAnLi4vUHJvZHVjdFNraWxsJztcbmltcG9ydCBQcm9kdWN0U2tpbGxJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0U2tpbGwnO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgQXNzZXRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NldC9Bc3NldCc7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hc3NldC9UcmFuc2Zvcm1lcnMvQXNzZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RTa2lsbFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBwcm9kdWN0IHNraWxsIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdFNraWxsXG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0U2tpbGw6IFByb2R1Y3RTa2lsbEludGVyZmFjZSk6IFByb2R1Y3RTa2lsbCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdFNraWxsKHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0U2tpbGwuaWQsXG4gICAgICAgICAgICBoYXNQYWdlOiBwcm9kdWN0U2tpbGwuaGFzUGFnZSxcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3RTa2lsbC5zbHVnLFxuICAgICAgICAgICAgaGVhZGVyRGVzY3JpcHRpb246IHByb2R1Y3RTa2lsbC5oZWFkZXJEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGhlYWRlckltYWdlOiBwcm9kdWN0U2tpbGwuaGVhZGVySW1hZ2UsXG4gICAgICAgICAgICBwb3NpdGlvbjogcHJvZHVjdFNraWxsLnBvc2l0aW9uLFxuICAgICAgICAgICAgYXNzb2NpYXRpb25DbGFzczogcHJvZHVjdFNraWxsLmFzc29jaWF0aW9uQ2xhc3MsXG4gICAgICAgICAgICBwcmltYXJ5RGVzY3JpcHRpb246IHByb2R1Y3RTa2lsbC5wcmltYXJ5RGVzY3JpcHRpb24sXG4gICAgICAgICAgICBhZGRpdGlvbmFsRGVzY3JpcHRpb246IHByb2R1Y3RTa2lsbC5hZGRpdGlvbmFsRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcm9kdWN0c0NvdW50OiBwcm9kdWN0U2tpbGwucHJvZHVjdHNDb3VudCxcbiAgICAgICAgICAgIHNraWxsR3JvdXA6IHByb2R1Y3RTa2lsbC5za2lsbEdyb3VwLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0U2tpbGwpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5pbmNsdWRlQXNzZXRzKHByb2R1Y3RTa2lsbCksXG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdFNraWxsKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdFNraWxsOiBQcm9kdWN0U2tpbGxJbnRlcmZhY2UpOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0U2tpbGwsICdhc3NvY2lhdGVkJywgbmV3IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NldHMocHJvZHVjdFNraWxsOiBQcm9kdWN0U2tpbGxJbnRlcmZhY2UpOiBBcnJheTxBc3NldEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RTa2lsbCwgJ2Fzc2V0cycsIG5ldyBBc3NldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0U2tpbGw6IFByb2R1Y3RTa2lsbEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0U2tpbGwsICdwcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19