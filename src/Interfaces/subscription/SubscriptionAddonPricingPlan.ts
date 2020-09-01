export type SubscriptionAddonPricingPlanIntervalLength = 1 | 6 | 12;

export interface APISubscriptionAddonPricingPlan {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    name?: string;
    stripe_id?: string;
    cost?: number;
    interval_length?: SubscriptionAddonPricingPlanIntervalLength;
    interval_unit?: string;
    archived_at?: Date | string | null;
    subscription_addon_id?: string;
}

export interface SubscriptionAddonPricingPlan {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name?: string;
    stripeId?: string;
    cost?: number;
    intervalLength?: SubscriptionAddonPricingPlanIntervalLength;
    intervalUnit?: string;
    archivedAt?: Date | string | null;
    subscriptionAddonId?: string;
}
