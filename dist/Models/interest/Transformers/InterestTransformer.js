"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseTransformer2 = _interopRequireDefault(require("../../../BaseTransformer"));

var _Interest = _interopRequireDefault(require("../Interest"));

var _CodeTransformer = _interopRequireDefault(require("../../code/Transformers/CodeTransformer"));

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

var InterestTransformer = /*#__PURE__*/function (_BaseTransformer) {
  _inherits(InterestTransformer, _BaseTransformer);

  var _super = _createSuper(InterestTransformer);

  function InterestTransformer() {
    _classCallCheck(this, InterestTransformer);

    return _super.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvaW50ZXJlc3QvVHJhbnNmb3JtZXJzL0ludGVyZXN0VHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOlsiSW50ZXJlc3RUcmFuc2Zvcm1lciIsImludGVyZXN0IiwiSW50ZXJlc3QiLCJpZCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInVzZXJJZCIsImNvZGUiLCJyZWZlcnJpbmdDb2RlIiwiaW5jbHVkZVJlZmVycmluZ0NvZGUiLCJ1bmRlZmluZWQiLCJzdGF0dXNJZCIsInBpbG90T3B0SW4iLCJtYXJrZXRpbmdPcHRJbiIsImxhdW5jaE9wdEluIiwiY29uZmlybWVkIiwidmlld0NvdW50IiwicmVmZXJyaW5nSW50ZXJlc3QiLCJpbmNsdWRlUmVmZXJyaW5nSW50ZXJlc3QiLCJ1dWlkcyIsIml0ZW0iLCJDb2RlVHJhbnNmb3JtZXIiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7Ozs7Ozs7Ozs7O1dBQ2pCLGlCQUFRQyxRQUFSLEVBQStDO0FBQzNDLGFBQU8sSUFBSUMsb0JBQUosQ0FBYTtBQUNoQkMsUUFBQUEsRUFBRSxFQUFFRixRQUFRLENBQUNFLEVBREc7QUFFaEJDLFFBQUFBLFNBQVMsRUFBRUgsUUFBUSxDQUFDRyxTQUZKO0FBR2hCQyxRQUFBQSxTQUFTLEVBQUVKLFFBQVEsQ0FBQ0ksU0FISjtBQUloQkMsUUFBQUEsTUFBTSxFQUFFTCxRQUFRLENBQUNLLE1BSkQ7QUFLaEJDLFFBQUFBLElBQUksRUFBRU4sUUFBUSxDQUFDTSxJQUxDO0FBTWhCQyxRQUFBQSxhQUFhLEVBQUUsS0FBS0Msb0JBQUwsQ0FBMEJSLFFBQTFCLEtBQXVDUyxTQU50QztBQU9oQkMsUUFBQUEsUUFBUSxFQUFFVixRQUFRLENBQUNVLFFBUEg7QUFRaEJDLFFBQUFBLFVBQVUsRUFBRVgsUUFBUSxDQUFDVyxVQVJMO0FBU2hCQyxRQUFBQSxjQUFjLEVBQUVaLFFBQVEsQ0FBQ1ksY0FUVDtBQVVoQkMsUUFBQUEsV0FBVyxFQUFFYixRQUFRLENBQUNhLFdBVk47QUFXaEJDLFFBQUFBLFNBQVMsRUFBRWQsUUFBUSxDQUFDYyxTQVhKO0FBWWhCQyxRQUFBQSxTQUFTLEVBQUVmLFFBQVEsQ0FBQ2UsU0FaSjtBQWFoQkMsUUFBQUEsaUJBQWlCLEVBQUUsS0FBS0Msd0JBQUwsQ0FBOEJqQixRQUE5QixLQUEyQ1MsU0FiOUM7QUFjaEJTLFFBQUFBLEtBQUssRUFBRWxCLFFBQVEsQ0FBQ2tCO0FBZEEsT0FBYixDQUFQO0FBZ0JIOzs7V0FFRCw4QkFBcUJsQixRQUFyQixFQUE2RTtBQUN6RSxhQUFPLEtBQUttQixJQUFMLENBQVVuQixRQUFWLEVBQW9CLGVBQXBCLEVBQXFDLElBQUlvQiwyQkFBSixFQUFyQyxDQUFQO0FBQ0g7OztXQUVELGtDQUF5QnBCLFFBQXpCLEVBQXFFO0FBQ2pFLGFBQU8sS0FBS21CLElBQUwsQ0FBVW5CLFFBQVYsRUFBb0IsbUJBQXBCLEVBQXlDLElBQUlELG1CQUFKLEVBQXpDLENBQVA7QUFDSDs7OztFQTFCNENzQiw0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRlcmVzdEludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL2ludGVyZXN0L0ludGVyZXN0JztcbmltcG9ydCBDb2RlSW50ZXJmYWNlIGZyb20gJy4uLy4uLy4uL0ludGVyZmFjZXMvY29kZS9Db2RlJztcbmltcG9ydCBCYXNlVHJhbnNmb3JtZXIgZnJvbSAnLi4vLi4vLi4vQmFzZVRyYW5zZm9ybWVyJztcbmltcG9ydCBJbnRlcmVzdCBmcm9tICcuLi9JbnRlcmVzdCc7XG5pbXBvcnQgQ29kZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uL2NvZGUvVHJhbnNmb3JtZXJzL0NvZGVUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyZXN0VHJhbnNmb3JtZXIgZXh0ZW5kcyBCYXNlVHJhbnNmb3JtZXIge1xuICAgIG1hcERhdGEoaW50ZXJlc3Q6IEludGVyZXN0SW50ZXJmYWNlKTogSW50ZXJlc3Qge1xuICAgICAgICByZXR1cm4gbmV3IEludGVyZXN0KHtcbiAgICAgICAgICAgIGlkOiBpbnRlcmVzdC5pZCxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogaW50ZXJlc3QuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBpbnRlcmVzdC51cGRhdGVkQXQsXG4gICAgICAgICAgICB1c2VySWQ6IGludGVyZXN0LnVzZXJJZCxcbiAgICAgICAgICAgIGNvZGU6IGludGVyZXN0LmNvZGUsXG4gICAgICAgICAgICByZWZlcnJpbmdDb2RlOiB0aGlzLmluY2x1ZGVSZWZlcnJpbmdDb2RlKGludGVyZXN0KSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdGF0dXNJZDogaW50ZXJlc3Quc3RhdHVzSWQsXG4gICAgICAgICAgICBwaWxvdE9wdEluOiBpbnRlcmVzdC5waWxvdE9wdEluLFxuICAgICAgICAgICAgbWFya2V0aW5nT3B0SW46IGludGVyZXN0Lm1hcmtldGluZ09wdEluLFxuICAgICAgICAgICAgbGF1bmNoT3B0SW46IGludGVyZXN0LmxhdW5jaE9wdEluLFxuICAgICAgICAgICAgY29uZmlybWVkOiBpbnRlcmVzdC5jb25maXJtZWQsXG4gICAgICAgICAgICB2aWV3Q291bnQ6IGludGVyZXN0LnZpZXdDb3VudCxcbiAgICAgICAgICAgIHJlZmVycmluZ0ludGVyZXN0OiB0aGlzLmluY2x1ZGVSZWZlcnJpbmdJbnRlcmVzdChpbnRlcmVzdCkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgdXVpZHM6IGludGVyZXN0LnV1aWRzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmNsdWRlUmVmZXJyaW5nQ29kZShpbnRlcmVzdDogSW50ZXJlc3RJbnRlcmZhY2UpOiBDb2RlSW50ZXJmYWNlIHwge30gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShpbnRlcmVzdCwgJ3JlZmVycmluZ0NvZGUnLCBuZXcgQ29kZVRyYW5zZm9ybWVyKCkpO1xuICAgIH1cblxuICAgIGluY2x1ZGVSZWZlcnJpbmdJbnRlcmVzdChpbnRlcmVzdDogSW50ZXJlc3RJbnRlcmZhY2UpOiBvYmplY3QgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbShpbnRlcmVzdCwgJ3JlZmVycmluZ0ludGVyZXN0JywgbmV3IEludGVyZXN0VHJhbnNmb3JtZXIoKSk7XG4gICAgfVxufVxuIl19