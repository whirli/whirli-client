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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RTa2lsbFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RTa2lsbFRyYW5zZm9ybWVyIiwicHJvZHVjdFNraWxsIiwiUHJvZHVjdFNraWxsIiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50Iiwic2tpbGxHcm91cCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsImFzc2V0cyIsImluY2x1ZGVBc3NldHMiLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsIml0ZW0iLCJQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJBc3NldFRyYW5zZm9ybWVyIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHVCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFksRUFBbUQ7QUFDdkQsYUFBTyxJQUFJQyx3QkFBSixDQUFpQjtBQUNwQkMsUUFBQUEsRUFBRSxFQUFFRixZQUFZLENBQUNFLEVBREc7QUFFcEJDLFFBQUFBLE9BQU8sRUFBRUgsWUFBWSxDQUFDRyxPQUZGO0FBR3BCQyxRQUFBQSxJQUFJLEVBQUVKLFlBQVksQ0FBQ0ksSUFIQztBQUlwQkMsUUFBQUEsaUJBQWlCLEVBQUVMLFlBQVksQ0FBQ0ssaUJBSlo7QUFLcEJDLFFBQUFBLFdBQVcsRUFBRU4sWUFBWSxDQUFDTSxXQUxOO0FBTXBCQyxRQUFBQSxRQUFRLEVBQUVQLFlBQVksQ0FBQ08sUUFOSDtBQU9wQkMsUUFBQUEsZ0JBQWdCLEVBQUVSLFlBQVksQ0FBQ1EsZ0JBUFg7QUFRcEJDLFFBQUFBLGFBQWEsRUFBRVQsWUFBWSxDQUFDUyxhQVJSO0FBU3BCQyxRQUFBQSxVQUFVLEVBQUVWLFlBQVksQ0FBQ1UsVUFUTDtBQVVwQjtBQUNBQyxRQUFBQSxVQUFVLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUJaLFlBQXZCLENBWFE7QUFZcEI7QUFDQWEsUUFBQUEsTUFBTSxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJkLFlBQW5CLENBYlk7QUFjcEJlLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCaEIsWUFBckI7QUFkVSxPQUFqQixDQUFQO0FBZ0JIOzs7c0NBRWlCQSxZLEVBQXlFO0FBQ3ZGLGFBQU8sS0FBS2lCLElBQUwsQ0FBVWpCLFlBQVYsRUFBd0IsWUFBeEIsRUFBc0MsSUFBSWtCLHlDQUFKLEVBQXRDLENBQVA7QUFDSDs7O2tDQUVhbEIsWSxFQUE0RDtBQUN0RSxhQUFPLEtBQUttQixVQUFMLENBQWdCbkIsWUFBaEIsRUFBOEIsUUFBOUIsRUFBd0MsSUFBSW9CLDRCQUFKLEVBQXhDLENBQVA7QUFDSDs7O29DQUVlcEIsWSxFQUE4RDtBQUMxRSxhQUFPLEtBQUttQixVQUFMLENBQWdCbkIsWUFBaEIsRUFBOEIsVUFBOUIsRUFBMEMsSUFBSXFCLDhCQUFKLEVBQTFDLENBQVA7QUFDSDs7OztFQW5DZ0RDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RTa2lsbCBmcm9tICcuLi9Qcm9kdWN0U2tpbGwnO1xuaW1wb3J0IFByb2R1Y3RTa2lsbEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RTa2lsbCc7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBBc3NldEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc2V0L0Fzc2V0JztcbmltcG9ydCBBc3NldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Fzc2V0L1RyYW5zZm9ybWVycy9Bc3NldFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFNraWxsVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHByb2R1Y3Qgc2tpbGwgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0U2tpbGxcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RTa2lsbDogUHJvZHVjdFNraWxsSW50ZXJmYWNlKTogUHJvZHVjdFNraWxsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0U2tpbGwoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RTa2lsbC5pZCxcbiAgICAgICAgICAgIGhhc1BhZ2U6IHByb2R1Y3RTa2lsbC5oYXNQYWdlLFxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdFNraWxsLnNsdWcsXG4gICAgICAgICAgICBoZWFkZXJEZXNjcmlwdGlvbjogcHJvZHVjdFNraWxsLmhlYWRlckRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaGVhZGVySW1hZ2U6IHByb2R1Y3RTa2lsbC5oZWFkZXJJbWFnZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0U2tpbGwucG9zaXRpb24sXG4gICAgICAgICAgICBhc3NvY2lhdGlvbkNsYXNzOiBwcm9kdWN0U2tpbGwuYXNzb2NpYXRpb25DbGFzcyxcbiAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RTa2lsbC5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgc2tpbGxHcm91cDogcHJvZHVjdFNraWxsLnNraWxsR3JvdXAsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBhc3NvY2lhdGVkOiB0aGlzLmluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RTa2lsbCksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgYXNzZXRzOiB0aGlzLmluY2x1ZGVBc3NldHMocHJvZHVjdFNraWxsKSxcbiAgICAgICAgICAgIHByb2R1Y3RzOiB0aGlzLmluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0U2tpbGwpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0U2tpbGw6IFByb2R1Y3RTa2lsbEludGVyZmFjZSk6IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3RTa2lsbCwgJ2Fzc29jaWF0ZWQnLCBuZXcgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2V0cyhwcm9kdWN0U2tpbGw6IFByb2R1Y3RTa2lsbEludGVyZmFjZSk6IEFycmF5PEFzc2V0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdFNraWxsLCAnYXNzZXRzJywgbmV3IEFzc2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RTa2lsbDogUHJvZHVjdFNraWxsSW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RTa2lsbCwgJ3Byb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=