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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiaGlnaGxpZ2h0cyIsIm9yZGVycyIsImluY2x1ZGVPcmRlcnMiLCJzdG9jayIsImluY2x1ZGVTdG9jayIsImFkZHJlc3NlcyIsImluY2x1ZGVBZGRyZXNzZXMiLCJ0b3lib3giLCJpbmNsdWRlVG95Ym94IiwibGlzdHMiLCJpbmNsdWRlTGlzdHMiLCJyZXR1cm5PcmRlcnMiLCJpbmNsdWRlUmV0dXJuT3JkZXJzIiwiYWN0aXZlQmFza2V0IiwiaW5jbHVkZUJhc2tldCIsInVzZXJTdWJzY3JpcHRpb25zIiwiaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zIiwiYWN0aXZlVXNlclN1YnNjcmlwdGlvbiIsImluY2x1ZGVVc2VyU3Vic2NyaXB0aW9uIiwidW5kZWZpbmVkIiwiYWN0aXZlUmV0dXJuT3JkZXIiLCJpbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIiLCJyb2xlcyIsImluY2x1ZGVSb2xlcyIsIm9uRmlyc3RPcmRlciIsInRveWJveFRva2VucyIsImFkZGl0aW9uYWxUb2tlbnMiLCJhdmFpbGFibGVUb2tlbnMiLCJtYXhUb2tlbnMiLCJiYXNrZXRRdWFudGl0eSIsImFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zIiwiYmFsYW5jZSIsImNoYW5nZVN1YnNjcmlwdGlvblN0YXR1cyIsImNhbmNlbFN1YnNjcmlwdGlvblN0YXR1cyIsImNvbGxlY3Rpb24iLCJPcmRlclRyYW5zZm9ybWVyIiwiU3RvY2tUcmFuc2Zvcm1lciIsIkFkZHJlc3NUcmFuc2Zvcm1lciIsIlB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lciIsIlByb2R1Y3RMaXN0VHJhbnNmb3JtZXIiLCJSZXR1cm5PcmRlclRyYW5zZm9ybWVyIiwiaXRlbSIsIlJvbGVUcmFuc2Zvcm1lciIsIkJhc2tldFRyYW5zZm9ybWVyIiwiVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7O0FBRUE7O0FBS0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsSSxFQUEyQjtBQUMvQixhQUFPLElBQUlDLGdCQUFKLENBQVM7QUFDWkMsUUFBQUEsRUFBRSxFQUFFRixJQUFJLENBQUNFLEVBREc7QUFFWkMsUUFBQUEsU0FBUyxFQUFFSCxJQUFJLENBQUNHLFNBRko7QUFHWkMsUUFBQUEsU0FBUyxFQUFFSixJQUFJLENBQUNJLFNBSEo7QUFJWkMsUUFBQUEsU0FBUyxFQUFFTCxJQUFJLENBQUNLLFNBSko7QUFLWkMsUUFBQUEsUUFBUSxFQUFFTixJQUFJLENBQUNNLFFBTEg7QUFNWkMsUUFBQUEsS0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBTkE7QUFPWkMsUUFBQUEsZUFBZSxFQUFFUixJQUFJLENBQUNRLGVBUFY7QUFRWkMsUUFBQUEsUUFBUSxFQUFFVCxJQUFJLENBQUNTLFFBUkg7QUFTWkMsUUFBQUEsb0JBQW9CLEVBQUVWLElBQUksQ0FBQ1Usb0JBVGY7QUFVWkMsUUFBQUEsUUFBUSxFQUFFWCxJQUFJLENBQUNXLFFBVkg7QUFXWkMsUUFBQUEsb0JBQW9CLEVBQUVaLElBQUks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QUFPLEtBQUtvRCxVQUFMLENBQWdCcEQsSUFBaEIsRUFBc0IsT0FBdEIsRUFBK0IsSUFBSXlELGtDQUFKLEVBQS9CLENBQVA7QUFDSDs7O3dDQUVtQnpELEksRUFBa0Q7QUFDbEUsYUFBTyxLQUFLb0QsVUFBTCxDQUFnQnBELElBQWhCLEVBQXNCLGNBQXRCLEVBQXNDLElBQUkwRCxrQ0FBSixFQUF0QyxDQUFQO0FBQ0g7Ozs2Q0FFd0IxRCxJLEVBQWtEO0FBQ3ZFLGFBQU8sS0FBSzJELElBQUwsQ0FBVTNELElBQVYsRUFBZ0IsbUJBQWhCLEVBQXFDLElBQUkwRCxrQ0FBSixFQUFyQyxDQUFQO0FBQ0g7OztpQ0FFWTFELEksRUFBMkM7QUFDcEQsYUFBTyxLQUFLb0QsVUFBTCxDQUFnQnBELElBQWhCLEVBQXNCLE9BQXRCLEVBQStCLElBQUk0RCwyQkFBSixFQUEvQixDQUFQO0FBQ0g7OztrQ0FFYTVELEksRUFBNkM7QUFDdkQsYUFBTyxLQUFLb0QsVUFBTCxDQUFnQnBELElBQWhCLEVBQXNCLGNBQXRCLEVBQXNDLElBQUk2RCw2QkFBSixFQUF0QyxDQUFQO0FBQ0g7Ozs2Q0FFd0I3RCxJLEVBQXVEO0FBQzVFLGFBQU8sS0FBS29ELFVBQUwsQ0FBZ0JwRCxJQUFoQixFQUFzQixtQkFBdEIsRUFBMkMsSUFBSThELHVDQUFKLEVBQTNDLENBQVA7QUFDSDs7OzRDQUV1QjlELEksRUFBdUQ7QUFDM0UsYUFBTyxLQUFLMkQsSUFBTCxDQUFVM0QsSUFBVixFQUFnQixtQkFBaEIsRUFBcUMsSUFBSThELHVDQUFKLEVBQXJDLENBQVA7QUFDSDs7OztFQTdGd0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vVXNlcic7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9TdG9jayc7XG5pbXBvcnQgU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvU3RvY2tUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2FkZHJlc3MvQWRkcmVzcyc7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1B1cmNoYXNlU3RvY2snO1xuaW1wb3J0IFByb2R1Y3RMaXN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgUmV0dXJuT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXInO1xuaW1wb3J0IFJldHVybk9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlclRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEJhc2tldCBhcyBCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IEJhc2tldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXJTdWJzY3JpcHRpb24nO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1VzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2FkZHJlc3MvVHJhbnNmb3JtZXJzL0FkZHJlc3NUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N0b2NrL1RyYW5zZm9ybWVycy9QdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdExpc3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUm9sZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JvbGUvUm9sZSc7XG5pbXBvcnQgUm9sZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JvbGUvVHJhbnNmb3JtZXJzL1JvbGVUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHVzZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VyXG4gICAgICovXG4gICAgbWFwRGF0YSh1c2VyOiBVc2VySW50ZXJmYWNlKTogVXNlciB7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcih7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdXNlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHVzZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgZmlyc3RuYW1lOiB1c2VyLmZpcnN0bmFtZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiB1c2VyLmxhc3RuYW1lLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBlbWFpbFZlcmlmaWVkQXQ6IHVzZXIuZW1haWxWZXJpZmllZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHVzZXIuc3RhdHVzSWQsXG4gICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXNJZDogdXNlci5yZWdpc3RyYXRpb25TdGF0dXNJZCxcbiAgICAgICAgICAgIHN0cmlwZUlkOiB1c2VyLnN0cmlwZUlkLFxuICAgICAgICAgICAgcmVzaWR1YWxDaGFyZ2VzT3B0SW46IHVzZXIucmVzaWR1YWxDaGFyZ2VzT3B0SW4sXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtczogdXNlci5zdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXM6IHVzZXIuc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uQ2hhcmdlcyxcbiAgICAgICAgICAgIHZlcmlmaWVkQXQ6IHVzZXIudmVyaWZpZWRBdCxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogdXNlci5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICByZWZlcmVuY2U6IHVzZXIucmVmZXJlbmNlLFxuICAgICAgICAgICAgaGlnaGxpZ2h0czogdXNlci5oaWdobGlnaHRzLFxuICAgICAgICAgICAgLy8gSGFzIG1hbnlcbiAgICAgICAgICAgIG9yZGVyczogdGhpcy5pbmNsdWRlT3JkZXJzKHVzZXIpLFxuICAgICAgICAgICAgc3RvY2s6IHRoaXMuaW5jbHVkZVN0b2NrKHVzZXIpLFxuICAgICAgICAgICAgYWRkcmVzc2VzOiB0aGlzLmluY2x1ZGVBZGRyZXNzZXModXNlciksXG4gICAgICAgICAgICB0b3lib3g6IHRoaXMuaW5jbHVkZVRveWJveCh1c2VyKSxcbiAgICAgICAgICAgIGxpc3RzOiB0aGlzLmluY2x1ZGVMaXN0cyh1c2VyKSxcbiAgICAgICAgICAgIHJldHVybk9yZGVyczogdGhpcy5pbmNsdWRlUmV0dXJuT3JkZXJzKHVzZXIpLFxuICAgICAgICAgICAgYWN0aXZlQmFza2V0OiB0aGlzLmluY2x1ZGVCYXNrZXQodXNlciksXG4gICAgICAgICAgICB1c2VyU3Vic2NyaXB0aW9uczogdGhpcy5pbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlciksXG4gICAgICAgICAgICBhY3RpdmVVc2VyU3Vic2NyaXB0aW9uOiB0aGlzLmluY2x1ZGVVc2VyU3Vic2NyaXB0aW9uKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFjdGl2ZVJldHVybk9yZGVyOiB0aGlzLmluY2x1ZGVBY3RpdmVSZXR1cm5PcmRlcih1c2VyKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICByb2xlczogdGhpcy5pbmNsdWRlUm9sZXModXNlciksXG4gICAgICAgICAgICAvLyBBY2Nlc3NvcnNcbiAgICAgICAgICAgIG9uRmlyc3RPcmRlcjogdXNlci5vbkZpcnN0T3JkZXIsXG4gICAgICAgICAgICB0b3lib3hUb2tlbnM6IHVzZXIudG95Ym94VG9rZW5zLFxuICAgICAgICAgICAgYWRkaXRpb25hbFRva2VuczogdXNlci5hZGRpdGlvbmFsVG9rZW5zLFxuICAgICAgICAgICAgYXZhaWxhYmxlVG9rZW5zOiB1c2VyLmF2YWlsYWJsZVRva2VucyxcbiAgICAgICAgICAgIG1heFRva2VuczogdXNlci5tYXhUb2tlbnMsXG4gICAgICAgICAgICBiYXNrZXRRdWFudGl0eTogdXNlci5iYXNrZXRRdWFudGl0eSxcbiAgICAgICAgICAgIGFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zOiB1c2VyLmFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zLFxuICAgICAgICAgICAgYmFsYW5jZTogdXNlci5iYWxhbmNlLFxuICAgICAgICAgICAgY2hhbmdlU3Vic2NyaXB0aW9uU3RhdHVzOiB1c2VyLmNoYW5nZVN1YnNjcmlwdGlvblN0YXR1cyxcbiAgICAgICAgICAgIGNhbmNlbFN1YnNjcmlwdGlvblN0YXR1czogdXNlci5jYW5jZWxTdWJzY3JpcHRpb25TdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlcnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PE9yZGVySW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ29yZGVycycsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdG9jayh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8U3RvY2tJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnc3RvY2snLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWRkcmVzc2VzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxBZGRyZXNzSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2FkZHJlc3NlcycsIG5ldyBBZGRyZXNzVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVRveWJveCh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UHVyY2hhc2VTdG9ja0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd0b3lib3gnLCBuZXcgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVMaXN0cyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdExpc3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnbGlzdHMnLCBuZXcgUHJvZHVjdExpc3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmV0dXJuT3JkZXJzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSZXR1cm5PcmRlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyZXR1cm5PcmRlcnMnLCBuZXcgUmV0dXJuT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIodXNlcjogVXNlckludGVyZmFjZSk6IFJldHVybk9yZGVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0odXNlciwgJ2FjdGl2ZVJldHVybk9yZGVyJywgbmV3IFJldHVybk9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJvbGVzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSb2xlSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3JvbGVzJywgbmV3IFJvbGVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQmFza2V0KHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxCYXNrZXRJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnYWN0aXZlQmFza2V0JywgbmV3IEJhc2tldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyU3Vic2NyaXB0aW9ucyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8VXNlclN1YnNjcmlwdGlvbkludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd1c2VyU3Vic2NyaXB0aW9ucycsIG5ldyBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXJTdWJzY3JpcHRpb24odXNlcjogVXNlckludGVyZmFjZSk6IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyLCAndXNlclN1YnNjcmlwdGlvbnMnLCBuZXcgVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==