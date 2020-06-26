"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Spec = _interopRequireDefault(require("../Spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AbstractResource = /*#__PURE__*/function () {
  function AbstractResource(api) {
    _classCallCheck(this, AbstractResource);

    _defineProperty(this, "api", void 0);

    _defineProperty(this, "resourcePath", '');

    _defineProperty(this, "defaultAccess", 'guest');

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
      var self = this;
      var resourceOptions = {
        resourcePath: this.resourcePath,
        defaultAccess: this.defaultAccess
      };
      var spec = new _Spec["default"](resourceOptions, partialSpec);
      return function makeResourceRequest() {
        var _api$getHttpClient;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var requestPath = self.getRequestPath(spec, args);
        var requestConfig = self.getRequestConfig(args);
        return (_api$getHttpClient = api.getHttpClient())["$".concat(spec.getMethod().toLowerCase())].apply(_api$getHttpClient, [requestPath].concat(_toConsumableArray(requestConfig))); // @todo Maybe we can handle something to do with pagination here, if it's a paginated resource
      };
    }
  }, {
    key: "getRequestPath",
    value: function getRequestPath(spec, requestArgs) {
      var requestValues = requestArgs.slice(0, spec.pathSymbolCount());
      var urlData = spec.mapValuesToPathSymbols(requestValues);
      var path = spec.replacePathSymbolsWithUrlData(urlData);

      if (this.api.features().trimTrailingSlash) {
        path = path.replace(/\/+$/, '');
      }

      return path;
    }
    /**
     * Get the request config to give to axios to make a request.
     *
     * Axios request methods have one or two parameters for data and config. E.G.
     * axios.get(url[, config])
     * or
     * axios.post(url[, data[, config]])
     *
     * This method returns request config as an array of 0, 1 or 2 parameters, based on what was passed in.
     * @param requestArgs
     */

  }, {
    key: "getRequestConfig",
    value: function getRequestConfig(requestArgs) {
      var lastArg = requestArgs.pop();
      var penultimateArg = requestArgs.pop();
      if (_typeof(lastArg) !== 'object') return [];
      if (_typeof(penultimateArg) !== 'object') return [lastArg];
      return [penultimateArg, lastArg];
    }
  }]);

  return AbstractResource;
}();

exports["default"] = AbstractResource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvQWJzdHJhY3RSZXNvdXJjZS50cyJdLCJuYW1lcyI6WyJBYnN0cmFjdFJlc291cmNlIiwiYXBpIiwiaW5pdGlhbGlzZSIsInJlc291cmNlUGF0aCIsInBhcnRpYWxTcGVjIiwic2VsZiIsInJlc291cmNlT3B0aW9ucyIsImRlZmF1bHRBY2Nlc3MiLCJzcGVjIiwiU3BlYyIsIm1ha2VSZXNvdXJjZVJlcXVlc3QiLCJhcmdzIiwicmVxdWVzdFBhdGgiLCJnZXRSZXF1ZXN0UGF0aCIsInJlcXVlc3RDb25maWciLCJnZXRSZXF1ZXN0Q29uZmlnIiwiZ2V0SHR0cENsaWVudCIsImdldE1ldGhvZCIsInRvTG93ZXJDYXNlIiwicmVxdWVzdEFyZ3MiLCJyZXF1ZXN0VmFsdWVzIiwic2xpY2UiLCJwYXRoU3ltYm9sQ291bnQiLCJ1cmxEYXRhIiwibWFwVmFsdWVzVG9QYXRoU3ltYm9scyIsInBhdGgiLCJyZXBsYWNlUGF0aFN5bWJvbHNXaXRoVXJsRGF0YSIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJyZXBsYWNlIiwibGFzdEFyZyIsInBvcCIsInBlbnVsdGltYXRlQXJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU3FCQSxnQjtBQUtqQiw0QkFBWUMsR0FBWixFQUF5QjtBQUFBOztBQUFBOztBQUFBLDBDQUhBLEVBR0E7O0FBQUEsMkNBRmEsT0FFYjs7QUFDckIsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsVUFBTDtBQUNIOzs7O2lDQUVrQjtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDSDtBQUVEOzs7Ozs7Ozs7O2dEQU80QkMsVyxFQUEwQjtBQUNsRCxVQUFNSCxHQUFHLEdBQUcsS0FBS0EsR0FBakI7QUFDQSxVQUFNSSxJQUFJLEdBQUcsSUFBYjtBQUVBLFVBQU1DLGVBQWdDLEdBQUc7QUFDckNILFFBQUFBLFlBQVksRUFBRSxLQUFLQSxZQURrQjtBQUVyQ0ksUUFBQUEsYUFBYSxFQUFFLEtBQUtBO0FBRmlCLE9BQXpDO0FBSUEsVUFBTUMsSUFBSSxHQUFHLElBQUlDLGdCQUFKLENBQVNILGVBQVQsRUFBMEJGLFdBQTFCLENBQWI7QUFFQSxhQUFPLFNBQVNNLG1CQUFULEdBQTZEO0FBQUE7O0FBQUEsMENBQTdCQyxJQUE2QjtBQUE3QkEsVUFBQUEsSUFBNkI7QUFBQTs7QUFDaEUsWUFBTUMsV0FBVyxHQUFHUCxJQUFJLENBQUNRLGNBQUwsQ0FBb0JMLElBQXBCLEVBQTBCRyxJQUExQixDQUFwQjtBQUNBLFlBQU1HLGFBQTRCLEdBQUdULElBQUksQ0FBQ1UsZ0JBQUwsQ0FBc0JKLElBQXRCLENBQXJDO0FBRUEsZUFBTyxzQkFBQVYsR0FBRyxDQUFDZSxhQUFKLGVBQXdCUixJQUFJLENBQUNTLFNBQUwsR0FBaUJDLFdBQWpCLEVBQXhCLDhCQUEwRE4sV0FBMUQsNEJBQTBFRSxhQUExRSxHQUFQLENBSmdFLENBTWhFO0FBQ0gsT0FQRDtBQVFIOzs7bUNBRWNOLEksRUFBWVcsVyxFQUF1QztBQUM5RCxVQUFNQyxhQUE0QixHQUFHRCxXQUFXLENBQUNFLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJiLElBQUksQ0FBQ2MsZUFBTCxFQUFyQixDQUFyQztBQUVBLFVBQU1DLE9BQWdCLEdBQUdmLElBQUksQ0FBQ2dCLHNCQUFMLENBQTRCSixhQUE1QixDQUF6QjtBQUVBLFVBQUlLLElBQVksR0FBR2pCLElBQUksQ0FBQ2tCLDZCQUFMLENBQW1DSCxPQUFuQyxDQUFuQjs7QUFFQSxVQUFJLEtBQUt0QixHQUFMLENBQVMwQixRQUFULEdBQW9CQyxpQkFBeEIsRUFBMkM7QUFDdkNILFFBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDSSxPQUFMLENBQWEsTUFBYixFQUFxQixFQUFyQixDQUFQO0FBQ0g7O0FBRUQsYUFBT0osSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O3FDQVdpQk4sVyxFQUE4QztBQUMzRCxVQUFNVyxPQUFPLEdBQUdYLFdBQVcsQ0FBQ1ksR0FBWixFQUFoQjtBQUNBLFVBQU1DLGNBQWMsR0FBR2IsV0FBVyxDQUFDWSxHQUFaLEVBQXZCO0FBRUEsVUFBSSxRQUFPRCxPQUFQLE1BQW1CLFFBQXZCLEVBQWlDLE9BQU8sRUFBUDtBQUVqQyxVQUFJLFFBQU9FLGNBQVAsTUFBMEIsUUFBOUIsRUFBd0MsT0FBTyxDQUFDRixPQUFELENBQVA7QUFFeEMsYUFBTyxDQUFDRSxjQUFELEVBQWlCRixPQUFqQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYyBmcm9tICcuLi9TcGVjJztcbmltcG9ydCBDbGllbnQgZnJvbSAnLi4vQ2xpZW50JztcbmltcG9ydCBQYXJ0aWFsU3BlYyBmcm9tICcuLi9JbnRlcmZhY2VzL1BhcnRpYWxTcGVjJztcbmltcG9ydCBVcmxEYXRhIGZyb20gJy4uL0ludGVyZmFjZXMvVXJsRGF0YSc7XG5pbXBvcnQgeyBSZXNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi9JbnRlcmZhY2VzL1Jlc291cmNlT3B0aW9ucyc7XG5pbXBvcnQgeyBBY2Nlc3NUeXBlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9BY2Nlc3NUeXBlJztcblxudHlwZSBSZXF1ZXN0QXJndW1lbnRzID0gQXJyYXk8c3RyaW5nIHwgb2JqZWN0IHwgRnVuY3Rpb24+O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgYXBpOiBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIHJlc291cmNlUGF0aCA9ICcnO1xuICAgIHByb3RlY3RlZCBkZWZhdWx0QWNjZXNzOiBBY2Nlc3NUeXBlID0gJ2d1ZXN0JztcblxuICAgIGNvbnN0cnVjdG9yKGFwaTogQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gQVBJIHJlc291cmNlIGZ1bmN0aW9uIGZyb20gYSBzcGVjIG9iamVjdC5cbiAgICAgKiBDYWxsIHRoZSByZXR1cm5lZCBmdW5jdGlvbiB0byBtYWtlIGFuIEFQSSBjYWxsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcnRpYWxTcGVjXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyhwYXJ0aWFsU3BlYzogUGFydGlhbFNwZWMpIHtcbiAgICAgICAgY29uc3QgYXBpID0gdGhpcy5hcGk7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IHJlc291cmNlT3B0aW9uczogUmVzb3VyY2VPcHRpb25zID0ge1xuICAgICAgICAgICAgcmVzb3VyY2VQYXRoOiB0aGlzLnJlc291cmNlUGF0aCxcbiAgICAgICAgICAgIGRlZmF1bHRBY2Nlc3M6IHRoaXMuZGVmYXVsdEFjY2VzcyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3BlYyA9IG5ldyBTcGVjKHJlc291cmNlT3B0aW9ucywgcGFydGlhbFNwZWMpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBtYWtlUmVzb3VyY2VSZXF1ZXN0KC4uLmFyZ3M6IFJlcXVlc3RBcmd1bWVudHMpOiBhbnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFBhdGggPSBzZWxmLmdldFJlcXVlc3RQYXRoKHNwZWMsIGFyZ3MpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdENvbmZpZzogQXJyYXk8b2JqZWN0PiA9IHNlbGYuZ2V0UmVxdWVzdENvbmZpZyhhcmdzKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFwaS5nZXRIdHRwQ2xpZW50KClbYCQke3NwZWMuZ2V0TWV0aG9kKCkudG9Mb3dlckNhc2UoKX1gXShyZXF1ZXN0UGF0aCwgLi4ucmVxdWVzdENvbmZpZyk7XG5cbiAgICAgICAgICAgIC8vIEB0b2RvIE1heWJlIHdlIGNhbiBoYW5kbGUgc29tZXRoaW5nIHRvIGRvIHdpdGggcGFnaW5hdGlvbiBoZXJlLCBpZiBpdCdzIGEgcGFnaW5hdGVkIHJlc291cmNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdFBhdGgoc3BlYzogU3BlYywgcmVxdWVzdEFyZ3M6IFJlcXVlc3RBcmd1bWVudHMpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCByZXF1ZXN0VmFsdWVzOiBBcnJheTxzdHJpbmc+ID0gcmVxdWVzdEFyZ3Muc2xpY2UoMCwgc3BlYy5wYXRoU3ltYm9sQ291bnQoKSkgYXMgQXJyYXk8c3RyaW5nPjtcblxuICAgICAgICBjb25zdCB1cmxEYXRhOiBVcmxEYXRhID0gc3BlYy5tYXBWYWx1ZXNUb1BhdGhTeW1ib2xzKHJlcXVlc3RWYWx1ZXMpO1xuXG4gICAgICAgIGxldCBwYXRoOiBzdHJpbmcgPSBzcGVjLnJlcGxhY2VQYXRoU3ltYm9sc1dpdGhVcmxEYXRhKHVybERhdGEpO1xuXG4gICAgICAgIGlmICh0aGlzLmFwaS5mZWF0dXJlcygpLnRyaW1UcmFpbGluZ1NsYXNoKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcmVxdWVzdCBjb25maWcgdG8gZ2l2ZSB0byBheGlvcyB0byBtYWtlIGEgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEF4aW9zIHJlcXVlc3QgbWV0aG9kcyBoYXZlIG9uZSBvciB0d28gcGFyYW1ldGVycyBmb3IgZGF0YSBhbmQgY29uZmlnLiBFLkcuXG4gICAgICogYXhpb3MuZ2V0KHVybFssIGNvbmZpZ10pXG4gICAgICogb3JcbiAgICAgKiBheGlvcy5wb3N0KHVybFssIGRhdGFbLCBjb25maWddXSlcbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgcmVxdWVzdCBjb25maWcgYXMgYW4gYXJyYXkgb2YgMCwgMSBvciAyIHBhcmFtZXRlcnMsIGJhc2VkIG9uIHdoYXQgd2FzIHBhc3NlZCBpbi5cbiAgICAgKiBAcGFyYW0gcmVxdWVzdEFyZ3NcbiAgICAgKi9cbiAgICBnZXRSZXF1ZXN0Q29uZmlnKHJlcXVlc3RBcmdzOiBSZXF1ZXN0QXJndW1lbnRzKTogQXJyYXk8b2JqZWN0PiB7XG4gICAgICAgIGNvbnN0IGxhc3RBcmcgPSByZXF1ZXN0QXJncy5wb3AoKSBhcyBvYmplY3Q7XG4gICAgICAgIGNvbnN0IHBlbnVsdGltYXRlQXJnID0gcmVxdWVzdEFyZ3MucG9wKCkgYXMgb2JqZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgbGFzdEFyZyAhPT0gJ29iamVjdCcpIHJldHVybiBbXTtcblxuICAgICAgICBpZiAodHlwZW9mIHBlbnVsdGltYXRlQXJnICE9PSAnb2JqZWN0JykgcmV0dXJuIFtsYXN0QXJnXTtcblxuICAgICAgICByZXR1cm4gW3BlbnVsdGltYXRlQXJnLCBsYXN0QXJnXTtcbiAgICB9XG59XG4iXX0=