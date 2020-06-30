import Client from '../../Client';
import Baskets from './Baskets';
import Gifts from './Gifts';
import ShippingAddons from './ShippingAddons';
export interface GuestsResources {
    baskets: Baskets;
    gifts: Gifts;
    shippingAddons: ShippingAddons;
}
export declare function loadGuestsResources(client: Client): GuestsResources;
