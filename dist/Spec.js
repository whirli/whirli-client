"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Spec = /*#__PURE__*/function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TcGVjLnRzIl0sIm5hbWVzIjpbIlNwZWMiLCJyZXNvdXJjZU9wdGlvbnMiLCJwYXJ0aWFsU3BlYyIsImRlZmF1bHRBY2Nlc3MiLCJyZXNvdXJjZVBhdGgiLCJhY2Nlc3MiLCJwYXRoIiwicmVxdWVzdE1ldGhvZCIsIm1ldGhvZCIsInVybFBhcmFtcyIsImxlbmd0aCIsInZhbHVlcyIsInJlZHVjZSIsInVybERhdGEiLCJwYXJhbSIsInZhbHVlIiwic2hpZnQiLCJFcnJvciIsInJlcGxhY2UiLCIkMCIsIiQxIiwiZW5jb2RlVVJJQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7SUFFcUJBLEk7QUFNakI7QUFDSjtBQUNBO0FBQ0ksZ0JBQVlDLGVBQVosRUFBOENDLFdBQTlDLEVBQXdFO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3BFLFFBQVFDLGFBQVIsR0FBd0NGLGVBQXhDLENBQVFFLGFBQVI7QUFBQSxRQUF1QkMsWUFBdkIsR0FBd0NILGVBQXhDLENBQXVCRyxZQUF2QjtBQUVBLFNBQUtDLE1BQUwsR0FBY0gsV0FBVyxDQUFDRyxNQUFaLElBQXNCRixhQUFwQztBQUNBLFNBQUtHLElBQUwsYUFBZSxLQUFLRCxNQUFwQixTQUE2QkQsWUFBN0IsU0FBNENGLFdBQVcsQ0FBQ0ksSUFBWixJQUFvQixHQUFoRTtBQUNBLFNBQUtDLGFBQUwsR0FBcUJMLFdBQVcsQ0FBQ00sTUFBWixJQUFzQixLQUEzQztBQUNBLFNBQUtDLFNBQUwsR0FBaUIsNkJBQWlCLEtBQUtILElBQXRCLENBQWpCO0FBQ0g7Ozs7V0FFRCwyQkFBMEI7QUFDdEIsYUFBTyxLQUFLRyxTQUFMLENBQWVDLE1BQXRCO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksZ0NBQXVCQyxNQUF2QixFQUF1RDtBQUFBOztBQUNuRCxhQUFPLEtBQUtGLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixVQUFDQyxPQUFELEVBQW1CQyxLQUFuQixFQUFxQztBQUM5RCxZQUFNQyxLQUF5QixHQUFHSixNQUFNLENBQUNLLEtBQVAsRUFBbEM7O0FBRUEsWUFBSSxPQUFPRCxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzNCLGdCQUFNLElBQUlFLEtBQUoseUNBQzhCSCxLQUQ5QiwyQ0FDbUVDLEtBRG5FLGtDQUNpRyxLQUFJLENBQUNSLGFBRHRHLGNBQ3VILEtBQUksQ0FBQ0QsSUFENUgsUUFBTjtBQUdIOztBQUVETyxRQUFBQSxPQUFPLENBQUNDLEtBQUQsQ0FBUCxHQUFpQkMsS0FBakI7QUFDQSxlQUFPRixPQUFQO0FBQ0gsT0FYTSxFQVdKLEVBWEksQ0FBUDtBQVlIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSx1Q0FBOEJBLE9BQTlCLEVBQXdEO0FBQ3BELGFBQU8sS0FBS1AsSUFBTCxDQUFVWSxPQUFWLENBQWtCLGVBQWxCLEVBQW1DLFVBQUNDLEVBQUQsRUFBYUMsRUFBYjtBQUFBLGVBQTRCQyxrQkFBa0IsQ0FBQ1IsT0FBTyxDQUFDTyxFQUFELENBQVAsSUFBZSxFQUFoQixDQUE5QztBQUFBLE9BQW5DLENBQVA7QUFDSDs7O1dBRUQscUJBQW9CO0FBQ2hCLGFBQU8sS0FBS2IsYUFBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnRpYWxTcGVjIGZyb20gJy4vSW50ZXJmYWNlcy9QYXJ0aWFsU3BlYyc7XG5pbXBvcnQgVXJsRGF0YSBmcm9tICcuL0ludGVyZmFjZXMvVXJsRGF0YSc7XG5pbXBvcnQgeyBSZXNvdXJjZU9wdGlvbnMgfSBmcm9tICcuL0ludGVyZmFjZXMvUmVzb3VyY2VPcHRpb25zJztcbmltcG9ydCB7IEh0dHBNZXRob2QgfSBmcm9tICcuL0ludGVyZmFjZXMvSHR0cE1ldGhvZCc7XG5pbXBvcnQgeyBBY2Nlc3NUeXBlIH0gZnJvbSAnLi9JbnRlcmZhY2VzL0FjY2Vzc1R5cGUnO1xuaW1wb3J0IHsgZXh0cmFjdFVybFBhcmFtcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVjIHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCByZWFkb25seSByZXF1ZXN0TWV0aG9kOiBIdHRwTWV0aG9kO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBhY2Nlc3M6IEFjY2Vzc1R5cGU7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHVybFBhcmFtczogQXJyYXk8c3RyaW5nPjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGNvbXBsZXRlIHNwZWMgZnJvbSBhIHBhcnRpYWwgc3BlYy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXNvdXJjZU9wdGlvbnM6IFJlc291cmNlT3B0aW9ucywgcGFydGlhbFNwZWM6IFBhcnRpYWxTcGVjKSB7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdEFjY2VzcywgcmVzb3VyY2VQYXRoIH0gPSByZXNvdXJjZU9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5hY2Nlc3MgPSBwYXJ0aWFsU3BlYy5hY2Nlc3MgfHwgZGVmYXVsdEFjY2VzcztcbiAgICAgICAgdGhpcy5wYXRoID0gYCR7dGhpcy5hY2Nlc3N9JHtyZXNvdXJjZVBhdGh9JHtwYXJ0aWFsU3BlYy5wYXRoIHx8ICcvJ31gO1xuICAgICAgICB0aGlzLnJlcXVlc3RNZXRob2QgPSBwYXJ0aWFsU3BlYy5tZXRob2QgfHwgJ0dFVCc7XG4gICAgICAgIHRoaXMudXJsUGFyYW1zID0gZXh0cmFjdFVybFBhcmFtcyh0aGlzLnBhdGgpO1xuICAgIH1cblxuICAgIHBhdGhTeW1ib2xDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy51cmxQYXJhbXMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcCB2YWx1ZXMgdG8gdGhlIHVybFBhcmFtcyBkZWZpbmVkIGluIHRoaXMgc3BlYywgc2VxdWVudGlhbGx5LlxuICAgICAqXG4gICAgICogRS5HLiBJZiB0aGUgc3BlYyBwYXRoIHdhcyAve2lkfS97bmFtZX0gdGhlbiB0aGUgdXJsUGFyYW1zIHdvdWxkIGJlIFsnaWQnLCAnbmFtZSddLlxuICAgICAqIFRoZXJlZm9yZSwgaWYgdmFsdWVzID0gWycxMCcsICd0ZXN0ZXInXSwgd2Ugd2lsbCByZXR1cm4gdGhlIG1hcHBpbmcgeyBpZDogJzEwJywgbmFtZTogJ3Rlc3RlcicgfS5cbiAgICAgKlxuICAgICAqIEB0aHJvd3MgRXJyb3IgV2hlbiBhbnkgdmFsdWUgcGFzc2VkIGluIGlzIG5vdCBhIHN0cmluZy5cbiAgICAgKi9cbiAgICBtYXBWYWx1ZXNUb1BhdGhTeW1ib2xzKHZhbHVlczogQXJyYXk8c3RyaW5nPik6IFVybERhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy51cmxQYXJhbXMucmVkdWNlKCh1cmxEYXRhOiBVcmxEYXRhLCBwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdmFsdWVzLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgV2hpcmxpIFNwZWMgRXJyb3I6IEFyZ3VtZW50IFwiJHtwYXJhbX1cIiBtdXN0IGJlIGEgc3RyaW5nLCBidXQgZ290OiAke3ZhbHVlfSAob24gQVBJIHJlcXVlc3QgdG8gXFxgJHt0aGlzLnJlcXVlc3RNZXRob2R9ICR7dGhpcy5wYXRofVxcYClgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVybERhdGFbcGFyYW1dID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdXJsRGF0YTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzaW5nIGFuIG9iamVjdCBvZiBVUkwgZGF0YSAoZS5nLiB7IGlkOiAnMTAnIH0gKSwgcmV0dXJuIGEgZnVsbCBVUkxcbiAgICAgKiBmb3IgdGhlIHJlc291cmNlIHJlcXVlc3QsIGUuZy4gL3Jlc291cmNlL3tpZH0gYmVjb21lcyAvcmVzb3VyY2UvMTAuXG4gICAgICovXG4gICAgcmVwbGFjZVBhdGhTeW1ib2xzV2l0aFVybERhdGEodXJsRGF0YTogVXJsRGF0YSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdGgucmVwbGFjZSgveyhbXFxzXFxTXSs/KX0vZywgKCQwOiBzdHJpbmcsICQxOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudCh1cmxEYXRhWyQxXSB8fCAnJykpO1xuICAgIH1cblxuICAgIGdldE1ldGhvZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TWV0aG9kO1xuICAgIH1cbn1cbiJdfQ==