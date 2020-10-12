"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Assignee = _interopRequireDefault(require("../Assignee"));

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

var AssigneeTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(AssigneeTransformer, _BaseTransformer);

  var _super = _createSuper(AssigneeTransformer);

  function AssigneeTransformer() {
    _classCallCheck(this, AssigneeTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL0Fzc2lnbmVlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzaWduZWVUcmFuc2Zvcm1lciIsImFzc2lnbmVlIiwiQXNzaWduZWUiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJyZWZlcmVuY2UiLCJyZXNvdXJjZVR5cGUiLCJjb2xvciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsUSxFQUF1QztBQUMzQyxhQUFPLElBQUlDLG9CQUFKLENBQWE7QUFDaEJDLFFBQUFBLEVBQUUsRUFBRUYsUUFBUSxDQUFDRSxFQURHO0FBRWhCQyxRQUFBQSxTQUFTLEVBQUVILFFBQVEsQ0FBQ0csU0FGSjtBQUdoQkMsUUFBQUEsU0FBUyxFQUFFSixRQUFRLENBQUNJLFNBSEo7QUFJaEJDLFFBQUFBLFNBQVMsRUFBRUwsUUFBUSxDQUFDSyxTQUpKO0FBS2hCQyxRQUFBQSxRQUFRLEVBQUVOLFFBQVEsQ0FBQ00sUUFMSDtBQU1oQkMsUUFBQUEsS0FBSyxFQUFFUCxRQUFRLENBQUNPLEtBTkE7QUFPaEJDLFFBQUFBLFNBQVMsRUFBRVIsUUFBUSxDQUFDUSxTQVBKO0FBUWhCQyxRQUFBQSxZQUFZLEVBQUVULFFBQVEsQ0FBQ1MsWUFSUDtBQVNoQkMsUUFBQUEsS0FBSyxFQUFFVixRQUFRLENBQUNVO0FBVEEsT0FBYixDQUFQO0FBV0g7Ozs7RUFsQjRDQyw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3NpZ25lZSBmcm9tICcuLi9Bc3NpZ25lZSc7XG5pbXBvcnQgQXNzaWduZWVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9vcmRlci9Bc3NpZ25lZSc7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2lnbmVlVHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIC8qKlxuICAgICAqIE1hcCBhbiBvcmRlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIGFzc2lnbmVlXG4gICAgICovXG4gICAgbWFwRGF0YShhc3NpZ25lZTogQXNzaWduZWVJbnRlcmZhY2UpOiBBc3NpZ25lZSB7XG4gICAgICAgIHJldHVybiBuZXcgQXNzaWduZWUoe1xuICAgICAgICAgICAgaWQ6IGFzc2lnbmVlLmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBhc3NpZ25lZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGFzc2lnbmVlLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogYXNzaWduZWUuZmlyc3RuYW1lLFxuICAgICAgICAgICAgbGFzdG5hbWU6IGFzc2lnbmVlLmxhc3RuYW1lLFxuICAgICAgICAgICAgZW1haWw6IGFzc2lnbmVlLmVtYWlsLFxuICAgICAgICAgICAgcmVmZXJlbmNlOiBhc3NpZ25lZS5yZWZlcmVuY2UsXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU6IGFzc2lnbmVlLnJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIGNvbG9yOiBhc3NpZ25lZS5jb2xvcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19