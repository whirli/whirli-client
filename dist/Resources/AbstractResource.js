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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvQWJzdHJhY3RSZXNvdXJjZS50cyJdLCJuYW1lcyI6WyJBYnN0cmFjdFJlc291cmNlIiwiYXBpIiwiaW5pdGlhbGlzZSIsInJlc291cmNlUGF0aCIsInBhcnRpYWxTcGVjIiwic2VsZiIsInJlc291cmNlT3B0aW9ucyIsImRlZmF1bHRBY2Nlc3MiLCJzcGVjIiwiU3BlYyIsIm1ha2VSZXNvdXJjZVJlcXVlc3QiLCJhcmdzIiwicmVxdWVzdFBhdGgiLCJnZXRSZXF1ZXN0UGF0aCIsInJlcXVlc3RDb25maWciLCJnZXRSZXF1ZXN0Q29uZmlnIiwiZ2V0SHR0cENsaWVudCIsImdldE1ldGhvZCIsInRvTG93ZXJDYXNlIiwicmVxdWVzdEFyZ3MiLCJyZXF1ZXN0VmFsdWVzIiwic2xpY2UiLCJwYXRoU3ltYm9sQ291bnQiLCJ1cmxEYXRhIiwibWFwVmFsdWVzVG9QYXRoU3ltYm9scyIsInBhdGgiLCJyZXBsYWNlUGF0aFN5bWJvbHNXaXRoVXJsRGF0YSIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJyZXBsYWNlIiwibGFzdEFyZyIsInBvcCIsInBlbnVsdGltYXRlQXJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTcUJBLGdCOzs7QUFLakIsNEJBQVlDLEdBQVosRUFBeUI7QUFBQTs7QUFBQTs7QUFBQSwwQ0FIQSxFQUdBOztBQUFBLDJDQUZhLE9BRWI7O0FBQ3JCLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFVBQUw7QUFDSDs7OztpQ0FFa0I7QUFDZixXQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0g7QUFFRDs7Ozs7Ozs7OztnREFPNEJDLFcsRUFBMEI7QUFDbEQsVUFBTUgsR0FBRyxHQUFHLEtBQUtBLEdBQWpCO0FBQ0EsVUFBTUksSUFBSSxHQUFHLElBQWI7QUFFQSxVQUFNQyxlQUFnQyxHQUFHO0FBQ3JDSCxRQUFBQSxZQUFZLEVBQUUsS0FBS0EsWUFEa0I7QUFFckNJLFFBQUFBLGFBQWEsRUFBRSxLQUFLQTtBQUZpQixPQUF6QztBQUlBLFVBQU1DLElBQUksR0FBRyxJQUFJQyxnQkFBSixDQUFTSCxlQUFULEVBQTBCRixXQUExQixDQUFiO0FBRUEsYUFBTyxTQUFTTSxtQkFBVCxHQUE2RDtBQUFBOztBQUFBLDBDQUE3QkMsSUFBNkI7QUFBN0JBLFVBQUFBLElBQTZCO0FBQUE7O0FBQ2hFLFlBQU1DLFdBQVcsR0FBR1AsSUFBSSxDQUFDUSxjQUFMLENBQW9CTCxJQUFwQixFQUEwQkcsSUFBMUIsQ0FBcEI7QUFDQSxZQUFNRyxhQUE0QixHQUFHVCxJQUFJLENBQUNVLGdCQUFMLENBQXNCSixJQUF0QixDQUFyQztBQUVBLGVBQU8sc0JBQUFWLEdBQUcsQ0FBQ2UsYUFBSixlQUF3QlIsSUFBSSxDQUFDUyxTQUFMLEdBQWlCQyxXQUFqQixFQUF4Qiw4QkFBMEROLFdBQTFELDRCQUEwRUUsYUFBMUUsR0FBUCxDQUpnRSxDQU1oRTtBQUNILE9BUEQ7QUFRSDs7O21DQUVjTixJLEVBQVlXLFcsRUFBdUM7QUFDOUQsVUFBTUMsYUFBNEIsR0FBR0QsV0FBVyxDQUFDRSxLQUFaLENBQWtCLENBQWxCLEVBQXFCYixJQUFJLENBQUNjLGVBQUwsRUFBckIsQ0FBckM7QUFFQSxVQUFNQyxPQUFnQixHQUFHZixJQUFJLENBQUNnQixzQkFBTCxDQUE0QkosYUFBNUIsQ0FBekI7QUFFQSxVQUFJSyxJQUFZLEdBQUdqQixJQUFJLENBQUNrQiw2QkFBTCxDQUFtQ0gsT0FBbkMsQ0FBbkI7O0FBRUEsVUFBSSxLQUFLdEIsR0FBTCxDQUFTMEIsUUFBVCxHQUFvQkMsaUJBQXhCLEVBQTJDO0FBQ3ZDSCxRQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0ksT0FBTCxDQUFhLE1BQWIsRUFBcUIsRUFBckIsQ0FBUDtBQUNIOztBQUVELGFBQU9KLElBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7Ozs7OztxQ0FXaUJOLFcsRUFBOEM7QUFDM0QsVUFBTVcsT0FBTyxHQUFHWCxXQUFXLENBQUNZLEdBQVosRUFBaEI7QUFDQSxVQUFNQyxjQUFjLEdBQUdiLFdBQVcsQ0FBQ1ksR0FBWixFQUF2QjtBQUVBLFVBQUksUUFBT0QsT0FBUCxNQUFtQixRQUF2QixFQUFpQyxPQUFPLEVBQVA7QUFFakMsVUFBSSxRQUFPRSxjQUFQLE1BQTBCLFFBQTlCLEVBQXdDLE9BQU8sQ0FBQ0YsT0FBRCxDQUFQO0FBRXhDLGFBQU8sQ0FBQ0UsY0FBRCxFQUFpQkYsT0FBakIsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWMgZnJvbSAnLi4vU3BlYyc7XG5pbXBvcnQgQ2xpZW50IGZyb20gJy4uL0NsaWVudCc7XG5pbXBvcnQgUGFydGlhbFNwZWMgZnJvbSAnLi4vSW50ZXJmYWNlcy9QYXJ0aWFsU3BlYyc7XG5pbXBvcnQgVXJsRGF0YSBmcm9tICcuLi9JbnRlcmZhY2VzL1VybERhdGEnO1xuaW1wb3J0IHsgUmVzb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9SZXNvdXJjZU9wdGlvbnMnO1xuaW1wb3J0IHsgQWNjZXNzVHlwZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvQWNjZXNzVHlwZSc7XG5cbnR5cGUgUmVxdWVzdEFyZ3VtZW50cyA9IEFycmF5PHN0cmluZyB8IG9iamVjdCB8IEZ1bmN0aW9uPjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIGFwaTogQ2xpZW50O1xuICAgIHByb3RlY3RlZCByZXNvdXJjZVBhdGggPSAnJztcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEFjY2VzczogQWNjZXNzVHlwZSA9ICdndWVzdCc7XG5cbiAgICBjb25zdHJ1Y3RvcihhcGk6IENsaWVudCkge1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIEFQSSByZXNvdXJjZSBmdW5jdGlvbiBmcm9tIGEgc3BlYyBvYmplY3QuXG4gICAgICogQ2FsbCB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gdG8gbWFrZSBhbiBBUEkgY2FsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJ0aWFsU3BlY1xuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMocGFydGlhbFNwZWM6IFBhcnRpYWxTcGVjKSB7XG4gICAgICAgIGNvbnN0IGFwaSA9IHRoaXMuYXBpO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCByZXNvdXJjZU9wdGlvbnM6IFJlc291cmNlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJlc291cmNlUGF0aDogdGhpcy5yZXNvdXJjZVBhdGgsXG4gICAgICAgICAgICBkZWZhdWx0QWNjZXNzOiB0aGlzLmRlZmF1bHRBY2Nlc3MsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNwZWMgPSBuZXcgU3BlYyhyZXNvdXJjZU9wdGlvbnMsIHBhcnRpYWxTcGVjKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbWFrZVJlc291cmNlUmVxdWVzdCguLi5hcmdzOiBSZXF1ZXN0QXJndW1lbnRzKTogYW55IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RQYXRoID0gc2VsZi5nZXRSZXF1ZXN0UGF0aChzcGVjLCBhcmdzKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RDb25maWc6IEFycmF5PG9iamVjdD4gPSBzZWxmLmdldFJlcXVlc3RDb25maWcoYXJncyk7XG5cbiAgICAgICAgICAgIHJldHVybiBhcGkuZ2V0SHR0cENsaWVudCgpW2AkJHtzcGVjLmdldE1ldGhvZCgpLnRvTG93ZXJDYXNlKCl9YF0ocmVxdWVzdFBhdGgsIC4uLnJlcXVlc3RDb25maWcpO1xuXG4gICAgICAgICAgICAvLyBAdG9kbyBNYXliZSB3ZSBjYW4gaGFuZGxlIHNvbWV0aGluZyB0byBkbyB3aXRoIHBhZ2luYXRpb24gaGVyZSwgaWYgaXQncyBhIHBhZ2luYXRlZCByZXNvdXJjZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFJlcXVlc3RQYXRoKHNwZWM6IFNwZWMsIHJlcXVlc3RBcmdzOiBSZXF1ZXN0QXJndW1lbnRzKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFZhbHVlczogQXJyYXk8c3RyaW5nPiA9IHJlcXVlc3RBcmdzLnNsaWNlKDAsIHNwZWMucGF0aFN5bWJvbENvdW50KCkpIGFzIEFycmF5PHN0cmluZz47XG5cbiAgICAgICAgY29uc3QgdXJsRGF0YTogVXJsRGF0YSA9IHNwZWMubWFwVmFsdWVzVG9QYXRoU3ltYm9scyhyZXF1ZXN0VmFsdWVzKTtcblxuICAgICAgICBsZXQgcGF0aDogc3RyaW5nID0gc3BlYy5yZXBsYWNlUGF0aFN5bWJvbHNXaXRoVXJsRGF0YSh1cmxEYXRhKTtcblxuICAgICAgICBpZiAodGhpcy5hcGkuZmVhdHVyZXMoKS50cmltVHJhaWxpbmdTbGFzaCkge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvKyQvLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJlcXVlc3QgY29uZmlnIHRvIGdpdmUgdG8gYXhpb3MgdG8gbWFrZSBhIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBBeGlvcyByZXF1ZXN0IG1ldGhvZHMgaGF2ZSBvbmUgb3IgdHdvIHBhcmFtZXRlcnMgZm9yIGRhdGEgYW5kIGNvbmZpZy4gRS5HLlxuICAgICAqIGF4aW9zLmdldCh1cmxbLCBjb25maWddKVxuICAgICAqIG9yXG4gICAgICogYXhpb3MucG9zdCh1cmxbLCBkYXRhWywgY29uZmlnXV0pXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHJlcXVlc3QgY29uZmlnIGFzIGFuIGFycmF5IG9mIDAsIDEgb3IgMiBwYXJhbWV0ZXJzLCBiYXNlZCBvbiB3aGF0IHdhcyBwYXNzZWQgaW4uXG4gICAgICogQHBhcmFtIHJlcXVlc3RBcmdzXG4gICAgICovXG4gICAgZ2V0UmVxdWVzdENvbmZpZyhyZXF1ZXN0QXJnczogUmVxdWVzdEFyZ3VtZW50cyk6IEFycmF5PG9iamVjdD4ge1xuICAgICAgICBjb25zdCBsYXN0QXJnID0gcmVxdWVzdEFyZ3MucG9wKCkgYXMgb2JqZWN0O1xuICAgICAgICBjb25zdCBwZW51bHRpbWF0ZUFyZyA9IHJlcXVlc3RBcmdzLnBvcCgpIGFzIG9iamVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGxhc3RBcmcgIT09ICdvYmplY3QnKSByZXR1cm4gW107XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwZW51bHRpbWF0ZUFyZyAhPT0gJ29iamVjdCcpIHJldHVybiBbbGFzdEFyZ107XG5cbiAgICAgICAgcmV0dXJuIFtwZW51bHRpbWF0ZUFyZywgbGFzdEFyZ107XG4gICAgfVxufVxuIl19