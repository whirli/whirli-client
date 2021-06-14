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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImF1dGgiLCJBdXRoIiwiY29kZXMiLCJDb2RlcyIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsIndhY2MiLCJndWVzdHMiLCJ1c2VycyIsIlVzZXJzIiwiZ2lmdCIsIkdpZnQiLCJjb250YWN0IiwiQ29udGFjdCIsInByb2R1Y3RMaXN0cyIsIlByb2R1Y3RMaXN0cyIsInVuZGVsaXZlcmFibGVEYXRlcyIsIlVuZGVsaXZlcmFibGVEYXRlcyIsImF0dHJpYnV0aW9uU291cmNlIiwiQXR0cmlidXRpb25Tb3VyY2UiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBMEJqQixrQkFBWUMsVUFBWixFQUE4RDtBQUFBLFFBQTFCQyxJQUEwQix1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLHFDQVZ4QjtBQUNsQ0MsTUFBQUEsVUFBVSxFQUFFLElBRHNCO0FBRWxDQyxNQUFBQSxPQUFPLEVBQUUsTUFGeUI7QUFHbENDLE1BQUFBLEtBQUssRUFBRSxLQUgyQjtBQUlsQ0MsTUFBQUEsT0FBTyxFQUFFLE9BSnlCO0FBS2xDQyxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsaUJBQWlCLEVBQUU7QUFEYjtBQUx3QixLQVV3Qjs7QUFDMUQsU0FBS0MsT0FBTCxHQUFlQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFLRixPQUFuQixFQUE0QlAsSUFBNUIsQ0FBZjtBQUNBLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS1csYUFBTDtBQUNIOzs7O29DQUUyQjtBQUN4QixhQUFPLEtBQUtYLFVBQVo7QUFDSDs7O29DQUVxQjtBQUNsQixXQUFLWSxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBUyxJQUFULENBQVo7QUFDQSxXQUFLQyxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBVSxJQUFWLENBQWI7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLElBQUlDLG9CQUFKLENBQWEsSUFBYixDQUFoQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosQ0FBa0IsSUFBbEIsQ0FBckI7QUFDQSxXQUFLQyxJQUFMLEdBQVksNkJBQWtCLElBQWxCLENBQVo7QUFDQSxXQUFLQyxNQUFMLEdBQWMsaUNBQW9CLElBQXBCLENBQWQ7QUFDQSxXQUFLQyxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBVSxJQUFWLENBQWI7QUFDQSxXQUFLQyxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBUyxJQUFULENBQVo7QUFDQSxXQUFLQyxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWSxJQUFaLENBQWY7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLElBQUlDLHdCQUFKLENBQWlCLElBQWpCLENBQXBCO0FBQ0EsV0FBS0Msa0JBQUwsR0FBMEIsSUFBSUMsK0JBQUosQ0FBdUIsSUFBdkIsQ0FBMUI7QUFDQSxXQUFLQyxpQkFBTCxHQUF5QixJQUFJQyw2QkFBSixDQUFzQixJQUF0QixDQUF6QjtBQUNIOzs7a0NBRXFCO0FBQ2xCLHVCQUFVLEtBQUt6QixPQUFMLENBQWFMLE9BQXZCLGNBQWtDLEtBQUtLLE9BQUwsQ0FBYU4sVUFBL0M7QUFDSDs7OytCQUVnQztBQUM3QixhQUFPLEtBQUtNLE9BQUwsQ0FBYUYsUUFBcEI7QUFDSDs7OzZCQUVRNEIsSSxFQUFxQjtBQUMxQixXQUFLMUIsT0FBTCxDQUFhSixLQUFiLEdBQXFCOEIsSUFBckI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudE9wdGlvbnMsIENsaWVudEFsbE9wdGlvbnMsIENsaWVudEZlYXR1cmVPcHRpb25zIH0gZnJvbSAnLi9JbnRlcmZhY2VzL0NsaWVudE9wdGlvbnMnO1xuaW1wb3J0IEh0dHBDbGllbnQgZnJvbSAnLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9SZXNvdXJjZXMvQXV0aC9BdXRoJztcbmltcG9ydCBDb2RlcyBmcm9tICcuL1Jlc291cmNlcy9Db2Rlcy9Db2Rlcyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9ucyBmcm9tICcuL1Jlc291cmNlcy9TdWJzY3JpcHRpb25zJztcbmltcG9ydCB7IGxvYWRXYWNjUmVzb3VyY2VzLCBXYWNjUmVzb3VyY2VzIH0gZnJvbSAnLi9SZXNvdXJjZXMvV2FjYyc7XG5pbXBvcnQgeyBsb2FkR3Vlc3RzUmVzb3VyY2VzLCBHdWVzdHNSZXNvdXJjZXMgfSBmcm9tICcuL1Jlc291cmNlcy9HdWVzdHMnO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vUmVzb3VyY2VzL1VzZXJzJztcbmltcG9ydCBHaWZ0IGZyb20gJy4vUmVzb3VyY2VzL0dpZnQvR2lmdCc7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9SZXNvdXJjZXMvUHJvZHVjdHMnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9SZXNvdXJjZXMvQ29udGFjdC9Db250YWN0JztcbmltcG9ydCBQcm9kdWN0TGlzdHMgZnJvbSAnLi9SZXNvdXJjZXMvUHJvZHVjdExpc3RzL1Byb2R1Y3RMaXN0cyc7XG5pbXBvcnQgTXlQbGF5dGltZSBmcm9tICcuL1Jlc291cmNlcy9Vc2Vycy9NeVBsYXl0aW1lJztcbmltcG9ydCBVbmRlbGl2ZXJhYmxlRGF0ZXMgZnJvbSAnLi9SZXNvdXJjZXMvVW5kZWxpdmVyYWJsZURhdGVzL1VuZGVybGl2ZXJhYmxlRGF0ZXMnO1xuaW1wb3J0IEF0dHJpYnV0aW9uU291cmNlIGZyb20gJy4vUmVzb3VyY2VzL0F0dHJpYnV0aW9uU291cmNlL0F0dHJpYnV0aW9uU291cmNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50IHtcbiAgICBwdWJsaWMgYXV0aCE6IEF1dGg7XG4gICAgcHVibGljIGNvZGVzITogQ29kZXM7XG4gICAgcHVibGljIHByb2R1Y3RzITogUHJvZHVjdHM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnMhOiBTdWJzY3JpcHRpb25zO1xuICAgIHB1YmxpYyB3YWNjITogV2FjY1Jlc291cmNlcztcbiAgICBwdWJsaWMgZ3Vlc3RzITogR3Vlc3RzUmVzb3VyY2VzO1xuICAgIHB1YmxpYyB1c2VycyE6IFVzZXJzO1xuICAgIHB1YmxpYyBnaWZ0ITogR2lmdDtcbiAgICBwdWJsaWMgY29udGFjdCE6IENvbnRhY3Q7XG4gICAgcHVibGljIHByb2R1Y3RMaXN0cyE6IFByb2R1Y3RMaXN0cztcbiAgICBwdWJsaWMgdW5kZWxpdmVyYWJsZURhdGVzITogVW5kZWxpdmVyYWJsZURhdGVzO1xuICAgIHB1YmxpYyBteVBsYXl0aW1lITogTXlQbGF5dGltZTtcbiAgICBwdWJsaWMgYXR0cmlidXRpb25Tb3VyY2UhOiBBdHRyaWJ1dGlvblNvdXJjZTtcblxuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvcHRpb25zOiBDbGllbnRBbGxPcHRpb25zID0ge1xuICAgICAgICBhcGlWZXJzaW9uOiAndjEnLFxuICAgICAgICBiYXNlVXJsOiAnL2FwaScsXG4gICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICAgIHRyaW1UcmFpbGluZ1NsYXNoOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBvcHRzOiBDbGllbnRPcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdHMpO1xuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xuICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcbiAgICB9XG5cbiAgICBnZXRIdHRwQ2xpZW50KCk6IEh0dHBDbGllbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50O1xuICAgIH1cblxuICAgIGxvYWRSZXNvdXJjZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXV0aCA9IG5ldyBBdXRoKHRoaXMpO1xuICAgICAgICB0aGlzLmNvZGVzID0gbmV3IENvZGVzKHRoaXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gbmV3IFByb2R1Y3RzKHRoaXMpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9ucyh0aGlzKTtcbiAgICAgICAgdGhpcy53YWNjID0gbG9hZFdhY2NSZXNvdXJjZXModGhpcyk7XG4gICAgICAgIHRoaXMuZ3Vlc3RzID0gbG9hZEd1ZXN0c1Jlc291cmNlcyh0aGlzKTtcbiAgICAgICAgdGhpcy51c2VycyA9IG5ldyBVc2Vycyh0aGlzKTtcbiAgICAgICAgdGhpcy5naWZ0ID0gbmV3IEdpZnQodGhpcyk7XG4gICAgICAgIHRoaXMuY29udGFjdCA9IG5ldyBDb250YWN0KHRoaXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0cyA9IG5ldyBQcm9kdWN0TGlzdHModGhpcyk7XG4gICAgICAgIHRoaXMudW5kZWxpdmVyYWJsZURhdGVzID0gbmV3IFVuZGVsaXZlcmFibGVEYXRlcyh0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGlvblNvdXJjZSA9IG5ldyBBdHRyaWJ1dGlvblNvdXJjZSh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRCYXNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLmJhc2VVcmx9LyR7dGhpcy5vcHRpb25zLmFwaVZlcnNpb259YDtcbiAgICB9XG5cbiAgICBmZWF0dXJlcygpOiBDbGllbnRGZWF0dXJlT3B0aW9ucyB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmVhdHVyZXM7XG4gICAgfVxuXG4gICAgc2V0RGVidWcoZmxhZzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGVidWcgPSBmbGFnO1xuICAgIH1cbn1cbiJdfQ==