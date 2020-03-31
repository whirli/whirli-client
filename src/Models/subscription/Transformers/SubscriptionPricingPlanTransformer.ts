import SubscriptionPricingPlan from '../SubscriptionPricingPlan';
import { APISubscriptionPricingPlan as APISubscriptionPricingPlanInterface } from '../../../Interfaces/subscription/SubscriptionPricingPlan';
import BaseTransformer from '../../../BaseTransformer';

export default class SubscriptionPricingPlanTransformer extends BaseTransformer {
    /**
     * Map an subscription pricing plan response
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
            active: subscriptionPricingPlan.active,
            createdAt: subscriptionPricingPlan.created_at,
            updatedAt: subscriptionPricingPlan.updated_at,
        });
    }
}
