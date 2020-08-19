"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("../User"));

var _OrderTransformer = _interopRequireDefault(require("../../order/Transformers/OrderTransformer"));

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

var UserTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(UserTransformer, _BaseTransformer);

  function UserTransformer() {
    _classCallCheck(this, UserTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserTransformer).apply(this, arguments));
  }

  _createClass(UserTransformer, [{
    key: "mapData",

    /**
     * Map an user response
     *
     * @param user
     */
    value: function mapData(user) {
      return new _User["default"]({
        id: user.id,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        emailVerifiedAt: user.emailVerifiedAt,
        statusId: user.statusId,
        registrationStatusId: user.registrationStatusId,
        stripeId: user.stripeId,
        residualChargesOptIn: user.residualChargesOptIn,
        subscriptionCancellationTerms: user.subscriptionCancellationTerms,
        subscriptionCancellationCharges: user.subscriptionCancellationCharges,
        verifiedAt: user.verifiedAt,
        resourceType: user.resourceType,
        // has many
        orders: this.includeOrders(user)
      });
    }
  }, {
    key: "includeOrders",
    value: function includeOrders(user) {
      return this.collection(user, 'orders', new _OrderTransformer["default"]());
    }
  }]);

  return UserTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = UserTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUcmFuc2Zvcm1lciIsInVzZXIiLCJVc2VyIiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwiZW1haWxWZXJpZmllZEF0Iiwic3RhdHVzSWQiLCJyZWdpc3RyYXRpb25TdGF0dXNJZCIsInN0cmlwZUlkIiwicmVzaWR1YWxDaGFyZ2VzT3B0SW4iLCJzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25UZXJtcyIsInN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMiLCJ2ZXJpZmllZEF0IiwicmVzb3VyY2VUeXBlIiwib3JkZXJzIiwiaW5jbHVkZU9yZGVycyIsImNvbGxlY3Rpb24iLCJPcmRlclRyYW5zZm9ybWVyIiwiQmFzZVRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsSSxFQUEyQjtBQUMvQixhQUFPLElBQUlDLGdCQUFKLENBQVM7QUFDWkMsUUFBQUEsRUFBRSxFQUFFRixJQUFJLENBQUNFLEVBREc7QUFFWkMsUUFBQUEsU0FBUyxFQUFFSCxJQUFJLENBQUNHLFNBRko7QUFHWkMsUUFBQUEsU0FBUyxFQUFFSixJQUFJLENBQUNJLFNBSEo7QUFJWkMsUUFBQUEsU0FBUyxFQUFFTCxJQUFJLENBQUNLLFNBSko7QUFLWkMsUUFBQUEsUUFBUSxFQUFFTixJQUFJLENBQUNNLFFBTEg7QUFNWkMsUUFBQUEsS0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBTkE7QUFPWkMsUUFBQUEsZUFBZSxFQUFFUixJQUFJLENBQUNRLGVBUFY7QUFRWkMsUUFBQUEsUUFBUSxFQUFFVCxJQUFJLENBQUNTLFFBUkg7QUFTWkMsUUFBQUEsb0JBQW9CLEVBQUVWLElBQUksQ0FBQ1Usb0JBVGY7QUFVWkMsUUFBQUEsUUFBUSxFQUFFWCxJQUFJLENBQUNXLFFBVkg7QUFXWkMsUUFBQUEsb0JBQW9CLEVBQUVaLElBQUksQ0FBQ1ksb0JBWGY7QUFZWkMsUUFBQUEsNkJBQTZCLEVBQUViLElBQUksQ0FBQ2EsNkJBWnhCO0FBYVpDLFFBQUFBLCtCQUErQixFQUFFZCxJQUFJLENBQUNjLCtCQWIxQjtBQWNaQyxRQUFBQSxVQUFVLEVBQUVmLElBQUksQ0FBQ2UsVUFkTDtBQWVaQyxRQUFBQSxZQUFZLEVBQUVoQixJQUFJLENBQUNnQixZQWZQO0FBZ0JaO0FBQ0FDLFFBQUFBLE1BQU0sRUFBRSxLQUFLQyxhQUFMLENBQW1CbEIsSUFBbkI7QUFqQkksT0FBVCxDQUFQO0FBbUJIOzs7a0NBRWFBLEksRUFBdUM7QUFDakQsYUFBTyxLQUFLbUIsVUFBTCxDQUFnQm5CLElBQWhCLEVBQXNCLFFBQXRCLEVBQWdDLElBQUlvQiw0QkFBSixFQUFoQyxDQUFQO0FBQ0g7Ozs7RUE5QndDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uL1VzZXInO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy91c2VyL1VzZXInO1xuaW1wb3J0IE9yZGVySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvT3JkZXInO1xuaW1wb3J0IE9yZGVyVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vb3JkZXIvVHJhbnNmb3JtZXJzL09yZGVyVHJhbnNmb3JtZXInO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiB1c2VyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlclxuICAgICAqL1xuICAgIG1hcERhdGEodXNlcjogVXNlckludGVyZmFjZSk6IFVzZXIge1xuICAgICAgICByZXR1cm4gbmV3IFVzZXIoe1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHVzZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB1c2VyLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogdXNlci5maXJzdG5hbWUsXG4gICAgICAgICAgICBsYXN0bmFtZTogdXNlci5sYXN0bmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgZW1haWxWZXJpZmllZEF0OiB1c2VyLmVtYWlsVmVyaWZpZWRBdCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiB1c2VyLnN0YXR1c0lkLFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzSWQ6IHVzZXIucmVnaXN0cmF0aW9uU3RhdHVzSWQsXG4gICAgICAgICAgICBzdHJpcGVJZDogdXNlci5zdHJpcGVJZCxcbiAgICAgICAgICAgIHJlc2lkdWFsQ2hhcmdlc09wdEluOiB1c2VyLnJlc2lkdWFsQ2hhcmdlc09wdEluLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uVGVybXM6IHVzZXIuc3Vic2NyaXB0aW9uQ2FuY2VsbGF0aW9uVGVybXMsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25DYW5jZWxsYXRpb25DaGFyZ2VzOiB1c2VyLnN1YnNjcmlwdGlvbkNhbmNlbGxhdGlvbkNoYXJnZXMsXG4gICAgICAgICAgICB2ZXJpZmllZEF0OiB1c2VyLnZlcmlmaWVkQXQsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IHVzZXIucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgLy8gaGFzIG1hbnlcbiAgICAgICAgICAgIG9yZGVyczogdGhpcy5pbmNsdWRlT3JkZXJzKHVzZXIpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlT3JkZXJzKHVzZXI6IFVzZXJJbnRlcmZhY2UpOiBPcmRlckludGVyZmFjZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbih1c2VyLCAnb3JkZXJzJywgbmV3IE9yZGVyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19