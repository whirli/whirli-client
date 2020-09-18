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
        activeUserSubscription: this.includeUserSubscription(user) || undefined,
        activeReturnOrder: this.includeActiveReturnOrder(user) || undefined,
        roles: this.includeRoles(user),
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
        cancelSubscriptionStatus: user.cancelSubscriptionStatus
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
  }, {
    key: "includeUserSubscription",
    value: function includeUserSubscription(user) {
      return this.item(user, 'userSubscriptions', new _UserSubscriptionTransformer["default"]());
    }
  }]);

  return UserTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = UserTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiY29sb3IiLCJoaWdobGlnaHRzIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiYWRkcmVzc2VzIiwiaW5jbHVkZUFkZHJlc3NlcyIsInRveWJveCIsImluY2x1ZGVUb3lib3giLCJsaXN0cyIsImluY2x1ZGVMaXN0cyIsInJldHVybk9yZGVycyIsImluY2x1ZGVSZXR1cm5PcmRlcnMiLCJhY3RpdmVCYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwidXNlclN1YnNjcmlwdGlvbnMiLCJpbmNsdWRlVXNlclN1YnNjcmlwdGlvbnMiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uIiwiaW5jbHVkZVVzZXJTdWJzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJhY3RpdmVSZXR1cm5PcmRlciIsImluY2x1ZGVBY3RpdmVSZXR1cm5PcmRlciIsInJvbGVzIiwiaW5jbHVkZVJvbGVzIiwib25GaXJzdE9yZGVyIiwidG95Ym94VG9rZW5zIiwiYWRkaXRpb25hbFRva2VucyIsImF2YWlsYWJsZVRva2VucyIsInN1YnNjcmlwdGlvblRva2VucyIsIm1heFRva2VucyIsImJhc2tldFF1YW50aXR5IiwiYWN0aXZlQmFza2V0VG90YWxUb2tlbnMiLCJiYWxhbmNlIiwiY2hhbmdlU3Vic2NyaXB0aW9uU3RhdHVzIiwiY2FuY2VsU3Vic2NyaXB0aW9uU3RhdHVzIiwiY29sbGVjdGlvbiIsIk9yZGVyVHJhbnNmb3JtZXIiLCJTdG9ja1RyYW5zZm9ybWVyIiwiQWRkcmVzc1RyYW5zZm9ybWVyIiwiUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIiwiUHJvZHVjdExpc3RUcmFuc2Zvcm1lciIsIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJpdGVtIiwiUm9sZVRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFFQTs7QUFLQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxJLEVBQTJCO0FBQy9CLGFBQU8sSUFBSUMsZ0JBQUosQ0FBUztBQUNaQyxRQUFBQSxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFERztBQUVaQyxRQUFBQSxTQUFTLEVBQUVILElBQUksQ0FBQ0csU0FGSjtBQUdaQyxRQUFBQSxTQUFTLEVBQUVKLElBQUksQ0FBQ0ksU0FISjtBQUlaQyxRQUFBQSxTQUFTLEVBQUVMLElBQUksQ0FBQ0ssU0FKSjtBQUtaQyxRQUFBQSxRQUFRLEVBQUVOLElBQUksQ0FBQ00sUUFMSDtBQU1aQyxRQUFBQSxLQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FOQTtBQU9aQyxRQUFBQSxlQUFlLEVBQUVSLElBQUksQ0FBQ1EsZUFQVjtBQVFaQyxRQUFBQSxRQUFRLEVBQUVULElBQUksQ0FBQ1MsUUFSSDtBQVNaQyxRQUFBQSxvQkFBb0IsRUFBRVYsSUFBSSxDQUFDVSxvQkFUZjtBQVVaQyxRQUFBQSxRQUFRLEVBQUVYLElBQUksQ0FBQ1csUUFWSDtB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LEksRUFBb0Q7QUFDOUQsYUFBTyxLQUFLc0QsVUFBTCxDQUFnQnRELElBQWhCLEVBQXNCLFFBQXRCLEVBQWdDLElBQUkwRCxvQ0FBSixFQUFoQyxDQUFQO0FBQ0g7OztpQ0FFWTFELEksRUFBa0Q7QUFDM0QsYUFBTyxLQUFLc0QsVUFBTCxDQUFnQnRELElBQWhCLEVBQXNCLE9BQXRCLEVBQStCLElBQUkyRCxrQ0FBSixFQUEvQixDQUFQO0FBQ0g7Ozt3Q0FFbUIzRCxJLEVBQWtEO0FBQ2xFLGFBQU8sS0FBS3NELFVBQUwsQ0FBZ0J0RCxJQUFoQixFQUFzQixjQUF0QixFQUFzQyxJQUFJNEQsa0NBQUosRUFBdEMsQ0FBUDtBQUNIOzs7NkNBRXdCNUQsSSxFQUFrRDtBQUN2RSxhQUFPLEtBQUs2RCxJQUFMLENBQVU3RCxJQUFWLEVBQWdCLG1CQUFoQixFQUFxQyxJQUFJNEQsa0NBQUosRUFBckMsQ0FBUDtBQUNIOzs7aUNBRVk1RCxJLEVBQTJDO0FBQ3BELGFBQU8sS0FBS3NELFVBQUwsQ0FBZ0J0RCxJQUFoQixFQUFzQixPQUF0QixFQUErQixJQUFJOEQsMkJBQUosRUFBL0IsQ0FBUDtBQUNIOzs7a0NBRWE5RCxJLEVBQTZDO0FBQ3ZELGFBQU8sS0FBS3NELFVBQUwsQ0FBZ0J0RCxJQUFoQixFQUFzQixjQUF0QixFQUFzQyxJQUFJK0QsNkJBQUosRUFBdEMsQ0FBUDtBQUNIOzs7NkNBRXdCL0QsSSxFQUF1RDtBQUM1RSxhQUFPLEtBQUtzRCxVQUFMLENBQWdCdEQsSUFBaEIsRUFBc0IsbUJBQXRCLEVBQTJDLElBQUlnRSx1Q0FBSixFQUEzQyxDQUFQO0FBQ0g7Ozs0Q0FFdUJoRSxJLEVBQXVEO0FBQzNFLGFBQU8sS0FBSzZELElBQUwsQ0FBVTdELElBQVYsRUFBZ0IsbUJBQWhCLEVBQXFDLElBQUlnRSx1Q0FBSixFQUFyQyxDQUFQO0FBQ0g7Ozs7RUEvRndDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uL1VzZXInO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2snO1xuaW1wb3J0IFN0b2NrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFkZHJlc3NJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hZGRyZXNzL0FkZHJlc3MnO1xuaW1wb3J0IFB1cmNoYXNlU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9QdXJjaGFzZVN0b2NrJztcbmltcG9ydCBQcm9kdWN0TGlzdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdExpc3QnO1xuaW1wb3J0IFJldHVybk9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV0dXJuL1JldHVybk9yZGVyJztcbmltcG9ydCBSZXR1cm5PcmRlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JldHVybi9UcmFuc2Zvcm1lcnMvUmV0dXJuT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBCYXNrZXQgYXMgQmFza2V0SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iYXNrZXQvQmFza2V0JztcbmltcG9ydCBCYXNrZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iYXNrZXQvVHJhbnNmb3JtZXJzL0Jhc2tldFRyYW5zZm9ybWVyJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyU3Vic2NyaXB0aW9uJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9Vc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFkZHJlc3NUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hZGRyZXNzL1RyYW5zZm9ybWVycy9BZGRyZXNzVHJhbnNmb3JtZXInO1xuaW1wb3J0IFB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0TGlzdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RMaXN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFJvbGVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yb2xlL1JvbGUnO1xuaW1wb3J0IFJvbGVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yb2xlL1RyYW5zZm9ybWVycy9Sb2xlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiB1c2VyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlclxuICAgICAqL1xuICAgIG1hcERhdGEodXNlcjogVXNlckludGVyZmFjZSk6IFVzZXIge1xuICAgICAgICByZXR1cm4gbmV3IFVzZXIoe1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHVzZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB1c2VyLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogdXNlci5maXJzdG5hbWUsXG4gICAgICAgICAgICBsYXN0bmFtZTogdXNlci5sYXN0bmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgZW1haWxWZXJpZmllZEF0OiB1c2VyLmVtYWlsVmVyaWZpZWRBdCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiB1c2VyLnN0YXR1c0lkLFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzSWQ6IHVzZXIucmVnaXN0cmF0aW9uU3RhdHVzSWQsXG4gICAgICAgICAgICBzdHJpcGVJZDogdXNlci5zdHJpcGVJZCxcbiAgICAgICAgICAgIHJlc2lkdWFsQ2hhcmdlc09wdEluOiB1c2VyLnJlc2lkdWFsQ2hhcmdlc09wdEluLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uVGVybXM6IHVzZXIuc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uVGVybXMsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25DaGFyZ2VzOiB1c2VyLnN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMsXG4gICAgICAgICAgICB2ZXJpZmllZEF0OiB1c2VyLnZlcmlmaWVkQXQsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHVzZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiB1c2VyLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGNvbG9yOiB1c2VyLmNvbG9yLFxuICAgICAgICAgICAgaGlnaGxpZ2h0czogdXNlci5oaWdobGlnaHRzLFxuICAgICAgICAgICAgLy8gSGFzIG1hbnlcbiAgICAgICAgICAgIG9yZGVyczogdGhpcy5pbmNsdWRlT3JkZXJzKHVzZXIpLFxuICAgICAgICAgICAgc3RvY2s6IHRoaXMuaW5jbHVkZVN0b2NrKHVzZXIpLFxuICAgICAgICAgICAgYWRkcmVzc2VzOiB0aGlzLmluY2x1ZGVBZGRyZXNzZXModXNlciksXG4gICAgICAgICAgICB0b3lib3g6IHRoaXMuaW5jbHVkZVRveWJveCh1c2VyKSxcbiAgICAgICAgICAgIGxpc3RzOiB0aGlzLmluY2x1ZGVMaXN0cyh1c2VyKSxcbiAgICAgICAgICAgIHJldHVybk9yZGVyczogdGhpcy5pbmNsdWRlUmV0dXJuT3JkZXJzKHVzZXIpLFxuICAgICAgICAgICAgYWN0aXZlQmFza2V0OiB0aGlzLmluY2x1ZGVCYXNrZXQodXNlciksXG4gICAgICAgICAgICB1c2VyU3Vic2NyaXB0aW9uczogdGhpcy5pbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlciksXG4gICAgICAgICAgICBhY3RpdmVVc2VyU3Vic2NyaXB0aW9uOiB0aGlzLmluY2x1ZGVVc2VyU3Vic2NyaXB0aW9uKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFjdGl2ZVJldHVybk9yZGVyOiB0aGlzLmluY2x1ZGVBY3RpdmVSZXR1cm5PcmRlcih1c2VyKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICByb2xlczogdGhpcy5pbmNsdWRlUm9sZXModXNlciksXG4gICAgICAgICAgICAvLyBBY2Nlc3NvcnNcbiAgICAgICAgICAgIG9uRmlyc3RPcmRlcjogdXNlci5vbkZpcnN0T3JkZXIsXG4gICAgICAgICAgICB0b3lib3hUb2tlbnM6IHVzZXIudG95Ym94VG9rZW5zLFxuICAgICAgICAgICAgYWRkaXRpb25hbFRva2VuczogdXNlci5hZGRpdGlvbmFsVG9rZW5zLFxuICAgICAgICAgICAgYXZhaWxhYmxlVG9rZW5zOiB1c2VyLmF2YWlsYWJsZVRva2VucyxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblRva2VuczogdXNlci5zdWJzY3JpcHRpb25Ub2tlbnMsXG4gICAgICAgICAgICBtYXhUb2tlbnM6IHVzZXIubWF4VG9rZW5zLFxuICAgICAgICAgICAgYmFza2V0UXVhbnRpdHk6IHVzZXIuYmFza2V0UXVhbnRpdHksXG4gICAgICAgICAgICBhY3RpdmVCYXNrZXRUb3RhbFRva2VuczogdXNlci5hY3RpdmVCYXNrZXRUb3RhbFRva2VucyxcbiAgICAgICAgICAgIGJhbGFuY2U6IHVzZXIuYmFsYW5jZSxcbiAgICAgICAgICAgIGNoYW5nZVN1YnNjcmlwdGlvblN0YXR1czogdXNlci5jaGFuZ2VTdWJzY3JpcHRpb25TdGF0dXMsXG4gICAgICAgICAgICBjYW5jZWxTdWJzY3JpcHRpb25TdGF0dXM6IHVzZXIuY2FuY2VsU3Vic2NyaXB0aW9uU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxPcmRlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdvcmRlcnMnLCBuZXcgT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2sodXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFN0b2NrSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3N0b2NrJywgbmV3IFN0b2NrVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFkZHJlc3Nlcyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8QWRkcmVzc0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdhZGRyZXNzZXMnLCBuZXcgQWRkcmVzc1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVUb3lib3godXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFB1cmNoYXNlU3RvY2tJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAndG95Ym94JywgbmV3IFB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlTGlzdHModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RMaXN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2xpc3RzJywgbmV3IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJldHVybk9yZGVycyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UmV0dXJuT3JkZXJJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAncmV0dXJuT3JkZXJzJywgbmV3IFJldHVybk9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBSZXR1cm5PcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXIsICdhY3RpdmVSZXR1cm5PcmRlcicsIG5ldyBSZXR1cm5PcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSb2xlcyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8Um9sZUludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyb2xlcycsIG5ldyBSb2xlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUJhc2tldCh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8QmFza2V0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2FjdGl2ZUJhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAndXNlclN1YnNjcmlwdGlvbnMnLCBuZXcgVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyU3Vic2NyaXB0aW9uKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0odXNlciwgJ3VzZXJTdWJzY3JpcHRpb25zJywgbmV3IFVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=