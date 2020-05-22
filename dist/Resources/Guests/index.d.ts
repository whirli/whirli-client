import Client from '../../Client';
import Baskets from './Baskets';
import Gifts from './Gifts';
export interface GuestsResources {
    baskets: Baskets;
    gifts: Gifts;
}
export declare function loadGuestsResources(client: Client): GuestsResources;
