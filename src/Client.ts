import { ClientOptions, ClientAllOptions, ClientFeatureOptions } from './Interfaces/ClientOptions';
import HttpClient from './Interfaces/HttpClient';
import Auth from './Resources/Auth/Auth';
import Users from './Resources/Users/Users';
import Codes from './Resources/Codes/Codes';
import { loadSubscriptionsResources, SubscriptionsResources } from './Resources/Subscriptions';
import { loadWaccResources, WaccResources } from './Resources/Wacc';
import { loadGuestResources, GuestResources } from './Resources/Guest';
import { loadUserResources, UserResources } from './Resources/User';
import Products from './Resources/Products/Products';

export default class Client {
    public auth!: Auth;
    public users!: Users;
    public codes!: Codes;
    public products!: Products;
    public subscriptions!: SubscriptionsResources;
    public wacc!: WaccResources;
    public guest!: GuestResources;
    public user!: UserResources;

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
        this.auth = new Auth(this);
        this.users = new Users(this);
        this.codes = new Codes(this);
        this.products = new Products(this);
        this.subscriptions = loadSubscriptionsResources(this);
        this.wacc = loadWaccResources(this);
        this.guest = loadGuestResources(this);
        this.user = loadUserResources(this);
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
