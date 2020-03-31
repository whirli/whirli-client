import { SubscriptionPricingPlan } from './SubscriptionPricingPlan';
export interface APISubscription {
    id?: string;
    stripe_id?: string;
    name?: string;
    sub_title?: string;
    credits?: number;
    allowance_description?: string;
    credits_description?: string;
    icon_filename?: string;
    recommended?: number;
    active?: number;
    created_at?: Date;
    updated_at?: Date;
}
export interface Subscription {
    id?: string;
    stripeId?: string;
    name?: string;
    subTitle?: string;
    credits?: number;
    allowanceDescription?: string;
    creditsDescription?: string;
    iconFilename?: string;
    recommended?: number;
    active?: number;
    createdAt?: Date;
    updatedAt?: Date;
    pricingPlans?: Array<SubscriptionPricingPlan>;
}
