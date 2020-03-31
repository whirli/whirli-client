import Subscription from '../Subscription';
import SubscriptionPricingPlan from '../SubscriptionPricingPlan';
import { APISubscription as APISubscriptionInterface } from '../../../Interfaces/subscription/Subscription';
import BaseTransformer from '../../../BaseTransformer';
export default class SubscriptionTransformer extends BaseTransformer {
    mapData(subscription: APISubscriptionInterface): Subscription;
    includePricingPlans(subscription: APISubscriptionInterface): Array<SubscriptionPricingPlan>;
}
