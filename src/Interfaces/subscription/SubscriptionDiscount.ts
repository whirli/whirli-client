export type SubscriptionDiscountType = 'normal' | 'greater';
export type SubscriptionDiscountAttributionSource = 'influencers' | 'affiliates';
export type SubscriptionDiscountFrequencies = 1 | 6 | 12;

export default interface SubscriptionDiscount {
    id: string;
    code: string;
    type: SubscriptionDiscountType;
    redemptions: number;
    startDate?: Date | string;
    endDate?: Date | string;
    attributionSource?: SubscriptionDiscountAttributionSource;
    stripeCouponIds?: Array<string>;
    frequencies?: Array<SubscriptionDiscountFrequencies>;
    status: boolean;
    discount?: string;
    billingPlans?: Array<string>;
}

export interface SubscriptionDiscountSearch {
    id: string;
    code: string;
    type: SubscriptionDiscountType;
    redemptions: number;
    highlights?: [];
    startDate: Date | string | null;
    endDate: Date | string | null;
    frequencies: Array<SubscriptionDiscountFrequencies>;
    status: boolean;
    discount: string | null;
}
