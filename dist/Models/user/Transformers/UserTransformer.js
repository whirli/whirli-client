"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("../User"));

var _OrderTransformer = _interopRequireDefault(require("../../order/Transformers/OrderTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _StockTransformer = _interopRequireDefault(require("../../stock/Transformers/StockTransformer"));

var _ReturnOrderTransformer = _interopRequireDefault(require("../../return/Transformers/ReturnOrderTransformer"));

var _BasketTransformer = _interopRequireDefault(require("../../basket/Transformers/BasketTransformer"));

var _UserSubscriptionTransformer = _interopRequireDefault(require("./UserSubscriptionTransformer"));

var _AddressTransformer = _interopRequireDefault(require("../../address/Transformers/AddressTransformer"));

var _PurchaseStockTransformer = _interopRequireDefault(require("../../stock/Transformers/PurchaseStockTransformer"));

var _ProductListTransformer = _interopRequireDefault(require("../../product/Transformers/ProductListTransformer"));

var _RoleTransformer = _interopRequireDefault(require("../../role/Transformers/RoleTransformer"));

var _WaitSpotTransformer = _interopRequireDefault(require("../../waitspot/Transformers/WaitSpotTransformer"));

var _ReviewTransformer = _interopRequireDefault(require("../../review/Transformers/ReviewTransformer"));

var _GiftTransformer = _interopRequireDefault(require("../../gift/Transformers/GiftTransformer"));

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

var UserTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(UserTransformer, _BaseTransformer);

  var _super = _createSuper(UserTransformer);

  function UserTransformer() {
    _classCallCheck(this, UserTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(UserTransformer, [{
    key: "mapData",
    value:
    /**
     * Map an user response
     *
     * @param user
     */
    function mapData(user) {
      return new _User["default"]({
        id: user.id,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        emailVerifiedAt: user.emailVerifiedAt,
        statusId: user.statusId,
        registrationStatusId: user.registrationStatusId,
        stripeId: user.stripeId,
        residualChargesOptIn: user.residualChargesOptIn,
        subscriptionCancellationTerms: user.subscriptionCancellationTerms,
        subscriptionCancellationCharges: user.subscriptionCancellationCharges,
        verifiedAt: user.verifiedAt,
        resourceType: user.resourceType,
        reference: user.reference,
        color: user.color,
        highlights: user.highlights,
        // Has many
        orders: this.includeOrders(user),
        stock: this.includeStock(user),
        addresses: this.includeAddresses(user),
        toybox: this.includeToybox(user),
        lists: this.includeLists(user),
        waitSpots: this.includeWaitSpots(user),
        returnOrders: this.includeReturnOrders(user),
        activeBasket: this.includeBasket(user),
        userSubscriptions: this.includeUserSubscriptions(user),
        activeUserSubscriptions: this.includeUserSubscriptions(user) || undefined,
        activeUserSubscriptionStatusId: user.activeUserSubscriptionStatusId,
        activeUserSubscriptionPlan: user.activeUserSubscriptionPlan,
        activeReturnOrder: this.includeActiveReturnOrder(user) || undefined,
        roles: this.includeRoles(user),
        waccRole: user.waccRole,
        reviews: this.includeReviews(user),
        // Has one
        assignedOrder: this.includeAssignedOrder(user) || undefined,
        assignedGift: this.includeAssignedGift(user) || undefined,
        // Accessors
        onFirstOrder: user.onFirstOrder,
        toyboxTokens: user.toyboxTokens,
        additionalTokens: user.additionalTokens,
        availableTokens: user.availableTokens,
        subscriptionTokens: user.subscriptionTokens,
        maxTokens: user.maxTokens,
        basketQuantity: user.basketQuantity,
        activeBasketTotalTokens: user.activeBasketTotalTokens,
        balance: user.balance,
        changeSubscriptionStatus: user.changeSubscriptionStatus,
        cancelSubscriptionStatus: user.cancelSubscriptionStatus,
        notes: user.notes,
        canDowngradeFrom: user.canDowngradeFrom,
        oldestUserSubscription: user.oldestUserSubscription,
        oldestUserSubscriptionStart: user.oldestUserSubscriptionStart,
        currentActiveUserSubscriptionPeriodStart: user.currentActiveUserSubscriptionPeriodStart,
        currentActiveUserSubscriptionPeriodEnd: user.currentActiveUserSubscriptionPeriodEnd
      });
    }
  }, {
    key: "includeOrders",
    value: function includeOrders(user) {
      return this.collection(user, 'orders', new _OrderTransformer["default"]());
    }
  }, {
    key: "includeStock",
    value: function includeStock(user) {
      return this.collection(user, 'stock', new _StockTransformer["default"]());
    }
  }, {
    key: "includeAddresses",
    value: function includeAddresses(user) {
      return this.collection(user, 'addresses', new _AddressTransformer["default"]());
    }
  }, {
    key: "includeToybox",
    value: function includeToybox(user) {
      return this.collection(user, 'toybox', new _PurchaseStockTransformer["default"]());
    }
  }, {
    key: "includeLists",
    value: function includeLists(user) {
      return this.collection(user, 'lists', new _ProductListTransformer["default"]());
    }
  }, {
    key: "includeWaitSpots",
    value: function includeWaitSpots(user) {
      return this.collection(user, 'waitSpots', new _WaitSpotTransformer["default"]());
    }
  }, {
    key: "includeReturnOrders",
    value: function includeReturnOrders(user) {
      return this.collection(user, 'returnOrders', new _ReturnOrderTransformer["default"]());
    }
  }, {
    key: "includeActiveReturnOrder",
    value: function includeActiveReturnOrder(user) {
      return this.item(user, 'activeReturnOrder', new _ReturnOrderTransformer["default"]());
    }
  }, {
    key: "includeRoles",
    value: function includeRoles(user) {
      return this.collection(user, 'roles', new _RoleTransformer["default"]());
    }
  }, {
    key: "includeBasket",
    value: function includeBasket(user) {
      return this.collection(user, 'activeBasket', new _BasketTransformer["default"]());
    }
  }, {
    key: "includeUserSubscriptions",
    value: function includeUserSubscriptions(user) {
      return this.collection(user, 'userSubscriptions', new _UserSubscriptionTransformer["default"]());
    }
  }, {
    key: "includeReviews",
    value: function includeReviews(user) {
      return this.collection(user, 'reviews', new _ReviewTransformer["default"]());
    }
  }, {
    key: "includeAssignedOrder",
    value: function includeAssignedOrder(user) {
      return this.item(user, 'assignedOrder', new _OrderTransformer["default"]());
    }
  }, {
    key: "includeAssignedGift",
    value: function includeAssignedGift(user) {
      return this.item(user, 'assignedGift', new _GiftTransformer["default"]());
    }
  }]);

  return UserTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = UserTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiY29sb3IiLCJoaWdobGlnaHRzIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiYWRkcmVzc2VzIiwiaW5jbHVkZUFkZHJlc3NlcyIsInRveWJveCIsImluY2x1ZGVUb3lib3giLCJsaXN0cyIsImluY2x1ZGVMaXN0cyIsIndhaXRTcG90cyIsImluY2x1ZGVXYWl0U3BvdHMiLCJyZXR1cm5PcmRlcnMiLCJpbmNsdWRlUmV0dXJuT3JkZXJzIiwiYWN0aXZlQmFza2V0IiwiaW5jbHVkZUJhc2tldCIsInVzZXJTdWJzY3JpcHRpb25zIiwiaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zIiwiYWN0aXZlVXNlclN1YnNjcmlwdGlvbnMiLCJ1bmRlZmluZWQiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uU3RhdHVzSWQiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGxhbiIsImFjdGl2ZVJldHVybk9yZGVyIiwiaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyIiwicm9sZXMiLCJpbmNsdWRlUm9sZXMiLCJ3YWNjUm9sZSIsInJldmlld3MiLCJpbmNsdWRlUmV2aWV3cyIsImFzc2lnbmVkT3JkZXIiLCJpbmNsdWRlQXNzaWduZWRPcmRlciIsImFzc2lnbmVkR2lmdCIsImluY2x1ZGVBc3NpZ25lZEdpZnQiLCJvbkZpcnN0T3JkZXIiLCJ0b3lib3hUb2tlbnMiLCJhZGRpdGlvbmFsVG9rZW5zIiwiYXZhaWxhYmxlVG9rZW5zIiwic3Vic2NyaXB0aW9uVG9rZW5zIiwibWF4VG9rZW5zIiwiYmFza2V0UXVhbnRpdHkiLCJhY3RpdmVCYXNrZXRUb3RhbFRva2VucyIsImJhbGFuY2UiLCJjaGFuZ2VTdWJzY3JpcHRpb25TdGF0dXMiLCJjYW5jZWxTdWJzY3JpcHRpb25TdGF0dXMiLCJub3RlcyIsImNhbkRvd25ncmFkZUZyb20iLCJvbGRlc3RVc2VyU3Vic2NyaXB0aW9uIiwib2xkZXN0VXNlclN1YnNjcmlwdGlvblN0YXJ0IiwiY3VycmVudEFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QZXJpb2RTdGFydCIsImN1cnJlbnRBY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGVyaW9kRW5kIiwiY29sbGVjdGlvbiIsIk9yZGVyVHJhbnNmb3JtZXIiLCJTdG9ja1RyYW5zZm9ybWVyIiwiQWRkcmVzc1RyYW5zZm9ybWVyIiwiUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIiwiUHJvZHVjdExpc3RUcmFuc2Zvcm1lciIsIldhaXRTcG90VHJhbnNmb3JtZXIiLCJSZXR1cm5PcmRlclRyYW5zZm9ybWVyIiwiaXRlbSIsIlJvbGVUcmFuc2Zvcm1lciIsIkJhc2tldFRyYW5zZm9ybWVyIiwiVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIiwiUmV2aWV3VHJhbnNmb3JtZXIiLCJHaWZ0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUVBOztBQUtBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtB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dUJBQWMvRSxJQUFkLEVBQTJEO0FBQ3ZELGFBQU8sS0FBS3NFLFVBQUwsQ0FBZ0J0RSxJQUFoQixFQUFzQixjQUF0QixFQUFzQyxJQUFJZ0YsNkJBQUosRUFBdEMsQ0FBUDtBQUNIOzs7V0FFRCxrQ0FBeUJoRixJQUF6QixFQUFnRjtBQUM1RSxhQUFPLEtBQUtzRSxVQUFMLENBQWdCdEUsSUFBaEIsRUFBc0IsbUJBQXRCLEVBQTJDLElBQUlpRix1Q0FBSixFQUEzQyxDQUFQO0FBQ0g7OztXQUVELHdCQUFlakYsSUFBZixFQUE0RDtBQUN4RCxhQUFPLEtBQUtzRSxVQUFMLENBQWdCdEUsSUFBaEIsRUFBc0IsU0FBdEIsRUFBaUMsSUFBSWtGLDZCQUFKLEVBQWpDLENBQVA7QUFDSDs7O1dBRUQsOEJBQXFCbEYsSUFBckIsRUFBaUU7QUFDN0QsYUFBTyxLQUFLOEUsSUFBTCxDQUFVOUUsSUFBVixFQUFnQixlQUFoQixFQUFpQyxJQUFJdUUsNEJBQUosRUFBakMsQ0FBUDtBQUNIOzs7V0FFRCw2QkFBb0J2RSxJQUFwQixFQUErRDtBQUMzRCxhQUFPLEtBQUs4RSxJQUFMLENBQVU5RSxJQUFWLEVBQWdCLGNBQWhCLEVBQWdDLElBQUltRiwyQkFBSixFQUFoQyxDQUFQO0FBQ0g7Ozs7RUF6SHdDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uL1VzZXInO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2snO1xuaW1wb3J0IFN0b2NrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFkZHJlc3NJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hZGRyZXNzL0FkZHJlc3MnO1xuaW1wb3J0IFB1cmNoYXNlU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9QdXJjaGFzZVN0b2NrJztcbmltcG9ydCBQcm9kdWN0TGlzdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdExpc3QnO1xuaW1wb3J0IFJldHVybk9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV0dXJuL1JldHVybk9yZGVyJztcbmltcG9ydCBSZXR1cm5PcmRlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JldHVybi9UcmFuc2Zvcm1lcnMvUmV0dXJuT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBCYXNrZXQgYXMgQmFza2V0SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iYXNrZXQvQmFza2V0JztcbmltcG9ydCBCYXNrZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iYXNrZXQvVHJhbnNmb3JtZXJzL0Jhc2tldFRyYW5zZm9ybWVyJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyU3Vic2NyaXB0aW9uJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9Vc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFkZHJlc3NUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hZGRyZXNzL1RyYW5zZm9ybWVycy9BZGRyZXNzVHJhbnNmb3JtZXInO1xuaW1wb3J0IFB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0TGlzdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RMaXN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFJvbGVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yb2xlL1JvbGUnO1xuaW1wb3J0IFJvbGVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yb2xlL1RyYW5zZm9ybWVycy9Sb2xlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFdhaXRTcG90SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvd2FpdHNwb3QvV2FpdFNwb3QnO1xuaW1wb3J0IFdhaXRTcG90VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vd2FpdHNwb3QvVHJhbnNmb3JtZXJzL1dhaXRTcG90VHJhbnNmb3JtZXInO1xuaW1wb3J0IFJldmlld0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Jldmlldy9SZXZpZXcnO1xuaW1wb3J0IFJldmlld1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Jldmlldy9UcmFuc2Zvcm1lcnMvUmV2aWV3VHJhbnNmb3JtZXInO1xuaW1wb3J0IEdpZnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9naWZ0L0dpZnQnO1xuaW1wb3J0IEdpZnRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9naWZ0L1RyYW5zZm9ybWVycy9HaWZ0VHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiB1c2VyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlclxuICAgICAqL1xuICAgIG1hcERhdGEodXNlcjogVXNlckludGVyZmFjZSk6IFVzZXIge1xuICAgICAgICByZXR1cm4gbmV3IFVzZXIoe1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHVzZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB1c2VyLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogdXNlci5maXJzdG5hbWUsXG4gICAgICAgICAgICBsYXN0bmFtZTogdXNlci5sYXN0bmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgZW1haWxWZXJpZmllZEF0OiB1c2VyLmVtYWlsVmVyaWZpZWRBdCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiB1c2VyLnN0YXR1c0lkLFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzSWQ6IHVzZXIucmVnaXN0cmF0aW9uU3RhdHVzSWQsXG4gICAgICAgICAgICBzdHJpcGVJZDogdXNlci5zdHJpcGVJZCxcbiAgICAgICAgICAgIHJlc2lkdWFsQ2hhcmdlc09wdEluOiB1c2VyLnJlc2lkdWFsQ2hhcmdlc09wdEluLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uVGVybXM6IHVzZXIuc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uVGVybXMsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25DaGFyZ2VzOiB1c2VyLnN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMsXG4gICAgICAgICAgICB2ZXJpZmllZEF0OiB1c2VyLnZlcmlmaWVkQXQsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHVzZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiB1c2VyLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGNvbG9yOiB1c2VyLmNvbG9yLFxuICAgICAgICAgICAgaGlnaGxpZ2h0czogdXNlci5oaWdobGlnaHRzLFxuICAgICAgICAgICAgLy8gSGFzIG1hbnlcbiAgICAgICAgICAgIG9yZGVyczogdGhpcy5pbmNsdWRlT3JkZXJzKHVzZXIpLFxuICAgICAgICAgICAgc3RvY2s6IHRoaXMuaW5jbHVkZVN0b2NrKHVzZXIpLFxuICAgICAgICAgICAgYWRkcmVzc2VzOiB0aGlzLmluY2x1ZGVBZGRyZXNzZXModXNlciksXG4gICAgICAgICAgICB0b3lib3g6IHRoaXMuaW5jbHVkZVRveWJveCh1c2VyKSxcbiAgICAgICAgICAgIGxpc3RzOiB0aGlzLmluY2x1ZGVMaXN0cyh1c2VyKSxcbiAgICAgICAgICAgIHdhaXRTcG90czogdGhpcy5pbmNsdWRlV2FpdFNwb3RzKHVzZXIpLFxuICAgICAgICAgICAgcmV0dXJuT3JkZXJzOiB0aGlzLmluY2x1ZGVSZXR1cm5PcmRlcnModXNlciksXG4gICAgICAgICAgICBhY3RpdmVCYXNrZXQ6IHRoaXMuaW5jbHVkZUJhc2tldCh1c2VyKSxcbiAgICAgICAgICAgIHVzZXJTdWJzY3JpcHRpb25zOiB0aGlzLmluY2x1ZGVVc2VyU3Vic2NyaXB0aW9ucyh1c2VyKSxcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTdWJzY3JpcHRpb25zOiB0aGlzLmluY2x1ZGVVc2VyU3Vic2NyaXB0aW9ucyh1c2VyKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBhY3RpdmVVc2VyU3Vic2NyaXB0aW9uU3RhdHVzSWQ6IHVzZXIuYWN0aXZlVXNlclN1YnNjcmlwdGlvblN0YXR1c0lkLFxuICAgICAgICAgICAgYWN0aXZlVXNlclN1YnNjcmlwdGlvblBsYW46IHVzZXIuYWN0aXZlVXNlclN1YnNjcmlwdGlvblBsYW4sXG4gICAgICAgICAgICBhY3RpdmVSZXR1cm5PcmRlcjogdGhpcy5pbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIodXNlcikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcm9sZXM6IHRoaXMuaW5jbHVkZVJvbGVzKHVzZXIpLFxuICAgICAgICAgICAgd2FjY1JvbGU6IHVzZXIud2FjY1JvbGUsXG4gICAgICAgICAgICByZXZpZXdzOiB0aGlzLmluY2x1ZGVSZXZpZXdzKHVzZXIpLFxuICAgICAgICAgICAgLy8gSGFzIG9uZVxuICAgICAgICAgICAgYXNzaWduZWRPcmRlcjogdGhpcy5pbmNsdWRlQXNzaWduZWRPcmRlcih1c2VyKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBhc3NpZ25lZEdpZnQ6IHRoaXMuaW5jbHVkZUFzc2lnbmVkR2lmdCh1c2VyKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAvLyBBY2Nlc3NvcnNcbiAgICAgICAgICAgIG9uRmlyc3RPcmRlcjogdXNlci5vbkZpcnN0T3JkZXIsXG4gICAgICAgICAgICB0b3lib3hUb2tlbnM6IHVzZXIudG95Ym94VG9rZW5zLFxuICAgICAgICAgICAgYWRkaXRpb25hbFRva2VuczogdXNlci5hZGRpdGlvbmFsVG9rZW5zLFxuICAgICAgICAgICAgYXZhaWxhYmxlVG9rZW5zOiB1c2VyLmF2YWlsYWJsZVRva2VucyxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblRva2VuczogdXNlci5zdWJzY3JpcHRpb25Ub2tlbnMsXG4gICAgICAgICAgICBtYXhUb2tlbnM6IHVzZXIubWF4VG9rZW5zLFxuICAgICAgICAgICAgYmFza2V0UXVhbnRpdHk6IHVzZXIuYmFza2V0UXVhbnRpdHksXG4gICAgICAgICAgICBhY3RpdmVCYXNrZXRUb3RhbFRva2VuczogdXNlci5hY3RpdmVCYXNrZXRUb3RhbFRva2VucyxcbiAgICAgICAgICAgIGJhbGFuY2U6IHVzZXIuYmFsYW5jZSxcbiAgICAgICAgICAgIGNoYW5nZVN1YnNjcmlwdGlvblN0YXR1czogdXNlci5jaGFuZ2VTdWJzY3JpcHRpb25TdGF0dXMsXG4gICAgICAgICAgICBjYW5jZWxTdWJzY3JpcHRpb25TdGF0dXM6IHVzZXIuY2FuY2VsU3Vic2NyaXB0aW9uU3RhdHVzLFxuICAgICAgICAgICAgbm90ZXM6IHVzZXIubm90ZXMsXG4gICAgICAgICAgICBjYW5Eb3duZ3JhZGVGcm9tOiB1c2VyLmNhbkRvd25ncmFkZUZyb20sXG4gICAgICAgICAgICBvbGRlc3RVc2VyU3Vic2NyaXB0aW9uOiB1c2VyLm9sZGVzdFVzZXJTdWJzY3JpcHRpb24sXG4gICAgICAgICAgICBvbGRlc3RVc2VyU3Vic2NyaXB0aW9uU3RhcnQ6IHVzZXIub2xkZXN0VXNlclN1YnNjcmlwdGlvblN0YXJ0LFxuICAgICAgICAgICAgY3VycmVudEFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QZXJpb2RTdGFydDogdXNlci5jdXJyZW50QWN0aXZlVXNlclN1YnNjcmlwdGlvblBlcmlvZFN0YXJ0LFxuICAgICAgICAgICAgY3VycmVudEFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QZXJpb2RFbmQ6IHVzZXIuY3VycmVudEFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QZXJpb2RFbmQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlcnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PE9yZGVySW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ29yZGVycycsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdG9jayh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8U3RvY2tJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnc3RvY2snLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWRkcmVzc2VzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxBZGRyZXNzSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2FkZHJlc3NlcycsIG5ldyBBZGRyZXNzVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVRveWJveCh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UHVyY2hhc2VTdG9ja0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd0b3lib3gnLCBuZXcgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVMaXN0cyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdExpc3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnbGlzdHMnLCBuZXcgUHJvZHVjdExpc3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlV2FpdFNwb3RzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxXYWl0U3BvdEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd3YWl0U3BvdHMnLCBuZXcgV2FpdFNwb3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmV0dXJuT3JkZXJzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSZXR1cm5PcmRlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyZXR1cm5PcmRlcnMnLCBuZXcgUmV0dXJuT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIodXNlcjogVXNlckludGVyZmFjZSk6IFJldHVybk9yZGVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0odXNlciwgJ2FjdGl2ZVJldHVybk9yZGVyJywgbmV3IFJldHVybk9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJvbGVzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSb2xlSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3JvbGVzJywgbmV3IFJvbGVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQmFza2V0KHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxCYXNrZXRJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnYWN0aXZlQmFza2V0JywgbmV3IEJhc2tldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyU3Vic2NyaXB0aW9ucyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8VXNlclN1YnNjcmlwdGlvbkludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd1c2VyU3Vic2NyaXB0aW9ucycsIG5ldyBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJldmlld3ModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFJldmlld0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyZXZpZXdzJywgbmV3IFJldmlld1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NpZ25lZE9yZGVyKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBPcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXIsICdhc3NpZ25lZE9yZGVyJywgbmV3IE9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2lnbmVkR2lmdCh1c2VyOiBVc2VySW50ZXJmYWNlKTogR2lmdEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXIsICdhc3NpZ25lZEdpZnQnLCBuZXcgR2lmdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==