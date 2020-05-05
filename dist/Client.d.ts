import { ClientOptions, ClientAllOptions, ClientFeatureOptions } from './Interfaces/ClientOptions';
import HttpClient from './Interfaces/HttpClient';
import Auth from './Resources/Auth/Auth';
import Users from './Resources/Users/Users';
import Codes from './Resources/Codes/Codes';
import { SubscriptionsResources } from './Resources/Subscriptions';
import { WaccResources } from './Resources/Wacc';
import { GuestResources } from './Resources/Guest';
import { UserResources } from './Resources/User';
import Products from './Resources/Products/Products';
export default class Client {
    auth: Auth;
    users: Users;
    codes: Codes;
    products: Products;
    subscriptions: SubscriptionsResources;
    wacc: WaccResources;
    guest: GuestResources;
    user: UserResources;
    protected httpClient: HttpClient;
    protected options: ClientAllOptions;
    constructor(httpClient: HttpClient, opts?: ClientOptions);
    getHttpClient(): HttpClient;
    loadResources(): void;
    getBasePath(): string;
    features(): ClientFeatureOptions;
    setDebug(flag: boolean): void;
}
