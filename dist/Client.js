"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Auth = _interopRequireDefault(require("./Resources/Auth/Auth"));

var _Codes = _interopRequireDefault(require("./Resources/Codes/Codes"));

var _Subscriptions = _interopRequireDefault(require("./Resources/Subscriptions"));

var _Wacc = require("./Resources/Wacc");

var _Guests = require("./Resources/Guests");

var _Users = _interopRequireDefault(require("./Resources/Users"));

var _Gift = _interopRequireDefault(require("./Resources/Gift/Gift"));

var _Products = _interopRequireDefault(require("./Resources/Products"));

var _Contact = _interopRequireDefault(require("./Resources/Contact/Contact"));

var _ProductLists = _interopRequireDefault(require("./Resources/ProductLists/ProductLists"));

var _UnderliverableDates = _interopRequireDefault(require("./Resources/UndeliverableDates/UnderliverableDates"));

var _AttributionSource = _interopRequireDefault(require("./Resources/AttributionSource/AttributionSource"));

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

    _defineProperty(this, "api", void 0);

    _defineProperty(this, "auth", void 0);

    _defineProperty(this, "codes", void 0);

    _defineProperty(this, "products", void 0);

    _defineProperty(this, "subscriptions", void 0);

    _defineProperty(this, "wacc", void 0);

    _defineProperty(this, "guests", void 0);

    _defineProperty(this, "users", void 0);

    _defineProperty(this, "gift", void 0);

    _defineProperty(this, "contact", void 0);

    _defineProperty(this, "productLists", void 0);

    _defineProperty(this, "undeliverableDates", void 0);

    _defineProperty(this, "myPlaytime", void 0);

    _defineProperty(this, "attributionSource", void 0);

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
      this.codes = new _Codes["default"](this);
      this.products = new _Products["default"](this);
      this.subscriptions = new _Subscriptions["default"](this);
      this.wacc = (0, _Wacc.loadWaccResources)(this);
      this.guests = (0, _Guests.loadGuestsResources)(this);
      this.users = new _Users["default"](this);
      this.gift = new _Gift["default"](this);
      this.contact = new _Contact["default"](this);
      this.productLists = new _ProductLists["default"](this);
      this.undeliverableDates = new _UnderliverableDates["default"](this);
      this.attributionSource = new _AttributionSource["default"](this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImF1dGgiLCJBdXRoIiwiY29kZXMiLCJDb2RlcyIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsIndhY2MiLCJndWVzdHMiLCJ1c2VycyIsIlVzZXJzIiwiZ2lmdCIsIkdpZnQiLCJjb250YWN0IiwiQ29udGFjdCIsInByb2R1Y3RMaXN0cyIsIlByb2R1Y3RMaXN0cyIsInVuZGVsaXZlcmFibGVEYXRlcyIsIlVuZGVsaXZlcmFibGVEYXRlcyIsImF0dHJpYnV0aW9uU291cmNlIiwiQXR0cmlidXRpb25Tb3VyY2UiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBMkJqQixrQkFBWUMsVUFBWixFQUE4RDtBQUFBLFFBQTFCQyxJQUEwQix1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLHFDQVZ4QjtBQUNsQ0MsTUFBQUEsVUFBVSxFQUFFLElBRHNCO0FBRWxDQyxNQUFBQSxPQUFPLEVBQUUsTUFGeUI7QUFHbENDLE1BQUFBLEtBQUssRUFBRSxLQUgyQjtBQUlsQ0MsTUFBQUEsT0FBTyxFQUFFLE9BSnlCO0FBS2xDQyxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsaUJBQWlCLEVBQUU7QUFEYjtBQUx3QixLQVV3Qjs7QUFDMUQsU0FBS0MsT0FBTCxHQUFlQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFLRixPQUFuQixFQUE0QlAsSUFBNUIsQ0FBZjtBQUNBLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS1csYUFBTDtBQUNIOzs7O29DQUUyQjtBQUN4QixhQUFPLEtBQUtYLFVBQVo7QUFDSDs7O29DQUVxQjtBQUNsQixXQUFLWSxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBUyxJQUFULENBQVo7QUFDQSxXQUFLQyxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBVSxJQUFWLENBQWI7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLElBQUlDLG9CQUFKLENBQWEsSUFBYixDQUFoQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosQ0FBa0IsSUFBbEIsQ0FBckI7QUFDQSxXQUFLQyxJQUFMLEdBQVksNkJBQWtCLElBQWxCLENBQVo7QUFDQSxXQUFLQyxNQUFMLEdBQWMsaUNBQW9CLElBQXBCLENBQWQ7QUFDQSxXQUFLQyxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBVSxJQUFWLENBQWI7QUFDQSxXQUFLQyxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBUyxJQUFULENBQVo7QUFDQSxXQUFLQyxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWSxJQUFaLENBQWY7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLElBQUlDLHdCQUFKLENBQWlCLElBQWpCLENBQXBCO0FBQ0EsV0FBS0Msa0JBQUwsR0FBMEIsSUFBSUMsK0JBQUosQ0FBdUIsSUFBdkIsQ0FBMUI7QUFDQSxXQUFLQyxpQkFBTCxHQUF5QixJQUFJQyw2QkFBSixDQUFzQixJQUF0QixDQUF6QjtBQUNIOzs7a0NBRXFCO0FBQ2xCLHVCQUFVLEtBQUt6QixPQUFMLENBQWFMLE9BQXZCLGNBQWtDLEtBQUtLLE9BQUwsQ0FBYU4sVUFBL0M7QUFDSDs7OytCQUVnQztBQUM3QixhQUFPLEtBQUtNLE9BQUwsQ0FBYUYsUUFBcEI7QUFDSDs7OzZCQUVRNEIsSSxFQUFxQjtBQUMxQixXQUFLMUIsT0FBTCxDQUFhSixLQUFiLEdBQXFCOEIsSUFBckI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudE9wdGlvbnMsIENsaWVudEFsbE9wdGlvbnMsIENsaWVudEZlYXR1cmVPcHRpb25zIH0gZnJvbSAnLi9JbnRlcmZhY2VzL0NsaWVudE9wdGlvbnMnO1xuaW1wb3J0IEh0dHBDbGllbnQgZnJvbSAnLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuaW1wb3J0IEFwaSBmcm9tICcuL1Jlc291cmNlcy9BcGkvQXV0aCc7XG5pbXBvcnQgQXV0aCBmcm9tICcuL1Jlc291cmNlcy9BdXRoL0F1dGgnO1xuaW1wb3J0IENvZGVzIGZyb20gJy4vUmVzb3VyY2VzL0NvZGVzL0NvZGVzJztcbmltcG9ydCBTdWJzY3JpcHRpb25zIGZyb20gJy4vUmVzb3VyY2VzL1N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IHsgbG9hZFdhY2NSZXNvdXJjZXMsIFdhY2NSZXNvdXJjZXMgfSBmcm9tICcuL1Jlc291cmNlcy9XYWNjJztcbmltcG9ydCB7IGxvYWRHdWVzdHNSZXNvdXJjZXMsIEd1ZXN0c1Jlc291cmNlcyB9IGZyb20gJy4vUmVzb3VyY2VzL0d1ZXN0cyc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMnO1xuaW1wb3J0IEdpZnQgZnJvbSAnLi9SZXNvdXJjZXMvR2lmdC9HaWZ0JztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Jlc291cmNlcy9Qcm9kdWN0cyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL1Jlc291cmNlcy9Db250YWN0L0NvbnRhY3QnO1xuaW1wb3J0IFByb2R1Y3RMaXN0cyBmcm9tICcuL1Jlc291cmNlcy9Qcm9kdWN0TGlzdHMvUHJvZHVjdExpc3RzJztcbmltcG9ydCBNeVBsYXl0aW1lIGZyb20gJy4vUmVzb3VyY2VzL1VzZXJzL015UGxheXRpbWUnO1xuaW1wb3J0IFVuZGVsaXZlcmFibGVEYXRlcyBmcm9tICcuL1Jlc291cmNlcy9VbmRlbGl2ZXJhYmxlRGF0ZXMvVW5kZXJsaXZlcmFibGVEYXRlcyc7XG5pbXBvcnQgQXR0cmlidXRpb25Tb3VyY2UgZnJvbSAnLi9SZXNvdXJjZXMvQXR0cmlidXRpb25Tb3VyY2UvQXR0cmlidXRpb25Tb3VyY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQge1xuICAgIHB1YmxpYyBhcGkhOiBBcGk7XG4gICAgcHVibGljIGF1dGghOiBBdXRoO1xuICAgIHB1YmxpYyBjb2RlcyE6IENvZGVzO1xuICAgIHB1YmxpYyBwcm9kdWN0cyE6IFByb2R1Y3RzO1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb25zITogU3Vic2NyaXB0aW9ucztcbiAgICBwdWJsaWMgd2FjYyE6IFdhY2NSZXNvdXJjZXM7XG4gICAgcHVibGljIGd1ZXN0cyE6IEd1ZXN0c1Jlc291cmNlcztcbiAgICBwdWJsaWMgdXNlcnMhOiBVc2VycztcbiAgICBwdWJsaWMgZ2lmdCE6IEdpZnQ7XG4gICAgcHVibGljIGNvbnRhY3QhOiBDb250YWN0O1xuICAgIHB1YmxpYyBwcm9kdWN0TGlzdHMhOiBQcm9kdWN0TGlzdHM7XG4gICAgcHVibGljIHVuZGVsaXZlcmFibGVEYXRlcyE6IFVuZGVsaXZlcmFibGVEYXRlcztcbiAgICBwdWJsaWMgbXlQbGF5dGltZSE6IE15UGxheXRpbWU7XG4gICAgcHVibGljIGF0dHJpYnV0aW9uU291cmNlITogQXR0cmlidXRpb25Tb3VyY2U7XG5cbiAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogQ2xpZW50QWxsT3B0aW9ucyA9IHtcbiAgICAgICAgYXBpVmVyc2lvbjogJ3YxJyxcbiAgICAgICAgYmFzZVVybDogJy9hcGknLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIHZlcnNpb246ICcwLjAuMScsXG4gICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgICB0cmltVHJhaWxpbmdTbGFzaDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudDogSHR0cENsaWVudCwgb3B0czogQ2xpZW50T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRzKTtcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0SHR0cENsaWVudCgpOiBIdHRwQ2xpZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudDtcbiAgICB9XG5cbiAgICBsb2FkUmVzb3VyY2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGggPSBuZXcgQXV0aCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2RlcyA9IG5ldyBDb2Rlcyh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IG5ldyBQcm9kdWN0cyh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbnModGhpcyk7XG4gICAgICAgIHRoaXMud2FjYyA9IGxvYWRXYWNjUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICB0aGlzLmd1ZXN0cyA9IGxvYWRHdWVzdHNSZXNvdXJjZXModGhpcyk7XG4gICAgICAgIHRoaXMudXNlcnMgPSBuZXcgVXNlcnModGhpcyk7XG4gICAgICAgIHRoaXMuZ2lmdCA9IG5ldyBHaWZ0KHRoaXMpO1xuICAgICAgICB0aGlzLmNvbnRhY3QgPSBuZXcgQ29udGFjdCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlzdHMgPSBuZXcgUHJvZHVjdExpc3RzKHRoaXMpO1xuICAgICAgICB0aGlzLnVuZGVsaXZlcmFibGVEYXRlcyA9IG5ldyBVbmRlbGl2ZXJhYmxlRGF0ZXModGhpcyk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRpb25Tb3VyY2UgPSBuZXcgQXR0cmlidXRpb25Tb3VyY2UodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QmFzZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5iYXNlVXJsfS8ke3RoaXMub3B0aW9ucy5hcGlWZXJzaW9ufWA7XG4gICAgfVxuXG4gICAgZmVhdHVyZXMoKTogQ2xpZW50RmVhdHVyZU9wdGlvbnMge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZlYXR1cmVzO1xuICAgIH1cblxuICAgIHNldERlYnVnKGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRlYnVnID0gZmxhZztcbiAgICB9XG59XG4iXX0=