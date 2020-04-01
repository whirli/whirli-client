"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Auth = _interopRequireDefault(require("./Resources/Auth/Auth"));

var _Users = _interopRequireDefault(require("./Resources/Users/Users"));

var _UserSubscriptions = _interopRequireDefault(require("./Resources/UserSubscriptions/UserSubscriptions"));

var _Subscriptions = _interopRequireDefault(require("./Resources/Subscriptions/Subscriptions"));

var _SubscriptionAddons = _interopRequireDefault(require("./Resources/SubscriptionAddons/SubscriptionAddons"));

var _Wacc = require("./Resources/Wacc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Client =
/*#__PURE__*/
function () {
  function Client(httpClient) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Client);

    _defineProperty(this, "auth", void 0);

    _defineProperty(this, "users", void 0);

    _defineProperty(this, "userSubscriptions", void 0);

    _defineProperty(this, "subscriptions", void 0);

    _defineProperty(this, "subscriptionAddons", void 0);

    _defineProperty(this, "wacc", void 0);

    _defineProperty(this, "httpClient", void 0);

    _defineProperty(this, "options", {
      apiVersion: 'v1',
      baseUrl: '/api',
      debug: false,
      version: '0.0.1',
      features: {
        trimTrailingSlash: true
      }
    });

    this.options = Object.assign(this.options, opts);
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
      this.auth = new _Auth["default"](this);
      this.users = new _Users["default"](this);
      this.userSubscriptions = new _UserSubscriptions["default"](this);
      this.subscriptions = new _Subscriptions["default"](this);
      this.subscriptionAddons = new _SubscriptionAddons["default"](this);
      this.wacc = (0, _Wacc.loadWaccResources)(this);
    }
  }, {
    key: "getBasePath",
    value: function getBasePath() {
      return "".concat(this.options.baseUrl, "/").concat(this.options.apiVersion);
    }
  }, {
    key: "features",
    value: function features() {
      return this.options.features;
    }
  }, {
    key: "setDebug",
    value: function setDebug(flag) {
      this.options.debug = flag;
    }
  }]);

  return Client;
}();

exports["default"] = Client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImF1dGgiLCJBdXRoIiwidXNlcnMiLCJVc2VycyIsInVzZXJTdWJzY3JpcHRpb25zIiwiVXNlclN1YnNjcmlwdGlvbnMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsInN1YnNjcmlwdGlvbkFkZG9ucyIsIlN1YnNjcmlwdGlvbkFkZG9ucyIsIndhY2MiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBbUJqQixrQkFBWUMsVUFBWixFQUE4RDtBQUFBLFFBQTFCQyxJQUEwQix1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLHFDQVZ4QjtBQUNsQ0MsTUFBQUEsVUFBVSxFQUFFLElBRHNCO0FBRWxDQyxNQUFBQSxPQUFPLEVBQUUsTUFGeUI7QUFHbENDLE1BQUFBLEtBQUssRUFBRSxLQUgyQjtBQUlsQ0MsTUFBQUEsT0FBTyxFQUFFLE9BSnlCO0FBS2xDQyxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsaUJBQWlCLEVBQUU7QUFEYjtBQUx3QixLQVV3Qjs7QUFDMUQsU0FBS0MsT0FBTCxHQUFlQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFLRixPQUFuQixFQUE0QlAsSUFBNUIsQ0FBZjtBQUNBLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS1csYUFBTDtBQUNIOzs7O29DQUUyQjtBQUN4QixhQUFPLEtBQUtYLFVBQVo7QUFDSDs7O29DQUVxQjtBQUNsQixXQUFLWSxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBUyxJQUFULENBQVo7QUFDQSxXQUFLQyxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBVSxJQUFWLENBQWI7QUFDQSxXQUFLQyxpQkFBTCxHQUF5QixJQUFJQyw2QkFBSixDQUFzQixJQUF0QixDQUF6QjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosQ0FBa0IsSUFBbEIsQ0FBckI7QUFDQSxXQUFLQyxrQkFBTCxHQUEwQixJQUFJQyw4QkFBSixDQUF1QixJQUF2QixDQUExQjtBQUNBLFdBQUtDLElBQUwsR0FBWSw2QkFBa0IsSUFBbEIsQ0FBWjtBQUNIOzs7a0NBRXFCO0FBQ2xCLHVCQUFVLEtBQUtkLE9BQUwsQ0FBYUwsT0FBdkIsY0FBa0MsS0FBS0ssT0FBTCxDQUFhTixVQUEvQztBQUNIOzs7K0JBRWdDO0FBQzdCLGFBQU8sS0FBS00sT0FBTCxDQUFhRixRQUFwQjtBQUNIOzs7NkJBRVFpQixJLEVBQXFCO0FBQzFCLFdBQUtmLE9BQUwsQ0FBYUosS0FBYixHQUFxQm1CLElBQXJCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnRPcHRpb25zLCBDbGllbnRBbGxPcHRpb25zLCBDbGllbnRGZWF0dXJlT3B0aW9ucyB9IGZyb20gJy4vSW50ZXJmYWNlcy9DbGllbnRPcHRpb25zJztcbmltcG9ydCBIdHRwQ2xpZW50IGZyb20gJy4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcbmltcG9ydCBBdXRoIGZyb20gJy4vUmVzb3VyY2VzL0F1dGgvQXV0aCc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMvVXNlcnMnO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25zIGZyb20gJy4vUmVzb3VyY2VzL1VzZXJTdWJzY3JpcHRpb25zL1VzZXJTdWJzY3JpcHRpb25zJztcbmltcG9ydCBTdWJzY3JpcHRpb25zIGZyb20gJy4vUmVzb3VyY2VzL1N1YnNjcmlwdGlvbnMvU3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uQWRkb25zIGZyb20gJy4vUmVzb3VyY2VzL1N1YnNjcmlwdGlvbkFkZG9ucy9TdWJzY3JpcHRpb25BZGRvbnMnO1xuaW1wb3J0IHsgbG9hZFdhY2NSZXNvdXJjZXMsIFdhY2NSZXNvdXJjZXMgfSBmcm9tICcuL1Jlc291cmNlcy9XYWNjJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50IHtcbiAgICBwdWJsaWMgYXV0aCE6IEF1dGg7XG4gICAgcHVibGljIHVzZXJzITogVXNlcnM7XG4gICAgcHVibGljIHVzZXJTdWJzY3JpcHRpb25zITogVXNlclN1YnNjcmlwdGlvbnM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnMhOiBTdWJzY3JpcHRpb25zO1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb25BZGRvbnMhOiBTdWJzY3JpcHRpb25BZGRvbnM7XG4gICAgcHVibGljIHdhY2MhOiBXYWNjUmVzb3VyY2VzO1xuXG4gICAgcHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IENsaWVudEFsbE9wdGlvbnMgPSB7XG4gICAgICAgIGFwaVZlcnNpb246ICd2MScsXG4gICAgICAgIGJhc2VVcmw6ICcvYXBpJyxcbiAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgICB2ZXJzaW9uOiAnMC4wLjEnLFxuICAgICAgICBmZWF0dXJlczoge1xuICAgICAgICAgICAgdHJpbVRyYWlsaW5nU2xhc2g6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIG9wdHM6IENsaWVudE9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0cyk7XG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XG4gICAgICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xuICAgIH1cblxuICAgIGdldEh0dHBDbGllbnQoKTogSHR0cENsaWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQ7XG4gICAgfVxuXG4gICAgbG9hZFJlc291cmNlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hdXRoID0gbmV3IEF1dGgodGhpcyk7XG4gICAgICAgIHRoaXMudXNlcnMgPSBuZXcgVXNlcnModGhpcyk7XG4gICAgICAgIHRoaXMudXNlclN1YnNjcmlwdGlvbnMgPSBuZXcgVXNlclN1YnNjcmlwdGlvbnModGhpcyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb25zKHRoaXMpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkFkZG9ucyA9IG5ldyBTdWJzY3JpcHRpb25BZGRvbnModGhpcyk7XG4gICAgICAgIHRoaXMud2FjYyA9IGxvYWRXYWNjUmVzb3VyY2VzKHRoaXMpO1xuICAgIH1cblxuICAgIGdldEJhc2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMuYmFzZVVybH0vJHt0aGlzLm9wdGlvbnMuYXBpVmVyc2lvbn1gO1xuICAgIH1cblxuICAgIGZlYXR1cmVzKCk6IENsaWVudEZlYXR1cmVPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mZWF0dXJlcztcbiAgICB9XG5cbiAgICBzZXREZWJ1ZyhmbGFnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kZWJ1ZyA9IGZsYWc7XG4gICAgfVxufVxuIl19