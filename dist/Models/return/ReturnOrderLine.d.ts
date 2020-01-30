import Stock from '../stock/Stock';
import ReturnOrder from './ReturnOrder';
export default class ReturnOrderLine {
    constructor(id?: string, createdAt?: Date, updatedAt?: Date, statusId?: number, isManual?: number, isDamaged?: number, meta?: string, rtrn?: ReturnOrder, stock?: Stock);
}