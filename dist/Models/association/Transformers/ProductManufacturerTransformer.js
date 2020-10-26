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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProductManufacturerTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductManufacturerTransformer, _BaseTransformer);

  var _super = _createSuper(ProductManufacturerTransformer);

  function ProductManufacturerTransformer() {
    _classCallCheck(this, ProductManufacturerTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RNYW51ZmFjdHVyZXJUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0TWFudWZhY3R1cmVyVHJhbnNmb3JtZXIiLCJwcm9kdWN0TWFudWZhY3R1cmVyIiwiUHJvZHVjdE1hbnVmYWN0dXJlciIsImlkIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsInByb2R1Y3RzIiwiaW5jbHVkZVByb2R1Y3RzIiwiaXRlbSIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlByb2R1Y3RUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsOEI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7NEJBQ1lDLG1CLEVBQXdFO0FBQzVFLGFBQU8sSUFBSUMsK0JBQUosQ0FBd0I7QUFDM0JDLFFBQUFBLEVBQUUsRUFBRUYsbUJBQW1CLENBQUNFLEVBREc7QUFFM0JDLFFBQUFBLFFBQVEsRUFBRUgsbUJBQW1CLENBQUNHLFFBRkg7QUFHM0JDLFFBQUFBLGdCQUFnQixFQUFFSixtQkFBbUIsQ0FBQ0ksZ0JBSFg7QUFJM0JDLFFBQUFBLGFBQWEsRUFBRUwsbUJBQW1CLENBQUNLLGFBSlI7QUFLM0I7QUFDQUMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCUCxtQkFBdkIsQ0FOZTtBQU8zQjtBQUNBUSxRQUFBQSxRQUFRLEVBQUUsS0FBS0MsZUFBTCxDQUFxQlQsbUJBQXJCO0FBUmlCLE9BQXhCLENBQVA7QUFVSDs7O3NDQUVpQkEsbUIsRUFBdUY7QUFDckcsYUFBTyxLQUFLVSxJQUFMLENBQVVWLG1CQUFWLEVBQStCLFlBQS9CLEVBQTZDLElBQUlXLHlDQUFKLEVBQTdDLENBQVA7QUFDSDs7O29DQUVlWCxtQixFQUE0RTtBQUN4RixhQUFPLEtBQUtZLFVBQUwsQ0FBZ0JaLG1CQUFoQixFQUFxQyxVQUFyQyxFQUFpRCxJQUFJYSw4QkFBSixFQUFqRCxDQUFQO0FBQ0g7Ozs7RUF6QnVEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0TWFudWZhY3R1cmVyIGZyb20gJy4uL1Byb2R1Y3RNYW51ZmFjdHVyZXInO1xuaW1wb3J0IFByb2R1Y3RNYW51ZmFjdHVyZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0TWFudWZhY3R1cmVyJztcbmltcG9ydCBQcm9kdWN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0JztcbmltcG9ydCBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QXNzb2NpYXRpb24nO1xuaW1wb3J0IFByb2R1Y3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TWFudWZhY3R1cmVyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHByb2R1Y3QgYWdlIHJhbmdlIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdE1hbnVmYWN0dXJlclxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdE1hbnVmYWN0dXJlcjogUHJvZHVjdE1hbnVmYWN0dXJlckludGVyZmFjZSk6IFByb2R1Y3RNYW51ZmFjdHVyZXIge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RNYW51ZmFjdHVyZXIoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RNYW51ZmFjdHVyZXIuaWQsXG4gICAgICAgICAgICBwb3NpdGlvbjogcHJvZHVjdE1hbnVmYWN0dXJlci5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RNYW51ZmFjdHVyZXIuYXNzb2NpYXRpb25DbGFzcyxcbiAgICAgICAgICAgIHByb2R1Y3RzQ291bnQ6IHByb2R1Y3RNYW51ZmFjdHVyZXIucHJvZHVjdHNDb3VudCxcbiAgICAgICAgICAgIC8vIGJlbG9uZ3MgdG9cbiAgICAgICAgICAgIGFzc29jaWF0ZWQ6IHRoaXMuaW5jbHVkZUFzc29jaWF0ZWQocHJvZHVjdE1hbnVmYWN0dXJlciksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RNYW51ZmFjdHVyZXIpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0TWFudWZhY3R1cmVyOiBQcm9kdWN0TWFudWZhY3R1cmVySW50ZXJmYWNlKTogUHJvZHVjdEFzc29jaWF0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdE1hbnVmYWN0dXJlciwgJ2Fzc29jaWF0ZWQnLCBuZXcgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RNYW51ZmFjdHVyZXI6IFByb2R1Y3RNYW51ZmFjdHVyZXJJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdE1hbnVmYWN0dXJlciwgJ3Byb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=