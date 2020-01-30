"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Order = function Order() {
  _classCallCheck(this, Order);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "createdAt", void 0);

  _defineProperty(this, "updatedAt", void 0);

  _defineProperty(this, "shippingMethod", void 0);

  _defineProperty(this, "shippingPreference", void 0);

  _defineProperty(this, "notes", void 0);

  _defineProperty(this, "currency", void 0);

  _defineProperty(this, "billingPhone", void 0);

  _defineProperty(this, "billingEmail", void 0);

  _defineProperty(this, "billingFirstname", void 0);

  _defineProperty(this, "billingLastname", void 0);

  _defineProperty(this, "billingAddress", void 0);

  _defineProperty(this, "billingAddressTwo", void 0);

  _defineProperty(this, "billingAddressThree", void 0);

  _defineProperty(this, "billingCity", void 0);

  _defineProperty(this, "billingCounty", void 0);

  _defineProperty(this, "billingState", void 0);

  _defineProperty(this, "billingCountry", void 0);

  _defineProperty(this, "billingZip", void 0);

  _defineProperty(this, "shippingPhone", void 0);

  _defineProperty(this, "shippingEmail", void 0);

  _defineProperty(this, "shippingFirstname", void 0);

  _defineProperty(this, "shippingLastname", void 0);

  _defineProperty(this, "shippingAddress", void 0);

  _defineProperty(this, "shippingAddressTwo", void 0);

  _defineProperty(this, "shippingAddressThree", void 0);

  _defineProperty(this, "shippingCity", void 0);

  _defineProperty(this, "shippingCounty", void 0);

  _defineProperty(this, "shippingState", void 0);

  _defineProperty(this, "shippingCountry", void 0);

  _defineProperty(this, "shippingZip", void 0);

  _defineProperty(this, "contactEmail", void 0);

  _defineProperty(this, "contactPhone", void 0);

  _defineProperty(this, "trackingNo", void 0);

  _defineProperty(this, "dispatchedAt", void 0);

  _defineProperty(this, "reference", void 0);

  _defineProperty(this, "placedAt", void 0);

  _defineProperty(this, "meta", void 0);

  _defineProperty(this, "orderStatus", void 0);

  _defineProperty(this, "resourceType", 'orders');

  _defineProperty(this, "user", void 0);

  _defineProperty(this, "lines", void 0);
};

exports["default"] = Order;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9JbnRlcmZhY2VzL29yZGVyL09yZGVyLnRzIl0sIm5hbWVzIjpbIk9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQXdDRixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vdXNlci9Vc2VyJztcbmltcG9ydCBPcmRlckxpbmUgZnJvbSAnLi9PcmRlckxpbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgY3JlYXRlZEF0PzogRGF0ZTtcbiAgICB1cGRhdGVkQXQ/OiBEYXRlO1xuICAgIHNoaXBwaW5nTWV0aG9kPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nUHJlZmVyZW5jZT86IHN0cmluZztcbiAgICBub3Rlcz86IHN0cmluZztcbiAgICBjdXJyZW5jeT86IHN0cmluZztcbiAgICBiaWxsaW5nUGhvbmU/OiBzdHJpbmc7XG4gICAgYmlsbGluZ0VtYWlsPzogc3RyaW5nO1xuICAgIGJpbGxpbmdGaXJzdG5hbWU/OiBzdHJpbmc7XG4gICAgYmlsbGluZ0xhc3RuYW1lPzogc3RyaW5nO1xuICAgIGJpbGxpbmdBZGRyZXNzPzogc3RyaW5nO1xuICAgIGJpbGxpbmdBZGRyZXNzVHdvPzogc3RyaW5nO1xuICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU/OiBzdHJpbmc7XG4gICAgYmlsbGluZ0NpdHk/OiBzdHJpbmc7XG4gICAgYmlsbGluZ0NvdW50eT86IHN0cmluZztcbiAgICBiaWxsaW5nU3RhdGU/OiBzdHJpbmc7XG4gICAgYmlsbGluZ0NvdW50cnk/OiBzdHJpbmc7XG4gICAgYmlsbGluZ1ppcD86IHN0cmluZztcbiAgICBzaGlwcGluZ1Bob25lPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nRW1haWw/OiBzdHJpbmc7XG4gICAgc2hpcHBpbmdGaXJzdG5hbWU/OiBzdHJpbmc7XG4gICAgc2hpcHBpbmdMYXN0bmFtZT86IHN0cmluZztcbiAgICBzaGlwcGluZ0FkZHJlc3M/OiBzdHJpbmc7XG4gICAgc2hpcHBpbmdBZGRyZXNzVHdvPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nQWRkcmVzc1RocmVlPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nQ2l0eT86IHN0cmluZztcbiAgICBzaGlwcGluZ0NvdW50eT86IHN0cmluZztcbiAgICBzaGlwcGluZ1N0YXRlPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nQ291bnRyeT86IHN0cmluZztcbiAgICBzaGlwcGluZ1ppcD86IHN0cmluZztcbiAgICBjb250YWN0RW1haWw/OiBzdHJpbmc7XG4gICAgY29udGFjdFBob25lPzogc3RyaW5nO1xuICAgIHRyYWNraW5nTm8/OiBzdHJpbmc7XG4gICAgZGlzcGF0Y2hlZEF0Pzogc3RyaW5nO1xuICAgIHJlZmVyZW5jZT86IHN0cmluZztcbiAgICBwbGFjZWRBdD86IERhdGU7XG4gICAgbWV0YT86IHN0cmluZztcbiAgICBvcmRlclN0YXR1cz86IG51bWJlcjtcbiAgICByZXNvdXJjZVR5cGUgPSAnb3JkZXJzJztcbiAgICAvLyBiZWxvbmdzIHRvXG4gICAgdXNlcj86IFVzZXI7XG4gICAgLy8gaGFzIG1hbnlcbiAgICBsaW5lcz86IE9yZGVyTGluZVtdO1xufVxuIl19