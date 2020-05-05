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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RIYXphcmRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0SGF6YXJkVHJhbnNmb3JtZXIiLCJwcm9kdWN0SGF6YXJkIiwiUHJvZHVjdEhhemFyZCIsImlkIiwiaGFzUGFnZSIsInNsdWciLCJoZWFkZXJEZXNjcmlwdGlvbiIsImhlYWRlckltYWdlIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsInByb2R1Y3RzIiwiaW5jbHVkZVByb2R1Y3RzIiwiaXRlbSIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlByb2R1Y3RUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx3Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxhLEVBQXNEO0FBQzFELGFBQU8sSUFBSUMseUJBQUosQ0FBa0I7QUFDckJDLFFBQUFBLEVBQUUsRUFBRUYsYUFBYSxDQUFDRSxFQURHO0FBRXJCQyxRQUFBQSxPQUFPLEVBQUVILGFBQWEsQ0FBQ0csT0FGRjtBQUdyQkMsUUFBQUEsSUFBSSxFQUFFSixhQUFhLENBQUNJLElBSEM7QUFJckJDLFFBQUFBLGlCQUFpQixFQUFFTCxhQUFhLENBQUNLLGlCQUpaO0FBS3JCQyxRQUFBQSxXQUFXLEVBQUVOLGFBQWEsQ0FBQ00sV0FMTjtBQU1yQkMsUUFBQUEsUUFBUSxFQUFFUCxhQUFhLENBQUNPLFFBTkg7QUFPckJDLFFBQUFBLGdCQUFnQixFQUFFUixhQUFhLENBQUNRLGdCQVBYO0FBUXJCQyxRQUFBQSxhQUFhLEVBQUVULGFBQWEsQ0FBQ1MsYUFSUjtBQVNyQjtBQUNBQyxRQUFBQSxVQUFVLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUJYLGFBQXZCLENBVlM7QUFXckI7QUFDQVksUUFBQUEsUUFBUSxFQUFFLEtBQUtDLGVBQUwsQ0FBcUJiLGFBQXJCO0FBWlcsT0FBbEIsQ0FBUDtBQWNIOzs7c0NBRWlCQSxhLEVBQTJFO0FBQ3pGLGFBQU8sS0FBS2MsSUFBTCxDQUFVZCxhQUFWLEVBQXlCLFlBQXpCLEVBQXVDLElBQUllLHlDQUFKLEVBQXZDLENBQVA7QUFDSDs7O29DQUVlZixhLEVBQWdFO0FBQzVFLGFBQU8sS0FBS2dCLFVBQUwsQ0FBZ0JoQixhQUFoQixFQUErQixVQUEvQixFQUEyQyxJQUFJaUIsOEJBQUosRUFBM0MsQ0FBUDtBQUNIOzs7O0VBN0JpREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdEhhemFyZCBmcm9tICcuLi9Qcm9kdWN0SGF6YXJkJztcbmltcG9ydCBQcm9kdWN0SGF6YXJkSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEhhemFyZCc7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEhhemFyZFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBwcm9kdWN0IGFnZSByYW5nZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RIYXphcmRcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RIYXphcmQ6IFByb2R1Y3RIYXphcmRJbnRlcmZhY2UpOiBQcm9kdWN0SGF6YXJkIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0SGF6YXJkKHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0SGF6YXJkLmlkLFxuICAgICAgICAgICAgaGFzUGFnZTogcHJvZHVjdEhhemFyZC5oYXNQYWdlLFxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdEhhemFyZC5zbHVnLFxuICAgICAgICAgICAgaGVhZGVyRGVzY3JpcHRpb246IHByb2R1Y3RIYXphcmQuaGVhZGVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBoZWFkZXJJbWFnZTogcHJvZHVjdEhhemFyZC5oZWFkZXJJbWFnZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0SGF6YXJkLnBvc2l0aW9uLFxuICAgICAgICAgICAgYXNzb2NpYXRpb25DbGFzczogcHJvZHVjdEhhemFyZC5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdEhhemFyZC5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0SGF6YXJkKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdEhhemFyZCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RIYXphcmQ6IFByb2R1Y3RIYXphcmRJbnRlcmZhY2UpOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0SGF6YXJkLCAnYXNzb2NpYXRlZCcsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdEhhemFyZDogUHJvZHVjdEhhemFyZEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0SGF6YXJkLCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==