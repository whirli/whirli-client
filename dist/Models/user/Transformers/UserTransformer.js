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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwicmVmZXJlbmNlIiwiY29sb3IiLCJoaWdobGlnaHRzIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsInN0b2NrIiwiaW5jbHVkZVN0b2NrIiwiYWRkcmVzc2VzIiwiaW5jbHVkZUFkZHJlc3NlcyIsInRveWJveCIsImluY2x1ZGVUb3lib3giLCJsaXN0cyIsImluY2x1ZGVMaXN0cyIsInJldHVybk9yZGVycyIsImluY2x1ZGVSZXR1cm5PcmRlcnMiLCJhY3RpdmVCYXNrZXQiLCJpbmNsdWRlQmFza2V0IiwidXNlclN1YnNjcmlwdGlvbnMiLCJpbmNsdWRlVXNlclN1YnNjcmlwdGlvbnMiLCJhY3RpdmVVc2VyU3Vic2NyaXB0aW9ucyIsInVuZGVmaW5lZCIsImFjdGl2ZVVzZXJTdWJzY3JpcHRpb25TdGF0dXNJZCIsImFjdGl2ZVVzZXJTdWJzY3JpcHRpb25QbGFuIiwiYWN0aXZlUmV0dXJuT3JkZXIiLCJpbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIiLCJyb2xlcyIsImluY2x1ZGVSb2xlcyIsIm9uRmlyc3RPcmRlciIsInRveWJveFRva2VucyIsImFkZGl0aW9uYWxUb2tlbnMiLCJhdmFpbGFibGVUb2tlbnMiLCJzdWJzY3JpcHRpb25Ub2tlbnMiLCJtYXhUb2tlbnMiLCJiYXNrZXRRdWFudGl0eSIsImFjdGl2ZUJhc2tldFRvdGFsVG9rZW5zIiwiYmFsYW5jZSIsImNoYW5nZVN1YnNjcmlwdGlvblN0YXR1cyIsImNhbmNlbFN1YnNjcmlwdGlvblN0YXR1cyIsIm5vdGVzIiwiY29sbGVjdGlvbiIsIk9yZGVyVHJhbnNmb3JtZXIiLCJTdG9ja1RyYW5zZm9ybWVyIiwiQWRkcmVzc1RyYW5zZm9ybWVyIiwiUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIiwiUHJvZHVjdExpc3RUcmFuc2Zvcm1lciIsIlJldHVybk9yZGVyVHJhbnNmb3JtZXIiLCJpdGVtIiwiUm9sZVRyYW5zZm9ybWVyIiwiQmFza2V0VHJhbnNmb3JtZXIiLCJVc2VyU3Vic2NyaXB0aW9uVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFFQTs7QUFLQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7NEJBQ1lDLEksRUFBMkI7QUFDL0IsYUFBTyxJQUFJQyxnQkFBSixDQUFTO0FBQ1pDLFFBQUFBLEVBQUUsRUFBRUYsSUFBSSxDQUFDRSxFQURHO0FBRVpDLFFBQUFBLFNBQVMsRUFBRUgsSUFBSSxDQUFDRyxTQUZKO0FBR1pDLFFBQUFBLFNBQVMsRUFBRUosSUFBSSxDQUFDSSxTQUhKO0FBSVpDLFFBQUFBLFNBQVMsRUFBRUwsSUFBSSxDQUFDSyxTQUpKO0FBS1pDLFFBQUFBLFFBQVEsRUFBRU4sSUFBSSxDQUFDTSxRQUxIO0FBTVpDLFFBQUFBLEtBQUssRUFBRVAsSUFBSSxDQUFDTyxLQU5BO0FBT1pDLFFBQUFBLGVBQWUsRUFBRVIsSUFBSSxDQUFDUSxlQVBWO0FBUVpDLFFBQUFBLFFBQVEsRUFBRVQsSUFBSSxDQUFDUyxRQVJIO0FBU1pDLFFBQUFBLG9CQUFv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LENBQVA7QUFDSDs7OztFQTlGd0NDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vVXNlcic7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9PcmRlcic7XG5pbXBvcnQgT3JkZXJUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9vcmRlci9UcmFuc2Zvcm1lcnMvT3JkZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3RvY2tJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdG9jay9TdG9jayc7XG5pbXBvcnQgU3RvY2tUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9zdG9jay9UcmFuc2Zvcm1lcnMvU3RvY2tUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2FkZHJlc3MvQWRkcmVzcyc7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja0ludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3N0b2NrL1B1cmNoYXNlU3RvY2snO1xuaW1wb3J0IFByb2R1Y3RMaXN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcHJvZHVjdC9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgUmV0dXJuT3JkZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZXR1cm4vUmV0dXJuT3JkZXInO1xuaW1wb3J0IFJldHVybk9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcmV0dXJuL1RyYW5zZm9ybWVycy9SZXR1cm5PcmRlclRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEJhc2tldCBhcyBCYXNrZXRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2Jhc2tldC9CYXNrZXQnO1xuaW1wb3J0IEJhc2tldFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2Jhc2tldC9UcmFuc2Zvcm1lcnMvQmFza2V0VHJhbnNmb3JtZXInO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXJTdWJzY3JpcHRpb24nO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lciBmcm9tICcuL1VzZXJTdWJzY3JpcHRpb25UcmFuc2Zvcm1lcic7XG5pbXBvcnQgQWRkcmVzc1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2FkZHJlc3MvVHJhbnNmb3JtZXJzL0FkZHJlc3NUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHVyY2hhc2VTdG9ja1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3N0b2NrL1RyYW5zZm9ybWVycy9QdXJjaGFzZVN0b2NrVHJhbnNmb3JtZXInO1xuaW1wb3J0IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vcHJvZHVjdC9UcmFuc2Zvcm1lcnMvUHJvZHVjdExpc3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUm9sZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JvbGUvUm9sZSc7XG5pbXBvcnQgUm9sZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3JvbGUvVHJhbnNmb3JtZXJzL1JvbGVUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIHVzZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1c2VyXG4gICAgICovXG4gICAgbWFwRGF0YSh1c2VyOiBVc2VySW50ZXJmYWNlKTogVXNlciB7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcih7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogdXNlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHVzZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgZmlyc3RuYW1lOiB1c2VyLmZpcnN0bmFtZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiB1c2VyLmxhc3RuYW1lLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBlbWFpbFZlcmlmaWVkQXQ6IHVzZXIuZW1haWxWZXJpZmllZEF0LFxuICAgICAgICAgICAgc3RhdHVzSWQ6IHVzZXIuc3RhdHVzSWQsXG4gICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXNJZDogdXNlci5yZWdpc3RyYXRpb25TdGF0dXNJZCxcbiAgICAgICAgICAgIHN0cmlwZUlkOiB1c2VyLnN0cmlwZUlkLFxuICAgICAgICAgICAgcmVzaWR1YWxDaGFyZ2VzT3B0SW46IHVzZXIucmVzaWR1YWxDaGFyZ2VzT3B0SW4sXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtczogdXNlci5zdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXM6IHVzZXIuc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uQ2hhcmdlcyxcbiAgICAgICAgICAgIHZlcmlmaWVkQXQ6IHVzZXIudmVyaWZpZWRBdCxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogdXNlci5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICByZWZlcmVuY2U6IHVzZXIucmVmZXJlbmNlLFxuICAgICAgICAgICAgY29sb3I6IHVzZXIuY29sb3IsXG4gICAgICAgICAgICBoaWdobGlnaHRzOiB1c2VyLmhpZ2hsaWdodHMsXG4gICAgICAgICAgICAvLyBIYXMgbWFueVxuICAgICAgICAgICAgb3JkZXJzOiB0aGlzLmluY2x1ZGVPcmRlcnModXNlciksXG4gICAgICAgICAgICBzdG9jazogdGhpcy5pbmNsdWRlU3RvY2sodXNlciksXG4gICAgICAgICAgICBhZGRyZXNzZXM6IHRoaXMuaW5jbHVkZUFkZHJlc3Nlcyh1c2VyKSxcbiAgICAgICAgICAgIHRveWJveDogdGhpcy5pbmNsdWRlVG95Ym94KHVzZXIpLFxuICAgICAgICAgICAgbGlzdHM6IHRoaXMuaW5jbHVkZUxpc3RzKHVzZXIpLFxuICAgICAgICAgICAgcmV0dXJuT3JkZXJzOiB0aGlzLmluY2x1ZGVSZXR1cm5PcmRlcnModXNlciksXG4gICAgICAgICAgICBhY3RpdmVCYXNrZXQ6IHRoaXMuaW5jbHVkZUJhc2tldCh1c2VyKSxcbiAgICAgICAgICAgIHVzZXJTdWJzY3JpcHRpb25zOiB0aGlzLmluY2x1ZGVVc2VyU3Vic2NyaXB0aW9ucyh1c2VyKSxcbiAgICAgICAgICAgIGFjdGl2ZVVzZXJTdWJzY3JpcHRpb25zOiB0aGlzLmluY2x1ZGVVc2VyU3Vic2NyaXB0aW9ucyh1c2VyKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBhY3RpdmVVc2VyU3Vic2NyaXB0aW9uU3RhdHVzSWQ6IHVzZXIuYWN0aXZlVXNlclN1YnNjcmlwdGlvblN0YXR1c0lkLFxuICAgICAgICAgICAgYWN0aXZlVXNlclN1YnNjcmlwdGlvblBsYW46IHVzZXIuYWN0aXZlVXNlclN1YnNjcmlwdGlvblBsYW4sXG4gICAgICAgICAgICBhY3RpdmVSZXR1cm5PcmRlcjogdGhpcy5pbmNsdWRlQWN0aXZlUmV0dXJuT3JkZXIodXNlcikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcm9sZXM6IHRoaXMuaW5jbHVkZVJvbGVzKHVzZXIpLFxuICAgICAgICAgICAgLy8gQWNjZXNzb3JzXG4gICAgICAgICAgICBvbkZpcnN0T3JkZXI6IHVzZXIub25GaXJzdE9yZGVyLFxuICAgICAgICAgICAgdG95Ym94VG9rZW5zOiB1c2VyLnRveWJveFRva2VucyxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxUb2tlbnM6IHVzZXIuYWRkaXRpb25hbFRva2VucyxcbiAgICAgICAgICAgIGF2YWlsYWJsZVRva2VuczogdXNlci5hdmFpbGFibGVUb2tlbnMsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25Ub2tlbnM6IHVzZXIuc3Vic2NyaXB0aW9uVG9rZW5zLFxuICAgICAgICAgICAgbWF4VG9rZW5zOiB1c2VyLm1heFRva2VucyxcbiAgICAgICAgICAgIGJhc2tldFF1YW50aXR5OiB1c2VyLmJhc2tldFF1YW50aXR5LFxuICAgICAgICAgICAgYWN0aXZlQmFza2V0VG90YWxUb2tlbnM6IHVzZXIuYWN0aXZlQmFza2V0VG90YWxUb2tlbnMsXG4gICAgICAgICAgICBiYWxhbmNlOiB1c2VyLmJhbGFuY2UsXG4gICAgICAgICAgICBjaGFuZ2VTdWJzY3JpcHRpb25TdGF0dXM6IHVzZXIuY2hhbmdlU3Vic2NyaXB0aW9uU3RhdHVzLFxuICAgICAgICAgICAgY2FuY2VsU3Vic2NyaXB0aW9uU3RhdHVzOiB1c2VyLmNhbmNlbFN1YnNjcmlwdGlvblN0YXR1cyxcbiAgICAgICAgICAgIG5vdGVzOiB1c2VyLm5vdGVzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBBcnJheTxPcmRlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdvcmRlcnMnLCBuZXcgT3JkZXJUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlU3RvY2sodXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFN0b2NrSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ3N0b2NrJywgbmV3IFN0b2NrVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFkZHJlc3Nlcyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8QWRkcmVzc0ludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdhZGRyZXNzZXMnLCBuZXcgQWRkcmVzc1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVUb3lib3godXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFB1cmNoYXNlU3RvY2tJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAndG95Ym94JywgbmV3IFB1cmNoYXNlU3RvY2tUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlTGlzdHModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFByb2R1Y3RMaXN0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2xpc3RzJywgbmV3IFByb2R1Y3RMaXN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJldHVybk9yZGVycyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8UmV0dXJuT3JkZXJJbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAncmV0dXJuT3JkZXJzJywgbmV3IFJldHVybk9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUFjdGl2ZVJldHVybk9yZGVyKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBSZXR1cm5PcmRlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXIsICdhY3RpdmVSZXR1cm5PcmRlcicsIG5ldyBSZXR1cm5PcmRlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSb2xlcyh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8Um9sZUludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHVzZXIsICdyb2xlcycsIG5ldyBSb2xlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZUJhc2tldCh1c2VyOiBVc2VySW50ZXJmYWNlKTogQXJyYXk8QmFza2V0SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb24odXNlciwgJ2FjdGl2ZUJhc2tldCcsIG5ldyBCYXNrZXRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG5cbiAgICBpbmNsdWRlVXNlclN1YnNjcmlwdGlvbnModXNlcjogVXNlckludGVyZmFjZSk6IEFycmF5PFVzZXJTdWJzY3JpcHRpb25JbnRlcmZhY2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAndXNlclN1YnNjcmlwdGlvbnMnLCBuZXcgVXNlclN1YnNjcmlwdGlvblRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==