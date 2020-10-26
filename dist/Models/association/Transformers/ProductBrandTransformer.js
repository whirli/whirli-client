"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProductBrand = _interopRequireDefault(require("../ProductBrand"));

var _AssetTransformer = _interopRequireDefault(require("../../asset/Transformers/AssetTransformer"));

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

var ProductBrandTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductBrandTransformer, _BaseTransformer);

  var _super = _createSuper(ProductBrandTransformer);

  function ProductBrandTransformer() {
    _classCallCheck(this, ProductBrandTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ProductBrandTransformer, [{
    key: "mapData",

    /**
     * Map a product age range response
     *
     * @param productBrand
     */
    value: function mapData(productBrand) {
      return new _ProductBrand["default"]({
        id: productBrand.id,
        hasPage: productBrand.hasPage,
        slug: productBrand.slug,
        headerDescription: productBrand.headerDescription,
        headerImage: productBrand.headerImage,
        position: productBrand.position,
        associationClass: productBrand.associationClass,
        productsCount: productBrand.productsCount,
        // belongs to
        associated: this.includeAssociated(productBrand),
        // has many
        assets: this.includeAssets(productBrand),
        products: this.includeProducts(productBrand)
      });
    }
  }, {
    key: "includeAssociated",
    value: function includeAssociated(productBrand) {
      return this.item(productBrand, 'associated', new _ProductAssociationTransformer["default"]());
    }
  }, {
    key: "includeAssets",
    value: function includeAssets(productBrand) {
      return this.collection(productBrand, 'assets', new _AssetTransformer["default"]());
    }
  }, {
    key: "includeProducts",
    value: function includeProducts(productBrand) {
      return this.collection(productBrand, 'products', new _ProductTransformer["default"]());
    }
  }]);

  return ProductBrandTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductBrandTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXNzb2NpYXRpb24vVHJhbnNmb3JtZXJzL1Byb2R1Y3RCcmFuZFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RCcmFuZFRyYW5zZm9ybWVyIiwicHJvZHVjdEJyYW5kIiwiUHJvZHVjdEJyYW5kIiwiaWQiLCJoYXNQYWdlIiwic2x1ZyIsImhlYWRlckRlc2NyaXB0aW9uIiwiaGVhZGVySW1hZ2UiLCJwb3NpdGlvbiIsImFzc29jaWF0aW9uQ2xhc3MiLCJwcm9kdWN0c0NvdW50IiwiYXNzb2NpYXRlZCIsImluY2x1ZGVBc3NvY2lhdGVkIiwiYXNzZXRzIiwiaW5jbHVkZUFzc2V0cyIsInByb2R1Y3RzIiwiaW5jbHVkZVByb2R1Y3RzIiwiaXRlbSIsIlByb2R1Y3RBc3NvY2lhdGlvblRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIkFzc2V0VHJhbnNmb3JtZXIiLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHVCOzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBOzRCQUNZQyxZLEVBQW1EO0FBQ3ZELGFBQU8sSUFBSUMsd0JBQUosQ0FBaUI7QUFDcEJDLFFBQUFBLEVBQUUsRUFBRUYsWUFBWSxDQUFDRSxFQURHO0FBRXBCQyxRQUFBQSxPQUFPLEVBQUVILFlBQVksQ0FBQ0csT0FGRjtBQUdwQkMsUUFBQUEsSUFBSSxFQUFFSixZQUFZLENBQUNJLElBSEM7QUFJcEJDLFFBQUFBLGlCQUFpQixFQUFFTCxZQUFZLENBQUNLLGlCQUpaO0FBS3BCQyxRQUFBQSxXQUFXLEVBQUVOLFlBQVksQ0FBQ00sV0FMTjtBQU1wQkMsUUFBQUEsUUFBUSxFQUFFUCxZQUFZLENBQUNPLFFBTkg7QUFPcEJDLFFBQUFBLGdCQUFnQixFQUFFUixZQUFZLENBQUNRLGdCQVBYO0FBUXBCQyxRQUFBQSxhQUFhLEVBQUVULFlBQVksQ0FBQ1MsYUFSUjtBQVNwQjtBQUNBQyxRQUFBQSxVQUFVLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUJYLFlBQXZCLENBVlE7QUFXcEI7QUFDQVksUUFBQUEsTUFBTSxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJiLFlBQW5CLENBWlk7QUFhcEJjLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCZixZQUFyQjtBQWJVLE9BQWpCLENBQVA7QUFlSDs7O3NDQUVpQkEsWSxFQUF5RTtBQUN2RixhQUFPLEtBQUtnQixJQUFMLENBQVVoQixZQUFWLEVBQXdCLFlBQXhCLEVBQXNDLElBQUlpQix5Q0FBSixFQUF0QyxDQUFQO0FBQ0g7OztrQ0FFYWpCLFksRUFBNEQ7QUFDdEUsYUFBTyxLQUFLa0IsVUFBTCxDQUFnQmxCLFlBQWhCLEVBQThCLFFBQTlCLEVBQXdDLElBQUltQiw0QkFBSixFQUF4QyxDQUFQO0FBQ0g7OztvQ0FFZW5CLFksRUFBOEQ7QUFDMUUsYUFBTyxLQUFLa0IsVUFBTCxDQUFnQmxCLFlBQWhCLEVBQThCLFVBQTlCLEVBQTBDLElBQUlvQiw4QkFBSixFQUExQyxDQUFQO0FBQ0g7Ozs7RUFsQ2dEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0QnJhbmQgZnJvbSAnLi4vUHJvZHVjdEJyYW5kJztcbmltcG9ydCBQcm9kdWN0QnJhbmRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NvY2lhdGlvbi9Qcm9kdWN0QnJhbmQnO1xuaW1wb3J0IFByb2R1Y3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Fzc29jaWF0aW9uL1Byb2R1Y3RBc3NvY2lhdGlvbic7XG5pbXBvcnQgQXNzZXRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hc3NldC9Bc3NldCc7XG5pbXBvcnQgQXNzZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hc3NldC9UcmFuc2Zvcm1lcnMvQXNzZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9Qcm9kdWN0QXNzb2NpYXRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RCcmFuZFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBwcm9kdWN0IGFnZSByYW5nZSByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHByb2R1Y3RCcmFuZFxuICAgICAqL1xuICAgIG1hcERhdGEocHJvZHVjdEJyYW5kOiBQcm9kdWN0QnJhbmRJbnRlcmZhY2UpOiBQcm9kdWN0QnJhbmQge1xuICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3RCcmFuZCh7XG4gICAgICAgICAgICBpZDogcHJvZHVjdEJyYW5kLmlkLFxuICAgICAgICAgICAgaGFzUGFnZTogcHJvZHVjdEJyYW5kLmhhc1BhZ2UsXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0QnJhbmQuc2x1ZyxcbiAgICAgICAgICAgIGhlYWRlckRlc2NyaXB0aW9uOiBwcm9kdWN0QnJhbmQuaGVhZGVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBoZWFkZXJJbWFnZTogcHJvZHVjdEJyYW5kLmhlYWRlckltYWdlLFxuICAgICAgICAgICAgcG9zaXRpb246IHByb2R1Y3RCcmFuZC5wb3NpdGlvbixcbiAgICAgICAgICAgIGFzc29jaWF0aW9uQ2xhc3M6IHByb2R1Y3RCcmFuZC5hc3NvY2lhdGlvbkNsYXNzLFxuICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdEJyYW5kLnByb2R1Y3RzQ291bnQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICBhc3NvY2lhdGVkOiB0aGlzLmluY2x1ZGVBc3NvY2lhdGVkKHByb2R1Y3RCcmFuZCksXG4gICAgICAgICAgICAvLyBoYXMgbWFueVxuICAgICAgICAgICAgYXNzZXRzOiB0aGlzLmluY2x1ZGVBc3NldHMocHJvZHVjdEJyYW5kKSxcbiAgICAgICAgICAgIHByb2R1Y3RzOiB0aGlzLmluY2x1ZGVQcm9kdWN0cyhwcm9kdWN0QnJhbmQpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzb2NpYXRlZChwcm9kdWN0QnJhbmQ6IFByb2R1Y3RCcmFuZEludGVyZmFjZSk6IFByb2R1Y3RBc3NvY2lhdGlvbkludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHByb2R1Y3RCcmFuZCwgJ2Fzc29jaWF0ZWQnLCBuZXcgUHJvZHVjdEFzc29jaWF0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2V0cyhwcm9kdWN0QnJhbmQ6IFByb2R1Y3RCcmFuZEludGVyZmFjZSk6IEFycmF5PEFzc2V0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24ocHJvZHVjdEJyYW5kLCAnYXNzZXRzJywgbmV3IEFzc2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RzKHByb2R1Y3RCcmFuZDogUHJvZHVjdEJyYW5kSW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RCcmFuZCwgJ3Byb2R1Y3RzJywgbmV3IFByb2R1Y3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=