import Client from '../../Client';
import Basket from './Basket/Basket';
import Subscriptions from './Subscriptions/Subscriptions';
import Toybox from './Toybox/Toybox';
export interface UserResources {
    basket: Basket;
    subscriptions: Subscriptions;
    toybox: Toybox;
}
export declare function loadUserResources(client: Client): UserResources;
