"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductAgeRange = _interopRequireDefault(require("../ProductAgeRange"));

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
        // belongs to
        associated: this.includeAssociated(productAgeRange),
        // has many
        products: this.includeProducts(productAgeRange)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productAgeRange) {
      return this.item(productAgeRange, 'associated', new _ProductAssociationTransformer["default"]());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdEFnZVJhbmdlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUHJvZHVjdEFnZVJhbmdlVHJhbnNmb3JtZXIiLCJwcm9kdWN0QWdlUmFuZ2UiLCJQcm9kdWN0QWdlUmFuZ2UiLCJpZCIsImhhc1BhZ2UiLCJzbHVnIiwiaGVhZGVyRGVzY3JpcHRpb24iLCJoZWFkZXJJbWFnZSIsInBvc2l0aW9uIiwiYXNzb2NpYXRpb25DbGFzcyIsInByb2R1Y3RzQ291bnQiLCJhc3NvY2lhdGVkIiwiaW5jbHVkZUFzc29jaWF0ZWQiLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsIml0ZW0iLCJQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFJQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsMEI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsZSxFQUE0RDtBQUNoRSxhQUFPLElBQUlDLDJCQUFKLENBQW9CO0FBQ3ZCQyxRQUFBQSxFQUFFLEVBQUVGLGVBQWUsQ0FBQ0UsRUFERztBQUV2QkMsUUFBQUEsT0FBTyxFQUFFSCxlQUFlLENBQUNHLE9BRkY7QUFHdkJDLFFBQUFBLElBQUksRUFBRUosZUFBZSxDQUFDSSxJQUhDO0FBSXZCQyxRQUFBQSxpQkFBaUIsRUFBRUwsZUFBZSxDQUFDSyxpQkFKWjtBQUt2QkMsUUFBQUEsV0FBVyxFQUFFTixlQUFlLENBQUNNLFdBTE47QUFNdkJDLFFBQUFBLFFBQVEsRUFBRVAsZUFBZSxDQUFDTyxRQU5IO0FBT3ZCQyxRQUFBQSxnQkFBZ0IsRUFBRVIsZUFBZSxDQUFDUSxnQkFQWDtBQVF2QkMsUUFBQUEsYUFBYSxFQUFFVCxlQUFlLENBQUNTLGFBUlI7QUFTdkI7QUFDQUMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCWCxlQUF2QixDQVZXO0FBV3ZCO0FBQ0FZLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCYixlQUFyQjtBQVphLE9BQXBCLENBQVA7QUFjSDs7O3NDQUVpQkEsZSxFQUErRTtBQUM3RixhQUFPLEtBQUtjLElBQUwsQ0FBVWQsZUFBVixFQUEyQixZQUEzQixFQUF5QyxJQUFJZSx5Q0FBSixFQUF6QyxDQUFQO0FBQ0g7OztvQ0FFZWYsZSxFQUFvRTtBQUNoRixhQUFPLEtBQUtnQixVQUFMLENBQWdCaEIsZUFBaEIsRUFBaUMsVUFBakMsRUFBNkMsSUFBSWlCLDhCQUFKLEVBQTdDLENBQVA7QUFDSDs7OztFQTdCbURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RBZ2VSYW5nZSBmcm9tICcuLi9Qcm9kdWN0QWdlUmFuZ2UnO1xuaW1wb3J0IFByb2R1Y3RBZ2VSYW5nZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdEFnZVJhbmdlJztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0QWdlUmFuZ2VUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgcHJvZHVjdCBhZ2UgcmFuZ2UgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0QWdlUmFuZ2VcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RBZ2VSYW5nZTogUHJvZHVjdEFnZVJhbmdlSW50ZXJmYWNlKTogUHJvZHVjdEFnZVJhbmdlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QWdlUmFuZ2Uoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RBZ2VSYW5nZS5pZCxcbiAgICAgICAgICAgIGhhc1BhZ2U6IHByb2R1Y3RBZ2VSYW5nZS5oYXNQYWdlLFxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdEFnZVJhbmdlLnNsdWcsXG4gICAgICAgICAgICBoZWFkZXJEZXNjcmlwdGlvbjogcHJvZHVjdEFnZVJhbmdlLmhlYWRlckRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaGVhZGVySW1hZ2U6IHByb2R1Y3RBZ2VSYW5nZS5oZWFkZXJJbWFnZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0QWdlUmFuZ2UucG9zaXRpb24sXG4gICAgICAgICAgICBhc3NvY2lhdGlvbkNsYXNzOiBwcm9kdWN0QWdlUmFuZ2UuYXNzb2NpYXRpb25DbGFzcyxcbiAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RBZ2VSYW5nZS5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0QWdlUmFuZ2UpLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIHByb2R1Y3RzOiB0aGlzLmluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0QWdlUmFuZ2UpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0QWdlUmFuZ2U6IFByb2R1Y3RBZ2VSYW5nZUludGVyZmFjZSk6IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3RBZ2VSYW5nZSwgJ2Fzc29jaWF0ZWQnLCBuZXcgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RBZ2VSYW5nZTogUHJvZHVjdEFnZVJhbmdlSW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RBZ2VSYW5nZSwgJ3Byb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=