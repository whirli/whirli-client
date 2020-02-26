"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Spec = _interopRequireDefault(require("../Spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var requestPath = self.getRequestPath(spec, args);
        var requestBody = _typeof(args[args.length - 1]) === 'object' ? args.pop() : {};
        return api.getHttpClient()["$".concat(spec.getMethod().toLowerCase())](requestPath, requestBody); // @todo Maybe we can handle something to do with pagination here, if it's a paginated resource
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
  }]);

  return AbstractResource;
}();

exports["default"] = AbstractResource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNvdXJjZXMvQWJzdHJhY3RSZXNvdXJjZS50cyJdLCJuYW1lcyI6WyJBYnN0cmFjdFJlc291cmNlIiwiYXBpIiwiaW5pdGlhbGlzZSIsInJlc291cmNlUGF0aCIsInBhcnRpYWxTcGVjIiwic2VsZiIsInJlc291cmNlT3B0aW9ucyIsImRlZmF1bHRBY2Nlc3MiLCJzcGVjIiwiU3BlYyIsIm1ha2VSZXNvdXJjZVJlcXVlc3QiLCJhcmdzIiwicmVxdWVzdFBhdGgiLCJnZXRSZXF1ZXN0UGF0aCIsInJlcXVlc3RCb2R5IiwibGVuZ3RoIiwicG9wIiwiZ2V0SHR0cENsaWVudCIsImdldE1ldGhvZCIsInRvTG93ZXJDYXNlIiwicmVxdWVzdEFyZ3MiLCJyZXF1ZXN0VmFsdWVzIiwic2xpY2UiLCJwYXRoU3ltYm9sQ291bnQiLCJ1cmxEYXRhIiwibWFwVmFsdWVzVG9QYXRoU3ltYm9scyIsInBhdGgiLCJyZXBsYWNlUGF0aFN5bWJvbHNXaXRoVXJsRGF0YSIsImZlYXR1cmVzIiwidHJpbVRyYWlsaW5nU2xhc2giLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBU3FCQSxnQjs7O0FBS2pCLDRCQUFZQyxHQUFaLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsMENBSEEsRUFHQTs7QUFBQSwyQ0FGYSxPQUViOztBQUNyQixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxVQUFMO0FBQ0g7Ozs7aUNBRWtCO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7Z0RBTzRCQyxXLEVBQW9DO0FBQzVELFVBQU1ILEdBQUcsR0FBRyxLQUFLQSxHQUFqQjtBQUNBLFVBQU1JLElBQUksR0FBRyxJQUFiO0FBRUEsVUFBTUMsZUFBZ0MsR0FBRztBQUNyQ0gsUUFBQUEsWUFBWSxFQUFFLEtBQUtBLFlBRGtCO0FBRXJDSSxRQUFBQSxhQUFhLEVBQUUsS0FBS0E7QUFGaUIsT0FBekM7QUFJQSxVQUFNQyxJQUFJLEdBQUcsSUFBSUMsZ0JBQUosQ0FBU0gsZUFBVCxFQUEwQkYsV0FBMUIsQ0FBYjtBQUVBLGFBQU8sU0FBU00sbUJBQVQsR0FBOEQ7QUFBQSwwQ0FBOUJDLElBQThCO0FBQTlCQSxVQUFBQSxJQUE4QjtBQUFBOztBQUNqRSxZQUFNQyxXQUFXLEdBQUdQLElBQUksQ0FBQ1EsY0FBTCxDQUFvQkwsSUFBcEIsRUFBMEJHLElBQTFCLENBQXBCO0FBQ0EsWUFBTUcsV0FBbUIsR0FBRyxRQUFPSCxJQUFJLENBQUNBLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQWYsQ0FBWCxNQUFpQyxRQUFqQyxHQUE2Q0osSUFBSSxDQUFDSyxHQUFMLEVBQTdDLEdBQXFFLEVBQWpHO0FBRUEsZUFBT2YsR0FBRyxDQUFDZ0IsYUFBSixjQUF3QlQsSUFBSSxDQUFDVSxTQUFMLEdBQWlCQyxXQUFqQixFQUF4QixHQUEwRFAsV0FBMUQsRUFBdUVFLFdBQXZFLENBQVAsQ0FKaUUsQ0FNakU7QUFDSCxPQVBEO0FBUUg7OzttQ0FFY04sSSxFQUFZWSxXLEVBQXVDO0FBQzlELFVBQU1DLGFBQTRCLEdBQUdELFdBQVcsQ0FBQ0UsS0FBWixDQUFrQixDQUFsQixFQUFxQmQsSUFBSSxDQUFDZSxlQUFMLEVBQXJCLENBQXJDO0FBRUEsVUFBTUMsT0FBZ0IsR0FBR2hCLElBQUksQ0FBQ2lCLHNCQUFMLENBQTRCSixhQUE1QixDQUF6QjtBQUVBLFVBQUlLLElBQVksR0FBR2xCLElBQUksQ0FBQ21CLDZCQUFMLENBQW1DSCxPQUFuQyxDQUFuQjs7QUFFQSxVQUFJLEtBQUt2QixHQUFMLENBQVMyQixRQUFULEdBQW9CQyxpQkFBeEIsRUFBMkM7QUFDdkNILFFBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDSSxPQUFMLENBQWEsTUFBYixFQUFxQixFQUFyQixDQUFQO0FBQ0g7O0FBRUQsYUFBT0osSUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWMgZnJvbSAnLi4vU3BlYyc7XG5pbXBvcnQgQ2xpZW50IGZyb20gJy4uL0NsaWVudCc7XG5pbXBvcnQgUGFydGlhbFNwZWMgZnJvbSAnLi4vSW50ZXJmYWNlcy9QYXJ0aWFsU3BlYyc7XG5pbXBvcnQgVXJsRGF0YSBmcm9tICcuLi9JbnRlcmZhY2VzL1VybERhdGEnO1xuaW1wb3J0IHsgUmVzb3VyY2VPcHRpb25zIH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9SZXNvdXJjZU9wdGlvbnMnO1xuaW1wb3J0IHsgQWNjZXNzVHlwZSB9IGZyb20gJy4uL0ludGVyZmFjZXMvQWNjZXNzVHlwZSc7XG5cbnR5cGUgUmVxdWVzdEFyZ3VtZW50cyA9IEFycmF5PHN0cmluZyB8IG9iamVjdCB8IEZ1bmN0aW9uPjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIGFwaTogQ2xpZW50O1xuICAgIHByb3RlY3RlZCByZXNvdXJjZVBhdGggPSAnJztcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEFjY2VzczogQWNjZXNzVHlwZSA9ICdndWVzdCc7XG5cbiAgICBjb25zdHJ1Y3RvcihhcGk6IENsaWVudCkge1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIEFQSSByZXNvdXJjZSBmdW5jdGlvbiBmcm9tIGEgc3BlYyBvYmplY3QuXG4gICAgICogQ2FsbCB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gdG8gbWFrZSBhbiBBUEkgY2FsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJ0aWFsU3BlY1xuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBjcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMocGFydGlhbFNwZWM6IFBhcnRpYWxTcGVjKTogRnVuY3Rpb24ge1xuICAgICAgICBjb25zdCBhcGkgPSB0aGlzLmFwaTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgcmVzb3VyY2VPcHRpb25zOiBSZXNvdXJjZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICByZXNvdXJjZVBhdGg6IHRoaXMucmVzb3VyY2VQYXRoLFxuICAgICAgICAgICAgZGVmYXVsdEFjY2VzczogdGhpcy5kZWZhdWx0QWNjZXNzLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzcGVjID0gbmV3IFNwZWMocmVzb3VyY2VPcHRpb25zLCBwYXJ0aWFsU3BlYyk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG1ha2VSZXNvdXJjZVJlcXVlc3QoLi4uYXJnczogUmVxdWVzdEFyZ3VtZW50cyk6IHZvaWQge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFBhdGggPSBzZWxmLmdldFJlcXVlc3RQYXRoKHNwZWMsIGFyZ3MpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdEJvZHk6IG9iamVjdCA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdvYmplY3QnID8gKGFyZ3MucG9wKCkgYXMgb2JqZWN0KSA6IHt9O1xuXG4gICAgICAgICAgICByZXR1cm4gYXBpLmdldEh0dHBDbGllbnQoKVtgJCR7c3BlYy5nZXRNZXRob2QoKS50b0xvd2VyQ2FzZSgpfWBdKHJlcXVlc3RQYXRoLCByZXF1ZXN0Qm9keSk7XG5cbiAgICAgICAgICAgIC8vIEB0b2RvIE1heWJlIHdlIGNhbiBoYW5kbGUgc29tZXRoaW5nIHRvIGRvIHdpdGggcGFnaW5hdGlvbiBoZXJlLCBpZiBpdCdzIGEgcGFnaW5hdGVkIHJlc291cmNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdFBhdGgoc3BlYzogU3BlYywgcmVxdWVzdEFyZ3M6IFJlcXVlc3RBcmd1bWVudHMpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCByZXF1ZXN0VmFsdWVzOiBBcnJheTxzdHJpbmc+ID0gcmVxdWVzdEFyZ3Muc2xpY2UoMCwgc3BlYy5wYXRoU3ltYm9sQ291bnQoKSkgYXMgQXJyYXk8c3RyaW5nPjtcblxuICAgICAgICBjb25zdCB1cmxEYXRhOiBVcmxEYXRhID0gc3BlYy5tYXBWYWx1ZXNUb1BhdGhTeW1ib2xzKHJlcXVlc3RWYWx1ZXMpO1xuXG4gICAgICAgIGxldCBwYXRoOiBzdHJpbmcgPSBzcGVjLnJlcGxhY2VQYXRoU3ltYm9sc1dpdGhVcmxEYXRhKHVybERhdGEpO1xuXG4gICAgICAgIGlmICh0aGlzLmFwaS5mZWF0dXJlcygpLnRyaW1UcmFpbGluZ1NsYXNoKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8rJC8sICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbn1cbiJdfQ==