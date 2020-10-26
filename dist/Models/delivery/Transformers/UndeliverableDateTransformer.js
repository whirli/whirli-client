"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UndeliverableDate = _interopRequireDefault(require("../UndeliverableDate"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var UndeliverableDateTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(UndeliverableDateTransformer, _BaseTransformer);

  var _super = _createSuper(UndeliverableDateTransformer);

  function UndeliverableDateTransformer() {
    _classCallCheck(this, UndeliverableDateTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvZGVsaXZlcnkvVHJhbnNmb3JtZXJzL1VuZGVsaXZlcmFibGVEYXRlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiVW5kZWxpdmVyYWJsZURhdGVUcmFuc2Zvcm1lciIsInVuZGVsaXZlcmFibGVEYXRlIiwiVW5kZWxpdmVyYWJsZURhdGUiLCJkYXRlIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw0Qjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxpQixFQUFrRTtBQUN0RSxhQUFPLElBQUlDLDZCQUFKLENBQXNCO0FBQ3pCQyxRQUFBQSxJQUFJLEVBQUVGLGlCQUFpQixDQUFDRTtBQURDLE9BQXRCLENBQVA7QUFHSDs7OztFQVZxREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVW5kZWxpdmVyYWJsZURhdGUgZnJvbSAnLi4vVW5kZWxpdmVyYWJsZURhdGUnO1xuaW1wb3J0IFVuZGVsaXZlcmFibGVEYXRlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvZGVsaXZlcnkvVW5kZWxpdmVyYWJsZURhdGUnO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmRlbGl2ZXJhYmxlRGF0ZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gc2hpcHBpbmcgYWRkb24gcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzaGlwcGluZ0FkZG9uXG4gICAgICovXG4gICAgbWFwRGF0YSh1bmRlbGl2ZXJhYmxlRGF0ZTogVW5kZWxpdmVyYWJsZURhdGVJbnRlcmZhY2UpOiBVbmRlbGl2ZXJhYmxlRGF0ZSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5kZWxpdmVyYWJsZURhdGUoe1xuICAgICAgICAgICAgZGF0ZTogdW5kZWxpdmVyYWJsZURhdGUuZGF0ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19