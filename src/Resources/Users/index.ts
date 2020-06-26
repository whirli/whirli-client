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
    public addresses: Addresses;
    public baskets: Baskets;
    public gifts: Gifts;
    public details: Details;
    public subscriptions: Subscriptions;
    public toybox: Toybox;
    public checkout: Checkout;
    public productLists: ProductLists;
    public orders: Orders;

    constructor(api: Client) {
        super(api);
        this.api = api;
        this.initialise();

        this.addresses = new Addresses(api);
        this.baskets = new Baskets(api);
        this.gifts = new Gifts(api);
        this.details = new Details(api);
        this.subscriptions = new Subscriptions(api);
        this.toybox = new Toybox(api);
        this.checkout = new Checkout(api);
        this.productLists = new ProductLists(api);
        this.orders = new Orders(api);
    }

    initialise(): void {
        this.resourcePath = '/users';
        this.defaultAccess = 'member';
    }

    public create: Function = this.createMethodFromPartialSpec({
        access: 'guest',
        method: 'POST',
        path: '/',
    });

    public claimGuestResources: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/claim',
    });

}
