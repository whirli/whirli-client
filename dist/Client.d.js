"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Client = function Client() {
  _classCallCheck(this, Client);

  _defineProperty(this, "auth", void 0);

  _defineProperty(this, "orders", void 0);

  _defineProperty(this, "products", void 0);

  _defineProperty(this, "returnOrders", void 0);

  _defineProperty(this, "search", void 0);

  _defineProperty(this, "users", void 0);

  _defineProperty(this, "wacc", void 0);

  _defineProperty(this, "apiOptions", void 0);

  _defineProperty(this, "httpClient", void 0);
};

exports["default"] = Client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudC5kLnRzIl0sIm5hbWVzIjpbIkNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFvQnFCQSxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwaU9wdGlvbnMgZnJvbSAnLi9JbnRlcmZhY2VzL0FwaU9wdGlvbnMnO1xuaW1wb3J0IEh0dHBDbGllbnQgZnJvbSAnLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9SZXNvdXJjZXMvd2FjYy9BdXRoL2F1dGgnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1Jlc291cmNlcy93YWNjL1NlYXJjaC9zZWFyY2gnO1xuaW1wb3J0IFJldHVybk9yZGVycyBmcm9tICcuL1Jlc291cmNlcy93YWNjL1JldHVybnMvcmV0dXJuT3JkZXJzJztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Jlc291cmNlcy9Qcm9kdWN0cy9wcm9kdWN0cyc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMvdXNlcnMnO1xuaW1wb3J0IE9yZGVycyBmcm9tICcuL1Jlc291cmNlcy93YWNjL09yZGVycy9vcmRlcnMnO1xuaW1wb3J0IFdBQ0NBdXRoIGZyb20gJy4vUmVzb3VyY2VzL3dhY2MvQXV0aC9hdXRoJztcbmltcG9ydCBXQUNDU2VhcmNoIGZyb20gJy4vUmVzb3VyY2VzL3dhY2MvU2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgV0FDQ1JldHVybk9yZGVycyBmcm9tICcuL1Jlc291cmNlcy93YWNjL1JldHVybnMvcmV0dXJuT3JkZXJzJztcbmltcG9ydCBXQUNDVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvd2FjYy9Vc2Vycy91c2Vycyc7XG5pbXBvcnQgV0FDQ09yZGVycyBmcm9tICcuL1Jlc291cmNlcy93YWNjL09yZGVycy9vcmRlcnMnO1xuaW50ZXJmYWNlIFdBQ0Mge1xuICAgIHVzZXJzOiBXQUNDVXNlcnM7XG4gICAgYXV0aDogV0FDQ0F1dGg7XG4gICAgb3JkZXJzOiBXQUNDT3JkZXJzO1xuICAgIHJldHVybk9yZGVyczogV0FDQ1JldHVybk9yZGVycztcbiAgICBzZWFyY2g6IFdBQ0NTZWFyY2g7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQge1xuICAgIGF1dGg6IEF1dGg7XG4gICAgb3JkZXJzOiBPcmRlcnM7XG4gICAgcHJvZHVjdHM6IFByb2R1Y3RzO1xuICAgIHJldHVybk9yZGVyczogUmV0dXJuT3JkZXJzO1xuICAgIHNlYXJjaDogU2VhcmNoO1xuICAgIHVzZXJzOiBVc2VycztcbiAgICB3YWNjOiBXQUNDO1xuICAgIHByb3RlY3RlZCBhcGlPcHRpb25zOiBBcGlPcHRpb25zO1xuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpO1xuICAgIGdldEh0dHBDbGllbnQoKTogSHR0cENsaWVudDtcbiAgICBsb2FkUmVzb3VyY2VzKCk6IHZvaWQ7XG4gICAgZ2V0QmFzZVBhdGgoKTogc3RyaW5nO1xuICAgIHNldERlYnVnKGZsYWc6IGJvb2xlYW4pOiB2b2lkO1xufVxuZXhwb3J0IHt9O1xuIl19