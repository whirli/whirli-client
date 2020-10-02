import BaseTransformer from '../../../BaseTransformer';
import UserSubscriptionAddonInterface from '../../../Interfaces/user/UserSubscriptionAddon';
import UserSubscriptionAddon from '../UserSubscriptionAddon';
import SubscriptionAddonPricingPlanInterface from '../../../Interfaces/subscription/SubscriptionAddonPricingPlan';
import SubscriptionAddonPricingPlanTransformer from '../../subscription/Transformers/SubscriptionAddonPricingPlanTransformer';

export default class UserSubscriptionAddonTransformer extends BaseTransformer {
    /**
     * Map a UserSubscription response
     *
     * @param userSubscriptionAddon
     */
    mapData(userSubscriptionAddon: UserSubscriptionAddonInterface): UserSubscriptionAddon {
        return new UserSubscriptionAddon({
            id: userSubscriptionAddon.id,
            createdAt: userSubscriptionAddon.createdAt,
            updatedAt: userSubscriptionAddon.updatedAt,
            userSubscriptionId: userSubscriptionAddon.userSubscriptionId,
            subscriptionAddonPricingPlanId: userSubscriptionAddon.subscriptionAddonPricingPlanId,
            startedAt: userSubscriptionAddon.startedAt,
            endedAt: userSubscriptionAddon.endedAt,
            subscriptionAddonPricingPlan: this.includeSubscriptionAddonPricingPlan(userSubscriptionAddon) || undefined,
        });
    }

    includeSubscriptionAddonPricingPlan(
        userSubscriptionAddon: UserSubscriptionAddonInterface,
    ): SubscriptionAddonPricingPlanInterface | null {
        return this.item(
            userSubscriptionAddon,
            'subscriptionAddonPricingPlan',
            new SubscriptionAddonPricingPlanTransformer(),
        );
    }
}
