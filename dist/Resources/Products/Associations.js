"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AbstractResource2 = _interopRequireDefault(require("../AbstractResource"));

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

    _defineProperty(_assertThisInitialized(_this), "get", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/{slug}'
    }));

    _defineProperty(_assertThisInitialized(_this), "getByType", _this.createMethodFromPartialSpec({
      method: 'GET',
      path: '/type/{slug}'
    }));

    return _this;
  }

  _createClass(Products, [{
    key: "initialise",
    value: function initialise() {
      this.resourcePath = '/products/associations';
      this.defaultAccess = 'guest';
    }
    /**
     * Get a single product association
     * e.g. `/products/associations/disney`.
     */

  }]);

  return Products;
}(_AbstractResource2["default"]);

exports["default"] = Products;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SZXNvdXJjZXMvUHJvZHVjdHMvQXNzb2NpYXRpb25zLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwiY3JlYXRlTWV0aG9kRnJvbVBhcnRpYWxTcGVjIiwibWV0aG9kIiwicGF0aCIsInJlc291cmNlUGF0aCIsImRlZmF1bHRBY2Nlc3MiLCJBYnN0cmFjdFJlc291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQVVzQyxNQUFLQywyQkFBTCxDQUFpQztBQUNwRkMsTUFBQUEsTUFBTSxFQUFFLEtBRDRFO0FBRXBGQyxNQUFBQSxJQUFJLEVBQUU7QUFGOEUsS0FBakMsQzs7Z0VBU1UsTUFBS0YsMkJBQUwsQ0FBaUM7QUFDOUZDLE1BQUFBLE1BQU0sRUFBRSxLQURzRjtBQUU5RkMsTUFBQUEsSUFBSSxFQUFFO0FBRndGLEtBQWpDLEM7Ozs7Ozs7aUNBbEI5QztBQUNmLFdBQUtDLFlBQUwsR0FBb0Isd0JBQXBCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixPQUFyQjtBQUNIO0FBRUQ7Ozs7Ozs7O0VBTmtDQyw2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYnN0cmFjdFJlc291cmNlIGZyb20gJy4uL0Fic3RyYWN0UmVzb3VyY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0cyBleHRlbmRzIEFic3RyYWN0UmVzb3VyY2Uge1xuICAgIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VQYXRoID0gJy9wcm9kdWN0cy9hc3NvY2lhdGlvbnMnO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2Nlc3MgPSAnZ3Vlc3QnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHNpbmdsZSBwcm9kdWN0IGFzc29jaWF0aW9uXG4gICAgICogZS5nLiBgL3Byb2R1Y3RzL2Fzc29jaWF0aW9ucy9kaXNuZXlgLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQ6IChwcm9kdWN0QXNzb2NpYXRpb25TbHVnOiBzdHJpbmcpID0+IHZvaWQgPSB0aGlzLmNyZWF0ZU1ldGhvZEZyb21QYXJ0aWFsU3BlYyh7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhdGg6ICcve3NsdWd9JyxcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEdldCBhIHNpbmdsZSBwcm9kdWN0IGFzc29jaWF0aW9uIHR5cGU6IGFnZSwgYnJhbmQsIGNhdGVnb3J5LCBjb2xsZWN0aW9uXG4gICAgICogZS5nLiBgL3Byb2R1Y3RzL2Fzc29jaWF0aW9ucy9hZ2VgLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRCeVR5cGU6IChwcm9kdWN0QXNzb2NpYXRpb25UeXBlU2x1Zzogc3RyaW5nKSA9PiB2b2lkID0gdGhpcy5jcmVhdGVNZXRob2RGcm9tUGFydGlhbFNwZWMoe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXRoOiAnL3R5cGUve3NsdWd9JyxcbiAgICB9KTtcbn1cbiJdfQ==