"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _UserTypesHistory = _interopRequireDefault(require("../UserTypesHistory"));

var _UserTransformer = _interopRequireDefault(require("./UserTransformer"));

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

var UserTypesHistoryTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(UserTypesHistoryTransformer, _BaseTransformer);

  function UserTypesHistoryTransformer() {
    _classCallCheck(this, UserTypesHistoryTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserTypesHistoryTransformer).apply(this, arguments));
  }

  _createClass(UserTypesHistoryTransformer, [{
    key: "mapData",

    /**
     * Map an user response
     *
     * @param userTypesHistory
     */
    value: function mapData(userTypesHistory) {
      return new _UserTypesHistory["default"]({
        id: userTypesHistory.id,
        createdAt: userTypesHistory.createdAt,
        updatedAt: userTypesHistory.updatedAt,
        endedAt: userTypesHistory.endedAt,
        typeId: userTypesHistory.typeId,
        // belongs to
        user: this.includeUser(userTypesHistory) || undefined,
        updatedBy: this.includeUpdatedBy(userTypesHistory) || undefined
      });
    }
  }, {
    key: "includeUser",
    value: function includeUser(userTypesHistory) {
      return this.item(userTypesHistory, 'user', new _UserTransformer["default"]());
    }
  }, {
    key: "includeUpdatedBy",
    value: function includeUpdatedBy(userTypesHistory) {
      return this.item(userTypesHistory, 'updatedBy', new _UserTransformer["default"]());
    }
  }]);

  return UserTypesHistoryTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = UserTypesHistoryTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvdXNlci9UcmFuc2Zvcm1lcnMvVXNlclR5cGVzSGlzdG9yeVRyYW5zZm9ybWVyLnRzIl0sIm5hbWVzIjpbIlVzZXJUeXBlc0hpc3RvcnlUcmFuc2Zvcm1lciIsInVzZXJUeXBlc0hpc3RvcnkiLCJVc2VyVHlwZXNIaXN0b3J5IiwiaWQiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJlbmRlZEF0IiwidHlwZUlkIiwidXNlciIsImluY2x1ZGVVc2VyIiwidW5kZWZpbmVkIiwidXBkYXRlZEJ5IiwiaW5jbHVkZVVwZGF0ZWRCeSIsIml0ZW0iLCJVc2VyVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsMkI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsZ0IsRUFBK0Q7QUFDbkUsYUFBTyxJQUFJQyw0QkFBSixDQUFxQjtBQUN4QkMsUUFBQUEsRUFBRSxFQUFFRixnQkFBZ0IsQ0FBQ0UsRUFERztBQUV4QkMsUUFBQUEsU0FBUyxFQUFFSCxnQkFBZ0IsQ0FBQ0csU0FGSjtBQUd4QkMsUUFBQUEsU0FBUyxFQUFFSixnQkFBZ0IsQ0FBQ0ksU0FISjtBQUl4QkMsUUFBQUEsT0FBTyxFQUFFTCxnQkFBZ0IsQ0FBQ0ssT0FKRjtBQUt4QkMsUUFBQUEsTUFBTSxFQUFFTixnQkFBZ0IsQ0FBQ00sTUFMRDtBQU14QjtBQUNBQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0MsV0FBTCxDQUFpQlIsZ0JBQWpCLEtBQXNDUyxTQVBwQjtBQVF4QkMsUUFBQUEsU0FBUyxFQUFFLEtBQUtDLGdCQUFMLENBQXNCWCxnQkFBdEIsS0FBMkNTO0FBUjlCLE9BQXJCLENBQVA7QUFVSDs7O2dDQUVXVCxnQixFQUFtRTtBQUMzRSxhQUFPLEtBQUtZLElBQUwsQ0FBVVosZ0JBQVYsRUFBNEIsTUFBNUIsRUFBb0MsSUFBSWEsMkJBQUosRUFBcEMsQ0FBUDtBQUNIOzs7cUNBRWdCYixnQixFQUFtRTtBQUNoRixhQUFPLEtBQUtZLElBQUwsQ0FBVVosZ0JBQVYsRUFBNEIsV0FBNUIsRUFBeUMsSUFBSWEsMkJBQUosRUFBekMsQ0FBUDtBQUNIOzs7O0VBekJvREMsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5pbXBvcnQgVXNlclR5cGVzSGlzdG9yeUludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3VzZXIvVXNlclR5cGVzSGlzdG9yeSc7XG5pbXBvcnQgVXNlclR5cGVzSGlzdG9yeSBmcm9tICcuLi9Vc2VyVHlwZXNIaXN0b3J5JztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvdXNlci9Vc2VyJztcbmltcG9ydCBVc2VyVHJhbnNmb3JtZXIgZnJvbSAnLi9Vc2VyVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVHlwZXNIaXN0b3J5VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiB1c2VyIHJlc3BvbnNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXNlclR5cGVzSGlzdG9yeVxuICAgICAqL1xuICAgIG1hcERhdGEodXNlclR5cGVzSGlzdG9yeTogVXNlclR5cGVzSGlzdG9yeUludGVyZmFjZSk6IFVzZXJUeXBlc0hpc3Rvcnkge1xuICAgICAgICByZXR1cm4gbmV3IFVzZXJUeXBlc0hpc3Rvcnkoe1xuICAgICAgICAgICAgaWQ6IHVzZXJUeXBlc0hpc3RvcnkuaWQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHVzZXJUeXBlc0hpc3RvcnkuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiB1c2VyVHlwZXNIaXN0b3J5LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGVuZGVkQXQ6IHVzZXJUeXBlc0hpc3RvcnkuZW5kZWRBdCxcbiAgICAgICAgICAgIHR5cGVJZDogdXNlclR5cGVzSGlzdG9yeS50eXBlSWQsXG4gICAgICAgICAgICAvLyBiZWxvbmdzIHRvXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmluY2x1ZGVVc2VyKHVzZXJUeXBlc0hpc3RvcnkpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVwZGF0ZWRCeTogdGhpcy5pbmNsdWRlVXBkYXRlZEJ5KHVzZXJUeXBlc0hpc3RvcnkpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVzZXIodXNlclR5cGVzSGlzdG9yeTogVXNlclR5cGVzSGlzdG9yeUludGVyZmFjZSk6IFVzZXJJbnRlcmZhY2UgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSh1c2VyVHlwZXNIaXN0b3J5LCAndXNlcicsIG5ldyBVc2VyVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVVwZGF0ZWRCeSh1c2VyVHlwZXNIaXN0b3J5OiBVc2VyVHlwZXNIaXN0b3J5SW50ZXJmYWNlKTogVXNlckludGVyZmFjZSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKHVzZXJUeXBlc0hpc3RvcnksICd1cGRhdGVkQnknLCBuZXcgVXNlclRyYW5zZm9ybWVyKCkpO1xuICAgIH1cbn1cbiJdfQ==