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
  }]);

  return UserTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = UserTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiY29sb3IiLCJoaWdobGlnaHRzIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiYWRkcmVzc2VzIiwiaW5jbHVkZUFkZHJlc3NlcyIsInRveWJveCIsImluY2x1ZGVUb3lib3giLCJsaXN0cyIsImluY2x1ZGVMaXN0cyIsIndhaXRTcG90cyIsImluY2x1ZGVXYWl0U3BvdHMiLCJyZXR1cm5PcmRlcnMiLCJpbmNsdWRlUmV0dXJuT3JkZXJzIiwiYWN0aXZlQmFza2V0IiwiaW5jbHVkZUJhc2tldCIsInVzZXJTdWJzY3JpcHRpb25zIiwiaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zIiwiYWN0aXZlVXNlclN1YnNjcmlwdGlvbnMiLCJ1bmRlZmluZWQiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uU3RhdHVzSWQiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGxhbiIsImFjdGl2ZVJldHVybk9yZGVyIiwiaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyIiwicm9sZXMiLCJpbmNsdWRlUm9sZXMiLCJ3YWNjUm9sZSIsInJldmlld3MiLCJpbmNsdWRlUmV2aWV3cyIsIm9uRmlyc3RPcmRlciIsInRveWJveFRva2VucyIsImFkZGl0aW9uYWxUb2tlbnMiLCJhdmFpbGFibGVUb2tlbnMiLCJzdWJzY3JpcHRpb25Ub2tlbnMiLCJtYXhUb2tlbnMiLCJiYXNrZXRRdWFudGl0eSIsImFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zIiwiYmFsYW5jZSIsImNoYW5nZVN1YnNjcmlwdGlvblN0YXR1cyIsImNhbmNlbFN1YnNjcmlwdGlvblN0YXR1cyIsIm5vdGVzIiwiY29sbGVjdGlvbiIsIk9yZGVyVHJhbnNmb3JtZXIiLCJTdG9ja1RyYW5zZm9ybWVyIiwiQWRkcmVzc1RyYW5zZm9ybWVyIiwiUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIiwiUHJvZHVjdExpc3RUcmFuc2Zvcm1lciIsIldhaXRTcG90VHJhbnNmb3JtZXIiLCJSZXR1cm5PcmRlclRyYW5zZm9ybWVyIiwiaXRlbSIsIlJvbGVUcmFuc2Zvcm1lciIsIkJhc2tldFRyYW5zZm9ybWVyIiwiVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIiwiUmV2aWV3VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFFQTs7QUFLQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxJLEVBQTJCO0FBQy9CLGFBQU8sSUFBSUMsZ0JBQUosQ0FBUztBQUNaQyxRQUFBQSxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFERztBQUVaQyxRQUFBQSxTQUFTLEVBQUVILElBQUksQ0FBQ0csU0FGSjtBQUdaQyxRQUFBQSxTQUFTLEVBQUVKLElBQUksQ0FBQ0ksU0FISjtBQUlaQyxRQUFBQSxTQUFTLEVBQUVMLElBQUksQ0FBQ0ssU0FKSjtBQUtaQyxRQUFBQSxRQUFRLEVBQUVOLElBQUksQ0FBQ00sUUFMSDtBQU1aQyxRQUFBQSxLQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FOQTtBQU9aQyxRQUFBQSxlQUFlLEVBQUVSLElBQUksQ0FBQ1EsZUFQVjtBQVFaQyxRQUFBQSxRQUFRLEVBQUVULElBQUksQ0FBQ1MsUUFSSDtBQVNaQyxRQUFBQSxvQkFBb0IsRUFBRVYsSUFBSSxDQUFDVSxvQkFUZjtBQVVaQyxRQUFBQSxRQUFRLEVBQUVYLElBQUksQ0FBQ1csUUFWSDtBQVdaQyxRQUFBQSxvQkFBb0IsRUFBRVosSUFBSSxDQUFDWSxvQkFYZjtBQVlaQyxRQUFBQSw2QkFBNkIsRUFBRWIsSUFBSSxDQUFDYSw2QkFaeEI7QUFhWkMsUUFBQUEsK0JBQStCLEVBQUVkLElBQUksQ0FBQ2MsK0JBYjFCO0FBY1pDLFFBQUFBLFVBQVUsRUFBRWYsSUFBSSxDQUFDZSxVQWRMO0FBZVpDLFFBQUFBLFlBQVksRUFBRWhCLElBQUksQ0FBQ2dCLFlBZlA7QUFnQlpDLFFBQUFBLFNBQVMsRUFBRWpCLElBQUksQ0FBQ2lCLFNBaEJKO0FBaUJaQyxRQUFBQSxLQUFLLEVBQUVsQixJQUFJLENBQUNrQixLQWpCQTtBQWtCWkMsUUFBQUEsVUFBVSxFQUFFbkIsSUFBSSxDQUFDbUIsVUFsQkw7QUFtQlo7QUFDQUMsUUFBQUEsTUFBTSxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJyQixJQUFuQixDQXBCSTtBQXFCWnNCLFFBQUFBLEtBQUssRUFBRSxLQUFLQyxZQUFMLENBQWtCdkIsSUFBbEIsQ0FyQks7QUFzQlp3QixRQUFBQSxTQUFTLEVBQUUsS0FBS0MsZ0JBQUwsQ0FBc0J6QixJQUF0QixDQXRCQztBQXVCWjBCLFFBQUFBLE1BQU0sRUFBRSxLQUFLQyxhQUFMLENBQW1CM0IsSUFBbkIsQ0F2Qkk7QUF3Qlo0QixRQUFBQSxLQUFLLEVBQUUsS0FBS0MsWUFBTCxDQUFrQjdCLElBQWxCLENBeEJLO0FBeUJaOEIsUUFBQUEsU0FBUyxFQUFFLEtBQUtDLGdCQUFMLENBQXNCL0IsSUFBdEIsQ0F6QkM7QUEwQlpnQyxRQUFBQSxZQUFZLEVBQUUsS0FBS0MsbUJBQUwsQ0FBeUJqQyxJQUF6QixDQTFCRjtBQTJCWmtDLFFBQUFBLFlBQVksRUFBRSxLQUFLQyxhQUFMLENBQW1CbkMsSUFBbkIsQ0EzQkY7QUE0QlpvQyxRQUFBQSxpQkFBaUIsRUFBRSxLQUFLQyx3QkFBTCxDQUE4QnJDLElBQTlCLENBNUJQO0FBNkJac0MsUUFBQUEsdUJBQXVCLEVBQUUsS0FBS0Qsd0JBQUwsQ0FBOEJyQyxJQUE5QixLQUF1Q3VDLFNBN0JwRDtBQThCWkMsUUFBQUEsOEJBQThCLEVBQUV4QyxJQUFJLENBQUN3Qyw4QkE5QnpCO0FBK0JaQyxRQUFBQSwwQkFBMEIsRUFBRXpDLElBQUksQ0FBQ3lDLDBCQS9CckI7QUFnQ1pDLFFBQUFBLGlCQUFpQixFQUFFLEtBQUtDLHdCQUFMLENBQThCM0MsSUFBOUIsS0FBdUN1QyxTQWhDOUM7QUFpQ1pLLFFBQUFBLEtBQUssRUFBRSxLQUFLQyxZQUFMLENBQWtCN0MsSUFBbEIsQ0FqQ0s7QUFrQ1o4QyxRQUFBQSxRQUFRLEVBQUU5QyxJQUFJLENBQUM4QyxRQWxDSDtBQW1DWkMsUUFBQUEsT0FBTyxFQUFFLEtBQUtDLGNBQUwsQ0FBb0JoRCxJQUFwQixDQW5DRztBQW9DWjtBQUNBaUQsUUFBQUEsWUFBWSxFQUFFakQsSUFBSSxDQUFDaUQsWUFyQ1A7QUFzQ1pDLFFBQUFBLFlBQVksRUFBRWxELElBQUksQ0FBQ2tELFlBdENQO0FBdUNaQyxRQUFBQSxnQkFBZ0IsRUFBRW5ELElBQUksQ0FBQ21ELGdCQXZDWDtBQXdDWkMsUUFBQUEsZUFBZSxFQUFFcEQsSUFBSSxDQUFDb0QsZUF4Q1Y7QUF5Q1pDLFFBQUFBLGtCQUFrQixFQUFFckQsSUFBSSxDQUFDcUQsa0JBekNiO0FBMENaQyxRQUFBQSxTQUFTLEVBQUV0RCxJQUFJLENBQUNzRCxTQTFDSjtBQTJDWkMsUUFBQUEsY0FBYyxFQUFFdkQsSUFBSSxDQUFDdUQsY0EzQ1Q7QUE0Q1pDLFFBQUFBLHVCQUF1QixFQUFFeEQsSUFBSSxDQUFDd0QsdUJBNUNsQjtBQTZDWkMsUUFBQUEsT0FBTyxFQUFFekQsSUFBSSxDQUFDeUQsT0E3Q0Y7QUE4Q1pDLFFBQUFBLHdCQUF3QixFQUFFMUQsSUFBSSxDQUFDMEQsd0JBOUNuQjtBQStDWkMsUUFBQUEsd0JBQXdCLEVBQUUzRCxJQUFJLENBQUMyRCx3QkEvQ25CO0FBZ0RaQyxRQUFBQSxLQUFLLEVBQUU1RCxJQUFJLENBQUM0RDtBQWhEQSxPQUFULENBQVA7QUFrREg7OztrQ0FFYTVELEksRUFBNEM7QUFDdEQsYUFBTyxLQUFLNkQsVUFBTCxDQUFnQjdELElBQWhCLEVBQXNCLFFBQXRCLEVBQWdDLElBQUk4RCw0QkFBSixFQUFoQyxDQUFQO0FBQ0g7OztpQ0FFWTlELEksRUFBNEM7QUFDckQsYUFBTyxLQUFLNkQsVUFBTCxDQUFnQjdELElBQWhCLEVBQXNCLE9BQXRCLEVBQStCLElBQUkrRCw0QkFBSixFQUEvQixDQUFQO0FBQ0g7OztxQ0FFZ0IvRCxJLEVBQThDO0FBQzNELGFBQU8sS0FBSzZELFVBQUwsQ0FBZ0I3RCxJQUFoQixFQUFzQixXQUF0QixFQUFtQyxJQUFJZ0UsOEJBQUosRUFBbkMsQ0FBUDtBQUNIOzs7a0NBRWFoRSxJLEVBQW9EO0FBQzlELGFBQU8sS0FBSzZELFVBQUwsQ0FBZ0I3RCxJQUFoQixFQUFzQixRQUF0QixFQUFnQyxJQUFJaUUsb0NBQUosRUFBaEMsQ0FBUDtBQUNIOzs7aUNBRVlqRSxJLEVBQWtEO0FBQzNELGFBQU8sS0FBSzZELFVBQUwsQ0FBZ0I3RCxJQUFoQixFQUFzQixPQUF0QixFQUErQixJQUFJa0Usa0NBQUosRUFBL0IsQ0FBUDtBQUNIOzs7cUNBRWdCbEUsSSxFQUErQztBQUM1RCxhQUFPLEtBQUs2RCxVQUFMLENBQWdCN0QsSUFBaEIsRUFBc0IsV0FBdEIsRUFBbUMsSUFBSW1FLCtCQUFKLEVBQW5DLENBQVA7QUFDSDs7O3dDQUVtQm5FLEksRUFBa0Q7QUFDbEUsYUFBTyxLQUFLNkQsVUFBTCxDQUFnQjdELElBQWhCLEVBQXNCLGNBQXRCLEVBQXNDLElBQUlvRSxrQ0FBSixFQUF0QyxDQUFQO0FBQ0g7Ozs2Q0FFd0JwRSxJLEVBQWtEO0FBQ3ZFLGFBQU8sS0FBS3FFLElBQUwsQ0FBVXJFLElBQVYsRUFBZ0IsbUJBQWhCLEVBQXFDLElBQUlvRSxrQ0FBSixFQUFyQyxDQUFQO0FBQ0g7OztpQ0FFWXBFLEksRUFBMkM7QUFDcEQsYUFBTyxLQUFLNkQsVUFBTCxDQUFnQjdELElBQWhCLEVBQXNCLE9BQXRCLEVBQStCLElBQUlzRSwyQkFBSixFQUEvQixDQUFQO0FBQ0g7OztrQ0FFYXRFLEksRUFBNkM7QUFDdkQsYUFBTyxLQUFLNkQsVUFBTCxDQUFnQjdELElBQWhCLEVBQXNCLGNBQXRCLEVBQXNDLElBQUl1RSw2QkFBSixFQUF0QyxDQUFQO0FBQ0g7Ozs2Q0FFd0J2RSxJLEVBQXVEO0FBQzVFLGFBQU8sS0FBSzZELFVBQUwsQ0FBZ0I3RCxJQUFoQixFQUFzQixtQkFBdEIsRUFBMkMsSUFBSXdFLHVDQUFKLEVBQTNDLENBQVA7QUFDSDs7O21DQUVjeEUsSSxFQUE2QztBQUN4RCxhQUFPLEtBQUs2RCxVQUFMLENBQWdCN0QsSUFBaEIsRUFBc0IsU0FBdEIsRUFBaUMsSUFBSXlFLDZCQUFKLEVBQWpDLENBQVA7QUFDSDs7OztFQXpHd0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vVXNlcic7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9TdG9jayc7XG5pbXBvcnQgU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvU3RvY2tUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2FkZHJlc3MvQWRkcmVzcyc7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1B1cmNoYXNlU3RvY2snO1xuaW1wb3J0IFByb2R1Y3RMaXN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgUmV0dXJuT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXInO1xuaW1wb3J0IFJldHVybk9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlclRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEJhc2tldCBhcyBCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IEJhc2tldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXJTdWJzY3JpcHRpb24nO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1VzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2FkZHJlc3MvVHJhbnNmb3JtZXJzL0FkZHJlc3NUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N0b2NrL1RyYW5zZm9ybWVycy9QdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdExpc3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUm9sZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JvbGUvUm9sZSc7XG5pbXBvcnQgUm9sZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JvbGUvVHJhbnNmb3JtZXJzL1JvbGVUcmFuc2Zvcm1lcic7XG5pbXBvcnQgV2FpdFNwb3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy93YWl0c3BvdC9XYWl0U3BvdCc7XG5pbXBvcnQgV2FpdFNwb3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi93YWl0c3BvdC9UcmFuc2Zvcm1lcnMvV2FpdFNwb3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUmV2aWV3SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmV2aWV3L1Jldmlldyc7XG5pbXBvcnQgUmV2aWV3VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV2aWV3L1RyYW5zZm9ybWVycy9SZXZpZXdUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHVzZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VyXG4gICAgICovXG4gICAgbWFwRGF0YSh1c2VyOiBVc2VySW50ZXJmYWNlKTogVXNlciB7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcih7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdXNlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHVzZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgZmlyc3RuYW1lOiB1c2VyLmZpcnN0bmFtZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiB1c2VyLmxhc3RuYW1lLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBlbWFpbFZlcmlmaWVkQXQ6IHVzZXIuZW1haWxWZXJpZmllZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHVzZXIuc3RhdHVzSWQsXG4gICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXNJZDogdXNlci5yZWdpc3RyYXRpb25TdGF0dXNJZCxcbiAgICAgICAgICAgIHN0cmlwZUlkOiB1c2VyLnN0cmlwZUlkLFxuICAgICAgICAgICAgcmVzaWR1YWxDaGFyZ2VzT3B0SW46IHVzZXIucmVzaWR1YWxDaGFyZ2VzT3B0SW4sXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtczogdXNlci5zdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXM6IHVzZXIuc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uQ2hhcmdlcyxcbiAgICAgICAgICAgIHZlcmlmaWVkQXQ6IHVzZXIudmVyaWZpZWRBdCxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogdXNlci5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICByZWZlcmVuY2U6IHVzZXIucmVmZXJlbmNlLFxuICAgICAgICAgICAgY29sb3I6IHVzZXIuY29sb3IsXG4gICAgICAgICAgICBoaWdobGlnaHRzOiB1c2VyLmhpZ2hsaWdodHMsXG4gICAgICAgICAgICAvLyBIYXMgbWFueVxuICAgICAgICAgICAgb3JkZXJzOiB0aGlzLmluY2x1ZGVPcmRlcnModXNlciksXG4gICAgICAgICAgICBzdG9jazogdGhpcy5pbmNsdWRlU3RvY2sodXNlciksXG4gICAgICAgICAgICBhZGRyZXNzZXM6IHRoaXMuaW5jbHVkZUFkZHJlc3Nlcyh1c2VyKSxcbiAgICAgICAgICAgIHRveWJveDogdGhpcy5pbmNsdWRlVG95Ym94KHVzZXIpLFxuICAgICAgICAgICAgbGlzdHM6IHRoaXMuaW5jbHVkZUxpc3RzKHVzZXIpLFxuICAgICAgICAgICAgd2FpdFNwb3RzOiB0aGlzLmluY2x1ZGVXYWl0U3BvdHModXNlciksXG4gICAgICAgICAgICByZXR1cm5PcmRlcnM6IHRoaXMuaW5jbHVkZVJldHVybk9yZGVycyh1c2VyKSxcbiAgICAgICAgICAgIGFjdGl2ZUJhc2tldDogdGhpcy5pbmNsdWRlQmFza2V0KHVzZXIpLFxuICAgICAgICAgICAgdXNlclN1YnNjcmlwdGlvbnM6IHRoaXMuaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zKHVzZXIpLFxuICAgICAgICAgICAgYWN0aXZlVXNlclN1YnNjcmlwdGlvbnM6IHRoaXMuaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTdWJzY3JpcHRpb25TdGF0dXNJZDogdXNlci5hY3RpdmVVc2VyU3Vic2NyaXB0aW9uU3RhdHVzSWQsXG4gICAgICAgICAgICBhY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGxhbjogdXNlci5hY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGxhbixcbiAgICAgICAgICAgIGFjdGl2ZVJldHVybk9yZGVyOiB0aGlzLmluY2x1ZGVBY3RpdmVSZXR1cm5PcmRlcih1c2VyKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICByb2xlczogdGhpcy5pbmNsdWRlUm9sZXModXNlciksXG4gICAgICAgICAgICB3YWNjUm9sZTogdXNlci53YWNjUm9sZSxcbiAgICAgICAgICAgIHJldmlld3M6IHRoaXMuaW5jbHVkZVJldmlld3ModXNlciksXG4gICAgICAgICAgICAvLyBBY2Nlc3NvcnNcbiAgICAgICAgICAgIG9uRmlyc3RPcmRlcjogdXNlci5vbkZpcnN0T3JkZXIsXG4gICAgICAgICAgICB0b3lib3hUb2tlbnM6IHVzZXIudG95Ym94VG9rZW5zLFxuICAgICAgICAgICAgYWRkaXRpb25hbFRva2VuczogdXNlci5hZGRpdGlvbmFsVG9rZW5zLFxuICAgICAgICAgICAgYXZhaWxhYmxlVG9rZW5zOiB1c2VyLmF2YWlsYWJsZVRva2VucyxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblRva2VuczogdXNlci5zdWJzY3JpcHRpb25Ub2tlbnMsXG4gICAgICAgICAgICBtYXhUb2tlbnM6IHVzZXIubWF4VG9rZW5zLFxuICAgICAgICAgICAgYmFza2V0UXVhbnRpdHk6IHVzZXIuYmFza2V0UXVhbnRpdHksXG4gICAgICAgICAgICBhY3RpdmVCYXNrZXRUb3RhbFRva2VuczogdXNlci5hY3RpdmVCYXNrZXRUb3RhbFRva2VucyxcbiAgICAgICAgICAgIGJhbGFuY2U6IHVzZXIuYmFsYW5jZSxcbiAgICAgICAgICAgIGNoYW5nZVN1YnNjcmlwdGlvblN0YXR1czogdXNlci5jaGFuZ2VTdWJzY3JpcHRpb25TdGF0dXMsXG4gICAgICAgICAgICBjYW5jZWxTdWJzY3JpcHRpb25TdGF0dXM6IHVzZXIuY2FuY2VsU3Vic2NyaXB0aW9uU3RhdHVzLFxuICAgICAgICAgICAgbm90ZXM6IHVzZXIubm90ZXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlcnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PE9yZGVySW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ29yZGVycycsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdG9jayh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8U3RvY2tJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnc3RvY2snLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWRkcmVzc2VzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxBZGRyZXNzSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2FkZHJlc3NlcycsIG5ldyBBZGRyZXNzVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVRveWJveCh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UHVyY2hhc2VTdG9ja0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd0b3lib3gnLCBuZXcgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVMaXN0cyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdExpc3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnbGlzdHMnLCBuZXcgUHJvZHVjdExpc3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlV2FpdFNwb3RzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxXYWl0U3BvdEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd3YWl0U3BvdHMnLCBuZXcgV2FpdFNwb3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmV0dXJuT3JkZXJzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSZXR1cm5PcmRlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyZXR1cm5PcmRlcnMnLCBuZXcgUmV0dXJuT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIodXNlcjogVXNlckludGVyZmFjZSk6IFJldHVybk9yZGVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0odXNlciwgJ2FjdGl2ZVJldHVybk9yZGVyJywgbmV3IFJldHVybk9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJvbGVzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSb2xlSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3JvbGVzJywgbmV3IFJvbGVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQmFza2V0KHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxCYXNrZXRJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnYWN0aXZlQmFza2V0JywgbmV3IEJhc2tldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyU3Vic2NyaXB0aW9ucyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8VXNlclN1YnNjcmlwdGlvbkludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd1c2VyU3Vic2NyaXB0aW9ucycsIG5ldyBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJldmlld3ModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFJldmlld0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyZXZpZXdzJywgbmV3IFJldmlld1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==