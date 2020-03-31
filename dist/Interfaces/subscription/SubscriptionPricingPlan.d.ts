export interface APISubscriptionPricingPlan {
    id?: string;
    stripe_id?: string;
    subscription_id?: string;
    name?: string;
    cost?: number;
    interval_unit?: string;
    interval_length?: number;
    starting_subscription_tier?: number;
    active?: number;
    created_at?: Date;
    updated_at?: Date;
}
export interface SubscriptionPricingPlan {
    id?: string;
    stripeId?: string;
    subscriptionId?: string;
    name?: string;
    cost?: number;
    intervalUnit?: string;
    intervalLength?: number;
    startingSubscriptionTier?: number;
    active?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
