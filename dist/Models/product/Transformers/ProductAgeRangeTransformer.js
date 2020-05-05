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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdEFnZVJhbmdlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUHJvZHVjdEFnZVJhbmdlVHJhbnNmb3JtZXIiLCJwcm9kdWN0QWdlUmFuZ2UiLCJQcm9kdWN0QWdlUmFuZ2UiLCJpZCIsImhhc1BhZ2UiLCJzbHVnIiwiaGVhZGVyRGVzY3JpcHRpb24iLCJoZWFkZXJJbWFnZSIsInBvc2l0aW9uIiwiYXNzb2NpYXRpb25DbGFzcyIsInByb2R1Y3RzQ291bnQiLCJhc3NvY2lhdGVkIiwiaW5jbHVkZUFzc29jaWF0ZWQiLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsIml0ZW0iLCJQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciIsImNvbGxlY3Rpb24iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFJQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsMEI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsZSxFQUE0RDtBQUNoRSxhQUFPLElBQUlDLDJCQUFKLENBQW9CO0FBQ3ZCQyxRQUFBQSxFQUFFLEVBQUVGLGVBQWUsQ0FBQ0UsRUFERztBQUV2QkMsUUFBQUEsT0FBTyxFQUFFSCxlQUFlLENBQUNHLE9BRkY7QUFHdkJDLFFBQUFBLElBQUksRUFBRUosZUFBZSxDQUFDSSxJQUhDO0FBSXZCQyxRQUFBQSxpQkFBaUIsRUFBRUwsZUFBZSxDQUFDSyxpQkFKWjtBQUt2QkMsUUFBQUEsV0FBVyxFQUFFTixlQUFlLENBQUNNLFdBTE47QUFNdkJDLFFBQUFBLFFBQVEsRUFBRVAsZUFBZSxDQUFDTyxRQU5IO0FBT3ZCQyxRQUFBQSxnQkFBZ0IsRUFBRVIsZUFBZSxDQUFDUSxnQkFQWDtBQVF2QkMsUUFBQUEsYUFBYSxFQUFFVCxlQUFlLENBQUNTLGFBUlI7QUFTdkI7QUFDQUMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCWCxlQUF2QixDQVZXO0FBV3ZCO0FBQ0FZLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCYixlQUFyQjtBQVphLE9BQXBCLENBQVA7QUFjSDs7O3NDQUVpQkEsZSxFQUErRTtBQUM3RixhQUFPLEtBQUtjLElBQUwsQ0FBVWQsZUFBVixFQUEyQixZQUEzQixFQUF5QyxJQUFJZSx5Q0FBSixFQUF6QyxDQUFQO0FBQ0g7OztvQ0FFZWYsZSxFQUFvRTtBQUNoRixhQUFPLEtBQUtnQixVQUFMLENBQWdCaEIsZUFBaEIsRUFBaUMsVUFBakMsRUFBNkMsSUFBSWlCLDhCQUFKLEVBQTdDLENBQVA7QUFDSDs7OztFQTdCbURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RBZ2VSYW5nZSBmcm9tICcuLi9Qcm9kdWN0QWdlUmFuZ2UnO1xuaW1wb3J0IFByb2R1Y3RBZ2VSYW5nZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RBZ2VSYW5nZSc7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RBZ2VSYW5nZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBwcm9kdWN0IGFnZSByYW5nZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RBZ2VSYW5nZVxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdEFnZVJhbmdlOiBQcm9kdWN0QWdlUmFuZ2VJbnRlcmZhY2UpOiBQcm9kdWN0QWdlUmFuZ2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RBZ2VSYW5nZSh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdEFnZVJhbmdlLmlkLFxuICAgICAgICAgICAgaGFzUGFnZTogcHJvZHVjdEFnZVJhbmdlLmhhc1BhZ2UsXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0QWdlUmFuZ2Uuc2x1ZyxcbiAgICAgICAgICAgIGhlYWRlckRlc2NyaXB0aW9uOiBwcm9kdWN0QWdlUmFuZ2UuaGVhZGVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBoZWFkZXJJbWFnZTogcHJvZHVjdEFnZVJhbmdlLmhlYWRlckltYWdlLFxuICAgICAgICAgICAgcG9zaXRpb246IHByb2R1Y3RBZ2VSYW5nZS5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RBZ2VSYW5nZS5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdEFnZVJhbmdlLnByb2R1Y3RzQ291bnQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBhc3NvY2lhdGVkOiB0aGlzLmluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RBZ2VSYW5nZSksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RBZ2VSYW5nZSksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RBZ2VSYW5nZTogUHJvZHVjdEFnZVJhbmdlSW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdEFnZVJhbmdlLCAnYXNzb2NpYXRlZCcsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdEFnZVJhbmdlOiBQcm9kdWN0QWdlUmFuZ2VJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdEFnZVJhbmdlLCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==