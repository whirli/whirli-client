"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _WaitSpot = _interopRequireDefault(require("../WaitSpot"));

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _ProductVariantTransformer = _interopRequireDefault(require("../../product/Transformers/ProductVariantTransformer"));

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
        productVariant: this.includeProductVariant(waitSpot) || undefined
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(waitSpot) {
      return this.item(waitSpot, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeProductVariant",
    value: function includeProductVariant(waitSpot) {
      return this.item(waitSpot, 'productVariant', new _ProductVariantTransformer["default"]());
    }
  }]);

  return WaitSpotTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = WaitSpotTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvd2FpdHNwb3QvVHJhbnNmb3JtZXJzL1dhaXRTcG90VHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiV2FpdFNwb3RUcmFuc2Zvcm1lciIsIndhaXRTcG90IiwiV2FpdFNwb3QiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImNvbXBsZXRlZEF0IiwiZGVsZXRlZEF0Iiwibm90aWZpZWRBdCIsInVzZXIiLCJpbmNsdWRlVXNlciIsInVuZGVmaW5lZCIsInByb2R1Y3RWYXJpYW50IiwiaW5jbHVkZVByb2R1Y3RWYXJpYW50IiwiaXRlbSIsIlVzZXJUcmFuc2Zvcm1lciIsIlByb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7NEJBQ1RDLFEsRUFBdUM7QUFDM0MsYUFBTyxJQUFJQyxvQkFBSixDQUFhO0FBQ2hCQyxRQUFBQSxFQUFFLEVBQUVGLFFBQVEsQ0FBQ0UsRUFERztBQUVoQkMsUUFBQUEsU0FBUyxFQUFFSCxRQUFRLENBQUNHLFNBRko7QUFHaEJDLFFBQUFBLFNBQVMsRUFBRUosUUFBUSxDQUFDSSxTQUhKO0FBSWhCQyxRQUFBQSxXQUFXLEVBQUVMLFFBQVEsQ0FBQ0ssV0FKTjtBQUtoQkMsUUFBQUEsU0FBUyxFQUFFTixRQUFRLENBQUNNLFNBTEo7QUFNaEJDLFFBQUFBLFVBQVUsRUFBRVAsUUFBUSxDQUFDTyxVQU5MO0FBT2hCO0FBQ0FDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCVCxRQUFqQixLQUE4QlUsU0FScEI7QUFTaEJDLFFBQUFBLGNBQWMsRUFBRSxLQUFLQyxxQkFBTCxDQUEyQlosUUFBM0IsS0FBd0NVO0FBVHhDLE9BQWIsQ0FBUDtBQVdIOzs7Z0NBRVdWLFEsRUFBbUQ7QUFDM0QsYUFBTyxLQUFLYSxJQUFMLENBQVViLFFBQVYsRUFBb0IsTUFBcEIsRUFBNEIsSUFBSWMsMkJBQUosRUFBNUIsQ0FBUDtBQUNIOzs7MENBRXFCZCxRLEVBQTZEO0FBQy9FLGFBQU8sS0FBS2EsSUFBTCxDQUFVYixRQUFWLEVBQW9CLGdCQUFwQixFQUFzQyxJQUFJZSxxQ0FBSixFQUF0QyxDQUFQO0FBQ0g7Ozs7RUFyQjRDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBXYWl0U3BvdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3dhaXRzcG90L1dhaXRTcG90JztcbmltcG9ydCBXYWl0U3BvdCBmcm9tICcuLi9XYWl0U3BvdCc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5pbXBvcnQgVXNlclRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgUHJvZHVjdFZhcmlhbnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9wcm9kdWN0L1Byb2R1Y3RWYXJpYW50JztcbmltcG9ydCBQcm9kdWN0VmFyaWFudFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3Byb2R1Y3QvVHJhbnNmb3JtZXJzL1Byb2R1Y3RWYXJpYW50VHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWl0U3BvdFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKHdhaXRTcG90OiBXYWl0U3BvdEludGVyZmFjZSk6IFdhaXRTcG90IHtcbiAgICAgICAgcmV0dXJuIG5ldyBXYWl0U3BvdCh7XG4gICAgICAgICAgICBpZDogd2FpdFNwb3QuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHdhaXRTcG90LmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogd2FpdFNwb3QudXBkYXRlZEF0LFxuICAgICAgICAgICAgY29tcGxldGVkQXQ6IHdhaXRTcG90LmNvbXBsZXRlZEF0LFxuICAgICAgICAgICAgZGVsZXRlZEF0OiB3YWl0U3BvdC5kZWxldGVkQXQsXG4gICAgICAgICAgICBub3RpZmllZEF0OiB3YWl0U3BvdC5ub3RpZmllZEF0LFxuICAgICAgICAgICAgLy8gQmVsb25ncyB0b1xuICAgICAgICAgICAgdXNlcjogdGhpcy5pbmNsdWRlVXNlcih3YWl0U3BvdCkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQ6IHRoaXMuaW5jbHVkZVByb2R1Y3RWYXJpYW50KHdhaXRTcG90KSB8fCB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVVc2VyKHdhaXRTcG90OiBXYWl0U3BvdEludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh3YWl0U3BvdCwgJ3VzZXInLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVQcm9kdWN0VmFyaWFudCh3YWl0U3BvdDogV2FpdFNwb3RJbnRlcmZhY2UpOiBQcm9kdWN0VmFyaWFudEludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHdhaXRTcG90LCAncHJvZHVjdFZhcmlhbnQnLCBuZXcgUHJvZHVjdFZhcmlhbnRUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=