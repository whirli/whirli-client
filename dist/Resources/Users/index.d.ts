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
    addresses: Addresses;
    baskets: Baskets;
    gifts: Gifts;
    details: Details;
    subscriptions: Subscriptions;
    toybox: Toybox;
    checkout: Checkout;
    productLists: ProductLists;
    waitSpots: WaitSpots;
    orders: Orders;
    referral: Referral;
    card: Card;
    myPlaytime: MyPlaytime;
    childProfiles: ChildProfiles;
    constructor(api: Client);
    initialise(): void;
    user: (...args: HttpClientConfig) => HttpClientResponse;
    create: (...args: HttpClientConfig) => HttpClientResponse;
    claimGuestResources: (...args: HttpClientConfig) => HttpClientResponse;
    buyBoltOnGuestResources: (...args: HttpClientConfig) => HttpClientResponse;
}
