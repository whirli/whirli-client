import User from '../user/User';
import Order from '../order/Order';
import GiftBasket from './GiftBasket';
import ShippingAddon from '../delivery/ShippingAddon';
import Checkout from '../checkout/Checkout';
export default interface Gift {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    placedAt?: Date | string;
    packedAt?: Date | string;
    dispatchedAt?: Date | string;
    completedAt?: Date | string;
    deletedAt?: Date | string;
    redeemedAt?: Date | string;
    expectedDeliveryDate?: Date | string;
    code?: string;
    value?: number;
    message?: string;
    giftStatusId?: number;
    guest?: boolean;
    allowEmailDiscountOffers?: boolean;
    withBasket?: boolean;
    toGiftRecipient?: boolean;
    stripeCustomerId?: string;
    billingPhone?: string;
    billingEmail?: string;
    billingFirstname?: string;
    billingLastname?: string;
    billingAddress?: string;
    billingAddressTwo?: string;
    billingAddressThree?: string;
    billingCity?: string;
    billingCounty?: string;
    billingState?: string;
    billingCountry?: string;
    billingZip?: string;
    shippingPhone?: string;
    shippingEmail?: string;
    shippingFirstname?: string;
    shippingLastname?: string;
    shippingAddress?: string;
    shippingAddressTwo?: string;
    shippingCity?: string;
    shippingCounty?: string;
    shippingState?: string;
    shippingCountry?: string;
    shippingZip?: string;
    resourceType?: string;
    dispatchBy?: Date | string;
    giftBasket?: GiftBasket | null;
    order?: Order | null;
    user?: User | null;
    redeemedBy?: User | null;
    shippingAddons?: Array<ShippingAddon>;
    statusId?: number;
    deliveryMethod?: string;
    hasReusablePackagingOptIn?: boolean;
    hasToys?: boolean;
    shippingFee?: number;
    checkout?: Checkout;
    shippingMethod?: string;
    shippingPreference?: string;
    notes?: string;
    currency?: string;
    contactEmail?: string;
    contactPhone?: string;
    meta?: string;
}
