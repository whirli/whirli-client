import Order from '../order/Order';
import Stock from '../stock/Stock';
import { Basket } from '../basket/Basket';
import UserSubscription, { UserSubscriptionStatusId } from './UserSubscription';
import Address from '../address/Address';
import ReturnOrder from '../return/ReturnOrder';
import PurchaseStock from '../stock/PurchaseStock';
import ProductList from '../product/ProductList';
import WaitSpot from '../waitspot/WaitSpot';
import Role from '../role/Role';
import Review from '../review/Review';
import MyPlaytime from '../myPlaytime/MyPlaytime';
import Gift from '../gift/Gift';
import UserTypesHistory from './UserTypesHistory';
import ChildProfile from './ChildProfile';
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
    color?: string;
    highlights?: [];
    orders?: Array<Order>;
    stock?: Array<Stock>;
    addresses?: Array<Address>;
    toybox?: Array<PurchaseStock>;
    lists?: Array<ProductList>;
    myPlaytime?: MyPlaytime;
    waitSpots?: Array<WaitSpot>;
    returnOrders?: Array<ReturnOrder>;
    activeBasket?: Array<Basket>;
    userSubscriptions?: Array<UserSubscription>;
    activeUserSubscriptions?: Array<UserSubscription>;
    activeUserSubscriptionStatusId?: UserSubscriptionStatusId;
    activeUserSubscriptionPlan?: string;
    activeReturnOrder?: ReturnOrder;
    roles?: Array<Role>;
    waccRole?: string;
    reviews?: Array<Review>;
    typeHistory?: Array<UserTypesHistory>;
    childProfiles?: Array<ChildProfile>;
    assignedOrder?: Order;
    assignedGift?: Gift;
    onFirstOrder?: boolean;
    toyboxTokens?: number;
    additionalTokens?: number;
    availableTokens?: number;
    subscriptionTokens?: number;
    maxTokens?: number;
    basketQuantity?: number;
    activeBasketTotalTokens?: number;
    balance?: number;
    changeSubscriptionStatus?: ChangeSubscriptionStatus;
    cancelSubscriptionStatus?: CancelSubscriptionStatus;
    notes?: string;
    assignedItem?: Order | Gift;
    canDowngradeFrom?: Date | string | null;
    oldestUserSubscription?: UserSubscription | null;
    oldestUserSubscriptionStart?: Date | string | null;
    currentActiveUserSubscriptionPeriodStart?: Date | string | null;
    currentActiveUserSubscriptionPeriodEnd?: Date | string | null;
    typeId?: number;
    referredUsers?: Array<ReferredUsersInterface>;
    referringCode?: string | null;
}
export interface ReferredUsersInterface extends User {
    creditEarned?: number;
}
export {};
