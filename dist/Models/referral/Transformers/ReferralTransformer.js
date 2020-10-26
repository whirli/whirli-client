"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Referral = _interopRequireDefault(require("../Referral"));

var _ReferredUsersTransformer = _interopRequireDefault(require("./ReferredUsersTransformer"));

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

var ReferralTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(ReferralTransformer, _BaseTransformer);

  var _super = _createSuper(ReferralTransformer);

  function ReferralTransformer() {
    _classCallCheck(this, ReferralTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmVmZXJyYWwvVHJhbnNmb3JtZXJzL1JlZmVycmFsVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiUmVmZXJyYWxUcmFuc2Zvcm1lciIsInJlZmVycmFsIiwiUmVmZXJyYWwiLCJjb2RlIiwidG90YWxFYXJuZWQiLCJyZWZlcnJlZFVzZXJzIiwiaW5jbHVkZVJlZmVycmVkVXNlcnMiLCJ1c2VyQmFsYW5jZSIsImNvbGxlY3Rpb24iLCJSZWZlcnJlZFVzZXJzVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7Ozs7Ozs7Ozs7OztBQUNqQjs7Ozs7NEJBS1FDLFEsRUFBdUM7QUFDM0MsYUFBTyxJQUFJQyxvQkFBSixDQUFhO0FBQ2hCQyxRQUFBQSxJQUFJLEVBQUVGLFFBQVEsQ0FBQ0UsSUFEQztBQUVoQkMsUUFBQUEsV0FBVyxFQUFFSCxRQUFRLENBQUNHLFdBRk47QUFHaEJDLFFBQUFBLGFBQWEsRUFBRSxLQUFLQyxvQkFBTCxDQUEwQkwsUUFBMUIsQ0FIQztBQUloQk0sUUFBQUEsV0FBVyxFQUFFTixRQUFRLENBQUNNO0FBSk4sT0FBYixDQUFQO0FBTUg7Ozt5Q0FFb0JOLFEsRUFBa0Q7QUFDbkUsYUFBTyxLQUFLTyxVQUFMLENBQWdCUCxRQUFoQixFQUEwQixnQkFBMUIsRUFBNEMsSUFBSVEsb0NBQUosRUFBNUMsQ0FBUDtBQUNIOzs7O0VBakI0Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVmZXJyYWwgZnJvbSAnLi4vUmVmZXJyYWwnO1xuaW1wb3J0IFJlZmVycmFsSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmVmZXJyYWwvUmVmZXJyYWwnO1xuaW1wb3J0IFJlZmVycmVkVXNlciBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JlZmVycmFsL1JlZmVycmVkVXNlcic7XG5pbXBvcnQgUmVmZXJyZWRVc2Vyc1RyYW5zZm9ybWVyIGZyb20gJy4vUmVmZXJyZWRVc2Vyc1RyYW5zZm9ybWVyJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVmZXJyYWxUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIGFjdGl2ZSByZWZlcnJhbCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlZmVycmFsXG4gICAgICovXG4gICAgbWFwRGF0YShyZWZlcnJhbDogUmVmZXJyYWxJbnRlcmZhY2UpOiBSZWZlcnJhbCB7XG4gICAgICAgIHJldHVybiBuZXcgUmVmZXJyYWwoe1xuICAgICAgICAgICAgY29kZTogcmVmZXJyYWwuY29kZSxcbiAgICAgICAgICAgIHRvdGFsRWFybmVkOiByZWZlcnJhbC50b3RhbEVhcm5lZCxcbiAgICAgICAgICAgIHJlZmVycmVkVXNlcnM6IHRoaXMuaW5jbHVkZVJlZmVycmVkVXNlcnMocmVmZXJyYWwpLFxuICAgICAgICAgICAgdXNlckJhbGFuY2U6IHJlZmVycmFsLnVzZXJCYWxhbmNlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmVmZXJyZWRVc2VycyhyZWZlcnJhbDogUmVmZXJyYWxJbnRlcmZhY2UpOiBBcnJheTxSZWZlcnJlZFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihyZWZlcnJhbCwgJ3JlZmVycmVkX3VzZXJzJywgbmV3IFJlZmVycmVkVXNlcnNUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=