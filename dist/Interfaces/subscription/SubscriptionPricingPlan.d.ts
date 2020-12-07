import { SubscriptionIntervalLength, Subscription } from './Subscription';
export interface APISubscriptionPricingPlan {
    id?: string;
    stripe_id?: string;
    subscription_id?: string;
    name?: string;
    cost?: number;
    interval_unit?: string;
    interval_length?: SubscriptionIntervalLength;
    subscription?: Subscription;
    starting_subscription_tier?: number;
    active?: number;
    created_at?: Date;
    updated_at?: Date;
    can_change?: boolean;
    can_change_reason?: string;
}
export interface SubscriptionPricingPlan {
    id?: string;
    stripeId?: string;
    subscriptionId?: string;
    name?: string;
    cost?: number;
    intervalUnit?: string;
    intervalLength?: SubscriptionIntervalLength;
    subscription?: Subscription;
    startingSubscriptionTier?: number;
    active?: number;
    createdAt?: Date;
    updatedAt?: Date;
    canChange?: boolean;
    canChangeReason?: string;
}
