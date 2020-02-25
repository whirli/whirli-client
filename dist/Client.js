"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Resources = _interopRequireDefault(require("./Resources"));

var _wacc = _interopRequireDefault(require("./Resources/wacc"));

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

    _defineProperty(this, "orders", void 0);

    _defineProperty(this, "products", void 0);

    _defineProperty(this, "returnOrders", void 0);

    _defineProperty(this, "search", void 0);

    _defineProperty(this, "users", void 0);

    _defineProperty(this, "subscriptions", void 0);

    _defineProperty(this, "wacc", void 0);

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
      this.orders = new _Resources["default"].Orders(this);
      this.products = new _Resources["default"].Products(this);
      this.returnOrders = new _Resources["default"].ReturnOrders(this);
      this.search = new _Resources["default"].Search(this);
      this.subscriptions = new _Resources["default"].Subscriptions(this);
      this.users = new _Resources["default"].Users(this);
      this.wacc = (0, _wacc["default"])(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsImFwaU9wdGlvbnMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImxvYWRSZXNvdXJjZXMiLCJvcmRlcnMiLCJyZXNvdXJjZXMiLCJPcmRlcnMiLCJwcm9kdWN0cyIsIlByb2R1Y3RzIiwicmV0dXJuT3JkZXJzIiwiUmV0dXJuT3JkZXJzIiwic2VhcmNoIiwiU2VhcmNoIiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbnMiLCJ1c2VycyIsIlVzZXJzIiwid2FjYyIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFPQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFZakIsa0JBQVlDLFVBQVosRUFBb0M7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDaEMsU0FBS0MsVUFBTCxHQUFrQjtBQUNkQyxNQUFBQSxVQUFVLEVBQUUsSUFERTtBQUVkQyxNQUFBQSxPQUFPLEVBQUUsTUFGSztBQUdkQyxNQUFBQSxLQUFLLEVBQUUsS0FITztBQUlkQyxNQUFBQSxPQUFPLEVBQUU7QUFKSyxLQUFsQjtBQU1BLFNBQUtMLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS00sYUFBTDtBQUNIOzs7O29DQUUyQjtBQUN4QixhQUFPLEtBQUtOLFVBQVo7QUFDSDs7O29DQUVxQjtBQUNsQixXQUFLTyxNQUFMLEdBQWMsSUFBSUMsc0JBQVVDLE1BQWQsQ0FBcUIsSUFBckIsQ0FBZDtBQUNBLFdBQUtDLFFBQUwsR0FBZ0IsSUFBSUYsc0JBQVVHLFFBQWQsQ0FBdUIsSUFBdkIsQ0FBaEI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLElBQUlKLHNCQUFVSyxZQUFkLENBQTJCLElBQTNCLENBQXBCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLElBQUlOLHNCQUFVTyxNQUFkLENBQXFCLElBQXJCLENBQWQ7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLElBQUlSLHNCQUFVUyxhQUFkLENBQTRCLElBQTVCLENBQXJCO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLElBQUlWLHNCQUFVVyxLQUFkLENBQW9CLElBQXBCLENBQWI7QUFDQSxXQUFLQyxJQUFMLEdBQVksc0JBQUssSUFBTCxDQUFaO0FBQ0g7OztrQ0FFcUI7QUFDbEIsdUJBQVUsS0FBS25CLFVBQUwsQ0FBZ0JFLE9BQTFCLGNBQXFDLEtBQUtGLFVBQUwsQ0FBZ0JDLFVBQXJEO0FBQ0g7Ozs2QkFFUW1CLEksRUFBcUI7QUFDMUIsV0FBS3BCLFVBQUwsQ0FBZ0JHLEtBQWhCLEdBQXdCaUIsSUFBeEI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcGlPcHRpb25zIGZyb20gJy4vSW50ZXJmYWNlcy9BcGlPcHRpb25zJztcbmltcG9ydCBIdHRwQ2xpZW50IGZyb20gJy4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcbmltcG9ydCByZXNvdXJjZXMgZnJvbSAnLi9SZXNvdXJjZXMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1Jlc291cmNlcy93YWNjL1NlYXJjaC9zZWFyY2gnO1xuaW1wb3J0IFJldHVybk9yZGVycyBmcm9tICcuL1Jlc291cmNlcy93YWNjL1JldHVybnMvcmV0dXJuT3JkZXJzJztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Jlc291cmNlcy9Qcm9kdWN0cy9wcm9kdWN0cyc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMvdXNlcnMnO1xuaW1wb3J0IE9yZGVycyBmcm9tICcuL1Jlc291cmNlcy9PcmRlcnMvb3JkZXJzJztcbmltcG9ydCBTdWJzY3JpcHRpb25zIGZyb20gJy4vUmVzb3VyY2VzL1N1YnNjcmlwdGlvbnMvc3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgd2FjYywgeyBXQUNDIH0gZnJvbSAnLi9SZXNvdXJjZXMvd2FjYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudCB7XG4gICAgcHVibGljIG9yZGVycyE6IE9yZGVycztcbiAgICBwdWJsaWMgcHJvZHVjdHMhOiBQcm9kdWN0cztcbiAgICBwdWJsaWMgcmV0dXJuT3JkZXJzITogUmV0dXJuT3JkZXJzO1xuICAgIHB1YmxpYyBzZWFyY2ghOiBTZWFyY2g7XG4gICAgcHVibGljIHVzZXJzITogVXNlcnM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnMhOiBTdWJzY3JpcHRpb25zO1xuICAgIHB1YmxpYyB3YWNjITogV0FDQztcblxuICAgIHByb3RlY3RlZCBhcGlPcHRpb25zOiBBcGlPcHRpb25zO1xuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50O1xuXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuICAgICAgICB0aGlzLmFwaU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhcGlWZXJzaW9uOiAndjEnLFxuICAgICAgICAgICAgYmFzZVVybDogJy9hcGknLFxuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0SHR0cENsaWVudCgpOiBIdHRwQ2xpZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudDtcbiAgICB9XG5cbiAgICBsb2FkUmVzb3VyY2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9yZGVycyA9IG5ldyByZXNvdXJjZXMuT3JkZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gbmV3IHJlc291cmNlcy5Qcm9kdWN0cyh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXR1cm5PcmRlcnMgPSBuZXcgcmVzb3VyY2VzLlJldHVybk9yZGVycyh0aGlzKTtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgcmVzb3VyY2VzLlNlYXJjaCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IHJlc291cmNlcy5TdWJzY3JpcHRpb25zKHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXJzID0gbmV3IHJlc291cmNlcy5Vc2Vycyh0aGlzKTtcbiAgICAgICAgdGhpcy53YWNjID0gd2FjYyh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRCYXNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5hcGlPcHRpb25zLmJhc2VVcmx9LyR7dGhpcy5hcGlPcHRpb25zLmFwaVZlcnNpb259YDtcbiAgICB9XG5cbiAgICBzZXREZWJ1ZyhmbGFnOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBpT3B0aW9ucy5kZWJ1ZyA9IGZsYWc7XG4gICAgfVxufVxuIl19