"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductAssociation = _interopRequireDefault(require("../ProductAssociation"));

var _ProductTransformer = _interopRequireDefault(require("../../product/Transformers/ProductTransformer"));

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

var ProductAssociationTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductAssociationTransformer, _BaseTransformer);

  function ProductAssociationTransformer() {
    _classCallCheck(this, ProductAssociationTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductAssociationTransformer).apply(this, arguments));
  }

  _createClass(ProductAssociationTransformer, [{
    key: "mapData",

    /**
     * Map a product-association response
     *
     * @param productAssociation
     */
    value: function mapData(productAssociation) {
      return new _ProductAssociation["default"]({
        id: productAssociation.id,
        name: productAssociation.name,
        active: productAssociation.active,
        position: productAssociation.position,
        associationClass: productAssociation.associationClass,
        productsCount: productAssociation.productsCount,
        association: productAssociation.association,
        // has many
        products: this.includeProducts(productAssociation)
      });
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(productAssociation) {
      return this.collection(productAssociation, 'products', new _ProductTransformer["default"]());
    }
  }]);

  return ProductAssociationTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductAssociationTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIiLCJwcm9kdWN0QXNzb2NpYXRpb24iLCJQcm9kdWN0QXNzb2NpYXRpb24iLCJpZCIsIm5hbWUiLCJhY3RpdmUiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50IiwiYXNzb2NpYXRpb24iLCJwcm9kdWN0cyIsImluY2x1ZGVQcm9kdWN0cyIsImNvbGxlY3Rpb24iLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsNkI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsa0IsRUFBcUU7QUFDekUsYUFBTyxJQUFJQyw4QkFBSixDQUF1QjtBQUMxQkMsUUFBQUEsRUFBRSxFQUFFRixrQkFBa0IsQ0FBQ0UsRUFERztBQUUxQkMsUUFBQUEsSUFBSSxFQUFFSCxrQkFBa0IsQ0FBQ0csSUFGQztBQUcxQkMsUUFBQUEsTUFBTSxFQUFFSixrQkFBa0IsQ0FBQ0ksTUFIRDtBQUkxQkMsUUFBQUEsUUFBUSxFQUFFTCxrQkFBa0IsQ0FBQ0ssUUFKSDtBQUsxQkMsUUFBQUEsZ0JBQWdCLEVBQUVOLGtCQUFrQixDQUFDTSxnQkFMWDtBQU0xQkMsUUFBQUEsYUFBYSxFQUFFUCxrQkFBa0IsQ0FBQ08sYUFOUjtBQU8xQkMsUUFBQUEsV0FBVyxFQUFFUixrQkFBa0IsQ0FBQ1EsV0FQTjtBQVExQjtBQUNBQyxRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQlYsa0JBQXJCO0FBVGdCLE9BQXZCLENBQVA7QUFXSDs7O29DQUVlQSxrQixFQUEwRTtBQUN0RixhQUFPLEtBQUtXLFVBQUwsQ0FBZ0JYLGtCQUFoQixFQUFvQyxVQUFwQyxFQUFnRCxJQUFJWSw4QkFBSixFQUFoRCxDQUFQO0FBQ0g7Ozs7RUF0QnNEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb24gZnJvbSAnLi4vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgcHJvZHVjdC1hc3NvY2lhdGlvbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RBc3NvY2lhdGlvblxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdEFzc29jaWF0aW9uOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UpOiBQcm9kdWN0QXNzb2NpYXRpb24ge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RBc3NvY2lhdGlvbih7XG4gICAgICAgICAgICBpZDogcHJvZHVjdEFzc29jaWF0aW9uLmlkLFxuICAgICAgICAgICAgbmFtZTogcHJvZHVjdEFzc29jaWF0aW9uLm5hbWUsXG4gICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RBc3NvY2lhdGlvbi5hY3RpdmUsXG4gICAgICAgICAgICBwb3NpdGlvbjogcHJvZHVjdEFzc29jaWF0aW9uLnBvc2l0aW9uLFxuICAgICAgICAgICAgYXNzb2NpYXRpb25DbGFzczogcHJvZHVjdEFzc29jaWF0aW9uLmFzc29jaWF0aW9uQ2xhc3MsXG4gICAgICAgICAgICBwcm9kdWN0c0NvdW50OiBwcm9kdWN0QXNzb2NpYXRpb24ucHJvZHVjdHNDb3VudCxcbiAgICAgICAgICAgIGFzc29jaWF0aW9uOiBwcm9kdWN0QXNzb2NpYXRpb24uYXNzb2NpYXRpb24sXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RBc3NvY2lhdGlvbiksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0QXNzb2NpYXRpb246IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0QXNzb2NpYXRpb24sICdwcm9kdWN0cycsIG5ldyBQcm9kdWN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19