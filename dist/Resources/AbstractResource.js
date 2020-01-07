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
        return httpClient["$".concat(spec.getMethod().toLowerCase())](path, requestBody); // @todo Maybe we can handle something to do with pagination here, if it's a paginated resource
      };
    }
  }]);

  return AbstractResource;
}();

exports["default"] = AbstractResource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvQWJzdHJhY3RSZXNvdXJjZS50cyJdLCJuYW1lcyI6WyJBYnN0cmFjdFJlc291cmNlIiwiYXBpIiwiaW5pdGlhbGlzZSIsInJlc291cmNlUGF0aCIsInBhcnRpYWxTcGVjIiwic3BlYyIsIlNwZWMiLCJtYWtlUmVzb3VyY2VSZXF1ZXN0IiwiYXJncyIsInVybERhdGEiLCJtYXBWYWx1ZXNUb1BhdGhTeW1ib2xzIiwicGF0aCIsInJlcGxhY2VQYXRoU3ltYm9sc1dpdGhVcmxEYXRhIiwicmVxdWVzdEJvZHkiLCJsZW5ndGgiLCJwb3AiLCJodHRwQ2xpZW50IiwiZ2V0SHR0cENsaWVudCIsImdldE1ldGhvZCIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBTXFCQSxnQjs7O0FBSWpCLDRCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsMENBRkEsRUFFQTs7QUFDckIsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsVUFBTDtBQUNIOzs7O2lDQUVrQjtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDSDtBQUVEOzs7Ozs7Ozs7O2dEQU80QkMsVyxFQUFvQztBQUM1RCxVQUFNSCxHQUFHLEdBQUcsS0FBS0EsR0FBakI7QUFDQSxVQUFNSSxJQUFJLEdBQUcsSUFBSUMsZ0JBQUosQ0FBUyxLQUFLSCxZQUFkLEVBQTRCQyxXQUE1QixDQUFiO0FBRUEsYUFBTyxTQUFTRyxtQkFBVCxHQUFzRTtBQUFBLDBDQUF0Q0MsSUFBc0M7QUFBdENBLFVBQUFBLElBQXNDO0FBQUE7O0FBQ3pFLFlBQU1DLE9BQWdCLEdBQUdKLElBQUksQ0FBQ0ssc0JBQUwsQ0FBNEJGLElBQTVCLENBQXpCO0FBQ0EsWUFBTUcsSUFBWSxHQUFHTixJQUFJLENBQUNPLDZCQUFMLENBQW1DSCxPQUFuQyxDQUFyQjtBQUVBLFlBQU1JLFdBQW1CLEdBQUcsUUFBT0wsSUFBSSxDQUFDQSxJQUFJLENBQUNNLE1BQUwsR0FBYyxDQUFmLENBQVgsTUFBaUMsUUFBakMsR0FBNkNOLElBQUksQ0FBQ08sR0FBTCxFQUE3QyxHQUFxRSxFQUFqRztBQUVBLFlBQU1DLFVBQXNCLEdBQUdmLEdBQUcsQ0FBQ2dCLGFBQUosRUFBL0I7QUFFQSxlQUFPRCxVQUFVLFlBQUtYLElBQUksQ0FBQ2EsU0FBTCxHQUFpQkMsV0FBakIsRUFBTCxFQUFWLENBQWlEUixJQUFqRCxFQUF1REUsV0FBdkQsQ0FBUCxDQVJ5RSxDQVV6RTtBQUNILE9BWEQ7QUFZSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVjIGZyb20gJy4uL1NwZWMnO1xuaW1wb3J0IENsaWVudCBmcm9tICcuLi9DbGllbnQnO1xuaW1wb3J0IFBhcnRpYWxTcGVjIGZyb20gJy4uL0ludGVyZmFjZXMvUGFydGlhbFNwZWMnO1xuaW1wb3J0IFVybERhdGEgZnJvbSAnLi4vSW50ZXJmYWNlcy9VcmxEYXRhJztcbmltcG9ydCBIdHRwQ2xpZW50IGZyb20gJy4uL0ludGVyZmFjZXMvSHR0cENsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBhcGk6IENsaWVudDtcbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VQYXRoID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihhcGk6IENsaWVudCkge1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIEFQSSByZXNvdXJjZSBmdW5jdGlvbiBmcm9tIGEgc3BlYyBvYmplY3QuXG4gICAgICogQ2FsbCB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gdG8gbWFrZSBhbiBBUEkgY2FsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJ0aWFsU3BlY1xuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMocGFydGlhbFNwZWM6IFBhcnRpYWxTcGVjKTogRnVuY3Rpb24ge1xuICAgICAgICBjb25zdCBhcGkgPSB0aGlzLmFwaTtcbiAgICAgICAgY29uc3Qgc3BlYyA9IG5ldyBTcGVjKHRoaXMucmVzb3VyY2VQYXRoLCBwYXJ0aWFsU3BlYyk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG1ha2VSZXNvdXJjZVJlcXVlc3QoLi4uYXJnczogQXJyYXk8c3RyaW5nIHwgRnVuY3Rpb24+KTogdm9pZCB7XG4gICAgICAgICAgICBjb25zdCB1cmxEYXRhOiBVcmxEYXRhID0gc3BlYy5tYXBWYWx1ZXNUb1BhdGhTeW1ib2xzKGFyZ3MgYXMgQXJyYXk8c3RyaW5nPik7XG4gICAgICAgICAgICBjb25zdCBwYXRoOiBzdHJpbmcgPSBzcGVjLnJlcGxhY2VQYXRoU3ltYm9sc1dpdGhVcmxEYXRhKHVybERhdGEpO1xuXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0Qm9keTogb2JqZWN0ID0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ29iamVjdCcgPyAoYXJncy5wb3AoKSBhcyBvYmplY3QpIDoge307XG5cbiAgICAgICAgICAgIGNvbnN0IGh0dHBDbGllbnQ6IEh0dHBDbGllbnQgPSBhcGkuZ2V0SHR0cENsaWVudCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gaHR0cENsaWVudFtgJCR7c3BlYy5nZXRNZXRob2QoKS50b0xvd2VyQ2FzZSgpfWBdKHBhdGgsIHJlcXVlc3RCb2R5KTtcblxuICAgICAgICAgICAgLy8gQHRvZG8gTWF5YmUgd2UgY2FuIGhhbmRsZSBzb21ldGhpbmcgdG8gZG8gd2l0aCBwYWdpbmF0aW9uIGhlcmUsIGlmIGl0J3MgYSBwYWdpbmF0ZWQgcmVzb3VyY2VcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=