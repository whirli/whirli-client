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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiY29sb3IiLCJoaWdobGlnaHRzIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiYWRkcmVzc2VzIiwiaW5jbHVkZUFkZHJlc3NlcyIsInRveWJveCIsImluY2x1ZGVUb3lib3giLCJsaXN0cyIsImluY2x1ZGVMaXN0cyIsIndhaXRTcG90cyIsImluY2x1ZGVXYWl0U3BvdHMiLCJyZXR1cm5PcmRlcnMiLCJpbmNsdWRlUmV0dXJuT3JkZXJzIiwiYWN0aXZlQmFza2V0IiwiaW5jbHVkZUJhc2tldCIsInVzZXJTdWJzY3JpcHRpb25zIiwiaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zIiwiYWN0aXZlVXNlclN1YnNjcmlwdGlvbnMiLCJ1bmRlZmluZWQiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uU3RhdHVzSWQiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGxhbiIsImFjdGl2ZVJldHVybk9yZGVyIiwiaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyIiwicm9sZXMiLCJpbmNsdWRlUm9sZXMiLCJ3YWNjUm9sZSIsInJldmlld3MiLCJpbmNsdWRlUmV2aWV3cyIsImFzc2lnbmVkT3JkZXIiLCJpbmNsdWRlQXNzaWduZWRPcmRlciIsImFzc2lnbmVkR2lmdCIsImluY2x1ZGVBc3NpZ25lZEdpZnQiLCJvbkZpcnN0T3JkZXIiLCJ0b3lib3hUb2tlbnMiLCJhZGRpdGlvbmFsVG9rZW5zIiwiYXZhaWxhYmxlVG9rZW5zIiwic3Vic2NyaXB0aW9uVG9rZW5zIiwibWF4VG9rZW5zIiwiYmFza2V0UXVhbnRpdHkiLCJhY3RpdmVCYXNrZXRUb3RhbFRva2VucyIsImJhbGFuY2UiLCJjaGFuZ2VTdWJzY3JpcHRpb25TdGF0dXMiLCJjYW5jZWxTdWJzY3JpcHRpb25TdGF0dXMiLCJub3RlcyIsIm9sZGVzdFVzZXJTdWJzY3JpcHRpb24iLCJvbGRlc3RVc2VyU3Vic2NyaXB0aW9uU3RhcnQiLCJjdXJyZW50QWN0aXZlVXNlclN1YnNjcmlwdGlvblBlcmlvZFN0YXJ0IiwiY3VycmVudEFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QZXJpb2RFbmQiLCJjb2xsZWN0aW9uIiwiT3JkZXJUcmFuc2Zvcm1lciIsIlN0b2NrVHJhbnNmb3JtZXIiLCJBZGRyZXNzVHJhbnNmb3JtZXIiLCJQdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXIiLCJQcm9kdWN0TGlzdFRyYW5zZm9ybWVyIiwiV2FpdFNwb3RUcmFuc2Zvcm1lciIsIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJpdGVtIiwiUm9sZVRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIiLCJSZXZpZXdUcmFuc2Zvcm1lciIsIkdpZnRUcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUVBOztBQUtBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEksRUFBMkI7QUFDL0IsYUFBTyxJQUFJ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LElBQUlnRix1Q0FBSixFQUEzQyxDQUFQO0FBQ0g7OzttQ0FFY2hGLEksRUFBNkM7QUFDeEQsYUFBTyxLQUFLcUUsVUFBTCxDQUFnQnJFLElBQWhCLEVBQXNCLFNBQXRCLEVBQWlDLElBQUlpRiw2QkFBSixFQUFqQyxDQUFQO0FBQ0g7Ozt5Q0FFb0JqRixJLEVBQTRDO0FBQzdELGFBQU8sS0FBSzZFLElBQUwsQ0FBVTdFLElBQVYsRUFBZ0IsZUFBaEIsRUFBaUMsSUFBSXNFLDRCQUFKLEVBQWpDLENBQVA7QUFDSDs7O3dDQUVtQnRFLEksRUFBMkM7QUFDM0QsYUFBTyxLQUFLNkUsSUFBTCxDQUFVN0UsSUFBVixFQUFnQixjQUFoQixFQUFnQyxJQUFJa0YsMkJBQUosRUFBaEMsQ0FBUDtBQUNIOzs7O0VBeEh3Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuLi9Vc2VyJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBPcmRlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyJztcbmltcG9ydCBPcmRlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL29yZGVyL1RyYW5zZm9ybWVycy9PcmRlclRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1N0b2NrJztcbmltcG9ydCBTdG9ja1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N0b2NrL1RyYW5zZm9ybWVycy9TdG9ja1RyYW5zZm9ybWVyJztcbmltcG9ydCBBZGRyZXNzSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYWRkcmVzcy9BZGRyZXNzJztcbmltcG9ydCBQdXJjaGFzZVN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svUHVyY2hhc2VTdG9jayc7XG5pbXBvcnQgUHJvZHVjdExpc3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RMaXN0JztcbmltcG9ydCBSZXR1cm5PcmRlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JldHVybi9SZXR1cm5PcmRlcic7XG5pbXBvcnQgUmV0dXJuT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yZXR1cm4vVHJhbnNmb3JtZXJzL1JldHVybk9yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQmFza2V0IGFzIEJhc2tldEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmFza2V0L0Jhc2tldCc7XG5pbXBvcnQgQmFza2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlclN1YnNjcmlwdGlvbic7XG5pbXBvcnQgVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIGZyb20gJy4vVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBBZGRyZXNzVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYWRkcmVzcy9UcmFuc2Zvcm1lcnMvQWRkcmVzc1RyYW5zZm9ybWVyJztcbmltcG9ydCBQdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1B1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdExpc3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0TGlzdFRyYW5zZm9ybWVyJztcbmltcG9ydCBSb2xlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcm9sZS9Sb2xlJztcbmltcG9ydCBSb2xlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcm9sZS9UcmFuc2Zvcm1lcnMvUm9sZVRyYW5zZm9ybWVyJztcbmltcG9ydCBXYWl0U3BvdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3dhaXRzcG90L1dhaXRTcG90JztcbmltcG9ydCBXYWl0U3BvdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3dhaXRzcG90L1RyYW5zZm9ybWVycy9XYWl0U3BvdFRyYW5zZm9ybWVyJztcbmltcG9ydCBSZXZpZXdJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXZpZXcvUmV2aWV3JztcbmltcG9ydCBSZXZpZXdUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yZXZpZXcvVHJhbnNmb3JtZXJzL1Jldmlld1RyYW5zZm9ybWVyJztcbmltcG9ydCBHaWZ0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZ2lmdC9HaWZ0JztcbmltcG9ydCBHaWZ0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vZ2lmdC9UcmFuc2Zvcm1lcnMvR2lmdFRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gdXNlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHVzZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBVc2VyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VyKHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiB1c2VyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogdXNlci51cGRhdGVkQXQsXG4gICAgICAgICAgICBmaXJzdG5hbWU6IHVzZXIuZmlyc3RuYW1lLFxuICAgICAgICAgICAgbGFzdG5hbWU6IHVzZXIubGFzdG5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIGVtYWlsVmVyaWZpZWRBdDogdXNlci5lbWFpbFZlcmlmaWVkQXQsXG4gICAgICAgICAgICBzdGF0dXNJZDogdXNlci5zdGF0dXNJZCxcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1c0lkOiB1c2VyLnJlZ2lzdHJhdGlvblN0YXR1c0lkLFxuICAgICAgICAgICAgc3RyaXBlSWQ6IHVzZXIuc3RyaXBlSWQsXG4gICAgICAgICAgICByZXNpZHVhbENoYXJnZXNPcHRJbjogdXNlci5yZXNpZHVhbENoYXJnZXNPcHRJbixcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvblRlcm1zOiB1c2VyLnN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvblRlcm1zLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uQ2hhcmdlczogdXNlci5zdWJzY3JpcHRpb25DYW5jZWxsYXRpb25DaGFyZ2VzLFxuICAgICAgICAgICAgdmVyaWZpZWRBdDogdXNlci52ZXJpZmllZEF0LFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiB1c2VyLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogdXNlci5yZWZlcmVuY2UsXG4gICAgICAgICAgICBjb2xvcjogdXNlci5jb2xvcixcbiAgICAgICAgICAgIGhpZ2hsaWdodHM6IHVzZXIuaGlnaGxpZ2h0cyxcbiAgICAgICAgICAgIC8vIEhhcyBtYW55XG4gICAgICAgICAgICBvcmRlcnM6IHRoaXMuaW5jbHVkZU9yZGVycyh1c2VyKSxcbiAgICAgICAgICAgIHN0b2NrOiB0aGlzLmluY2x1ZGVTdG9jayh1c2VyKSxcbiAgICAgICAgICAgIGFkZHJlc3NlczogdGhpcy5pbmNsdWRlQWRkcmVzc2VzKHVzZXIpLFxuICAgICAgICAgICAgdG95Ym94OiB0aGlzLmluY2x1ZGVUb3lib3godXNlciksXG4gICAgICAgICAgICBsaXN0czogdGhpcy5pbmNsdWRlTGlzdHModXNlciksXG4gICAgICAgICAgICB3YWl0U3BvdHM6IHRoaXMuaW5jbHVkZVdhaXRTcG90cyh1c2VyKSxcbiAgICAgICAgICAgIHJldHVybk9yZGVyczogdGhpcy5pbmNsdWRlUmV0dXJuT3JkZXJzKHVzZXIpLFxuICAgICAgICAgICAgYWN0aXZlQmFza2V0OiB0aGlzLmluY2x1ZGVCYXNrZXQodXNlciksXG4gICAgICAgICAgICB1c2VyU3Vic2NyaXB0aW9uczogdGhpcy5pbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlciksXG4gICAgICAgICAgICBhY3RpdmVVc2VyU3Vic2NyaXB0aW9uczogdGhpcy5pbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlcikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWN0aXZlVXNlclN1YnNjcmlwdGlvblN0YXR1c0lkOiB1c2VyLmFjdGl2ZVVzZXJTdWJzY3JpcHRpb25TdGF0dXNJZCxcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuOiB1c2VyLmFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuLFxuICAgICAgICAgICAgYWN0aXZlUmV0dXJuT3JkZXI6IHRoaXMuaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJvbGVzOiB0aGlzLmluY2x1ZGVSb2xlcyh1c2VyKSxcbiAgICAgICAgICAgIHdhY2NSb2xlOiB1c2VyLndhY2NSb2xlLFxuICAgICAgICAgICAgcmV2aWV3czogdGhpcy5pbmNsdWRlUmV2aWV3cyh1c2VyKSxcbiAgICAgICAgICAgIC8vIEhhcyBvbmVcbiAgICAgICAgICAgIGFzc2lnbmVkT3JkZXI6IHRoaXMuaW5jbHVkZUFzc2lnbmVkT3JkZXIodXNlcikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgYXNzaWduZWRHaWZ0OiB0aGlzLmluY2x1ZGVBc3NpZ25lZEdpZnQodXNlcikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgLy8gQWNjZXNzb3JzXG4gICAgICAgICAgICBvbkZpcnN0T3JkZXI6IHVzZXIub25GaXJzdE9yZGVyLFxuICAgICAgICAgICAgdG95Ym94VG9rZW5zOiB1c2VyLnRveWJveFRva2VucyxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxUb2tlbnM6IHVzZXIuYWRkaXRpb25hbFRva2VucyxcbiAgICAgICAgICAgIGF2YWlsYWJsZVRva2VuczogdXNlci5hdmFpbGFibGVUb2tlbnMsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25Ub2tlbnM6IHVzZXIuc3Vic2NyaXB0aW9uVG9rZW5zLFxuICAgICAgICAgICAgbWF4VG9rZW5zOiB1c2VyLm1heFRva2VucyxcbiAgICAgICAgICAgIGJhc2tldFF1YW50aXR5OiB1c2VyLmJhc2tldFF1YW50aXR5LFxuICAgICAgICAgICAgYWN0aXZlQmFza2V0VG90YWxUb2tlbnM6IHVzZXIuYWN0aXZlQmFza2V0VG90YWxUb2tlbnMsXG4gICAgICAgICAgICBiYWxhbmNlOiB1c2VyLmJhbGFuY2UsXG4gICAgICAgICAgICBjaGFuZ2VTdWJzY3JpcHRpb25TdGF0dXM6IHVzZXIuY2hhbmdlU3Vic2NyaXB0aW9uU3RhdHVzLFxuICAgICAgICAgICAgY2FuY2VsU3Vic2NyaXB0aW9uU3RhdHVzOiB1c2VyLmNhbmNlbFN1YnNjcmlwdGlvblN0YXR1cyxcbiAgICAgICAgICAgIG5vdGVzOiB1c2VyLm5vdGVzLFxuICAgICAgICAgICAgb2xkZXN0VXNlclN1YnNjcmlwdGlvbjogdXNlci5vbGRlc3RVc2VyU3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgb2xkZXN0VXNlclN1YnNjcmlwdGlvblN0YXJ0OiB1c2VyLm9sZGVzdFVzZXJTdWJzY3JpcHRpb25TdGFydCxcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGVyaW9kU3RhcnQ6IHVzZXIuY3VycmVudEFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QZXJpb2RTdGFydCxcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGVyaW9kRW5kOiB1c2VyLmN1cnJlbnRBY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGVyaW9kRW5kLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxPcmRlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdvcmRlcnMnLCBuZXcgT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2sodXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFN0b2NrSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3N0b2NrJywgbmV3IFN0b2NrVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFkZHJlc3Nlcyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8QWRkcmVzc0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdhZGRyZXNzZXMnLCBuZXcgQWRkcmVzc1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVUb3lib3godXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFB1cmNoYXNlU3RvY2tJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAndG95Ym94JywgbmV3IFB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlTGlzdHModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RMaXN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2xpc3RzJywgbmV3IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVdhaXRTcG90cyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8V2FpdFNwb3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnd2FpdFNwb3RzJywgbmV3IFdhaXRTcG90VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJldHVybk9yZGVycyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UmV0dXJuT3JkZXJJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAncmV0dXJuT3JkZXJzJywgbmV3IFJldHVybk9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBSZXR1cm5PcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXIsICdhY3RpdmVSZXR1cm5PcmRlcicsIG5ldyBSZXR1cm5PcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSb2xlcyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8Um9sZUludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyb2xlcycsIG5ldyBSb2xlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUJhc2tldCh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8QmFza2V0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2FjdGl2ZUJhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAndXNlclN1YnNjcmlwdGlvbnMnLCBuZXcgVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZXZpZXdzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSZXZpZXdJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAncmV2aWV3cycsIG5ldyBSZXZpZXdUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQXNzaWduZWRPcmRlcih1c2VyOiBVc2VySW50ZXJmYWNlKTogT3JkZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyLCAnYXNzaWduZWRPcmRlcicsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBc3NpZ25lZEdpZnQodXNlcjogVXNlckludGVyZmFjZSk6IEdpZnRJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyLCAnYXNzaWduZWRHaWZ0JywgbmV3IEdpZnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=