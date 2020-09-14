import BaseTransformer from '../../../BaseTransformer';
import UserSubscriptionInterface from '../../../Interfaces/user/UserSubscription';
import UserSubscription from '../UserSubscription';
import SubscriptionTransformer from '../../subscription/Transformers/SubscriptionTransformer';
import { Subscription as SubscriptionInterface } from '../../../Interfaces/subscription/Subscription';
import SubscriptionPricingPlanTransformer from '../../subscription/Transformers/SubscriptionPricingPlanTransformer';
import { SubscriptionPricingPlan as SubscriptionPricingPlanInterface } from '../../../Interfaces/subscription/SubscriptionPricingPlan';
import SubscriptionTierInterface from '../../../Interfaces/subscription/SubscriptionTier';
import SubscriptionTierTransformer from '../../subscription/Transformers/SubscriptionTierTransformer';
import SubscriptionAddonInterface from '../../../Interfaces/subscription/SubscriptionAddon';
import SubscriptionAddonTransformer from '../../subscription/Transformers/SubscriptionAddonTransformer';

export default class UserSubscriptionTransformer extends BaseTransformer {
    /**
     * Map a UserSubscription response
     *
     * @param userSubscription
     */
    mapData(userSubscription: UserSubscriptionInterface): UserSubscription {
        return new UserSubscription({
            id: userSubscription.id,
            stripeId: userSubscription.stripeId,
            startedAt: userSubscription.startedAt,
            endedAt: userSubscription.endedAt,
            createdAt: userSubscription.createdAt,
            updatedAt: userSubscription.updatedAt,
            reasonForEndId: userSubscription.reasonForEndId,
            pendingCancelAt: userSubscription.pendingCancelAt,
            suspendedAt: userSubscription.suspendedAt,
            resourceType: userSubscription.resourceType,
            hasDeliveryBooster: userSubscription.hasDeliveryBooster,
            statusId: userSubscription.statusId,
            user: userSubscription.user,
            subscription: this.includeSubscription(userSubscription) || undefined,
            subscriptionPricingPlan: this.includeSubscriptionPricingPlan(userSubscription) || undefined,
            subscriptionTiers: this.includeSubscriptionTiers(userSubscription) || undefined,
            activeSubscriptionTier: this.includeActiveSubscriptionTier(userSubscription) || undefined,
            addons: this.includeAddons(userSubscription) || undefined,
            highlights: userSubscription.highlights,
            totalSubscriptionCost: userSubscription.totalSubscriptionCost,
        });
    }

    includeSubscription(userSubscription: UserSubscriptionInterface): SubscriptionInterface | null {
        return this.item(userSubscription, 'subscription', new SubscriptionTransformer());
    }

    includeSubscriptionPricingPlan(
        userSubscription: UserSubscriptionInterface,
    ): SubscriptionPricingPlanInterface | null {
        return this.item(userSubscription, 'subscriptionPricingPlan', new SubscriptionPricingPlanTransformer());
    }

    includeSubscriptionTiers(userSubscription: UserSubscriptionInterface): Array<SubscriptionTierInterface> | null {
        return this.collection(userSubscription, 'subscriptionTiers', new SubscriptionTierTransformer());
    }

    includeActiveSubscriptionTier(
        userSubscription: UserSubscriptionInterface,
    ): Array<SubscriptionTierInterface> | null {
        return this.collection(userSubscription, 'activeSubscriptionTier', new SubscriptionTierTransformer());
    }

    includeAddons(userSubscription: UserSubscriptionInterface): Array<SubscriptionAddonInterface> | null {
        return this.collection(userSubscription, 'addons', new SubscriptionAddonTransformer());
    }
}
