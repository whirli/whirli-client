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

  _defineProperty(this, "statusId", void 0);

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

  _defineProperty(this, "dispatchedAt", void 0);

  _defineProperty(this, "redeemedAt", void 0);

  _defineProperty(this, "packedAt", void 0);

  _defineProperty(this, "placedAt", void 0);

  _defineProperty(this, "meta", void 0);

  _defineProperty(this, "message", void 0);

  _defineProperty(this, "resourceType", void 0);

  _defineProperty(this, "value", void 0);

  _defineProperty(this, "allowEmailDiscountOffers", void 0);

  _defineProperty(this, "toGiftRecipient", void 0);

  _defineProperty(this, "stripeCustomerId", void 0);

  _defineProperty(this, "withBasket", void 0);

  _defineProperty(this, "guest", void 0);

  _defineProperty(this, "deliveryMethod", void 0);

  _defineProperty(this, "expectedDeliveryDate", void 0);

  _defineProperty(this, "giftBasket", void 0);

  _defineProperty(this, "order", void 0);

  _defineProperty(this, "user", void 0);

  _defineProperty(this, "redeemedBy", void 0);

  _defineProperty(this, "giftStatusId", void 0);
};

exports["default"] = Gift;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9JbnRlcmZhY2VzL2dpZnQvR2lmdC50cyJdLCJuYW1lcyI6WyJHaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUlxQkEsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uL3VzZXIvVXNlcic7XG5pbXBvcnQgT3JkZXIgZnJvbSAnLi4vb3JkZXIvT3JkZXInO1xuaW1wb3J0IHsgQmFza2V0IH0gZnJvbSAnLi4vYmFza2V0L0Jhc2tldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnQge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdD86IERhdGU7XG4gICAgY29tcGxldGVkQXQ/OiBEYXRlO1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgZGVsZXRlZEF0PzogRGF0ZTtcbiAgICB1cGRhdGVkQXQ/OiBEYXRlO1xuICAgIHN0YXR1c0lkPzogbnVtYmVyO1xuICAgIHNoaXBwaW5nTWV0aG9kPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nUHJlZmVyZW5jZT86IHN0cmluZztcbiAgICBub3Rlcz86IHN0cmluZztcbiAgICBjdXJyZW5jeT86IHN0cmluZztcbiAgICBiaWxsaW5nUGhvbmU/OiBzdHJpbmc7XG4gICAgYmlsbGluZ0VtYWlsPzogc3RyaW5nO1xuICAgIGJpbGxpbmdGaXJzdG5hbWU/OiBzdHJpbmc7XG4gICAgYmlsbGluZ0xhc3RuYW1lPzogc3RyaW5nO1xuICAgIGJpbGxpbmdBZGRyZXNzPzogc3RyaW5nO1xuICAgIGJpbGxpbmdBZGRyZXNzVHdvPzogc3RyaW5nO1xuICAgIGJpbGxpbmdBZGRyZXNzVGhyZWU/OiBzdHJpbmc7XG4gICAgYmlsbGluZ0NpdHk/OiBzdHJpbmc7XG4gICAgYmlsbGluZ0NvdW50eT86IHN0cmluZztcbiAgICBiaWxsaW5nU3RhdGU/OiBzdHJpbmc7XG4gICAgYmlsbGluZ0NvdW50cnk/OiBzdHJpbmc7XG4gICAgYmlsbGluZ1ppcD86IHN0cmluZztcbiAgICBzaGlwcGluZ1Bob25lPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nRW1haWw/OiBzdHJpbmc7XG4gICAgc2hpcHBpbmdGaXJzdG5hbWU/OiBzdHJpbmc7XG4gICAgc2hpcHBpbmdMYXN0bmFtZT86IHN0cmluZztcbiAgICBzaGlwcGluZ0FkZHJlc3M/OiBzdHJpbmc7XG4gICAgc2hpcHBpbmdBZGRyZXNzVHdvPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nQ2l0eT86IHN0cmluZztcbiAgICBzaGlwcGluZ0NvdW50eT86IHN0cmluZztcbiAgICBzaGlwcGluZ1N0YXRlPzogc3RyaW5nO1xuICAgIHNoaXBwaW5nQ291bnRyeT86IHN0cmluZztcbiAgICBzaGlwcGluZ1ppcD86IHN0cmluZztcbiAgICBjb250YWN0RW1haWw/OiBzdHJpbmc7XG4gICAgY29udGFjdFBob25lPzogc3RyaW5nO1xuICAgIGRpc3BhdGNoZWRBdD86IHN0cmluZztcbiAgICByZWRlZW1lZEF0PzogRGF0ZTtcbiAgICBwYWNrZWRBdD86IERhdGU7XG4gICAgcGxhY2VkQXQ/OiBEYXRlO1xuICAgIG1ldGE/OiBzdHJpbmc7XG4gICAgbWVzc2FnZT86IHN0cmluZztcbiAgICByZXNvdXJjZVR5cGU/OiBzdHJpbmc7XG4gICAgdmFsdWU/OiBudW1iZXI7XG4gICAgYWxsb3dFbWFpbERpc2NvdW50T2ZmZXJzPzogYm9vbGVhbjtcbiAgICB0b0dpZnRSZWNpcGllbnQ/OiBib29sZWFuO1xuICAgIHN0cmlwZUN1c3RvbWVySWQ/OiBzdHJpbmc7XG4gICAgd2l0aEJhc2tldD86IGJvb2xlYW47XG4gICAgZ3Vlc3Q/OiBib29sZWFuO1xuICAgIGRlbGl2ZXJ5TWV0aG9kPzogc3RyaW5nO1xuICAgIGV4cGVjdGVkRGVsaXZlcnlEYXRlPzogc3RyaW5nO1xuICAgIC8vIGJlbG9uZ3MgdG9cbiAgICBnaWZ0QmFza2V0PzogQmFza2V0IHwgbnVsbDtcbiAgICBvcmRlcj86IE9yZGVyIHwgbnVsbDtcbiAgICB1c2VyPzogVXNlciB8IG51bGw7XG4gICAgcmVkZWVtZWRCeT86IFVzZXIgfCBudWxsO1xuICAgIC8vIGFjZXNzb3JzXG4gICAgZ2lmdFN0YXR1c0lkPzogbnVtYmVyO1xufVxuIl19