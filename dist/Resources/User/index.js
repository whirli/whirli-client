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

/**
 * _Resources connected to a user._
 *
 * - `$whirli.user.create...;`
 * - `$whirli.user.basket...;`
 * - `$whirli.user.subscriptions...;`
 * - `$whirli.user.toybox...;`
 * - `$whirli.user.details...;`
 */
var User = function User(client) {
  _classCallCheck(this, User);

  _defineProperty(this, "basket", void 0);

  _defineProperty(this, "create", void 0);

  _defineProperty(this, "details", void 0);

  _defineProperty(this, "subscriptions", void 0);

  _defineProperty(this, "toybox", void 0);

  this.basket = new _Basket["default"](client);
  this.create = new _Create["default"](client);
  this.details = new _Details["default"](client);
  this.subscriptions = new _Subscriptions["default"](client);
  this.toybox = new _Toybox["default"](client);
};

exports["default"] = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlci9pbmRleC50cyJdLCJuYW1lcyI6WyJVc2VyIiwiY2xpZW50IiwiYmFza2V0IiwiQmFza2V0IiwiY3JlYXRlIiwiQ3JlYXRlIiwiZGV0YWlscyIsIkRldGFpbHMiLCJzdWJzY3JpcHRpb25zIiwiU3Vic2NyaXB0aW9ucyIsInRveWJveCIsIlRveWJveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTcUJBLEksR0FPakIsY0FBWUMsTUFBWixFQUE0QjtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUN4QixPQUFLQyxNQUFMLEdBQWMsSUFBSUMsa0JBQUosQ0FBV0YsTUFBWCxDQUFkO0FBQ0EsT0FBS0csTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQVdKLE1BQVgsQ0FBZDtBQUNBLE9BQUtLLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixDQUFZTixNQUFaLENBQWY7QUFDQSxPQUFLTyxhQUFMLEdBQXFCLElBQUlDLHlCQUFKLENBQWtCUixNQUFsQixDQUFyQjtBQUNBLE9BQUtTLE1BQUwsR0FBYyxJQUFJQyxrQkFBSixDQUFXVixNQUFYLENBQWQ7QUFDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tICcuLi8uLi9DbGllbnQnO1xuaW1wb3J0IEJhc2tldCBmcm9tICcuL0Jhc2tldCc7XG5pbXBvcnQgU3Vic2NyaXB0aW9ucyBmcm9tICcuL1N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IFRveWJveCBmcm9tICcuL1RveWJveCc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL0RldGFpbHMnO1xuaW1wb3J0IENyZWF0ZSBmcm9tICcuL0NyZWF0ZSc7XG5cbi8qKlxuICogX1Jlc291cmNlcyBjb25uZWN0ZWQgdG8gYSB1c2VyLl9cbiAqXG4gKiAtIGAkd2hpcmxpLnVzZXIuY3JlYXRlLi4uO2BcbiAqIC0gYCR3aGlybGkudXNlci5iYXNrZXQuLi47YFxuICogLSBgJHdoaXJsaS51c2VyLnN1YnNjcmlwdGlvbnMuLi47YFxuICogLSBgJHdoaXJsaS51c2VyLnRveWJveC4uLjtgXG4gKiAtIGAkd2hpcmxpLnVzZXIuZGV0YWlscy4uLjtgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICAgIHB1YmxpYyBiYXNrZXQ6IEJhc2tldDtcbiAgICBwdWJsaWMgY3JlYXRlOiBDcmVhdGU7XG4gICAgcHVibGljIGRldGFpbHM6IERldGFpbHM7XG4gICAgcHVibGljIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbnM7XG4gICAgcHVibGljIHRveWJveDogVG95Ym94O1xuXG4gICAgY29uc3RydWN0b3IoY2xpZW50OiBDbGllbnQpIHtcbiAgICAgICAgdGhpcy5iYXNrZXQgPSBuZXcgQmFza2V0KGNsaWVudCk7XG4gICAgICAgIHRoaXMuY3JlYXRlID0gbmV3IENyZWF0ZShjbGllbnQpO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyhjbGllbnQpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9ucyhjbGllbnQpO1xuICAgICAgICB0aGlzLnRveWJveCA9IG5ldyBUb3lib3goY2xpZW50KTtcbiAgICB9XG59XG4iXX0=