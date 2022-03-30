"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProductSkillTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductSkillTransformer, _BaseTransformer);

  var _super = _createSuper(ProductSkillTransformer);

  function ProductSkillTransformer() {
    _classCallCheck(this, ProductSkillTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ProductSkillTransformer, [{
    key: "mapData",
    value:
    /**
     * Map a product skill response
     *
     * @param productSkill
     */
    function mapData(productSkill) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RTa2lsbFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RTa2lsbFRyYW5zZm9ybWVyIiwicHJvZHVjdFNraWxsIiwiUHJvZHVjdFNraWxsIiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcmltYXJ5RGVzY3JpcHRpb24iLCJhZGRpdGlvbmFsRGVzY3JpcHRpb24iLCJwcm9kdWN0c0NvdW50Iiwic2tpbGxHcm91cCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsImFzc2V0cyIsImluY2x1ZGVBc3NldHMiLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsIml0ZW0iLCJQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJBc3NldFRyYW5zZm9ybWVyIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx1Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLHFCQUFRQyxZQUFSLEVBQTJEO0FBQ3ZELGFBQU8sSUFBSUMsd0JBQUosQ0FBaUI7QUFDcEJDLFFBQUFBLEVBQUUsRUFBRUYsWUFBWSxDQUFDRSxFQURHO0FBRXBCQyxRQUFBQSxPQUFPLEVBQUVILFlBQVksQ0FBQ0csT0FGRjtBQUdwQkMsUUFBQUEsSUFBSSxFQUFFSixZQUFZLENBQUNJLElBSEM7QUFJcEJDLFFBQUFBLGlCQUFpQixFQUFFTCxZQUFZLENBQUNLLGlCQUpaO0FBS3BCQyxRQUFBQSxXQUFXLEVBQUVOLFlBQVksQ0FBQ00sV0FMTjtBQU1wQkMsUUFBQUEsUUFBUSxFQUFFUCxZQUFZLENBQUNPLFFBTkg7QUFPcEJDLFFBQUFBLGdCQUFnQixFQUFFUixZQUFZLENBQUNRLGdCQVBYO0FBUXBCQyxRQUFBQSxrQkFBa0IsRUFBRVQsWUFBWSxDQUFDUyxrQkFSYjtBQVNwQkMsUUFBQUEscUJBQXFCLEVBQUVWLFlBQVksQ0FBQ1UscUJBVGhCO0FBVXBCQyxRQUFBQSxhQUFhLEVBQUVYLFlBQVksQ0FBQ1csYUFWUjtBQVdwQkMsUUFBQUEsVUFBVSxFQUFFWixZQUFZLENBQUNZLFVBWEw7QUFZcEI7QUFDQUMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCZCxZQUF2QixDQWJRO0FBY3BCO0FBQ0FlLFFBQUFBLE1BQU0sRUFBRSxLQUFLQyxhQUFMLENBQW1CaEIsWUFBbkIsQ0FmWTtBQWdCcEJpQixRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQmxCLFlBQXJCO0FBaEJVLE9BQWpCLENBQVA7QUFrQkg7OztXQUVELDJCQUFrQkEsWUFBbEIsRUFBMkY7QUFDdkYsYUFBTyxLQUFLbUIsSUFBTCxDQUFVbkIsWUFBVixFQUF3QixZQUF4QixFQUFzQyxJQUFJb0IseUNBQUosRUFBdEMsQ0FBUDtBQUNIOzs7V0FFRCx1QkFBY3BCLFlBQWQsRUFBMEU7QUFDdEUsYUFBTyxLQUFLcUIsVUFBTCxDQUFnQnJCLFlBQWhCLEVBQThCLFFBQTlCLEVBQXdDLElBQUlzQiw0QkFBSixFQUF4QyxDQUFQO0FBQ0g7OztXQUVELHlCQUFnQnRCLFlBQWhCLEVBQThFO0FBQzFFLGFBQU8sS0FBS3FCLFVBQUwsQ0FBZ0JyQixZQUFoQixFQUE4QixVQUE5QixFQUEwQyxJQUFJdUIsOEJBQUosRUFBMUMsQ0FBUDtBQUNIOzs7O0VBckNnREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdFNraWxsIGZyb20gJy4uL1Byb2R1Y3RTa2lsbCc7XG5pbXBvcnQgUHJvZHVjdFNraWxsSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdFNraWxsJztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IEFzc2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXQnO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0U2tpbGxUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgcHJvZHVjdCBza2lsbCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RTa2lsbFxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdFNraWxsOiBQcm9kdWN0U2tpbGxJbnRlcmZhY2UpOiBQcm9kdWN0U2tpbGwge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RTa2lsbCh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdFNraWxsLmlkLFxuICAgICAgICAgICAgaGFzUGFnZTogcHJvZHVjdFNraWxsLmhhc1BhZ2UsXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0U2tpbGwuc2x1ZyxcbiAgICAgICAgICAgIGhlYWRlckRlc2NyaXB0aW9uOiBwcm9kdWN0U2tpbGwuaGVhZGVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBoZWFkZXJJbWFnZTogcHJvZHVjdFNraWxsLmhlYWRlckltYWdlLFxuICAgICAgICAgICAgcG9zaXRpb246IHByb2R1Y3RTa2lsbC5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RTa2lsbC5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJpbWFyeURlc2NyaXB0aW9uOiBwcm9kdWN0U2tpbGwucHJpbWFyeURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgYWRkaXRpb25hbERlc2NyaXB0aW9uOiBwcm9kdWN0U2tpbGwuYWRkaXRpb25hbERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdFNraWxsLnByb2R1Y3RzQ291bnQsXG4gICAgICAgICAgICBza2lsbEdyb3VwOiBwcm9kdWN0U2tpbGwuc2tpbGxHcm91cCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGFzc29jaWF0ZWQ6IHRoaXMuaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdFNraWxsKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBhc3NldHM6IHRoaXMuaW5jbHVkZUFzc2V0cyhwcm9kdWN0U2tpbGwpLFxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RTa2lsbCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RTa2lsbDogUHJvZHVjdFNraWxsSW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdFNraWxsLCAnYXNzb2NpYXRlZCcsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzZXRzKHByb2R1Y3RTa2lsbDogUHJvZHVjdFNraWxsSW50ZXJmYWNlKTogQXJyYXk8QXNzZXRJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0U2tpbGwsICdhc3NldHMnLCBuZXcgQXNzZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdFNraWxsOiBQcm9kdWN0U2tpbGxJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdFNraWxsLCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==