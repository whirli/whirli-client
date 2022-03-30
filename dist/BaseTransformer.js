"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _transformers = require("./helpers/transformers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var BaseTransformer = /*#__PURE__*/function () {
  function BaseTransformer() {
    _classCallCheck(this, BaseTransformer);
  }

  _createClass(BaseTransformer, [{
    key: "mapData",
    value:
    /**
     * Perform the data mapping - this should be overridden by each specific Transformer
     *
     * @param data
     */
    function mapData(data) {
      return data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQmFzZVRyYW5zZm9ybWVyIiwiZGF0YSIsImluY2x1ZGVOYW1lIiwidHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsZTs7Ozs7Ozs7QUFDRjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0kscUJBQVFDLElBQVIsRUFBOEI7QUFDMUIsYUFBT0EsSUFBUDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSxjQUFLQSxJQUFMLEVBQWdDQyxXQUFoQyxFQUFxREMsV0FBckQsRUFBa0c7QUFDOUYsVUFBSUYsSUFBSSxDQUFDQyxXQUFELENBQVIsRUFBdUI7QUFDbkIsZUFBTyw2QkFBVUQsSUFBSSxDQUFDQyxXQUFELENBQWQsRUFBNkJDLFdBQTdCLENBQVA7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksb0JBQVdGLElBQVgsRUFBc0NDLFdBQXRDLEVBQTJEQyxXQUEzRCxFQUFnRztBQUM1RixVQUFJRixJQUFJLENBQUNDLFdBQUQsQ0FBUixFQUF1QjtBQUNuQixlQUFPLHVDQUFvQkQsSUFBSSxDQUFDQyxXQUFELENBQXhCLEVBQXVDQyxXQUF2QyxDQUFQO0FBQ0g7O0FBQ0QsYUFBTyxFQUFQO0FBQ0g7Ozs7OztlQUdVSCxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhbnNmb3JtLCB0cmFuc2Zvcm1Db2xsZWN0aW9uIH0gZnJvbSAnLi9oZWxwZXJzL3RyYW5zZm9ybWVycyc7XG5cbmNsYXNzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybSB0aGUgZGF0YSBtYXBwaW5nIC0gdGhpcyBzaG91bGQgYmUgb3ZlcnJpZGRlbiBieSBlYWNoIHNwZWNpZmljIFRyYW5zZm9ybWVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIG1hcERhdGEoZGF0YTogb2JqZWN0KTogb2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIGFuIGF0dHJpYnV0ZSBpZiBpbiBpbmNsdWRlcywgYW5kIHRoZSBkYXRhIGV4aXN0c1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gaW5jbHVkZU5hbWVcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtZXJcbiAgICAgKi9cbiAgICBpdGVtKGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4sIGluY2x1ZGVOYW1lOiBzdHJpbmcsIHRyYW5zZm9ybWVyOiBCYXNlVHJhbnNmb3JtZXIpOiBvYmplY3QgfCBudWxsIHtcbiAgICAgICAgaWYgKGRhdGFbaW5jbHVkZU5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtKGRhdGFbaW5jbHVkZU5hbWVdLCB0cmFuc2Zvcm1lcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIGEgY29sbGVjdGlvbiBvZiBhdHRyaWJ1dGVzIGlmIGluIGluY2x1ZGVzLCBhbmQgdGhlIGRhdGEgZXhpc3RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBpbmNsdWRlTmFtZVxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm1lclxuICAgICAqL1xuICAgIGNvbGxlY3Rpb24oZGF0YTogUmVjb3JkPHN0cmluZywgYW55PiwgaW5jbHVkZU5hbWU6IHN0cmluZywgdHJhbnNmb3JtZXI6IEJhc2VUcmFuc2Zvcm1lcik6IGFueVtdIHtcbiAgICAgICAgaWYgKGRhdGFbaW5jbHVkZU5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ29sbGVjdGlvbihkYXRhW2luY2x1ZGVOYW1lXSwgdHJhbnNmb3JtZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VUcmFuc2Zvcm1lcjtcbiJdfQ==