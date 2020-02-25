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

    _defineProperty(this, "WACCUsers", void 0);

    _defineProperty(this, "orders", void 0);

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
      this.WACCUsers = new _Resources["default"].WACCUsers(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsImFwaU9wdGlvbnMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImxvYWRSZXNvdXJjZXMiLCJzZWFyY2giLCJyZXNvdXJjZXMiLCJTZWFyY2giLCJhdXRoIiwiQXV0aCIsInJldHVybk9yZGVycyIsIlJldHVybk9yZGVycyIsIldBQ0NVc2VycyIsInVzZXJzIiwiVXNlcnMiLCJvcmRlcnMiLCJPcmRlcnMiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztJQVFxQkEsTTs7O0FBV2pCLGtCQUFZQyxVQUFaLEVBQW9DO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2hDLFNBQUtDLFVBQUwsR0FBa0I7QUFDZEMsTUFBQUEsVUFBVSxFQUFFLElBREU7QUFFZEMsTUFBQUEsT0FBTyxFQUFFLE1BRks7QUFHZEMsTUFBQUEsS0FBSyxFQUFFLEtBSE87QUFJZEMsTUFBQUEsT0FBTyxFQUFFO0FBSkssS0FBbEI7QUFNQSxTQUFLTCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtNLGFBQUw7QUFDSDs7OztvQ0FFMkI7QUFDeEIsYUFBTyxLQUFLTixVQUFaO0FBQ0g7OztvQ0FFcUI7QUFDbEIsV0FBS08sTUFBTCxHQUFjLElBQUlDLHNCQUFVQyxNQUFkLENBQXFCLElBQXJCLENBQWQ7QUFDQSxXQUFLQyxJQUFMLEdBQVksSUFBSUYsc0JBQVVHLElBQWQsQ0FBbUIsSUFBbkIsQ0FBWjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsSUFBSUosc0JBQVVLLFlBQWQsQ0FBMkIsSUFBM0IsQ0FBcEI7QUFDQSxXQUFLQyxTQUFMLEdBQWlCLElBQUlOLHNCQUFVTSxTQUFkLENBQXdCLElBQXhCLENBQWpCO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLElBQUlQLHNCQUFVUSxLQUFkLENBQW9CLElBQXBCLENBQWI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsSUFBSVQsc0JBQVVVLE1BQWQsQ0FBcUIsSUFBckIsQ0FBZDtBQUNIOzs7a0NBRXFCO0FBQ2xCLHVCQUFVLEtBQUtqQixVQUFMLENBQWdCRSxPQUExQixjQUFxQyxLQUFLRixVQUFMLENBQWdCQyxVQUFyRDtBQUNIOzs7NkJBRVFpQixJLEVBQXFCO0FBQzFCLFdBQUtsQixVQUFMLENBQWdCRyxLQUFoQixHQUF3QmUsSUFBeEI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcGlPcHRpb25zIGZyb20gJy4vSW50ZXJmYWNlcy9BcGlPcHRpb25zJztcbmltcG9ydCBIdHRwQ2xpZW50IGZyb20gJy4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcbmltcG9ydCByZXNvdXJjZXMgZnJvbSAnLi9SZXNvdXJjZXMnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9SZXNvdXJjZXMvQXV0aC9hdXRoJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9SZXNvdXJjZXMvU2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgUmV0dXJuT3JkZXJzIGZyb20gJy4vUmVzb3VyY2VzL1JldHVybnMvcmV0dXJuT3JkZXJzJztcbmltcG9ydCBXQUNDVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMvd2FjYy91c2Vycyc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMvdXdhL3VzZXJzJztcbmltcG9ydCBPcmRlcnMgZnJvbSAnLi9SZXNvdXJjZXMvT3JkZXJzL29yZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudCB7XG4gICAgcHVibGljIHNlYXJjaCE6IFNlYXJjaDtcbiAgICBwdWJsaWMgYXV0aCE6IEF1dGg7XG4gICAgcHVibGljIHJldHVybk9yZGVycyE6IFJldHVybk9yZGVycztcbiAgICBwdWJsaWMgdXNlcnMhOiBVc2VycztcbiAgICBwdWJsaWMgV0FDQ1VzZXJzITogV0FDQ1VzZXJzO1xuICAgIHB1YmxpYyBvcmRlcnMhOiBPcmRlcnM7XG5cbiAgICBwcm90ZWN0ZWQgYXBpT3B0aW9uczogQXBpT3B0aW9ucztcbiAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgdGhpcy5hcGlPcHRpb25zID0ge1xuICAgICAgICAgICAgYXBpVmVyc2lvbjogJ3YxJyxcbiAgICAgICAgICAgIGJhc2VVcmw6ICcvYXBpJyxcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjAuMScsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XG4gICAgICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xuICAgIH1cblxuICAgIGdldEh0dHBDbGllbnQoKTogSHR0cENsaWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQ7XG4gICAgfVxuXG4gICAgbG9hZFJlc291cmNlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgcmVzb3VyY2VzLlNlYXJjaCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdXRoID0gbmV3IHJlc291cmNlcy5BdXRoKHRoaXMpO1xuICAgICAgICB0aGlzLnJldHVybk9yZGVycyA9IG5ldyByZXNvdXJjZXMuUmV0dXJuT3JkZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLldBQ0NVc2VycyA9IG5ldyByZXNvdXJjZXMuV0FDQ1VzZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXJzID0gbmV3IHJlc291cmNlcy5Vc2Vycyh0aGlzKTtcbiAgICAgICAgdGhpcy5vcmRlcnMgPSBuZXcgcmVzb3VyY2VzLk9yZGVycyh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRCYXNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5hcGlPcHRpb25zLmJhc2VVcmx9LyR7dGhpcy5hcGlPcHRpb25zLmFwaVZlcnNpb259YDtcbiAgICB9XG5cbiAgICBzZXREZWJ1ZyhmbGFnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBpT3B0aW9ucy5kZWJ1ZyA9IGZsYWc7XG4gICAgfVxufVxuIl19