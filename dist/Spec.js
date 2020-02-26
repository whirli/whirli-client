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
    this.path = "".concat(this.access, "/").concat(resourcePath).concat(partialSpec.path || '/');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TcGVjLnRzIl0sIm5hbWVzIjpbIlNwZWMiLCJyZXNvdXJjZU9wdGlvbnMiLCJwYXJ0aWFsU3BlYyIsImRlZmF1bHRBY2Nlc3MiLCJyZXNvdXJjZVBhdGgiLCJhY2Nlc3MiLCJwYXRoIiwicmVxdWVzdE1ldGhvZCIsIm1ldGhvZCIsInVybFBhcmFtcyIsImxlbmd0aCIsInZhbHVlcyIsInJlZHVjZSIsInVybERhdGEiLCJwYXJhbSIsInZhbHVlIiwic2hpZnQiLCJFcnJvciIsInJlcGxhY2UiLCIkMCIsIiQxIiwiZW5jb2RlVVJJQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQU1qQjs7O0FBR0EsZ0JBQVlDLGVBQVosRUFBOENDLFdBQTlDLEVBQXdFO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsUUFDNURDLGFBRDRELEdBQzVCRixlQUQ0QixDQUM1REUsYUFENEQ7QUFBQSxRQUM3Q0MsWUFENkMsR0FDNUJILGVBRDRCLENBQzdDRyxZQUQ2QztBQUdwRSxTQUFLQyxNQUFMLEdBQWNILFdBQVcsQ0FBQ0csTUFBWixJQUFzQkYsYUFBcEM7QUFDQSxTQUFLRyxJQUFMLGFBQWUsS0FBS0QsTUFBcEIsY0FBOEJELFlBQTlCLFNBQTZDRixXQUFXLENBQUNJLElBQVosSUFBb0IsR0FBakU7QUFDQSxTQUFLQyxhQUFMLEdBQXFCTCxXQUFXLENBQUNNLE1BQVosSUFBc0IsS0FBM0M7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLDZCQUFpQixLQUFLSCxJQUF0QixDQUFqQjtBQUNIOzs7O3NDQUV5QjtBQUN0QixhQUFPLEtBQUtHLFNBQUwsQ0FBZUMsTUFBdEI7QUFDSDtBQUVEOzs7Ozs7Ozs7OzsyQ0FRdUJDLE0sRUFBZ0M7QUFBQTs7QUFDbkQsYUFBTyxLQUFLRixTQUFMLENBQWVHLE1BQWYsQ0FBc0IsVUFBQ0MsT0FBRCxFQUFtQkMsS0FBbkIsRUFBcUM7QUFDOUQsWUFBTUMsS0FBeUIsR0FBR0osTUFBTSxDQUFDSyxLQUFQLEVBQWxDOztBQUVBLFlBQUksT0FBT0QsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUMzQixnQkFBTSxJQUFJRSxLQUFKLHlDQUM4QkgsS0FEOUIsMkNBQ21FQyxLQURuRSxrQ0FDaUcsS0FBSSxDQUFDUixhQUR0RyxjQUN1SCxLQUFJLENBQUNELElBRDVILFFBQU47QUFHSDs7QUFFRE8sUUFBQUEsT0FBTyxDQUFDQyxLQUFELENBQVAsR0FBaUJDLEtBQWpCO0FBQ0EsZUFBT0YsT0FBUDtBQUNILE9BWE0sRUFXSixFQVhJLENBQVA7QUFZSDtBQUVEOzs7Ozs7O2tEQUk4QkEsTyxFQUEwQjtBQUNwRCxhQUFPLEtBQUtQLElBQUwsQ0FBVVksT0FBVixDQUFrQixlQUFsQixFQUFtQyxVQUFDQyxFQUFELEVBQWFDLEVBQWI7QUFBQSxlQUE0QkMsa0JBQWtCLENBQUNSLE9BQU8sQ0FBQ08sRUFBRCxDQUFQLElBQWUsRUFBaEIsQ0FBOUM7QUFBQSxPQUFuQyxDQUFQO0FBQ0g7OztnQ0FFbUI7QUFDaEIsYUFBTyxLQUFLYixhQUFaO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGlhbFNwZWMgZnJvbSAnLi9JbnRlcmZhY2VzL1BhcnRpYWxTcGVjJztcbmltcG9ydCBVcmxEYXRhIGZyb20gJy4vSW50ZXJmYWNlcy9VcmxEYXRhJztcbmltcG9ydCB7IFJlc291cmNlT3B0aW9ucyB9IGZyb20gJy4vSW50ZXJmYWNlcy9SZXNvdXJjZU9wdGlvbnMnO1xuaW1wb3J0IHsgSHR0cE1ldGhvZCB9IGZyb20gJy4vSW50ZXJmYWNlcy9IdHRwTWV0aG9kJztcbmltcG9ydCB7IEFjY2Vzc1R5cGUgfSBmcm9tICcuL0ludGVyZmFjZXMvQWNjZXNzVHlwZSc7XG5pbXBvcnQgeyBleHRyYWN0VXJsUGFyYW1zIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWMge1xuICAgIHByb3RlY3RlZCByZWFkb25seSBwYXRoOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJlcXVlc3RNZXRob2Q6IEh0dHBNZXRob2Q7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGFjY2VzczogQWNjZXNzVHlwZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdXJsUGFyYW1zOiBBcnJheTxzdHJpbmc+O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgY29tcGxldGUgc3BlYyBmcm9tIGEgcGFydGlhbCBzcGVjLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlc291cmNlT3B0aW9uczogUmVzb3VyY2VPcHRpb25zLCBwYXJ0aWFsU3BlYzogUGFydGlhbFNwZWMpIHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0QWNjZXNzLCByZXNvdXJjZVBhdGggfSA9IHJlc291cmNlT3B0aW9ucztcblxuICAgICAgICB0aGlzLmFjY2VzcyA9IHBhcnRpYWxTcGVjLmFjY2VzcyB8fCBkZWZhdWx0QWNjZXNzO1xuICAgICAgICB0aGlzLnBhdGggPSBgJHt0aGlzLmFjY2Vzc30vJHtyZXNvdXJjZVBhdGh9JHtwYXJ0aWFsU3BlYy5wYXRoIHx8ICcvJ31gO1xuICAgICAgICB0aGlzLnJlcXVlc3RNZXRob2QgPSBwYXJ0aWFsU3BlYy5tZXRob2QgfHwgJ0dFVCc7XG4gICAgICAgIHRoaXMudXJsUGFyYW1zID0gZXh0cmFjdFVybFBhcmFtcyh0aGlzLnBhdGgpO1xuICAgIH1cblxuICAgIHBhdGhTeW1ib2xDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy51cmxQYXJhbXMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcCB2YWx1ZXMgdG8gdGhlIHVybFBhcmFtcyBkZWZpbmVkIGluIHRoaXMgc3BlYywgc2VxdWVudGlhbGx5LlxuICAgICAqXG4gICAgICogRS5HLiBJZiB0aGUgc3BlYyBwYXRoIHdhcyAve2lkfS97bmFtZX0gdGhlbiB0aGUgdXJsUGFyYW1zIHdvdWxkIGJlIFsnaWQnLCAnbmFtZSddLlxuICAgICAqIFRoZXJlZm9yZSwgaWYgdmFsdWVzID0gWycxMCcsICd0ZXN0ZXInXSwgd2Ugd2lsbCByZXR1cm4gdGhlIG1hcHBpbmcgeyBpZDogJzEwJywgbmFtZTogJ3Rlc3RlcicgfS5cbiAgICAgKlxuICAgICAqIEB0aHJvd3MgRXJyb3IgV2hlbiBhbnkgdmFsdWUgcGFzc2VkIGluIGlzIG5vdCBhIHN0cmluZy5cbiAgICAgKi9cbiAgICBtYXBWYWx1ZXNUb1BhdGhTeW1ib2xzKHZhbHVlczogQXJyYXk8c3RyaW5nPik6IFVybERhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy51cmxQYXJhbXMucmVkdWNlKCh1cmxEYXRhOiBVcmxEYXRhLCBwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdmFsdWVzLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgV2hpcmxpIFNwZWMgRXJyb3I6IEFyZ3VtZW50IFwiJHtwYXJhbX1cIiBtdXN0IGJlIGEgc3RyaW5nLCBidXQgZ290OiAke3ZhbHVlfSAob24gQVBJIHJlcXVlc3QgdG8gXFxgJHt0aGlzLnJlcXVlc3RNZXRob2R9ICR7dGhpcy5wYXRofVxcYClgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVybERhdGFbcGFyYW1dID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdXJsRGF0YTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzaW5nIGFuIG9iamVjdCBvZiBVUkwgZGF0YSAoZS5nLiB7IGlkOiAnMTAnIH0gKSwgcmV0dXJuIGEgZnVsbCBVUkxcbiAgICAgKiBmb3IgdGhlIHJlc291cmNlIHJlcXVlc3QsIGUuZy4gL3Jlc291cmNlL3tpZH0gYmVjb21lcyAvcmVzb3VyY2UvMTAuXG4gICAgICovXG4gICAgcmVwbGFjZVBhdGhTeW1ib2xzV2l0aFVybERhdGEodXJsRGF0YTogVXJsRGF0YSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdGgucmVwbGFjZSgveyhbXFxzXFxTXSs/KX0vZywgKCQwOiBzdHJpbmcsICQxOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudCh1cmxEYXRhWyQxXSB8fCAnJykpO1xuICAgIH1cblxuICAgIGdldE1ldGhvZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TWV0aG9kO1xuICAgIH1cbn1cbiJdfQ==