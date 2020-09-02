"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _SubscriptionTier = _interopRequireDefault(require("../SubscriptionTier"));

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

var SubscriptionTierTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(SubscriptionTierTransformer, _BaseTransformer);

  function SubscriptionTierTransformer() {
    _classCallCheck(this, SubscriptionTierTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubscriptionTierTransformer).apply(this, arguments));
  }

  _createClass(SubscriptionTierTransformer, [{
    key: "mapData",
    value: function mapData(subscriptionTier) {
      return new _SubscriptionTier["default"]({
        id: subscriptionTier.id,
        subscriptionId: subscriptionTier.subscriptionId,
        order: subscriptionTier.order,
        tokenAmount: subscriptionTier.tokenAmount,
        ageUnit: subscriptionTier.ageUnit,
        age: subscriptionTier.age,
        createdAt: subscriptionTier.createdAt,
        updatedAt: subscriptionTier.updatedAt
      });
    }
  }]);

  return SubscriptionTierTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = SubscriptionTierTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25UaWVyVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiU3Vic2NyaXB0aW9uVGllclRyYW5zZm9ybWVyIiwic3Vic2NyaXB0aW9uVGllciIsIlN1YnNjcmlwdGlvblRpZXIiLCJpZCIsInN1YnNjcmlwdGlvbklkIiwib3JkZXIiLCJ0b2tlbkFtb3VudCIsImFnZVVuaXQiLCJhZ2UiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsMkI7Ozs7Ozs7Ozs7Ozs7NEJBQ1RDLGdCLEVBQStEO0FBQ25FLGFBQU8sSUFBSUMsNEJBQUosQ0FBcUI7QUFDeEJDLFFBQUFBLEVBQUUsRUFBRUYsZ0JBQWdCLENBQUNFLEVBREc7QUFFeEJDLFFBQUFBLGNBQWMsRUFBRUgsZ0JBQWdCLENBQUNHLGNBRlQ7QUFHeEJDLFFBQUFBLEtBQUssRUFBRUosZ0JBQWdCLENBQUNJLEtBSEE7QUFJeEJDLFFBQUFBLFdBQVcsRUFBRUwsZ0JBQWdCLENBQUNLLFdBSk47QUFLeEJDLFFBQUFBLE9BQU8sRUFBRU4sZ0JBQWdCLENBQUNNLE9BTEY7QUFNeEJDLFFBQUFBLEdBQUcsRUFBRVAsZ0JBQWdCLENBQUNPLEdBTkU7QUFPeEJDLFFBQUFBLFNBQVMsRUFBRVIsZ0JBQWdCLENBQUNRLFNBUEo7QUFReEJDLFFBQUFBLFNBQVMsRUFBRVQsZ0JBQWdCLENBQUNTO0FBUkosT0FBckIsQ0FBUDtBQVVIOzs7O0VBWm9EQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBTdWJzY3JpcHRpb25UaWVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvc3Vic2NyaXB0aW9uL1N1YnNjcmlwdGlvblRpZXInO1xuaW1wb3J0IFN1YnNjcmlwdGlvblRpZXIgZnJvbSAnLi4vU3Vic2NyaXB0aW9uVGllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnNjcmlwdGlvblRpZXJUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgbWFwRGF0YShzdWJzY3JpcHRpb25UaWVyOiBTdWJzY3JpcHRpb25UaWVySW50ZXJmYWNlKTogU3Vic2NyaXB0aW9uVGllciB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uVGllcih7XG4gICAgICAgICAgICBpZDogc3Vic2NyaXB0aW9uVGllci5pZCxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbklkOiBzdWJzY3JpcHRpb25UaWVyLnN1YnNjcmlwdGlvbklkLFxuICAgICAgICAgICAgb3JkZXI6IHN1YnNjcmlwdGlvblRpZXIub3JkZXIsXG4gICAgICAgICAgICB0b2tlbkFtb3VudDogc3Vic2NyaXB0aW9uVGllci50b2tlbkFtb3VudCxcbiAgICAgICAgICAgIGFnZVVuaXQ6IHN1YnNjcmlwdGlvblRpZXIuYWdlVW5pdCxcbiAgICAgICAgICAgIGFnZTogc3Vic2NyaXB0aW9uVGllci5hZ2UsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHN1YnNjcmlwdGlvblRpZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBzdWJzY3JpcHRpb25UaWVyLnVwZGF0ZWRBdCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19