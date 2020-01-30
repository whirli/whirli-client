"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("./Auth/auth"));

var _Search = _interopRequireDefault(require("./Search/Search"));

var _returnOrders = _interopRequireDefault(require("./Returns/returnOrders"));

var _users = _interopRequireDefault(require("./Users/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Auth: _auth["default"],
  Search: _Search["default"],
  ReturnOrders: _returnOrders["default"],
  Users: _users["default"]
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvaW5kZXgudHMiXSwibmFtZXMiOlsiQXV0aCIsIlNlYXJjaCIsIlJldHVybk9yZGVycyIsIlVzZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZTtBQUNYQSxFQUFBQSxJQUFJLEVBQUpBLGdCQURXO0FBRVhDLEVBQUFBLE1BQU0sRUFBTkEsa0JBRlc7QUFHWEMsRUFBQUEsWUFBWSxFQUFaQSx3QkFIVztBQUlYQyxFQUFBQSxLQUFLLEVBQUxBO0FBSlcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRoIGZyb20gJy4vQXV0aC9hdXRoJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gvU2VhcmNoJztcbmltcG9ydCBSZXR1cm5PcmRlcnMgZnJvbSAnLi9SZXR1cm5zL3JldHVybk9yZGVycyc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9Vc2Vycy91c2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBBdXRoLFxuICAgIFNlYXJjaCxcbiAgICBSZXR1cm5PcmRlcnMsXG4gICAgVXNlcnMsXG59O1xuIl19