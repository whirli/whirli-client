import User from './User';
import { Subscription } from '../subscription/Subscription';
import { SubscriptionPricingPlan } from '../subscription/SubscriptionPricingPlan';
import SubscriptionTier from '../subscription/SubscriptionTier';
import SubscriptionAddon from '../subscription/SubscriptionAddon';
export declare type UserSubscriptionStatusId = 0 | 1 | 2 | 3 | 4 | 5;
export default interface UserSubscription {
    id?: string;
    stripeId?: string;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reasonForEndId?: number | null;
    pendingCancelAt?: Date | string | null;
    suspendedAt?: Date | string | null;
    resourceType?: string;
    hasDeliveryBooster?: boolean;
    statusId?: UserSubscriptionStatusId;
    user?: User;
    subscription?: Subscription;
    subscriptionPricingPlan?: SubscriptionPricingPlan;
    subscriptionTiers?: Array<SubscriptionTier>;
    activeSubscriptionTier?: SubscriptionTier;
    addons?: Array<SubscriptionAddon>;
    highlights?: Array<any>;
    totalSubscriptionCost?: number;
}