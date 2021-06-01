"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UserTransformer = _interopRequireDefault(require("../../user/Transformers/UserTransformer"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _WaccReferral = _interopRequireDefault(require("../WaccReferral"));

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

var WaccReferralTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(WaccReferralTransformer, _BaseTransformer);

  function WaccReferralTransformer() {
    _classCallCheck(this, WaccReferralTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(WaccReferralTransformer).apply(this, arguments));
  }

  _createClass(WaccReferralTransformer, [{
    key: "mapData",

    /**
     * Map an active referral response
     *
     * @param waccReferral
     */
    value: function mapData(waccReferral) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmVmZXJyYWwvVHJhbnNmb3JtZXJzL1dhY2NSZWZlcnJhbFRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIldhY2NSZWZlcnJhbFRyYW5zZm9ybWVyIiwid2FjY1JlZmVycmFsIiwiV2FjY1JlZmVycmFsIiwiaWQiLCJjb2RlIiwiY3JlYXRlZEF0IiwicmVkZW1wdGlvbnMiLCJyZWZlcnJlZFVzZXJzIiwiaW5jbHVkZVJlZmVycmVkVXNlcnMiLCJ1c2VyIiwiaW5jbHVkZVVzZXIiLCJjb2xsZWN0aW9uIiwiVXNlcnNUcmFuc2Zvcm1lciIsIml0ZW0iLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsdUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsWSxFQUFtRDtBQUN2RCxhQUFPLElBQUlDLHdCQUFKLENBQWlCO0FBQ3BCQyxRQUFBQSxFQUFFLEVBQUVGLFlBQVksQ0FBQ0UsRUFERztBQUVwQkMsUUFBQUEsSUFBSSxFQUFFSCxZQUFZLENBQUNHLElBRkM7QUFHcEJDLFFBQUFBLFNBQVMsRUFBRUosWUFBWSxDQUFDSSxTQUhKO0FBSXBCQyxRQUFBQSxXQUFXLEVBQUVMLFlBQVksQ0FBQ0ssV0FKTjtBQUtwQkMsUUFBQUEsYUFBYSxFQUFFLEtBQUtDLG9CQUFMLENBQTBCUCxZQUExQixDQUxLO0FBTXBCUSxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQlQsWUFBakI7QUFOYyxPQUFqQixDQUFQO0FBUUg7Ozt5Q0FFb0JBLFksRUFBMkQ7QUFDNUUsYUFBTyxLQUFLVSxVQUFMLENBQWdCVixZQUFoQixFQUE4QixnQkFBOUIsRUFBZ0QsSUFBSVcsMkJBQUosRUFBaEQsQ0FBUDtBQUNIOzs7Z0NBRVdYLFksRUFBMkQ7QUFDbkUsYUFBTyxLQUFLWSxJQUFMLENBQVVaLFlBQVYsRUFBd0IsTUFBeEIsRUFBZ0MsSUFBSVcsMkJBQUosRUFBaEMsQ0FBUDtBQUNIOzs7O0VBdkJnREUsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2FjY1JlZmVycmFsSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvcmVmZXJyYWwvV2FjY1JlZmVycmFsJztcbmltcG9ydCBVc2Vyc1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL3VzZXIvVHJhbnNmb3JtZXJzL1VzZXJUcmFuc2Zvcm1lcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgV2FjY1JlZmVycmFsIGZyb20gJy4uL1dhY2NSZWZlcnJhbCc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhY2NSZWZlcnJhbFRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gYWN0aXZlIHJlZmVycmFsIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2FjY1JlZmVycmFsXG4gICAgICovXG4gICAgbWFwRGF0YSh3YWNjUmVmZXJyYWw6IFdhY2NSZWZlcnJhbEludGVyZmFjZSk6IFdhY2NSZWZlcnJhbCB7XG4gICAgICAgIHJldHVybiBuZXcgV2FjY1JlZmVycmFsKHtcbiAgICAgICAgICAgIGlkOiB3YWNjUmVmZXJyYWwuaWQsXG4gICAgICAgICAgICBjb2RlOiB3YWNjUmVmZXJyYWwuY29kZSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogd2FjY1JlZmVycmFsLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHJlZGVtcHRpb25zOiB3YWNjUmVmZXJyYWwucmVkZW1wdGlvbnMsXG4gICAgICAgICAgICByZWZlcnJlZFVzZXJzOiB0aGlzLmluY2x1ZGVSZWZlcnJlZFVzZXJzKHdhY2NSZWZlcnJhbCksXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKHdhY2NSZWZlcnJhbCksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZWZlcnJlZFVzZXJzKHdhY2NSZWZlcnJhbDogV2FjY1JlZmVycmFsSW50ZXJmYWNlKTogQXJyYXk8VXNlckludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uKHdhY2NSZWZlcnJhbCwgJ3JlZmVycmVkX3VzZXJzJywgbmV3IFVzZXJzVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIod2FjY1JlZmVycmFsOiBXYWNjUmVmZXJyYWxJbnRlcmZhY2UpOiBVc2VySW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0od2FjY1JlZmVycmFsLCAndXNlcicsIG5ldyBVc2Vyc1RyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==