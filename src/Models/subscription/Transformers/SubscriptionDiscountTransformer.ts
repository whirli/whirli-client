import BaseTransformer from '../../../BaseTransformer';
import SubscriptionDiscountInterface from '../../../Interfaces/subscription/SubscriptionDiscount';
import SubscriptionDiscount from '../SubscriptionDiscount';

export default class SubscriptionDiscountTransformer extends BaseTransformer {
    mapData(subscriptionDiscount: SubscriptionDiscountInterface): SubscriptionDiscount {
        return new SubscriptionDiscount({
            id: subscriptionDiscount.id,
            code: subscriptionDiscount.code,
            type: subscriptionDiscount.type,
            redemptions: subscriptionDiscount.redemptions,
            startDate: subscriptionDiscount.startDate,
            endDate: subscriptionDiscount.endDate,
            attributionSource: subscriptionDiscount.attributionSource,
            stripeCouponIds: subscriptionDiscount.stripeCouponIds,
            frequencies: subscriptionDiscount.frequencies,
            status: subscriptionDiscount.status,
            discount: subscriptionDiscount.discount,
            billingPlans: subscriptionDiscount.billingPlans,
        });
    }
}
