import Client from '../../Client';
import Basket from './Basket/Basket';

export interface UserResources {
    basket: Basket;
}

export function loadUserResources(client: Client): UserResources {
    return {
        basket: new Basket(client),
    };
}
