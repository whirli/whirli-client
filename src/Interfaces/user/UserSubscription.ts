import User from './User';
import { Subscription } from '../subscription/Subscription';
import { SubscriptionPricingPlan } from '../subscription/SubscriptionPricingPlan';
import { SubscriptionTier } from '../subscription/SubscriptionTier';
import { SubscriptionAddon } from '../subscription/SubscriptionAddon';

export type UserSubscriptionStatusId = 0 | 1 | 2 | 3 | 4 | 5;

export interface UserSubscription {
    id?: string;
    stripeId?: string;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reasonForEndId?: number;
    pendingCancelAt?: Date | string | null;
    suspendedAt?: Date | string | null;
    resourceType?: string;
    hasDeliveryBooster?: boolean;
    statusId?: UserSubscriptionStatusId;
    // When loaded Relationships
    user?: User;
    subscription?: Subscription;
    subscriptionPricingPlan?: SubscriptionPricingPlan;
    subscriptionTiers?: Array<SubscriptionTier>;
    activeSubscriptionTier?: SubscriptionTier;
    addons?: Array<SubscriptionAddon>;
    highlights?: Array<any>;
    // Accessors
    totalSubscriptionCost?: number;
}
