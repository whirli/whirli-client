import { SubscriptionPricingPlan as SubscriptionPricingPlanInterface } from '../../Interfaces/subscription/SubscriptionPricingPlan';

export default class SubscriptionPricingPlan {
    constructor(parameters: SubscriptionPricingPlanInterface) {
        Object.assign(this, parameters);
    }
}
