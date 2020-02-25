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

    _defineProperty(this, "auth", void 0);

    _defineProperty(this, "orders", void 0);

    _defineProperty(this, "products", void 0);

    _defineProperty(this, "returnOrders", void 0);

    _defineProperty(this, "search", void 0);

    _defineProperty(this, "users", void 0);

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
      this.auth = new _Resources["default"].Auth(this);
      this.orders = new _Resources["default"].Orders(this);
      this.products = new _Resources["default"].Products(this);
      this.returnOrders = new _Resources["default"].ReturnOrders(this);
      this.search = new _Resources["default"].Search(this);
      this.users = new _Resources["default"].Users(this); // this.wacc = {
      //     auth: new resources.WACCAuth(this),
      //     orders: new resources.WACCOrders(this),
      //     returnOrders: new resources.WACCReturnOrders(this),
      //     search: new resources.WACCSearch(this),
      //     users: new resources.WACCUsers(this),
      // };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnQudHMiXSwibmFtZXMiOlsiQ2xpZW50IiwiaHR0cENsaWVudCIsImFwaU9wdGlvbnMiLCJhcGlWZXJzaW9uIiwiYmFzZVVybCIsImRlYnVnIiwidmVyc2lvbiIsImxvYWRSZXNvdXJjZXMiLCJhdXRoIiwicmVzb3VyY2VzIiwiQXV0aCIsIm9yZGVycyIsIk9yZGVycyIsInByb2R1Y3RzIiwiUHJvZHVjdHMiLCJyZXR1cm5PcmRlcnMiLCJSZXR1cm5PcmRlcnMiLCJzZWFyY2giLCJTZWFyY2giLCJ1c2VycyIsIlVzZXJzIiwiZmxhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFxQnFCQSxNOzs7QUFZakIsa0JBQVlDLFVBQVosRUFBb0M7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDaEMsU0FBS0MsVUFBTCxHQUFrQjtBQUNkQyxNQUFBQSxVQUFVLEVBQUUsSUFERTtBQUVkQyxNQUFBQSxPQUFPLEVBQUUsTUFGSztBQUdkQyxNQUFBQSxLQUFLLEVBQUUsS0FITztBQUlkQyxNQUFBQSxPQUFPLEVBQUU7QUFKSyxLQUFsQjtBQU1BLFNBQUtMLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS00sYUFBTDtBQUNIOzs7O29DQUUyQjtBQUN4QixhQUFPLEtBQUtOLFVBQVo7QUFDSDs7O29DQUVxQjtBQUNsQixXQUFLTyxJQUFMLEdBQVksSUFBSUMsc0JBQVVDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBWjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxJQUFJRixzQkFBVUcsTUFBZCxDQUFxQixJQUFyQixDQUFkO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixJQUFJSixzQkFBVUssUUFBZCxDQUF1QixJQUF2QixDQUFoQjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsSUFBSU4sc0JBQVVPLFlBQWQsQ0FBMkIsSUFBM0IsQ0FBcEI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsSUFBSVIsc0JBQVVTLE1BQWQsQ0FBcUIsSUFBckIsQ0FBZDtBQUNBLFdBQUtDLEtBQUwsR0FBYSxJQUFJVixzQkFBVVcsS0FBZCxDQUFvQixJQUFwQixDQUFiLENBTmtCLENBT2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7OztrQ0FFcUI7QUFDbEIsdUJBQVUsS0FBS2xCLFVBQUwsQ0FBZ0JFLE9BQTFCLGNBQXFDLEtBQUtGLFVBQUwsQ0FBZ0JDLFVBQXJEO0FBQ0g7Ozs2QkFFUWtCLEksRUFBcUI7QUFDMUIsV0FBS25CLFVBQUwsQ0FBZ0JHLEtBQWhCLEdBQXdCZ0IsSUFBeEI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcGlPcHRpb25zIGZyb20gJy4vSW50ZXJmYWNlcy9BcGlPcHRpb25zJztcbmltcG9ydCBIdHRwQ2xpZW50IGZyb20gJy4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcbmltcG9ydCByZXNvdXJjZXMgZnJvbSAnLi9SZXNvdXJjZXMnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9SZXNvdXJjZXMvd2FjYy9BdXRoL2F1dGgnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1Jlc291cmNlcy93YWNjL1NlYXJjaC9zZWFyY2gnO1xuaW1wb3J0IFJldHVybk9yZGVycyBmcm9tICcuL1Jlc291cmNlcy93YWNjL1JldHVybnMvcmV0dXJuT3JkZXJzJztcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Jlc291cmNlcy9Qcm9kdWN0cy9wcm9kdWN0cyc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvVXNlcnMvdXNlcnMnO1xuaW1wb3J0IE9yZGVycyBmcm9tICcuL1Jlc291cmNlcy93YWNjL09yZGVycy9vcmRlcnMnO1xuaW1wb3J0IFdBQ0NBdXRoIGZyb20gJy4vUmVzb3VyY2VzL3dhY2MvQXV0aC9hdXRoJztcbmltcG9ydCBXQUNDU2VhcmNoIGZyb20gJy4vUmVzb3VyY2VzL3dhY2MvU2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgV0FDQ1JldHVybk9yZGVycyBmcm9tICcuL1Jlc291cmNlcy93YWNjL1JldHVybnMvcmV0dXJuT3JkZXJzJztcbmltcG9ydCBXQUNDVXNlcnMgZnJvbSAnLi9SZXNvdXJjZXMvd2FjYy9Vc2Vycy91c2Vycyc7XG5pbXBvcnQgV0FDQ09yZGVycyBmcm9tICcuL1Jlc291cmNlcy93YWNjL09yZGVycy9vcmRlcnMnO1xuXG5pbnRlcmZhY2UgV0FDQyB7XG4gICAgdXNlcnM6IFdBQ0NVc2VycztcbiAgICBhdXRoOiBXQUNDQXV0aDtcbiAgICBvcmRlcnM6IFdBQ0NPcmRlcnM7XG4gICAgcmV0dXJuT3JkZXJzOiBXQUNDUmV0dXJuT3JkZXJzO1xuICAgIHNlYXJjaDogV0FDQ1NlYXJjaDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50IHtcbiAgICBwdWJsaWMgYXV0aCE6IEF1dGg7XG4gICAgcHVibGljIG9yZGVycyE6IE9yZGVycztcbiAgICBwdWJsaWMgcHJvZHVjdHMhOiBQcm9kdWN0cztcbiAgICBwdWJsaWMgcmV0dXJuT3JkZXJzITogUmV0dXJuT3JkZXJzO1xuICAgIHB1YmxpYyBzZWFyY2ghOiBTZWFyY2g7XG4gICAgcHVibGljIHVzZXJzITogVXNlcnM7XG4gICAgcHVibGljIHdhY2MhOiBXQUNDO1xuXG4gICAgcHJvdGVjdGVkIGFwaU9wdGlvbnM6IEFwaU9wdGlvbnM7XG4gICAgcHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuYXBpT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFwaVZlcnNpb246ICd2MScsXG4gICAgICAgICAgICBiYXNlVXJsOiAnL2FwaScsXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4wLjEnLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xuICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcbiAgICB9XG5cbiAgICBnZXRIdHRwQ2xpZW50KCk6IEh0dHBDbGllbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50O1xuICAgIH1cblxuICAgIGxvYWRSZXNvdXJjZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXV0aCA9IG5ldyByZXNvdXJjZXMuQXV0aCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcmRlcnMgPSBuZXcgcmVzb3VyY2VzLk9yZGVycyh0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IG5ldyByZXNvdXJjZXMuUHJvZHVjdHModGhpcyk7XG4gICAgICAgIHRoaXMucmV0dXJuT3JkZXJzID0gbmV3IHJlc291cmNlcy5SZXR1cm5PcmRlcnModGhpcyk7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gbmV3IHJlc291cmNlcy5TZWFyY2godGhpcyk7XG4gICAgICAgIHRoaXMudXNlcnMgPSBuZXcgcmVzb3VyY2VzLlVzZXJzKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLndhY2MgPSB7XG4gICAgICAgIC8vICAgICBhdXRoOiBuZXcgcmVzb3VyY2VzLldBQ0NBdXRoKHRoaXMpLFxuICAgICAgICAvLyAgICAgb3JkZXJzOiBuZXcgcmVzb3VyY2VzLldBQ0NPcmRlcnModGhpcyksXG4gICAgICAgIC8vICAgICByZXR1cm5PcmRlcnM6IG5ldyByZXNvdXJjZXMuV0FDQ1JldHVybk9yZGVycyh0aGlzKSxcbiAgICAgICAgLy8gICAgIHNlYXJjaDogbmV3IHJlc291cmNlcy5XQUNDU2VhcmNoKHRoaXMpLFxuICAgICAgICAvLyAgICAgdXNlcnM6IG5ldyByZXNvdXJjZXMuV0FDQ1VzZXJzKHRoaXMpLFxuICAgICAgICAvLyB9O1xuICAgIH1cblxuICAgIGdldEJhc2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmFwaU9wdGlvbnMuYmFzZVVybH0vJHt0aGlzLmFwaU9wdGlvbnMuYXBpVmVyc2lvbn1gO1xuICAgIH1cblxuICAgIHNldERlYnVnKGZsYWc6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcGlPcHRpb25zLmRlYnVnID0gZmxhZztcbiAgICB9XG59XG4iXX0=