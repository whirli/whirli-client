export type SubscriptionTierOrder = 1 | 2 | 3 | 4;
export type SubscriptionTierAge = 0 | 1 | 2 | 3;

export default interface SubscriptionTier {
    id?: string;
    subscriptionId?: string;
    order?: SubscriptionTierOrder;
    tokenAmount?: number;
    ageUnit?: string;
    age?: SubscriptionTierAge;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
