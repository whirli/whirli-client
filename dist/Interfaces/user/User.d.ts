import Order from '../order/Order';
import Stock from '../stock/Stock';
export default interface User {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    firstname?: string;
    lastname?: string;
    email?: string;
    emailVerifiedAt?: Date;
    statusId?: number;
    registrationStatusId?: number;
    stripeId?: string;
    residualChargesOptIn?: boolean;
    subscriptionCancellationTerms?: boolean;
    subscriptionCancellationCharges?: boolean;
    verifiedAt?: Date;
    resourceType?: string;
    orders?: Order[];
    stock?: Stock[];
}
