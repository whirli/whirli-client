import User from '../user/User';
import ReturnOrderLine from './ReturnOrderLine';

export default class ReturnOrder {
    constructor(
        id?: string,
        createdAt?: Date,
        updatedAt?: Date,
        statusId?: number,
        subTotal?: number,
        deliveryTotal?: number,
        discountTotal?: number,
        taxTotal?: number,
        orderTotal?: number,
        shippingMethod?: string,
        shippingPreference?: string,
        currency?: string,
        vatNo?: string,
        reference?: string,
        contactEmail?: string,
        contactPhone?: string,
        trackingNumber?: string,
        conversion?: number,
        meta?: string,
        notes?: string,
        placedAt?: Date,
        dispatchedAt?: Date,
        receivedAt?: Date,
        resourceType = 'returns',
        // belongs to
        user?: User,
        // has many
        returnOrderLines?: ReturnOrderLine[],
    ) {
        Object.assign(this, {
            id,
            createdAt,
            updatedAt,
            statusId,
            subTotal,
            deliveryTotal,
            discountTotal,
            taxTotal,
            orderTotal,
            shippingMethod,
            shippingPreference,
            currency,
            vatNo,
            reference,
            contactEmail,
            contactPhone,
            trackingNumber,
            conversion,
            meta,
            notes,
            placedAt,
            dispatchedAt,
            receivedAt,
            resourceType,
            // belongs to
            user,
            // has many
            returnOrderLines,
        });
    }
}
