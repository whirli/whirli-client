"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _WaitSpot = _interopRequireDefault(require("../WaitSpot"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _ProductTransformer = _interopRequireDefault(require("../../product/Transformers/ProductTransformer"));

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

var WaitSpotTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(WaitSpotTransformer, _BaseTransformer);

  function WaitSpotTransformer() {
    _classCallCheck(this, WaitSpotTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(WaitSpotTransformer).apply(this, arguments));
  }

  _createClass(WaitSpotTransformer, [{
    key: "mapData",
    value: function mapData(waitSpot) {
      return new _WaitSpot["default"]({
        id: waitSpot.id,
        createdAt: waitSpot.createdAt,
        updatedAt: waitSpot.updatedAt,
        completedAt: waitSpot.completedAt,
        deletedAt: waitSpot.deletedAt,
        notifiedAt: waitSpot.notifiedAt,
        // Belongs to
        user: this.includeUser(waitSpot) || undefined,
        product: this.includeProduct(waitSpot) || undefined
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(waitSpot) {
      return this.item(waitSpot, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeProduct",
    value: function includeProduct(waitSpot) {
      return this.item(waitSpot, 'product', new _ProductTransformer["default"]());
    }
  }]);

  return WaitSpotTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = WaitSpotTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvd2FpdHNwb3QvVHJhbnNmb3JtZXJzL1dhaXRTcG90VHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiV2FpdFNwb3RUcmFuc2Zvcm1lciIsIndhaXRTcG90IiwiV2FpdFNwb3QiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImNvbXBsZXRlZEF0IiwiZGVsZXRlZEF0Iiwibm90aWZpZWRBdCIsInVzZXIiLCJpbmNsdWRlVXNlciIsInVuZGVmaW5lZCIsInByb2R1Y3QiLCJpbmNsdWRlUHJvZHVjdCIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJQcm9kdWN0VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7NEJBQ1RDLFEsRUFBdUM7QUFDM0MsYUFBTyxJQUFJQyxvQkFBSixDQUFhO0FBQ2hCQyxRQUFBQSxFQUFFLEVBQUVGLFFBQVEsQ0FBQ0UsRUFERztBQUVoQkMsUUFBQUEsU0FBUyxFQUFFSCxRQUFRLENBQUNHLFNBRko7QUFHaEJDLFFBQUFBLFNBQVMsRUFBRUosUUFBUSxDQUFDSSxTQUhKO0FBSWhCQyxRQUFBQSxXQUFXLEVBQUVMLFFBQVEsQ0FBQ0ssV0FKTjtBQUtoQkMsUUFBQUEsU0FBUyxFQUFFTixRQUFRLENBQUNNLFNBTEo7QUFNaEJDLFFBQUFBLFVBQVUsRUFBRVAsUUFBUSxDQUFDTyxVQU5MO0FBT2hCO0FBQ0FDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCVCxRQUFqQixLQUE4QlUsU0FScEI7QUFTaEJDLFFBQUFBLE9BQU8sRUFBRSxLQUFLQyxjQUFMLENBQW9CWixRQUFwQixLQUFpQ1U7QUFUMUIsT0FBYixDQUFQO0FBV0g7OztnQ0FFV1YsUSxFQUFtRDtBQUMzRCxhQUFPLEtBQUthLElBQUwsQ0FBVWIsUUFBVixFQUFvQixNQUFwQixFQUE0QixJQUFJYywyQkFBSixFQUE1QixDQUFQO0FBQ0g7OzttQ0FFY2QsUSxFQUFzRDtBQUNqRSxhQUFPLEtBQUthLElBQUwsQ0FBVWIsUUFBVixFQUFvQixTQUFwQixFQUErQixJQUFJZSw4QkFBSixFQUEvQixDQUFQO0FBQ0g7Ozs7RUFyQjRDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBXYWl0U3BvdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3dhaXRzcG90L1dhaXRTcG90JztcbmltcG9ydCBXYWl0U3BvdCBmcm9tICcuLi9XYWl0U3BvdCc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3Byb2R1Y3QvUHJvZHVjdCc7XG5pbXBvcnQgUHJvZHVjdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhaXRTcG90VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEod2FpdFNwb3Q6IFdhaXRTcG90SW50ZXJmYWNlKTogV2FpdFNwb3Qge1xuICAgICAgICByZXR1cm4gbmV3IFdhaXRTcG90KHtcbiAgICAgICAgICAgIGlkOiB3YWl0U3BvdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogd2FpdFNwb3QuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB3YWl0U3BvdC51cGRhdGVkQXQsXG4gICAgICAgICAgICBjb21wbGV0ZWRBdDogd2FpdFNwb3QuY29tcGxldGVkQXQsXG4gICAgICAgICAgICBkZWxldGVkQXQ6IHdhaXRTcG90LmRlbGV0ZWRBdCxcbiAgICAgICAgICAgIG5vdGlmaWVkQXQ6IHdhaXRTcG90Lm5vdGlmaWVkQXQsXG4gICAgICAgICAgICAvLyBCZWxvbmdzIHRvXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKHdhaXRTcG90KSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBwcm9kdWN0OiB0aGlzLmluY2x1ZGVQcm9kdWN0KHdhaXRTcG90KSB8fCB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyKHdhaXRTcG90OiBXYWl0U3BvdEludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh3YWl0U3BvdCwgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0KHdhaXRTcG90OiBXYWl0U3BvdEludGVyZmFjZSk6IFByb2R1Y3RJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh3YWl0U3BvdCwgJ3Byb2R1Y3QnLCBuZXcgUHJvZHVjdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==