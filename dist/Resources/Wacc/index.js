"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadWaccResources = loadWaccResources;

var _Couriers = _interopRequireDefault(require("./Couriers/Couriers"));

var _Orders = _interopRequireDefault(require("./Orders/Orders"));

var _ReturnOrders = _interopRequireDefault(require("./ReturnOrders/ReturnOrders"));

var _ReturnOrderCollections = _interopRequireDefault(require("./ReturnOrders/ReturnOrderCollections"));

var _Search = _interopRequireDefault(require("./Search/Search"));

var _Users = _interopRequireDefault(require("./Users/Users"));

var _UserSubscriptions = _interopRequireDefault(require("./UserSubscriptions/UserSubscriptions"));

var _Gifts = _interopRequireDefault(require("./Gifts/Gifts"));

var _Products = _interopRequireDefault(require("./Products/Products"));

var _Stock = _interopRequireDefault(require("./Stock/Stock"));

var _ProductAssociations = _interopRequireDefault(require("./ProductAssociations/ProductAssociations"));

var _Assets = _interopRequireDefault(require("./Assets/Assets"));

var _ReturnOrderLines = _interopRequireDefault(require("./ReturnOrderLines/ReturnOrderLines"));

var _Roles = _interopRequireDefault(require("./Roles/Roles"));

var _OrderLines = _interopRequireDefault(require("./OrderLines/OrderLines"));

var _WaitSpots = _interopRequireDefault(require("./WaitSpots/WaitSpots"));

var _Referrals = _interopRequireDefault(require("./Referral/Referrals"));

var _Codes = _interopRequireDefault(require("./Codes/Codes"));

var _ShippingManifests = _interopRequireDefault(require("./Delivery/ShippingManifests"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function loadWaccResources(client) {
  return {
    couriers: new _Couriers["default"](client),
    orders: new _Orders["default"](client),
    orderLines: new _OrderLines["default"](client),
    returnOrders: new _ReturnOrders["default"](client),
    returnOrderCollections: new _ReturnOrderCollections["default"](client),
    returnOrderLines: new _ReturnOrderLines["default"](client),
    search: new _Search["default"](client),
    users: new _Users["default"](client),
    userSubscriptions: new _UserSubscriptions["default"](client),
    gifts: new _Gifts["default"](client),
    products: new _Products["default"](client),
    productAssociations: new _ProductAssociations["default"](client),
    assets: new _Assets["default"](client),
    stock: new _Stock["default"](client),
    roles: new _Roles["default"](client),
    waitSpots: new _WaitSpots["default"](client),
    referrals: new _Referrals["default"](client),
    codes: new _Codes["default"](client),
    shippingManifests: new _ShippingManifests["default"](client)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvV2FjYy9pbmRleC50cyJdLCJuYW1lcyI6WyJsb2FkV2FjY1Jlc291cmNlcyIsImNsaWVudCIsImNvdXJpZXJzIiwiV0FDQ0NvdXJpZXIiLCJvcmRlcnMiLCJXQUNDT3JkZXJzIiwib3JkZXJMaW5lcyIsIldBQ0NPcmRlckxpbmVzIiwicmV0dXJuT3JkZXJzIiwiV0FDQ1JldHVybk9yZGVycyIsInJldHVybk9yZGVyQ29sbGVjdGlvbnMiLCJXQUNDUmV0dXJuT3JkZXJDb2xsZWN0aW9ucyIsInJldHVybk9yZGVyTGluZXMiLCJXQUNDUmV0dXJuT3JkZXJMaW5lcyIsInNlYXJjaCIsIldBQ0NTZWFyY2giLCJ1c2VycyIsIldBQ0NVc2VycyIsInVzZXJTdWJzY3JpcHRpb25zIiwiV0FDQ1VzZXJTdWJzY3JpcHRpb25zIiwiZ2lmdHMiLCJXQUNDR2lmdHMiLCJwcm9kdWN0cyIsIldBQ0NQcm9kdWN0cyIsInByb2R1Y3RBc3NvY2lhdGlvbnMiLCJXQUNDUHJvZHVjdEFzc29jaWF0aW9ucyIsImFzc2V0cyIsIldBQ0NBc3NldHMiLCJzdG9jayIsIldBQ0NTdG9jayIsInJvbGVzIiwiV0FDQ1JvbGVzIiwid2FpdFNwb3RzIiwiV0FDQ1dhaXRTcG90cyIsInJlZmVycmFscyIsIldBQ0NSZWZlcnJhbCIsImNvZGVzIiwiV0FDQ0NvZGVzIiwic2hpcHBpbmdNYW5pZmVzdHMiLCJXYWNjU2hpcHBpbmdNYW5pZmVzdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQXdCTyxTQUFTQSxpQkFBVCxDQUEyQkMsTUFBM0IsRUFBMEQ7QUFDN0QsU0FBTztBQUNIQyxJQUFBQSxRQUFRLEVBQUUsSUFBSUMsb0JBQUosQ0FBZ0JGLE1BQWhCLENBRFA7QUFFSEcsSUFBQUEsTUFBTSxFQUFFLElBQUlDLGtCQUFKLENBQWVKLE1BQWYsQ0FGTDtBQUdISyxJQUFBQSxVQUFVLEVBQUUsSUFBSUMsc0JBQUosQ0FBbUJOLE1BQW5CLENBSFQ7QUFJSE8sSUFBQUEsWUFBWSxFQUFFLElBQUlDLHdCQUFKLENBQXFCUixNQUFyQixDQUpYO0FBS0hTLElBQUFBLHNCQUFzQixFQUFFLElBQUlDLGtDQUFKLENBQStCVixNQUEvQixDQUxyQjtBQU1IVyxJQUFBQSxnQkFBZ0IsRUFBRSxJQUFJQyw0QkFBSixDQUF5QlosTUFBekIsQ0FOZjtBQU9IYSxJQUFBQSxNQUFNLEVBQUUsSUFBSUMsa0JBQUosQ0FBZWQsTUFBZixDQVBMO0FBUUhlLElBQUFBLEtBQUssRUFBRSxJQUFJQyxpQkFBSixDQUFjaEIsTUFBZCxDQVJKO0FBU0hpQixJQUFBQSxpQkFBaUIsRUFBRSxJQUFJQyw2QkFBSixDQUEwQmxCLE1BQTFCLENBVGhCO0FBVUhtQixJQUFBQSxLQUFLLEVBQUUsSUFBSUMsaUJBQUosQ0FBY3BCLE1BQWQsQ0FWSjtBQVdIcUIsSUFBQUEsUUFBUSxFQUFFLElBQUlDLG9CQUFKLENBQWlCdEIsTUFBakIsQ0FYUDtBQVlIdUIsSUFBQUEsbUJBQW1CLEVBQUUsSUFBSUMsK0JBQUosQ0FBNEJ4QixNQUE1QixDQVpsQjtBQWFIeUIsSUFBQUEsTUFBTSxFQUFFLElBQUlDLGtCQUFKLENBQWUxQixNQUFmLENBYkw7QUFjSDJCLElBQUFBLEtBQUssRUFBRSxJQUFJQyxpQkFBSixDQUFjNUIsTUFBZCxDQWRKO0FBZUg2QixJQUFBQSxLQUFLLEVBQUUsSUFBSUMsaUJBQUosQ0FBYzlCLE1BQWQsQ0FmSjtBQWdCSCtCLElBQUFBLFNBQVMsRUFBRSxJQUFJQyxxQkFBSixDQUFrQmhDLE1BQWxCLENBaEJSO0FBaUJIaUMsSUFBQUEsU0FBUyxFQUFFLElBQUlDLHFCQUFKLENBQWlCbEMsTUFBakIsQ0FqQlI7QUFrQkhtQyxJQUFBQSxLQUFLLEVBQUUsSUFBSUMsaUJBQUosQ0FBY3BDLE1BQWQsQ0FsQko7QUFtQkhxQyxJQUFBQSxpQkFBaUIsRUFBRSxJQUFJQyw2QkFBSixDQUEwQnRDLE1BQTFCO0FBbkJoQixHQUFQO0FBcUJIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9DbGllbnQnO1xuaW1wb3J0IFdBQ0NDb3VyaWVyIGZyb20gJy4vQ291cmllcnMvQ291cmllcnMnO1xuaW1wb3J0IFdBQ0NPcmRlcnMgZnJvbSAnLi9PcmRlcnMvT3JkZXJzJztcbmltcG9ydCBXQUNDUmV0dXJuT3JkZXJzIGZyb20gJy4vUmV0dXJuT3JkZXJzL1JldHVybk9yZGVycyc7XG5pbXBvcnQgV0FDQ1JldHVybk9yZGVyQ29sbGVjdGlvbnMgZnJvbSAnLi9SZXR1cm5PcmRlcnMvUmV0dXJuT3JkZXJDb2xsZWN0aW9ucyc7XG5pbXBvcnQgV0FDQ1NlYXJjaCBmcm9tICcuL1NlYXJjaC9TZWFyY2gnO1xuaW1wb3J0IFdBQ0NVc2VycyBmcm9tICcuL1VzZXJzL1VzZXJzJztcbmltcG9ydCBXQUNDVXNlclN1YnNjcmlwdGlvbnMgZnJvbSAnLi9Vc2VyU3Vic2NyaXB0aW9ucy9Vc2VyU3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgV0FDQ0dpZnRzIGZyb20gJy4vR2lmdHMvR2lmdHMnO1xuaW1wb3J0IFdBQ0NQcm9kdWN0cyBmcm9tICcuL1Byb2R1Y3RzL1Byb2R1Y3RzJztcbmltcG9ydCBXQUNDU3RvY2sgZnJvbSAnLi9TdG9jay9TdG9jayc7XG5pbXBvcnQgV0FDQ1Byb2R1Y3RBc3NvY2lhdGlvbnMgZnJvbSAnLi9Qcm9kdWN0QXNzb2NpYXRpb25zL1Byb2R1Y3RBc3NvY2lhdGlvbnMnO1xuaW1wb3J0IFdBQ0NBc3NldHMgZnJvbSAnLi9Bc3NldHMvQXNzZXRzJztcbmltcG9ydCBXQUNDUmV0dXJuT3JkZXJMaW5lcyBmcm9tICcuL1JldHVybk9yZGVyTGluZXMvUmV0dXJuT3JkZXJMaW5lcyc7XG5pbXBvcnQgV0FDQ1JvbGVzIGZyb20gJy4vUm9sZXMvUm9sZXMnO1xuaW1wb3J0IFdBQ0NPcmRlckxpbmVzIGZyb20gJy4vT3JkZXJMaW5lcy9PcmRlckxpbmVzJztcbmltcG9ydCBXQUNDV2FpdFNwb3RzIGZyb20gJy4vV2FpdFNwb3RzL1dhaXRTcG90cyc7XG5pbXBvcnQgV0FDQ1JlZmVycmFsIGZyb20gJy4vUmVmZXJyYWwvUmVmZXJyYWxzJztcbmltcG9ydCBXQUNDQ29kZXMgZnJvbSAnLi9Db2Rlcy9Db2Rlcyc7XG5pbXBvcnQgV2FjY1NoaXBwaW5nTWFuaWZlc3RzIGZyb20gJy4vRGVsaXZlcnkvU2hpcHBpbmdNYW5pZmVzdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdhY2NSZXNvdXJjZXMge1xuICAgIGNvdXJpZXJzOiBXQUNDQ291cmllcjtcbiAgICBvcmRlcnM6IFdBQ0NPcmRlcnM7XG4gICAgb3JkZXJMaW5lczogV0FDQ09yZGVyTGluZXM7XG4gICAgcmV0dXJuT3JkZXJzOiBXQUNDUmV0dXJuT3JkZXJzO1xuICAgIHJldHVybk9yZGVyQ29sbGVjdGlvbnM6IFdBQ0NSZXR1cm5PcmRlckNvbGxlY3Rpb25zO1xuICAgIHJldHVybk9yZGVyTGluZXM6IFdBQ0NSZXR1cm5PcmRlckxpbmVzO1xuICAgIHNlYXJjaDogV0FDQ1NlYXJjaDtcbiAgICB1c2VyczogV0FDQ1VzZXJzO1xuICAgIHVzZXJTdWJzY3JpcHRpb25zOiBXQUNDVXNlclN1YnNjcmlwdGlvbnM7XG4gICAgZ2lmdHM6IFdBQ0NHaWZ0cztcbiAgICBwcm9kdWN0czogV0FDQ1Byb2R1Y3RzO1xuICAgIHByb2R1Y3RBc3NvY2lhdGlvbnM6IFdBQ0NQcm9kdWN0QXNzb2NpYXRpb25zO1xuICAgIGFzc2V0czogV0FDQ0Fzc2V0cztcbiAgICBzdG9jazogV0FDQ1N0b2NrO1xuICAgIHJvbGVzOiBXQUNDUm9sZXM7XG4gICAgd2FpdFNwb3RzOiBXQUNDV2FpdFNwb3RzO1xuICAgIHJlZmVycmFsczogV0FDQ1JlZmVycmFsO1xuICAgIGNvZGVzOiBXQUNDQ29kZXM7XG4gICAgc2hpcHBpbmdNYW5pZmVzdHM6IFdhY2NTaGlwcGluZ01hbmlmZXN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRXYWNjUmVzb3VyY2VzKGNsaWVudDogQ2xpZW50KTogV2FjY1Jlc291cmNlcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY291cmllcnM6IG5ldyBXQUNDQ291cmllcihjbGllbnQpLFxuICAgICAgICBvcmRlcnM6IG5ldyBXQUNDT3JkZXJzKGNsaWVudCksXG4gICAgICAgIG9yZGVyTGluZXM6IG5ldyBXQUNDT3JkZXJMaW5lcyhjbGllbnQpLFxuICAgICAgICByZXR1cm5PcmRlcnM6IG5ldyBXQUNDUmV0dXJuT3JkZXJzKGNsaWVudCksXG4gICAgICAgIHJldHVybk9yZGVyQ29sbGVjdGlvbnM6IG5ldyBXQUNDUmV0dXJuT3JkZXJDb2xsZWN0aW9ucyhjbGllbnQpLFxuICAgICAgICByZXR1cm5PcmRlckxpbmVzOiBuZXcgV0FDQ1JldHVybk9yZGVyTGluZXMoY2xpZW50KSxcbiAgICAgICAgc2VhcmNoOiBuZXcgV0FDQ1NlYXJjaChjbGllbnQpLFxuICAgICAgICB1c2VyczogbmV3IFdBQ0NVc2VycyhjbGllbnQpLFxuICAgICAgICB1c2VyU3Vic2NyaXB0aW9uczogbmV3IFdBQ0NVc2VyU3Vic2NyaXB0aW9ucyhjbGllbnQpLFxuICAgICAgICBnaWZ0czogbmV3IFdBQ0NHaWZ0cyhjbGllbnQpLFxuICAgICAgICBwcm9kdWN0czogbmV3IFdBQ0NQcm9kdWN0cyhjbGllbnQpLFxuICAgICAgICBwcm9kdWN0QXNzb2NpYXRpb25zOiBuZXcgV0FDQ1Byb2R1Y3RBc3NvY2lhdGlvbnMoY2xpZW50KSxcbiAgICAgICAgYXNzZXRzOiBuZXcgV0FDQ0Fzc2V0cyhjbGllbnQpLFxuICAgICAgICBzdG9jazogbmV3IFdBQ0NTdG9jayhjbGllbnQpLFxuICAgICAgICByb2xlczogbmV3IFdBQ0NSb2xlcyhjbGllbnQpLFxuICAgICAgICB3YWl0U3BvdHM6IG5ldyBXQUNDV2FpdFNwb3RzKGNsaWVudCksXG4gICAgICAgIHJlZmVycmFsczogbmV3IFdBQ0NSZWZlcnJhbChjbGllbnQpLFxuICAgICAgICBjb2RlczogbmV3IFdBQ0NDb2RlcyhjbGllbnQpLFxuICAgICAgICBzaGlwcGluZ01hbmlmZXN0czogbmV3IFdhY2NTaGlwcGluZ01hbmlmZXN0cyhjbGllbnQpLFxuICAgIH07XG59XG4iXX0=