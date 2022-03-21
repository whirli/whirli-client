"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionAddon = _interopRequireDefault(require("../SubscriptionAddon"));

var _SubscriptionAddonPricingPlanTransformer = _interopRequireDefault(require("./SubscriptionAddonPricingPlanTransformer"));

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

var SubscriptionAddonTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(SubscriptionAddonTransformer, _BaseTransformer);

  var _super = _createSuper(SubscriptionAddonTransformer);

  function SubscriptionAddonTransformer() {
    _classCallCheck(this, SubscriptionAddonTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(SubscriptionAddonTransformer, [{
    key: "mapData",
    value:
    /**
     * Map a subscription addon response
     *
     * @param subscriptionAddon
     */
    function mapData(subscriptionAddon) {
      return new _SubscriptionAddon["default"]({
        id: subscriptionAddon.id,
        createdAt: subscriptionAddon.createdAt,
        updatedAt: subscriptionAddon.updatedAt,
        archivedAt: subscriptionAddon.archivedAt,
        name: subscriptionAddon.name,
        stripeId: subscriptionAddon.stripeId,
        subscriptionAddonPricingPlans: this.includeSubscriptionAddonPricingPlans(subscriptionAddon) || undefined
      });
    }
  }, {
    key: "includeSubscriptionAddonPricingPlans",
    value: function includeSubscriptionAddonPricingPlans(subscriptionAddon) {
      return this.collection(subscriptionAddon, 'subscriptionAddonPricingPlans', new _SubscriptionAddonPricingPlanTransformer["default"]());
    }
  }]);

  return SubscriptionAddonTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = SubscriptionAddonTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25BZGRvblRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIiLCJzdWJzY3JpcHRpb25BZGRvbiIsIlN1YnNjcmlwdGlvbkFkZG9uIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJhcmNoaXZlZEF0IiwibmFtZSIsInN0cmlwZUlkIiwic3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbnMiLCJpbmNsdWRlU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbnMiLCJ1bmRlZmluZWQiLCJjb2xsZWN0aW9uIiwiU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw0Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJLHFCQUFRQyxpQkFBUixFQUEwRTtBQUN0RSxhQUFPLElBQUlDLDZCQUFKLENBQXNCO0FBQ3pCQyxRQUFBQSxFQUFFLEVBQUVGLGlCQUFpQixDQUFDRSxFQURHO0FBRXpCQyxRQUFBQSxTQUFTLEVBQUVILGlCQUFpQixDQUFDRyxTQUZKO0FBR3pCQyxRQUFBQSxTQUFTLEVBQUVKLGlCQUFpQixDQUFDSSxTQUhKO0FBSXpCQyxRQUFBQSxVQUFVLEVBQUVMLGlCQUFpQixDQUFDSyxVQUpMO0FBS3pCQyxRQUFBQSxJQUFJLEVBQUVOLGlCQUFpQixDQUFDTSxJQUxDO0FBTXpCQyxRQUFBQSxRQUFRLEVBQUVQLGlCQUFpQixDQUFDTyxRQU5IO0FBT3pCQyxRQUFBQSw2QkFBNkIsRUFBRSxLQUFLQyxvQ0FBTCxDQUEwQ1QsaUJBQTFDLEtBQWdFVTtBQVB0RSxPQUF0QixDQUFQO0FBU0g7OztXQUVELDhDQUNJVixpQkFESixFQUV1RDtBQUNuRCxhQUFPLEtBQUtXLFVBQUwsQ0FDSFgsaUJBREcsRUFFSCwrQkFGRyxFQUdILElBQUlZLG1EQUFKLEVBSEcsQ0FBUDtBQUtIOzs7O0VBMUJxREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uQWRkb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uQWRkb24nO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkFkZG9uIGZyb20gJy4uL1N1YnNjcmlwdGlvbkFkZG9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFuSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW4nO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lciBmcm9tICcuL1N1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5UcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnNjcmlwdGlvbkFkZG9uVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhIHN1YnNjcmlwdGlvbiBhZGRvbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHN1YnNjcmlwdGlvbkFkZG9uXG4gICAgICovXG4gICAgbWFwRGF0YShzdWJzY3JpcHRpb25BZGRvbjogU3Vic2NyaXB0aW9uQWRkb25JbnRlcmZhY2UpOiBTdWJzY3JpcHRpb25BZGRvbiB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uQWRkb24oe1xuICAgICAgICAgICAgaWQ6IHN1YnNjcmlwdGlvbkFkZG9uLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBzdWJzY3JpcHRpb25BZGRvbi5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHN1YnNjcmlwdGlvbkFkZG9uLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGFyY2hpdmVkQXQ6IHN1YnNjcmlwdGlvbkFkZG9uLmFyY2hpdmVkQXQsXG4gICAgICAgICAgICBuYW1lOiBzdWJzY3JpcHRpb25BZGRvbi5uYW1lLFxuICAgICAgICAgICAgc3RyaXBlSWQ6IHN1YnNjcmlwdGlvbkFkZG9uLnN0cmlwZUlkLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhbnM6IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5zKHN1YnNjcmlwdGlvbkFkZG9uKSB8fCB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFucyhcbiAgICAgICAgc3Vic2NyaXB0aW9uQWRkb246IFN1YnNjcmlwdGlvbkFkZG9uSW50ZXJmYWNlLFxuICAgICk6IEFycmF5PFN1YnNjcmlwdGlvbkFkZG9uUHJpY2luZ1BsYW5JbnRlcmZhY2U+IHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24oXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25BZGRvbixcbiAgICAgICAgICAgICdzdWJzY3JpcHRpb25BZGRvblByaWNpbmdQbGFucycsXG4gICAgICAgICAgICBuZXcgU3Vic2NyaXB0aW9uQWRkb25QcmljaW5nUGxhblRyYW5zZm9ybWVyKCksXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19