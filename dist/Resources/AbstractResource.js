"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Spec = _interopRequireDefault(require("../Spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      var spec = new _Spec["default"](this.resourcePath, partialSpec);
      return function makeResourceRequest() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var callback = typeof args[args.length - 1] === 'function' && args.pop();
        var urlData = spec.mapValuesToPathSymbols(args);
        var path = spec.replacePathSymbolsWithUrlData(urlData); // @todo makeRequest()
        // @todo Run callback
        // @todo Maybe we can handle something to do with pagination here, if it's a paginated resource
      };
    }
  }]);

  return AbstractResource;
}();

exports["default"] = AbstractResource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvQWJzdHJhY3RSZXNvdXJjZS50cyJdLCJuYW1lcyI6WyJBYnN0cmFjdFJlc291cmNlIiwiYXBpIiwiaW5pdGlhbGlzZSIsInJlc291cmNlUGF0aCIsInBhcnRpYWxTcGVjIiwic3BlYyIsIlNwZWMiLCJtYWtlUmVzb3VyY2VSZXF1ZXN0IiwiYXJncyIsImNhbGxiYWNrIiwibGVuZ3RoIiwicG9wIiwidXJsRGF0YSIsIm1hcFZhbHVlc1RvUGF0aFN5bWJvbHMiLCJwYXRoIiwicmVwbGFjZVBhdGhTeW1ib2xzV2l0aFVybERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBS3FCQSxnQjs7O0FBSWpCLDRCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsMENBRlEsRUFFUjs7QUFDckIsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsVUFBTDtBQUNIOzs7O2lDQUVrQjtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDSDtBQUVEOzs7Ozs7Ozs7O2dEQU80QkMsVyxFQUFvQztBQUM1RCxVQUFNQyxJQUFJLEdBQUcsSUFBSUMsZ0JBQUosQ0FBUyxLQUFLSCxZQUFkLEVBQTRCQyxXQUE1QixDQUFiO0FBRUEsYUFBTyxTQUFTRyxtQkFBVCxHQUE4RDtBQUFBLDBDQUE5QkMsSUFBOEI7QUFBOUJBLFVBQUFBLElBQThCO0FBQUE7O0FBQ2pFLFlBQU1DLFFBQXdCLEdBQUcsT0FBT0QsSUFBSSxDQUFDQSxJQUFJLENBQUNFLE1BQUwsR0FBYyxDQUFmLENBQVgsS0FBaUMsVUFBakMsSUFBK0NGLElBQUksQ0FBQ0csR0FBTCxFQUFoRjtBQUNBLFlBQU1DLE9BQWdCLEdBQUdQLElBQUksQ0FBQ1Esc0JBQUwsQ0FBNEJMLElBQTVCLENBQXpCO0FBQ0EsWUFBTU0sSUFBWSxHQUFHVCxJQUFJLENBQUNVLDZCQUFMLENBQW1DSCxPQUFuQyxDQUFyQixDQUhpRSxDQUtqRTtBQUVBO0FBRUE7QUFDSCxPQVZEO0FBV0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYyBmcm9tICcuLi9TcGVjJztcbmltcG9ydCBDbGllbnQgZnJvbSAnLi4vQ2xpZW50JztcbmltcG9ydCBQYXJ0aWFsU3BlYyBmcm9tICcuLi9JbnRlcmZhY2VzL1BhcnRpYWxTcGVjJztcbmltcG9ydCBVcmxEYXRhIGZyb20gJy4uL0ludGVyZmFjZXMvVXJsRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBhcGk6IENsaWVudDtcbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VQYXRoOiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKGFwaTogQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gQVBJIHJlc291cmNlIGZ1bmN0aW9uIGZyb20gYSBzcGVjIG9iamVjdC5cbiAgICAgKiBDYWxsIHRoZSByZXR1cm5lZCBmdW5jdGlvbiB0byBtYWtlIGFuIEFQSSBjYWxsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcnRpYWxTcGVjXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyhwYXJ0aWFsU3BlYzogUGFydGlhbFNwZWMpOiBGdW5jdGlvbiB7XG4gICAgICAgIGNvbnN0IHNwZWMgPSBuZXcgU3BlYyh0aGlzLnJlc291cmNlUGF0aCwgcGFydGlhbFNwZWMpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBtYWtlUmVzb3VyY2VSZXF1ZXN0KC4uLmFyZ3M6IEFycmF5PHN0cmluZ3xGdW5jdGlvbj4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrOiBGdW5jdGlvbnxmYWxzZSA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicgJiYgYXJncy5wb3AoKSBhcyBGdW5jdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHVybERhdGE6IFVybERhdGEgPSBzcGVjLm1hcFZhbHVlc1RvUGF0aFN5bWJvbHMoYXJncyBhcyBBcnJheTxzdHJpbmc+KTtcbiAgICAgICAgICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IHNwZWMucmVwbGFjZVBhdGhTeW1ib2xzV2l0aFVybERhdGEodXJsRGF0YSk7XG5cbiAgICAgICAgICAgIC8vIEB0b2RvIG1ha2VSZXF1ZXN0KClcblxuICAgICAgICAgICAgLy8gQHRvZG8gUnVuIGNhbGxiYWNrXG5cbiAgICAgICAgICAgIC8vIEB0b2RvIE1heWJlIHdlIGNhbiBoYW5kbGUgc29tZXRoaW5nIHRvIGRvIHdpdGggcGFnaW5hdGlvbiBoZXJlLCBpZiBpdCdzIGEgcGFnaW5hdGVkIHJlc291cmNlXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19