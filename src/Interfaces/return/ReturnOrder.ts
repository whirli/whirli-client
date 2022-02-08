import User from '../user/User';
import ReturnOrderLine from './ReturnOrderLine';
import ShippingAddon from '../delivery/ShippingAddon';

export default interface ReturnOrder {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    statusId?: number;
    subTotal?: number;
    deliveryTotal?: number;
    discountTotal?: number;
    taxTotal?: number;
    orderTotal?: number;
    shippingMethod?: string;
    shippingPreference?: string;
    currency?: string;
    vatNo?: string;
    reference?: string;
    contactEmail?: string;
    contactPhone?: string;
    trackingNumber?: string;
    conversion?: number;
    meta?: string;
    notes?: string;
    placedAt?: Date;
    dispatchedAt?: Date;
    receivedAt?: Date;
    processedAt?: Date;
    resourceType?: string;
    // belongs to
    user?: User | null;
    // belongs to many
    shippingAddons?: ShippingAddon[];
    // has many
    returnOrderLines?: ReturnOrderLine[];
}
