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
  function Spec(resourcePath, partialSpec) {
    _classCallCheck(this, Spec);

    _defineProperty(this, "path", void 0);

    _defineProperty(this, "requestMethod", void 0);

    _defineProperty(this, "urlParams", void 0);

    this.path = "/".concat(resourcePath).concat(partialSpec.path);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TcGVjLnRzIl0sIm5hbWVzIjpbIlNwZWMiLCJyZXNvdXJjZVBhdGgiLCJwYXJ0aWFsU3BlYyIsInBhdGgiLCJyZXF1ZXN0TWV0aG9kIiwibWV0aG9kIiwidXJsUGFyYW1zIiwibGVuZ3RoIiwidmFsdWVzIiwicmVkdWNlIiwidXJsRGF0YSIsInBhcmFtIiwidmFsdWUiLCJzaGlmdCIsIkVycm9yIiwicmVwbGFjZSIsIiQwIiwiJDEiLCJlbmNvZGVVUklDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBS2pCOzs7QUFHQSxnQkFBWUMsWUFBWixFQUFrQ0MsV0FBbEMsRUFBNEQ7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDeEQsU0FBS0MsSUFBTCxjQUFnQkYsWUFBaEIsU0FBK0JDLFdBQVcsQ0FBQ0MsSUFBM0M7QUFDQSxTQUFLQyxhQUFMLEdBQXFCRixXQUFXLENBQUNHLE1BQVosSUFBc0IsS0FBM0M7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLDZCQUFpQixLQUFLSCxJQUF0QixDQUFqQjtBQUNIOzs7O3NDQUV5QjtBQUN0QixhQUFPLEtBQUtHLFNBQUwsQ0FBZUMsTUFBdEI7QUFDSDtBQUVEOzs7Ozs7Ozs7OzsyQ0FRdUJDLE0sRUFBZ0M7QUFBQTs7QUFDbkQsYUFBTyxLQUFLRixTQUFMLENBQWVHLE1BQWYsQ0FBc0IsVUFBQ0MsT0FBRCxFQUFtQkMsS0FBbkIsRUFBcUM7QUFDOUQsWUFBTUMsS0FBeUIsR0FBR0osTUFBTSxDQUFDSyxLQUFQLEVBQWxDOztBQUVBLFlBQUksT0FBT0QsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUMzQixnQkFBTSxJQUFJRSxLQUFKLHlDQUM4QkgsS0FEOUIsMkNBQ21FQyxLQURuRSxrQ0FDaUcsS0FBSSxDQUFDUixhQUR0RyxjQUN1SCxLQUFJLENBQUNELElBRDVILFFBQU47QUFHSDs7QUFFRE8sUUFBQUEsT0FBTyxDQUFDQyxLQUFELENBQVAsR0FBaUJDLEtBQWpCO0FBQ0EsZUFBT0YsT0FBUDtBQUNILE9BWE0sRUFXSixFQVhJLENBQVA7QUFZSDtBQUVEOzs7Ozs7O2tEQUk4QkEsTyxFQUEwQjtBQUNwRCxhQUFPLEtBQUtQLElBQUwsQ0FBVVksT0FBVixDQUFrQixlQUFsQixFQUFtQyxVQUFDQyxFQUFELEVBQWFDLEVBQWI7QUFBQSxlQUE0QkMsa0JBQWtCLENBQUNSLE9BQU8sQ0FBQ08sRUFBRCxDQUFQLElBQWUsRUFBaEIsQ0FBOUM7QUFBQSxPQUFuQyxDQUFQO0FBQ0g7OztnQ0FFbUI7QUFDaEIsYUFBTyxLQUFLYixhQUFaO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGlhbFNwZWMgZnJvbSAnLi9JbnRlcmZhY2VzL1BhcnRpYWxTcGVjJztcbmltcG9ydCBVcmxEYXRhIGZyb20gJy4vSW50ZXJmYWNlcy9VcmxEYXRhJztcbmltcG9ydCB7IGV4dHJhY3RVcmxQYXJhbXMgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlYyB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHBhdGg6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcmVxdWVzdE1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdQQVRDSCcgfCAnT1BUSU9OUycgfCAnREVMRVRFJztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdXJsUGFyYW1zOiBBcnJheTxzdHJpbmc+O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgY29tcGxldGUgc3BlYyBmcm9tIGEgcGFydGlhbCBzcGVjLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlc291cmNlUGF0aDogc3RyaW5nLCBwYXJ0aWFsU3BlYzogUGFydGlhbFNwZWMpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gYC8ke3Jlc291cmNlUGF0aH0ke3BhcnRpYWxTcGVjLnBhdGh9YDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0TWV0aG9kID0gcGFydGlhbFNwZWMubWV0aG9kIHx8ICdHRVQnO1xuICAgICAgICB0aGlzLnVybFBhcmFtcyA9IGV4dHJhY3RVcmxQYXJhbXModGhpcy5wYXRoKTtcbiAgICB9XG5cbiAgICBwYXRoU3ltYm9sQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsUGFyYW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXAgdmFsdWVzIHRvIHRoZSB1cmxQYXJhbXMgZGVmaW5lZCBpbiB0aGlzIHNwZWMsIHNlcXVlbnRpYWxseS5cbiAgICAgKlxuICAgICAqIEUuRy4gSWYgdGhlIHNwZWMgcGF0aCB3YXMgL3tpZH0ve25hbWV9IHRoZW4gdGhlIHVybFBhcmFtcyB3b3VsZCBiZSBbJ2lkJywgJ25hbWUnXS5cbiAgICAgKiBUaGVyZWZvcmUsIGlmIHZhbHVlcyA9IFsnMTAnLCAndGVzdGVyJ10sIHdlIHdpbGwgcmV0dXJuIHRoZSBtYXBwaW5nIHsgaWQ6ICcxMCcsIG5hbWU6ICd0ZXN0ZXInIH0uXG4gICAgICpcbiAgICAgKiBAdGhyb3dzIEVycm9yIFdoZW4gYW55IHZhbHVlIHBhc3NlZCBpbiBpcyBub3QgYSBzdHJpbmcuXG4gICAgICovXG4gICAgbWFwVmFsdWVzVG9QYXRoU3ltYm9scyh2YWx1ZXM6IEFycmF5PHN0cmluZz4pOiBVcmxEYXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsUGFyYW1zLnJlZHVjZSgodXJsRGF0YTogVXJsRGF0YSwgcGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHZhbHVlcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYFdoaXJsaSBTcGVjIEVycm9yOiBBcmd1bWVudCBcIiR7cGFyYW19XCIgbXVzdCBiZSBhIHN0cmluZywgYnV0IGdvdDogJHt2YWx1ZX0gKG9uIEFQSSByZXF1ZXN0IHRvIFxcYCR7dGhpcy5yZXF1ZXN0TWV0aG9kfSAke3RoaXMucGF0aH1cXGApYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cmxEYXRhW3BhcmFtXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHVybERhdGE7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2luZyBhbiBvYmplY3Qgb2YgVVJMIGRhdGEgKGUuZy4geyBpZDogJzEwJyB9ICksIHJldHVybiBhIGZ1bGwgVVJMXG4gICAgICogZm9yIHRoZSByZXNvdXJjZSByZXF1ZXN0LCBlLmcuIC9yZXNvdXJjZS97aWR9IGJlY29tZXMgL3Jlc291cmNlLzEwLlxuICAgICAqL1xuICAgIHJlcGxhY2VQYXRoU3ltYm9sc1dpdGhVcmxEYXRhKHVybERhdGE6IFVybERhdGEpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXRoLnJlcGxhY2UoL3soW1xcc1xcU10rPyl9L2csICgkMDogc3RyaW5nLCAkMTogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQodXJsRGF0YVskMV0gfHwgJycpKTtcbiAgICB9XG5cbiAgICBnZXRNZXRob2QoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdE1ldGhvZDtcbiAgICB9XG59XG4iXX0=