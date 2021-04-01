"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../../AbstractResource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Products =
/*#__PURE__*/
function (_AbstractResource) {
  _inherits(Products, _AbstractResource);

  function Products() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Products);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Products)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "all", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "create", _this.createMethodFromPartialSpec({
      method: 'POST',
      path: '/'
    }));

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "update", _this.createMethodFromPartialSpec({
      method: 'PUT',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "delete", _this.createMethodFromPartialSpec({
      method: 'DELETE',
      path: '/{id}'
    }));

    _defineProperty(_assertThisInitialized(_this), "updateRelations", _this.createMethodFromPartialSpec({
      method: 'PUT',
      path: '/{id}/relations'
    }));

    _defineProperty(_assertThisInitialized(_this), "allWaitSpots", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/wait-spots'
    }));

    _defineProperty(_assertThisInitialized(_this), "getProductWaitSpots", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/{id}/wait-spots'
    }));

    return _this;
  }

  _createClass(Products, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/products';
      this.defaultAccess = 'wacc';
    }
  }]);

  return Products;
}(_AbstractResource2["default"]);

exports["default"] = Products;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvV2FjYy9Qcm9kdWN0cy9Qcm9kdWN0cy50cyJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsImNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyIsIm1ldGhvZCIsInBhdGgiLCJyZXNvdXJjZVBhdGgiLCJkZWZhdWx0QWNjZXNzIiwiQWJzdHJhY3RSZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFNTSxNQUFLQywyQkFBTCxDQUFpQztBQUNwREMsTUFBQUEsTUFBTSxFQUFFLEtBRDRDO0FBRXBEQyxNQUFBQSxJQUFJLEVBQUU7QUFGOEMsS0FBakMsQzs7NkRBS0csTUFBS0YsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxNQUQrQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFO0FBRmlELEtBQWpDLEM7OzBEQUtILE1BQUtGLDJCQUFMLENBQWlDO0FBQ3BEQyxNQUFBQSxNQUFNLEVBQUUsS0FENEM7QUFFcERDLE1BQUFBLElBQUksRUFBRTtBQUY4QyxLQUFqQyxDOzs2REFLRyxNQUFLRiwyQkFBTCxDQUFpQztBQUN2REMsTUFBQUEsTUFBTSxFQUFFLEtBRCtDO0FBRXZEQyxNQUFBQSxJQUFJLEVBQUU7QUFGaUQsS0FBakMsQzs7NkRBS0EsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDdkRDLE1BQUFBLE1BQU0sRUFBRSxRQUQrQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFO0FBRmlELEtBQWpDLEM7O3NFQUtTLE1BQUtGLDJCQUFMLENBQWlDO0FBQ2hFQyxNQUFBQSxNQUFNLEVBQUUsS0FEd0Q7QUFFaEVDLE1BQUFBLElBQUksRUFBRTtBQUYwRCxLQUFqQyxDOzttRUFLSCxNQUFLRiwyQkFBTCxDQUFpQztBQUM3REMsTUFBQUEsTUFBTSxFQUFFLEtBRHFEO0FBRTdEQyxNQUFBQSxJQUFJLEVBQUU7QUFGdUQsS0FBakMsQzs7MEVBS08sTUFBS0YsMkJBQUwsQ0FBaUM7QUFDcEVDLE1BQUFBLE1BQU0sRUFBRSxLQUQ0RDtBQUVwRUMsTUFBQUEsSUFBSSxFQUFFO0FBRjhELEtBQWpDLEM7Ozs7Ozs7aUNBeENwQjtBQUNmLFdBQUtDLFlBQUwsR0FBb0IsV0FBcEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE1BQXJCO0FBQ0g7Ozs7RUFKaUNDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFic3RyYWN0UmVzb3VyY2UgZnJvbSAnLi4vLi4vQWJzdHJhY3RSZXNvdXJjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RzIGV4dGVuZHMgQWJzdHJhY3RSZXNvdXJjZSB7XG4gICAgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVBhdGggPSAnL3Byb2R1Y3RzJztcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjZXNzID0gJ3dhY2MnO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbGw6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgY3JlYXRlOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBnZXQ6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3tpZH0nLFxuICAgIH0pO1xuXG4gICAgcHVibGljIHVwZGF0ZTogRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIHBhdGg6ICcve2lkfScsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgZGVsZXRlOiBGdW5jdGlvbiA9IHRoaXMuY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjKHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgcGF0aDogJy97aWR9JyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyB1cGRhdGVSZWxhdGlvbnM6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBwYXRoOiAnL3tpZH0vcmVsYXRpb25zJyxcbiAgICB9KTtcblxuICAgIHB1YmxpYyBhbGxXYWl0U3BvdHM6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3dhaXQtc3BvdHMnLFxuICAgIH0pO1xuXG4gICAgcHVibGljIGdldFByb2R1Y3RXYWl0U3BvdHM6IEZ1bmN0aW9uID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3tpZH0vd2FpdC1zcG90cycsXG4gICAgfSk7XG59XG4iXX0=