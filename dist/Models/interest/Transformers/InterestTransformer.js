"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _Interest = _interopRequireDefault(require("../Interest"));

var _CodeTransformer = _interopRequireDefault(require("../../code/Transformers/CodeTransformer"));

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

var InterestTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(InterestTransformer, _BaseTransformer);

  function InterestTransformer() {
    _classCallCheck(this, InterestTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(InterestTransformer).apply(this, arguments));
  }

  _createClass(InterestTransformer, [{
    key: "mapData",
    value: function mapData(interest) {
      return new _Interest["default"]({
        id: interest.id,
        createdAt: interest.createdAt,
        updatedAt: interest.updatedAt,
        userId: interest.userId,
        code: interest.code,
        referringCode: this.includeReferringCode(interest) || undefined,
        statusId: interest.statusId,
        pilotOptIn: interest.pilotOptIn,
        marketingOptIn: interest.marketingOptIn,
        launchOptIn: interest.launchOptIn,
        confirmed: interest.confirmed,
        viewCount: interest.viewCount,
        referringInterest: this.includeReferringInterest(interest) || undefined,
        uuids: interest.uuids
      });
    }
  }, {
    key: "includeReferringCode",
    value: function includeReferringCode(interest) {
      return this.item(interest, 'referringCode', new _CodeTransformer["default"]());
    }
  }, {
    key: "includeReferringInterest",
    value: function includeReferringInterest(interest) {
      return this.item(interest, 'referringInterest', new InterestTransformer());
    }
  }]);

  return InterestTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = InterestTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvaW50ZXJlc3QvVHJhbnNmb3JtZXJzL0ludGVyZXN0VHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiSW50ZXJlc3RUcmFuc2Zvcm1lciIsImludGVyZXN0IiwiSW50ZXJlc3QiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInVzZXJJZCIsImNvZGUiLCJyZWZlcnJpbmdDb2RlIiwiaW5jbHVkZVJlZmVycmluZ0NvZGUiLCJ1bmRlZmluZWQiLCJzdGF0dXNJZCIsInBpbG90T3B0SW4iLCJtYXJrZXRpbmdPcHRJbiIsImxhdW5jaE9wdEluIiwiY29uZmlybWVkIiwidmlld0NvdW50IiwicmVmZXJyaW5nSW50ZXJlc3QiLCJpbmNsdWRlUmVmZXJyaW5nSW50ZXJlc3QiLCJ1dWlkcyIsIml0ZW0iLCJDb2RlVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7NEJBQ1RDLFEsRUFBdUM7QUFDM0MsYUFBTyxJQUFJQyxvQkFBSixDQUFhO0FBQ2hCQyxRQUFBQSxFQUFFLEVBQUVGLFFBQVEsQ0FBQ0UsRUFERztBQUVoQkMsUUFBQUEsU0FBUyxFQUFFSCxRQUFRLENBQUNHLFNBRko7QUFHaEJDLFFBQUFBLFNBQVMsRUFBRUosUUFBUSxDQUFDSSxTQUhKO0FBSWhCQyxRQUFBQSxNQUFNLEVBQUVMLFFBQVEsQ0FBQ0ssTUFKRDtBQUtoQkMsUUFBQUEsSUFBSSxFQUFFTixRQUFRLENBQUNNLElBTEM7QUFNaEJDLFFBQUFBLGFBQWEsRUFBRSxLQUFLQyxvQkFBTCxDQUEwQlIsUUFBMUIsS0FBdUNTLFNBTnRDO0FBT2hCQyxRQUFBQSxRQUFRLEVBQUVWLFFBQVEsQ0FBQ1UsUUFQSDtBQVFoQkMsUUFBQUEsVUFBVSxFQUFFWCxRQUFRLENBQUNXLFVBUkw7QUFTaEJDLFFBQUFBLGNBQWMsRUFBRVosUUFBUSxDQUFDWSxjQVRUO0FBVWhCQyxRQUFBQSxXQUFXLEVBQUViLFFBQVEsQ0FBQ2EsV0FWTjtBQVdoQkMsUUFBQUEsU0FBUyxFQUFFZCxRQUFRLENBQUNjLFNBWEo7QUFZaEJDLFFBQUFBLFNBQVMsRUFBRWYsUUFBUSxDQUFDZSxTQVpKO0FBYWhCQyxRQUFBQSxpQkFBaUIsRUFBRSxLQUFLQyx3QkFBTCxDQUE4QmpCLFFBQTlCLEtBQTJDUyxTQWI5QztBQWNoQlMsUUFBQUEsS0FBSyxFQUFFbEIsUUFBUSxDQUFDa0I7QUFkQSxPQUFiLENBQVA7QUFnQkg7Ozt5Q0FFb0JsQixRLEVBQXdEO0FBQ3pFLGFBQU8sS0FBS21CLElBQUwsQ0FBVW5CLFFBQVYsRUFBb0IsZUFBcEIsRUFBcUMsSUFBSW9CLDJCQUFKLEVBQXJDLENBQVA7QUFDSDs7OzZDQUV3QnBCLFEsRUFBNEM7QUFDakUsYUFBTyxLQUFLbUIsSUFBTCxDQUFVbkIsUUFBVixFQUFvQixtQkFBcEIsRUFBeUMsSUFBSUQsbUJBQUosRUFBekMsQ0FBUDtBQUNIOzs7O0VBMUI0Q3NCLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGVyZXN0SW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvaW50ZXJlc3QvSW50ZXJlc3QnO1xuaW1wb3J0IENvZGVJbnRlcmZhY2UgZnJvbSAnLi4vLi4vLi4vSW50ZXJmYWNlcy9jb2RlL0NvZGUnO1xuaW1wb3J0IEJhc2VUcmFuc2Zvcm1lciBmcm9tICcuLi8uLi8uLi9CYXNlVHJhbnNmb3JtZXInO1xuaW1wb3J0IEludGVyZXN0IGZyb20gJy4uL0ludGVyZXN0JztcbmltcG9ydCBDb2RlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vY29kZS9UcmFuc2Zvcm1lcnMvQ29kZVRyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJlc3RUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgbWFwRGF0YShpbnRlcmVzdDogSW50ZXJlc3RJbnRlcmZhY2UpOiBJbnRlcmVzdCB7XG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJlc3Qoe1xuICAgICAgICAgICAgaWQ6IGludGVyZXN0LmlkLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBpbnRlcmVzdC5jcmVhdGVkQXQsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGludGVyZXN0LnVwZGF0ZWRBdCxcbiAgICAgICAgICAgIHVzZXJJZDogaW50ZXJlc3QudXNlcklkLFxuICAgICAgICAgICAgY29kZTogaW50ZXJlc3QuY29kZSxcbiAgICAgICAgICAgIHJlZmVycmluZ0NvZGU6IHRoaXMuaW5jbHVkZVJlZmVycmluZ0NvZGUoaW50ZXJlc3QpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHN0YXR1c0lkOiBpbnRlcmVzdC5zdGF0dXNJZCxcbiAgICAgICAgICAgIHBpbG90T3B0SW46IGludGVyZXN0LnBpbG90T3B0SW4sXG4gICAgICAgICAgICBtYXJrZXRpbmdPcHRJbjogaW50ZXJlc3QubWFya2V0aW5nT3B0SW4sXG4gICAgICAgICAgICBsYXVuY2hPcHRJbjogaW50ZXJlc3QubGF1bmNoT3B0SW4sXG4gICAgICAgICAgICBjb25maXJtZWQ6IGludGVyZXN0LmNvbmZpcm1lZCxcbiAgICAgICAgICAgIHZpZXdDb3VudDogaW50ZXJlc3Qudmlld0NvdW50LFxuICAgICAgICAgICAgcmVmZXJyaW5nSW50ZXJlc3Q6IHRoaXMuaW5jbHVkZVJlZmVycmluZ0ludGVyZXN0KGludGVyZXN0KSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICB1dWlkczogaW50ZXJlc3QudXVpZHMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZWZlcnJpbmdDb2RlKGludGVyZXN0OiBJbnRlcmVzdEludGVyZmFjZSk6IENvZGVJbnRlcmZhY2UgfCB7fSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGludGVyZXN0LCAncmVmZXJyaW5nQ29kZScsIG5ldyBDb2RlVHJhbnNmb3JtZXIoKSk7XG4gICAgfVxuXG4gICAgaW5jbHVkZVJlZmVycmluZ0ludGVyZXN0KGludGVyZXN0OiBJbnRlcmVzdEludGVyZmFjZSk6IG9iamVjdCB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtKGludGVyZXN0LCAncmVmZXJyaW5nSW50ZXJlc3QnLCBuZXcgSW50ZXJlc3RUcmFuc2Zvcm1lcigpKTtcbiAgICB9XG59XG4iXX0=