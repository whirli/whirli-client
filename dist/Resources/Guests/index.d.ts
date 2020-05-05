import Client from '../../Client';
import Baskets from './Baskets';
export interface GuestsResources {
    baskets: Baskets;
}
export declare function loadGuestsResources(client: Client): GuestsResources;
