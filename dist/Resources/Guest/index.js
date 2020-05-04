"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGuestResources = loadGuestResources;

var _Basket = _interopRequireDefault(require("./Basket/Basket"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function loadGuestResources(client) {
  return {
    basket: new _Basket["default"](client)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvR3Vlc3QvaW5kZXgudHMiXSwibmFtZXMiOlsibG9hZEd1ZXN0UmVzb3VyY2VzIiwiY2xpZW50IiwiYmFza2V0IiwiQmFza2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFNTyxTQUFTQSxrQkFBVCxDQUE0QkMsTUFBNUIsRUFBNEQ7QUFDL0QsU0FBTztBQUNIQyxJQUFBQSxNQUFNLEVBQUUsSUFBSUMsa0JBQUosQ0FBV0YsTUFBWDtBQURMLEdBQVA7QUFHSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnQgZnJvbSAnLi4vLi4vQ2xpZW50JztcbmltcG9ydCBCYXNrZXQgZnJvbSAnLi9CYXNrZXQvQmFza2V0JztcblxuZXhwb3J0IGludGVyZmFjZSBHdWVzdFJlc291cmNlcyB7XG4gICAgYmFza2V0OiBCYXNrZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkR3Vlc3RSZXNvdXJjZXMoY2xpZW50OiBDbGllbnQpOiBHdWVzdFJlc291cmNlcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmFza2V0OiBuZXcgQmFza2V0KGNsaWVudCksXG4gICAgfTtcbn1cbiJdfQ==