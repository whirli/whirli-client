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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RNYW51ZmFjdHVyZXJUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0TWFudWZhY3R1cmVyVHJhbnNmb3JtZXIiLCJwcm9kdWN0TWFudWZhY3R1cmVyIiwiUHJvZHVjdE1hbnVmYWN0dXJlciIsImlkIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsInByb2R1Y3RzIiwiaW5jbHVkZVByb2R1Y3RzIiwiaXRlbSIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlByb2R1Y3RUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsOEI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsbUIsRUFBd0U7QUFDNUUsYUFBTyxJQUFJQywrQkFBSixDQUF3QjtBQUMzQkMsUUFBQUEsRUFBRSxFQUFFRixtQkFBbUIsQ0FBQ0UsRUFERztBQUUzQkMsUUFBQUEsUUFBUSxFQUFFSCxtQkFBbUIsQ0FBQ0csUUFGSDtBQUczQkMsUUFBQUEsZ0JBQWdCLEVBQUVKLG1CQUFtQixDQUFDSSxnQkFIWDtBQUkzQkMsUUFBQUEsYUFBYSxFQUFFTCxtQkFBbUIsQ0FBQ0ssYUFKUjtBQUszQjtBQUNBQyxRQUFBQSxVQUFVLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUJQLG1CQUF2QixDQU5lO0FBTzNCO0FBQ0FRLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCVCxtQkFBckI7QUFSaUIsT0FBeEIsQ0FBUDtBQVVIOzs7c0NBRWlCQSxtQixFQUF1RjtBQUNyRyxhQUFPLEtBQUtVLElBQUwsQ0FBVVYsbUJBQVYsRUFBK0IsWUFBL0IsRUFBNkMsSUFBSVcseUNBQUosRUFBN0MsQ0FBUDtBQUNIOzs7b0NBRWVYLG1CLEVBQTRFO0FBQ3hGLGFBQU8sS0FBS1ksVUFBTCxDQUFnQlosbUJBQWhCLEVBQXFDLFVBQXJDLEVBQWlELElBQUlhLDhCQUFKLEVBQWpELENBQVA7QUFDSDs7OztFQXpCdURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RNYW51ZmFjdHVyZXIgZnJvbSAnLi4vUHJvZHVjdE1hbnVmYWN0dXJlcic7XG5pbXBvcnQgUHJvZHVjdE1hbnVmYWN0dXJlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RNYW51ZmFjdHVyZXInO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RNYW51ZmFjdHVyZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgcHJvZHVjdCBhZ2UgcmFuZ2UgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0TWFudWZhY3R1cmVyXG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0TWFudWZhY3R1cmVyOiBQcm9kdWN0TWFudWZhY3R1cmVySW50ZXJmYWNlKTogUHJvZHVjdE1hbnVmYWN0dXJlciB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdE1hbnVmYWN0dXJlcih7XG4gICAgICAgICAgICBpZDogcHJvZHVjdE1hbnVmYWN0dXJlci5pZCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0TWFudWZhY3R1cmVyLnBvc2l0aW9uLFxuICAgICAgICAgICAgYXNzb2NpYXRpb25DbGFzczogcHJvZHVjdE1hbnVmYWN0dXJlci5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdE1hbnVmYWN0dXJlci5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0TWFudWZhY3R1cmVyKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdE1hbnVmYWN0dXJlciksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RNYW51ZmFjdHVyZXI6IFByb2R1Y3RNYW51ZmFjdHVyZXJJbnRlcmZhY2UpOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0TWFudWZhY3R1cmVyLCAnYXNzb2NpYXRlZCcsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdE1hbnVmYWN0dXJlcjogUHJvZHVjdE1hbnVmYWN0dXJlckludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0TWFudWZhY3R1cmVyLCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==