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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiY29sb3IiLCJoaWdobGlnaHRzIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiYWRkcmVzc2VzIiwiaW5jbHVkZUFkZHJlc3NlcyIsInRveWJveCIsImluY2x1ZGVUb3lib3giLCJsaXN0cyIsImluY2x1ZGVMaXN0cyIsInJldHVybk9yZGVycyIsImluY2x1ZGVSZXR1cm5PcmRlcnMiLCJhY3RpdmVCYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwidXNlclN1YnNjcmlwdGlvbnMiLCJpbmNsdWRlVXNlclN1YnNjcmlwdGlvbnMiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9uIiwiaW5jbHVkZVVzZXJTdWJzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJhY3RpdmVSZXR1cm5PcmRlciIsImluY2x1ZGVBY3RpdmVSZXR1cm5PcmRlciIsInJvbGVzIiwiaW5jbHVkZVJvbGVzIiwib25GaXJzdE9yZGVyIiwidG95Ym94VG9rZW5zIiwiYWRkaXRpb25hbFRva2VucyIsImF2YWlsYWJsZVRva2VucyIsIm1heFRva2VucyIsImJhc2tldFF1YW50aXR5IiwiYWN0aXZlQmFza2V0VG90YWxUb2tlbnMiLCJiYWxhbmNlIiwiY2hhbmdlU3Vic2NyaXB0aW9uU3RhdHVzIiwiY2FuY2VsU3Vic2NyaXB0aW9uU3RhdHVzIiwiY29sbGVjdGlvbiIsIk9yZGVyVHJhbnNmb3JtZXIiLCJTdG9ja1RyYW5zZm9ybWVyIiwiQWRkcmVzc1RyYW5zZm9ybWVyIiwiUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIiwiUHJvZHVjdExpc3RUcmFuc2Zvcm1lciIsIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJpdGVtIiwiUm9sZVRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFFQTs7QUFLQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxJLEVBQTJCO0FBQy9CLGFBQU8sSUFBSUMsZ0JBQUosQ0FBUztBQUNaQyxRQUFBQSxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFERztBQUVaQyxRQUFBQSxTQUFTLEVBQUVILElBQUksQ0FBQ0csU0FGSjtBQUdaQyxRQUFBQSxTQUFTLEVBQUVKLElBQUksQ0FBQ0ksU0FISjtBQUlaQyxRQUFBQSxTQUFTLEVBQUVMLElBQUksQ0FBQ0ssU0FKSjtBQUtaQyxRQUFBQSxRQUFRLEVBQUVOLElBQUksQ0FBQ00sUUFMSDtBQU1aQyxRQUFBQSxLQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FOQTtBQU9aQyxRQUFBQSxlQUFlLEVBQUVSLElBQUksQ0FBQ1EsZUFQVjtBQVFaQyxRQUFBQSxRQUFRLEVBQUVULElBQUksQ0FBQ1MsUUFSSDtBQVNaQyxRQUFBQSxvQkFBb0IsRUFBRVYsSUFBSSxDQUFDVSxvQkFUZjtBQVVaQyxRQUFBQSxRQUFRLEVBQUVYLElBQUksQ0FBQ1csUUFWSDtBQVdaQyxRQUFBQSxvQkFBb0IsRUFB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SXlELG9DQUFKLEVBQWhDLENBQVA7QUFDSDs7O2lDQUVZekQsSSxFQUFrRDtBQUMzRCxhQUFPLEtBQUtxRCxVQUFMLENBQWdCckQsSUFBaEIsRUFBc0IsT0FBdEIsRUFBK0IsSUFBSTBELGtDQUFKLEVBQS9CLENBQVA7QUFDSDs7O3dDQUVtQjFELEksRUFBa0Q7QUFDbEUsYUFBTyxLQUFLcUQsVUFBTCxDQUFnQnJELElBQWhCLEVBQXNCLGNBQXRCLEVBQXNDLElBQUkyRCxrQ0FBSixFQUF0QyxDQUFQO0FBQ0g7Ozs2Q0FFd0IzRCxJLEVBQWtEO0FBQ3ZFLGFBQU8sS0FBSzRELElBQUwsQ0FBVTVELElBQVYsRUFBZ0IsbUJBQWhCLEVBQXFDLElBQUkyRCxrQ0FBSixFQUFyQyxDQUFQO0FBQ0g7OztpQ0FFWTNELEksRUFBMkM7QUFDcEQsYUFBTyxLQUFLcUQsVUFBTCxDQUFnQnJELElBQWhCLEVBQXNCLE9BQXRCLEVBQStCLElBQUk2RCwyQkFBSixFQUEvQixDQUFQO0FBQ0g7OztrQ0FFYTdELEksRUFBNkM7QUFDdkQsYUFBTyxLQUFLcUQsVUFBTCxDQUFnQnJELElBQWhCLEVBQXNCLGNBQXRCLEVBQXNDLElBQUk4RCw2QkFBSixFQUF0QyxDQUFQO0FBQ0g7Ozs2Q0FFd0I5RCxJLEVBQXVEO0FBQzVFLGFBQU8sS0FBS3FELFVBQUwsQ0FBZ0JyRCxJQUFoQixFQUFzQixtQkFBdEIsRUFBMkMsSUFBSStELHVDQUFKLEVBQTNDLENBQVA7QUFDSDs7OzRDQUV1Qi9ELEksRUFBdUQ7QUFDM0UsYUFBTyxLQUFLNEQsSUFBTCxDQUFVNUQsSUFBVixFQUFnQixtQkFBaEIsRUFBcUMsSUFBSStELHVDQUFKLEVBQXJDLENBQVA7QUFDSDs7OztFQTlGd0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vVXNlcic7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9TdG9jayc7XG5pbXBvcnQgU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvU3RvY2tUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2FkZHJlc3MvQWRkcmVzcyc7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1B1cmNoYXNlU3RvY2snO1xuaW1wb3J0IFByb2R1Y3RMaXN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgUmV0dXJuT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXInO1xuaW1wb3J0IFJldHVybk9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlclRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEJhc2tldCBhcyBCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IEJhc2tldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXJTdWJzY3JpcHRpb24nO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1VzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2FkZHJlc3MvVHJhbnNmb3JtZXJzL0FkZHJlc3NUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N0b2NrL1RyYW5zZm9ybWVycy9QdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdExpc3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUm9sZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JvbGUvUm9sZSc7XG5pbXBvcnQgUm9sZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JvbGUvVHJhbnNmb3JtZXJzL1JvbGVUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHVzZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VyXG4gICAgICovXG4gICAgbWFwRGF0YSh1c2VyOiBVc2VySW50ZXJmYWNlKTogVXNlciB7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcih7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdXNlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHVzZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgZmlyc3RuYW1lOiB1c2VyLmZpcnN0bmFtZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiB1c2VyLmxhc3RuYW1lLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBlbWFpbFZlcmlmaWVkQXQ6IHVzZXIuZW1haWxWZXJpZmllZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHVzZXIuc3RhdHVzSWQsXG4gICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXNJZDogdXNlci5yZWdpc3RyYXRpb25TdGF0dXNJZCxcbiAgICAgICAgICAgIHN0cmlwZUlkOiB1c2VyLnN0cmlwZUlkLFxuICAgICAgICAgICAgcmVzaWR1YWxDaGFyZ2VzT3B0SW46IHVzZXIucmVzaWR1YWxDaGFyZ2VzT3B0SW4sXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtczogdXNlci5zdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXM6IHVzZXIuc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uQ2hhcmdlcyxcbiAgICAgICAgICAgIHZlcmlmaWVkQXQ6IHVzZXIudmVyaWZpZWRBdCxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogdXNlci5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICByZWZlcmVuY2U6IHVzZXIucmVmZXJlbmNlLFxuICAgICAgICAgICAgY29sb3I6IHVzZXIuY29sb3IsXG4gICAgICAgICAgICBoaWdobGlnaHRzOiB1c2VyLmhpZ2hsaWdodHMsXG4gICAgICAgICAgICAvLyBIYXMgbWFueVxuICAgICAgICAgICAgb3JkZXJzOiB0aGlzLmluY2x1ZGVPcmRlcnModXNlciksXG4gICAgICAgICAgICBzdG9jazogdGhpcy5pbmNsdWRlU3RvY2sodXNlciksXG4gICAgICAgICAgICBhZGRyZXNzZXM6IHRoaXMuaW5jbHVkZUFkZHJlc3Nlcyh1c2VyKSxcbiAgICAgICAgICAgIHRveWJveDogdGhpcy5pbmNsdWRlVG95Ym94KHVzZXIpLFxuICAgICAgICAgICAgbGlzdHM6IHRoaXMuaW5jbHVkZUxpc3RzKHVzZXIpLFxuICAgICAgICAgICAgcmV0dXJuT3JkZXJzOiB0aGlzLmluY2x1ZGVSZXR1cm5PcmRlcnModXNlciksXG4gICAgICAgICAgICBhY3RpdmVCYXNrZXQ6IHRoaXMuaW5jbHVkZUJhc2tldCh1c2VyKSxcbiAgICAgICAgICAgIHVzZXJTdWJzY3JpcHRpb25zOiB0aGlzLmluY2x1ZGVVc2VyU3Vic2NyaXB0aW9ucyh1c2VyKSxcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTdWJzY3JpcHRpb246IHRoaXMuaW5jbHVkZVVzZXJTdWJzY3JpcHRpb24odXNlcikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgYWN0aXZlUmV0dXJuT3JkZXI6IHRoaXMuaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJvbGVzOiB0aGlzLmluY2x1ZGVSb2xlcyh1c2VyKSxcbiAgICAgICAgICAgIC8vIEFjY2Vzc29yc1xuICAgICAgICAgICAgb25GaXJzdE9yZGVyOiB1c2VyLm9uRmlyc3RPcmRlcixcbiAgICAgICAgICAgIHRveWJveFRva2VuczogdXNlci50b3lib3hUb2tlbnMsXG4gICAgICAgICAgICBhZGRpdGlvbmFsVG9rZW5zOiB1c2VyLmFkZGl0aW9uYWxUb2tlbnMsXG4gICAgICAgICAgICBhdmFpbGFibGVUb2tlbnM6IHVzZXIuYXZhaWxhYmxlVG9rZW5zLFxuICAgICAgICAgICAgbWF4VG9rZW5zOiB1c2VyLm1heFRva2VucyxcbiAgICAgICAgICAgIGJhc2tldFF1YW50aXR5OiB1c2VyLmJhc2tldFF1YW50aXR5LFxuICAgICAgICAgICAgYWN0aXZlQmFza2V0VG90YWxUb2tlbnM6IHVzZXIuYWN0aXZlQmFza2V0VG90YWxUb2tlbnMsXG4gICAgICAgICAgICBiYWxhbmNlOiB1c2VyLmJhbGFuY2UsXG4gICAgICAgICAgICBjaGFuZ2VTdWJzY3JpcHRpb25TdGF0dXM6IHVzZXIuY2hhbmdlU3Vic2NyaXB0aW9uU3RhdHVzLFxuICAgICAgICAgICAgY2FuY2VsU3Vic2NyaXB0aW9uU3RhdHVzOiB1c2VyLmNhbmNlbFN1YnNjcmlwdGlvblN0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZU9yZGVycyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8T3JkZXJJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnb3JkZXJzJywgbmV3IE9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVN0b2NrKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxTdG9ja0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdzdG9jaycsIG5ldyBTdG9ja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBZGRyZXNzZXModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PEFkZHJlc3NJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnYWRkcmVzc2VzJywgbmV3IEFkZHJlc3NUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVG95Ym94KHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxQdXJjaGFzZVN0b2NrSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3RveWJveCcsIG5ldyBQdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUxpc3RzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxQcm9kdWN0TGlzdEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdsaXN0cycsIG5ldyBQcm9kdWN0TGlzdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZXR1cm5PcmRlcnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFJldHVybk9yZGVySW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3JldHVybk9yZGVycycsIG5ldyBSZXR1cm5PcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVBY3RpdmVSZXR1cm5PcmRlcih1c2VyOiBVc2VySW50ZXJmYWNlKTogUmV0dXJuT3JkZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyLCAnYWN0aXZlUmV0dXJuT3JkZXInLCBuZXcgUmV0dXJuT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUm9sZXModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFJvbGVJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAncm9sZXMnLCBuZXcgUm9sZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVCYXNrZXQodXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PEJhc2tldEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdhY3RpdmVCYXNrZXQnLCBuZXcgQmFza2V0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxVc2VyU3Vic2NyaXB0aW9uSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3VzZXJTdWJzY3JpcHRpb25zJywgbmV3IFVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlclN1YnNjcmlwdGlvbih1c2VyOiBVc2VySW50ZXJmYWNlKTogVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXIsICd1c2VyU3Vic2NyaXB0aW9ucycsIG5ldyBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19