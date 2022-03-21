"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Auth = _interopRequireDefault(require("./Resources/Api/Auth"));

var _Auth2 = _interopRequireDefault(require("./Resources/Auth/Auth"));

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Client = /*#__PURE__*/function () {
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
      this.api = new _Auth["default"](this);
      this.auth = new _Auth2["default"](this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImFwaSIsIkFwaSIsImF1dGgiLCJBdXRoIiwiY29kZXMiLCJDb2RlcyIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsIndhY2MiLCJndWVzdHMiLCJ1c2VycyIsIlVzZXJzIiwiZ2lmdCIsIkdpZnQiLCJjb250YWN0IiwiQ29udGFjdCIsInByb2R1Y3RMaXN0cyIsIlByb2R1Y3RMaXN0cyIsInVuZGVsaXZlcmFibGVEYXRlcyIsIlVuZGVsaXZlcmFibGVEYXRlcyIsImF0dHJpYnV0aW9uU291cmNlIiwiQXR0cmlidXRpb25Tb3VyY2UiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTtBQTJCakIsa0JBQVlDLFVBQVosRUFBOEQ7QUFBQSxRQUExQkMsSUFBMEIsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxxQ0FWeEI7QUFDbENDLE1BQUFBLFVBQVUsRUFBRSxJQURzQjtBQUVsQ0MsTUFBQUEsT0FBTyxFQUFFLE1BRnlCO0FBR2xDQyxNQUFBQSxLQUFLLEVBQUUsS0FIMkI7QUFJbENDLE1BQUFBLE9BQU8sRUFBRSxPQUp5QjtBQUtsQ0MsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLGlCQUFpQixFQUFFO0FBRGI7QUFMd0IsS0FVd0I7O0FBQzFELFNBQUtDLE9BQUwsR0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsS0FBS0YsT0FBbkIsRUFBNEJQLElBQTVCLENBQWY7QUFDQSxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtXLGFBQUw7QUFDSDs7OztXQUVELHlCQUE0QjtBQUN4QixhQUFPLEtBQUtYLFVBQVo7QUFDSDs7O1dBRUQseUJBQXNCO0FBQ2xCLFdBQUtZLEdBQUwsR0FBVyxJQUFJQyxnQkFBSixDQUFRLElBQVIsQ0FBWDtBQUNBLFdBQUtDLElBQUwsR0FBWSxJQUFJQyxpQkFBSixDQUFTLElBQVQsQ0FBWjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFVLElBQVYsQ0FBYjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsb0JBQUosQ0FBYSxJQUFiLENBQWhCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixJQUFJQyx5QkFBSixDQUFrQixJQUFsQixDQUFyQjtBQUNBLFdBQUtDLElBQUwsR0FBWSw2QkFBa0IsSUFBbEIsQ0FBWjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxpQ0FBb0IsSUFBcEIsQ0FBZDtBQUNBLFdBQUtDLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFVLElBQVYsQ0FBYjtBQUNBLFdBQUtDLElBQUwsR0FBWSxJQUFJQyxnQkFBSixDQUFTLElBQVQsQ0FBWjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZLElBQVosQ0FBZjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsSUFBSUMsd0JBQUosQ0FBaUIsSUFBakIsQ0FBcEI7QUFDQSxXQUFLQyxrQkFBTCxHQUEwQixJQUFJQywrQkFBSixDQUF1QixJQUF2QixDQUExQjtBQUNBLFdBQUtDLGlCQUFMLEdBQXlCLElBQUlDLDZCQUFKLENBQXNCLElBQXRCLENBQXpCO0FBQ0g7OztXQUVELHVCQUFzQjtBQUNsQix1QkFBVSxLQUFLM0IsT0FBTCxDQUFhTCxPQUF2QixjQUFrQyxLQUFLSyxPQUFMLENBQWFOLFVBQS9DO0FBQ0g7OztXQUVELG9CQUFpQztBQUM3QixhQUFPLEtBQUtNLE9BQUwsQ0FBYUYsUUFBcEI7QUFDSDs7O1dBRUQsa0JBQVM4QixJQUFULEVBQThCO0FBQzFCLFdBQUs1QixPQUFMLENBQWFKLEtBQWIsR0FBcUJnQyxJQUFyQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50T3B0aW9ucywgQ2xpZW50QWxsT3B0aW9ucywgQ2xpZW50RmVhdHVyZU9wdGlvbnMgfSBmcm9tICcuL0ludGVyZmFjZXMvQ2xpZW50T3B0aW9ucyc7XG5pbXBvcnQgSHR0cENsaWVudCBmcm9tICcuL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5pbXBvcnQgQXBpIGZyb20gJy4vUmVzb3VyY2VzL0FwaS9BdXRoJztcbmltcG9ydCBBdXRoIGZyb20gJy4vUmVzb3VyY2VzL0F1dGgvQXV0aCc7XG5pbXBvcnQgQ29kZXMgZnJvbSAnLi9SZXNvdXJjZXMvQ29kZXMvQ29kZXMnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbnMgZnJvbSAnLi9SZXNvdXJjZXMvU3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgeyBsb2FkV2FjY1Jlc291cmNlcywgV2FjY1Jlc291cmNlcyB9IGZyb20gJy4vUmVzb3VyY2VzL1dhY2MnO1xuaW1wb3J0IHsgbG9hZEd1ZXN0c1Jlc291cmNlcywgR3Vlc3RzUmVzb3VyY2VzIH0gZnJvbSAnLi9SZXNvdXJjZXMvR3Vlc3RzJztcbmltcG9ydCBVc2VycyBmcm9tICcuL1Jlc291cmNlcy9Vc2Vycyc7XG5pbXBvcnQgR2lmdCBmcm9tICcuL1Jlc291cmNlcy9HaWZ0L0dpZnQnO1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vUmVzb3VyY2VzL1Byb2R1Y3RzJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vUmVzb3VyY2VzL0NvbnRhY3QvQ29udGFjdCc7XG5pbXBvcnQgUHJvZHVjdExpc3RzIGZyb20gJy4vUmVzb3VyY2VzL1Byb2R1Y3RMaXN0cy9Qcm9kdWN0TGlzdHMnO1xuaW1wb3J0IE15UGxheXRpbWUgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMvTXlQbGF5dGltZSc7XG5pbXBvcnQgVW5kZWxpdmVyYWJsZURhdGVzIGZyb20gJy4vUmVzb3VyY2VzL1VuZGVsaXZlcmFibGVEYXRlcy9VbmRlcmxpdmVyYWJsZURhdGVzJztcbmltcG9ydCBBdHRyaWJ1dGlvblNvdXJjZSBmcm9tICcuL1Jlc291cmNlcy9BdHRyaWJ1dGlvblNvdXJjZS9BdHRyaWJ1dGlvblNvdXJjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudCB7XG4gICAgcHVibGljIGFwaSE6IEFwaTtcbiAgICBwdWJsaWMgYXV0aCE6IEF1dGg7XG4gICAgcHVibGljIGNvZGVzITogQ29kZXM7XG4gICAgcHVibGljIHByb2R1Y3RzITogUHJvZHVjdHM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnMhOiBTdWJzY3JpcHRpb25zO1xuICAgIHB1YmxpYyB3YWNjITogV2FjY1Jlc291cmNlcztcbiAgICBwdWJsaWMgZ3Vlc3RzITogR3Vlc3RzUmVzb3VyY2VzO1xuICAgIHB1YmxpYyB1c2VycyE6IFVzZXJzO1xuICAgIHB1YmxpYyBnaWZ0ITogR2lmdDtcbiAgICBwdWJsaWMgY29udGFjdCE6IENvbnRhY3Q7XG4gICAgcHVibGljIHByb2R1Y3RMaXN0cyE6IFByb2R1Y3RMaXN0cztcbiAgICBwdWJsaWMgdW5kZWxpdmVyYWJsZURhdGVzITogVW5kZWxpdmVyYWJsZURhdGVzO1xuICAgIHB1YmxpYyBteVBsYXl0aW1lITogTXlQbGF5dGltZTtcbiAgICBwdWJsaWMgYXR0cmlidXRpb25Tb3VyY2UhOiBBdHRyaWJ1dGlvblNvdXJjZTtcblxuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvcHRpb25zOiBDbGllbnRBbGxPcHRpb25zID0ge1xuICAgICAgICBhcGlWZXJzaW9uOiAndjEnLFxuICAgICAgICBiYXNlVXJsOiAnL2FwaScsXG4gICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICAgIHRyaW1UcmFpbGluZ1NsYXNoOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBvcHRzOiBDbGllbnRPcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdHMpO1xuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xuICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcbiAgICB9XG5cbiAgICBnZXRIdHRwQ2xpZW50KCk6IEh0dHBDbGllbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50O1xuICAgIH1cblxuICAgIGxvYWRSZXNvdXJjZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFwaSh0aGlzKTtcbiAgICAgICAgdGhpcy5hdXRoID0gbmV3IEF1dGgodGhpcyk7XG4gICAgICAgIHRoaXMuY29kZXMgPSBuZXcgQ29kZXModGhpcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBuZXcgUHJvZHVjdHModGhpcyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb25zKHRoaXMpO1xuICAgICAgICB0aGlzLndhY2MgPSBsb2FkV2FjY1Jlc291cmNlcyh0aGlzKTtcbiAgICAgICAgdGhpcy5ndWVzdHMgPSBsb2FkR3Vlc3RzUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXJzID0gbmV3IFVzZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLmdpZnQgPSBuZXcgR2lmdCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb250YWN0ID0gbmV3IENvbnRhY3QodGhpcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3RzID0gbmV3IFByb2R1Y3RMaXN0cyh0aGlzKTtcbiAgICAgICAgdGhpcy51bmRlbGl2ZXJhYmxlRGF0ZXMgPSBuZXcgVW5kZWxpdmVyYWJsZURhdGVzKHRoaXMpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0aW9uU291cmNlID0gbmV3IEF0dHJpYnV0aW9uU291cmNlKHRoaXMpO1xuICAgIH1cblxuICAgIGdldEJhc2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMuYmFzZVVybH0vJHt0aGlzLm9wdGlvbnMuYXBpVmVyc2lvbn1gO1xuICAgIH1cblxuICAgIGZlYXR1cmVzKCk6IENsaWVudEZlYXR1cmVPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mZWF0dXJlcztcbiAgICB9XG5cbiAgICBzZXREZWJ1ZyhmbGFnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kZWJ1ZyA9IGZsYWc7XG4gICAgfVxufVxuIl19