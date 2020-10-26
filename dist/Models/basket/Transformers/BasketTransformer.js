"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Basket = _interopRequireDefault(require("../Basket"));

var _BasketLineTransformer = _interopRequireDefault(require("./BasketLineTransformer"));

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

var BasketTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(BasketTransformer, _BaseTransformer);

  var _super = _createSuper(BasketTransformer);

  function BasketTransformer() {
    _classCallCheck(this, BasketTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(BasketTransformer, [{
    key: "mapData",

    /**
     * Map basket response
     *
     * @param basket
     */
    value: function mapData(basket) {
      return new _Basket["default"]({
        id: basket.id,
        totalTokens: basket.totalTokens,
        createdAt: basket.createdAt,
        updatedAt: basket.updatedAt,
        basketLines: this.includeBasketLines(basket)
      });
    }
  }, {
    key: "includeBasketLines",
    value: function includeBasketLines(basket) {
      return this.collection(basket, 'basket_lines', new _BasketLineTransformer["default"]());
    }
  }]);

  return BasketTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = BasketTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJCYXNrZXRUcmFuc2Zvcm1lciIsImJhc2tldCIsIkJhc2tldCIsImlkIiwidG90YWxUb2tlbnMiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJiYXNrZXRMaW5lcyIsImluY2x1ZGVCYXNrZXRMaW5lcyIsImNvbGxlY3Rpb24iLCJCYXNrZXRMaW5lVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLE0sRUFBaUM7QUFDckMsYUFBTyxJQUFJQyxrQkFBSixDQUFXO0FBQ2RDLFFBQUFBLEVBQUUsRUFBRUYsTUFBTSxDQUFDRSxFQURHO0FBRWRDLFFBQUFBLFdBQVcsRUFBRUgsTUFBTSxDQUFDRyxXQUZOO0FBR2RDLFFBQUFBLFNBQVMsRUFBRUosTUFBTSxDQUFDSSxTQUhKO0FBSWRDLFFBQUFBLFNBQVMsRUFBRUwsTUFBTSxDQUFDSyxTQUpKO0FBS2RDLFFBQUFBLFdBQVcsRUFBRSxLQUFLQyxrQkFBTCxDQUF3QlAsTUFBeEI7QUFMQyxPQUFYLENBQVA7QUFPSDs7O3VDQUNrQkEsTSxFQUE0QztBQUMzRCxhQUFPLEtBQUtRLFVBQUwsQ0FBZ0JSLE1BQWhCLEVBQXdCLGNBQXhCLEVBQXdDLElBQUlTLGlDQUFKLEVBQXhDLENBQVA7QUFDSDs7OztFQWpCMENDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2tldCBmcm9tICcuLi9CYXNrZXQnO1xuaW1wb3J0IEJhc2tldExpbmUgZnJvbSAnLi4vQmFza2V0TGluZSc7XG5pbXBvcnQgeyBCYXNrZXQgYXMgQmFza2V0SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iYXNrZXQvQmFza2V0JztcbmltcG9ydCBCYXNrZXRMaW5lVHJhbnNmb3JtZXIgZnJvbSAnLi9CYXNrZXRMaW5lVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNrZXRUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGJhc2tldCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGJhc2tldFxuICAgICAqL1xuICAgIG1hcERhdGEoYmFza2V0OiBCYXNrZXRJbnRlcmZhY2UpOiBCYXNrZXQge1xuICAgICAgICByZXR1cm4gbmV3IEJhc2tldCh7XG4gICAgICAgICAgICBpZDogYmFza2V0LmlkLFxuICAgICAgICAgICAgdG90YWxUb2tlbnM6IGJhc2tldC50b3RhbFRva2VucyxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYmFza2V0LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYmFza2V0LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGJhc2tldExpbmVzOiB0aGlzLmluY2x1ZGVCYXNrZXRMaW5lcyhiYXNrZXQpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5jbHVkZUJhc2tldExpbmVzKGJhc2tldDogQmFza2V0SW50ZXJmYWNlKTogQXJyYXk8QmFza2V0TGluZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKGJhc2tldCwgJ2Jhc2tldF9saW5lcycsIG5ldyBCYXNrZXRMaW5lVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19