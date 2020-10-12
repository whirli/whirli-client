"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ProductListLine = _interopRequireDefault(require("../ProductListLine"));

var _ProductListTransformer = _interopRequireDefault(require("./ProductListTransformer"));

var _ProductVariantTransformer = _interopRequireDefault(require("./ProductVariantTransformer"));

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

var ProductListLineTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductListLineTransformer, _BaseTransformer);

  var _super = _createSuper(ProductListLineTransformer);

  function ProductListLineTransformer() {
    _classCallCheck(this, ProductListLineTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ProductListLineTransformer, [{
    key: "mapData",
    value: function mapData(productListLine) {
      return new _ProductListLine["default"]({
        id: productListLine.id,
        createdAt: productListLine.createdAt,
        updatedAt: productListLine.updatedAt,
        gifted: productListLine.gifted,
        // Belongs to
        productList: this.includeProductList(productListLine) || undefined,
        productVariant: this.includeProductVariant(productListLine) || undefined
      });
    }
  }, {
    key: "includeProductList",
    value: function includeProductList(productListLine) {
      return this.item(productListLine, 'productList', new _ProductListTransformer["default"]());
    }
  }, {
    key: "includeProductVariant",
    value: function includeProductVariant(productListLine) {
      return this.item(productListLine, 'productVariant', new _ProductVariantTransformer["default"]());
    }
  }]);

  return ProductListLineTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductListLineTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdExpc3RMaW5lVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUHJvZHVjdExpc3RMaW5lVHJhbnNmb3JtZXIiLCJwcm9kdWN0TGlzdExpbmUiLCJQcm9kdWN0TGlzdExpbmUiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImdpZnRlZCIsInByb2R1Y3RMaXN0IiwiaW5jbHVkZVByb2R1Y3RMaXN0IiwidW5kZWZpbmVkIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJpdGVtIiwiUHJvZHVjdExpc3RUcmFuc2Zvcm1lciIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDBCOzs7Ozs7Ozs7Ozs7OzRCQUNUQyxlLEVBQTREO0FBQ2hFLGFBQU8sSUFBSUMsMkJBQUosQ0FBb0I7QUFDdkJDLFFBQUFBLEVBQUUsRUFBRUYsZUFBZSxDQUFDRSxFQURHO0FBRXZCQyxRQUFBQSxTQUFTLEVBQUVILGVBQWUsQ0FBQ0csU0FGSjtBQUd2QkMsUUFBQUEsU0FBUyxFQUFFSixlQUFlLENBQUNJLFNBSEo7QUFJdkJDLFFBQUFBLE1BQU0sRUFBRUwsZUFBZSxDQUFDSyxNQUpEO0FBS3ZCO0FBQ0FDLFFBQUFBLFdBQVcsRUFBRSxLQUFLQyxrQkFBTCxDQUF3QlAsZUFBeEIsS0FBNENRLFNBTmxDO0FBT3ZCQyxRQUFBQSxjQUFjLEVBQUUsS0FBS0MscUJBQUwsQ0FBMkJWLGVBQTNCLEtBQStDUTtBQVB4QyxPQUFwQixDQUFQO0FBU0g7Ozt1Q0FFa0JSLGUsRUFBd0U7QUFDdkYsYUFBTyxLQUFLVyxJQUFMLENBQVVYLGVBQVYsRUFBMkIsYUFBM0IsRUFBMEMsSUFBSVksa0NBQUosRUFBMUMsQ0FBUDtBQUNIOzs7MENBRXFCWixlLEVBQTJFO0FBQzdGLGFBQU8sS0FBS1csSUFBTCxDQUFVWCxlQUFWLEVBQTJCLGdCQUEzQixFQUE2QyxJQUFJYSxxQ0FBSixFQUE3QyxDQUFQO0FBQ0g7Ozs7RUFuQm1EQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0TGlzdExpbmVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RMaXN0TGluZSc7XG5pbXBvcnQgUHJvZHVjdExpc3RMaW5lIGZyb20gJy4uL1Byb2R1Y3RMaXN0TGluZSc7XG5pbXBvcnQgUHJvZHVjdExpc3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RMaXN0JztcbmltcG9ydCBQcm9kdWN0TGlzdFRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdExpc3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4vUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMaXN0TGluZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKHByb2R1Y3RMaXN0TGluZTogUHJvZHVjdExpc3RMaW5lSW50ZXJmYWNlKTogUHJvZHVjdExpc3RMaW5lIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0TGlzdExpbmUoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RMaXN0TGluZS5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcHJvZHVjdExpc3RMaW5lLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcHJvZHVjdExpc3RMaW5lLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGdpZnRlZDogcHJvZHVjdExpc3RMaW5lLmdpZnRlZCxcbiAgICAgICAgICAgIC8vIEJlbG9uZ3MgdG9cbiAgICAgICAgICAgIHByb2R1Y3RMaXN0OiB0aGlzLmluY2x1ZGVQcm9kdWN0TGlzdChwcm9kdWN0TGlzdExpbmUpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50OiB0aGlzLmluY2x1ZGVQcm9kdWN0VmFyaWFudChwcm9kdWN0TGlzdExpbmUpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVByb2R1Y3RMaXN0KHByb2R1Y3RMaXN0TGluZTogUHJvZHVjdExpc3RMaW5lSW50ZXJmYWNlKTogUHJvZHVjdExpc3RJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0TGlzdExpbmUsICdwcm9kdWN0TGlzdCcsIG5ldyBQcm9kdWN0TGlzdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0VmFyaWFudChwcm9kdWN0TGlzdExpbmU6IFByb2R1Y3RMaXN0TGluZUludGVyZmFjZSk6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocHJvZHVjdExpc3RMaW5lLCAncHJvZHVjdFZhcmlhbnQnLCBuZXcgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=