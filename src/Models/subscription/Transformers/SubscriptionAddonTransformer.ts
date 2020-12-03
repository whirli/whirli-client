import BaseTransformer from '../../../BaseTransformer';
import SubscriptionAddonInterface from '../../../Interfaces/subscription/SubscriptionAddon';
import SubscriptionAddon from '../SubscriptionAddon';
import SubscriptionAddonPricingPlanInterface from '../../../Interfaces/subscription/SubscriptionAddonPricingPlan';
import SubscriptionAddonPricingPlanTransformer from './SubscriptionAddonPricingPlanTransformer';

export default class SubscriptionAddonTransformer extends BaseTransformer {
    /**
     * Map a subscription addon response
     *
     * @param subscriptionAddon
     */
    mapData(subscriptionAddon: SubscriptionAddonInterface): SubscriptionAddon {
        return new SubscriptionAddon({
            id: subscriptionAddon.id,
            createdAt: subscriptionAddon.createdAt,
            updatedAt: subscriptionAddon.updatedAt,
            archivedAt: subscriptionAddon.archivedAt,
            name: subscriptionAddon.name,
            stripeId: subscriptionAddon.stripeId,
            subscriptionAddonPricingPlans: this.includeSubscriptionAddonPricingPlans(subscriptionAddon) || undefined,
        });
    }

    includeSubscriptionAddonPricingPlans(
        subscriptionAddon: SubscriptionAddonInterface,
    ): Array<SubscriptionAddonPricingPlanInterface> | null {
        return this.collection(
            subscriptionAddon,
            'subscriptionAddonPricingPlans',
            new SubscriptionAddonPricingPlanTransformer(),
        );
    }
}
