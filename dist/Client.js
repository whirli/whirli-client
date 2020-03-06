"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Resources = _interopRequireDefault(require("./Resources"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Client =
/*#__PURE__*/
function () {
  function Client(httpClient) {
    _classCallCheck(this, Client);

    _defineProperty(this, "search", void 0);

    _defineProperty(this, "auth", void 0);

    _defineProperty(this, "returnOrders", void 0);

    _defineProperty(this, "users", void 0);

    _defineProperty(this, "orders", void 0);

    _defineProperty(this, "orderLines", void 0);

    _defineProperty(this, "apiOptions", void 0);

    _defineProperty(this, "httpClient", void 0);

    this.apiOptions = {
      apiVersion: 'v1',
      baseUrl: '/api',
      debug: false,
      version: '0.0.1'
    };
    this.httpClient = httpClient;
    this.loadResources();
  }

  _createClass(Client, [{
    key: "getHttpClient",
    value: function getHttpClient() {
      return this.httpClient;
    }
  }, {
    key: "loadResources",
    value: function loadResources() {
      this.search = new _Resources["default"].Search(this);
      this.auth = new _Resources["default"].Auth(this);
      this.returnOrders = new _Resources["default"].ReturnOrders(this);
      this.users = new _Resources["default"].Users(this);
      this.orders = new _Resources["default"].Orders(this);
    }
  }, {
    key: "getBasePath",
    value: function getBasePath() {
      return "".concat(this.apiOptions.baseUrl, "/").concat(this.apiOptions.apiVersion);
    }
  }, {
    key: "setDebug",
    value: function setDebug(flag) {
      this.apiOptions.debug = flag;
    }
  }]);

  return Client;
}();

exports["default"] = Client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsImFwaU9wdGlvbnMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImxvYWRSZXNvdXJjZXMiLCJzZWFyY2giLCJyZXNvdXJjZXMiLCJTZWFyY2giLCJhdXRoIiwiQXV0aCIsInJldHVybk9yZGVycyIsIlJldHVybk9yZGVycyIsInVzZXJzIiwiVXNlcnMiLCJvcmRlcnMiLCJPcmRlcnMiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztJQVFxQkEsTTs7O0FBV2pCLGtCQUFZQyxVQUFaLEVBQW9DO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2hDLFNBQUtDLFVBQUwsR0FBa0I7QUFDZEMsTUFBQUEsVUFBVSxFQUFFLElBREU7QUFFZEMsTUFBQUEsT0FBTyxFQUFFLE1BRks7QUFHZEMsTUFBQUEsS0FBSyxFQUFFLEtBSE87QUFJZEMsTUFBQUEsT0FBTyxFQUFFO0FBSkssS0FBbEI7QUFNQSxTQUFLTCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtNLGFBQUw7QUFDSDs7OztvQ0FFMkI7QUFDeEIsYUFBTyxLQUFLTixVQUFaO0FBQ0g7OztvQ0FFcUI7QUFDbEIsV0FBS08sTUFBTCxHQUFjLElBQUlDLHNCQUFVQyxNQUFkLENBQXFCLElBQXJCLENBQWQ7QUFDQSxXQUFLQyxJQUFMLEdBQVksSUFBSUYsc0JBQVVHLElBQWQsQ0FBbUIsSUFBbkIsQ0FBWjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsSUFBSUosc0JBQVVLLFlBQWQsQ0FBMkIsSUFBM0IsQ0FBcEI7QUFDQSxXQUFLQyxLQUFMLEdBQWEsSUFBSU4sc0JBQVVPLEtBQWQsQ0FBb0IsSUFBcEIsQ0FBYjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxJQUFJUixzQkFBVVMsTUFBZCxDQUFxQixJQUFyQixDQUFkO0FBQ0g7OztrQ0FFcUI7QUFDbEIsdUJBQVUsS0FBS2hCLFVBQUwsQ0FBZ0JFLE9BQTFCLGNBQXFDLEtBQUtGLFVBQUwsQ0FBZ0JDLFVBQXJEO0FBQ0g7Ozs2QkFFUWdCLEksRUFBcUI7QUFDMUIsV0FBS2pCLFVBQUwsQ0FBZ0JHLEtBQWhCLEdBQXdCYyxJQUF4QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwaU9wdGlvbnMgZnJvbSAnLi9JbnRlcmZhY2VzL0FwaU9wdGlvbnMnO1xuaW1wb3J0IEh0dHBDbGllbnQgZnJvbSAnLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuaW1wb3J0IHJlc291cmNlcyBmcm9tICcuL1Jlc291cmNlcyc7XG5pbXBvcnQgQXV0aCBmcm9tICcuL1Jlc291cmNlcy9BdXRoL2F1dGgnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1Jlc291cmNlcy9TZWFyY2gvc2VhcmNoJztcbmltcG9ydCBSZXR1cm5PcmRlcnMgZnJvbSAnLi9SZXNvdXJjZXMvUmV0dXJucy9yZXR1cm5PcmRlcnMnO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vUmVzb3VyY2VzL1VzZXJzL3VzZXJzJztcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9SZXNvdXJjZXMvT3JkZXJzL29yZGVycyc7XG5pbXBvcnQgT3JkZXJMaW5lcyBmcm9tICcuL1Jlc291cmNlcy9PcmRlcnMvb3JkZXJMaW5lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudCB7XG4gICAgcHVibGljIHNlYXJjaCE6IFNlYXJjaDtcbiAgICBwdWJsaWMgYXV0aCE6IEF1dGg7XG4gICAgcHVibGljIHJldHVybk9yZGVycyE6IFJldHVybk9yZGVycztcbiAgICBwdWJsaWMgdXNlcnMhOiBVc2VycztcbiAgICBwdWJsaWMgb3JkZXJzITogT3JkZXJzO1xuICAgIHB1YmxpYyBvcmRlckxpbmVzITogT3JkZXJMaW5lcztcblxuICAgIHByb3RlY3RlZCBhcGlPcHRpb25zOiBBcGlPcHRpb25zO1xuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuICAgICAgICB0aGlzLmFwaU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhcGlWZXJzaW9uOiAndjEnLFxuICAgICAgICAgICAgYmFzZVVybDogJy9hcGknLFxuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0SHR0cENsaWVudCgpOiBIdHRwQ2xpZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudDtcbiAgICB9XG5cbiAgICBsb2FkUmVzb3VyY2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyByZXNvdXJjZXMuU2VhcmNoKHRoaXMpO1xuICAgICAgICB0aGlzLmF1dGggPSBuZXcgcmVzb3VyY2VzLkF1dGgodGhpcyk7XG4gICAgICAgIHRoaXMucmV0dXJuT3JkZXJzID0gbmV3IHJlc291cmNlcy5SZXR1cm5PcmRlcnModGhpcyk7XG4gICAgICAgIHRoaXMudXNlcnMgPSBuZXcgcmVzb3VyY2VzLlVzZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLm9yZGVycyA9IG5ldyByZXNvdXJjZXMuT3JkZXJzKHRoaXMpO1xuICAgIH1cblxuICAgIGdldEJhc2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmFwaU9wdGlvbnMuYmFzZVVybH0vJHt0aGlzLmFwaU9wdGlvbnMuYXBpVmVyc2lvbn1gO1xuICAgIH1cblxuICAgIHNldERlYnVnKGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcGlPcHRpb25zLmRlYnVnID0gZmxhZztcbiAgICB9XG59XG4iXX0=