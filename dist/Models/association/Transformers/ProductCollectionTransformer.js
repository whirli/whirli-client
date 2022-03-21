"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var ProductCollectionTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductCollectionTransformer, _BaseTransformer);

  var _super = _createSuper(ProductCollectionTransformer);

  function ProductCollectionTransformer() {
    _classCallCheck(this, ProductCollectionTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ProductCollectionTransformer, [{
    key: "mapData",
    value:
    /**
     * Map a product age range response
     *
     * @param productCollection
     */
    function mapData(productCollection) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RDb2xsZWN0aW9uVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUHJvZHVjdENvbGxlY3Rpb25UcmFuc2Zvcm1lciIsInByb2R1Y3RDb2xsZWN0aW9uIiwiUHJvZHVjdENvbGxlY3Rpb24iLCJpZCIsImhhc1BhZ2UiLCJzbHVnIiwiaGVhZGVyRGVzY3JpcHRpb24iLCJoZWFkZXJJbWFnZSIsImZlYXR1cmVkIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsImFzc2V0cyIsImluY2x1ZGVBc3NldHMiLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsIml0ZW0iLCJQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJBc3NldFRyYW5zZm9ybWVyIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw0Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLHFCQUFRQyxpQkFBUixFQUEwRTtBQUN0RSxhQUFPLElBQUlDLDZCQUFKLENBQXNCO0FBQ3pCQyxRQUFBQSxFQUFFLEVBQUVGLGlCQUFpQixDQUFDRSxFQURHO0FBRXpCQyxRQUFBQSxPQUFPLEVBQUVILGlCQUFpQixDQUFDRyxPQUZGO0FBR3pCQyxRQUFBQSxJQUFJLEVBQUVKLGlCQUFpQixDQUFDSSxJQUhDO0FBSXpCQyxRQUFBQSxpQkFBaUIsRUFBRUwsaUJBQWlCLENBQUNLLGlCQUpaO0FBS3pCQyxRQUFBQSxXQUFXLEVBQUVOLGlCQUFpQixDQUFDTSxXQUxOO0FBTXpCQyxRQUFBQSxRQUFRLEVBQUVQLGlCQUFpQixDQUFDTyxRQU5IO0FBT3pCQyxRQUFBQSxRQUFRLEVBQUVSLGlCQUFpQixDQUFDUSxRQVBIO0FBUXpCQyxRQUFBQSxnQkFBZ0IsRUFBRVQsaUJBQWlCLENBQUNTLGdCQVJYO0FBU3pCQyxRQUFBQSxhQUFhLEVBQUVWLGlCQUFpQixDQUFDVSxhQVRSO0FBVXpCO0FBQ0FDLFFBQUFBLFVBQVUsRUFBRSxLQUFLQyxpQkFBTCxDQUF1QlosaUJBQXZCLENBWGE7QUFZekI7QUFDQWEsUUFBQUEsTUFBTSxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJkLGlCQUFuQixDQWJpQjtBQWN6QmUsUUFBQUEsUUFBUSxFQUFFLEtBQUtDLGVBQUwsQ0FBcUJoQixpQkFBckI7QUFkZSxPQUF0QixDQUFQO0FBZ0JIOzs7V0FFRCwyQkFBa0JBLGlCQUFsQixFQUFxRztBQUNqRyxhQUFPLEtBQUtpQixJQUFMLENBQVVqQixpQkFBVixFQUE2QixZQUE3QixFQUEyQyxJQUFJa0IseUNBQUosRUFBM0MsQ0FBUDtBQUNIOzs7V0FFRCx1QkFBY2xCLGlCQUFkLEVBQW9GO0FBQ2hGLGFBQU8sS0FBS21CLFVBQUwsQ0FBZ0JuQixpQkFBaEIsRUFBbUMsUUFBbkMsRUFBNkMsSUFBSW9CLDRCQUFKLEVBQTdDLENBQVA7QUFDSDs7O1dBRUQseUJBQWdCcEIsaUJBQWhCLEVBQXdGO0FBQ3BGLGFBQU8sS0FBS21CLFVBQUwsQ0FBZ0JuQixpQkFBaEIsRUFBbUMsVUFBbkMsRUFBK0MsSUFBSXFCLDhCQUFKLEVBQS9DLENBQVA7QUFDSDs7OztFQW5DcURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RDb2xsZWN0aW9uIGZyb20gJy4uL1Byb2R1Y3RDb2xsZWN0aW9uJztcbmltcG9ydCBQcm9kdWN0Q29sbGVjdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RDb2xsZWN0aW9uJztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IEFzc2V0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzZXQvQXNzZXQnO1xuaW1wb3J0IEFzc2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYXNzZXQvVHJhbnNmb3JtZXJzL0Fzc2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0Q29sbGVjdGlvblRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBwcm9kdWN0IGFnZSByYW5nZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RDb2xsZWN0aW9uXG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0Q29sbGVjdGlvbjogUHJvZHVjdENvbGxlY3Rpb25JbnRlcmZhY2UpOiBQcm9kdWN0Q29sbGVjdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdENvbGxlY3Rpb24oe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RDb2xsZWN0aW9uLmlkLFxuICAgICAgICAgICAgaGFzUGFnZTogcHJvZHVjdENvbGxlY3Rpb24uaGFzUGFnZSxcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3RDb2xsZWN0aW9uLnNsdWcsXG4gICAgICAgICAgICBoZWFkZXJEZXNjcmlwdGlvbjogcHJvZHVjdENvbGxlY3Rpb24uaGVhZGVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBoZWFkZXJJbWFnZTogcHJvZHVjdENvbGxlY3Rpb24uaGVhZGVySW1hZ2UsXG4gICAgICAgICAgICBmZWF0dXJlZDogcHJvZHVjdENvbGxlY3Rpb24uZmVhdHVyZWQsXG4gICAgICAgICAgICBwb3NpdGlvbjogcHJvZHVjdENvbGxlY3Rpb24ucG9zaXRpb24sXG4gICAgICAgICAgICBhc3NvY2lhdGlvbkNsYXNzOiBwcm9kdWN0Q29sbGVjdGlvbi5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdENvbGxlY3Rpb24ucHJvZHVjdHNDb3VudCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGFzc29jaWF0ZWQ6IHRoaXMuaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdENvbGxlY3Rpb24pLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5pbmNsdWRlQXNzZXRzKHByb2R1Y3RDb2xsZWN0aW9uKSxcbiAgICAgICAgICAgIHByb2R1Y3RzOiB0aGlzLmluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0Q29sbGVjdGlvbiksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RDb2xsZWN0aW9uOiBQcm9kdWN0Q29sbGVjdGlvbkludGVyZmFjZSk6IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3RDb2xsZWN0aW9uLCAnYXNzb2NpYXRlZCcsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzZXRzKHByb2R1Y3RDb2xsZWN0aW9uOiBQcm9kdWN0Q29sbGVjdGlvbkludGVyZmFjZSk6IEFycmF5PEFzc2V0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdENvbGxlY3Rpb24sICdhc3NldHMnLCBuZXcgQXNzZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdENvbGxlY3Rpb246IFByb2R1Y3RDb2xsZWN0aW9uSW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RDb2xsZWN0aW9uLCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==