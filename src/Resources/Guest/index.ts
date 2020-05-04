import Client from '../../Client';
import Basket from './Basket/Basket';

export interface GuestResources {
    basket: Basket;
}

export function loadGuestResources(client: Client): GuestResources {
    return {
        basket: new Basket(client),
    };
}
