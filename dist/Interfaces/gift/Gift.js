"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Gift = function Gift() {
  _classCallCheck(this, Gift);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "createdAt", void 0);

  _defineProperty(this, "completedAt", void 0);

  _defineProperty(this, "code", void 0);

  _defineProperty(this, "deletedAt", void 0);

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

  _defineProperty(this, "shippingCity", void 0);

  _defineProperty(this, "shippingCounty", void 0);

  _defineProperty(this, "shippingState", void 0);

  _defineProperty(this, "shippingCountry", void 0);

  _defineProperty(this, "shippingZip", void 0);

  _defineProperty(this, "contactEmail", void 0);

  _defineProperty(this, "contactPhone", void 0);

  _defineProperty(this, "trackingNo", void 0);

  _defineProperty(this, "dispatchedAt", void 0);

  _defineProperty(this, "redeemedAt", void 0);

  _defineProperty(this, "packedAt", void 0);

  _defineProperty(this, "placedAt", void 0);

  _defineProperty(this, "reference", void 0);

  _defineProperty(this, "meta", void 0);

  _defineProperty(this, "message", void 0);

  _defineProperty(this, "orderStatus", void 0);

  _defineProperty(this, "resourceType", void 0);

  _defineProperty(this, "value", void 0);

  _defineProperty(this, "allowEmailDiscountOffers", void 0);

  _defineProperty(this, "toGiftRecipient", void 0);

  _defineProperty(this, "stripeCustomerId", void 0);

  _defineProperty(this, "withBasket", void 0);

  _defineProperty(this, "guest", void 0);

  _defineProperty(this, "giftBasket", void 0);

  _defineProperty(this, "order", void 0);

  _defineProperty(this, "user", void 0);

  _defineProperty(this, "redeemedBy", void 0);

  _defineProperty(this, "giftStatusId", void 0);
};

exports["default"] = Gift;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9JbnRlcmZhY2VzL2dpZnQvR2lmdC50cyJdLCJuYW1lcyI6WyJHaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUdxQkEsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uL3VzZXIvVXNlcic7XG5pbXBvcnQgT3JkZXIgZnJvbSAnLi4vb3JkZXIvT3JkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaWZ0IHtcbiAgICBpZD86IHN0cmluZztcbiAgICBjcmVhdGVkQXQ/OiBEYXRlO1xuICAgIGNvbXBsZXRlZEF0PzogRGF0ZTtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIGRlbGV0ZWRBdD86IERhdGU7XG4gICAgdXBkYXRlZEF0PzogRGF0ZTtcbiAgICBzaGlwcGluZ01ldGhvZD86IHN0cmluZztcbiAgICBzaGlwcGluZ1ByZWZlcmVuY2U/OiBzdHJpbmc7XG4gICAgbm90ZXM/OiBzdHJpbmc7XG4gICAgY3VycmVuY3k/OiBzdHJpbmc7XG4gICAgYmlsbGluZ1Bob25lPzogc3RyaW5nO1xuICAgIGJpbGxpbmdFbWFpbD86IHN0cmluZztcbiAgICBiaWxsaW5nRmlyc3RuYW1lPzogc3RyaW5nO1xuICAgIGJpbGxpbmdMYXN0bmFtZT86IHN0cmluZztcbiAgICBiaWxsaW5nQWRkcmVzcz86IHN0cmluZztcbiAgICBiaWxsaW5nQWRkcmVzc1R3bz86IHN0cmluZztcbiAgICBiaWxsaW5nQWRkcmVzc1RocmVlPzogc3RyaW5nO1xuICAgIGJpbGxpbmdDaXR5Pzogc3RyaW5nO1xuICAgIGJpbGxpbmdDb3VudHk/OiBzdHJpbmc7XG4gICAgYmlsbGluZ1N0YXRlPzogc3RyaW5nO1xuICAgIGJpbGxpbmdDb3VudHJ5Pzogc3RyaW5nO1xuICAgIGJpbGxpbmdaaXA/OiBzdHJpbmc7XG4gICAgc2hpcHBpbmdQaG9uZT86IHN0cmluZztcbiAgICBzaGlwcGluZ0VtYWlsPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nRmlyc3RuYW1lPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nTGFzdG5hbWU/OiBzdHJpbmc7XG4gICAgc2hpcHBpbmdBZGRyZXNzPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nQWRkcmVzc1R3bz86IHN0cmluZztcbiAgICBzaGlwcGluZ0NpdHk/OiBzdHJpbmc7XG4gICAgc2hpcHBpbmdDb3VudHk/OiBzdHJpbmc7XG4gICAgc2hpcHBpbmdTdGF0ZT86IHN0cmluZztcbiAgICBzaGlwcGluZ0NvdW50cnk/OiBzdHJpbmc7XG4gICAgc2hpcHBpbmdaaXA/OiBzdHJpbmc7XG4gICAgY29udGFjdEVtYWlsPzogc3RyaW5nO1xuICAgIGNvbnRhY3RQaG9uZT86IHN0cmluZztcbiAgICB0cmFja2luZ05vPzogc3RyaW5nO1xuICAgIGRpc3BhdGNoZWRBdD86IHN0cmluZztcbiAgICByZWRlZW1lZEF0PzogRGF0ZTtcbiAgICBwYWNrZWRBdD86IERhdGU7XG4gICAgcGxhY2VkQXQ/OiBEYXRlO1xuICAgIHJlZmVyZW5jZT86IHN0cmluZztcbiAgICBtZXRhPzogc3RyaW5nO1xuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgb3JkZXJTdGF0dXM/OiBudW1iZXI7XG4gICAgcmVzb3VyY2VUeXBlPzogc3RyaW5nO1xuICAgIHZhbHVlPzogbnVtYmVyO1xuICAgIGFsbG93RW1haWxEaXNjb3VudE9mZmVycz86IGJvb2xlYW47XG4gICAgdG9HaWZ0UmVjaXBpZW50PzogYm9vbGVhbjtcbiAgICBzdHJpcGVDdXN0b21lcklkPzogc3RyaW5nO1xuICAgIHdpdGhCYXNrZXQ/OiBib29sZWFuO1xuICAgIGd1ZXN0Pzogc3RyaW5nO1xuICAgIC8vIGJlbG9uZ3MgdG9cbiAgICBnaWZ0QmFza2V0PzogbnVtYmVyO1xuICAgIG9yZGVyPzogT3JkZXI7XG4gICAgdXNlcj86IFVzZXI7XG4gICAgcmVkZWVtZWRCeT86IFVzZXI7XG4gICAgLy8gYWNlc3NvcnNcbiAgICBnaWZ0U3RhdHVzSWQ/OiBzdHJpbmc7XG59XG4iXX0=