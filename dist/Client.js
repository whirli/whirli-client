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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImF1dGgiLCJBdXRoIiwiY29kZXMiLCJDb2RlcyIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsIndhY2MiLCJndWVzdHMiLCJ1c2VycyIsIlVzZXJzIiwiZmxhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07OztBQW9CakIsa0JBQVlDLFVBQVosRUFBOEQ7QUFBQSxRQUExQkMsSUFBMEIsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxxQ0FWeEI7QUFDbENDLE1BQUFBLFVBQVUsRUFBRSxJQURzQjtBQUVsQ0MsTUFBQUEsT0FBTyxFQUFFLE1BRnlCO0FBR2xDQyxNQUFBQSxLQUFLLEVBQUUsS0FIMkI7QUFJbENDLE1BQUFBLE9BQU8sRUFBRSxPQUp5QjtBQUtsQ0MsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLGlCQUFpQixFQUFFO0FBRGI7QUFMd0IsS0FVd0I7O0FBQzFELFNBQUtDLE9BQUwsR0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsS0FBS0YsT0FBbkIsRUFBNEJQLElBQTVCLENBQWY7QUFDQSxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtXLGFBQUw7QUFDSDs7OztvQ0FFMkI7QUFDeEIsYUFBTyxLQUFLWCxVQUFaO0FBQ0g7OztvQ0FFcUI7QUFDbEIsV0FBS1ksSUFBTCxHQUFZLElBQUlDLGdCQUFKLENBQVMsSUFBVCxDQUFaO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLElBQUlDLGlCQUFKLENBQVUsSUFBVixDQUFiO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixJQUFJQyxvQkFBSixDQUFhLElBQWIsQ0FBaEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLElBQUlDLHlCQUFKLENBQWtCLElBQWxCLENBQXJCO0FBQ0EsV0FBS0MsSUFBTCxHQUFZLDZCQUFrQixJQUFsQixDQUFaO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLGlDQUFvQixJQUFwQixDQUFkO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLElBQUlDLGlCQUFKLENBQVUsSUFBVixDQUFiO0FBQ0g7OztrQ0FFcUI7QUFDbEIsdUJBQVUsS0FBS2YsT0FBTCxDQUFhTCxPQUF2QixjQUFrQyxLQUFLSyxPQUFMLENBQWFOLFVBQS9DO0FBQ0g7OzsrQkFFZ0M7QUFDN0IsYUFBTyxLQUFLTSxPQUFMLENBQWFGLFFBQXBCO0FBQ0g7Ozs2QkFFUWtCLEksRUFBcUI7QUFDMUIsV0FBS2hCLE9BQUwsQ0FBYUosS0FBYixHQUFxQm9CLElBQXJCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnRPcHRpb25zLCBDbGllbnRBbGxPcHRpb25zLCBDbGllbnRGZWF0dXJlT3B0aW9ucyB9IGZyb20gJy4vSW50ZXJmYWNlcy9DbGllbnRPcHRpb25zJztcbmltcG9ydCBIdHRwQ2xpZW50IGZyb20gJy4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcbmltcG9ydCBBdXRoIGZyb20gJy4vUmVzb3VyY2VzL0F1dGgvQXV0aCc7XG5pbXBvcnQgQ29kZXMgZnJvbSAnLi9SZXNvdXJjZXMvQ29kZXMvQ29kZXMnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbnMgZnJvbSAnLi9SZXNvdXJjZXMvU3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgeyBsb2FkV2FjY1Jlc291cmNlcywgV2FjY1Jlc291cmNlcyB9IGZyb20gJy4vUmVzb3VyY2VzL1dhY2MnO1xuaW1wb3J0IHsgbG9hZEd1ZXN0c1Jlc291cmNlcywgR3Vlc3RzUmVzb3VyY2VzIH0gZnJvbSAnLi9SZXNvdXJjZXMvR3Vlc3RzJztcbmltcG9ydCBVc2VycyBmcm9tICcuL1Jlc291cmNlcy9Vc2Vycyc7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9SZXNvdXJjZXMvUHJvZHVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQge1xuICAgIHB1YmxpYyBhdXRoITogQXV0aDtcbiAgICBwdWJsaWMgY29kZXMhOiBDb2RlcztcbiAgICBwdWJsaWMgcHJvZHVjdHMhOiBQcm9kdWN0cztcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9ucyE6IFN1YnNjcmlwdGlvbnM7XG4gICAgcHVibGljIHdhY2MhOiBXYWNjUmVzb3VyY2VzO1xuICAgIHB1YmxpYyBndWVzdHMhOiBHdWVzdHNSZXNvdXJjZXM7XG4gICAgcHVibGljIHVzZXJzITogVXNlcnM7XG5cbiAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb3B0aW9uczogQ2xpZW50QWxsT3B0aW9ucyA9IHtcbiAgICAgICAgYXBpVmVyc2lvbjogJ3YxJyxcbiAgICAgICAgYmFzZVVybDogJy9hcGknLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIHZlcnNpb246ICcwLjAuMScsXG4gICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgICB0cmltVHJhaWxpbmdTbGFzaDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudDogSHR0cENsaWVudCwgb3B0czogQ2xpZW50T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRzKTtcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0SHR0cENsaWVudCgpOiBIdHRwQ2xpZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudDtcbiAgICB9XG5cbiAgICBsb2FkUmVzb3VyY2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGggPSBuZXcgQXV0aCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2RlcyA9IG5ldyBDb2Rlcyh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IG5ldyBQcm9kdWN0cyh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbnModGhpcyk7XG4gICAgICAgIHRoaXMud2FjYyA9IGxvYWRXYWNjUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICB0aGlzLmd1ZXN0cyA9IGxvYWRHdWVzdHNSZXNvdXJjZXModGhpcyk7XG4gICAgICAgIHRoaXMudXNlcnMgPSBuZXcgVXNlcnModGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QmFzZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5iYXNlVXJsfS8ke3RoaXMub3B0aW9ucy5hcGlWZXJzaW9ufWA7XG4gICAgfVxuXG4gICAgZmVhdHVyZXMoKTogQ2xpZW50RmVhdHVyZU9wdGlvbnMge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZlYXR1cmVzO1xuICAgIH1cblxuICAgIHNldERlYnVnKGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRlYnVnID0gZmxhZztcbiAgICB9XG59XG4iXX0=