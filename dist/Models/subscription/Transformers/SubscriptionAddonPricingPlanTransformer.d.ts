import BaseTransformer from '../../../BaseTransformer';
import SubscriptionAddonPricingPlanInterface from '../../../Interfaces/subscription/SubscriptionAddonPricingPlan';
import SubscriptionAddonPricingPlan from '../SubscriptionAddonPricingPlan';
export default class SubscriptionAddonPricingPlanTransformer extends BaseTransformer {
    mapData(subscriptionAddonPricingPlan: SubscriptionAddonPricingPlanInterface): SubscriptionAddonPricingPlan;
}
