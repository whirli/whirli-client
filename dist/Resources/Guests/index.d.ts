import Client from '../../Client';
import Baskets from './Baskets';
import Gifts from './Gifts';
import ShippingAddons from './ShippingAddons';
import ReasonsForEnd from './ReasonsForEnd';
import Subscriptions from './Subscriptions';
import PaymentIntents from './PaymentIntents';
export interface GuestsResources {
    baskets: Baskets;
    gifts: Gifts;
    shippingAddons: ShippingAddons;
    reasonsForEnd: ReasonsForEnd;
    subscriptions: Subscriptions;
    paymentIntents: PaymentIntents;
}
export declare function loadGuestsResources(client: Client): GuestsResources;
