import Client from '../../Client';
import Basket from './Basket/Basket';
import Subscriptions from './Subscriptions/Subscriptions';
import Toybox from './Toybox/Toybox';

export interface UserResources {
    basket: Basket;
    subscriptions: Subscriptions;
    toybox: Toybox;
}

export function loadUserResources(client: Client): UserResources {
    return {
        basket: new Basket(client),
        subscriptions: new Subscriptions(client),
        toybox: new Toybox(client),
    };
}
