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
        returnOrders: this.includeReturnOrders(user),
        activeBasket: this.includeBasket(user),
        userSubscriptions: this.includeUserSubscriptions(user),
        activeUserSubscriptions: this.includeUserSubscriptions(user) || undefined,
        activeUserSubscriptionStatusId: user.activeUserSubscriptionStatusId,
        activeUserSubscriptionPlan: user.activeUserSubscriptionPlan,
        activeReturnOrder: this.includeActiveReturnOrder(user) || undefined,
        roles: this.includeRoles(user),
        waccRole: user.waccRole,
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
        notes: user.notes
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
  }]);

  return UserTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = UserTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiY29sb3IiLCJoaWdobGlnaHRzIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiYWRkcmVzc2VzIiwiaW5jbHVkZUFkZHJlc3NlcyIsInRveWJveCIsImluY2x1ZGVUb3lib3giLCJsaXN0cyIsImluY2x1ZGVMaXN0cyIsInJldHVybk9yZGVycyIsImluY2x1ZGVSZXR1cm5PcmRlcnMiLCJhY3RpdmVCYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwidXNlclN1YnNjcmlwdGlvbnMiLCJpbmNsdWRlVXNlclN1YnNjcmlwdGlvbnMiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9ucyIsInVuZGVmaW5lZCIsImFjdGl2ZVVzZXJTdWJzY3JpcHRpb25TdGF0dXNJZCIsImFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuIiwiYWN0aXZlUmV0dXJuT3JkZXIiLCJpbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIiLCJyb2xlcyIsImluY2x1ZGVSb2xlcyIsIndhY2NSb2xlIiwib25GaXJzdE9yZGVyIiwidG95Ym94VG9rZW5zIiwiYWRkaXRpb25hbFRva2VucyIsImF2YWlsYWJsZVRva2VucyIsInN1YnNjcmlwdGlvblRva2VucyIsIm1heFRva2VucyIsImJhc2tldFF1YW50aXR5IiwiYWN0aXZlQmFza2V0VG90YWxUb2tlbnMiLCJiYWxhbmNlIiwiY2hhbmdlU3Vic2NyaXB0aW9uU3RhdHVzIiwiY2FuY2VsU3Vic2NyaXB0aW9uU3RhdHVzIiwibm90ZXMiLCJjb2xsZWN0aW9uIiwiT3JkZXJUcmFuc2Zvcm1lciIsIlN0b2NrVHJhbnNmb3JtZXIiLCJBZGRyZXNzVHJhbnNmb3JtZXIiLCJQdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXIiLCJQcm9kdWN0TGlzdFRyYW5zZm9ybWVyIiwiUmV0dXJuT3JkZXJUcmFuc2Zvcm1lciIsIml0ZW0iLCJSb2xlVHJhbnNmb3JtZXIiLCJCYXNrZXRUcmFuc2Zvcm1lciIsIlVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUVBOztBQUtBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLEksRUFBMkI7QUFDL0IsYUFBTyxJQUFJQyxnQkFBSixDQUFTO0FBQ1pDLFFBQUFBLEVBQUUsRUFBRUYsSUFBSSxDQUFDRSxFQURHO0FBRVpDLFFBQUFBLFNBQVMsRUFBRUgsSUFBSSxDQUFDRyxTQUZKO0FBR1pDLFFBQUFBLFNBQVMsRUFBRUosSUFBSSxDQUFDSSxTQUhKO0FBSVpDLFFBQUFBLFNBQVMsRUFBRUwsSUFBSSxDQUFDSyxTQUpKO0FBS1pDLFFBQUFBLFFBQVEsRUFBRU4sSUFBSSxDQUFDTSxRQUxIO0FBTVpDLFFBQUFBLEtBQUssRUFBRVAsSUFBSSxDQUFDTyxLQU5BO0FBT1pDLFFBQUFBLGVBQWUsRUFBRVIsSUFBSSxDQUFDUSxlQVBWO0FBUVpDLFFBQUFBLFFBQVEsRUFBRVQsSUFBSSxDQUFDUyxRQVJIO0FBU1pDLFFBQUFBLG9CQUFvQixFQUFFVixJ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c0IsbUJBQXRCLEVBQTJDLElBQUltRSx1Q0FBSixFQUEzQyxDQUFQO0FBQ0g7Ozs7RUEvRndDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uL1VzZXInO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2snO1xuaW1wb3J0IFN0b2NrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFkZHJlc3NJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hZGRyZXNzL0FkZHJlc3MnO1xuaW1wb3J0IFB1cmNoYXNlU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9QdXJjaGFzZVN0b2NrJztcbmltcG9ydCBQcm9kdWN0TGlzdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdExpc3QnO1xuaW1wb3J0IFJldHVybk9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV0dXJuL1JldHVybk9yZGVyJztcbmltcG9ydCBSZXR1cm5PcmRlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JldHVybi9UcmFuc2Zvcm1lcnMvUmV0dXJuT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBCYXNrZXQgYXMgQmFza2V0SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iYXNrZXQvQmFza2V0JztcbmltcG9ydCBCYXNrZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iYXNrZXQvVHJhbnNmb3JtZXJzL0Jhc2tldFRyYW5zZm9ybWVyJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyU3Vic2NyaXB0aW9uJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9Vc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFkZHJlc3NUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hZGRyZXNzL1RyYW5zZm9ybWVycy9BZGRyZXNzVHJhbnNmb3JtZXInO1xuaW1wb3J0IFB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0TGlzdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RMaXN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFJvbGVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yb2xlL1JvbGUnO1xuaW1wb3J0IFJvbGVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yb2xlL1RyYW5zZm9ybWVycy9Sb2xlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiB1c2VyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlclxuICAgICAqL1xuICAgIG1hcERhdGEodXNlcjogVXNlckludGVyZmFjZSk6IFVzZXIge1xuICAgICAgICByZXR1cm4gbmV3IFVzZXIoe1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHVzZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB1c2VyLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogdXNlci5maXJzdG5hbWUsXG4gICAgICAgICAgICBsYXN0bmFtZTogdXNlci5sYXN0bmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgZW1haWxWZXJpZmllZEF0OiB1c2VyLmVtYWlsVmVyaWZpZWRBdCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiB1c2VyLnN0YXR1c0lkLFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzSWQ6IHVzZXIucmVnaXN0cmF0aW9uU3RhdHVzSWQsXG4gICAgICAgICAgICBzdHJpcGVJZDogdXNlci5zdHJpcGVJZCxcbiAgICAgICAgICAgIHJlc2lkdWFsQ2hhcmdlc09wdEluOiB1c2VyLnJlc2lkdWFsQ2hhcmdlc09wdEluLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uVGVybXM6IHVzZXIuc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uVGVybXMsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25DaGFyZ2VzOiB1c2VyLnN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMsXG4gICAgICAgICAgICB2ZXJpZmllZEF0OiB1c2VyLnZlcmlmaWVkQXQsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHVzZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiB1c2VyLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGNvbG9yOiB1c2VyLmNvbG9yLFxuICAgICAgICAgICAgaGlnaGxpZ2h0czogdXNlci5oaWdobGlnaHRzLFxuICAgICAgICAgICAgLy8gSGFzIG1hbnlcbiAgICAgICAgICAgIG9yZGVyczogdGhpcy5pbmNsdWRlT3JkZXJzKHVzZXIpLFxuICAgICAgICAgICAgc3RvY2s6IHRoaXMuaW5jbHVkZVN0b2NrKHVzZXIpLFxuICAgICAgICAgICAgYWRkcmVzc2VzOiB0aGlzLmluY2x1ZGVBZGRyZXNzZXModXNlciksXG4gICAgICAgICAgICB0b3lib3g6IHRoaXMuaW5jbHVkZVRveWJveCh1c2VyKSxcbiAgICAgICAgICAgIGxpc3RzOiB0aGlzLmluY2x1ZGVMaXN0cyh1c2VyKSxcbiAgICAgICAgICAgIHJldHVybk9yZGVyczogdGhpcy5pbmNsdWRlUmV0dXJuT3JkZXJzKHVzZXIpLFxuICAgICAgICAgICAgYWN0aXZlQmFza2V0OiB0aGlzLmluY2x1ZGVCYXNrZXQodXNlciksXG4gICAgICAgICAgICB1c2VyU3Vic2NyaXB0aW9uczogdGhpcy5pbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlciksXG4gICAgICAgICAgICBhY3RpdmVVc2VyU3Vic2NyaXB0aW9uczogdGhpcy5pbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlcikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWN0aXZlVXNlclN1YnNjcmlwdGlvblN0YXR1c0lkOiB1c2VyLmFjdGl2ZVVzZXJTdWJzY3JpcHRpb25TdGF0dXNJZCxcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuOiB1c2VyLmFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuLFxuICAgICAgICAgICAgYWN0aXZlUmV0dXJuT3JkZXI6IHRoaXMuaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJvbGVzOiB0aGlzLmluY2x1ZGVSb2xlcyh1c2VyKSxcbiAgICAgICAgICAgIHdhY2NSb2xlOiB1c2VyLndhY2NSb2xlLFxuICAgICAgICAgICAgLy8gQWNjZXNzb3JzXG4gICAgICAgICAgICBvbkZpcnN0T3JkZXI6IHVzZXIub25GaXJzdE9yZGVyLFxuICAgICAgICAgICAgdG95Ym94VG9rZW5zOiB1c2VyLnRveWJveFRva2VucyxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxUb2tlbnM6IHVzZXIuYWRkaXRpb25hbFRva2VucyxcbiAgICAgICAgICAgIGF2YWlsYWJsZVRva2VuczogdXNlci5hdmFpbGFibGVUb2tlbnMsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25Ub2tlbnM6IHVzZXIuc3Vic2NyaXB0aW9uVG9rZW5zLFxuICAgICAgICAgICAgbWF4VG9rZW5zOiB1c2VyLm1heFRva2VucyxcbiAgICAgICAgICAgIGJhc2tldFF1YW50aXR5OiB1c2VyLmJhc2tldFF1YW50aXR5LFxuICAgICAgICAgICAgYWN0aXZlQmFza2V0VG90YWxUb2tlbnM6IHVzZXIuYWN0aXZlQmFza2V0VG90YWxUb2tlbnMsXG4gICAgICAgICAgICBiYWxhbmNlOiB1c2VyLmJhbGFuY2UsXG4gICAgICAgICAgICBjaGFuZ2VTdWJzY3JpcHRpb25TdGF0dXM6IHVzZXIuY2hhbmdlU3Vic2NyaXB0aW9uU3RhdHVzLFxuICAgICAgICAgICAgY2FuY2VsU3Vic2NyaXB0aW9uU3RhdHVzOiB1c2VyLmNhbmNlbFN1YnNjcmlwdGlvblN0YXR1cyxcbiAgICAgICAgICAgIG5vdGVzOiB1c2VyLm5vdGVzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxPcmRlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdvcmRlcnMnLCBuZXcgT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2sodXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFN0b2NrSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3N0b2NrJywgbmV3IFN0b2NrVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFkZHJlc3Nlcyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8QWRkcmVzc0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdhZGRyZXNzZXMnLCBuZXcgQWRkcmVzc1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVUb3lib3godXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFB1cmNoYXNlU3RvY2tJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAndG95Ym94JywgbmV3IFB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlTGlzdHModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RMaXN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2xpc3RzJywgbmV3IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJldHVybk9yZGVycyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UmV0dXJuT3JkZXJJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAncmV0dXJuT3JkZXJzJywgbmV3IFJldHVybk9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBSZXR1cm5PcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXIsICdhY3RpdmVSZXR1cm5PcmRlcicsIG5ldyBSZXR1cm5PcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSb2xlcyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8Um9sZUludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyb2xlcycsIG5ldyBSb2xlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUJhc2tldCh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8QmFza2V0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2FjdGl2ZUJhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAndXNlclN1YnNjcmlwdGlvbnMnLCBuZXcgVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==