"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Basket = _interopRequireDefault(require("./Basket"));

var _Subscriptions = _interopRequireDefault(require("./Subscriptions"));

var _Toybox = _interopRequireDefault(require("./Toybox"));

var _Details = _interopRequireDefault(require("./Details"));

var _Create = _interopRequireDefault(require("./Create"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var User = function User(client) {
  _classCallCheck(this, User);

  _defineProperty(this, "basket", void 0);

  _defineProperty(this, "subscriptions", void 0);

  _defineProperty(this, "toybox", void 0);

  _defineProperty(this, "details", void 0);

  _defineProperty(this, "create", void 0);

  this.basket = new _Basket["default"](client);
  this.subscriptions = new _Subscriptions["default"](client);
  this.toybox = new _Toybox["default"](client);
  this.details = new _Details["default"](client);
  this.create = new _Create["default"](client);
};

exports["default"] = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlci9pbmRleC50cyJdLCJuYW1lcyI6WyJVc2VyIiwiY2xpZW50IiwiYmFza2V0IiwiQmFza2V0Iiwic3Vic2NyaXB0aW9ucyIsIlN1YnNjcmlwdGlvbnMiLCJ0b3lib3giLCJUb3lib3giLCJkZXRhaWxzIiwiRGV0YWlscyIsImNyZWF0ZSIsIkNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztJQUVxQkEsSSxHQU9qQixjQUFZQyxNQUFaLEVBQTRCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3hCLE9BQUtDLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXRixNQUFYLENBQWQ7QUFDQSxPQUFLRyxhQUFMLEdBQXFCLElBQUlDLHlCQUFKLENBQWtCSixNQUFsQixDQUFyQjtBQUNBLE9BQUtLLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXTixNQUFYLENBQWQ7QUFDQSxPQUFLTyxPQUFMLEdBQWUsSUFBSUMsbUJBQUosQ0FBWVIsTUFBWixDQUFmO0FBQ0EsT0FBS1MsTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVdWLE1BQVgsQ0FBZDtBQUNILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQmFza2V0IGZyb20gJy4vQmFza2V0JztcbmltcG9ydCBTdWJzY3JpcHRpb25zIGZyb20gJy4vU3Vic2NyaXB0aW9ucyc7XG5pbXBvcnQgVG95Ym94IGZyb20gJy4vVG95Ym94JztcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vRGV0YWlscyc7XG5pbXBvcnQgQ3JlYXRlIGZyb20gJy4vQ3JlYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gICAgcHVibGljIGJhc2tldDogQmFza2V0O1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25zO1xuICAgIHB1YmxpYyB0b3lib3g6IFRveWJveDtcbiAgICBwdWJsaWMgZGV0YWlsczogRGV0YWlscztcbiAgICBwdWJsaWMgY3JlYXRlOiBDcmVhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGllbnQ6IENsaWVudCkge1xuICAgICAgICB0aGlzLmJhc2tldCA9IG5ldyBCYXNrZXQoY2xpZW50KTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbnMoY2xpZW50KTtcbiAgICAgICAgdGhpcy50b3lib3ggPSBuZXcgVG95Ym94KGNsaWVudCk7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IG5ldyBEZXRhaWxzKGNsaWVudCk7XG4gICAgICAgIHRoaXMuY3JlYXRlID0gbmV3IENyZWF0ZShjbGllbnQpO1xuICAgIH1cbn1cbiJdfQ==