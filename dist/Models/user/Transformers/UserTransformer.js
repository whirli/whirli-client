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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiY29sb3IiLCJoaWdobGlnaHRzIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiYWRkcmVzc2VzIiwiaW5jbHVkZUFkZHJlc3NlcyIsInRveWJveCIsImluY2x1ZGVUb3lib3giLCJsaXN0cyIsImluY2x1ZGVMaXN0cyIsInJldHVybk9yZGVycyIsImluY2x1ZGVSZXR1cm5PcmRlcnMiLCJhY3RpdmVCYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwidXNlclN1YnNjcmlwdGlvbnMiLCJpbmNsdWRlVXNlclN1YnNjcmlwdGlvbnMiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9ucyIsInVuZGVmaW5lZCIsImFjdGl2ZVVzZXJTdWJzY3JpcHRpb25TdGF0dXNJZCIsImFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuIiwiYWN0aXZlUmV0dXJuT3JkZXIiLCJpbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIiLCJyb2xlcyIsImluY2x1ZGVSb2xlcyIsIm9uRmlyc3RPcmRlciIsInRveWJveFRva2VucyIsImFkZGl0aW9uYWxUb2tlbnMiLCJhdmFpbGFibGVUb2tlbnMiLCJzdWJzY3JpcHRpb25Ub2tlbnMiLCJtYXhUb2tlbnMiLCJiYXNrZXRRdWFudGl0eSIsImFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zIiwiYmFsYW5jZSIsImNoYW5nZVN1YnNjcmlwdGlvblN0YXR1cyIsImNhbmNlbFN1YnNjcmlwdGlvblN0YXR1cyIsIm5vdGVzIiwiY29sbGVjdGlvbiIsIk9yZGVyVHJhbnNmb3JtZXIiLCJTdG9ja1RyYW5zZm9ybWVyIiwiQWRkcmVzc1RyYW5zZm9ybWVyIiwiUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIiwiUHJvZHVjdExpc3RUcmFuc2Zvcm1lciIsIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJpdGVtIiwiUm9sZVRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFFQTs7QUFLQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxJLEVBQTJCO0FBQy9CLGFBQU8sSUFBSUMsZ0JBQUosQ0FBUztBQUNaQyxRQUFBQSxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFERztBQUVaQyxRQUFBQSxTQUFTLEVBQUVILElBQUksQ0FBQ0csU0FGSjtBQUdaQyxRQUFBQSxTQUFTLEVBQUVKLElBQUksQ0FBQ0ksU0FISjtBQUlaQyxRQUFBQSxTQUFTLEVBQUVMLElBQUksQ0FBQ0ssU0FKSjtBQUtaQyxRQUFBQSxRQUFRLEVBQUVOLElBQUksQ0FBQ00sUUFMSDtBQU1aQyxRQUFBQSxLQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FOQTtBQU9aQyxRQUFBQSxlQUFlLEVBQUVSLElBQUksQ0FBQ1EsZUFQVjtBQVFaQyxRQUFBQSxRQUFRLEVBQUVULElBQUksQ0FBQ1MsUUFSSDtBQVNaQyxRQUFBQSxvQkFBb0IsRUFBRVYsSUFBSSxDQUFDVSxv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Qyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uL1VzZXInO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svU3RvY2snO1xuaW1wb3J0IFN0b2NrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1N0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFkZHJlc3NJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hZGRyZXNzL0FkZHJlc3MnO1xuaW1wb3J0IFB1cmNoYXNlU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9QdXJjaGFzZVN0b2NrJztcbmltcG9ydCBQcm9kdWN0TGlzdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdExpc3QnO1xuaW1wb3J0IFJldHVybk9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV0dXJuL1JldHVybk9yZGVyJztcbmltcG9ydCBSZXR1cm5PcmRlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JldHVybi9UcmFuc2Zvcm1lcnMvUmV0dXJuT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBCYXNrZXQgYXMgQmFza2V0SW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9iYXNrZXQvQmFza2V0JztcbmltcG9ydCBCYXNrZXRUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9iYXNrZXQvVHJhbnNmb3JtZXJzL0Jhc2tldFRyYW5zZm9ybWVyJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyU3Vic2NyaXB0aW9uJztcbmltcG9ydCBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9Vc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXInO1xuaW1wb3J0IEFkZHJlc3NUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9hZGRyZXNzL1RyYW5zZm9ybWVycy9BZGRyZXNzVHJhbnNmb3JtZXInO1xuaW1wb3J0IFB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyJztcbmltcG9ydCBQcm9kdWN0TGlzdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RMaXN0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFJvbGVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yb2xlL1JvbGUnO1xuaW1wb3J0IFJvbGVUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yb2xlL1RyYW5zZm9ybWVycy9Sb2xlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiB1c2VyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlclxuICAgICAqL1xuICAgIG1hcERhdGEodXNlcjogVXNlckludGVyZmFjZSk6IFVzZXIge1xuICAgICAgICByZXR1cm4gbmV3IFVzZXIoe1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHVzZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB1c2VyLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogdXNlci5maXJzdG5hbWUsXG4gICAgICAgICAgICBsYXN0bmFtZTogdXNlci5sYXN0bmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgZW1haWxWZXJpZmllZEF0OiB1c2VyLmVtYWlsVmVyaWZpZWRBdCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiB1c2VyLnN0YXR1c0lkLFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzSWQ6IHVzZXIucmVnaXN0cmF0aW9uU3RhdHVzSWQsXG4gICAgICAgICAgICBzdHJpcGVJZDogdXNlci5zdHJpcGVJZCxcbiAgICAgICAgICAgIHJlc2lkdWFsQ2hhcmdlc09wdEluOiB1c2VyLnJlc2lkdWFsQ2hhcmdlc09wdEluLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uVGVybXM6IHVzZXIuc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uVGVybXMsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25DaGFyZ2VzOiB1c2VyLnN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMsXG4gICAgICAgICAgICB2ZXJpZmllZEF0OiB1c2VyLnZlcmlmaWVkQXQsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHVzZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiB1c2VyLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGNvbG9yOiB1c2VyLmNvbG9yLFxuICAgICAgICAgICAgaGlnaGxpZ2h0czogdXNlci5oaWdobGlnaHRzLFxuICAgICAgICAgICAgLy8gSGFzIG1hbnlcbiAgICAgICAgICAgIG9yZGVyczogdGhpcy5pbmNsdWRlT3JkZXJzKHVzZXIpLFxuICAgICAgICAgICAgc3RvY2s6IHRoaXMuaW5jbHVkZVN0b2NrKHVzZXIpLFxuICAgICAgICAgICAgYWRkcmVzc2VzOiB0aGlzLmluY2x1ZGVBZGRyZXNzZXModXNlciksXG4gICAgICAgICAgICB0b3lib3g6IHRoaXMuaW5jbHVkZVRveWJveCh1c2VyKSxcbiAgICAgICAgICAgIGxpc3RzOiB0aGlzLmluY2x1ZGVMaXN0cyh1c2VyKSxcbiAgICAgICAgICAgIHJldHVybk9yZGVyczogdGhpcy5pbmNsdWRlUmV0dXJuT3JkZXJzKHVzZXIpLFxuICAgICAgICAgICAgYWN0aXZlQmFza2V0OiB0aGlzLmluY2x1ZGVCYXNrZXQodXNlciksXG4gICAgICAgICAgICB1c2VyU3Vic2NyaXB0aW9uczogdGhpcy5pbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlciksXG4gICAgICAgICAgICBhY3RpdmVVc2VyU3Vic2NyaXB0aW9uczogdGhpcy5pbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlcikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWN0aXZlVXNlclN1YnNjcmlwdGlvblN0YXR1c0lkOiB1c2VyLmFjdGl2ZVVzZXJTdWJzY3JpcHRpb25TdGF0dXNJZCxcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuOiB1c2VyLmFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuLFxuICAgICAgICAgICAgYWN0aXZlUmV0dXJuT3JkZXI6IHRoaXMuaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJvbGVzOiB0aGlzLmluY2x1ZGVSb2xlcyh1c2VyKSxcbiAgICAgICAgICAgIC8vIEFjY2Vzc29yc1xuICAgICAgICAgICAgb25GaXJzdE9yZGVyOiB1c2VyLm9uRmlyc3RPcmRlcixcbiAgICAgICAgICAgIHRveWJveFRva2VuczogdXNlci50b3lib3hUb2tlbnMsXG4gICAgICAgICAgICBhZGRpdGlvbmFsVG9rZW5zOiB1c2VyLmFkZGl0aW9uYWxUb2tlbnMsXG4gICAgICAgICAgICBhdmFpbGFibGVUb2tlbnM6IHVzZXIuYXZhaWxhYmxlVG9rZW5zLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uVG9rZW5zOiB1c2VyLnN1YnNjcmlwdGlvblRva2VucyxcbiAgICAgICAgICAgIG1heFRva2VuczogdXNlci5tYXhUb2tlbnMsXG4gICAgICAgICAgICBiYXNrZXRRdWFudGl0eTogdXNlci5iYXNrZXRRdWFudGl0eSxcbiAgICAgICAgICAgIGFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zOiB1c2VyLmFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zLFxuICAgICAgICAgICAgYmFsYW5jZTogdXNlci5iYWxhbmNlLFxuICAgICAgICAgICAgY2hhbmdlU3Vic2NyaXB0aW9uU3RhdHVzOiB1c2VyLmNoYW5nZVN1YnNjcmlwdGlvblN0YXR1cyxcbiAgICAgICAgICAgIGNhbmNlbFN1YnNjcmlwdGlvblN0YXR1czogdXNlci5jYW5jZWxTdWJzY3JpcHRpb25TdGF0dXMsXG4gICAgICAgICAgICBub3RlczogdXNlci5ub3RlcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVycyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8T3JkZXJJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnb3JkZXJzJywgbmV3IE9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN0b2NrKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxTdG9ja0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdzdG9jaycsIG5ldyBTdG9ja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBZGRyZXNzZXModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PEFkZHJlc3NJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnYWRkcmVzc2VzJywgbmV3IEFkZHJlc3NUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVG95Ym94KHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxQdXJjaGFzZVN0b2NrSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3RveWJveCcsIG5ldyBQdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUxpc3RzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0TGlzdEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdsaXN0cycsIG5ldyBQcm9kdWN0TGlzdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZXR1cm5PcmRlcnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFJldHVybk9yZGVySW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3JldHVybk9yZGVycycsIG5ldyBSZXR1cm5PcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBY3RpdmVSZXR1cm5PcmRlcih1c2VyOiBVc2VySW50ZXJmYWNlKTogUmV0dXJuT3JkZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyLCAnYWN0aXZlUmV0dXJuT3JkZXInLCBuZXcgUmV0dXJuT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUm9sZXModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFJvbGVJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAncm9sZXMnLCBuZXcgUm9sZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVCYXNrZXQodXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PEJhc2tldEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdhY3RpdmVCYXNrZXQnLCBuZXcgQmFza2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3VzZXJTdWJzY3JpcHRpb25zJywgbmV3IFVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=