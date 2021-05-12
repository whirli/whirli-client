import Client from '../../Client';
import Baskets from './Baskets';
import Gifts from './Gifts';
import ShippingAddons from './ShippingAddons';
import ReasonsForEnd from './ReasonsForEnd';
import Subscriptions from './Subscriptions';
export interface GuestsResources {
    baskets: Baskets;
    gifts: Gifts;
    shippingAddons: ShippingAddons;
    reasonsForEnd: ReasonsForEnd;
    subscriptions: Subscriptions;
}
export declare function loadGuestsResources(client: Client): GuestsResources;
