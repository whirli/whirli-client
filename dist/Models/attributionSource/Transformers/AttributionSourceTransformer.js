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
        sourceableId: attributionSource.sourceableId,
        sourceableType: attributionSource.sourceableType
      });
    }
  }]);

  return AttributionSourceTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = AttributionSourceTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvYXR0cmlidXRpb25Tb3VyY2UvVHJhbnNmb3JtZXJzL0F0dHJpYnV0aW9uU291cmNlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXR0cmlidXRpb25Tb3VyY2VUcmFuc2Zvcm1lciIsImF0dHJpYnV0aW9uU291cmNlIiwiQXR0cmlidXRpb25Tb3VyY2UiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImRpc2NvdW50Q29kZSIsInV0bVNvdXJjZSIsInV0bU1lZGl1bSIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsImdjbGlkIiwidGR1aWQiLCJzb3VyY2VhYmxlSWQiLCJzb3VyY2VhYmxlVHlwZSIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSw0Qjs7Ozs7Ozs7Ozs7Ozs0QkFDVEMsaUIsRUFBa0U7QUFDdEUsYUFBTyxJQUFJQyw2QkFBSixDQUFzQjtBQUN6QkMsUUFBQUEsRUFBRSxFQUFFRixpQkFBaUIsQ0FBQ0UsRUFERztBQUV6QkMsUUFBQUEsU0FBUyxFQUFFSCxpQkFBaUIsQ0FBQ0csU0FGSjtBQUd6QkMsUUFBQUEsU0FBUyxFQUFFSixpQkFBaUIsQ0FBQ0ksU0FISjtBQUl6QkMsUUFBQUEsWUFBWSxFQUFFTCxpQkFBaUIsQ0FBQ0ssWUFKUDtBQUt6QkMsUUFBQUEsU0FBUyxFQUFFTixpQkFBaUIsQ0FBQ00sU0FMSjtBQU16QkMsUUFBQUEsU0FBUyxFQUFFUCxpQkFBaUIsQ0FBQ08sU0FOSjtBQU96QkMsUUFBQUEsV0FBVyxFQUFFUixpQkFBaUIsQ0FBQ1EsV0FQTjtBQVF6QkMsUUFBQUEsVUFBVSxFQUFFVCxpQkFBaUIsQ0FBQ1MsVUFSTDtBQVN6QkMsUUFBQUEsS0FBSyxFQUFFVixpQkFBaUIsQ0FBQ1UsS0FUQTtBQVV6QkMsUUFBQUEsS0FBSyxFQUFFWCxpQkFBaUIsQ0FBQ1csS0FWQTtBQVd6QkMsUUFBQUEsWUFBWSxFQUFFWixpQkFBaUIsQ0FBQ1ksWUFYUDtBQVl6QkMsUUFBQUEsY0FBYyxFQUFFYixpQkFBaUIsQ0FBQ2E7QUFaVCxPQUF0QixDQUFQO0FBY0g7Ozs7RUFoQnFEQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdHRyaWJ1dGlvblNvdXJjZSBmcm9tICcuLi9BdHRyaWJ1dGlvblNvdXJjZSc7XG5pbXBvcnQgQXR0cmlidXRpb25Tb3VyY2VJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9hdHRyaWJ1dGlvblNvdXJjZS9BdHRyaWJ1dGlvblNvdXJjZSc7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJpYnV0aW9uU291cmNlVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEoYXR0cmlidXRpb25Tb3VyY2U6IEF0dHJpYnV0aW9uU291cmNlSW50ZXJmYWNlKTogQXR0cmlidXRpb25Tb3VyY2Uge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0aW9uU291cmNlKHtcbiAgICAgICAgICAgIGlkOiBhdHRyaWJ1dGlvblNvdXJjZS5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYXR0cmlidXRpb25Tb3VyY2UuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBhdHRyaWJ1dGlvblNvdXJjZS51cGRhdGVkQXQsXG4gICAgICAgICAgICBkaXNjb3VudENvZGU6IGF0dHJpYnV0aW9uU291cmNlLmRpc2NvdW50Q29kZSxcbiAgICAgICAgICAgIHV0bVNvdXJjZTogYXR0cmlidXRpb25Tb3VyY2UudXRtU291cmNlLFxuICAgICAgICAgICAgdXRtTWVkaXVtOiBhdHRyaWJ1dGlvblNvdXJjZS51dG1NZWRpdW0sXG4gICAgICAgICAgICB1dG1DYW1wYWlnbjogYXR0cmlidXRpb25Tb3VyY2UudXRtQ2FtcGFpZ24sXG4gICAgICAgICAgICB1dG1Db250ZW50OiBhdHRyaWJ1dGlvblNvdXJjZS51dG1Db250ZW50LFxuICAgICAgICAgICAgZ2NsaWQ6IGF0dHJpYnV0aW9uU291cmNlLmdjbGlkLFxuICAgICAgICAgICAgdGR1aWQ6IGF0dHJpYnV0aW9uU291cmNlLnRkdWlkLFxuICAgICAgICAgICAgc291cmNlYWJsZUlkOiBhdHRyaWJ1dGlvblNvdXJjZS5zb3VyY2VhYmxlSWQsXG4gICAgICAgICAgICBzb3VyY2VhYmxlVHlwZTogYXR0cmlidXRpb25Tb3VyY2Uuc291cmNlYWJsZVR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==