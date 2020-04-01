import { ClientOptions, ClientAllOptions, ClientFeatureOptions } from './Interfaces/ClientOptions';
import HttpClient from './Interfaces/HttpClient';
import Auth from './Resources/Auth/Auth';
import Users from './Resources/Users/Users';
import UserSubscriptions from './Resources/UserSubscriptions/UserSubscriptions';
import Basket from './Resources/Basket/Basket';
import Subscriptions from './Resources/Subscriptions/Subscriptions';
import SubscriptionAddons from './Resources/SubscriptionAddons/SubscriptionAddons';
import { WaccResources } from './Resources/Wacc';
export default class Client {
    auth: Auth;
    users: Users;
    userSubscriptions: UserSubscriptions;
    basket: Basket;
    subscriptions: Subscriptions;
    subscriptionAddons: SubscriptionAddons;
    wacc: WaccResources;
    protected httpClient: HttpClient;
    protected options: ClientAllOptions;
    constructor(httpClient: HttpClient, opts?: ClientOptions);
    getHttpClient(): HttpClient;
    loadResources(): void;
    getBasePath(): string;
    features(): ClientFeatureOptions;
    setDebug(flag: boolean): void;
}
