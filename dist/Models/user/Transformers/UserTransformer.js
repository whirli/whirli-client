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

var _UserTypesHistoryTransformer = _interopRequireDefault(require("./UserTypesHistoryTransformer"));

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
        typeHistory: this.includeTypeHistory(user) || undefined,
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
        currentActiveUserSubscriptionPeriodEnd: user.currentActiveUserSubscriptionPeriodEnd,
        typeId: user.typeId,
        referringCode: user.referringCode,
        referredUsers: user.referredUsers
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
  }, {
    key: "includeTypeHistory",
    value: function includeTypeHistory(user) {
      return this.collection(user, 'typeHistory', new _UserTypesHistoryTransformer["default"]());
    }
  }]);

  return UserTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = UserTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiY29sb3IiLCJoaWdobGlnaHRzIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiYWRkcmVzc2VzIiwiaW5jbHVkZUFkZHJlc3NlcyIsInRveWJveCIsImluY2x1ZGVUb3lib3giLCJsaXN0cyIsImluY2x1ZGVMaXN0cyIsIndhaXRTcG90cyIsImluY2x1ZGVXYWl0U3BvdHMiLCJyZXR1cm5PcmRlcnMiLCJpbmNsdWRlUmV0dXJuT3JkZXJzIiwiYWN0aXZlQmFza2V0IiwiaW5jbHVkZUJhc2tldCIsInVzZXJTdWJzY3JpcHRpb25zIiwiaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zIiwiYWN0aXZlVXNlclN1YnNjcmlwdGlvbnMiLCJ1bmRlZmluZWQiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uU3RhdHVzSWQiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGxhbiIsImFjdGl2ZVJldHVybk9yZGVyIiwiaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyIiwicm9sZXMiLCJpbmNsdWRlUm9sZXMiLCJ3YWNjUm9sZSIsInJldmlld3MiLCJpbmNsdWRlUmV2aWV3cyIsInR5cGVIaXN0b3J5IiwiaW5jbHVkZVR5cGVIaXN0b3J5IiwiYXNzaWduZWRPcmRlciIsImluY2x1ZGVBc3NpZ25lZE9yZGVyIiwiYXNzaWduZWRHaWZ0IiwiaW5jbHVkZUFzc2lnbmVkR2lmdCIsIm9uRmlyc3RPcmRlciIsInRveWJveFRva2VucyIsImFkZGl0aW9uYWxUb2tlbnMiLCJhdmFpbGFibGVUb2tlbnMiLCJzdWJzY3JpcHRpb25Ub2tlbnMiLCJtYXhUb2tlbnMiLCJiYXNrZXRRdWFudGl0eSIsImFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zIiwiYmFsYW5jZSIsImNoYW5nZVN1YnNjcmlwdGlvblN0YXR1cyIsImNhbmNlbFN1YnNjcmlwdGlvblN0YXR1cyIsIm5vdGVzIiwiY2FuRG93bmdyYWRlRnJvbSIsIm9sZGVzdFVzZXJTdWJzY3JpcHRpb24iLCJvbGRlc3RVc2VyU3Vic2NyaXB0aW9uU3RhcnQiLCJjdXJyZW50QWN0aXZlVXNlclN1YnNjcmlwdGlvblBlcmlvZFN0YXJ0IiwiY3VycmVudEFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QZXJpb2RFbmQiLCJ0eXBlSWQiLCJyZWZlcnJpbmdDb2RlIiwicmVmZXJyZWRVc2VycyIsImNvbGxlY3Rpb24iLCJPcmRlclRyYW5zZm9ybWVyIiwiU3RvY2tUcmFuc2Zvcm1lciIsIkFkZHJlc3NUcmFuc2Zvcm1lciIsIlB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lciIsIlByb2R1Y3RMaXN0VHJhbnNmb3JtZXIiLCJXYWl0U3BvdFRyYW5zZm9ybWVyIiwiUmV0dXJuT3JkZXJUcmFuc2Zvcm1lciIsIml0ZW0iLCJSb2xlVHJhbnNmb3JtZXIiLCJCYXNrZXRUcmFuc2Zvcm1lciIsIlVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsIlJldmlld1RyYW5zZm9ybWVyIiwiR2lmdFRyYW5zZm9ybWVyIiwiVXNlclR5cGVzSGlzdG9yeVRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFFQTs7QUFLQTs7QUFFQTs7QUFF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QUFMLENBQWdCM0UsSUFBaEIsRUFBc0IsYUFBdEIsRUFBcUMsSUFBSXlGLHVDQUFKLEVBQXJDLENBQVA7QUFDSDs7OztFQWpJd0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vVXNlcic7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9TdG9jayc7XG5pbXBvcnQgU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvU3RvY2tUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2FkZHJlc3MvQWRkcmVzcyc7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1B1cmNoYXNlU3RvY2snO1xuaW1wb3J0IFByb2R1Y3RMaXN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgUmV0dXJuT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXInO1xuaW1wb3J0IFJldHVybk9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlclRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEJhc2tldCBhcyBCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IEJhc2tldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXJTdWJzY3JpcHRpb24nO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1VzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2FkZHJlc3MvVHJhbnNmb3JtZXJzL0FkZHJlc3NUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N0b2NrL1RyYW5zZm9ybWVycy9QdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdExpc3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUm9sZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JvbGUvUm9sZSc7XG5pbXBvcnQgUm9sZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JvbGUvVHJhbnNmb3JtZXJzL1JvbGVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgV2FpdFNwb3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy93YWl0c3BvdC9XYWl0U3BvdCc7XG5pbXBvcnQgV2FpdFNwb3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi93YWl0c3BvdC9UcmFuc2Zvcm1lcnMvV2FpdFNwb3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUmV2aWV3SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV2aWV3L1Jldmlldyc7XG5pbXBvcnQgUmV2aWV3VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV2aWV3L1RyYW5zZm9ybWVycy9SZXZpZXdUcmFuc2Zvcm1lcic7XG5pbXBvcnQgR2lmdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdCc7XG5pbXBvcnQgR2lmdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2dpZnQvVHJhbnNmb3JtZXJzL0dpZnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlclR5cGVzSGlzdG9yeUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlclR5cGVzSGlzdG9yeSc7XG5pbXBvcnQgVXNlclR5cGVzSGlzdG9yeVRyYW5zZm9ybWVyIGZyb20gJy4vVXNlclR5cGVzSGlzdG9yeVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gdXNlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHVzZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBVc2VyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VyKHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiB1c2VyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogdXNlci51cGRhdGVkQXQsXG4gICAgICAgICAgICBmaXJzdG5hbWU6IHVzZXIuZmlyc3RuYW1lLFxuICAgICAgICAgICAgbGFzdG5hbWU6IHVzZXIubGFzdG5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIGVtYWlsVmVyaWZpZWRBdDogdXNlci5lbWFpbFZlcmlmaWVkQXQsXG4gICAgICAgICAgICBzdGF0dXNJZDogdXNlci5zdGF0dXNJZCxcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1c0lkOiB1c2VyLnJlZ2lzdHJhdGlvblN0YXR1c0lkLFxuICAgICAgICAgICAgc3RyaXBlSWQ6IHVzZXIuc3RyaXBlSWQsXG4gICAgICAgICAgICByZXNpZHVhbENoYXJnZXNPcHRJbjogdXNlci5yZXNpZHVhbENoYXJnZXNPcHRJbixcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvblRlcm1zOiB1c2VyLnN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvblRlcm1zLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uQ2hhcmdlczogdXNlci5zdWJzY3JpcHRpb25DYW5jZWxsYXRpb25DaGFyZ2VzLFxuICAgICAgICAgICAgdmVyaWZpZWRBdDogdXNlci52ZXJpZmllZEF0LFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiB1c2VyLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogdXNlci5yZWZlcmVuY2UsXG4gICAgICAgICAgICBjb2xvcjogdXNlci5jb2xvcixcbiAgICAgICAgICAgIGhpZ2hsaWdodHM6IHVzZXIuaGlnaGxpZ2h0cyxcbiAgICAgICAgICAgIC8vIEhhcyBtYW55XG4gICAgICAgICAgICBvcmRlcnM6IHRoaXMuaW5jbHVkZU9yZGVycyh1c2VyKSxcbiAgICAgICAgICAgIHN0b2NrOiB0aGlzLmluY2x1ZGVTdG9jayh1c2VyKSxcbiAgICAgICAgICAgIGFkZHJlc3NlczogdGhpcy5pbmNsdWRlQWRkcmVzc2VzKHVzZXIpLFxuICAgICAgICAgICAgdG95Ym94OiB0aGlzLmluY2x1ZGVUb3lib3godXNlciksXG4gICAgICAgICAgICBsaXN0czogdGhpcy5pbmNsdWRlTGlzdHModXNlciksXG4gICAgICAgICAgICB3YWl0U3BvdHM6IHRoaXMuaW5jbHVkZVdhaXRTcG90cyh1c2VyKSxcbiAgICAgICAgICAgIHJldHVybk9yZGVyczogdGhpcy5pbmNsdWRlUmV0dXJuT3JkZXJzKHVzZXIpLFxuICAgICAgICAgICAgYWN0aXZlQmFza2V0OiB0aGlzLmluY2x1ZGVCYXNrZXQodXNlciksXG4gICAgICAgICAgICB1c2VyU3Vic2NyaXB0aW9uczogdGhpcy5pbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlciksXG4gICAgICAgICAgICBhY3RpdmVVc2VyU3Vic2NyaXB0aW9uczogdGhpcy5pbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlcikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWN0aXZlVXNlclN1YnNjcmlwdGlvblN0YXR1c0lkOiB1c2VyLmFjdGl2ZVVzZXJTdWJzY3JpcHRpb25TdGF0dXNJZCxcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuOiB1c2VyLmFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuLFxuICAgICAgICAgICAgYWN0aXZlUmV0dXJuT3JkZXI6IHRoaXMuaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJvbGVzOiB0aGlzLmluY2x1ZGVSb2xlcyh1c2VyKSxcbiAgICAgICAgICAgIHdhY2NSb2xlOiB1c2VyLndhY2NSb2xlLFxuICAgICAgICAgICAgcmV2aWV3czogdGhpcy5pbmNsdWRlUmV2aWV3cyh1c2VyKSxcbiAgICAgICAgICAgIHR5cGVIaXN0b3J5OiB0aGlzLmluY2x1ZGVUeXBlSGlzdG9yeSh1c2VyKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAvLyBIYXMgb25lXG4gICAgICAgICAgICBhc3NpZ25lZE9yZGVyOiB0aGlzLmluY2x1ZGVBc3NpZ25lZE9yZGVyKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFzc2lnbmVkR2lmdDogdGhpcy5pbmNsdWRlQXNzaWduZWRHaWZ0KHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8vIEFjY2Vzc29yc1xuICAgICAgICAgICAgb25GaXJzdE9yZGVyOiB1c2VyLm9uRmlyc3RPcmRlcixcbiAgICAgICAgICAgIHRveWJveFRva2VuczogdXNlci50b3lib3hUb2tlbnMsXG4gICAgICAgICAgICBhZGRpdGlvbmFsVG9rZW5zOiB1c2VyLmFkZGl0aW9uYWxUb2tlbnMsXG4gICAgICAgICAgICBhdmFpbGFibGVUb2tlbnM6IHVzZXIuYXZhaWxhYmxlVG9rZW5zLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uVG9rZW5zOiB1c2VyLnN1YnNjcmlwdGlvblRva2VucyxcbiAgICAgICAgICAgIG1heFRva2VuczogdXNlci5tYXhUb2tlbnMsXG4gICAgICAgICAgICBiYXNrZXRRdWFudGl0eTogdXNlci5iYXNrZXRRdWFudGl0eSxcbiAgICAgICAgICAgIGFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zOiB1c2VyLmFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zLFxuICAgICAgICAgICAgYmFsYW5jZTogdXNlci5iYWxhbmNlLFxuICAgICAgICAgICAgY2hhbmdlU3Vic2NyaXB0aW9uU3RhdHVzOiB1c2VyLmNoYW5nZVN1YnNjcmlwdGlvblN0YXR1cyxcbiAgICAgICAgICAgIGNhbmNlbFN1YnNjcmlwdGlvblN0YXR1czogdXNlci5jYW5jZWxTdWJzY3JpcHRpb25TdGF0dXMsXG4gICAgICAgICAgICBub3RlczogdXNlci5ub3RlcyxcbiAgICAgICAgICAgIGNhbkRvd25ncmFkZUZyb206IHVzZXIuY2FuRG93bmdyYWRlRnJvbSxcbiAgICAgICAgICAgIG9sZGVzdFVzZXJTdWJzY3JpcHRpb246IHVzZXIub2xkZXN0VXNlclN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIG9sZGVzdFVzZXJTdWJzY3JpcHRpb25TdGFydDogdXNlci5vbGRlc3RVc2VyU3Vic2NyaXB0aW9uU3RhcnQsXG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlVXNlclN1YnNjcmlwdGlvblBlcmlvZFN0YXJ0OiB1c2VyLmN1cnJlbnRBY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGVyaW9kU3RhcnQsXG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlVXNlclN1YnNjcmlwdGlvblBlcmlvZEVuZDogdXNlci5jdXJyZW50QWN0aXZlVXNlclN1YnNjcmlwdGlvblBlcmlvZEVuZCxcbiAgICAgICAgICAgIHR5cGVJZDogdXNlci50eXBlSWQsXG4gICAgICAgICAgICByZWZlcnJpbmdDb2RlOiB1c2VyLnJlZmVycmluZ0NvZGUsXG4gICAgICAgICAgICByZWZlcnJlZFVzZXJzOiB1c2VyLnJlZmVycmVkVXNlcnMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlcnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PE9yZGVySW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ29yZGVycycsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdG9jayh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8U3RvY2tJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnc3RvY2snLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWRkcmVzc2VzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxBZGRyZXNzSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2FkZHJlc3NlcycsIG5ldyBBZGRyZXNzVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVRveWJveCh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UHVyY2hhc2VTdG9ja0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd0b3lib3gnLCBuZXcgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVMaXN0cyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdExpc3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnbGlzdHMnLCBuZXcgUHJvZHVjdExpc3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlV2FpdFNwb3RzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxXYWl0U3BvdEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd3YWl0U3BvdHMnLCBuZXcgV2FpdFNwb3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmV0dXJuT3JkZXJzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSZXR1cm5PcmRlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyZXR1cm5PcmRlcnMnLCBuZXcgUmV0dXJuT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIodXNlcjogVXNlckludGVyZmFjZSk6IFJldHVybk9yZGVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0odXNlciwgJ2FjdGl2ZVJldHVybk9yZGVyJywgbmV3IFJldHVybk9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJvbGVzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSb2xlSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3JvbGVzJywgbmV3IFJvbGVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQmFza2V0KHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxCYXNrZXRJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnYWN0aXZlQmFza2V0JywgbmV3IEJhc2tldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyU3Vic2NyaXB0aW9ucyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8VXNlclN1YnNjcmlwdGlvbkludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd1c2VyU3Vic2NyaXB0aW9ucycsIG5ldyBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJldmlld3ModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFJldmlld0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyZXZpZXdzJywgbmV3IFJldmlld1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NpZ25lZE9yZGVyKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBPcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXIsICdhc3NpZ25lZE9yZGVyJywgbmV3IE9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFzc2lnbmVkR2lmdCh1c2VyOiBVc2VySW50ZXJmYWNlKTogR2lmdEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXIsICdhc3NpZ25lZEdpZnQnLCBuZXcgR2lmdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVUeXBlSGlzdG9yeSh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8VXNlclR5cGVzSGlzdG9yeUludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd0eXBlSGlzdG9yeScsIG5ldyBVc2VyVHlwZXNIaXN0b3J5VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19