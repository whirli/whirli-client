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

var ProductHazardTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductHazardTransformer, _BaseTransformer);

  var _super = _createSuper(ProductHazardTransformer);

  function ProductHazardTransformer() {
    _classCallCheck(this, ProductHazardTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RIYXphcmRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0SGF6YXJkVHJhbnNmb3JtZXIiLCJwcm9kdWN0SGF6YXJkIiwiUHJvZHVjdEhhemFyZCIsImlkIiwicG9zaXRpb24iLCJhc3NvY2lhdGlvbkNsYXNzIiwicHJvZHVjdHNDb3VudCIsImFzc29jaWF0ZWQiLCJpbmNsdWRlQXNzb2NpYXRlZCIsInByb2R1Y3RzIiwiaW5jbHVkZVByb2R1Y3RzIiwiaXRlbSIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlByb2R1Y3RUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsd0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7NEJBQ1lDLGEsRUFBc0Q7QUFDMUQsYUFBTyxJQUFJQyx5QkFBSixDQUFrQjtBQUNyQkMsUUFBQUEsRUFBRSxFQUFFRixhQUFhLENBQUNFLEVBREc7QUFFckJDLFFBQUFBLFFBQVEsRUFBRUgsYUFBYSxDQUFDRyxRQUZIO0FBR3JCQyxRQUFBQSxnQkFBZ0IsRUFBRUosYUFBYSxDQUFDSSxnQkFIWDtBQUlyQkMsUUFBQUEsYUFBYSxFQUFFTCxhQUFhLENBQUNLLGFBSlI7QUFLckI7QUFDQUMsUUFBQUEsVUFBVSxFQUFFLEtBQUtDLGlCQUFMLENBQXVCUCxhQUF2QixDQU5TO0FBT3JCO0FBQ0FRLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCVCxhQUFyQjtBQVJXLE9BQWxCLENBQVA7QUFVSDs7O3NDQUVpQkEsYSxFQUEyRTtBQUN6RixhQUFPLEtBQUtVLElBQUwsQ0FBVVYsYUFBVixFQUF5QixZQUF6QixFQUF1QyxJQUFJVyx5Q0FBSixFQUF2QyxDQUFQO0FBQ0g7OztvQ0FFZVgsYSxFQUFnRTtBQUM1RSxhQUFPLEtBQUtZLFVBQUwsQ0FBZ0JaLGFBQWhCLEVBQStCLFVBQS9CLEVBQTJDLElBQUlhLDhCQUFKLEVBQTNDLENBQVA7QUFDSDs7OztFQXpCaURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RIYXphcmQgZnJvbSAnLi4vUHJvZHVjdEhhemFyZCc7XG5pbXBvcnQgUHJvZHVjdEhhemFyZEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RIYXphcmQnO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RIYXphcmRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgcHJvZHVjdCBhZ2UgcmFuZ2UgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0SGF6YXJkXG4gICAgICovXG4gICAgbWFwRGF0YShwcm9kdWN0SGF6YXJkOiBQcm9kdWN0SGF6YXJkSW50ZXJmYWNlKTogUHJvZHVjdEhhemFyZCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdEhhemFyZCh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdEhhemFyZC5pZCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwcm9kdWN0SGF6YXJkLnBvc2l0aW9uLFxuICAgICAgICAgICAgYXNzb2NpYXRpb25DbGFzczogcHJvZHVjdEhhemFyZC5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdEhhemFyZC5wcm9kdWN0c0NvdW50LFxuICAgICAgICAgICAgLy8gYmVsb25ncyB0b1xuICAgICAgICAgICAgYXNzb2NpYXRlZDogdGhpcy5pbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0SGF6YXJkKSxcbiAgICAgICAgICAgIC8vIGhhcyBtYW55XG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5pbmNsdWRlUHJvZHVjdHMocHJvZHVjdEhhemFyZCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RIYXphcmQ6IFByb2R1Y3RIYXphcmRJbnRlcmZhY2UpOiBQcm9kdWN0QXNzb2NpYXRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0SGF6YXJkLCAnYXNzb2NpYXRlZCcsIG5ldyBQcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUHJvZHVjdHMocHJvZHVjdEhhemFyZDogUHJvZHVjdEhhemFyZEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihwcm9kdWN0SGF6YXJkLCAncHJvZHVjdHMnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==