import Client from '../../Client';
import AbstractResource from '../AbstractResource';
import Baskets from './Baskets';
import Gifts from './Gifts';
import Subscriptions from './Subscriptions';
import Toybox from './Toybox';
import Checkout from './Checkout';
import Details from './Details';
import Addresses from './Addresses';
import ProductLists from './ProductLists';
import Orders from './Orders';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Users extends AbstractResource {
    addresses: Addresses;
    baskets: Baskets;
    gifts: Gifts;
    details: Details;
    subscriptions: Subscriptions;
    toybox: Toybox;
    checkout: Checkout;
    productLists: ProductLists;
    orders: Orders;
    constructor(api: Client);
    initialise(): void;
    create: Function;
    claimGuestResources: (...args: HttpClientConfig) => HttpClientResponse;
}
