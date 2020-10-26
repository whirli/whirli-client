"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ReferredUser = _interopRequireDefault(require("../ReferredUser"));

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

var ReferredUsersTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ReferredUsersTransformer, _BaseTransformer);

  var _super = _createSuper(ReferredUsersTransformer);

  function ReferredUsersTransformer() {
    _classCallCheck(this, ReferredUsersTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(ReferredUsersTransformer, [{
    key: "mapData",

    /**
     * Map a referred user response
     *
     * @param referredUser
     */
    value: function mapData(referredUser) {
      return new _ReferredUser["default"]({
        firstname: referredUser.firstname
      });
    }
  }]);

  return ReferredUsersTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ReferredUsersTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmVmZXJyYWwvVHJhbnNmb3JtZXJzL1JlZmVycmVkVXNlcnNUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJSZWZlcnJlZFVzZXJzVHJhbnNmb3JtZXIiLCJyZWZlcnJlZFVzZXIiLCJSZWZlcnJlZFVzZXIiLCJmaXJzdG5hbWUiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHdCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFksRUFBbUQ7QUFDdkQsYUFBTyxJQUFJQyx3QkFBSixDQUFpQjtBQUNwQkMsUUFBQUEsU0FBUyxFQUFFRixZQUFZLENBQUNFO0FBREosT0FBakIsQ0FBUDtBQUdIOzs7O0VBVmlEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWZlcnJlZFVzZXIgZnJvbSAnLi4vUmVmZXJyZWRVc2VyJztcbmltcG9ydCBSZWZlcnJlZFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZWZlcnJhbC9SZWZlcnJlZFVzZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcnJlZFVzZXJzVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHJlZmVycmVkIHVzZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWZlcnJlZFVzZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKHJlZmVycmVkVXNlcjogUmVmZXJyZWRVc2VySW50ZXJmYWNlKTogUmVmZXJyZWRVc2VyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWZlcnJlZFVzZXIoe1xuICAgICAgICAgICAgZmlyc3RuYW1lOiByZWZlcnJlZFVzZXIuZmlyc3RuYW1lLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=