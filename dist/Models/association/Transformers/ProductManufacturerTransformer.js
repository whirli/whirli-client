"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductManufacturer = _interopRequireDefault(require("../ProductManufacturer"));

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

var ProductManufacturerTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ProductManufacturerTransformer, _BaseTransformer);

  function ProductManufacturerTransformer() {
    _classCallCheck(this, ProductManufacturerTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductManufacturerTransformer).apply(this, arguments));
  }

  _createClass(ProductManufacturerTransformer, [{
    key: "mapData",

    /**
     * Map a product age range response
     *
     * @param productManufacturer
     */
    value: function mapData(productManufacturer) {
      return new _ProductManufacturer["default"]({
        id: productManufacturer.id,
        hasPage: productManufacturer.hasPage,
        slug: productManufacturer.slug,
        headerDescription: productManufacturer.headerDescription,
        headerImage: productManufacturer.headerImage,
        position: productManufacturer.position,
        associationClass: productManufacturer.associationClass,
        productsCount: productManufacturer.productsCount,
        // belongs to
        associated: this.includeAssociated(productManufacturer),
        // has many
        products: this.includeProducts(productManufacturer)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productManufacturer) {
      return this.item(productManufacturer, 'associated', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(productManufacturer) {
      return this.collection(productManufacturer, 'products', new _ProductTransformer["default"]());
    }
  }]);

  return ProductManufacturerTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductManufacturerTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RNYW51ZmFjdHVyZXJUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0TWFudWZhY3R1cmVyVHJhbnNmb3JtZXIiLCJwcm9kdWN0TWFudWZhY3R1cmVyIiwiUHJvZHVjdE1hbnVmYWN0dXJlciIsImlkIiwiaGFzUGFnZSIsInNsdWciLCJoZWFkZXJEZXNjcmlwdGlvbiIsImhlYWRlckltYWdlIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsInByb2R1Y3RzIiwiaW5jbHVkZVByb2R1Y3RzIiwiaXRlbSIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlByb2R1Y3RUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw4Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxtQixFQUF3RTtBQUM1RSxhQUFPLElBQUlDLCtCQUFKLENBQXdCO0FBQzNCQyxRQUFBQSxFQUFFLEVBQUVGLG1CQUFtQixDQUFDRSxFQURHO0FBRTNCQyxRQUFBQSxPQUFPLEVBQUVILG1CQUFtQixDQUFDRyxPQUZGO0FBRzNCQyxRQUFBQSxJQUFJLEVBQUVKLG1CQUFtQixDQUFDSSxJQUhDO0FBSTNCQyxRQUFBQSxpQkFBaUIsRUFBRUwsbUJBQW1CLENBQUNLLGlCQUpaO0FBSzNCQyxRQUFBQSxXQUFXLEVBQUVOLG1CQUFtQixDQUFDTSxXQUxOO0FBTTNCQyxRQUFBQSxRQUFRLEVBQUVQLG1CQUFtQixDQUFDTyxRQU5IO0FBTzNCQyxRQUFBQSxnQkFBZ0IsRUFBRVIsbUJBQW1CLENBQUNRLGdCQVBYO0FBUTNCQyxRQUFBQSxhQUFhLEVBQUVULG1CQUFtQixDQUFDUyxhQVJSO0FBUzNCO0FBQ0FDLFFBQUFBLFVBQVUsRUFBRSxLQUFLQyxpQkFBTCxDQUF1QlgsbUJBQXZCLENBVmU7QUFXM0I7QUFDQVksUUFBQUEsUUFBUSxFQUFFLEtBQUtDLGVBQUwsQ0FBcUJiLG1CQUFyQjtBQVppQixPQUF4QixDQUFQO0FBY0g7OztzQ0FFaUJBLG1CLEVBQXVGO0FBQ3JHLGFBQU8sS0FBS2MsSUFBTCxDQUFVZCxtQkFBVixFQUErQixZQUEvQixFQUE2QyxJQUFJZSx5Q0FBSixFQUE3QyxDQUFQO0FBQ0g7OztvQ0FFZWYsbUIsRUFBNEU7QUFDeEYsYUFBTyxLQUFLZ0IsVUFBTCxDQUFnQmhCLG1CQUFoQixFQUFxQyxVQUFyQyxFQUFpRCxJQUFJaUIsOEJBQUosRUFBakQsQ0FBUDtBQUNIOzs7O0VBN0J1REMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdE1hbnVmYWN0dXJlciBmcm9tICcuLi9Qcm9kdWN0TWFudWZhY3R1cmVyJztcbmltcG9ydCBQcm9kdWN0TWFudWZhY3R1cmVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdE1hbnVmYWN0dXJlcic7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYXNzb2NpYXRpb24vUHJvZHVjdEFzc29jaWF0aW9uJztcbmltcG9ydCBQcm9kdWN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdE1hbnVmYWN0dXJlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBwcm9kdWN0IGFnZSByYW5nZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RNYW51ZmFjdHVyZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RNYW51ZmFjdHVyZXI6IFByb2R1Y3RNYW51ZmFjdHVyZXJJbnRlcmZhY2UpOiBQcm9kdWN0TWFudWZhY3R1cmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0TWFudWZhY3R1cmVyKHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0TWFudWZhY3R1cmVyLmlkLFxuICAgICAgICAgICAgaGFzUGFnZTogcHJvZHVjdE1hbnVmYWN0dXJlci5oYXNQYWdlLFxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdE1hbnVmYWN0dXJlci5zbHVnLFxuICAgICAgICAgICAgaGVhZGVyRGVzY3JpcHRpb246IHByb2R1Y3RNYW51ZmFjdHVyZXIuaGVhZGVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBoZWFkZXJJbWFnZTogcHJvZHVjdE1hbnVmYWN0dXJlci5oZWFkZXJJbWFnZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0TWFudWZhY3R1cmVyLnBvc2l0aW9uLFxuICAgICAgICAgICAgYXNzb2NpYXRpb25DbGFzczogcHJvZHVjdE1hbnVmYWN0dXJlci5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdE1hbnVmYWN0dXJlci5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0TWFudWZhY3R1cmVyKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdE1hbnVmYWN0dXJlciksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RNYW51ZmFjdHVyZXI6IFByb2R1Y3RNYW51ZmFjdHVyZXJJbnRlcmZhY2UpOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0TWFudWZhY3R1cmVyLCAnYXNzb2NpYXRlZCcsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdE1hbnVmYWN0dXJlcjogUHJvZHVjdE1hbnVmYWN0dXJlckludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0TWFudWZhY3R1cmVyLCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==