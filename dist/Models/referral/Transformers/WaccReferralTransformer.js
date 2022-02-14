"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _WaccReferral = _interopRequireDefault(require("../WaccReferral"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var WaccReferralTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(WaccReferralTransformer, _BaseTransformer);

  var _super = _createSuper(WaccReferralTransformer);

  function WaccReferralTransformer() {
    _classCallCheck(this, WaccReferralTransformer);

    return _super.apply(this, arguments);
  }

  _createClass(WaccReferralTransformer, [{
    key: "mapData",
    value:
    /**
     * Map an active referral response
     *
     * @param waccReferral
     */
    function mapData(waccReferral) {
      return new _WaccReferral["default"]({
        id: waccReferral.id,
        code: waccReferral.code,
        createdAt: waccReferral.createdAt,
        redemptions: waccReferral.redemptions,
        referredUsers: this.includeReferredUsers(waccReferral),
        user: this.includeUser(waccReferral)
      });
    }
  }, {
    key: "includeReferredUsers",
    value: function includeReferredUsers(waccReferral) {
      return this.collection(waccReferral, 'referred_users', new _UserTransformer["default"]());
    }
  }, {
    key: "includeUser",
    value: function includeUser(waccReferral) {
      return this.item(waccReferral, 'user', new _UserTransformer["default"]());
    }
  }]);

  return WaccReferralTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = WaccReferralTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmVmZXJyYWwvVHJhbnNmb3JtZXJzL1dhY2NSZWZlcnJhbFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIldhY2NSZWZlcnJhbFRyYW5zZm9ybWVyIiwid2FjY1JlZmVycmFsIiwiV2FjY1JlZmVycmFsIiwiaWQiLCJjb2RlIiwiY3JlYXRlZEF0IiwicmVkZW1wdGlvbnMiLCJyZWZlcnJlZFVzZXJzIiwiaW5jbHVkZVJlZmVycmVkVXNlcnMiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJjb2xsZWN0aW9uIiwiVXNlcnNUcmFuc2Zvcm1lciIsIml0ZW0iLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLHVCOzs7Ozs7Ozs7Ozs7OztBQUNqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0kscUJBQVFDLFlBQVIsRUFBMkQ7QUFDdkQsYUFBTyxJQUFJQyx3QkFBSixDQUFpQjtBQUNwQkMsUUFBQUEsRUFBRSxFQUFFRixZQUFZLENBQUNFLEVBREc7QUFFcEJDLFFBQUFBLElBQUksRUFBRUgsWUFBWSxDQUFDRyxJQUZDO0FBR3BCQyxRQUFBQSxTQUFTLEVBQUVKLFlBQVksQ0FBQ0ksU0FISjtBQUlwQkMsUUFBQUEsV0FBVyxFQUFFTCxZQUFZLENBQUNLLFdBSk47QUFLcEJDLFFBQUFBLGFBQWEsRUFBRSxLQUFLQyxvQkFBTCxDQUEwQlAsWUFBMUIsQ0FMSztBQU1wQlEsUUFBQUEsSUFBSSxFQUFFLEtBQUtDLFdBQUwsQ0FBaUJULFlBQWpCO0FBTmMsT0FBakIsQ0FBUDtBQVFIOzs7V0FFRCw4QkFBcUJBLFlBQXJCLEVBQWdGO0FBQzVFLGFBQU8sS0FBS1UsVUFBTCxDQUFnQlYsWUFBaEIsRUFBOEIsZ0JBQTlCLEVBQWdELElBQUlXLDJCQUFKLEVBQWhELENBQVA7QUFDSDs7O1dBRUQscUJBQVlYLFlBQVosRUFBdUU7QUFDbkUsYUFBTyxLQUFLWSxJQUFMLENBQVVaLFlBQVYsRUFBd0IsTUFBeEIsRUFBZ0MsSUFBSVcsMkJBQUosRUFBaEMsQ0FBUDtBQUNIOzs7O0VBdkJnREUsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2FjY1JlZmVycmFsSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmVmZXJyYWwvV2FjY1JlZmVycmFsJztcbmltcG9ydCBVc2Vyc1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgV2FjY1JlZmVycmFsIGZyb20gJy4uL1dhY2NSZWZlcnJhbCc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhY2NSZWZlcnJhbFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gYWN0aXZlIHJlZmVycmFsIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2FjY1JlZmVycmFsXG4gICAgICovXG4gICAgbWFwRGF0YSh3YWNjUmVmZXJyYWw6IFdhY2NSZWZlcnJhbEludGVyZmFjZSk6IFdhY2NSZWZlcnJhbCB7XG4gICAgICAgIHJldHVybiBuZXcgV2FjY1JlZmVycmFsKHtcbiAgICAgICAgICAgIGlkOiB3YWNjUmVmZXJyYWwuaWQsXG4gICAgICAgICAgICBjb2RlOiB3YWNjUmVmZXJyYWwuY29kZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogd2FjY1JlZmVycmFsLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHJlZGVtcHRpb25zOiB3YWNjUmVmZXJyYWwucmVkZW1wdGlvbnMsXG4gICAgICAgICAgICByZWZlcnJlZFVzZXJzOiB0aGlzLmluY2x1ZGVSZWZlcnJlZFVzZXJzKHdhY2NSZWZlcnJhbCksXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKHdhY2NSZWZlcnJhbCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZWZlcnJlZFVzZXJzKHdhY2NSZWZlcnJhbDogV2FjY1JlZmVycmFsSW50ZXJmYWNlKTogQXJyYXk8VXNlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHdhY2NSZWZlcnJhbCwgJ3JlZmVycmVkX3VzZXJzJywgbmV3IFVzZXJzVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIod2FjY1JlZmVycmFsOiBXYWNjUmVmZXJyYWxJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0od2FjY1JlZmVycmFsLCAndXNlcicsIG5ldyBVc2Vyc1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==