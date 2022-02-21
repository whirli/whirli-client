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
        var method = spec.getMethod().toLowerCase();
        var clientMethod = api.getHttpClient()['$'.concat(method)] ? '$'.concat(method) : method;
        return (_api$getHttpClient = api.getHttpClient())[clientMethod].apply(_api$getHttpClient, [requestPath].concat(_toConsumableArray(requestConfig))); // @todo Maybe we can handle something to do with pagination here, if it's a paginated resource
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvQWJzdHJhY3RSZXNvdXJjZS50cyJdLCJuYW1lcyI6WyJBYnN0cmFjdFJlc291cmNlIiwiYXBpIiwiaW5pdGlhbGlzZSIsInJlc291cmNlUGF0aCIsInBhcnRpYWxTcGVjIiwic2VsZiIsInJlc291cmNlT3B0aW9ucyIsImRlZmF1bHRBY2Nlc3MiLCJzcGVjIiwiU3BlYyIsIm1ha2VSZXNvdXJjZVJlcXVlc3QiLCJhcmdzIiwicmVxdWVzdFBhdGgiLCJnZXRSZXF1ZXN0UGF0aCIsInJlcXVlc3RDb25maWciLCJnZXRSZXF1ZXN0Q29uZmlnIiwibWV0aG9kIiwiZ2V0TWV0aG9kIiwidG9Mb3dlckNhc2UiLCJjbGllbnRNZXRob2QiLCJnZXRIdHRwQ2xpZW50IiwiY29uY2F0IiwicmVxdWVzdEFyZ3MiLCJyZXF1ZXN0VmFsdWVzIiwic2xpY2UiLCJwYXRoU3ltYm9sQ291bnQiLCJ1cmxEYXRhIiwibWFwVmFsdWVzVG9QYXRoU3ltYm9scyIsInBhdGgiLCJyZXBsYWNlUGF0aFN5bWJvbHNXaXRoVXJsRGF0YSIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJyZXBsYWNlIiwibGFzdEFyZyIsInBvcCIsInBlbnVsdGltYXRlQXJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTcUJBLGdCOzs7QUFLakIsNEJBQVlDLEdBQVosRUFBeUI7QUFBQTs7QUFBQTs7QUFBQSwwQ0FIQSxFQUdBOztBQUFBLDJDQUZhLE9BRWI7O0FBQ3JCLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFVBQUw7QUFDSDs7OztpQ0FFa0I7QUFDZixXQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0g7QUFFRDs7Ozs7Ozs7OztnREFPNEJDLFcsRUFBMEI7QUFDbEQsVUFBTUgsR0FBRyxHQUFHLEtBQUtBLEdBQWpCO0FBQ0EsVUFBTUksSUFBSSxHQUFHLElBQWI7QUFFQSxVQUFNQyxlQUFnQyxHQUFHO0FBQ3JDSCxRQUFBQSxZQUFZLEVBQUUsS0FBS0EsWUFEa0I7QUFFckNJLFFBQUFBLGFBQWEsRUFBRSxLQUFLQTtBQUZpQixPQUF6QztBQUlBLFVBQU1DLElBQUksR0FBRyxJQUFJQyxnQkFBSixDQUFTSCxlQUFULEVBQTBCRixXQUExQixDQUFiO0FBRUEsYUFBTyxTQUFTTSxtQkFBVCxHQUE2RDtBQUFBOztBQUFBLDBDQUE3QkMsSUFBNkI7QUFBN0JBLFVBQUFBLElBQTZCO0FBQUE7O0FBQ2hFLFlBQU1DLFdBQVcsR0FBR1AsSUFBSSxDQUFDUSxjQUFMLENBQW9CTCxJQUFwQixFQUEwQkcsSUFBMUIsQ0FBcEI7QUFDQSxZQUFNRyxhQUE0QixHQUFHVCxJQUFJLENBQUNVLGdCQUFMLENBQXNCSixJQUF0QixDQUFyQztBQUVBLFlBQU1LLE1BQU0sR0FBR1IsSUFBSSxDQUFDUyxTQUFMLEdBQWlCQyxXQUFqQixFQUFmO0FBQ0EsWUFBTUMsWUFBWSxHQUFHbEIsR0FBRyxDQUFDbUIsYUFBSixHQUFvQixJQUFJQyxNQUFKLENBQVdMLE1BQVgsQ0FBcEIsSUFBMEMsSUFBSUssTUFBSixDQUFXTCxNQUFYLENBQTFDLEdBQStEQSxNQUFwRjtBQUVBLGVBQU8sc0JBQUFmLEdBQUcsQ0FBQ21CLGFBQUosSUFBb0JELFlBQXBCLDZCQUFrQ1AsV0FBbEMsNEJBQWtERSxhQUFsRCxHQUFQLENBUGdFLENBU2hFO0FBQ0gsT0FWRDtBQVdIOzs7bUNBRWNOLEksRUFBWWMsVyxFQUF1QztBQUM5RCxVQUFNQyxhQUE0QixHQUFHRCxXQUFXLENBQUNFLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJoQixJQUFJLENBQUNpQixlQUFMLEVBQXJCLENBQXJDO0FBRUEsVUFBTUMsT0FBZ0IsR0FBR2xCLElBQUksQ0FBQ21CLHNCQUFMLENBQTRCSixhQUE1QixDQUF6QjtBQUVBLFVBQUlLLElBQVksR0FBR3BCLElBQUksQ0FBQ3FCLDZCQUFMLENBQW1DSCxPQUFuQyxDQUFuQjs7QUFFQSxVQUFJLEtBQUt6QixHQUFMLENBQVM2QixRQUFULEdBQW9CQyxpQkFBeEIsRUFBMkM7QUFDdkNILFFBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDSSxPQUFMLENBQWEsTUFBYixFQUFxQixFQUFyQixDQUFQO0FBQ0g7O0FBRUQsYUFBT0osSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O3FDQVdpQk4sVyxFQUE4QztBQUMzRCxVQUFNVyxPQUFPLEdBQUdYLFdBQVcsQ0FBQ1ksR0FBWixFQUFoQjtBQUNBLFVBQU1DLGNBQWMsR0FBR2IsV0FBVyxDQUFDWSxHQUFaLEVBQXZCO0FBRUEsVUFBSSxRQUFPRCxPQUFQLE1BQW1CLFFBQXZCLEVBQWlDLE9BQU8sRUFBUDtBQUVqQyxVQUFJLFFBQU9FLGNBQVAsTUFBMEIsUUFBOUIsRUFBd0MsT0FBTyxDQUFDRixPQUFELENBQVA7QUFFeEMsYUFBTyxDQUFDRSxjQUFELEVBQWlCRixPQUFqQixDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYyBmcm9tICcuLi9TcGVjJztcbmltcG9ydCBDbGllbnQgZnJvbSAnLi4vQ2xpZW50JztcbmltcG9ydCBQYXJ0aWFsU3BlYyBmcm9tICcuLi9JbnRlcmZhY2VzL1BhcnRpYWxTcGVjJztcbmltcG9ydCBVcmxEYXRhIGZyb20gJy4uL0ludGVyZmFjZXMvVXJsRGF0YSc7XG5pbXBvcnQgeyBSZXNvdXJjZU9wdGlvbnMgfSBmcm9tICcuLi9JbnRlcmZhY2VzL1Jlc291cmNlT3B0aW9ucyc7XG5pbXBvcnQgeyBBY2Nlc3NUeXBlIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9BY2Nlc3NUeXBlJztcblxudHlwZSBSZXF1ZXN0QXJndW1lbnRzID0gQXJyYXk8c3RyaW5nIHwgb2JqZWN0IHwgRnVuY3Rpb24+O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdFJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgYXBpOiBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIHJlc291cmNlUGF0aCA9ICcnO1xuICAgIHByb3RlY3RlZCBkZWZhdWx0QWNjZXNzOiBBY2Nlc3NUeXBlID0gJ2d1ZXN0JztcblxuICAgIGNvbnN0cnVjdG9yKGFwaTogQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuYXBpID0gYXBpO1xuICAgICAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc291cmNlUGF0aCA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gQVBJIHJlc291cmNlIGZ1bmN0aW9uIGZyb20gYSBzcGVjIG9iamVjdC5cbiAgICAgKiBDYWxsIHRoZSByZXR1cm5lZCBmdW5jdGlvbiB0byBtYWtlIGFuIEFQSSBjYWxsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcnRpYWxTcGVjXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyhwYXJ0aWFsU3BlYzogUGFydGlhbFNwZWMpIHtcbiAgICAgICAgY29uc3QgYXBpID0gdGhpcy5hcGk7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IHJlc291cmNlT3B0aW9uczogUmVzb3VyY2VPcHRpb25zID0ge1xuICAgICAgICAgICAgcmVzb3VyY2VQYXRoOiB0aGlzLnJlc291cmNlUGF0aCxcbiAgICAgICAgICAgIGRlZmF1bHRBY2Nlc3M6IHRoaXMuZGVmYXVsdEFjY2VzcyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3BlYyA9IG5ldyBTcGVjKHJlc291cmNlT3B0aW9ucywgcGFydGlhbFNwZWMpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBtYWtlUmVzb3VyY2VSZXF1ZXN0KC4uLmFyZ3M6IFJlcXVlc3RBcmd1bWVudHMpOiBhbnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFBhdGggPSBzZWxmLmdldFJlcXVlc3RQYXRoKHNwZWMsIGFyZ3MpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdENvbmZpZzogQXJyYXk8b2JqZWN0PiA9IHNlbGYuZ2V0UmVxdWVzdENvbmZpZyhhcmdzKTtcblxuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gc3BlYy5nZXRNZXRob2QoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgY2xpZW50TWV0aG9kID0gYXBpLmdldEh0dHBDbGllbnQoKVsnJCcuY29uY2F0KG1ldGhvZCldID8gJyQnLmNvbmNhdChtZXRob2QpIDogbWV0aG9kO1xuXG4gICAgICAgICAgICByZXR1cm4gYXBpLmdldEh0dHBDbGllbnQoKVtjbGllbnRNZXRob2RdKHJlcXVlc3RQYXRoLCAuLi5yZXF1ZXN0Q29uZmlnKTtcblxuICAgICAgICAgICAgLy8gQHRvZG8gTWF5YmUgd2UgY2FuIGhhbmRsZSBzb21ldGhpbmcgdG8gZG8gd2l0aCBwYWdpbmF0aW9uIGhlcmUsIGlmIGl0J3MgYSBwYWdpbmF0ZWQgcmVzb3VyY2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRSZXF1ZXN0UGF0aChzcGVjOiBTcGVjLCByZXF1ZXN0QXJnczogUmVxdWVzdEFyZ3VtZW50cyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RWYWx1ZXM6IEFycmF5PHN0cmluZz4gPSByZXF1ZXN0QXJncy5zbGljZSgwLCBzcGVjLnBhdGhTeW1ib2xDb3VudCgpKSBhcyBBcnJheTxzdHJpbmc+O1xuXG4gICAgICAgIGNvbnN0IHVybERhdGE6IFVybERhdGEgPSBzcGVjLm1hcFZhbHVlc1RvUGF0aFN5bWJvbHMocmVxdWVzdFZhbHVlcyk7XG5cbiAgICAgICAgbGV0IHBhdGg6IHN0cmluZyA9IHNwZWMucmVwbGFjZVBhdGhTeW1ib2xzV2l0aFVybERhdGEodXJsRGF0YSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYXBpLmZlYXR1cmVzKCkudHJpbVRyYWlsaW5nU2xhc2gpIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyskLywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByZXF1ZXN0IGNvbmZpZyB0byBnaXZlIHRvIGF4aW9zIHRvIG1ha2UgYSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQXhpb3MgcmVxdWVzdCBtZXRob2RzIGhhdmUgb25lIG9yIHR3byBwYXJhbWV0ZXJzIGZvciBkYXRhIGFuZCBjb25maWcuIEUuRy5cbiAgICAgKiBheGlvcy5nZXQodXJsWywgY29uZmlnXSlcbiAgICAgKiBvclxuICAgICAqIGF4aW9zLnBvc3QodXJsWywgZGF0YVssIGNvbmZpZ11dKVxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyByZXF1ZXN0IGNvbmZpZyBhcyBhbiBhcnJheSBvZiAwLCAxIG9yIDIgcGFyYW1ldGVycywgYmFzZWQgb24gd2hhdCB3YXMgcGFzc2VkIGluLlxuICAgICAqIEBwYXJhbSByZXF1ZXN0QXJnc1xuICAgICAqL1xuICAgIGdldFJlcXVlc3RDb25maWcocmVxdWVzdEFyZ3M6IFJlcXVlc3RBcmd1bWVudHMpOiBBcnJheTxvYmplY3Q+IHtcbiAgICAgICAgY29uc3QgbGFzdEFyZyA9IHJlcXVlc3RBcmdzLnBvcCgpIGFzIG9iamVjdDtcbiAgICAgICAgY29uc3QgcGVudWx0aW1hdGVBcmcgPSByZXF1ZXN0QXJncy5wb3AoKSBhcyBvYmplY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBsYXN0QXJnICE9PSAnb2JqZWN0JykgcmV0dXJuIFtdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGVudWx0aW1hdGVBcmcgIT09ICdvYmplY3QnKSByZXR1cm4gW2xhc3RBcmddO1xuXG4gICAgICAgIHJldHVybiBbcGVudWx0aW1hdGVBcmcsIGxhc3RBcmddO1xuICAgIH1cbn1cbiJdfQ==