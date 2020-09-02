import BaseTransformer from '../../../BaseTransformer';
import SubscriptionTierInterface from '../../../Interfaces/subscription/SubscriptionTier';
import SubscriptionTier from '../SubscriptionTier';

export default class SubscriptionTierTransformer extends BaseTransformer {
    mapData(subscriptionTier: SubscriptionTierInterface): SubscriptionTier {
        return new SubscriptionTier({
            id: subscriptionTier.id,
            subscriptionId: subscriptionTier.subscriptionId,
            order: subscriptionTier.order,
            tokenAmount: subscriptionTier.tokenAmount,
            ageUnit: subscriptionTier.ageUnit,
            age: subscriptionTier.age,
            createdAt: subscriptionTier.createdAt,
            updatedAt: subscriptionTier.updatedAt,
        });
    }
}
