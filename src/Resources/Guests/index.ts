import Client from '../../Client';
import Baskets from './Baskets';
import Gifts from './Gifts';
import ShippingAddons from './ShippingAddons';
import UndeliverableDate from './UndeliverableDate';

export interface GuestsResources {
    baskets: Baskets;
    gifts: Gifts;
    shippingAddons: ShippingAddons;
    undeliverableDates: UndeliverableDate;
}

export function loadGuestsResources(client: Client): GuestsResources {
    return {
        baskets: new Baskets(client),
        gifts: new Gifts(client),
        shippingAddons: new ShippingAddons(client),
        undeliverableDates: new UndeliverableDate(client),
    };
}
