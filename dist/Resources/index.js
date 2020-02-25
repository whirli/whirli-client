"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("./Auth/auth"));

var _search = _interopRequireDefault(require("./Search/search"));

var _returnOrders = _interopRequireDefault(require("./Returns/returnOrders"));

var _users = _interopRequireDefault(require("./Users/wacc/users"));

var _users2 = _interopRequireDefault(require("./Users/uwa/users"));

var _orders = _interopRequireDefault(require("./Orders/orders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Auth: _auth["default"],
  Search: _search["default"],
  ReturnOrders: _returnOrders["default"],
  WACCUsers: _users["default"],
  Users: _users2["default"],
  Orders: _orders["default"]
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvaW5kZXgudHMiXSwibmFtZXMiOlsiQXV0aCIsIlNlYXJjaCIsIlJldHVybk9yZGVycyIsIldBQ0NVc2VycyIsIlVzZXJzIiwiT3JkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZTtBQUNYQSxFQUFBQSxJQUFJLEVBQUpBLGdCQURXO0FBRVhDLEVBQUFBLE1BQU0sRUFBTkEsa0JBRlc7QUFHWEMsRUFBQUEsWUFBWSxFQUFaQSx3QkFIVztBQUlYQyxFQUFBQSxTQUFTLEVBQVRBLGlCQUpXO0FBS1hDLEVBQUFBLEtBQUssRUFBTEEsa0JBTFc7QUFNWEMsRUFBQUEsTUFBTSxFQUFOQTtBQU5XLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aCBmcm9tICcuL0F1dGgvYXV0aCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgUmV0dXJuT3JkZXJzIGZyb20gJy4vUmV0dXJucy9yZXR1cm5PcmRlcnMnO1xuaW1wb3J0IFdBQ0NVc2VycyBmcm9tICcuL1VzZXJzL3dhY2MvdXNlcnMnO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vVXNlcnMvdXdhL3VzZXJzJztcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9PcmRlcnMvb3JkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIEF1dGgsXG4gICAgU2VhcmNoLFxuICAgIFJldHVybk9yZGVycyxcbiAgICBXQUNDVXNlcnMsXG4gICAgVXNlcnMsXG4gICAgT3JkZXJzLFxufTtcbiJdfQ==