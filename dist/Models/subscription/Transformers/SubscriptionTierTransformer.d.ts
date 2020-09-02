import BaseTransformer from '../../../BaseTransformer';
import SubscriptionTierInterface from '../../../Interfaces/subscription/SubscriptionTier';
import SubscriptionTier from '../SubscriptionTier';
export default class SubscriptionTierTransformer extends BaseTransformer {
    mapData(subscriptionTier: SubscriptionTierInterface): SubscriptionTier;
}
