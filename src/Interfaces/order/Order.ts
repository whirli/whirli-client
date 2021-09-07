import User from '../user/User';
import OrderLine from './OrderLine';
import Assignee from './Assignee';
import { Basket } from '../basket/Basket';

export default interface Order {
    id?: string;
    createdAt?: Date;
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
    shippingAddressThree?: string;
    shippingCity?: string;
    shippingCounty?: string;
    shippingState?: string;
    shippingCountry?: string;
    shippingZip?: string;
    contactEmail?: string;
    contactPhone?: string;
    trackingNo?: string;
    dispatchedAt?: string;
    onHoldPickingAt?: string;
    onHoldPackingAt?: string;
    reference?: string;
    placedAt?: Date;
    meta?: string;
    statusId?: number;
    resourceType?: string;
    onFirstOrder?: boolean;
    isFirstOrder?: boolean;
    deliveryMethod?: string;
    expectedDeliveryDate?: string;
    hasReusablePackagingOptIn?: boolean;
    weight?: number;
    shippingServiceId?: number;
    // belongs to
    user?: User | null;
    assignee?: Assignee | null;
    basket?: Basket | null;
    // has many
    lines?: OrderLine[];
    // accessors
    isGift?: boolean;
    tokensTotal?: number;
}
