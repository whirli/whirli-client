"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("./Auth/auth"));

var _search = _interopRequireDefault(require("./Search/search"));

var _products = _interopRequireDefault(require("./Products/products"));

var _returnOrders = _interopRequireDefault(require("./Returns/returnOrders"));

var _users = _interopRequireDefault(require("./Users/users"));

var _orders = _interopRequireDefault(require("./Orders/orders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(client) {
  return {
    auth: new _auth["default"](client),
    orders: new _orders["default"](client),
    products: new _products["default"](client),
    returnOrders: new _returnOrders["default"](client),
    search: new _search["default"](client),
    users: new _users["default"](client)
  };
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXNvdXJjZXMvd2FjYy9pbmRleC50cyJdLCJuYW1lcyI6WyJjbGllbnQiLCJhdXRoIiwiV0FDQ0F1dGgiLCJvcmRlcnMiLCJXQUNDT3JkZXJzIiwicHJvZHVjdHMiLCJXQUNDUHJvZHVjdHMiLCJyZXR1cm5PcmRlcnMiLCJXQUNDUmV0dXJuT3JkZXJzIiwic2VhcmNoIiwiV0FDQ1NlYXJjaCIsInVzZXJzIiwiV0FDQ1VzZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7ZUFZZSxrQkFBQ0EsTUFBRDtBQUFBLFNBQTJCO0FBQ3RDQyxJQUFBQSxJQUFJLEVBQUUsSUFBSUMsZ0JBQUosQ0FBYUYsTUFBYixDQURnQztBQUV0Q0csSUFBQUEsTUFBTSxFQUFFLElBQUlDLGtCQUFKLENBQWVKLE1BQWYsQ0FGOEI7QUFHdENLLElBQUFBLFFBQVEsRUFBRSxJQUFJQyxvQkFBSixDQUFpQk4sTUFBakIsQ0FINEI7QUFJdENPLElBQUFBLFlBQVksRUFBRSxJQUFJQyx3QkFBSixDQUFxQlIsTUFBckIsQ0FKd0I7QUFLdENTLElBQUFBLE1BQU0sRUFBRSxJQUFJQyxrQkFBSixDQUFlVixNQUFmLENBTDhCO0FBTXRDVyxJQUFBQSxLQUFLLEVBQUUsSUFBSUMsaUJBQUosQ0FBY1osTUFBZDtBQU4rQixHQUEzQjtBQUFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV0FDQ0F1dGggZnJvbSAnLi9BdXRoL2F1dGgnO1xuaW1wb3J0IFdBQ0NTZWFyY2ggZnJvbSAnLi9TZWFyY2gvc2VhcmNoJztcbmltcG9ydCBXQUNDUHJvZHVjdHMgZnJvbSAnLi9Qcm9kdWN0cy9wcm9kdWN0cyc7XG5pbXBvcnQgV0FDQ1JldHVybk9yZGVycyBmcm9tICcuL1JldHVybnMvcmV0dXJuT3JkZXJzJztcbmltcG9ydCBXQUNDVXNlcnMgZnJvbSAnLi9Vc2Vycy91c2Vycyc7XG5pbXBvcnQgV0FDQ09yZGVycyBmcm9tICcuL09yZGVycy9vcmRlcnMnO1xuaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9DbGllbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdBQ0Mge1xuICAgIHVzZXJzOiBXQUNDVXNlcnM7XG4gICAgYXV0aDogV0FDQ0F1dGg7XG4gICAgcHJvZHVjdHM6IFdBQ0NQcm9kdWN0cztcbiAgICBvcmRlcnM6IFdBQ0NPcmRlcnM7XG4gICAgcmV0dXJuT3JkZXJzOiBXQUNDUmV0dXJuT3JkZXJzO1xuICAgIHNlYXJjaDogV0FDQ1NlYXJjaDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGNsaWVudDogQ2xpZW50KTogV0FDQyA9PiAoe1xuICAgIGF1dGg6IG5ldyBXQUNDQXV0aChjbGllbnQpLFxuICAgIG9yZGVyczogbmV3IFdBQ0NPcmRlcnMoY2xpZW50KSxcbiAgICBwcm9kdWN0czogbmV3IFdBQ0NQcm9kdWN0cyhjbGllbnQpLFxuICAgIHJldHVybk9yZGVyczogbmV3IFdBQ0NSZXR1cm5PcmRlcnMoY2xpZW50KSxcbiAgICBzZWFyY2g6IG5ldyBXQUNDU2VhcmNoKGNsaWVudCksXG4gICAgdXNlcnM6IG5ldyBXQUNDVXNlcnMoY2xpZW50KSxcbn0pO1xuIl19