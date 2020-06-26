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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Client = /*#__PURE__*/function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImF1dGgiLCJBdXRoIiwiY29kZXMiLCJDb2RlcyIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsIndhY2MiLCJndWVzdHMiLCJ1c2VycyIsIlVzZXJzIiwiZ2lmdCIsIkdpZnQiLCJjb250YWN0IiwiQ29udGFjdCIsInByb2R1Y3RMaXN0cyIsIlByb2R1Y3RMaXN0cyIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNO0FBdUJqQixrQkFBWUMsVUFBWixFQUE4RDtBQUFBLFFBQTFCQyxJQUEwQix1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLHFDQVZ4QjtBQUNsQ0MsTUFBQUEsVUFBVSxFQUFFLElBRHNCO0FBRWxDQyxNQUFBQSxPQUFPLEVBQUUsTUFGeUI7QUFHbENDLE1BQUFBLEtBQUssRUFBRSxLQUgyQjtBQUlsQ0MsTUFBQUEsT0FBTyxFQUFFLE9BSnlCO0FBS2xDQyxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsaUJBQWlCLEVBQUU7QUFEYjtBQUx3QixLQVV3Qjs7QUFDMUQsU0FBS0MsT0FBTCxHQUFlQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFLRixPQUFuQixFQUE0QlAsSUFBNUIsQ0FBZjtBQUNBLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS1csYUFBTDtBQUNIOzs7O29DQUUyQjtBQUN4QixhQUFPLEtBQUtYLFVBQVo7QUFDSDs7O29DQUVxQjtBQUNsQixXQUFLWSxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBUyxJQUFULENBQVo7QUFDQSxXQUFLQyxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBVSxJQUFWLENBQWI7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLElBQUlDLG9CQUFKLENBQWEsSUFBYixDQUFoQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosQ0FBa0IsSUFBbEIsQ0FBckI7QUFDQSxXQUFLQyxJQUFMLEdBQVksNkJBQWtCLElBQWxCLENBQVo7QUFDQSxXQUFLQyxNQUFMLEdBQWMsaUNBQW9CLElBQXBCLENBQWQ7QUFDQSxXQUFLQyxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBVSxJQUFWLENBQWI7QUFDQSxXQUFLQyxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBUyxJQUFULENBQVo7QUFDQSxXQUFLQyxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWSxJQUFaLENBQWY7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLElBQUlDLHdCQUFKLENBQWlCLElBQWpCLENBQXBCO0FBQ0g7OztrQ0FFcUI7QUFDbEIsdUJBQVUsS0FBS3JCLE9BQUwsQ0FBYUwsT0FBdkIsY0FBa0MsS0FBS0ssT0FBTCxDQUFhTixVQUEvQztBQUNIOzs7K0JBRWdDO0FBQzdCLGFBQU8sS0FBS00sT0FBTCxDQUFhRixRQUFwQjtBQUNIOzs7NkJBRVF3QixJLEVBQXFCO0FBQzFCLFdBQUt0QixPQUFMLENBQWFKLEtBQWIsR0FBcUIwQixJQUFyQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50T3B0aW9ucywgQ2xpZW50QWxsT3B0aW9ucywgQ2xpZW50RmVhdHVyZU9wdGlvbnMgfSBmcm9tICcuL0ludGVyZmFjZXMvQ2xpZW50T3B0aW9ucyc7XG5pbXBvcnQgSHR0cENsaWVudCBmcm9tICcuL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5pbXBvcnQgQXV0aCBmcm9tICcuL1Jlc291cmNlcy9BdXRoL0F1dGgnO1xuaW1wb3J0IENvZGVzIGZyb20gJy4vUmVzb3VyY2VzL0NvZGVzL0NvZGVzJztcbmltcG9ydCBTdWJzY3JpcHRpb25zIGZyb20gJy4vUmVzb3VyY2VzL1N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IHsgbG9hZFdhY2NSZXNvdXJjZXMsIFdhY2NSZXNvdXJjZXMgfSBmcm9tICcuL1Jlc291cmNlcy9XYWNjJztcbmltcG9ydCB7IGxvYWRHdWVzdHNSZXNvdXJjZXMsIEd1ZXN0c1Jlc291cmNlcyB9IGZyb20gJy4vUmVzb3VyY2VzL0d1ZXN0cyc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMnO1xuaW1wb3J0IEdpZnQgZnJvbSAnLi9SZXNvdXJjZXMvR2lmdC9HaWZ0JztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Jlc291cmNlcy9Qcm9kdWN0cyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL1Jlc291cmNlcy9Db250YWN0L0NvbnRhY3QnO1xuaW1wb3J0IFByb2R1Y3RMaXN0cyBmcm9tICcuL1Jlc291cmNlcy9Qcm9kdWN0TGlzdHMvUHJvZHVjdExpc3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50IHtcbiAgICBwdWJsaWMgYXV0aCE6IEF1dGg7XG4gICAgcHVibGljIGNvZGVzITogQ29kZXM7XG4gICAgcHVibGljIHByb2R1Y3RzITogUHJvZHVjdHM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnMhOiBTdWJzY3JpcHRpb25zO1xuICAgIHB1YmxpYyB3YWNjITogV2FjY1Jlc291cmNlcztcbiAgICBwdWJsaWMgZ3Vlc3RzITogR3Vlc3RzUmVzb3VyY2VzO1xuICAgIHB1YmxpYyB1c2VycyE6IFVzZXJzO1xuICAgIHB1YmxpYyBnaWZ0ITogR2lmdDtcbiAgICBwdWJsaWMgY29udGFjdCE6IENvbnRhY3Q7XG4gICAgcHVibGljIHByb2R1Y3RMaXN0cyE6IFByb2R1Y3RMaXN0cztcblxuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvcHRpb25zOiBDbGllbnRBbGxPcHRpb25zID0ge1xuICAgICAgICBhcGlWZXJzaW9uOiAndjEnLFxuICAgICAgICBiYXNlVXJsOiAnL2FwaScsXG4gICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICAgIHRyaW1UcmFpbGluZ1NsYXNoOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBvcHRzOiBDbGllbnRPcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdHMpO1xuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xuICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcbiAgICB9XG5cbiAgICBnZXRIdHRwQ2xpZW50KCk6IEh0dHBDbGllbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50O1xuICAgIH1cblxuICAgIGxvYWRSZXNvdXJjZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXV0aCA9IG5ldyBBdXRoKHRoaXMpO1xuICAgICAgICB0aGlzLmNvZGVzID0gbmV3IENvZGVzKHRoaXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gbmV3IFByb2R1Y3RzKHRoaXMpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9ucyh0aGlzKTtcbiAgICAgICAgdGhpcy53YWNjID0gbG9hZFdhY2NSZXNvdXJjZXModGhpcyk7XG4gICAgICAgIHRoaXMuZ3Vlc3RzID0gbG9hZEd1ZXN0c1Jlc291cmNlcyh0aGlzKTtcbiAgICAgICAgdGhpcy51c2VycyA9IG5ldyBVc2Vycyh0aGlzKTtcbiAgICAgICAgdGhpcy5naWZ0ID0gbmV3IEdpZnQodGhpcyk7XG4gICAgICAgIHRoaXMuY29udGFjdCA9IG5ldyBDb250YWN0KHRoaXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0cyA9IG5ldyBQcm9kdWN0TGlzdHModGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QmFzZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5iYXNlVXJsfS8ke3RoaXMub3B0aW9ucy5hcGlWZXJzaW9ufWA7XG4gICAgfVxuXG4gICAgZmVhdHVyZXMoKTogQ2xpZW50RmVhdHVyZU9wdGlvbnMge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZlYXR1cmVzO1xuICAgIH1cblxuICAgIHNldERlYnVnKGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRlYnVnID0gZmxhZztcbiAgICB9XG59XG4iXX0=