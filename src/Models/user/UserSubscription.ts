import UserSubscriptionInterface from '../../Interfaces/user/UserSubscription';

export default class UserSubscription {
    constructor(parameters: UserSubscriptionInterface) {
        Object.assign(this, parameters);
    }
}
