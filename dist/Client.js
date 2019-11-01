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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsImFwaU9wdGlvbnMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImxvYWRSZXNvdXJjZXMiLCJzZWFyY2giLCJyZXNvdXJjZXMiLCJTZWFyY2giLCJhdXRoIiwiQXV0aCIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxNOzs7QUFPakIsa0JBQVlDLFVBQVosRUFBb0M7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDaEMsU0FBS0MsVUFBTCxHQUFrQjtBQUNkQyxNQUFBQSxVQUFVLEVBQUUsSUFERTtBQUVkQyxNQUFBQSxPQUFPLEVBQUUsTUFGSztBQUdkQyxNQUFBQSxLQUFLLEVBQUUsS0FITztBQUlkQyxNQUFBQSxPQUFPLEVBQUU7QUFKSyxLQUFsQjtBQU1BLFNBQUtMLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS00sYUFBTDtBQUNIOzs7O29DQUUyQjtBQUN4QixhQUFPLEtBQUtOLFVBQVo7QUFDSDs7O29DQUVxQjtBQUNsQixXQUFLTyxNQUFMLEdBQWMsSUFBSUMsc0JBQVVDLE1BQWQsQ0FBcUIsSUFBckIsQ0FBZDtBQUNBLFdBQUtDLElBQUwsR0FBWSxJQUFJRixzQkFBVUcsSUFBZCxDQUFtQixJQUFuQixDQUFaO0FBQ0g7OztrQ0FFcUI7QUFDbEIsdUJBQVUsS0FBS1YsVUFBTCxDQUFnQkUsT0FBMUIsY0FBcUMsS0FBS0YsVUFBTCxDQUFnQkMsVUFBckQ7QUFDSDs7OzZCQUVRVSxJLEVBQXFCO0FBQzFCLFdBQUtYLFVBQUwsQ0FBZ0JHLEtBQWhCLEdBQXdCUSxJQUF4QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwaU9wdGlvbnMgZnJvbSAnLi9JbnRlcmZhY2VzL0FwaU9wdGlvbnMnO1xuaW1wb3J0IEh0dHBDbGllbnQgZnJvbSAnLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuaW1wb3J0IHJlc291cmNlcyBmcm9tICcuL1Jlc291cmNlcyc7XG5pbXBvcnQgQXV0aCBmcm9tICcuL1Jlc291cmNlcy9BdXRoL2F1dGgnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1Jlc291cmNlcy9TZWFyY2gvU2VhcmNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50IHtcbiAgICBwdWJsaWMgc2VhcmNoITogU2VhcmNoO1xuICAgIHB1YmxpYyBhdXRoITogQXV0aDtcblxuICAgIHByb3RlY3RlZCBhcGlPcHRpb25zOiBBcGlPcHRpb25zO1xuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuICAgICAgICB0aGlzLmFwaU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhcGlWZXJzaW9uOiAndjEnLFxuICAgICAgICAgICAgYmFzZVVybDogJy9hcGknLFxuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0SHR0cENsaWVudCgpOiBIdHRwQ2xpZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudDtcbiAgICB9XG5cbiAgICBsb2FkUmVzb3VyY2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyByZXNvdXJjZXMuU2VhcmNoKHRoaXMpO1xuICAgICAgICB0aGlzLmF1dGggPSBuZXcgcmVzb3VyY2VzLkF1dGgodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QmFzZVBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYXBpT3B0aW9ucy5iYXNlVXJsfS8ke3RoaXMuYXBpT3B0aW9ucy5hcGlWZXJzaW9ufWA7XG4gICAgfVxuXG4gICAgc2V0RGVidWcoZmxhZzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmFwaU9wdGlvbnMuZGVidWcgPSBmbGFnO1xuICAgIH1cbn1cbiJdfQ==