import Client from '../../Client';
import Basket from './Basket';
import Subscriptions from './Subscriptions';
import Toybox from './Toybox';
import Details from './Details';
import Create from './Create';
export default class User {
    basket: Basket;
    subscriptions: Subscriptions;
    toybox: Toybox;
    details: Details;
    create: Create;
    constructor(client: Client);
}
