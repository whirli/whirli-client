import Client from '../../Client';
import Basket from './Basket';
import Subscriptions from './Subscriptions';
import Toybox from './Toybox';
import Details from './Details';
import Create from './Create';
export default class User {
    basket: Basket;
    create: Create;
    details: Details;
    subscriptions: Subscriptions;
    toybox: Toybox;
    constructor(client: Client);
}
