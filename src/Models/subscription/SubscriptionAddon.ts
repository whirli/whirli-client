import SubscriptionAddonInterface from '../../Interfaces/subscription/SubscriptionAddon';

export default class SubscriptionAddon {
    constructor(parameters: SubscriptionAddonInterface) {
        Object.assign(this, parameters);
    }
}
