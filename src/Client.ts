import ApiOptions from './Interfaces/ApiOptions';
import HttpClient from './Interfaces/HttpClient';
import resources from './Resources';
import Auth from './Resources/wacc/Auth/auth';
import Search from './Resources/wacc/Search/search';
import ReturnOrders from './Resources/wacc/Returns/returnOrders';
import Users from './Resources/Users/users';
import Orders from './Resources/wacc/Orders/orders';
import WACCAuth from './Resources/wacc/Auth/auth';
import WACCSearch from './Resources/wacc/Search/search';
import WACCReturnOrders from './Resources/wacc/Returns/returnOrders';
import WACCUsers from './Resources/wacc/Users/users';
import WACCOrders from './Resources/wacc/Orders/orders';

interface WACC {
    users: WACCUsers;
    auth: WACCAuth;
    orders: WACCOrders;
    returnOrders: WACCReturnOrders;
    search: WACCSearch;
}

export default class Client {
    public search!: Search;
    public auth!: Auth;
    public returnOrders!: ReturnOrders;
    public users!: Users;
    public wacc!: WACC;

    public orders!: Orders;

    protected apiOptions: ApiOptions;
    protected httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.apiOptions = {
            apiVersion: 'v1',
            baseUrl: '/api',
            debug: false,
            version: '0.0.1',
        };
        this.httpClient = httpClient;
        this.loadResources();
    }

    getHttpClient(): HttpClient {
        return this.httpClient;
    }

    loadResources(): void {
        this.auth = new resources.Auth(this);
        this.orders = new resources.Orders(this);
        this.returnOrders = new resources.ReturnOrders(this);
        this.search = new resources.Search(this);
        this.users = new resources.Users(this);
        this.wacc = {
            auth: new resources.WACCAuth(this),
            orders: new resources.WACCOrders(this),
            returnOrders: new resources.WACCReturnOrders(this),
            search: new resources.WACCSearch(this),
            users: new resources.WACCUsers(this),
        };
    }

    getBasePath(): string {
        return `${this.apiOptions.baseUrl}/${this.apiOptions.apiVersion}`;
    }

    setDebug(flag: boolean): void {
        this.apiOptions.debug = flag;
    }
}
