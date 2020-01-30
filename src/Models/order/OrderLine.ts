import ProductVariant from '../product/ProductVariant';
import Order from './Order';

export default class OrderLine {
    constructor(
        id?: string,
        createdAt?: Date,
        updatedAt?: Date,
        isShipping?: boolean,
        isManual?: boolean,
        quantity?: number,
        lineTotal?: number,
        unitPrice?: number,
        unitQty?: number,
        discountTotal?: number,
        deliveryTotal?: number,
        taxTotal?: number,
        taxRate?: number,
        sku?: string,
        description?: string,
        option?: string,
        deletedAt?: Date,
        meta?: string,
        // belongs to
        order?: Order,
        productVariant?: ProductVariant,
    ) {
        Object.assign(this, {
            id,
            createdAt,
            updatedAt,
            isShipping,
            isManual,
            quantity,
            lineTotal,
            unitPrice,
            unitQty,
            discountTotal,
            deliveryTotal,
            taxTotal,
            taxRate,
            sku,
            description,
            option,
            deletedAt,
            meta,
            // belongs to
            order,
            productVariant,
        });
    }
}
