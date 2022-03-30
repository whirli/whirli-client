"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _Review = _interopRequireDefault(require("../Review"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReviewTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ReviewTransformer, _BaseTransformer);

  var _super = _createSuper(ReviewTransformer);

  function ReviewTransformer() {
    _classCallCheck(this, ReviewTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ReviewTransformer, [{
    key: "mapData",
    value: function mapData(review) {
      return new _Review["default"]({
        id: review.id,
        rating: review.rating,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt,
        // has one
        user: this.includeUser(review) || undefined,
        productVariant: this.includeProductVariant(review) || undefined
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(review) {
      return this.item(review, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeProductVariant",
    value: function includeProductVariant(review) {
      return this.item(review, 'productVariant', new _ProductVariantTransformer["default"]());
    }
  }]);

  return ReviewTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ReviewTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmV2aWV3L1RyYW5zZm9ybWVycy9SZXZpZXdUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJSZXZpZXdUcmFuc2Zvcm1lciIsInJldmlldyIsIlJldmlldyIsImlkIiwicmF0aW5nIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwidXNlciIsImluY2x1ZGVVc2VyIiwidW5kZWZpbmVkIiwicHJvZHVjdFZhcmlhbnQiLCJpbmNsdWRlUHJvZHVjdFZhcmlhbnQiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7Ozs7Ozs7Ozs7V0FDakIsaUJBQVFDLE1BQVIsRUFBeUM7QUFDckMsYUFBTyxJQUFJQyxrQkFBSixDQUFXO0FBQ2RDLFFBQUFBLEVBQUUsRUFBRUYsTUFBTSxDQUFDRSxFQURHO0FBRWRDLFFBQUFBLE1BQU0sRUFBRUgsTUFBTSxDQUFDRyxNQUZEO0FBR2RDLFFBQUFBLFNBQVMsRUFBRUosTUFBTSxDQUFDSSxTQUhKO0FBSWRDLFFBQUFBLFNBQVMsRUFBRUwsTUFBTSxDQUFDSyxTQUpKO0FBS2Q7QUFDQUMsUUFBQUEsSUFBSSxFQUFFLEtBQUtDLFdBQUwsQ0FBaUJQLE1BQWpCLEtBQTRCUSxTQU5wQjtBQU9kQyxRQUFBQSxjQUFjLEVBQUUsS0FBS0MscUJBQUwsQ0FBMkJWLE1BQTNCLEtBQXNDUTtBQVB4QyxPQUFYLENBQVA7QUFTSDs7O1dBRUQscUJBQVlSLE1BQVosRUFBMkQ7QUFDdkQsYUFBTyxLQUFLVyxJQUFMLENBQVVYLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsSUFBSVksMkJBQUosRUFBMUIsQ0FBUDtBQUNIOzs7V0FFRCwrQkFBc0JaLE1BQXRCLEVBQStFO0FBQzNFLGFBQU8sS0FBS1csSUFBTCxDQUFVWCxNQUFWLEVBQWtCLGdCQUFsQixFQUFvQyxJQUFJYSxxQ0FBSixFQUFwQyxDQUFQO0FBQ0g7Ozs7RUFuQjBDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBSZXZpZXdJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXZpZXcvUmV2aWV3JztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi4vUmV2aWV3JztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0VmFyaWFudEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdFZhcmlhbnQnO1xuaW1wb3J0IFByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldmlld1RyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKHJldmlldzogUmV2aWV3SW50ZXJmYWNlKTogUmV2aWV3IHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXZpZXcoe1xuICAgICAgICAgICAgaWQ6IHJldmlldy5pZCxcbiAgICAgICAgICAgIHJhdGluZzogcmV2aWV3LnJhdGluZyxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogcmV2aWV3LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogcmV2aWV3LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIC8vIGhhcyBvbmVcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuaW5jbHVkZVVzZXIocmV2aWV3KSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudDogdGhpcy5pbmNsdWRlUHJvZHVjdFZhcmlhbnQocmV2aWV3KSB8fCB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyKHJldmlldzogUmV2aWV3SW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHJldmlldywgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0VmFyaWFudChyZXZpZXc6IFJldmlld0ludGVyZmFjZSk6IFByb2R1Y3RWYXJpYW50SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0ocmV2aWV3LCAncHJvZHVjdFZhcmlhbnQnLCBuZXcgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=