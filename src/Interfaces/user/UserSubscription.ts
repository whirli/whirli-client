import User from './User';
import { Subscription } from '../subscription/Subscription';
import { SubscriptionPricingPlan } from '../subscription/SubscriptionPricingPlan';
import { SubscriptionTier } from '../subscription/SubscriptionTier';
import { SubscriptionAddon } from '../subscription/SubscriptionAddon';

export type UserSubscriptionReasonForEndIdType = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type UserSubscriptionStatusId = 0 | 1 | 2 | 3 | 4 | 5;

export interface APIUserSubscription {
    id?: string;
    stripe_id?: string;
    started_at?: Date | string | null;
    ended_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    reason_for_end_id?: UserSubscriptionReasonForEndIdType;
    pending_cancel_at?: Date | string | null;
    suspended_at?: Date | string | null;
    resource_type?: string;
    has_delivery_booster?: boolean;
    status_id?: UserSubscriptionStatusId;
    // When loaded Relationships
    user?: User;
    subscription?: Subscription;
    subscription_pricing_plan?: SubscriptionPricingPlan;
    subscription_tiers?: Array<SubscriptionTier>;
    active_subscription_tier?: SubscriptionTier;
    addons?: Array<SubscriptionAddon>;
    highlights?: Array<any>;
    // Accessors
    total_subscription_cost?: number;
}

export interface UserSubscription {
    id?: string;
    stripeId?: string;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reasonForEndId?: UserSubscriptionReasonForEndIdType;
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
