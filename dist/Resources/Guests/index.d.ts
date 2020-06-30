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
export declare function loadGuestsResources(client: Client): GuestsResources;
