import SubscriptionTierInterface from '../../Interfaces/subscription/SubscriptionTier';

export default class SubscriptionTier {
    constructor(parameters: SubscriptionTierInterface) {
        Object.assign(this, parameters);
    }
}
