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
import WaitSpots from './WaitSpots';
import Orders from './Orders';
import Referral from './Referral';
import Card from './Card';
import MyPlaytime from './MyPlaytime';
import ChildProfiles from './ChildProfiles';
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
    public waitSpots: WaitSpots;
    public orders: Orders;
    public referral: Referral;
    public card: Card;
    public myPlaytime: MyPlaytime;
    public childProfiles: ChildProfiles;

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
        this.waitSpots = new WaitSpots(api);
        this.orders = new Orders(api);
        this.referral = new Referral(api);
        this.card = new Card(api);
        this.myPlaytime = new MyPlaytime(api);
        this.childProfiles = new ChildProfiles(api);
    }

    initialise(): void {
        this.resourcePath = '/';
        this.defaultAccess = 'member';
    }

    public user: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        access: 'auth',
        method: 'GET',
        path: 'user',
    });

    public create: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        access: 'guest',
        method: 'POST',
        path: 'users',
    });

    public claimGuestResources: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: 'users/claim',
    });

    public buyBoltOnGuestResources: (
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: 'users/buy-bolt-on',
    });
}
