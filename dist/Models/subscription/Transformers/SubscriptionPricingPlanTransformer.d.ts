import SubscriptionPricingPlan from '../SubscriptionPricingPlan';
import { APISubscriptionPricingPlan as APISubscriptionPricingPlanInterface } from '../../../Interfaces/subscription/SubscriptionPricingPlan';
import BaseTransformer from '../../../BaseTransformer';
export default class SubscriptionPricingPlanTransformer extends BaseTransformer {
    mapData(subscriptionPricingPlan: APISubscriptionPricingPlanInterface): SubscriptionPricingPlan;
}
