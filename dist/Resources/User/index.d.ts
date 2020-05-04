import Client from '../../Client';
import Basket from './Basket/Basket';
export interface UserResources {
    basket: Basket;
}
export declare function loadUserResources(client: Client): UserResources;
