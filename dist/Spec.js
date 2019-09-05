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
  /**
   * Map values to the urlParams defined in this spec, sequentially.
   *
   * E.G. If the spec path was /{id}/{name} then the urlParams would be ['id', 'name'].
   * Therefore, if values = ['10', 'tester'], we will return the mapping { id: '10', name: 'tester' }.
   *
   * @throws Error When any value passed in is not a string.
   */


  _createClass(Spec, [{
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
  }]);

  return Spec;
}();

exports["default"] = Spec;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TcGVjLnRzIl0sIm5hbWVzIjpbIlNwZWMiLCJyZXNvdXJjZVBhdGgiLCJwYXJ0aWFsU3BlYyIsInBhdGgiLCJyZXF1ZXN0TWV0aG9kIiwibWV0aG9kIiwidXJsUGFyYW1zIiwidmFsdWVzIiwicmVkdWNlIiwidXJsRGF0YSIsInBhcmFtIiwidmFsdWUiLCJzaGlmdCIsIkVycm9yIiwicmVwbGFjZSIsIiQwIiwiJDEiLCJlbmNvZGVVUklDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBS2pCOzs7QUFHQSxnQkFBWUMsWUFBWixFQUFrQ0MsV0FBbEMsRUFBNEQ7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDeEQsU0FBS0MsSUFBTCxjQUFnQkYsWUFBaEIsU0FBK0JDLFdBQVcsQ0FBQ0MsSUFBM0M7QUFDQSxTQUFLQyxhQUFMLEdBQXNCRixXQUFXLENBQUNHLE1BQVosSUFBc0IsS0FBNUM7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLDZCQUFpQixLQUFLSCxJQUF0QixDQUFqQjtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7OzsyQ0FRdUJJLE0sRUFBZ0M7QUFBQTs7QUFDbkQsYUFBTyxLQUFLRCxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsVUFBQ0MsT0FBRCxFQUFtQkMsS0FBbkIsRUFBcUM7QUFDOUQsWUFBTUMsS0FBdUIsR0FBR0osTUFBTSxDQUFDSyxLQUFQLEVBQWhDOztBQUVBLFlBQUksT0FBT0QsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUMzQixnQkFBTSxJQUFJRSxLQUFKLHlDQUM4QkgsS0FEOUIsMkNBQ21FQyxLQURuRSxrQ0FDaUcsS0FBSSxDQUFDUCxhQUR0RyxjQUN1SCxLQUFJLENBQUNELElBRDVILFFBQU47QUFHSDs7QUFFRE0sUUFBQUEsT0FBTyxDQUFDQyxLQUFELENBQVAsR0FBaUJDLEtBQWpCO0FBQ0EsZUFBT0YsT0FBUDtBQUNILE9BWE0sRUFXSixFQVhJLENBQVA7QUFZSDtBQUVEOzs7Ozs7O2tEQUk4QkEsTyxFQUEwQjtBQUNwRCxhQUFPLEtBQUtOLElBQUwsQ0FBVVcsT0FBVixDQUNILGVBREcsRUFFSCxVQUFDQyxFQUFELEVBQWFDLEVBQWI7QUFBQSxlQUE0QkMsa0JBQWtCLENBQUNSLE9BQU8sQ0FBQ08sRUFBRCxDQUFQLElBQWUsRUFBaEIsQ0FBOUM7QUFBQSxPQUZHLENBQVA7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJ0aWFsU3BlYyBmcm9tICcuL0ludGVyZmFjZXMvUGFydGlhbFNwZWMnO1xuaW1wb3J0IFVybERhdGEgZnJvbSAnLi9JbnRlcmZhY2VzL1VybERhdGEnO1xuaW1wb3J0IHsgZXh0cmFjdFVybFBhcmFtcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVjIHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCByZWFkb25seSByZXF1ZXN0TWV0aG9kOiAnR0VUJyB8ICdQT1NUJyB8ICdQVVQnIHwgJ1BBVENIJyB8ICdPUFRJT05TJyB8ICdERUxFVEUnO1xuICAgIHByb3RlY3RlZCByZWFkb25seSB1cmxQYXJhbXM6IEFycmF5PHN0cmluZz47XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjb21wbGV0ZSBzcGVjIGZyb20gYSBwYXJ0aWFsIHNwZWMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVzb3VyY2VQYXRoOiBzdHJpbmcsIHBhcnRpYWxTcGVjOiBQYXJ0aWFsU3BlYykge1xuICAgICAgICB0aGlzLnBhdGggPSBgLyR7cmVzb3VyY2VQYXRofSR7cGFydGlhbFNwZWMucGF0aH1gO1xuICAgICAgICB0aGlzLnJlcXVlc3RNZXRob2QgPSAocGFydGlhbFNwZWMubWV0aG9kIHx8ICdHRVQnKTtcbiAgICAgICAgdGhpcy51cmxQYXJhbXMgPSBleHRyYWN0VXJsUGFyYW1zKHRoaXMucGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIHZhbHVlcyB0byB0aGUgdXJsUGFyYW1zIGRlZmluZWQgaW4gdGhpcyBzcGVjLCBzZXF1ZW50aWFsbHkuXG4gICAgICpcbiAgICAgKiBFLkcuIElmIHRoZSBzcGVjIHBhdGggd2FzIC97aWR9L3tuYW1lfSB0aGVuIHRoZSB1cmxQYXJhbXMgd291bGQgYmUgWydpZCcsICduYW1lJ10uXG4gICAgICogVGhlcmVmb3JlLCBpZiB2YWx1ZXMgPSBbJzEwJywgJ3Rlc3RlciddLCB3ZSB3aWxsIHJldHVybiB0aGUgbWFwcGluZyB7IGlkOiAnMTAnLCBuYW1lOiAndGVzdGVyJyB9LlxuICAgICAqXG4gICAgICogQHRocm93cyBFcnJvciBXaGVuIGFueSB2YWx1ZSBwYXNzZWQgaW4gaXMgbm90IGEgc3RyaW5nLlxuICAgICAqL1xuICAgIG1hcFZhbHVlc1RvUGF0aFN5bWJvbHModmFsdWVzOiBBcnJheTxzdHJpbmc+KTogVXJsRGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybFBhcmFtcy5yZWR1Y2UoKHVybERhdGE6IFVybERhdGEsIHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmd8dW5kZWZpbmVkID0gdmFsdWVzLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgV2hpcmxpIFNwZWMgRXJyb3I6IEFyZ3VtZW50IFwiJHtwYXJhbX1cIiBtdXN0IGJlIGEgc3RyaW5nLCBidXQgZ290OiAke3ZhbHVlfSAob24gQVBJIHJlcXVlc3QgdG8gXFxgJHt0aGlzLnJlcXVlc3RNZXRob2R9ICR7dGhpcy5wYXRofVxcYClgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVybERhdGFbcGFyYW1dID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdXJsRGF0YTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzaW5nIGFuIG9iamVjdCBvZiBVUkwgZGF0YSAoZS5nLiB7IGlkOiAnMTAnIH0gKSwgcmV0dXJuIGEgZnVsbCBVUkxcbiAgICAgKiBmb3IgdGhlIHJlc291cmNlIHJlcXVlc3QsIGUuZy4gL3Jlc291cmNlL3tpZH0gYmVjb21lcyAvcmVzb3VyY2UvMTAuXG4gICAgICovXG4gICAgcmVwbGFjZVBhdGhTeW1ib2xzV2l0aFVybERhdGEodXJsRGF0YTogVXJsRGF0YSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdGgucmVwbGFjZShcbiAgICAgICAgICAgIC97KFtcXHNcXFNdKz8pfS9nLFxuICAgICAgICAgICAgKCQwOiBzdHJpbmcsICQxOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudCh1cmxEYXRhWyQxXSB8fCAnJylcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=