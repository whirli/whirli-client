import BaseTransformer from '../../../BaseTransformer';
import SubscriptionAddonPricingPlanInterface from '../../../Interfaces/subscription/SubscriptionAddonPricingPlan';
import SubscriptionAddonPricingPlan from '../SubscriptionAddonPricingPlan';

export default class SubscriptionAddonPricingPlanTransformer extends BaseTransformer {
    /**
     * Map a subscription pricing plan response
     *
     * @param subscriptionAddonPricingPlan
     */
    mapData(subscriptionAddonPricingPlan: SubscriptionAddonPricingPlanInterface): SubscriptionAddonPricingPlan {
        return new SubscriptionAddonPricingPlan({
            id: subscriptionAddonPricingPlan.id,
            createdAt: subscriptionAddonPricingPlan.createdAt,
            updatedAt: subscriptionAddonPricingPlan.updatedAt,
            name: subscriptionAddonPricingPlan.name,
            stripeId: subscriptionAddonPricingPlan.stripeId,
            cost: subscriptionAddonPricingPlan.cost,
            intervalLength: subscriptionAddonPricingPlan.intervalLength,
            intervalUnit: subscriptionAddonPricingPlan.intervalUnit,
            archivedAt: subscriptionAddonPricingPlan.archivedAt,
            subscriptionAddonId: subscriptionAddonPricingPlan.subscriptionAddonId,
        });
    }
}
