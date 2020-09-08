import SubscriptionAddonPricingPlanInterface from '../../Interfaces/subscription/SubscriptionAddonPricingPlan';

export default class SubscriptionAddonPricingPlan {
    constructor(parameters: SubscriptionAddonPricingPlanInterface) {
        Object.assign(this, parameters);
    }
}
