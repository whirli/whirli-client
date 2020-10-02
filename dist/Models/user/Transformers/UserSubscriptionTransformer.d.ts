import BaseTransformer from '../../../BaseTransformer';
import UserSubscriptionInterface from '../../../Interfaces/user/UserSubscription';
import UserSubscription from '../UserSubscription';
import { Subscription as SubscriptionInterface } from '../../../Interfaces/subscription/Subscription';
import { SubscriptionPricingPlan as SubscriptionPricingPlanInterface } from '../../../Interfaces/subscription/SubscriptionPricingPlan';
import SubscriptionTierInterface from '../../../Interfaces/subscription/SubscriptionTier';
import UserSubscriptionAddonInterface from '../../../Interfaces/user/UserSubscriptionAddon';
export default class UserSubscriptionTransformer extends BaseTransformer {
    mapData(userSubscription: UserSubscriptionInterface): UserSubscription;
    includeSubscription(userSubscription: UserSubscriptionInterface): SubscriptionInterface | null;
    includeSubscriptionPricingPlan(userSubscription: UserSubscriptionInterface): SubscriptionPricingPlanInterface | null;
    includeSubscriptionTiers(userSubscription: UserSubscriptionInterface): Array<SubscriptionTierInterface> | null;
    includeActiveSubscriptionTier(userSubscription: UserSubscriptionInterface): SubscriptionTierInterface | null;
    includeAddons(userSubscription: UserSubscriptionInterface): Array<UserSubscriptionAddonInterface> | null;
}
