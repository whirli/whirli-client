"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("./Auth/auth"));

var _orders = _interopRequireDefault(require("./Orders/orders"));

var _products = _interopRequireDefault(require("./Products/products"));

var _returnOrders = _interopRequireDefault(require("./Returns/returnOrders"));

var _search = _interopRequireDefault(require("./Search/search"));

var _users = _interopRequireDefault(require("./Users/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Auth: _auth["default"],
  Orders: _orders["default"],
  Products: _products["default"],
  ReturnOrders: _returnOrders["default"],
  Search: _search["default"],
  Users: _users["default"]
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvaW5kZXgudHMiXSwibmFtZXMiOlsiQXV0aCIsIk9yZGVycyIsIlByb2R1Y3RzIiwiUmV0dXJuT3JkZXJzIiwiU2VhcmNoIiwiVXNlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztlQUVlO0FBQ1hBLEVBQUFBLElBQUksRUFBSkEsZ0JBRFc7QUFFWEMsRUFBQUEsTUFBTSxFQUFOQSxrQkFGVztBQUdYQyxFQUFBQSxRQUFRLEVBQVJBLG9CQUhXO0FBSVhDLEVBQUFBLFlBQVksRUFBWkEsd0JBSlc7QUFLWEMsRUFBQUEsTUFBTSxFQUFOQSxrQkFMVztBQU1YQyxFQUFBQSxLQUFLLEVBQUxBO0FBTlcsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRoIGZyb20gJy4vQXV0aC9hdXRoJztcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9PcmRlcnMvb3JkZXJzJztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Byb2R1Y3RzL3Byb2R1Y3RzJztcbmltcG9ydCBSZXR1cm5PcmRlcnMgZnJvbSAnLi9SZXR1cm5zL3JldHVybk9yZGVycyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9Vc2Vycy91c2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBBdXRoLFxuICAgIE9yZGVycyxcbiAgICBQcm9kdWN0cyxcbiAgICBSZXR1cm5PcmRlcnMsXG4gICAgU2VhcmNoLFxuICAgIFVzZXJzLFxufTtcbiJdfQ==