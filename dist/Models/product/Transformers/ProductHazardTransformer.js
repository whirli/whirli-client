"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductHazard = _interopRequireDefault(require("../ProductHazard"));

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

var ProductHazardTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductHazardTransformer, _BaseTransformer);

  function ProductHazardTransformer() {
    _classCallCheck(this, ProductHazardTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductHazardTransformer).apply(this, arguments));
  }

  _createClass(ProductHazardTransformer, [{
    key: "mapData",

    /**
     * Map a product age range response
     *
     * @param productHazard
     */
    value: function mapData(productHazard) {
      return new _ProductHazard["default"]({
        id: productHazard.id,
        hasPage: productHazard.hasPage,
        slug: productHazard.slug,
        headerDescription: productHazard.headerDescription,
        headerImage: productHazard.headerImage,
        position: productHazard.position,
        associationClass: productHazard.associationClass,
        productsCount: productHazard.productsCount,
        // belongs to
        associated: this.includeAssociated(productHazard),
        // has many
        products: this.includeProducts(productHazard)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productHazard) {
      return this.item(productHazard, 'associated', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(productHazard) {
      return this.collection(productHazard, 'products', new _ProductTransformer["default"]());
    }
  }]);

  return ProductHazardTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductHazardTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdEhhemFyZFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RIYXphcmRUcmFuc2Zvcm1lciIsInByb2R1Y3RIYXphcmQiLCJQcm9kdWN0SGF6YXJkIiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50IiwiYXNzb2NpYXRlZCIsImluY2x1ZGVBc3NvY2lhdGVkIiwicHJvZHVjdHMiLCJpbmNsdWRlUHJvZHVjdHMiLCJpdGVtIiwiUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHdCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLGEsRUFBc0Q7QUFDMUQsYUFBTyxJQUFJQyx5QkFBSixDQUFrQjtBQUNyQkMsUUFBQUEsRUFBRSxFQUFFRixhQUFhLENBQUNFLEVBREc7QUFFckJDLFFBQUFBLE9BQU8sRUFBRUgsYUFBYSxDQUFDRyxPQUZGO0FBR3JCQyxRQUFBQSxJQUFJLEVBQUVKLGFBQWEsQ0FBQ0ksSUFIQztBQUlyQkMsUUFBQUEsaUJBQWlCLEVBQUVMLGFBQWEsQ0FBQ0ssaUJBSlo7QUFLckJDLFFBQUFBLFdBQVcsRUFBRU4sYUFBYSxDQUFDTSxXQUxOO0FBTXJCQyxRQUFBQSxRQUFRLEVBQUVQLGFBQWEsQ0FBQ08sUUFOSDtBQU9yQkMsUUFBQUEsZ0JBQWdCLEVBQUVSLGFBQWEsQ0FBQ1EsZ0JBUFg7QUFRckJDLFFBQUFBLGFBQWEsRUFBRVQsYUFBYSxDQUFDUyxhQVJSO0FBU3JCO0FBQ0FDLFFBQUFBLFVBQVUsRUFBRSxLQUFLQyxpQkFBTCxDQUF1QlgsYUFBdkIsQ0FWUztBQVdyQjtBQUNBWSxRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQmIsYUFBckI7QUFaVyxPQUFsQixDQUFQO0FBY0g7OztzQ0FFaUJBLGEsRUFBMkU7QUFDekYsYUFBTyxLQUFLYyxJQUFMLENBQVVkLGFBQVYsRUFBeUIsWUFBekIsRUFBdUMsSUFBSWUseUNBQUosRUFBdkMsQ0FBUDtBQUNIOzs7b0NBRWVmLGEsRUFBZ0U7QUFDNUUsYUFBTyxLQUFLZ0IsVUFBTCxDQUFnQmhCLGFBQWhCLEVBQStCLFVBQS9CLEVBQTJDLElBQUlpQiw4QkFBSixFQUEzQyxDQUFQO0FBQ0g7Ozs7RUE3QmlEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0SGF6YXJkIGZyb20gJy4uL1Byb2R1Y3RIYXphcmQnO1xuaW1wb3J0IFByb2R1Y3RIYXphcmRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RIYXphcmQnO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RIYXphcmRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgcHJvZHVjdCBhZ2UgcmFuZ2UgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0SGF6YXJkXG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0SGF6YXJkOiBQcm9kdWN0SGF6YXJkSW50ZXJmYWNlKTogUHJvZHVjdEhhemFyZCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEhhemFyZCh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdEhhemFyZC5pZCxcbiAgICAgICAgICAgIGhhc1BhZ2U6IHByb2R1Y3RIYXphcmQuaGFzUGFnZSxcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3RIYXphcmQuc2x1ZyxcbiAgICAgICAgICAgIGhlYWRlckRlc2NyaXB0aW9uOiBwcm9kdWN0SGF6YXJkLmhlYWRlckRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaGVhZGVySW1hZ2U6IHByb2R1Y3RIYXphcmQuaGVhZGVySW1hZ2UsXG4gICAgICAgICAgICBwb3NpdGlvbjogcHJvZHVjdEhhemFyZC5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RIYXphcmQuYXNzb2NpYXRpb25DbGFzcyxcbiAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RIYXphcmQucHJvZHVjdHNDb3VudCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGFzc29jaWF0ZWQ6IHRoaXMuaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdEhhemFyZCksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RIYXphcmQpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0SGF6YXJkOiBQcm9kdWN0SGF6YXJkSW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdEhhemFyZCwgJ2Fzc29jaWF0ZWQnLCBuZXcgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RIYXphcmQ6IFByb2R1Y3RIYXphcmRJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdEhhemFyZCwgJ3Byb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=