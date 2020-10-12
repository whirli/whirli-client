"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _transformers = require("./helpers/transformers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseTransformer = /*#__PURE__*/function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQmFzZVRyYW5zZm9ybWVyIiwiZGF0YSIsImluY2x1ZGVOYW1lIiwidHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsZTs7Ozs7Ozs7QUFDRjs7Ozs7NEJBS1FDLEksRUFBc0I7QUFDMUIsYUFBT0EsSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7eUJBT0tBLEksRUFBMkJDLFcsRUFBcUJDLFcsRUFBNkM7QUFDOUYsVUFBSUYsSUFBSSxDQUFDQyxXQUFELENBQVIsRUFBdUI7QUFDbkIsZUFBTyw2QkFBVUQsSUFBSSxDQUFDQyxXQUFELENBQWQsRUFBNkJDLFdBQTdCLENBQVA7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7OytCQU9XRixJLEVBQTJCQyxXLEVBQXFCQyxXLEVBQXFDO0FBQzVGLFVBQUlGLElBQUksQ0FBQ0MsV0FBRCxDQUFSLEVBQXVCO0FBQ25CLGVBQU8sdUNBQW9CRCxJQUFJLENBQUNDLFdBQUQsQ0FBeEIsRUFBdUNDLFdBQXZDLENBQVA7QUFDSDs7QUFDRCxhQUFPLEVBQVA7QUFDSDs7Ozs7O2VBR1VILGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFuc2Zvcm0sIHRyYW5zZm9ybUNvbGxlY3Rpb24gfSBmcm9tICcuL2hlbHBlcnMvdHJhbnNmb3JtZXJzJztcblxuY2xhc3MgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIHRoZSBkYXRhIG1hcHBpbmcgLSB0aGlzIHNob3VsZCBiZSBvdmVycmlkZGVuIGJ5IGVhY2ggc3BlY2lmaWMgVHJhbnNmb3JtZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgbWFwRGF0YShkYXRhOiBvYmplY3QpOiBvYmplY3Qge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gYW4gYXR0cmlidXRlIGlmIGluIGluY2x1ZGVzLCBhbmQgdGhlIGRhdGEgZXhpc3RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBpbmNsdWRlTmFtZVxuICAgICAqIEBwYXJhbSB0cmFuc2Zvcm1lclxuICAgICAqL1xuICAgIGl0ZW0oZGF0YTogUmVjb3JkPHN0cmluZywgYW55PiwgaW5jbHVkZU5hbWU6IHN0cmluZywgdHJhbnNmb3JtZXI6IEJhc2VUcmFuc2Zvcm1lcik6IG9iamVjdCB8IG51bGwge1xuICAgICAgICBpZiAoZGF0YVtpbmNsdWRlTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm0oZGF0YVtpbmNsdWRlTmFtZV0sIHRyYW5zZm9ybWVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gYSBjb2xsZWN0aW9uIG9mIGF0dHJpYnV0ZXMgaWYgaW4gaW5jbHVkZXMsIGFuZCB0aGUgZGF0YSBleGlzdHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIGluY2x1ZGVOYW1lXG4gICAgICogQHBhcmFtIHRyYW5zZm9ybWVyXG4gICAgICovXG4gICAgY29sbGVjdGlvbihkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBpbmNsdWRlTmFtZTogc3RyaW5nLCB0cmFuc2Zvcm1lcjogQmFzZVRyYW5zZm9ybWVyKTogYW55W10ge1xuICAgICAgICBpZiAoZGF0YVtpbmNsdWRlTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1Db2xsZWN0aW9uKGRhdGFbaW5jbHVkZU5hbWVdLCB0cmFuc2Zvcm1lcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVRyYW5zZm9ybWVyO1xuIl19