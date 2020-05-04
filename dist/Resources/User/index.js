"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadUserResources = loadUserResources;

var _Basket = _interopRequireDefault(require("./Basket/Basket"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function loadUserResources(client) {
  return {
    basket: new _Basket["default"](client)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvVXNlci9pbmRleC50cyJdLCJuYW1lcyI6WyJsb2FkVXNlclJlc291cmNlcyIsImNsaWVudCIsImJhc2tldCIsIkJhc2tldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBTU8sU0FBU0EsaUJBQVQsQ0FBMkJDLE1BQTNCLEVBQTBEO0FBQzdELFNBQU87QUFDSEMsSUFBQUEsTUFBTSxFQUFFLElBQUlDLGtCQUFKLENBQVdGLE1BQVg7QUFETCxHQUFQO0FBR0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQmFza2V0IGZyb20gJy4vQmFza2V0L0Jhc2tldCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclJlc291cmNlcyB7XG4gICAgYmFza2V0OiBCYXNrZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlclJlc291cmNlcyhjbGllbnQ6IENsaWVudCk6IFVzZXJSZXNvdXJjZXMge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2tldDogbmV3IEJhc2tldChjbGllbnQpLFxuICAgIH07XG59XG4iXX0=