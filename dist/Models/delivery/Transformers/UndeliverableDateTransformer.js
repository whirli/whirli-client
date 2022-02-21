"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UndeliverableDate = _interopRequireDefault(require("../UndeliverableDate"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UndeliverableDateTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(UndeliverableDateTransformer, _BaseTransformer);

  function UndeliverableDateTransformer() {
    _classCallCheck(this, UndeliverableDateTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(UndeliverableDateTransformer).apply(this, arguments));
  }

  _createClass(UndeliverableDateTransformer, [{
    key: "mapData",

    /**
     * Map an shipping addon response
     *
     * @param shippingAddon
     */
    value: function mapData(undeliverableDate) {
      return new _UndeliverableDate["default"]({
        date: undeliverableDate.date
      });
    }
  }]);

  return UndeliverableDateTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = UndeliverableDateTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1VuZGVsaXZlcmFibGVEYXRlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiVW5kZWxpdmVyYWJsZURhdGVUcmFuc2Zvcm1lciIsInVuZGVsaXZlcmFibGVEYXRlIiwiVW5kZWxpdmVyYWJsZURhdGUiLCJkYXRlIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDRCOzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLGlCLEVBQWtFO0FBQ3RFLGFBQU8sSUFBSUMsNkJBQUosQ0FBc0I7QUFDekJDLFFBQUFBLElBQUksRUFBRUYsaUJBQWlCLENBQUNFO0FBREMsT0FBdEIsQ0FBUDtBQUdIOzs7O0VBVnFEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVbmRlbGl2ZXJhYmxlRGF0ZSBmcm9tICcuLi9VbmRlbGl2ZXJhYmxlRGF0ZSc7XG5pbXBvcnQgVW5kZWxpdmVyYWJsZURhdGVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9kZWxpdmVyeS9VbmRlbGl2ZXJhYmxlRGF0ZSc7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuZGVsaXZlcmFibGVEYXRlVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBzaGlwcGluZyBhZGRvbiByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNoaXBwaW5nQWRkb25cbiAgICAgKi9cbiAgICBtYXBEYXRhKHVuZGVsaXZlcmFibGVEYXRlOiBVbmRlbGl2ZXJhYmxlRGF0ZUludGVyZmFjZSk6IFVuZGVsaXZlcmFibGVEYXRlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVbmRlbGl2ZXJhYmxlRGF0ZSh7XG4gICAgICAgICAgICBkYXRlOiB1bmRlbGl2ZXJhYmxlRGF0ZS5kYXRlLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=