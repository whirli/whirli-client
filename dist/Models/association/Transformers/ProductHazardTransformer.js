"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductHazard = _interopRequireDefault(require("../ProductHazard"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RIYXphcmRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0SGF6YXJkVHJhbnNmb3JtZXIiLCJwcm9kdWN0SGF6YXJkIiwiUHJvZHVjdEhhemFyZCIsImlkIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsInByb2R1Y3RzIiwiaW5jbHVkZVByb2R1Y3RzIiwiaXRlbSIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlByb2R1Y3RUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx3Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxhLEVBQXNEO0FBQzFELGFBQU8sSUFBSUMseUJBQUosQ0FBa0I7QUFDckJDLFFBQUFBLEVBQUUsRUFBRUYsYUFBYSxDQUFDRSxFQURHO0FBRXJCQyxRQUFBQSxRQUFRLEVBQUVILGFBQWEsQ0FBQ0csUUFGSDtBQUdyQkMsUUFBQUEsZ0JBQWdCLEVBQUVKLGFBQWEsQ0FBQ0ksZ0JBSFg7QUFJckJDLFFBQUFBLGFBQWEsRUFBRUwsYUFBYSxDQUFDSyxhQUpSO0FBS3JCO0FBQ0FDLFFBQUFBLFVBQVUsRUFBRSxLQUFLQyxpQkFBTCxDQUF1QlAsYUFBdkIsQ0FOUztBQU9yQjtBQUNBUSxRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQlQsYUFBckI7QUFSVyxPQUFsQixDQUFQO0FBVUg7OztzQ0FFaUJBLGEsRUFBMkU7QUFDekYsYUFBTyxLQUFLVSxJQUFMLENBQVVWLGFBQVYsRUFBeUIsWUFBekIsRUFBdUMsSUFBSVcseUNBQUosRUFBdkMsQ0FBUDtBQUNIOzs7b0NBRWVYLGEsRUFBZ0U7QUFDNUUsYUFBTyxLQUFLWSxVQUFMLENBQWdCWixhQUFoQixFQUErQixVQUEvQixFQUEyQyxJQUFJYSw4QkFBSixFQUEzQyxDQUFQO0FBQ0g7Ozs7RUF6QmlEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0SGF6YXJkIGZyb20gJy4uL1Byb2R1Y3RIYXphcmQnO1xuaW1wb3J0IFByb2R1Y3RIYXphcmRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0SGF6YXJkJztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0SGF6YXJkVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHByb2R1Y3QgYWdlIHJhbmdlIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdEhhemFyZFxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdEhhemFyZDogUHJvZHVjdEhhemFyZEludGVyZmFjZSk6IFByb2R1Y3RIYXphcmQge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RIYXphcmQoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RIYXphcmQuaWQsXG4gICAgICAgICAgICBwb3NpdGlvbjogcHJvZHVjdEhhemFyZC5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RIYXphcmQuYXNzb2NpYXRpb25DbGFzcyxcbiAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RIYXphcmQucHJvZHVjdHNDb3VudCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGFzc29jaWF0ZWQ6IHRoaXMuaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdEhhemFyZCksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RIYXphcmQpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0SGF6YXJkOiBQcm9kdWN0SGF6YXJkSW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdEhhemFyZCwgJ2Fzc29jaWF0ZWQnLCBuZXcgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RIYXphcmQ6IFByb2R1Y3RIYXphcmRJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdEhhemFyZCwgJ3Byb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=