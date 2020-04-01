"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Auth = _interopRequireDefault(require("./Resources/Auth/Auth"));

var _Users = _interopRequireDefault(require("./Resources/Users/Users"));

var _UserSubscriptions = _interopRequireDefault(require("./Resources/UserSubscriptions/UserSubscriptions"));

var _Basket = _interopRequireDefault(require("./Resources/Basket/Basket"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsIm9wdHMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibG9hZFJlc291cmNlcyIsImF1dGgiLCJBdXRoIiwidXNlcnMiLCJVc2VycyIsInVzZXJTdWJzY3JpcHRpb25zIiwiVXNlclN1YnNjcmlwdGlvbnMiLCJiYXNrZXQiLCJCYXNrZXQiLCJ3YWNjIiwiZmxhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07OztBQWtCakIsa0JBQVlDLFVBQVosRUFBOEQ7QUFBQSxRQUExQkMsSUFBMEIsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxxQ0FWeEI7QUFDbENDLE1BQUFBLFVBQVUsRUFBRSxJQURzQjtBQUVsQ0MsTUFBQUEsT0FBTyxFQUFFLE1BRnlCO0FBR2xDQyxNQUFBQSxLQUFLLEVBQUUsS0FIMkI7QUFJbENDLE1BQUFBLE9BQU8sRUFBRSxPQUp5QjtBQUtsQ0MsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLGlCQUFpQixFQUFFO0FBRGI7QUFMd0IsS0FVd0I7O0FBQzFELFNBQUtDLE9BQUwsR0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsS0FBS0YsT0FBbkIsRUFBNEJQLElBQTVCLENBQWY7QUFDQSxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtXLGFBQUw7QUFDSDs7OztvQ0FFMkI7QUFDeEIsYUFBTyxLQUFLWCxVQUFaO0FBQ0g7OztvQ0FFcUI7QUFDbEIsV0FBS1ksSUFBTCxHQUFZLElBQUlDLGdCQUFKLENBQVMsSUFBVCxDQUFaO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLElBQUlDLGlCQUFKLENBQVUsSUFBVixDQUFiO0FBQ0EsV0FBS0MsaUJBQUwsR0FBeUIsSUFBSUMsNkJBQUosQ0FBc0IsSUFBdEIsQ0FBekI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsSUFBSUMsa0JBQUosQ0FBVyxJQUFYLENBQWQ7QUFDQSxXQUFLQyxJQUFMLEdBQVksNkJBQWtCLElBQWxCLENBQVo7QUFDSDs7O2tDQUVxQjtBQUNsQix1QkFBVSxLQUFLWixPQUFMLENBQWFMLE9BQXZCLGNBQWtDLEtBQUtLLE9BQUwsQ0FBYU4sVUFBL0M7QUFDSDs7OytCQUVnQztBQUM3QixhQUFPLEtBQUtNLE9BQUwsQ0FBYUYsUUFBcEI7QUFDSDs7OzZCQUVRZSxJLEVBQXFCO0FBQzFCLFdBQUtiLE9BQUwsQ0FBYUosS0FBYixHQUFxQmlCLElBQXJCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnRPcHRpb25zLCBDbGllbnRBbGxPcHRpb25zLCBDbGllbnRGZWF0dXJlT3B0aW9ucyB9IGZyb20gJy4vSW50ZXJmYWNlcy9DbGllbnRPcHRpb25zJztcbmltcG9ydCBIdHRwQ2xpZW50IGZyb20gJy4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcbmltcG9ydCBBdXRoIGZyb20gJy4vUmVzb3VyY2VzL0F1dGgvQXV0aCc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMvVXNlcnMnO1xuaW1wb3J0IFVzZXJTdWJzY3JpcHRpb25zIGZyb20gJy4vUmVzb3VyY2VzL1VzZXJTdWJzY3JpcHRpb25zL1VzZXJTdWJzY3JpcHRpb25zJztcbmltcG9ydCBCYXNrZXQgZnJvbSAnLi9SZXNvdXJjZXMvQmFza2V0L0Jhc2tldCc7XG5pbXBvcnQgeyBsb2FkV2FjY1Jlc291cmNlcywgV2FjY1Jlc291cmNlcyB9IGZyb20gJy4vUmVzb3VyY2VzL1dhY2MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnQge1xuICAgIHB1YmxpYyBhdXRoITogQXV0aDtcbiAgICBwdWJsaWMgdXNlcnMhOiBVc2VycztcbiAgICBwdWJsaWMgdXNlclN1YnNjcmlwdGlvbnMhOiBVc2VyU3Vic2NyaXB0aW9ucztcbiAgICBwdWJsaWMgYmFza2V0ITogQmFza2V0O1xuICAgIHB1YmxpYyB3YWNjITogV2FjY1Jlc291cmNlcztcblxuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvcHRpb25zOiBDbGllbnRBbGxPcHRpb25zID0ge1xuICAgICAgICBhcGlWZXJzaW9uOiAndjEnLFxuICAgICAgICBiYXNlVXJsOiAnL2FwaScsXG4gICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgICAgIHRyaW1UcmFpbGluZ1NsYXNoOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBvcHRzOiBDbGllbnRPcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdHMpO1xuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xuICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcbiAgICB9XG5cbiAgICBnZXRIdHRwQ2xpZW50KCk6IEh0dHBDbGllbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50O1xuICAgIH1cblxuICAgIGxvYWRSZXNvdXJjZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXV0aCA9IG5ldyBBdXRoKHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXJzID0gbmV3IFVzZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXJTdWJzY3JpcHRpb25zID0gbmV3IFVzZXJTdWJzY3JpcHRpb25zKHRoaXMpO1xuICAgICAgICB0aGlzLmJhc2tldCA9IG5ldyBCYXNrZXQodGhpcyk7XG4gICAgICAgIHRoaXMud2FjYyA9IGxvYWRXYWNjUmVzb3VyY2VzKHRoaXMpO1xuICAgIH1cblxuICAgIGdldEJhc2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMuYmFzZVVybH0vJHt0aGlzLm9wdGlvbnMuYXBpVmVyc2lvbn1gO1xuICAgIH1cblxuICAgIGZlYXR1cmVzKCk6IENsaWVudEZlYXR1cmVPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mZWF0dXJlcztcbiAgICB9XG5cbiAgICBzZXREZWJ1ZyhmbGFnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kZWJ1ZyA9IGZsYWc7XG4gICAgfVxufVxuIl19