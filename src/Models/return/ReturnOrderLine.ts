import Stock from '../stock/Stock';
import ReturnOrder from './ReturnOrder';

export default class ReturnOrderLine {
    constructor(
        id?: string,
        createdAt?: Date,
        updatedAt?: Date,
        statusId?: number,
        isManual?: number,
        isDamaged?: number,
        meta?: string,
        // belongs to
        rtrn?: ReturnOrder,
        stock?: Stock,
    ) {
        Object.assign(this, {
            id,
            createdAt,
            updatedAt,
            statusId,
            isManual,
            isDamaged,
            meta,
            // belongs to
            rtrn,
            stock,
        });
    }
}
