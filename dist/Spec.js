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

    _defineProperty(this, "access", void 0);

    _defineProperty(this, "urlParams", void 0);

    this.access = partialSpec.access || 'guest';
    this.path = "".concat(this.access, "/").concat(resourcePath).concat(partialSpec.path);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TcGVjLnRzIl0sIm5hbWVzIjpbIlNwZWMiLCJyZXNvdXJjZVBhdGgiLCJwYXJ0aWFsU3BlYyIsImFjY2VzcyIsInBhdGgiLCJyZXF1ZXN0TWV0aG9kIiwibWV0aG9kIiwidXJsUGFyYW1zIiwibGVuZ3RoIiwidmFsdWVzIiwicmVkdWNlIiwidXJsRGF0YSIsInBhcmFtIiwidmFsdWUiLCJzaGlmdCIsIkVycm9yIiwicmVwbGFjZSIsIiQwIiwiJDEiLCJlbmNvZGVVUklDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBTWpCOzs7QUFHQSxnQkFBWUMsWUFBWixFQUFrQ0MsV0FBbEMsRUFBNEQ7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDeEQsU0FBS0MsTUFBTCxHQUFjRCxXQUFXLENBQUNDLE1BQVosSUFBc0IsT0FBcEM7QUFDQSxTQUFLQyxJQUFMLGFBQWUsS0FBS0QsTUFBcEIsY0FBOEJGLFlBQTlCLFNBQTZDQyxXQUFXLENBQUNFLElBQXpEO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkgsV0FBVyxDQUFDSSxNQUFaLElBQXNCLEtBQTNDO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQiw2QkFBaUIsS0FBS0gsSUFBdEIsQ0FBakI7QUFDSDs7OztzQ0FFeUI7QUFDdEIsYUFBTyxLQUFLRyxTQUFMLENBQWVDLE1BQXRCO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7MkNBUXVCQyxNLEVBQWdDO0FBQUE7O0FBQ25ELGFBQU8sS0FBS0YsU0FBTCxDQUFlRyxNQUFmLENBQXNCLFVBQUNDLE9BQUQsRUFBbUJDLEtBQW5CLEVBQXFDO0FBQzlELFlBQU1DLEtBQXlCLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBUCxFQUFsQzs7QUFFQSxZQUFJLE9BQU9ELEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDM0IsZ0JBQU0sSUFBSUUsS0FBSix5Q0FDOEJILEtBRDlCLDJDQUNtRUMsS0FEbkUsa0NBQ2lHLEtBQUksQ0FBQ1IsYUFEdEcsY0FDdUgsS0FBSSxDQUFDRCxJQUQ1SCxRQUFOO0FBR0g7O0FBRURPLFFBQUFBLE9BQU8sQ0FBQ0MsS0FBRCxDQUFQLEdBQWlCQyxLQUFqQjtBQUNBLGVBQU9GLE9BQVA7QUFDSCxPQVhNLEVBV0osRUFYSSxDQUFQO0FBWUg7QUFFRDs7Ozs7OztrREFJOEJBLE8sRUFBMEI7QUFDcEQsYUFBTyxLQUFLUCxJQUFMLENBQVVZLE9BQVYsQ0FBa0IsZUFBbEIsRUFBbUMsVUFBQ0MsRUFBRCxFQUFhQyxFQUFiO0FBQUEsZUFBNEJDLGtCQUFrQixDQUFDUixPQUFPLENBQUNPLEVBQUQsQ0FBUCxJQUFlLEVBQWhCLENBQTlDO0FBQUEsT0FBbkMsQ0FBUDtBQUNIOzs7Z0NBRW1CO0FBQ2hCLGFBQU8sS0FBS2IsYUFBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnRpYWxTcGVjIGZyb20gJy4vSW50ZXJmYWNlcy9QYXJ0aWFsU3BlYyc7XG5pbXBvcnQgVXJsRGF0YSBmcm9tICcuL0ludGVyZmFjZXMvVXJsRGF0YSc7XG5pbXBvcnQgeyBleHRyYWN0VXJsUGFyYW1zIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWMge1xuICAgIHByb3RlY3RlZCByZWFkb25seSBwYXRoOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJlcXVlc3RNZXRob2Q6ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnUEFUQ0gnIHwgJ09QVElPTlMnIHwgJ0RFTEVURSc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGFjY2VzczogJ2d1ZXN0JyB8ICdtZW1iZXInIHwgJ3dhY2MnO1xuICAgIHByb3RlY3RlZCByZWFkb25seSB1cmxQYXJhbXM6IEFycmF5PHN0cmluZz47XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjb21wbGV0ZSBzcGVjIGZyb20gYSBwYXJ0aWFsIHNwZWMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVzb3VyY2VQYXRoOiBzdHJpbmcsIHBhcnRpYWxTcGVjOiBQYXJ0aWFsU3BlYykge1xuICAgICAgICB0aGlzLmFjY2VzcyA9IHBhcnRpYWxTcGVjLmFjY2VzcyB8fCAnZ3Vlc3QnO1xuICAgICAgICB0aGlzLnBhdGggPSBgJHt0aGlzLmFjY2Vzc30vJHtyZXNvdXJjZVBhdGh9JHtwYXJ0aWFsU3BlYy5wYXRofWA7XG4gICAgICAgIHRoaXMucmVxdWVzdE1ldGhvZCA9IHBhcnRpYWxTcGVjLm1ldGhvZCB8fCAnR0VUJztcbiAgICAgICAgdGhpcy51cmxQYXJhbXMgPSBleHRyYWN0VXJsUGFyYW1zKHRoaXMucGF0aCk7XG4gICAgfVxuXG4gICAgcGF0aFN5bWJvbENvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybFBhcmFtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIHZhbHVlcyB0byB0aGUgdXJsUGFyYW1zIGRlZmluZWQgaW4gdGhpcyBzcGVjLCBzZXF1ZW50aWFsbHkuXG4gICAgICpcbiAgICAgKiBFLkcuIElmIHRoZSBzcGVjIHBhdGggd2FzIC97aWR9L3tuYW1lfSB0aGVuIHRoZSB1cmxQYXJhbXMgd291bGQgYmUgWydpZCcsICduYW1lJ10uXG4gICAgICogVGhlcmVmb3JlLCBpZiB2YWx1ZXMgPSBbJzEwJywgJ3Rlc3RlciddLCB3ZSB3aWxsIHJldHVybiB0aGUgbWFwcGluZyB7IGlkOiAnMTAnLCBuYW1lOiAndGVzdGVyJyB9LlxuICAgICAqXG4gICAgICogQHRocm93cyBFcnJvciBXaGVuIGFueSB2YWx1ZSBwYXNzZWQgaW4gaXMgbm90IGEgc3RyaW5nLlxuICAgICAqL1xuICAgIG1hcFZhbHVlc1RvUGF0aFN5bWJvbHModmFsdWVzOiBBcnJheTxzdHJpbmc+KTogVXJsRGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybFBhcmFtcy5yZWR1Y2UoKHVybERhdGE6IFVybERhdGEsIHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB2YWx1ZXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBXaGlybGkgU3BlYyBFcnJvcjogQXJndW1lbnQgXCIke3BhcmFtfVwiIG11c3QgYmUgYSBzdHJpbmcsIGJ1dCBnb3Q6ICR7dmFsdWV9IChvbiBBUEkgcmVxdWVzdCB0byBcXGAke3RoaXMucmVxdWVzdE1ldGhvZH0gJHt0aGlzLnBhdGh9XFxgKWAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXJsRGF0YVtwYXJhbV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB1cmxEYXRhO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNpbmcgYW4gb2JqZWN0IG9mIFVSTCBkYXRhIChlLmcuIHsgaWQ6ICcxMCcgfSApLCByZXR1cm4gYSBmdWxsIFVSTFxuICAgICAqIGZvciB0aGUgcmVzb3VyY2UgcmVxdWVzdCwgZS5nLiAvcmVzb3VyY2Uve2lkfSBiZWNvbWVzIC9yZXNvdXJjZS8xMC5cbiAgICAgKi9cbiAgICByZXBsYWNlUGF0aFN5bWJvbHNXaXRoVXJsRGF0YSh1cmxEYXRhOiBVcmxEYXRhKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aC5yZXBsYWNlKC97KFtcXHNcXFNdKz8pfS9nLCAoJDA6IHN0cmluZywgJDE6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHVybERhdGFbJDFdIHx8ICcnKSk7XG4gICAgfVxuXG4gICAgZ2V0TWV0aG9kKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RNZXRob2Q7XG4gICAgfVxufVxuIl19