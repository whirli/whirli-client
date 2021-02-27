import { SubscriptionPricingPlan } from './SubscriptionPricingPlan';
import SubscriptionTier from './SubscriptionTier';

export type SubscriptionIntervalLength = 1 | 6 | 12;

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
    wait_spots?: number;
    subscription_pricing_plans?: Array<SubscriptionPricingPlan>;
    subscription_tiers?: Array<SubscriptionTier>;
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
    waitSpots?: number;
    subscriptionPricingPlans?: Array<SubscriptionPricingPlan>;
    subscriptionTiers?: Array<SubscriptionTier>;
}
