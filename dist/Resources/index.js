"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("./Auth/auth"));

var _Search = _interopRequireDefault(require("./Search/Search"));

var _returnOrders = _interopRequireDefault(require("./Returns/returnOrders"));

var _users = _interopRequireDefault(require("./Users/users"));

var _orders = _interopRequireDefault(require("./Orders/orders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Auth: _auth["default"],
  Search: _Search["default"],
  ReturnOrders: _returnOrders["default"],
  Users: _users["default"],
  Orders: _orders["default"]
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvaW5kZXgudHMiXSwibmFtZXMiOlsiQXV0aCIsIlNlYXJjaCIsIlJldHVybk9yZGVycyIsIlVzZXJzIiwiT3JkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZTtBQUNYQSxFQUFBQSxJQUFJLEVBQUpBLGdCQURXO0FBRVhDLEVBQUFBLE1BQU0sRUFBTkEsa0JBRlc7QUFHWEMsRUFBQUEsWUFBWSxFQUFaQSx3QkFIVztBQUlYQyxFQUFBQSxLQUFLLEVBQUxBLGlCQUpXO0FBS1hDLEVBQUFBLE1BQU0sRUFBTkE7QUFMVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dGggZnJvbSAnLi9BdXRoL2F1dGgnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaC9TZWFyY2gnO1xuaW1wb3J0IFJldHVybk9yZGVycyBmcm9tICcuL1JldHVybnMvcmV0dXJuT3JkZXJzJztcbmltcG9ydCBVc2VycyBmcm9tICcuL1VzZXJzL3VzZXJzJztcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9PcmRlcnMvb3JkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIEF1dGgsXG4gICAgU2VhcmNoLFxuICAgIFJldHVybk9yZGVycyxcbiAgICBVc2VycyxcbiAgICBPcmRlcnMsXG59O1xuIl19