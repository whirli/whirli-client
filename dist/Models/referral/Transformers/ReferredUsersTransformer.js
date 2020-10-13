"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ReferredUser = _interopRequireDefault(require("../ReferredUser"));

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

var ReferredUsersTransformer =
/*#__PURE__*/
function (_BaseTransformer) {
  _inherits(ReferredUsersTransformer, _BaseTransformer);

  function ReferredUsersTransformer() {
    _classCallCheck(this, ReferredUsersTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReferredUsersTransformer).apply(this, arguments));
  }

  _createClass(ReferredUsersTransformer, [{
    key: "mapData",

    /**
     * Map a referred user response
     *
     * @param referredUser
     */
    value: function mapData(referredUser) {
      return new _ReferredUser["default"]({
        firstname: referredUser.firstname
      });
    }
  }]);

  return ReferredUsersTransformer;
}(_BaseTransformer2["default"]);

exports["default"] = ReferredUsersTransformer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2RlbHMvcmVmZXJyYWwvVHJhbnNmb3JtZXJzL1JlZmVycmVkVXNlcnNUcmFuc2Zvcm1lci50cyJdLCJuYW1lcyI6WyJSZWZlcnJlZFVzZXJzVHJhbnNmb3JtZXIiLCJyZWZlcnJlZFVzZXIiLCJSZWZlcnJlZFVzZXIiLCJmaXJzdG5hbWUiLCJCYXNlVHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsd0I7Ozs7Ozs7Ozs7Ozs7O0FBQ2pCOzs7Ozs0QkFLUUMsWSxFQUFtRDtBQUN2RCxhQUFPLElBQUlDLHdCQUFKLENBQWlCO0FBQ3BCQyxRQUFBQSxTQUFTLEVBQUVGLFlBQVksQ0FBQ0U7QUFESixPQUFqQixDQUFQO0FBR0g7Ozs7RUFWaURDLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlZmVycmVkVXNlciBmcm9tICcuLi9SZWZlcnJlZFVzZXInO1xuaW1wb3J0IFJlZmVycmVkVXNlckludGVyZmFjZSBmcm9tICcuLi8uLi8uLi9JbnRlcmZhY2VzL3JlZmVycmFsL1JlZmVycmVkVXNlcic7XG5pbXBvcnQgQmFzZVRyYW5zZm9ybWVyIGZyb20gJy4uLy4uLy4uL0Jhc2VUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZmVycmVkVXNlcnNUcmFuc2Zvcm1lciBleHRlbmRzIEJhc2VUcmFuc2Zvcm1lciB7XG4gICAgLyoqXG4gICAgICogTWFwIGEgcmVmZXJyZWQgdXNlciByZXNwb25zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHJlZmVycmVkVXNlclxuICAgICAqL1xuICAgIG1hcERhdGEocmVmZXJyZWRVc2VyOiBSZWZlcnJlZFVzZXJJbnRlcmZhY2UpOiBSZWZlcnJlZFVzZXIge1xuICAgICAgICByZXR1cm4gbmV3IFJlZmVycmVkVXNlcih7XG4gICAgICAgICAgICBmaXJzdG5hbWU6IHJlZmVycmVkVXNlci5maXJzdG5hbWUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==