export declare type SubscriptionAddonPricingPlanIntervalLength = 1 | 6 | 12;
export default interface SubscriptionAddonPricingPlan {
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