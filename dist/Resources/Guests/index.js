"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGuestsResources = loadGuestsResources;

var _Baskets = _interopRequireDefault(require("./Baskets"));

var _Gifts = _interopRequireDefault(require("./Gifts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function loadGuestsResources(client) {
  return {
    baskets: new _Baskets["default"](client),
    gifts: new _Gifts["default"](client)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvR3Vlc3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbImxvYWRHdWVzdHNSZXNvdXJjZXMiLCJjbGllbnQiLCJiYXNrZXRzIiwiQmFza2V0cyIsImdpZnRzIiwiR2lmdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQU9PLFNBQVNBLG1CQUFULENBQTZCQyxNQUE3QixFQUE4RDtBQUNqRSxTQUFPO0FBQ0hDLElBQUFBLE9BQU8sRUFBRSxJQUFJQyxtQkFBSixDQUFZRixNQUFaLENBRE47QUFFSEcsSUFBQUEsS0FBSyxFQUFFLElBQUlDLGlCQUFKLENBQVVKLE1BQVY7QUFGSixHQUFQO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQmFza2V0cyBmcm9tICcuL0Jhc2tldHMnO1xuaW1wb3J0IEdpZnRzIGZyb20gJy4vR2lmdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEd1ZXN0c1Jlc291cmNlcyB7XG4gICAgYmFza2V0czogQmFza2V0cztcbiAgICBnaWZ0czogR2lmdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkR3Vlc3RzUmVzb3VyY2VzKGNsaWVudDogQ2xpZW50KTogR3Vlc3RzUmVzb3VyY2VzIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBiYXNrZXRzOiBuZXcgQmFza2V0cyhjbGllbnQpLFxuICAgICAgICBnaWZ0czogbmV3IEdpZnRzKGNsaWVudCksXG4gICAgfTtcbn1cbiJdfQ==