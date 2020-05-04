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

var _Codes = _interopRequireDefault(require("./Resources/Codes/Codes"));

var _Toybox = _interopRequireDefault(require("./Resources/Toybox/Toybox"));

var _Wacc = require("./Resources/Wacc");

var _Guest = require("./Resources/Guest");

var _User = require("./Resources/User");

var _Products = _interopRequireDefault(require("./Resources/Products/Products"));

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

    _defineProperty(this, "codes", void 0);

    _defineProperty(this, "toybox", void 0);

    _defineProperty(this, "products", void 0);

    _defineProperty(this, "wacc", void 0);

    _defineProperty(this, "guest", void 0);

    _defineProperty(this, "user", void 0);

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
      this.codes = new _Codes["default"](this);
      this.toybox = new _Toybox["default"](this);
      this.products = new _Products["default"](this);
      this.wacc = (0, _Wacc.loadWaccResources)(this);
      this.guest = (0, _Guest.loadGuestResources)(this);
      this.user = (0, _User.loadUserResources)(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImF1dGgiLCJBdXRoIiwidXNlcnMiLCJVc2VycyIsInVzZXJTdWJzY3JpcHRpb25zIiwiVXNlclN1YnNjcmlwdGlvbnMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsInN1YnNjcmlwdGlvbkFkZG9ucyIsIlN1YnNjcmlwdGlvbkFkZG9ucyIsImNvZGVzIiwiQ29kZXMiLCJ0b3lib3giLCJUb3lib3giLCJwcm9kdWN0cyIsIlByb2R1Y3RzIiwid2FjYyIsImd1ZXN0IiwidXNlciIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUF3QmpCLGtCQUFZQyxVQUFaLEVBQThEO0FBQUEsUUFBMUJDLElBQTBCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEscUNBVnhCO0FBQ2xDQyxNQUFBQSxVQUFVLEVBQUUsSUFEc0I7QUFFbENDLE1BQUFBLE9BQU8sRUFBRSxNQUZ5QjtBQUdsQ0MsTUFBQUEsS0FBSyxFQUFFLEtBSDJCO0FBSWxDQyxNQUFBQSxPQUFPLEVBQUUsT0FKeUI7QUFLbENDLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxpQkFBaUIsRUFBRTtBQURiO0FBTHdCLEtBVXdCOztBQUMxRCxTQUFLQyxPQUFMLEdBQWVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUtGLE9BQW5CLEVBQTRCUCxJQUE1QixDQUFmO0FBQ0EsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLVyxhQUFMO0FBQ0g7Ozs7b0NBRTJCO0FBQ3hCLGFBQU8sS0FBS1gsVUFBWjtBQUNIOzs7b0NBRXFCO0FBQ2xCLFdBQUtZLElBQUwsR0FBWSxJQUFJQyxnQkFBSixDQUFTLElBQVQsQ0FBWjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFVLElBQVYsQ0FBYjtBQUNBLFdBQUtDLGlCQUFMLEdBQXlCLElBQUlDLDZCQUFKLENBQXNCLElBQXRCLENBQXpCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixJQUFJQyx5QkFBSixDQUFrQixJQUFsQixDQUFyQjtBQUNBLFdBQUtDLGtCQUFMLEdBQTBCLElBQUlDLDhCQUFKLENBQXVCLElBQXZCLENBQTFCO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLElBQUlDLGlCQUFKLENBQVUsSUFBVixDQUFiO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVcsSUFBWCxDQUFkO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixJQUFJQyxvQkFBSixDQUFhLElBQWIsQ0FBaEI7QUFDQSxXQUFLQyxJQUFMLEdBQVksNkJBQWtCLElBQWxCLENBQVo7QUFDQSxXQUFLQyxLQUFMLEdBQWEsK0JBQW1CLElBQW5CLENBQWI7QUFDQSxXQUFLQyxJQUFMLEdBQVksNkJBQWtCLElBQWxCLENBQVo7QUFDSDs7O2tDQUVxQjtBQUNsQix1QkFBVSxLQUFLdEIsT0FBTCxDQUFhTCxPQUF2QixjQUFrQyxLQUFLSyxPQUFMLENBQWFOLFVBQS9DO0FBQ0g7OzsrQkFFZ0M7QUFDN0IsYUFBTyxLQUFLTSxPQUFMLENBQWFGLFFBQXBCO0FBQ0g7Ozs2QkFFUXlCLEksRUFBcUI7QUFDMUIsV0FBS3ZCLE9BQUwsQ0FBYUosS0FBYixHQUFxQjJCLElBQXJCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnRPcHRpb25zLCBDbGllbnRBbGxPcHRpb25zLCBDbGllbnRGZWF0dXJlT3B0aW9ucyB9IGZyb20gJy4vSW50ZXJmYWNlcy9DbGllbnRPcHRpb25zJztcbmltcG9ydCBIdHRwQ2xpZW50IGZyb20gJy4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcbmltcG9ydCBBdXRoIGZyb20gJy4vUmVzb3VyY2VzL0F1dGgvQXV0aCc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMvVXNlcnMnO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25zIGZyb20gJy4vUmVzb3VyY2VzL1VzZXJTdWJzY3JpcHRpb25zL1VzZXJTdWJzY3JpcHRpb25zJztcbmltcG9ydCBTdWJzY3JpcHRpb25zIGZyb20gJy4vUmVzb3VyY2VzL1N1YnNjcmlwdGlvbnMvU3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9uQWRkb25zIGZyb20gJy4vUmVzb3VyY2VzL1N1YnNjcmlwdGlvbkFkZG9ucy9TdWJzY3JpcHRpb25BZGRvbnMnO1xuaW1wb3J0IENvZGVzIGZyb20gJy4vUmVzb3VyY2VzL0NvZGVzL0NvZGVzJztcbmltcG9ydCBUb3lib3ggZnJvbSAnLi9SZXNvdXJjZXMvVG95Ym94L1RveWJveCc7XG5pbXBvcnQgeyBsb2FkV2FjY1Jlc291cmNlcywgV2FjY1Jlc291cmNlcyB9IGZyb20gJy4vUmVzb3VyY2VzL1dhY2MnO1xuaW1wb3J0IHsgbG9hZEd1ZXN0UmVzb3VyY2VzLCBHdWVzdFJlc291cmNlcyB9IGZyb20gJy4vUmVzb3VyY2VzL0d1ZXN0JztcbmltcG9ydCB7IGxvYWRVc2VyUmVzb3VyY2VzLCBVc2VyUmVzb3VyY2VzIH0gZnJvbSAnLi9SZXNvdXJjZXMvVXNlcic7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9SZXNvdXJjZXMvUHJvZHVjdHMvUHJvZHVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQge1xuICAgIHB1YmxpYyBhdXRoITogQXV0aDtcbiAgICBwdWJsaWMgdXNlcnMhOiBVc2VycztcbiAgICBwdWJsaWMgdXNlclN1YnNjcmlwdGlvbnMhOiBVc2VyU3Vic2NyaXB0aW9ucztcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9ucyE6IFN1YnNjcmlwdGlvbnM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbkFkZG9ucyE6IFN1YnNjcmlwdGlvbkFkZG9ucztcbiAgICBwdWJsaWMgY29kZXMhOiBDb2RlcztcbiAgICBwdWJsaWMgdG95Ym94ITogVG95Ym94O1xuICAgIHB1YmxpYyBwcm9kdWN0cyE6IFByb2R1Y3RzO1xuICAgIHB1YmxpYyB3YWNjITogV2FjY1Jlc291cmNlcztcbiAgICBwdWJsaWMgZ3Vlc3QhOiBHdWVzdFJlc291cmNlcztcbiAgICBwdWJsaWMgdXNlciE6IFVzZXJSZXNvdXJjZXM7XG5cbiAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogQ2xpZW50QWxsT3B0aW9ucyA9IHtcbiAgICAgICAgYXBpVmVyc2lvbjogJ3YxJyxcbiAgICAgICAgYmFzZVVybDogJy9hcGknLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIHZlcnNpb246ICcwLjAuMScsXG4gICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgICB0cmltVHJhaWxpbmdTbGFzaDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudDogSHR0cENsaWVudCwgb3B0czogQ2xpZW50T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRzKTtcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0SHR0cENsaWVudCgpOiBIdHRwQ2xpZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudDtcbiAgICB9XG5cbiAgICBsb2FkUmVzb3VyY2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGggPSBuZXcgQXV0aCh0aGlzKTtcbiAgICAgICAgdGhpcy51c2VycyA9IG5ldyBVc2Vycyh0aGlzKTtcbiAgICAgICAgdGhpcy51c2VyU3Vic2NyaXB0aW9ucyA9IG5ldyBVc2VyU3Vic2NyaXB0aW9ucyh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbnModGhpcyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQWRkb25zID0gbmV3IFN1YnNjcmlwdGlvbkFkZG9ucyh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2RlcyA9IG5ldyBDb2Rlcyh0aGlzKTtcbiAgICAgICAgdGhpcy50b3lib3ggPSBuZXcgVG95Ym94KHRoaXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gbmV3IFByb2R1Y3RzKHRoaXMpO1xuICAgICAgICB0aGlzLndhY2MgPSBsb2FkV2FjY1Jlc291cmNlcyh0aGlzKTtcbiAgICAgICAgdGhpcy5ndWVzdCA9IGxvYWRHdWVzdFJlc291cmNlcyh0aGlzKTtcbiAgICAgICAgdGhpcy51c2VyID0gbG9hZFVzZXJSZXNvdXJjZXModGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QmFzZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5iYXNlVXJsfS8ke3RoaXMub3B0aW9ucy5hcGlWZXJzaW9ufWA7XG4gICAgfVxuXG4gICAgZmVhdHVyZXMoKTogQ2xpZW50RmVhdHVyZU9wdGlvbnMge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZlYXR1cmVzO1xuICAgIH1cblxuICAgIHNldERlYnVnKGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRlYnVnID0gZmxhZztcbiAgICB9XG59XG4iXX0=