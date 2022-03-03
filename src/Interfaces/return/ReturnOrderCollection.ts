import Address from '../address/Address';
import ReturnOrder from './ReturnOrder';

export default interface ReturnOrderCollection {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    date?: string;
    timeSlotId?: number;
    boxesToCollect?: number;
    notificationEmail?: string;
    // belongs to
    returnOrder?: ReturnOrder | null;
    address?: Address | null;
}
