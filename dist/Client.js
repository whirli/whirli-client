"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Auth = _interopRequireDefault(require("./Resources/Auth/Auth"));

var _Users = _interopRequireDefault(require("./Resources/Users/Users"));

var _UserSubscriptions = _interopRequireDefault(require("./Resources/UserSubscriptions/UserSubscriptions"));

var _Basket = _interopRequireDefault(require("./Resources/Basket/Basket"));

var _BasketLine = _interopRequireDefault(require("./Resources/Basket/BasketLine"));

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

    _defineProperty(this, "basket", void 0);

    _defineProperty(this, "basketLine", void 0);

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
      this.basket = new _Basket["default"](this);
      this.basketLine = new _BasketLine["default"](this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImF1dGgiLCJBdXRoIiwidXNlcnMiLCJVc2VycyIsInVzZXJTdWJzY3JpcHRpb25zIiwiVXNlclN1YnNjcmlwdGlvbnMiLCJiYXNrZXQiLCJCYXNrZXQiLCJiYXNrZXRMaW5lIiwiQmFza2V0TGluZSIsInN1YnNjcmlwdGlvbnMiLCJTdWJzY3JpcHRpb25zIiwic3Vic2NyaXB0aW9uQWRkb25zIiwiU3Vic2NyaXB0aW9uQWRkb25zIiwid2FjYyIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFxQmpCLGtCQUFZQyxVQUFaLEVBQThEO0FBQUEsUUFBMUJDLElBQTBCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEscUNBVnhCO0FBQ2xDQyxNQUFBQSxVQUFVLEVBQUUsSUFEc0I7QUFFbENDLE1BQUFBLE9BQU8sRUFBRSxNQUZ5QjtBQUdsQ0MsTUFBQUEsS0FBSyxFQUFFLEtBSDJCO0FBSWxDQyxNQUFBQSxPQUFPLEVBQUUsT0FKeUI7QUFLbENDLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxpQkFBaUIsRUFBRTtBQURiO0FBTHdCLEtBVXdCOztBQUMxRCxTQUFLQyxPQUFMLEdBQWVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUtGLE9BQW5CLEVBQTRCUCxJQUE1QixDQUFmO0FBQ0EsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLVyxhQUFMO0FBQ0g7Ozs7b0NBRTJCO0FBQ3hCLGFBQU8sS0FBS1gsVUFBWjtBQUNIOzs7b0NBRXFCO0FBQ2xCLFdBQUtZLElBQUwsR0FBWSxJQUFJQyxnQkFBSixDQUFTLElBQVQsQ0FBWjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFVLElBQVYsQ0FBYjtBQUNBLFdBQUtDLGlCQUFMLEdBQXlCLElBQUlDLDZCQUFKLENBQXNCLElBQXRCLENBQXpCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVcsSUFBWCxDQUFkO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQixJQUFJQyxzQkFBSixDQUFlLElBQWYsQ0FBbEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLElBQUlDLHlCQUFKLENBQWtCLElBQWxCLENBQXJCO0FBQ0EsV0FBS0Msa0JBQUwsR0FBMEIsSUFBSUMsOEJBQUosQ0FBdUIsSUFBdkIsQ0FBMUI7QUFDQSxXQUFLQyxJQUFMLEdBQVksNkJBQWtCLElBQWxCLENBQVo7QUFDSDs7O2tDQUVxQjtBQUNsQix1QkFBVSxLQUFLbEIsT0FBTCxDQUFhTCxPQUF2QixjQUFrQyxLQUFLSyxPQUFMLENBQWFOLFVBQS9DO0FBQ0g7OzsrQkFFZ0M7QUFDN0IsYUFBTyxLQUFLTSxPQUFMLENBQWFGLFFBQXBCO0FBQ0g7Ozs2QkFFUXFCLEksRUFBcUI7QUFDMUIsV0FBS25CLE9BQUwsQ0FBYUosS0FBYixHQUFxQnVCLElBQXJCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnRPcHRpb25zLCBDbGllbnRBbGxPcHRpb25zLCBDbGllbnRGZWF0dXJlT3B0aW9ucyB9IGZyb20gJy4vSW50ZXJmYWNlcy9DbGllbnRPcHRpb25zJztcbmltcG9ydCBIdHRwQ2xpZW50IGZyb20gJy4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcbmltcG9ydCBBdXRoIGZyb20gJy4vUmVzb3VyY2VzL0F1dGgvQXV0aCc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMvVXNlcnMnO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25zIGZyb20gJy4vUmVzb3VyY2VzL1VzZXJTdWJzY3JpcHRpb25zL1VzZXJTdWJzY3JpcHRpb25zJztcbmltcG9ydCBCYXNrZXQgZnJvbSAnLi9SZXNvdXJjZXMvQmFza2V0L0Jhc2tldCc7XG5pbXBvcnQgQmFza2V0TGluZSBmcm9tICcuL1Jlc291cmNlcy9CYXNrZXQvQmFza2V0TGluZSc7XG5pbXBvcnQgU3Vic2NyaXB0aW9ucyBmcm9tICcuL1Jlc291cmNlcy9TdWJzY3JpcHRpb25zL1N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkFkZG9ucyBmcm9tICcuL1Jlc291cmNlcy9TdWJzY3JpcHRpb25BZGRvbnMvU3Vic2NyaXB0aW9uQWRkb25zJztcbmltcG9ydCB7IGxvYWRXYWNjUmVzb3VyY2VzLCBXYWNjUmVzb3VyY2VzIH0gZnJvbSAnLi9SZXNvdXJjZXMvV2FjYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudCB7XG4gICAgcHVibGljIGF1dGghOiBBdXRoO1xuICAgIHB1YmxpYyB1c2VycyE6IFVzZXJzO1xuICAgIHB1YmxpYyB1c2VyU3Vic2NyaXB0aW9ucyE6IFVzZXJTdWJzY3JpcHRpb25zO1xuICAgIHB1YmxpYyBiYXNrZXQhOiBCYXNrZXQ7XG4gICAgcHVibGljIGJhc2tldExpbmUhOiBCYXNrZXRMaW5lO1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb25zITogU3Vic2NyaXB0aW9ucztcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9uQWRkb25zITogU3Vic2NyaXB0aW9uQWRkb25zO1xuICAgIHB1YmxpYyB3YWNjITogV2FjY1Jlc291cmNlcztcblxuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvcHRpb25zOiBDbGllbnRBbGxPcHRpb25zID0ge1xuICAgICAgICBhcGlWZXJzaW9uOiAndjEnLFxuICAgICAgICBiYXNlVXJsOiAnL2FwaScsXG4gICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICAgIHRyaW1UcmFpbGluZ1NsYXNoOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBvcHRzOiBDbGllbnRPcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdHMpO1xuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xuICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcbiAgICB9XG5cbiAgICBnZXRIdHRwQ2xpZW50KCk6IEh0dHBDbGllbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50O1xuICAgIH1cblxuICAgIGxvYWRSZXNvdXJjZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXV0aCA9IG5ldyBBdXRoKHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXJzID0gbmV3IFVzZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb25zID0gbmV3IFVzZXJTdWJzY3JpcHRpb25zKHRoaXMpO1xuICAgICAgICB0aGlzLmJhc2tldCA9IG5ldyBCYXNrZXQodGhpcyk7XG4gICAgICAgIHRoaXMuYmFza2V0TGluZSA9IG5ldyBCYXNrZXRMaW5lKHRoaXMpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9ucyh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25BZGRvbnMgPSBuZXcgU3Vic2NyaXB0aW9uQWRkb25zKHRoaXMpO1xuICAgICAgICB0aGlzLndhY2MgPSBsb2FkV2FjY1Jlc291cmNlcyh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRCYXNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLmJhc2VVcmx9LyR7dGhpcy5vcHRpb25zLmFwaVZlcnNpb259YDtcbiAgICB9XG5cbiAgICBmZWF0dXJlcygpOiBDbGllbnRGZWF0dXJlT3B0aW9ucyB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmVhdHVyZXM7XG4gICAgfVxuXG4gICAgc2V0RGVidWcoZmxhZzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGVidWcgPSBmbGFnO1xuICAgIH1cbn1cbiJdfQ==