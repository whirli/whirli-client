"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

var _Baskets = _interopRequireDefault(require("./Baskets"));

var _Gifts = _interopRequireDefault(require("./Gifts"));

var _Subscriptions = _interopRequireDefault(require("./Subscriptions"));

var _Toybox = _interopRequireDefault(require("./Toybox"));

var _Details = _interopRequireDefault(require("./Details"));

var _Addresses = _interopRequireDefault(require("./Addresses"));

var _ProductLists = _interopRequireDefault(require("./ProductLists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Users =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Users, _AbstractResource);

  function Users(api) {
    var _this;

    _classCallCheck(this, Users);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Users).call(this, api));

    _defineProperty(_assertThisInitialized(_this), "addresses", void 0);

    _defineProperty(_assertThisInitialized(_this), "baskets", void 0);

    _defineProperty(_assertThisInitialized(_this), "gifts", void 0);

    _defineProperty(_assertThisInitialized(_this), "details", void 0);

    _defineProperty(_assertThisInitialized(_this), "subscriptions", void 0);

    _defineProperty(_assertThisInitialized(_this), "toybox", void 0);

    _defineProperty(_assertThisInitialized(_this), "productLists", void 0);

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      access: 'guest',
      method: 'POST',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "claimGuestResources", _this.createMethodFromPartialSpec({
      method: 'PATCH',
      path: '/claim'
    }));

    _this.api = api;

    _this.initialise();

    _this.addresses = new _Addresses["default"](api);
    _this.baskets = new _Baskets["default"](api);
    _this.gifts = new _Gifts["default"](api);
    _this.details = new _Details["default"](api);
    _this.subscriptions = new _Subscriptions["default"](api);
    _this.toybox = new _Toybox["default"](api);
    _this.productLists = new _ProductLists["default"](api);
    return _this;
  }

  _createClass(Users, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/users';
      this.defaultAccess = 'member';
    }
  }]);

  return Users;
}(_AbstractResource2["default"]);

exports["default"] = Users;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlcnMiLCJhcGkiLCJjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMiLCJhY2Nlc3MiLCJtZXRob2QiLCJwYXRoIiwiaW5pdGlhbGlzZSIsImFkZHJlc3NlcyIsIkFkZHJlc3NlcyIsImJhc2tldHMiLCJCYXNrZXRzIiwiZ2lmdHMiLCJHaWZ0cyIsImRldGFpbHMiLCJEZXRhaWxzIiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbnMiLCJ0b3lib3giLCJUb3lib3giLCJwcm9kdWN0TGlzdHMiLCJQcm9kdWN0TGlzdHMiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7O0FBU2pCLGlCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQ3JCLCtFQUFNQSxHQUFOOztBQURxQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSw2REFtQkMsTUFBS0MsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxPQUQrQztBQUV2REMsTUFBQUEsTUFBTSxFQUFFLE1BRitDO0FBR3ZEQyxNQUFBQSxJQUFJLEVBQUU7QUFIaUQsS0FBakMsQ0FuQkQ7O0FBQUEsMEVBeUJ1RCxNQUFLSCwyQkFBTCxDQUFpQztBQUM3R0UsTUFBQUEsTUFBTSxFQUFFLE9BRHFHO0FBRTdHQyxNQUFBQSxJQUFJLEVBQUU7QUFGdUcsS0FBakMsQ0F6QnZEOztBQUVyQixVQUFLSixHQUFMLEdBQVdBLEdBQVg7O0FBQ0EsVUFBS0ssVUFBTDs7QUFFQSxVQUFLQyxTQUFMLEdBQWlCLElBQUlDLHFCQUFKLENBQWNQLEdBQWQsQ0FBakI7QUFDQSxVQUFLUSxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWVQsR0FBWixDQUFmO0FBQ0EsVUFBS1UsS0FBTCxHQUFhLElBQUlDLGlCQUFKLENBQVVYLEdBQVYsQ0FBYjtBQUNBLFVBQUtZLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZYixHQUFaLENBQWY7QUFDQSxVQUFLYyxhQUFMLEdBQXFCLElBQUlDLHlCQUFKLENBQWtCZixHQUFsQixDQUFyQjtBQUNBLFVBQUtnQixNQUFMLEdBQWMsSUFBSUMsa0JBQUosQ0FBV2pCLEdBQVgsQ0FBZDtBQUNBLFVBQUtrQixZQUFMLEdBQW9CLElBQUlDLHdCQUFKLENBQWlCbkIsR0FBakIsQ0FBcEI7QUFYcUI7QUFZeEI7Ozs7aUNBRWtCO0FBQ2YsV0FBS29CLFlBQUwsR0FBb0IsUUFBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLFFBQXJCO0FBQ0g7Ozs7RUExQjhCQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnQgZnJvbSAnLi4vLi4vQ2xpZW50JztcbmltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuaW1wb3J0IEJhc2tldHMgZnJvbSAnLi9CYXNrZXRzJztcbmltcG9ydCBHaWZ0cyBmcm9tICcuL0dpZnRzJztcbmltcG9ydCBTdWJzY3JpcHRpb25zIGZyb20gJy4vU3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgVG95Ym94IGZyb20gJy4vVG95Ym94JztcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vRGV0YWlscyc7XG5pbXBvcnQgQWRkcmVzc2VzIGZyb20gJy4vQWRkcmVzc2VzJztcbmltcG9ydCBQcm9kdWN0TGlzdHMgZnJvbSAnLi9Qcm9kdWN0TGlzdHMnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZywgSHR0cENsaWVudFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnMgZXh0ZW5kcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwdWJsaWMgYWRkcmVzc2VzOiBBZGRyZXNzZXM7XG4gICAgcHVibGljIGJhc2tldHM6IEJhc2tldHM7XG4gICAgcHVibGljIGdpZnRzOiBHaWZ0cztcbiAgICBwdWJsaWMgZGV0YWlsczogRGV0YWlscztcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9ucztcbiAgICBwdWJsaWMgdG95Ym94OiBUb3lib3g7XG4gICAgcHVibGljIHByb2R1Y3RMaXN0czogUHJvZHVjdExpc3RzO1xuXG4gICAgY29uc3RydWN0b3IoYXBpOiBDbGllbnQpIHtcbiAgICAgICAgc3VwZXIoYXBpKTtcbiAgICAgICAgdGhpcy5hcGkgPSBhcGk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuXG4gICAgICAgIHRoaXMuYWRkcmVzc2VzID0gbmV3IEFkZHJlc3NlcyhhcGkpO1xuICAgICAgICB0aGlzLmJhc2tldHMgPSBuZXcgQmFza2V0cyhhcGkpO1xuICAgICAgICB0aGlzLmdpZnRzID0gbmV3IEdpZnRzKGFwaSk7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IG5ldyBEZXRhaWxzKGFwaSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb25zKGFwaSk7XG4gICAgICAgIHRoaXMudG95Ym94ID0gbmV3IFRveWJveChhcGkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0cyA9IG5ldyBQcm9kdWN0TGlzdHMoYXBpKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcvdXNlcnMnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnbWVtYmVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgYWNjZXNzOiAnZ3Vlc3QnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGNsYWltR3Vlc3RSZXNvdXJjZXM6ICguLi5hcmdzOiBIdHRwQ2xpZW50Q29uZmlnKSA9PiBIdHRwQ2xpZW50UmVzcG9uc2UgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgcGF0aDogJy9jbGFpbScsXG4gICAgfSk7XG59XG4iXX0=