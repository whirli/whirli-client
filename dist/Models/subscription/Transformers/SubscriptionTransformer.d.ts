import Subscription from '../Subscription';
import SubscriptionPricingPlan from '../SubscriptionPricingPlan';
import { APISubscription as APISubscriptionInterface } from '../../../Interfaces/subscription/Subscription';
import BaseTransformer from '../../../BaseTransformer';
import SubscriptionTier from '../SubscriptionTier';
export default class SubscriptionTransformer extends BaseTransformer {
    mapData(subscription: APISubscriptionInterface): Subscription;
    includeSubscriptionPricingPlans(subscription: APISubscriptionInterface): Array<SubscriptionPricingPlan>;
    includeSubscriptionTiers(subscription: APISubscriptionInterface): Array<SubscriptionTier>;
}
