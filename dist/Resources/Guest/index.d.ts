import Client from '../../Client';
import Basket from './Basket/Basket';
export interface GuestResources {
    basket: Basket;
}
export declare function loadGuestResources(client: Client): GuestResources;
