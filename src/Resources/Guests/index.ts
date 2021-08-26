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

export function loadGuestsResources(client: Client): GuestsResources {
    return {
        baskets: new Baskets(client),
        gifts: new Gifts(client),
        shippingAddons: new ShippingAddons(client),
        reasonsForEnd: new ReasonsForEnd(client),
        subscriptions: new Subscriptions(client),
        paymentIntents: new PaymentIntents(client),
    };
}
