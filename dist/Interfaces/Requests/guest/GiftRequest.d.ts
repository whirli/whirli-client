export interface GiftCreateRequest {
    value?: number;
    withBasket?: boolean;
    productListId?: string;
}
export interface GiftUpdateRequest {
    value?: number;
    toGiftRecipient: boolean | null;
    shippingFirstname: string | null;
    shippingLastname: string | null;
    shippingEmail: string | null;
    shippingAddress: string | null;
    shippingAddressTwo: string | null;
    shippingCity: string | null;
    shippingZip: string | null;
    message: string | null;
    shippingAddonId: string;
    nominatedDeliveryDate: Date | null;
    electronicDeliveryDate: Date | null;
    withBasket?: boolean;
    productListId: string;
    billingFirstname: string | null;
    billingLastname: string | null;
    billingEmail: string | null;
    guestToken: string;
}
export interface GiftPayRequest extends GiftUpdateRequest {
    stripeToken: string;
    giftingTerms: string;
    discountCode: string | null;
    idempotencyKey: string;
}
