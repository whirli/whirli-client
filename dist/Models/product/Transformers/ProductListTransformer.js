"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _ProductList = _interopRequireDefault(require("../ProductList"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _ProductListLineTransformer = _interopRequireDefault(require("./ProductListLineTransformer"));

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

var ProductListTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ProductListTransformer, _BaseTransformer);

  var _super = _createSuper(ProductListTransformer);

  function ProductListTransformer() {
    _classCallCheck(this, ProductListTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ProductListTransformer, [{
    key: "mapData",
    value: function mapData(productList) {
      return new _ProductList["default"]({
        id: productList.id,
        createdAt: productList.createdAt,
        updatedAt: productList.updatedAt,
        deletedAt: productList.deletedAt,
        name: productList.name,
        slug: productList.slug,
        type: productList.type,
        description: productList.description,
        "public": productList["public"],
        sharingSlug: productList.sharingSlug,
        // Belongs to
        user: this.includeUser(productList) || undefined,
        lines: this.includeProductListLines(productList)
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(productList) {
      return this.item(productList, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeProductListLines",
    value: function includeProductListLines(productList) {
      return this.collection(productList, 'lines', new _ProductListLineTransformer["default"]());
    }
  }]);

  return ProductListTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ProductListTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdExpc3RUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdFRyYW5zZm9ybWVyIiwicHJvZHVjdExpc3QiLCJQcm9kdWN0TGlzdCIsImlkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiZGVsZXRlZEF0IiwibmFtZSIsInNsdWciLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJzaGFyaW5nU2x1ZyIsInVzZXIiLCJpbmNsdWRlVXNlciIsInVuZGVmaW5lZCIsImxpbmVzIiwiaW5jbHVkZVByb2R1Y3RMaXN0TGluZXMiLCJpdGVtIiwiVXNlclRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIlByb2R1Y3RMaXN0TGluZVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxzQjs7Ozs7Ozs7Ozs7OztXQUNqQixpQkFBUUMsV0FBUixFQUF3RDtBQUNwRCxhQUFPLElBQUlDLHVCQUFKLENBQWdCO0FBQ25CQyxRQUFBQSxFQUFFLEVBQUVGLFdBQVcsQ0FBQ0UsRUFERztBQUVuQkMsUUFBQUEsU0FBUyxFQUFFSCxXQUFXLENBQUNHLFNBRko7QUFHbkJDLFFBQUFBLFNBQVMsRUFBRUosV0FBVyxDQUFDSSxTQUhKO0FBSW5CQyxRQUFBQSxTQUFTLEVBQUVMLFdBQVcsQ0FBQ0ssU0FKSjtBQUtuQkMsUUFBQUEsSUFBSSxFQUFFTixXQUFXLENBQUNNLElBTEM7QUFNbkJDLFFBQUFBLElBQUksRUFBRVAsV0FBVyxDQUFDTyxJQU5DO0FBT25CQyxRQUFBQSxJQUFJLEVBQUVSLFdBQVcsQ0FBQ1EsSUFQQztBQVFuQkMsUUFBQUEsV0FBVyxFQUFFVCxXQUFXLENBQUNTLFdBUk47QUFTbkIsa0JBQVFULFdBQVcsVUFUQTtBQVVuQlUsUUFBQUEsV0FBVyxFQUFFVixXQUFXLENBQUNVLFdBVk47QUFXbkI7QUFDQUMsUUFBQUEsSUFBSSxFQUFFLEtBQUtDLFdBQUwsQ0FBaUJaLFdBQWpCLEtBQWlDYSxTQVpwQjtBQWFuQkMsUUFBQUEsS0FBSyxFQUFFLEtBQUtDLHVCQUFMLENBQTZCZixXQUE3QjtBQWJZLE9BQWhCLENBQVA7QUFlSDs7O1dBRUQscUJBQVlBLFdBQVosRUFBcUU7QUFDakUsYUFBTyxLQUFLZ0IsSUFBTCxDQUFVaEIsV0FBVixFQUF1QixNQUF2QixFQUErQixJQUFJaUIsMkJBQUosRUFBL0IsQ0FBUDtBQUNIOzs7V0FFRCxpQ0FBd0JqQixXQUF4QixFQUE0RjtBQUN4RixhQUFPLEtBQUtrQixVQUFMLENBQWdCbEIsV0FBaEIsRUFBNkIsT0FBN0IsRUFBc0MsSUFBSW1CLHNDQUFKLEVBQXRDLENBQVA7QUFDSDs7OztFQXpCK0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vUHJvZHVjdExpc3QnO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IFVzZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi91c2VyL1RyYW5zZm9ybWVycy9Vc2VyVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0TGluZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdExpc3RMaW5lJztcbmltcG9ydCBQcm9kdWN0TGlzdExpbmVUcmFuc2Zvcm1lciBmcm9tICcuL1Byb2R1Y3RMaXN0TGluZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3RUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgbWFwRGF0YShwcm9kdWN0TGlzdDogUHJvZHVjdExpc3RJbnRlcmZhY2UpOiBQcm9kdWN0TGlzdCB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZHVjdExpc3Qoe1xuICAgICAgICAgICAgaWQ6IHByb2R1Y3RMaXN0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBwcm9kdWN0TGlzdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHByb2R1Y3RMaXN0LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGRlbGV0ZWRBdDogcHJvZHVjdExpc3QuZGVsZXRlZEF0LFxuICAgICAgICAgICAgbmFtZTogcHJvZHVjdExpc3QubmFtZSxcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3RMaXN0LnNsdWcsXG4gICAgICAgICAgICB0eXBlOiBwcm9kdWN0TGlzdC50eXBlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3RMaXN0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHVibGljOiBwcm9kdWN0TGlzdC5wdWJsaWMsXG4gICAgICAgICAgICBzaGFyaW5nU2x1ZzogcHJvZHVjdExpc3Quc2hhcmluZ1NsdWcsXG4gICAgICAgICAgICAvLyBCZWxvbmdzIHRvXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKHByb2R1Y3RMaXN0KSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBsaW5lczogdGhpcy5pbmNsdWRlUHJvZHVjdExpc3RMaW5lcyhwcm9kdWN0TGlzdCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyKHByb2R1Y3RMaXN0OiBQcm9kdWN0TGlzdEludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShwcm9kdWN0TGlzdCwgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0TGlzdExpbmVzKHByb2R1Y3RMaXN0OiBQcm9kdWN0TGlzdEludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RMaXN0TGluZUludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHByb2R1Y3RMaXN0LCAnbGluZXMnLCBuZXcgUHJvZHVjdExpc3RMaW5lVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19