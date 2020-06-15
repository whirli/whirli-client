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

var _Contact = _interopRequireDefault(require("./Resources/Contact/Contact"));

var _Users = _interopRequireDefault(require("./Resources/Users"));

var _Gift = _interopRequireDefault(require("./Resources/Gift/Gift"));

var _Products = _interopRequireDefault(require("./Resources/Products"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImF1dGgiLCJBdXRoIiwiY29kZXMiLCJDb2RlcyIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsIndhY2MiLCJndWVzdHMiLCJ1c2VycyIsIlVzZXJzIiwiZ2lmdCIsIkdpZnQiLCJjb250YWN0IiwiQ29udGFjdCIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFzQmpCLGtCQUFZQyxVQUFaLEVBQThEO0FBQUEsUUFBMUJDLElBQTBCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEscUNBVnhCO0FBQ2xDQyxNQUFBQSxVQUFVLEVBQUUsSUFEc0I7QUFFbENDLE1BQUFBLE9BQU8sRUFBRSxNQUZ5QjtBQUdsQ0MsTUFBQUEsS0FBSyxFQUFFLEtBSDJCO0FBSWxDQyxNQUFBQSxPQUFPLEVBQUUsT0FKeUI7QUFLbENDLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxpQkFBaUIsRUFBRTtBQURiO0FBTHdCLEtBVXdCOztBQUMxRCxTQUFLQyxPQUFMLEdBQWVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUtGLE9BQW5CLEVBQTRCUCxJQUE1QixDQUFmO0FBQ0EsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLVyxhQUFMO0FBQ0g7Ozs7b0NBRTJCO0FBQ3hCLGFBQU8sS0FBS1gsVUFBWjtBQUNIOzs7b0NBRXFCO0FBQ2xCLFdBQUtZLElBQUwsR0FBWSxJQUFJQyxnQkFBSixDQUFTLElBQVQsQ0FBWjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFVLElBQVYsQ0FBYjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsb0JBQUosQ0FBYSxJQUFiLENBQWhCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixJQUFJQyx5QkFBSixDQUFrQixJQUFsQixDQUFyQjtBQUNBLFdBQUtDLElBQUwsR0FBWSw2QkFBa0IsSUFBbEIsQ0FBWjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxpQ0FBb0IsSUFBcEIsQ0FBZDtBQUNBLFdBQUtDLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFVLElBQVYsQ0FBYjtBQUNBLFdBQUtDLElBQUwsR0FBWSxJQUFJQyxnQkFBSixDQUFTLElBQVQsQ0FBWjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZLElBQVosQ0FBZjtBQUNIOzs7a0NBRXFCO0FBQ2xCLHVCQUFVLEtBQUtuQixPQUFMLENBQWFMLE9BQXZCLGNBQWtDLEtBQUtLLE9BQUwsQ0FBYU4sVUFBL0M7QUFDSDs7OytCQUVnQztBQUM3QixhQUFPLEtBQUtNLE9BQUwsQ0FBYUYsUUFBcEI7QUFDSDs7OzZCQUVRc0IsSSxFQUFxQjtBQUMxQixXQUFLcEIsT0FBTCxDQUFhSixLQUFiLEdBQXFCd0IsSUFBckI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudE9wdGlvbnMsIENsaWVudEFsbE9wdGlvbnMsIENsaWVudEZlYXR1cmVPcHRpb25zIH0gZnJvbSAnLi9JbnRlcmZhY2VzL0NsaWVudE9wdGlvbnMnO1xuaW1wb3J0IEh0dHBDbGllbnQgZnJvbSAnLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9SZXNvdXJjZXMvQXV0aC9BdXRoJztcbmltcG9ydCBDb2RlcyBmcm9tICcuL1Jlc291cmNlcy9Db2Rlcy9Db2Rlcyc7XG5pbXBvcnQgU3Vic2NyaXB0aW9ucyBmcm9tICcuL1Jlc291cmNlcy9TdWJzY3JpcHRpb25zJztcbmltcG9ydCB7IGxvYWRXYWNjUmVzb3VyY2VzLCBXYWNjUmVzb3VyY2VzIH0gZnJvbSAnLi9SZXNvdXJjZXMvV2FjYyc7XG5pbXBvcnQgeyBsb2FkR3Vlc3RzUmVzb3VyY2VzLCBHdWVzdHNSZXNvdXJjZXMgfSBmcm9tICcuL1Jlc291cmNlcy9HdWVzdHMnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9SZXNvdXJjZXMvQ29udGFjdC9Db250YWN0JztcbmltcG9ydCBVc2VycyBmcm9tICcuL1Jlc291cmNlcy9Vc2Vycyc7XG5pbXBvcnQgR2lmdCBmcm9tICcuL1Jlc291cmNlcy9HaWZ0L0dpZnQnO1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vUmVzb3VyY2VzL1Byb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50IHtcbiAgICBwdWJsaWMgYXV0aCE6IEF1dGg7XG4gICAgcHVibGljIGNvZGVzITogQ29kZXM7XG4gICAgcHVibGljIHByb2R1Y3RzITogUHJvZHVjdHM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnMhOiBTdWJzY3JpcHRpb25zO1xuICAgIHB1YmxpYyB3YWNjITogV2FjY1Jlc291cmNlcztcbiAgICBwdWJsaWMgZ3Vlc3RzITogR3Vlc3RzUmVzb3VyY2VzO1xuICAgIHB1YmxpYyB1c2VycyE6IFVzZXJzO1xuICAgIHB1YmxpYyBnaWZ0ITogR2lmdDtcbiAgICBwdWJsaWMgY29udGFjdCE6IENvbnRhY3Q7XG5cbiAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogQ2xpZW50QWxsT3B0aW9ucyA9IHtcbiAgICAgICAgYXBpVmVyc2lvbjogJ3YxJyxcbiAgICAgICAgYmFzZVVybDogJy9hcGknLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIHZlcnNpb246ICcwLjAuMScsXG4gICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgICB0cmltVHJhaWxpbmdTbGFzaDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudDogSHR0cENsaWVudCwgb3B0czogQ2xpZW50T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRzKTtcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0SHR0cENsaWVudCgpOiBIdHRwQ2xpZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudDtcbiAgICB9XG5cbiAgICBsb2FkUmVzb3VyY2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGggPSBuZXcgQXV0aCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2RlcyA9IG5ldyBDb2Rlcyh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IG5ldyBQcm9kdWN0cyh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbnModGhpcyk7XG4gICAgICAgIHRoaXMud2FjYyA9IGxvYWRXYWNjUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICB0aGlzLmd1ZXN0cyA9IGxvYWRHdWVzdHNSZXNvdXJjZXModGhpcyk7XG4gICAgICAgIHRoaXMudXNlcnMgPSBuZXcgVXNlcnModGhpcyk7XG4gICAgICAgIHRoaXMuZ2lmdCA9IG5ldyBHaWZ0KHRoaXMpO1xuICAgICAgICB0aGlzLmNvbnRhY3QgPSBuZXcgQ29udGFjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRCYXNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLmJhc2VVcmx9LyR7dGhpcy5vcHRpb25zLmFwaVZlcnNpb259YDtcbiAgICB9XG5cbiAgICBmZWF0dXJlcygpOiBDbGllbnRGZWF0dXJlT3B0aW9ucyB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmVhdHVyZXM7XG4gICAgfVxuXG4gICAgc2V0RGVidWcoZmxhZzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGVidWcgPSBmbGFnO1xuICAgIH1cbn1cbiJdfQ==