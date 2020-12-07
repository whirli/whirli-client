import SubscriptionPricingPlan from '../SubscriptionPricingPlan';
import { APISubscriptionPricingPlan as APISubscriptionPricingPlanInterface } from '../../../Interfaces/subscription/SubscriptionPricingPlan';
import BaseTransformer from '../../../BaseTransformer';
import { Subscription as SubscriptionInterface } from '../../../Interfaces/subscription/Subscription';
import SubscriptionTransformer from './SubscriptionTransformer';

export default class SubscriptionPricingPlanTransformer extends BaseTransformer {
    /**
     * Map a subscription pricing plan response
     *
     * @param subscriptionPricingPlan
     */
    mapData(subscriptionPricingPlan: APISubscriptionPricingPlanInterface): SubscriptionPricingPlan {
        return new SubscriptionPricingPlan({
            id: subscriptionPricingPlan.id,
            stripeId: subscriptionPricingPlan.stripe_id,
            subscriptionId: subscriptionPricingPlan.subscription_id,
            name: subscriptionPricingPlan.name,
            cost: subscriptionPricingPlan.cost,
            intervalUnit: subscriptionPricingPlan.interval_unit,
            intervalLength: subscriptionPricingPlan.interval_length,
            startingSubscriptionTier: subscriptionPricingPlan.starting_subscription_tier,
            subscription: this.includeSubscription(subscriptionPricingPlan) || undefined,
            active: subscriptionPricingPlan.active,
            createdAt: subscriptionPricingPlan.created_at,
            updatedAt: subscriptionPricingPlan.updated_at,
            canChange: subscriptionPricingPlan.can_change,
            canChangeReason: subscriptionPricingPlan.can_change_reason,
        });
    }

    includeSubscription(subscriptionPricingPlan: APISubscriptionPricingPlanInterface): SubscriptionInterface | null {
        return this.item(subscriptionPricingPlan, 'subscription', new SubscriptionTransformer());
    }
}
