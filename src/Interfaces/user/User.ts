import Order from '../order/Order';
import Stock from '../stock/Stock';
import { Basket } from '../basket/Basket';
import UserSubscription from './UserSubscription';
import Address from '../address/Address';
import ReturnOrder from '../return/ReturnOrder';
import PurchaseStock from '../stock/PurchaseStock';
import ProductList from '../product/ProductList';

interface Meta {
    daysUntilAvailable?: number;
    daysUntilCancel?: number;
}

export interface ChangeSubscriptionStatus {
    canChange: boolean;
    canChangeReason: string | null;
    meta?: Meta;
}

export interface CancelSubscriptionStatus {
    canCancel: boolean;
    canCancelMessage: string | null;
    meta?: Meta;
}

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
    reference?: string;
    resourceType?: string;
    highlights?: [];
    // has many
    orders?: Array<Order>;
    stock?: Array<Stock>;
    addresses?: Array<Address>;
    toybox?: Array<PurchaseStock>;
    lists?: Array<ProductList>;
    returnOrders?: Array<ReturnOrder>;
    activeBasket?: Array<Basket>;
    userSubscriptions?: Array<UserSubscription>;
    activeUserSubscription?: UserSubscription;
    activeReturnOrder?: ReturnOrder;
    // roles?: Array<Roles>
    // Accessors
    onFirstOrder?: boolean;
    toyboxTokens?: number;
    additionalTokens?: number;
    availableTokens?: number;
    maxTokens?: number;
    basketQuantity?: number;
    activeBasketTotalTokens?: number;
    balance?: number;
    changeSubscriptionStatus?: ChangeSubscriptionStatus;
    cancelSubscriptionStatus?: CancelSubscriptionStatus;
}
