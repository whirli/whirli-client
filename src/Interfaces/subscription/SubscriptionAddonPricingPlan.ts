import { SubscriptionIntervalLength } from './Subscription';

export default interface SubscriptionAddonPricingPlan {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    name?: string;
    stripeId?: string;
    cost?: number;
    quantity?: number;
    intervalLength?: SubscriptionIntervalLength;
    intervalUnit?: string;
    archivedAt?: Date | string | null;
    subscriptionAddonId?: string;
}
