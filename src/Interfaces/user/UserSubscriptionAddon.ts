import SubscriptionAddonPricingPlan from '../subscription/SubscriptionAddonPricingPlan';

export default interface UserSubscriptionAddon {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userSubscriptionId?: number;
    subscriptionAddonPricingPlanId?: number;
    startedAt?: Date | string | null;
    endedAt?: Date | string | null;
    subscriptionAddonPricingPlan?: SubscriptionAddonPricingPlan;
}
