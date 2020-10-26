"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionTier = _interopRequireDefault(require("../SubscriptionTier"));

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

var SubscriptionTierTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(SubscriptionTierTransformer, _BaseTransformer);

  var _super = _createSuper(SubscriptionTierTransformer);

  function SubscriptionTierTransformer() {
    _classCallCheck(this, SubscriptionTierTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(SubscriptionTierTransformer, [{
    key: "mapData",

    /**
     * Map a subscription tier response
     *
     * @param subscriptionTier
     */
    value: function mapData(subscriptionTier) {
      return new _SubscriptionTier["default"]({
        id: subscriptionTier.id,
        subscriptionId: subscriptionTier.subscriptionId,
        order: subscriptionTier.order,
        tokenAmount: subscriptionTier.tokenAmount,
        ageUnit: subscriptionTier.ageUnit,
        age: subscriptionTier.age,
        createdAt: subscriptionTier.createdAt,
        updatedAt: subscriptionTier.updatedAt
      });
    }
  }]);

  return SubscriptionTierTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = SubscriptionTierTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyIiwic3Vic2NyaXB0aW9uVGllciIsIlN1YnNjcmlwdGlvblRpZXIiLCJpZCIsInN1YnNjcmlwdGlvbklkIiwib3JkZXIiLCJ0b2tlbkFtb3VudCIsImFnZVVuaXQiLCJhZ2UiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDJCOzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBOzRCQUNZQyxnQixFQUErRDtBQUNuRSxhQUFPLElBQUlDLDRCQUFKLENBQXFCO0FBQ3hCQyxRQUFBQSxFQUFFLEVBQUVGLGdCQUFnQixDQUFDRSxFQURHO0FBRXhCQyxRQUFBQSxjQUFjLEVBQUVILGdCQUFnQixDQUFDRyxjQUZUO0FBR3hCQyxRQUFBQSxLQUFLLEVBQUVKLGdCQUFnQixDQUFDSSxLQUhBO0FBSXhCQyxRQUFBQSxXQUFXLEVBQUVMLGdCQUFnQixDQUFDSyxXQUpOO0FBS3hCQyxRQUFBQSxPQUFPLEVBQUVOLGdCQUFnQixDQUFDTSxPQUxGO0FBTXhCQyxRQUFBQSxHQUFHLEVBQUVQLGdCQUFnQixDQUFDTyxHQU5FO0FBT3hCQyxRQUFBQSxTQUFTLEVBQUVSLGdCQUFnQixDQUFDUSxTQVBKO0FBUXhCQyxRQUFBQSxTQUFTLEVBQUVULGdCQUFnQixDQUFDUztBQVJKLE9BQXJCLENBQVA7QUFVSDs7OztFQWpCb0RDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN1YnNjcmlwdGlvblRpZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uVGllcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uVGllciBmcm9tICcuLi9TdWJzY3JpcHRpb25UaWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYSBzdWJzY3JpcHRpb24gdGllciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN1YnNjcmlwdGlvblRpZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKHN1YnNjcmlwdGlvblRpZXI6IFN1YnNjcmlwdGlvblRpZXJJbnRlcmZhY2UpOiBTdWJzY3JpcHRpb25UaWVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb25UaWVyKHtcbiAgICAgICAgICAgIGlkOiBzdWJzY3JpcHRpb25UaWVyLmlkLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uSWQ6IHN1YnNjcmlwdGlvblRpZXIuc3Vic2NyaXB0aW9uSWQsXG4gICAgICAgICAgICBvcmRlcjogc3Vic2NyaXB0aW9uVGllci5vcmRlcixcbiAgICAgICAgICAgIHRva2VuQW1vdW50OiBzdWJzY3JpcHRpb25UaWVyLnRva2VuQW1vdW50LFxuICAgICAgICAgICAgYWdlVW5pdDogc3Vic2NyaXB0aW9uVGllci5hZ2VVbml0LFxuICAgICAgICAgICAgYWdlOiBzdWJzY3JpcHRpb25UaWVyLmFnZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogc3Vic2NyaXB0aW9uVGllci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHN1YnNjcmlwdGlvblRpZXIudXBkYXRlZEF0LFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=