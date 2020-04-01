import { ClientOptions, ClientAllOptions, ClientFeatureOptions } from './Interfaces/ClientOptions';
import HttpClient from './Interfaces/HttpClient';
import Auth from './Resources/Auth/Auth';
import Users from './Resources/Users/Users';
import UserSubscriptions from './Resources/UserSubscriptions/UserSubscriptions';
import Subscriptions from './Resources/Subscriptions/Subscriptions';
import SubscriptionAddons from './Resources/SubscriptionAddons/SubscriptionAddons';
import { loadWaccResources, WaccResources } from './Resources/Wacc';

export default class Client {
    public auth!: Auth;
    public users!: Users;
    public userSubscriptions!: UserSubscriptions;
    public subscriptions!: Subscriptions;
    public subscriptionAddons!: SubscriptionAddons;
    public wacc!: WaccResources;

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
        this.userSubscriptions = new UserSubscriptions(this);
        this.subscriptions = new Subscriptions(this);
        this.subscriptionAddons = new SubscriptionAddons(this);
        this.wacc = loadWaccResources(this);
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
