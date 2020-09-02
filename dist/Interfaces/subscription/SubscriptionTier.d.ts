export declare type SubscriptionTierOrder = 1 | 2 | 3 | 4;
export declare type SubscriptionTierAge = 0 | 1 | 2 | 3;
export interface SubscriptionTier {
    id?: string;
    subscriptionId?: string;
    order?: SubscriptionTierOrder;
    tokenAmount?: number;
    ageUnit?: string;
    age?: SubscriptionTierAge;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
