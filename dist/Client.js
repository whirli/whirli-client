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

    _defineProperty(this, "auth", void 0);

    _defineProperty(this, "orders", void 0);

    _defineProperty(this, "products", void 0);

    _defineProperty(this, "returnOrders", void 0);

    _defineProperty(this, "search", void 0);

    _defineProperty(this, "users", void 0);

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
      this.auth = new _Resources["default"].Auth(this);
      this.orders = new _Resources["default"].Orders(this);
      this.products = new _Resources["default"].Products(this);
      this.returnOrders = new _Resources["default"].ReturnOrders(this);
      this.search = new _Resources["default"].Search(this);
      this.users = new _Resources["default"].Users(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsImFwaU9wdGlvbnMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImxvYWRSZXNvdXJjZXMiLCJhdXRoIiwicmVzb3VyY2VzIiwiQXV0aCIsIm9yZGVycyIsIk9yZGVycyIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJyZXR1cm5PcmRlcnMiLCJSZXR1cm5PcmRlcnMiLCJzZWFyY2giLCJTZWFyY2giLCJ1c2VycyIsIlVzZXJzIiwiZmxhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFRcUJBLE07OztBQVdqQixrQkFBWUMsVUFBWixFQUFvQztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNoQyxTQUFLQyxVQUFMLEdBQWtCO0FBQ2RDLE1BQUFBLFVBQVUsRUFBRSxJQURFO0FBRWRDLE1BQUFBLE9BQU8sRUFBRSxNQUZLO0FBR2RDLE1BQUFBLEtBQUssRUFBRSxLQUhPO0FBSWRDLE1BQUFBLE9BQU8sRUFBRTtBQUpLLEtBQWxCO0FBTUEsU0FBS0wsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLTSxhQUFMO0FBQ0g7Ozs7b0NBRTJCO0FBQ3hCLGFBQU8sS0FBS04sVUFBWjtBQUNIOzs7b0NBRXFCO0FBQ2xCLFdBQUtPLElBQUwsR0FBWSxJQUFJQyxzQkFBVUMsSUFBZCxDQUFtQixJQUFuQixDQUFaO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLElBQUlGLHNCQUFVRyxNQUFkLENBQXFCLElBQXJCLENBQWQ7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLElBQUlKLHNCQUFVSyxRQUFkLENBQXVCLElBQXZCLENBQWhCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixJQUFJTixzQkFBVU8sWUFBZCxDQUEyQixJQUEzQixDQUFwQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxJQUFJUixzQkFBVVMsTUFBZCxDQUFxQixJQUFyQixDQUFkO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLElBQUlWLHNCQUFVVyxLQUFkLENBQW9CLElBQXBCLENBQWI7QUFDSDs7O2tDQUVxQjtBQUNsQix1QkFBVSxLQUFLbEIsVUFBTCxDQUFnQkUsT0FBMUIsY0FBcUMsS0FBS0YsVUFBTCxDQUFnQkMsVUFBckQ7QUFDSDs7OzZCQUVRa0IsSSxFQUFxQjtBQUMxQixXQUFLbkIsVUFBTCxDQUFnQkcsS0FBaEIsR0FBd0JnQixJQUF4QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwaU9wdGlvbnMgZnJvbSAnLi9JbnRlcmZhY2VzL0FwaU9wdGlvbnMnO1xuaW1wb3J0IEh0dHBDbGllbnQgZnJvbSAnLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuaW1wb3J0IHJlc291cmNlcyBmcm9tICcuL1Jlc291cmNlcyc7XG5pbXBvcnQgQXV0aCBmcm9tICcuL1Jlc291cmNlcy9BdXRoL2F1dGgnO1xuaW1wb3J0IE9yZGVycyBmcm9tICcuL1Jlc291cmNlcy9PcmRlcnMvb3JkZXJzJztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Jlc291cmNlcy9Qcm9kdWN0cy9wcm9kdWN0cyc7XG5pbXBvcnQgUmV0dXJuT3JkZXJzIGZyb20gJy4vUmVzb3VyY2VzL1JldHVybnMvcmV0dXJuT3JkZXJzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9SZXNvdXJjZXMvU2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMvdXNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQge1xuICAgIHB1YmxpYyBhdXRoITogQXV0aDtcbiAgICBwdWJsaWMgb3JkZXJzITogT3JkZXJzO1xuICAgIHB1YmxpYyBwcm9kdWN0cyE6IFByb2R1Y3RzO1xuICAgIHB1YmxpYyByZXR1cm5PcmRlcnMhOiBSZXR1cm5PcmRlcnM7XG4gICAgcHVibGljIHNlYXJjaCE6IFNlYXJjaDtcbiAgICBwdWJsaWMgdXNlcnMhOiBVc2VycztcblxuICAgIHByb3RlY3RlZCBhcGlPcHRpb25zOiBBcGlPcHRpb25zO1xuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuICAgICAgICB0aGlzLmFwaU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhcGlWZXJzaW9uOiAndjEnLFxuICAgICAgICAgICAgYmFzZVVybDogJy9hcGknLFxuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0SHR0cENsaWVudCgpOiBIdHRwQ2xpZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudDtcbiAgICB9XG5cbiAgICBsb2FkUmVzb3VyY2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGggPSBuZXcgcmVzb3VyY2VzLkF1dGgodGhpcyk7XG4gICAgICAgIHRoaXMub3JkZXJzID0gbmV3IHJlc291cmNlcy5PcmRlcnModGhpcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBuZXcgcmVzb3VyY2VzLlByb2R1Y3RzKHRoaXMpO1xuICAgICAgICB0aGlzLnJldHVybk9yZGVycyA9IG5ldyByZXNvdXJjZXMuUmV0dXJuT3JkZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyByZXNvdXJjZXMuU2VhcmNoKHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXJzID0gbmV3IHJlc291cmNlcy5Vc2Vycyh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRCYXNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5hcGlPcHRpb25zLmJhc2VVcmx9LyR7dGhpcy5hcGlPcHRpb25zLmFwaVZlcnNpb259YDtcbiAgICB9XG5cbiAgICBzZXREZWJ1ZyhmbGFnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBpT3B0aW9ucy5kZWJ1ZyA9IGZsYWc7XG4gICAgfVxufVxuIl19