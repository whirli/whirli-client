import Client from '../../Client';
import Baskets from './Baskets';
import Gifts from './Gifts';
import ShippingAddons from './ShippingAddons';
import ReasonsForEnd from './ReasonsForEnd';

export interface GuestsResources {
    baskets: Baskets;
    gifts: Gifts;
    shippingAddons: ShippingAddons;
    reasonsForEnd: ReasonsForEnd;
}

export function loadGuestsResources(client: Client): GuestsResources {
    return {
        baskets: new Baskets(client),
        gifts: new Gifts(client),
        shippingAddons: new ShippingAddons(client),
        reasonsForEnd: new ReasonsForEnd(client),
    };
}
