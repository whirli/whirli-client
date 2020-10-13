"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _transformers = require("./helpers/transformers");

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
     */
    value: function mapData(data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQmFzZVRyYW5zZm9ybWVyIiwiZGF0YSIsImluY2x1ZGVOYW1lIiwidHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsZTs7Ozs7Ozs7OztBQUNGOzs7Ozs0QkFLUUMsSSxFQUFzQjtBQUMxQixhQUFPQSxJQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozt5QkFPS0EsSSxFQUEyQkMsVyxFQUFxQkMsVyxFQUE2QztBQUM5RixVQUFJRixJQUFJLENBQUNDLFdBQUQsQ0FBUixFQUF1QjtBQUNuQixlQUFPLDZCQUFVRCxJQUFJLENBQUNDLFdBQUQsQ0FBZCxFQUE2QkMsV0FBN0IsQ0FBUDtBQUNIOztBQUNELGFBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7K0JBT1dGLEksRUFBMkJDLFcsRUFBcUJDLFcsRUFBcUM7QUFDNUYsVUFBSUYsSUFBSSxDQUFDQyxXQUFELENBQVIsRUFBdUI7QUFDbkIsZUFBTyx1Q0FBb0JELElBQUksQ0FBQ0MsV0FBRCxDQUF4QixFQUF1Q0MsV0FBdkMsQ0FBUDtBQUNIOztBQUNELGFBQU8sRUFBUDtBQUNIOzs7Ozs7ZUFHVUgsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyYW5zZm9ybSwgdHJhbnNmb3JtQ29sbGVjdGlvbiB9IGZyb20gJy4vaGVscGVycy90cmFuc2Zvcm1lcnMnO1xuXG5jbGFzcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gdGhlIGRhdGEgbWFwcGluZyAtIHRoaXMgc2hvdWxkIGJlIG92ZXJyaWRkZW4gYnkgZWFjaCBzcGVjaWZpYyBUcmFuc2Zvcm1lclxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBtYXBEYXRhKGRhdGE6IG9iamVjdCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSBhbiBhdHRyaWJ1dGUgaWYgaW4gaW5jbHVkZXMsIGFuZCB0aGUgZGF0YSBleGlzdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIGluY2x1ZGVOYW1lXG4gICAgICogQHBhcmFtIHRyYW5zZm9ybWVyXG4gICAgICovXG4gICAgaXRlbShkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBpbmNsdWRlTmFtZTogc3RyaW5nLCB0cmFuc2Zvcm1lcjogQmFzZVRyYW5zZm9ybWVyKTogb2JqZWN0IHwgbnVsbCB7XG4gICAgICAgIGlmIChkYXRhW2luY2x1ZGVOYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybShkYXRhW2luY2x1ZGVOYW1lXSwgdHJhbnNmb3JtZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSBhIGNvbGxlY3Rpb24gb2YgYXR0cmlidXRlcyBpZiBpbiBpbmNsdWRlcywgYW5kIHRoZSBkYXRhIGV4aXN0c1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gaW5jbHVkZU5hbWVcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtZXJcbiAgICAgKi9cbiAgICBjb2xsZWN0aW9uKGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4sIGluY2x1ZGVOYW1lOiBzdHJpbmcsIHRyYW5zZm9ybWVyOiBCYXNlVHJhbnNmb3JtZXIpOiBhbnlbXSB7XG4gICAgICAgIGlmIChkYXRhW2luY2x1ZGVOYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUNvbGxlY3Rpb24oZGF0YVtpbmNsdWRlTmFtZV0sIHRyYW5zZm9ybWVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlVHJhbnNmb3JtZXI7XG4iXX0=