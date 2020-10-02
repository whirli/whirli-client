import BaseTransformer from '../../../BaseTransformer';
import UserSubscriptionAddonInterface from '../../../Interfaces/user/UserSubscriptionAddon';
import UserSubscriptionAddon from '../UserSubscriptionAddon';
import SubscriptionAddonPricingPlanInterface from '../../../Interfaces/subscription/SubscriptionAddonPricingPlan';
export default class UserSubscriptionAddonTransformer extends BaseTransformer {
    mapData(userSubscriptionAddon: UserSubscriptionAddonInterface): UserSubscriptionAddon;
    includeSubscriptionAddonPricingPlan(userSubscriptionAddon: UserSubscriptionAddonInterface): SubscriptionAddonPricingPlanInterface | null;
}
