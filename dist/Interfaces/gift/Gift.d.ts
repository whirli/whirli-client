import User from '../user/User';
import Order from '../order/Order';
import { Basket } from '../basket/Basket';
export default class Gift {
    id?: string;
    createdAt?: Date;
    completedAt?: Date;
    code?: string;
    deletedAt?: Date;
    updatedAt?: Date;
    shippingMethod?: string;
    shippingPreference?: string;
    notes?: string;
    currency?: string;
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
    contactEmail?: string;
    contactPhone?: string;
    trackingNo?: string;
    dispatchedAt?: string;
    redeemedAt?: Date;
    packedAt?: Date;
    placedAt?: Date;
    reference?: string;
    meta?: string;
    message?: string;
    orderStatus?: number;
    resourceType?: string;
    value?: number;
    allowEmailDiscountOffers?: boolean;
    toGiftRecipient?: boolean;
    stripeCustomerId?: string;
    withBasket?: boolean;
    guest?: string;
    giftBasket?: Basket;
    order?: Order;
    user?: User;
    redeemedBy?: User;
    giftStatusId?: string;
}
