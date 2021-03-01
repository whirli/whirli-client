import Subscription from '../Subscription';
import SubscriptionPricingPlan from '../SubscriptionPricingPlan';
import { APISubscription as APISubscriptionInterface } from '../../../Interfaces/subscription/Subscription';
import SubscriptionPricingPlanTransformer from './SubscriptionPricingPlanTransformer';
import BaseTransformer from '../../../BaseTransformer';
import SubscriptionTier from '../SubscriptionTier';
import SubscriptionTierTransformer from './SubscriptionTierTransformer';

export default class SubscriptionTransformer extends BaseTransformer {
    /**
     * Map a subscription response
     *
     * @param subscription
     */
    mapData(subscription: APISubscriptionInterface): Subscription {
        return new Subscription({
            id: subscription.id,
            stripeId: subscription.stripe_id,
            name: subscription.name,
            subTitle: subscription.sub_title,
            credits: subscription.credits,
            allowanceDescription: subscription.allowance_description,
            creditsDescription: subscription.credits_description,
            iconFilename: subscription.icon_filename,
            recommended: subscription.recommended,
            active: subscription.active,
            createdAt: subscription.created_at,
            updatedAt: subscription.updated_at,
            waitSpots: subscription.wait_spots,
            // has many
            subscriptionPricingPlans: this.includeSubscriptionPricingPlans(subscription),
            subscriptionTiers: this.includeSubscriptionTiers(subscription),
        });
    }

    includeSubscriptionPricingPlans(subscription: APISubscriptionInterface): Array<SubscriptionPricingPlan> {
        return this.collection(subscription, 'subscription_pricing_plans', new SubscriptionPricingPlanTransformer());
    }

    includeSubscriptionTiers(subscription: APISubscriptionInterface): Array<SubscriptionTier> {
        return this.collection(subscription, 'subscription_pricing_plans', new SubscriptionTierTransformer());
    }
}
