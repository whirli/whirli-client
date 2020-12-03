import SubscriptionAddonPricingPlan from './SubscriptionAddonPricingPlan';
export default interface SubscriptionAddon {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    archivedAt?: Date | string;
    name?: string;
    stripeId?: string;
    subscriptionAddonPricingPlans?: Array<SubscriptionAddonPricingPlan>;
}
