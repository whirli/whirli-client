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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsImFwaU9wdGlvbnMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImxvYWRSZXNvdXJjZXMiLCJzZWFyY2giLCJyZXNvdXJjZXMiLCJTZWFyY2giLCJhdXRoIiwiQXV0aCIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxNOzs7QUFPakIsa0JBQVlDLFVBQVosRUFBb0M7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDaEMsU0FBS0MsVUFBTCxHQUFrQjtBQUNkQyxNQUFBQSxVQUFVLEVBQUUsSUFERTtBQUVkQyxNQUFBQSxPQUFPLEVBQUUsTUFGSztBQUdkQyxNQUFBQSxLQUFLLEVBQUUsS0FITztBQUlkQyxNQUFBQSxPQUFPLEVBQUU7QUFKSyxLQUFsQjtBQU1BLFNBQUtMLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS00sYUFBTDtBQUNIOzs7O29DQUUyQjtBQUN4QixhQUFPLEtBQUtOLFVBQVo7QUFDSDs7O29DQUVxQjtBQUNsQixXQUFLTyxNQUFMLEdBQWMsSUFBSUMsc0JBQVVDLE1BQWQsQ0FBcUIsSUFBckIsQ0FBZDtBQUNBLFdBQUtDLElBQUwsR0FBWSxJQUFJRixzQkFBVUcsSUFBZCxDQUFtQixJQUFuQixDQUFaO0FBQ0g7OztrQ0FFcUI7QUFDbEIsdUJBQVUsS0FBS1YsVUFBTCxDQUFnQkUsT0FBMUIsY0FBcUMsS0FBS0YsVUFBTCxDQUFnQkMsVUFBckQ7QUFDSDs7OzZCQUVRVSxJLEVBQXFCO0FBQzFCLFdBQUtYLFVBQUwsQ0FBZ0JHLEtBQWhCLEdBQXdCUSxJQUF4QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwaU9wdGlvbnMgZnJvbSAnLi9JbnRlcmZhY2VzL0FwaU9wdGlvbnMnO1xuaW1wb3J0IEh0dHBDbGllbnQgZnJvbSAnLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuaW1wb3J0IHJlc291cmNlcyBmcm9tICcuL1Jlc291cmNlcyc7XG5pbXBvcnQgQWJzdHJhY3RSZXNvdXJjZSBmcm9tICcuL1Jlc291cmNlcy9BYnN0cmFjdFJlc291cmNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50IHtcbiAgICBwdWJsaWMgc2VhcmNoITogQWJzdHJhY3RSZXNvdXJjZTtcbiAgICBwdWJsaWMgYXV0aCE6IEFic3RyYWN0UmVzb3VyY2U7XG5cbiAgICBwcm90ZWN0ZWQgYXBpT3B0aW9uczogQXBpT3B0aW9ucztcbiAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgdGhpcy5hcGlPcHRpb25zID0ge1xuICAgICAgICAgICAgYXBpVmVyc2lvbjogJ3YxJyxcbiAgICAgICAgICAgIGJhc2VVcmw6ICcvYXBpJyxcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjAuMScsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XG4gICAgICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xuICAgIH1cblxuICAgIGdldEh0dHBDbGllbnQoKTogSHR0cENsaWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQ7XG4gICAgfVxuXG4gICAgbG9hZFJlc291cmNlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgcmVzb3VyY2VzLlNlYXJjaCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdXRoID0gbmV3IHJlc291cmNlcy5BdXRoKHRoaXMpO1xuICAgIH1cblxuICAgIGdldEJhc2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmFwaU9wdGlvbnMuYmFzZVVybH0vJHt0aGlzLmFwaU9wdGlvbnMuYXBpVmVyc2lvbn1gO1xuICAgIH1cblxuICAgIHNldERlYnVnKGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcGlPcHRpb25zLmRlYnVnID0gZmxhZztcbiAgICB9XG59XG4iXX0=