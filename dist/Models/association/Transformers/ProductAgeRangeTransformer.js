"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductAgeRange = _interopRequireDefault(require("../ProductAgeRange"));

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

var ProductAgeRangeTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductAgeRangeTransformer, _BaseTransformer);

  function ProductAgeRangeTransformer() {
    _classCallCheck(this, ProductAgeRangeTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductAgeRangeTransformer).apply(this, arguments));
  }

  _createClass(ProductAgeRangeTransformer, [{
    key: "mapData",

    /**
     * Map a product age range response
     *
     * @param productAgeRange
     */
    value: function mapData(productAgeRange) {
      return new _ProductAgeRange["default"]({
        id: productAgeRange.id,
        hasPage: productAgeRange.hasPage,
        slug: productAgeRange.slug,
        headerDescription: productAgeRange.headerDescription,
        headerImage: productAgeRange.headerImage,
        position: productAgeRange.position,
        associationClass: productAgeRange.associationClass,
        productsCount: productAgeRange.productsCount,
        ageGroup: productAgeRange.ageGroup,
        // belongs to
        associated: this.includeAssociated(productAgeRange),
        // has many
        assets: this.includeAssets(productAgeRange),
        products: this.includeProducts(productAgeRange)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productAgeRange) {
      return this.item(productAgeRange, 'associated', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeAssets",
    value: function includeAssets(productAgeRange) {
      return this.collection(productAgeRange, 'assets', new _AssetTransformer["default"]());
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(productAgeRange) {
      return this.collection(productAgeRange, 'products', new _ProductTransformer["default"]());
    }
  }]);

  return ProductAgeRangeTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductAgeRangeTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RBZ2VSYW5nZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RBZ2VSYW5nZVRyYW5zZm9ybWVyIiwicHJvZHVjdEFnZVJhbmdlIiwiUHJvZHVjdEFnZVJhbmdlIiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50IiwiYWdlR3JvdXAiLCJhc3NvY2lhdGVkIiwiaW5jbHVkZUFzc29jaWF0ZWQiLCJhc3NldHMiLCJpbmNsdWRlQXNzZXRzIiwicHJvZHVjdHMiLCJpbmNsdWRlUHJvZHVjdHMiLCJpdGVtIiwiUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiQXNzZXRUcmFuc2Zvcm1lciIsIlByb2R1Y3RUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUtBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSwwQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxlLEVBQTREO0FBQ2hFLGFBQU8sSUFBSUMsMkJBQUosQ0FBb0I7QUFDdkJDLFFBQUFBLEVBQUUsRUFBRUYsZUFBZSxDQUFDRSxFQURHO0FBRXZCQyxRQUFBQSxPQUFPLEVBQUVILGVBQWUsQ0FBQ0csT0FGRjtBQUd2QkMsUUFBQUEsSUFBSSxFQUFFSixlQUFlLENBQUNJLElBSEM7QUFJdkJDLFFBQUFBLGlCQUFpQixFQUFFTCxlQUFlLENBQUNLLGlCQUpaO0FBS3ZCQyxRQUFBQSxXQUFXLEVBQUVOLGVBQWUsQ0FBQ00sV0FMTjtBQU12QkMsUUFBQUEsUUFBUSxFQUFFUCxlQUFlLENBQUNPLFFBTkg7QUFPdkJDLFFBQUFBLGdCQUFnQixFQUFFUixlQUFlLENBQUNRLGdCQVBYO0FBUXZCQyxRQUFBQSxhQUFhLEVBQUVULGVBQWUsQ0FBQ1MsYUFSUjtBQVN2QkMsUUFBQUEsUUFBUSxFQUFFVixlQUFlLENBQUNVLFFBVEg7QUFVdkI7QUFDQUMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCWixlQUF2QixDQVhXO0FBWXZCO0FBQ0FhLFFBQUFBLE1BQU0sRUFBRSxLQUFLQyxhQUFMLENBQW1CZCxlQUFuQixDQWJlO0FBY3ZCZSxRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQmhCLGVBQXJCO0FBZGEsT0FBcEIsQ0FBUDtBQWdCSDs7O3NDQUVpQkEsZSxFQUErRTtBQUM3RixhQUFPLEtBQUtpQixJQUFMLENBQVVqQixlQUFWLEVBQTJCLFlBQTNCLEVBQXlDLElBQUlrQix5Q0FBSixFQUF6QyxDQUFQO0FBQ0g7OztrQ0FFYWxCLGUsRUFBa0U7QUFDNUUsYUFBTyxLQUFLbUIsVUFBTCxDQUFnQm5CLGVBQWhCLEVBQWlDLFFBQWpDLEVBQTJDLElBQUlvQiw0QkFBSixFQUEzQyxDQUFQO0FBQ0g7OztvQ0FFZXBCLGUsRUFBb0U7QUFDaEYsYUFBTyxLQUFLbUIsVUFBTCxDQUFnQm5CLGVBQWhCLEVBQWlDLFVBQWpDLEVBQTZDLElBQUlxQiw4QkFBSixFQUE3QyxDQUFQO0FBQ0g7Ozs7RUFuQ21EQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0QWdlUmFuZ2UgZnJvbSAnLi4vUHJvZHVjdEFnZVJhbmdlJztcbmltcG9ydCBQcm9kdWN0QWdlUmFuZ2VJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QWdlUmFuZ2UnO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgQXNzZXRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NldC9Bc3NldCc7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hc3NldC9UcmFuc2Zvcm1lcnMvQXNzZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RBZ2VSYW5nZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBwcm9kdWN0IGFnZSByYW5nZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RBZ2VSYW5nZVxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdEFnZVJhbmdlOiBQcm9kdWN0QWdlUmFuZ2VJbnRlcmZhY2UpOiBQcm9kdWN0QWdlUmFuZ2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RBZ2VSYW5nZSh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdEFnZVJhbmdlLmlkLFxuICAgICAgICAgICAgaGFzUGFnZTogcHJvZHVjdEFnZVJhbmdlLmhhc1BhZ2UsXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0QWdlUmFuZ2Uuc2x1ZyxcbiAgICAgICAgICAgIGhlYWRlckRlc2NyaXB0aW9uOiBwcm9kdWN0QWdlUmFuZ2UuaGVhZGVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBoZWFkZXJJbWFnZTogcHJvZHVjdEFnZVJhbmdlLmhlYWRlckltYWdlLFxuICAgICAgICAgICAgcG9zaXRpb246IHByb2R1Y3RBZ2VSYW5nZS5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RBZ2VSYW5nZS5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdEFnZVJhbmdlLnByb2R1Y3RzQ291bnQsXG4gICAgICAgICAgICBhZ2VHcm91cDogcHJvZHVjdEFnZVJhbmdlLmFnZUdyb3VwLFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0QWdlUmFuZ2UpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIGFzc2V0czogdGhpcy5pbmNsdWRlQXNzZXRzKHByb2R1Y3RBZ2VSYW5nZSksXG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdEFnZVJhbmdlKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdEFnZVJhbmdlOiBQcm9kdWN0QWdlUmFuZ2VJbnRlcmZhY2UpOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0QWdlUmFuZ2UsICdhc3NvY2lhdGVkJywgbmV3IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NldHMocHJvZHVjdEFnZVJhbmdlOiBQcm9kdWN0QWdlUmFuZ2VJbnRlcmZhY2UpOiBBcnJheTxBc3NldEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RBZ2VSYW5nZSwgJ2Fzc2V0cycsIG5ldyBBc3NldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0QWdlUmFuZ2U6IFByb2R1Y3RBZ2VSYW5nZUludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0QWdlUmFuZ2UsICdwcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19