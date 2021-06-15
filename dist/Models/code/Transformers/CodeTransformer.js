"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Code = _interopRequireDefault(require("../Code"));

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _TypeTransformer = _interopRequireDefault(require("./TypeTransformer"));

var _InterestTransformer = _interopRequireDefault(require("../../interest/Transformers/InterestTransformer"));

var _GiftTransformer = _interopRequireDefault(require("../../gift/Transformers/GiftTransformer"));

var _SubscriptionDiscountTransformer = _interopRequireDefault(require("../../subscription/Transformers/SubscriptionDiscountTransformer"));

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

var CodeTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(CodeTransformer, _BaseTransformer);

  function CodeTransformer() {
    _classCallCheck(this, CodeTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(CodeTransformer).apply(this, arguments));
  }

  _createClass(CodeTransformer, [{
    key: "mapData",
    value: function mapData(code) {
      return new _Code["default"]({
        name: code.name,
        code: code.code,
        startDate: code.startDate,
        endDate: code.endDate,
        createdAt: code.createdAt,
        updatedAt: code.updatedAt,
        value: code.value,
        valueTypeId: code.valueTypeId,
        // belongs to
        type: this.includeType(code),
        interest: this.includeInterest(code) || undefined,
        gift: this.includeGift(code) || undefined,
        subscriptionDiscount: this.includeSubscriptionDiscount(code) || undefined,
        referredInterests: this.includeReferredInterests(code) || undefined
      });
    }
  }, {
    key: "includeType",
    value: function includeType(code) {
      return this.item(code, 'type', new _TypeTransformer["default"]());
    }
  }, {
    key: "includeInterest",
    value: function includeInterest(code) {
      return this.item(code, 'interest', new _InterestTransformer["default"]());
    }
  }, {
    key: "includeGift",
    value: function includeGift(code) {
      return this.item(code, 'gift', new _GiftTransformer["default"]());
    }
  }, {
    key: "includeSubscriptionDiscount",
    value: function includeSubscriptionDiscount(code) {
      return this.item(code, 'subscriptionDiscount', new _SubscriptionDiscountTransformer["default"]());
    }
  }, {
    key: "includeReferredInterests",
    value: function includeReferredInterests(code) {
      return this.collection(code, 'referredInterests', new _InterestTransformer["default"]());
    }
  }]);

  return CodeTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = CodeTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvY29kZS9UcmFuc2Zvcm1lcnMvQ29kZVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIkNvZGVUcmFuc2Zvcm1lciIsImNvZGUiLCJDb2RlIiwibmFtZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJ2YWx1ZSIsInZhbHVlVHlwZUlkIiwidHlwZSIsImluY2x1ZGVUeXBlIiwiaW50ZXJlc3QiLCJpbmNsdWRlSW50ZXJlc3QiLCJ1bmRlZmluZWQiLCJnaWZ0IiwiaW5jbHVkZUdpZnQiLCJzdWJzY3JpcHRpb25EaXNjb3VudCIsImluY2x1ZGVTdWJzY3JpcHRpb25EaXNjb3VudCIsInJlZmVycmVkSW50ZXJlc3RzIiwiaW5jbHVkZVJlZmVycmVkSW50ZXJlc3RzIiwiaXRlbSIsIlR5cGVUcmFuc2Zvcm1lciIsIkludGVyZXN0VHJhbnNmb3JtZXIiLCJHaWZ0VHJhbnNmb3JtZXIiLCJTdWJzY3JpcHRpb25EaXNjb3VudFRyYW5zZm9ybWVyIiwiY29sbGVjdGlvbiIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUdBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7OzRCQUNUQyxJLEVBQTJCO0FBQy9CLGFBQU8sSUFBSUMsZ0JBQUosQ0FBUztBQUNaQyxRQUFBQSxJQUFJLEVBQUVGLElBQUksQ0FBQ0UsSUFEQztBQUVaRixRQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0EsSUFGQztBQUdaRyxRQUFBQSxTQUFTLEVBQUVILElBQUksQ0FBQ0csU0FISjtBQUlaQyxRQUFBQSxPQUFPLEVBQUVKLElBQUksQ0FBQ0ksT0FKRjtBQUtaQyxRQUFBQSxTQUFTLEVBQUVMLElBQUksQ0FBQ0ssU0FMSjtBQU1aQyxRQUFBQSxTQUFTLEVBQUVOLElBQUksQ0FBQ00sU0FOSjtBQU9aQyxRQUFBQSxLQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FQQTtBQVFaQyxRQUFBQSxXQUFXLEVBQUVSLElBQUksQ0FBQ1EsV0FSTjtBQVNaO0FBQ0FDLFFBQUFBLElBQUksRUFBRSxLQUFLQyxXQUFMLENBQWlCVixJQUFqQixDQVZNO0FBV1pXLFFBQUFBLFFBQVEsRUFBRSxLQUFLQyxlQUFMLENBQXFCWixJQUFyQixLQUE4QmEsU0FYNUI7QUFZWkMsUUFBQUEsSUFBSSxFQUFFLEtBQUtDLFdBQUwsQ0FBaUJmLElBQWpCLEtBQTBCYSxTQVpwQjtBQWFaRyxRQUFBQSxvQkFBb0IsRUFBRSxLQUFLQywyQkFBTCxDQUFpQ2pCLElBQWpDLEtBQTBDYSxTQWJwRDtBQWNaSyxRQUFBQSxpQkFBaUIsRUFBRSxLQUFLQyx3QkFBTCxDQUE4Qm5CLElBQTlCLEtBQXVDYTtBQWQ5QyxPQUFULENBQVA7QUFnQkg7OztnQ0FFV2IsSSxFQUFrQztBQUMxQyxhQUFPLEtBQUtvQixJQUFMLENBQVVwQixJQUFWLEVBQWdCLE1BQWhCLEVBQXdCLElBQUlxQiwyQkFBSixFQUF4QixDQUFQO0FBQ0g7OztvQ0FFZXJCLEksRUFBb0Q7QUFDaEUsYUFBTyxLQUFLb0IsSUFBTCxDQUFVcEIsSUFBVixFQUFnQixVQUFoQixFQUE0QixJQUFJc0IsK0JBQUosRUFBNUIsQ0FBUDtBQUNIOzs7Z0NBRVd0QixJLEVBQTJDO0FBQ25ELGFBQU8sS0FBS29CLElBQUwsQ0FBVXBCLElBQVYsRUFBZ0IsTUFBaEIsRUFBd0IsSUFBSXVCLDJCQUFKLEVBQXhCLENBQVA7QUFDSDs7O2dEQUUyQnZCLEksRUFBZ0U7QUFDeEYsYUFBTyxLQUFLb0IsSUFBTCxDQUFVcEIsSUFBVixFQUFnQixzQkFBaEIsRUFBd0MsSUFBSXdCLDJDQUFKLEVBQXhDLENBQVA7QUFDSDs7OzZDQUV3QnhCLEksRUFBMkQ7QUFDaEYsYUFBTyxLQUFLeUIsVUFBTCxDQUFnQnpCLElBQWhCLEVBQXNCLG1CQUF0QixFQUEyQyxJQUFJc0IsK0JBQUosRUFBM0MsQ0FBUDtBQUNIOzs7O0VBdEN3Q0ksNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29kZSBmcm9tICcuLi9Db2RlJztcbmltcG9ydCBDb2RlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvY29kZS9Db2RlJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBUeXBlVHJhbnNmb3JtZXIgZnJvbSAnLi9UeXBlVHJhbnNmb3JtZXInO1xuaW1wb3J0IFR5cGUgZnJvbSAnLi4vVHlwZSc7XG5pbXBvcnQgSW50ZXJlc3RJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9pbnRlcmVzdC9JbnRlcmVzdCc7XG5pbXBvcnQgSW50ZXJlc3RUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi9pbnRlcmVzdC9UcmFuc2Zvcm1lcnMvSW50ZXJlc3RUcmFuc2Zvcm1lcic7XG5pbXBvcnQgR2lmdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2dpZnQvR2lmdCc7XG5pbXBvcnQgR2lmdFRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2dpZnQvVHJhbnNmb3JtZXJzL0dpZnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgU3Vic2NyaXB0aW9uRGlzY291bnRJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9zdWJzY3JpcHRpb24vU3Vic2NyaXB0aW9uRGlzY291bnQnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbkRpc2NvdW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vc3Vic2NyaXB0aW9uL1RyYW5zZm9ybWVycy9TdWJzY3JpcHRpb25EaXNjb3VudFRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICBtYXBEYXRhKGNvZGU6IENvZGVJbnRlcmZhY2UpOiBDb2RlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2RlKHtcbiAgICAgICAgICAgIG5hbWU6IGNvZGUubmFtZSxcbiAgICAgICAgICAgIGNvZGU6IGNvZGUuY29kZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogY29kZS5zdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlOiBjb2RlLmVuZERhdGUsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGNvZGUuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBjb2RlLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHZhbHVlOiBjb2RlLnZhbHVlLFxuICAgICAgICAgICAgdmFsdWVUeXBlSWQ6IGNvZGUudmFsdWVUeXBlSWQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICB0eXBlOiB0aGlzLmluY2x1ZGVUeXBlKGNvZGUpLFxuICAgICAgICAgICAgaW50ZXJlc3Q6IHRoaXMuaW5jbHVkZUludGVyZXN0KGNvZGUpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdpZnQ6IHRoaXMuaW5jbHVkZUdpZnQoY29kZSkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uRGlzY291bnQ6IHRoaXMuaW5jbHVkZVN1YnNjcmlwdGlvbkRpc2NvdW50KGNvZGUpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlZmVycmVkSW50ZXJlc3RzOiB0aGlzLmluY2x1ZGVSZWZlcnJlZEludGVyZXN0cyhjb2RlKSB8fCB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVUeXBlKGNvZGU6IENvZGVJbnRlcmZhY2UpOiBUeXBlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oY29kZSwgJ3R5cGUnLCBuZXcgVHlwZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVJbnRlcmVzdChjb2RlOiBDb2RlSW50ZXJmYWNlKTogSW50ZXJlc3RJbnRlcmZhY2UgfCB7fSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGNvZGUsICdpbnRlcmVzdCcsIG5ldyBJbnRlcmVzdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVHaWZ0KGNvZGU6IENvZGVJbnRlcmZhY2UpOiBHaWZ0SW50ZXJmYWNlIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0oY29kZSwgJ2dpZnQnLCBuZXcgR2lmdFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVTdWJzY3JpcHRpb25EaXNjb3VudChjb2RlOiBDb2RlSW50ZXJmYWNlKTogU3Vic2NyaXB0aW9uRGlzY291bnRJbnRlcmZhY2UgfCB7fSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGNvZGUsICdzdWJzY3JpcHRpb25EaXNjb3VudCcsIG5ldyBTdWJzY3JpcHRpb25EaXNjb3VudFRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZWZlcnJlZEludGVyZXN0cyhjb2RlOiBDb2RlSW50ZXJmYWNlKTogQXJyYXk8SW50ZXJlc3RJbnRlcmZhY2UgfCB7fT4gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbihjb2RlLCAncmVmZXJyZWRJbnRlcmVzdHMnLCBuZXcgSW50ZXJlc3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=