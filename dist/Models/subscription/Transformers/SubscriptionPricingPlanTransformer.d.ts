import SubscriptionPricingPlan from '../SubscriptionPricingPlan';
import { APISubscriptionPricingPlan as APISubscriptionPricingPlanInterface } from '../../../Interfaces/subscription/SubscriptionPricingPlan';
import BaseTransformer from '../../../BaseTransformer';
import { Subscription as SubscriptionInterface } from '../../../Interfaces/subscription/Subscription';
export default class SubscriptionPricingPlanTransformer extends BaseTransformer {
    mapData(subscriptionPricingPlan: APISubscriptionPricingPlanInterface): SubscriptionPricingPlan;
    includeSubscription(subscriptionPricingPlan: APISubscriptionPricingPlanInterface): SubscriptionInterface | null;
}
