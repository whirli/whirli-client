"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Spec =
/*#__PURE__*/
function () {
  /**
   * Create a complete spec from a partial spec.
   */
  function Spec(resourceOptions, partialSpec) {
    _classCallCheck(this, Spec);

    _defineProperty(this, "path", void 0);

    _defineProperty(this, "requestMethod", void 0);

    _defineProperty(this, "access", void 0);

    _defineProperty(this, "urlParams", void 0);

    var defaultAccess = resourceOptions.defaultAccess,
        resourcePath = resourceOptions.resourcePath;
    this.access = partialSpec.access || defaultAccess;
    this.path = "".concat(this.access).concat(resourcePath).concat(partialSpec.path || '/');
    this.requestMethod = partialSpec.method || 'GET';
    this.urlParams = (0, _utils.extractUrlParams)(this.path);
  }

  _createClass(Spec, [{
    key: "pathSymbolCount",
    value: function pathSymbolCount() {
      return this.urlParams.length;
    }
    /**
     * Map values to the urlParams defined in this spec, sequentially.
     *
     * E.G. If the spec path was /{id}/{name} then the urlParams would be ['id', 'name'].
     * Therefore, if values = ['10', 'tester'], we will return the mapping { id: '10', name: 'tester' }.
     *
     * @throws Error When any value passed in is not a string.
     */

  }, {
    key: "mapValuesToPathSymbols",
    value: function mapValuesToPathSymbols(values) {
      var _this = this;

      return this.urlParams.reduce(function (urlData, param) {
        var value = values.shift();

        if (typeof value !== 'string') {
          throw new Error("Whirli Spec Error: Argument \"".concat(param, "\" must be a string, but got: ").concat(value, " (on API request to `").concat(_this.requestMethod, " ").concat(_this.path, "`)"));
        }

        urlData[param] = value;
        return urlData;
      }, {});
    }
    /**
     * Using an object of URL data (e.g. { id: '10' } ), return a full URL
     * for the resource request, e.g. /resource/{id} becomes /resource/10.
     */

  }, {
    key: "replacePathSymbolsWithUrlData",
    value: function replacePathSymbolsWithUrlData(urlData) {
      return this.path.replace(/{([\s\S]+?)}/g, function ($0, $1) {
        return encodeURIComponent(urlData[$1] || '');
      });
    }
  }, {
    key: "getMethod",
    value: function getMethod() {
      return this.requestMethod;
    }
  }]);

  return Spec;
}();

exports["default"] = Spec;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TcGVjLnRzIl0sIm5hbWVzIjpbIlNwZWMiLCJyZXNvdXJjZU9wdGlvbnMiLCJwYXJ0aWFsU3BlYyIsImRlZmF1bHRBY2Nlc3MiLCJyZXNvdXJjZVBhdGgiLCJhY2Nlc3MiLCJwYXRoIiwicmVxdWVzdE1ldGhvZCIsIm1ldGhvZCIsInVybFBhcmFtcyIsImxlbmd0aCIsInZhbHVlcyIsInJlZHVjZSIsInVybERhdGEiLCJwYXJhbSIsInZhbHVlIiwic2hpZnQiLCJFcnJvciIsInJlcGxhY2UiLCIkMCIsIiQxIiwiZW5jb2RlVVJJQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQU1qQjs7O0FBR0EsZ0JBQVlDLGVBQVosRUFBOENDLFdBQTlDLEVBQXdFO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsUUFDNURDLGFBRDRELEdBQzVCRixlQUQ0QixDQUM1REUsYUFENEQ7QUFBQSxRQUM3Q0MsWUFENkMsR0FDNUJILGVBRDRCLENBQzdDRyxZQUQ2QztBQUdwRSxTQUFLQyxNQUFMLEdBQWNILFdBQVcsQ0FBQ0csTUFBWixJQUFzQkYsYUFBcEM7QUFDQSxTQUFLRyxJQUFMLGFBQWUsS0FBS0QsTUFBcEIsU0FBNkJELFlBQTdCLFNBQTRDRixXQUFXLENBQUNJLElBQVosSUFBb0IsR0FBaEU7QUFDQSxTQUFLQyxhQUFMLEdBQXFCTCxXQUFXLENBQUNNLE1BQVosSUFBc0IsS0FBM0M7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLDZCQUFpQixLQUFLSCxJQUF0QixDQUFqQjtBQUNIOzs7O3NDQUV5QjtBQUN0QixhQUFPLEtBQUtHLFNBQUwsQ0FBZUMsTUFBdEI7QUFDSDtBQUVEOzs7Ozs7Ozs7OzsyQ0FRdUJDLE0sRUFBZ0M7QUFBQTs7QUFDbkQsYUFBTyxLQUFLRixTQUFMLENBQWVHLE1BQWYsQ0FBc0IsVUFBQ0MsT0FBRCxFQUFtQkMsS0FBbkIsRUFBcUM7QUFDOUQsWUFBTUMsS0FBeUIsR0FBR0osTUFBTSxDQUFDSyxLQUFQLEVBQWxDOztBQUVBLFlBQUksT0FBT0QsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUMzQixnQkFBTSxJQUFJRSxLQUFKLHlDQUM4QkgsS0FEOUIsMkNBQ21FQyxLQURuRSxrQ0FDaUcsS0FBSSxDQUFDUixhQUR0RyxjQUN1SCxLQUFJLENBQUNELElBRDVILFFBQU47QUFHSDs7QUFFRE8sUUFBQUEsT0FBTyxDQUFDQyxLQUFELENBQVAsR0FBaUJDLEtBQWpCO0FBQ0EsZUFBT0YsT0FBUDtBQUNILE9BWE0sRUFXSixFQVhJLENBQVA7QUFZSDtBQUVEOzs7Ozs7O2tEQUk4QkEsTyxFQUEwQjtBQUNwRCxhQUFPLEtBQUtQLElBQUwsQ0FBVVksT0FBVixDQUFrQixlQUFsQixFQUFtQyxVQUFDQyxFQUFELEVBQWFDLEVBQWI7QUFBQSxlQUE0QkMsa0JBQWtCLENBQUNSLE9BQU8sQ0FBQ08sRUFBRCxDQUFQLElBQWUsRUFBaEIsQ0FBOUM7QUFBQSxPQUFuQyxDQUFQO0FBQ0g7OztnQ0FFbUI7QUFDaEIsYUFBTyxLQUFLYixhQUFaO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGlhbFNwZWMgZnJvbSAnLi9JbnRlcmZhY2VzL1BhcnRpYWxTcGVjJztcbmltcG9ydCBVcmxEYXRhIGZyb20gJy4vSW50ZXJmYWNlcy9VcmxEYXRhJztcbmltcG9ydCB7IFJlc291cmNlT3B0aW9ucyB9IGZyb20gJy4vSW50ZXJmYWNlcy9SZXNvdXJjZU9wdGlvbnMnO1xuaW1wb3J0IHsgSHR0cE1ldGhvZCB9IGZyb20gJy4vSW50ZXJmYWNlcy9IdHRwTWV0aG9kJztcbmltcG9ydCB7IEFjY2Vzc1R5cGUgfSBmcm9tICcuL0ludGVyZmFjZXMvQWNjZXNzVHlwZSc7XG5pbXBvcnQgeyBleHRyYWN0VXJsUGFyYW1zIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWMge1xuICAgIHByb3RlY3RlZCByZWFkb25seSBwYXRoOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJlcXVlc3RNZXRob2Q6IEh0dHBNZXRob2Q7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGFjY2VzczogQWNjZXNzVHlwZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdXJsUGFyYW1zOiBBcnJheTxzdHJpbmc+O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgY29tcGxldGUgc3BlYyBmcm9tIGEgcGFydGlhbCBzcGVjLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlc291cmNlT3B0aW9uczogUmVzb3VyY2VPcHRpb25zLCBwYXJ0aWFsU3BlYzogUGFydGlhbFNwZWMpIHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0QWNjZXNzLCByZXNvdXJjZVBhdGggfSA9IHJlc291cmNlT3B0aW9ucztcblxuICAgICAgICB0aGlzLmFjY2VzcyA9IHBhcnRpYWxTcGVjLmFjY2VzcyB8fCBkZWZhdWx0QWNjZXNzO1xuICAgICAgICB0aGlzLnBhdGggPSBgJHt0aGlzLmFjY2Vzc30ke3Jlc291cmNlUGF0aH0ke3BhcnRpYWxTcGVjLnBhdGggfHwgJy8nfWA7XG4gICAgICAgIHRoaXMucmVxdWVzdE1ldGhvZCA9IHBhcnRpYWxTcGVjLm1ldGhvZCB8fCAnR0VUJztcbiAgICAgICAgdGhpcy51cmxQYXJhbXMgPSBleHRyYWN0VXJsUGFyYW1zKHRoaXMucGF0aCk7XG4gICAgfVxuXG4gICAgcGF0aFN5bWJvbENvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybFBhcmFtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIHZhbHVlcyB0byB0aGUgdXJsUGFyYW1zIGRlZmluZWQgaW4gdGhpcyBzcGVjLCBzZXF1ZW50aWFsbHkuXG4gICAgICpcbiAgICAgKiBFLkcuIElmIHRoZSBzcGVjIHBhdGggd2FzIC97aWR9L3tuYW1lfSB0aGVuIHRoZSB1cmxQYXJhbXMgd291bGQgYmUgWydpZCcsICduYW1lJ10uXG4gICAgICogVGhlcmVmb3JlLCBpZiB2YWx1ZXMgPSBbJzEwJywgJ3Rlc3RlciddLCB3ZSB3aWxsIHJldHVybiB0aGUgbWFwcGluZyB7IGlkOiAnMTAnLCBuYW1lOiAndGVzdGVyJyB9LlxuICAgICAqXG4gICAgICogQHRocm93cyBFcnJvciBXaGVuIGFueSB2YWx1ZSBwYXNzZWQgaW4gaXMgbm90IGEgc3RyaW5nLlxuICAgICAqL1xuICAgIG1hcFZhbHVlc1RvUGF0aFN5bWJvbHModmFsdWVzOiBBcnJheTxzdHJpbmc+KTogVXJsRGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybFBhcmFtcy5yZWR1Y2UoKHVybERhdGE6IFVybERhdGEsIHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB2YWx1ZXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBXaGlybGkgU3BlYyBFcnJvcjogQXJndW1lbnQgXCIke3BhcmFtfVwiIG11c3QgYmUgYSBzdHJpbmcsIGJ1dCBnb3Q6ICR7dmFsdWV9IChvbiBBUEkgcmVxdWVzdCB0byBcXGAke3RoaXMucmVxdWVzdE1ldGhvZH0gJHt0aGlzLnBhdGh9XFxgKWAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXJsRGF0YVtwYXJhbV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB1cmxEYXRhO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNpbmcgYW4gb2JqZWN0IG9mIFVSTCBkYXRhIChlLmcuIHsgaWQ6ICcxMCcgfSApLCByZXR1cm4gYSBmdWxsIFVSTFxuICAgICAqIGZvciB0aGUgcmVzb3VyY2UgcmVxdWVzdCwgZS5nLiAvcmVzb3VyY2Uve2lkfSBiZWNvbWVzIC9yZXNvdXJjZS8xMC5cbiAgICAgKi9cbiAgICByZXBsYWNlUGF0aFN5bWJvbHNXaXRoVXJsRGF0YSh1cmxEYXRhOiBVcmxEYXRhKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aC5yZXBsYWNlKC97KFtcXHNcXFNdKz8pfS9nLCAoJDA6IHN0cmluZywgJDE6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHVybERhdGFbJDFdIHx8ICcnKSk7XG4gICAgfVxuXG4gICAgZ2V0TWV0aG9kKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RNZXRob2Q7XG4gICAgfVxufVxuIl19