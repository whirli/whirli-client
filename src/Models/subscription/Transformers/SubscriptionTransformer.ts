import Subscription from '../Subscription';
import SubscriptionPricingPlan from '../SubscriptionPricingPlan';
import { APISubscription as APISubscriptionInterface } from '../../../Interfaces/subscription/Subscription';
import SubscriptionPricingPlanTransformer from './SubscriptionPricingPlanTransformer';
import BaseTransformer from '../../../BaseTransformer';

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
            // has many
            pricingPlans: this.includePricingPlans(subscription),
        });
    }

    includePricingPlans(subscription: APISubscriptionInterface): Array<SubscriptionPricingPlan> {
        return this.collection(subscription, 'subscription_pricing_plans', new SubscriptionPricingPlanTransformer());
    }
}
