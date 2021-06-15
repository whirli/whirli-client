import BaseTransformer from '../../../BaseTransformer';
import SubscriptionDiscountInterface from '../../../Interfaces/subscription/SubscriptionDiscount';
import SubscriptionDiscount from '../SubscriptionDiscount';
export default class SubscriptionDiscountTransformer extends BaseTransformer {
    mapData(subscriptionDiscount: SubscriptionDiscountInterface): SubscriptionDiscount;
}
