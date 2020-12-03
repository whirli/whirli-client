import UserSubscriptionAddonInterface from '../../Interfaces/user/UserSubscriptionAddon';

export default class UserSubscriptionAddon {
    constructor(parameters: UserSubscriptionAddonInterface) {
        Object.assign(this, parameters);
    }
}
