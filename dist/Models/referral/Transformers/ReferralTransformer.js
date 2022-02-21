"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Referral = _interopRequireDefault(require("../Referral"));

var _ReferredUsersTransformer = _interopRequireDefault(require("./ReferredUsersTransformer"));

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

var ReferralTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ReferralTransformer, _BaseTransformer);

  function ReferralTransformer() {
    _classCallCheck(this, ReferralTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReferralTransformer).apply(this, arguments));
  }

  _createClass(ReferralTransformer, [{
    key: "mapData",

    /**
     * Map an active referral response
     *
     * @param referral
     */
    value: function mapData(referral) {
      return new _Referral["default"]({
        code: referral.code,
        totalEarned: referral.totalEarned,
        referredUsers: this.includeReferredUsers(referral),
        userBalance: referral.userBalance
      });
    }
  }, {
    key: "includeReferredUsers",
    value: function includeReferredUsers(referral) {
      return this.collection(referral, 'referred_users', new _ReferredUsersTransformer["default"]());
    }
  }]);

  return ReferralTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ReferralTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmVmZXJyYWwvVHJhbnNmb3JtZXJzL1JlZmVycmFsVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUmVmZXJyYWxUcmFuc2Zvcm1lciIsInJlZmVycmFsIiwiUmVmZXJyYWwiLCJjb2RlIiwidG90YWxFYXJuZWQiLCJyZWZlcnJlZFVzZXJzIiwiaW5jbHVkZVJlZmVycmVkVXNlcnMiLCJ1c2VyQmFsYW5jZSIsImNvbGxlY3Rpb24iLCJSZWZlcnJlZFVzZXJzVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsUSxFQUF1QztBQUMzQyxhQUFPLElBQUlDLG9CQUFKLENBQWE7QUFDaEJDLFFBQUFBLElBQUksRUFBRUYsUUFBUSxDQUFDRSxJQURDO0FBRWhCQyxRQUFBQSxXQUFXLEVBQUVILFFBQVEsQ0FBQ0csV0FGTjtBQUdoQkMsUUFBQUEsYUFBYSxFQUFFLEtBQUtDLG9CQUFMLENBQTBCTCxRQUExQixDQUhDO0FBSWhCTSxRQUFBQSxXQUFXLEVBQUVOLFFBQVEsQ0FBQ007QUFKTixPQUFiLENBQVA7QUFNSDs7O3lDQUVvQk4sUSxFQUFrRDtBQUNuRSxhQUFPLEtBQUtPLFVBQUwsQ0FBZ0JQLFFBQWhCLEVBQTBCLGdCQUExQixFQUE0QyxJQUFJUSxvQ0FBSixFQUE1QyxDQUFQO0FBQ0g7Ozs7RUFqQjRDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWZlcnJhbCBmcm9tICcuLi9SZWZlcnJhbCc7XG5pbXBvcnQgUmVmZXJyYWxJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9yZWZlcnJhbC9SZWZlcnJhbCc7XG5pbXBvcnQgUmVmZXJyZWRVc2VyIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmVmZXJyYWwvUmVmZXJyZWRVc2VyJztcbmltcG9ydCBSZWZlcnJlZFVzZXJzVHJhbnNmb3JtZXIgZnJvbSAnLi9SZWZlcnJlZFVzZXJzVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcnJhbFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gYWN0aXZlIHJlZmVycmFsIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVmZXJyYWxcbiAgICAgKi9cbiAgICBtYXBEYXRhKHJlZmVycmFsOiBSZWZlcnJhbEludGVyZmFjZSk6IFJlZmVycmFsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWZlcnJhbCh7XG4gICAgICAgICAgICBjb2RlOiByZWZlcnJhbC5jb2RlLFxuICAgICAgICAgICAgdG90YWxFYXJuZWQ6IHJlZmVycmFsLnRvdGFsRWFybmVkLFxuICAgICAgICAgICAgcmVmZXJyZWRVc2VyczogdGhpcy5pbmNsdWRlUmVmZXJyZWRVc2VycyhyZWZlcnJhbCksXG4gICAgICAgICAgICB1c2VyQmFsYW5jZTogcmVmZXJyYWwudXNlckJhbGFuY2UsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZWZlcnJlZFVzZXJzKHJlZmVycmFsOiBSZWZlcnJhbEludGVyZmFjZSk6IEFycmF5PFJlZmVycmVkVXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHJlZmVycmFsLCAncmVmZXJyZWRfdXNlcnMnLCBuZXcgUmVmZXJyZWRVc2Vyc1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==