import Client from '../../Client';
import Addons from './SubscriptionAddons/SubscriptionAddons';
import Subscriptions from './Subscriptions';
export interface SubscriptionsResources {
    subscriptions: Subscriptions;
    addons: Addons;
}
export declare function loadSubscriptionsResources(client: Client): SubscriptionsResources;
