import { ClientOptions, ClientAllOptions, ClientFeatureOptions } from './Interfaces/ClientOptions';
import HttpClient from './Interfaces/HttpClient';
import Api from './Resources/Api/Auth';
import Auth from './Resources/Auth/Auth';
import Codes from './Resources/Codes/Codes';
import Subscriptions from './Resources/Subscriptions';
import { WaccResources } from './Resources/Wacc';
import { GuestsResources } from './Resources/Guests';
import Users from './Resources/Users';
import Gift from './Resources/Gift/Gift';
import Products from './Resources/Products';
import Contact from './Resources/Contact/Contact';
import ProductLists from './Resources/ProductLists/ProductLists';
import MyPlaytime from './Resources/Users/MyPlaytime';
import UndeliverableDates from './Resources/UndeliverableDates/UnderliverableDates';
import AttributionSource from './Resources/AttributionSource/AttributionSource';
export default class Client {
    api: Api;
    auth: Auth;
    codes: Codes;
    products: Products;
    subscriptions: Subscriptions;
    wacc: WaccResources;
    guests: GuestsResources;
    users: Users;
    gift: Gift;
    contact: Contact;
    productLists: ProductLists;
    undeliverableDates: UndeliverableDates;
    myPlaytime: MyPlaytime;
    attributionSource: AttributionSource;
    protected httpClient: HttpClient;
    protected options: ClientAllOptions;
    constructor(httpClient: HttpClient, opts?: ClientOptions);
    getHttpClient(): HttpClient;
    loadResources(): void;
    getBasePath(): string;
    features(): ClientFeatureOptions;
    setDebug(flag: boolean): void;
}
