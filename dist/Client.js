"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Auth = _interopRequireDefault(require("./Resources/Auth/Auth"));

var _Codes = _interopRequireDefault(require("./Resources/Codes/Codes"));

var _Subscriptions = require("./Resources/Subscriptions");

var _Wacc = require("./Resources/Wacc");

var _Guest = require("./Resources/Guest");

var _User = _interopRequireDefault(require("./Resources/User"));

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

    _defineProperty(this, "codes", void 0);

    _defineProperty(this, "products", void 0);

    _defineProperty(this, "subscriptions", void 0);

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
      this.codes = new _Codes["default"](this);
      this.products = new _Products["default"](this);
      this.subscriptions = (0, _Subscriptions.loadSubscriptionsResources)(this);
      this.wacc = (0, _Wacc.loadWaccResources)(this);
      this.guest = (0, _Guest.loadGuestResources)(this);
      this.user = new _User["default"](this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImF1dGgiLCJBdXRoIiwiY29kZXMiLCJDb2RlcyIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJzdWJzY3JpcHRpb25zIiwid2FjYyIsImd1ZXN0IiwidXNlciIsIlVzZXIiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBb0JqQixrQkFBWUMsVUFBWixFQUE4RDtBQUFBLFFBQTFCQyxJQUEwQix1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLHFDQVZ4QjtBQUNsQ0MsTUFBQUEsVUFBVSxFQUFFLElBRHNCO0FBRWxDQyxNQUFBQSxPQUFPLEVBQUUsTUFGeUI7QUFHbENDLE1BQUFBLEtBQUssRUFBRSxLQUgyQjtBQUlsQ0MsTUFBQUEsT0FBTyxFQUFFLE9BSnlCO0FBS2xDQyxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsaUJBQWlCLEVBQUU7QUFEYjtBQUx3QixLQVV3Qjs7QUFDMUQsU0FBS0MsT0FBTCxHQUFlQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFLRixPQUFuQixFQUE0QlAsSUFBNUIsQ0FBZjtBQUNBLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS1csYUFBTDtBQUNIOzs7O29DQUUyQjtBQUN4QixhQUFPLEtBQUtYLFVBQVo7QUFDSDs7O29DQUVxQjtBQUNsQixXQUFLWSxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBUyxJQUFULENBQVo7QUFDQSxXQUFLQyxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBVSxJQUFWLENBQWI7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLElBQUlDLG9CQUFKLENBQWEsSUFBYixDQUFoQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsK0NBQTJCLElBQTNCLENBQXJCO0FBQ0EsV0FBS0MsSUFBTCxHQUFZLDZCQUFrQixJQUFsQixDQUFaO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLCtCQUFtQixJQUFuQixDQUFiO0FBQ0EsV0FBS0MsSUFBTCxHQUFZLElBQUlDLGdCQUFKLENBQVMsSUFBVCxDQUFaO0FBQ0g7OztrQ0FFcUI7QUFDbEIsdUJBQVUsS0FBS2QsT0FBTCxDQUFhTCxPQUF2QixjQUFrQyxLQUFLSyxPQUFMLENBQWFOLFVBQS9DO0FBQ0g7OzsrQkFFZ0M7QUFDN0IsYUFBTyxLQUFLTSxPQUFMLENBQWFGLFFBQXBCO0FBQ0g7Ozs2QkFFUWlCLEksRUFBcUI7QUFDMUIsV0FBS2YsT0FBTCxDQUFhSixLQUFiLEdBQXFCbUIsSUFBckI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudE9wdGlvbnMsIENsaWVudEFsbE9wdGlvbnMsIENsaWVudEZlYXR1cmVPcHRpb25zIH0gZnJvbSAnLi9JbnRlcmZhY2VzL0NsaWVudE9wdGlvbnMnO1xuaW1wb3J0IEh0dHBDbGllbnQgZnJvbSAnLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9SZXNvdXJjZXMvQXV0aC9BdXRoJztcbmltcG9ydCBDb2RlcyBmcm9tICcuL1Jlc291cmNlcy9Db2Rlcy9Db2Rlcyc7XG5pbXBvcnQgeyBsb2FkU3Vic2NyaXB0aW9uc1Jlc291cmNlcywgU3Vic2NyaXB0aW9uc1Jlc291cmNlcyB9IGZyb20gJy4vUmVzb3VyY2VzL1N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IHsgbG9hZFdhY2NSZXNvdXJjZXMsIFdhY2NSZXNvdXJjZXMgfSBmcm9tICcuL1Jlc291cmNlcy9XYWNjJztcbmltcG9ydCB7IGxvYWRHdWVzdFJlc291cmNlcywgR3Vlc3RSZXNvdXJjZXMgfSBmcm9tICcuL1Jlc291cmNlcy9HdWVzdCc7XG5pbXBvcnQgVXNlciBmcm9tICcuL1Jlc291cmNlcy9Vc2VyJztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Jlc291cmNlcy9Qcm9kdWN0cy9Qcm9kdWN0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudCB7XG4gICAgcHVibGljIGF1dGghOiBBdXRoO1xuICAgIHB1YmxpYyBjb2RlcyE6IENvZGVzO1xuICAgIHB1YmxpYyBwcm9kdWN0cyE6IFByb2R1Y3RzO1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb25zITogU3Vic2NyaXB0aW9uc1Jlc291cmNlcztcbiAgICBwdWJsaWMgd2FjYyE6IFdhY2NSZXNvdXJjZXM7XG4gICAgcHVibGljIGd1ZXN0ITogR3Vlc3RSZXNvdXJjZXM7XG4gICAgcHVibGljIHVzZXIhOiBVc2VyO1xuXG4gICAgcHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9wdGlvbnM6IENsaWVudEFsbE9wdGlvbnMgPSB7XG4gICAgICAgIGFwaVZlcnNpb246ICd2MScsXG4gICAgICAgIGJhc2VVcmw6ICcvYXBpJyxcbiAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgICB2ZXJzaW9uOiAnMC4wLjEnLFxuICAgICAgICBmZWF0dXJlczoge1xuICAgICAgICAgICAgdHJpbVRyYWlsaW5nU2xhc2g6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIG9wdHM6IENsaWVudE9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0cyk7XG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XG4gICAgICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xuICAgIH1cblxuICAgIGdldEh0dHBDbGllbnQoKTogSHR0cENsaWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQ7XG4gICAgfVxuXG4gICAgbG9hZFJlc291cmNlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hdXRoID0gbmV3IEF1dGgodGhpcyk7XG4gICAgICAgIHRoaXMuY29kZXMgPSBuZXcgQ29kZXModGhpcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBuZXcgUHJvZHVjdHModGhpcyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IGxvYWRTdWJzY3JpcHRpb25zUmVzb3VyY2VzKHRoaXMpO1xuICAgICAgICB0aGlzLndhY2MgPSBsb2FkV2FjY1Jlc291cmNlcyh0aGlzKTtcbiAgICAgICAgdGhpcy5ndWVzdCA9IGxvYWRHdWVzdFJlc291cmNlcyh0aGlzKTtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QmFzZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5iYXNlVXJsfS8ke3RoaXMub3B0aW9ucy5hcGlWZXJzaW9ufWA7XG4gICAgfVxuXG4gICAgZmVhdHVyZXMoKTogQ2xpZW50RmVhdHVyZU9wdGlvbnMge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZlYXR1cmVzO1xuICAgIH1cblxuICAgIHNldERlYnVnKGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRlYnVnID0gZmxhZztcbiAgICB9XG59XG4iXX0=