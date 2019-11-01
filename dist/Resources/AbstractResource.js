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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvQWJzdHJhY3RSZXNvdXJjZS50cyJdLCJuYW1lcyI6WyJBYnN0cmFjdFJlc291cmNlIiwiYXBpIiwiaW5pdGlhbGlzZSIsInJlc291cmNlUGF0aCIsInBhcnRpYWxTcGVjIiwic3BlYyIsIlNwZWMiLCJtYWtlUmVzb3VyY2VSZXF1ZXN0IiwiYXJncyIsInVybERhdGEiLCJtYXBWYWx1ZXNUb1BhdGhTeW1ib2xzIiwicGF0aCIsInJlcGxhY2VQYXRoU3ltYm9sc1dpdGhVcmxEYXRhIiwicmVxdWVzdEJvZHkiLCJsZW5ndGgiLCJwb3AiLCJodHRwQ2xpZW50IiwiZ2V0SHR0cENsaWVudCIsImdldE1ldGhvZCIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBTXFCQSxnQjs7O0FBSWpCLDRCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsMENBRkEsRUFFQTs7QUFDckIsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsVUFBTDtBQUNIOzs7O2lDQUVrQjtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDSDtBQUVEOzs7Ozs7Ozs7O2dEQU80QkMsVyxFQUFvQztBQUM1RCxVQUFNSCxHQUFHLEdBQUcsS0FBS0EsR0FBakI7QUFDQSxVQUFNSSxJQUFJLEdBQUcsSUFBSUMsZ0JBQUosQ0FBUyxLQUFLSCxZQUFkLEVBQTRCQyxXQUE1QixDQUFiO0FBRUEsYUFBTyxTQUFTRyxtQkFBVCxHQUFzRTtBQUFBLDBDQUF0Q0MsSUFBc0M7QUFBdENBLFVBQUFBLElBQXNDO0FBQUE7O0FBQ3pFLFlBQU1DLE9BQWdCLEdBQUdKLElBQUksQ0FBQ0ssc0JBQUwsQ0FBNEJGLElBQTVCLENBQXpCO0FBQ0EsWUFBTUcsSUFBWSxHQUFHTixJQUFJLENBQUNPLDZCQUFMLENBQW1DSCxPQUFuQyxDQUFyQjtBQUVBLFlBQU1JLFdBQWdDLEdBQ2xDLFFBQU9MLElBQUksQ0FBQ0EsSUFBSSxDQUFDTSxNQUFMLEdBQWMsQ0FBZixDQUFYLE1BQWlDLFFBQWpDLEdBQTZDTixJQUFJLENBQUNPLEdBQUwsRUFBN0MsR0FBa0YsRUFEdEY7QUFHQSxZQUFNQyxVQUFzQixHQUFHZixHQUFHLENBQUNnQixhQUFKLEVBQS9CO0FBRUEsZUFBT0QsVUFBVSxZQUFLWCxJQUFJLENBQUNhLFNBQUwsR0FBaUJDLFdBQWpCLEVBQUwsRUFBVixDQUFpRFIsSUFBakQsRUFBdURFLFdBQXZELENBQVAsQ0FUeUUsQ0FXekU7QUFDSCxPQVpEO0FBYUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYyBmcm9tICcuLi9TcGVjJztcbmltcG9ydCBDbGllbnQgZnJvbSAnLi4vQ2xpZW50JztcbmltcG9ydCBQYXJ0aWFsU3BlYyBmcm9tICcuLi9JbnRlcmZhY2VzL1BhcnRpYWxTcGVjJztcbmltcG9ydCBVcmxEYXRhIGZyb20gJy4uL0ludGVyZmFjZXMvVXJsRGF0YSc7XG5pbXBvcnQgSHR0cENsaWVudCBmcm9tICcuLi9JbnRlcmZhY2VzL0h0dHBDbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgYXBpOiBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIHJlc291cmNlUGF0aCA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoYXBpOiBDbGllbnQpIHtcbiAgICAgICAgdGhpcy5hcGkgPSBhcGk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBBUEkgcmVzb3VyY2UgZnVuY3Rpb24gZnJvbSBhIHNwZWMgb2JqZWN0LlxuICAgICAqIENhbGwgdGhlIHJldHVybmVkIGZ1bmN0aW9uIHRvIG1ha2UgYW4gQVBJIGNhbGwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFydGlhbFNwZWNcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICovXG4gICAgY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHBhcnRpYWxTcGVjOiBQYXJ0aWFsU3BlYyk6IEZ1bmN0aW9uIHtcbiAgICAgICAgY29uc3QgYXBpID0gdGhpcy5hcGk7XG4gICAgICAgIGNvbnN0IHNwZWMgPSBuZXcgU3BlYyh0aGlzLnJlc291cmNlUGF0aCwgcGFydGlhbFNwZWMpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBtYWtlUmVzb3VyY2VSZXF1ZXN0KC4uLmFyZ3M6IEFycmF5PHN0cmluZyB8IEZ1bmN0aW9uPik6IHZvaWQge1xuICAgICAgICAgICAgY29uc3QgdXJsRGF0YTogVXJsRGF0YSA9IHNwZWMubWFwVmFsdWVzVG9QYXRoU3ltYm9scyhhcmdzIGFzIEFycmF5PHN0cmluZz4pO1xuICAgICAgICAgICAgY29uc3QgcGF0aDogc3RyaW5nID0gc3BlYy5yZXBsYWNlUGF0aFN5bWJvbHNXaXRoVXJsRGF0YSh1cmxEYXRhKTtcblxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdEJvZHk6IFJlY29yZDxzdHJpbmcsIGFueT4gPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdvYmplY3QnID8gKGFyZ3MucG9wKCkgYXMgUmVjb3JkPHN0cmluZywgYW55PikgOiB7fTtcblxuICAgICAgICAgICAgY29uc3QgaHR0cENsaWVudDogSHR0cENsaWVudCA9IGFwaS5nZXRIdHRwQ2xpZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBodHRwQ2xpZW50W2AkJHtzcGVjLmdldE1ldGhvZCgpLnRvTG93ZXJDYXNlKCl9YF0ocGF0aCwgcmVxdWVzdEJvZHkpO1xuXG4gICAgICAgICAgICAvLyBAdG9kbyBNYXliZSB3ZSBjYW4gaGFuZGxlIHNvbWV0aGluZyB0byBkbyB3aXRoIHBhZ2luYXRpb24gaGVyZSwgaWYgaXQncyBhIHBhZ2luYXRlZCByZXNvdXJjZVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==