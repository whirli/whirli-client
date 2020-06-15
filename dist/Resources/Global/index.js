"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGlobalResources = loadGlobalResources;

var _Contact = _interopRequireDefault(require("./Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function loadGlobalResources(client) {
  return {
    contact: new _Contact["default"](client)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvR2xvYmFsL2luZGV4LnRzIl0sIm5hbWVzIjpbImxvYWRHbG9iYWxSZXNvdXJjZXMiLCJjbGllbnQiLCJjb250YWN0IiwiQ29udGFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBTU8sU0FBU0EsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQThEO0FBQ2pFLFNBQU87QUFDSEMsSUFBQUEsT0FBTyxFQUFFLElBQUlDLG1CQUFKLENBQVlGLE1BQVo7QUFETixHQUFQO0FBR0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gJy4uLy4uL0NsaWVudCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbFJlc291cmNlcyB7XG4gICAgY29udGFjdDogQ29udGFjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRHbG9iYWxSZXNvdXJjZXMoY2xpZW50OiBDbGllbnQpOiBHbG9iYWxSZXNvdXJjZXMge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRhY3Q6IG5ldyBDb250YWN0KGNsaWVudCksXG4gICAgfTtcbn1cbiJdfQ==