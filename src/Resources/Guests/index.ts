import Client from '../../Client';
import Baskets from './Baskets';
import Gifts from './Gifts';
import MyPlaytime from './MyPlaytime';
import ShippingAddons from './ShippingAddons';
import ReasonsForEnd from './ReasonsForEnd';
import Subscriptions from './Subscriptions';

export interface GuestsResources {
    baskets: Baskets;
    gifts: Gifts;
    myPlayTime: MyPlaytime;
    shippingAddons: ShippingAddons;
    reasonsForEnd: ReasonsForEnd;
    subscriptions: Subscriptions;
}

export function loadGuestsResources(client: Client): GuestsResources {
    return {
        baskets: new Baskets(client),
        gifts: new Gifts(client),
        myPlayTime: new MyPlaytime(client),
        shippingAddons: new ShippingAddons(client),
        reasonsForEnd: new ReasonsForEnd(client),
        subscriptions: new Subscriptions(client),
    };
}
