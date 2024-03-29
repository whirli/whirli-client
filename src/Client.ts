import { ClientOptions, ClientAllOptions, ClientFeatureOptions } from './Interfaces/ClientOptions';
import HttpClient from './Interfaces/HttpClient';
import Api from './Resources/Api/Auth';
import Auth from './Resources/Auth/Auth';
import Codes from './Resources/Codes/Codes';
import Subscriptions from './Resources/Subscriptions';
import { loadWaccResources, WaccResources } from './Resources/Wacc';
import { loadGuestsResources, GuestsResources } from './Resources/Guests';
import Users from './Resources/Users';
import Gift from './Resources/Gift/Gift';
import Products from './Resources/Products';
import Contact from './Resources/Contact/Contact';
import ProductLists from './Resources/ProductLists/ProductLists';
import MyPlaytime from './Resources/Users/MyPlaytime';
import UndeliverableDates from './Resources/UndeliverableDates/UnderliverableDates';
import AttributionSource from './Resources/AttributionSource/AttributionSource';

export default class Client {
    public api!: Api;
    public auth!: Auth;
    public codes!: Codes;
    public products!: Products;
    public subscriptions!: Subscriptions;
    public wacc!: WaccResources;
    public guests!: GuestsResources;
    public users!: Users;
    public gift!: Gift;
    public contact!: Contact;
    public productLists!: ProductLists;
    public undeliverableDates!: UndeliverableDates;
    public myPlaytime!: MyPlaytime;
    public attributionSource!: AttributionSource;

    protected httpClient: HttpClient;
    protected options: ClientAllOptions = {
        apiVersion: 'v1',
        baseUrl: '/api',
        debug: false,
        version: '0.0.1',
        features: {
            trimTrailingSlash: true,
        },
    };

    constructor(httpClient: HttpClient, opts: ClientOptions = {}) {
        this.options = Object.assign(this.options, opts);
        this.httpClient = httpClient;
        this.loadResources();
    }

    getHttpClient(): HttpClient {
        return this.httpClient;
    }

    loadResources(): void {
        this.api = new Api(this);
        this.auth = new Auth(this);
        this.codes = new Codes(this);
        this.products = new Products(this);
        this.subscriptions = new Subscriptions(this);
        this.wacc = loadWaccResources(this);
        this.guests = loadGuestsResources(this);
        this.users = new Users(this);
        this.gift = new Gift(this);
        this.contact = new Contact(this);
        this.productLists = new ProductLists(this);
        this.undeliverableDates = new UndeliverableDates(this);
        this.attributionSource = new AttributionSource(this);
    }

    getBasePath(): string {
        return `${this.options.baseUrl}/${this.options.apiVersion}`;
    }

    features(): ClientFeatureOptions {
        return this.options.features;
    }

    setDebug(flag: boolean): void {
        this.options.debug = flag;
    }
}
