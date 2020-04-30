"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Spec = _interopRequireDefault(require("../Spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvQWJzdHJhY3RSZXNvdXJjZS50cyJdLCJuYW1lcyI6WyJBYnN0cmFjdFJlc291cmNlIiwiYXBpIiwiaW5pdGlhbGlzZSIsInJlc291cmNlUGF0aCIsInBhcnRpYWxTcGVjIiwic2VsZiIsInJlc291cmNlT3B0aW9ucyIsImRlZmF1bHRBY2Nlc3MiLCJzcGVjIiwiU3BlYyIsIm1ha2VSZXNvdXJjZVJlcXVlc3QiLCJhcmdzIiwicmVxdWVzdFBhdGgiLCJnZXRSZXF1ZXN0UGF0aCIsInJlcXVlc3RDb25maWciLCJnZXRSZXF1ZXN0Q29uZmlnIiwiZ2V0SHR0cENsaWVudCIsImdldE1ldGhvZCIsInRvTG93ZXJDYXNlIiwicmVxdWVzdEFyZ3MiLCJyZXF1ZXN0VmFsdWVzIiwic2xpY2UiLCJwYXRoU3ltYm9sQ291bnQiLCJ1cmxEYXRhIiwibWFwVmFsdWVzVG9QYXRoU3ltYm9scyIsInBhdGgiLCJyZXBsYWNlUGF0aFN5bWJvbHNXaXRoVXJsRGF0YSIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJyZXBsYWNlIiwibGFzdEFyZyIsInBvcCIsInBlbnVsdGltYXRlQXJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTcUJBLGdCOzs7QUFLakIsNEJBQVlDLEdBQVosRUFBeUI7QUFBQTs7QUFBQTs7QUFBQSwwQ0FIQSxFQUdBOztBQUFBLDJDQUZhLE9BRWI7O0FBQ3JCLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFVBQUw7QUFDSDs7OztpQ0FFa0I7QUFDZixXQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0g7QUFFRDs7Ozs7Ozs7OztnREFPNEJDLFcsRUFBb0M7QUFDNUQsVUFBTUgsR0FBRyxHQUFHLEtBQUtBLEdBQWpCO0FBQ0EsVUFBTUksSUFBSSxHQUFHLElBQWI7QUFFQSxVQUFNQyxlQUFnQyxHQUFHO0FBQ3JDSCxRQUFBQSxZQUFZLEVBQUUsS0FBS0EsWUFEa0I7QUFFckNJLFFBQUFBLGFBQWEsRUFBRSxLQUFLQTtBQUZpQixPQUF6QztBQUlBLFVBQU1DLElBQUksR0FBRyxJQUFJQyxnQkFBSixDQUFTSCxlQUFULEVBQTBCRixXQUExQixDQUFiO0FBRUEsYUFBTyxTQUFTTSxtQkFBVCxHQUE4RDtBQUFBOztBQUFBLDBDQUE5QkMsSUFBOEI7QUFBOUJBLFVBQUFBLElBQThCO0FBQUE7O0FBQ2pFLFlBQU1DLFdBQVcsR0FBR1AsSUFBSSxDQUFDUSxjQUFMLENBQW9CTCxJQUFwQixFQUEwQkcsSUFBMUIsQ0FBcEI7QUFDQSxZQUFNRyxhQUE0QixHQUFHVCxJQUFJLENBQUNVLGdCQUFMLENBQXNCSixJQUF0QixDQUFyQztBQUVBLGVBQU8sc0JBQUFWLEdBQUcsQ0FBQ2UsYUFBSixlQUF3QlIsSUFBSSxDQUFDUyxTQUFMLEdBQWlCQyxXQUFqQixFQUF4Qiw4QkFBMEROLFdBQTFELDRCQUEwRUUsYUFBMUUsR0FBUCxDQUppRSxDQU1qRTtBQUNILE9BUEQ7QUFRSDs7O21DQUVjTixJLEVBQVlXLFcsRUFBdUM7QUFDOUQsVUFBTUMsYUFBNEIsR0FBR0QsV0FBVyxDQUFDRSxLQUFaLENBQWtCLENBQWxCLEVBQXFCYixJQUFJLENBQUNjLGVBQUwsRUFBckIsQ0FBckM7QUFFQSxVQUFNQyxPQUFnQixHQUFHZixJQUFJLENBQUNnQixzQkFBTCxDQUE0QkosYUFBNUIsQ0FBekI7QUFFQSxVQUFJSyxJQUFZLEdBQUdqQixJQUFJLENBQUNrQiw2QkFBTCxDQUFtQ0gsT0FBbkMsQ0FBbkI7O0FBRUEsVUFBSSxLQUFLdEIsR0FBTCxDQUFTMEIsUUFBVCxHQUFvQkMsaUJBQXhCLEVBQTJDO0FBQ3ZDSCxRQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0ksT0FBTCxDQUFhLE1BQWIsRUFBcUIsRUFBckIsQ0FBUDtBQUNIOztBQUVELGFBQU9KLElBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7Ozs7OztxQ0FXaUJOLFcsRUFBOEM7QUFDM0QsVUFBTVcsT0FBTyxHQUFHWCxXQUFXLENBQUNZLEdBQVosRUFBaEI7QUFDQSxVQUFNQyxjQUFjLEdBQUdiLFdBQVcsQ0FBQ1ksR0FBWixFQUF2QjtBQUVBLFVBQUksUUFBT0QsT0FBUCxNQUFtQixRQUF2QixFQUFpQyxPQUFPLEVBQVA7QUFFakMsVUFBSSxRQUFPRSxjQUFQLE1BQTBCLFFBQTlCLEVBQXdDLE9BQU8sQ0FBQ0YsT0FBRCxDQUFQO0FBRXhDLGFBQU8sQ0FBQ0UsY0FBRCxFQUFpQkYsT0FBakIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWMgZnJvbSAnLi4vU3BlYyc7XG5pbXBvcnQgQ2xpZW50IGZyb20gJy4uL0NsaWVudCc7XG5pbXBvcnQgUGFydGlhbFNwZWMgZnJvbSAnLi4vSW50ZXJmYWNlcy9QYXJ0aWFsU3BlYyc7XG5pbXBvcnQgVXJsRGF0YSBmcm9tICcuLi9JbnRlcmZhY2VzL1VybERhdGEnO1xuaW1wb3J0IHsgUmVzb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9SZXNvdXJjZU9wdGlvbnMnO1xuaW1wb3J0IHsgQWNjZXNzVHlwZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvQWNjZXNzVHlwZSc7XG5cbnR5cGUgUmVxdWVzdEFyZ3VtZW50cyA9IEFycmF5PHN0cmluZyB8IG9iamVjdCB8IEZ1bmN0aW9uPjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIGFwaTogQ2xpZW50O1xuICAgIHByb3RlY3RlZCByZXNvdXJjZVBhdGggPSAnJztcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEFjY2VzczogQWNjZXNzVHlwZSA9ICdndWVzdCc7XG5cbiAgICBjb25zdHJ1Y3RvcihhcGk6IENsaWVudCkge1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIEFQSSByZXNvdXJjZSBmdW5jdGlvbiBmcm9tIGEgc3BlYyBvYmplY3QuXG4gICAgICogQ2FsbCB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gdG8gbWFrZSBhbiBBUEkgY2FsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJ0aWFsU3BlY1xuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMocGFydGlhbFNwZWM6IFBhcnRpYWxTcGVjKTogRnVuY3Rpb24ge1xuICAgICAgICBjb25zdCBhcGkgPSB0aGlzLmFwaTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgcmVzb3VyY2VPcHRpb25zOiBSZXNvdXJjZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICByZXNvdXJjZVBhdGg6IHRoaXMucmVzb3VyY2VQYXRoLFxuICAgICAgICAgICAgZGVmYXVsdEFjY2VzczogdGhpcy5kZWZhdWx0QWNjZXNzLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzcGVjID0gbmV3IFNwZWMocmVzb3VyY2VPcHRpb25zLCBwYXJ0aWFsU3BlYyk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG1ha2VSZXNvdXJjZVJlcXVlc3QoLi4uYXJnczogUmVxdWVzdEFyZ3VtZW50cyk6IHZvaWQge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFBhdGggPSBzZWxmLmdldFJlcXVlc3RQYXRoKHNwZWMsIGFyZ3MpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdENvbmZpZzogQXJyYXk8b2JqZWN0PiA9IHNlbGYuZ2V0UmVxdWVzdENvbmZpZyhhcmdzKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFwaS5nZXRIdHRwQ2xpZW50KClbYCQke3NwZWMuZ2V0TWV0aG9kKCkudG9Mb3dlckNhc2UoKX1gXShyZXF1ZXN0UGF0aCwgLi4ucmVxdWVzdENvbmZpZyk7XG5cbiAgICAgICAgICAgIC8vIEB0b2RvIE1heWJlIHdlIGNhbiBoYW5kbGUgc29tZXRoaW5nIHRvIGRvIHdpdGggcGFnaW5hdGlvbiBoZXJlLCBpZiBpdCdzIGEgcGFnaW5hdGVkIHJlc291cmNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdFBhdGgoc3BlYzogU3BlYywgcmVxdWVzdEFyZ3M6IFJlcXVlc3RBcmd1bWVudHMpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCByZXF1ZXN0VmFsdWVzOiBBcnJheTxzdHJpbmc+ID0gcmVxdWVzdEFyZ3Muc2xpY2UoMCwgc3BlYy5wYXRoU3ltYm9sQ291bnQoKSkgYXMgQXJyYXk8c3RyaW5nPjtcblxuICAgICAgICBjb25zdCB1cmxEYXRhOiBVcmxEYXRhID0gc3BlYy5tYXBWYWx1ZXNUb1BhdGhTeW1ib2xzKHJlcXVlc3RWYWx1ZXMpO1xuXG4gICAgICAgIGxldCBwYXRoOiBzdHJpbmcgPSBzcGVjLnJlcGxhY2VQYXRoU3ltYm9sc1dpdGhVcmxEYXRhKHVybERhdGEpO1xuXG4gICAgICAgIGlmICh0aGlzLmFwaS5mZWF0dXJlcygpLnRyaW1UcmFpbGluZ1NsYXNoKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcmVxdWVzdCBjb25maWcgdG8gZ2l2ZSB0byBheGlvcyB0byBtYWtlIGEgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEF4aW9zIHJlcXVlc3QgbWV0aG9kcyBoYXZlIG9uZSBvciB0d28gcGFyYW1ldGVycyBmb3IgZGF0YSBhbmQgY29uZmlnLiBFLkcuXG4gICAgICogYXhpb3MuZ2V0KHVybFssIGNvbmZpZ10pXG4gICAgICogb3JcbiAgICAgKiBheGlvcy5wb3N0KHVybFssIGRhdGFbLCBjb25maWddXSlcbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgcmVxdWVzdCBjb25maWcgYXMgYW4gYXJyYXkgb2YgMCwgMSBvciAyIHBhcmFtZXRlcnMsIGJhc2VkIG9uIHdoYXQgd2FzIHBhc3NlZCBpbi5cbiAgICAgKiBAcGFyYW0gcmVxdWVzdEFyZ3NcbiAgICAgKi9cbiAgICBnZXRSZXF1ZXN0Q29uZmlnKHJlcXVlc3RBcmdzOiBSZXF1ZXN0QXJndW1lbnRzKTogQXJyYXk8b2JqZWN0PiB7XG4gICAgICAgIGNvbnN0IGxhc3RBcmcgPSByZXF1ZXN0QXJncy5wb3AoKSBhcyBvYmplY3Q7XG4gICAgICAgIGNvbnN0IHBlbnVsdGltYXRlQXJnID0gcmVxdWVzdEFyZ3MucG9wKCkgYXMgb2JqZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgbGFzdEFyZyAhPT0gJ29iamVjdCcpIHJldHVybiBbXTtcblxuICAgICAgICBpZiAodHlwZW9mIHBlbnVsdGltYXRlQXJnICE9PSAnb2JqZWN0JykgcmV0dXJuIFtsYXN0QXJnXTtcblxuICAgICAgICByZXR1cm4gW3BlbnVsdGltYXRlQXJnLCBsYXN0QXJnXTtcbiAgICB9XG59XG4iXX0=