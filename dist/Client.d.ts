import { ClientOptions, ClientAllOptions, ClientFeatureOptions } from './Interfaces/ClientOptions';
import HttpClient from './Interfaces/HttpClient';
import Auth from './Resources/Auth/Auth';
import Codes from './Resources/Codes/Codes';
import Subscriptions from './Resources/Subscriptions';
import { WaccResources } from './Resources/Wacc';
import { GuestResources } from './Resources/Guest';
import User from './Resources/User';
import Products from './Resources/Products/Products';
export default class Client {
    auth: Auth;
    codes: Codes;
    products: Products;
    subscriptions: Subscriptions;
    wacc: WaccResources;
    guest: GuestResources;
    user: User;
    protected httpClient: HttpClient;
    protected options: ClientAllOptions;
    constructor(httpClient: HttpClient, opts?: ClientOptions);
    getHttpClient(): HttpClient;
    loadResources(): void;
    getBasePath(): string;
    features(): ClientFeatureOptions;
    setDebug(flag: boolean): void;
}
