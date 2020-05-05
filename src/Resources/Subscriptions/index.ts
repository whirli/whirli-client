import Client from '../../Client';
import Addons from './SubscriptionAddons/SubscriptionAddons';
import Subscriptions from './Subscriptions';

export interface SubscriptionsResources {
    subscriptions: Subscriptions;
    addons: Addons;
}

export function loadSubscriptionsResources(client: Client): SubscriptionsResources {
    return {
        addons: new Addons(client),
        subscriptions: new Subscriptions(client),
    };
}
