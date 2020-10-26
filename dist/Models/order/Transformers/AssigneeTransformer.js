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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvb3JkZXIvVHJhbnNmb3JtZXJzL0Fzc2lnbmVlVHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiQXNzaWduZWVUcmFuc2Zvcm1lciIsImFzc2lnbmVlIiwiQXNzaWduZWUiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJyZWZlcmVuY2UiLCJyZXNvdXJjZVR5cGUiLCJjb2xvciIsIkJhc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7NEJBQ1lDLFEsRUFBdUM7QUFDM0MsYUFBTyxJQUFJQyxvQkFBSixDQUFhO0FBQ2hCQyxRQUFBQSxFQUFFLEVBQUVGLFFBQVEsQ0FBQ0UsRUFERztBQUVoQkMsUUFBQUEsU0FBUyxFQUFFSCxRQUFRLENBQUNHLFNBRko7QUFHaEJDLFFBQUFBLFNBQVMsRUFBRUosUUFBUSxDQUFDSSxTQUhKO0FBSWhCQyxRQUFBQSxTQUFTLEVBQUVMLFFBQVEsQ0FBQ0ssU0FKSjtBQUtoQkMsUUFBQUEsUUFBUSxFQUFFTixRQUFRLENBQUNNLFFBTEg7QUFNaEJDLFFBQUFBLEtBQUssRUFBRVAsUUFBUSxDQUFDTyxLQU5BO0FBT2hCQyxRQUFBQSxTQUFTLEVBQUVSLFFBQVEsQ0FBQ1EsU0FQSjtBQVFoQkMsUUFBQUEsWUFBWSxFQUFFVCxRQUFRLENBQUNTLFlBUlA7QUFTaEJDLFFBQUFBLEtBQUssRUFBRVYsUUFBUSxDQUFDVTtBQVRBLE9BQWIsQ0FBUDtBQVdIOzs7O0VBbEI0Q0MsNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzaWduZWUgZnJvbSAnLi4vQXNzaWduZWUnO1xuaW1wb3J0IEFzc2lnbmVlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvb3JkZXIvQXNzaWduZWUnO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NpZ25lZVRyYW5zZm9ybWVyIGV4dGVuZHMgQmFzZVRyYW5zZm9ybWVyIHtcbiAgICAvKipcbiAgICAgKiBNYXAgYW4gb3JkZXIgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhc3NpZ25lZVxuICAgICAqL1xuICAgIG1hcERhdGEoYXNzaWduZWU6IEFzc2lnbmVlSW50ZXJmYWNlKTogQXNzaWduZWUge1xuICAgICAgICByZXR1cm4gbmV3IEFzc2lnbmVlKHtcbiAgICAgICAgICAgIGlkOiBhc3NpZ25lZS5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYXNzaWduZWUuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBhc3NpZ25lZS51cGRhdGVkQXQsXG4gICAgICAgICAgICBmaXJzdG5hbWU6IGFzc2lnbmVlLmZpcnN0bmFtZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiBhc3NpZ25lZS5sYXN0bmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBhc3NpZ25lZS5lbWFpbCxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogYXNzaWduZWUucmVmZXJlbmNlLFxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiBhc3NpZ25lZS5yZXNvdXJjZVR5cGUsXG4gICAgICAgICAgICBjb2xvcjogYXNzaWduZWUuY29sb3IsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==