"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductManufacturer = _interopRequireDefault(require("../ProductManufacturer"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdE1hbnVmYWN0dXJlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RNYW51ZmFjdHVyZXJUcmFuc2Zvcm1lciIsInByb2R1Y3RNYW51ZmFjdHVyZXIiLCJQcm9kdWN0TWFudWZhY3R1cmVyIiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50IiwiYXNzb2NpYXRlZCIsImluY2x1ZGVBc3NvY2lhdGVkIiwicHJvZHVjdHMiLCJpbmNsdWRlUHJvZHVjdHMiLCJpdGVtIiwiUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIiLCJjb2xsZWN0aW9uIiwiUHJvZHVjdFRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDhCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLG1CLEVBQXdFO0FBQzVFLGFBQU8sSUFBSUMsK0JBQUosQ0FBd0I7QUFDM0JDLFFBQUFBLEVBQUUsRUFBRUYsbUJBQW1CLENBQUNFLEVBREc7QUFFM0JDLFFBQUFBLE9BQU8sRUFBRUgsbUJBQW1CLENBQUNHLE9BRkY7QUFHM0JDLFFBQUFBLElBQUksRUFBRUosbUJBQW1CLENBQUNJLElBSEM7QUFJM0JDLFFBQUFBLGlCQUFpQixFQUFFTCxtQkFBbUIsQ0FBQ0ssaUJBSlo7QUFLM0JDLFFBQUFBLFdBQVcsRUFBRU4sbUJBQW1CLENBQUNNLFdBTE47QUFNM0JDLFFBQUFBLFFBQVEsRUFBRVAsbUJBQW1CLENBQUNPLFFBTkg7QUFPM0JDLFFBQUFBLGdCQUFnQixFQUFFUixtQkFBbUIsQ0FBQ1EsZ0JBUFg7QUFRM0JDLFFBQUFBLGFBQWEsRUFBRVQsbUJBQW1CLENBQUNTLGFBUlI7QUFTM0I7QUFDQUMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCWCxtQkFBdkIsQ0FWZTtBQVczQjtBQUNBWSxRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQmIsbUJBQXJCO0FBWmlCLE9BQXhCLENBQVA7QUFjSDs7O3NDQUVpQkEsbUIsRUFBdUY7QUFDckcsYUFBTyxLQUFLYyxJQUFMLENBQVVkLG1CQUFWLEVBQStCLFlBQS9CLEVBQTZDLElBQUllLHlDQUFKLEVBQTdDLENBQVA7QUFDSDs7O29DQUVlZixtQixFQUE0RTtBQUN4RixhQUFPLEtBQUtnQixVQUFMLENBQWdCaEIsbUJBQWhCLEVBQXFDLFVBQXJDLEVBQWlELElBQUlpQiw4QkFBSixFQUFqRCxDQUFQO0FBQ0g7Ozs7RUE3QnVEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0TWFudWZhY3R1cmVyIGZyb20gJy4uL1Byb2R1Y3RNYW51ZmFjdHVyZXInO1xuaW1wb3J0IFByb2R1Y3RNYW51ZmFjdHVyZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0TWFudWZhY3R1cmVyJztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdE1hbnVmYWN0dXJlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBwcm9kdWN0IGFnZSByYW5nZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RNYW51ZmFjdHVyZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKHByb2R1Y3RNYW51ZmFjdHVyZXI6IFByb2R1Y3RNYW51ZmFjdHVyZXJJbnRlcmZhY2UpOiBQcm9kdWN0TWFudWZhY3R1cmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0TWFudWZhY3R1cmVyKHtcbiAgICAgICAgICAgIGlkOiBwcm9kdWN0TWFudWZhY3R1cmVyLmlkLFxuICAgICAgICAgICAgaGFzUGFnZTogcHJvZHVjdE1hbnVmYWN0dXJlci5oYXNQYWdlLFxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdE1hbnVmYWN0dXJlci5zbHVnLFxuICAgICAgICAgICAgaGVhZGVyRGVzY3JpcHRpb246IHByb2R1Y3RNYW51ZmFjdHVyZXIuaGVhZGVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBoZWFkZXJJbWFnZTogcHJvZHVjdE1hbnVmYWN0dXJlci5oZWFkZXJJbWFnZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0TWFudWZhY3R1cmVyLnBvc2l0aW9uLFxuICAgICAgICAgICAgYXNzb2NpYXRpb25DbGFzczogcHJvZHVjdE1hbnVmYWN0dXJlci5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdE1hbnVmYWN0dXJlci5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0TWFudWZhY3R1cmVyKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdE1hbnVmYWN0dXJlciksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RNYW51ZmFjdHVyZXI6IFByb2R1Y3RNYW51ZmFjdHVyZXJJbnRlcmZhY2UpOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0TWFudWZhY3R1cmVyLCAnYXNzb2NpYXRlZCcsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdE1hbnVmYWN0dXJlcjogUHJvZHVjdE1hbnVmYWN0dXJlckludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0TWFudWZhY3R1cmVyLCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==