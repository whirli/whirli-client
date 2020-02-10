import Stock from '../stock/Stock';
import ReturnOrder from './ReturnOrder';
export default interface ReturnOrderLine {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    statusId?: number;
    isManual?: number;
    isDamaged?: number;
    meta?: string;
    rtrn?: ReturnOrder | null;
    stock?: Stock | null;
}
