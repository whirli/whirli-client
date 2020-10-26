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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiY29sb3IiLCJoaWdobGlnaHRzIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiYWRkcmVzc2VzIiwiaW5jbHVkZUFkZHJlc3NlcyIsInRveWJveCIsImluY2x1ZGVUb3lib3giLCJsaXN0cyIsImluY2x1ZGVMaXN0cyIsInJldHVybk9yZGVycyIsImluY2x1ZGVSZXR1cm5PcmRlcnMiLCJhY3RpdmVCYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwidXNlclN1YnNjcmlwdGlvbnMiLCJpbmNsdWRlVXNlclN1YnNjcmlwdGlvbnMiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9ucyIsInVuZGVmaW5lZCIsImFjdGl2ZVVzZXJTdWJzY3JpcHRpb25TdGF0dXNJZCIsImFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuIiwiYWN0aXZlUmV0dXJuT3JkZXIiLCJpbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIiLCJyb2xlcyIsImluY2x1ZGVSb2xlcyIsIm9uRmlyc3RPcmRlciIsInRveWJveFRva2VucyIsImFkZGl0aW9uYWxUb2tlbnMiLCJhdmFpbGFibGVUb2tlbnMiLCJzdWJzY3JpcHRpb25Ub2tlbnMiLCJtYXhUb2tlbnMiLCJiYXNrZXRRdWFudGl0eSIsImFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zIiwiYmFsYW5jZSIsImNoYW5nZVN1YnNjcmlwdGlvblN0YXR1cyIsImNhbmNlbFN1YnNjcmlwdGlvblN0YXR1cyIsIm5vdGVzIiwiY29sbGVjdGlvbiIsIk9yZGVyVHJhbnNmb3JtZXIiLCJTdG9ja1RyYW5zZm9ybWVyIiwiQWRkcmVzc1RyYW5zZm9ybWVyIiwiUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIiwiUHJvZHVjdExpc3RUcmFuc2Zvcm1lciIsIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJpdGVtIiwiUm9sZVRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFFQTs7QUFLQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsSSxFQUEyQjtBQUMvQixhQUFPLElBQUlDLGdCQUFKLENBQVM7QUFDWkMsUUFBQUEsRUFBRSxFQUFFRixJQUFJLENBQUNFLEVBREc7QUFFWkMsUUFBQUEsU0FBUyxFQUFFSCxJQUFJLENBQUNHLFNBRko7QUFHWkMsUUFBQUEsU0FBUyxFQUFFSixJQUFJLENBQUNJLFNBSEo7QUFJWkMsUUFBQUEsU0FBUyxFQUFFTCxJQUFJLENBQUNLLFNBSko7QUFLWkMsUUFBQUEsUUFBUSxFQUFFTixJQUFJLENBQUNNLFFBTEg7QUFNWkMsUUFBQUEsS0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBTkE7QUFPWkMsUUFBQUEsZUFBZSxFQUFFUixJQUFJLENBQUNRLGVBUFY7QUFRWkMsUUFBQUEsUUFBUSxFQUFFVCxJQUFJLENBQUNTLFFBUkg7QUFTWkMsUUFBQUEsb0JBQW9CLEVBQUVWLElBQUksQ0FBQ1Usb0JBVGY7QUFVWkMsUUFBQUEsUUFBUSxFQUFFWCxJQUFJLENBQUNXLFFBVkg7QUFXWkMsUUFBQUEsb0JBQW9CLEVBQUVaLElBQUksQ0FBQ1ksb0JBWGY7QUFZWkMsUUFBQUEsNkJBQTZCLEVBQUViLElBQUksQ0FBQ2EsNkJBWnhCO0FBYVpDLFFBQUFBLCtCQUErQixFQUFFZCxJQUFJLENBQUNjLCtCQWIxQjtBQWNaQyxRQUFBQSxVQUFVLEVBQUVmLElBQUksQ0FBQ2UsVUFkTDtBQWVaQyxRQUFBQSxZQUFZLEVBQUVoQixJQUFJLENBQUNnQixZQWZQO0FBZ0JaQyxRQUFBQSxTQUFTLEVBQUVqQixJQUFJLENBQUNpQixTQWhCSjtBQWlCWkMsUUFBQUEsS0FBSyxFQUFFbEIsSUFBSSxDQUFDa0IsS0FqQkE7QUFrQlpDLFFBQUFBLFVBQVUsRUFBRW5CLElBQUksQ0FBQ21CLFVBbEJMO0FBbUJaO0FBQ0FDLFFBQUFBLE1BQU0sRUFBRSxLQUFLQyxhQUFMLENBQW1CckIsSUFBbkIsQ0FwQkk7QUFxQlpzQixRQUFBQSxLQUFLLEVBQUUsS0FBS0MsWUFBTCxDQUFrQnZCLElBQWxCLENBckJLO0FBc0Jad0IsUUFBQUEsU0FBUyxFQUFFLEtBQUtDLGdCQUFMLENBQXNCekIsSUFBdEIsQ0F0QkM7QUF1QlowQixRQUFBQSxNQUFNLEVBQUUsS0FBS0MsYUFBTCxDQUFtQjNCLElBQW5CLENBdkJJO0FBd0JaNEIsUUFBQUEsS0FBSyxFQUFFLEtBQUtDLFlBQUwsQ0FBa0I3QixJQUFsQixDQXhCSztBQXlCWjhCLFFBQUFBLFlBQVksRUFBRSxLQUFLQyxtQkFBTCxDQUF5Qi9CLElBQXpCLENBekJGO0FBMEJaZ0MsUUFBQUEsWUFBWSxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJqQyxJQUFuQixDQTFCRjtBQTJCWmtDLFFBQUFBLGlCQUFpQixFQUFFLEtBQUtDLHdCQUFMLENBQThCbkMsSUFBOUIsQ0EzQlA7QUE0QlpvQyxRQUFBQSx1QkFBdUIsRUFBRSxLQUFLRCx3QkFBTCxDQUE4Qm5DLElBQTlCLEtBQXVDcUMsU0E1QnBEO0FBNkJaQyxRQUFBQSw4QkFBOEIsRUFBRXRDLElBQUksQ0FBQ3NDLDhCQTdCekI7QUE4QlpDLFFBQUFBLDBCQUEwQixFQUFFdkMsSUFBSSxDQUFDdUMsMEJBOUJyQjtBQStCWkMsUUFBQUEsaUJBQWlCLEVBQUUsS0FBS0Msd0JBQUwsQ0FBOEJ6QyxJQUE5QixLQUF1Q3FDLFNBL0I5QztBQWdDWkssUUFBQUEsS0FBSyxFQUFFLEtBQUtDLFlBQUwsQ0FBa0IzQyxJQUFsQixDQWhDSztBQWlDWjtBQUNBNEMsUUFBQUEsWUFBWSxFQUFFNUMsSUFBSSxDQUFDNEMsWUFsQ1A7QUFtQ1pDLFFBQUFBLFlBQVksRUFBRTdDLElBQUksQ0FBQzZDLFlBbkNQO0FBb0NaQyxRQUFBQSxnQkFBZ0IsRUFBRTlDLElBQUksQ0FBQzhDLGdCQXBDWDtBQXFDWkMsUUFBQUEsZUFBZSxFQUFFL0MsSUFBSSxDQUFDK0MsZUFyQ1Y7QUFzQ1pDLFFBQUFBLGtCQUFrQixFQUFFaEQsSUFBSSxDQUFDZ0Qsa0JBdENiO0FBdUNaQyxRQUFBQSxTQUFTLEVBQUVqRCxJQUFJLENBQUNpRCxTQXZDSjtBQXdDWkMsUUFBQUEsY0FBYyxFQUFFbEQsSUFBSSxDQUFDa0QsY0F4Q1Q7QUF5Q1pDLFFBQUFBLHVCQUF1QixFQUFFbkQsSUFBSSxDQUFDbUQsdUJBekNsQjtBQTBDWkMsUUFBQUEsT0FBTyxFQUFFcEQsSUFBSSxDQUFDb0QsT0ExQ0Y7QUEyQ1pDLFFBQUFBLHdCQUF3QixFQUFFckQsSUFBSSxDQUFDcUQsd0JBM0NuQjtBQTRDWkMsUUFBQUEsd0JBQXdCLEVBQUV0RCxJQUFJLENBQUNzRCx3QkE1Q25CO0FBNkNaQyxRQUFBQSxLQUFLLEVBQUV2RCxJQUFJLENBQUN1RDtBQTdDQSxPQUFULENBQVA7QUErQ0g7OztrQ0FFYXZELEksRUFBNEM7QUFDdEQsYUFBTyxLQUFLd0QsVUFBTCxDQUFnQnhELElBQWhCLEVBQXNCLFFBQXRCLEVBQWdDLElBQUl5RCw0QkFBSixFQUFoQyxDQUFQO0FBQ0g7OztpQ0FFWXpELEksRUFBNEM7QUFDckQsYUFBTyxLQUFLd0QsVUFBTCxDQUFnQnhELElBQWhCLEVBQXNCLE9BQXRCLEVBQStCLElBQUkwRCw0QkFBSixFQUEvQixDQUFQO0FBQ0g7OztxQ0FFZ0IxRCxJLEVBQThDO0FBQzNELGFBQU8sS0FBS3dELFVBQUwsQ0FBZ0J4RCxJQUFoQixFQUFzQixXQUF0QixFQUFtQyxJQUFJMkQsOEJBQUosRUFBbkMsQ0FBUDtBQUNIOzs7a0NBRWEzRCxJLEVBQW9EO0FBQzlELGFBQU8sS0FBS3dELFVBQUwsQ0FBZ0J4RCxJQUFoQixFQUFzQixRQUF0QixFQUFnQyxJQUFJNEQsb0NBQUosRUFBaEMsQ0FBUDtBQUNIOzs7aUNBRVk1RCxJLEVBQWtEO0FBQzNELGFBQU8sS0FBS3dELFVBQUwsQ0FBZ0J4RCxJQUFoQixFQUFzQixPQUF0QixFQUErQixJQUFJNkQsa0NBQUosRUFBL0IsQ0FBUDtBQUNIOzs7d0NBRW1CN0QsSSxFQUFrRDtBQUNsRSxhQUFPLEtBQUt3RCxVQUFMLENBQWdCeEQsSUFBaEIsRUFBc0IsY0FBdEIsRUFBc0MsSUFBSThELGtDQUFKLEVBQXRDLENBQVA7QUFDSDs7OzZDQUV3QjlELEksRUFBa0Q7QUFDdkUsYUFBTyxLQUFLK0QsSUFBTCxDQUFVL0QsSUFBVixFQUFnQixtQkFBaEIsRUFBcUMsSUFBSThELGtDQUFKLEVBQXJDLENBQVA7QUFDSDs7O2lDQUVZOUQsSSxFQUEyQztBQUNwRCxhQUFPLEtBQUt3RCxVQUFMLENBQWdCeEQsSUFBaEIsRUFBc0IsT0FBdEIsRUFBK0IsSUFBSWdFLDJCQUFKLEVBQS9CLENBQVA7QUFDSDs7O2tDQUVhaEUsSSxFQUE2QztBQUN2RCxhQUFPLEtBQUt3RCxVQUFMLENBQWdCeEQsSUFBaEIsRUFBc0IsY0FBdEIsRUFBc0MsSUFBSWlFLDZCQUFKLEVBQXRDLENBQVA7QUFDSDs7OzZDQUV3QmpFLEksRUFBdUQ7QUFDNUUsYUFBTyxLQUFLd0QsVUFBTCxDQUFnQnhELElBQWhCLEVBQXNCLG1CQUF0QixFQUEyQyxJQUFJa0UsdUNBQUosRUFBM0MsQ0FBUDtBQUNIOzs7O0VBOUZ3Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuLi9Vc2VyJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBPcmRlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL09yZGVyJztcbmltcG9ydCBPcmRlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL29yZGVyL1RyYW5zZm9ybWVycy9PcmRlclRyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1N0b2NrJztcbmltcG9ydCBTdG9ja1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N0b2NrL1RyYW5zZm9ybWVycy9TdG9ja1RyYW5zZm9ybWVyJztcbmltcG9ydCBBZGRyZXNzSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYWRkcmVzcy9BZGRyZXNzJztcbmltcG9ydCBQdXJjaGFzZVN0b2NrSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3RvY2svUHVyY2hhc2VTdG9jayc7XG5pbXBvcnQgUHJvZHVjdExpc3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RMaXN0JztcbmltcG9ydCBSZXR1cm5PcmRlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JldHVybi9SZXR1cm5PcmRlcic7XG5pbXBvcnQgUmV0dXJuT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9yZXR1cm4vVHJhbnNmb3JtZXJzL1JldHVybk9yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQmFza2V0IGFzIEJhc2tldEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvYmFza2V0L0Jhc2tldCc7XG5pbXBvcnQgQmFza2V0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYmFza2V0L1RyYW5zZm9ybWVycy9CYXNrZXRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlclN1YnNjcmlwdGlvbkludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlclN1YnNjcmlwdGlvbic7XG5pbXBvcnQgVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyIGZyb20gJy4vVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyJztcbmltcG9ydCBBZGRyZXNzVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vYWRkcmVzcy9UcmFuc2Zvcm1lcnMvQWRkcmVzc1RyYW5zZm9ybWVyJztcbmltcG9ydCBQdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3RvY2svVHJhbnNmb3JtZXJzL1B1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdExpc3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9wcm9kdWN0L1RyYW5zZm9ybWVycy9Qcm9kdWN0TGlzdFRyYW5zZm9ybWVyJztcbmltcG9ydCBSb2xlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcm9sZS9Sb2xlJztcbmltcG9ydCBSb2xlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcm9sZS9UcmFuc2Zvcm1lcnMvUm9sZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gdXNlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHVzZXJcbiAgICAgKi9cbiAgICBtYXBEYXRhKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBVc2VyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VyKHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiB1c2VyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogdXNlci51cGRhdGVkQXQsXG4gICAgICAgICAgICBmaXJzdG5hbWU6IHVzZXIuZmlyc3RuYW1lLFxuICAgICAgICAgICAgbGFzdG5hbWU6IHVzZXIubGFzdG5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIGVtYWlsVmVyaWZpZWRBdDogdXNlci5lbWFpbFZlcmlmaWVkQXQsXG4gICAgICAgICAgICBzdGF0dXNJZDogdXNlci5zdGF0dXNJZCxcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1c0lkOiB1c2VyLnJlZ2lzdHJhdGlvblN0YXR1c0lkLFxuICAgICAgICAgICAgc3RyaXBlSWQ6IHVzZXIuc3RyaXBlSWQsXG4gICAgICAgICAgICByZXNpZHVhbENoYXJnZXNPcHRJbjogdXNlci5yZXNpZHVhbENoYXJnZXNPcHRJbixcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvblRlcm1zOiB1c2VyLnN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvblRlcm1zLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uQ2hhcmdlczogdXNlci5zdWJzY3JpcHRpb25DYW5jZWxsYXRpb25DaGFyZ2VzLFxuICAgICAgICAgICAgdmVyaWZpZWRBdDogdXNlci52ZXJpZmllZEF0LFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiB1c2VyLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogdXNlci5yZWZlcmVuY2UsXG4gICAgICAgICAgICBjb2xvcjogdXNlci5jb2xvcixcbiAgICAgICAgICAgIGhpZ2hsaWdodHM6IHVzZXIuaGlnaGxpZ2h0cyxcbiAgICAgICAgICAgIC8vIEhhcyBtYW55XG4gICAgICAgICAgICBvcmRlcnM6IHRoaXMuaW5jbHVkZU9yZGVycyh1c2VyKSxcbiAgICAgICAgICAgIHN0b2NrOiB0aGlzLmluY2x1ZGVTdG9jayh1c2VyKSxcbiAgICAgICAgICAgIGFkZHJlc3NlczogdGhpcy5pbmNsdWRlQWRkcmVzc2VzKHVzZXIpLFxuICAgICAgICAgICAgdG95Ym94OiB0aGlzLmluY2x1ZGVUb3lib3godXNlciksXG4gICAgICAgICAgICBsaXN0czogdGhpcy5pbmNsdWRlTGlzdHModXNlciksXG4gICAgICAgICAgICByZXR1cm5PcmRlcnM6IHRoaXMuaW5jbHVkZVJldHVybk9yZGVycyh1c2VyKSxcbiAgICAgICAgICAgIGFjdGl2ZUJhc2tldDogdGhpcy5pbmNsdWRlQmFza2V0KHVzZXIpLFxuICAgICAgICAgICAgdXNlclN1YnNjcmlwdGlvbnM6IHRoaXMuaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zKHVzZXIpLFxuICAgICAgICAgICAgYWN0aXZlVXNlclN1YnNjcmlwdGlvbnM6IHRoaXMuaW5jbHVkZVVzZXJTdWJzY3JpcHRpb25zKHVzZXIpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTdWJzY3JpcHRpb25TdGF0dXNJZDogdXNlci5hY3RpdmVVc2VyU3Vic2NyaXB0aW9uU3RhdHVzSWQsXG4gICAgICAgICAgICBhY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGxhbjogdXNlci5hY3RpdmVVc2VyU3Vic2NyaXB0aW9uUGxhbixcbiAgICAgICAgICAgIGFjdGl2ZVJldHVybk9yZGVyOiB0aGlzLmluY2x1ZGVBY3RpdmVSZXR1cm5PcmRlcih1c2VyKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICByb2xlczogdGhpcy5pbmNsdWRlUm9sZXModXNlciksXG4gICAgICAgICAgICAvLyBBY2Nlc3NvcnNcbiAgICAgICAgICAgIG9uRmlyc3RPcmRlcjogdXNlci5vbkZpcnN0T3JkZXIsXG4gICAgICAgICAgICB0b3lib3hUb2tlbnM6IHVzZXIudG95Ym94VG9rZW5zLFxuICAgICAgICAgICAgYWRkaXRpb25hbFRva2VuczogdXNlci5hZGRpdGlvbmFsVG9rZW5zLFxuICAgICAgICAgICAgYXZhaWxhYmxlVG9rZW5zOiB1c2VyLmF2YWlsYWJsZVRva2VucyxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvblRva2VuczogdXNlci5zdWJzY3JpcHRpb25Ub2tlbnMsXG4gICAgICAgICAgICBtYXhUb2tlbnM6IHVzZXIubWF4VG9rZW5zLFxuICAgICAgICAgICAgYmFza2V0UXVhbnRpdHk6IHVzZXIuYmFza2V0UXVhbnRpdHksXG4gICAgICAgICAgICBhY3RpdmVCYXNrZXRUb3RhbFRva2VuczogdXNlci5hY3RpdmVCYXNrZXRUb3RhbFRva2VucyxcbiAgICAgICAgICAgIGJhbGFuY2U6IHVzZXIuYmFsYW5jZSxcbiAgICAgICAgICAgIGNoYW5nZVN1YnNjcmlwdGlvblN0YXR1czogdXNlci5jaGFuZ2VTdWJzY3JpcHRpb25TdGF0dXMsXG4gICAgICAgICAgICBjYW5jZWxTdWJzY3JpcHRpb25TdGF0dXM6IHVzZXIuY2FuY2VsU3Vic2NyaXB0aW9uU3RhdHVzLFxuICAgICAgICAgICAgbm90ZXM6IHVzZXIubm90ZXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVPcmRlcnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PE9yZGVySW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ29yZGVycycsIG5ldyBPcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdG9jayh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8U3RvY2tJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnc3RvY2snLCBuZXcgU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWRkcmVzc2VzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxBZGRyZXNzSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2FkZHJlc3NlcycsIG5ldyBBZGRyZXNzVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVRveWJveCh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UHVyY2hhc2VTdG9ja0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd0b3lib3gnLCBuZXcgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVMaXN0cyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UHJvZHVjdExpc3RJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnbGlzdHMnLCBuZXcgUHJvZHVjdExpc3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmV0dXJuT3JkZXJzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSZXR1cm5PcmRlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyZXR1cm5PcmRlcnMnLCBuZXcgUmV0dXJuT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIodXNlcjogVXNlckludGVyZmFjZSk6IFJldHVybk9yZGVySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0odXNlciwgJ2FjdGl2ZVJldHVybk9yZGVyJywgbmV3IFJldHVybk9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJvbGVzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxSb2xlSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3JvbGVzJywgbmV3IFJvbGVUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlQmFza2V0KHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxCYXNrZXRJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnYWN0aXZlQmFza2V0JywgbmV3IEJhc2tldFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyU3Vic2NyaXB0aW9ucyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8VXNlclN1YnNjcmlwdGlvbkludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICd1c2VyU3Vic2NyaXB0aW9ucycsIG5ldyBVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19