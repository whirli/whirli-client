import { SubscriptionAddonPricingPlan } from './SubscriptionAddonPricingPlan';
export interface APISubscriptionAddon {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    archived_at?: Date | string | null;
    name?: string;
    stripe_id?: string;
    subscription_addon_pricing_plans?: Array<SubscriptionAddonPricingPlan>;
}
export interface SubscriptionAddon {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    archivedAt?: Date | string;
    name?: string;
    stripeId?: string;
    subscriptionAddonPricingPlans?: Array<SubscriptionAddonPricingPlan>;
}
