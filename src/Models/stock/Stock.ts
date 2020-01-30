import ProductVariant from '../product/ProductVariant';
import ReturnOrderLine from '../return/ReturnOrderLine';
import User from '../user/User';

export default class Stock {
    constructor(
        id?: string,
        createdAt?: Date,
        updatedAt?: Date,
        statusId?: number,
        // belongs to
        productVariant?: ProductVariant,
        user?: User,
        // has many
        returnOrderLines?: ReturnOrderLine[],
    ) {
        Object.assign(this, {
            id,
            createdAt,
            updatedAt,
            statusId,
            productVariant,
            user,
            returnOrderLines,
        });
    }
}
