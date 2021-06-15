import SubscriptionDiscountInterface from '../../Interfaces/subscription/SubscriptionDiscount';

export default class SubscriptionDiscount {
    constructor(parameters: SubscriptionDiscountInterface) {
        Object.assign(this, parameters);
    }
}
