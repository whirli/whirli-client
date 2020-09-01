export declare type SubscriptionTierOrder = 1 | 2 | 3 | 4;
export declare type SubscriptionTierAge = 0 | 1 | 2 | 3;
export interface APISubscriptionTier {
    id?: string;
    subscription_id?: string;
    order?: SubscriptionTierOrder;
    token_amount?: number;
    age_unit?: string;
    age?: SubscriptionTierAge;
    created_at?: Date | string;
    updated_at?: Date | string;
}
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
