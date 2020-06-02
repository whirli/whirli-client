import { ClientOptions, ClientAllOptions, ClientFeatureOptions } from './Interfaces/ClientOptions';
import HttpClient from './Interfaces/HttpClient';
import Auth from './Resources/Auth/Auth';
import Codes from './Resources/Codes/Codes';
import Subscriptions from './Resources/Subscriptions';
import { WaccResources } from './Resources/Wacc';
import { GuestsResources } from './Resources/Guests';
import Users from './Resources/Users';
import Products from './Resources/Products';
export default class Client {
    auth: Auth;
    codes: Codes;
    products: Products;
    subscriptions: Subscriptions;
    wacc: WaccResources;
    guests: GuestsResources;
    users: Users;
    protected httpClient: HttpClient;
    protected options: ClientAllOptions;
    constructor(httpClient: HttpClient, opts?: ClientOptions);
    getHttpClient(): HttpClient;
    loadResources(): void;
    getBasePath(): string;
    features(): ClientFeatureOptions;
    setDebug(flag: boolean): void;
}
