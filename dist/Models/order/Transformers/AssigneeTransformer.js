"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Assignee = _interopRequireDefault(require("../Assignee"));

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

var AssigneeTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(AssigneeTransformer, _BaseTransformer);

  function AssigneeTransformer() {
    _classCallCheck(this, AssigneeTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(AssigneeTransformer).apply(this, arguments));
  }

  _createClass(AssigneeTransformer, [{
    key: "mapData",

    /**
     * Map an order response
     *
     * @param assignee
     */
    value: function mapData(assignee) {
      return new _Assignee["default"]({
        id: assignee.id,
        createdAt: assignee.createdAt,
        updatedAt: assignee.updatedAt,
        firstname: assignee.firstname,
        lastname: assignee.lastname,
        email: assignee.email,
        reference: assignee.reference,
        resourceType: assignee.resourceType,
        color: assignee.color
      });
    }
  }]);

  return AssigneeTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = AssigneeTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL0Fzc2lnbmVlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzaWduZWVUcmFuc2Zvcm1lciIsImFzc2lnbmVlIiwiQXNzaWduZWUiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJyZWZlcmVuY2UiLCJyZXNvdXJjZVR5cGUiLCJjb2xvciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxtQjs7Ozs7Ozs7Ozs7Ozs7QUFDakI7Ozs7OzRCQUtRQyxRLEVBQXVDO0FBQzNDLGFBQU8sSUFBSUMsb0JBQUosQ0FBYTtBQUNoQkMsUUFBQUEsRUFBRSxFQUFFRixRQUFRLENBQUNFLEVBREc7QUFFaEJDLFFBQUFBLFNBQVMsRUFBRUgsUUFBUSxDQUFDRyxTQUZKO0FBR2hCQyxRQUFBQSxTQUFTLEVBQUVKLFFBQVEsQ0FBQ0ksU0FISjtBQUloQkMsUUFBQUEsU0FBUyxFQUFFTCxRQUFRLENBQUNLLFNBSko7QUFLaEJDLFFBQUFBLFFBQVEsRUFBRU4sUUFBUSxDQUFDTSxRQUxIO0FBTWhCQyxRQUFBQSxLQUFLLEVBQUVQLFFBQVEsQ0FBQ08sS0FOQTtBQU9oQkMsUUFBQUEsU0FBUyxFQUFFUixRQUFRLENBQUNRLFNBUEo7QUFRaEJDLFFBQUFBLFlBQVksRUFBRVQsUUFBUSxDQUFDUyxZQVJQO0FBU2hCQyxRQUFBQSxLQUFLLEVBQUVWLFFBQVEsQ0FBQ1U7QUFUQSxPQUFiLENBQVA7QUFXSDs7OztFQWxCNENDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2lnbmVlIGZyb20gJy4uL0Fzc2lnbmVlJztcbmltcG9ydCBBc3NpZ25lZUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL29yZGVyL0Fzc2lnbmVlJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzaWduZWVUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGFuIG9yZGVyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXNzaWduZWVcbiAgICAgKi9cbiAgICBtYXBEYXRhKGFzc2lnbmVlOiBBc3NpZ25lZUludGVyZmFjZSk6IEFzc2lnbmVlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3NpZ25lZSh7XG4gICAgICAgICAgICBpZDogYXNzaWduZWUuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGFzc2lnbmVlLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYXNzaWduZWUudXBkYXRlZEF0LFxuICAgICAgICAgICAgZmlyc3RuYW1lOiBhc3NpZ25lZS5maXJzdG5hbWUsXG4gICAgICAgICAgICBsYXN0bmFtZTogYXNzaWduZWUubGFzdG5hbWUsXG4gICAgICAgICAgICBlbWFpbDogYXNzaWduZWUuZW1haWwsXG4gICAgICAgICAgICByZWZlcmVuY2U6IGFzc2lnbmVlLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHJlc291cmNlVHlwZTogYXNzaWduZWUucmVzb3VyY2VUeXBlLFxuICAgICAgICAgICAgY29sb3I6IGFzc2lnbmVlLmNvbG9yLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=