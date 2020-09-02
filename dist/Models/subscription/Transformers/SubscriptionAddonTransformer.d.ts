import BaseTransformer from '../../../BaseTransformer';
import SubscriptionAddonInterface from '../../../Interfaces/subscription/SubscriptionAddon';
import SubscriptionAddon from '../SubscriptionAddon';
import SubscriptionAddonPricingPlanInterface from '../../../Interfaces/subscription/SubscriptionAddonPricingPlan';
export default class SubscriptionAddonTransformer extends BaseTransformer {
    mapData(subscriptionAddon: SubscriptionAddonInterface): SubscriptionAddon;
    includeSubscriptionAddonPricingPlans(subscriptionAddon: SubscriptionAddonInterface): Array<SubscriptionAddonPricingPlanInterface> | null;
}
