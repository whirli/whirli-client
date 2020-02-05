"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _transformers = require("./helpers/transformers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseTransformer =
/*#__PURE__*/
function () {
  function BaseTransformer() {
    _classCallCheck(this, BaseTransformer);
  }

  _createClass(BaseTransformer, [{
    key: "mapData",

    /**
     * Perform the data mapping - this should be overridden by each specific Transformer
     *
     * @param data
     * @param args
     */
    value: function mapData(data) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return _objectSpread({
        data: data
      }, args);
    }
    /**
     * Transform an attribute if in includes, and the data exists
     *
     * @param data
     * @param includeName
     * @param transformer
     */

  }, {
    key: "item",
    value: function item(data, includeName, transformer) {
      if (data[includeName]) {
        return (0, _transformers.transform)(data[includeName], transformer);
      }

      return null;
    }
    /**
     * Transform a collection of attributes if in includes, and the data exists
     *
     * @param data
     * @param includeName
     * @param transformer
     */

  }, {
    key: "collection",
    value: function collection(data, includeName, transformer) {
      if (data[includeName]) {
        return (0, _transformers.transformCollection)(data[includeName], transformer);
      }

      return [];
    }
  }]);

  return BaseTransformer;
}();

var _default = BaseTransformer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQmFzZVRyYW5zZm9ybWVyIiwiZGF0YSIsImFyZ3MiLCJpbmNsdWRlTmFtZSIsInRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGU7Ozs7Ozs7Ozs7QUFDRjs7Ozs7OzRCQU1RQyxJLEVBQTZDO0FBQUEsVUFBL0JDLElBQStCLHVFQUFaLEVBQVk7QUFDakQ7QUFDSUQsUUFBQUEsSUFBSSxFQUFKQTtBQURKLFNBRU9DLElBRlA7QUFJSDtBQUVEOzs7Ozs7Ozs7O3lCQU9LRCxJLEVBQTJCRSxXLEVBQXFCQyxXLEVBQThCO0FBQy9FLFVBQUlILElBQUksQ0FBQ0UsV0FBRCxDQUFSLEVBQXVCO0FBQ25CLGVBQU8sNkJBQVVGLElBQUksQ0FBQ0UsV0FBRCxDQUFkLEVBQTZCQyxXQUE3QixDQUFQO0FBQ0g7O0FBQ0QsYUFBTyxJQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7OzsrQkFPV0gsSSxFQUEyQkUsVyxFQUFxQkMsVyxFQUFxQztBQUM1RixVQUFJSCxJQUFJLENBQUNFLFdBQUQsQ0FBUixFQUF1QjtBQUNuQixlQUFPLHVDQUFvQkYsSUFBSSxDQUFDRSxXQUFELENBQXhCLEVBQXVDQyxXQUF2QyxDQUFQO0FBQ0g7O0FBQ0QsYUFBTyxFQUFQO0FBQ0g7Ozs7OztlQUdVSixlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhbnNmb3JtLCB0cmFuc2Zvcm1Db2xsZWN0aW9uIH0gZnJvbSAnLi9oZWxwZXJzL3RyYW5zZm9ybWVycyc7XG5cbmNsYXNzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybSB0aGUgZGF0YSBtYXBwaW5nIC0gdGhpcyBzaG91bGQgYmUgb3ZlcnJpZGRlbiBieSBlYWNoIHNwZWNpZmljIFRyYW5zZm9ybWVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbWFwRGF0YShkYXRhOiBvYmplY3QsIGFyZ3M6IEFycmF5PGFueT4gPSBbXSk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgLi4uYXJncyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gYW4gYXR0cmlidXRlIGlmIGluIGluY2x1ZGVzLCBhbmQgdGhlIGRhdGEgZXhpc3RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBpbmNsdWRlTmFtZVxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm1lclxuICAgICAqL1xuICAgIGl0ZW0oZGF0YTogUmVjb3JkPHN0cmluZywgYW55PiwgaW5jbHVkZU5hbWU6IHN0cmluZywgdHJhbnNmb3JtZXI6IEJhc2VUcmFuc2Zvcm1lcikge1xuICAgICAgICBpZiAoZGF0YVtpbmNsdWRlTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm0oZGF0YVtpbmNsdWRlTmFtZV0sIHRyYW5zZm9ybWVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gYSBjb2xsZWN0aW9uIG9mIGF0dHJpYnV0ZXMgaWYgaW4gaW5jbHVkZXMsIGFuZCB0aGUgZGF0YSBleGlzdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIGluY2x1ZGVOYW1lXG4gICAgICogQHBhcmFtIHRyYW5zZm9ybWVyXG4gICAgICovXG4gICAgY29sbGVjdGlvbihkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBpbmNsdWRlTmFtZTogc3RyaW5nLCB0cmFuc2Zvcm1lcjogQmFzZVRyYW5zZm9ybWVyKTogYW55W10ge1xuICAgICAgICBpZiAoZGF0YVtpbmNsdWRlTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1Db2xsZWN0aW9uKGRhdGFbaW5jbHVkZU5hbWVdLCB0cmFuc2Zvcm1lcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVRyYW5zZm9ybWVyO1xuIl19