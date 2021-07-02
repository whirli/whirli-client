"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AttributionSource = _interopRequireDefault(require("../AttributionSource"));

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

var AttributionSourceTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(AttributionSourceTransformer, _BaseTransformer);

  function AttributionSourceTransformer() {
    _classCallCheck(this, AttributionSourceTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(AttributionSourceTransformer).apply(this, arguments));
  }

  _createClass(AttributionSourceTransformer, [{
    key: "mapData",
    value: function mapData(attributionSource) {
      return new _AttributionSource["default"]({
        id: attributionSource.id,
        createdAt: attributionSource.createdAt,
        updatedAt: attributionSource.updatedAt,
        discountCode: attributionSource.discountCode,
        utmSource: attributionSource.utmSource,
        utmMedium: attributionSource.utmMedium,
        utmCampaign: attributionSource.utmCampaign,
        utmContent: attributionSource.utmContent,
        gclid: attributionSource.gclid,
        tduid: attributionSource.tduid,
        referrer: attributionSource.referrer,
        sourceableId: attributionSource.sourceableId,
        sourceableType: attributionSource.sourceableType
      });
    }
  }]);

  return AttributionSourceTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = AttributionSourceTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXR0cmlidXRpb25Tb3VyY2UvVHJhbnNmb3JtZXJzL0F0dHJpYnV0aW9uU291cmNlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXR0cmlidXRpb25Tb3VyY2VUcmFuc2Zvcm1lciIsImF0dHJpYnV0aW9uU291cmNlIiwiQXR0cmlidXRpb25Tb3VyY2UiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImRpc2NvdW50Q29kZSIsInV0bVNvdXJjZSIsInV0bU1lZGl1bSIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsImdjbGlkIiwidGR1aWQiLCJyZWZlcnJlciIsInNvdXJjZWFibGVJZCIsInNvdXJjZWFibGVUeXBlIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLDRCOzs7Ozs7Ozs7Ozs7OzRCQUNUQyxpQixFQUFrRTtBQUN0RSxhQUFPLElBQUlDLDZCQUFKLENBQXNCO0FBQ3pCQyxRQUFBQSxFQUFFLEVBQUVGLGlCQUFpQixDQUFDRSxFQURHO0FBRXpCQyxRQUFBQSxTQUFTLEVBQUVILGlCQUFpQixDQUFDRyxTQUZKO0FBR3pCQyxRQUFBQSxTQUFTLEVBQUVKLGlCQUFpQixDQUFDSSxTQUhKO0FBSXpCQyxRQUFBQSxZQUFZLEVBQUVMLGlCQUFpQixDQUFDSyxZQUpQO0FBS3pCQyxRQUFBQSxTQUFTLEVBQUVOLGlCQUFpQixDQUFDTSxTQUxKO0FBTXpCQyxRQUFBQSxTQUFTLEVBQUVQLGlCQUFpQixDQUFDTyxTQU5KO0FBT3pCQyxRQUFBQSxXQUFXLEVBQUVSLGlCQUFpQixDQUFDUSxXQVBOO0FBUXpCQyxRQUFBQSxVQUFVLEVBQUVULGlCQUFpQixDQUFDUyxVQVJMO0FBU3pCQyxRQUFBQSxLQUFLLEVBQUVWLGlCQUFpQixDQUFDVSxLQVRBO0FBVXpCQyxRQUFBQSxLQUFLLEVBQUVYLGlCQUFpQixDQUFDVyxLQVZBO0FBV3pCQyxRQUFBQSxRQUFRLEVBQUVaLGlCQUFpQixDQUFDWSxRQVhIO0FBWXpCQyxRQUFBQSxZQUFZLEVBQUViLGlCQUFpQixDQUFDYSxZQVpQO0FBYXpCQyxRQUFBQSxjQUFjLEVBQUVkLGlCQUFpQixDQUFDYztBQWJULE9BQXRCLENBQVA7QUFlSDs7OztFQWpCcURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF0dHJpYnV0aW9uU291cmNlIGZyb20gJy4uL0F0dHJpYnV0aW9uU291cmNlJztcbmltcG9ydCBBdHRyaWJ1dGlvblNvdXJjZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2F0dHJpYnV0aW9uU291cmNlL0F0dHJpYnV0aW9uU291cmNlJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmlidXRpb25Tb3VyY2VUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgbWFwRGF0YShhdHRyaWJ1dGlvblNvdXJjZTogQXR0cmlidXRpb25Tb3VyY2VJbnRlcmZhY2UpOiBBdHRyaWJ1dGlvblNvdXJjZSB7XG4gICAgICAgIHJldHVybiBuZXcgQXR0cmlidXRpb25Tb3VyY2Uoe1xuICAgICAgICAgICAgaWQ6IGF0dHJpYnV0aW9uU291cmNlLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBhdHRyaWJ1dGlvblNvdXJjZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGF0dHJpYnV0aW9uU291cmNlLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGRpc2NvdW50Q29kZTogYXR0cmlidXRpb25Tb3VyY2UuZGlzY291bnRDb2RlLFxuICAgICAgICAgICAgdXRtU291cmNlOiBhdHRyaWJ1dGlvblNvdXJjZS51dG1Tb3VyY2UsXG4gICAgICAgICAgICB1dG1NZWRpdW06IGF0dHJpYnV0aW9uU291cmNlLnV0bU1lZGl1bSxcbiAgICAgICAgICAgIHV0bUNhbXBhaWduOiBhdHRyaWJ1dGlvblNvdXJjZS51dG1DYW1wYWlnbixcbiAgICAgICAgICAgIHV0bUNvbnRlbnQ6IGF0dHJpYnV0aW9uU291cmNlLnV0bUNvbnRlbnQsXG4gICAgICAgICAgICBnY2xpZDogYXR0cmlidXRpb25Tb3VyY2UuZ2NsaWQsXG4gICAgICAgICAgICB0ZHVpZDogYXR0cmlidXRpb25Tb3VyY2UudGR1aWQsXG4gICAgICAgICAgICByZWZlcnJlcjogYXR0cmlidXRpb25Tb3VyY2UucmVmZXJyZXIsXG4gICAgICAgICAgICBzb3VyY2VhYmxlSWQ6IGF0dHJpYnV0aW9uU291cmNlLnNvdXJjZWFibGVJZCxcbiAgICAgICAgICAgIHNvdXJjZWFibGVUeXBlOiBhdHRyaWJ1dGlvblNvdXJjZS5zb3VyY2VhYmxlVHlwZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19