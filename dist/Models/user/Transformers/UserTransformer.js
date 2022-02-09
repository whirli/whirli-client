"use strict";

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UserTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(UserTransformer, _BaseTransformer);

  function UserTransformer() {
    _classCallCheck(this, UserTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserTransformer).apply(this, arguments));
  }

  _createClass(UserTransformer, [{
    key: "mapData",

    /**
     * Map an user response
     *
     * @param user
     */
    value: function mapData(user) {
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
        oldestUserSubscription: user.oldestUserSubscription,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiY29sb3IiLCJoaWdobGlnaHRzIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiYWRkcmVzc2VzIiwiaW5jbHVkZUFkZHJlc3NlcyIsInRveWJveCIsImluY2x1ZGVUb3lib3giLCJsaXN0cyIsImluY2x1ZGVMaXN0cyIsIndhaXRTcG90cyIsImluY2x1ZGVXYWl0U3BvdHMiLCJyZXR1cm5PcmRlcnMiLCJpbmNsdWRlUmV0dXJuT3JkZXJzIiwiYWN0aXZlQmFza2V0IiwiaW5jbHVkZUJhc2tldCIsInVzZXJTdWJzY3JpcHRpb25zIiwiaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zIiwiYWN0aXZlVXNlclN1YnNjcmlwdGlvbnMiLCJ1bmRlZmluZWQiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uU3RhdHVzSWQiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGxhbiIsImFjdGl2ZVJldHVybk9yZGVyIiwiaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyIiwicm9sZXMiLCJpbmNsdWRlUm9sZXMiLCJ3YWNjUm9sZSIsInJldmlld3MiLCJpbmNsdWRlUmV2aWV3cyIsImFzc2lnbmVkT3JkZXIiLCJpbmNsdWRlQXNzaWduZWRPcmRlciIsImFzc2lnbmVkR2lmdCIsImluY2x1ZGVBc3NpZ25lZEdpZnQiLCJvbkZpcnN0T3JkZXIiLCJ0b3lib3hUb2tlbnMiLCJhZGRpdGlvbmFsVG9rZW5zIiwiYXZhaWxhYmxlVG9rZW5zIiwic3Vic2NyaXB0aW9uVG9rZW5zIiwibWF4VG9rZW5zIiwiYmFza2V0UXVhbnRpdHkiLCJhY3RpdmVCYXNrZXRUb3RhbFRva2VucyIsImJhbGFuY2UiLCJjaGFuZ2VTdWJzY3JpcHRpb25TdGF0dXMiLCJjYW5jZWxTdWJzY3JpcHRpb25TdGF0dXMiLCJub3RlcyIsIm9sZGVzdFVzZXJTdWJzY3JpcHRpb24iLCJjdXJyZW50QWN0aXZlVXNlclN1YnNjcmlwdGlvblBlcmlvZFN0YXJ0IiwiY3VycmVudEFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QZXJpb2RFbmQiLCJjb2xsZWN0aW9uIiwiT3JkZXJUcmFuc2Zvcm1lciIsIlN0b2NrVHJhbnNmb3JtZXIiLCJBZGRyZXNzVHJhbnNmb3JtZXIiLCJQdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXIiLCJQcm9kdWN0TGlzdFRyYW5zZm9ybWVyIiwiV2FpdFNwb3RUcmFuc2Zvcm1lciIsIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJpdGVtIiwiUm9sZVRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIiLCJSZXZpZXdUcmFuc2Zvcm1lciIsIkdpZnRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUVBOztBQUtBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEksRUFBMkI7QUFDL0IsYUFBTyxJQUFJQyxnQkFBSixDQUFTO0FBQ1pDLFFBQUFBLEVBQUUs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RSxJQUFoQixFQUFzQixTQUF0QixFQUFpQyxJQUFJZ0YsNkJBQUosRUFBakMsQ0FBUDtBQUNIOzs7eUNBRW9CaEYsSSxFQUE0QztBQUM3RCxhQUFPLEtBQUs0RSxJQUFMLENBQVU1RSxJQUFWLEVBQWdCLGVBQWhCLEVBQWlDLElBQUlxRSw0QkFBSixFQUFqQyxDQUFQO0FBQ0g7Ozt3Q0FFbUJyRSxJLEVBQTJDO0FBQzNELGFBQU8sS0FBSzRFLElBQUwsQ0FBVTVFLElBQVYsRUFBZ0IsY0FBaEIsRUFBZ0MsSUFBSWlGLDJCQUFKLEVBQWhDLENBQVA7QUFDSDs7OztFQXZId0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vVXNlcic7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9TdG9jayc7XG5pbXBvcnQgU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvU3RvY2tUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2FkZHJlc3MvQWRkcmVzcyc7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1B1cmNoYXNlU3RvY2snO1xuaW1wb3J0IFByb2R1Y3RMaXN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgUmV0dXJuT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXInO1xuaW1wb3J0IFJldHVybk9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlclRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEJhc2tldCBhcyBCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IEJhc2tldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXJTdWJzY3JpcHRpb24nO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1VzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2FkZHJlc3MvVHJhbnNmb3JtZXJzL0FkZHJlc3NUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N0b2NrL1RyYW5zZm9ybWVycy9QdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdExpc3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUm9sZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JvbGUvUm9sZSc7XG5pbXBvcnQgUm9sZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JvbGUvVHJhbnNmb3JtZXJzL1JvbGVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgV2FpdFNwb3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy93YWl0c3BvdC9XYWl0U3BvdCc7XG5pbXBvcnQgV2FpdFNwb3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi93YWl0c3BvdC9UcmFuc2Zvcm1lcnMvV2FpdFNwb3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUmV2aWV3SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV2aWV3L1Jldmlldyc7XG5pbXBvcnQgUmV2aWV3VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV2aWV3L1RyYW5zZm9ybWVycy9SZXZpZXdUcmFuc2Zvcm1lcic7XG5pbXBvcnQgR2lmdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdCc7XG5pbXBvcnQgR2lmdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2dpZnQvVHJhbnNmb3JtZXJzL0dpZnRUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHVzZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VyXG4gICAgICovXG4gICAgbWFwRGF0YSh1c2VyOiBVc2VySW50ZXJmYWNlKTogVXNlciB7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcih7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdXNlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHVzZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgZmlyc3RuYW1lOiB1c2VyLmZpcnN0bmFtZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiB1c2VyLmxhc3RuYW1lLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBlbWFpbFZlcmlmaWVkQXQ6IHVzZXIuZW1haWxWZXJpZmllZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHVzZXIuc3RhdHVzSWQsXG4gICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXNJZDogdXNlci5yZWdpc3RyYXRpb25TdGF0dXNJZCxcbiAgICAgICAgICAgIHN0cmlwZUlkOiB1c2VyLnN0cmlwZUlkLFxuICAgICAgICAgICAgcmVzaWR1YWxDaGFyZ2VzT3B0SW46IHVzZXIucmVzaWR1YWxDaGFyZ2VzT3B0SW4sXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtczogdXNlci5zdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXM6IHVzZXIuc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uQ2hhcmdlcyxcbiAgICAgICAgICAgIHZlcmlmaWVkQXQ6IHVzZXIudmVyaWZpZWRBdCxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogdXNlci5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICByZWZlcmVuY2U6IHVzZXIucmVmZXJlbmNlLFxuICAgICAgICAgICAgY29sb3I6IHVzZXIuY29sb3IsXG4gICAgICAgICAgICBoaWdobGlnaHRzOiB1c2VyLmhpZ2hsaWdodHMsXG4gICAgICAgICAgICAvLyBIYXMgbWFueVxuICAgICAgICAgICAgb3JkZXJzOiB0aGlzLmluY2x1ZGVPcmRlcnModXNlciksXG4gICAgICAgICAgICBzdG9jazogdGhpcy5pbmNsdWRlU3RvY2sodXNlciksXG4gICAgICAgICAgICBhZGRyZXNzZXM6IHRoaXMuaW5jbHVkZUFkZHJlc3Nlcyh1c2VyKSxcbiAgICAgICAgICAgIHRveWJveDogdGhpcy5pbmNsdWRlVG95Ym94KHVzZXIpLFxuICAgICAgICAgICAgbGlzdHM6IHRoaXMuaW5jbHVkZUxpc3RzKHVzZXIpLFxuICAgICAgICAgICAgd2FpdFNwb3RzOiB0aGlzLmluY2x1ZGVXYWl0U3BvdHModXNlciksXG4gICAgICAgICAgICByZXR1cm5PcmRlcnM6IHRoaXMuaW5jbHVkZVJldHVybk9yZGVycyh1c2VyKSxcbiAgICAgICAgICAgIGFjdGl2ZUJhc2tldDogdGhpcy5pbmNsdWRlQmFza2V0KHVzZXIpLFxuICAgICAgICAgICAgdXNlclN1YnNjcmlwdGlvbnM6IHRoaXMuaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zKHVzZXIpLFxuICAgICAgICAgICAgYWN0aXZlVXNlclN1YnNjcmlwdGlvbnM6IHRoaXMuaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTdWJzY3JpcHRpb25TdGF0dXNJZDogdXNlci5hY3RpdmVVc2VyU3Vic2NyaXB0aW9uU3RhdHVzSWQsXG4gICAgICAgICAgICBhY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGxhbjogdXNlci5hY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGxhbixcbiAgICAgICAgICAgIGFjdGl2ZVJldHVybk9yZGVyOiB0aGlzLmluY2x1ZGVBY3RpdmVSZXR1cm5PcmRlcih1c2VyKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICByb2xlczogdGhpcy5pbmNsdWRlUm9sZXModXNlciksXG4gICAgICAgICAgICB3YWNjUm9sZTogdXNlci53YWNjUm9sZSxcbiAgICAgICAgICAgIHJldmlld3M6IHRoaXMuaW5jbHVkZVJldmlld3ModXNlciksXG4gICAgICAgICAgICAvLyBIYXMgb25lXG4gICAgICAgICAgICBhc3NpZ25lZE9yZGVyOiB0aGlzLmluY2x1ZGVBc3NpZ25lZE9yZGVyKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFzc2lnbmVkR2lmdDogdGhpcy5pbmNsdWRlQXNzaWduZWRHaWZ0KHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8vIEFjY2Vzc29yc1xuICAgICAgICAgICAgb25GaXJzdE9yZGVyOiB1c2VyLm9uRmlyc3RPcmRlcixcbiAgICAgICAgICAgIHRveWJveFRva2VuczogdXNlci50b3lib3hUb2tlbnMsXG4gICAgICAgICAgICBhZGRpdGlvbmFsVG9rZW5zOiB1c2VyLmFkZGl0aW9uYWxUb2tlbnMsXG4gICAgICAgICAgICBhdmFpbGFibGVUb2tlbnM6IHVzZXIuYXZhaWxhYmxlVG9rZW5zLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uVG9rZW5zOiB1c2VyLnN1YnNjcmlwdGlvblRva2VucyxcbiAgICAgICAgICAgIG1heFRva2VuczogdXNlci5tYXhUb2tlbnMsXG4gICAgICAgICAgICBiYXNrZXRRdWFudGl0eTogdXNlci5iYXNrZXRRdWFudGl0eSxcbiAgICAgICAgICAgIGFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zOiB1c2VyLmFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zLFxuICAgICAgICAgICAgYmFsYW5jZTogdXNlci5iYWxhbmNlLFxuICAgICAgICAgICAgY2hhbmdlU3Vic2NyaXB0aW9uU3RhdHVzOiB1c2VyLmNoYW5nZVN1YnNjcmlwdGlvblN0YXR1cyxcbiAgICAgICAgICAgIGNhbmNlbFN1YnNjcmlwdGlvblN0YXR1czogdXNlci5jYW5jZWxTdWJzY3JpcHRpb25TdGF0dXMsXG4gICAgICAgICAgICBub3RlczogdXNlci5ub3RlcyxcbiAgICAgICAgICAgIG9sZGVzdFVzZXJTdWJzY3JpcHRpb246IHVzZXIub2xkZXN0VXNlclN1YnNjcmlwdGlvbixcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGVyaW9kU3RhcnQ6IHVzZXIuY3VycmVudEFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QZXJpb2RTdGFydCxcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGVyaW9kRW5kOiB1c2VyLmN1cnJlbnRBY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGVyaW9kRW5kLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxPcmRlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdvcmRlcnMnLCBuZXcgT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2sodXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFN0b2NrSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3N0b2NrJywgbmV3IFN0b2NrVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFkZHJlc3Nlcyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8QWRkcmVzc0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdhZGRyZXNzZXMnLCBuZXcgQWRkcmVzc1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVUb3lib3godXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFB1cmNoYXNlU3RvY2tJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAndG95Ym94JywgbmV3IFB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlTGlzdHModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RMaXN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2xpc3RzJywgbmV3IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVdhaXRTcG90cyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8V2FpdFNwb3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnd2FpdFNwb3RzJywgbmV3IFdhaXRTcG90VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJldHVybk9yZGVycyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UmV0dXJuT3JkZXJJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAncmV0dXJuT3JkZXJzJywgbmV3IFJldHVybk9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBSZXR1cm5PcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXIsICdhY3RpdmVSZXR1cm5PcmRlcicsIG5ldyBSZXR1cm5PcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSb2xlcyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8Um9sZUludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyb2xlcycsIG5ldyBSb2xlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUJhc2tldCh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8QmFza2V0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2FjdGl2ZUJhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAndXNlclN1YnNjcmlwdGlvbnMnLCBuZXcgVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZXZpZXdzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSZXZpZXdJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAncmV2aWV3cycsIG5ldyBSZXZpZXdUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzaWduZWRPcmRlcih1c2VyOiBVc2VySW50ZXJmYWNlKTogT3JkZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyLCAnYXNzaWduZWRPcmRlcicsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NpZ25lZEdpZnQodXNlcjogVXNlckludGVyZmFjZSk6IEdpZnRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyLCAnYXNzaWduZWRHaWZ0JywgbmV3IEdpZnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=