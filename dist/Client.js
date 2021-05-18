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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImF1dGgiLCJBdXRoIiwiY29kZXMiLCJDb2RlcyIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsIndhY2MiLCJndWVzdHMiLCJ1c2VycyIsIlVzZXJzIiwiZ2lmdCIsIkdpZnQiLCJjb250YWN0IiwiQ29udGFjdCIsInByb2R1Y3RMaXN0cyIsIlByb2R1Y3RMaXN0cyIsInVuZGVsaXZlcmFibGVEYXRlcyIsIlVuZGVsaXZlcmFibGVEYXRlcyIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUF5QmpCLGtCQUFZQyxVQUFaLEVBQThEO0FBQUEsUUFBMUJDLElBQTBCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEscUNBVnhCO0FBQ2xDQyxNQUFBQSxVQUFVLEVBQUUsSUFEc0I7QUFFbENDLE1BQUFBLE9BQU8sRUFBRSxNQUZ5QjtBQUdsQ0MsTUFBQUEsS0FBSyxFQUFFLEtBSDJCO0FBSWxDQyxNQUFBQSxPQUFPLEVBQUUsT0FKeUI7QUFLbENDLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxpQkFBaUIsRUFBRTtBQURiO0FBTHdCLEtBVXdCOztBQUMxRCxTQUFLQyxPQUFMLEdBQWVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUtGLE9BQW5CLEVBQTRCUCxJQUE1QixDQUFmO0FBQ0EsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLVyxhQUFMO0FBQ0g7Ozs7b0NBRTJCO0FBQ3hCLGFBQU8sS0FBS1gsVUFBWjtBQUNIOzs7b0NBRXFCO0FBQ2xCLFdBQUtZLElBQUwsR0FBWSxJQUFJQyxnQkFBSixDQUFTLElBQVQsQ0FBWjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFVLElBQVYsQ0FBYjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsb0JBQUosQ0FBYSxJQUFiLENBQWhCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixJQUFJQyx5QkFBSixDQUFrQixJQUFsQixDQUFyQjtBQUNBLFdBQUtDLElBQUwsR0FBWSw2QkFBa0IsSUFBbEIsQ0FBWjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxpQ0FBb0IsSUFBcEIsQ0FBZDtBQUNBLFdBQUtDLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFVLElBQVYsQ0FBYjtBQUNBLFdBQUtDLElBQUwsR0FBWSxJQUFJQyxnQkFBSixDQUFTLElBQVQsQ0FBWjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZLElBQVosQ0FBZjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsSUFBSUMsd0JBQUosQ0FBaUIsSUFBakIsQ0FBcEI7QUFDQSxXQUFLQyxrQkFBTCxHQUEwQixJQUFJQywrQkFBSixDQUF1QixJQUF2QixDQUExQjtBQUNIOzs7a0NBRXFCO0FBQ2xCLHVCQUFVLEtBQUt2QixPQUFMLENBQWFMLE9BQXZCLGNBQWtDLEtBQUtLLE9BQUwsQ0FBYU4sVUFBL0M7QUFDSDs7OytCQUVnQztBQUM3QixhQUFPLEtBQUtNLE9BQUwsQ0FBYUYsUUFBcEI7QUFDSDs7OzZCQUVRMEIsSSxFQUFxQjtBQUMxQixXQUFLeEIsT0FBTCxDQUFhSixLQUFiLEdBQXFCNEIsSUFBckI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudE9wdGlvbnMsIENsaWVudEFsbE9wdGlvbnMsIENsaWVudEZlYXR1cmVPcHRpb25zIH0gZnJvbSAnLi9JbnRlcmZhY2VzL0NsaWVudE9wdGlvbnMnO1xuaW1wb3J0IEh0dHBDbGllbnQgZnJvbSAnLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9SZXNvdXJjZXMvQXV0aC9BdXRoJztcbmltcG9ydCBDb2RlcyBmcm9tICcuL1Jlc291cmNlcy9Db2Rlcy9Db2Rlcyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9ucyBmcm9tICcuL1Jlc291cmNlcy9TdWJzY3JpcHRpb25zJztcbmltcG9ydCB7IGxvYWRXYWNjUmVzb3VyY2VzLCBXYWNjUmVzb3VyY2VzIH0gZnJvbSAnLi9SZXNvdXJjZXMvV2FjYyc7XG5pbXBvcnQgeyBsb2FkR3Vlc3RzUmVzb3VyY2VzLCBHdWVzdHNSZXNvdXJjZXMgfSBmcm9tICcuL1Jlc291cmNlcy9HdWVzdHMnO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vUmVzb3VyY2VzL1VzZXJzJztcbmltcG9ydCBHaWZ0IGZyb20gJy4vUmVzb3VyY2VzL0dpZnQvR2lmdCc7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9SZXNvdXJjZXMvUHJvZHVjdHMnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9SZXNvdXJjZXMvQ29udGFjdC9Db250YWN0JztcbmltcG9ydCBQcm9kdWN0TGlzdHMgZnJvbSAnLi9SZXNvdXJjZXMvUHJvZHVjdExpc3RzL1Byb2R1Y3RMaXN0cyc7XG5pbXBvcnQgTXlQbGF5dGltZSBmcm9tICcuL1Jlc291cmNlcy9Vc2Vycy9NeVBsYXl0aW1lJztcbmltcG9ydCBVbmRlbGl2ZXJhYmxlRGF0ZXMgZnJvbSAnLi9SZXNvdXJjZXMvVW5kZWxpdmVyYWJsZURhdGVzL1VuZGVybGl2ZXJhYmxlRGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQge1xuICAgIHB1YmxpYyBhdXRoITogQXV0aDtcbiAgICBwdWJsaWMgY29kZXMhOiBDb2RlcztcbiAgICBwdWJsaWMgcHJvZHVjdHMhOiBQcm9kdWN0cztcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9ucyE6IFN1YnNjcmlwdGlvbnM7XG4gICAgcHVibGljIHdhY2MhOiBXYWNjUmVzb3VyY2VzO1xuICAgIHB1YmxpYyBndWVzdHMhOiBHdWVzdHNSZXNvdXJjZXM7XG4gICAgcHVibGljIHVzZXJzITogVXNlcnM7XG4gICAgcHVibGljIGdpZnQhOiBHaWZ0O1xuICAgIHB1YmxpYyBjb250YWN0ITogQ29udGFjdDtcbiAgICBwdWJsaWMgcHJvZHVjdExpc3RzITogUHJvZHVjdExpc3RzO1xuICAgIHB1YmxpYyB1bmRlbGl2ZXJhYmxlRGF0ZXMhOiBVbmRlbGl2ZXJhYmxlRGF0ZXM7XG4gICAgcHVibGljIG15UGxheXRpbWUhOiBNeVBsYXl0aW1lO1xuXG4gICAgcHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IENsaWVudEFsbE9wdGlvbnMgPSB7XG4gICAgICAgIGFwaVZlcnNpb246ICd2MScsXG4gICAgICAgIGJhc2VVcmw6ICcvYXBpJyxcbiAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgICB2ZXJzaW9uOiAnMC4wLjEnLFxuICAgICAgICBmZWF0dXJlczoge1xuICAgICAgICAgICAgdHJpbVRyYWlsaW5nU2xhc2g6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIG9wdHM6IENsaWVudE9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0cyk7XG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XG4gICAgICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xuICAgIH1cblxuICAgIGdldEh0dHBDbGllbnQoKTogSHR0cENsaWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQ7XG4gICAgfVxuXG4gICAgbG9hZFJlc291cmNlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hdXRoID0gbmV3IEF1dGgodGhpcyk7XG4gICAgICAgIHRoaXMuY29kZXMgPSBuZXcgQ29kZXModGhpcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBuZXcgUHJvZHVjdHModGhpcyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb25zKHRoaXMpO1xuICAgICAgICB0aGlzLndhY2MgPSBsb2FkV2FjY1Jlc291cmNlcyh0aGlzKTtcbiAgICAgICAgdGhpcy5ndWVzdHMgPSBsb2FkR3Vlc3RzUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXJzID0gbmV3IFVzZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLmdpZnQgPSBuZXcgR2lmdCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb250YWN0ID0gbmV3IENvbnRhY3QodGhpcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpc3RzID0gbmV3IFByb2R1Y3RMaXN0cyh0aGlzKTtcbiAgICAgICAgdGhpcy51bmRlbGl2ZXJhYmxlRGF0ZXMgPSBuZXcgVW5kZWxpdmVyYWJsZURhdGVzKHRoaXMpO1xuICAgIH1cblxuICAgIGdldEJhc2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMuYmFzZVVybH0vJHt0aGlzLm9wdGlvbnMuYXBpVmVyc2lvbn1gO1xuICAgIH1cblxuICAgIGZlYXR1cmVzKCk6IENsaWVudEZlYXR1cmVPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mZWF0dXJlcztcbiAgICB9XG5cbiAgICBzZXREZWJ1ZyhmbGFnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kZWJ1ZyA9IGZsYWc7XG4gICAgfVxufVxuIl19