"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Spec = _interopRequireDefault(require("../Spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AbstractResource =
/*#__PURE__*/
function () {
  function AbstractResource(api) {
    _classCallCheck(this, AbstractResource);

    _defineProperty(this, "api", void 0);

    _defineProperty(this, "resourcePath", '');

    this.api = api;
    this.initialise();
  }

  _createClass(AbstractResource, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '';
    }
    /**
     * Creates an API resource function from a spec object.
     * Call the returned function to make an API call.
     *
     * @param partialSpec
     * @returns {Function}
     */

  }, {
    key: "createMethodFromPartialSpec",
    value: function createMethodFromPartialSpec(partialSpec) {
      var api = this.api;
      var spec = new _Spec["default"](this.resourcePath, partialSpec);
      return function makeResourceRequest() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var urlData = spec.mapValuesToPathSymbols(args);
        var path = spec.replacePathSymbolsWithUrlData(urlData);
        var requestBody = _typeof(args[args.length - 1]) === 'object' ? args.pop() : {};
        var httpClient = api.getHttpClient();
        console.log('$$', httpClient["$".concat(spec.getMethod().toLowerCase())]);
        return httpClient["$".concat(spec.getMethod().toLowerCase())](path, requestBody); // @todo Maybe we can handle something to do with pagination here, if it's a paginated resource
      };
    }
  }]);

  return AbstractResource;
}();

exports["default"] = AbstractResource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvQWJzdHJhY3RSZXNvdXJjZS50cyJdLCJuYW1lcyI6WyJBYnN0cmFjdFJlc291cmNlIiwiYXBpIiwiaW5pdGlhbGlzZSIsInJlc291cmNlUGF0aCIsInBhcnRpYWxTcGVjIiwic3BlYyIsIlNwZWMiLCJtYWtlUmVzb3VyY2VSZXF1ZXN0IiwiYXJncyIsInVybERhdGEiLCJtYXBWYWx1ZXNUb1BhdGhTeW1ib2xzIiwicGF0aCIsInJlcGxhY2VQYXRoU3ltYm9sc1dpdGhVcmxEYXRhIiwicmVxdWVzdEJvZHkiLCJsZW5ndGgiLCJwb3AiLCJodHRwQ2xpZW50IiwiZ2V0SHR0cENsaWVudCIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXRob2QiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQU1xQkEsZ0I7OztBQUlqQiw0QkFBWUMsR0FBWixFQUF5QjtBQUFBOztBQUFBOztBQUFBLDBDQUZBLEVBRUE7O0FBQ3JCLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFVBQUw7QUFDSDs7OztpQ0FFa0I7QUFDZixXQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0g7QUFFRDs7Ozs7Ozs7OztnREFPNEJDLFcsRUFBb0M7QUFDNUQsVUFBTUgsR0FBRyxHQUFHLEtBQUtBLEdBQWpCO0FBQ0EsVUFBTUksSUFBSSxHQUFHLElBQUlDLGdCQUFKLENBQVMsS0FBS0gsWUFBZCxFQUE0QkMsV0FBNUIsQ0FBYjtBQUVBLGFBQU8sU0FBU0csbUJBQVQsR0FBc0U7QUFBQSwwQ0FBdENDLElBQXNDO0FBQXRDQSxVQUFBQSxJQUFzQztBQUFBOztBQUN6RSxZQUFNQyxPQUFnQixHQUFHSixJQUFJLENBQUNLLHNCQUFMLENBQTRCRixJQUE1QixDQUF6QjtBQUNBLFlBQU1HLElBQVksR0FBR04sSUFBSSxDQUFDTyw2QkFBTCxDQUFtQ0gsT0FBbkMsQ0FBckI7QUFFQSxZQUFNSSxXQUFnQyxHQUNsQyxRQUFPTCxJQUFJLENBQUNBLElBQUksQ0FBQ00sTUFBTCxHQUFjLENBQWYsQ0FBWCxNQUFpQyxRQUFqQyxHQUE2Q04sSUFBSSxDQUFDTyxHQUFMLEVBQTdDLEdBQWtGLEVBRHRGO0FBR0EsWUFBTUMsVUFBc0IsR0FBR2YsR0FBRyxDQUFDZ0IsYUFBSixFQUEvQjtBQUVBQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCSCxVQUFVLFlBQUtYLElBQUksQ0FBQ2UsU0FBTCxHQUFpQkMsV0FBakIsRUFBTCxFQUE1QjtBQUVBLGVBQU9MLFVBQVUsWUFBS1gsSUFBSSxDQUFDZSxTQUFMLEdBQWlCQyxXQUFqQixFQUFMLEVBQVYsQ0FBaURWLElBQWpELEVBQXVERSxXQUF2RCxDQUFQLENBWHlFLENBYXpFO0FBQ0gsT0FkRDtBQWVIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWMgZnJvbSAnLi4vU3BlYyc7XG5pbXBvcnQgQ2xpZW50IGZyb20gJy4uL0NsaWVudCc7XG5pbXBvcnQgUGFydGlhbFNwZWMgZnJvbSAnLi4vSW50ZXJmYWNlcy9QYXJ0aWFsU3BlYyc7XG5pbXBvcnQgVXJsRGF0YSBmcm9tICcuLi9JbnRlcmZhY2VzL1VybERhdGEnO1xuaW1wb3J0IEh0dHBDbGllbnQgZnJvbSAnLi4vSW50ZXJmYWNlcy9IdHRwQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIGFwaTogQ2xpZW50O1xuICAgIHByb3RlY3RlZCByZXNvdXJjZVBhdGggPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKGFwaTogQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gQVBJIHJlc291cmNlIGZ1bmN0aW9uIGZyb20gYSBzcGVjIG9iamVjdC5cbiAgICAgKiBDYWxsIHRoZSByZXR1cm5lZCBmdW5jdGlvbiB0byBtYWtlIGFuIEFQSSBjYWxsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcnRpYWxTcGVjXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyhwYXJ0aWFsU3BlYzogUGFydGlhbFNwZWMpOiBGdW5jdGlvbiB7XG4gICAgICAgIGNvbnN0IGFwaSA9IHRoaXMuYXBpO1xuICAgICAgICBjb25zdCBzcGVjID0gbmV3IFNwZWModGhpcy5yZXNvdXJjZVBhdGgsIHBhcnRpYWxTcGVjKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbWFrZVJlc291cmNlUmVxdWVzdCguLi5hcmdzOiBBcnJheTxzdHJpbmcgfCBGdW5jdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgICAgIGNvbnN0IHVybERhdGE6IFVybERhdGEgPSBzcGVjLm1hcFZhbHVlc1RvUGF0aFN5bWJvbHMoYXJncyBhcyBBcnJheTxzdHJpbmc+KTtcbiAgICAgICAgICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IHNwZWMucmVwbGFjZVBhdGhTeW1ib2xzV2l0aFVybERhdGEodXJsRGF0YSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RCb2R5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnb2JqZWN0JyA/IChhcmdzLnBvcCgpIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pIDoge307XG5cbiAgICAgICAgICAgIGNvbnN0IGh0dHBDbGllbnQ6IEh0dHBDbGllbnQgPSBhcGkuZ2V0SHR0cENsaWVudCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnJCQnLCBodHRwQ2xpZW50W2AkJHtzcGVjLmdldE1ldGhvZCgpLnRvTG93ZXJDYXNlKCl9YF0pO1xuXG4gICAgICAgICAgICByZXR1cm4gaHR0cENsaWVudFtgJCR7c3BlYy5nZXRNZXRob2QoKS50b0xvd2VyQ2FzZSgpfWBdKHBhdGgsIHJlcXVlc3RCb2R5KTtcblxuICAgICAgICAgICAgLy8gQHRvZG8gTWF5YmUgd2UgY2FuIGhhbmRsZSBzb21ldGhpbmcgdG8gZG8gd2l0aCBwYWdpbmF0aW9uIGhlcmUsIGlmIGl0J3MgYSBwYWdpbmF0ZWQgcmVzb3VyY2VcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=