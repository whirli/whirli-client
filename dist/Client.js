"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Resources = _interopRequireDefault(require("./Resources"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Client =
/*#__PURE__*/
function () {
  function Client(httpClient) {
    _classCallCheck(this, Client);

    _defineProperty(this, "search", void 0);

    _defineProperty(this, "auth", void 0);

    _defineProperty(this, "returnOrders", void 0);

    _defineProperty(this, "apiOptions", void 0);

    _defineProperty(this, "httpClient", void 0);

    this.apiOptions = {
      apiVersion: 'v1',
      baseUrl: '/api',
      debug: false,
      version: '0.0.1'
    };
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
      this.search = new _Resources["default"].Search(this);
      this.auth = new _Resources["default"].Auth(this);
      this.returnOrders = new _Resources["default"].ReturnOrders(this);
    }
  }, {
    key: "getBasePath",
    value: function getBasePath() {
      return "".concat(this.apiOptions.baseUrl, "/").concat(this.apiOptions.apiVersion);
    }
  }, {
    key: "setDebug",
    value: function setDebug(flag) {
      this.apiOptions.debug = flag;
    }
  }]);

  return Client;
}();

exports["default"] = Client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsImFwaU9wdGlvbnMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImxvYWRSZXNvdXJjZXMiLCJzZWFyY2giLCJyZXNvdXJjZXMiLCJTZWFyY2giLCJhdXRoIiwiQXV0aCIsInJldHVybk9yZGVycyIsIlJldHVybk9yZGVycyIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBS3FCQSxNOzs7QUFRakIsa0JBQVlDLFVBQVosRUFBb0M7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDaEMsU0FBS0MsVUFBTCxHQUFrQjtBQUNkQyxNQUFBQSxVQUFVLEVBQUUsSUFERTtBQUVkQyxNQUFBQSxPQUFPLEVBQUUsTUFGSztBQUdkQyxNQUFBQSxLQUFLLEVBQUUsS0FITztBQUlkQyxNQUFBQSxPQUFPLEVBQUU7QUFKSyxLQUFsQjtBQU1BLFNBQUtMLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS00sYUFBTDtBQUNIOzs7O29DQUUyQjtBQUN4QixhQUFPLEtBQUtOLFVBQVo7QUFDSDs7O29DQUVxQjtBQUNsQixXQUFLTyxNQUFMLEdBQWMsSUFBSUMsc0JBQVVDLE1BQWQsQ0FBcUIsSUFBckIsQ0FBZDtBQUNBLFdBQUtDLElBQUwsR0FBWSxJQUFJRixzQkFBVUcsSUFBZCxDQUFtQixJQUFuQixDQUFaO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixJQUFJSixzQkFBVUssWUFBZCxDQUEyQixJQUEzQixDQUFwQjtBQUNIOzs7a0NBRXFCO0FBQ2xCLHVCQUFVLEtBQUtaLFVBQUwsQ0FBZ0JFLE9BQTFCLGNBQXFDLEtBQUtGLFVBQUwsQ0FBZ0JDLFVBQXJEO0FBQ0g7Ozs2QkFFUVksSSxFQUFxQjtBQUMxQixXQUFLYixVQUFMLENBQWdCRyxLQUFoQixHQUF3QlUsSUFBeEI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcGlPcHRpb25zIGZyb20gJy4vSW50ZXJmYWNlcy9BcGlPcHRpb25zJztcbmltcG9ydCBIdHRwQ2xpZW50IGZyb20gJy4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcbmltcG9ydCByZXNvdXJjZXMgZnJvbSAnLi9SZXNvdXJjZXMnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9SZXNvdXJjZXMvQXV0aC9hdXRoJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9SZXNvdXJjZXMvU2VhcmNoL1NlYXJjaCc7XG5pbXBvcnQgUmV0dXJuT3JkZXJzIGZyb20gJy4vUmVzb3VyY2VzL1JldHVybnMvcmV0dXJuT3JkZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50IHtcbiAgICBwdWJsaWMgc2VhcmNoITogU2VhcmNoO1xuICAgIHB1YmxpYyBhdXRoITogQXV0aDtcbiAgICBwdWJsaWMgcmV0dXJuT3JkZXJzITogUmV0dXJuT3JkZXJzO1xuXG4gICAgcHJvdGVjdGVkIGFwaU9wdGlvbnM6IEFwaU9wdGlvbnM7XG4gICAgcHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuYXBpT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFwaVZlcnNpb246ICd2MScsXG4gICAgICAgICAgICBiYXNlVXJsOiAnL2FwaScsXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjEnLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xuICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcbiAgICB9XG5cbiAgICBnZXRIdHRwQ2xpZW50KCk6IEh0dHBDbGllbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50O1xuICAgIH1cblxuICAgIGxvYWRSZXNvdXJjZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gbmV3IHJlc291cmNlcy5TZWFyY2godGhpcyk7XG4gICAgICAgIHRoaXMuYXV0aCA9IG5ldyByZXNvdXJjZXMuQXV0aCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXR1cm5PcmRlcnMgPSBuZXcgcmVzb3VyY2VzLlJldHVybk9yZGVycyh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRCYXNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5hcGlPcHRpb25zLmJhc2VVcmx9LyR7dGhpcy5hcGlPcHRpb25zLmFwaVZlcnNpb259YDtcbiAgICB9XG5cbiAgICBzZXREZWJ1ZyhmbGFnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBpT3B0aW9ucy5kZWJ1ZyA9IGZsYWc7XG4gICAgfVxufVxuIl19