import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Baskets from './Baskets';
import Gifts from './Gifts';
import Subscriptions from './Subscriptions';
import Toybox from './Toybox';
import Details from './Details';
import Addresses from './Addresses';
import ProductLists from './ProductLists';
import Orders from './Orders';
import OrderLines from './OrderLines';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Users extends AbstractResource {
    addresses: Addresses;
    baskets: Baskets;
    gifts: Gifts;
    details: Details;
    subscriptions: Subscriptions;
    toybox: Toybox;
    productLists: ProductLists;
    orders: Orders;
    orderLines: OrderLines;
    constructor(api: Client);
    initialise(): void;
    create: Function;
    claimGuestResources: (...args: HttpClientConfig) => HttpClientResponse;
}
